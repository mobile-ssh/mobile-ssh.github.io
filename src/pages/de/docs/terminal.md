---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Mobile-SSH-Terminalsteuerung, Tastatur, tmux-, herdr- und Zellij-Verwaltung, Agentenalarme, Zwischenablage, Bilder und entfernte Desktops."
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

Ein geschlossenes Pane trennt seine SSH-Sitzung. Auf der Startseite bleiben laufende Verbindungen über **Aktive Sitzungen** erreichbar. Die Kopfzeile zeigt hängende Verbindungen; Einstellungen bieten Übertragungsraten sowie optionales Abdunkeln oder Vibrieren, wenn die Verbindung nicht antwortet.

## Eternal Terminal (ET)

Beide Plattformen bieten beim Anlegen oder Bearbeiten eines Servers unter **Transport** diese Verbindungsarten:

- **SSH** -- eine gewöhnliche SSH-Verbindung (die Vorgabe).
- **Eternal Terminal** -- eine ET-Sitzung, die Netzwerkausfälle, den Schlafmodus des Geräts und IP-Wechsel übersteht, ohne deine Shell neu zu starten.

ET hält die Sitzung auf dem Server am Leben, sodass Mobile SSH sich beim Netzwechsel oder Aufwachen des Telefons wieder an dieselbe laufende Shell hängt, statt eine neue zu öffnen. Das passt gut zu mobilen Daten, zum Wechsel zwischen WLAN und Mobilfunk und zu lang laufenden Befehlen.

ET benötigt `etserver` auf dem Host. Fehlt es, kann Mobile SSH Installation und Start über SSH anbieten. Prüfe und bestätige die Befehle und verbinde dann mit **Eternal Terminal**. Routen über Sprungserver erfordern **SSH**.

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

Unter Android geht normales Tippen direkt an die entfernte Shell; Autokorrektur und Wortvorschläge sind standardmäßig aus. Spracheingabe kann weiterhin Text über die Tastatur senden.

Unter iOS ist **Einstellungen → Terminal → Diktat und Vorschläge** standardmäßig an: Diktat, Vorhersagen und Korrekturen funktionieren beim Schreiben einer Zeile. Für direkte Tasteneingaben schalte dies und **Tastaturvorschläge** aus und öffne ein neues Pane.

**Tastatur beim Tippen anzeigen** steuert, ob Antippen die Bildschirmtastatur öffnet. Standardmäßig aus unter Android, an unter iOS; die Tastaturschaltfläche bleibt verfügbar.

## Hardware-Tastaturen

Externe und Bluetooth-Tastaturen steuern das Terminal direkt, sowohl auf Android als auch auf iOS. Über gewöhnliche Zeichen hinaus bildet Mobile SSH Pfeiltasten, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, die Funktionstasten `F1`–`F12`, `Ctrl`+Taste und `Alt`/`Option`-als-Meta-Tastenkombinationen sowie `Shift`+`Tab` ab. Modifikatortasten lassen sich mit den festen Modifikatoren der Zusatztastenreihe kombinieren.

## Einfügen

Das Einfügen in ein Programm, das es anfordert (bash, Vim und andere Bracketed-Paste-Apps), wird in Bracketed-Paste-Markierungen eingeschlossen, sodass mehrzeiliger Zwischenablage-Inhalt als Text eingefügt statt Zeile für Zeile automatisch ausgeführt wird. Nur echte Einfügevorgänge werden eingeschlossen; getippter und diktierter Text bleibt unberührt.

## Auswählen, kopieren, teilen

Drücke lange auf ein Wort im Terminal und passe die Auswahl über die Griffe an. Die Auswahlleiste enthält:

