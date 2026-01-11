---
title: setup a proxmox with wifi
description: configure wifi nic on proxmox
---
[Wi-fi on Proxmox Backup Server \| Ketan Vijayvargiya](https://ketanvijayvargiya.com/662-wi-fi-on-proxmox-backup-server/?utm_source=chatgpt.com)  
# enable wifi
list all NIC 
```sh
root@pbs:~# ip -br link
lo               UNKNOWN        00:00:00:00:00:00 <LOOPBACK,UP,LOWER_UP> 
nic0             UP             f4:8e:38:f2:fb:9d <BROADCAST,MULTICAST,UP,LOWER_UP> 
wlp3s0           DOWN           3c:f8:62:eb:71:4d <BROADCAST,MULTICAST> 

root@pbs:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute 
       valid_lft forever preferred_lft forever
2: nic0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether f4:8e:38:f2:fb:9d brd ff:ff:ff:ff:ff:ff
    altname enxf48e38f2fb9d
    inet 192.168.0.231/24 scope global nic0
       valid_lft forever preferred_lft forever
    inet6 fdcd:37d4:4216:424a:f68e:38ff:fef2:fb9d/64 scope global dynamic mngtmpaddr proto kernel_ra 
       valid_lft 1641sec preferred_lft 1641sec
    inet6 fe80::f68e:38ff:fef2:fb9d/64 scope link proto kernel_ll 
       valid_lft forever preferred_lft forever
3: wlp3s0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether 3c:f8:62:eb:71:4d brd ff:ff:ff:ff:ff:ff
    altname wlx3cf862eb714d
```

install software and config
```sh

root@pbs:~# apt install -y iw wpasupplicant rfkill
```

Check if Wi-Fi is blocked, then enable the interface  
```sh
root@pbs:~# rfkill list
0: hci0: Bluetooth
        Soft blocked: no
        Hard blocked: no
1: phy0: Wireless LAN
        Soft blocked: no
        Hard blocked: no

root@pbs:~# ip link set wlp3s0 up
root@pbs:~# ip -br link | grep wlp3s0
wlp3s0           DOWN           3c:f8:62:eb:71:4d <NO-CARRIER,BROADCAST,MULTICAST,UP> 
```


Scan and confirm SSID visibility   
```sh
root@pbs:~# iw dev
phy#0
        Interface wlp3s0
                ifindex 3
                wdev 0x1
                addr 3c:f8:62:eb:71:4d
                type managed
                multicast TXQ:
                        qsz-byt qsz-pkt flows   drops   marks   overlmt hashcol tx-bytes        tx-packets
                        0       0       0       0       0       0       0       0               0

root@pbs:~# iw dev wlp3s0 scan | grep -E "SSID:|signal:" | head -n 50
        signal: -89.00 dBm
        SSID: nuwmich
        signal: -79.00 dBm
        SSID: BevaNBN
        signal: -74.00 dBm
        SSID: Optus_FF2292
        signal: -20.00 dBm
        signal: -72.00 dBm
```

add wifi ssid and password to config   
```sh
root@pbs:~# wpa_passphrase "Optus_FF2292" > /etc/wpa_supplicant/wpa_supplicant.conf
# reading passphrase from stdin
boils69496ht
root@pbs:~# chmod 600 /etc/wpa_supplicant/wpa_supplicant.conf


```

change network setting `/etc/network/interfaces`
```sh
# /etc/network/interfaces
auto lo
iface lo inet loopback

# Wi-Fi = primary (boots with the static IP)
auto wlp3s0
iface wlp3s0 inet static
        address 192.168.0.231/24
        gateway 192.168.0.1
        wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf

# Wired = backup only (same IP, but NOT auto)
iface nic0 inet static
        address 192.168.0.231/24
        gateway 192.168.0.1

iface nic1 inet manual

source /etc/network/interfaces.d/*

```

apply the change (on physical machine not remote)  
```sh
cp /etc/network/interfaces /etc/network/interfaces-backup

ifdown nic0 2>/dev/null || true
ifup wlp3s0
```

validate the result  
```sh
root@pbs:~# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute 
       valid_lft forever preferred_lft forever
2: nic0: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
    link/ether f4:8e:38:f2:fb:9d brd ff:ff:ff:ff:ff:ff
    altname enxf48e38f2fb9d
3: wlp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 3c:f8:62:eb:71:4d brd ff:ff:ff:ff:ff:ff
    altname wlx3cf862eb714d
    inet 192.168.0.231/24 scope global wlp3s0
       valid_lft forever preferred_lft forever
    inet6 fdcd:37d4:4216:424a:3ef8:62ff:feeb:714d/64 scope global dynamic mngtmpaddr proto kernel_ra 
       valid_lft 1652sec preferred_lft 1652sec
    inet6 fe80::3ef8:62ff:feeb:714d/64 scope link proto kernel_ll 
       valid_lft forever preferred_lft forever
       
       
root@pbs:~# ip -br link
lo               UNKNOWN        00:00:00:00:00:00 <LOOPBACK,UP,LOWER_UP> 
nic0             DOWN           f4:8e:38:f2:fb:9d <BROADCAST,MULTICAST> 
wlp3s0           UP             3c:f8:62:eb:71:4d <BROADCAST,MULTICAST,UP,LOWER_UP> 

root@pbs:~# ping 1.1.1.1
PING 1.1.1.1 (1.1.1.1) 56(84) bytes of data.
64 bytes from 1.1.1.1: icmp_seq=1 ttl=53 time=4.33 ms
64 bytes from 1.1.1.1: icmp_seq=2 ttl=53 time=7.08 ms
```