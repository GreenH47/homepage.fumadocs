---
title: Using OPNsense as virtual router and switch in proxmox
description: A guide to Using OPNsenseas virtual router and switch in proxmox
---
[Virtualizing OPNsense on Proxmox as Your Primary Router - YouTube](https://www.youtube.com/watch?v=VcTGKBHcqmk)  

[Virtualize OPNsense on Proxmox as Your Primary Router](https://homenetworkguy.com/how-to/virtualize-opnsense-on-proxmox-as-your-primary-router/)

At the login prompt, enter `installer` as the username and `opnsense` as the password to continue installing OPNsense. 


![OPNsense 1769508239371](https://s3.greenhuang.com/docs/OPNsense-1769508239371.png)

# access from Wan port
By default OPNsense blocks inbound traffic on WAN (including ping and Web GUI), so you usually cannot ping or open https://192.168.0.203
 from your main LAN unless you explicitly allow it.  
 [\[SOLVED\] Unable to access WebGUI via WAN interface](https://forum.opnsense.org/index.php?topic=8833.0&utm_source=chatgpt.com)  

[Use Static Routing to Second OPNsense Router with NAT Disabled for a Homelab](https://homenetworkguy.com/how-to/use-static-routing-to-second-opnsense-router-with-nat-disabled-for-homelab/?utm_source=chatgpt.com)  

default password `root` - `opnsense`  
## 1) Fix WAN interface “private networks” block

Because your WAN is **192.168.0.203/24 (private LAN)**, the WAN option **Block private networks** must be **OFF**.

- Go to **Interfaces → WAN**
    
- Uncheck **Block private networks** (and apply)  
    This feature is intended for a real public WAN; if your WAN is RFC1918 it will block traffic.
    

---

## 2) Make sure the Web GUI listens on WAN (or All)

- Go to **System → Settings → Administration**
    
- Find **Listen interfaces**
    
- Set to **All** (or explicitly include **WAN**)
    

If this is set to LAN-only, the GUI will never answer on `https://192.168.0.203`.

---

## 3) Add WAN firewall rules to allow access to the firewall itself

OPNsense does **not** allow GUI access on WAN by default; you must add a rule on **WAN**.

### A) Allow HTTPS to the firewall (recommended: only from your PC IP)

Go to **Firewall → Rules → WAN → + (Add)**

Set:

- **Action:** Pass
    
- **Protocol:** TCP
    
- **Source:** your admin PC IP (example `192.168.0.50`) or `WAN net (192.168.0.0/24)`
    
- **Destination:** **This firewall** (or **WAN address**)
    
- **Destination port:** **443 (HTTPS)**
    

Save → Apply.

### B) Allow ping (ICMP) to the firewall (optional)

Add another WAN rule:

- **Action:** Pass
    
- **Protocol:** ICMP
    
- **ICMP type:** Echo request
    
- **Source:** your admin PC IP (or `WAN net`)
    
- **Destination:** **WAN address**

![OPNsense 1769515168055](https://s3.greenhuang.com/docs/OPNsense-1769515168055.png)


