---
layout: ../../layouts/DocLayout.astro
title: Port forwarding
description: Mobile SSH local port forwarding syntax, IPv6 destinations, and how saved tunnels come up on Android and iOS.
---

# Port forwarding

Mobile SSH supports local SSH port forwarding on both Android and iOS. A local port on the device listens on `127.0.0.1` and forwards traffic through the SSH connection to a remote host and port.

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

Forwards are declared on the saved server and brought up when that server connects. There is no separate screen for adding or removing a tunnel mid-session on either platform: to change your forwards, edit the server profile and reconnect.

This is a deliberate trade — a tunnel that lives in the profile comes back every time you connect, including after a reconnect on a new network, without you rebuilding it by hand.

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

## Troubleshooting tunnels

- Make sure the SSH session is connected — forwards come up after the session does.
- Check that the local port is not already in use.
- Check that the remote host and port are reachable from the SSH server.
- Use `localhost` when the destination service is on the SSH server itself.
- Use the server's internal DNS name or IP when forwarding to another host behind the SSH server.
