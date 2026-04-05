---
title: SC-300 Identity and Access Administrator Associate exam note
description: how to perpare SC-300 Identity and Access Administrator Associate exam 
---

[Microsoft Certified: Identity and Access Administrator Associate - Certifications \| Microsoft Learn](https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/?practice-assessment-type=certification)   

[Azure built-in roles - Azure RBAC \| Microsoft Learn](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles)  


# mock test

Answer Summary   答案概要

Below is a summary of your answers.  
以下是您的回答摘要。

  返回报告

## Question 1 of 50  第 1 题（共 50 题）

Your company has three divisions. Each division has a helpdesk.  
贵公司有三个部门，每个部门都设有服务台。

You perform the following actions:  
您执行以下操作：

- Create a new Microsoft Entra tenant.  
    创建新的 Microsoft Entra 租户。
- Create a Microsoft Entra user for each employee.  
    为每位员工创建一个 Microsoft Entra 用户。
- Create a security group for each division.  
    为每个部门创建一个安全组。
- Add each user to the security group of their division.  
    将每个用户添加到其所在部门的安全组。
- Create an administrative unit for each division.  
    为每个部门设立一个行政单位。
- Add the security group of each division to the administrative unit of that division.  
    将每个部门的安全组添加到该部门的行政单位中。
- Assign the helpdesk users the Helpdesk Administrator role for the administrative unit.  
    为服务台用户分配管理单元的服务台管理员角色。

The helpdesk users in each division report that they are unable to manage the properties of their users.  
各部门的服务台用户反映，他们无法管理其用户的属性。

You need to ensure that the helpdesk users can manage the users in their division. The solution must follow the principle of least privilege.  
您需要确保服务台用户能够管理其所在部门的用户。该解决方案必须遵循最小权限原则。

What should you do?  
你应该怎么做？

### Your Answer  您的答案

- Add each user to the administrative unit of their division.  
    将每个用户添加到其所在部门的管理单元中。
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- Add each user to the administrative unit of their division.  
    将每个用户添加到其所在部门的管理单元中。
    
    **This answer is correct.  答案正确。**
    

You need to add the members directly to the administrative unit. An administrator scoped to the administrative unit can manage the properties of the group, such as group name or membership, but it cannot manage the properties of the users or devices within that group unless the users and devices are added separately as members of the administrative unit.  
您需要将成员直接添加到管理单元。权限范围限定于该管理单元的管理员可以管理组的属性，例如组名称或成员资格，但除非将用户和设备分别添加为该管理单元的成员，否则无法管理组内用户或设备的属性。

Assigning users a Microsoft Entra ID P1 license does not change the ability of the helpdesk users to manage the users in their division. Assigning the helpdesk users the Global Administrator role would remove the need for administrative units.  
为用户分配 Microsoft Entra ID P1 许可证不会改变服务台用户管理其部门内其他用户的能力。为服务台用户分配全局管理员角色将不再需要管理单元。

[Administrative units in Azure Active Directory - Microsoft Entra - Training | Microsoft Learn  
Azure Active Directory 中的管理单元 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/roles/administrative-units)

[Implement initial configuration of Azure Active Directory - Training | Microsoft Learn  
实施 Azure Active Directory 的初始配置 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/implement-initial-configuration-of-azure-active-directory/)

## Question 2 of 50  第 2 题（共 50 题）

You have a Microsoft Entra tenant that uses a domain named contoso.com.  
您有一个使用名为 contoso.com 的域的 Microsoft Entra 租户。

You need to add a domain named litwareinc.com to the tenant.

Which two types of DNS records can be used to verify the domain name? Each correct answer presents a complete solution.  
可以使用哪两种类型的 DNS 记录来验证域名？每个正确答案都提供了一个完整的解决方案。

### Your Answer  您的答案

- CNAME
    
    **This answer is incorrect.  
    这个答案不正确。**
    
- TXT
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- MX
    
    **This answer is correct.  答案正确。**
    
- TXT
    
    **This answer is correct.  答案正确。**
    

When adding a custom domain, you are prompted to add a TXT or MX record to the DNS hosting provider.  
添加自定义域名时，系统会提示您向 DNS 托管提供商添加 TXT 或 MX 记录。

CNAME, A, SRV, and NS are valid record types, but cannot be used in custom domain validation.  
CNAME、A、SRV 和 NS 都是有效的记录类型，但不能用于自定义域验证。

[Configure and manage custom domains - Training | Microsoft Learn  
配置和管理自定义域 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/implement-initial-configuration-of-azure-active-directory/7-configure-manage-custom-domains)

[Add your custom domain - Azure Active Directory - Microsoft Entra - Training | Microsoft Learn  
添加您的自定义域 - Azure Active Directory - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/fundamentals/add-custom-domain)

## Question 3 of 50

You have a Microsoft Entra tenant that contains 20 administrators. The administrators are responsible for managing devices used by the users in their respective department.

You need to ensure that each administrator can only manage the devices of their respective department.

What should you implement?

### Your Answer  您的答案

- administrative units  行政单位
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- administrative units  行政单位
    
    **This answer is correct.  答案正确。**
    

Administrative units in Microsoft Entra ID allow delegation of administrative permissions to subsets of users or devices, such as by department. This ensures that each administrator can only manage devices within their assigned department. Management groups are for Azure resources, ABAC is for resource-level permissions in Azure RBAC, and scope tags are specific to Intune object delegation.  
Microsoft Entra ID 中的管理单元允许将管理权限委派给特定用户或设备子集，例如按部门委派。这确保每个管理员只能管理其分配部门内的设备。管理组用于 Azure 资源，ABAC 用于 Azure RBAC 中的资源级权限，而范围标记则专门用于 Intune 对象委派。

[Administrative units in Microsoft Entra ID - Training | Microsoft Learn  
Microsoft Entra ID 中的管理单元 - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units)  
[Configure delegation by using administrative units - Training | Microsoft Learn  
使用管理单元配置委派 - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/implement-initial-configuration-of-azure-active-directory/5-configure-delegation-administrative-units)

## Question 4 of 50  第 4 题（共 50 题）

You have a Microsoft Entra tenant that contains two users named User1 and User2.  
您有一个 Microsoft Entra 租户，其中包含两个用户，分别名为 User1 和 User2。

You perform the following actions:  
您执行以下操作：

- Create an administrative unit named Seattle
- Assign the User Administrator role to User1 for the Seattle administrative unit.
- Create a new group named Group1 and add it to the Seattle administrative unit.
- Add User2 to Group1.

Which administrative action can User1 perform?

### Your Answer

- Reset the password of User2.
    
    **This answer is incorrect.**
    

### Correct Answer

- Manage the membership of Group1.
    
    **This answer is correct.**
    

A User Administrator scoped to an administrative unit can manage users and groups within that AU. Since Group1 belongs to the Seattle AU, User1 can manage Group1’s membership. However, User2 is not directly assigned to the AU (only indirectly through group membership), so User1 cannot reset their password. Creating new users defaults them to the directory root, not scoped AUs, and role assignments require the Privileged Role Administrator role.

[Configure delegation by using administrative units - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/implement-initial-configuration-of-azure-active-directory/5-configure-delegation-administrative-units)  
[Administrative units in Microsoft Entra ID - Training | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units)

## Question 5 of 50

You have a Microsoft Entra tenant.

You need to restrict access to the Microsoft Entra admin center for all non-administrative users from all devices.

What should you configure in the Microsoft Entra admin center?

### Your Answer

- Protected actions
    
    **This answer is incorrect.**
    

### Correct Answer

- User settings
    
    **This answer is correct.**
    

The User settings blade in Microsoft Entra includes the option to restrict access to the Entra admin center for non-administrators. This ensures that only users with administrative roles can access the portal. Group settings, device settings, and protected actions manage other aspects of Entra functionality and do not enforce this restriction.

