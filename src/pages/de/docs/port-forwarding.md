---
layout: ../../../layouts/DocLayout.astro
title: "Portweiterleitung"
description: "SSH-Tunnel und Sprungserver unter Android/iOS sowie Android-VPN, SOCKS5-Proxy, Routing und DNS einrichten."
---

# Portweiterleitung

Mobile SSH unterstützt lokale SSH-Portweiterleitung auf Android und iOS. Ein lokaler Port auf dem Gerät lauscht auf `127.0.0.1` und leitet den Datenverkehr über die SSH-Verbindung an einen entfernten Host und Port weiter.

Android hat außerdem eine **VPN**-Seite für SSH VPN, lokalen SOCKS5-Proxy, WireGuard, Shadowsocks und OpenVPN. Diese Profile sind getrennt von den folgenden lokalen Weiterleitungen.

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

## Tunnel gehören zum Serverprofil

Lokale Weiterleitungen stehen im Serverprofil und starten mit der Verbindung. Ändere das Profil und verbinde erneut, um sie anzupassen.

Ein gespeicherter Tunnel kommt bei jeder Verbindung zurück, auch nach dem Wechsel in ein neues Netzwerk.

## IPv6-Ziele

Ein IPv6-Ziel muss in eckigen Klammern stehen, damit die Doppelpunkte nicht mit dem Port-Trennzeichen verwechselt werden:

```text
8080:[2001:db8::1]:80
```

Eine nackte IPv6-Adresse ohne Klammern wird als mehrdeutig zurückgewiesen, statt stillschweigend falsch gelesen zu werden. Dieselbe Klammerform funktioniert im Adressfeld eines Servers, mit optionalem Port dahinter (`[fe80::1]:22`).

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

## Verbindungen über Sprungserver

Auf beiden Plattformen kann ein SSH-Server über eine geordnete Liste gespeicherter Bastionen verbinden. Bearbeite das Ziel, füge sie unter **Verbinden über** hinzu und ordne sie. Jeder Sprung nutzt eigene Zugangsdaten; die aufgelöste Route erlaubt bis zu acht Sprünge.

Das Telefon erreicht die erste Bastion; jede folgende Adresse muss vom vorherigen Server erreichbar sein. Lokale Weiterleitungen, Terminal und SFTP folgen derselben geprüften SSH-Route. Das Weiterleitungsziel wird vom letzten SSH-Server erreicht. Bastionen müssen TCP-Weiterleitung erlauben, jede Identität wird vor Anmeldung geprüft. Diese Routen erfordern SSH und gelten nicht für Eternal Terminal.

## VPN-Routing unter Android

Öffne **VPN** auf der Startseite, erstelle oder importiere ein benanntes Profil und tippe **Starten**. Bestätige Androids VPN-Anfrage. Solange aktiv zeigt das Symbol **Routing stoppen**; der Stift bearbeitet, der Papierkorb löscht. Häufige Typen stehen zuerst.

Android erlaubt ein Geräte-VPN gleichzeitig. Ein anderes Profil ersetzt das vorherige VPN. Ein lokaler SSH-SOCKS5-Proxy kann durch ein Nicht-SSH-VPN weiterlaufen. Tailscale nutzt seine eigene App; Mobile SSH VPN ersetzt dessen Verbindung. IKEv2/IPsec wird in Androids VPN-Einstellungen verwaltet, nicht in Mobile SSH.

### SSH VPN und SOCKS5-Proxy

- **SSH VPN:** wähle einen gespeicherten SSH-Server mit Zugangsdaten und Sprungservern sowie alle oder ausgewählte Apps/Websites. Der Server benötigt TCP-Weiterleitung, keinen VPN-Helfer. SSH trägt TCP und entferntes DNS; anderes SSH zugewiesenes UDP wird blockiert, sodass Browser von QUIC auf TCP wechseln können.
- **SOCKS5-Proxy:** wähle im eigenen Editor einen Server und richte jede teilnehmende App mit lokalem Proxy und entferntem DNS ein. Standard: `127.0.0.1:1080` mit erzeugtem Passwort. **Proxy-URL mit Zugangsdaten kopieren** liefert `socks5h://` für passende Clients. Dies nutzt ein vorhandenes VPN, auch Tailscale. Nur ein SSH-VPN- oder SSH-SOCKS5-Profil läuft gleichzeitig.