- **Copy** -- legt den ausgewählten Text in die System-Zwischenablage. Die Auswahl bleibt danach hervorgehoben, sodass du sie teilen, erneut kopieren oder erweitern kannst.
- **Share** -- übergibt den ausgewählten Text an das System-Teilen-Menü (Mail, Notizen, Messaging usw.).
- **Select all** -- erweitert die Auswahl auf den gesamten sichtbaren Terminalpuffer, danach Copy oder Share.
- **Einfügen**: Text aus der Zwischenablage ins Terminal einfügen.

## Im Terminal suchen

Durchsuche den gesamten Terminalpuffer – den Scrollback und den sichtbaren Bildschirm – und springe zwischen den Treffern. Öffne die Suche über die Terminalsteuerung, gib eine Suchanfrage ein und gehe die Treffer durch. Das funktioniert sowohl auf Android als auch auf iOS.

## Farbe, Kursivschrift und entfernte Zwischenablage

- Das Terminal stellt **24-bit True Color** und **Kursivschrift** dar, sodass gestylte Prompts, Syntaxhervorhebung und TUIs so aussehen wie auf dem Desktop.
- **OSC-52-Zwischenablage:** entfernte Programme können Text aufs Telefon kopieren. Das Lesen seiner Zwischenablage erfordert eine eigene Freigabe, die standardmäßig aus ist.
- Auf sowohl Android als auch iOS werden breite CJK-, Emoji- und kombinierende Zeichen (Graphem-Cluster und Zero-Width-Joiner) korrekt vermessen und gezeichnet, und eine mitgelieferte **Nerd Font** stellt Powerline-, Starship-, Devicon- und Material-Design-Icon-Glyphen dar, die die Systemschrift sonst als leere Kästchen zeigen würde.

## Shell-Integration und Inline-Bilder

- **Shell-Integration (OSC 133):** wenn deine Shell OSC-133-Prompt-Markierungen ausgibt, kann Mobile SSH von Prompt zu Prompt springen und dich benachrichtigen, wenn ein lang laufender Befehl fertig ist. Funktioniert auf Android und iOS. Keine der beiden Apps schleust die Markierungen ein – deine Shell muss sie ausgeben (ein `PROMPT_COMMAND`/`precmd`-Hook oder starship). Auf Android ist die Prompt-Navigation aus, bis du sie unter **Settings → Shell integration** aktivierst; auf iOS erscheint das Menü von selbst, sobald Markierungen eintreffen.
- **Ausgabe auswählen:** Berühre eine beliebige Stelle innerhalb der Ausgabe eines Befehls und wähle diesen ganzen Block aus – den Build-Fehler von vor 300 Zeilen, nicht nur den letzten Befehl – und kopiere, teile oder erweitere ihn dann.
- **Eingebettete Bilder:** Kitty-Programme zeigen Bilder im Terminal beider Plattformen. Sie folgen Zellen und Zeilen und überstehen Zoom und Zeilenumbruch. Sie erscheinen auch in Vollbildprogrammen, mit getrennten Platzierungen vom normalen Verlauf.
- **Mosaikglyphen:** die App zeichnet Blöcke, Braille, Sextanten und Oktanten selbst; `chafa`, `timg` und ANSI-Kunst füllen das Raster ohne Lücken oder leere Kästchen, unabhängig von der Schrift.
- **Bildauflösung:** die Einstellung Bilder meldet volle, halbe oder ein Drittel der Displayauflösung an Programme und reduziert so die übertragenen Pixel im Mobilfunk.
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

Auf beiden Plattformen sendet Antippen in Programmen mit Mausverfolgung normalerweise einen Linksklick. Unter iOS tauscht **Tippen setzt den Cursor** dies mit Cursorbewegung; Umschalt-Tippen führt die andere Aktion aus. Gedrückthalten und Ziehen als Mauseingabe ist standardmäßig aus, sodass normales Wischen scrollt.

Wenn du tippst, während du zurückgescrollt hast, kehrt Mobile SSH zur Live-Ansicht des Terminals zurück.

## tmux-Verhalten

