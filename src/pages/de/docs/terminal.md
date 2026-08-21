---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Terminalsteuerung von Mobile SSH, Zusatztasten, Bereiche, Scrollen, tmux-, herdr- und Zellij-Manager, Agenten-Benachrichtigungen, Kopieraktionen und Tastatureinstellungen."
---

# Terminal

Das Terminal von Mobile SSH ist für die Bedienung auf Telefon und Tablet gemacht. Es kombiniert eine Terminalfläche, eine Zusatztastenreihe, Mehrsitzungsbereiche, Scroll-Handling und Wiederverbindungsverhalten.

## Terminal-Grundlagen

- Das Terminal verhält sich im xterm-Stil, mit Farbunterstützung und Cursor-Tasten-Handling.
- Der Scrollback-Puffer hält standardmäßig 5000 Zeilen und lässt sich in den Einstellungen auf 1.000, 10.000 oder 50.000 setzen.
- Tippe auf einen Bereich, um ihn vor dem Tippen auszuwählen.
- Zoome einen Terminalbereich mit zwei Fingern, um die Textgröße zu ändern. Mobile SSH passt die Größe des entfernten PTY an, nachdem die Geste abgeschlossen ist.
- Doppeltippe auf einen Bereich (oder nutze sein Bedienelement zum Erweitern), um in den Vollbildmodus zu wechseln. Nutze Zurück auf Android oder das Bedienelement zum Einklappen auf iOS, um zum Raster zurückzukehren.

## Mehrsitzungsraster

Mobile SSH kann bis zu acht SSH-Sitzungen gleichzeitig ausführen. Jede Sitzung erscheint als Bereich im Terminalraster. Tippe auf einen Bereich, um ihn auszuwählen, oder nutze **+ Add Session**, um eine weitere Verbindung zu starten.

Die Bereichskopfzeile nennt, wo du gerade bist. Auf Android zeigt sie das tatsächliche Arbeitsverzeichnis des Bereichs, bei tmux erfragt oder von der Shell über OSC 7 gemeldet und aktualisiert, solange die App offen ist; auf iOS zeigt sie den Titel, den die Gegenstelle setzt, und fällt sonst auf `user@host:port` zurück.

Das Schließen eines Bereichs trennt diese SSH-Sitzung. Das Zurückgehen zum Startbildschirm hält aktive Sitzungen über **Active Sessions** verfügbar.

## Eternal Terminal (ET)

Jeder gespeicherte Server kann einen von zwei Transporten nutzen, gewählt über die Auswahl **Transport** beim Hinzufügen oder Bearbeiten eines Servers:

- **SSH** -- eine gewöhnliche SSH-Verbindung (die Vorgabe).
- **Eternal Terminal** -- eine ET-Sitzung, die Netzwerkausfälle, den Schlafmodus des Geräts und IP-Wechsel übersteht, ohne deine Shell neu zu starten.

ET hält die Sitzung auf dem Server am Leben, sodass Mobile SSH sich beim Netzwechsel oder Aufwachen des Telefons wieder an dieselbe laufende Shell hängt, statt eine neue zu öffnen. Das passt gut zu mobilen Daten, zum Wechsel zwischen WLAN und Mobilfunk und zu lang laufenden Befehlen.

ET benötigt einen `etserver`-Prozess auf dem Host. Hat der Server keinen, kann Mobile SSH ihn über die bestehende SSH-Verbindung für dich installieren und starten -- ganz ohne manuelle Servereinrichtung. Sobald ET verfügbar ist, verbinde dich mit ausgewähltem Transport **Eternal Terminal**.

## Zusatztastenreihe

Beide Plattformen bringen eine Reihe aus dreizehn Terminaltasten in Reichweite – jene, die auf einer Touch-Tastatur unpraktisch sind oder fehlen. Auf Android ist es ein Streifen am unteren Rand der Sitzung (der sich ausblendet, wenn eine Hardware-Tastatur angeschlossen ist); auf iOS sitzt er über der Bildschirmtastatur.

Die beiden Standardbelegungen sind gleich groß, aber nicht identisch:

| | Android | iOS |
|---|---|---|
| Standardbelegung | `ESC` `TAB` `CTRL` Pfeile `HOME` `PGUP` `END` `PGDN` `⌫` `⌨` | `ESC` `TAB` `CTRL` `⇧` Pfeile `HOME` `END` `PGUP` `PGDN` `⌨` |
| Unterschied | hat eine Rücktaste, kein Shift | hat ein klebriges Shift, keine Rücktaste |

**Die Reihe scrollt nie.** Sobald die Tasten nicht mehr in die Breite passen, teilen sie den Platz gleichmäßig auf und brechen in eine zweite Zeile um; was dann noch übrig ist, wandert in ein Überlaufmenü `⋯`. Nichts versteckt sich hinter einer Wischgeste oder wird am Bildschirmrand abgeschnitten, und ein scharfgeschalteter Modifikator wirkt auch auf eine Taste, die du aus dem Überlauf wählst.

