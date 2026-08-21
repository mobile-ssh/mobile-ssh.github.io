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
- Bestätige, dass der Schlüsseltyp unterstützt wird: Ed25519, ECDSA (P-256/384/521) oder RSA auf Android; Ed25519 oder ECDSA auf iOS. DSA (`ssh-dss`) funktioniert auf keiner von beiden, und iOS unterstützt kein RSA — erzeuge stattdessen einen Ed25519-Schlüssel.

## Tastatureingabe verzögert sich oder ändert sich

Mobile SSH sendet Tastenanschläge direkt an die Shell, wobei Autokorrektur und Vorschläge deaktiviert sind, sodass die Tastatur den Text nicht umschreiben sollte, bevor er die entfernte Seite erreicht. Wenn deine Tastatur die Eingabe dennoch verändert, stelle sicher, dass kein systemweites Ersetzungs- oder Zwischenablage-Tool sie abfängt, und nutze die Zusatztastenreihe für Terminaltasten wie `ESC`, `TAB`, `CTRL`, Pfeile, `HOME`, `END`, `PGUP` und `PGDN`.

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
- Prüfe, ob **Sitzungen im Hintergrund weiterlaufen lassen** in den Einstellungen aktiv ist, wenn Shells das Wegwischen der App überstehen sollen.
- Wenn der Server die SSH-Sitzung getrennt hat, verbinde dich erneut vom Startbildschirm aus — **Continue** listet auf, was noch läuft, und **Tmux sessions** listet auf, was auf dem Server wartet.

Auf iOS hält das System Apps im Hintergrund an, daher kann eine reine SSH-Verbindung nicht unbegrenzt offen bleiben, sobald du zu einer anderen App wechselst oder den Bildschirm sperrst. Eine kurze Karenzzeit deckt schnelle App-Wechsel ab; für alles Längere aktiviere **Auto-attach tmux session** im Serverprofil (oder nutze den **Eternal Terminal**-Transport), damit du beim erneuten Verbinden wieder in derselben Shell landest, in der du aufgehört hast.

## Dateiübertragung kann Telefondateien nicht durchsuchen

Mobile SSH fordert auf Android keine Speicherberechtigung an. Stattdessen zeigt der lokale Bereich genau einen Ordner, den du mit der Ordnerauswahl des Systems freigibst — ist er leer, wähle mit **Pick folder** einen aus. Die Freigabe bleibt bestehen, das ist also ein einmaliger Schritt.

Wenn entfernte Dateien laden, lokale aber nicht, ist die SSH-Verbindung in Ordnung und du hast schlicht noch keinen Ordner freigegeben.

Auf iOS zeigt der lokale Bereich den Dokumentenbereich der App, und Dateien fügst du über die Dokument- und Fotoauswahl des Systems hinzu. Downloads von dort sind außerdem in der Dateien-App unter **Auf meinem iPhone** sichtbar.

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

Die beiden Plattformen zeichnen Unterschiedliches auf, wähle also die, die zu deinem Problem passt.

**Android — Terminal und Darstellung.** Aktiviere **Settings → Debugging → Show Debug and Logs buttons** und nutze dann die Schaltfläche **Debug**, die auf dem Startbildschirm erscheint. Sie zeichnet Terminalereignisse, SSH-Datengrößen, Toucheingaben, Größenänderungsverhalten und den Tunnel-Lebenszyklus auf. Vor dem Start einer Aufzeichnung warnt sie dich, dass dabei jede Taste erfasst wird, die du drückst, Passwörter eingeschlossen. Beim Stoppen schreibt sie ein Archiv in deinen Downloads-Ordner.

**iOS — Verbindungen und Reconnects.** Schalte **Settings → Diagnostics → Record debug log** ein. Es zeichnet jede gewählte Adresse und den Grund ihres Scheiterns auf, Wiederverbindungsversuche und deren Backoff, abgebrochene Verbindungen, „peer stopped answering keepalives“, Netzwechsel sowie tmux-Befehle mit ihren Fehlern. Die Einstellungen zeigen einen laufenden Zeilenzähler, damit du die Aufzeichnung bestätigen kannst, und **Export Debug Log** teilt sie als Textdatei. Das Log liegt im Arbeitsspeicher und umfasst nur die aktuelle App-Sitzung.

Prüfe jedes Debug-Log und jedes Archiv, bevor du es teilst. Sie sind für die Fehlerbehebung gedacht und können Servernamen, Adressen, Zeitangaben oder andere Umgebungsdetails offenlegen — und auf Android alles, was du getippt hast.
