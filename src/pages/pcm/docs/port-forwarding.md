---
layout: ../../../layouts/DocLayout.astro
title: "Port forwarding"
description: "Set up local SSH tunnels and jump hosts for Android/iOS, plus Android VPN clients, SOCKS5 proxy, routing and DNS."
---

# Port forwarding

Mobile SSH dey support local SSH port forwarding for both Android and iOS. One local port for di device go dey listen on `127.0.0.1` and go dey forward traffic through di SSH connection go reach remote host and port.

Android also get **VPN** page for SSH VPN, local SOCKS5 proxy, WireGuard, Shadowsocks and OpenVPN. These profiles separate from di local forwards wey dey below.

## Syntax for saved tunnel

Port-forwarding rules dey comma-separated. Each entry dey use one of two forms:

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Short form:

```text
8080
```

Dis one go bind `127.0.0.1:8080` on di device and forward am go `localhost:8080` from di server side.

Full form:

```text
3000:localhost:3000
```

Dis one go bind `127.0.0.1:3000` on di device and forward am through SSH go `localhost:3000` on di remote side.

Multiple forwards:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Add tunnel to saved server

1. Open **Saved Servers**.
2. Add or edit one server profile.
3. Enter di forwarding rules for di **Port forwards** field.
4. Save di server.
5. Connect to di server.

Di app go apply di saved forwards after di SSH session don connect.

## Tunnels na di server profile own

Local forwards dey inside saved server profile and start when server connect. To change dem, edit profile and reconnect.

Tunnel wey you save go return every time you connect, including after reconnect for new network.

## IPv6 destination

You must bracket IPv6 destination so di colons no go confuse wit di port separator:

```text
8080:[2001:db8::1]:80
```

Bare IPv6 address wey no get bracket dem dey reject am as ambiguous instead of reading am wrong quietly. Di same bracket form dey work for server address field, wit optional port after am (`[fe80::1]:22`).

## Address binding

Mobile SSH dey bind local forwards to `127.0.0.1` on di device. E be so on purpose: e dey keep di tunnel local to di device and e dey avoid IPv6-only loopback wahala. Oda apps on di same device fit connect to di forwarded local port if di operating system allow dia network access.

## Common examples

To access web service wey dey run on di remote server:

```text
8080
```

Then open `http://127.0.0.1:8080` from any browser on di same device.

To access development server:

```text
3000:localhost:3000
```

To access internal database wey you fit reach from di SSH server:

```text
15432:db.internal:5432
```

## Connect through jump hosts

For both platforms, saved SSH server fit connect through ordered saved bastions. Edit di destination, add dem under **Connect through**, then arrange dem. Each hop use im own credentials; expanded route fit get up to eight hops.

Phone reach first bastion; every next address must dey reachable from di previous server. Local forwards, terminal and SFTP use di same verified SSH route. Forward destination dey reached from di last SSH server. Each bastion must allow onward TCP forwarding, and every identity get checked before login. These routes need SSH, dem no work with Eternal Terminal.

## VPN routing for Android

Open **VPN** from home, add or import profile with name, then tap **Start**. Approve Android VPN prompt. Icon become **Stop routing** while enabled; pencil edit, bin delete. VPN types wey you use plenty show first.

Android allow one device VPN at a time. Starting another profile replace di previous VPN. Local SSH SOCKS5 proxy fit continue through non-SSH VPN. Tailscale use separate app; Mobile SSH VPN replace im connection. Manage IKEv2/IPsec for Android VPN settings, no be inside Mobile SSH.

### SSH VPN and SOCKS5 proxy

- **SSH VPN:** select saved SSH server with credentials and jump hosts, then all or selected apps and websites. Server must allow TCP forwarding; VPN helper no dey needed. SSH carry TCP and remote DNS; other UDP wey go through SSH get blocked, so browser fit fall back from QUIC to TCP.
- **SOCKS5 proxy:** choose server for im separate editor and configure each app with local proxy and remote DNS. Default na `127.0.0.1:1080` with generated password. **Copy proxy URL with credentials** provide `socks5h://` for compatible clients. E fit use existing VPN, including Tailscale. Only one SSH VPN or SSH SOCKS5 profile run at a time.

Use domains like `example.org`, wey cover di name and subdomains. Identified domains wey no dey list use normal network. Direct IPs or addresses from encrypted DNS no fit match reliably, so dem use SSH. SSH VPN apply app and website selections together; you choose SOCKS5 participants by configuring each client.

Remote DNS default na `1.1.1.1:53`; use numeric resolver wey SSH server fit reach. While reconnect or authentication dey pending, SSH traffic stay blocked while known bypass destinations continue normally. Stop, profile switch, permission revocation or app termination end protection. These clients no promise Android always-on or lockdown protection.

### WireGuard, Shadowsocks and OpenVPN

- **WireGuard:** import or paste standard `.conf`. `AllowedIPs` choose routes and `DNS` choose resolvers. Check peer handshake and counters; active interface no prove say peer dey reachable.
- **Shadowsocks:** import `ss://` or enter server, port, password, cipher and DNS. Ciphers na AES-128-GCM, AES-256-GCM and ChaCha20-Poly1305. TCP/UDP use tunnel; server need UDP relay for UDP and DNS. Plugin links and AEAD-2022 no get support.
- **OpenVPN:** import self-contained `.ovpn` with certificates and keys inside. Username/password and encrypted private-key password dey supported. Server certificate verification compulsory. Profile/server control routes and DNS; full tunnel need VPN DNS. External files, scripts, plugins, TAP and interactive challenges no get support.

Di app carry these protocol engines. Shadowsocks and OpenVPN no get SSH VPN app-and-website selectors. VPN no fit give server internet access wey provider or administrator don restrict.

### Quick Settings tile

Start VPN profile once to select am for **Mobile SSH VPN** tile. Tile highlight while Mobile SSH VPN enabled, including while e dey connect or reconnect. Tap to stop, tap again to start remembered profile. E no start SOCKS5 or stop another app VPN.

For Android 13 and newer, first time you open VPN e request permission to add tile. If you decline, or Android older, add am through **Quick Settings → Edit**. Deleted profile or missing permission open VPN page for setup.

## Troubleshooting tunnels

- Make sure di SSH session don connect — di forwards dey come up after di session don come up.
- Check say di local port no dey already in use.
- Check say di remote host and port dey reachable from di SSH server.
- Use `localhost` wen di destination service dey on di SSH server itself.
- Use di server internal DNS name or IP wen you dey forward to anoda host wey dey behind di SSH server.
- For jump-host route, check each hop credentials, identity and TCP-forward permission.
- For VPN, check server/configuration, DNS, Android permission and other active VPNs. See di [troubleshooting guide](../troubleshooting/) for each protocol.
