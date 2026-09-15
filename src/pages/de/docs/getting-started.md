---
layout: ../../../layouts/DocLayout.astro
title: "Erste Schritte"
description: "Mobile SSH installieren, Identitäten prüfen, Sprungserver und Schlüssel einrichten sowie Server, Zugangsdaten und Einstellungen sichern."
---

# Erste Schritte

Mobile SSH ist ein SSH-Client für Android und iOS, um sich mit deinen eigenen Linux-, Unix-, Netzwerk-, IoT- oder Entwicklungsservern zu verbinden. Du gibst die Serveradresse und die Zugangsdaten an; die App öffnet ein interaktives SSH-Terminal.

## Voraussetzungen

- Android 8.0 oder neuer, oder iOS 16 oder neuer (iPhone oder iPad).
- Netzwerkzugriff vom Gerät zu deinem SSH-Server.
- Hostname oder IP-Adresse des SSH-Servers, Port, Benutzername und ein Passwort oder ein privater Schlüssel.
- Für lokale Dateien Ordner oder Dateien über die Systemauswahl wählen. Keine Plattform benötigt pauschalen Speicherzugriff.

## App installieren

- **Android:** Mobile SSH läuft derzeit als geschlossener Test bei Google Play. Öffne den Opt-in-Link in einem mobilen Browser auf dem Gerät — nicht in der Google-Play-App, in der der Test womöglich nicht sichtbar ist — und tritt mit dem Google-Konto bei, das du verwenden willst. Danach installiert und aktualisiert sich die App über Play wie jede andere.
- **iOS:** Die iOS-App erscheint als öffentliche Beta auf TestFlight. Installiere Apples TestFlight-App und öffne dann den Mobile-SSH-Einladungslink von der Startseite der Website, um die App zu installieren und Updates zu erhalten.

## Mit einem Server verbinden

1. Öffne Mobile SSH.
2. Tippe auf **+ Add Session** und suche nach einem gespeicherten Server oder füge von diesem Bildschirm einen neuen hinzu.
3. Gib Host, Port, Benutzername und Authentifizierungsdetails ein, wenn du einen neuen Server hinzufügst.
4. Tippe auf den Server, um eine Terminalsitzung zu öffnen.
5. Nutze **Active Sessions** auf dem Startbildschirm, um zu noch laufenden Sitzungen zurückzukehren.

Der Standard-SSH-Port ist `22`. Wenn dein Server einen anderen Port verwendet, gib ihn im Serverprofil an.

## Serveridentitäten prüfen

Beide Apps prüfen die SSH-Identität vor Zugangsdaten. Geänderte Schlüssel stoppen die Verbindung, auch mit alternativen Adressen und Sprungservern.

- **Android:** **Neue SSH-Identitäten automatisch akzeptieren** ist standardmäßig an. Der erste Rohschlüssel wird gespeichert, spätere müssen passen. Unter **Einstellungen → Allgemein → Sicherheit** ausschalten, um neue SHA-256-Fingerabdrücke vor Annahme und Neuverbindung mit dem Administrator abzugleichen.
- **iOS:** unbekannte Schlüssel erfordern Bestätigung. Vergleiche SHA-256 über einen sicheren Kanal und wähle **Vertrauen und neu verbinden**.

Prüfe gespeicherte Identitäten in den Einstellungen. Beide Plattformen unterstützen vom Administrator bereitgestellte Hostschlüssel-Widerrufe; Android unterstützt zusätzlich Host-Zertifizierungsstellen. Unter iOS importierst du über **Einstellungen → Serveridentitäten → Widerrufene Schlüssel importieren** OpenSSH-Einträge mit `@revoked` für Ed25519/ECDSA mit festgelegtem Geltungsbereich. Widerrufene Schlüssel werden bei neuen Verbindungen und Neuverbindungen blockiert, auch wenn ihnen zuvor vertraut wurde; der Import eines Widerrufs beendet keine bestehenden Verbindungen. iOS unterstützt weder Host-Zertifikate noch CA-Importe. Vertrauen bleibt auf dem jeweiligen Gerät und wird nicht aus Backups importiert. Entferne geänderte oder widerrufene Schlüssel erst, wenn du den Grund für die Sperre geprüft hast.

## Transport wählen

Beim Hinzufügen oder Bearbeiten eines Servers legt die Auswahl **Transport** fest, wie Mobile SSH sich verbindet:

- **SSH** -- eine gewöhnliche SSH-Verbindung (die Vorgabe).
- **Eternal Terminal** -- eine ausfallsichere Sitzung, die Netzwerkausfälle, Schlafmodus und IP-Wechsel übersteht. Hat der Host keinen `etserver`, kann Mobile SSH ihn für dich über SSH installieren. Details stehen in der Anleitung **Terminal**.

Android bietet auch experimentelle **Teleport**-Proxyverbindungen. Sprungserverrouten erfordern SSH und lassen sich nicht mit Eternal Terminal kombinieren.

## Server speichern

Gespeicherte Server bewahren das Verbindungsziel und die optionale Tunnel-Konfiguration auf. Ein gespeicherter Server kann enthalten:

- Hostname oder IP-Adresse.
- SSH-Port.
- Benutzername.
- Passwort- oder Schlüsseldetails.
- Optionale Regeln für lokale Portweiterleitung.
- Optionale zusätzliche Adressen für dieselbe Maschine (siehe unten).
- Optionale Sprungserver und **Beim Verbinden anhängen**: Auto, Nichts, tmux, herdr oder Zellij.

Nutze gespeicherte Server für Hosts, auf die du wiederholt zugreifst. Wenn ein gespeicherter Server auf einen anderen Host als deine aktuelle aktive Sitzung zeigt, startet Mobile SSH eine neue Verbindung für das ausgewählte Ziel.

### Mehrere Adressen (LAN/VPN-Roaming)

Dieselbe Maschine ist je nach Standort oft unter verschiedenen Adressen erreichbar – eine WLAN-IP zu Hause gegenüber einer VPN-IP. Füge die Alternativen im Bearbeitungsdialog des Servers hinzu, bei Bedarf jede mit eigenem Port. Beim Verbinden probiert Mobile SSH die Adressen der Reihe nach durch, bis eine antwortet, und merkt sich die zuletzt funktionierende Adresse, um sie beim nächsten Mal zuerst zu wählen. Ein Netzwechsel (zum Beispiel das Verlassen des VPN) löst eine sofortige Wiederverbindung mit der nun erreichbaren Adresse aus, statt auf das Timeout der toten Route zu warten.

### Sprungserver

Speichere zunächst Bastionen und wähle ihre Reihenfolge am Zielserver. Beide Plattformen unterstützen acht aufgelöste SSH-Sprünge. Jeder nutzt eigene Zugangsdaten und Identitätsprüfung; das Ziel muss vom vorherigen erreichbar sein. Fehlende Server, Schleifen und Fehler stoppen die Route statt direkt zu verbinden. Terminal, SFTP, lokale Weiterleitungen und unterstützte SSH-Funktionen nutzen die Route.

## Zugangsdaten speichern

Der Bildschirm **Credentials** speichert wiederverwendbare Datensätze aus Benutzername/Passwort oder Benutzername/privatem Schlüssel. Gespeicherte Zugangsdaten lassen sich im Server-Einrichtungsdialog auswählen, damit du nicht für jeden Host dieselben Anmeldedaten erneut eingeben musst.

Zugangsdatensätze werden lokal auf dem Gerät gespeichert — auf iOS liegen Geheimnisse im System-Keychain. Schütze das Gerät mit einer Bildschirmsperre, wenn du Passwörter, Passphrasen oder private Schlüssel speicherst.

## Private Schlüssel verwenden

Mobile SSH unterstützt eingefügte private Schlüssel und den Schlüsselimport über die Dateiauswahl des Systems. Auf Android unterstützt die App Ed25519-, ECDSA- (P-256/384/521) und RSA-Schlüssel; auf iOS unterstützt sie Ed25519- und ECDSA-Schlüssel (P-256/384/521). DSA (`ssh-dss`) wird auf keiner der beiden Plattformen unterstützt. Beide Plattformen können einen passphrasenverschlüsselten Schlüssel öffnen — gib die Passphrase im Passwort-/Passphrasenfeld ein.

So verwendest du einen privaten Schlüssel:

1. Öffne **Credentials** oder den Bearbeitungsdialog des Servers.
2. Füge den Text des privaten Schlüssels ein oder wähle **Aus Datei importieren**.
3. Gib die Schlüssel-Passphrase im Passwort-/Passphrasenfeld ein, falls der Schlüssel verschlüsselt ist.
4. Speichere die Zugangsdaten oder den Server.