[Restrict member users' default permissions - Training | Microsoft Learn](https://learn.microsoft.com/en-us/entra/fundamentals/users-default-permissions#restrict-member-users-default-permissions)

## Question 6 of 50

You have a Microsoft Entra tenant that contains users your company’s sales and research departments.

The sales department has a support team that must reset passwords and block or unblock sign-ins for the sales department users only. The team must **NOT** be able to manage the research department users.

You need to configure a solution that follows the principle of least privilege.

What should you use?  
你应该用什么？

### Your Answer  您的答案

- administrative units  行政单位
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- administrative units  行政单位
    
    **This answer is correct.  答案正确。**
    

**Objective:  客观的：**

1.1 Configure and manage a Microsoft Entra tenant  
1.1 配置和管理 Microsoft Entra 租户

**What This Item Tests:  本测试项目内容：**

Recommend when to use administrative units  
建议何时使用行政单位

**Additional Reading:  延伸阅读：**

[Configure delegation by using administrative units  
使用管理单元配置委派](https://learn.microsoft.com/en-us/training/modules/implement-initial-configuration-of-azure-active-directory/5-configure-delegation-administrative-units)

[Administrative units in Microsoft Entra ID  
Microsoft Entra ID 中的管理单元](https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units#administrative-units-in-microsoft-entra-id)

[Manage administrative units  
管理行政单位](https://learn.microsoft.com/entra/identity/role-based-access-control/administrative-units#manage-administrative-units)

**Rationale:  理由：**

Creating an administrative unit and assigning the Helpdesk Administrator role scoped to that unit limits the support team’s permissions to only the sales department users, meeting least-privilege requirements.  
创建一个管理单元，并将帮助台管理员角色分配给该单元，即可将支持团队的权限限制在销售部门用户范围内，从而满足最小权限要求。

A custom Microsoft Entra role can include custom permissions, but the permissions are the same for all Microsoft Entra identities; they cannot be different for different users, based on their department.

Azure management groups are hierarchical, container-like structures used to manage access, policies, and compliance across multiple Azure subscriptions.

PIM is a Microsoft Entra ID governance service that enables organizations to manage, control, and monitor access to sensitive resources.

## Question 7 of 50

You have a Microsoft Entra tenant named contoso.com that contains a user named User1.

An administrator accidentally deletes User1 from the tenant.

What is the longest period to successfully restore User1?

### Your Answer

- 30 days
    
    **This answer is correct.**
    

### Correct Answer

- 30 days
    
    **This answer is correct.**
    

Deleted user accounts are permanently removed from Microsoft Entra tenant automatically after 30 days. Restoring a user within the 30-day timeframe will also restore their license allocation and organization information.

[Exercise - restore or remove deleted users - Training | Microsoft Learn](https://learn.microsoft.com/training/modules/create-configure-manage-identities/4-exercise-restore-remove-deleted-users)

[Restore or permanently remove recently deleted user - Microsoft Entra - Training | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/fundamentals/active-directory-users-restore)

## Question 8 of 50

You have a Microsoft 365 E5 subscription.

You need to create a group named Group1 that has dynamic membership.

Which administrative portals can you use?

### Your Answer

- the Microsoft 365 admin center, Microsoft Entra admin center, and Microsoft Intune admin center
    
    **This answer is incorrect.**
    

### Correct Answer

- the Microsoft Entra admin center and Microsoft Intune admin center only
    
    **This answer is correct.**
    

Dynamic membership for user or device groups is supported in the Microsoft Entra admin center and the Microsoft Intune admin center. The Microsoft 365 admin center can create groups but does not support dynamic membership rules.

[Create and manage groups - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/manage-users-and-groups-in-aad/4-groups)  
[Create and manage groups in Microsoft Entra ID - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/manage-azure-active-directory-identities/4-create-manage-groups-azure-active-directory)

## Question 9 of 50

You have a Microsoft Entra tenant.

You have a partner organization named Contoso, Inc. that has a Microsoft Entra tenant.

You need to enable B2B direct connect with Contoso. The solution must ensure that only Contoso users can connect to your tenant.

What should you do?

### Your Answer

- Set the default settings to block all inbound and outbound access and set specific organizational settings for the partner organization.
    
    **This answer is correct.**
    

### Correct Answer

- Set the default settings to block all inbound and outbound access and set specific organizational settings for the partner organization.
    
    **This answer is correct.**
    

To allow the Contoso users to connect to your tenant, but restrict other external users, you must set the default settings to block all inbound and outbound access, and then set the specific organizational settings to override the default settings to block all inbound and outbound access.

Setting the default settings to allow all inbound and outbound access allows the Contoso users to connect to your tenant, but it also open access to the tenant to all organizations. Access is also not restricted to just the Contoso users when only allowing all inbound access.

[B2B direct connect overview - Azure AD - Microsoft Entra - Training | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/external-identities/b2b-direct-connect-overview)

[Implement and manage external identities - Training | Microsoft Learn](https://learn.microsoft.com/training/modules/implement-manage-external-identities/)

## Question 10 of 50

You need to configure the external collaboration settings to allow only specific groups to invite external users.

You select **Only users assigned to specific admin roles can invite guest users**.

Which two built-in groups can invite the external users? Each correct answer presents a complete solution.

### Your Answer

- Privilege Role Administrator
    
    **This answer is incorrect.**
    
- Security Administrator
    
    **This answer is incorrect.**
    

### Correct Answer

- Guest Inviter
    
    **This answer is correct.**
    
- User Administrator
    
    **This answer is correct.**
    

The setting allows only users with administrator roles to invite guests. The administrator roles include Global Administrator, User Administrator, and Guest Inviter. The remaining roles are not able to invite users.

[Manage external collaboration - Training | Microsoft Learn](https://learn.microsoft.com/training/modules/implement-manage-external-identities/2-collaboration)

[Enable B2B external collaboration settings - Azure AD - Microsoft Entra - Training | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/external-identities/external-collaboration-settings-configure#configure-settings-in-the-portal)

## Question 11 of 50

You have a Microsoft Entra tenant.

You have a partner company that has a Microsoft Entra tenant. The tenant contains a user named User1.

You need to ensure that User1 can access your tenant and enumerate all users and groups. The solution must follow the principle of least privilege.

Which two actions should you perform? Each correct answer presents part of the solution.

### Your Answer

- Create a new account for User1 in your environment.  
    在您的环境中为 User1 创建一个新帐户。
    
    **This answer is incorrect.  
    这个答案不正确。**
    
- Invite User1 as a guest user.  
    邀请用户1作为访客用户。
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- Assign User1 the Global Reader role.  
    将用户1分配为全局读取者角色。
    
    **This answer is correct.  答案正确。**
    
- Invite User1 as a guest user.  
    邀请用户1作为访客用户。
    
    **This answer is correct.  答案正确。**
    

A guest user with default permissions cannot enumerate users and groups, but you need to invite someone as a guest user first, and then assign them an additional role. If you assign an administrative role to the guest, then User1 has more permissions and can enumerate users and groups.  
拥有默认权限的访客用户无法枚举用户和组，但您需要先邀请某人作为访客用户，然后为其分配额外的角色。如果您为访客分配了管理员角色，则 User1 将拥有更多权限，并且可以枚举用户和组。

Creating a new account or assigning User1 the Global Administrator role does not follow the principle of least privilege.  
创建新帐户或将 User1 分配给全局管理员角色不符合最小权限原则。

[Default user permissions - Azure Active Directory - Microsoft Entra - Training | Microsoft Learn  
默认用户权限 - Azure Active Directory - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/fundamentals/users-default-permissions)

[Create, configure, and manage identities - Training | Microsoft Learn  
创建、配置和管理身份 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/create-configure-manage-identities/)

## Question 12 of 50

You have an on-premises network that includes a third-party LDAP identity provider.

You plan to deploy a Microsoft Entra tenant and sync user accounts by using Microsoft Entra Connect Sync.

You need to configure authentication for Microsoft Entra Connect Sync. The solution must integrate with the third-party LDAP identity provider.

Which authentication method should you use?  
应该使用哪种身份验证方法？

### Your Answer  您的答案

- password hash synchronization and seamless SSO  
    密码哈希同步和无缝单点登录
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- federation  联邦
    
    **This answer is correct.  答案正确。**
    

Only federation can integrate with an existing federation provider.  
只有联盟才能与现有的联盟提供商集成。

Pass-through authentication and seamless SSO will not allow for integration with an existing federation provider. When using password hash synchronization and seamless SSO, sign-ins are handled in the cloud and will not allow for integration with an existing federation provider.  
传递式身份验证和无缝单点登录 (SSO) 不支持与现有联合身份验证提供商集成。使用密码哈希同步和无缝 SSO 时，登录操作在云端处理，因此不支持与现有联合身份验证提供商集成。

[Authentication for Azure AD hybrid identity solutions - Microsoft Entra - Training | Microsoft Learn  
Azure AD 混合身份解决方案的身份验证 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/hybrid/choose-ad-authn)

## Question 13 of 50  第 13 题（共 50 题）

You have an on-premises Active Directory Domain Services (AD DS) domain.  
您拥有本地 Active Directory 域服务 (AD DS) 域。

You plan to deploy a Microsoft Entra tenant and sync user accounts by using Mirosoft Entra Connect Sync.  
您计划部署 Microsoft Entra 租户，并使用 Microsoft Entra Connect Sync 同步用户帐户。

You need to configure authentication for Microsoft Entra Connect Sync. The solution must meet the following requirements:  
您需要为 Microsoft Entra Connect Sync 配置身份验证。该解决方案必须满足以下要求：

- Users with AD DS credentials must have their sign-ins validated by the AD DS domain.  
    拥有 AD DS 凭据的用户必须通过 AD DS 域验证其登录信息。
- Sign-in disaster recovery and leaked credentials reports must be supported.  
    必须支持登录灾难恢复和泄露凭证报告。
- Administrative effort must be minimized.  
    必须尽可能减少行政工作量。

Which authentication method should you use?  
应该使用哪种身份验证方法？

### Your Answer  您的答案

- password hash synchronization and seamless SSO
    
    **This answer is incorrect.**
    

### Correct Answer

- federation with password hash synchronization
    
    **This answer is correct.**
    

Only federation can integrate with an existing federation provider and password hash synchronization will provide the disaster recovery and leaked credentials report.

If you need a sign-in requirement that is not natively supported, then federation is the only choice.

[Authentication for Azure AD hybrid identity solutions - Microsoft Entra - Training | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/hybrid/choose-ad-authn)

## Question 14 of 50

You have a hybrid Microsoft Entra tenant.

You plan to implement Windows Hello for Business authentication.

Which method authentication flow should you implement?

### Your Answer

- hybrid Microsoft Entra join authentication by using Microsoft Entra Kerberos (cloud Kerberos trust)
    
    **This answer is correct.**
    

### Correct Answer

- hybrid Microsoft Entra join authentication by using Microsoft Entra Kerberos (cloud Kerberos trust)
    
    **This answer is correct.**
    

Microsoft Entra-joined devices authenticate to Azure during sign in and can optionally authenticate to Active Directory. Hybrid Microsoft Entra-joined devices authenticate to Active Directory during sign in and authenticate to Microsoft Entra in the background.

[How Windows Hello for Business works - Authentication - Training | Microsoft Learn](https://learn.microsoft.com/windows/security/identity-protection/hello-for-business/hello-how-it-works-authentication)

[Manage user authentication - Training | Microsoft Learn](https://learn.microsoft.com/training/modules/manage-user-authentication/)

## Question 15 of 50

You have a Microsoft Entra tenant named contoso.com.

You plan to implement Microsoft Entra Multifactor authentication (MFA).  
您计划实施 Microsoft Entra 多重身份验证 (MFA)。

Which primary authentication method should you use?  
您应该使用哪种主要身份验证方法？

### Your Answer  您的答案

- OATH software token  OATH 软件令牌
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- Passkey (FIDO2)  通行密钥（FIDO2）
    
    **This answer is correct.  答案正确。**
    

Out of the choices listed, only FIDO2 security keys can be used for primary authentication. The other authentication methods can serve as a secondary MFA or be used for Microsoft Entra self-service password reset (SSPR).  
在列出的选项中，只有 FIDO2 安全密钥可以用作主要身份验证方式。其他身份验证方法可用作辅助多因素身份验证 (MFA) 或用于 Microsoft Entra 自助密码重置 (SSPR)。

[Authentication methods and features - Microsoft Entra - Training | Microsoft Learn  
身份验证方法和功能 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/authentication/concept-authentication-methods)

[Administer FIDO2 and passwordless authentication methods - Training | Microsoft Learn  
管理 FIDO2 和无密码身份验证方法 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/manage-user-authentication/2-administer-fido2-passwordless-authentication-methods)

## Question 16 of 50  第 16 题（共 50 题）

You have a Microsoft Entra tenant.  
您拥有一个 Microsoft Entra 租户。

A user enters the same incorrect password 10 times.

What occurs to the user account?

### Your Answer

- The account is locked for one minute.
    
    **This answer is incorrect.**
    

### Correct Answer

- The user can sign in immediately by using the correct password.
    
    **This answer is correct.**
    

The user will be able to sign in immediately by using the correct password. If you use the same incorrect password multiple times, this counts as one attempt.

[Prevent attacks using smart lockout - Azure Active Directory - Microsoft Entra - Training | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/authentication/howto-password-smart-lockout)

[Manage user authentication - Training | Microsoft Learn](https://learn.microsoft.com/training/modules/manage-user-authentication/)

## Question 17 of 50

You have a Microsoft Entra tenant.

You plan to implement Conditional Access policies.

You need to identify the signals that can be included as part of the policies.

What should you identify?

### Your Answer

- device operating system, application, and IP location information
    
    **This answer is correct.**
    

### Correct Answer

- device operating system, application, and IP location information
    
    **This answer is correct.**
    

Conditional Access policies can be triggered by users with specific device operating systems, users attempting to access specific applications, and by specific IP location information.

MAC address, network interface speed, and language are not signals that are used to trigger these policies.

[What is Conditional Access in Azure Active Directory? - Microsoft Entra - Training | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/conditional-access/overview)

[Plan, implement, and administer Conditional Access - Training | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-administer-conditional-access/)

## Question 18 of 50

You have a Microsoft Entra tenant.

You plan to deploy a new Conditional Access policy named CAP1.

You need to evaluate CAP1. The solution must minimize the impact on users.

What should you do?

### Your Answer

- Create the policy and set it to report only mode.
    
    **This answer is correct.**
    

### Correct Answer

- Create the policy and set it to report only mode.
    
    **This answer is correct.**
    

Report only mode will give you an overview of what will occur if the policy was on.

While including only a subset of the users can be considered a user impact mitigation, it does not provide you with an idea of the total impact. Creating the policy and modifying the “User Actions” scope will exclude guest accounts, but will also affect internal accounts. Removing other policies will affect other users and will NOT help an administrator evaluate CAP1.

[What is Conditional Access report-only mode? - Training | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/conditional-access/concept-conditional-access-report-only)

[Plan, implement, and administer Conditional Access - Training | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-administer-conditional-access/)

## Question 19 of 50

You have a Microsoft Entra tenant.

All users are licensed for Microsoft Entra ID P2.

You sign in to the Azure portal as a global administrator.

You want to create a Conditional Access policy, but you discover that the option to create a new policy is unavailable.

What prevents you from creating the policy?

### Your Answer

- Security defaults are enabled.
    
    **This answer is correct.**
    

### Correct Answer

- Security defaults are enabled.
    
    **This answer is correct.  答案正确。**
    

If an organization has chosen to implement Conditional Access policies that are used to replace security defaults, then it must first disable security defaults.  
如果一个组织选择实施用于替换安全默认设置的条件访问策略，那么它必须首先禁用安全默认设置。

A cloud app, sign-in risk policy, and user risk policy does not prevent a Conditional Access policy from being created.  
云应用、登录风险策略和用户风险策略并不会阻止创建条件访问策略。

[Exercise - Work with security defaults - Training | Microsoft Learn  
练习 - 使用安全默认设置 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-administer-conditional-access/3-exercise-work-with-security-defaults)

## Question 20 of 50  第 20 题（共 50 题）

You are designing a Conditional Access policy to control user sign-in frequency.  
您正在设计一个条件访问策略来控制用户登录频率。

What can you use to analyze the impact of session controls?  
您可以使用哪些方法来分析会话控制的影响？

### Your Answer  您的答案

- the Microsoft Graph API  
    Microsoft Graph API
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- the What-if tool  假设分析工具
    
    **This answer is correct.  答案正确。**
    

The What-If tool is used to simulate a sign-in by the user to the target application and other conditions based on how you configured your Conditional Access policy. The authentication session management controls show up in the result of the tool.

PowerShell, Azure CLI, and the Microsoft Graph API have methods to manage Conditional Access policies, but they cannot simulate the impact of session controls.

[Implement session management - Training | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-administer-conditional-access/9-implement-session-management)

## Question 21 of 50

You implement a continuous access evaluation (CAE) and want to apply it immediately.

You need to ensure that changes to a Conditional Access policy apply to a specific user immediately.

What are two ways to achieve the goal? Each correct answer presents a complete solution.

### Your Answer

- Run the New-AzureADPolicy cmdlet.
    
    **This answer is incorrect.**
    
- Set DisableADALatopWAMOverride to 0.
    
    **This answer is incorrect.**
    

### Correct Answer

- Run the Revoke-MgUserSign cmdlet.
    
    **This answer is correct.**
    
- Select **Revoke Session** on the user profile page.
    
    **This answer is correct.**
    

When Conditional Access policy or group membership changes must be applied to certain users immediately, you have two options. You can run the Revoke-MgUserSign cmdlet, or you can select **Revoke Session** on the user profile page.  
当需要立即对某些用户应用条件访问策略或组成员身份更改时，您有两种选择。您可以运行 Revoke-MgUserSign cmdlet，也可以在用户配置文件页面上选择 **“撤销会话”** 。

DisableADALatopWAMOverride is a property for Microsoft Office and Web Account Manager (WAM), but it does not reduce how quickly a policy is implemented. The New-AzureADPolicy is used to create a policy.  
DisableADALatopWAMOverride 是 Microsoft Office 和 Web 帐户管理器 (WAM) 的一个属性，但它不会降低策略的执行速度。New-AzureADPolicy 命令用于创建策略。

[Implement continuous access evaluation - Training | Microsoft Learn  
实施持续访问评估 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-administer-conditional-access/11-implement-continuous-access-evaluation)

[Continuous access evaluation in Azure AD - Microsoft Entra - Training | Microsoft Learn  
Azure AD 中的持续访问评估 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/conditional-access/concept-continuous-access-evaluation)

## Question 22 of 50  第 22 题（共 50 题）

You have a hybrid Microsoft Entra tenant named contoso.com.  
您有一个名为 contoso.com 的混合型 Microsoft Entra 租户。

You are creating a new Conditional Access policy named CApolicy1.  
您正在创建一个名为 CApolicy1 的新条件访问策略。

You need to configure CApolicy1 to provide users with access to contoso.com from only specific IP addresses.  
您需要配置 CApolicy1，以便仅允许特定 IP 地址的用户访问 contoso.com。

What should you configure?  
应该配置哪些内容？

### Your Answer  您的答案

- a session control  会话控制
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- named locations  命名地点
    
    **This answer is correct.**
    

To restrict access to specific IP addresses in Conditional Access, you configure Named locations. These allow you to define trusted IP ranges or country-based locations, which the policy can then reference. Cloud apps specify the application scope, session controls manage actions within a session, and user risk assignments address risky sign-ins rather than IP-based restrictions.

[Plan a Conditional Access deployment](https://learn.microsoft.com/en-us/entra/identity/conditional-access/plan-conditional-access)

## Question 23 of 50

Your company purchases a Microsoft Entra ID P2 subscription.

You deploy a new Microsoft Entra tenant.

You create a user named Admin1 and assign Admin1 the Security Administrator role.

You need to ensure that Admin1 can create Conditional Access policies.

What should you do?

### Your Answer

- Assign the Conditional Access Administrator role to Admin1.
    
    **This answer is incorrect.**
    

### Correct Answer

- Disable Security defaults for the Microsoft Entra tenant.
    
    **This answer is correct.**
    

In new Microsoft Entra tenants, Security defaults are enabled by default. When security defaults are enabled, no custom Conditional Access policies can be created, regardless of role. Since Admin1 already has the Security Administrator role and the tenant includes Entra ID P2, the only action required is to disable Security defaults. Assigning Global Administrator or Conditional Access Administrator is unnecessary, and enabling Security defaults would prevent policy creation.

[Plan Conditional Access policies - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/plan-implement-administer-conditional-access/4-plan-conditional-access-policies)  
[Perform basic Conditional Access policy tasks - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/get-started-identity-access-labs/7-create-conditional-access-policy)  
[Plan and implement Conditional Access policies for connections to Azure Virtual Desktop - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/manage-security/6-plan-implement-conditional-access-policies-connections)  
[Create conditional access policies - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/implement-device-compliance/6-create-conditional-access-policies)  
[Require device compliance with Conditional Access - Training | Microsoft Learn](https://learn.microsoft.com/en-us/intune/intune-service/protect/create-conditional-access-intune)  
[Understand Conditional Access - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/policy-security-management-using-microsoft-endpoint-manager/3-conditional-access)

## Question 24 of 50

You have a Microsoft Entra tenant.

All users are licensed for Microsoft Entra ID P2.

You are monitoring, investigating, and remediating risky users in your organization.

Which risk is classified as a sign-in risk?

### Your Answer

- an unknown device
    
    **This answer is incorrect.**
    

### Correct Answer

- an administrator confirming that a user is compromised
    
    **This answer is correct.**
    

An administrator confirming that a user is compromised indicates that an administrator selected **Confirm user compromised** in the Risky users report or used the riskyUsers API. It is included as a nonpremium sign-in risk detection type, which are included with Microsoft Entra ID P1 licenses. Leaked credentials and a suspicious API Traffic are both considered user risk detection types. Unknown devices are NOT considered as sign-in risks.

[What is risk? Azure AD Identity Protection - Microsoft Entra - Training | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/identity-protection/concept-identity-protection-risks)

[Manage Azure AD Identity Protection - Training | Microsoft Learn](https://learn.microsoft.com/training/modules/manage-azure-active-directory-identity-protection/)

## Question 25 of 50

You have an on-premises server named Server1 that runs Windows Server.

You have a Microsoft Entra tenant that contains a group named Group1.

You plan to replace the current VPN solution by using Microsoft Entra Private Access.

You need to ensure that the members of Group1 can connect to on-premises applications by using Microsoft Entra Private Access.

What should you install on Server1?

### Your Answer

- Microsoft Entra provisioning agent
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- Private network connector  
    专用网络连接器
    
    **This answer is correct.  答案正确。**
    

To enable Microsoft Entra Private Access, you must deploy one or more private network connectors on Windows Server machines within the on-premises network. These connectors establish a secure channel to Microsoft’s Global Secure Access service, allowing authorized users to reach on-premises applications without a VPN. The Global Secure Access client is for user devices, not servers. The Microsoft Entra provisioning agent is unrelated to Private Access, and the Windows Remote Access role is the legacy VPN approach being replaced.  
要启用 Microsoft Entra Private Access，您必须在本地网络中的 Windows Server 计算机上部署一个或多个专用网络连接器。这些连接器会建立一条通往 Microsoft Global Secure Access 服务的安全通道，允许授权用户无需 VPN 即可访问本地应用程序。Global Secure Access 客户端适用于用户设备，而非服务器。Microsoft Entra 配置代理与 Private Access 无关，而 Windows 远程访问角色是正在被取代的传统 VPN 方法。

[Microsoft Global Secure Access Deployment Guide for Microsoft Entra Private Access - Training | Microsoft Learn  
Microsoft Entra Private Access 全球安全访问部署指南 - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/architecture/gsa-deployment-guide-private-access)  
[icrosoft Global Secure Access Deployment Guide for Microsoft Entra Internet Access - Training | Microsoft Learn  
Microsoft Entra Internet Access 全球安全访问部署指南 - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/architecture/gsa-deployment-guide-internet-access)  
[Quickstart: Access the Global Secure Access area of the Microsoft Entra admin center - Training | Microsoft Learn  
快速入门：访问 Microsoft Entra 管理中心的全局安全访问区域 - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/global-secure-access/quickstart-access-admin-center)

## Question 26 of 50  第 26 题（共 50 题）

You have an on-premises network.  
您拥有本地网络。

You have a Microsoft 365 E5 subscription.  
您拥有 Microsoft 365 E5 订阅。

You plan to implement Microsoft Entra Private Access and Microsoft Entra Internet Access.

You need to purchase licenses for your company. The solution must minimize costs.

Which type of license should you purchase?

### Your Answer

- Microsoft Entra Suite
    
    **This answer is correct.**
    

### Correct Answer

- Microsoft Entra Suite
    
    **This answer is correct.**
    

Both Microsoft Entra Private Access and Microsoft Entra Internet Access are part of the Global Secure Access product family and are licensed through the Microsoft Entra Suite. Entra ID P1 and P2 provide identity and access management capabilities but do not include these network access services. Entra Workload ID secures service accounts and workloads, not user device connectivity. Therefore, the least costly correct option that meets the requirements is Microsoft Entra Suite.

[Describe Global Secure Access in Microsoft Entra - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/explore-access-management-capabilities/2a-describe-global-secure-access)  
[What is Global Secure Access? - Training | Microsoft Learn](https://learn.microsoft.com/en-us/entra/global-secure-access/overview-what-is-global-secure-access)  
[Microsoft Global Secure Access Deployment Guide for Microsoft Entra Internet Access - Training | Microsoft Learn](https://learn.microsoft.com/en-us/entra/architecture/gsa-deployment-guide-internet-access)  
[Evaluate solutions that use Microsoft Entra Private Access - Training | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/design-solutions-network-security/7-evaluate-solutions-entra-private-access)  
[Learn about Microsoft Entra Private Access - Training | Microsoft Learn](https://learn.microsoft.com/en-us/entra/global-secure-access/concept-private-access)

## Question 27 of 50

You have several virtual machines that have user-assigned managed identities.

You need to remove the managed identities.  
您需要移除托管身份。

Which cmdlet should you run?  
应该运行哪个 cmdlet？

### Your Answer  您的答案

- Update-AzVM
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- Update-AzVM
    
    **This answer is correct.  答案正确。**
    

Using the Update-AzVM cmdlet will allow you to remove the managed identities for your virtual machines.  
使用 Update-AzVM cmdlet 可以删除虚拟机的托管标识。

Set-ADUser modifies an Active Directory user, and Set-ServicePrincipal is used to change service principals in a cloud-based organization. Set-AzVM is used to modify the properties of the Azure VM.  
Set-ADUser 用于修改 Active Directory 用户，Set-ServicePrincipal 用于更改云组织中的服务主体，Set-AzVM 用于修改 Azure 虚拟机的属性。

[Implement managed identities - Training | Microsoft Learn  
实施托管身份 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/implement-managed-identities/)

[Best practice recommendations for managed system identities - Microsoft Entra - Training | Microsoft Learn  
受管系统标识最佳实践建议 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/managed-identity-best-practice-recommendations)

[Configure managed identities on an Azure VM using PowerShell - Azure AD - Microsoft Entra - Training | Microsoft Learn  
使用 PowerShell 在 Azure VM 上配置托管标识 - Azure AD - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/qs-configure-powershell-windows-vm)

## Question 28 of 50  第 28 题（共 50 题）

You have an Azure subscription.

You deploy 10 virtual machines that host a three-tier workload. The workload requires access to a storage account and an Azure SQL database.

You need to configure an identity solution for the workload. The solution must minimize the number of required identities.

Which type of identity should you use?

### Your Answer

- a service principal that is assigned to each tier
    
    **This answer is incorrect.**
    

### Correct Answer

- a user-assigned managed identity  
    用户分配的托管身份
    
    **This answer is correct.  答案正确。**
    

The correct identity type is a user-assigned managed identity, because a single managed identity can be created and assigned to multiple virtual machines, allowing them to securely access Azure resources with minimal identity sprawl. A system-assigned managed identity would create a separate identity for each VM, increasing administrative overhead. Service principals require manual secret management and would still introduce multiple identities. Microsoft Entra user accounts are intended for human users, not workloads.  
正确的身份类型是用户分配的托管身份，因为可以创建一个托管身份并将其分配给多个虚拟机，从而使它们能够安全地访问 Azure 资源，并最大限度地减少身份扩散。系统分配的托管身份会为每个虚拟机创建一个单独的身份，从而增加管理开销。服务主体需要手动管理密钥，并且仍然会引入多个身份。Microsoft Entra 用户帐户是为人类用户设计的，而不是为工作负载设计的。

[Managed identity best practice recommendations - Training | Microsoft Learn  
托管身份最佳实践建议 - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/managed-identity-best-practice-recommendations)  
[What is managed identities for Azure resources? - Training | Microsoft Learn  
什么是 Azure 资源的托管标识？ - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)  
[Configure managed identities - Training | Microsoft Learn  
配置托管标识 - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/implement-managed-identities/4-configure-managed-identities)

## Question 29 of 50  第 29 题（共 50 题）

You have an Azure subscription that contains a storage account named storage1 and a virtual machine named VM1.  
您有一个 Azure 订阅，其中包含一个名为 storage1 的存储帐户和一个名为 VM1 的虚拟机。

VM1 is deployed by using a custom Azure Resource Manager (ARM) template.  
VM1 是使用自定义 Azure 资源管理器 (ARM) 模板进行部署的。

You need to ensure that VM1 can read the data that is stored in storage1.  
您需要确保 VM1 可以读取存储在 storage1 中的数据。

Which VM1 setting should you modify in the Azure portal?  
您应该在 Azure 门户中修改哪个 VM1 设置？

### Your Answer  您的答案

- Identity  身份
    
    **This answer is correct.  答案正确。**
    

### Correct Answer

- Identity
    
    **This answer is correct.**
    

The correct setting is Identity, because enabling a managed identity on the VM allows VM1 to securely authenticate to Azure resources without storing credentials. Once enabled, the VM’s managed identity can be assigned the Storage Blob Data Reader role on storage1, giving VM1 access to read its data. Access control (IAM) is applied at the storage account level, not directly on the VM. Extensions and Configuration settings are unrelated to identity.  
正确的设置是“身份”，因为在虚拟机上启用托管身份后，VM1 无需存储凭据即可安全地对 Azure 资源进行身份验证。启用后，可以将虚拟机的托管身份分配给 storage1 上的“存储 Blob 数据读取者”角色，从而使 VM1 能够读取其数据。访问控制（身份和访问管理）应用于存储帐户级别，而不是直接应用于虚拟机。扩展和配置设置与身份无关。

[Configure managed identities on Azure virtual machines (VMs)  
在 Azure 虚拟机 (VM) 上配置托管标识](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/qs-configure-sdk-windows-vm)  
[Configure managed identities  
配置托管身份](https://learn.microsoft.com/en-us/training/modules/implement-managed-identities/4-configure-managed-identities)

## Question 30 of 50  第 30 题（共 50 题）

You have an Azure subscription that contains two virtual machines named VM1 and VM2 and a storage account named storage1. Both virtual machines run the same application that access blobs in storage1.  
您有一个 Azure 订阅，其中包含两台名为 VM1 和 VM2 的虚拟机以及一个名为 storage1 的存储帐户。两台虚拟机运行相同的应用程序，该应用程序访问 storage1 中的 Blob。

You need to configure the same identity for VM1 and VM2 and minimize role-based access control (RBAC) role assignments.  
您需要为 VM1 和 VM2 配置相同的身份，并尽量减少基于角色的访问控制 (RBAC) 角色分配。

Which type of identity should you use?  
你应该使用哪种类型的身份？

### Your Answer  您的答案

- a user-assigned managed identity  
    用户分配的托管身份
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- a user-assigned managed identity  
    用户分配的托管身份
    
    **This answer is correct.**
    

**Objective:**

3.1 Plan and implement identities for applications and Azure workloads

**What This Item Tests:**

Assign a managed identity to an Azure resource

**Additional Reading:**

[Choosing system or user-assigned managed identities](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/managed-identity-best-practice-recommendations#choosing-system-or-user-assigned-managed-identities)

[Access Azure resources with managed identities](https://learn.microsoft.com/training/modules/implement-access-management-for-azure-resources/5-access-managed-identities)

[Managed identity best practice recommendations - Maintenance](https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/managed-identity-best-practice-recommendations#maintenance)

[Managed identities for Azure resources frequently asked questions](https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/managed-identities-faq)

**Rationale:**

A user-assigned managed identity can be attached to multiple Azure resources, enabling VM1 and VM2 to share the same identity and requiring only one RBAC role assignment on storage1.

System-assigned managed identities are unique to each virtual machine and require separate role assignments.

A Microsoft Entra user account introduces credential management and cannot be used as an Azure virtual machine identity.

A gMSA is used in on-premises Active Directory environments and is inappropriate for Azure managed identity scenarios.

## Question 31 of 50  第 31 题（共 50 题）

You have an Azure subscription.  
您拥有 Azure 订阅。

You plan to deploy an enterprise app.  
您计划部署一款企业应用。

You need to identify the methods that can be used to implement federation-based SSO for the app.  
您需要确定可用于为应用程序实现基于联合身份验证的单点登录 (SSO) 的方法。

Which three methods should you identify? Each correct answer presents a complete solution.  
你应该找出哪三种方法？每个正确答案都代表一个完整的解决方案。

### Your Answer  您的答案

- linked-based SSO  基于链接的单点登录
    
    **This answer is incorrect.  
    这个答案不正确。**
    
- OAuth
    
    **This answer is correct.  答案正确。**
    
- OpenID Connect
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- OAuth
    
    **This answer is correct.**
    
- OpenID Connect
    
    **This answer is correct.**
    
- SAML
    
    **This answer is correct.  答案正确。**
    

Choosing an SSO method depends on how the app is configured for authentication. Cloud apps can use federation-based options, such as OpenID Connect, OAuth, and SAML.  
选择单点登录 (SSO) 方法取决于应用程序的身份验证配置。云应用程序可以使用基于联合身份验证的选项，例如 OpenID Connect、OAuth 和 SAML。

Password-based SSO and linked-based SSO are not federation-based options.  
基于密码的 SSO 和基于链接的 SSO 不是基于联合身份验证的选项。

[What is single sign-on? - Microsoft Entra - Training | Microsoft Learn  
什么是单点登录？ - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/manage-apps/what-is-single-sign-on)

[Plan and design the integration of enterprise apps for SSO - Training | Microsoft Learn  
规划和设计企业应用集成以实现单点登录 (SSO) - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-design-integration-of-enterprise-apps-for-sso/)

## Question 32 of 50  第 32 题（共 50 题）

You have an on-premises network that contains a legacy app named App1.  
您有一个本地网络，其中包含一个名为 App1 的旧版应用程序。

You have an Azure subscription.  
您拥有 Azure 订阅。

You plan to publish App1 and provide cloud access.  
您计划发布 App1 并提供云访问。

You need to ensure that Microsoft Entra users can authenticate to App1 by using Microsoft Entra Multifactor authentication (MFA).  
您需要确保 Microsoft Entra 用户可以使用 Microsoft Entra 多重身份验证 (MFA) 对 App1 进行身份验证。

What should you do first?  
首先应该做什么？

### Your Answer  您的答案

- Deploy a Microsoft Entra Application Proxy.
    
    **This answer is correct.**
    

### Correct Answer  正确答案

- Deploy a Microsoft Entra Application Proxy.  
    部署 Microsoft Entra 应用程序代理。
    
    **This answer is correct.  答案正确。**
    

If you have on-premises legacy applications published for cloud access, then one of the prerequisites is to deploy an Application Proxy.  
如果您有已发布到云端访问的本地传统应用程序，那么前提条件之一是部署应用程序代理。

If you have a cloud-only identity environment with modern authentication, then you need to create the app registration, but in this case, we have an on-premises network. You should only deploy Microsoft Entra Connect and sync user identities between the on-premises and Microsoft Entra environments in the case of hybrid identity scenarios, which is not the case here.  
如果您拥有一个纯云身份环境并采用新式身份验证，则需要创建应用注册。但本例中，我们使用的是本地网络。只有在混合身份场景下，才应部署 Microsoft Entra Connect 并在本地环境和 Microsoft Entra 环境之间同步用户身份，而本例并非混合身份场景。

[Deployment considerations for Azure AD Multi-Factor Authentication - Microsoft Entra - Training | Microsoft Learn  
Azure AD 多重身份验证部署注意事项 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/authentication/howto-mfa-getstarted)

[Secure Azure Active Directory users with Multi-Factor Authentication - Training | Microsoft Learn  
使用多重身份验证保护 Azure Active Directory 用户 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/secure-aad-users-with-mfa/)

## Question 33 of 50  第 33 题（共 50 题）

You are configuring application permissions for a new app registration in a Microsoft Entra tenant. The app will run as background services without a signed-in user present.  
您正在为 Microsoft Entra 租户中新注册的应用配置应用程序权限。该应用将作为后台服务运行，无需用户登录。

Which type of permissions should you use for the app registration?  
应用注册时应该使用哪种类型的权限？

### Your Answer

- application permissions
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- application permissions  应用程序权限
    
    **This answer is correct.  答案正确。**
    

Application permissions are used by apps that run without a signed-in user present, such as apps that run as background services or daemons. Only an administrator can consent to application permissions.  
应用程序权限用于在没有用户登录的情况下运行的应用程序，例如作为后台服务或守护进程运行的应用程序。只有管理员才能授予应用程序权限。

Delegated permissions are used by apps that have a signed-in user present. If an app performs a sign-in by using OpenID Connect, it must request the openid scope.  
委托权限适用于已登录用户的应用。如果应用使用 OpenID Connect 执行登录，则必须请求 openid 作用域。

[Implement app registration - Training | Microsoft Learn  
应用注册实施 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/implement-app-registration/)

[Configure application permission - Training | Microsoft Learn  
配置应用程序权限 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/implement-app-registration/5-configure-application-permission)

## Question 34 of 50  第 34 题（共 50 题）

You have a Microsoft Entra tenant associated to an Azure subscription. The subscription contains all of the resources for your company’s marketing department.  
您拥有一个与 Azure 订阅关联的 Microsoft Entra 租户。该订阅包含贵公司市场营销部门所需的所有资源。

Your development team wants to use social accounts to grant access to a new app for the marketing department.  
您的开发团队希望使用社交账号来授予市场部门对一款新应用的访问权限。

What should you configure in Microsoft Entra ID?  
Microsoft Entra ID 中应该配置哪些内容？

### Your Answer

- Microsoft Entra Application Proxy  
    Microsoft Entra 应用程序代理
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- an app registration  应用程序注册
    
    **This answer is correct.  答案正确。**
    

An app registration allows you to use single-tenant, multitenant, or social account sign-ins.  
应用程序注册允许您使用单租户、多租户或社交帐户登录。

App configuration policies can help you eliminate app set up issues but not provide redirect URI. Application Proxy provides secure remote access to on-premises web app. Azure App Configuration provides a service to centrally manage application settings and feature flags.  
应用配置策略可以帮助您消除应用设置问题，但无法提供重定向 URI。应用程序代理提供对本地 Web 应用的安全远程访问。Azure 应用配置提供一项服务，用于集中管理应用程序设置和功能标志。

[Application model - Microsoft Entra - Training | Microsoft Learn  
应用模型 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/develop/application-model#register-an-application)

[Implement app registration - Training | Microsoft Learn  
应用注册实施 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/implement-app-registration/)

## Question 35 of 50  第 35 题（共 50 题）

You have an Azure subscription.  
您拥有 Azure 订阅。

You are evaluating Microsoft Defender for Cloud Apps.  
您正在评估 Microsoft Defender 云应用版。

You need to identify the four subcategories used to score apps.  
你需要确定用于对应用程序进行评分的四个子类别。

What should you identify?  
你应该识别出什么？

### Your Answer  您的答案

- Privacy, Security, Compliance, and Legal  
    隐私、安全、合规和法律
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- General, Security, Compliance, and Legal  
    一般规定、安全、合规和法律
    
    **This answer is correct.  答案正确。**
    

General, Security, Compliance, and Legal are the four subcategories that are used to score apps and can be used when evaluating Defender for Cloud Apps.  
通用、安全、合规和法律是用于对应用程序进行评分的四个子类别，可以在评估 Defender for Cloud Apps 时使用。

[Working with the risk score - Microsoft Defender for Cloud Apps - Training | Microsoft Learn  
使用风险评分 - Microsoft Defender 云应用 - 培训 | Microsoft Learn](https://learn.microsoft.com/defender-cloud-apps/risk-score#customizing-the-risk-score)

[Discover apps by using Microsoft Defender for Cloud Apps and Active Directory Federation Services app report - Training | Microsoft Learn  
使用 Microsoft Defender for Cloud Apps 和 Active Directory 联合身份验证服务应用报告发现应用 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-design-integration-of-enterprise-apps-for-sso/2-discover-apps-use-microsoft-cloud-app-security-app-report?ns-enrollment-type=learningpath&ns-enrollment-id=learn.wwl.implement-access-management-for-apps)

## Question 36 of 50  第 36 题（共 50 题）

You have a Microsoft 365 E5 subscription that uses Microsoft Defender for Cloud Apps with App Governance.  
您拥有使用 Microsoft Defender for Cloud Apps 和 App Governance 的 Microsoft 365 E5 订阅。

You plan to create an app policy in app governance.  
您计划在应用治理中创建应用策略。

You need to find apps that have unused Microsoft Graph API permissions. The solution must minimize administrative effort.  
您需要找到那些拥有未使用的 Microsoft Graph API 权限的应用。该解决方案必须尽可能减少管理工作量。

Which template should you use?  
应该使用哪个模板？

### Your Answer  您的答案

- Overprivileged app  权限过高的应用
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- Overprivileged app  权限过高的应用
    
    **This answer is correct.  答案正确。**
    

Overprivileged app is the correct template to use to find apps that have unused Microsoft Graph API permissions.  
“权限过高的应用”是查找具有未使用的 Microsoft Graph API 权限的应用的正确模板。

The New highly privileged app template will find newly registered apps that have been granted write access and other powerful Microsoft Graph API permissions, and New uncertified app is the template to use to find newly registered apps that do not have publisher attestation or Microsoft 365 certification.  
“新建高权限应用”模板将查找新注册的、已被授予写入权限和其他强大的 Microsoft Graph API 权限的应用；“新建未认证应用”模板用于查找新注册的、没有发布者证明或 Microsoft 365 认证的应用。

[Create app policies on app governance - Microsoft Defender for Cloud Apps - Training | Microsoft Learn  
创建应用治理策略 - Microsoft Defender for Cloud Apps - 培训 | Microsoft Learn](https://learn.microsoft.com/defender-cloud-apps/app-governance-app-policies-create#app-policy-templates)

[Plan and design the integration of enterprise apps for SSO - Training | Microsoft Learn  
规划和设计企业应用集成以实现单点登录 (SSO) - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-design-integration-of-enterprise-apps-for-sso/)

## Question 37 of 50  第 37 题（共 50 题）

You are implementing Microsoft Defender for Cloud Apps.  
您正在为云应用部署 Microsoft Defender。

You discover that no data appears on the Cloud Discovery dashboard.  
您发现云发现仪表板上没有任何数据显示。

You need to get data onto the Cloud Discovery dashboard.  
您需要将数据上传到云发现控制面板。

What should you use?  
你应该用什么？

### Your Answer  您的答案

- an app connector  应用程序连接器
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- a snapshot report  快照报告
    
    **This answer is correct.  答案正确。**
    

Before trying to use the automatic log collector, it is important to upload a log manually and let Defender for Cloud Apps parse it. Discovery and activity policies are valid options for policies, but they do not provide information to be processed and shown on the Cloud Discovery dashboard. App connector can provide visibility and control by using Defender for Cloud Apps, but not information to be analyzed from the Cloud Discovery dashboard.  
在尝试使用自动日志收集器之前，请务必手动上传日志，并让 Defender for Cloud Apps 对其进行解析。发现策略和活动策略都是有效的策略选项，但它们不会提供可在 Cloud Discovery 控制面板上处理和显示的信息。应用连接器可以通过 Defender for Cloud Apps 提供可见性和控制，但无法提供可在 Cloud Discovery 控制面板上分析的信息。

[Secure your cloud apps and services with Defender for Cloud Apps - Training | Microsoft Learn  
使用 Defender for Cloud Apps 保护您的云应用和服务 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/microsoft-cloud-app-security/)

[Deploy Cloud Discovery - Training | Microsoft Learn  
部署云发现 - 培训 | Microsoft Learn](https://learn.microsoft.com/defender-cloud-apps/set-up-cloud-discovery)

[Create snapshot reports of Cloud Discovery cloud app use - Training | Microsoft Learn  
创建 Cloud Discovery 云应用使用情况的快照报告 - 培训 | Microsoft Learn](https://learn.microsoft.com/defender-cloud-apps/create-snapshot-cloud-discovery-reports)

## Question 38 of 50  第 38 题（共 50 题）

You use Microsoft Defender for Cloud Apps.  
您使用 Microsoft Defender for Cloud Apps。

Cloud discovery is configured to use a log collector that receives Syslog data from an on-premises firewall.  
云发现功能配置为使用日志收集器，该收集器从本地防火墙接收 Syslog 数据。

You manually upload a firewall log file.  
您需要手动上传防火墙日志文件。

After processing completes successfully, no cloud apps appear in the snapshot report, although outbound web traffic occurred during the logged time period.  
处理成功完成后，快照报告中没有出现任何云应用，尽管在记录的时间段内发生了出站网络流量。

You need to ensure that the log is parsed and cloud app activity appears in the Cloud Discovery dashboard.  
您需要确保日志已被解析，并且云应用程序活动显示在云发现仪表板中。

What should you do?  
你应该怎么做？

### Your Answer  您的答案

- Select the **Other** data source so the log is submitted for parser development.
    
    **This answer is correct.**
    

### Correct Answer

- Select the **Other** data source so the log is submitted for parser development.  
    选择“ **其他**数据源”，以便将日志提交给解析器开发。
    
    **This answer is correct.  答案正确。**
    

**Objective:  客观的：**

3.4 Manage and monitor app access by using Microsoft Defender for Cloud Apps  
3.4 使用 Microsoft Defender for Cloud Apps 管理和监控应用访问

**What This Item Tests:  本测试项目内容：**

Configure and analyze cloud discovery results by using Defender for Cloud Apps  
使用 Defender for Cloud Apps 配置和分析云发现结果

**Additional Reading:  延伸阅读：**

[Log parsing errors  日志解析错误](https://learn.microsoft.com/en-us/defender-cloud-apps/troubleshooting-cloud-discovery#log-parsing-errors)

[Discover and assess cloud apps  
发现并评估云应用](https://learn.microsoft.com/defender-cloud-apps/best-practices#discover-and-assess-cloud-apps)

[Phase 1: Discover and identify Shadow IT  
第一阶段：发现并识别影子 IT](https://learn.microsoft.com/defender-cloud-apps/tutorial-shadow-it#how-to-discover-and-manage-shadow-it-in-your-network)

**Rationale:  理由：**

Selecting the **Other** data source submits the log for parser development when the firewall format is not currently supported, enabling cloud discovery to correctly parse cloud app transactions.  
选择 **“其他**数据源”会在防火墙格式当前不受支持时提交日志以进行解析器开发，从而使云发现能够正确解析云应用程序事务。

Connecting Microsoft 365 through an app connector is unrelated to firewall log analysis.  
通过应用连接器连接 Microsoft 365 与防火墙日志分析无关。

Creating a session policy affects real-time session control, not log parsing.  
创建会话策略会影响实时会话控制，不会影响日志解析。

Uploading a newer log does not resolve a parsing or format issue.  
上传新的日志文件并不能解决解析或格式问题。

## Question 39 of 50  第 39 题（共 50 题）

You have a Microsoft Entra tenant.

You have an Entitlement management catalog named Catalog1 that contains the following resources:

- A team named Team1  
    一个名为 Team1 的团队
- An enterprise application named App1  
    一个名为 App1 的企业应用程序

You need to create an access package that contains the resources from Catalog1 and only allows requests from a partner organization named contoso.com.  
您需要创建一个访问包，其中包含 Catalog1 中的资源，并且只允许来自名为 contoso.com 的合作伙伴组织的请求。

What should you do first?  
首先应该做什么？

### Your Answer  您的答案

- Add contoso.com as a connected organization.  
    添加 contoso.com 作为关联组织。
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- Add contoso.com as a connected organization.  
    添加 contoso.com 作为关联组织。
    
    **This answer is correct.  答案正确。**
    

Correct - With entitlement management, you can collaborate with people outside your organization. To collaborate with users in an external Microsoft Entra tenant, you need to first add the users as a connected organization.  
正确 - 通过权限管理，您可以与组织外部的人员协作。要与外部 Microsoft Entra 租户中的用户协作，您需要先将这些用户添加为连接的组织。

Incorrect – The lifecycle workflow will determine the time limits and access reviews of the access package, not the initial access.  
错误——生命周期工作流程将决定访问包的时间限制和访问审查，而不是初始访问权限。

Incorrect – Access review is completed after a user has access to the access package.

Incorrect – ToU does not provide any access, only the verification of an agreement to the proper terms of use.

[Plan and implement entitlement management - Training | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-entitlement-management/)

[What is entitlement management? - Microsoft Entra - Training | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/governance/entitlement-management-overview)

[Add a connected organization in entitlement management - Microsoft Entra - Training | Microsoft Learn  
在权限管理中添加关联的组织 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/governance/entitlement-management-organization)

## Question 40 of 50  第 40 题（共 50 题）

You have a Microsoft Entra tenant that uses entitlement management.  
您拥有一个使用权限管理的 Microsoft Entra 租户。

You have an access package named Package1 that allows requests from only a specific connected organization and assigns access for 90 days.  
您有一个名为 Package1 的访问包，该访问包仅允许来自特定连接组织的请求，并分配 90 天的访问权限。

After the access package assignment expires, external users lose access to Package1, but their guest accounts remain in the directory.  
访问包分配到期后，外部用户将失去对 Package1 的访问权限，但他们的访客帐户仍保留在目录中。

You need to automatically remove the external users from the directory when their access package assignments expire and they have no other assignments.  
当外部用户的访问权限包分配到期且没有其他分配时，您需要自动从目录中删除这些用户。

What should you configure?  
应该配置哪些内容？

### Your Answer  您的答案

- a connected organization in the Package1 policy  
    Package1 政策中的关联组织
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- the Lifecycle of external users setting
    
    **This answer is correct.**
    

**Objective:**

4.1 Plan and implement entitlement management in Microsoft Entra

**What This Item Tests:**

Plan entitlements

**Additional Reading:**

[External access governance recommendations  
外部准入治理建议](https://learn.microsoft.com/en-us/entra/architecture/6-secure-access-entitlement-managment#external-access-governance-recommendations)

[Describe entitlement management Completed  
描述权益管理已完成](https://learn.microsoft.com/en-us/training/modules/describe-identity-protection-governance-capabilities/3a-describe-entitlement-management-terms-use)

[Define access packages  定义访问包](https://learn.microsoft.com/en-us/training/modules/plan-implement-entitlement-management/2-define-access-packages)

[Entitlement management Completed  
权益管理已完成](https://learn.microsoft.com/en-us/training/modules/manage-security-controls-identity-access/44-entitlement-management)

**Rationale:  理由：**

Enabling the Lifecycle of external users setting in entitlement management ensures that guest accounts are removed automatically when they no longer have any active access package assignments.  
在权限管理中启用外部用户生命周期设置，可确保访客帐户在不再有任何有效访问包分配时自动删除。

Conditional Access and ToU affect authentication and agreement requirements but do not manage account lifecycle.  
条件访问和使用条款会影响身份验证和协议要求，但不管理帐户生命周期。

Multi-stage approval controls request workflow only.  
多阶段审批控制仅用于请求工作流程。

## Question 41 of 50  第 41 题（共 50 题）

You need to identify all the access reviews that have a deny decision for a Microsoft 365 group.  
您需要找出所有对 Microsoft 365 组做出拒绝决定的访问权限审查。

Where can you get this information?  
您可以从哪里获得这些信息？

### Your Answer  您的答案

- Microsoft Purview eDiscovery  
    微软 Purview 电子发现
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- Microsoft Entra audit logs
    
    **This answer is correct.  答案正确。**
    

Access review activities are recorded and available in the Microsoft Entra audit logs. You can filter the audit data by category, activity type, and date range.  
访问审查活动会被记录并保存在 Microsoft Entra 审核日志中。您可以按类别、活动类型和日期范围筛选审核数据。

The activity logs do not provide records from an access review and Microsoft 365 Defender shows security-related information and actions, not access reviews. Conditional Access allows you to use an access package, but it does not show information about access reviews.  
活动日志不提供访问审查记录，Microsoft 365 Defender 显示的是安全相关信息和操作，而不是访问审查。条件访问允许您使用访问控制包，但它不显示有关访问审查的信息。

[Plan a Microsoft Entra access reviews deployment - Microsoft Entra - Training | Microsoft Learn  
规划 Microsoft Entra 访问审查部署 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/governance/deploy-access-reviews#monitor-access-reviews)

[Plan, implement, and manage access review - Training | Microsoft Learn  
规划、实施和管理访问权限审查 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-manage-access-review/)

## Question 42 of 50  第 42 题（共 50 题）

You have a Microsoft Entra tenant that contains a user named Admin1.  
您有一个 Microsoft Entra 租户，其中包含一个名为 Admin1 的用户。

You plan to provide Admin1 with access to the Application Developer role. The solution must meet the following requirements:  
您计划授予管理员 Admin1 应用程序开发人员角色权限。该解决方案必须满足以下要求：

- Multifactor authentication (MFA) must be used when requesting access to the role.  
    申请角色访问权限时必须使用多因素身份验证 (MFA)。
- Access must only be valid for a maximum of three hours.  
    访问权限最多只能持续三个小时。

What should you configure?  
应该配置哪些内容？

### Your Answer  您的答案

- Privileged Identity Management  
    特权身份管理
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- Privileged Identity Management  
    特权身份管理
    
    **This answer is correct.  答案正确。**
    

Correct - Privileged Identity Management (PIM) in the Microsoft Entra role settings defines role assignment properties, MFA, and approval requirements for activation, assignment maximum duration, notification settings, as well as many other settings.  
正确 - Microsoft Entra 角色设置中的特权身份管理 (PIM) 定义了角色分配属性、MFA 和激活审批要求、分配最大持续时间、通知设置以及许多其他设置。

Incorrect – Access reviews evaluate the continued availability of a role, not enforcement of MFA.  
错误——访问权限审查评估的是角色是否持续可用，而不是多因素身份验证的执行情况。

Incorrect – Conditional Access can enforce MFA for access to an application but does not provide time-bound access to a role.  
错误——条件访问可以强制对应用程序的访问使用 MFA，但不能提供对角色的限时访问权限。

Incorrect – Entitlement management allows you to enforce access to a catalog of applications for an amount of time but does not enforce MFA or specific roles.  
错误——权限管理允许您在一段时间内强制执行对应用程序目录的访问权限，但不会强制执行多因素身份验证或特定角色。

[Plan and implement privileged access - Training | Microsoft Learn  
规划和实施特权访问 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-privileged-access/)

[Configure Azure AD role settings in PIM - Microsoft Entra - Training | Microsoft Learn  
在 PIM 中配置 Azure AD 角色设置 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/privileged-identity-management/pim-how-to-change-default-settings)

## Question 43 of 50  第 43 题（共 50 题）

You are planning the implementation of Azure roles in Microsoft Entra Privileged Identity Management (PIM).  
您计划在 Microsoft Entra Privileged Identity Management (PIM) 中实施 Azure 角色。

You need users from your IT department to have security administrator rights. The solution must require an approval process.  
您需要为 IT 部门的用户授予安全管理员权限。该解决方案必须包含审批流程。

What should you configure for the role assignment?  
角色分配应该如何配置？

### Your Answer  您的答案

- a Conditional Access policy
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- an eligible assignment  符合条件的分配
    
    **This answer is correct.  答案正确。**
    

Eligible assignments require the member of the role to perform an action to use the role. Actions might include performing an MFA check, providing a business justification, or requesting approval from designated approvers. Active assignments do not require the member to perform any actions to use the role. Members assigned as active have the privileges that are always assigned to the role.  
符合条件的分配要求角色成员执行特定操作才能使用该角色。这些操作可能包括执行多因素身份验证 (MFA) 检查、提供业务理由或请求指定审批人的批准。激活的分配则不需要成员执行任何操作即可使用该角色。被分配为激活状态的成员拥有该角色始终具备的权限。

[Plan and implement privileged access - Training | Microsoft Learn  
规划和实施特权访问 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-privileged-access/)

[Exercise assign Azure resource roles in Privileged Identity Management - Training | Microsoft Learn  
在特权身份管理中分配 Azure 资源角色练习 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-privileged-access/6-assign-azure-resource-roles-privileged-identity-management)

## Question 44 of 50  第 44 题（共 50 题）

You plan to set up just-in-time access for the member and owner role of a Microsoft Entra security group.  
您计划为 Microsoft Entra 安全组的成员和所有者角色设置即时访问权限。

In addition, you need to set up Microsoft Entra Privileged Identity Management (PIM) for other permissions across Microsoft online services such as Microsoft Intune and Azure Key Vault.  
此外，您还需要为 Microsoft 在线服务（例如 Microsoft Intune 和 Azure Key Vault）中的其他权限设置 Microsoft Entra 特权身份管理 (PIM)。

Which option on the Privileged Identity Management blade should you use?  
在“特权身份管理”边栏中，您应该使用哪个选项？

### Your Answer  您的答案

- Microsoft Entra roles  Microsoft 登录角色
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- Groups  团体
    
    **This answer is correct.  答案正确。**
    

To set up just-in-time access for the member and owner role of a Microsoft Entra security group, you can use Privileged Access Groups. This not only gives you an alternative way to set up PIM for Microsoft Entra roles and Azure roles, it also allows you to set up PIM for other permissions across Microsoft online services such as Intune, Azure Key Vault, and AIP.  
要为 Microsoft Entra 安全组的成员和所有者角色设置即时访问权限，可以使用特权访问组 (PGI)。这不仅为您提供了一种为 Microsoft Entra 角色和 Azure 角色设置 PIM 的替代方法，还允许您为 Microsoft 在线服务（例如 Intune、Azure Key Vault 和 AIP）中的其他权限设置 PIM。

Azure roles and Microsoft Entra roles grant just-in-time access to specific objects (users or groups) and users can be assigned to Privileged Access Groups to then grant just-in-time access.  
Azure 角色和 Microsoft Entra 角色可授予对特定对象（用户或组）的即时访问权限，并且可以将用户分配到特权访问组，然后授予即时访问权限。

[Plan a Privileged Identity Management deployment - Azure AD - Microsoft Entra - Training | Microsoft Learn  
规划特权身份管理部署 - Azure AD - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/privileged-identity-management/pim-deployment-plan)

[What's the difference between Privileged Access groups and role-assignable groups - Azure AD - Microsoft Entra - Training | Microsoft Learn  
特权访问组和角色分配组有什么区别？- Azure AD - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/privileged-identity-management/concept-privileged-access-versus-role-assignable)

[Plan and implement privileged access - Training | Microsoft Learn  
规划和实施特权访问 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/plan-implement-privileged-access/)

## Question 45 of 50  第 45 题（共 50 题）

You have a Microsoft Entra tenant that uses Privileged Identity Management (PIM) for Groups to manage a privileged access group named Group1.  
您有一个 Microsoft Entra 租户，该租户使用特权身份管理 (PIM) 来管理名为 Group1 的特权访问组。

You need to review all PIM-related activity for Group1, including activations and membership changes.  
您需要审核 Group1 的所有 PIM 相关活动，包括激活和成员变更。

What should you use?  
你应该用什么？

### Your Answer  您的答案

- Microsoft Entra Resource audit  
    Microsoft Entra 资源审核
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- Microsoft Entra Resource audit  
    Microsoft Entra 资源审核
    
    **This answer is correct.  答案正确。**
    

**Objective:  客观的：**

4.3 Plan and implement privileged access  
4.3 规划和实施特权访问

**What This Item Tests:  本测试项目内容：**

Analyze PIM audit history and reports  
分析 PIM 审计历史记录和报告

**Additional Reading:  延伸阅读：**

[Audit activity history for group assignments in Privileged Identity Management  
特权身份管理中组分配的审计活动历史记录](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/groups-audit)

[Analyze Privileged Identity Management audit history and reports  
分析特权身份管理审计历史记录和报告](https://learn.microsoft.com/training/modules/plan-implement-privileged-access/8-analyze-privileged-identity-management-audit-history-reports)

[Describe the capabilities of Privileged identity Management Completed  
描述特权身份管理的功能（已完成）](https://learn.microsoft.com/training/modules/describe-identity-protection-governance-capabilities/4-describe-privileged-identity-management)

**Rationale:  理由：**

Resource audit shows all the PIM activity for a specific privileged access group, including activations and membership changes.  
资源审计显示特定特权访问组的所有 PIM 活动，包括激活和成员变更。

Access reviews are used to evaluate group membership on a recurring basis, not to review audit history.  
访问权限审查用于定期评估组成员资格，而不是审查审计历史记录。

My audit displays activities performed by the signed-in user only.  
我的审计报告仅显示已登录用户执行的活动。

Unified audit log provides broader compliance auditing but is not the primary PIM view for reviewing group-specific activity.  
统一审计日志提供了更广泛的合规性审计，但不是审查特定组活动的主要 PIM 视图。

## Question 46 of 50  第 46 题（共 50 题）

You have Microsoft Entra tenant that contains the following groups:  
您拥有一个包含以下组的 Microsoft Entra 租户：

- Group1: A security group that has assigned membership  
    Group1：已分配成员资格的安全组
- Group2: A security group that has dynamic user membership  
    组2：具有动态用户成员的安全组
- Group3: A Microsoft 365 group that has assigned membership  
    Group3：已分配成员资格的 Microsoft 365 组

You need to configure Privileged Identity Management (PIM) for group management.  
您需要配置特权身份管理 (PIM) 来进行组管理。

Which groups can you manage by using PIM?  
使用 PIM 可以管理哪些群组？

### Your Answer  您的答案

- Group1, Group2, and Group3  
    第一组、第二组和第三组
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- Group1 and Group3 only  
    仅限第1组和第3组
    
    **This answer is correct.  答案正确。**
    

**Objective:  客观的：**

4.3 Plan and implement privileged access  
4.3 规划和实施特权访问

**What This Item Tests:  本测试项目内容：**

Plan and configure groups managed by PIM  
规划和配置由 PIM 管理的组

**Additional Reading:  延伸阅读：**

[Privileged Identity Management (PIM) for Groups  
面向群组的特权身份管理 (PIM)](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/concept-pim-for-groups)

[Bring groups into Privileged Identity Management  
将群组纳入特权身份管理](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/groups-discover-groups)

**Rationale:  理由：**

You can enable PIM for cloud-based security groups and Microsoft 365 groups of the assigned membership type. Dynamic membership groups, mail-enabled security groups, distribution groups, and groups synced from Active Directory are not supported. As such, you can manage only Group1 and Group3 by using PIM.  
您可以为已分配成员类型的云端安全组和 Microsoft 365 组启用 PIM。动态成员组、启用邮件的安全组、通讯组以及从 Active Directory 同步的组不受支持。因此，您只能使用 PIM 管理 Group1 和 Group3。

## Question 47 of 50  第 47 题（共 50 题）

You have an Azure subscription that has auditing enabled.  
您拥有一个已启用审核功能的 Azure 订阅。

You need to query the audit logs and download the results.  
您需要查询审计日志并下载结果。

Which two formats can be used to download the results? Each correct answer presents a complete solution.  
可以使用哪两种格式下载结果？每个正确答案都提供了一个完整的解决方案。

### Your Answer  您的答案

- CSV
    
    **This answer is correct.  答案正确。**
    
- JSON
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- CSV
    
    **This answer is correct.  答案正确。**
    
- JSON
    
    **This answer is correct.  答案正确。**
    

Microsoft Entra supports JSON and CSV formats for a download, but does not allow TXT or Windows Event logs.  
Microsoft Entra 支持 JSON 和 CSV 格式下载，但不允许 TXT 或 Windows 事件日志。

[How to download logs in Azure Active Directory - Microsoft Entra - Training | Microsoft Learn  
如何在 Azure Active Directory 中下载日志 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/reports-monitoring/howto-download-logs)

[Monitor and maintain Azure Active Directory - Training | Microsoft Learn  
监控和维护 Azure Active Directory - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-maintain-azure-active-directory/)

## Question 48 of 50  第 48 题（共 50 题）

You need to use a Log Analytics workspace to produce reports based on a Microsoft Entra audit log.  
您需要使用 Log Analytics 工作区来生成基于 Microsoft Entra 审核日志的报告。

What should you do first?  
首先应该做什么？

### Your Answer  您的答案

- Provision logs.  配置日志。
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- Configure the Diagnostics settings in Microsoft Entra.  
    在 Microsoft Entra 中配置诊断设置。
    
    **This answer is correct.  答案正确。**
    

To produce reports with Log Analytics, first Microsoft Entra audit logs must be sent by using the Diagnostics settings.  
要使用 Log Analytics 生成报告，首先必须使用诊断设置发送 Microsoft Entra 审核日志。

Provisioning logs or an Activity Sign-ins report will not send audit logs to Log Analytics and the Graph API provides results to specific REST commands, but does not send audit logs.  
配置日志或活动登录报告不会将审计日志发送到 Log Analytics，而 Graph API 会向特定的 REST 命令提供结果，但不会发送审计日志。

[Monitor and maintain Azure Active Directory - Training | Microsoft Learn  
监控和维护 Azure Active Directory - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-maintain-azure-active-directory/)

[Integrate logs with a Log Analytics workspace - Training | Microsoft Learn  
将日志与 Log Analytics 工作区集成 - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-report-aad-security-events/3-integrate-activity-logs-with-monitor)

## Question 49 of 50  第 49 题（共 50 题）

Your Microsoft Entra tenant integrates with a third-party service to provision users into your tenant.  
您的 Microsoft Entra 租户与第三方服务集成，以便将用户配置到您的租户中。

You need to create a KQL query to track when a user is created by using a third-party service.  
您需要创建一个 KQL 查询，以跟踪何时使用第三方服务创建用户。

Which table should you use in the Log Analytics query?  
在日志分析查询中应该使用哪个表？

### Your Answer  您的答案

- AADProvisioningLogs  AAD 配置日志
    
    **This answer is correct.  答案正确。**
    

### Correct Answer  正确答案

- AADProvisioningLogs  AAD 配置日志
    
    **This answer is correct.  答案正确。**
    

To track a provisioned user, you can use the information captured in Microsoft Entra provisioning logs to help find a solution.  
要跟踪已配置的用户，您可以使用 Microsoft Entra 配置日志中捕获的信息来帮助找到解决方案。

The remaining tables provide information about specific activities that are not related to third-party user provisioning.  
其余表格提供有关与第三方用户配置无关的特定活动的信息。

[Monitor and maintain Azure Active Directory - Training | Microsoft Learn  
监控和维护 Azure Active Directory - 培训 | Microsoft Learn](https://learn.microsoft.com/training/modules/monitor-maintain-azure-active-directory/)

[Provisioning logs in Azure Active Directory - Microsoft Entra - Training | Microsoft Learn  
Azure Active Directory 中的配置日志 - Microsoft Entra - 培训 | Microsoft Learn](https://learn.microsoft.com/azure/active-directory/reports-monitoring/concept-provisioning-logs)

## Question 50 of 50  第 50 题（共 50 题）

You have an existing set up of Azure Monitor, and you want to add Microsoft Entra log data.  
您已经设置了 Azure Monitor，现在想要添加 Microsoft Entra 日志数据。

What do you need?  
你需要什么？

### Your Answer  您的答案

- a Log Analytics workspace  
    日志分析工作区
    
    **This answer is incorrect.  
    这个答案不正确。**
    

### Correct Answer  正确答案

- a Microsoft Entra ID P1 or P2 license  
    Microsoft Entra ID P1 或 P2 许可证
    
    **This answer is correct.  答案正确。**
    

A Microsoft Entra ID P1 or P2 license at least the Microsoft Entra Report Reader role are prerequisites to getting access to a Microsoft Entra workbook.  
要访问 Microsoft Entra 工作簿，必须拥有 Microsoft Entra ID P1 或 P2 许可证，并且至少拥有 Microsoft Entra 报表读取者角色。

Public templates are part of Microsoft Entra workbooks but are not a prerequisite to using them, and a data collection rule is an option for Azure Monitor but is not a prerequisite for Microsoft Entra workbook usage.  
公共模板是 Microsoft Entra 工作簿的一部分，但并非使用它们的必要条件；数据收集规则是 Azure Monitor 的一个选项，但并非使用 Microsoft Entra 工作簿的必要条件。

[Analyze Microsoft Entra workbooks and reporting - Training | Microsoft Learn  
分析 Microsoft Entra 工作簿和报表 - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/monitor-maintain-azure-active-directory/6-analyze-azure-active-directory-workbooks-reporting)

[Skip to main content](https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/practice/results?assessmentId=60&practice-assessment-type=certification&snapshotId=b5cc5ffa-0d1b-4bc1-813e-a9e225f16ee1#main)

[](https://www.microsoft.com/)

[Learn](https://learn.microsoft.com/en-us/)

![](data:image/svg+xml,%20%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20height='64'%20class='font-weight-bold'%20style='font:%20600%2030.11764705882353px%20"SegoeUI",%20Arial'%20width='64'%3E%3Ccircle%20fill='hsl\(172.8,%2095%,%2026%\)'%20cx='32'%20cy='32'%20r='32'%20/%3E%3Ctext%20x='50%25'%20y='55%25'%20dominant-baseline='middle'%20text-anchor='middle'%20fill='%23FFF'%20%3EGH%3C/text%3E%3C/svg%3E)

![](data:image/svg+xml,%20%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20height='64'%20class='font-weight-bold'%20style='font:%20600%2030.11764705882353px%20"SegoeUI",%20Arial'%20width='64'%3E%3Ccircle%20fill='hsl\(172.8,%2095%,%2026%\)'%20cx='32'%20cy='32'%20r='32'%20/%3E%3Ctext%20x='50%25'%20y='55%25'%20dominant-baseline='middle'%20text-anchor='middle'%20fill='%23FFF'%20%3EGH%3C/text%3E%3C/svg%3E)

- [](https://learn.microsoft.com/en-us/users/me/activity/)
- [](https://learn.microsoft.com/en-us/users/me/settings/)

[](https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/practice/results?assessmentId=60&practice-assessment-type=certification&snapshotId=b5cc5ffa-0d1b-4bc1-813e-a9e225f16ee1#)

[Credentials](https://learn.microsoft.com/en-us/credentials/)

- [](https://learn.microsoft.com/en-us/credentials/browse)
- [](https://learn.microsoft.com/en-us/certifications/renew-your-microsoft-certification)
- [](https://learn.microsoft.com/en-us/certifications/help/)

# mock exam 2
Question 1  问题 1Incorrect  错误  进一步解释

As the lead cloud administrator for GetCloudSkills, you have recently hired a new employee responsible for Azure AD support issues. The new employee should be able to reset passwords for all types of users, including those with user admin, global admin, or password admin roles. However, you must ensure that you follow the principle of least privilege when granting access. Which role should you grant to the new employee?  
作为 GetCloudSkills 的首席云管理员，您最近聘请了一位负责 Azure AD 支持问题的新员工。这位新员工应该能够重置所有类型用户的密码，包括具有用户管理员、全局管理员或密码管理员角色的用户。但是，您必须确保在授予访问权限时遵循最小权限原则。您应该授予这位新员工哪个角色？

Password Admin  密码管理员

Correct answer  正确答案

Global Admin  全局管理员

Security Admin  安全管理员

Your answer is incorrect  你的答案不正确。

User Admin  用户管理员

Overall explanation  总体解释

Answer A is incorrect because the Password Admin role does not provide the authority to reset passwords for User Admins or Global Admins.  
答案 A 不正确，因为密码管理员角色没有权限重置用户管理员或全局管理员的密码。

Answer B is the correct option, as the Global Admin role would enable the new employee to reset passwords for all users.  
答案 B 是正确选项，因为全局管理员角色将允许新员工重置所有用户的密码。

Answer C is incorrect because the Security Admin role only controls access to and configuration of Microsoft Defender for Cloud.  
答案 C 不正确，因为安全管理员角色仅控制对 Microsoft Defender for Cloud 的访问和配置。

Answer D is not the correct answer as the user admin role would not allow the new employee to reset passwords for Global Admins.  
答案 D 不是正确答案，因为用户管理员角色不允许新员工重置全局管理员的密码。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Microsoft Entra built-in roles - Microsoft Entra ID | Microsoft Learn  
Microsoft Entra 内置角色 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#user-administrator)

[Azure built-in roles - Azure RBAC | Microsoft Learn  
Azure 内置角色 - Azure RBAC | Microsoft Learn](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 2  问题 2Correct  正确的  进一步解释

You recently created a new Azure AD Tenant for your organization, GetCloudSkills. The default domain assigned to you is getcloudskills.onmicrosoft.com, but you want to use your own custom domain, getcloudskills.com. You have added the custom domain through the Azure portal, but now you need to validate that you are the owner of the custom domain through your registrar. What type of record do you need to add to your domain registrar?  
您最近为您的组织 GetCloudSkills 创建了一个新的 Azure AD 租户。分配给您的默认域名是 getcloudskills.onmicrosoft.com，但您想使用自己的自定义域名 getcloudskills.com。您已通过 Azure 门户添加了该自定义域名，但现在需要通过域名注册商验证您是该自定义域名的所有者。您需要向域名注册商添加哪种类型的记录？

Your answer is correct  你的答案正确

TXT

A

CNAME  别名记录

CAA

Overall explanation  总体解释

Answer A is the correct choice because a TXT record is used for domain name ownership validation through the registrar.  
答案 A 是正确的选择，因为 TXT 记录用于通过注册商验证域名所有权。

Answer B is incorrect because an A record is used for mapping a hostname to an IP address, and it is not used for custom domain validation.  
答案 B 不正确，因为 A 记录用于将主机名映射到 IP 地址，而不是用于自定义域验证。

Answer C is also incorrect because a CNAME record is used to map an alias name to another name, and it is not used in the custom domain validation process.  
答案 C 也是不正确的，因为 CNAME 记录用于将别名映射到另一个名称，它不用于自定义域验证过程。

Answer D is also incorrect because CAA records provide a list of acceptable certification authorities for a given domain or host, but they are not used for custom domain validation.  
答案 D 也是不正确的，因为 CAA 记录提供了给定域或主机的可接受证书颁发机构列表，但它们不用于自定义域验证。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Add your custom domain - Microsoft Entra | Microsoft Learn  
添加您的自定义域名 - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 3  问题 3Correct  正确的  进一步解释

Azure Active Directory allows you to create two different types of groups. Choose the two groups that can be created.  
Azure Active Directory 允许您创建两种不同类型的组。请选择可以创建的两个组。

Azure Groups  Azure 组

Your selection is correct  
您的选择正确

Microsoft 365 Groups  Microsoft 365 群组

Your selection is correct  
您的选择正确

Security Groups  安全组

Windows Groups  Windows 组

Organizational Groups  组织团体

Overall explanation  总体解释

Answer A is not correct because Azure Groups is not a valid group type in Azure Active Directory.  
答案 A 不正确，因为 Azure Groups 不是 Azure Active Directory 中的有效组类型。

Answer B is the correct answer because Microsoft 365 Groups is one of the two available group types in Azure Active Directory.  
答案 B 是正确答案，因为 Microsoft 365 组是 Azure Active Directory 中两种可用的组类型之一。

Answer C is also a correct answer because Security Groups is the other available group type in Azure Active Directory.  
答案 C 也是正确答案，因为安全组是 Azure Active Directory 中另一种可用的组类型。

Answer D is incorrect because Windows Groups is not a valid group type in Azure Active Directory.  
答案 D 不正确，因为 Windows 组不是 Azure Active Directory 中的有效组类型。

Answer E is also incorrect because Organizational Groups is not a valid group type in Azure Active Directory.  
答案 E 也不正确，因为组织组不是 Azure Active Directory 中的有效组类型。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[How to manage groups - Microsoft Entra | Microsoft Learn  
如何管理群组 - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 4  问题 4Correct  正确的  进一步解释

As an Azure Administrator for your organization, you are responsible for creating multiple security groups and assigning users to them based on specific profile attributes. The process should be automated so that new users are automatically added to the appropriate group when they join the organization. What type of group should you configure?  
作为组织的 Azure 管理员，您负责创建多个安全组，并根据特定的用户配置文件属性将用户分配到这些组。此过程应实现自动化，以便新用户加入组织时自动添加到相应的组中。您应该配置哪种类型的组？

Power Group  电力集团

Smart Group  智能组

Microsoft 365 Group  微软 365 团队

Your answer is correct  你的答案正确

Dynamic Group  动态集团

Overall explanation  总体解释

Answer A is not correct because Power Groups is not a valid setting in Azure Active Directory.  
答案 A 不正确，因为 Power Groups 不是 Azure Active Directory 中的有效设置。

Answer B is also incorrect because Smart Groups is not a valid setting in Azure Active Directory.  
答案 B 也不正确，因为智能组不是 Azure Active Directory 中的有效设置。

Answer C is not correct as Microsoft 365 groups is a valid group type in Azure Active Directory. Still, it does not provide the ability to automatically add users to groups based on profile attributes.  
答案 C 不正确，因为 Microsoft 365 组是 Azure Active Directory 中的有效组类型。但是，它并不提供根据用户配置文件属性自动将用户添加到组的功能。

Answer D, on the other hand, is correct. Dynamic groups allow administrators to set rules to populate groups created in Azure AD based on user attributes such as user type, department, or country/region.  
另一方面，答案 D 是正确的。动态组允许管理员设置规则，根据用户属性（例如用户类型、部门或国家/地区）填充在 Azure AD 中创建的组。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Dynamic groups and B2B collaboration - Microsoft Entra External ID | Microsoft Learn  
动态群组和 B2B 协作 - Microsoft Entra 外部 ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/external-id/use-dynamic-groups)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 5  问题5Incorrect  错误  进一步解释

Your organization has set up Azure AD Connect to facilitate its Hybrid cloud ventures and has synchronized all on-premises Active Directory users to Azure AD. In order to comply with organizational regulations, you need to make sure that you can apply password policies and restrict user sign-in hours. You require a cloud authentication method that requires minimal administrative effort. Which authentication method would you suggest?  
贵组织已部署 Azure AD Connect 以支持混合云项目，并将所有本地 Active Directory 用户同步到 Azure AD。为了遵守组织规章制度，您需要确保能够应用密码策略并限制用户登录时间。您需要一种管理工作量最小的云身份验证方法。您会推荐哪种身份验证方法？

Hybrid Authentication  混合身份验证

Federated Authentication  联合身份验证

Your answer is incorrect  你的答案不正确。

Microsoft Entra Password Hash synchronization  
Microsoft Entra 密码哈希同步

Correct answer  正确答案

Microsoft Entra Pass-through authentication  
Microsoft Entra 直通身份验证

Overall explanation  总体解释

Answer A is incorrect because Hybrid Authentication is not a valid cloud authentication method.  
答案 A 不正确，因为混合身份验证不是一种有效的云身份验证方法。

Answer B is incorrect because a Federated Authentication solution is necessary when customers require authentication methods that Azure AD doesn't natively support, such as authentication with smartcards or certificates, or the use of third-party MFA providers.  
答案 B 不正确，因为当客户需要 Azure AD 本身不支持的身份验证方法（例如使用智能卡或证书进行身份验证，或者使用第三方 MFA 提供程序）时，就需要联合身份验证解决方案。

Answer C is incorrect because Azure AD Password Hash synchronization alone cannot provide the ability to enforce password policies and restrict sign-in hours for users.  
答案 C 不正确，因为仅靠 Azure AD 密码哈希同步无法提供强制执行密码策略和限制用户登录时间的功能。

Answer D is CORRECT because Azure AD pass-through authentication ensures that all authentications occur on-premise, rather than in the cloud. By authenticating users through the on-premise Active Directory, you can enforce password policies and limit sign-in hours for users. This option meets your requirements.  
答案 D 正确，因为 Azure AD 直通身份验证可确保所有身份验证都在本地进行，而不是在云端。通过本地 Active Directory 对用户进行身份验证，您可以强制执行密码策略并限制用户的登录时间。此选项符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Plan, design, and implement Microsoft Entra Connect - Training | Microsoft Learn  
规划、设计和实施 Microsoft Entra Connect - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/implement-manage-hybrid-identity/2-plan-design-implement-azure-active-directory-connect)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 6  问题 6Correct  正确的  进一步解释

Your organization is interested in utilizing group-based licensing, which enables automatic assignment of different licenses to users based on their membership in security groups. As the cloud administrator, could you confirm which license is required for your users to be eligible for group-based licensing?  
贵组织有意采用基于组的许可模式，该模式可根据用户所属的安全组自动为其分配不同的许可证。作为云管理员，您能否确认您的用户需要哪种许可证才能符合基于组的许可模式的要求？

Microsoft Entra ID P1  微软 Entra ID P1

Microsoft Entra ID P2

Office 365 E3

Your answer is correct  你的答案正确

Any of the above  以上任何一种

Overall explanation  总体解释

Users who want to take advantage of the group-based licensing feature are required to have an active trial or paid subscription for Azure AD Premium P1 or higher or Office 365 Enterprise E3, Office 365 A3, Office 365 GCC 63, Office 365 E3 for GCCH, or Office 365 E3 for DOD and above.  
想要利用基于组的许可功能的用户需要拥有 Azure AD Premium P1 或更高版本或 Office 365 企业版 E3、Office 365 A3、Office 365 GCC 63、Office 365 E3 for GCCH 或 Office 365 E3 for DOD 及以上版本的有效试用版或付费订阅。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[What is group-based licensing - Microsoft Entra | Microsoft Learn  
什么是基于组的许可？ - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/entra/fundamentals/concept-group-based-licensing)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 7  问题 7Correct  正确的  进一步解释

As the cloud administrator for GetCloudSkills, you have been assigned the responsibility to implement multi-factor authentication for all of your users. To prepare for this, you need to ensure that all users are registered correctly for multi-factor authentication. Can you identify which one of the following options cannot be used as an authentication method?  
作为 GetCloudSkills 的云管理员，您已被指派负责为所有用户实施多因素身份验证。为此，您需要确保所有用户都已正确注册多因素身份验证。您能指出以下哪个选项不能用作身份验证方法吗？

Microsoft Authenticator App  
微软身份验证器应用

Your answer is correct  你的答案正确

Security Question  安全问题

FID02 Security Key  FID02 安全密钥

SMS  短信

Voice Call  语音通话

Overall explanation  总体解释

Security questions are not a reliable way to authenticate users for multi-factor authentication. To ensure secure access, it is recommended to use the Microsoft Authenticator App, FIDO2 Security Key, SMS, or Voice Call as authentication methods.  
安全问题并非多因素身份验证中可靠的用户验证方式。为确保安全访问，建议使用 Microsoft Authenticator 应用、FIDO2 安全密钥、短信或语音通话作为身份验证方法。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Authentication methods and features - Microsoft Entra ID | Microsoft Learn  
身份验证方法和功能 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 8  问题 8Correct  正确的  进一步解释

Your company is currently evaluating its operational procedures to identify areas where efficiencies can be optimized. One concern is the substantial time that Help Desk Administrators are spending on user issues. Can you suggest a service that can be implemented to lower the number of calls and tickets that Help Desk Administrators receive?  
贵公司目前正在评估运营流程，以找出可以优化效率的领域。其中一个问题是，服务台管理员花费大量时间处理用户问题。您能否推荐一项可以实施的服务，以减少服务台管理员接到的电话和工单数量？

Application Proxy  应用程序代理

Multi-Factor Authentication  
多重身份验证

Active Directory Connect  Active Directory 连接

Your answer is correct  你的答案正确

Self-Service Password Reset  
自助密码重置

Overall explanation  总体解释

Answer A is incorrect because Application Proxy is a service that allows the publishing of on-premise web applications securely for remote users to access. This service would not reduce the utilization of the Help Desk.  
答案 A 不正确，因为应用程序代理是一种允许安全地发布本地 Web 应用程序供远程用户访问的服务。这项服务不会降低服务台的使用率。

Answer B is incorrect because Multi-Factor Authentication requires users to provide two or more identification methods before being authenticated to an application or service. This service would not reduce the utilization of the Help Desk.  
答案 B 不正确，因为多因素身份验证要求用户在通过身份验证访问应用程序或服务之前提供两种或两种以上的身份识别方式。这项服务不会降低服务台的使用率。

Answer C is incorrect because Active Directory Connect is a service synchronizing users and groups from on-premise Active Directory environments to Azure Active Directory. This service would not reduce the utilization of the Help Desk.  
答案 C 不正确，因为 Active Directory Connect 是一项将本地 Active Directory 环境中的用户和组同步到 Azure Active Directory 的服务。这项服务不会降低帮助台的使用率。

Answer D is correct because Self-Service Password Reset allows users to reset their own passwords when they forget their current password or are locked out of the system. By using this service, they would no longer need to contact the Help Desk for these actions, thus reducing the utilization of the Help Desk.  
答案 D 正确，因为自助密码重置功能允许用户在忘记当前密码或被系统锁定时自行重置密码。使用此服务后，用户无需再联系服务台，从而减少了服务台的使用率。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Enable Microsoft Entra self-service password reset - Microsoft Entra ID | Microsoft Learn  
启用 Microsoft Entra 自助密码重置功能 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/authentication/tutorial-enable-sspr)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 9  问题 9Correct  正确的  进一步解释

You are interested in enhancing your organization's security posture after learning about security breaches and hacks that have affected other organizations through the news. You have been researching Azure Identity Protection and now you plan to assign a team to commence the implementation of this service. The team needs full access to Identity Protection but doesn't require the ability to reset passwords. To follow the principle of least privilege, what role should you grant this new team?  
您通过新闻了解到其他组织遭受的安全漏洞和黑客攻击事件后，希望提升组织的安全态势。您一直在研究 Azure 身份保护，现在计划指派一个团队开始实施这项服务。该团队需要对身份保护拥有完全访问权限，但不需要重置密码的权限。为了遵循最小权限原则，您应该为这个新团队授予什么角色？

Security Operator  安全运营人员

Global Administrator  全球管理员

Your answer is correct  你的答案正确

Security Administrator  安全管理员

Helpdesk Administrator  服务台管理员

Overall explanation  总体解释

Answer A is not the right choice because the Security Operator role only provides limited permissions to Identity Protection, such as viewing reports and confirming/dismissing risks. However, your team requires full access, which this role cannot provide.  
答案 A 不是正确的选择，因为安全操作员角色仅提供有限的身份保护权限，例如查看报告和确认/忽略风险。但是，您的团队需要完全访问权限，而此角色无法提供。

Answer B is also incorrect, as the Global Administrator role provides more permissions than your team requires. It is important to follow the rule of least privilege to minimize potential security risks.  
答案 B 也不正确，因为全局管理员角色拥有的权限超过了团队的实际需求。遵循最小权限原则对于最大程度地降低潜在的安全风险至关重要。

Answer C is the correct answer, as this role provides full access to Identity Protection, with the exception of the ability to reset passwords for a user.  
答案 C 是正确答案，因为该角色提供身份保护的完全访问权限，但重置用户密码的功能除外。

Answer D is not the right choice as it does not provide full access to Identity Protection.  
答案 D 不是正确选项，因为它没有提供完整的身份保护功能。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Review identity protection basics - Training | Microsoft Learn  
回顾身份保护基础知识 - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/manage-azure-active-directory-identity-protection/2-review-identity-protection-basics)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 10  问题 10Correct  正确的  进一步解释

Your organization is contemplating the possibility of allowing employees to work remotely and access the company's resources through their personal devices. However, to safeguard against potential data loss and ensure data security, your organization must ensure that only approved applications can access the company's data. What measures can be taken to meet this requirement?  
贵公司正在考虑允许员工远程办公并通过个人设备访问公司资源。但是，为了防止潜在的数据丢失并确保数据安全，贵公司必须确保只有经过批准的应用程序才能访问公司数据。可以采取哪些措施来满足这一要求？

Privileged Identity Management  
特权身份管理

Your answer is correct  你的答案正确

Conditional Access Policies  
条件访问策略

RBAC roles  RBAC 角色

Microsoft Defender for Cloud  
适用于云的 Microsoft Defender

Overall explanation  总体解释

Answer A is incorrect. Although Privileged Identity Management is used to control, monitor, and manage access to resources within an organization, it does not provide controls related to the approval of client apps. It offers various controls for time-bound access, Just in Time access, and other mechanisms, but it does not meet the requirement of ensuring that only approved clients can access the application.  
答案 A 不正确。虽然特权身份管理 (PIM) 用于控制、监控和管理组织内部资源的访问，但它并不提供与客户端应用程序审批相关的控制措施。PIM 提供多种限时访问、即时访问和其他机制的控制措施，但无法满足确保只有获得批准的客户端才能访问应用程序的要求。

Answer B is the correct option. Conditional Access policies enable an organization to configure approved client applications for accessing data. If a user is utilizing an approved client, access is granted. If a user is not using an approved client, access is denied.  
答案 B 是正确选项。条件访问策略允许组织配置已批准的客户端应用程序来访问数据。如果用户使用的是已批准的客户端，则授予访问权限；如果用户未使用已批准的客户端，则拒绝访问。

Answer C is incorrect. RBAC roles are utilized to grant specific management-level permissions to various services in Azure. It would not be used to ensure that only approved clients can access an application; hence, this choice does not meet the requirement.  
答案 C 不正确。RBAC 角色用于授予 Azure 中各种服务特定的管理级别权限。它并非用于确保只有获得授权的客户端才能访问应用程序；因此，该选项不符合要求。

Answer D is also incorrect. Although Microsoft Defender for Cloud provides recommendations for Azure and on-prem resources to improve an organization's security posture, it does not meet the requirement of ensuring that only approved clients can access the application.  
答案 D 也不正确。虽然 Microsoft Defender for Cloud 为 Azure 和本地资源提供了提升组织安全态势的建议，但它并不能满足确保只有经过授权的客户端才能访问应用程序的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Conditional Access - Require approved app or app protection policy - Microsoft Entra ID | Microsoft Learn  
条件访问 - 需要已批准的应用或应用保护策略 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/conditional-access/howto-policy-approved-app-or-app-protection)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 11  第 11 题Correct  正确的  进一步解释

Your organization is concerned about the security of passwords used by Azure AD users. Recent news reports have highlighted cases where organizations suffered identity breaches due to weak or easily guessable passwords. To ensure the safety of your organization, you want to implement measures that prohibit the use of common words as passwords. What should you configure?  
您的组织非常关注 Azure AD 用户使用的密码安全。近期新闻报道指出，一些组织由于密码强度不足或容易被猜到而遭受身份信息泄露。为了确保组织的安全，您希望采取措施禁止使用常用词作为密码。您应该如何配置？

Your answer is correct  你的答案正确

Microsoft Entra Password Protection  
Microsoft Entra 密码保护

Microsoft Entra Privileged Identity Management  
Microsoft Entra 特权身份管理

Microsoft Defender for Cloud for Passwords  
微软云端密码保护程序

Microsoft Entra ID Multi-factor Authentication  
Microsoft Entra ID 多重身份验证

Overall explanation  总体解释

The correct answer is A. Azure AD Password Protection is a feature that detects and blocks known weak passwords and their variations. It can also block specific weak terms unique to your organization or other local entities, such as sports teams.  
正确答案是 A。Azure AD 密码保护功能可以检测并阻止已知的弱密码及其变体。它还可以阻止组织或其他本地实体（例如运动队）特有的特定弱密码。

Answer B is incorrect because Azure AD Privileged Identity Management helps manage, control, and monitor access to essential resources in your organization. Still, it does not allow you to supply a list of unacceptable passwords.  
答案 B 不正确，因为 Azure AD 特权身份管理有助于管理、控制和监控对组织中重要资源的访问。但是，它不允许您提供不可接受的密码列表。

Answer C is also incorrect because Microsoft Defender for Cloud for Passwords is not a valid service on the Microsoft Azure platform.  
答案 C 也不正确，因为 Microsoft Defender for Cloud for Passwords 不是 Microsoft Azure 平台上的有效服务。

Similarly, answer D is incorrect because Azure AD multi-factor authentication forces users to use multiple identification methods before they can authenticate to a service. Still, it does not provide the ability to supply a list of unacceptable passwords.  
同样，答案 D 也是错误的，因为 Azure AD 多重身份验证强制用户在通过身份验证访问服务之前使用多种身份验证方法。但是，它并不提供提供无效密码列表的功能。

[Password protection in Microsoft Entra ID - Microsoft Entra ID | Microsoft Learn  
Microsoft Entra ID 中的密码保护 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-password-ban-bad)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 12  问题 12Correct  正确的  进一步解释

Your organization is implementing Multi-Factor Authentication and holding informational sessions for unfamiliar users. Which of the following authentication methods would be invalid?  
贵公司正在实施多因素身份验证，并为不熟悉该技术的用户举办信息培训。以下哪种身份验证方法无效？

Something you know  你知道的

Your answer is correct  你的答案正确

Something you ask  你问的

Something you have  你拥有的东西

Something you are  你是某种东西

Overall explanation  总体解释

Multi-factor authentication is a security method that requires users to provide two or more authentication factors to gain access to a system. These factors can be something you know, like a password, something you have, like a security key or token, or something you are, like a biometric, such as an iris scan or fingerprint.  
多因素身份验证是一种安全方法，它要求用户提供两个或多个身份验证因素才能访问系统。这些因素可以是您知道的信息，例如密码；可以是您拥有的物品，例如安全密钥或令牌；也可以是您自身的特征，例如生物识别信息，如虹膜扫描或指纹。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Microsoft Entra multifactor authentication overview - Microsoft Entra ID | Microsoft Learn  
Microsoft Entra 多重身份验证概述 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-mfa-howitworks)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 13  问题 13Correct  正确的  进一步解释

In Azure Active Directory, what is the default setting for users' ability to register application registrations?  
在 Azure Active Directory 中，用户注册应用程序的默认设置是什么？

Only users with the Global Admin role can register application registrations.  
只有具有全局管理员角色的用户才能注册应用程序。

Only users with the Security Admin role can register application registrations.  
只有具有安全管理员角色的用户才能注册应用程序。

Only users with the Application Developer role can register application registrations.  
只有具有“应用程序开发人员”角色的用户才能注册应用程序。

Your answer is correct  你的答案正确

All users can register application registrations.  
所有用户均可注册申请。

Overall explanation  总体解释

Answer A is incorrect, as the default setting does not allow Global Admins to register applications.  
答案 A 不正确，因为默认设置不允许全局管理员注册应用程序。

Answer B is incorrect, as the default setting does not allow Security Admins to register applications.  
答案 B 不正确，因为默认设置不允许安全管理员注册应用程序。

Answer C is incorrect, as the default setting does not allow Application Developers to register applications.  
答案 C 不正确，因为默认设置不允许应用程序开发者注册应用程序。

Answer D is correct. In Azure AD, all users have the ability to register application registrations and manage all aspects of the applications they create. Additionally, everyone can consent to apps accessing company data on their behalf.  
答案 D 正确。在 Azure AD 中，所有用户都可以注册应用程序并管理他们创建的应用程序的各个方面。此外，每个人都可以授权应用程序代表他们访问公司数据。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Delegate application management administrator permissions - Microsoft Entra ID | Microsoft Learn  
委派应用程序管理管理员权限 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-app-roles)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 14  第14题Incorrect  错误  进一步解释

You recently hired an Azure Engineer who will be in charge of managing all aspects of enterprise applications and app registrations. However, the engineer will not be responsible for managing anything related to the application proxy. Your task is to grant the engineer the appropriate role so that they can carry out their job duties while adhering to the principle of least privilege. What role should you grant them?  
您最近聘请了一位 Azure 工程师，他将负责管理企业应用程序和应用程序注册的各个方面。但是，这位工程师不负责管理任何与应用程序代理相关的内容。您的任务是授予这位工程师适当的角色，以便他能够在遵循最小权限原则的前提下履行其工作职责。您应该授予他什么角色？

Global Administrator  全球管理员

Your answer is incorrect  你的答案不正确。

Application Administrator  
应用程序管理员

Correct answer  正确答案

Cloud Application Administrator  
云应用管理员

Enterprise Administrator  企业管理员

Overall explanation  总体解释

Answer A is not the correct choice. While Global Administrator would offer the necessary permissions for the engineer to perform their job, it would also provide too many permissions and violate the principle of least privilege.  
答案 A 不正确。虽然全局管理员权限能够为工程师提供完成工作所需的必要权限，但同时也赋予了过多的权限，违反了最小权限原则。

Answer B is also not the correct choice. Although the Application Administrator would provide the necessary permissions for the engineer to do their job, it would also provide the ability to manage the application proxy, which is not required.  
答案 B 也不是正确选项。虽然应用程序管理员会为工程师提供完成工作所需的权限，但它也会提供管理应用程序代理的功能，而这并非必需。

Answer C is the correct choice. Cloud Application Administrator provides all permissions required to manage all aspects of enterprise applications and app registrations while excluding permissions to manage application proxy.  
答案 C 是正确选项。云应用管理员提供管理企业应用和应用注册所有方面所需的全部权限，但不包括管理应用代理的权限。

Answer D is not a valid role in Azure and is, therefore, incorrect.  
答案 D 不是 Azure 中的有效角色，因此是错误的。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Delegate application management administrator permissions - Microsoft Entra ID | Microsoft Learn  
委派应用程序管理管理员权限 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-app-roles)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 15  第15题Correct  正确的  进一步解释

Your organization operates entirely on Azure cloud and has no on-premise resources. You have recently acquired another company that operates entirely on-premise and has no cloud presence. You must provide your cloud users immediate access to some of the acquired company's on-premise web applications. What service can you implement to ensure that Azure Active Directory can still be used for authentication of on-premise applications?  
您的组织完全基于 Azure 云平台运行，没有任何本地资源。您最近收购了一家完全基于本地运行且没有云部署的公司。您必须让云用户能够立即访问被收购公司的一些本地 Web 应用程序。您可以实施哪种服务来确保 Azure Active Directory 仍然可以用于本地应用程序的身份验证？

Azure Active Directory Connect  
Azure Active Directory 连接

Microsoft Defender for Cloud  
适用于云的 Microsoft Defender

Your answer is correct  你的答案正确

Azure Active Directory Application Proxy  
Azure Active Directory 应用程序代理

Azure Active Directory Domain Services  
Azure Active Directory 域服务

Overall explanation  总体解释

Answer A is incorrect. Azure Active Directory Connect synchronizes users and groups from on-premise Active Directory Domain Services to Azure Active Directory, which does not meet your requirements.  
答案 A 不正确。Azure Active Directory Connect 将用户和组从本地 Active Directory 域服务同步到 Azure Active Directory，这不符合您的要求。

Answer B is also incorrect. Microsoft Defender for Cloud provides recommendations for your Azure and on-prem resources to improve your security posture. Using Microsoft Defender for Cloud does not meet your requirements.  
答案 B 也不正确。Microsoft Defender for Cloud 会针对您的 Azure 和本地资源提供建议，以提升您的安全态势。使用 Microsoft Defender for Cloud 并不符合您的要求。

Answer C is CORRECT. Azure Active Directory Application Proxy is a service that you can deploy, allowing users who have been authenticated via Azure Active Directory to connect to applications hosted on-premise. This service enables you to use Azure AD features such as multi-factor authentication to connect to on-premise applications.  
答案 C 正确。Azure Active Directory 应用程序代理是一项可部署的服务，它允许已通过 Azure Active Directory 身份验证的用户连接到本地托管的应用程序。此服务使您能够使用 Azure AD 的多重身份验证等功能连接到本地应用程序。

Answer D is incorrect. Azure Active Directory Domain Services is a managed domain service you can deploy with Azure. However, it does not provide you with functionality to access on-premise applications, which does not meet your requirements.  
答案 D 不正确。Azure Active Directory 域服务是您可以使用 Azure 部署的托管域服务。但是，它不提供访问本地应用程序的功能，因此无法满足您的需求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Application proxy documentation - Microsoft Entra ID | Microsoft Learn  
应用程序代理文档 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/app-proxy/)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 16  第16题Correct  正确的  进一步解释

Your organization is planning to deploy multiple new applications for its internal users. These applications will access organizational data on behalf of the users. Before these applications can access the data, there is a necessary step that the user must follow. What is this step?  
贵公司计划为内部用户部署多个新应用程序。这些应用程序将代表用户访问组织数据。在这些应用程序能够访问数据之前，用户必须执行一个必要的步骤。请问这个步骤是什么？

The user must use a passwordless security option to connect.  
用户必须使用无密码安全选项进行连接。

The user must be an owner of the enterprise application.  
用户必须是企业应用程序的所有者。

Register for Multi-factor Authentication.  
注册多重身份验证。

Your answer is correct  你的答案正确

Provide User Consent.  提供用户同意书。

Overall explanation  总体解释

Answer A is not the correct choice. It suggests that users are required to use a passwordless security option before an application can access data on their behalf. This answer does not meet your requirements.  
答案 A 不正确。它暗示用户必须先启用无密码安全选项，应用程序才能代表他们访问数据。这个答案不符合你的要求。

Answer B is incorrect as it assumes that the user needs to be listed as an owner of the enterprise application before the application can access data on their behalf. This answer also does not meet your requirements.  
答案 B 不正确，因为它假设用户必须先被列为企业应用程序的所有者，应用程序才能代表用户访问数据。此外，该答案也不符合您的要求。

Answer C is not the correct choice as it implies that registering for Multi-factor authentication is necessary before an application can access organizational data on behalf of the user. This answer does not meet your requirements either.  
答案 C 不正确，因为它暗示用户必须先注册多因素身份验证，应用程序才能代表用户访问组织数据。这个答案也不符合您的要求。

Answer D is the correct choice, as it states that users must consent before applications can access organizational data on their behalf. This answer meets your requirements.  
答案 D 是正确选项，因为它指出用户必须先同意，应用程序才能代表用户访问组织数据。这个答案符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Configure how users consent to applications - Microsoft Entra ID | Microsoft Learn  
配置用户如何同意应用程序 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/configure-user-consent?tabs=azure-portal&pivots=portal)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 17  第17题Incorrect  错误  进一步解释

Your organization operates under a hybrid model, with application resources in the Azure Cloud and on-premises. You are planning to deploy Azure Application Proxy to make it easier for your users to access on-premise applications. However, several prerequisites must be met before deploying Azure Application Proxy. Can you identify which of the following is not a prerequisite that needs to be completed before deploying Azure Application Proxy?  
您的组织采用混合模式运营，应用程序资源分布在 Azure 云和本地。您计划部署 Azure 应用程序代理，以便用户更轻松地访问本地应用程序。但是，部署 Azure 应用程序代理之前必须满足一些先决条件。请问以下哪项不是部署 Azure 应用程序代理之前必须完成的先决条件？

Your answer is incorrect  你的答案不正确。

Identities must be synchronized from on-premises or created directly in Azure.  
身份信息必须从本地同步，或者直接在 Azure 中创建。

You must have a Microsoft Entra ID Pl or P2 subscription.  
您必须拥有 Microsoft Entra ID Pl 或 P2 订阅。

Correct answer  正确答案

An account with global administrator permissions.  
具有全局管理员权限的帐户。

An account with application administrator permissions.  
具有应用程序管理员权限的帐户。

Overall explanation  总体解释

Answer A is incorrect because users must be created directly in Azure Active Directory or synchronized from an on-premise directory.  
答案 A 不正确，因为用户必须直接在 Azure Active Directory 中创建，或者从本地目录同步。

Answer B is incorrect because you need to have an Azure Premium Pl or P2 subscription before deploying the Azure Application Proxy.  
答案 B 不正确，因为在部署 Azure 应用程序代理之前，您需要拥有 Azure Premium PL 或 P2 订阅。

Answer C is the correct answer. Before Application Proxy can be deployed, an account does not need to have global administrator permissions.  
答案 C 是正确答案。部署应用程序代理之前，帐户不需要拥有全局管理员权限。

Answer D is incorrect because having an account with application administrator permissions is a prerequisite for deploying Azure Application Proxy.  
答案 D 不正确，因为拥有具有应用程序管理员权限的帐户是部署 Azure 应用程序代理的先决条件。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Add an on-premises application for remote access through application proxy in Microsoft Entra ID. - Microsoft Entra ID | Microsoft Learn  
在 Microsoft Entra ID 中添加本地应用程序，以便通过应用程序代理进行远程访问。 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/app-proxy/application-proxy-add-on-premises-application)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 18  第18题Incorrect  错误  进一步解释

Your company has installed a new enterprise application and added it to Azure Active Directory. You have been assigned the responsibility of providing access to the enterprise application. Which of the object types listed below can you grant authorization to for the enterprise application?  
贵公司已安装新的企业应用程序并将其添加到 Azure Active Directory。您已被指派负责提供对该企业应用程序的访问权限。您可以为以下哪些对象类型授予对该企业应用程序的访问权限？

Your answer is incorrect  你的答案不正确。

Microsoft 365 Groups  Microsoft 365 群组

Nested Groups  嵌套组

Correct answer  正确答案

Security Groups  安全组

Application Security Groups  
应用程序安全组

Overall explanation  总体解释

Answer A is incorrect because Microsoft 365 Groups cannot be used for assigning permissions to enterprise applications. Therefore, it does not meet your requirements.  
答案 A 不正确，因为 Microsoft 365 组不能用于为企业应用程序分配权限。因此，它不符合您的要求。

Answer B is also incorrect, as Nested Groups cannot be utilized for assigning permissions to enterprise applications. Only the top-level group's users would receive access, and no members in any nested group would receive access. Thus, it does not meet your requirements.  
答案 B 也不正确，因为嵌套组不能用于为企业应用程序分配权限。只有顶层组的用户才能获得访问权限，任何嵌套组的成员都无法获得访问权限。因此，它不符合您的要求。

Answer C is correct as Security Groups can be used for assigning permissions to enterprise applications. This choice meets your requirements.  
答案 C 正确，因为安全组可用于为企业应用程序分配权限。此选项符合您的要求。

Answer D is incorrect because Application Security Groups can only be used to group virtual machines that run similar applications and not to grant permissions to enterprise applications. Therefore, it does not meet your requirements.  
答案 D 不正确，因为应用程序安全组只能用于对运行类似应用程序的虚拟机进行分组，而不能用于授予企业应用程序权限。因此，它不符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Manage users and groups assignment to an application - Microsoft Entra ID | Microsoft Learn  
管理用户和组在应用程序中的分配 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/assign-user-or-group-access-portal?pivots=portal)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 19  第19题Correct  正确的  进一步解释

Your company is partnering with a consulting firm to assist with the creation, development, and operation of a new IT service. The consultants will join your team at different stages of the project and may not be aware of the requisite permissions they need or who to request access from. As the Cloud Administrator, what measures can you implement to ensure that the consultants can quickly and easily request and receive all necessary access to perform their duties?  
贵公司正与一家咨询公司合作，协助创建、开发和运营一项新的 IT 服务。咨询顾问将在项目的不同阶段加入您的团队，他们可能并不了解所需的权限，也不知道应该向谁申请访问权限。作为云管理员，您可以采取哪些措施来确保咨询顾问能够快速便捷地申请并获得履行职责所需的所有访问权限？

Azure Arm Templates  Azure Arm 模板

Azure Blueprints  Azure 蓝图

Azure Policies  Azure 策略

Your answer is correct  你的答案正确

Microsoft Entra Entitlement Management  
Microsoft Entra 授权管理

Overall explanation  总体解释

Answer A is not the correct choice, as Azure Arm Templates are used to create infrastructure resources programmatically using code. It will not meet your requirements in this scenario.  
答案 A 不正确，因为 Azure ARM 模板用于通过代码以编程方式创建基础架构资源。它无法满足您在此场景中的需求。

Answer B is also incorrect, as Azure Blueprints are mainly used for infrastructure deployments to ensure that the proper roles, policies, and resources are deployed accurately. It will not meet your requirements in this scenario.  
答案 B 也不正确，因为 Azure 蓝图主要用于基础架构部署，以确保角色、策略和资源能够准确部署。它无法满足您在此场景中的需求。

Answer C is also not the correct option, as Azure Policy primarily enforces organizational and compliance standards. It will not meet your requirements in this scenario.  
答案 C 也不是正确选项，因为 Azure Policy 主要强制执行组织和合规性标准，无法满足您在此场景中的需求。

Answer D is the correct choice, as Azure AD Entitlement Management is a solution that allows cloud administrators to create access packages containing all the necessary permissions and roles required for a given job. Consultants can request access to those packages to obtain everything needed to complete their day-to-day tasks. This solution meets your requirements.  
答案 D 是正确选项，因为 Azure AD 权限管理解决方案允许云管理员创建包含特定作业所需所有权限和角色的访问包。顾问可以申请访问这些访问包，以获取完成日常工作所需的一切资源。此解决方案符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[What is entitlement management? - Microsoft Entra ID Governance | Microsoft Learn  
什么是权限管理？ - Microsoft Entra ID 治理 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-overview)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 20  第20题Incorrect  错误  进一步解释

Your organization plans to introduce Azure AD Entitlement Management through a new project. To implement this, it is essential to ensure the correct licenses are in place. The project should be executed with minimal costs. Thus, the permit that allows Entitlement Management at a minimum cost needs to be chosen. Can you recommend the appropriate license for this project?  
贵组织计划通过一个新项目引入 Azure AD 权限管理。为了实现这一点，必须确保拥有正确的许可证。该项目应以最低成本执行。因此，需要选择能够以最低成本实现权限管理的许可证。您能否为该项目推荐合适的许可证？

Free License  免费许可

Office 365 Apps  Office 365 应用

Your answer is incorrect  你的答案不正确。

Microsoft Entra ID P1  微软 Entra ID P1

Correct answer  正确答案

Microsoft Entra ID P2

Overall explanation  总体解释

Answer A is incorrect because the Free License does not include access to Azure AD Entitlement Management.  
答案 A 不正确，因为免费许可证不包含对 Azure AD 授权管理的访问权限。

Answer B is incorrect because the Office 365 Apps License does not provide access to Azure AD Entitlement Management.  
答案 B 不正确，因为 Office 365 应用许可证不提供对 Azure AD 授权管理的访问权限。

Answer C is incorrect because the Azure AD Premium Pl License does not provide access to Azure AD Entitlement Management.  
答案 C 不正确，因为 Azure AD Premium PL 许可证不提供对 Azure AD 授权管理的访问权限。

Answer D is the correct answer, as the Azure AD Premium P2 License is the only license that provides access to Azure AD Entitlement Management functionality.  
答案 D 是正确答案，因为 Azure AD Premium P2 许可证是唯一提供对 Azure AD 授权管理功能访问权限的许可证。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Microsoft Entra Plans and Pricing | Microsoft Security  
Microsoft Entra 计划和定价 | Microsoft 安全](https://www.microsoft.com/en-us/security/business/microsoft-entra-pricing)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 21  问题 21Correct  正确的  进一步解释

After an internal security audit, it was discovered that some members of your cloud administration team have been assigned high-privileged roles that are only required occasionally but not consistently to perform their daily tasks. You need to implement a solution that only provides these elevated permissions when needed. What can you use to achieve this?  
内部安全审计后发现，贵公司云管理团队的部分成员被分配了权限过高的角色，而这些角色并非日常工作中经常需要，只是偶尔需要。您需要实施一种解决方案，仅在需要时才授予这些高级权限。您可以使用什么方法来实现这一点？

Managed Identities  托管身份

Your answer is correct  你的答案正确

Privileged Identity Management  
特权身份管理

Microsoft Entra Connect

Microsoft Entra ID Application Units  
微软 Entra ID 应用程序单元

Overall explanation  总体解释

Answer A is incorrect because Managed Identities are typically used to provide an identity to a resource, allowing it to authenticate against other services without users having to manage the credentials for this identity. This would not meet your requirements.  
答案 A 不正确，因为托管身份通常用于为资源提供身份，使其能够通过其他服务进行身份验证，而无需用户管理此身份的凭据。这不符合您的要求。

Answer B is correct because Privileged Identity Management can be used to implement Just-In-Time access, providing team members with elevated access only when needed.  
答案 B 是正确的，因为特权身份管理可以用于实现即时访问，仅在需要时才向团队成员提供提升的访问权限。

Answer C is incorrect because Azure Active Directory Connect is used for syncing users and groups from an on-premise Active Directory Domain Services to Azure Active Directory. This would not meet your requirements.  
答案 C 不正确，因为 Azure Active Directory Connect 用于将本地 Active Directory 域服务中的用户和组同步到 Azure Active Directory。这不符合您的要求。

Answer D is incorrect because Azure AD application units are containers for other Azure AD resources, allowing delegating administrative rights. This would not meet your requirements.  
答案 D 不正确，因为 Azure AD 应用程序单元是其他 Azure AD 资源的容器，允许委派管理权限。这不符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[What is Privileged Identity Management? - Microsoft Entra ID Governance | Microsoft Learn  
什么是特权身份管理？ - Microsoft Entra ID 治理 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 22  问题 22Correct  正确的  进一步解释

You are the cloud administrator for your organization. You need to review information on authentication attempts to your services, including both failed and successful attempts.  
您是贵组织的云管理员。您需要审核有关贵公司服务的身份验证尝试信息，包括失败和成功的尝试。

Your answer is correct  你的答案正确

Microsoft Entra ID Sign-ln Logs  
Microsoft Entra ID 登录日志

Microsoft Entra ID Audit Logs  
Microsoft Entra ID 审核日志

Azure Monitor

Microsoft Entra ID Risky Users Report  
Microsoft Entra ID 风险用户报告

Overall explanation  总体解释

Answer A is the correct solution for your requirement because Azure AD Sign-in logs provide information about all sign-in events, including whether those events were successful or failed.  
答案 A 是满足您需求的正确解决方案，因为 Azure AD 登录日志提供了所有登录事件的信息，包括这些事件是成功还是失败。

Answer B is incorrect because Azure AD Audit Logs only show detailed audit information related to the creation, modification, or deletion of resources within Azure. These logs would not provide any information related to authentication attempts.  
答案 B 不正确，因为 Azure AD 审核日志仅显示与 Azure 中资源的创建、修改或删除相关的详细审核信息。这些日志不会提供任何与身份验证尝试相关的信息。

Answer C is also not a suitable solution since Azure Monitor is designed to collect, analyze, and act on telemetry from your cloud and on-premises environments to help maximize performance and availability. It does not cater to your specific requirement.  
答案 C 也不是合适的解决方案，因为 Azure Monitor 旨在收集、分析和处理来自云端和本地环境的遥测数据，以帮助最大限度地提高性能和可用性。它无法满足您的特定需求。

Answer D is also not a suitable solution since the Risky Users Report only details users in your environment that have been flagged as risky due to suspicious or abnormal signals detected. It does not cater to your specific requirement.  
选项 D 也不合适，因为“风险用户报告”仅列出环境中因检测到可疑或异常信号而被标记为风险的用户，无法满足您的特定需求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Sign-in logs in Microsoft Entra ID - Microsoft Entra ID | Microsoft Learn  
Microsoft Entra ID 登录日志 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-sign-ins)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 23  问题 23Correct  正确的  进一步解释

Your organization has planned to collaborate with another organization to launch a new six-month marketing campaign. To ensure that users from the partner organization get the appropriate access they need and that access is automatically removed at the end of the campaign, you have decided that Azure AD Entitlement Management will be the best option. To enable the partner organization to access the required resources, you need to configure a representation of the partner organization in your Azure Active Directory. What do you need to configure?  
您的组织计划与另一组织合作开展一项为期六个月的营销活动。为了确保合作伙伴组织的用户获得所需的访问权限，并在活动结束后自动撤销这些访问权限，您决定采用 Azure AD 授权管理。要使合作伙伴组织能够访问所需的资源，您需要在 Azure Active Directory 中配置合作伙伴组织的实例。您需要配置哪些内容？

Security Group  安全组

Federation  联邦

Guest User  访客用户

Your answer is correct  你的答案正确

Connected Organization  互联组织

Overall explanation  总体解释

Answer A is an incorrect choice. A Security group cannot be used in this scenario since the users at the partner organization are not yet part of your Azure Active Directory. Therefore, this choice does not meet your requirements.  
答案 A 不正确。由于合作伙伴组织的用户尚未加入您的 Azure Active Directory，因此无法在此场景中使用安全组。所以，此选项不符合您的要求。

Answer B is also incorrect. A federation would not be the best option for this situation, as the campaign will only last for 6 months. After that, users' access will need to be automatically removed. Thus, this choice does not meet your requirements.  
答案 B 也不正确。联盟并非此情况的最佳选择，因为活动仅持续 6 个月。之后，用户的访问权限需要自动移除。因此，此选项不符合您的要求。

Answer C is also not applicable to this scenario as a guest user is not required. Entitlement Management will take care of inviting users to join your Azure Active Directory and assign the appropriate roles.  
答案 C 也不适用于此场景，因为不需要访客用户。权限管理功能会自动邀请用户加入 Azure Active Directory 并分配相应的角色。

Answer D is the correct choice, as a connected organization provides you with a way to add a representation of another organization into your Azure Active Directory. This ensures that users from that organization can get access via Entitlement Management.  
答案 D 是正确选项，因为连接组织允许您将另一个组织的表示添加到 Azure Active Directory 中。这确保该组织的用户可以通过权限管理获得访问权限。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Manage connected organizations in entitlement management - Microsoft Entra ID Governance | Microsoft Learn  
在权限管理中管理关联的组织 - Microsoft Entra ID 治理 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-organization)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 24  问题 24Correct  正确的  进一步解释

Your organization has been using Entitlement Management to grant access to users for various projects and campaigns. To ensure that users have the appropriate roles and permissions, you need to set up a process to review their access periodically. This process will help you determine if users still require certain access or if it can be revoked. What configurations can you put in place to meet these requirements?  
贵组织一直使用权限管理来授予用户参与各种项目和活动的访问权限。为了确保用户拥有适当的角色和权限，您需要建立一个流程来定期审查他们的访问权限。该流程将帮助您确定用户是否仍然需要某些访问权限，或者是否可以撤销这些访问权限。您可以采取哪些配置来满足这些要求？

Microsoft Entra ID Sign-in Logs  
Microsoft Entra ID 登录日志

Microsoft Entra ID Audit Logs  
Microsoft Entra ID 审核日志

Microsoft Entra Privileged Identity Management  
Microsoft Entra 特权身份管理

Your answer is correct  你的答案正确

Microsoft Entra ID Access Reviews  
Microsoft Entra ID Access 评论

Overall explanation  总体解释

Answer A is incorrect because Azure AD sign-in logs only record successful and failed attempts on the platform and applications. They cannot be used to evaluate, maintain, or revoke access.  
答案 A 不正确，因为 Azure AD 登录日志仅记录平台和应用程序上的成功和失败尝试。它们不能用于评估、维护或撤销访问权限。

Answer B is also incorrect. Azure AD Audit logs are designed to monitor system-level actions, such as changes to users, groups, or applications. They do not provide a way to assess access for retention or revocation and, therefore, do not fulfill the criteria.  
答案 B 也不正确。Azure AD 审核日志旨在监控系统级操作，例如用户、组或应用程序的更改。它们不提供评估访问权限是否需要保留或撤销的方法，因此不符合条件。

Answer C is incorrect either, as Azure AD Privileged Identity Management focuses on managing access to Azure resources from a security perspective. It is not intended to evaluate access to decide on its continuation or termination and, hence, does not satisfy the requirements.  
答案 C 也不正确，因为 Azure AD 特权身份管理侧重于从安全角度管理对 Azure 资源的访问。它并非旨在评估访问权限以决定其是否继续或终止，因此不符合要求。

Answer D is the correct choice, as Azure AD Access Reviews allow for the creation of processes to periodically examine user access. Decisions to retain or revoke access are made based on these reviews.  
答案 D 是正确选项，因为 Azure AD 访问权限审查允许创建流程来定期检查用户访问权限。保留或撤销访问权限的决定是基于这些审查结果做出的。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Review access to groups & applications in access reviews - Microsoft Entra ID Governance | Microsoft Learn  
在访问权限审查中审查对组和应用程序的访问权限 - Microsoft Entra ID 治理 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/perform-access-review)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 25  第25题Incorrect  错误  进一步解释

Your organization is implementing various security changes to improve its security posture. As part of this effort, it plans to remove several high-level permissions from system administrators. Additionally, it wants to implement an approval workflow that requires justification and specifies the maximum duration for times when administrators need access to specific administrator roles. What Azure AD feature can be used to achieve this?  
贵组织正在实施多项安全变更以提升安全态势。作为此项工作的一部分，贵组织计划移除系统管理员的若干高级权限。此外，贵组织还希望实施一个审批工作流，要求管理员提供理由，并规定管理员访问特定管理员角色的最长时限。请问可以使用哪些 Azure AD 功能来实现此目标？

Correct answer  正确答案

Privileged Identity Management  
特权身份管理

Entitlement Management  权利管理

Microsoft Sentinel  微软哨兵

Your answer is incorrect  你的答案不正确。

Microsoft Entra Permissions Management  
Microsoft Entra 权限管理

Overall explanation  总体解释

Answer A is the correct choice, as Privileged Identity Management can be used to implement workflows that require justification and approvals. It can also enforce time durations for specific roles before they are granted to users. This selection meets all your requirements.  
答案 A 是正确选项，因为特权身份管理可用于实现需要理由和审批的工作流。它还可以强制规定特定角色在授予用户之前的有效期。此选项满足您的所有要求。

Answer B is not the right choice, as Entitlement Management only grants a collection of access permissions. It does not have any component for approval workflows or requiring justification. Therefore, this selection does not meet your requirements.  
选项 B 不正确，因为权限管理仅授予一系列访问权限，不包含审批工作流或要求提供理由的组件。因此，此选项不符合您的要求。

Answer C is also an incorrect option since Microsoft Sentinel is a Security Information and Event Management solution that aims to provide end-to-end security. It does not include approval workflows, which means it does not meet your requirements.  
选项 C 也是错误的，因为 Microsoft Sentinel 是一款安全信息和事件管理解决方案，旨在提供端到端的安全保障。它不包含审批工作流，这意味着它不符合您的要求。

Answer D is not the correct choice either, as Azure AD B2C is intended to offer identity solutions for customers, not to implement approval workflows. This selection does not satisfy your requirements.  
选项 D 也不正确，因为 Azure AD B2C 旨在为客户提供身份解决方案，而不是实现审批工作流。此选项不符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Configure Microsoft Entra role settings in PIM - Microsoft Entra ID Governance | Microsoft Learn  
在 PIM 中配置 Microsoft Entra 角色设置 - Microsoft Entra ID 管理 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-how-to-change-default-settings)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理


# mock exam 3
  收起所有问题

Question 1  问题 1Incorrect  错误  进一步解释

Your organization will be collaborating with another organization for an upcoming marketing campaign. As the Cloud Administrator, your task is to provide the Marketing Manager with the correct permissions required to create a connected organization and access packages. Ensuring that the Marketing Manager is given the minimum level of permissions necessary to complete the task is essential. Based on this principle of least privilege, which Entitlement Management role should you grant to provide access for the Marketing Manager to create a connected organization?  
您的组织将与另一组织合作开展一项营销活动。作为云管理员，您的任务是为市场经理提供创建关联组织和访问软件包所需的正确权限。确保市场经理拥有完成此任务所需的最低权限至关重要。基于最小权限原则，您应该授予市场经理哪个授权管理角色，才能使其拥有创建关联组织的权限？

Correct answer  正确答案

Admin  行政

Catalog Creator  目录创建器

Catalog Owner  目录所有者

Your answer is incorrect  你的答案不正确。

Access Package Manager  访问包管理器

Overall explanation  总体解释

Answer A is the correct answer since the only Entitlement Management role that has the necessary permissions to create a connected organization is the Admin role. Therefore, this role meets your requirements.  
答案 A 是正确答案，因为只有管理员角色才拥有创建关联组织所需的权限。因此，此角色符合您的要求。

Answer B is incorrect because the Catalog Creator role doesn't include the necessary permissions for creating connected organizations. This role doesn't meet your needs.  
答案 B 不正确，因为“目录创建者”角色不包含创建关联组织所需的权限。此角色不符合您的需求。

Answer C is also incorrect because the Catalog Owner role doesn't include the necessary permissions for creating connected organizations. This role doesn't meet your requirements either.  
答案 C 也不正确，因为“目录所有者”角色不包含创建关联组织所需的权限。此角色也不符合您的要求。

Answer D is incorrect as well, since the Access Package Manager role doesn't have the necessary permissions for creating connected organizations. This role doesn't meet your requirements either.  
答案 D 也不正确，因为 Access Package Manager 角色没有创建连接组织所需的权限。此角色也不符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Delegation and roles in entitlement management - Microsoft Entra ID Governance | Microsoft Learn  
授权管理中的委派和角色 - Microsoft Entra ID 治理 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-delegate)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 2  问题 2Correct  正确的  进一步解释

Your organization has multiple user devices that are currently being used by its users. Recently, your company started deploying resources into the Azure Cloud, making it a Hybrid organization. During this transition, your organization plans to connect devices to Entra ID. You have a list of users and their respective devices.  
您的组织拥有多台用户设备，目前正被用户使用。最近，您的公司开始将资源部署到 Azure 云，从而转型为混合云组织。在此过渡期间，您的组织计划将这些设备连接到 Entra ID。您已拥有用户及其对应设备的列表。

Which user(s) will have the ability to join their devices with Entra ID?  
哪些用户可以将其设备与 Entra ID 关联？

![](https://img-c.udemycdn.com/redactor/raw/practice_test_question/2024-03-30_07-11-07-fb1bc93b0b8f92d9510617b77d58e9b8.png)

John  约翰

Mary  玛丽

John and Mary  约翰和玛丽

Your answer is correct  你的答案正确

Mary, Betty, Susan, and Kate  
玛丽、贝蒂、苏珊和凯特

All Users  所有用户

None of the Users  没有用户

Overall explanation  总体解释

When using the Azure Active Directory Join option, the only supported platforms are Windows 11, Android, iOS, Ubuntu, and MacOS.  
使用 Azure Active Directory 加入选项时，仅支持 Windows 11、Android、iOS、Ubuntu 和 MacOS 平台。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[What is a Microsoft Entra joined device? - Microsoft Entra ID | Microsoft Learn  
什么是 Microsoft Entra 已加入设备？ - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/devices/concept-directory-join)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 3  问题 3Incorrect  错误  进一步解释

Your organization is currently using the Free tier of Azure Active Directory. Recently, your HR team has developed and deployed customized applications to help users manage their personal information, including salary and benefits details. As a Cloud Admin, your responsibility is to ensure that all users are assigned the appropriate permissions to access these applications based on their respective departments. You also need to ensure that new employees are added to the correct groups and that users are moved to the correct group if they change roles. To meet these requirements, you have decided to upgrade to an Azure Premium Plan 1 license, create new security groups, manually assign users to these groups, and then provide group access to the applications. Does this meet your requirements?  
贵组织目前使用的是 Azure Active Directory 的免费层。最近，贵组织的人力资源团队开发并部署了定制应用程序，以帮助用户管理个人信息，包括薪资和福利详情。作为云管理员，您的职责是确保所有用户都根据其所属部门获得访问这些应用程序的相应权限。您还需要确保新员工被添加到正确的组，并在用户角色变更时将其移动到正确的组。为了满足这些要求，您决定升级到 Azure 高级计划 1 许可证，创建新的安全组，手动将用户分配到这些组，然后为应用程序提供组访问权限。此方案是否满足您的要求？

Your answer is incorrect  你的答案不正确。

Yes  是的

Correct answer  正确答案

No  不

Overall explanation  总体解释

If you manually assign users to groups, this would not meet the requirement of ensuring that new hires or any employee who changes departments are added to the correct group. It would be best to dynamically assign users to groups based on their department attributes.  
如果手动将用户分配到组，则无法确保新员工或任何部门变更的员工都被添加到正确的组。最佳做法是根据用户的部门属性动态地将用户分配到组。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Manage access to apps - Microsoft Entra ID | Microsoft Learn  
管理应用访问权限 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-access-management)

[How to manage groups - Microsoft Entra | Microsoft Learn  
如何管理群组 - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-manage-groups)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 4  问题 4Incorrect  错误  进一步解释

Your organization intends to utilize Azure Active Directory Terms of Use, which would help display relevant information to users and require their acceptance before they can use the corporate applications. Please select the licenses from the options below that provide access to Azure Active Directory Terms of Use.  
贵组织计划使用 Azure Active Directory 使用条款，该条款将向用户显示相关信息，并要求用户在使用企业应用程序之前接受这些条款。请从以下选项中选择可访问 Azure Active Directory 使用条款的许可证。

Your selection is incorrect  
您的选择不正确

Free Tier  免费套餐

Your selection is correct  
您的选择正确

Azure AD Premium P1

Your selection is correct  
您的选择正确

Azure AD Premium P2

Correct selection  正确选择

Microsoft EMS E3  微软 EMS E3

Correct selection  正确选择

Microsoft EMS E5  微软 EMS E5

Overall explanation  总体解释

To utilize Azure Active Directory Terms of Use, you need an active license for Azure AD Premium Pl, Azure AD Premium P2, Microsoft EMS E3, or Microsoft EMS E5. Please note that the Free tier for Azure Active Directory does not provide access to use Terms of Use.  
要使用 Azure Active Directory 使用条款，您需要拥有有效的 Azure AD Premium 1、Azure AD Premium P2、Microsoft EMS E3 或 Microsoft EMS E5 许可证。请注意，Azure Active Directory 免费层不提供使用条款的使用权限。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Terms of use in Microsoft Entra - Microsoft Entra ID | Microsoft Learn  
Microsoft Entra 使用条款 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/conditional-access/terms-of-use)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 5  问题5Correct  正确的  进一步解释

As the Cloud Administrator of your organization, your primary responsibility is to identify all the Cloud applications that your organization is using. You have been given the task of identifying any Shadow IT applications that might not have been approved. Can you suggest any tools that can help you discover these applications?  
作为贵组织的云管理员，您的主要职责是识别贵组织正在使用的所有云应用程序。您目前的任务是识别任何可能未经批准的影子 IT 应用程序。您能否推荐一些可以帮助您发现这些应用程序的工具？

Azure Security Center  Azure 安全中心

Azure Defender

Your answer is correct  你的答案正确

Microsoft Cloud App Security

Azure Sentinel

Overall explanation  总体解释

Answer A is not the correct option. Azure Security Center is a tool for managing the security posture of your environment by providing recommendations to enhance your security. However, it does not have the functionality to detect unapproved cloud applications used in your system.  
答案 A 不正确。Azure 安全中心是一个用于管理环境安全状况的工具，它会提供增强安全性的建议。但是，它不具备检测系统中未经授权的云应用程序的功能。

Answer B is also not the correct option. Azure Defender is a security and threat protection tool focusing on your resources running on different clouds, including Azure and on-premises. It cannot identify unapproved cloud applications used in your environment.  
答案 B 也不是正确选项。Azure Defender 是一款安全和威胁防护工具，专注于保护运行在不同云平台（包括 Azure 和本地环境）上的资源。它无法识别环境中未经授权的云应用程序。

On the other hand, Answer C is the correct option, as Microsoft Cloud App Security is a cloud security broker that adds safety controls around your organization's cloud usage. Its Cloud Discovery feature helps you identify all the applications in your environment.  
另一方面，答案 C 是正确选项，因为 Microsoft Cloud App Security 是一款云安全代理，可为组织的云使用添加安全控制。其云发现功能可帮助您识别环境中的所有应用程序。

Answer D is also not the correct option, as Azure Sentinel is a Security Information and Event Management System that provides threat analysis and remediation. It does not include the functionality to identify unapproved cloud applications used in your environment.  
答案 D 也不是正确选项，因为 Azure Sentinel 是一个安全信息和事件管理系统，提供威胁分析和修复功能。它不包含识别环境中未经授权的云应用程序的功能。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Overview - Microsoft Defender for Cloud Apps | Microsoft Learn  
概述 - Microsoft Defender 云应用版 | Microsoft Learn](https://learn.microsoft.com/en-us/defender-cloud-apps/what-is-defender-for-cloud-apps)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 6  问题 6Correct  正确的  进一步解释

You are the cloud administrator for your organization. Your organization has recently started using various cloud-based applications for HR functions, ticket management, storage, and other services. Your task is to ensure that whenever new users join your organization, they automatically receive an identity created within those cloud services and have the necessary permissions. What solution can you utilize to fulfill this requirement?  
您是贵公司的云管理员。贵公司最近开始使用各种基于云的应用程序来处理人力资源、工单管理、存储和其他服务。您的任务是确保每当有新用户加入贵公司时，他们都能自动获得在这些云服务中创建的身份，并拥有必要的权限。您可以使用哪种解决方案来满足此要求？

Azure Policy

Microsoft Cloud App Security

Your answer is correct  你的答案正确

Application User Provisioning  
应用程序用户配置

Azure Security Center  Azure 安全中心

Overall explanation  总体解释

Answer A is incorrect because Azure Policy is not designed to automatically provision user identities on cloud applications. Instead, its purpose is to ensure that organizations comply with regulations and maintain internal standards.  
答案 A 不正确，因为 Azure Policy 的设计目的并非在云应用程序上自动配置用户身份。相反，它的目的是确保组织遵守法规并维护内部标准。

Answer B is incorrect because Microsoft Cloud App Security is a cloud security broker that provides security controls for cloud usage, but it does not offer the functionality to automatically create user identities on cloud applications.  
答案 B 不正确，因为 Microsoft Cloud App Security 是一个云安全代理，它为云使用提供安全控制，但它不提供在云应用程序上自动创建用户身份的功能。

Answer C is correct. Application User Provisioning allows organizations to automatically set up user identities on cloud applications for new users as they join the organization. It is also integrated with Active Directory to remove those identities when a user leaves the organization.  
答案 C 正确。应用程序用户配置功能允许组织在新用户加入时自动为其在云应用程序上设置用户身份。它还与 Active Directory 集成，以便在用户离开组织时删除这些身份。

Answer D is incorrect because Azure Security Center is a tool used to recommend security measures to enhance the security of an environment. It does not offer the capability to automate the provisioning of user identities on cloud applications.  
答案 D 不正确，因为 Azure 安全中心是一个用于推荐安全措施以增强环境安全性的工具。它不提供在云应用程序上自动配置用户身份的功能。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[What is automated app user provisioning in Microsoft Entra ID - Microsoft Entra ID | Microsoft Learn  
Microsoft Entra ID 中的自动应用用户配置是什么？- Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/user-provisioning)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 7  问题 7Correct  正确的  进一步解释

As a cloud administrator for your organization, you have been given the responsibility of devising a plan for registering your line of business applications. Your goal is to make sure that all of your applications are registered with Azure Active Directory. However, you are wondering which of the following benefits cannot be obtained by registering your apps with Azure Active Directory?  
作为贵组织的云管理员，您负责制定业务应用程序注册计划。您的目标是确保所有应用程序都已注册到 Azure Active Directory。但是，您想知道以下哪些优势无法通过将应用程序注册到 Azure Active Directory 来实现？

Your applications can use Managed Identities to authenticate to other services.  
您的应用程序可以使用托管身份对其他服务进行身份验证。

Your users can authenticate to the application with Azure AD.  
您的用户可以使用 Azure AD 对应用程序进行身份验证。

The ability to use Single Sign-On.  
具备使用单点登录的功能。

Your answer is correct  你的答案正确

Provide remote access to on-premise applications.  
提供对本地应用程序的远程访问。

Overall explanation  总体解释

Answer A is incorrect because registering your applications with Azure Active Directory allows your applications to use managed identities for authentication to other Azure Services, which is a significant benefit.  
答案 A 不正确，因为将应用程序注册到 Azure Active Directory 可以让应用程序使用托管标识对其他 Azure 服务进行身份验证，这是一个很大的优势。

Similarly, Answer B is also incorrect as registering your applications with Azure Active Directory allows your users to authenticate to your application via Azure AD, which is another significant benefit.  
同样，答案 B 也是不正确的，因为将应用程序注册到 Azure Active Directory 可以让用户通过 Azure AD 对应用程序进行身份验证，这是另一个重要的优势。

Answer C is also incorrect because registering your applications with Azure Active Directory enables users to use Single Sign-On via Azure AD, which is another significant benefit.  
答案 C 也是不正确的，因为将应用程序注册到 Azure Active Directory 可以让用户通过 Azure AD 使用单点登录，这是另一个重要的优势。

The correct answer is D. Registering your application with Azure Active Directory does not provide direct remote access to on-premise applications. Instead, you can use Azure Application Proxy to provide remote access to on-premise applications.  
正确答案是 D。将应用程序注册到 Azure Active Directory 并不能直接提供对本地应用程序的远程访问。您可以使用 Azure 应用程序代理来提供对本地应用程序的远程访问。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[How and why apps are added to Microsoft Entra ID - Microsoft identity platform | Microsoft Learn  
如何以及为何将应用添加到 Microsoft Entra ID - Microsoft 身份平台 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity-platform/how-applications-are-added)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 8  问题 8Correct  正确的  进一步解释

You have registered your newly deployed cloud application with Azure Active Directory and need to assign an owner for the application. Which of the following individuals can be assigned as an owner?  
您已将新部署的云应用程序注册到 Azure Active Directory，现在需要为该应用程序指定所有者。以下哪些人员可以被指定为所有者？

Your answer is correct  你的答案正确

User  用户

Service Principal  服务负责人

Group  团体

Managed Identity  托管身份

Overall explanation  总体解释

When selecting owners for enterprise applications, only users are allowed. Service Principals, Groups, or Managed Identities cannot be selected as owners.  
为企业应用程序选择所有者时，只能选择用户。服务主体、组或托管标识不能被选为所有者。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Design and implement app management roles - Training | Microsoft Learn  
设计和实施应用管理角色 - 培训 | Microsoft Learn](https://learn.microsoft.com/en-us/training/modules/plan-design-integration-of-enterprise-apps-for-sso/5-design-implement-app-management-roles)

Domain  领域

Plan and implement workload identities  
规划和实施工作负载标识

Question 9  问题 9Incorrect  错误  进一步解释

GetCloudSkills recently hired you as the new Cloud Administrator. Your first task on the job is to organize the large inventory of access packages created for various projects. The aim is to ensure management can quickly identify which access packages belong to which projects. Currently, all of the access packages are in the General Catalog. You plan to create new catalogs for each project and move the access packages to the appropriate catalog. What is the correct way to move the packages to a new catalog?  
GetCloudSkills 最近聘请您担任新的云管理员。您的首要任务是整理为各个项目创建的大量访问包。目的是确保管理层能够快速识别哪些访问包属于哪些项目。目前，所有访问包都位于通用目录中。您计划为每个项目创建新目录，并将访问包移动到相应的目录中。将访问包移动到新目录的正确方法是什么？

Use the move resources option from the Azure portal to move the access package.  
使用 Azure 门户中的“移动资源”选项来移动访问包。

User Powershell to move the access package to the correct catalog.  
使用 PowerShell 将访问包移动到正确的目录。

Your answer is incorrect  你的答案不正确。

Use the API for entitlement management to move the access package.  
使用授权管理 API 来转移访问包。

Correct answer  正确答案

Create a new access package in the correct catalog and delete the old one.  
在正确的目录中创建一个新的访问包，然后删除旧的访问包。

Overall explanation  总体解释

Currently, access packages cannot be moved to a different catalog. If a package was created and assigned to the default general catalog, it cannot be moved. It would be best to create a new package in the correct catalog and then delete the old access package.  
目前，访问包无法移动到其他目录。如果访问包已创建并分配到默认的通用目录，则无法移动。最好的办法是在正确的目录中创建一个新访问包，然后删除旧的访问包。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Create an access package in entitlement management - Microsoft Entra ID Governance | Microsoft Learn  
在权限管理中创建访问包 - Microsoft Entra ID 治理 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/entitlement-management-access-package-create)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 10  问题 10Incorrect  错误  进一步解释

Your organization has recently set up Azure AD Connect to synchronize its on-premise Active Directory users and groups with Azure Active Directory. While validating the sync process, you have observed that some guest users are part of your directory. As per your task, you need to identify the users who have the default ability to invite guest users. Please review the table below and let me know which users would be able to invite guests.  
贵组织最近配置了 Azure AD Connect，以将本地 Active Directory 用户和组与 Azure Active Directory 同步。在验证同步过程时，您发现目录中包含一些来宾用户。根据您的任务，您需要确定哪些用户拥有邀请来宾用户的默认权限。请查看下表，并告知我哪些用户可以邀请来宾。

![](https://img-c.udemycdn.com/redactor/raw/practice_test_question/2024-03-30_07-59-36-96366fd9fcba3e200f86720d993c447b.png)

Your answer is incorrect  你的答案不正确。

User1 only  用户1

User1 and User2 only  仅限用户1和用户2

User3 only  用户3 仅限

User2 and User3 only  仅限用户2和用户3

Correct answer  正确答案

All Users  所有用户

Overall explanation  总体解释

By default, all users, including guest users, in Azure Active Directory have permission to invite other guest users into the directory. However, if you need to change this behavior, you can do so through the External Collaboration settings in Azure Active Directory.  
默认情况下，Azure Active Directory 中的所有用户（包括来宾用户）都有权邀请其他来宾用户加入目录。但是，如果您需要更改此行为，可以通过 Azure Active Directory 中的“外部协作”设置进行更改。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Enable B2B external collaboration settings - Microsoft Entra External ID | Microsoft Learn  
启用 B2B 外部协作设置 - Microsoft Entra 外部 ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/external-id/external-collaboration-settings-configure)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 11  第 11 题Incorrect  错误  进一步解释

Your organization needs to conduct quarterly access reviews for all 100 employees. Out of these 100 employees, 3 are Cloud Administrators with Global Admin roles who will configure the access reviews. As a Cloud Administrator, it is your responsibility to ensure that the organization has appropriate licenses to support these reviews. The organization wants all users to conduct self-reviews. How many Azure AD Premium P2 licenses are required for this purpose?  
贵组织需要对所有 100 名员工进行季度访问权限审查。这 100 名员工中有 3 名是具有全局管理员角色的云管理员，他们将负责配置访问权限审查。作为云管理员，您有责任确保组织拥有支持这些审查所需的适当许可证。组织希望所有用户进行自我审查。为此需要多少个 Azure AD Premium P2 许可证？

0

1

3

Correct answer  正确答案

97

Your answer is incorrect  你的答案不正确。

100

Overall explanation  总体解释

All of your Cloud Administrators have the Global Admin role, which means they don't need any Azure AD Premium P2 licenses. However, the remaining 97 users in your organization will require an Azure AD Premium P2 license as they will be conducting self-reviews.  
您的所有云管理员都拥有全局管理员角色，这意味着他们不需要任何 Azure AD Premium P2 许可证。但是，您组织中的其余 97 位用户需要 Azure AD Premium P2 许可证，因为他们将进行自我审核。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[What are access reviews? - Microsoft Entra - Microsoft Entra ID Governance | Microsoft Learn  
什么是访问权限审查？ - Microsoft Entra - Microsoft Entra ID 治理 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview#license-requirements)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 12  问题 12Incorrect  错误  进一步解释

Your organization needs to perform quarterly access reviews for all 100 employees. Out of these 100 employees, 3 are Cloud Administrators with the Global Admin role, and they will be responsible for configuring the access reviews. As one of the Cloud Administrators, it is your responsibility to ensure that your organization has the necessary licenses to support these quarterly access reviews. The organization wants only the Cloud Administrators to conduct the access reviews. Therefore, you need to determine the number of Azure Premium P2 licenses required for the purpose.  
贵组织需要对所有 100 名员工进行季度访问权限审查。这 100 名员工中有 3 名是具有全局管理员角色的云管理员，他们将负责配置访问权限审查。作为云管理员之一，您有责任确保贵组织拥有支持这些季度访问权限审查所需的许可证。贵组织希望只有云管理员才能执行访问权限审查。因此，您需要确定所需的 Azure Premium P2 许可证数量。

Correct answer  正确答案

0

1

Your answer is incorrect  你的答案不正确。

3

97

100

Overall explanation  总体解释

It is not necessary to have Azure AD Premium P2 licenses for performing access reviews if your Cloud Administrators, who have the Global Admin role, are performing them. The Azure AD Premium P2 license is not required for Global Admins and User Admins to configure access reviews or apply decisions from them.  
如果由拥有全局管理员角色的云管理员执行访问权限审查，则无需 Azure AD Premium P2 许可证。全局管理员和用户管理员配置访问权限审查或应用审查结果也无需 Azure AD Premium P2 许可证。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[What are access reviews? - Microsoft Entra - Microsoft Entra ID Governance | Microsoft Learn  
什么是访问权限审查？ - Microsoft Entra - Microsoft Entra ID 治理 | Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview#license-requirements)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 13  问题 13Incorrect  错误  进一步解释

As a Cloud Administrator, you have been given the responsibility of sending your Azure Active Directory diagnostic logs to a Log Analytics Workspace. This will allow you to carry out additional threat analysis with Azure Sentinel. However, you need to ensure that you select a valid destination for sending the logs. Which of the below options is not a valid destination for sending the logs to?  
作为云管理员，您负责将 Azure Active Directory 诊断日志发送到 Log Analytics 工作区。这将使您能够使用 Azure Sentinel 执行额外的威胁分析。但是，您需要确保选择有效的日志发送目标。以下哪个选项不是有效的日志发送目标？

Log Analytics Workspace  日志分析工作区

Correct answer  正确答案

Azure Cosmos DB

Your answer is incorrect  你的答案不正确。

Azure Storage Account  Azure 存储帐户

Event Hubs  活动中心

Overall explanation  总体解释

Answer A is incorrect, as Log Analytics Workspace is a valid destination for sending Azure Active Directory Diagnostics Logs.  
答案 A 不正确，因为 Log Analytics 工作区是发送 Azure Active Directory 诊断日志的有效目标位置。

Answer B is correct, as Azure Cosmos DB is not a valid destination for sending Azure Active Directory Diagnostics Logs.  
答案 B 正确，因为 Azure Cosmos DB 不是发送 Azure Active Directory 诊断日志的有效目标。

Answer C is incorrect, as the Azure Storage Account is a valid destination for sending Azure Active Directory Diagnostics Logs.  
答案 C 不正确，因为 Azure 存储帐户是发送 Azure Active Directory 诊断日志的有效目标。

Answer D is incorrect, as Event Hubs is a valid destination for sending Azure Active Directory Diagnostics Logs.  
答案 D 不正确，因为事件中心是发送 Azure Active Directory 诊断日志的有效目标位置。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Diagnostic settings in Azure Monitor - Azure Monitor | Microsoft Learn  
Azure Monitor 中的诊断设置 - Azure Monitor | Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/diagnostic-settings?tabs=CMD)

Domain  领域

Plan and implement identity governance  
规划和实施身份治理

Question 14  第14题Correct  正确的  进一步解释

Your company has recently implemented a new policy allowing employees to use their own devices for accessing company resources. As part of the onboarding process, you need to inform employees which of their devices are eligible for registering with Azure Active Directory and which ones are not. Below you have a list of users with their associated devices. Please identify which users will be able to register their devices to Azure Active Directory.  
贵公司最近实施了一项新政策，允许员工使用自己的设备访问公司资源。作为入职流程的一部分，您需要告知员工哪些设备符合注册到 Azure Active Directory 的条件，哪些设备不符合。下方列出了用户及其关联的设备。请确定哪些用户可以将其设备注册到 Azure Active Directory。

![](https://img-c.udemycdn.com/redactor/raw/practice_test_question/2024-03-30_07-04-52-5d212d8f282a3bdd3a781fa7f92bc734.png)

John and Mary  约翰和玛丽

John, Mary, and Betty  约翰、玛丽和贝蒂

Mary and Kate  玛丽和凯特

Your answer is correct  你的答案正确

Mary, Betty, Susan, and Kate  
玛丽、贝蒂、苏珊和凯特

All Users  所有用户

None of the Users  没有用户

Overall explanation  总体解释

The supported platforms are Windows 10/11, Android, iOS, Ubuntu, and MacOS when using the Azure Active Directory Register option. In this scenario, Windows 7 is the only platform that cannot be registered to Azure Active Directory.  
使用 Azure Active Directory 注册选项时，支持的平台包括 Windows 10/11、Android、iOS、Ubuntu 和 macOS。在这种情况下，只有 Windows 7 平台无法注册到 Azure Active Directory。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[What are Microsoft Entra registered devices? - Microsoft Entra ID | Microsoft Learn  
什么是 Microsoft Entra 注册设备？ - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/devices/concept-device-registration)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 15  第15题Correct  正确的  进一步解释

Your organization has decided to use Azure Active Directory Terms of Use to inform users of their responsibilities before accessing corporate applications. As the cloud administrator, you have been assigned the responsibility of implementing the Terms of Use. However, there may be certain roles that do not have the necessary permissions to implement the Terms of Use. Can you identify the role that lacks the required permissions?  
贵组织已决定使用 Azure Active Directory 使用条款来告知用户在访问企业应用程序之前应承担的责任。作为云管理员，您已被指定负责实施这些使用条款。但是，某些角色可能没有实施这些使用条款所需的权限。您能否找出缺少所需权限的角色？

Global Administrator  全球管理员

Security Administrator  安全管理员

Conditional Access Administrator  
条件访问管理员

Your answer is correct  你的答案正确

Helpdesk Administrator  服务台管理员

Overall explanation  总体解释

Please note that Answer A, B, and C are all incorrect, as Global Administrator, Security Administrator, and Conditional Access Administrator respectively already have the necessary permissions to implement Azure Active Directory Terms of Use. Answer D is the correct option as Helpdesk Administrator does not have the necessary permissions to implement Azure Active Directory Terms of Use.  
请注意，答案 A、B 和 C 均不正确，因为全局管理员、安全管理员和条件访问管理员分别已拥有实施 Azure Active Directory 使用条款所需的权限。答案 D 是正确的，因为帮助台管理员没有实施 Azure Active Directory 使用条款所需的权限。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Terms of use in Microsoft Entra - Microsoft Entra ID | Microsoft Learn  
Microsoft Entra 使用条款 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/conditional-access/terms-of-use)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 16  第16题Correct  正确的  进一步解释

Your organization has enabled Azure cloud security defaults to improve its security posture. The security defaults implement several security settings to help protect organizations from various attacks. Which of the following is not a setting implemented by security defaults?  
您的组织已启用 Azure 云安全默认设置以提升安全态势。这些安全默认设置实施了多项安全配置，以帮助组织抵御各种攻击。以下哪项不是安全默认设置实施的配置？

All users are required to register for multi-factor authentication.  
所有用户都必须注册多重身份验证。

Blocking legacy authentication protocols.  
阻止旧版身份验证协议。

Your answer is correct  你的答案正确

Require approval workflows for highly privileged roles.  
对高权限角色要求采用审批流程。

Require administrators to perform multi-factor authentication.  
要求管理员执行多因素身份验证。

Overall explanation  总体解释

Answer A is incorrect because requiring all users to register for multi-factor authentication is a part of the default security settings.  
答案 A 不正确，因为要求所有用户注册多因素身份验证是默认安全设置的一部分。

Answer B is incorrect because blocking legacy authentication protocols is a part of the default security settings.  
答案 B 不正确，因为阻止旧式身份验证协议是默认安全设置的一部分。

Answer C is correct, as requiring approval workflows for high-privileged roles is not included in the security default settings. Instead, it is included in the Privileged Identity Management feature set.  
答案 C 正确，因为安全默认设置中并未包含对高权限角色要求审批工作流程的功能，而是包含在特权身份管理功能集中。

Answer D is incorrect because requiring administrators to perform multi-factor authentication is a part of the default security settings.  
答案 D 不正确，因为要求管理员执行多因素身份验证是默认安全设置的一部分。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Providing a default level of security in Microsoft Entra ID - Microsoft Entra | Microsoft Learn  
在 Microsoft Entra ID 中提供默认安全级别 - Microsoft Entra | Microsoft Learn](https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 17  第17题Correct  正确的  进一步解释

Your company's Entra ID has recently experienced several password spray attacks targeting different users. To prevent unauthorized access, the cloud administrator has implemented Smart Lockout. However, this policy has locked one of your users out of their account. They have requested the cloud administrator unlock their account so they can resume their work tasks.  
贵公司的 Entra ID 近期遭受了多次针对不同用户的密码喷洒攻击。为防止未经授权的访问，云管理员已启用智能锁定功能。然而，该策略导致一位用户无法访问其帐户。该用户已请求云管理员解锁其帐户，以便恢复工作。

Can the cloud administrator actually unlock their account to restore access?  
云管理员真的可以解锁他们的账户以恢复访问权限吗？

Your answer is correct  你的答案正确

Yes  是的

#### Explanation  解释

Yes, the cloud administrator has the ability to unlock the user's account to restore access. Smart Lockout is a feature that helps protect against password spray attacks by locking out users who have too many failed sign-in attempts. However, the cloud administrator has the authority to override this lockout and unlock the user's account to allow them to resume their work tasks.  
是的，云管理员有权解锁用户帐户以恢复其访问权限。“智能锁定”功能通过锁定登录失败次数过多的用户帐户来帮助防止密码喷洒攻击。但是，云管理员有权解除此锁定并解锁用户帐户，使其能够继续执行工作任务。

No  不

#### Explanation  解释

No, the cloud administrator does not have the ability to unlock the user's account to restore access. Smart Lockout is designed to enhance security by preventing unauthorized access through password spray attacks. Once a user is locked out due to too many failed sign-in attempts, the lockout cannot be manually overridden by the cloud administrator. The user will need to wait for the lockout period to expire before regaining access to their account.  
不，云管理员无权解锁用户帐户以恢复访问权限。智能锁定旨在通过防止密码喷洒攻击等未经授权的访问来增强安全性。一旦用户因登录失败次数过多而被锁定，云管理员无法手动解除锁定。用户需要等待锁定期结束才能重新访问其帐户。

**Resources  资源**

[  
使用 Microsoft Entra 智能锁定保护用户帐户免受攻击](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-password-smart-lockout)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 18  第18题Correct  正确的  进一步解释

Your company recently detected multiple password spray attempts against users in its Azure Active Directory. To prevent these attacks, your cloud administrator has implemented Smart Lockout to lock out the affected accounts. Unfortunately, one of your users has been locked out by the policy and needs immediate access to perform work tasks. The user has attempted to reset their password using the Self-service password reset feature. Will this grant the user access back to their account?  
贵公司最近检测到 Azure Active Directory 中存在多起针对用户的密码喷洒攻击。为防止此类攻击，云管理员已实施智能锁定策略，锁定受影响的帐户。不幸的是，一位用户因该策略而被锁定，但急需访问权限以完成工作任务。该用户已尝试使用自助密码重置功能重置密码。请问此操作能否使该用户重新获得帐户访问权限？

Your answer is correct  你的答案正确

Yes  是的

No  不

Overall explanation  总体解释

If a user's account gets locked out through the smart lockout feature, they can use the self-service password reset option to regain access to their account.  
如果用户的帐户因智能锁定功能而被锁定，他们可以使用自助密码重置选项重新获得对其帐户的访问权限。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Prevent attacks using smart lockout - Microsoft Entra ID | Microsoft Learn  
使用智能锁定功能防止攻击 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-password-smart-lockout)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 19  第19题Correct  正确的  进一步解释

Your organization has recently implemented Multi-Factor Authentication (MFA) for all its users as part of its security compliance requirements. To ensure that the organization remains compliant when new users join, what steps should be taken to ensure that these users can use MFA without any issues?  
贵组织最近已为所有用户实施了多因素身份验证 (MFA)，以满足安全合规要求。为确保新用户加入后组织仍能保持合规性，应采取哪些措施来确保这些用户能够顺利使用 MFA？

Azure Policy

User-Risk Policy  用户风险政策

Sign-ln Risk Policy  登录风险政策

Your answer is correct  你的答案正确

Multi-Factor Registration Policy  
多因素注册政策

Overall explanation  总体解释

Answer A is not suitable for restricting your helpdesk administrators' role capabilities to solely support users within their dedicated region. It fails to meet your requirements.  
答案 A 并不适合将您的服务台管理员的角色权限限制为仅支持其指定区域内的用户。它无法满足您的要求。

Answer B is incorrect. The User Risk Policy determines the likelihood of a user's identity being compromised and specifies actions that should be taken. However, it does not ensure that new users in your organization can utilize multi-factor authentication to its fullest potential. Therefore, it does not meet your requirements.  
答案 B 不正确。用户风险策略可以确定用户身份被盗用的可能性，并规定应采取的措施。但是，它并不能确保组织中的新用户能够充分利用多因素身份验证。因此，它不符合您的要求。

Answer C is also incorrect. The Sign-In Risk Policy identifies instances where a user's authentication attempt may not have originated from the actual user and defines the appropriate actions. However, it does not guarantee that new users in your organization can fully utilize multi-factor authentication. Therefore, it does not meet your requirements.  
答案 C 也不正确。登录风险策略识别出用户身份验证尝试可能并非来自真实用户的情况，并定义了相应的措施。但是，它并不能保证组织中的新用户能够充分利用多因素身份验证。因此，它不符合您的要求。

Answer D is the correct option. A Multi-factor authentication registration policy ensures that all new users in your organization provide all necessary identity and contact information before they can use multi-factor authentication. This solution meets your requirements.  
答案 D 是正确选项。多因素身份验证注册策略可确保您组织中的所有新用户在使用多因素身份验证之前提供所有必要的身份和联系信息。此解决方案符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Microsoft Entra ID Protection risk-based access policies - Microsoft Entra ID Protection | Microsoft Learn  
Microsoft Entra ID Protection 基于风险的访问策略 - Microsoft Entra ID Protection | Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-policies)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 20  第20题Correct  正确的  进一步解释

Your organization is aiming to enhance its current security posture. As a part of this improvement process, the management is seeking a way to use If-Then statements based on user or device attributes to set specific conditions that need to be met before granting access to particular applications. Can you suggest the best Azure feature that can be utilized to meet this requirement?  
贵组织致力于提升当前的安全态势。作为改进流程的一部分，管理层正在寻求一种方法，利用基于用户或设备属性的 If-Then 语句来设置特定条件，这些条件必须在授予对特定应用程序的访问权限之前满足。您能否推荐一个能够满足此需求的最佳 Azure 功能？

Azure Logic Apps  Azure 逻辑应用

Azure Policy

RBAC Roles  RBAC 角色

Your answer is correct  你的答案正确

Conditional Access Policies  
条件访问策略

Overall explanation  总体解释

Please note that answer A, which suggests using Azure Logic Apps, is incorrect for checking user or device attributes as part of the logic statement. Even though Azure Logic Apps provides If-Then logic statements, it would not be the best tool for this task, as it does not meet your requirements.  
请注意，答案 A 建议使用 Azure 逻辑应用，但这并不适用于在逻辑语句中检查用户或设备属性。尽管 Azure 逻辑应用提供了 If-Then 逻辑语句，但它并非完成此任务的最佳工具，因为它无法满足您的要求。

Similarly, answer B, which recommends using Azure Policy, is incorrect for restricting your helpdesk administrators' role capabilities to only support users within their dedicated region. This solution does not meet your requirements.  
同样，建议使用 Azure Policy 的选项 B 也是错误的，因为它限制了服务台管理员的角色权限，使其只能支持其指定区域内的用户。此解决方案不符合您的要求。

Answer C proposes using RBAC roles to grant helpdesk administrators the appropriate permissions. However, it cannot be used to ensure they can only support users within their dedicated region, making it an unsuitable solution.  
答案 C 建议使用基于角色的访问控制 (RBAC) 来授予服务台管理员相应的权限。然而，这种方法无法确保他们只能支持其指定区域内的用户，因此并非合适的解决方案。

Answer D is the correct option. It suggests using Conditional Access Policies to build IF-Then statements based on specific signals, such as user or device attributes, before granting access. This solution meets your requirements.  
答案 D 是正确选项。它建议使用条件访问策略，根据特定信号（例如用户或设备属性）构建 IF-Then 语句，然后再授予访问权限。此方案符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Building a Conditional Access policy - Microsoft Entra ID | Microsoft Learn  
构建条件访问策略 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-policies)

Domain  领域

Implement authentication and access management  
实施身份验证和访问管理

Question 21  问题 21Correct  正确的  进一步解释

Your company operates globally and has offices in Los Angeles, New York, London, and Shanghai. The Helpdesk Administrators should only be allowed to assist the users within their assigned region. What method can you use to restrict role permissions to a particular region?  
贵公司是一家全球性企业，在洛杉矶、纽约、伦敦和上海均设有办事处。服务台管理员应该只能为其分配区域内的用户提供支持。您可以使用什么方法将角色权限限制在特定区域内？

Management Groups  管理团队

Your answer is correct  你的答案正确

Administrative Units  行政单位

Azure Policy

RBAC Roles  RBAC 角色

Overall explanation  总体解释

Answer A is incorrect as Management Groups are primarily used to group subscriptions to provide better management capabilities. It cannot meet your requirements.  
答案 A 不正确，因为管理组主要用于对订阅进行分组，以提供更好的管理功能。它无法满足您的要求。

Answer B is the correct option, as Administrative Units offer the functionality to restrict permissions based on specific organizational requirements. In this case, it can be used to provide regional support for helpdesk administrators, which meets your requirements.  
答案 B 是正确选项，因为管理单元提供了根据特定组织需求限制权限的功能。在本例中，它可以用于为服务台管理员提供区域支持，满足您的需求。

Answer C is incorrect, as Azure Policy is not the best option to restrict the helpdesk administrators' role capabilities to support users only in their dedicated region. This solution does not meet your requirements.  
答案 C 不正确，因为 Azure Policy 并非限制服务台管理员角色权限（使其仅支持其指定区域内的用户）的最佳方案。此方案不符合您的要求。

Answer D is also incorrect as RBAC roles only grant the helpdesk administrators the necessary permissions, but they cannot be used to ensure that they can only support users within their dedicated region. This solution does not meet your requirements.  
答案 D 也不正确，因为基于角色的访问控制 (RBAC) 角色仅授予服务台管理员必要的权限，但不能用于确保他们只能支持其指定区域内的用户。此解决方案不符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Administrative units in Microsoft Entra ID - Microsoft Entra ID | Microsoft Learn  
Microsoft Entra ID 中的管理单元 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/administrative-units)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 22  问题 22Incorrect  错误  进一步解释

Your organization is planning to use Active Directory dynamic groups to automatically assign users to security groups based on specific Active Directory attributes. As the cloud administrator, you have been assigned the task of creating the rules for populating these dynamic groups. Can you identify which of the components listed below is not valid for a rule expression?  
您的组织计划使用 Active Directory 动态组，根据特定的 Active Directory 属性自动将用户分配到安全组。作为云管理员，您已被指派创建用于填充这些动态组的规则。您能否指出以下列出的哪些组件不适用于规则表达式？

Property  财产

Your answer is incorrect  你的答案不正确。

Operator  操作员

Value  价值

Correct answer  正确答案

Status  地位

Overall explanation  总体解释

A membership rule for a dynamic group consists of three parts: a property, an operator, and a value. The "status" is not a valid part of a membership rule. For example, if you want to assign all users of the Marketing department to a security group, you can use an expression like 'user.department -eq "Marketing"'.  
动态组的成员资格规则由三部分组成：属性、运算符和值。“状态”不是成员资格规则的有效组成部分。例如，如果您想将市场部的所有用户分配到某个安全组，可以使用类似“user.department -eq "Marketing"”的表达式。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Rules for dynamically populated groups membership - Microsoft Entra ID | Microsoft Learn  
动态填充组成员资格规则 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 23  问题 23Correct  正确的  进一步解释

Your organization has set up Azure AD Connect to synchronize its on-premises users and groups with Azure Active Directory. Now, your organization wants to enable multi-factor authentication for its on-premises applications. Which of the Hybrid Identity configuration settings should be used?  
您的组织已配置 Azure AD Connect，以将本地用户和组与 Azure Active Directory 同步。现在，您的组织希望为其本地应用程序启用多重身份验证。应该使用混合标识配置中的哪些设置？

Password Hash Synchronization  
密码哈希同步

Pass-Through Authentication  
直通式身份验证

Single Sign-On  单点登录

Your answer is correct  你的答案正确

Federation Service  联邦服务

Overall explanation  总体解释

Answer A is incorrect because Password Hash Synchronization stores the password hash in the cloud, which does not meet your requirements.  
答案 A 不正确，因为密码哈希同步会将密码哈希存储在云端，这不符合您的要求。

Answer B is incorrect because Pass-Through Authentication ensures that all authentication requests originating in the cloud are passed through to the on-premise Active Directory environment for authentication. This also does not meet your requirements.  
答案 B 不正确，因为直通身份验证会将来自云端的所有身份验证请求传递到本地 Active Directory 环境进行身份验证。这不符合您的要求。

Answer C is incorrect because single sign-on only provides users with the ability to sign in once and access multiple applications without requiring them to authenticate multiple times. This doesn't meet your requirements either.  
答案 C 不正确，因为单点登录仅允许用户登录一次即可访问多个应用程序，而无需多次验证身份。这也不符合您的要求。

Answer D is correct, as Azure Active Directory Federation Services enables multi-factor authentication for on-premise applications, meeting your requirements.  
答案 D 是正确的，因为 Azure Active Directory 联合身份验证服务为本地应用程序启用了多重身份验证，满足您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[What is hybrid identity with Microsoft Entra ID? - Microsoft Entra ID | Microsoft Learn  
什么是 Microsoft Entra ID 的混合身份？ - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/hybrid/whatis-hybrid-identity)

[What is federation with Microsoft Entra ID? - Microsoft Entra ID | Microsoft Learn  
什么是与 Microsoft Entra ID 的联合身份验证？ - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/whatis-fed)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 24  问题 24Correct  正确的  进一步解释

Your organization has set up Azure AD Connect to synchronize its local users and groups to Azure Active Directory. The organization has a strict policy that prohibits storing any user passwords or password hashes in the cloud. Which Hybrid Identity configuration setting should be utilized to comply with this requirement?  
贵组织已配置 Azure AD Connect，以将本地用户和组同步到 Azure Active Directory。贵组织有一项严格的策略，禁止在云端存储任何用户密码或密码哈希值。为了满足此要求，应使用哪种混合身份配置设置？

Multi-factor Authentication  
多因素身份验证

Password Hash Synchronization  
密码哈希同步

Your answer is correct  你的答案正确

Pass-Through Authentication  
直通式身份验证

Password Writeback  密码回写

Overall explanation  总体解释

Answer A is incorrect because Multi-factor Authentication alone does not prevent passwords from being stored in the cloud, which does not meet your requirements.  
答案 A 不正确，因为仅靠多因素身份验证无法阻止密码存储在云端，这不符合您的要求。

Answer B is incorrect because Password Hash Synchronization involves storing a password hash in the cloud, which does not meet your requirements.  
答案 B 不正确，因为密码哈希同步涉及将密码哈希存储在云端，这不符合您的要求。

Answer C is correct because Pass-Through Authentication ensures that all authentication requests originating in the cloud are passed to the on-premise Active Directory for authentication.  
答案 C 正确，因为直通身份验证可确保所有源自云端的身份验证请求都传递到本地 Active Directory 进行身份验证。

Answer D is incorrect because Password writeback involves writing passwords from the cloud back to the on-premise Active Directory, which does not meet your requirements.  
答案 D 不正确，因为密码回写涉及将密码从云端写回本地 Active Directory，这不符合您的要求。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[Microsoft Entra Connect: Pass-through Authentication - Microsoft Entra ID | Microsoft Learn  
Microsoft Entra Connect：直通身份验证 - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/how-to-connect-pta)

Domain  领域

Implement and manage user identities  
实施和管理用户身份

Question 25  第25题Correct  正确的  进一步解释

Your organization has multiple user devices that are currently being used by its users. Recently, your company started deploying resources into the Azure Cloud, making it a Hybrid organization. In the process of this transition, your organization intends to connect devices to Azure AD. You have a list of users and their respective devices. Can you identify which users will have the ability to join their devices with Azure Active Directory?  
您的组织拥有多台用户设备，目前正被用户使用。最近，您的公司开始将资源部署到 Azure 云，使其成为混合组织。在此迁移过程中，您的组织计划将设备连接到 Azure AD。您拥有用户及其对应设备的列表。请问哪些用户可以将其设备加入 Azure Active Directory？

![](https://img-c.udemycdn.com/redactor/raw/practice_test_question/2024-03-30_07-11-07-fb1bc93b0b8f92d9510617b77d58e9b8.png)

John  约翰

Mary  玛丽

John and Mary  约翰和玛丽

Your answer is correct  你的答案正确

Mary, Betty, Susan, and Kate  
玛丽、贝蒂、苏珊和凯特

All Users  所有用户

None of the Users  没有用户

Overall explanation  总体解释

When using the Azure Active Directory Join option, the only supported platforms are Windows 1O/11, Android, iOS, Ubuntu, and MacOS.  
使用 Azure Active Directory 加入选项时，仅支持 Windows 10/11、Android、iOS、Ubuntu 和 MacOS 平台。

If you want to learn more, go to:  
如果您想了解更多信息，请访问：

[What is a Microsoft Entra joined device? - Microsoft Entra ID | Microsoft Learn  
什么是 Microsoft Entra 已加入设备？ - Microsoft Entra ID | Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/devices/concept-directory-join)

Domain  领域

Implement and manage user identities  
实施和管理用户身份