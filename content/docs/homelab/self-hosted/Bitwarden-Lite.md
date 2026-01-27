---
title: Self hosted Bitwarden-Lite
description: A guide to Self hosted Bitwarden-Lite on arm64v8 vps with postgre 18.
---
PLEASE check this repo [GitHub - GreenH47/bitwarden-n8n-backup](https://github.com/GreenH47/bitwarden-n8n-backup)  for more details  


[How to Install Bitwarden Lite on Your Synology NAS – Marius Hosting](https://mariushosting.com/how-to-install-bitwarden-lite-on-your-synology-nas/)

[Lite Deployment \| Bitwarden](https://bitwarden.com/help/install-and-deploy-lite/)

[Lightweight and flexible: Bitwarden lite self-host deployment is now generally available \| Bitwarden](https://bitwarden.com/blog/lightweight-and-flexible-bitwarden-lite-self-host-deployment/)

# Recommended architecture (secure-by-default)

- Public Internet → **Reverse proxy (TLS)** → Bitwarden Lite container
- PostgreSQL container on a **private Docker network only** (no public port)PostgreSQL
- Backups：

  - **pg_dump** (database) + backup of `/etc/bitwarden` volume (config/data)
  - Store offsite to **S3**

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
# /etc/nginx/sites-enabled/<yourdomain>.conf
server {
    listen 80;
    listen [::]:80;
    server_name <yourdomain>;

    return 302 https://$server_name$request_uri;
}

server {

    # SSL configuration

    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate         /home/ubuntu/ssl/cert.pem;
    ssl_certificate_key     /home/ubuntu/ssl/key.pem;

    server_name <yourdomain>;

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
chmod +x /home/ubuntu/bitwarden/bw-backup.py
chmod +x /home/ubuntu/bitwarden/delete-old-files.py

# Allow both uid 1000 and 1001 to execute the scripts
sudo setfacl -m u:1000:rwx,u:1001:rwx /home/ubuntu/bitwarden/bw-backup.py

sudo setfacl -m u:1000:rwx,u:1001:rwx /home/ubuntu/bitwarden/delete-old-files.py

```

## backup flows

### backup for database and bitwarden data

how to use

```shell
python3 /home/ubuntu/bitwarden/bw-backup.py 20260124T020000Z
```

```python
#!/usr/bin/env python3
"""
/home/ubuntu/bitwarden/bw-backup.py

Usage:
  python3 /home/ubuntu/bitwarden/bw-backup.py 20260124T020000Z

Output (stdout):
  {"status":"success","message":"..."}  OR  {"status":"failure","message":"..."}
"""

from __future__ import annotations

import gzip
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import tarfile
from datetime import datetime, timezone
from pathlib import Path


# =========================
# CONFIG (edit these paths)
# =========================
STACK_DIR = Path("/home/ubuntu/bitwarden")                 # docker compose project directory
BACKUP_BASE = STACK_DIR / "backups"                        # must exist
BW_ETC_HOST = STACK_DIR / "bw_data" / "bitwarden"          # persisted BW state (bind mount)
DB_SERVICE = "db"                                          # docker compose service name for postgres
COMPOSE_CMD = ["docker", "compose"]                        # or ["docker","compose","-f","compose.yml"]


DATETIME_RE = re.compile(r"^\d{8}T\d{6}Z$")  # e.g. 20260124T020000Z


def format_bytes(n: int) -> str:
    units = ["B", "KB", "MB", "GB", "TB"]
    size = float(n)
    for u in units:
        if size < 1024.0 or u == units[-1]:
            return f"{size:.1f} {u}" if u != "B" else f"{int(size)} {u}"
        size /= 1024.0
    return f"{n} B"


def sha256_file(p: Path) -> str:
    h = hashlib.sha256()
    with p.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def fail(msg: str, cleanup_paths: list[Path] | None = None, exit_code: int = 1) -> None:
    # Best-effort cleanup (no extra stdout)
    if cleanup_paths:
        for p in cleanup_paths:
            try:
                if p.is_dir():
                    shutil.rmtree(p)
                elif p.exists():
                    p.unlink()
            except Exception:
                pass

    print(json.dumps({"status": "failure", "message": msg}, ensure_ascii=False))
    raise SystemExit(exit_code)


def run_capture(cmd: list[str], cwd: Path, desc: str, timeout: int = 60) -> str:
    try:
        r = subprocess.run(
            cmd,
            cwd=str(cwd),
            capture_output=True,
            text=True,
            timeout=timeout,
            check=False,
        )
    except FileNotFoundError:
        fail(f"{desc}: command not found: {cmd[0]}")
    except subprocess.TimeoutExpired:
        fail(f"{desc}: timed out running: {' '.join(cmd)}")

    if r.returncode != 0:
        err = (r.stderr or r.stdout or "").strip()
        fail(f"{desc}: failed (exit {r.returncode}). {err[:4000]}")
    return (r.stdout or "").strip()


def tar_dir_contents(src_dir: Path, out_tgz: Path) -> None:
    # Equivalent to: tar -C "${src_dir}" -czf "${out_tgz}" .
    with tarfile.open(out_tgz, mode="w:gz") as tf:
        for root, dirs, files in os.walk(src_dir):
            root_p = Path(root)
            rel_root = root_p.relative_to(src_dir)

            # Add directories (to preserve empty dirs)
            for d in dirs:
                d_path = root_p / d
                arcname = (rel_root / d).as_posix()
                ti = tf.gettarinfo(str(d_path), arcname=arcname)
                tf.addfile(ti)

            # Add files
            for f in files:
                f_path = root_p / f
                arcname = (rel_root / f).as_posix()
                tf.add(str(f_path), arcname=arcname, recursive=False)


def stream_pg_dump_to_gzip(sql_gz: Path, cwd: Path, db_service: str) -> None:
    # Stream pg_dump output from container -> gzip file on host, without printing to stdout.
    dump_cmd = COMPOSE_CMD + [
        "exec", "-T", db_service, "sh", "-lc",
        (
            'set -e; '
            'export PGPASSWORD="${POSTGRES_PASSWORD:-}"; '
            'pg_dump -U "${POSTGRES_USER}" -d "${POSTGRES_DB}" '
            '--no-owner --no-privileges --format=plain'
        ),
    ]

    try:
        p = subprocess.Popen(
            dump_cmd,
            cwd=str(cwd),
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
    except FileNotFoundError:
        fail("Postgres dump: docker command not found. Is Docker installed and in PATH?")

    assert p.stdout is not None
    assert p.stderr is not None

    try:
        with gzip.open(sql_gz, "wb", compresslevel=9) as gz:
            for chunk in iter(lambda: p.stdout.read(1024 * 1024), b""):
                gz.write(chunk)

        rc = p.wait()
        stderr = p.stderr.read().decode(errors="replace").strip()
        if rc != 0:
            fail(f"Postgres dump: pg_dump failed (exit {rc}). {stderr[:4000]}")
    finally:
        try:
            p.kill()
        except Exception:
            pass


def main() -> None:
    if len(sys.argv) != 2:
        fail("Usage: bw-backup.py <datetime> (e.g. 20260124T020000Z)")

    dt = sys.argv[1].strip()

    # Validate DATETIME strictly
    if not DATETIME_RE.fullmatch(dt):
        fail("Invalid datetime format. Expected YYYYMMDDTHHMMSSZ (e.g. 20260124T020000Z).")
    if "/" in dt or ".." in dt:
        fail("Invalid datetime input: must not contain '/' or '..'.")

    # Validate required paths
    if not STACK_DIR.is_dir():
        fail(f"STACK_DIR not found: {STACK_DIR}")
    if not BACKUP_BASE.is_dir():
        fail(f"BACKUP_BASE does not exist: {BACKUP_BASE} (create it first)")
    if not BW_ETC_HOST.is_dir():
        fail(f"Bitwarden data directory not found: {BW_ETC_HOST} (check bind mount path)")

    out_dir = BACKUP_BASE / dt
    bundle_tgz = BACKUP_BASE / f"{dt}.tar.gz"
    bundle_sha = Path(str(bundle_tgz) + ".sha256")

    # Replace existing output if rerun
    cleanup_targets = [out_dir, bundle_tgz, bundle_sha]
    if out_dir.exists():
        shutil.rmtree(out_dir)
    if bundle_tgz.exists():
        bundle_tgz.unlink()
    if bundle_sha.exists():
        bundle_sha.unlink()

    out_dir.mkdir(parents=True, exist_ok=True)
    os.chmod(out_dir, 0o750)

    # Basic docker sanity check
    run_capture(COMPOSE_CMD + ["version"], cwd=STACK_DIR, desc="Docker Compose")

    # Ensure db service is reachable and ready
    run_capture(
        COMPOSE_CMD + ["exec", "-T", DB_SERVICE, "sh", "-lc", "pg_isready -q"],
        cwd=STACK_DIR,
        desc=f"Database healthcheck (service '{DB_SERVICE}')",
        timeout=30,
    )

    # Read DB/user from container env
    db_name = run_capture(
        COMPOSE_CMD + ["exec", "-T", DB_SERVICE, "sh", "-lc", 'printf "%s" "${POSTGRES_DB:-}"'],
        cwd=STACK_DIR,
        desc="Read POSTGRES_DB from container",
        timeout=30,
    )
    db_user = run_capture(
        COMPOSE_CMD + ["exec", "-T", DB_SERVICE, "sh", "-lc", 'printf "%s" "${POSTGRES_USER:-}"'],
        cwd=STACK_DIR,
        desc="Read POSTGRES_USER from container",
        timeout=30,
    )

    if not db_name or not db_user:
        fail("POSTGRES_DB / POSTGRES_USER not found in db container environment. Check db.env.", cleanup_paths=cleanup_targets)

    # meta.txt
    meta = out_dir / "meta.txt"
    created_utc = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    meta_contents = (
        f"backup_datetime={dt}\n"
        f"created_utc={created_utc}\n"
        f"stack_dir={STACK_DIR}\n"
        f"compose_project_dir={STACK_DIR}\n"
        f"POSTGRES_DB={db_name}\n"
        f"POSTGRES_USER={db_user}\n"
    )
    meta.write_text(meta_contents, encoding="utf-8")
    os.chmod(meta, 0o640)

    # 1) Postgres dump -> sql.gz
    sql_gz = out_dir / f"bitwarden-{dt}.sql.gz"
    stream_pg_dump_to_gzip(sql_gz, cwd=STACK_DIR, db_service=DB_SERVICE)
    os.chmod(sql_gz, 0o640)

    # 2) Archive BW persisted state -> tar.gz
    etc_tgz = out_dir / f"etc-bitwarden-{dt}.tar.gz"
    tar_dir_contents(BW_ETC_HOST, etc_tgz)
    os.chmod(etc_tgz, 0o640)

    # 3) Checksums for artifacts
    sums_txt = out_dir / "sha256sums.txt"
    sums_txt.write_text(
        f"{sha256_file(sql_gz)}  {sql_gz.name}\n"
        f"{sha256_file(etc_tgz)}  {etc_tgz.name}\n",
        encoding="utf-8",
    )
    os.chmod(sums_txt, 0o640)

    # 4) Bundle the whole folder into a single tar.gz
    with tarfile.open(bundle_tgz, mode="w:gz") as tf:
        tf.add(str(out_dir), arcname=dt)

    os.chmod(bundle_tgz, 0o640)

    bundle_hash = sha256_file(bundle_tgz)
    bundle_sha.write_text(f"{bundle_hash}  {bundle_tgz.name}\n", encoding="utf-8")
    os.chmod(bundle_sha, 0o640)

    # Delete the temp folder after bundling
    shutil.rmtree(out_dir)

    # Success JSON (only two keys)
    size_bytes = bundle_tgz.stat().st_size
    print(json.dumps({"status": "success", "message": f"Bundle size: {format_bytes(size_bytes)}"}, ensure_ascii=False))


if __name__ == "__main__":
    try:
        main()
    except SystemExit:
        raise
    except Exception as e:
        # Catch-all: human readable failure
        print(json.dumps({"status": "failure", "message": f"Unexpected error: {e}"}, ensure_ascii=False))
        raise SystemExit(1)

```

### delete files and folder older than 30 days

how to use

```shell
# test run
DAYS=30 DRY_RUN=1 python3 /home/ubuntu/bitwarden/delete-old-files.py 20270124T020000Z

# run it n8n workflow
python3 /home/ubuntu/bitwarden/delete-old-files.py 20260124T020000Z
```

```python
#!/usr/bin/env python3
"""
/home/ubuntu/bitwarden/delete-old-files.py

Permanently delete anything in BACKUP_BASE older than (or equal to) N days
relative to the provided reference datetime (UTC).

Usage:
  python3 /home/ubuntu/bitwarden/delete-old-files.py 20260124T020000Z

Environment overrides (optional):
  DAYS=30        Number of days to keep (default from DEFAULT_DAYS_TO_KEEP)
  DRY_RUN=1      Only print what would be deleted (default from DEFAULT_DRY_RUN)

Optional dry run:
    DAYS=30 DRY_RUN=1 python3 /home/ubuntu/bitwarden/delete-old-files.py 20270124T020000Z

Output:
  Prints ONE human-readable summary line to stdout (so n8n can use {{$json.stdout}} directly).
  Exit code 0 = success, non-zero = failure.
"""

from __future__ import annotations

import os
import re
import shutil
import sys
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path


# =========================
# CONFIG (edit these)
# =========================
BACKUP_BASE = Path("/home/ubuntu/bitwarden/backups")
DEFAULT_DAYS_TO_KEEP = 30
DEFAULT_DRY_RUN = False
# =========================

DATETIME_RE = re.compile(r"^\d{8}T\d{6}Z$")  # YYYYMMDDTHHMMSSZ


def fmt_bytes(n: int) -> str:
    units = ["B", "KB", "MB", "GB", "TB"]
    size = float(n)
    for u in units:
        if size < 1024.0 or u == units[-1]:
            return f"{size:.1f} {u}" if u != "B" else f"{int(size)} {u}"
        size /= 1024.0
    return f"{n} B"


def parse_ref_datetime(dt_str: str) -> datetime:
    # dt_str: YYYYMMDDTHHMMSSZ -> aware datetime UTC
    # Example: 20260124T020000Z
    year = int(dt_str[0:4])
    month = int(dt_str[4:6])
    day = int(dt_str[6:8])
    hour = int(dt_str[9:11])
    minute = int(dt_str[11:13])
    second = int(dt_str[13:15])
    return datetime(year, month, day, hour, minute, second, tzinfo=timezone.utc)


def get_env_int(name: str, default: int) -> int:
    v = os.getenv(name)
    if v is None or v == "":
        return default
    if not v.isdigit():
        raise ValueError(f"{name} must be an integer (got '{v}')")
    return int(v)


def get_env_bool(name: str, default: bool) -> bool:
    v = os.getenv(name)
    if v is None or v == "":
        return default
    return v.strip() in ("1", "true", "TRUE", "yes", "YES", "on", "ON")


def safe_top_level_children(base: Path) -> list[Path]:
    # Equivalent to: find base -mindepth 1 -maxdepth 1
    return [p for p in base.iterdir()]


def dir_size_bytes(p: Path) -> int:
    # Best-effort size calculation for reporting only
    if p.is_symlink():
        return 0
    if p.is_file():
        try:
            return p.stat().st_size
        except Exception:
            return 0
    total = 0
    if p.is_dir():
        for root, _, files in os.walk(p):
            for f in files:
                fp = Path(root) / f
                try:
                    if not fp.is_symlink():
                        total += fp.stat().st_size
                except Exception:
                    pass
    return total


@dataclass
class Result:
    deleted: list[Path]
    would_delete: list[Path]
    reclaimed_bytes: int
    cutoff_iso: str
    ref_iso: str


def run(ref_dt: datetime, days_to_keep: int, dry_run: bool) -> Result:
    if not BACKUP_BASE.is_dir():
        raise FileNotFoundError(f"Backup base does not exist: {BACKUP_BASE}")

    cutoff_dt = ref_dt - timedelta(days=days_to_keep)
    # Match bash logic: delete items with mtime <= cutoff
    cutoff_epoch = cutoff_dt.timestamp()

    targets: list[Path] = []
    for p in safe_top_level_children(BACKUP_BASE):
        try:
            st = p.lstat()  # do not follow symlinks
        except FileNotFoundError:
            continue
        if st.st_mtime <= cutoff_epoch:
            targets.append(p)

    reclaimed = 0
    deleted: list[Path] = []
    would_delete: list[Path] = []

    for p in sorted(targets, key=lambda x: x.name):
        # Safety: refuse anything outside BACKUP_BASE
        try:
            p.resolve().relative_to(BACKUP_BASE.resolve())
        except Exception:
            raise RuntimeError(f"Safety stop: refusing to delete outside {BACKUP_BASE}: {p}")

        reclaimed += dir_size_bytes(p)

        if dry_run:
            would_delete.append(p)
            continue

        # Delete
        try:
            if p.is_symlink() or p.is_file():
                p.unlink()
            else:
                shutil.rmtree(p)
            deleted.append(p)
        except Exception as e:
            raise RuntimeError(f"Failed deleting '{p}': {e}")

    return Result(
        deleted=deleted,
        would_delete=would_delete,
        reclaimed_bytes=reclaimed,
        cutoff_iso=cutoff_dt.strftime("%Y-%m-%dT%H:%M:%SZ"),
        ref_iso=ref_dt.strftime("%Y-%m-%dT%H:%M:%SZ"),
    )


def main() -> int:
    if len(sys.argv) != 2:
        print("FAILURE: Usage: delete-old-files.py <datetime like 20260124T020000Z>")
        return 2

    dt_str = sys.argv[1].strip()
    if not DATETIME_RE.fullmatch(dt_str) or "/" in dt_str or ".." in dt_str:
        print("FAILURE: datetime must match YYYYMMDDTHHMMSSZ (e.g. 20260124T020000Z)")
        return 2

    try:
        days = get_env_int("DAYS", DEFAULT_DAYS_TO_KEEP)
        dry_run = get_env_bool("DRY_RUN", DEFAULT_DRY_RUN)
        ref_dt = parse_ref_datetime(dt_str)
    except Exception as e:
        print(f"FAILURE: {e}")
        return 2

    try:
        r = run(ref_dt=ref_dt, days_to_keep=days, dry_run=dry_run)
    except Exception as e:
        print(f"FAILURE: {e}")
        return 1

    if dry_run:
        if not r.would_delete:
            print(
                f"SUCCESS (DRY_RUN): Nothing to delete in {BACKUP_BASE}. "
                f"Keeping last {days} day(s); cutoff <= {r.cutoff_iso} (ref {r.ref_iso})."
            )
            return 0
        items = ", ".join(p.name for p in r.would_delete)
        print(
            f"SUCCESS (DRY_RUN): Would delete {len(r.would_delete)} item(s) from {BACKUP_BASE} "
            f"with mtime <= {r.cutoff_iso} (ref {r.ref_iso}). "
            f"Estimated reclaim: {fmt_bytes(r.reclaimed_bytes)}. Targets: {items}"
        )
        return 0

    if not r.deleted:
        print(
            f"SUCCESS: Nothing to delete in {BACKUP_BASE}. "
            f"Keeping last {days} day(s); cutoff <= {r.cutoff_iso} (ref {r.ref_iso})."
        )
        return 0

    items = ", ".join(p.name for p in r.deleted)
    print(
        f"SUCCESS: Deleted {len(r.deleted)} item(s) from {BACKUP_BASE} "
        f"with mtime <= {r.cutoff_iso} (ref {r.ref_iso}). "
        f"Reclaimed approx {fmt_bytes(r.reclaimed_bytes)}. Deleted: {items}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

```

## N8N workflow

[Login - n8n.io](https://creators.n8n.io/workflows/12980)

### setup

1. mount your backups into `/home/node/.n8n-files`

```yaml
services:
  n8n:
    volumes:
      - /home/ubuntu/n8n.webhook/data/n8n:/home/node/.n8n
      - /home/ubuntu/bitwarden/backups:/home/node/.n8n-files/bitwarden-backups:ro
```

2. allow your custom mount path

```yaml
# n8n.env
N8N_RESTRICT_FILE_ACCESS_TO=/home/node/.n8n-files;/data/bitwarden-backups

```

3. restart the node

```shell
docker compose down
docker compose up -d
```

### workflow and result

copy the workflow and change to your details  

[Exporting and importing workflows \| n8n Docs](https://docs.n8n.io/courses/level-one/chapter-6/)  

![Bitwarden Lite 1769339421319|649x231](https://s3.greenhuang.com/docs/Bitwarden-Lite-1769339421319.png)

![Bitwarden Lite 1769339731970|548x302](https://s3.greenhuang.com/docs/Bitwarden-Lite-1769339731970.png)

![Bitwarden Lite 1769339593421](https://s3.greenhuang.com/docs/Bitwarden-Lite-1769339593421.png)

