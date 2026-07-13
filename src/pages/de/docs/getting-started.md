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

- **Android:** Installiere Mobile SSH über Google Play.
- **iOS:** Die iOS-App erscheint als öffentliche Beta auf TestFlight. Installiere Apples TestFlight-App und öffne dann den Mobile-SSH-Einladungslink von der Startseite der Website, um die App zu installieren und Updates zu erhalten.

## Mit einem Server verbinden

1. Öffne Mobile SSH.
2. Tippe auf **+ Add Session** und suche nach einem gespeicherten Server oder füge von diesem Bildschirm einen neuen hinzu.
3. Gib Host, Port, Benutzername und Authentifizierungsdetails ein, wenn du einen neuen Server hinzufügst.
4. Tippe auf den Server, um eine Terminalsitzung zu öffnen.
5. Nutze **Active Sessions** auf dem Startbildschirm, um zu noch laufenden Sitzungen zurückzukehren.

Der Standard-SSH-Port ist `22`. Wenn dein Server einen anderen Port verwendet, gib ihn im Serverprofil an.

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

Mobile SSH unterstützt eingefügte private Schlüssel und den Schlüsselimport über die Dateiauswahl des Systems. Auf Android unterstützt die App Ed25519-, RSA-, ECDSA- und DSA-Schlüssel; auf iOS unterstützt sie Ed25519- und ECDSA-Schlüssel (P-256/384/521).

So verwendest du einen privaten Schlüssel:

1. Öffne **Credentials** oder den Bearbeitungsdialog des Servers.
2. Füge den Text des privaten Schlüssels ein oder wähle **Aus Datei importieren**.
3. Gib die Schlüssel-Passphrase im Passwort-/Passphrasenfeld ein, falls der Schlüssel verschlüsselt ist.
4. Speichere die Zugangsdaten oder den Server.

Der Import des privaten Schlüssels nutzt die Dateiauswahl des Systems für Schlüsseldateien. Auf Android nutzt die Dateiübertragung einen separaten lokalen Dateibrowser und kann auf neueren Android-Versionen einen umfassenderen Speicherzugriff anfordern; auf iOS kommen Dateien über die Dokument- und Fotoauswahl des Systems herein.

## Letzte Sitzungen

Der Startbildschirm zeigt die letzten Sitzungen. Eine letzte Sitzung kann sich erneut mit demselben Serverset verbinden. Wenn die vorherige Sitzung noch aktiv ist, kehrt Mobile SSH zu ihr zurück, statt eine doppelte Verbindung zu starten.

## Gespeicherte Server durchsuchen

Tippe auf das Suchfeld auf der Seite **Saved Servers**, um nach Name oder Host zu filtern. Der Bildschirm **+ Add Session** öffnet sich ebenfalls mit einer Suche, sodass du in einem Schritt einen gespeicherten Server finden und verbinden kannst.

## Aktive Sitzungen

Wenn Sitzungen laufen, zeigt der Startbildschirm **Active Sessions** mit einer Anzahl an. Tippe darauf, um zum Terminalraster zurückzukehren. Eine laufende Benachrichtigung listet außerdem die aktiven Hosts auf — tippe in der Benachrichtigung auf einen Host, um direkt zu diesem Terminal zu springen.

Das Zurückgehen zum Startbildschirm trennt aktive SSH-Sitzungen nicht; das Schließen von Bereichen oder das Beenden der Terminal-Aktivität trennt sie.

## Erste nützliche Einstellungen

Öffne **Settings** auf dem Startbildschirm (es gibt eine eigene Seite dafür):

- Aktiviere „Tippen zeigt die Tastatur", wenn die Tastatur beim Tippen auf das Terminal erscheinen soll.
- Aktiviere **Agent alerts**, wenn du lange Hintergrundaufgaben (Claude Code, Codex, Shell-Skripte) ausführst und eine Ton- oder Vibrationsbenachrichtigung erhalten möchtest, sobald der Agent deine Eingabe benötigt.
- Deaktiviere die anonyme Nutzungsanalyse, wenn du keine Daten senden möchtest.

## Sprachen

Mobile SSH folgt der Systemsprache. Die App enthält Übersetzungen für Arabisch, Bengali, Chinesisch (vereinfacht und traditionell), Englisch, Französisch, Deutsch, Hindi, Indonesisch, Japanisch, Marathi, Nigerianisches Pidgin, Portugiesisch, Russisch, Spanisch, Tamil, Telugu, Türkisch und Urdu. Ändere die Sprache in Android **Settings → System → Languages** oder auf iOS in **Settings → General → Language & Region**, nicht in der App.

## Sicherheitshinweis

Verbinde dich nur mit Servern, denen du vertraust. Die aktuelle App speichert Verbindungsdaten lokal und bietet keinen Cloud-Tresor und keine geräteübergreifende Synchronisierung. Die aktuelle Implementierung zeigt außerdem keine Bestätigung des bekannten Hosts an; vermeide daher Verbindungen über nicht vertrauenswürdige Netzwerke, wenn die Host-Identität wichtig ist.
