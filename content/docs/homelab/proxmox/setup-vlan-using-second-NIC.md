---
title: setup a vlan in proxmox using second NIC
description: setup a vlan in proxmox using second NIC
---
Create an isolated VM network (192.168.1.0/24) on Proxmox via the second NIC (eno2) connected to an old router (gateway 192.168.1.1). Keep DHCP/DNS provided by Windows Server (DC) at 192.168.0.201.  

# Physical / IP layout物理/IP 布局

- Main LAN: 192.168.0.0/24, router 192.168.0.1主局域网：192.168.0.0/24，路由器 192.168.0.1
    
- Proxmox mgmt: 192.168.0.230 on vmbr0 (eno1)Proxmox 管理：192.168.0.230 在 vmbr0 (eno1) 上
    
- Old router LAN: 192.168.1.1/24 (DHCP disabled)旧路由器 LAN 地址：192.168.1.1/24（DHCP 已禁用）
    
- Second NIC: eno2 connected to old router LAN port第二块网卡：eno2 连接到旧路由器的 LAN 端口

# Step 1 — Create bridge for second NIC (vmbr1)步骤 1 — 为第二个网卡 (vmbr1) 创建桥接  
Proxmox GUI: Node → System → Network → Create → Linux BridgeProxmox 图形用户界面：节点 → 系统 → 网络 → 创建 → Linux 网桥

- Name: vmbr1名称：vmbr1
    
- Bridge ports: eno2桥接端口：eno2
    
- VLAN aware: OFF (not using tagged VLAN)VLAN 感知：关闭（不使用标记 VLAN）
    
- IP/gateway on vmbr1: leave blank (optional: assign an IP for host access, but no gateway)vmbr1 上的 IP/网关：留空（可选：分配主机访问的 IP 地址，但不分配网关）
![setup vlan using second NIC 1768653163707](https://s3.greenhuang.com/docs/setup-vlan-using-second-NIC-1768653163707.png)
# Step 2 — Attach VMs to vmbr1步骤 2 — 将虚拟机附加到 vmbr1  
VM → Hardware → Network Device → Bridge = vmbr1虚拟机 → 硬件 → 网络设备 → 网桥 = vmbr1  
VMs now sit on 192.168.1.0/24 (gateway should be 192.168.1.1).虚拟机现在位于 192.168.1.0/24 网段（网关应该是 192.168.1.1）。

![setup vlan using second NIC 1768653188461](https://s3.greenhuang.com/docs/setup-vlan-using-second-NIC-1768653188461.png)

![setup vlan using second NIC 1768653260293](https://s3.greenhuang.com/docs/setup-vlan-using-second-NIC-1768653260293.png)


# enable DHCP on domain controller
![setup vlan using second NIC 1768653952277](https://s3.greenhuang.com/docs/setup-vlan-using-second-NIC-1768653952277.png)

and now you can find the dhcp leases under it  