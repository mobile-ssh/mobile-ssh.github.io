import type { LaptopsPost } from "./types";

// German translation of /blog/laptops-are-dead/.
// The conceit is a newspaper obituary ("Traueranzeige"): keep the funeral
// register — friedlich eingeschlafen, hinterlässt, Leichenschmaus, "von Blumen
// und Kränzen bitten wir abzusehen" — and keep the inline markup intact.

export const de: LaptopsPost = {
  metaTitle: "Der Laptop ist tot, SSH und TCP/IP leben weiter | Mobile SSH",
  metaDescription:
    "Ein liebevoller Nachruf auf den Laptop (1981–2026). TCP/IP wurde 1974 entworfen, SSH 1995 geschrieben; beide haben die Hardware überlebt und arbeiten in dem Gerät weiter, das du ohnehin in der Hand hältst. Das Plädoyer für Mobile SSH – den SSH-, SFTP- und Terminal-Client für Android, iPhone und iPad. Kostenlos, nativ und quelloffen.",

  back: "Blog",
  eyebrow: "Meinung",
  titleLead: "Der Laptop ist tot.",
  titleSoft: "Es lebe deine Hosentasche.",
  standfirst: `<b>Doch SSH und TCP/IP leben weiter.</b> Ein liebevoller Nachruf auf einen schweren Freund mit
warmem Bauch – und das Plädoyer für das Terminal, das klammheimlich in das Gerät gezogen ist, das du
ohnehin in der Hand hältst.`,
  author: "Die Redaktion von Mobile SSH",
  date: "27. Juli 2026",
  readingTime: "7 Min. Lesezeit",

  leadFigure: {
    terminal: {
      title: "ssh · prod-01 · tmux",
      prompt: "you@prod-01",
      path: "~/app",
      command: `claude "behebe den fehlschlagenden Test"`,
      reading: "lese src/api/auth.ts",
      patching: "patche Token-Refresh …",
      result: "3 Dateien geändert, Tests grün",
      needsInput: "Agent braucht Eingabe",
      push: "git push origin main"
    },
    toast: {
      title: "Agenten-Benachrichtigungen",
      host: "prod-01",
      body: "Claude Code wartet auf deine Prüfung"
    },
    caption:
      "Beweisstück A: eine echte SSH-Sitzung, ein Coding-Agent und eine Agenten-Benachrichtigung – auf dem Ding in deiner Hosentasche, weit und breit kein Ladegerät."
  },

  body: [
    {
      kind: "lead",
      html: `Der Laptop – geliebter Weggefährte von Entwicklern, Autoren und Reisenden in aller Welt – ist in
dieser Woche im Alter von 45 Jahren friedlich eingeschlafen, in einem Café, bei 6 % Akku und weit und
breit ohne Ladegerät. Umgeben war er, wie immer, von Tabs, die er zu lesen versprochen hatte.`
    },
    {
      kind: "p",
      html: `Es gab kein Drama. Er wurde einfach dunkler, seufzte einmal durch den Lüfter und fragte – ein letztes
Mal und im denkbar ungünstigsten Moment –, ob jetzt vielleicht ein guter Zeitpunkt wäre, ein Update zu
installieren.`
    },
    {
      kind: "pull",
      html: `„Er verlangte einen Firmware-Neustart genau in dem Moment, in dem man endlich eine Idee hatte. Das tat er immer.“`
    },
    { kind: "h2", html: `Ein schweres Leben, treu getragen` },
    {
      kind: "p",
      html: `1981 als Kind der Osborne&nbsp;1 geboren – elf Kilogramm schleppbarer Ehrgeiz, kein Akku, ein
Fünf-Zoll-Bildschirm –, verbrachte der Laptop fünfundvierzig Jahre damit, leichter zu werden, ohne je
leicht zu sein. Er starb mit rund anderthalb Kilo, was sein Elternteil für Hexerei gehalten hätte. Wir
erinnern uns an die Tastatur. An die warme Unterseite. An die surrenden Lüfter, die jeden Denkakt
ankündigten. An die Tasche, die immer eine Spur zu voll war, an den Netzteilziegel von der Größe eines
Taschenbuchs und an die Suche – ewig, hoffnungsvoll – nach einer freien Steckdose am Fenster.`
    },
    {
      kind: "p",
      html: `Er verlangte uns viel ab, und wir haben ihn trotzdem getragen, vom Schreibtisch zum Gate zu Sitz 24B,
weil er lange Zeit das Einzige war, in das ein echtes Terminal passte. Das stimmt nicht mehr.`
    },
    { kind: "h2", html: `Überlebt von der älteren Verwandtschaft` },
    {
      kind: "p",
      html: `Der Laptop hinterlässt keine Kinder. Die Nachfolger, die man ihm versprochen hatte – das Tablet, das
Chromebook, das Ding mit der abnehmbaren Tastatur –, kamen, setzten sich in die hinteren Reihen und
entpuppten sich als Laptops mit weniger Anschlüssen. Stattdessen hinterlässt er zwei Verwandte, die
schon arbeiteten, als er geboren wurde – und die auch heute Morgen gearbeitet haben.`
    },
    {
      kind: "p",
      html: `<strong>TCP/IP</strong> ist der Ältere. Vint Cerf, Bob Kahn und eine lange Reihe von Mitstreitern
veröffentlichten den Entwurf im Mai 1974; RFC&nbsp;675 schrieb ihn im Dezember desselben Jahres aus und
prägte nebenbei das Wort „Internet“. Das ARPANET begann am 1. Januar 1983 mit dem Umstieg und war im
Juni damit fertig – da war der Laptop ein Kleinkind mit Diskettenlaufwerk.`
    },
    {
      kind: "p",
      html: `<strong>SSH</strong> ist der Neffe, einunddreißig Jahre alt und der Jüngste unter den Sargträgern. Tatu
Ylönen schrieb es im Frühjahr 1995 an der Helsinki University of Technology, nachdem ein Sniffer im
Universitätsnetz still und leise Tausende Passwörter eingesammelt hatte. Im Juli veröffentlichte er
<code>ssh-1.0.0</code>, und Port 22 suchte er sich selbst aus: die einzige freie Nummer zwischen FTP auf
21 und Telnet auf 23 – in der Annahme, genau zwischen den beiden Protokollen zu sitzen, die er ersetzen
wollte, sei „vielleicht eine dieser Kleinigkeiten, die einem eine gewisse Aura von Glaubwürdigkeit
verleihen“. Am Montag fragte er bei der IANA an. Am Dienstag sagte sie Ja. Am Mittwoch lieferte er aus.`
    },
    { kind: "ledger" },
    { kind: "h2", html: `Was die Protokolle nie vorausgesetzt haben` },
    {
      kind: "p",
      html: `Ihre Langlebigkeit ist kein Rätsel. Sie haben durchgehalten, weil sie fast nichts voraussetzen. TCP
setzt Pakete voraus, von denen manche verloren gehen, sich verdoppeln oder in der falschen Reihenfolge
eintreffen. SSH setzt einen zuverlässigen Bytestrom und ein Schlüsselpaar voraus. Auf keiner der beiden
Listen stehen: Bildschirmgröße, Tastaturlayout, Gehäuse, Scharnier, Steckdose und ein Hersteller, den
es noch gibt.`
    },
    {
      kind: "p",
      html: `SSH setzt nicht einmal voraus, wie groß dein Terminal ist. Es fragt nach – und akzeptiert später auch
eine andere Antwort. Diese Höflichkeit wurde für Leute erfunden, die an der Ecke eines Desktop-Fensters
ziehen. Sie ist auch der Grund, warum das Drehen eines Smartphones keine Sitzung beendet.`
    },
    {
      kind: "pull",
      html: `„Hardware ist ein Körper. Ein Protokoll ist eine Gewohnheit. Nur eines von beidem kann ein Treppenhaus hinunterfallen.“`
    },
    {
      kind: "p",
      html: `Alles, was an ein Gehäuse gebunden war, ging zuerst, und nichts davon starb an schlechter Technik. Das
Diskettenlaufwerk, der PC-Card-Steckplatz, der Dock-Anschluss – jedes war für einen bestimmten Satz
Bedingungen gut gebaut, und die Bedingungen waren der sterbliche Teil. Ein Protokoll ist nicht einmal an
seinen Besitzer gebunden. Als die Lizenz von Ylönens späteren Versionen strenger wurde, ging das
OpenBSD-Projekt zurück auf <code>ssh 1.2.12</code>, die letzte Fassung, die frei genug zur
Weiterverwendung war, und lieferte OpenSSH am 1. Dezember 1999 mit OpenBSD&nbsp;2.6 aus. Das Protokoll
machte unbeirrt weiter. Es hatte nie jemandem im Besonderen gehört – und genau deshalb ist es noch da.`
    },
    { kind: "h2", html: `Die eine Annahme, die nachgebessert werden musste` },
    {
      kind: "p",
      html: `Der Ehrlichkeit halber eine Korrektur. Eine Annahme hat TCP dann doch getroffen, und sie war falsch:
dass die Maschine stehen bleibt. Eine Verbindung wird über vier Zahlen benannt – zwei Adressen, zwei
Ports –, was 1981 eine völlig vernünftige Art war, ein Ding zu benennen, als das Ding noch in einem Raum
mit Doppelboden festgeschraubt war. Verlasse ein Café mit dem Smartphone in der Hand, und eine dieser
vier Zahlen wird still und leise zur Lüge.`
    },
    {
      kind: "p",
      html: `Ein zweites Begräbnis gab es nicht. Das Protokoll blieb, und die Annahme wurde drumherum geflickt. Die
Arbeit wanderte ans andere Ende, außer Reichweite eines Clients, der gerade durch eine Tür geht:
<code>screen</code>, dann <code>tmux</code>, die die Shell offen halten, während das Terminal kommt und
geht. Eternal Terminal ging weiter und benannte die Sitzung statt der Adresse – so übersteht die Sitzung
es, wenn sich die Adresse unter ihr ändert.`
    },
    {
      kind: "pull",
      html: `„Deine Server waren nie dem Laptop treu. Sie waren dem Port treu.“`
    },
    {
      kind: "p",
      html: `Nichts davon wurde für Smartphones erfunden. Sie haben es geerbt. Ein Client mit
Eternal-Terminal-Transport, tmux-Manager, Keepalives samt Reconnect mit exponentiellem Backoff und
mehreren Adressen pro gespeichertem Server lässt sich mitten im Befehl aus einem Gebäude tragen und
nimmt den Faden auf dem Gehweg wieder auf. Die Gegenstelle erfährt die Versionskennung deines Clients
und die Größe deines Terminals. Sie erfährt nie, ob es ein Scharnier gibt.`
    },
    { kind: "h2", html: `Die Arbeit ist klammheimlich in die Hosentasche gezogen` },
    {
      kind: "p",
      html: `In seinen letzten Jahren wurde der Laptop nervös, was seine Bedeutung anging. Er hatte allen Grund
dazu. Die Arbeit, die er einst für sich beanspruchte – ein echtes Terminal, echte Dateiübertragung,
echte Schlüssel, echte Tunnel –, war klammheimlich in das Gerät gewandert, das du ohnehin in der Hand
hältst.`
    },
    {
      kind: "p",
      html: `Auf diesem Gerät läuft <strong>Mobile SSH</strong>: ein nativer SSH-, SFTP- und Terminal-Client für
Android, iPhone und iPad. Keine Spielzeug-Shell. Kein Remote-Desktop, der so tut als ob. Ein
vollwertiges <span class="nowrap">xterm-256color</span>-Terminal – das echte – und es passt in genau den
Platz, den früher das Ladegerät des Laptops belegt hat.`
    },
    {
      kind: "pull",
      html: `„Die Arbeit, die er einst die seine nannte, ist in eine Hosentasche gezogen – und hat nie nach einer Steckdose gefragt.“`
    },
    { kind: "h2", html: `Hinterblieben: dein Smartphone – und Mobile SSH` },
    {
      kind: "p",
      html: `Der Nachlass, aufgeschlüsselt. Von Blumen und Kränzen bittet die Familie abzusehen; sie bittet nur
darum, die folgende Grabrede zu lesen und zur Kenntnis zu nehmen, dass jede Zeile daraus echte Software
ist, die du heute installieren kannst.`
    },
    { kind: "estate" },
    {
      kind: "pull",
      html: `„‚Der Laptop ist tot‘ ist ein Nachruf, kein Obduktionsbericht. Beim Leichenschmaus sind Laptops weiterhin willkommen.“`
    },
    {
      kind: "p",
      html: `Wir sagen das mit Liebe. Der Laptop hat ehrenvoll gedient, und er ist beim Leichenschmaus willkommen –
aufgeklappt auf einem Beistelltisch, der Lüfter dreht sanft, endlich am Strom. Aber die Arbeit des Tages
hat leichter gepackt und das Gebäude verlassen. Sie passt jetzt in eine Hosentasche. Und sie geht beim
ersten Klingeln ran.`
    },
    {
      kind: "p",
      html: `SSH und TCP/IP haben keine Kränze geschickt. Sie hatten zu tun.`
    }
  ],

  ledger: {
    entries: [
      {
        year: "1974",
        event: "Cerf, Kahn und Kollegen veröffentlichen den Entwurf, aus dem TCP/IP wird",
        status: "läuft noch",
        on: true
      },
      {
        year: "1978",
        event: "DEC liefert das VT100 aus, sein erstes ANSI-kompatibles Terminal",
        status: "Sequenzen weiter in Gebrauch",
        on: true
      },
      {
        year: "1981",
        event: "Die Osborne&nbsp;1 kommt in den Handel: 11&nbsp;kg, 1.795 $, nur Netzbetrieb",
        status: "1983 eingestellt",
        on: false
      },
      {
        year: "1983",
        event: "Das ARPANET schließt den Wechsel von NCP zu TCP/IP ab",
        status: "läuft noch",
        on: true
      },
      {
        year: "1995",
        event: "SSH entsteht in Helsinki; die IANA vergibt am 11. Juli Port 22",
        status: "läuft noch",
        on: true
      },
      {
        year: "2026",
        event: "Der Laptop, 45 Jahre alt, in einem Café, bei 6 % und ohne Ladegerät",
        status: "überlebt von den Obenstehenden",
        on: false
      }
    ],
    caption: "Reihenfolge des Geleits, wie bei der Trauerfeier verlesen. Der älteste Trauergast ist zweiundfünfzig."
  },

  estate: [
    {
      heading: "Ein echtes Terminal, in deiner Hosentasche",
      body: "Vollständige <code>xterm-256color</code>-Emulation, bis zu acht gleichzeitige Sitzungen in einem verstellbaren Raster, ein eingebauter tmux-Sitzungsmanager und Eternal Terminal für Verbindungen, die Netzwerkausfälle, Schlafmodus und IP-Wechsel überstehen."
    },
    {
      heading: "Dateien und Tunnel, eingebaut",
      body: "Ein SFTP-Browser mit zwei Panels, um Dateien zwischen Smartphone und Server zu bewegen – mit lokalen Portweiterleitungen und Tunneln, die direkt beim jeweiligen Host gespeichert sind und beim Verbinden automatisch hochgehen."
    },
    {
      heading: "Schlüssel, auf dem Gerät erzeugt",
      body: "SSH-Schlüssel entstehen auf dem Gerät – Ed25519 und ECDSA – mit Passwort- oder Private-Key-Authentifizierung. Nichts verlässt das Telefon."
    },
    {
      heading: "Coding-Agenten, mit Agenten-Benachrichtigungen",
      body: "Lass Claude Code, Codex und andere Agenten auf deinen <em>eigenen</em> Servern laufen, direkt vom Smartphone aus. Agenten-Benachrichtigungen lösen eine Push-Meldung aus – mit Ton und Vibration –, sobald ein Agent deine Eingabe braucht. So kannst du weggehen und bleibst trotzdem im Bilde."
    },
    {
      heading: "Passend gekleidet für den Anlass",
      body: "Konfigurierbare Schriftarten und Farbschemata, Nerd-Font-Powerline- und -Icon-Glyphen sowie ein Plugin-System zum Weiterbauen – stell das Terminal so lange ein, bis es sich nach dir anfühlt."
    },
    {
      heading: "Ehrlich kostenlos",
      body: "Keine Werbung. Keine Pro-Paywall. Kein Konto nötig. Deine Daten bleiben auf dem Gerät, und das Ganze ist quelloffen unter der Apache-2.0-Lizenz."
    }
  ],

  cta: {
    ariaLabel: "Mobile SSH holen",
    heading: "Statt Blumen: Schließ ein paar Tabs.",
    body: "Installiere Mobile SSH, gönn deinem Laptop die Ruhe, die er sich verdient hat, und trag ein echtes Terminal in der Hosentasche – kostenlos, nativ und quelloffen.",
    tags: ["Keine Werbung", "Kein Konto", "Daten bleiben lokal", "Apache-2.0"],
    playButton: "Bei Google Play anmelden",
    iosButton: "iOS-Beta beitreten",
    note: `Android läuft als geschlossener Test: Melde dich mit dem Google-Konto an, mit dem du testen
willst, und öffne den Opt-in-Link im mobilen Browser – in der Google-Play-App ist der geschlossene Test
womöglich nicht sichtbar. Schon angemeldet? Dann geht es direkt zum
<a href="{playUrl}" rel="noopener">Play-Eintrag</a>.`
  }
};
