---
layout: ../../../layouts/DocLayout.astro
title: Port forwarding
description: Mobile SSH local port forwarding syntax and tunnel management for Android.
---

# Port forwarding

Mobile SSH supports local SSH port forwarding. A local port on the Android device listens on `127.0.0.1` and forwards traffic through the SSH connection to a remote host and port.

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

This binds `127.0.0.1:8080` on the Android device and forwards it to `localhost:8080` from the server's point of view.

Full form:

```text
3000:localhost:3000
```

This binds `127.0.0.1:3000` on the Android device and forwards it through SSH to `localhost:3000` on the remote side.

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

## Manage active tunnels

While connected, select the session and open the tunnel view from the terminal toolbar. From there you can inspect active local forwards, add a new tunnel, or remove a local forward.

## Address binding

Mobile SSH binds local forwards to `127.0.0.1` on the Android device. This is intentional: it keeps the tunnel local to the device and avoids IPv6-only loopback surprises. Other apps on the same Android device may be able to connect to the forwarded local port if Android permits their network access.

## Common examples

Access a web service running on the remote server:

```text
8080
```

Then open `http://127.0.0.1:8080` from a browser on the Android device.

Access a development server:

```text
3000:localhost:3000
```

Access an internal database reachable from the SSH server:

```text
15432:db.internal:5432
```

## Troubleshooting tunnels

- Make sure the SSH session is connected before adding runtime tunnels.
- Check that the local port is not already in use.
- Check that the remote host and port are reachable from the SSH server.
- Use `localhost` when the destination service is on the SSH server itself.
- Use the server's internal DNS name or IP when forwarding to another host behind the SSH server.
