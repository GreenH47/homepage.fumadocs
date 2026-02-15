---
title: Publish a self-hosted application to the Internet using Cloudflare Acces
description: Publish a self-hosted application to the Internet using Cloudflare Acces
---
Cloudflare Access adds an authentication layer before traffic ever hits your tunnel. You create an _Access Application_ for your tunnel’s hostname, and then define policies that only allow specific identities (e.g., your email, Google account, GitHub account, etc.).  

[Create an Access application · Cloudflare Learning Paths](https://developers.cloudflare.com/learning-paths/clientless-access/access-application/create-access-app/?utm_source=chatgpt.com)  

[Publish a self-hosted application to the Internet · Cloudflare One docs](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/)  

# Steps (high-level)
- Configure an identity provider (Google, GitHub, email OTP, etc.) or a policy under **Zero Trust → Access control → Polices
    ![Cloudflare Access 1771131700577|617x375](https://s3.greenhuang.com/docs/Cloudflare-Access-1771131700577.png)
    
- In Zero Trust → Access → Groups, click Add a Group. Choose Emails or Email list selector. Add the exact email(s) you want to allow
    ![Cloudflare Access 1771132801123](https://s3.greenhuang.com/docs/Cloudflare-Access-1771132801123.png)

- In the Cloudflare dashboard, go to **Zero Trust → Access control → Applications**.
    ![Cloudflare Access 1771131498703](https://s3.greenhuang.com/docs/Cloudflare-Access-1771131498703.png)
- Add a **Self-hosted application** for the public hostname you assigned to your tunnel.
    ![Cloudflare Access 1771131773332](https://s3.greenhuang.com/docs/Cloudflare-Access-1771131773332.png)

- In the application’s **Policies**, set rules that _only allow your user identity_ and deny all others.
![Cloudflare Access 1771131931673](https://s3.greenhuang.com/docs/Cloudflare-Access-1771131931673.png)


# results
If an email is not on the allowed list, no code is sent — it will silently fail, preventing guessing.  

![Cloudflare Access 1771132013405](https://s3.greenhuang.com/docs/Cloudflare-Access-1771132013405.png)

![Cloudflare Access 1771132075296](https://s3.greenhuang.com/docs/Cloudflare-Access-1771132075296.png)