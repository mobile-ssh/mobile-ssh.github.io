---
layout: ../../../layouts/DocLayout.astro
title: "Port forwarding"
description: "Mobile SSH local port forwarding syntax and tunnel management for Android."
---

# Port forwarding

Mobile SSH dey support local SSH port forwarding. One local port for di Android device dey listen on `127.0.0.1` and dey forward traffic through di SSH connection to remote host and port.

## Saved tunnel syntax

Port-forwarding rules na comma-separated. Each entry dey use one of two forms:

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Short form:

```text
8080
```

Dis one dey bind `127.0.0.1:8080` on di Android device and forward am to `localhost:8080` from di server side.

Full form:

```text
3000:localhost:3000
```

Dis one dey bind `127.0.0.1:3000` on di Android device and forward am through SSH to `localhost:3000` on di remote side.

Multiple forwards:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Add tunnel to saved server

1. Open **Saved Servers**.
2. Add or edit server profile.
3. Enter di forwarding rules for **Port forwards**.
4. Save di server.
5. Connect to di server.

Di app dey apply saved forwards after di SSH session connect.

## Manage active tunnels

While you connect, select di session and open di tunnel view from di terminal toolbar. From there you fit inspect active local forwards, add new tunnel, or remove local forward.

## Address binding

Mobile SSH dey bind local forwards to `127.0.0.1` on di Android device. Dis na intentional: e dey keep di tunnel local to di device and e dey avoid IPv6-only loopback surprises. Other apps on di same Android device fit connect to di forwarded local port if Android allow dia network access.

## Common examples

Access web service wey dey run on di remote server:

```text
8080
```

Then open `http://127.0.0.1:8080` from browser on di Android device.

Access development server:

```text
3000:localhost:3000
```

Access internal database wey you fit reach from di SSH server:

```text
15432:db.internal:5432
```

## Troubleshooting tunnels

- Make sure di SSH session connect before you add runtime tunnels.
- Check say di local port no dey already in use.
- Check say di remote host and port dey reachable from di SSH server.
- Use `localhost` wen di destination service dey on di SSH server itself.
- Use di server internal DNS name or IP wen you dey forward to anoda host behind di SSH server.
