---
title: Fix exchange server to new forest
description: Fix exchange server to new forest
---
### **Context**

- Exchange 2019 CU15 server stopped working after:
    - VLAN move
    - New IP
    - AD forest functional level raised to 2025
    - DNS / Sites not fully updated


Symptoms:

- “Applying computer settings” hang after restore
- Exchange services couldn’t start
- ECP/OWA unreachable
- “Topology Provider couldn’t find AD Topology service”
- WinRM remoting errors “input XML syntax error”

## **Step 1 — Fix DNS and Replication**

1. Verified DNS records for DC and GC:
    - A records correct
    - SRV records needed (e.g. `_ldap._tcp.dc._msdcs`)

2. On all DCs: 
```
repadmin /syncall /AeD
repadmin /replsummary
ipconfig /registerdns
```

3. On Exchange server:  
```
ipconfig /flushdns
ipconfig /registerdns

```

Outcome: DNS replication ensured all DCs have consistent DNS/AD info.  

## **Step 2 — Fix Active Directory Site/Subnet Mapping**

1. In **Active Directory Sites and Services**:
    - Created a **Subnet** matching the Exchange VM’s VLAN
    - Assigned it to the **correct AD Site** containing reachable GC/DC  
        (SITE-B in your case)
        
2. Forced AD replication: `repadmin /syncall /AeD`  
3. Outcome: Server now maps to a site; Exchange can locate local Global Catalog.

## **Step 3 — Rebind Netlogon / Site Info**

1. On the Exchange VM: `net stop netlogon net start netlogon`
2. Verify site membership: `nltest /dsgetsite`

Outcome: Server correctly identifies site based on subnet.

## **Step 4 — Restart Exchange AD Topology Service**

1. On Exchange: `net stop MSExchangeADTopology net start MSExchangeADTopology`
2. Checked Event Logs for DC selection & connection success

Outcome: Topology service was able to find AD, allowing IIS and other Exchange services to operate.

## **Step 5 — Fix WinRM / Remote PowerShell Errors**

1. Ensured **WinRM is configured**: `winrm quickconfig`
2. Enabled proper authentication: `winrm set winrm/config/service/auth @{Kerberos="true";Negotiate="true"}`
3. Confirmed DNS resolution for `exchange.greenhuang.local`

Outcome: Exchange Management Shell can connect (no more “input XML syntax” errors).

## **Step 6 — Validation**

✔ From Exchange server:

`nslookup _ldap._tcp.gc._msdcs.greenhuang.local nltest /dsgetdc:greenhuang.local /GC`

✔ Make sure:

- DC/GC SRV records resolve
- Exchange DNS server list points only to valid DNS/DCs
- Exchange can log into ECP/OWA without negotiate errors
- Exchange Management Shell opens without remoting errors

## **Key Lessons / Root Causes**
- Exchange relies on **AD Sites/Subnets, DNS SRV records, and Global Catalog access**.
- IP/VLAN changes without updating AD Sites cause AD Topology discovery failures.
- WinRM remote PowerShell depends on **correct SSL certificate + SPN + DNS name resolution + Kerberos**.
- Updating certificates after server name/IP changes is essential for Exchange web services and EMS.