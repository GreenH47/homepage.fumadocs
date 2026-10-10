---
title: Fixing Oracle Cloud Agent sudo Errors on Ubuntu 26.04 LTS ARM64
description: After deploying Ubuntu 26.04 LTS on an Oracle Cloud Infrastructure (OCI) ARM64 instance, every sudo command produced warnings including wildcards are not allowed in command arguments and unknown setting requiretty. This article explains why Ubuntu transition to Rust based sudo rs causes compatibility issues with Oracle Cloud Agent, and how to resolve them safely by switching to traditional sudo.ws
---



## 1. The Problem

While maintaining my Ubuntu 26.04.1 LTS ARM64 virtual machine on Oracle Cloud Infrastructure (OCI), I noticed that every command executed through `sudo` produced several configuration warnings.

For example, running:

```
sudo apt update
```

Produced errors similar to:

```
/etc/sudoers.d/100-oracle-cloud-agent-users:8:32:
wildcards are not allowed in command arguments

Cmnd_Alias MULTIPATH_SYSTEMD =
    /bin/systemctl * multipathd.service

/etc/sudoers.d/100-oracle-cloud-agent-users:51:23:
unknown setting: 'requiretty'

Defaults:snap_daemon !requiretty
```

Interestingly, `apt` continued to work:

```
Hit:1 http://archive.ubuntu.com/ubuntu resolute InRelease
Hit:2 http://security.ubuntu.com/ubuntu resolute-security InRelease

All packages are up to date.
```

The warnings appeared whenever I used `sudo`, not just with `apt`.

This suggested that the issue was related to `sudo` configuration rather than Ubuntu's package manager.

## 2. My Environment

The issue occurred on the following system:

| Component           | Configuration                               |
| ------------------- | ------------------------------------------- |
| Cloud provider      | Oracle Cloud Infrastructure                 |
| Architecture        | ARM64 / AArch64                             |
| Operating system    | Ubuntu 26.04.1 LTS                          |
| Codename            | Resolute                                    |
| Linux kernel        | 7.0.0-1013-oracle                           |
| sudo implementation | sudo-rs 0.2.13-0ubuntu1.2                   |
| Affected file       | /etc/sudoers.d/100-oracle-cloud-agent-users |

I confirmed the operating system and kernel using:

```
lsb_release -a
uname -r
```

Then checked the installed sudo version:

```
sudo --version
```

Output:

```
sudo-rs 0.2.13-0ubuntu1.2
```

This revealed an important change introduced in recent Ubuntu releases.

## 3. Root Cause: Ubuntu Switched to Rust-Based sudo

Starting with Ubuntu 25.10, Canonical replaced the default traditional C-based `sudo` implementation with `sudo-rs`, a Rust-based alternative.

Ubuntu 26.04 LTS continues using `sudo-rs` by default.

The traditional implementation remains available under the name `sudo.ws`.

Although `sudo-rs` supports most common sudo operations, it is not completely compatible with the traditional implementation.

### Wildcard incompatibility

Oracle Cloud Agent installs sudo rules that include wildcard expressions such as:

```
Cmnd_Alias MULTIPATH_SYSTEMD = /bin/systemctl * multipathd.service
```

The traditional `sudo` implementation supports wildcard matching in command arguments.

However, `sudo-rs` restricts argument wildcard usage. In particular, the standalone wildcard is supported as a final argument rather than an arbitrary argument preceding a service name.

Therefore, the Oracle Cloud Agent configuration triggers:

```
wildcards are not allowed in command arguments
```

### Unsupported sudoers settings

Another Oracle Cloud Agent rule contains:

```
Defaults:snap_daemon !requiretty
```

This produces:

```
unknown setting: 'requiretty'
```

The installed `sudo-rs` parser does not recognise this traditional sudoers setting.

The result is that Oracle Cloud Agent's configuration generates warnings whenever `sudo-rs` reads the configuration.

**Importantly, these warnings do not necessarily prevent ordinary sudo commands from running. However, affected Oracle Cloud Agent privilege rules may not work as intended.**

## 4. Investigation: Both sudo Implementations Are Installed

To inspect the available sudo implementations, I ran:

```
update-alternatives --display sudo
```

The relevant output was:

```
sudo - auto mode

link best version is /usr/lib/cargo/bin/sudo
link currently points to /usr/lib/cargo/bin/sudo

/usr/bin/sudo.ws - priority 40

/usr/lib/cargo/bin/sudo - priority 50
```

Ubuntu had both implementations installed:

|Implementation|Location|Priority|
|---|---|---|
|sudo-rs|/usr/lib/cargo/bin/sudo|50|
|Traditional sudo|/usr/bin/sudo.ws|40|

Since `sudo-rs` has a higher priority, Ubuntu automatically selected it.

I also tested the traditional `visudo` implementation:

```
sudo visudo.ws -c
```

