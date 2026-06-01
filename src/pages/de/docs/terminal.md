---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Terminalsteuerung von Mobile SSH, Zusatztasten, Bereiche, Scrollen, tmux-Verhalten, Kopieraktionen und Tastatureinstellungen."
---

# Terminal

Das Terminal von Mobile SSH ist für die Bedienung auf Telefon und Tablet gemacht. Es kombiniert eine Terminalfläche, eine Zusatztastenreihe, Mehrsitzungsbereiche, Scroll-Handling und Wiederverbindungsverhalten.

## Terminal-Grundlagen

- Das Terminal verhält sich im xterm-Stil, mit Farbunterstützung und Cursor-Tasten-Handling.
- Der Scrollback-Puffer hält bis zu 5000 Zeilen.
- Tippe auf einen Bereich, um ihn vor dem Tippen auszuwählen.
- Zoome einen Terminalbereich mit zwei Fingern, um die Textgröße zu ändern. Mobile SSH passt die Größe des entfernten PTY an, nachdem die Geste abgeschlossen ist.
- Doppeltippe auf einen Bereich, um in den Vollbildmodus zu wechseln. Nutze Zurück, um zum Raster zurückzukehren.

## Mehrsitzungsraster

Mobile SSH kann bis zu acht SSH-Sitzungen gleichzeitig ausführen. Jede Sitzung erscheint als Bereich im Terminalraster. Die Bereichskopfzeile zeigt das aktuelle Ziel oder den Titel. Tippe auf einen Bereich, um ihn auszuwählen, oder nutze **+ Sitzung hinzufügen**, um eine weitere Verbindung zu starten.

Das Schließen eines Bereichs trennt diese SSH-Sitzung. Das Zurückgehen zum Startbildschirm hält aktive Sitzungen über **Aktive Sitzungen** verfügbar.

## Zusatztastenreihe

Die Zusatztastenreihe erscheint über der Android-Tastatur und bietet Terminaltasten, die auf Touch-Tastaturen unpraktisch sind:

- `ESC`
- `TAB`
- `CTRL`
- `Shift`
- Pfeiltasten
- `HOME`
- `END`
- `PGUP`
- `PGDN`
- Tastatur umschalten

`CTRL` und `Shift` wirken als feste Modifikatoren für die nächste kompatible Eingabe. Tippe zum Beispiel auf `CTRL` und dann auf `C`, um Strg-C zu senden.

## Tastaturverhalten

Mobile SSH hat zwei tastaturbezogene Einstellungen:

- **Terminal antippen, um die Tastatur anzuzeigen:** wenn aktiviert, bittet ein Tippen auf das Terminal Android, die Eingabemethode anzuzeigen.
- **Tastaturvorschläge:** wenn aktiviert, können kompatible Tastaturen Vorschläge an Shell-Prompts anzeigen. Deaktiviere dies, wenn Vorschläge Terminalprogramme stören.

Wenn Vorschläge aktiviert sind, puffert Mobile SSH den in Komposition befindlichen Text bis zu einer Wortgrenze, damit die Tastaturkorrektur das aktuelle Wort ersetzen kann, bevor es an die entfernte Shell gesendet wird. Steuertasten und Terminal-Tastenfolgen umgehen diesen Puffer, sodass Kürzel wie tmux-Präfixbefehle prompt ankommen.

Die Spracheingabe (die Mikrofontaste von Gboard) läuft durch denselben Kompositionspuffer, sodass diktierter Text gesendet wird, sobald er erkannt ist, und nicht Zeichen für Zeichen.

## Auswählen, kopieren, teilen

Halte im Terminal gedrückt, um in den Auswahlmodus zu wechseln. Die Auswahlleiste bietet drei Aktionen:

- **Kopieren** — legt den ausgewählten Text in die Android-Zwischenablage.
- **Teilen** — übergibt den ausgewählten Text an das Android-Teilen-Menü (Mail, Notizen, Messaging usw.).
- **Alles auswählen** — erweitert die Auswahl auf den gesamten sichtbaren Terminalpuffer, dann Kopieren oder Teilen.

## Scrollen

Mobile SSH leitet Scroll-Gesten je nach Terminalzustand:

- Bei normaler Shell-Ausgabe scrollt das Wischen den lokalen Scrollback-Puffer.
- In Terminal-Apps mit Maus-Modus sendet das Scrollen Mausrad-Escape-Sequenzen.
- In Apps mit alternativem Bildschirm ohne Maus-Modus, etwa vielen tmux-Sitzungen, wechselt das Scrollen in den tmux-Kopiermodus und sendet zeilenweise Scroll-Befehle.

Wenn du tippst, während du zurückgescrollt hast, kehrt Mobile SSH zur Live-Ansicht des Terminals zurück.

## tmux-Verhalten

Mobile SSH beobachtet ausgehende tmux-Befehle für Attach und neue Sitzung, etwa:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Wenn eine Verbindung abbricht, während du in tmux warst, kann sich die App den Namen der letzten tmux-Sitzung für diesen Server merken und nach der Wiederverbindung versuchen, sich erneut anzuhängen. Wenn kein expliziter Sitzungsname beobachtet wurde, die App aber weiß, dass du in einer tmux-ähnlichen Sitzung mit alternativem Bildschirm warst, kann sie ein generisches `tmux attach` versuchen.

Dieses Verhalten erfolgt nach bestem Bemühen. Wenn die entfernte tmux-Sitzung nicht mehr existiert, bleibt die entfernte Shell verfügbar.

## Vollbild-Terminalprogramme

Für Programme wie Vim, less, htop, ncurses-Tools und tmux-Bereiche:

- Deaktiviere Tastaturvorschläge, wenn die Tastatur beginnt, die Eingabe auf eine Weise zu puffern, die das Programm nicht erwartet.
- Nutze die Zusatztastenreihe für `ESC`, Pfeile, `PGUP` und `PGDN`.
- Nutze den Pinch-Zoom, wenn der Text zu klein ist, und warte dann kurz, bis sich die entfernte Terminalgröße einpendelt.
