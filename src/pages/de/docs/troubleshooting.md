---
layout: ../../../layouts/DocLayout.astro
title: "Fehlerbehebung"
description: "Fehler bei Mobile-SSH-Verbindungen, Identitäten, Sicherheitsschlüsseln, Terminal, Dateien, VPNs, Backups und entfernten Desktops beheben."
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

## Die Serveridentität erfordert Aufmerksamkeit

Beide Plattformen prüfen SSH-Identitäten vor Zugangsdaten. Unter iOS erfordert ein unbekannter Schlüssel Fingerabdruckbestätigung und **Vertrauen und neu verbinden**. Unter Android ist **Einstellungen → Allgemein → Sicherheit → Neue SSH-Identitäten automatisch akzeptieren** standardmäßig an: erster Rohschlüssel gespeichert, spätere müssen passen. Schalte dies aus, um neue Fingerabdrücke vor Verbindung zu prüfen.

Vergleiche neue oder geänderte SHA-256-Fingerabdrücke mit dem Administrator über einen vertrauenswürdigen Kanal. Ein Wechsel kann einen ersetzten oder unerwarteten Server bedeuten; entferne die alte Identität erst nach Klärung. Prüfe Identitäten in Einstellungen. Alternative Adressen und Sprungserver umgehen die Prüfung nicht.

Android unterstützt auch Host-Zertifizierungsstellen mit festgelegtem Geltungsbereich und Widerrufe. Unbekannte CAs, abgelaufene oder ungültige Zertifikate und widerrufene Schlüssel bleiben trotz automatischer Annahme bei erster Nutzung blockiert. Unter iOS akzeptiert **Einstellungen → Serveridentitäten → Widerrufene Schlüssel importieren** OpenSSH-Einträge mit `@revoked` für Ed25519/ECDSA mit festgelegtem Geltungsbereich. Eingefügter Text mit nicht unterstützten Einträgen wird vollständig abgelehnt; CA-Einträge, Zertifikate, RSA-Schlüssel und gehashte Hostnamen werden nicht unterstützt. Widerrufe setzen früheres Vertrauen bei neuen Verbindungen und Neuverbindungen außer Kraft, beenden aber keine bestehenden Verbindungen. Identitäten und Widerrufe sind von Backups ausgeschlossen. Prüfe unter iOS einen unbekannten Server zuerst in der Hauptapp, bevor du über die Teilen-Erweiterung hochlädst.

## Verbindung über einen Sprungserver scheitert

Prüfe Adresse und Zugangsdaten jeder Bastion sowie Erreichbarkeit der ersten vom Telefon. Folgende Hosts müssen vom vorherigen erreichbar sein. Bastionen brauchen TCP-Freigabe samt `permitopen`-Beschränkungen. Die SSH-Route darf keine Schleife und höchstens acht aufgelöste Sprünge haben.

Eine gelöschte oder nicht auflösbare Bastion führt nicht zu Direktverbindung. Korrigiere die Route und verbinde erneut. Android-Status und Anmeldeprotokoll unterscheiden den fehlgeschlagenen Sprung vom Zielserver.

## Authentifizierung fehlgeschlagen

Prüfe:

- Die Schreibweise des Benutzernamens.
- Das Passwort oder die Schlüssel-Passphrase.
- Ob der Server Passwort-Login, Schlüssel-Login oder beides erlaubt.
- Ob der private Schlüssel zu einem öffentlichen Schlüssel in der `authorized_keys` des Serverbenutzers passt.
- Ob die Schlüsseldatei vollständig importiert wurde, einschließlich der Kopf- und Fußzeilen.

Gib bei verschlüsselten privaten Schlüsseln die Passphrase im Passwort-/Passphrasenfeld ein.

Unter Android benötigt entferntes `ssh`/`git` **SSH-Agent weiterleiten** im Profil und serverseitige Freigabe. Nur nutzbare gespeicherte Schlüssel werden angeboten. Eine Zulassen/Ablehnen- oder Hardwarekey-Abfrage kann Terminal, Dateien und Tunnel bis zu 30 Sekunden pausieren; antworte in App oder Benachrichtigung.

## Import des privaten Schlüssels fehlgeschlagen

Der Import des privaten Schlüssels nutzt die Dateiauswahl des Systems. Wenn der Import fehlschlägt:

