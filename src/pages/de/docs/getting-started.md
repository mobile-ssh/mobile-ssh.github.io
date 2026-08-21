---
layout: ../../../layouts/DocLayout.astro
title: "Erste Schritte"
description: "Erste Schritte zur Installation von Mobile SSH, zum Verbinden mit einem Server und zum Speichern von Profilen, Zugangsdaten und Sitzungen."
---

# Erste Schritte

Mobile SSH ist ein SSH-Client für Android und iOS, um sich mit deinen eigenen Linux-, Unix-, Netzwerk-, IoT- oder Entwicklungsservern zu verbinden. Du gibst die Serveradresse und die Zugangsdaten an; die App öffnet ein interaktives SSH-Terminal.

## Voraussetzungen

- Android 8.0 oder neuer, oder iOS 16 oder neuer (iPhone oder iPad).
- Netzwerkzugriff vom Gerät zu deinem SSH-Server.
- Hostname oder IP-Adresse des SSH-Servers, Port, Benutzername und ein Passwort oder ein privater Schlüssel.
- Auf Android Speicherzugriff, wenn du die SFTP-Dateiübertragung mit dem lokalen Dateibrowser des Telefons nutzen möchtest; iOS verwendet stattdessen die Datei- und Fotoauswahl des Systems.

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

## Transport wählen

Beim Hinzufügen oder Bearbeiten eines Servers legt die Auswahl **Transport** fest, wie Mobile SSH sich verbindet:

- **SSH** -- eine gewöhnliche SSH-Verbindung (die Vorgabe).
- **Eternal Terminal** -- eine ausfallsichere Sitzung, die Netzwerkausfälle, Schlafmodus und IP-Wechsel übersteht. Hat der Host keinen `etserver`, kann Mobile SSH ihn für dich über SSH installieren. Details stehen in der Anleitung **Terminal**.

## Server speichern

Gespeicherte Server bewahren das Verbindungsziel und die optionale Tunnel-Konfiguration auf. Ein gespeicherter Server kann enthalten:

- Hostname oder IP-Adresse.
- SSH-Port.
- Benutzername.
- Passwort- oder Schlüsseldetails.
- Optionale Regeln für lokale Portweiterleitung.
- Optionale zusätzliche Adressen für dieselbe Maschine (siehe unten).

Nutze gespeicherte Server für Hosts, auf die du wiederholt zugreifst. Wenn ein gespeicherter Server auf einen anderen Host als deine aktuelle aktive Sitzung zeigt, startet Mobile SSH eine neue Verbindung für das ausgewählte Ziel.

### Mehrere Adressen (LAN/VPN-Roaming)

Dieselbe Maschine ist je nach Standort oft unter verschiedenen Adressen erreichbar – eine WLAN-IP zu Hause gegenüber einer VPN-IP. Füge die Alternativen im Bearbeitungsdialog des Servers hinzu, bei Bedarf jede mit eigenem Port. Beim Verbinden probiert Mobile SSH die Adressen der Reihe nach durch, bis eine antwortet, und merkt sich die zuletzt funktionierende Adresse, um sie beim nächsten Mal zuerst zu wählen. Ein Netzwechsel (zum Beispiel das Verlassen des VPN) löst eine sofortige Wiederverbindung mit der nun erreichbaren Adresse aus, statt auf das Timeout der toten Route zu warten.

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

Der Import des privaten Schlüssels nutzt die Dateiauswahl des Systems für Schlüsseldateien. Auf Android nutzt die Dateiübertragung einen separaten lokalen Dateibrowser und kann auf neueren Android-Versionen einen umfassenderen Speicherzugriff anfordern; auf iOS kommen Dateien über die Dokument- und Fotoauswahl des Systems herein.

## Der Startbildschirm

Der Startbildschirm ist darauf ausgelegt, die Frage „Wohin kann ich zurückkehren?“ zu beantworten, statt ein leeres Verbindungsformular zu öffnen:

- **Continue** listet die Verbindungen auf, die gerade laufen, mit einer Anzahl der Bereiche, wenn eine Verbindung mehr als einen hat. Ein Tippen auf einen Eintrag bringt dich dorthin zurück.
- **Tmux sessions** listet auf, was auf deinen gespeicherten Servern läuft. Die Liste stammt aus einem Schnappschuss, den die App bereits gespeichert hat, und erscheint deshalb sofort und ganz ohne Netzwerk — jeder Eintrag ist mit dem Alter des Schnappschusses versehen, und ein Tippen verbindet und hängt diese Sitzung an. Schnappschüsse werden nach einigen Stunden ausgegraut und nach einer Woche verworfen.
- Auf iOS steht darunter eine Liste **Recent**; die Android-App hat sie fallengelassen, weil sich „Wohin kann ich zurückkehren?“ als nützlichere Frage erwies als „Wann habe ich zuletzt verbunden?“.

Läuft nichts und ist nichts zwischengespeichert, sagt der Bildschirm das und verweist dich auf **Servers**.

## Gespeicherte Server benennen und durchsuchen

Ein gespeicherter Server kann einen Namen tragen — „Heim-NAS“, „Prod Web“ — und die Liste zeigt diesen statt der Adresse. Die Adresse kommt von selbst zurück, sobald der Name mehrdeutig wäre: bei zwei Einträgen mit gleichem Namen oder während einer laufenden Suche, damit du Einträge immer auseinanderhalten kannst.

