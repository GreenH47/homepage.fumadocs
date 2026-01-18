---
title: Join second domain controller inside existing AD forest
description: Join second domain controller inside existing AD forest
---
# health check
```powershell
# Make sure AD is healthy
dcdiag /v

# Confirm your functional level supports a 2025 DC (2016 is enough)
Get-ADDomain | Select Name,DomainMode
Get-ADForest | Select Name,ForestMode

```

# perpare second DC
[Upgrade domain controllers to a newer version of Windows Server \| Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/deploy/upgrade-domain-controllers?utm_source=chatgpt.com)  
1. rename the DC and restart 
2. setup static ip and change dns ping to itself and another DC  
3. ping the domain name to check the connection 
4. install updates and feature and restart machine

# join DC
join domain `Add-Computer -DomainName greenhuang.local -Credential greenhuang\Administrator -Restart`  

Promote Server 2025 to “Additional domain controller”  
Server Manager → AD DS → More… → Promote this server to a domain controller  

apply -> install -> restart  
![join second dc 1768708920147](https://s3.greenhuang.com/docs/join-second-dc-1768708920147.png)


![join second dc 1768709299040](https://s3.greenhuang.com/docs/join-second-dc-1768709299040.png)


finally we can find it in the AD forest  
![join second dc 1768709449553](https://s3.greenhuang.com/docs/join-second-dc-1768709449553.png)

run this command in any DC  
```powershell
Get-ADDomainController -Filter * | Select HostName,IPv4Address,IsGlobalCatalog

repadmin /replsummary
```

![join second dc 1768710034005](https://s3.greenhuang.com/docs/join-second-dc-1768710034005.png)


# configure NTP
run on PDC  
```powershell
# check which is the master
netdom query fsmo

# change ntp source and restart service
w32tm /config /syncfromflags:manual /manualpeerlist:"0.au.pool.ntp.org,0x8 1.au.pool.ntp.org,0x8" /reliable:yes /update

net stop w32time
net start w32time
w32tm /resync /force

```
![join second dc 1768715513303](https://s3.greenhuang.com/docs/join-second-dc-1768715513303.png)



run on other device  
```powershell
w32tm /config /syncfromflags:domhier /update
net stop w32time
net start w32time
w32tm /resync /rediscover /nowait

```

use the command to check domain's time status  
`w32tm /monitor /domain:greenhuang.local`   

![join second dc 1768716412443](https://s3.greenhuang.com/docs/join-second-dc-1768716412443.png)