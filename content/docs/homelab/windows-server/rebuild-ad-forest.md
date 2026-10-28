---
title: rebuild ad forest
description: urebuild ad forest
---
```
Public domain:
greenhuang.com          ← Cloudflare

AD forest/root domain:
ad.greenhuang.com

Domain controller:
DC01.ad.greenhuang.com

Internal infrastructure DNS zone:
lab.greenhuang.com
```

```
Name: DC01
OS: Windows Server 2025 Standard Desktop Experience

CPU: 2-4 vCPU
RAM: 8 GB
OS disk: 80 GB
NIC: VirtIO
Disk controller: VirtIO SCSI
Firmware: UEFI/OVMF
Machine: q35
QEMU Guest Agent: enabled
```


```
Windows PC
    │
    │ DNS
    ▼
192.168.0.10
DC01
    │
    ├── ad.greenhuang.com
    │     resolve locally
    │
    ├── lab.greenhuang.com
    │     resolve locally
    │
    └── google.com
           │
           ▼
        1.1.1.1
```