---
layout: ../../../layouts/DocLayout.astro
title: "Fehlerbehebung"
description: "Fehlerbehebungsanleitung für Mobile SSH zu Verbindung, Authentifizierung, Tastatur, tmux, Dateiübertragung und Tunneln."
---

# Fehlerbehebung

Diese Seite behandelt häufige Probleme von Mobile SSH und die ersten Prüfungen, bevor du serverseitige SSH-Einstellungen änderst.

## Verbindung nicht möglich

Prüfe:

- Das Gerät hat Netzwerkzugriff.
- Der Hostname oder die IP-Adresse des Servers ist korrekt.
- Der SSH-Port ist korrekt, normalerweise `22`.
- Eine Firewall, ein VPN, das Mobilfunknetz oder das WLAN blockiert den Port nicht.
- Der SSH-Server läuft und akzeptiert Verbindungen aus dem Netzwerk, das du nutzt.

Wenn derselbe Host von einem anderen Gerät funktioniert, vergleiche genau Host, Port, Benutzername, Schlüssel und Netzwerkpfad.

## Authentifizierung fehlgeschlagen

Prüfe:

- Die Schreibweise des Benutzernamens.
- Das Passwort oder die Schlüssel-Passphrase.
- Ob der Server Passwort-Login, Schlüssel-Login oder beides erlaubt.
- Ob der private Schlüssel zu einem öffentlichen Schlüssel in der `authorized_keys` des Serverbenutzers passt.
- Ob die Schlüsseldatei vollständig importiert wurde, einschließlich der Kopf- und Fußzeilen.

Gib bei verschlüsselten privaten Schlüsseln die Passphrase im Passwort-/Passphrasenfeld ein.

## Import des privaten Schlüssels fehlgeschlagen

Der Import des privaten Schlüssels nutzt die Dateiauswahl des Systems. Wenn der Import fehlschlägt:

- Bestätige, dass die ausgewählte Datei ein privater Schlüssel ist und keine öffentliche `.pub`-Datei.
- Öffne die Datei in einem vertrauenswürdigen Texteditor und prüfe, dass sie den vollständigen Schlüsselblock enthält.
- Versuche, den Schlüssel manuell in das Feld für den privaten Schlüssel einzufügen.
- Bestätige, dass der Schlüsseltyp unterstützt wird: Ed25519, RSA, ECDSA oder DSA auf Android; Ed25519 oder ECDSA (P-256/384/521) auf iOS.

## Tastatureingabe verzögert sich oder ändert sich

Wenn deine Bildschirmtastatur den Text ändert, bevor er die Shell erreicht, deaktiviere die Tastaturvorschläge in den Einstellungen von Mobile SSH. Das ist nützlich für Vim, tmux, htop, less, Shells mit ungewöhnlichen Tastenfolgen und entfernte Passwortabfragen.

Nutze die Zusatztastenreihe für Terminaltasten wie `ESC`, `TAB`, `CTRL`, Pfeile, `HOME`, `END`, `PGUP` und `PGDN`.

## tmux-Scrollen ist nicht wie erwartet

Mobile SSH ändert das Scrollverhalten je nach Terminalzustand. In tmux oder anderen Programmen mit alternativem Bildschirm können Scroll-Gesten tmux-Kopiermodus-Befehle senden, anstatt den lokalen Verlauf zu scrollen. Wenn der tmux-Maus-Modus aktiviert ist, sendet die App Mausrad-Escape-Sequenzen.

Wenn das Scrollen sich falsch anfühlt:

- Versuche, den tmux-Maus-Modus auf dem entfernten Server zu aktivieren oder zu deaktivieren.
- Nutze `PGUP` und `PGDN` aus der Zusatztastenreihe.
- Doppeltippe auf den Bereich für den Vollbildmodus, bevor du dichte Ausgabe scrollst.
- Trenne tmux und hänge dich erneut an, wenn die entfernte Terminalgröße veraltet wirkt.

## Sitzung nach Bildschirmsperre abgebrochen

Auf Android nutzt Mobile SSH Keepalives, einen Vordergrunddienst, Wake Lock, Wi-Fi-Lock und Wiederverbindungsversuche, um Verbindungsabbrüche zu reduzieren. Die Akku-Richtlinien von Android können Hintergrundarbeit dennoch stoppen.

Prüfe:

- Deaktiviere die Akku-Optimierung für Mobile SSH, wenn dein Gerät Hintergrund-Apps aggressiv stoppt.
- Halte WLAN oder mobile Daten während langer Sitzungen stabil.
- Öffne Mobile SSH erneut und tippe nach dem Entsperren auf **Active Sessions**.
- Wenn der Server die SSH-Sitzung getrennt hat, verbinde dich erneut über die letzten Sitzungen.

Auf iOS hält das System Apps im Hintergrund an, daher kann eine reine SSH-Verbindung nicht unbegrenzt offen bleiben, sobald du zu einer anderen App wechselst oder den Bildschirm sperrst. Eine kurze Karenzzeit deckt schnelle App-Wechsel ab; für alles Längere aktiviere **Auto-attach tmux session** im Serverprofil (oder nutze den **Eternal Terminal**-Transport), damit du beim erneuten Verbinden wieder in derselben Shell landest, in der du aufgehört hast.

## Dateiübertragung kann Telefondateien nicht durchsuchen

Auf neueren Android-Versionen kann das Durchsuchen lokaler Dateien Speicherzugriff erfordern. Erteile den Speicherzugriff in den Android-Einstellungen für Mobile SSH und öffne den Dateiübertragungsbildschirm erneut.

Wenn entfernte Dateien laden, lokale aber nicht, ist die SSH-Verbindung wahrscheinlich in Ordnung und das Problem liegt beim lokalen Android-Speicherzugriff.

Auf iOS gibt es keine Speicherberechtigung: Der lokale Bereich zeigt den Dokumentenbereich der App, und Dateien fügst du über die Dokument- und Fotoauswahl des Systems hinzu.

## Hochladen oder Herunterladen fehlgeschlagen

Prüfe:

- Die SSH-Sitzung ist noch verbunden.
- Das entfernte Verzeichnis existiert.
- Der entfernte Benutzer hat die Berechtigung, den Pfad zu lesen oder zu schreiben.
- Das lokale Ziel ist beschreibbar.
- Auf dem Gerät ist genügend freier Speicher vorhanden.
- Das Netzwerk ist für große Übertragungen stabil.

## Portweiterleitung fehlgeschlagen

Prüfe:

- Der lokale Port liegt zwischen `1` und `65535`.
- Der lokale Port wird nicht bereits verwendet.
- Die Tunnelzeichenfolge ist `PORT` oder `LOCAL:REMOTEHOST:REMOTE`.
- Der entfernte Host und der entfernte Port sind vom SSH-Server aus erreichbar.
- Der SSH-Server erlaubt TCP-Weiterleitung.

## Debug-Protokolle

Der Startbildschirm enthält eine Schaltfläche **Debug**. Wenn aktiviert, zeichnet Mobile SSH Diagnoseinformationen zu Terminalereignissen, SSH-Datengrößen, Toucheingaben, Größenänderungsverhalten und Tunnel-Lebenszyklus auf. Stoppe die Aufzeichnung, um ein Debug-Archiv lokal zu speichern.

Prüfe Debug-Archive, bevor du sie teilst. Sie sind für die Fehlerbehebung gedacht und können Servernamen, Zeitangaben, Terminalverhalten oder andere Umgebungsdetails offenlegen.