`CTRL` wirkt als fester Modifikator: Tippe auf `CTRL` und dann auf `C`, um Strg-C zu senden. `Shift` ist auf iOS „klebriger“ als auf Android – auf iOS schreibt es auch das nächste Zeichen groß, das du auf der Bildschirmtastatur tippst, während es auf Android nur für die Tasten der Leiste selbst gilt (`Shift`+`Tab`, `Shift`+Pfeile).

Halte eine Taste wie einen Pfeil oder `PGDN` gedrückt, und sie wiederholt sich.

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
- Auf sowohl Android als auch iOS werden breite CJK-, Emoji- und kombinierende Zeichen (Graphem-Cluster und Zero-Width-Joiner) korrekt vermessen und gezeichnet, und eine mitgelieferte **Nerd Font** stellt Powerline-, Starship-, Devicon- und Material-Design-Icon-Glyphen dar, die die Systemschrift sonst als leere Kästchen zeigen würde.

## Shell-Integration und Inline-Bilder

- **Shell-Integration (OSC 133):** wenn deine Shell OSC-133-Prompt-Markierungen ausgibt, kann Mobile SSH von Prompt zu Prompt springen und dich benachrichtigen, wenn ein lang laufender Befehl fertig ist. Funktioniert auf Android und iOS. Keine der beiden Apps schleust die Markierungen ein – deine Shell muss sie ausgeben (ein `PROMPT_COMMAND`/`precmd`-Hook oder starship). Auf Android ist die Prompt-Navigation aus, bis du sie unter **Settings → Shell integration** aktivierst; auf iOS erscheint das Menü von selbst, sobald Markierungen eintreffen.
- **Ausgabe auswählen:** Berühre eine beliebige Stelle innerhalb der Ausgabe eines Befehls und wähle diesen ganzen Block aus – den Build-Fehler von vor 300 Zeilen, nicht nur den letzten Befehl – und kopiere, teile oder erweitere ihn dann.
- **Inline-Bilder:** Programme, die das Kitty-Grafikprotokoll verwenden, zeichnen Bilder direkt im Terminal, auf Android und iOS. Die Bilder überstehen Pinch-Zoom und Neuumbruch: Sie werden in Zellen vermessen und folgen ihrer Zeile, statt verworfen zu werden und eine Lücke zu hinterlassen. Sie gehören zum Hauptbildschirm und werden gelöscht, wenn eine Vollbild-TUI übernimmt.
- **Mosaikglyphen (Android):** Block-, Braille-, Sextanten- und Oktantenzeichen zeichnet die App selbst, statt sie von einer Schrift anzufordern, sodass `chafa`, `timg` und ANSI-Art das Raster exakt kacheln – keine Nähte, keine leeren Kästchen, egal welche Schrift du gewählt hast.
- **Echtes Arbeitsverzeichnis (Android):** Die Bereichskopfzeile zeigt, wo der Bereich tatsächlich steht, bei tmux erfragt oder von der Shell über OSC 7 gemeldet, statt dessen, was der letzte Prompt zufällig ausgegeben hat.

## Aussehen und Tasten

Auf sowohl Android als auch iOS kannst du das Terminal in den Einstellungen anpassen:

- **Schrift:** wähle die System-Monospace-Schrift, JetBrains Mono oder Source Code Pro.
- **Farbschema:** Standard, Solarized Dark oder Light, Gruvbox, Dracula oder Nord – live auf offene Bereiche angewendet.
- **Zusatztastenreihe:** Tasten hinzufügen, entfernen, neu anordnen und ausblenden, eigene Escape-Sequenz-Tasten definieren und auf die Standardwerte zurücksetzen, mit einer Live-Vorschau, die genau die Zeilenaufteilung zeigt, die du bekommst. Android legt das auf einen Reiter **Keys**; iOS unter **Extra keys → Customize keys**.
- **Aus Vorlagen hinzufügen:** eine Palette von rund 45 Tasten in sechs Gruppen – `F1`–`F12`, Ctrl-Kombinationen wie `^C` `^D` `^Z` `^R` `^L`, Symbole wie `|` `~` `/` `_` `:` und Modifikatoren. `F1`–`F12` werden als gewöhnliche Escape-Sequenzen gesendet und brauchen daher keine `FN`-Kombination. Android bietet zusätzlich eine Taste 📎 **Attach a file**, die die Dateiauswahl öffnet und in die laufende Sitzung hochlädt; iOS bietet `INS`, `DEL` und eine `FN`-Taste, die eine Ziffernreihe einblendet.
- **Scrollback-Größe:** 1.000, 5.000, 10.000 oder 50.000 Zeilen (standardmäßig 5.000). Gilt für neue Bereiche.
- **Textgröße:** ein Schieberegler, ergänzend zum Pinch-Zoom.
- **Design:** System, Hell oder Dunkel für die gesamte App.