- Prüfe, ob die ausgewählte Datei einen privaten Schlüssel enthält und keine öffentliche `.pub`-Datei ist.
- Öffne sie in einem vertrauenswürdigen Texteditor und prüfe, ob der vollständige Schlüsselblock enthalten ist.
- Unter Android dürfen importierte Schlüsseldateien höchstens 64 KB groß sein; wähle den Schlüssel selbst aus, kein Archiv oder eine andere Datei.
- Versuche, den Schlüssel manuell in das Feld für private Schlüssel einzufügen.
- Prüfe, ob der Schlüsseltyp unterstützt wird: Ed25519, ECDSA (P-256/384/521) oder RSA unter Android; Ed25519 oder ECDSA unter iOS. DSA (`ssh-dss`) funktioniert auf keiner Plattform, und iOS unterstützt kein RSA — erstelle stattdessen einen Ed25519-Schlüssel.

## Sicherheitsschlüssel antwortet unter Android nicht

Android unterstützt CTAP2/FIDO2 `ed25519-sk` und `ecdsa-sk` über USB/NFC. Nutze den physischen Schlüssel, der die importierte Datei erzeugt hat. USB braucht Hostmodus und Erlaubnis; NFC muss aktiv sein und der Schlüssel bis zum Abschluss am Telefon bleiben. Gib bei Bedarf die PIN ein und berühre den Schlüssel.

Der Server benötigt OpenSSH ab 8.2 mit erlaubtem `sk-*`-Algorithmus. Reine U2F-Schlüssel und Erkennung residenter Zugangsdaten fehlen. Die Anmeldefrist kann beim Suchen verstreichen: halte den Schlüssel bereit. Öffne Hintergrundanfragen über Benachrichtigung oder App. iOS unterstützt keine Hardware-Sicherheitsschlüssel zur Anmeldung.

## Tastatureingabe verzögert sich oder ändert sich

Android sendet Eingaben direkt ohne Autokorrektur oder Vorhersage. Unter iOS ist **Diktat und Vorschläge** für Sprache und Zeilenkorrekturen standardmäßig an. Ändert es unerwartet Shell-Eingaben, schalte es aus, prüfe **Tastaturvorschläge** und öffne ein neues Pane.

Nutze Zusatztasten für `ESC`, `TAB`, `CTRL`, Pfeile, `HOME`, `END`, `PGUP`, `PGDN`. Ein hängendes Netz verzögert Eingaben. Android zeigt **keine Antwort** oder **nicht gesendet**; beim Wiederverbinden getippte Zeichen werden verworfen statt in einer neuen Shell wiederholt. Warte, prüfe den Prompt und wiederhole nur Nötiges.

## Chat ist unter Android schreibgeschützt

Prüfe, ob Python 3.8 oder neuer auf dem Server vorhanden ist, wähle die gewünschte Claude Code- oder Codex-Unterhaltung und installiere die in Chat angebotenen Hooks. Erteile nötige Vertrauensfreigaben beim Anbieter oder lade die native Sitzung neu beziehungsweise setze sie fort, um die Hooks zu laden. Ein bereits laufender Agent hat neu installierte Hooks möglicherweise noch nicht geladen; Mobile SSH startet ihn nicht für dich neu.

## tmux-Scrollen ist nicht wie erwartet

Mobile SSH ändert das Scrollverhalten je nach Terminalzustand. In tmux oder anderen Programmen mit alternativem Bildschirm können Scroll-Gesten tmux-Kopiermodus-Befehle senden, anstatt den lokalen Verlauf zu scrollen. Wenn der tmux-Maus-Modus aktiviert ist, sendet die App Mausrad-Escape-Sequenzen.

Wenn das Scrollen sich falsch anfühlt:

- Versuche, den tmux-Maus-Modus auf dem entfernten Server zu aktivieren oder zu deaktivieren.
- Nutze `PGUP` und `PGDN` aus der Zusatztastenreihe.
- Doppeltippe auf den Bereich für den Vollbildmodus, bevor du dichte Ausgabe scrollst.
- Trenne tmux und hänge dich erneut an, wenn die entfernte Terminalgröße veraltet wirkt.

Unter Android verlässt Scrollen bis unten den appgesteuerten tmux-Kopiermodus, wenn dessen Standardanzeige sichtbar ist. Eigene/geteilte Layouts ohne Anzeige benötigen eventuell manuelles Verlassen. Prüfe beim Sitzungswechsel Server, tmux-Socket und Sitzungsname im Manager.

## Sitzung nach Bildschirmsperre abgebrochen

Auf Android nutzt Mobile SSH Keepalives, einen Vordergrunddienst, Wake Lock, Wi-Fi-Lock und Wiederverbindungsversuche, um Verbindungsabbrüche zu reduzieren. Die Akku-Richtlinien von Android können Hintergrundarbeit dennoch stoppen.

Prüfe:

