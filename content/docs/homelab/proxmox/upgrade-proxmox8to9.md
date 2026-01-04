---
title: upgrade my proxmox server from 8.4.0 to 9.0
description: A guide to upgrade my proxmox server from 8.4.0 to 9 for testing and learning purposes.
---

[How to Upgrade from Proxmox VE 8 to 9 Fast and Hassle-Free - Virtualization Howto](https://www.virtualizationhowto.com/2025/08/how-to-upgrade-from-proxmox-ve-8-to-9-fast-and-hassle-free/)  

[Upgrade from 8 to 9 - Proxmox VE](https://pve.proxmox.com/wiki/Upgrade_from_8_to_9)  

![](https://s3.greenhuang.com/docs/upgrade-proxmox8to9-20250812.png)

# Proxmox VE 8.4 → 9.x (Debian 12 “bookworm” → 13 “trixie”) Upgrade Notes

## Prerequisites先决条件

- Console/SSH access (ideally via iDRAC/KVM) and good backups. Run upgrades from a shell, not the web UI. [Proxmox VE](https://pve.proxmox.com/wiki/Upgrade_from_8_to_9)控制台/SSH 访问（最好通过 iDRAC/KVM）以及良好的备份。从 Shell 而非 Web UI 运行升级。Proxmox [VE](https://pve.proxmox.com/wiki/Upgrade_from_8_to_9)
    
- If you run Ceph on the node, upgrade Ceph to **19.x Squid** before proceeding. [Proxmox VE](https://pve.proxmox.com/wiki/Upgrade_from_8_to_9)如果您在节点上运行 Ceph，请先将 Ceph 升级到 **19.x Squid** ，然后再继续。Proxmox [VE](https://pve.proxmox.com/wiki/Upgrade_from_8_to_9)

### Update 8.4 to the latest (to get the checker)1）更新 8.4 至最新版本（以获取检查器）
```bash
apt update
apt dist-upgrade -y
pveversion            # should show >= 8.4.1

```

The `pve8to9` checker is provided by the latest 8.4 packages; run it often. [Proxmox VE](https://pve.proxmox.com/wiki/Upgrade_from_8_to_9)最新的 8.4 软件包提供了 `pve8to9` 检查器；请经常运行它。Proxmox  

```bash
pve8to9 --full
```

### 2) Switch APT repositories to Debian 13 + PVE 9 (deb822 format)2）将 APT 存储库切换到 Debian 13 + PVE 9（deb822 格式）

#### Debian base (trixie + security) — include `non-free-firmware`Debian 基础（trixie + security）——包含 `non-free-firmware`  

```bash
cat > /etc/apt/sources.list.d/debian.sources <<'EOF'
Types: deb
URIs: http://deb.debian.org/debian/
Suites: trixie trixie-updates
Components: main non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg

Types: deb
URIs: http://security.debian.org/debian-security/
Suites: trixie-security
Components: main non-free-firmware
Signed-By: /usr/share/keyrings/debian-archive-keyring.gpg
EOF

```

Debian 13 expects deb822 sources and uses the `non-free-firmware` component. [Proxmox VE](https://pve.proxmox.com/wiki/Package_repositories)Debian 13 需要 deb822 源并使用 `non-free-firmware` 组件。Proxmox  
#### Proxmox VE 9 (no-subscription)Proxmox VE 9（无需订阅）
```bash
cat > /etc/apt/sources.list.d/proxmox.sources <<'EOF'
Types: deb
URIs: http://download.proxmox.com/debian/pve
Suites: trixie
Components: pve-no-subscription
Signed-By: /usr/share/keyrings/proxmox-archive-keyring.gpg
EOF

```

#### Remove any leftover Bookworm or old PVE 8 entries删除任何剩余的 Bookworm 或旧的 PVE 8 条目
```bash
mv /etc/apt/sources.list /etc/apt/sources.list.bak 2>/dev/null || true
sed -i '/bookworm/d' /etc/apt/sources.list.d/*.list 2>/dev/null || true
apt update
apt policy | sed -n '1,200p'   # sanity-check: only *trixie* repos

```

### 3) Upgrade to Debian 13 / PVE 9 and reboot3）升级到 Debian 13 / PVE 9 并重启
```bash
apt dist-upgrade -y
pve8to9 --full
reboot

```

After dist-upgrade, re-run the checker, then reboot to load the **6.14** kernel. [Proxmox VE](https://pve.proxmox.com/wiki/Upgrade_from_8_to_9)dist-upgrade 之后，重新运行检查器，然后重新启动以加载 **6.14** 内核。Proxmox [VE](https://pve.proxmox.com/wiki/Upgrade_from_8_to_9) 

### 4) Post-reboot checks4）重启后检查
```bash
uname -r     # expect 6.14.*-pve
pveversion   # expect pve-manager/9.x
```

### 5) Common warnings & how to resolve5）常见警告及解决方法

#### A) `systemd-boot` meta-package warningA) `systemd-boot` 元包警告

If `pve8to9` flags the **systemd-boot** meta-package and you didn’t intentionally switch to sd-boot, remove the meta-package (it auto-installs sd-boot hooks you don’t want):如果 `pve8to9` 标记了 **systemd-boot** 元包，而您并没有故意切换到 sd-boot，请删除该元包（它会自动安装您不需要的 sd-boot 钩子）：
```bash
apt remove -y systemd-boot
```

####  Microcode warning (Intel/AMD)微代码警告（Intel/AMD）

Enable `non-free-firmware` (see §2) and install the matching package:启用 `non-free-firmware` （参见§2）并安装匹配的软件包：

```bash
apt install intel-microcode   # Intel
# or
apt install amd64-microcode   # AMD

```
Microcode packages live in the Debian repo and provide early CPU fixes. [Proxmox VE](https://pve.proxmox.com/wiki/Package_repositories)[Debian Packages](https://packages.debian.org/trixie/admin/intel-microcode?utm_source=chatgpt.com)微码包位于 Debian 仓库中，提供早期的 CPU 修复。Proxmox [VE](https://pve.proxmox.com/wiki/Package_repositories) [Debian 软件包](https://packages.debian.org/trixie/admin/intel-microcode?utm_source=chatgpt.com)

#### D) LVM auto-activation noticeD）LVM 自动激活通知

PVE 9 disables auto-activation for **new** LVs; for existing ones you can run the migration script (strongly recommended on shared LVM; optional on local LVM):PVE 9 禁用**新** LV 的自动激活；对于现有的 LV，您可以运行迁移脚本（强烈建议在共享 LVM 上使用；在本地 LVM 上可选）：
```bash
/usr/share/pve-manager/migrations/pve-lvm-disable-autoactivation

```