Tippe auf das Suchfeld auf der Seite **Saved Servers**, um zu filtern. Die Suche berücksichtigt Name, Benutzer, Host, Port, Anmeldedaten und alle Alternativadressen. Der Bildschirm **+ Add Session** öffnet sich ebenfalls mit einer Suche, sodass du in einem Schritt einen gespeicherten Server finden und verbinden kannst.

Server lassen sich in Ordner einsortieren. Ein Ordner klappt ein, merkt sich, dass er eingeklappt war, und lässt sich umsortieren oder umbenennen; das Löschen eines Ordners verschiebt seine Server nach **Ungrouped**, statt sie zu löschen.

## Einen Teil deiner Einrichtung exportieren

**Export selected…** auf den Bildschirmen Servers und Credentials verwandelt die Liste in eine Auswahl mit Häkchen, sodass du drei Server weitergeben kannst, ohne alles zu exportieren. Ein Tippen auf eine Ordner-Kopfzeile nimmt den ganzen Ordner mit. Exporte sind verschlüsselt, wenn du eine Passphrase vergibst — ohne sie enthält die Datei Passwörter und private Schlüssel im Klartext, und die App weist vor dem Schreiben darauf hin.

## Aktive Sitzungen

Wenn Sitzungen laufen, zeigt der Startbildschirm **Active Sessions** mit einer Anzahl an. Tippe darauf, um zum Terminalraster zurückzukehren. Eine laufende Benachrichtigung listet außerdem die aktiven Hosts auf — tippe in der Benachrichtigung auf einen Host, um direkt zu diesem Terminal zu springen.

Das Zurückgehen zum Startbildschirm trennt aktive SSH-Sitzungen nicht; das Schließen von Bereichen oder das Beenden der Terminal-Aktivität trennt sie.

## Erste nützliche Einstellungen

Öffne **Settings** auf dem Startbildschirm (es gibt eine eigene Seite dafür):

- Entscheide, ob ein Tippen auf das Terminal die Tastatur einblendet. Die beiden Plattformen liefern gegensätzliche Vorgaben: Auf Android erscheint die Tastatur nur über die Schaltfläche ⌨, auf iOS blendet ein Tippen sie ein.
- Stelle **Textgröße**, **Schrift**, **Farbschema** und **Scrollback**-Größe des Terminals ein und wähle ein App-**Design** (System, Hell oder Dunkel).
- Aktiviere **Agent alerts**, wenn du lange Hintergrundaufgaben (Claude Code, Codex, Shell-Skripte) ausführst und benachrichtigt werden möchtest, sobald der Agent deine Eingabe benötigt. Wie Agenten sich melden, steht in der Anleitung **Terminal**.
- Auf Android ist **Sitzungen im Hintergrund weiterlaufen lassen** standardmäßig aktiv, sodass Shells und Agenten das Wegwischen der App überstehen.
- Deaktiviere auf Android die anonyme Nutzungsanalyse, wenn du keine Daten senden möchtest. Die iOS-App hat diesen Schalter noch nicht.

## Plugins

Plugins erweitern Mobile SSH um zusätzliche Workflows. Öffne **Plugins** auf dem Startbildschirm, um:

- Einen Katalog verfügbarer Plugins zu durchsuchen.
- Die gewünschten zu installieren -- jedes Plugin wird bei Bedarf heruntergeladen und per SHA-256-Prüfsumme verifiziert im app-privaten Speicher abgelegt.
- Installierte Plugins vom selben Bildschirm aus auszuführen.

Plugins werden standardmäßig aus einem öffentlichen Katalog geladen. Wenn du einen eigenen pflegst, kannst du Mobile SSH auf eine eigene oder private Katalogquelle verweisen. Installiere nur Plugins aus Quellen, denen du vertraust.

## Sprachen

Mobile SSH folgt standardmäßig der Systemsprache. Die App enthält Übersetzungen für Arabisch, Bengali, Chinesisch (vereinfacht und traditionell), Englisch, Französisch, Deutsch, Hindi, Indonesisch, Japanisch, Marathi, Portugiesisch, Russisch, Spanisch, Tamil, Telugu, Türkisch und Urdu — zwanzig Sprachen auf Android, das zusätzlich Nigerianisches Pidgin und Ägyptisch-Arabisch mitbringt, und achtzehn auf iOS.

Wenn du die App in einer anderen Sprache als der des Telefons möchtest, gibt es unter **Settings → Language** eine Auswahl mit der Option „System default“. Du kannst die Sprache weiterhin auch in Android **Settings → System → Languages** oder auf iOS in **Settings → General → Language & Region** ändern.

## Sicherheitshinweis

Verbinde dich nur mit Servern, denen du vertraust. Die aktuelle App speichert Verbindungsdaten lokal und bietet keinen Cloud-Tresor und keine geräteübergreifende Synchronisierung. Die aktuelle Implementierung zeigt außerdem keine Bestätigung des bekannten Hosts an; vermeide daher Verbindungen über nicht vertrauenswürdige Netzwerke, wenn die Host-Identität wichtig ist.