Schlüsselimport nutzt die Systemauswahl ohne Zugriff auf den übrigen Speicher. Dateiübertragung hat eigene Ordner- und Dateiauswahlen.

Android unterstützt **FIDO2-Sicherheitsschlüssel** über USB/NFC: registriere oder importiere OpenSSH-Zugangsdaten und beantworte Touch-/PIN-Anfragen. Der physische Schlüssel bleibt nach Export/Wiederherstellung nötig. **SSH-Agent-Weiterleitung** ist pro Server optional: gespeicherte Schlüssel beantworten Signaturanfragen mit optionaler Freigabe je Nutzung. Aktiviere nur für vertrauenswürdige Signaturanfrager. iOS unterstützt weder Hardwarekey-Anmeldung noch Agent-Weiterleitung.

## Der Startbildschirm

Der Startbildschirm ist darauf ausgelegt, die Frage „Wohin kann ich zurückkehren?“ zu beantworten, statt ein leeres Verbindungsformular zu öffnen:

- **Continue** listet die Verbindungen auf, die gerade laufen, mit einer Anzahl der Bereiche, wenn eine Verbindung mehr als einen hat. Ein Tippen auf einen Eintrag bringt dich dorthin zurück.
- **Tmux sessions** listet auf, was auf deinen gespeicherten Servern läuft. Die Liste stammt aus einem Schnappschuss, den die App bereits gespeichert hat, und erscheint deshalb sofort und ganz ohne Netzwerk — jeder Eintrag ist mit dem Alter des Schnappschusses versehen, und ein Tippen verbindet und hängt diese Sitzung an. Schnappschüsse werden nach einigen Stunden ausgegraut und nach einer Woche verworfen.
- Unter iOS steht **Zuletzt verwendet** im Dialog **Neue Verbindung**; eine Auswahl füllt das Formular.

Androids **VPN**-Kachel öffnet integrierte Routingclients; **Über** steht unter Einstellungen. Der VPN-Leitfaden gehört hier zu **Portweiterleitung**.

Läuft nichts und ist nichts zwischengespeichert, sagt der Bildschirm das und verweist dich auf **Servers**.

## Gespeicherte Server benennen und durchsuchen

Ein gespeicherter Server kann einen Namen tragen — „Heim-NAS“, „Prod Web“ — und die Liste zeigt diesen statt der Adresse. Die Adresse kommt von selbst zurück, sobald der Name mehrdeutig wäre: bei zwei Einträgen mit gleichem Namen oder während einer laufenden Suche, damit du Einträge immer auseinanderhalten kannst.

Tippe auf das Suchfeld auf der Seite **Saved Servers**, um zu filtern. Die Suche berücksichtigt Name, Benutzer, Host, Port, Anmeldedaten und alle Alternativadressen. Der Bildschirm **+ Add Session** öffnet sich ebenfalls mit einer Suche, sodass du in einem Schritt einen gespeicherten Server finden und verbinden kannst.

Server lassen sich in Ordner einsortieren. Ein Ordner klappt ein, merkt sich, dass er eingeklappt war, und lässt sich umsortieren oder umbenennen; das Löschen eines Ordners verschiebt seine Server nach **Ungrouped**, statt sie zu löschen.

## Einen Teil deiner Einrichtung exportieren

**Export selected…** auf den Bildschirmen Servers und Credentials verwandelt die Liste in eine Auswahl mit Häkchen, sodass du drei Server weitergeben kannst, ohne alles zu exportieren. Ein Tippen auf eine Ordner-Kopfzeile nimmt den ganzen Ordner mit. Exporte sind verschlüsselt, wenn du eine Passphrase vergibst — ohne sie enthält die Datei Passwörter und private Schlüssel im Klartext, und die App weist vor dem Schreiben darauf hin.

Für Vollbackups **Alles exportieren (Backup)** unter Android oder **Sichern und Wiederherstellen** unter iOS wählen. Enthalten sind Server, Zugangsdaten und Einstellungen wie Sprache, Tasten und Multiplexersortierung; Android ergänzt VPN/SOCKS. Schütze die gesamte Datei mit einer Passphrase.