Domänen wie `example.org` gelten samt Unterdomänen. Erkannte nicht gelistete Domains nutzen das normale Netzwerk. Direkte IPs oder durch verschlüsseltes DNS gelernte Adressen sind nicht zuverlässig zuordenbar und nutzen SSH. SSH VPN wendet App- und Website-Auswahl gemeinsam an; SOCKS5-Teilnehmer werden im jeweiligen Client konfiguriert.

Entferntes DNS nutzt standardmäßig `1.1.1.1:53`; gib einen vom SSH-Server erreichbaren numerischen Resolver an. Beim Wiederverbinden oder Warten auf Anmeldung bleibt SSH-Verkehr gesperrt, bekannte Umgehungsziele laufen normal. Stoppen, Profilwechsel, Berechtigungsentzug oder App-Ende beendet den Schutz. Diese Clients garantieren weder Always-on-VPN noch Android-Lockdown.

### WireGuard, Shadowsocks und OpenVPN

- **WireGuard:** importiere oder füge eine Standard-`.conf` ein. `AllowedIPs` steuert Routen, `DNS` Resolver. Prüfe Peer-Handshake und Zähler; ein aktives Interface beweist keine Erreichbarkeit.
- **Shadowsocks:** importiere `ss://` oder gib Server, Port, Passwort, Chiffre und DNS ein. Unterstützt: AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305. TCP/UDP gehen durch den Tunnel; der Server benötigt UDP-Relay für UDP und DNS. Plugin-Links und AEAD-2022 fehlen.
- **OpenVPN:** importiere eine eigenständige `.ovpn` mit eingebetteten Zertifikaten und Schlüsseln. Benutzer/Passwort und verschlüsselte Schlüssel mit Passwort sind unterstützt. Serverzertifikatsprüfung ist Pflicht. Profil/Server bestimmen Routen/DNS; ein Volltunnel benötigt VPN-DNS. Externe Dateien, Skripte, Plugins, TAP und interaktive Anfragen sind nicht unterstützt.

Die App enthält diese Protokoll-Engines. Shadowsocks und OpenVPN bieten nicht die App-/Website-Auswahl von SSH VPN. Ein VPN gewährt seinem Server keinen Internetzugang, den Anbieter oder Administrator gesperrt haben.

### Schnelleinstellungskachel

Starte ein VPN-Profil einmal, damit **Mobile SSH VPN** es merkt. Die Kachel leuchtet bei aktiviertem Mobile-SSH-VPN, auch beim Verbinden oder Wiederverbinden. Tippen stoppt, erneutes Tippen startet das gemerkte Profil. Sie startet keinen SOCKS5-Proxy und stoppt kein VPN einer anderen App.

Ab Android 13 bittet das erste Öffnen der VPN-Seite um das Hinzufügen der Kachel. Nach Ablehnung oder auf älteren Geräten nutze **Schnelleinstellungen → Bearbeiten**. Gelöschte Profile oder fehlende Rechte öffnen VPN zur Einrichtung.

## Tunnelprobleme beheben

- Stelle sicher, dass die SSH-Sitzung verbunden ist – die Weiterleitungen kommen erst nach der Sitzung hoch.
- Prüfe, ob der lokale Port nicht bereits belegt ist.
- Prüfe, ob der entfernte Host und Port vom SSH-Server aus erreichbar sind.
- Verwende `localhost`, wenn der Zieldienst auf dem SSH-Server selbst läuft.
- Verwende den internen DNS-Namen oder die IP des Servers, wenn du an einen anderen Host hinter dem SSH-Server weiterleitest.
- Bei Sprungservern Zugangsdaten, Identität und TCP-Freigabe jedes Sprungs prüfen.
- Für VPN Server/Konfiguration, DNS, Android-Freigabe und andere aktive VPNs prüfen. Protokollspezifisches steht in der [Fehlerbehebung](../troubleshooting/).
