---
title: Self hosted n8n
description: A guide to Self hosted n8n on arm64v8 vps with postgre 18.
---
[Explore n8n Docs: Your Resource for Workflow Automation and Integrations \| n8n Docs](https://docs.n8n.io/)  
# files tree
```shell
ubuntu@mainserver:~/n8n.webhook$ tree
.
├── data
│   ├── n8n  [error opening dir]
│   └── postgres18  [error opening dir]
├── db.env
├── docker-compose.yml
└── n8n.env
```
# docker compose file
```yaml
services:
  postgres:
    image: postgres:18.1
    restart: unless-stopped
    env_file:
      - db.env
    # Postgres 18+: mount the parent directory (/var/lib/postgresql)
    volumes:
      - /home/ubuntu/n8n.webhook/data/postgres18:/var/lib/postgresql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U $$POSTGRES_USER -d $$POSTGRES_DB"]
      interval: 10s
      timeout: 5s
      retries: 10

  n8n:
    image: docker.n8n.io/n8nio/n8n:2.4.4
    depends_on:
      postgres:
        condition: service_healthy
    restart: unless-stopped
    ports:
      - "127.0.0.1:5678:5678"
    env_file:
      - n8n.env
      - db.env
    volumes:
      - /home/ubuntu/n8n.webhook/data/n8n:/home/node/.n8n

volumes:
  n8n_data:
  postgres_data_18:

```

# environment 
```yaml
# db.env
# ---------- Postgres ----------
POSTGRES_USER=<replace it>
POSTGRES_PASSWORD=<replace it>
POSTGRES_DB=n8n
```

```yaml
# n8n.env
TZ=Australia/Melbourne
GENERIC_TIMEZONE=Australia/Melbourne

N8N_HOST=n8n.greenhuang.com
N8N_PROTOCOL=https
N8N_PORT=5678
N8N_EDITOR_BASE_URL=https://n8n.greenhuang.com
WEBHOOK_URL=https://n8n.greenhuang.com/

DATABASE_TYPE=postgresdb
DB_POSTGRESDB_HOST=postgres
DB_POSTGRESDB_PORT=5432
DB_POSTGRESDB_DATABASE=n8n
DB_POSTGRESDB_USER=<replace it>
DB_POSTGRESDB_PASSWORD=<replace it>

EXECUTIONS_PROCESS=main
N8N_DIAGNOSTICS_ENABLED=false

# Recommended hardening in v2.x
N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true

# Enable Execute Command (and keep LocalFileTrigger disabled)
# n8n docs: set NODES_EXCLUDE="[]" to enable all, or remove only what you need. :contentReference[oaicite:5]{index=5}
NODES_EXCLUDE=["n8n-nodes-base.localFileTrigger"]

# Optional belt-and-suspenders (commonly referenced for Docker setups)
N8N_EXECUTE_COMMAND_ENABLED=true

```

# other settings
set up permission  
```shell
sudo chown -R 1000:1000 /home/ubuntu/n8n.webhook/data/n8n
sudo chmod -R u+rwX,go-rwx /home/ubuntu/n8n.webhook/data/n8n

sudo chown -R 999:999 /home/ubuntu/n8n.webhook/data/postgres18
sudo chmod -R u+rwX,go-rwx /home/ubuntu/n8n.webhook/data/postgres18

```

# setup nginx reverse proxy  
locate in `/etc/nginx/sites-enabled/<yourdomain>.conf`  

```yaml
# /etc/nginx/sites-enabled/bitwarden.greenhuang.com.conf
# n8n server
server {
    listen 80;
    listen [::]:80;
    server_name n8n.greenhuang.com;

    return 302 https://$server_name$request_uri;
}

server {

    # SSL configuration

    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate         /home/ubuntu/ssl/cert.pem;
    ssl_certificate_key     /home/ubuntu/ssl/key.pem;

    server_name n8n.greenhuang.com;

    # CORS for everything under this vhost
    add_header Access-Control-Allow-Origin  http://localhost:3000 always;
    add_header Access-Control-Allow-Methods "GET, POST, OPTIONS" always;
    add_header Access-Control-Allow-Headers "Content-Type"       always;


    # prevent search indexing
    add_header X-Robots-Tag "noindex, nofollow, noarchive, nosnippet, noimageindex" always;

    # block bots explicitly
    location = /robots.txt {
        return 200 "User-agent: *\nDisallow: /\n";
        add_header Content-Type text/plain;
    }


    
	location / {
        proxy_pass http://localhost:5678;
        proxy_set_header   Host $host;
        proxy_set_header Origin https://$host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-Proto https;
        proxy_set_header   X-Forwarded-Host $host;
        proxy_http_version 1.1; # Required for WebSocket
        proxy_set_header Upgrade $http_upgrade; # Required for WebSocket
        proxy_set_header Connection "upgrade"; # Required for WebSocket
        # add_header 'Access-Control-Allow-Origin' 'http://localhost:3000' always;
        # add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
        # add_header 'Access-Control-Allow-Headers' 'Content-Type' always;
    }

    location /webhook/ {
        proxy_hide_header Access-Control-Allow-Origin;
        proxy_pass        http://localhost:5678;
        if ($request_method = OPTIONS) {
            add_header Access-Control-Max-Age 300 always;
            return 204;
        }
    }

}




```

check and apply it   
```shell
sudo nginx -t && sudo systemctl reload nginx
```