Beide lesen Format 2 und ältere Inventarbackups. Prüfe die Vorschau: **Zusammenführen** wendet Bereiche unter Beibehaltung bestehender Elemente an; **Ersetzen** ersetzt enthaltene Bereiche und setzt fehlende Einzelwerte eines vorhandenen Einstellungsbereichs auf Standard. Fehlende Bereiche bleiben unverändert. Inkompatible Optionen werden benannt; Import macht sie nicht auf der anderen App verfügbar. Import startet kein VPN.

Identitäten, aktive Sitzungen, Systemrechte und Ordnerfreigaben werden nicht wiederhergestellt. Prüfe Hosts und erteile Rechte am Zielgerät. Alte Appversionen lesen das neue Vollformat nicht.

## Aktive Sitzungen

**Aktive Sitzungen** zeigt die Anzahl und öffnet das Terminalraster. Unter Android listet eine dauerhafte Benachrichtigung Hosts und öffnet Verbindungssteuerungen.

Das Zurückgehen zum Startbildschirm trennt aktive SSH-Sitzungen nicht; das Schließen von Bereichen oder das Beenden der Terminal-Aktivität trennt sie.

## Erste nützliche Einstellungen

Öffne **Settings** auf dem Startbildschirm (es gibt eine eigene Seite dafür):

- Entscheide, ob ein Tippen auf das Terminal die Tastatur einblendet. Die beiden Plattformen liefern gegensätzliche Vorgaben: Auf Android erscheint die Tastatur nur über die Schaltfläche ⌨, auf iOS blendet ein Tippen sie ein.
- Stelle **Textgröße**, **Schrift**, **Farbschema** und **Scrollback**-Größe des Terminals ein und wähle ein App-**Design** (System, Hell oder Dunkel).
- Aktiviere **Agent alerts**, wenn du lange Hintergrundaufgaben (Claude Code, Codex, Shell-Skripte) ausführst und benachrichtigt werden möchtest, sobald der Agent deine Eingabe benötigt. Wie Agenten sich melden, steht in der Anleitung **Terminal**.
- Auf Android ist **Sitzungen im Hintergrund weiterlaufen lassen** standardmäßig aktiv, sodass Shells und Agenten das Wegwischen der App überstehen.
- Beide Plattformen haben einen Schalter für anonyme Nutzungsanalyse. Ausschalten beendet das Sammeln neuer Ereignisse.
- Unter iOS ist **Diktat und Vorschläge** standardmäßig an. Für direkte Eingaben ohne Diktat/Autokorrektur ausschalten und neues Pane öffnen.
- Entfernte Meldungen, Befehlsabschluss und entfernte Zwischenablageabfragen benötigen eigene Freigaben. Aktiviere nur gewünschte Aktionen.

## Plugins

Plugins erweitern Mobile SSH um zusätzliche Workflows. Öffne **Plugins** auf dem Startbildschirm, um:

- Katalog nach Kategorien durchsuchen und Plugins suchen.
- Die gewünschten zu installieren -- jedes Plugin wird bei Bedarf heruntergeladen und per SHA-256-Prüfsumme verifiziert im app-privaten Speicher abgelegt.
- Installierte Plugins vom selben Bildschirm aus auszuführen.

Plugins werden standardmäßig aus einem öffentlichen Katalog geladen. Wenn du einen eigenen pflegst, kannst du Mobile SSH auf eine eigene oder private Katalogquelle verweisen. Installiere nur Plugins aus Quellen, denen du vertraust.

## Sprachen

Mobile SSH folgt standardmäßig der Systemsprache. Beide Apps bieten zwanzig Sprachen: Arabisch, Ägyptisch-Arabisch, Bengalisch, vereinfachtes und traditionelles Chinesisch, Englisch, Französisch, Deutsch, Hindi, Indonesisch, Japanisch, Marathi, Nigerianisches Pidgin, Portugiesisch, Russisch, Spanisch, Tamil, Telugu, Türkisch und Urdu.

Wenn du die App in einer anderen Sprache als der des Telefons möchtest, gibt es unter **Settings → Language** eine Auswahl mit der Option „System default“. Du kannst die Sprache weiterhin auch in Android **Settings → System → Languages** oder auf iOS in **Settings → General → Language & Region** ändern.

## Sicherheitshinweis

Verbinde nur mit vertrauenswürdigen Servern. Daten bleiben auf dem Gerät außer bei Export/Teilen; es gibt keinen Cloudtresor oder automatischen Geräteabgleich. Schütze Gerät und Backups, prüfe unbekannte Fingerabdrücke und kläre geänderte Schlüssel vor Neuverbindung.
