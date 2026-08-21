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

Die App merkt sich die letzten zehn entfernten Pfade pro Host — öffne sie auf Android über die Kopfzeile des entfernten Bereichs, auf iOS über das Uhrensymbol. Die Sortiereinstellungen werden pro Host für beide Bereiche gemerkt. Einen lokalen Pfadverlauf gibt es nicht: Auf Android ist der lokale Bereich der Ordner, den du freigegeben hast, und auf iOS der eigene Dokumentenbereich der App.

Der Dateiübertragungsbildschirm folgt dem hellen oder dunklen Systemdesign und passt damit zum Rest von Mobile SSH.

### Wo jede Sitzung öffnet (Android)

Öffnest du die Dateiübertragung aus einem Bereich, der an einer tmux-Sitzung hängt, landet der entfernte Bereich wieder dort, wo **diese Sitzung** zuletzt gearbeitet hat, mit dem Namen der Sitzung in der Bereichskopfzeile. Eine Sitzung, aus der du sie noch nie geöffnet hast, startet bei den Verzeichnissen, die du auf diesem Host am häufigsten nutzt, dann beim zuletzt genutzten Verzeichnis des Hosts, dann in deinem Heimatverzeichnis.

Wurde ein gemerktes Verzeichnis inzwischen gelöscht, arbeitet sich die App diese Liste hinunter, bis sich eines tatsächlich auflisten lässt, statt dich auf einer Fehlermeldung sitzen zu lassen — und sie schreibt den kaputten Pfad nicht zurück. Auf iOS wird ein entferntes Verzeichnis pro Host gemerkt.

## Speicherzugriff

Mobile SSH verlangt auf keiner der beiden Plattformen eine pauschale Speicherberechtigung.

Auf Android gibst du mit der Ordnerauswahl des Systems **einen Ordner** frei, und Downloads werden dorthin geschrieben — an einen Ort, den jede andere App ohnehin lesen kann. Die Freigabe bleibt über Neustarts hinweg bestehen.

Auf iOS ist der lokale Bereich der Dokumentenbereich der App, und Dateien kommen über die Dokument- und Fotoauswahl des Systems herein.

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

## Ganze Ordner kopieren

Uploads und Downloads sind nicht auf einzelne Dateien beschränkt. Wähle einen Ordner, und Mobile SSH kopiert den gesamten Unterbaum in beide Richtungen – vom Telefon zum entfernten Host und vom entfernten Host zum Telefon –, indem es zuerst die Zielverzeichnisse anlegt und dann jede Datei in die Warteschlange stellt. Ein nicht lesbares Unterverzeichnis stoppt den Rest des Kopiervorgangs nicht; auf Android wird es als fehlgeschlagene Zeile mit dem Text „Can't list directory“ gemeldet, während iOS weitermacht, ohne aufzuführen, was übersprungen wurde.

## Aktionen für entfernte Dateien

Je nach ausgewähltem entferntem Element kann Mobile SSH Aktionen anzeigen wie:

- Herunterladen, auf Android **Copy to phone**.
- Kopieren oder Verschieben **auf dem Server** — `cp -r` / `mv` laufen auf dem Host, ohne dass die Bytes dein Telefon berühren.
- Umbenennen.
- Löschen.
- Datei oder Verzeichnis erstellen.
- Textdatei bearbeiten.
- Zu `.tar.gz` komprimieren.
- Berechtigungen — Modus und Eigentümer ändern, mit der Option, das auf einen ganzen Ordner anzuwenden.
- In einer anderen App öffnen.
- Dateidetails ansehen.

Details einer entfernten Datei können Berechtigungsbits, Eigentümer, Gruppe und oktale Berechtigungswerte enthalten. Nutze diese Details, bevor du Serverdateien änderst, die von einem anderen Prozess oder Bereitstellungstool verwaltet werden.

Dateigrößen werden in Binäreinheiten angezeigt, damit sie zu dem passen, was `ls -h` im Terminal einen Tab weiter ausgibt.

## Sortieren und letzte Pfade

Jeder Bereich kann nach Name oder Datum auf- oder absteigend sortieren. Mobile SSH speichert die ausgewählten lokalen und entfernten Sortiermodi pro Host zusammen mit den letzten Pfaden, sodass wiederholte Übertragungen zum selben Server an vertrauten Orten beginnen.

## Übertragungswarteschlange

Übertragungen werden in eine Warteschlange gestellt und nach Status angezeigt, und das Protokoll zeigt jede Übertragung und lässt sich scrollen — Android sortiert sie in die Reiter Queued / Failed / Successful, iOS in Active / Failed / Done. Fehlgeschlagene Übertragungen enthalten einen Grund, wenn die zugrunde liegende SFTP-Operation einen liefert. Auf iOS bleibt die gerade laufende Datei oben im Reiter Active, und eine Zeile lässt sich mitten in der Übertragung abbrechen.

## Dateien aus der App herausbekommen

- **Android:** Downloads landen in dem Ordner, den du freigegeben hast, und sind damit schon für jede andere App sichtbar. **In einer anderen App öffnen** gibt es in beiden Bereichen; eine entfernte Datei wird zuerst heruntergeladen und dann übergeben.
- **iOS:** Mobile SSH erscheint in der Dateien-App unter **Auf meinem iPhone**, sodass alles im Bereich „Mein Telefon“ aus Mail, Auswahldialogen und anderen Apps erreichbar ist. Halte eine heruntergeladene Datei gedrückt und wähle **In einer anderen App öffnen**, um sie zu übergeben, per AirDrop zu senden oder anderswo zu sichern.

## Eine Datei in eine Sitzung schicken (Android)

Android nimmt Dateien entgegen, die aus jeder anderen App hineingeteilt werden: Teile an Mobile SSH, und die Datei wird nach `~/.cache/mobile-ssh` auf dem Host des Bereichs hochgeladen, wobei ihr entfernter Pfad an der Eingabeaufforderung eingetippt wird, sodass du sie sofort verwenden kannst. Die Schaltfläche 📎 in der Terminal-Symbolleiste macht dasselbe aus der Dateiauswahl des Systems heraus, und beide nehmen mehrere Dateien auf einmal an.

Auf iOS bringst du Dateien mit der Schaltfläche ＋ in den lokalen Bereich und lädst sie von dort hoch.

## Praktische Tipps

- Nutze SFTP für gezielte Dateiverschiebungen; nutze Kommandozeilenwerkzeuge wie `rsync` auf dem Server für die Synchronisierung großer Verzeichnisse.
- Vermeide das Bearbeiten von Live-Produktionsdateien, sofern du kein Backup oder keinen Rollback-Pfad der Bereitstellung hast.
- Wenn eine Datei nach dem Hochladen nicht erscheint, aktualisiere den entfernten Bereich oder prüfe den Zielpfad.
- Wenn der lokale Bereich auf Android leer ist, wähle mit **Pick folder** einen Ordner — die App hat nur Zugriff auf den Ordner, den du ihr freigibst. Füge auf iOS Dateien stattdessen über die Auswahldialoge zum lokalen Bereich hinzu.
