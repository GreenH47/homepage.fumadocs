---
title: AdminDroid Installation and Troubleshooting Guide
description: AdminDroid Installation and Troubleshooting Guide
---


## AdminDroid Installation and Troubleshooting Guide (Windows Server 2025)

### 1. Overview

AdminDroid is a Microsoft 365 reporting and auditing tool that runs as a local web application on a Windows machine. It provides dashboards and reports for Microsoft 365 services such as Entra ID, Exchange Online, Teams, and SharePoint. The application is accessed through a browser after installation. ([AdminDroid](https://admindroid.com/?utm_source=chatgpt.com "AdminDroid"))

# 2. System Requirements

Supported operating systems include:

- Windows 10 / Windows 11
    
- Windows Server 2012 / 2016 / 2019 / 2022 / 2025
    

Recommended hardware (for tenants under 5000 users):

- 2 vCPU
    
- 8 GB RAM
    
- 25 GB free disk space
    
- Internet connection for Microsoft 365 API access ([AdminDroid](https://admindroid.com/download?utm_source=chatgpt.com "Microsoft 365 Complete Solution | Download Free Tool"))
    

# 3. Installation Steps

### 1. Download installer

Download the latest AdminDroid installer from:

[https://admindroid.com/download](https://admindroid.com/download)


### 2. Run installer

1. Log in to the server using a **local administrator account**
    
2. Run the AdminDroid installer
    
3. Accept installation path (default recommended)
    

Default install path:

```
C:\Program Files\AdminDroid\Office 365 Reporter
```



### 3. Installation process

The installer will automatically:

- Deploy the AdminDroid web portal
    
- Configure IIS web components
    
- Install required background services
    
- Create the web portal application
    



### 4. Access AdminDroid

After installation, open:

```
http://localhost:8000
```

Or from another device:

```
http://SERVER-IP:8000
```

---

# 4. First-Time Configuration

1. Log in using a Microsoft 365 **Global Administrator account**
    
2. Grant required API permissions
    
3. Select the Microsoft 365 services to monitor
    
4. Start initial data collection
    

Initial report data may take some time to generate.

![AdminDroid 1773034849110](https://s3.greenhuang.com/docs/AdminDroid-1773034849110.png)
# 5. Common Installation Issues

## Issue 1 — HTTP Error 500.19

Error example:

```
HTTP Error 500.19
Error Code: 0x8007000d
AspNetCoreModuleV2
```

### Cause

The IIS server is missing the **ASP.NET Core Hosting Bundle** required for the AdminDroid web portal.

### Fix

Install the ASP.NET Core Hosting Bundle:

Download:

```
https://dotnet.microsoft.com/download
```

Install:

```
dotnet-hosting-x64.exe
```

Then restart IIS:

```
iisreset
```


## Issue 2 — Missing IIS components

Ensure IIS features are installed.

Install these features:

```
Web Server (IIS)
  ├─ Static Content
  ├─ Default Document
  ├─ HTTP Errors
  ├─ ASP.NET
  ├─ ASP.NET 4.8
  ├─ .NET Extensibility
  ├─ ISAPI Extensions
  ├─ ISAPI Filters
  └─ Request Filtering
```


## Issue 3 — Permission errors

Ensure the following folder permissions exist:

```
C:\Program Files\AdminDroid
```

Grant access to:

```
IIS_IUSRS
```

Permissions:

```
Read
Execute
```


## Issue 4 — Application pool stopped

Open:

```
IIS Manager
```

Check:

```
Sites → AdminDroid
```

Ensure:

- Application Pool is **Running**
    
- Port **8000** is bound correctly
    


# 6. Useful Troubleshooting Locations

### Event Viewer

Check:

```
Event Viewer
Windows Logs
Application
```

Look for:

```
IIS
AspNetCoreModule
AdminDroid
```

---

### IIS logs

```
C:\inetpub\logs\LogFiles
```

---

### AdminDroid logs

```
C:\Program Files\AdminDroid\Office 365 Reporter\logs
```

---

# 7. Best Practices

- Install AdminDroid on a **dedicated server**
    
- Use a **static IP or DNS name**
    
- Restrict access with firewall rules
    
- Perform regular updates
    
- Monitor disk usage for report data storage
    

Dedicated servers are recommended for stability and monitoring performance. ([AdminDroid](https://admindroid.com/resources/pdf/product/microsoft365-management/admindroid-fortifying-deployment-recommendations.pdf?utm_source=chatgpt.com "AdminDroid's Fortifying Deployment Recommendations"))

---

# 8. Quick Troubleshooting Checklist

If the portal does not open:

1. Verify service is running
    
2. Check IIS site binding (port 8000)
    
3. Install ASP.NET Core Hosting Bundle
    
4. Restart IIS (`iisreset`)
    
5. Check Event Viewer logs
    

---

If useful, a **PowerShell script that automatically installs all IIS + .NET prerequisites for AdminDroid on Windows Server 2025** can also be provided. This simplifies deployment on new servers.