Das Zurücksetzen stellt die ausgelieferten Standardwerte wieder her, statt die heutige Liste einzufrieren, sodass dich auch die Verbesserungen einer späteren Version erreichen. Änderungen wirken live auf bereits geöffnete Bereiche.

## Scrollen

Mobile SSH leitet Scroll-Gesten je nach Terminalzustand:

- Bei normaler Shell-Ausgabe scrollt das Wischen den lokalen Scrollback-Puffer.
- In Terminal-Apps mit Maus-Modus sendet das Scrollen Mausrad-Escape-Sequenzen.
- In Apps mit alternativem Bildschirm ohne Maus-Modus, etwa vielen tmux-Sitzungen, wechselt das Scrollen in den tmux-Kopiermodus und sendet zeilenweise Scroll-Befehle.

Auf Android wird ein Tippen innerhalb eines Programms mit Maus-Tracking als Linksklick auf dieser Zelle zugestellt, sodass htop, vim und Bereiche mit Klick-Fokus auf Berührung reagieren. Auf iOS blendet ein Tippen im selben Programm die Tastatur ein, statt zu klicken; gemeldet wird dort nur das Rad-Scrollen.

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

## Tmux-Manager

Mobile SSH bringt einen tmux-Manager mit, damit du tmux durchsuchen und steuern kannst, ohne Prefix-Tastenfolgen zu tippen. Öffne ihn aus einer verbundenen Sitzung über die Schaltfläche **Tmux**. Er listet in drei Abschnitten:

- **Sessions** -- jede tmux-Sitzung auf dem Server.
- **Windows** -- Fenster in der ausgewählten Sitzung.
- **Panes** -- Bereiche im ausgewählten Fenster.

Aus dem Manager heraus kannst du:

- Eine Sitzung an das aktuelle Terminal **anhängen**.
- Eine neue Sitzung oder ein neues Fenster **erstellen** und beide **umbenennen**.
- Einen Bereich waagerecht oder senkrecht **teilen**, einen Bereich **zoomen** und Sitzungen, Fenster oder Bereiche **beenden**.
- Sitzungen nach Name oder Erstellungsdatum **sortieren**.

Ein 🔔 markiert jede Sitzung, deren Agent auf Eingabe wartet, sodass du einen pausierten Lauf von Claude Code oder Codex auf einen Blick erkennst und dich daran hängen kannst. Das ergänzt die Reattach-Hinweise weiter oben: Die Reattach-Logik stellt deine letzte Sitzung beim Wiederverbinden automatisch wieder her, während dir der Manager die volle manuelle Kontrolle gibt.

Beide Plattformen können außerdem mehr als einen tmux-Server (Socket) auf demselben Host verwalten und Sitzungen nach Name oder Erstellungsdatum sortieren.

## Herdr und Zellij (Android)

Android liefert dieselbe Idee für zwei weitere Multiplexer. Jeder bekommt sein eigenes Symbol in der Symbolleiste, und **ein Symbol erscheint erst, wenn die App das Programm tatsächlich auf dem Server gefunden hat** – so verrät dir die Symbolleiste, was dort installiert ist, ohne dass du `which` ausführst.

- **Herdr** nutzt sein eigenes Vokabular: Sessions, Workspaces, Tabs, Panes. Jeder Bereich zeigt den Status seines Agenten – arbeitet, braucht dich, untätig –, und ein blockierter Agent lässt sich direkt aus der Liste beantworten. Herdrs eigener Status speist den Agenten-Zähler der App, das funktioniert also ganz ohne auf dem Server installierten Hook.
- **Zellij** listet Sitzungen, Tabs und Bereiche mit Anhängen, Umbenennen, Beenden und Teilen. Beendete Sitzungen bleiben gelistet, sodass ein Anhängen sie wiederbelebt, während Löschen sie endgültig vergisst. Details zu Tabs und Bereichen brauchen Zellij 0.44 oder neuer; auf einer älteren Version zeigt die Seite Tab-Namen und nennt den Grund. Teilen setzt einen an der Sitzung hängenden Client voraus, und die Seite erklärt das, statt eine Schaltfläche anzubieten, die scheitern würde.

Ist herdr oder Zellij installiert, aber nicht im `PATH` der Login-Shell, bietet die Seite an, es zu ergänzen.