- Deaktiviere die Akku-Optimierung für Mobile SSH, wenn dein Gerät Hintergrund-Apps aggressiv stoppt.
- Halte WLAN oder mobile Daten während langer Sitzungen stabil.
- Öffne Mobile SSH erneut und tippe nach dem Entsperren auf **Active Sessions**.
- Prüfe, ob **Sitzungen im Hintergrund weiterlaufen lassen** in den Einstellungen aktiv ist, wenn Shells das Wegwischen der App überstehen sollen.
- Wenn der Server die SSH-Sitzung getrennt hat, verbinde dich erneut vom Startbildschirm aus — **Continue** listet auf, was noch läuft, und **Tmux sessions** listet auf, was auf dem Server wartet.

iOS unterbricht Hintergrundapps; SSH bleibt nach Appwechsel oder Sperren nicht unbegrenzt offen. Ein kurzes Zeitfenster deckt schnelle Wechsel. Wähle tmux, Herdr oder Zellij unter **Beim Verbinden anhängen** oder nutze **Eternal Terminal**, um Arbeit wiederaufzunehmen. Der Multiplexer muss am Server laufen; Eternal Terminal erlaubt keine Sprungserverroute.

## Dateiübertragung kann Telefondateien nicht durchsuchen

Mobile SSH fordert auf Android keine Speicherberechtigung an. Stattdessen zeigt der lokale Bereich genau einen Ordner, den du mit der Ordnerauswahl des Systems freigibst — ist er leer, wähle mit **Pick folder** einen aus. Die Freigabe bleibt bestehen, das ist also ein einmaliger Schritt.

Wenn entfernte Dateien laden, lokale aber nicht, ist die SSH-Verbindung in Ordnung und du hast schlicht noch keinen Ordner freigegeben.

Unter iOS beginnt das lokale Pane im App-Documents-Ordner. **Mein Telefon → Lokalen Ordner wählen** merkt einen anderen Dateien-Ordner. Fehlen Anbieter oder Rechte, wähle erneut oder wechsle zum App-Ordner. Seine Downloads stehen unter **Auf meinem iPhone**, externe bleiben beim Anbieter. Ordnerrechte werden nicht gesichert.

## Hochladen oder Herunterladen fehlgeschlagen

Prüfe:

- Die SSH-Sitzung ist noch verbunden.
- Das entfernte Verzeichnis existiert.
- Der entfernte Benutzer hat die Berechtigung, den Pfad zu lesen oder zu schreiben.
- Das lokale Ziel ist beschreibbar.
- Auf dem Gerät ist genügend freier Speicher vorhanden.
- Das Netzwerk ist für große Übertragungen stabil.

Unter Android nutzt du nach Behebung der Ursache **Fortsetzen**, **Erneut versuchen**, **Neu starten** oder **Alle erneut versuchen** in der Übertragungswarteschlange. Fortsetzen prüft, ob die Teildatei noch übereinstimmt; verwende Neu starten, wenn eine sichere Fortsetzung nicht möglich ist. Die Upload-Anzeige des Terminals zeigt Warte- oder Stillstandsstatus und bietet **Stopp**.

## Portweiterleitung fehlgeschlagen

Prüfe:

- Der lokale Port liegt zwischen `1` und `65535`.
- Der lokale Port wird nicht bereits verwendet.
- Die Tunnelzeichenfolge ist `PORT` oder `LOCAL:REMOTEHOST:REMOTE`.
- Der entfernte Host und der entfernte Port sind vom SSH-Server aus erreichbar.
- Der SSH-Server erlaubt TCP-Weiterleitung.

## VPN oder Proxy transportiert unter Android keine Daten

- Starte das Profil unter **VPN** und erteile Androids Erlaubnis. Ein Geräte-VPN ersetzt das vorherige; für ein parallel nötiges VPN nutze lokalen SOCKS5.
- Für SSH VPN Server, Bastionen, Identität, TCP-Rechte und App-/Website-Auswahl prüfen. SSH trägt TCP/DNS, kein allgemeines UDP.
- Für SOCKS5 im Client Loopbackadresse, Port, Passwort und entferntes DNS setzen. Ein laufender Proxy leitet nicht alle Apps um.
- Für WireGuard Handshake, Schlüssel, `AllowedIPs` und DNS prüfen. Für Shadowsocks Chiffre/Passwort und UDP-Relay für DNS prüfen.
- Für OpenVPN ein unterstütztes eigenständiges Profil verwenden, CA/Identität und Zugangsdaten prüfen, VPN-DNS für Volltunnel angeben. Anmelde-/Zertifikatsfehler korrigieren und Profil neu starten.

SSH VPN, Shadowsocks und OpenVPN können erfassten Verkehr beim Wiederverbinden blockieren, statt direkt zu senden. Stoppen beendet den Schutz. VPN umgeht keine Internetbeschränkung des Serveranbieters oder Administrators.

