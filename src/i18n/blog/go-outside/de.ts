import { defineGoOutside } from "./define";

export const de = defineGoOutside({
  metaTitle: "Geh raus. Der Agent arbeitet weiter. | Mobile SSH",
  metaDescription:
    "Dein Coding-Agent läuft auf deinem Server, nicht auf deinem Handy. Starte ihn unter tmux, geh los und lass dich von den Meldungen finden, wenn er wirklich einen Menschen braucht.",
  back: "Blog",
  eyebrow: "Feldnotiz",
  title: "Geh raus. Der Agent arbeitet weiter.",
  standfirst:
    "Nicht das Handy hat deinen Agenten je am Leben gehalten, sondern der Server. Wer das einmal glaubt, zahlt für einen Nachmittag draußen nichts: Du gehst, die Arbeit läuft weiter, und unterbrochen wirst du nur von einer Frage, die wirklich eine Antwort braucht.",
  author: "Die Mobile SSH-Redaktion",
  date: "7. September 2026",
  readingTime: "7 Min. Lesezeit",

  board: {
    ariaLabel:
      "Eine Bedingungstafel, die vier laufende Sitzungen wie Surfspots liest: drei arbeiten stetig weiter, und eine namens claude wartet auf einen Menschen.",
    heading: "BEDINGUNGEN",
    timeLabel: "06:14 HST",
    breakHeading: "Spot",
    swellHeading: "Welle",
    stateHeading: "Zustand",
    rows: [
      { name: "api-prod", swell: "2-3 ft", state: "steigend", needsYou: false },
      { name: "nightly-tests", swell: "6-8 ft", state: "hält", needsYou: false },
      { name: "claude", swell: "10+ ft", state: "braucht dich", needsYou: true },
      { name: "web-api", swell: "1-2 ft", state: "hält", needsYou: false }
    ],
    statusLine: "4 Sitzungen · 1 wartet · letzte Prüfung 06:14",
    caption:
      "Vier Sitzungen auf einer Maschine, die dir gehört. Dreien davon ist es egal, wo du bist. Die vierte ist der einzige Grund, das Handy aus der Tasche zu holen."
  },

  body: [
    `Der Arbeitstag endet, ob der Build fertig ist oder nicht. <em>Pau hana</em> – das Ende des Arbeitstags – kommt nach seinem eigenen Zeitplan, und die übliche Antwort lautet, ihn zu ignorieren: den Laptop auf dem Tisch offen lassen, halb auf einen Fortschrittsbalken schauen und den Abend einem Prozess opfern, der dich für nichts davon braucht.`,
    `Dieser Handel ergibt nur Sinn, wenn die Arbeit auf der Maschine passiert, die du mit dir herumträgst. Meistens tut sie das nicht. Der Agent ist ein Prozess auf einem Server; er bearbeitet Dateien auf dessen Datenträger und führt dessen Tests aus. Dein Handy ist ein Fenster darauf. Schließe das Fenster, und der Raum ist immer noch da.`,
    `Der Server ist die dauerhafte Schicht`,
    `Starte Claude Code oder Codex in <code>tmux</code>, <code>herdr</code> oder Zellij, und die Sitzung gehört dem Server, nicht deiner Verbindung. Fall auf einen Balken Empfang, geh in eine Lavaröhre, leg das Handy zwei Stunden weg – der Agent liest, bearbeitet und testet weiter, weil nie irgendetwas an ihm an dir hing.`,
    `Das ist der ganze Trick, und man sollte dabei genau sein, denn es ist leicht, die falsche Komponente dafür zu loben. Nicht die App hält den Prozess am Leben, sondern der Multiplexer auf der Gegenseite. Die Aufgabe von Mobile SSH ist es, sauber zu gehen und sauber zurückzukommen.`,
    `Du bist nicht das Netzteil. Hör auf, dich wie eines zu verhalten.`,
    `Kurz nachsehen, nicht babysitten`,
    `Ein Agent, der eine Stunde läuft, braucht einen Menschen für etwa neunzig Sekunden davon. Das Problem war nie das Warten; es ist das Nichtwissen, <em>wann</em> diese neunzig Sekunden kommen – und genau das hält Leute vor einem Bildschirm, der nichts zu sagen hat.`,
    `Agent Alerts beantworten das. Die Erkennung ist bewusst schlicht und deshalb verlässlich: ein Terminalglockenton, eine <code>OSC 9</code>- oder <code>OSC 777</code>-Benachrichtigung und der Agenten-Hook, den du einmal auf dem Server installierst. Sie liest deine Ausgabe nicht mit und rät nicht an Absichten herum, und es gibt keinen Empfindlichkeitsregler zum Justieren – gemeldet wird, was das Programm auf der anderen Seite tatsächlich angekündigt hat.`,
    `Das Handy bleibt also in der Tasche, bis es eine echte Frage gibt. Dann vibriert es, du liest den Prompt, tippst eine Antwort und steckst es wieder weg. Das ist die gesamte Interaktion, und sie funktioniert vom Strand, vom Wanderparkplatz oder aus der Schlange am Shave-Ice-Stand.`,
    `Was die Insel nicht richten kann`,
    `Zwei ehrliche Grenzen, denn ein Beitrag, der nur Stärken aufzählt, ist eine Anzeige.`,
    `Der Plattformunterschied ist real und sollte eingeplant werden. Unter Android hält ein Vordergrunddienst die Verbindung, während die App im Hintergrund ist – die dauerhafte Benachrichtigung <em>ist</em> die Sitzung. iOS führt im Hintergrund überhaupt nichts aus; es verbindet sich neu und hängt sich wieder an deinen Multiplexer, sobald du zurückkommst. So oder so hat der Agent auf dem Server nie aufgehört, und darum geht es. Geschlossen hat sich nur das Fenster.`,
    `Aloha ist keine Ausrede für Nachlässigkeit`,
    `Gut zu gehen ist eine kleine Disziplin. Was du nicht zwei Stunden unbeaufsichtigt laufen lassen möchtest, solltest du nicht im Hinausgehen starten – ein Agent mitten in einer Migration wird durch Entfernung nicht besser. Gib ihm eine Aufgabe mit einem natürlichen Haltepunkt, bitte ihn, vor dem Bearbeiten zu prüfen, und lass den Diff das sein, was du bei der Rückkehr durchsiehst.`,
    `Und behandle die Benachrichtigung so sorgfältig wie einen Pager. Wenn alles meldet, meldet nichts. Der Hook löst bei den Zuständen aus, für die es sich lohnt, einen Menschen zu unterbrechen; lass es dabei, dann bleibt das Vibrieren bedeutsam.`,
    `Der Build braucht kein Publikum. Geh und sei irgendwo.`
  ],

  checklist: {
    heading: "Bevor du rausgehst",
    steps: [
      {
        heading: "Starte ihn unter einem Multiplexer",
        body: "Führe den Agenten in <code>tmux</code>, <code>herdr</code> oder Zellij aus, damit die Sitzung deine Verbindung übersteht, statt von ihr abzuhängen."
      },
      {
        heading: "Installiere den Agenten-Hook",
        body: "Einmal pro Server, aus der App heraus. Es ist ein kleines Shell-Skript, das jeder Agent aufrufen kann – keine Anbieterintegration und nicht an eine einzelne CLI gebunden."
      },
      {
        heading: "Belege, dass eine Meldung ankommt",
        body: "Löse einen Prompt aus und prüfe, ob das Handy vibriert, bevor du dich darauf verlässt. Eine Meldung, die du nie funktionieren gesehen hast, ist kein Plan."
      },
      {
        heading: "Gib ihm einen Haltepunkt",
        body: "Eine Aufgabe, die sinnvoll endet, schlägt eine offene – gerade weil du dich entscheidest, nicht zuzusehen."
      }
    ],
    promptLabel: "Eine Aufgabe, die man allein lassen kann",
    prompt:
      "Lies AGENTS.md und behebe dann die fehlschlagenden Handler-Tests. Prüfe den Diff vor dem Bearbeiten, führe die gezielten Tests aus und höre auf, sobald sie bestehen – committe nicht."
  },

  truth: {
    heading: "Was es übersteht, wenn du weggehst",
    itemHeading: "Wenn das Handy in die Tasche wandert",
    resultHeading: "Läuft weiter?",
    yes: "Ja",
    no: "Nein",
    rows: [
      { item: "Der Agentenprozess auf dem Server", value: "Gehört tmux, herdr oder Zellij", survives: true },
      { item: "Dateien, Diffs und Testausgaben", value: "Auf dem Datenträger des Servers", survives: true },
      { item: "Dein Platz in der Sitzung", value: "Bei der Rückkehr wieder angehängt", survives: true },
      { item: "Die Verbindung unter Android", value: "Von einem Vordergrunddienst gehalten", survives: true },
      { item: "Die Verbindung unter iOS", value: "Keine Hintergrundausführung – sie wird neu aufgebaut", survives: false },
      { item: "Eine Meldung ohne Empfang für die Zustellung", value: "Kommt an, sobald das Handy wieder erreichbar ist", survives: false }
    ],
    note: "Der Agent läuft in jeder Zeile weiter. Unterschiedlich ist nur, ob dein Handy das Fenster noch offen hielt."
  },

  cta: {
    ariaLabel: "Mobile SSH laden",
    heading: "Lass den Laptop da. Nimm das Terminal mit.",
    body: "Verbinde dich direkt mit deiner eigenen Maschine, führe in tmux, herdr oder Zellij den Agenten deiner Wahl aus und lass dir von Agent Alerts sagen, wann er einen Menschen braucht – mit SFTP, Tunneln und einem echten Terminal in derselben App.",
    tags: ["Jeder Agent", "Direktes SSH", "Agent Alerts", "Apache-2.0"],
    playButton: "Bei Google Play teilnehmen",
    iosButton: "Zur iOS-Beta",
    note: `Android befindet sich im geschlossenen Test: Melde dich mit dem Google-Konto an, mit dem du testen willst, und öffne den Teilnahme-Link im mobilen Browser. Schon registriert? Direkt zum <a href="{playUrl}" rel="noopener">Play-Eintrag</a>.`
  }
});
