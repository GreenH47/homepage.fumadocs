---
title: Using cloud-init to automate provisioning VM in proxmox 
description: Using cloud-init to automate provisioning VM in proxmox 
---
[Proxmox Cloud-Init Made Easy: Automating VM Provisioning Like the Cloud - Virtualization Howto](https://www.virtualizationhowto.com/2025/10/proxmox-cloud-init-made-easy-automating-vm-provisioning-like-the-cloud/)  

[Cloud-Init Support - Proxmox VE](https://pve.proxmox.com/wiki/Cloud-Init_Support)

[Proxmox Cloud-Init Setup and Troubleshooting - YouTube](https://www.youtube.com/watch?v=09Zp0247F0U)


# perparation
## download cloud image
To use cloud-init in Proxmox VE to automate provisioning of Ubuntu VMs, you cannot use a normal Ubuntu Server ISO  
Instead of the installer ISO, you need to download a cloud image that already has cloud-init support built-in. For Ubuntu 24.04 that would be from:  
```

https://cloud-images.ubuntu.com/releases/noble/release/ubuntu-24.04-server-cloudimg-amd64.img
```
## generate ssh key
```powershell
mkdir C:\Users\huang\.ssh\pve-vms

ssh-keygen -t rsa -b 4096 -f C:\Users\huang\.ssh\pve-vms\pve-vm-key

# This produces two files 
# private key
C:\Users\huang\.ssh\pve-vms\pve-vm-key
# public key
C:\Users\huang\.ssh\pve-vms\pve-vm-key.pub
```


# Step-by-Step Provisioning in Proxmox
## Create a VM (no installer disk)
Create a new VM but **don’t put an installation ISO** on it.  
```
qm create 101 --name ubuntu-cloud --memory 2048 --net0 virtio,bridge=vmbr0 --scsihw virtio-scsi-pci

```

a VM template conf looks like
```shell
# /etc/pve/qemu-server/101.conf
agent: 1
balloon: 2048
boot: order=ide2;net0
cores: 6
cpu: x86-64-v3
ide2: none,media=cdrom
memory: 10240
meta: creation-qemu=10.1.2,ctime=1771158916
name: docker-host
net0: virtio=BC:24:11:AA:39:86,bridge=vmbr0,firewall=1
numa: 0
ostype: l26
scsihw: virtio-scsi-single
smbios1: uuid=e3c75c90-8bf8-456e-aa32-425b080ab40e
sockets: 1
vmgenid: 86549d7c-f424-41a2-8069-6de201cf2a13

```

## Import the cloud image
On the Proxmox host:  
```shell
# qm importdisk <vmid> <source_path> <storage_pool>
qm importdisk 101 /var/lib/vz/template/iso/ubuntu-24.04-server-cloudimg-amd64.img local-zfs --format qcow2

root@pve:~# qm importdisk 101 /var/lib/vz/template/iso/ubuntu-24.04-server-cloudimg-amd64.img local-zfs --format qcow2
importing disk '/var/lib/vz/template/iso/ubuntu-24.04-server-cloudimg-amd64.img' to VM 101 ...
format 'qcow2' is not supported by the target storage - using 'raw' instead
transferred 0.0 B of 3.5 GiB (0.00%)
transferred 3.5 GiB of 3.5 GiB (100.00%)
unused0: successfully imported disk 'local-zfs:vm-101-disk-0'
```


```shell
# Then in the VM Hardware tab attach that disk as `scsi0`
qm set 101 --scsihw virtio-scsi-pci --scsi0 local-zfs:vm-101-disk-0

# setup scsi0 as boot drive
qm set 101 --boot order=scsi0
qm set 101 --bootdisk scsi0
```


## Add the Cloud-Init drive
In the Proxmox VM web UI:
Go to Hardware → Add → CloudInit Drive  
Select a storage (like local-lvm)  
Click Add  
This attaches a virtual CD-ROM that Proxmox will put cloud config on.

![cloud init 1771157306150](https://s3.greenhuang.com/docs/cloud-init-1771157306150.png)


## create snippets storage
create snippets storage in `/var/lib/vz/snippets` to storage cloud-init files 
![cloud init 1771161717760](https://s3.greenhuang.com/docs/cloud-init-1771161717760.png)

## Create a **cloud-config** script to install packages
```shell
# /var/lib/vz/snippets/docker-host.yaml
#cloud-config
package_update: true
package_upgrade: true

packages:
  - qemu-guest-agent
  - nginx
  - docker.io

runcmd:
  - [ systemctl, enable, qemu-guest-agent ]
  - [ systemctl, start, qemu-guest-agent ]
  - [ systemctl, enable, nginx ]
  - [ systemctl, start, nginx ]
  - [ systemctl, enable, docker ]
  - [ systemctl, start, docker ]


```

## Attach that cloud-config to your VM
```shell
qm set 101 --cicustom "user=local:snippets/docker-host.yaml"

```


## VM conf template
```shell
agent: 1
balloon: 2048
boot: order=scsi0
bootdisk: scsi0
cicustom: user=local:snippets/docker-host.yaml
ciuser: greenhuang
cores: 6
cpu: x86-64-v3
ide0: local-zfs:vm-101-cloudinit,media=cdrom,size=4M
ide2: none,media=cdrom
ipconfig0: ip=192.168.0.150/24,gw=192.168.0.1,ip6=dhcp
ipconfig1: ip=dhcp,ip6=dhcp
memory: 10240
meta: creation-qemu=10.1.2,ctime=1771158916
name: docker-host
nameserver: 192.168.1.3
net0: virtio=BC:24:11:8D:F1:D7,bridge=vmbr0,firewall=1
net1: virtio=BC:24:11:87:9C:50,bridge=vmbr1,firewall=1
numa: 0
ostype: l26
scsi0: local-zfs:vm-101-disk-0,iothread=1,size=34304M
scsihw: virtio-scsi-single
searchdomain: greenhuang.local
serial0: socket
smbios1: uuid=2df4ce35-82f1-4e53-8a20-beea765b6174
sockets: 1
sshkeys: ssh-rsa%20AAA
vmgenid: 3e4780c1-1c29-4ad1-8c12-4aa26742abd7

```