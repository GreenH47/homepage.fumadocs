---
title: Microsoft 365 Tenant Security
description: A basic guide to Microsoft 365 Security Checklist
---
[Essential Microsoft 365 Security Checklist to Stay Safe in This Cybersecurity Awareness Month - AdminDroid Blog](https://blog.admindroid.com/essential-microsoft-365-security-best-practices-checklist-to-stay-alerted/)  


# Restrict User Access to Azure AD/Entra ID
## block from GUI
[Restrict User Access to Azure AD to Prevent Data Exposure](https://blog.admindroid.com/restrict-user-access-to-azure-ad-to-prevent-data-exposure/)  
- Sign -in to your Microsoft Entra admin center.
- Select **Users –> User Settings**
- Move the toggle to **‘Yes’** under the Administration center.
- Select **‘Save’** in the top.

![m365 tenant security 1773046419220](https://s3.greenhuang.com/docs/m365-tenant-security-1773046419220.png)

Now, the non-administrators can’t access Azure AD portal and Entra ID portal by navigating portal.azure.com and entra.microsoft.com.

## block from CLI
[How to Block access to Exchange Online PowerShell - o365info](https://o365info.com/block-access-exchange-online-powershell/)  

### install and connect Microsoft Graph PowerShell 
```powershell
Install-Module Microsoft.Graph -Force

Connect-MgGraph -Scopes "Directory.ReadWrite.All", "Group.ReadWrite.All", "Application.ReadWrite.All"

```

### Block access to Exchange Online PowerShell
Create a new security group to allow access to Exchange Online PowerShell with the New-MgGroup cmdlet. This will be the group where you will add the members who will have access to Exchange Online PowerShell   
```powershell
$group = New-MgGroup `
 -DisplayName "EXO-PowerShell-Admins" `
 -MailEnabled:$false `
 -SecurityEnabled:$true `
 -MailNickname "exo-powershell-admins" `
 -Description "Users allowed to access Exchange Online PowerShell"
 
# validate
$group
```

Get Global Administrator role  
```powershell
$role = Get-MgDirectoryRole | Where-Object {$_.DisplayName -eq "Global Administrator"}

$role

# If the role is not activated:
Enable-MgDirectoryRole -DirectoryRoleTemplateId `
 (Get-MgDirectoryRoleTemplate | Where {$_.DisplayName -eq "Global Administrator"}).Id
```

Add all Global Admins to the group 
```powershell
$admins = Get-MgDirectoryRoleMember -DirectoryRoleId $role.Id

foreach ($admin in $admins) {
    New-MgGroupMember -GroupId $group.Id -DirectoryObjectId $admin.Id
}
```

Now all **Global Admins are members of the EXO PowerShell group**. you can find it in `Microsoft Entra ID→ Groups→ All groups `  or `Microsoft 365 Admin Center -> Teams & groups→ Active teams & groups→ Security`  
![m365 tenant security 1773049041774](https://s3.greenhuang.com/docs/m365-tenant-security-1773049041774.png)


Create the service principal for the Exchange Online PowerShell app with the [New-MgServicePrincipal](https://learn.microsoft.com/en-us/powershell/module/microsoft.graph.applications/new-mgserviceprincipal) cmdlet. The unique identifier for Microsoft Exchange REST API Based Powershell is _fb78d390-0c51-40cd-8e17-fdbfab77341b_  
```powershell
$ServicePrincipal = New-MgServicePrincipal -Appid "fb78d390-0c51-40cd-8e17-fdbfab77341b"

# validate
Get-MgServicePrincipal -ServicePrincipalId $ServicePrincipal.Id | Format-Table DisplayName, Id, AppId

# set the -AppRoleAssignmentRequired to true.
Update-MgServicePrincipal -ServicePrincipalId $ServicePrincipal.Id -AppRoleAssignmentRequired:$true

# assign an app role to the service principal.
New-MgServicePrincipalAppRoleAssignment -ServicePrincipalId $ServicePrincipal.Id -AppRoleId ([Guid]::Empty.ToString()) -ResourceId $ServicePrincipal.Id -PrincipalId $Group.Id
```

validate from`Microsoft Entra ID → Enterprise applications→ Microsoft Exchange REST API Based PowerShell -> Users and groups`  
![m365 tenant security 1773050028704](https://s3.greenhuang.com/docs/m365-tenant-security-1773050028704.png)

validate from ExchangeOnlineManagement  
```powershell
Install-Module -Name ExchangeOnlineManagement

import-module exchangeonlinemanagement

Connect-ExchangeOnline
```
![m365 tenant security 1773050299714](https://s3.greenhuang.com/docs/m365-tenant-security-1773050299714.png)

![m365 tenant security 1773050375529|652x526](https://s3.greenhuang.com/docs/m365-tenant-security-1773050375529.png)

### Block access to Microsoft Graph PowerShell access
```powershell
# -----------------------------------------------------------
# Connect to Microsoft Graph with required permissions
# -----------------------------------------------------------
Connect-MgGraph -Scopes `
"Directory.ReadWrite.All",
"Application.ReadWrite.All",
"Group.ReadWrite.All",
"RoleManagement.Read.Directory"
```
 
Create a security group that will be allowed to use Azure PowerShell Only Global Admins will be added to this group
```powershell
$Group = New-MgGroup `
 -DisplayName "Azure-PowerShell-Admins" `
 -MailEnabled:$false `
 -SecurityEnabled:$true `
 -MailNickname "azure-powershell-admins" `
 -Description "Users allowed to run Azure PowerShell"

```
  
```powershell
# -----------------------------------------------------------
# STEP 2
# Get Global Administrator role from Entra ID
# -----------------------------------------------------------
$Role = Get-MgDirectoryRole | Where-Object {$_.DisplayName -eq "Global Administrator"}

```

Get all members of the Global Administrator role and Add Global Admins to the Azure PowerShell allowed group  
```powershell
$Admins = Get-MgDirectoryRoleMember -DirectoryRoleId $Role.Id

foreach ($Admin in $Admins) {
    New-MgGroupMember `
        -GroupId $Group.Id `
        -DirectoryObjectId $Admin.Id
}

```

![m365 tenant security 1773051396080](https://s3.greenhuang.com/docs/m365-tenant-security-1773051396080.png)

Create the service principal for Azure PowerShell This registers the enterprise application in your tenant  
```powershell

$ServicePrincipal = New-MgServicePrincipal `
 -AppId "00000003-0000-0000-c000-000000000000"

```
  
```powershell
# -----------------------------------------------------------
# STEP 6
# Validate the service principal creation
# -----------------------------------------------------------
Get-MgServicePrincipal `
 -ServicePrincipalId $ServicePrincipal.Id |
 Format-Table DisplayName, Id, AppId

```
  
```powershell
# -----------------------------------------------------------
# STEP 7
# Require assignment for the application
# This blocks everyone from using Azure PowerShell
# unless explicitly assigned
# -----------------------------------------------------------
Update-MgServicePrincipal `
 -ServicePrincipalId $ServicePrincipal.Id `
 -AppRoleAssignmentRequired:$true

```
  
```powershell
# -----------------------------------------------------------
# STEP 8
# Assign the allowed group to the application
# Only members of Azure-PowerShell-Admins can authenticate
# -----------------------------------------------------------
New-MgServicePrincipalAppRoleAssignment `
 -ServicePrincipalId $ServicePrincipal.Id `
 -AppRoleId ([Guid]::Empty.ToString()) `
 -ResourceId $ServicePrincipal.Id `
 -PrincipalId $Group.Id

```

# Block Email Auto-Forwarding to External Domain
1. Go to the [Microsoft Defender portal](https://learn.microsoft.com/en-us/defender-office-365/outbound-spam-policies-external-email-forwarding) > **Email & collaboration** > **Policies & rules** > **Threat policies** > **Anti-spam**.
2. Edit the **Anti-spam outbound policy (Default)**.
3. Under **Automatic forwarding rules**, set to **Off - Forwarding is disabled**.

![m365 tenant security 1773052777217](https://s3.greenhuang.com/docs/m365-tenant-security-1773052777217.png)

# Manage User Consent to Applications in Microsoft 365  
[Manage User Consent to Applications in Microsoft 365 - AdminDroid Blog](https://blog.admindroid.com/manage-user-consent-to-applications-in-microsoft-365/)  

1. Sign in to [Microsoft Entra Admin Center](https://entra.microsoft.com/).
2. Navigate to the following path: **Applications –> Enterprise applications –> Consent and permissions –> User consent settings**.
3. Then, select the ‘**Do not allow user consent**’ setting to block the users from using all the applications they want to access.
![m365 tenant security 1773053525181](https://s3.greenhuang.com/docs/m365-tenant-security-1773053525181.png)

Once the user consent for apps is blocked, a user will have no right to provide consent to an app they try to access. Therefore, admins can enable **‘Admin Consent Workflow’** settings to securely grant access to the applications.

Also, admins can set a reviewer to check and approve those admin consent requests to prevent any security damages. So, follow the below steps to enable the ‘**Admin Consent Workflow**’ settings.

1. Sign in to [Microsoft Entra Admin Center](https://entra.microsoft.com/).
2. Navigate to **Enterprise applications –> Consent and permissions –> Admin consent settings**.
3. Turn the ‘User can request admin consent to apps they are unable to consent to’ toggle to ‘**Yes**’.
4. Select the **reviewer** (i.e., users, groups, or roles) based on your requirements.
5. Click **Save**.

![m365 tenant security 1773053631303](https://s3.greenhuang.com/docs/m365-tenant-security-1773053631303.png)

# Set Up Idle Session Timeout in Microsoft 365 to Avoid Data Leakages
[Enable Idle Session Timeout in Microsoft 365](https://blog.admindroid.com/easy-yet-efficient-solution-to-avoid-data-leakages-idle-session-timeout/)  

- Open **Microsoft 365 admin center**.
- Navigate to **Settings** –> **Org settings** –> **Security & privacy**.
- Select **Idle session timeout**.
- Check in the box to set the period of inactivity for users to be signed off from Office web apps.
- Choose a **Timeout Value** from the dropdown menu.
- Select **Save** to configure the idle session timeout setting.

![m365 tenant security 1773053924733](https://s3.greenhuang.com/docs/m365-tenant-security-1773053924733.png)

# Set External Email Tagging
[Protect Your Organization from Outlook Phishing Attack using External Email Tagging - AdminDroid Blog](https://blog.admindroid.com/protect-o365-from-phishing-attack-using-external-email-tagging/)  

[Enable External Email Warning & Tag in Office 365 and Outlook](https://lazyadmin.nl/it/add-external-email-warning-to-office-365-and-outlook/) 

```powershell

import-module exchangeonlinemanagement

Connect-ExchangeOnline

# Enable external sender tag and exclude specific senders  
Set-ExternalInOutlook `  
-Enabled $true `  
-AllowList "aaa@gmail.com","bbb@gmail.com"

```

# HTML banner for external email  
[Implement External Email Warning Banners in 365 and Gmail](https://www.mspdemos.com/implement-external-email-warning-banners)  

1. Open **Exchange Admin Center**  
    [https://admin.exchange.microsoft.com](https://admin.exchange.microsoft.com)
2. Go to  
    **Mail flow → Rules**
3. Click **Add a rule (+)** → **Create a new rule**
4. Configure the rule:
	**Name** `External Email Warning Banner`
	**Apply this rule if**
	- **The sender is located → Outside the organization**
	
	(Optional but recommended)
	- **The recipient is located → Inside the organization**
	
	**Do the following**
	- Select **Apply a disclaimer to the message**
	- Choose **Prepend a disclaimer**
	
	This places the banner **at the top of the email**.

5. Click **Enter text** and paste your HTML banner.


Example HTML banner:
```js
<div style="background:#ffeb9c;  
border:1px solid #9C6500;  
padding:8px;  
font-family:Segoe UI,Arial;  
font-size:12px;">  
<b>CAUTION:</b> This email originated from outside the organization.  
Do not click links or open attachments unless you recognize the sender.  
</div>
```


6. Set **Fallback action** `Wrap`
7. (Optional) Add exceptions **Except if → Sender address includes**
8. Click **Next → Save**
9. back to homepage and enable the rule

Exchange will insert the HTML banner into incoming external messages.
![m365 tenant security 1773055602980](https://s3.greenhuang.com/docs/m365-tenant-security-1773055602980.png)

# block a domain/address in Exchange Online
`Microsoft Defender portal -> Email & collaboration → Policies & rules → Threat policies → Tenant Allow/Block List` 
![m365 tenant security 1773056360472](https://s3.greenhuang.com/docs/m365-tenant-security-1773056360472.png)

The block applies **tenant-wide** and can stop both inbound and outbound communication with that domain.  

When to use Exchange Mail Flow Rules  
Use `Exchange → Mail flow → Rules` if you need advanced conditions.  
![m365 tenant security 1773056478127](https://s3.greenhuang.com/docs/m365-tenant-security-1773056478127.png)

| Scenario                       | Best location                      |
| ------------------------------ | ---------------------------------- |
| Block a domain globally        | Defender (Tenant Allow/Block List) |
| Block a specific sender        | Defender                           |
| Temporary block after phishing | Defender                           |
| Complex filtering logic        | Exchange rule                      |
| Add banners/warnings           | Exchange rule                      |
|                                |                                    |

## allow Allow sender to bypass rules
Open Exchange Admin Center -> Mail flow → Rules Add rule → Create a new rule -> The sender address includes → trusted@example.com -> Set the spam confidence level (SCL) to → -1  
![m365 tenant security 1773058932838](https://s3.greenhuang.com/docs/m365-tenant-security-1773058932838.png)

# enable Microsoft 365 audit logs
- Go to the [Microsoft Purview compliance portal](https://compliance.microsoft.com/).
- Under the **Solutions** category, select **Audit**.
- If auditing is not turned on for your organization, a banner prompting **_‘Start recording user and admin activity’_** will be displayed in the **New Search** tab. 
- Click on the banner to enable the audit logs.
![m365 tenant security 1773055871911](https://s3.greenhuang.com/docs/m365-tenant-security-1773055871911.png)

# Create Microsoft 365 Company Branding  
`Entra Admin Center -> Company Branding -> Default sign-in experience -> Customize`  
[Guide to your organization’s branding in Microsoft 365](https://www.codetwo.com/admins-blog/microsoft-365-branding/)  

![m365 tenant security 1773058302788|552x277](https://s3.greenhuang.com/docs/m365-tenant-security-1773058302788.png)