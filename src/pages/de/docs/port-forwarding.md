---
layout: ../../../layouts/DocLayout.astro
title: "Portweiterleitung"
description: "Syntax der lokalen Portweiterleitung von Mobile SSH und Tunnelverwaltung auf Android und iOS."
---

# Portweiterleitung

Mobile SSH unterstützt lokale SSH-Portweiterleitung auf Android und iOS. Ein lokaler Port auf dem Gerät lauscht auf `127.0.0.1` und leitet den Datenverkehr über die SSH-Verbindung an einen entfernten Host und Port weiter.

## Syntax gespeicherter Tunnel

Portweiterleitungsregeln werden durch Kommas getrennt. Jeder Eintrag verwendet eine von zwei Formen:

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Kurzform:

```text
8080
```

Diese bindet `127.0.0.1:8080` auf dem Gerät und leitet es aus Sicht des Servers an `localhost:8080` weiter.

Vollform:

```text
3000:localhost:3000
```

Diese bindet `127.0.0.1:3000` auf dem Gerät und leitet es über SSH an `localhost:3000` auf der entfernten Seite weiter.

Mehrere Weiterleitungen:

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Einen Tunnel zu einem gespeicherten Server hinzufügen

1. Öffne **Saved Servers**.
2. Füge ein Serverprofil hinzu oder bearbeite es.
3. Gib die Weiterleitungsregeln im Feld **Port forwards** ein.
4. Speichere den Server.
5. Verbinde dich mit dem Server.

Die App wendet gespeicherte Weiterleitungen an, nachdem die SSH-Sitzung verbunden ist.

## Aktive Tunnel verwalten

Wähle im verbundenen Zustand die Sitzung aus und öffne die Tunnelansicht über die Terminal-Symbolleiste. Von dort kannst du aktive lokale Weiterleitungen einsehen, einen neuen Tunnel hinzufügen oder eine lokale Weiterleitung entfernen.

## Adressbindung

Mobile SSH bindet lokale Weiterleitungen an `127.0.0.1` auf dem Gerät. Das ist beabsichtigt: Es hält den Tunnel lokal auf dem Gerät und vermeidet unerwartetes Verhalten mit reinem IPv6-Loopback. Andere Apps auf demselben Gerät können sich möglicherweise mit dem weitergeleiteten lokalen Port verbinden, sofern das Betriebssystem ihnen den Netzwerkzugriff erlaubt.

## Häufige Beispiele

Zugriff auf einen Webdienst, der auf dem entfernten Server läuft:

```text
8080
```

Öffne danach `http://127.0.0.1:8080` in einem Browser auf demselben Gerät.

Zugriff auf einen Entwicklungsserver:

```text
3000:localhost:3000
```

Zugriff auf eine interne Datenbank, die vom SSH-Server aus erreichbar ist:

```text
15432:db.internal:5432
```

## Tunnelprobleme beheben

- Stelle sicher, dass die SSH-Sitzung verbunden ist, bevor du Tunnel zur Laufzeit hinzufügst.
- Prüfe, ob der lokale Port nicht bereits belegt ist.
- Prüfe, ob der entfernte Host und Port vom SSH-Server aus erreichbar sind.
- Verwende `localhost`, wenn der Zieldienst auf dem SSH-Server selbst läuft.
- Verwende den internen DNS-Namen oder die IP des Servers, wenn du an einen anderen Host hinter dem SSH-Server weiterleitest.
