---
title: How to Set Up SSH on Linux (and Troubleshoot Common Errors)
description: How to Set Up SSH on Linux (and Troubleshoot Common Errors)
---
# Step 1 — Install and Start the SSH Server
```bash
sudo apt update
sudo apt install openssh-server
sudo systemctl enable --now ssh

sudo systemctl status ssh

```

# 🔑 Step 2 — Generate SSH Keys (Client)
On your **local machine**, generate a key pair:

`ssh-keygen -t ed25519 -C "your_email@example.com"`

This creates:

- `~/.ssh/id_ed25519` — your **private key**
    
- `~/.ssh/id_ed25519.pub` — your **public key**
    

Never share your private key; it stays on your local device.

# Step 3 — Copy Your Public Key to the Server
```shell
mkdir -p ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
# Paste the contents of your `id_ed25519.pub` file into `authorized_keys`, save, and exit.

chmod 600 ~/.ssh/authorized_keys
systemctl restart ssh

```

# Step 4 — SSH Client Login
```
ssh username@server_ip

```

# troubleshoot
Every SSH server has a **host key** that uniquely identifies it. The first time you connect to a new server, your SSH client saves the server’s host key in the `known_hosts` file in your home directory.  

If you reinstall the server or regenerate host keys, the saved key on your local machine will no longer match the server’s current one. When this happens, SSH shows this warning:  

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key for 192.168.x.x has changed and you have requested strict checking.
Host key verification failed.

```

If you reinstalled the host or rebuilt it, you can be confident the host key actually changed — not a security breach.  

Remove the old key from your local known_hosts On most systems (Linux/macOS/Windows PowerShell):  
```
ssh-keygen -R server_ip_or_hostname

```

the retry the connection  
```shell
ssh username@server_ip

# SSH will prompt:
The authenticity of host 'server_ip (server_ip)' can't be established.
Are you sure you want to continue connecting (yes/no)?

```