Mobile SSH beobachtet ausgehende tmux-Befehle für Attach und neue Sitzung, etwa:

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Nach einem Verbindungsabbruch merkt sich die App tmux-Sitzung und Socket für die Wiederverbindung. Jedes Pane auf demselben Host behält seine eigene Zuordnung. Existiert die Sitzung nicht mehr, bleibt die Shell verfügbar.

Unter iOS liest ein Socketwechsel das aktuelle tmux-Präfix, statt Ctrl+B anzunehmen. Nicht unterstützte Präfixe oder fehlgeschlagene Abfragen stoppen mit einer Meldung. Tippen, Schließen oder Trennen verwirft ausstehende Attach-Schritte; unbekannte Vollbildprogramme erhalten keine Attach-Befehle.

## Tmux-Manager

Der tmux-Manager steuert tmux ohne Präfixkombinationen. Öffne ihn über die Multiplexer-Schaltfläche einer verbundenen Sitzung; langes Drücken wählt tmux, wenn mehrere Manager verfügbar sind. Er zeigt drei Bereiche:

- **Sessions** -- jede tmux-Sitzung auf dem Server.
- **Windows** -- Fenster in der ausgewählten Sitzung.
- **Panes** -- Bereiche im ausgewählten Fenster.

Aus dem Manager heraus kannst du:

- Eine Sitzung an das aktuelle Terminal **anhängen**.
- Eine neue Sitzung oder ein neues Fenster **erstellen** und beide **umbenennen**.
- Einen Bereich waagerecht oder senkrecht **teilen**, einen Bereich **zoomen** und Sitzungen, Fenster oder Bereiche **beenden**.
- Sitzungen nach Zuletzt verwendet (Standard), Name oder Erstellungsdatum **sortieren**.

Ein 🔔 markiert jede Sitzung, deren Agent auf Eingabe wartet, sodass du einen pausierten Lauf von Claude Code oder Codex auf einen Blick erkennst und dich daran hängen kannst. Das ergänzt die Reattach-Hinweise weiter oben: Die Reattach-Logik stellt deine letzte Sitzung beim Wiederverbinden automatisch wieder her, während dir der Manager die volle manuelle Kontrolle gibt.

Beide Plattformen verwalten mehrere tmux-Server (Sockets) auf einem Host. Attach-Anzeigen beziehen sich auf dein Terminal, nicht auf einen anderen Client am Server.

## Herdr und Zellij

Android und iOS verwalten auch Herdr und Zellij. Eine Schaltfläche öffnet den bevorzugten erkannten Multiplexer; langes Drücken wählt einen anderen. Nur erkannte Programme stehen zur Wahl. Im Manager wechselt der Servertitel den Server und die Multiplexer-Auswahl den Manager.

- **Herdr** zeigt Sitzungen, Arbeitsbereiche, Tabs und Panes mit Agentenstatus. Vorschau und Antworten sind direkt in der Liste möglich. Antworten bleiben beim ausgewählten Pane und der benannten Sitzung; **Senden** übermittelt Text, **Nur Enter** eine leere Bestätigung. Exakter Pane-Fokus wird angeboten, wenn unterstützt; sonst nutze Fokus am übergeordneten Tab. Herdr liefert den Status ohne zusätzlichen Hook.
- **Zellij** listet Sitzungen, Tabs und Bereiche mit Anhängen, Umbenennen, Beenden und Teilen. Beendete Sitzungen bleiben gelistet, sodass ein Anhängen sie wiederbelebt, während Löschen sie endgültig vergisst. Details zu Tabs und Bereichen brauchen Zellij 0.44 oder neuer; auf einer älteren Version zeigt die Seite Tab-Namen und nennt den Grund. Teilen setzt einen an der Sitzung hängenden Client voraus, und die Seite erklärt das, statt eine Schaltfläche anzubieten, die scheitern würde.

Ist herdr oder Zellij installiert, aber nicht im `PATH` der Login-Shell, bietet die Seite an, es zu ergänzen.