Jeder gespeicherte Server hat eine Einstellung **Attach on connect**: **Auto (detect)**, **Nothing**, **tmux**, **herdr** oder **Zellij**. Auto wählt zuerst das, was du auf diesem Server zuletzt benutzt hast, dann das mit laufenden Sitzungen, dann das Installierte – und hängt lieber nichts an, als zu raten, solange es den Server noch nicht geprüft hat.

Die iOS-App unterstützt heute ausschließlich tmux.

## Agent alerts

Mobile SSH sagt dir, wenn ein entfernter KI-Coding-Agent – Claude Code, Codex, Gemini – blockiert ist und auf dich wartet. Es rät das nicht, indem es deine Terminalausgabe liest. Es gibt zwei Wege, und sie arbeiten mit unterschiedlichem Detailgrad.

### Die Glocke

Von Haus aus löst eine Terminalglocke aus einer Sitzung, die du gerade nicht ansiehst, eine Benachrichtigung aus, ebenso die Escape-Sequenzen für Desktop-Benachrichtigungen (OSC 9, OSC 777), die viele Werkzeuge ohnehin ausgeben. Glocken, die unmittelbar nach deiner Eingabe eintreffen, werden ignoriert, damit gewöhnliches Geräusch der Shell-Vervollständigung dich nicht anpiept.

Das braucht keine Einrichtung, aber die App weiß dann nur, dass *irgendetwas* geläutet hat.

### Der Agenten-Hook

Damit die App weiß, *welcher* Agent wartet und *woran* er arbeitet, installiere den Agenten-Hook auf dem Server:

- **iOS:** Settings → **Agent alerts** → **Install Agent Hook**. Ist mehr als ein Server verbunden, fragt die App, welcher.
- **Android:** Halte die Bereichskopfzeile einer Sitzung gedrückt und wähle **Install agent hooks**.

Das schreibt ein kleines Shell-Skript nach `~/.mobile-ssh/agent-hook.sh` auf diesem Server. Es ist agentenunabhängig – es nimmt Kommandozeilenargumente entgegen, statt das Format eines bestimmten Anbieters zu zerlegen –, sodass alles, was einen Befehl ausführen kann, darüber melden kann. Das Löschen der Datei ist eine saubere Deinstallation.

Sobald ein Agent über den Hook meldet:

- Die Kopfzeile des Bereichs liest `claude · needs you` oder nennt das Werkzeug, das gerade läuft.
- Ein Bereich, dessen Agent blockiert ist, erhält einen bernsteinfarbenen Rahmen. Der Bereich, den du gerade ansiehst, bleibt unangetastet – die Rückfrage steht ja direkt vor dir.
- Ein Zähler in der Symbolleiste zählt die wartenden Agenten über alle Verbindungen hinweg, gedeckelt bei `9+`.
- Der Bildschirm **Agents** listet jeden Agenten auf jeder Verbindung auf, samt dem, was er tut, und wie lange er schon wartet.

### Antworten ohne zu tippen

Wenn ein Agent eine Frage mit einer festen Antwortmenge stellt, zeigt die App in der Agenten-Liste eine Schaltfläche pro Option – bis zu sechs. Auf Android kannst du auch den Agenten-Chip in einer Bereichskopfzeile antippen.

Deine Antwort wird nicht in die Sitzung getippt. Sie wird über einen eigenen Kanal in eine Datei geschrieben und vom Hook abgeholt, sodass das Antworten nicht zerstören kann, was auf dem Bildschirm steht. Die App weigert sich, eine Option zu senden, die die Rückfrage gar nicht angeboten hat, und sagt dir klar, wenn die Verbindung inzwischen abgebrochen ist, statt still zu scheitern.

### Einstellungen

Die Benachrichtigungen sind auf beiden Plattformen standardmäßig aktiv, mit einzelnen Schaltern für Benachrichtigung, Ton, Vibration und dafür, ob auch die gerade angesehene Sitzung melden soll.

Eine Voreinstellung ist wichtig zu kennen: **Der Ton ist auf Kopfhörer beschränkt.** Ist nichts eingesteckt oder gekoppelt, benachrichtigt und vibriert ein Alarm, spielt aber keinen Ton. Schalte das ab, wenn du den Alarm über den Telefonlautsprecher hören willst.

Es gibt keine Empfindlichkeitseinstellung und keine Tonauswahl – die Bedienelemente sind an/aus.

## Vollbild-Terminalprogramme

Für Programme wie Vim, less, htop, ncurses-Tools und tmux-Bereiche:

- Die Eingabe wird direkt an das Programm durchgereicht – es gibt keine Autokorrektur und keinen Vorschlagspuffer, der stören könnte.
- Nutze die Zusatztastenreihe für `ESC`, Pfeile, `PGUP` und `PGDN`.
- Nutze den Pinch-Zoom, wenn der Text zu klein ist, und warte dann kurz, bis sich die entfernte Terminalgröße einpendelt.
