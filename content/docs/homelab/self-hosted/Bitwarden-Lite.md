---
title: Self hosted Bitwarden-Lite
description: A guide to Self hosted Bitwarden-Lite on arm64v8 vps with postgre 18.
---
[How to Install Bitwarden Lite on Your Synology NAS – Marius Hosting](https://mariushosting.com/how-to-install-bitwarden-lite-on-your-synology-nas/)  
# Recommended architecture (secure-by-default)

- Public Internet → **Reverse proxy (TLS)** → Bitwarden Lite container
- PostgreSQL container on a **private Docker network only** (no public port)PostgreSQL 
- Backups：
    
    - **pg_dump** (database) + backup of `/etc/bitwarden` volume (config/data)**
        
    - Store offsite to **S3** or **Google Drive via rclone**


# OS + network hardening baseline (VPS)

```shell
sudo apt update
sudo apt upgrade

# If you want Ubuntu to also handle dependency changes (install/remove packages as required),

sudo apt full-upgrade

sudo do-release-upgrade

sudo apt autoremove --purge

# optional
sudo apt-get install --install-recommends linux-generic-hwe-24.04

sudo reboot
```

# setup bitwarden server
## files tree
```shell
ubuntu@mainserver:~/bitwarden$ tree
.
├── backups
│   └── 
├── bw-backup.sh
├── bw_data
│   ├── bitwarden
│   │   └── 
│   ├── logs
│   │   └── 
│   └── pg  
│       └── 
├── db.env
├── delete-old-files.sh
├── docker-compose.yml
└── settings.env
```
## yaml
```yaml
---

services:
  bitwarden:
    depends_on:
      - db
    env_file:
      - settings.env
    image: ghcr.io/bitwarden/lite:2026.1.0
    restart: always
    ports:
      - "127.0.0.1:7500:8080"
    volumes:
      - /home/ubuntu/bitwarden/bw_data/bitwarden:/etc/bitwarden
      - /home/ubuntu/bitwarden/bw_data/logs:/var/log/bitwarden

  # PostgreSQL Example
  db:
    env_file:
      - db.env
    image: postgres:18.1
    restart: always
    volumes:
      - /home/ubuntu/bitwarden/bw_data/pg:/var/lib/postgresql


```

## environment files
```yaml
# db.env
# database
POSTGRES_DB=    <replace it>
POSTGRES_USER=    <replace it>
POSTGRES_PASSWORD=    <replace it>

# Hardening: create cluster with SCRAM auth (applies on first init only)
POSTGRES_INITDB_ARGS=--auth-host=scram-sha-256 --auth-local=scram-sha-256

```

```yaml
# settings.env
# bitwarden
BW_DOMAIN=    <replace it>

BW_INSTALLATION_ID=    <replace it>
BW_INSTALLATION_KEY=    <replace it>

BW_DB_PROVIDER=postgresql
BW_DB_SERVER=db
BW_DB_DATABASE=    <replace it>
BW_DB_USERNAME=    <replace it>
BW_DB_PASSWORD=    <replace it>

# After you’ve created your users, lock registration:
globalSettings__disableUserRegistration=true
```

## setup permission  
```shell
sudo chown -R 1000:1000 /home/ubuntu/bitwarden/bw_data/bitwarden /home/ubuntu/bitwarden/bw_data/logs
sudo chmod -R u+rwX,go-rwx /home/ubuntu/bitwarden/bw_data/bitwarden /home/ubuntu/bitwarden/bw_data/logs

sudo chown -R 999:999 /home/ubuntu/bitwarden/bw_data/pg
sudo chmod -R u+rwX,go-rwx /home/ubuntu/bitwarden/bw_data/pg

```

apply and run it  
```shell
docker compose pull
docker compose up -d

```
## setup reverse proxy
locate in `/etc/nginx/sites-enabled/<yourdomain>.conf`  

```yaml
# /etc/nginx/sites-enabled/bitwarden.greenhuang.com.conf
server {
    listen 80;
    listen [::]:80;
    server_name bitwarden.greenhuang.com;

    return 302 https://$server_name$request_uri;
}

server {

    # SSL configuration

    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate         /home/ubuntu/ssl/cert.pem;
    ssl_certificate_key     /home/ubuntu/ssl/key.pem;

    server_name bitwarden.greenhuang.com;

    # prevent search indexing
    add_header X-Robots-Tag "noindex, nofollow, noarchive, nosnippet, noimageindex" always;

    # block bots explicitly
    location = /robots.txt {
        return 200 "User-agent: *\nDisallow: /\n";
        add_header Content-Type text/plain;
    }

    
	location / {
        proxy_pass http://localhost:7500;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}


```

check and apply it   
```shell
sudo nginx -t && sudo systemctl reload nginx
```
# Bitwarden Lite + Postgres 18 bind-mount + backups (host folders + ACL + n8n-friendly)
## Assumptions
- tack directory: `/home/ubuntu/bitwarden`
- Host data dirs (bind mounts):
    
    - `/home/ubuntu/bitwarden/bw_data/bitwarden` → `/etc/bitwarden`
        
    - `/home/ubuntu/bitwarden/bw_data/logs` → `/var/log/bitwarden`
        
    - `/home/ubuntu/bitwarden/bw_data/pg` → `/var/lib/postgresql` (Postgres 18+)
        
- Users:
    
    - `ubuntu` = UID **1001**
        
    - `n8n` container runs as UID **1000**
        
- Postgres container user commonly uses UID/GID **999** (so the host `pg` directory must be writable by 999:999).

## One-time setup
Install ACL tools  
```shell
sudo apt-get update
sudo apt-get install -y acl

```

Create directories  
```shell
mkdir -p /home/ubuntu/bitwarden/bw_data/bitwarden \
         /home/ubuntu/bitwarden/bw_data/logs \
         /home/ubuntu/bitwarden/bw_data/pg \
         /home/ubuntu/bitwarden/backups

```

Ownership + base permissions  
```shell
# Bitwarden persisted state + logs owned by ubuntu
sudo chown -R ubuntu:ubuntu \
  /home/ubuntu/bitwarden/bw_data/bitwarden \
  /home/ubuntu/bitwarden/bw_data/logs \
  /home/ubuntu/bitwarden/backups

# Postgres data owned by container UID/GID (commonly 999:999)
sudo chown -R 999:999 /home/ubuntu/bitwarden/bw_data/pg

# Base perms (ACL will grant extra access)
sudo chmod 750 /home/ubuntu/bitwarden/bw_data/bitwarden \
               /home/ubuntu/bitwarden/bw_data/logs \
               /home/ubuntu/bitwarden/backups

sudo chmod 700 /home/ubuntu/bitwarden/bw_data/pg

# Allow running docker/compose without sudo (for ubuntu) log out/in to apply group change
sudo usermod -aG docker ubuntu 

```

ACLs so uid 1000 + 1001 can access Bitwarden state/logs (and inherit)  
```shell
# Existing files/dirs: allow both uid 1000 and 1001 read/write (plus traverse on dirs)
sudo setfacl -R -m u:1000:rwX,u:1001:rwX \
  /home/ubuntu/bitwarden/bw_data/bitwarden \
  /home/ubuntu/bitwarden/bw_data/logs

# Default ACL (inherit for new files/dirs created under these folders)
sudo setfacl -R -d -m u:1000:rwX,u:1001:rwX \
  /home/ubuntu/bitwarden/bw_data/bitwarden \
  /home/ubuntu/bitwarden/bw_data/logs

# ACLs for backups folder
sudo setfacl -m u:1000:rwx,u:1001:rwx /home/ubuntu/bitwarden/backups
sudo setfacl -d -m u:1000:rwx,u:1001:rwx /home/ubuntu/bitwarden/backups

```

Script permissions  
```shell
chmod +x /home/ubuntu/bitwarden/bw-backup.sh
chmod +x /home/ubuntu/bitwarden/delete-old-files.sh

# Allow both uid 1000 and 1001 to execute the scripts
sudo setfacl -m u:1000:rwx,u:1001:rwx /home/ubuntu/bitwarden/bw-backup.sh

sudo setfacl -m u:1000:rwx,u:1001:rwx /home/ubuntu/bitwarden/delete-old-files.sh

```

## backup flows
### backup for database and bitwarden data
how to use  
```shell
bash /home/ubuntu/bitwarden/bw-backup.sh 20260124T020000Z
```



```shell
#!/usr/bin/env bash
# /home/ubuntu/bitwarden/bw-backup.sh
#
# Usage:
#   bash /home/ubuntu/bitwarden/bw-backup.sh 20260124T020000Z
#
# What it does:
#  1) Creates /home/ubuntu/bitwarden/backups/${DATETIME}/ (replaces if exists)
#  2) Dumps Postgres via pg_dump (inside compose service "db") -> sql.gz in that folder
#  3) Archives /home/ubuntu/bitwarden/bw_data/bitwarden -> etc-bitwarden.tar.gz in that folder
#  4) Creates a single bundle archive of the whole ${DATETIME}/ folder:
#        /home/ubuntu/bitwarden/backups/${DATETIME}.tar.gz
#     (bundle is placed next to the folder to avoid self-including recursion)

# Re-exec with bash if someone runs "sh bw-backup.sh ..."
if [ -z "${BASH_VERSION:-}" ]; then
  exec /usr/bin/env bash "$0" "$@"
fi

set -euo pipefail
umask 027

DATETIME="${1:-}"
if [[ -z "${DATETIME}" ]]; then
  echo "Usage: $0 <datetime>"
  echo "Example: $0 20260124T020000Z"
  exit 2
fi

# Basic input safety (avoid path traversal)
if [[ "${DATETIME}" == *"/"* || "${DATETIME}" == *".."* ]]; then
  echo "Error: datetime must not contain '/' or '..'"
  exit 2
fi

STACK_DIR="/home/ubuntu/bitwarden"
BACKUP_BASE="${STACK_DIR}/backups"
OUT_DIR="${BACKUP_BASE}/${DATETIME}"

BW_ETC_HOST="/home/ubuntu/bitwarden/bw_data/bitwarden"   # bind mount -> /etc/bitwarden
BUNDLE_TGZ="${BACKUP_BASE}/${DATETIME}.tar.gz"

cd "${STACK_DIR}"

# Ensure backup base exists
if [[ ! -d "${BACKUP_BASE}" ]]; then
  echo "Error: ${BACKUP_BASE} does not exist. Create it first."
  exit 3
fi

# Replace existing folder + bundle if rerun with same DATETIME
rm -rf "${OUT_DIR}"
rm -f "${BUNDLE_TGZ}"

mkdir -p "${OUT_DIR}"
chmod 750 "${OUT_DIR}"

# Sanity checks (Bitwarden persisted state)
if [[ ! -d "${BW_ETC_HOST}" ]]; then
  echo "Error: ${BW_ETC_HOST} not found. Is your bind mount correct?"
  exit 4
fi

# Capture metadata (helpful for restore)
{
  echo "backup_datetime=${DATETIME}"
  echo "created_utc=$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "stack_dir=${STACK_DIR}"
  echo "compose_project_dir=${PWD}"
} > "${OUT_DIR}/meta.txt"

# Read DB/user from the running container environment
DB_NAME="$(docker compose exec -T db sh -lc 'printf "%s" "${POSTGRES_DB:-}"')"
DB_USER="$(docker compose exec -T db sh -lc 'printf "%s" "${POSTGRES_USER:-}"')"

if [[ -z "${DB_NAME}" || -z "${DB_USER}" ]]; then
  echo "Error: POSTGRES_DB/POSTGRES_USER not found in db container env. Check db.env."
  exit 5
fi

{
  echo "POSTGRES_DB=${DB_NAME}"
  echo "POSTGRES_USER=${DB_USER}"
} >> "${OUT_DIR}/meta.txt"

########################################
# 1) PostgreSQL dump -> SQL.GZ
########################################
SQL_GZ="${OUT_DIR}/bitwarden-${DATETIME}.sql.gz"
echo "Creating SQL dump to: ${SQL_GZ}"

# pg_dump makes a consistent export while the DB is being used concurrently.
docker compose exec -T db sh -lc '
  set -e
  export PGPASSWORD="${POSTGRES_PASSWORD:-}"
  pg_dump -U "${POSTGRES_USER}" -d "${POSTGRES_DB}" --no-owner --no-privileges --format=plain
' | gzip -9 > "${SQL_GZ}"

chmod 640 "${SQL_GZ}"

########################################
# 2) Archive /etc/bitwarden (host bind mount) -> tar.gz
########################################
ETC_TGZ="${OUT_DIR}/etc-bitwarden-${DATETIME}.tar.gz"
echo "Archiving Bitwarden persisted state to: ${ETC_TGZ}"

# Use -C so the archive has clean relative paths
tar -C "${BW_ETC_HOST}" -czf "${ETC_TGZ}" .
chmod 640 "${ETC_TGZ}"

########################################
# 3) Checksums for the individual artifacts
########################################
sha256sum "${SQL_GZ}" "${ETC_TGZ}" > "${OUT_DIR}/sha256sums.txt"
chmod 640 "${OUT_DIR}/sha256sums.txt"
chmod 640 "${OUT_DIR}/meta.txt"

########################################
# 4) Bundle the whole ${DATETIME}/ folder into a single file for upload
########################################
echo "Creating single upload bundle: ${BUNDLE_TGZ}"
tar -C "${BACKUP_BASE}" -czf "${BUNDLE_TGZ}" "${DATETIME}"
chmod 640 "${BUNDLE_TGZ}"
sha256sum "${BUNDLE_TGZ}" > "${BUNDLE_TGZ}.sha256"
chmod 640 "${BUNDLE_TGZ}.sha256"

echo "Backup complete:"
echo "  Folder: ${OUT_DIR}"
echo "  Bundle: ${BUNDLE_TGZ}"


```

### delete files and folder older than 30 days
how to use  
```shell
# test run
DRY_RUN=1 bash /home/ubuntu/bitwarden/delete-old-files.sh 20270124T020000Z

# run it n8n workflow
bash /home/ubuntu/bitwarden/delete-old-files.sh 20260124T020000Z
```

```shell
#!/usr/bin/env bash
# /home/ubuntu/bitwarden/delete-old-files.sh
#
# Permanently delete anything in /home/ubuntu/bitwarden/backups that is older than
# N days from the provided datetime (UTC).
#
# Usage:
#   bash /home/ubuntu/bitwarden/delete-old-files.sh 20260124T020000Z
#
# Options:
#   DAYS=30        Number of days to keep (default 30)
#   DRY_RUN=1      Only print what would be deleted
#
# Notes:
# - Uses find timestamp comparison (-newermt). :contentReference[oaicite:4]{index=4}
# - Uses GNU date parsing/epoch conversion. :contentReference[oaicite:5]{index=5}

# Re-exec with bash if someone runs "sh ..."
if [ -z "${BASH_VERSION:-}" ]; then
  exec /usr/bin/env bash "$0" "$@"
fi

set -euo pipefail

DATETIME="${1:-}"
DAYS="${DAYS:-30}"
DRY_RUN="${DRY_RUN:-0}"

BACKUP_BASE="/home/ubuntu/bitwarden/backups"

usage() {
  echo "Usage: $0 <datetime like 20260124T020000Z>"
  echo "Env:   DAYS=30 (default), DRY_RUN=1"
}

# Validate input
if [[ -z "${DATETIME}" ]]; then
  usage
  exit 2
fi

if ! [[ "${DATETIME}" =~ ^[0-9]{8}T[0-9]{6}Z$ ]]; then
  echo "Error: datetime must match YYYYMMDDTHHMMSSZ (e.g. 20260124T020000Z)"
  exit 2
fi

if ! [[ "${DAYS}" =~ ^[0-9]+$ ]]; then
  echo "Error: DAYS must be an integer"
  exit 2
fi

if [[ ! -d "${BACKUP_BASE}" ]]; then
  echo "Error: backup base does not exist: ${BACKUP_BASE}"
  exit 3
fi

# Convert YYYYMMDDTHHMMSSZ -> YYYY-MM-DDTHH:MM:SSZ for GNU date parsing
ISO_REF="${DATETIME:0:4}-${DATETIME:4:2}-${DATETIME:6:2}T${DATETIME:9:2}:${DATETIME:11:2}:${DATETIME:13:2}Z"

REF_EPOCH="$(date -u --date "${ISO_REF}" +%s)"
CUTOFF_EPOCH="$(( REF_EPOCH - (DAYS * 86400) ))"

# Build an ISO cutoff timestamp for find -newermt
CUTOFF_ISO="$(date -u --date "@${CUTOFF_EPOCH}" +%Y-%m-%dT%H:%M:%SZ)"

echo "Reference datetime (UTC): ${ISO_REF}"
echo "Keeping last ${DAYS} day(s); deleting items with mtime <= ${CUTOFF_ISO}"
echo "Backup base: ${BACKUP_BASE}"

# Collect targets older-or-equal to cutoff
mapfile -d '' TARGETS < <(
  find "${BACKUP_BASE}" -mindepth 1 -maxdepth 1 \
    -not -newermt "${CUTOFF_ISO}" -print0
)

if [[ "${#TARGETS[@]}" -eq 0 ]]; then
  echo "Nothing to delete."
  exit 0
fi

echo "Targets:"
for p in "${TARGETS[@]}"; do
  echo "  - ${p}"
done

if [[ "${DRY_RUN}" == "1" ]]; then
  echo "DRY_RUN=1 set; not deleting."
  exit 0
fi

# Delete
for p in "${TARGETS[@]}"; do
  # safety: refuse anything outside BACKUP_BASE
  case "${p}" in
    "${BACKUP_BASE}/"*) ;;
    *)
      echo "Safety stop: refusing to delete outside ${BACKUP_BASE}: ${p}"
      exit 10
      ;;
  esac

  rm -rf -- "${p}"
done

echo "Delete complete."

```