## Backup hat nicht alles wiederhergestellt

Prüfe Vorschau und **Zusammenführen** oder **Ersetzen**. In alten/teilweisen Backups fehlende Bereiche bleiben unverändert. Vollbackups enthalten unterstützte Einstellungen, unter Android auch VPN/Proxys. Nicht alle Plattformdaten sind nach iOS übertragbar; alte Versionen können neue Vollformate ablehnen.

Host-Identitäten, Systemrechte und Ordnerzugriffe bleiben lokal. Prüfe Hosts und gib Ordner/VPN auf dem neuen Gerät frei. Hardware-Zugangsdaten benötigen weiterhin den physischen Schlüssel. Import startet kein VPN; prüfe die Profile vorher.

Android schließt außerdem Prompt-Vorlagen und Editorentwürfe, heruntergeladene Modelle, Sprachhost-Einstellungen, Cloud-Zugangsdaten von VPN Setup sowie Chat- und Prompt-Ausführungscaches aus. Richte sie auf dem Zielgerät erneut ein. Serverzeitpläne sind davon getrennt: Das Deaktivieren der Prompt-Vorlagen auf dem Smartphone stoppt keine bereits auf dem Server geplanten Ausführungen.

## Entfernter Desktop nicht verfügbar oder nicht skalierbar

Öffne den Viewer aus einer verbundenen SSH-Sitzung und prüfe lokale TCP-Weiterleitung. Unter Linux installiere die im Fehler genannten Desktop-/VNC-Pakete. Android spiegelt keine Wayland-Konsole; nutze einen unterstützten virtuellen Desktop.

Aktiviere unter macOS die Bildschirmfreigabe in den Mac-Einstellungen. Android unterstützt die Anmeldung mit einem Mac-Konto; iOS erfordert den klassischen VNC-Passwortzugriff in der Bildschirmfreigabe und verwendet deren Passwort anstelle eines Mac-Kontopassworts. Die Ansicht zeigt den vorhandenen Mac-Bildschirm. Seine Auflösung muss gegebenenfalls am Mac geändert werden. Ein virtueller Desktop lässt sich nur mit Serverunterstützung im laufenden Betrieb skalieren; der Neustart eines von der App erstellten Desktops erfordert Bestätigung und schließt seine Programme. Beim Verlassen der Ansicht läuft der entfernte Desktop weiter.

## Debug-Protokolle

Die beiden Plattformen zeichnen Unterschiedliches auf, wähle also die, die zu deinem Problem passt.

**Android — Terminal, Sprache und Darstellung.** Aktiviere **Einstellungen → Debugging → Debug- und Protokoll-Schaltflächen anzeigen** und nutze dann die Schaltfläche **Debug** auf dem Startbildschirm. Sie zeichnet Terminalereignisse, SSH-Datenmengen, Berührungen, Größenänderungen und den Tunnel-Lebenszyklus auf. Die Einwilligungsabfrage warnt, dass eingegebene Tasten einschließlich Passwörtern sowie Bildschirminhalte aufgezeichnet werden. Sprachaufzeichnungen enthalten transkribierte Eingaben und Antworttext; Audiobeispiele werden nur eingeschlossen, wenn du diese Option separat in den Einstellungen aktivierst.

Wähle beim Start der ersten Aufzeichnung einen beschreibbaren Archivordner. Mobile SSH merkt ihn sich; ändere ihn unter **Einstellungen → Debugging → Debug-Archivordner**. Schlägt der Export fehl, bleibt das Archiv auf dem Smartphone, damit du einen anderen Ordner auswählen und es erneut versuchen kannst.

**iOS — Verbindungen und Reconnects.** Schalte **Settings → Diagnostics → Record debug log** ein. Es zeichnet jede gewählte Adresse und den Grund ihres Scheiterns auf, Wiederverbindungsversuche und deren Backoff, abgebrochene Verbindungen, „peer stopped answering keepalives“, Netzwechsel sowie tmux-Befehle mit ihren Fehlern. Die Einstellungen zeigen einen laufenden Zeilenzähler, damit du die Aufzeichnung bestätigen kannst, und **Export Debug Log** teilt sie als Textdatei. Das Log liegt im Arbeitsspeicher und umfasst nur die aktuelle App-Sitzung.

Prüfe jedes Debug-Protokoll oder Archiv vor dem Teilen. Es kann Servernamen, Adressen, Zeitangaben und andere Umgebungsdetails offenlegen — unter Android auch eingegebene Geheimnisse, Bildschirminhalte, Sprachtranskripte und jedes Audio, dessen Aufzeichnung du zugestimmt hast.
