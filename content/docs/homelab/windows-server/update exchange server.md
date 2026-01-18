---
title: Exchange Server update
description: apply lastest exchange server CU 
---

check exchange server version  
```powershell
PS C:\Windows\system32> Get-Command Exsetup.exe | ForEach-Object {$_.FileVersionInfo}                                                                                                                                                                                                                                                                                                                                                                                       ProductVersion   FileVersion      FileName                                                                                                                                                                                            --------------   -----------      --------                                                                                                                                                                                            15.02.1748.010   15.02.1748.010   C:\Program Files\Microsoft\Exchange Server\V15\bin\ExSetup.exe       
```

[Released: October 2025 Exchange Server Security Updates \| Microsoft Community Hub](https://techcommunity.microsoft.com/blog/exchange/released-october-2025-exchange-server-security-updates/4461276?utm_source=chatgpt.com)  

[Exchange Server build numbers and release dates \| Microsoft Learn](https://learn.microsoft.com/en-us/exchange/new-features/build-numbers-and-release-dates#exchange-server-se)  


download and run the script [HealthChecker - Microsoft - CSS-Exchange](https://microsoft.github.io/CSS-Exchange/Diagnostics/HealthChecker/)  

download the latest SU [Download Security Update for Exchange Server 2019 CU15 SU3 (KB5063221) from Official Microsoft Download Center](https://www.microsoft.com/en-us/download/details.aspx?id=108334)  

```powershell
PS > C:\Users\exchange\Downloads\HealthChecker.ps1

PS > C:\Users\exchange\Downloads\Exchange2019-KB5063221-x64-en.exe
```
![update exchange server 1768034799923](https://s3.greenhuang.com/docs/update%20exchange%20server-1768034799923.png)


restart server and run to validate the version  
```powershell
Get-Command Exsetup.exe | ForEach-Object {$_.FileVersionInfo}

```


![update exchange server 1768043614960](https://s3.greenhuang.com/docs/update%20exchange%20server-1768043614960.png)

if it failed try this script to run all exchange server services [Restart Exchange services with PowerShell script - ALI TAJRAN](https://www.alitajran.com/restart-exchange-services-powershell-script/)  
