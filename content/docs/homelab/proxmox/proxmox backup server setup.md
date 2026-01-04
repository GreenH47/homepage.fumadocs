---
title: proxmox backup server setup
description: proxmox backup server setup
---
# configure PBS node
use this script in PBS node [Proxmox VE Helper-Scripts](https://community-scripts.github.io/ProxmoxVE/scripts?id=post-pbs-install&category=Proxmox+%26+Virtualization) and follow this video [Proxmox Backup Server: A Game Changer for HomeLabs! - YouTube](https://www.youtube.com/watch?v=sOUgzPocqFM)  

```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/post-pbs-install.sh)"
```

![proxmox backup server setup 1767527745335|655x332](https://s3.greenhuang.com/docs/proxmox%20backup%20server%20setup-1767527745335.png)  

![proxmox backup server setup 1767527766524|655x342](https://s3.greenhuang.com/docs/proxmox%20backup%20server%20setup-1767527766524.png)

create a non root user on pbs for backup only  
![proxmox backup server setup 1767529147343](https://s3.greenhuang.com/docs/proxmox%20backup%20server%20setup-1767529147343.png)

mount your disk and create datastore location for backup  
![proxmox backup server setup 1767529552948](https://s3.greenhuang.com/docs/proxmox%20backup%20server%20setup-1767529552948.png)
# configure pve

add PBS as storage on PVE node  

![proxmox backup server setup 1767528052412](https://s3.greenhuang.com/docs/proxmox%20backup%20server%20setup-1767528052412.png)

![proxmox backup server setup 1767528226433](https://s3.greenhuang.com/docs/proxmox%20backup%20server%20setup-1767528226433.png)

copy the certificate fingerprint from pbs
![proxmox backup server setup 1767528199327](https://s3.greenhuang.com/docs/proxmox%20backup%20server%20setup-1767528199327.png) 

create a backup job in pve node
![proxmox backup server setup 1767528558073](https://s3.greenhuang.com/docs/proxmox%20backup%20server%20setup-1767528558073.png)  

![proxmox backup server setup 1767528744892](https://s3.greenhuang.com/docs/proxmox%20backup%20server%20setup-1767528744892.png) 


