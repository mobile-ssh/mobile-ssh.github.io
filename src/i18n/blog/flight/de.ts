import type { FlightPost } from "./types";

// German translation of "Eleven hours over the Atlantic".
//
// The split-flap tiles stay English (they are per-character, aria-hidden
// decoration), so masthead.headlineTranslated carries the German headline that
// readers actually see under the board.
//
// Figures are unchanged; only their notation is German (35.786 km, 7,3 ms).

export const de: FlightPost = {
  meta: {
    title: "Elf Stunden über dem Atlantik | Mobile SSH",
    description:
      "Auf 35.786 km kostet allein das Licht 477 ms hin und zurück. Was beim Arbeiten aus dem Flugzeug wirklich kaputtgeht, warum es nicht das ist, was du denkst, und wie ein Langstreckenflug zu Arbeitszeit wird statt zur Wiederholungsschleife. Von Mobile SSH – dem SSH-, SFTP- und Terminal-Client für Android, iPhone und iPad."
  },

  backLabel: "Blog",

  masthead: {
    eyebrow: "Erfahrungsbericht",
    boardTitle: "Abflüge",
    legend: {
      time: "Zeit",
      flight: "Flug",
      destination: "Ziel",
      remarks: "Bemerkung"
    },
    headline: "Elf Stunden über dem Atlantik",
    headlineTranslated: "Elf Stunden über dem Atlantik",
    deck: `Sitz 24B schaut einen Film, den er schon dreimal gesehen hat. Sitz 24C prüft
      <span class="hl">vier Server</span> im selben Wi-Fi. Der Unterschied ist nicht die Verbindung –
      es ist das, was jeder von beiden an ihr anderes Ende gestellt hat.`,
    byline: [
      { key: "autor:", value: "Die Redaktion von Mobile SSH" },
      { key: "datum:", value: "10. August 2026" },
      { key: "lesezeit:", value: "8 Min." },
      { key: "link:", value: "703 ms, GEO" }
    ]
  },

  sections: {
    twoSeats: {
      heading: "Zwei Sitze, ein Satellit",
      intro: [
        `Elf Stunden, New York nach irgendwo im Osten. Das Kabinenlicht wird bernsteinfarben. Sitz 24B
          klappt den Bildschirm in der Vorderlehne auf, scrollt durch einen Katalog mit vierhundert
          Titeln und wählt einen Film, den er schon dreimal gesehen hat. Das ist kein Vorwurf. Es ist
          das mit Abstand Vernünftigste, was man mit elf Stunden in einer Aluminiumröhre unter Druck
          anfangen kann, und die meisten von uns haben genau das getan.`,
        `Sitz 24C holt ein Smartphone heraus.`
      ],
      outro: [
        `Beide Sitze hängen im selben Wi-Fi. Beide sind gleich weit vom Boden entfernt. Wenn die Räder
          aufsetzen, wird der eine einen Film gesehen haben, den er längst mitsprechen kann, und der
          andere drei Branches gemergt, eine rote Testsuite grün bekommen und einen hängenden Job auf
          einer Maschine sechstausend Kilometer entfernt neu gestartet haben.`,
        `Interessant ist nicht, dass das möglich ist. Interessant ist, <em>warum</em> es möglich ist –
          und warum der naheliegende Weg, den die meisten einmal versuchen und irgendwo über Grönland
          wieder aufgeben, überhaupt nicht funktioniert.`
      ]
    },

    aboveYou: {
      heading: "Was da oben wirklich hängt",
      intro: [
        `Es gibt zwei grundverschiedene Dinge, die eine Fluggesellschaft mit „Wi-Fi“ meinen kann, und
          welches davon an deinem konkreten Rumpf sitzt, entscheidet über alles Weitere.`,
        `Die alte Variante ist ein geostationärer Satellit, geparkt auf <strong>35.786 km</strong>.
          Diese Höhe hat niemand dir zuliebe gewählt; es ist genau die Entfernung, in der ein Umlauf
          vierundzwanzig Stunden dauert, sodass der Satellit stillzustehen scheint. Die Folge ist eine
          Rechnung, gegen die kein Entwicklungsbudget argumentieren kann: hinauf und wieder hinunter,
          zweimal, sind <strong>477 ms hin und zurück – für das Licht selbst</strong>, bevor auch nur
          ein einziger Router beteiligt ist.`,
        `Die neue Variante ist eine Konstellation im niedrigen Erdorbit auf rund <strong>550 km</strong>
          – etwa fünfundsechzigmal näher und <strong>7,3 ms</strong> Signallaufzeit hin und zurück.`
      ],
      afterDiagram: [
        `Messungen aus der Luft decken sich mit der Physik. Eine Auswertung von Ooklas
          In-Flight-Speedtests aus dem ersten Quartal 2025 fand eine <strong>mediane Round-Trip-Zeit von
          44 ms bei Starlink gegenüber 703–757 ms bei Hughes, Intelsat und Viasat</strong> – ein Faktor
          von rund sechzehn. Ein anderes Team instrumentierte für die ACM IMC 2025 echte Geräte auf
          <strong>25 Flügen bei 7 Fluggesellschaften</strong> und maß unabhängig davon dasselbe Bild:
          unter 40 ms im LEO, über 550 ms im GEO.`
      ],
      afterChart: [
        `Für eine lange Ozeanüberquerung ist die ehrliche Zahl etwas schlechter als die Schlagzeile.
          Dieselbe Untersuchung maß einen <strong>Median von 62 ms über dem Pazifik, mit einer Spanne
          von 19–86 ms</strong>. Das ist die Zahl, die du im Kopf behalten solltest. Sie ist immer noch
          hervorragend. Sie ist nur nicht 44.`
      ]
    },

    rollout: {
      heading: "Der ernüchternde Teil",
      intro: [
        `An dieser Stelle soll ein Blogbeitrag auf einer Produktseite dir eigentlich erzählen, dass die
          Zukunft bereits angekommen ist.`,
        `Sie ist nicht gleichmäßig angekommen, und das Flugzeug, das sie zuletzt erreicht, ist
          <em>deins</em>.`,
        `Schmalrumpfflugzeuge werden zuerst umgerüstet – es gibt viele davon, sie stehen nur kurz am
          Boden, und sie fliegen kurze Inlandsstrecken, auf denen niemand elf Stunden lang irgendetwas
          versucht. Die Großraumflugzeuge, die tatsächlich Ozeane überqueren, stehen ganz hinten in der
          Schlange. Mitte 2026 hatte United <strong>mehr als 400 Flugzeuge mit Starlink</strong> und
          rechnete bis Jahresende mit fast tausend – aber nur etwa <strong>sechzig davon waren
          Großraumflugzeuge</strong>, der erste Starlink-Transatlantikflug mit Großraumjet
          (Newark–Heathrow) fand erst im <strong>Juni 2026</strong> statt, und die komplette
          Großraumflotte ist erst für den <strong>Sommer 2027</strong> vorgesehen. Virgin Atlantic hatte
          seine <strong>zwölf A350</strong> abgeschlossen – rund <strong>28 % seiner
          Großraumflotte</strong> –, die 787 sind für die zweite Hälfte 2026 eingeplant und die A330neo
          bis 2027.`
      ],
      afterFigure: [
        `Also: Wenn du das 2026 auf einem Interkontinentalflug liest, stehen die Chancen weiter schlecht.
          Du hängst vermutlich an der 700-ms-Leitung, nicht an der mit 62 ms.`,
        `Das macht den Rest dieses Textes nützlicher, nicht überflüssig.`
      ]
    },

    filmVsShell: {
      heading: "Warum der Film funktioniert und das Terminal nicht",
      cmdComment: "eine ganze Sitzung, um ein einziges Zeichen zu bewegen",
      prose: [
        `Ein Film und eine Shell scheitern in entgegengesetzte Richtungen, und Bord-Wi-Fi ist für genau
          eines von beidem das falsche Netz.`,
        `Ein Film ist ein <em>Bandbreiten</em>-Problem, dem Latenz egal ist. Er puffert. Wenn das erste
          Bild 700 ms zu spät kommt, merkt das niemand, weil nichts an diesem Erlebnis davon abhängt,
          dass der Film auf dich reagiert. Play drücken, warten, schauen. Der Round Trip passiert genau
          einmal.`,
        `Eine interaktive Shell ist das Spiegelbild. Sie braucht fast keine Bandbreite – eine
          Terminalsitzung misst man in Kilobit, nicht in Megabit –, aber sie bezahlt den Round Trip
          <strong>bei jedem einzelnen Tastendruck, dessen Echo du sehen willst</strong>. Bei 700 ms ist
          das keine langsame Verbindung mehr. Das ist ein Gespräch mit einer Zweidrittelsekunde Pause
          nach jedem Zeichen.`,
        `Genau hier liegt der Denkfehler. Man sieht „50 Mbit/s“ im Bordportal, schließt daraus, die
          Verbindung sei in Ordnung, öffnet ein Terminal – und stellt fest, dass „in Ordnung“ damit
          nichts zu tun hat. Bandbreite ist hier nicht die Währung. <strong>Round Trips sind es.</strong>`
      ]
    },

    whatBreaks: {
      heading: "Was wirklich kaputtgeht (es ist nicht das Tippen)",
      intro: [
        `Der Ausfall ist präziser als „fühlt sich langsam an“, und die Forschung ist ungewöhnlich klar
          darin, wo der Schmerz landet.`,
        `In einer kontrollierten Studie mit 31 Teilnehmenden, die 20 ms gegen 200 ms
          Ende-zu-Ende-Eingabelatenz stellte, <strong>bewegte sich das reine Tippen kaum</strong>:
          290,9 ms pro Zeichen gegenüber 302,7 – ein Unterschied, den die Autoren nicht signifikant
          nennen konnten. Die Fehlerraten waren identisch.`
      ],
      afterTable: [
        `Die <em>Korrektur</em>-Aufgabe dagegen – mit den Pfeiltasten den Cursor umsetzen und Text
          reparieren, also genau das, was man im Editor tatsächlich tut – stieg von <strong>38,9
          Sekunden auf 46,5 Sekunden, rund 20 % langsamer, bei sehr großer Effektstärke</strong>
          (p &lt; 0,001, d = 1,673). Den Mechanismus benennen die Autoren nüchtern: Beim Navigieren
          musst du immer wieder auf den Bildschirm warten, weil davon, wo der Cursor gelandet ist,
          abhängt, was du als Nächstes tust.`,
        `Die gefühlte Belastung wurde selbst dort schlechter, wo das Tempo es nicht wurde. Bei der
          Tippaufgabe, deren Leistung statistisch unverändert blieb, stieg die selbst berichtete
          <strong>Frustration trotzdem von 20,9 auf 31,3</strong>.`,
        `Übertrage das auf ein Terminal, und es benennt exakt das, was in zehn Kilometern Höhe
          auseinanderfällt: nicht das Eintippen eines Befehls. Es sind die Navigation in
          <code>vim</code>, die Tab-Vervollständigung, das Blättern durch <code>less</code> und der
          Stochern-und-Schauen-Rhythmus einer REPL. Jedes davon ist eine Schleife, in der das Nächste
          davon abhängt, was gerade zurückgekommen ist.`
      ]
    },

    moveTheWork: {
      heading: "Verlagere die Arbeit, nicht die Tastendrücke",
      intro: [
        `Sobald du akzeptierst, dass Round Trips die knappe Ressource sind, lautet die Lösung nicht mehr
          „ein schnelleres Flugzeug“, sondern wird zur Architekturfrage: <strong>weniger Round Trips –
          und jeder einzelne trägt mehr.</strong>`,
        `Es gibt ein bekanntes Werkzeug, das genau hier ansetzt. Mosh sagt voraus, was deine
          Tastendrücke bewirken werden, und zeigt sie lokal an, bevor der Server sie bestätigt. Die
          gemessene Wirkung ist dramatisch: Auf einer Strecke mit rund einer halben Sekunde
          Round-Trip-Zeit fiel die mediane Reaktion auf einen Tastendruck von <strong>503 ms auf unter
          5 ms</strong>. Auf einem transozeanischen Pfad vom MIT nach Singapur von <strong>273 ms auf
          unter 5 ms</strong>.`,
        `Aber lies das Kleingedruckte, denn darum geht es. Mosh sagt rund <strong>70 % der
          Tastendrücke</strong> voraus. Die etwa 30 %, die es nicht vorhersagen kann, sind – in den
          Worten der Autoren – <em>hauptsächlich Navigation</em>, und für die sieht das Latenzprofil
          wieder aus wie schlichtes SSH. Anders gesagt: Ausgerechnet die eine Interaktion, die hohe
          Latenz am härtesten bestraft, ist die, die lokales Echo nicht retten kann.`
      ],
      chartHeading: "vorhergesagt vs. nicht",
      afterChart: [
        `Vorhersage hilft also – und rettet dich nicht. Was dich wirklich rettet, ist, sich schlicht zu
          weigern, so oft in der Schleife zu stecken.`,
        `<strong>Hör auf, in die Latenz hineinzutippen. Leg lang laufende Arbeit ans andere Ende und
          schau nach ihr.</strong> Ein Build, eine Testsuite, eine Migration, ein Coding-Agent – nichts
          davon braucht dich für den Round Trip. Sie brauchen dich am Anfang und bei der Entscheidung.
          Alles dazwischen ist das Problem der Maschine, und die Maschine steht am Boden, an einer guten
          Verbindung.`,
        `Deshalb schlägt in der Höhe auch <em>Parallelität</em> die <em>Interaktivität</em>. Durch
          700 ms hindurch kannst du nicht schnell tippen. Vier Server gleichzeitig beaufsichtigen kannst
          du sehr wohl, denn Beaufsichtigen ist nicht latenzgebunden – es ist aufmerksamkeitsgebunden,
          und du hast elf Stunden Aufmerksamkeit und sonst nichts, wofür du sie ausgeben könntest.`
      ]
    },

    seat24c: {
      heading: "Was Sitz 24C tatsächlich tut",
      lead: `Konkret, auf einem Smartphone, an einer schlechten Leitung:`,
      outro: [
        `Nichts davon wurde für Flugzeuge erfunden. So sah Fernarbeit über eine feindselige Leitung
          schon immer aus, und ein Flugzeug ist einfach eine ungewöhnlich ehrliche feindselige Leitung.`
      ]
    },

    caveat: {
      heading: "Eine ehrliche Einschränkung",
      prose: [
        `Zwei Dinge konnten wir nicht überprüfen, und wir tun auch nicht so, als ob:`,
        `<strong>Ob das Netz deiner Fluggesellschaft SSH überhaupt hinauslässt.</strong> Zu Portsperren,
          VPN-Regeln oder Idle-Timeouts bei den Anbietern von Bord-Wi-Fi haben wir keine belastbaren
          öffentlichen Belege gefunden – dafür jede Menge selbstbewusster Forenbehauptungen, die eine
          Prüfung nicht überstehen. Es hängt vom Carrier ab, vom Anbieter und vom Flugzeug. Teste es auf
          einem Kurzstreckenflug, bevor du einen Langstreckenflug darauf aufbaust.`,
        `<strong>Wie die Kabine ihre Zeit tatsächlich verbringt.</strong> Die meistzitierten Statistiken
          zum Bordunterhaltungsprogramm führen bei näherem Hinsehen auf Werbe-Preislisten ohne jede
          Methodik zurück – die haben wir aussortiert. Der beste Umfragebeleg, den wir gefunden haben –
          Inmarsat/Censuswide, 11.231 Passagiere in zehn Ländern, allerdings 2022 erhoben und nach
          Absichten statt nach gemessener Zeit gefragt –, sieht Unterhaltung mit deutlichem Abstand vor
          Arbeit: <strong>41 % wollten heruntergeladene Filme sehen und 35 % streamen, gegenüber 26 %,
          die arbeiten wollten.</strong>`,
        `Nimm Sitz 24B also als Figur, nicht als Statistik. Es ging nie darum, dass Filmeschauen falsch
          wäre. Es geht darum, dass die Alternative nicht länger unerreichbar ist.`
      ]
    },

    descent: {
      heading: "Sinkflug",
      prose: [
        `Der Film endet dort, wo er auch die letzten drei Male geendet hat. Der Sinkflug beginnt. Sitz
          24B hatte einen vollkommen guten Flug und wird ausgeruht landen, und das ist etwas wert.`,
        `Sitz 24C landet mit erledigter Arbeit – weil die Arbeit nie im Sitz war. Sie lief die ganze
          Zeit auf einer Maschine am Boden, und das Smartphone war immer nur ein Fenster darauf.`,
        `Elf Stunden sind eine lange Zeit bei 700 ms. Sie sind eine sehr kurze Zeit, wenn man vier Server
          beaufsichtigt, denen der Satellit vollkommen egal ist.`
      ]
    }
  },

  seat24b: {
    tag: "sitz 24b",
    lines: [
      { time: "19:04", verb: "play", text: "– Film, 118 Min." },
      { time: "21:02", verb: "play", text: "– Film, noch mal" },
      { time: "23:10", verb: "idle", text: "– Kabine dunkel" },
      { time: "05:41", verb: "wake", text: "– Sinkflug" }
    ]
  },

  seat24c: {
    tag: "sitz 24c",
    lines: [
      { time: "19:04", verb: "attach", text: "– 4 Sitzungen, 1 Raster" },
      { time: "21:02", verb: "merge", text: "– drei Branches" },
      { time: "23:10", verb: "green", text: "– rote Suite grün" },
      { time: "05:41", verb: "kick", text: "– hängender Job neu gestartet" }
    ]
  },

  quotes: [
    `Gleiches Flugzeug, gleiche Antenne, gleiches schlechtes Wi-Fi.
        Der Unterschied liegt einzig darin, was du an ihr anderes Ende stellst.`,
    `Das Flugzeug, in dem du sitzt, wird als Letztes umgerüstet. Rechne
        mit 700 ms und freu dich über 62.`,
    `Latenz besteuert nicht dein Tippen. Sie besteuert jede Entscheidung,
        die auf den Bildschirm wartet.`
  ],

  orbit: {
    alt: "Diagramm: Ein geostationärer Satellit auf 35.786 km kostet 477 ms Lichtlaufzeit hin und zurück; ein Satellit im niedrigen Erdorbit auf 550 km kostet 7,3 ms.",
    geoLabel: "GEO 35.786 km",
    geoValue: "477 ms Licht",
    leoLabel: "LEO 550 km",
    leoValue: "7,3 ms Licht",
    aircraft: "Sitz 24C, 11.000 m",
    caption: "Nicht maßstabsgetreu – nichts, worin 35.786 km vorkommen, ist das jemals."
  },

  latencyChart: {
    rows: [
      { label: "GEO – Hughes / Intelsat / Viasat, Median", value: "703 ms" },
      { label: "LEO über dem Pazifik – Langstrecken-Median", value: "62 ms" },
      { label: "LEO – Starlink im Flug, Gesamtmedian", value: "44 ms" }
    ],
    note: "Balken auf gemeinsamer linearer Skala. Quelle 1."
  },

  rolloutFigure: {
    items: [
      {
        name: "United",
        value: "≈60",
        text: `Großraumflugzeuge fliegen mit Starlink, von über 400 ausgerüsteten Maschinen. Der Rest
            der Großraumflotte ist erst für Sommer 2027 vorgesehen.`
      },
      {
        name: "Virgin Atlantic",
        value: "12 von ~43",
        text: `Großraumflugzeuge fertig – rund 28 Prozent. Die 787 laufen bis H2 2026, die A330neo bis
            2027.`
      }
    ],
    note: `Quellen 5 und 6. Die übrigen United-Großraumjets bis Sommer 2027; Virgins 787 bis H2 2026
          und A330neo bis 2027.`
  },

  latencyTable: {
    caption: "Schmid et al., MUM '23 – n = 31, 20 ms vs. 200 ms Eingabelatenz",
    head: ["Aufgabe", "20 ms", "200 ms", "Befund"],
    rows: [
      { task: "Tippen / Zeichen", low: "290,9", high: "302,7", verdict: "n. s." },
      { task: "Korrekturaufgabe", low: "38,9 s", high: "46,5 s", verdict: "+20 %" },
      { task: "Frustration", low: "20,9", high: "31,3", verdict: "p=0,004" }
    ]
  },

  moshChart: {
    rows: [
      { label: "Tastendrücke, die mosh sofort echot", value: "≈70 %" },
      { label: "nicht vorhergesagt – „hauptsächlich Navigation“", value: "≈30 %" }
    ],
    note: "Quelle 4."
  },

  windows: [
    {
      title: "sitzungen-die-die-verbindung-überleben",
      body: `Das Flugzeug wechselt die Funkzelle, das Portal will neu authentifizieren, die Verbindung
            bricht ab. <code>tmux</code> hält die Shell auf dem Server trotzdem am Laufen; die Sitzung
            ist ein Ding am anderen Ende, nicht eines in deiner Hand. Eternal Terminal treibt dieselbe
            Idee weiter und lässt die Sitzung sogar die TCP-Verbindung selbst überleben, indem es
            puffert und nachspielt, was du verpasst hast. <span style="color:var(--dim)">(Faire Warnung
            für ein gefiltertes Netz: ET braucht einen eigenen Port – standardmäßig 2022 –
            <em>zusätzlich</em> zur 22 von SSH.)</span>`
    },
    {
      title: "mehr-als-ein-problem-gleichzeitig",
      body: `Mehrere Sitzungen in einem Raster, mehrere gespeicherte Server, auf denen jeweils etwas
            läuft, das zwischen zwei Entscheidungen keine Aufsicht braucht.`
    },
    {
      title: "agenten-die-das-tippen-übernehmen",
      body: `Coding-Agenten laufen auf <em>deinen</em> Servern, mit Bodenlatenz, dort, wo der Code
            liegt. Sie zahlen die Satellitensteuer nicht; du zahlst sie nur, wenn du ihnen antwortest.`
    },
    {
      title: "push-wenn-es-darauf-ankommt",
      bellLabel: " (Glocke)",
      body: `Agenten-Benachrichtigungen melden sich, wenn wirklich ein Mensch gebraucht wird – so
            vergeht der Flug mit Prüfen und Entscheiden statt mit Starren auf einen Prompt, der auf ein
            Echo wartet.`
    }
  ],

  cta: {
    cmdComment: "kostenlos · quelloffen · Apache-2.0",
    heading: "Dein nächster Langstreckenflug sind elf Stunden Serverzeit.",
    prose: [
      `Mobile SSH ist ein nativer SSH-, SFTP- und Terminal-Client für Android, iPhone und iPad. Mehrere
          Sitzungen, ein eingebauter tmux-Manager, Eternal Terminal und Push-Meldungen, wenn ein Agent
          dich braucht. Kostenlos, kein Konto, keine Werbung, quelloffen.`
    ],
    tags: ["Keine Werbung", "Kein Konto", "Daten bleiben lokal", "Apache-2.0"],
    playButton: "Bei Google Play anmelden",
    iosButton: "iOS-Beta beitreten",
    note: `Android läuft als geschlossener Test – melde dich mit dem Google-Konto an, mit dem du testen
      willst, und öffne den Link im mobilen Browser; in der Google-Play-App ist der geschlossene Test
      womöglich nicht sichtbar.`
  },

  sources: {
    heading: "Quellen",
    items: [
      `Ookla-In-Flight-Daten Q1 2025, ausgewertet in <em>A First Look at Starlink In-Flight Performance</em> – arXiv:2508.09839, begutachtet bei IEEE Xplore, Dok. 11353148. (44 ms vs. 703–757 ms; Median 62 ms über dem Pazifik, Spanne 19–86 ms.)`,
      `<em>From GEO to LEO: First Look Into Starlink In-Flight Connectivity</em>, ACM IMC 2025 – Jang, Varvello, Raman, Zaki. 25 Flüge, 7 Fluggesellschaften. (&lt;40 ms LEO vs. 550 ms+ GEO.)`,
      `Schmid et al., MUM '23, <em>Effects of Text Input Latency</em> – n=31, 20 ms vs. 200 ms. (290,9 vs. 302,7 ms/Zeichen, n. s.; Korrektur 38,9 s → 46,5 s, p&lt;0,001, d=1,673; Frustration 20,9 → 31,3, p=0,004.)`,
      `Winstein &amp; Balakrishnan, <em>Mosh: An Interactive Remote Shell for Mobile Clients</em>, USENIX ATC 2012. (503 ms → &lt;5 ms; 273 ms → &lt;5 ms; ~70 % der Tastendrücke vorhergesagt; nicht vorhergesagter Rest „hauptsächlich Navigation“.)`,
      `Newsroom von United Airlines, 22. Juni 2026, <em>United Accelerates Starlink Wi-Fi Rollout with First Widebody Transatlantic Flight</em>. (400+ Flugzeuge; ~60 Großraumjets; komplette Großraumflotte Sommer 2027.)`,
      `Pressemitteilung von Virgin Atlantic, 12. April 2026. (A350 abgeschlossen; 787 H2 2026; A330neo 2027.)`,
      `Dokumentation zu Eternal Terminal – eternalterminal.dev/howitworks, github.com/MisterTea/EternalTerminal. (Puffern und Nachspielen; Standardport 2022 zusätzlich zu SSH.)`,
      `Inmarsat/Censuswide Passenger Experience Survey 2022, n=11.231 in 10 Ländern. (Heruntergeladene Filme 41 %, Streaming 35 %, Arbeit 26 % – abgefragte Absicht, Mehrfachauswahl, erhoben 2022.)`
    ],
    quitHint: "– zum Beenden q drücken"
  },

  colophon: [
    "Mobile SSH – kostenloser, quelloffener SSH-/SFTP-/Terminal-Client für Android, iPhone und iPad.",
    "Apache-2.0. Keine Werbung, kein Konto, keine Pro-Version."
  ]
};
