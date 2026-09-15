---
layout: ../../layouts/DocLayout.astro
title: Port forwarding
description: Set up local SSH tunnels and jump hosts on Android and iOS, plus Android VPN clients, SOCKS5 proxy, routing and DNS.
---

# Port forwarding

Mobile SSH supports local SSH port forwarding on both Android and iOS. A local port on the device listens on `127.0.0.1` and forwards traffic through the SSH connection to a remote host and port.

Android also has a **VPN** page for SSH VPN, a local SOCKS5 proxy, WireGuard, Shadowsocks and OpenVPN. These routing profiles are separate from the saved local forwards described below.

## Saved tunnel syntax

Port-forwarding rules are comma-separated. Each entry uses one of two forms:

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Short form:

```text
8080
```

This binds `127.0.0.1:8080` on the device and forwards it to `localhost:8080` from the server's point of view.

Full form:

```text
3000:localhost:3000
```

This binds `127.0.0.1:3000` on the device and forwards it through SSH to `localhost:3000` on the remote side.

Multiple forwards:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Add a tunnel to a saved server

1. Open **Saved Servers**.
2. Add or edit a server profile.
3. Enter the forwarding rules in **Port forwards**.
4. Save the server.
5. Connect to the server.

The app applies saved forwards after the SSH session connects.

## Tunnels belong to the server profile

Local forwards are declared on the saved server and brought up when that server connects. To change these forwards, edit the server profile and reconnect.

A tunnel saved in the profile comes back every time you connect, including after a reconnect on a new network.

## IPv6 destinations

An IPv6 destination must be bracketed so the colons cannot be confused with the port separator:

```text
8080:[2001:db8::1]:80
```

A bare, unbracketed IPv6 address is rejected as ambiguous rather than silently misread. The same bracket form works in a server's address field, with an optional port after it (`[fe80::1]:22`).

## Address binding

Mobile SSH binds local forwards to `127.0.0.1` on the device. This is intentional: it keeps the tunnel local to the device and avoids IPv6-only loopback surprises. Other apps on the same device may be able to connect to the forwarded local port if the operating system permits their network access.

## Common examples

Access a web service running on the remote server:

```text
8080
```

Then open `http://127.0.0.1:8080` from a browser on the same device.

Access a development server:

```text
3000:localhost:3000
```

Access an internal database reachable from the SSH server:

```text
15432:db.internal:5432
```

## Connections through jump hosts

On both platforms, a saved SSH server can connect through an ordered list of saved jump hosts. Edit the destination server, add its bastions under **Connect through**, and arrange them in connection order. Each hop uses its own saved credentials; expanded routes can contain up to eight hops.

The phone reaches the first bastion, and each following address must be reachable from the preceding server. Local forwards follow the same verified SSH route as the terminal and SFTP. The final destination in a forward is reached from the last SSH server. Each bastion must permit onward TCP forwarding, and every server's identity is checked before authentication. Jump-host routes require the SSH transport; they do not apply to Eternal Terminal.

## VPN routing on Android

Open **VPN** from the home screen, add or import a named profile, then tap its **Start** icon. Approve Android's VPN prompt when requested. The icon becomes **Stop routing** while the profile is enabled; use the pencil to edit or the trash can to delete it. Frequently used VPN types appear first.

Android provides one device VPN connection at a time. Starting another profile switches from the previous VPN. A local SSH SOCKS5 proxy can keep running through a non-SSH VPN. Tailscale uses its separate app; starting a Mobile SSH VPN replaces its VPN connection. IKEv2/IPsec is managed in Android's VPN settings, not in Mobile SSH.

### SSH VPN and SOCKS5 proxy

- **SSH VPN:** select a saved SSH server, including its credentials and jump hosts. Choose all or selected apps and websites. The server must allow TCP forwarding and needs no VPN helper. SSH carries TCP and remote DNS; other UDP assigned to SSH is blocked, so a browser may fall back from QUIC to TCP.
- **SOCKS5 proxy:** select a saved SSH server in its separate profile editor, then configure each participating app to use the local proxy with remote DNS. The default is `127.0.0.1:1080` with a generated password. **Copy proxy URL with credentials** provides a `socks5h://` URL for compatible clients. This mode can reach SSH through an existing VPN, including Tailscale. Only one SSH VPN or SSH SOCKS5 profile runs at a time.

Website entries use domain names such as `example.org`, covering that name and its subdomains. Identified unlisted domains use the normal network. Direct IP connections or addresses learned through encrypted DNS cannot reliably match the list and use SSH. In SSH VPN, app and website selections both apply; SOCKS5 clients are selected by configuring the client itself.

Remote DNS defaults to `1.1.1.1:53`; use a numeric resolver address reachable from the SSH server. While an active SSH VPN reconnects or waits for authentication, SSH-assigned traffic stays blocked and known bypass destinations continue normally. Stopping, switching profiles, VPN permission revocation or app termination ends that protection. These clients do not promise Android always-on or lockdown protection.

### WireGuard, Shadowsocks and OpenVPN

- **WireGuard:** import or paste a standard `.conf` file. `AllowedIPs` controls routes and `DNS` selects resolvers. Review the peer handshake and traffic counters; an enabled interface alone does not prove the peer is reachable.
- **Shadowsocks:** import an `ss://` link or enter a server, port, password, supported cipher and DNS address. Supported ciphers are AES-128-GCM, AES-256-GCM and ChaCha20-Poly1305. TCP and UDP use the tunnel; the server needs UDP relay for UDP and DNS. Plugin-required links and AEAD-2022 ciphers are unsupported.
- **OpenVPN:** import a self-contained `.ovpn` file with inline certificates and keys. Username/password and encrypted private-key credentials are supported. Server certificate verification is required. Routes and DNS follow the profile and server; a full tunnel needs a VPN DNS resolver. External files, scripts, plugins, TAP and interactive authentication challenges are unsupported.

The app includes these protocol engines. Shadowsocks and OpenVPN do not offer SSH VPN's app-and-website selection controls. A VPN also cannot grant its server internet access that the server's provider or administrator has restricted.

### Quick Settings tile

Start a VPN profile once to select it for the **Mobile SSH VPN** tile. The tile highlights while a Mobile SSH VPN is enabled, including while connecting or reconnecting. Tap to stop; tap again to start the remembered profile. It does not start a SOCKS5 proxy or stop another app's VPN.

On Android 13 or later, first opening the VPN page requests permission to add the tile. If you decline, or on older Android versions, add it through **Quick Settings → Edit**. A deleted profile or missing permission opens the VPN page for setup.

## Troubleshooting tunnels

- Make sure the SSH session is connected — forwards come up after the session does.
- Check that the local port is not already in use.
- Check that the remote host and port are reachable from the SSH server.
- Use `localhost` when the destination service is on the SSH server itself.
- Use the server's internal DNS name or IP when forwarding to another host behind the SSH server.
- For a jump-host route, check each hop's credentials, identity and permission to forward TCP.
- For VPN profiles, check the selected server or configuration, DNS, Android VPN permission and any other active VPN. See the [Troubleshooting guide](../troubleshooting/) for protocol-specific checks.
