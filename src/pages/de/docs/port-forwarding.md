---
layout: ../../../layouts/DocLayout.astro
title: "Portweiterleitung"
description: "Syntax der lokalen Portweiterleitung von Mobile SSH und Tunnelverwaltung für Android."
---

# Portweiterleitung

Mobile SSH unterstützt lokale SSH-Portweiterleitung. Ein lokaler Port auf dem Android-Gerät lauscht auf `127.0.0.1` und leitet den Verkehr über die SSH-Verbindung an einen entfernten Host und Port weiter.

## Syntax des gespeicherten Tunnels

Portweiterleitungsregeln werden durch Kommas getrennt. Jeder Eintrag nutzt eine von zwei Formen:

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Kurzform:

```text
8080
```

Dies bindet `127.0.0.1:8080` auf dem Android-Gerät und leitet es aus Sicht des Servers an `localhost:8080` weiter.

Vollform:

```text
3000:localhost:3000
```

Dies bindet `127.0.0.1:3000` auf dem Android-Gerät und leitet es über SSH an `localhost:3000` auf der entfernten Seite weiter.

Mehrere Weiterleitungen:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Einen Tunnel zu einem gespeicherten Server hinzufügen

1. Öffne **Gespeicherte Server**.
2. Füge ein Serverprofil hinzu oder bearbeite es.
3. Gib die Weiterleitungsregeln unter **Portweiterleitungen** ein.
4. Speichere den Server.
5. Verbinde dich mit dem Server.

Die App wendet gespeicherte Weiterleitungen an, nachdem die SSH-Sitzung verbunden ist.

## Aktive Tunnel verwalten

Wähle im verbundenen Zustand die Sitzung und öffne die Tunnelansicht in der Terminal-Symbolleiste. Von dort kannst du aktive lokale Weiterleitungen prüfen, einen neuen Tunnel hinzufügen oder eine lokale Weiterleitung entfernen.

## Adressbindung

Mobile SSH bindet lokale Weiterleitungen an `127.0.0.1` auf dem Android-Gerät. Das ist beabsichtigt: Es hält den Tunnel lokal auf dem Gerät und vermeidet Überraschungen mit reinem IPv6-Loopback. Andere Apps auf demselben Android-Gerät können sich möglicherweise mit dem weitergeleiteten lokalen Port verbinden, wenn Android ihren Netzwerkzugriff erlaubt.

## Häufige Beispiele

Zugriff auf einen Webdienst, der auf dem entfernten Server läuft:

```text
8080
```

Öffne dann `http://127.0.0.1:8080` in einem Browser auf dem Android-Gerät.

Zugriff auf einen Entwicklungsserver:

```text
3000:localhost:3000
```

Zugriff auf eine interne Datenbank, die vom SSH-Server aus erreichbar ist:

```text
15432:db.internal:5432
```

## Tunnel-Fehlerbehebung

- Stelle sicher, dass die SSH-Sitzung verbunden ist, bevor du Tunnel zur Laufzeit hinzufügst.
- Prüfe, dass der lokale Port nicht bereits belegt ist.
- Prüfe, dass der entfernte Host und Port vom SSH-Server aus erreichbar sind.
- Nutze `localhost`, wenn der Zieldienst auf dem SSH-Server selbst läuft.
- Nutze den internen DNS-Namen oder die IP des Servers, wenn du an einen anderen Host hinter dem SSH-Server weiterleitest.
