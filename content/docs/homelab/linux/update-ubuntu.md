---
title: update ubuntu VM
description: update ubuntu VM
---
# update packages

Update all packages (regular system updates)  
```sh
sudo apt update
sudo apt upgrade

# If you want Ubuntu to also handle dependency changes (install/remove packages as required),

sudo apt full-upgrade
```

Clean up unused packages afterwards  
```sh
sudo apt autoremove --purge
sudo apt clean

```

# update release and kernel
## kernel  
after reboot check kernel version`uname -r`  
[Ubuntu kernel lifecycle and enablement stack \| Ubuntu](https://ubuntu.com/kernel/lifecycle)  
Get a newer kernel on LTS  
```sh
sudo apt-get install --install-recommends linux-generic-hwe-24.04

sudo reboot
```

## release
```sh
sudo apt update
sudo apt full-upgrade
sudo do-release-upgrade
```