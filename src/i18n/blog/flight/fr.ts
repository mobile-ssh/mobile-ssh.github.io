import type { FlightPost } from "./types";

// French translation of "Eleven hours over the Atlantic".
//
// The split-flap tiles stay English in every locale, so masthead.headline (the
// screen-reader text) and masthead.headlineTranslated (the visible line under
// the board) carry the real French headline.
//
// Figures are the fact-checked originals, re-typeset for French convention:
// the decimal separator is a comma (7,3 ms) and the thousands separator a
// space (35 786 km) — a French reader would parse "35,786 km" as 35.786 km.

export const fr: FlightPost = {
  meta: {
    title: "Onze heures au-dessus de l'Atlantique | Mobile SSH",
    description:
      "À 35 786 km, la lumière seule coûte 477 ms d'aller-retour. Ce qui casse vraiment quand on travaille depuis un avion, pourquoi ce n'est pas ce que vous croyez, et comment passer un long-courrier à livrer plutôt qu'à revoir un film. Par Mobile SSH — le client SSH, SFTP et terminal pour Android, iPhone et iPad."
  },

  backLabel: "Blog",

  masthead: {
    eyebrow: "Carnet de terrain",
    boardTitle: "Départs",
    legend: {
      time: "Heure",
      flight: "Vol",
      destination: "Destination",
      remarks: "Observations"
    },
    headline: "Onze heures au-dessus de l'Atlantique",
    headlineTranslated: "Onze heures au-dessus de l'Atlantique",
    deck: `Le siège 24B regarde un film qu'il a déjà vu trois fois. Le siège 24C passe en revue
      <span class="hl">quatre serveurs</span> sur le même Wi-Fi. La différence ne tient pas à la connexion —
      elle tient à ce que chacun a mis à l'autre bout.`,
    byline: [
      { key: "auteur :", value: "La rédaction de Mobile SSH" },
      { key: "date :", value: "10 août 2026" },
      { key: "lecture :", value: "8 min" },
      { key: "liaison :", value: "703 ms, GEO" }
    ]
  },

  sections: {
    twoSeats: {
      heading: "Deux sièges, un satellite",
      intro: [
        `Onze heures, New York vers quelque part à l'est. L'éclairage de la cabine passe à l'ambre. Le
          siège 24B ouvre l'écran du dossier devant lui, fait défiler un catalogue de quatre cents
          titres et choisit un film qu'il a déjà vu trois fois. Ce n'est pas un reproche. C'est la
          chose la plus raisonnable qu'on puisse faire de onze heures dans un tube d'aluminium
          pressurisé, et la plupart d'entre nous l'ont faite.`,
        `Le siège 24C sort un téléphone.`
      ],
      outro: [
        `Les deux sièges sont sur le même Wi-Fi. Les deux sont à la même distance du sol. Quand les
          roues toucheront la piste, l'un aura regardé un film qu'il pouvait déjà citer par cœur, et
          l'autre aura fusionné trois branches, remis au vert une suite de tests en échec et relancé
          un job bloqué sur une machine à six mille kilomètres de là.`,
        `Le plus intéressant n'est pas que ce soit possible. C'est <em>pourquoi</em> c'est possible —
          et pourquoi l'approche évidente, celle que la plupart des gens tentent une fois avant de
          l'abandonner quelque part au-dessus du Groenland, ne fonctionne pas du tout.`
      ]
    },

    aboveYou: {
      heading: "Ce qu'il y a vraiment au-dessus de vous",
      intro: [
        `Une compagnie aérienne peut désigner deux choses radicalement différentes par le mot
          « Wi-Fi », et laquelle des deux est boulonnée à votre fuselage décide de tout le reste.`,
        `L'ancien dispositif, c'est un satellite géostationnaire, garé à <strong>35&nbsp;786&nbsp;km</strong>.
          Cette altitude n'est pas un choix de conception fait pour votre confort ; c'est la distance
          exacte à laquelle une orbite dure vingt-quatre heures, si bien que le satellite paraît
          immobile. La conséquence est une arithmétique contre laquelle aucun budget d'ingénierie ne
          peut rien : monter puis redescendre, deux fois, cela fait <strong>477 ms d'aller-retour
          pour la lumière elle-même</strong>, avant même qu'un seul routeur ne s'en mêle.`,
        `Le nouveau dispositif, c'est une constellation en orbite terrestre basse à environ
          <strong>550&nbsp;km</strong> — soit soixante-cinq fois plus près, et <strong>7,3 ms</strong>
          de propagation aller-retour.`
      ],
      afterDiagram: [
        `Les mesures prises en vol confirment la physique. L'analyse des tests de débit en vol
          d'Ookla du premier trimestre 2025 relève un <strong>temps d'aller-retour médian de 44 ms
          sur Starlink contre 703 à 757 ms sur Hughes, Intelsat et Viasat</strong> — un écart d'un
          facteur seize environ. Une autre équipe, qui a instrumenté de vrais appareils sur
          <strong>25 vols de 7 compagnies</strong> pour ACM IMC 2025, a mesuré indépendamment la même
          forme : moins de 40 ms en LEO, plus de 550 ms en GEO.`
      ],
      afterChart: [
        `Pour une traversée océanique long-courrier, le chiffre honnête est un peu moins beau que le
          titre. La même étude mesure une <strong>médiane de 62 ms au-dessus du Pacifique, dans une
          fourchette de 19 à 86 ms</strong>. C'est le chiffre à garder en tête. Il reste excellent.
          Ce n'est pas 44.`
      ]
    },

    rollout: {
      heading: "La douche froide",
      intro: [
        `C'est ici qu'un article de blog sur un site produit est censé vous annoncer que l'avenir est
          arrivé.`,
        `Il n'est pas arrivé partout en même temps, et l'avion qu'il a atteint en dernier, c'est
          <em>le vôtre</em>.`,
        `Les monocouloirs sont rééquipés en premier — ils sont nombreux, ils enchaînent des rotations
          rapides et volent sur des sauts de puce intérieurs où personne n'essaie de faire onze
          heures de quoi que ce soit. Les gros-porteurs, ceux qui traversent réellement les océans,
          sont les derniers de la file. Mi-2026, United comptait <strong>plus de 400 appareils sous
          Starlink</strong> et espérait approcher le millier en fin d'année — mais seulement
          <strong>une soixantaine de gros-porteurs</strong> ; son premier vol transatlantique en
          gros-porteur équipé Starlink (Newark-Heathrow) n'a été opéré qu'en <strong>juin
          2026</strong>, et l'ensemble de la flotte gros-porteurs n'est pas attendu avant
          l'<strong>été 2027</strong>. Virgin Atlantic avait terminé ses <strong>douze A350</strong>
          — environ <strong>28 % de sa flotte de gros-porteurs</strong> — les 787 étant programmés
          sur le second semestre 2026 et les A330neo jusqu'en 2027.`
      ],
      afterFigure: [
        `Donc : si vous lisez ces lignes sur un vol intercontinental en 2026, les probabilités sont
          encore contre vous. Vous êtes sans doute sur la liaison à 700 ms, pas sur celle à 62 ms.`,
        `Ce qui rend la suite de cet article plus utile, et non moins.`
      ]
    },

    filmVsShell: {
      heading: "Pourquoi le film passe et le terminal non",
      cmdComment: "toute une session pour déplacer un caractère",
      prose: [
        `Un film et un shell échouent dans des directions opposées, et le Wi-Fi en vol est
          précisément le mauvais réseau pour l'un des deux.`,
        `Un film est un problème de <em>bande passante</em> qui se moque de la latence. Il met en
          mémoire tampon. Si la première image arrive 700 ms en retard, personne ne le remarque,
          parce que rien dans l'expérience ne dépend de la réaction du film à ce que vous faites. On
          lance, on attend, on regarde. L'aller-retour n'a lieu qu'une fois.`,
        `Un shell interactif, c'est l'image inverse. Il n'a presque besoin d'aucune bande passante —
          une session de terminal se mesure en kilobits, pas en mégabits — mais il paie l'aller-retour
          <strong>à chaque frappe dont vous attendez l'écho</strong>. À 700 ms, ce n'est pas une
          connexion lente. C'est une conversation avec deux tiers de seconde de silence après chaque
          caractère.`,
        `C'est là que les gens se trompent. Ils voient « 50 Mbit/s » sur le portail de bord, en
          concluent que la connexion est bonne, ouvrent un terminal, et découvrent que « bonne »
          n'a rien à voir avec le problème. La bande passante n'est pas la monnaie, ici.
          <strong>Ce sont les allers-retours.</strong>`
      ]
    },

    whatBreaks: {
      heading: "Ce qui casse vraiment (ce n'est pas la frappe)",
      intro: [
        `La panne est plus précise qu'un « ça rame », et la recherche est inhabituellement claire sur
          l'endroit où la douleur se loge.`,
        `Dans une étude contrôlée sur 31 participants comparant 20 ms et 200 ms de latence d'entrée
          de bout en bout, <strong>la frappe en continu n'a quasiment pas bougé</strong> : 290,9 ms par
          caractère contre 302,7, un écart que les auteurs n'ont pas pu qualifier de significatif.
          Les taux d'erreur étaient identiques.`
      ],
      afterTable: [
        `Mais la tâche de <em>correction</em> — repositionner un curseur aux flèches et rectifier du
          texte, ce que vous faites réellement dans un éditeur — est passée de <strong>38,9 secondes
          à 46,5 secondes, soit environ 20 % plus lent, avec une très forte taille d'effet</strong>
          (p &lt; 0,001, d = 1,673). Les auteurs énoncent le mécanisme sans détour : pendant la
          navigation, vous devez attendre l'écran en permanence, parce que l'endroit où le curseur a
          atterri détermine ce que vous ferez ensuite.`,
        `La charge subjective s'est aggravée là même où la vitesse n'avait pas bougé. Sur la tâche de
          frappe, où la performance était statistiquement inchangée, la <strong>frustration déclarée
          est tout de même passée de 20,9 à 31,3</strong>.`,
        `Transposez cela à un terminal et vous obtenez le nom exact de ce qui se délite en altitude :
          ce n'est pas la saisie d'une commande. C'est la navigation dans <code>vim</code>, la
          complétion par tabulation, le défilement dans <code>less</code>, et le rythme
          « je tape, je regarde » d'un REPL. Chacun de ces gestes est une boucle où l'action suivante
          dépend de ce qui vient de revenir.`
      ]
    },

    moveTheWork: {
      heading: "Déplacez le travail, pas les frappes",
      intro: [
        `Une fois admis que les allers-retours sont la ressource rare, le remède cesse d'être
          « prendre un avion plus rapide » pour devenir une question d'architecture :
          <strong>faire moins d'allers-retours, et faire porter davantage à chacun.</strong>`,
        `Il existe un outil bien connu qui attaque le problème de front. Mosh prédit ce que vos
          frappes vont produire et les affiche en local avant que le serveur ne les confirme. L'effet
          mesuré est spectaculaire : sur une liaison à environ une demi-seconde d'aller-retour, la
          réponse médiane à une frappe tombe de <strong>503 ms à moins de 5 ms</strong>. Sur un
          trajet transocéanique du MIT à Singapour, de <strong>273 ms à moins de 5 ms</strong>.`,
        `Mais lisez les petits caractères, car c'est tout l'enjeu. Mosh prédit environ
          <strong>70 % des frappes</strong>. Les quelque 30 % qu'il ne sait pas prédire relèvent,
          selon le mot même des auteurs, <em>principalement de la navigation</em> — et pour
          celles-là, son profil de latence redevient celui de SSH tout court. Autrement dit : la
          seule interaction que la latence élevée punit le plus durement est précisément celle que
          l'écho local ne peut pas sauver.`
      ],
      chartHeading: "prédites ou non",
      afterChart: [
        `La prédiction aide donc, et elle ne vous sauve pas. Ce qui vous sauve vraiment, c'est de
          refuser d'être dans la boucle aussi souvent.`,
        `<strong>Arrêtez de taper dans la latence. Mettez le travail de longue haleine à l'autre bout
          et allez le consulter.</strong> Une compilation, une suite de tests, une migration, un
          agent de code — aucun de ces travaux n'a besoin de votre présence pendant l'aller-retour.
          Ils ont besoin de vous au début, et au moment de décider. Tout ce qu'il y a entre les deux
          est le problème de la machine, et la machine est au sol, avec une bonne connexion.`,
        `C'est aussi pourquoi le <em>parallélisme</em> l'emporte sur l'<em>interactivité</em> en
          altitude. Vous ne pouvez pas taper vite à travers 700 ms. Vous pouvez en revanche
          parfaitement superviser quatre serveurs à la fois, parce que la supervision n'est pas
          limitée par la latence — elle est limitée par l'attention, et vous avez onze heures
          d'attention et rien d'autre à en faire.`
      ]
    },

    seat24c: {
      heading: "Ce que fait vraiment le siège 24C",
      lead: `Concrètement, sur un téléphone, sur une mauvaise liaison :`,
      outro: [
        `Rien de tout cela n'a été inventé pour les avions. C'est simplement à quoi le travail à
          distance sur une liaison hostile a toujours ressemblé, et un avion n'est qu'une liaison
          hostile inhabituellement honnête.`
      ]
    },

    caveat: {
      heading: "Une réserve, en toute honnêteté",
      prose: [
        `Deux choses que nous n'avons pas pu vérifier, et que nous ne ferons pas semblant de savoir :`,
        `<strong>Si le réseau de votre compagnie laissera seulement sortir SSH.</strong> Nous n'avons
          trouvé aucune preuve publique fiable sur le blocage de ports, la politique VPN ou les
          délais d'inactivité chez les fournisseurs de Wi-Fi aérien — et beaucoup d'affirmations
          péremptoires sur les forums qui ne résistent pas à la vérification. Cela varie selon le
          transporteur, le fournisseur et l'appareil. Testez sur un vol court avant de bâtir tout un
          long-courrier autour.`,
        `<strong>À quoi la cabine passe réellement son temps.</strong> Les statistiques de
          divertissement à bord les plus citées se révèlent remonter à des grilles tarifaires
          publicitaires dépourvues de toute méthodologie, et nous les avons mises à la poubelle. La
          meilleure enquête que nous ayons trouvée — Inmarsat/Censuswide, 11 231 passagers dans dix
          pays, quoique menée en 2022 et portant sur des intentions plutôt que sur du temps mesuré —
          place le divertissement loin devant le travail : <strong>41 % voulaient regarder des films
          téléchargés et 35 % en streaming, contre 26 % qui voulaient travailler.</strong>`,
        `Traitez donc le siège 24B comme un personnage, pas comme une statistique. Il n'a jamais été
          question de dire que regarder un film est un tort. Seulement que l'alternative n'est plus
          hors de portée.`
      ]
    },

    descent: {
      heading: "Descente",
      prose: [
        `Le film se termine là où il s'était terminé les trois fois précédentes. La descente
          commence. Le siège 24B a passé un vol parfaitement agréable et atterrira reposé, ce qui
          n'est pas rien.`,
        `Le siège 24C atterrit le travail fait — parce que le travail n'a jamais été dans le siège.
          Il était sur une machine au sol depuis le début, et le téléphone n'a jamais été qu'une
          fenêtre ouverte dessus.`,
        `Onze heures, c'est très long à passer à 700 ms. C'est très court à passer à superviser
          quatre serveurs qui se moquent complètement du satellite.`
      ]
    }
  },

  seat24b: {
    tag: "siège 24b",
    lines: [
      { time: "19:04", verb: "lecture", text: "— film, 118 min" },
      { time: "21:02", verb: "lecture", text: "— film, encore" },
      { time: "23:10", verb: "veille", text: "— cabine éteinte" },
      { time: "05:41", verb: "réveil", text: "— descente" }
    ]
  },

  seat24c: {
    tag: "siège 24c",
    lines: [
      { time: "19:04", verb: "attache", text: "— 4 sessions, 1 grille" },
      { time: "21:02", verb: "fusion", text: "— trois branches" },
      { time: "23:10", verb: "vert", text: "— suite en échec remise au vert" },
      { time: "05:41", verb: "relance", text: "— job bloqué relancé" }
    ]
  },

  quotes: [
    `Même avion, même antenne, même mauvais Wi-Fi. La différence tient
        entièrement à ce que vous avez mis à l'autre bout.`,
    `L'avion dans lequel vous êtes sera le dernier qu'ils moderniseront.
        Prévoyez 700 ms et réjouissez-vous des 62.`,
    `La latence ne taxe pas votre frappe. Elle taxe chaque décision qui
        attend l'écran.`
  ],

  orbit: {
    alt: "Schéma : un satellite géostationnaire à 35 786 km coûte 477 ms d'aller-retour à la lumière ; un satellite en orbite terrestre basse à 550 km en coûte 7,3.",
    geoLabel: "GEO 35 786 km",
    geoValue: "477 ms lumière",
    leoLabel: "LEO 550 km",
    leoValue: "7,3 ms lumière",
    aircraft: "siège 24C, 11 000 m",
    caption: "Pas à l'échelle — rien qui contienne 35 786 km ne l'est jamais."
  },

  latencyChart: {
    rows: [
      { label: "GEO — Hughes / Intelsat / Viasat, médiane", value: "703 ms" },
      { label: "LEO au-dessus du Pacifique — médiane long-courrier", value: "62 ms" },
      { label: "LEO — Starlink en vol, médiane globale", value: "44 ms" }
    ],
    note: "Barres à une même échelle linéaire. Source 1."
  },

  rolloutFigure: {
    items: [
      {
        name: "United",
        value: "≈60",
        text: `gros-porteurs équipés Starlink, sur plus de 400 appareils au total. Le reste
            de la flotte gros-porteurs n'est pas attendu avant l'été 2027.`
      },
      {
        name: "Virgin Atlantic",
        value: "12 sur ~43",
        text: `gros-porteurs faits — environ 28 pour cent. Les 787 s'étalent sur le second
            semestre 2026 et les A330neo jusqu'en 2027.`
      }
    ],
    note: `Sources 5 et 6. Le reste des gros-porteurs United est attendu d'ici l'été 2027 ;
          les 787 de Virgin sur le second semestre 2026 et les A330neo jusqu'en 2027.`
  },

  latencyTable: {
    caption: "Schmid et al., MUM '23 — n = 31, latence d'entrée de 20 ms vs 200 ms",
    head: ["tâche", "20 ms", "200 ms", "verdict"],
    rows: [
      { task: "frappe / caractère", low: "290,9", high: "302,7", verdict: "n.s." },
      { task: "tâche de correction", low: "38,9 s", high: "46,5 s", verdict: "+20 %" },
      { task: "frustration", low: "20,9", high: "31,3", verdict: "p=0,004" }
    ]
  },

  moshChart: {
    rows: [
      { label: "frappes que mosh affiche instantanément", value: "≈70 %" },
      { label: "non prédites — « principalement de la navigation »", value: "≈30 %" }
    ],
    note: "Source 4."
  },

  windows: [
    {
      title: "sessions-qui-survivent-a-la-connexion",
      body: `L'avion bascule d'un faisceau à l'autre, le portail redemande une authentification, la
            connexion tombe. <code>tmux</code> garde malgré tout le shell en marche sur le serveur ; la
            session est une chose posée à l'autre bout, pas une chose tenue dans votre main. Eternal
            Terminal pousse la même idée plus loin et laisse la session survivre à la connexion TCP
            elle-même, en tamponnant puis en rejouant ce que vous avez manqué.
            <span style="color:var(--dim)">(Avertissement loyal en réseau filtré : ET a besoin de son
            propre port — 2022 par défaut — <em>en plus</em> du 22 de SSH.)</span>`
    },
    {
      title: "plus-d-un-probleme-a-la-fois",
      body: `Plusieurs sessions dans une grille, plusieurs serveurs enregistrés, chacun occupé à
            quelque chose qui n'a pas besoin de surveillance entre deux décisions.`
    },
    {
      title: "des-agents-qui-tapent-a-votre-place",
      body: `Les agents de code tournent sur <em>vos</em> serveurs, à la latence du sol, là où se
            trouve le code. Ce n'est pas eux qui paient la taxe satellite ; vous ne la payez que
            lorsque vous leur répondez.`
    },
    {
      title: "push-quand-ca-compte",
      bellLabel: " (cloche)",
      body: `Les alertes agent se déclenchent quand quelque chose a réellement besoin d'un humain —
            le vol se passe donc à relire et à décider, pas à fixer une invite en attendant un écho.`
    }
  ],

  cta: {
    cmdComment: "gratuit · open source · Apache-2.0",
    heading: "Votre prochain long-courrier, c'est onze heures de temps machine.",
    prose: [
      `Mobile SSH est un client SSH, SFTP et terminal natif pour Android, iPhone et iPad. Sessions
          multiples, gestionnaire tmux intégré, Eternal Terminal, et des alertes push quand un agent
          a besoin de vous. Gratuit, sans compte, sans pub, open source.`
    ],
    tags: ["Pas de pubs", "Pas de compte", "Données sur l'appareil", "Apache-2.0"],
    playButton: "S'inscrire sur Google Play",
    iosButton: "Rejoindre la bêta iOS",
    note: `Android est en test fermé — inscrivez-vous avec le compte Google que vous utiliserez pour
      tester, et ouvrez le lien dans le navigateur de votre mobile ; le test fermé peut ne pas être
      visible depuis l'application Google Play.`
  },

  sources: {
    heading: "Sources",
    items: [
      `Données Ookla en vol du T1 2025, analysées dans <em>A First Look at Starlink In-Flight Performance</em> — arXiv:2508.09839, évalué par les pairs sur IEEE Xplore doc 11353148. (44 ms contre 703-757 ms ; médiane de 62 ms sur le Pacifique, fourchette 19-86 ms.)`,
      `<em>From GEO to LEO: First Look Into Starlink In-Flight Connectivity</em>, ACM IMC 2025 — Jang, Varvello, Raman, Zaki. 25 vols, 7 compagnies. (&lt;40 ms en LEO contre plus de 550 ms en GEO.)`,
      `Schmid et al., MUM '23, <em>Effects of Text Input Latency</em> — n=31, 20 ms vs 200 ms. (290,9 contre 302,7 ms/caractère, n.s. ; correction 38,9 s → 46,5 s, p&lt;0,001, d=1,673 ; frustration 20,9 → 31,3, p=0,004.)`,
      `Winstein &amp; Balakrishnan, <em>Mosh: An Interactive Remote Shell for Mobile Clients</em>, USENIX ATC 2012. (503 ms → &lt;5 ms ; 273 ms → &lt;5 ms ; ~70 % des frappes prédites ; le reste, non prédit, « principalement de la navigation ».)`,
      `Salle de presse United Airlines, 22 juin 2026, <em>United Accelerates Starlink Wi-Fi Rollout with First Widebody Transatlantic Flight</em>. (Plus de 400 appareils ; ~60 gros-porteurs ; flotte gros-porteurs complète à l'été 2027.)`,
      `Communiqué de presse Virgin Atlantic, 12 avril 2026. (A350 terminés ; 787 au second semestre 2026 ; A330neo en 2027.)`,
      `Documentation Eternal Terminal — eternalterminal.dev/howitworks, github.com/MisterTea/EternalTerminal. (Tampon et rejeu ; port 2022 par défaut, en plus de SSH.)`,
      `Enquête Inmarsat/Censuswide Passenger Experience 2022, n=11 231 dans 10 pays. (Films téléchargés 41 %, streaming 35 %, travail 26 % — intentions déclarées, choix multiples, terrain en 2022.)`
    ],
    quitHint: "— appuyez sur q pour quitter"
  },

  colophon: [
    "Mobile SSH — SSH / SFTP / terminal gratuit et open source pour Android, iPhone et iPad.",
    "Apache-2.0. Pas de pubs, pas de compte, pas de version Pro."
  ]
};