Jeder Server bietet **Beim Verbinden anhängen**: **Auto (erkennen)**, **Nichts**, **tmux**, **herdr** oder **Zellij**. Auto nutzt Erkennung und Verlauf: zuvor verwendeter Multiplexer, dann einer mit laufenden Sitzungen, dann ein installierter. Ohne gespeicherte Erkennung öffnet sich eine normale Shell. Spätere Erkennung wirkt erst auf künftige Verbindungen und unterbricht keine Eingaben.

## Agent alerts

Mobile SSH sagt dir, wenn ein entfernter KI-Coding-Agent – Claude Code, Codex, Gemini – blockiert ist und auf dich wartet. Es rät das nicht, indem es deine Terminalausgabe liest. Es gibt zwei Wege, und sie arbeiten mit unterschiedlichem Detailgrad.

### Die Glocke

Terminalglocken können Agentenalarme auslösen. Unmittelbar nach dem Tippen werden sie standardmäßig ignoriert. Entfernte Meldungen OSC 9/OSC 777 und OSC-133-Befehlsabschluss haben eigene Einstellungen; unter iOS sind beide zunächst aus.

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

Agentenalarme sind auf beiden Plattformen standardmäßig an, mit Schaltern für Benachrichtigung, Ton, Vibration und aktives Pane. Unter iOS sind auch Alarme fürs aktive Pane an; optional kommen sie nur im Hintergrund. Das funktioniert nur, solange iOS die App ausführen lässt; längere Unterbrechung beendet laufende SSH-Alarme.

Eine Voreinstellung ist wichtig zu kennen: **Der Ton ist auf Kopfhörer beschränkt.** Ist nichts eingesteckt oder gekoppelt, benachrichtigt und vibriert ein Alarm, spielt aber keinen Ton. Schalte das ab, wenn du den Alarm über den Telefonlautsprecher hören willst.

Es gibt keine Empfindlichkeitseinstellung und keine Tonauswahl – die Bedienelemente sind an/aus.

## Vollbild-Terminalprogramme

Für Programme wie Vim, less, htop, ncurses-Tools und tmux-Bereiche:

- Für direkte Eingabe unter iOS **Diktat und Vorschläge** sowie **Tastaturvorschläge** ausschalten und ein neues Pane öffnen.
- Nutze die Zusatztastenreihe für `ESC`, Pfeile, `PGUP` und `PGDN`.
- Nutze den Pinch-Zoom, wenn der Text zu klein ist, und warte dann kurz, bis sich die entfernte Terminalgröße einpendelt.

## Entfernte Desktops

Beide Plattformen öffnen entfernte Desktops per VNC durch SSH. Nutze eine vorhandene Bildschirmfreigabe, auch macOS, oder bestätige die Einrichtung eines unterstützten Linux-Desktops. Der Server muss den Desktop bereitstellen; SSH allein erzeugt keine grafische Sitzung. Linux-Spiegelung benötigt X11 statt Wayland; macOS teilt den vorhandenen Bildschirm und erzeugt keinen privaten Desktop.

Berührung erlaubt Klicken, Ziehen und Zoom; tippe mit Bildschirm- oder Hardwaretastatur. Über die Zwischenablage fügst du Telefontext im Desktop ein und kopierst Desktoptext zurück aufs Telefon.

**Bildschirmgröße** bietet Vorgaben und eigene Abmessungen, die pro Server gespeichert werden. Unter iOS muss jede Seite 320 bis 5120 Pixel messen. Live-Anpassung erhält Programme, wenn der Server sie unterstützt. Ein Neustart erfordert Bestätigung und wird nur für von der App erstellte private Desktops angeboten. Wiederverwendete Desktops und geteilte Konsolen werden dafür nicht neu gestartet; ändere die Mac-Auflösung unter Displays, falls Live-Anpassung fehlt.
