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
- Doppeltippe auf einen Bereich (oder nutze sein Bedienelement zum Erweitern), um in den Vollbildmodus zu wechseln. Nutze Zurück auf Android oder das Bedienelement zum Einklappen auf iOS, um zum Raster zurückzukehren.

## Mehrsitzungsraster

Mobile SSH kann bis zu acht SSH-Sitzungen gleichzeitig ausführen. Jede Sitzung erscheint als Bereich im Terminalraster. Die Bereichskopfzeile zeigt das aktuelle Ziel oder den Titel. Tippe auf einen Bereich, um ihn auszuwählen, oder nutze **+ Add Session**, um eine weitere Verbindung zu starten.

Das Schließen eines Bereichs trennt diese SSH-Sitzung. Das Zurückgehen zum Startbildschirm hält aktive Sitzungen über **Active Sessions** verfügbar.

## Zusatztastenreihe

Sowohl auf Android als auch auf iOS erscheint die Zusatztastenreihe über der Bildschirmtastatur und bietet Terminaltasten, die auf Touch-Tastaturen unpraktisch sind:

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

Das Terminal nutzt eine native durchgereichte Verbindung zur Bildschirmtastatur: Jedes Zeichen wird während des Tippens an die entfernte Shell gesendet, wobei Autokorrektur und Vorschläge deaktiviert sind, sodass die Tastatur die Eingabe niemals umschreibt, bevor sie die Shell erreicht. Das hält Vim, tmux, htop, less, Shells mit ungewöhnlichen Tastenfolgen und entfernte Passwortabfragen vorhersehbar – es gibt keinen Vorschlagspuffer, den man deaktivieren müsste.

- **Terminal antippen, um die Tastatur anzuzeigen:** wenn aktiviert, bittet ein Tippen auf das Terminal das System, die Bildschirmtastatur anzuzeigen.

Die Spracheingabe der Bildschirmtastatur funktioniert weiterhin: Der diktierte Text wird wie jede andere getippte Eingabe direkt an die Shell übergeben.

## Hardware-Tastaturen

Externe und Bluetooth-Tastaturen steuern das Terminal direkt, sowohl auf Android als auch auf iOS. Über gewöhnliche Zeichen hinaus bildet Mobile SSH Pfeiltasten, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, die Funktionstasten `F1`–`F12`, `Ctrl`+Taste und `Alt`/`Option`-als-Meta-Tastenkombinationen sowie `Shift`+`Tab` ab. Modifikatortasten lassen sich mit den festen Modifikatoren der Zusatztastenreihe kombinieren.

## Einfügen

Das Einfügen in ein Programm, das es anfordert (bash, Vim und andere Bracketed-Paste-Apps), wird in Bracketed-Paste-Markierungen eingeschlossen, sodass mehrzeiliger Zwischenablage-Inhalt als Text eingefügt statt Zeile für Zeile automatisch ausgeführt wird. Nur echte Einfügevorgänge werden eingeschlossen; getippter und diktierter Text bleibt unberührt.

## Auswählen, kopieren, teilen

Halte im Terminal gedrückt, um das Wort unter deinem Finger auszuwählen, und ziehe dann die Griffe, um die Auswahl anzupassen. Die Auswahlleiste bietet drei Aktionen:

- **Copy** -- legt den ausgewählten Text in die System-Zwischenablage. Die Auswahl bleibt danach hervorgehoben, sodass du sie teilen, erneut kopieren oder erweitern kannst.
- **Share** -- übergibt den ausgewählten Text an das System-Teilen-Menü (Mail, Notizen, Messaging usw.).
- **Select all** -- erweitert die Auswahl auf den gesamten sichtbaren Terminalpuffer, danach Copy oder Share.

## Im Terminal suchen

Durchsuche den gesamten Terminalpuffer – den Scrollback und den sichtbaren Bildschirm – und springe zwischen den Treffern. Öffne die Suche über die Terminalsteuerung, gib eine Suchanfrage ein und gehe die Treffer durch. Das funktioniert sowohl auf Android als auch auf iOS.

## Farbe, Kursivschrift und entfernte Zwischenablage

- Das Terminal stellt **24-bit True Color** und **Kursivschrift** dar, sodass gestylte Prompts, Syntaxhervorhebung und TUIs so aussehen wie auf dem Desktop.
- **OSC 52-Zwischenablage:** wenn ein entferntes Programm Text kopiert (tmux `set-clipboard`, ein OSC-52-Yank in Vim/Neovim), landet er in der Zwischenablage deines Telefons – so kannst du auf dem Server kopieren und in eine lokale App einfügen.
- Auf Android stellt eine mitgelieferte **Nerd Font** Powerline-, Starship-, Devicon- und Material-Design-Icon-Glyphen dar, die die Systemschrift sonst als leere Kästchen zeigen würde, und breite CJK-, Emoji- und kombinierende Zeichen werden korrekt vermessen.

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

## Agent alerts

Mobile SSH kann die Terminalausgabe der aktiven Sitzung auf Muster überwachen, die darauf hinweisen, dass ein entfernter Agent auf eine Eingabe wartet. Wenn ein Treffer erkannt wird — zum Beispiel wenn Claude Code oder Codex auf eine Eingabe pausiert — sendet die App eine Benachrichtigung mit optionalem Ton und Vibration.

Zum Einrichten:

1. Öffne **Settings** vom Startbildschirm.
2. Aktiviere **Agent alerts**.
3. Wähle einen Benachrichtigungston und ein Vibrationsmuster.

Der Alarm wird über den jeweils aktiven Audioausgang abgespielt, einschließlich Kopfhörer, sodass du ihn hören kannst, während du ein Video schaust oder das Telefon gesperrt ist. Die Benachrichtigung erscheint auch dann, wenn Mobile SSH im Hintergrund läuft.

Agent-Alert-Muster werden mit der sichtbaren Terminalausgabe abgeglichen. Wenn dein entferntes Tool eine erkennbare Prompt-Zeile ausgibt (einen Benutzernamen, ein `?`, eine Frage in eckigen Klammern), kann die App sie automatisch erkennen. Wenn Alerts zu oft oder gar nicht ausgelöst werden, passe die Empfindlichkeit in den Settings an.

## Vollbild-Terminalprogramme

Für Programme wie Vim, less, htop, ncurses-Tools und tmux-Bereiche:

- Die Eingabe wird direkt an das Programm durchgereicht – es gibt keine Autokorrektur und keinen Vorschlagspuffer, der stören könnte.
- Nutze die Zusatztastenreihe für `ESC`, Pfeile, `PGUP` und `PGDN`.
- Nutze den Pinch-Zoom, wenn der Text zu klein ist, und warte dann kurz, bis sich die entfernte Terminalgröße einpendelt.