It reported:

```
/etc/sudoers: parsed OK
/etc/sudoers.d/090-oca-vss-plugin-commands: parsed OK
/etc/sudoers.d/100-oracle-cloud-agent-users: parsed OK
/etc/sudoers.d/90-cloud-init-users: parsed OK
```

This confirmed that the traditional parser accepted the Oracle Cloud Agent configuration.

The initial warnings still appeared because the command itself was launched through the active `sudo-rs` implementation.

## 5. Solution: Switch Back to Traditional sudo

The simplest workaround is to switch Ubuntu's default sudo implementation back to `sudo.ws`.

Ubuntu officially documents this procedure for environments requiring compatibility with traditional sudo behaviour.

### Step 1: Select traditional sudo

Run:

```
sudo update-alternatives --set sudo /usr/bin/sudo.ws
```

This changes the default sudo implementation to the traditional C-based version.

It does not uninstall `sudo-rs` or modify the Oracle Cloud Agent configuration.

### Step 2: Verify the implementation

Check:

```
sudo --version
```

The output should now identify the traditional sudo implementation instead of `sudo-rs`.

You can also inspect the selected alternative:

```
update-alternatives --display sudo
```

The active link should point to:

```
/usr/bin/sudo.ws
```

### Step 3: Validate sudoers configuration

Run:

```
sudo visudo -c
```

Verify that the configuration files parse successfully.

An unused command alias warning may still appear, but it is different from a sudoers syntax failure.

### Step 4: Test package management

Finally, run:

```
sudo apt update
sudo apt upgrade
sudo apt autoremove --purge
```

The Oracle Cloud Agent wildcard and `requiretty` warnings should no longer appear if they were solely caused by `sudo-rs` incompatibility.

**Verification note:** The configuration compatibility was confirmed during troubleshooting, but the final command output after switching to `sudo.ws` was not captured. The resolution above is therefore documented as the recommended workaround rather than a separately verified post-fix result.

## 6. How to Switch Back to sudo-rs

If Oracle Cloud Agent becomes fully compatible with `sudo-rs` in a future update, the default can be restored using:

```
sudo update-alternatives --auto sudo
```

Alternatively, explicitly select `sudo-rs`:

```
sudo update-alternatives --set sudo /usr/lib/cargo/bin/sudo
```

Ubuntu recommends retaining `sudo-rs` by default where compatible, so reverting to it later is worth considering.

## 7. Should You Edit the Oracle Cloud Agent Configuration Instead?

Another potential solution is manually modifying:

```
/etc/sudoers.d/100-oracle-cloud-agent-users
```

However, I would avoid this approach unless there is a specific reason to retain `sudo-rs`.

The file contains privilege rules used by Oracle Cloud Agent components.

Changing these entries incorrectly could break monitoring, agent operations, or administrative functionality. The changes might also be overwritten by a future agent update.

Switching to `sudo.ws` is less intrusive and easily reversible.

Also, this issue is unrelated to the Oracle-specific kernel:

```
7.0.0-1013-oracle
```

There is no reason to switch kernels, reinstall Ubuntu, or rebuild the OCI virtual machine just to resolve these sudo warnings.

## 8. Conclusion

This issue demonstrates an important compatibility consideration when upgrading to Ubuntu 26.04 LTS.

The switch to Rust-based system utilities improves the direction of Ubuntu's system tooling, but some third-party software still relies on behaviours supported by traditional implementations.

In this particular OCI ARM64 environment:

- Ubuntu 26.04 selected `sudo-rs` by default.
    
- Oracle Cloud Agent installed sudoers rules using traditional syntax.
    
- The `sudo-rs` parser rejected wildcard arguments and the `requiretty` setting.
    
- Traditional `visudo.ws` accepted the configuration.
    
- Switching to `sudo.ws` provides a straightforward, reversible compatibility workaround.
    

The key command is:

```
sudo update-alternatives --set sudo /usr/bin/sudo.ws
```

For system administrators deploying Ubuntu 26.04 on OCI, it is worth checking sudoers compatibility before assuming that warnings from `apt` indicate problems with repositories, packages, or the operating system itself.

---

## References

1. [Ubuntu 26.04 LTS Release Notes](https://documentation.ubuntu.com/release-notes/26.04/summary-for-lts-users/)
    
2. [Ubuntu Server — User Management and sudo-rs](https://ubuntu.com/server/docs/security-users/)
    
3. [Ubuntu Server — System Utility Replacements](https://ubuntu.com/server/docs/reference/other-tools/sudo-rs/)
    
4. [sudo-rs — Official GitHub Repository](https://github.com/trifectatechfoundation/sudo-rs)
    
5. [Dokku GitHub Issue #101 — sudo-rs Wildcard Compatibility on Ubuntu 26.04](https://github.com/dokku/dokku-datastore/issues/101)