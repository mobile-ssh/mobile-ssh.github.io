---
layout: ../../../layouts/DocLayout.astro
title: "Dateiübertragung"
description: "SFTP-Dateitransfers, gespeicherte Ordner, tmux-Sitzungsverzeichnisse, Warteschlangen, Rechte und Dateifreigaben ins Terminal mit Mobile SSH."
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

Die App merkt sich entfernte Pfade und Sortierung je Host. Öffne die Pfade über die entfernte Kopfzeile unter Android oder das Uhrsymbol unter iOS. Lokal erscheint der gewählte Ordner; iOS nutzt bis zur anderen Auswahl den Documents-Ordner der App.

Der Dateiübertragungsbildschirm folgt dem hellen oder dunklen Systemdesign und passt damit zum Rest von Mobile SSH.

### Wo jede Sitzung startet

Auf beiden Plattformen stellt Dateiübertragung aus tmux das Verzeichnis für **diese Sitzung und diesen Socket** wieder her. Eine neue Sitzung probiert häufige Host-Verzeichnisse, dann andere gespeicherte Orte oder das Anmeldeverzeichnis.

Fehlt ein Verzeichnis oder ist es nicht zugänglich, wird der nächste nutzbare Ort versucht. Verbindungsfehler werden gemeldet statt als fehlender Ordner behandelt. Aktualisieren zählt nicht als neuer Besuch.

## Speicherzugriff

Mobile SSH verlangt auf keiner der beiden Plattformen eine pauschale Speicherberechtigung.

Auf Android gibst du mit der Ordnerauswahl des Systems **einen Ordner** frei, und Downloads werden dorthin geschrieben — an einen Ort, den jede andere App ohnehin lesen kann. Die Freigabe bleibt über Neustarts hinweg bestehen.

Unter iOS gibt **Mein Telefon → Lokalen Ordner wählen** einen Dateien-Ordner frei, einschließlich iCloud Drive und unterstützter Anbieter. Die Wahl bleibt gespeichert. **App-Ordner verwenden** kehrt zu Mobile SSH Documents zurück. Wird der Ordner unzugänglich, wähle ihn erneut oder wechsle ausdrücklich zum App-Ordner; Downloads werden nicht still umgeleitet. Die Freigabe ist nicht im Backup.

Die iOS-Dokument- und Fotoauswahl importiert mehrere Elemente. Bei Namenskonflikten gibt es **Ersetzen**, **Beide behalten** und **Abbrechen**. Eine bereits am Ziel liegende Datei bleibt beim Import unverändert.

Der Import des privaten Schlüssels ist von der Dateiübertragung getrennt und nutzt die Dateiauswahl des Systems.

## Dateien hochladen

1. Öffne den lokalen Bereich.
2. Navigiere zur Datei, die du hochladen möchtest.
3. Wähle Hochladen.
4. Bestätige das entfernte Ziel.
5. Beobachte die Übertragungswarteschlange für Fortschritt und Abschluss.

Uploads folgen der SSH-Route des gewählten Servers einschließlich gespeicherter Sprungserver. Nach Verbindungsabbruch erneut verbinden und wiederholen.

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

- **Aufs Telefon kopieren** zum Herunterladen.
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

Transfers sind nach Status sortiert: Wartend / Fehlgeschlagen / Erfolgreich unter Android, Aktiv / Fehlgeschlagen / Fertig unter iOS. Fehler zeigen den verfügbaren Grund. Unter iOS bleibt die aktuelle Übertragung oben in Aktiv und kann abgebrochen werden.

Unter iOS behalten vorgemerkte Transfers ihren ursprünglichen Ordner auch beim Weiterblättern. Downloads werden erst temporär abgeschlossen, dann am Ziel ersetzt; Abbruch oder Fehler erhält die vorhandene Datei. Hat sich das Ziel nach der Überschreibfreigabe geändert, stoppt die App.

## Dateien aus der App herausbekommen

- **Android:** Downloads landen in dem Ordner, den du freigegeben hast, und sind damit schon für jede andere App sichtbar. **In einer anderen App öffnen** gibt es in beiden Bereichen; eine entfernte Datei wird zuerst heruntergeladen und dann übergeben.
- **iOS:** **In anderer App öffnen** gibt es für lokale und entfernte Dateien. Entfernte Dateien werden vor dem Teilen heruntergeladen. Der App-Ordner steht unter **Auf meinem iPhone → Mobile SSH**; externe Ordner bleiben an ihrem ursprünglichen Dateien-Ort.

## Eine Datei in eine Sitzung senden

Beide Plattformen empfangen Dateien anderer Apps und bieten 📎 **Datei anhängen** im Terminal. Uploads landen in `~/.cache/mobile-ssh` auf dem gewählten Host; Pfade lassen sich ohne Enter am Prompt einfügen. Mehrere Dateien werden unterstützt.

Unter Android zielt Teilen auf die laufende Sitzung. Unter iOS bietet die Büroklammer **Fotomediathek** oder **Dateien**. Die iOS-Teilen-Erweiterung lädt auch bei geschlossener App auf gespeicherte SSH-Server hoch; Eternal-Terminal-Profile werden nicht angeboten. Unbekannte Identitäten zuerst in der Hauptapp prüfen.

Nach dem Upload über die iOS-Erweiterung kommen Pfade in die Zwischenablage und warten auf ein verbundenes Pane für diesen Server. In Panes anderer Hosts werden sie nicht eingefügt.

## Praktische Tipps

- Nutze SFTP für gezielte Dateiverschiebungen; nutze Kommandozeilenwerkzeuge wie `rsync` auf dem Server für die Synchronisierung großer Verzeichnisse.
- Vermeide das Bearbeiten von Live-Produktionsdateien, sofern du kein Backup oder keinen Rollback-Pfad der Bereitstellung hast.
- Wenn eine Datei nach dem Hochladen nicht erscheint, aktualisiere den entfernten Bereich oder prüfe den Zielpfad.
- Bei leerem lokalen Android-Pane **Ordner wählen** nutzen. Unter iOS je nach Ziel **Lokalen Ordner wählen**, **App-Ordner verwenden** oder die Importauswahl verwenden.
