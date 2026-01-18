---
title: install SPICE on windows vm to replace proxmox default VNC
description: install SPICE on windows vm to replace proxmox default VNC
---
# install SPICE on windows
[SPICE - Proxmox VE](https://pve.proxmox.com/wiki/SPICE)  

[6 Proxmox Install SPICE - YouTube](https://www.youtube.com/watch?v=kYQ_D39Oyy4&t)  

Install virt-viewer / Remote Viewer (recommended SPICE client). The SPICE project recommends virt-viewer, and points Windows users to the virt-manager download page for the installer. [Virtual Machine Manager](https://virt-manager.org/download)  

on both your machine and vm.  

![SPICE 1768391158212](https://s3.greenhuang.com/docs/SPICE-1768391158212.png)


[SPICE Guest Tools](https://www.spice-space.org/download/windows/spice-guest-tools/spice-guest-tools-latest.exe)  Windows SPICE Guest Tools (spice-guest-tools) - This installer contains some optional drivers and services that can be installed in the Windows guest to improve SPICE performance and integration. This includes the qxl video driver and the SPICE guest agent (for copy and paste, automatic resolution switching, ...)  

then shut down vm.  

# enable spice on proxmox vm config
VM → Hardware → Display → Edit  
Set Graphic card = SPICE  
Set Memory (VRAM) to something like 32 MiB (commonly enough even for high resolutions)  

![SPICE 1768391902051](https://s3.greenhuang.com/docs/SPICE-1768391902051.png)

start VM → Console (dropdown) → SPICE  
Proxmox will download a .vv connection file.  
Open the .vv file with Remote Viewer (virt-viewer) to connect.  
![SPICE 1768392385601](https://s3.greenhuang.com/docs/SPICE-1768392385601.png)