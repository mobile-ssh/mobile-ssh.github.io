---
layout: ../../../layouts/DocLayout.astro
title: "Dateiübertragung"
description: "SFTP-Dateiübertragungsanleitung von Mobile SSH für lokale und entfernte Dateien, Hochladen, Herunterladen, Sortieren und Berechtigungen."
---

# Dateiübertragung

Mobile SSH enthält einen SFTP-Dateiübertragungsbildschirm, der an die aktive SSH-Verbindung gebunden ist. Er ist für schnelle Serverwartung vom Telefon oder Tablet aus gedacht: eine Konfiguration hochladen, ein Log herunterladen, eine entfernte Datei umbenennen oder Berechtigungen prüfen, ohne die App zu verlassen.

## Dateiübertragung öffnen

1. Verbinde dich mit einem SSH-Server.
2. Wähle den verbundenen Terminalbereich aus.
3. Öffne **Transfer** in der Terminal-Symbolleiste, oder halte die Bereichskopfzeile gedrückt, wenn der aktuelle Bildschirm dies unterstützt.
4. Der Dateiübertragungsbildschirm öffnet sich mit einem lokalen und einem entfernten Bereich.

Wenn keine aktive SSH-Sitzung vorhanden ist, kann die Dateiübertragung nicht geöffnet werden.

## Lokaler und entfernter Bereich

Der Dateiübertragungsbildschirm hat zwei Browserbereiche:

- **Lokaler Bereich:** Telefonspeicher.
- **Entfernter Bereich:** Serverdateien über SFTP.

Die App merkt sich die zuletzt verwendeten lokalen und entfernten Pfade pro Host. Auch die Sortiereinstellungen werden pro Host für beide Bereiche gemerkt.

## Speicherzugriff

Auf Android-Versionen, die das direkte Durchsuchen von Dateien einschränken, kann Mobile SSH Speicherzugriff anfordern, bevor der lokale Bereich die Telefondateien durchsuchen kann. Wenn du diese Berechtigung überspringst oder verweigerst, funktioniert das entfernte Durchsuchen möglicherweise weiterhin, aber lokale Hoch- und Herunterladepfade können eingeschränkt sein.

Auf iOS arbeitet der lokale Bereich mit dem eigenen Dokumentenbereich der App, und du bringst Dateien über die Dokument- und Fotoauswahl des Systems herein — einschließlich Mehrfachauswahl beim Import von Fotos und Dokumenten. Eine separate Speicherberechtigung ist nicht nötig.

Der Import des privaten Schlüssels ist von der Dateiübertragung getrennt und nutzt die Dateiauswahl des Systems.

## Dateien hochladen

1. Öffne den lokalen Bereich.
2. Navigiere zur Datei, die du hochladen möchtest.
3. Wähle Hochladen.
4. Bestätige das entfernte Ziel.
5. Beobachte die Übertragungswarteschlange für Fortschritt und Abschluss.

Uploads nutzen die bestehende SSH/SFTP-Verbindung. Wenn die Verbindung abbricht, versuche es nach dem Wiederverbinden erneut.

## Dateien herunterladen

1. Öffne den entfernten Bereich.
2. Navigiere zur Datei, die du herunterladen möchtest.
3. Wähle Herunterladen.
4. Bestätige das lokale Ziel.
5. Beobachte die Übertragungswarteschlange für Fortschritt und Abschluss.

Große Downloads solltest du nach Möglichkeit in einem stabilen Netzwerk durchführen.

## Aktionen für entfernte Dateien

Je nach ausgewähltem entferntem Element kann Mobile SSH Aktionen anzeigen wie:

- Herunterladen.
- Umbenennen.
- Löschen.
- Datei oder Verzeichnis erstellen.
- Textdatei bearbeiten.
- Dateidetails ansehen.

Details einer entfernten Datei können Berechtigungsbits, Eigentümer, Gruppe und oktale Berechtigungswerte enthalten. Nutze diese Details, bevor du Serverdateien änderst, die von einem anderen Prozess oder Bereitstellungstool verwaltet werden.

## Sortieren und letzte Pfade

Jeder Bereich kann nach Name oder Datum auf- oder absteigend sortieren. Mobile SSH speichert die ausgewählten lokalen und entfernten Sortiermodi pro Host zusammen mit den letzten Pfaden, sodass wiederholte Übertragungen zum selben Server an vertrauten Orten beginnen.

## Übertragungswarteschlange

Übertragungen werden in eine Warteschlange gestellt und nach Status angezeigt. Der Log-Bereich trennt wartende, fehlgeschlagene und erfolgreiche Übertragungen. Fehlgeschlagene Übertragungen enthalten einen Grund, wenn die zugrunde liegende SFTP-Operation einen liefert.

## Praktische Tipps

- Nutze SFTP für gezielte Dateiverschiebungen; nutze Kommandozeilenwerkzeuge wie `rsync` auf dem Server für die Synchronisierung großer Verzeichnisse.
- Vermeide das Bearbeiten von Live-Produktionsdateien, sofern du kein Backup oder keinen Rollback-Pfad der Bereitstellung hast.
- Wenn eine Datei nach dem Hochladen nicht erscheint, aktualisiere den entfernten Bereich oder prüfe den Zielpfad.
- Wenn der Android-Speicherzugriff das lokale Durchsuchen blockiert, erteile die Berechtigung in den Android-Einstellungen und öffne die Dateiübertragung erneut. Füge auf iOS Dateien stattdessen über die Auswahldialoge zum lokalen Bereich hinzu.
