---
layout: ../../../layouts/DocLayout.astro
title: "Port forwarding"
description: "Mobile SSH local port forwarding syntax and tunnel management on Android and iOS."
---

# Port forwarding

Mobile SSH dey support local SSH port forwarding for both Android and iOS. One local port for di device go dey listen on `127.0.0.1` and go dey forward traffic through di SSH connection go reach remote host and port.

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

## Manage active tunnels

While you dey connected, select di session and open di tunnel view from di terminal toolbar. From there you fit check di active local forwards, add new tunnel, or remove one local forward.

## Address binding

Mobile SSH dey bind local forwards to `127.0.0.1` on di device. E be so on purpose: e dey keep di tunnel local to di device and e dey avoid IPv6-only loopback wahala. Other apps on di same device fit connect to di forwarded local port if di operating system allow dia network access.

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

## Troubleshooting tunnels

- Make sure di SSH session don connect before you add runtime tunnels.
- Check say di local port no dey already in use.
- Check say di remote host and port dey reachable from di SSH server.
- Use `localhost` wen di destination service dey on di SSH server itself.
- Use di server internal DNS name or IP wen you dey forward to anoda host wey dey behind di SSH server.
