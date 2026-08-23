import type { LaptopsPost } from "./types";

// French translation of /blog/laptops-are-dead/.
// Mirrors en.ts exactly: same keys, same block order, same inline markup.
// The split of the h1 (titleLead / titleSoft) reproduces the French original of
// the conceit — "Le roi est mort, vive le roi !".

export const fr: LaptopsPost = {
  metaTitle: "L'ordinateur portable est mort, mais SSH et TCP/IP ont survécu | Mobile SSH",
  metaDescription:
    "Éloge funèbre affectueux de l'ordinateur portable (1981-2026). TCP/IP a été conçu en 1974 et SSH écrit en 1995 ; tous deux ont survécu au matériel et ont continué dans l'appareil que vous avez déjà en main. Le plaidoyer pour Mobile SSH — le client SSH, SFTP et terminal pour Android, iPhone et iPad. Gratuit, natif et open source.",

  back: "Blog",
  eyebrow: "Opinion",
  titleLead: "L'ordinateur portable est mort.",
  titleSoft: "Vive votre poche !",
  standfirst: `<b>Mais SSH et TCP/IP ont survécu.</b> Éloge funèbre affectueux d'un compagnon lourd au ventre tiède —
et plaidoyer pour le terminal qui a discrètement emménagé dans l'appareil que vous avez déjà en main.`,
  author: "La rédaction de Mobile SSH",
  date: "27 juillet 2026",
  readingTime: "7 min de lecture",

  leadFigure: {
    terminal: {
      title: "ssh · prod-01 · tmux",
      prompt: "you@prod-01",
      path: "~/app",
      command: `claude "corrige le test qui échoue"`,
      reading: "lecture de src/api/auth.ts",
      patching: "correction du rafraîchissement du token …",
      result: "3 fichiers modifiés, tests au vert",
      needsInput: "l'agent attend une réponse",
      push: "git push origin main"
    },
    toast: {
      title: "Alertes agent",
      host: "prod-01",
      body: "Claude Code attend votre relecture"
    },
    caption:
      "Pièce à conviction n° 1 : une vraie session SSH, un agent de code et une alerte agent — le tout sur l'objet posé dans votre poche, sans le moindre chargeur en vue."
  },

  body: [
    {
      kind: "lead",
      html: `L'Ordinateur portable — compagnon bien-aimé des développeurs, des écrivains et des voyageurs du monde
entier — s'est éteint paisiblement cette semaine à l'âge de 45 ans, dans un café, avec 6&nbsp;% de
batterie et aucun chargeur en vue. Il était entouré, comme toujours, des onglets qu'il avait promis
de lire.`
    },
    {
      kind: "p",
      html: `Il n'y a pas eu de drame. Il a simplement baissé sa luminosité, soupiré une fois par le
ventilateur, et demandé — pour la dernière fois, au pire moment possible — si ce ne serait pas
l'occasion d'installer une mise à jour.`
    },
    {
      kind: "pull",
      html: `« Il exigeait un redémarrage pour son firmware précisément à la minute où vous veniez enfin d'avoir une idée. Comme toujours. »`
    },
    { kind: "h2", html: `Une vie lourde, portée fidèlement` },
    {
      kind: "p",
      html: `Né en 1981 de l'Osborne&nbsp;1 — onze kilos d'ambition dite portative, sans batterie, avec un écran
de cinq pouces —, l'Ordinateur portable a passé quarante-cinq ans à s'alléger sans jamais tout à fait
devenir léger. Il est mort à environ un kilo et demi, ce que son géniteur aurait tenu pour de la
sorcellerie. Nous nous souvenons du clavier. Du dessous tiède. Des ventilateurs qui annonçaient en
soufflant chaque acte de pensée. Du sac toujours un peu trop plein, du bloc d'alimentation gros comme
un petit roman, et de la quête — éternelle, pleine d'espoir — d'une prise libre près de la fenêtre.`
    },
    {
      kind: "p",
      html: `Il nous en a beaucoup demandé, et nous l'avons porté quand même, du bureau à la porte d'embarquement
jusqu'au siège 24B, parce que pendant longtemps il a été la seule chose capable d'abriter un vrai
terminal. Ce n'est plus vrai.`
    },
    { kind: "h2", html: `Il laisse dans le deuil ses aînés` },
    {
      kind: "p",
      html: `L'Ordinateur portable ne laisse aucun enfant. Les successeurs qu'on lui avait promis — la tablette,
le Chromebook, le machin au clavier détachable — sont arrivés, se sont assis au fond de la salle, et
se sont révélés n'être que des ordinateurs portables avec moins de ports. Il laisse en revanche deux
parents qui travaillaient déjà à sa naissance, et qui travaillaient encore ce matin.`
    },
    {
      kind: "p",
      html: `<strong>TCP/IP</strong> est l'aîné. Vint Cerf, Bob Kahn et toute une distribution de collaborateurs
en ont publié la conception en mai 1974 ; la RFC&nbsp;675 l'a détaillée en décembre de la même année
et a inventé au passage le mot « internet ». L'ARPANET a commencé à basculer dessus le 1er janvier
1983 et avait terminé en juin — à ce moment-là, l'Ordinateur portable était un bambin muni d'un
lecteur de disquettes.`
    },
    {
      kind: "p",
      html: `<strong>SSH</strong> est le neveu, trente et un ans, le plus jeune des porteurs du cercueil. Tatu
Ylönen l'a écrit à Helsinki University of Technology au printemps 1995, après qu'un sniffer posé sur
le réseau de l'université eut discrètement récolté des milliers de mots de passe. Il a publié
<code>ssh-1.0.0</code> en juillet, et il a choisi le port 22 lui-même : le seul numéro libre entre
FTP sur 21 et telnet sur 23, en se disant que s'installer entre les deux protocoles qu'il comptait
remplacer « pouvait être l'une de ces petites choses qui donnent un semblant de crédibilité ». Il a
écrit à l'IANA le lundi. On lui a dit oui le mardi. Il a livré le mercredi.`
    },
    { kind: "ledger" },
    { kind: "h2", html: `Ce que les protocoles n'ont jamais présupposé` },
    {
      kind: "p",
      html: `Leur longévité n'a rien de mystérieux. Ils ont duré parce qu'ils ne supposaient presque rien. TCP
suppose des paquets, dont certains se perdront, se dupliqueront ou arriveront dans le désordre. SSH
suppose un flux d'octets fiable et une paire de clés. Absents des deux listes : la taille de l'écran,
la disposition du clavier, le châssis, la charnière, la prise murale et un fabricant encore en
activité.`
    },
    {
      kind: "p",
      html: `SSH ne suppose même pas la taille de votre terminal. Il la demande — et il acceptera une autre
réponse plus tard. C'était une politesse inventée pour les gens qui tiraient le coin d'une fenêtre
sur un écran de bureau. C'est aussi la raison pour laquelle faire pivoter un téléphone ne met pas fin
à une session.`
    },
    {
      kind: "pull",
      html: `« Le matériel est un corps. Un protocole est une habitude. Un seul des deux peut tomber dans une cage d'escalier. »`
    },
    {
      kind: "p",
      html: `Tout ce qui était lié à un châssis est parti en premier, et rien de tout cela n'est mort d'une
mauvaise ingénierie. Le lecteur de disquettes, le port PC Card, le connecteur de la station d'accueil
— chacun était bien fait pour un certain jeu de conditions, et ce sont les conditions qui étaient
mortelles. Un protocole n'est même pas lié à son propriétaire. Quand la licence des versions
suivantes d'Ylönen s'est resserrée, le projet OpenBSD est revenu à <code>ssh 1.2.12</code>, la
dernière version assez libre pour être réutilisée, et a livré OpenSSH avec OpenBSD&nbsp;2.6 le
1er décembre 1999. Le protocole, lui, a continué comme si de rien n'était. Il n'avait jamais
appartenu à personne en particulier, ce qui est précisément la raison pour laquelle il est encore
là.`
    },
    { kind: "h2", html: `La seule hypothèse qu'il a fallu rustiner` },
    {
      kind: "p",
      html: `L'honnêteté impose une rectification. TCP a bel et bien fait une hypothèse, et elle était fausse :
il a supposé que la machine ne bouge pas. Une connexion se nomme par quatre nombres — deux adresses,
deux ports —, ce qui était une façon parfaitement sensée de nommer une chose en 1981, quand la chose
était boulonnée dans une salle à plancher technique. Sortez d'un café avec un téléphone à la main et
l'un de ces quatre nombres devient discrètement un mensonge.`
    },
    {
      kind: "p",
      html: `Il n'y a pas eu de deuxième enterrement. On a gardé le protocole et on a rustiné l'hypothèse autour
de lui. Le travail a déménagé à l'autre bout, hors d'atteinte d'un client qui franchit une porte :
<code>screen</code>, puis <code>tmux</code>, qui maintiennent le shell ouvert pendant que le terminal
va et vient. Eternal Terminal est allé plus loin et a nommé la session plutôt que l'adresse, si bien
que la session survit au changement d'adresse sous ses pieds.`
    },
    {
      kind: "pull",
      html: `« Vos serveurs n'ont jamais été fidèles à l'ordinateur portable. Ils étaient fidèles au port. »`
    },
    {
      kind: "p",
      html: `Rien de tout cela n'a été inventé pour les téléphones. Ils en ont hérité. Un client qui embarque un
transport Eternal Terminal, un gestionnaire tmux, des keepalives avec reconnexion à backoff
exponentiel et plusieurs adresses par serveur enregistré peut sortir d'un immeuble en pleine commande
et reprendre le fil sur le trottoir. On indique à l'autre bout la chaîne de version de votre client
et la taille de votre terminal. On ne lui dit jamais s'il y a une charnière.`
    },
    { kind: "h2", html: `Le travail a discrètement emménagé dans une poche` },
    {
      kind: "p",
      html: `Dans ses dernières années, l'Ordinateur portable s'est mis à douter de son utilité. Il avait ses
raisons. Le travail qu'il revendiquait autrefois comme le sien — un vrai terminal, un vrai transfert
de fichiers, de vraies clés, de vrais tunnels — avait discrètement glissé dans l'appareil que vous
avez déjà en main.`
    },
    {
      kind: "p",
      html: `Cet appareil fait tourner <strong>Mobile SSH</strong> : un client SSH, SFTP et terminal natif pour
Android, iPhone et iPad. Pas un shell jouet. Pas un bureau à distance qui se ferait passer pour un
terminal. Un vrai terminal <span class="nowrap">xterm-256color</span> complet — le vrai — qui tient
dans la place qu'occupait jadis le chargeur de l'Ordinateur portable.`
    },
    {
      kind: "pull",
      html: `« Le travail qu'il appelait autrefois le sien a emménagé dans une poche — et n'a jamais réclamé une seule prise. »`
    },
    { kind: "h2", html: `Il laisse dans le deuil : votre téléphone — et Mobile SSH` },
    {
      kind: "p",
      html: `L'inventaire de la succession. Ni fleurs ni couronnes : la famille vous demande seulement de lire
l'éloge ci-dessous et de noter que chacune de ses lignes correspond à un logiciel bien réel, que vous
pouvez installer aujourd'hui.`
    },
    { kind: "estate" },
    {
      kind: "pull",
      html: `« “L'ordinateur portable est mort” est un éloge funèbre, pas un rapport du légiste. Les portables restent les bienvenus à la veillée. »`
    },
    {
      kind: "p",
      html: `Nous le disons avec tendresse. L'Ordinateur portable a servi avec honneur, et il est le bienvenu à
la veillée — ouvert sur une table d'appoint, ventilateur ronronnant doucement, enfin branché. Mais le
travail de la journée a fait des bagages plus légers et quitté les lieux. Il tient dans une poche,
désormais. Il répond dès la première sonnerie.`
    },
    {
      kind: "p",
      html: `SSH et TCP/IP n'ont envoyé aucune fleur. Ils travaillaient.`
    }
  ],

  ledger: {
    entries: [
      {
        year: "1974",
        event: "Cerf, Kahn et leurs collègues publient la conception qui deviendra TCP/IP",
        status: "toujours en service",
        on: true
      },
      {
        year: "1978",
        event: "DEC lance le VT100, son premier terminal compatible ANSI",
        status: "séquences toujours utilisées",
        on: true
      },
      {
        year: "1981",
        event: "L'Osborne&nbsp;1 arrive en boutique : 11&nbsp;kg, 1 795 $, secteur uniquement",
        status: "arrêté en 1983",
        on: false
      },
      {
        year: "1983",
        event: "L'ARPANET achève sa migration de NCP vers TCP/IP",
        status: "toujours en service",
        on: true
      },
      {
        year: "1995",
        event: "SSH est écrit à Helsinki ; l'IANA attribue le port 22 le 11 juillet",
        status: "toujours en service",
        on: true
      },
      {
        year: "2026",
        event: "L'Ordinateur portable, 45 ans, dans un café, à 6 % et sans chargeur",
        status: "laisse dans le deuil ce qui précède",
        on: false
      }
    ],
    caption: "Ordre de préséance, tel qu'il a été lu à la cérémonie. Le doyen des endeuillés a cinquante-deux ans."
  },

  estate: [
    {
      heading: "Un vrai terminal, dans votre poche",
      body: "Émulation <code>xterm-256color</code> complète, jusqu'à huit sessions simultanées dans une grille redimensionnable, un gestionnaire de sessions tmux intégré, et Eternal Terminal pour des connexions qui survivent aux coupures réseau, à la mise en veille et aux changements d'IP."
    },
    {
      heading: "Fichiers et tunnels, d'origine",
      body: "Un explorateur SFTP à deux panneaux pour déplacer des fichiers entre le téléphone et le serveur, avec des redirections de ports locales et des tunnels enregistrés juste à côté de chaque hôte — montés automatiquement dès que vous vous connectez."
    },
    {
      heading: "Des clés générées sur l'appareil",
      body: "Génération de clés SSH sur l'appareil — Ed25519 et ECDSA — avec authentification par mot de passe ou par clé privée. Rien ne quitte le téléphone."
    },
    {
      heading: "Des agents de code, avec les alertes agent",
      body: "Faites tourner Claude Code, Codex et d'autres agents sur <em>vos propres</em> serveurs, directement depuis votre téléphone. Les alertes agent envoient une notification push — son et vibration — à l'instant où un agent a besoin de votre réponse : vous pouvez vous éloigner sans perdre le fil."
    },
    {
      heading: "Habillé pour l'occasion",
      body: "Polices et jeux de couleurs configurables, glyphes powerline et icônes Nerd Font, et un système de plugins pour aller plus loin — réglez le terminal jusqu'à ce qu'il devienne vraiment le vôtre."
    },
    {
      heading: "Gratuit pour de vrai, sans détour",
      body: "Pas de pubs. Pas de paywall Pro. Pas de compte requis. Vos données restent sur l'appareil, et l'ensemble est open source sous licence Apache-2.0."
    }
  ],

  cta: {
    ariaLabel: "Obtenir Mobile SSH",
    heading: "Ni fleurs ni couronnes : fermez plutôt quelques onglets.",
    body: "Installez Mobile SSH, accordez à votre ordinateur portable le repos qu'il a mérité, et emportez un vrai terminal dans votre poche — gratuit, natif et open source.",
    tags: ["Pas de pubs", "Pas de compte", "Données sur l'appareil", "Apache-2.0"],
    playButton: "S'inscrire sur Google Play",
    iosButton: "Rejoindre la bêta iOS",
    note: `Android est en test fermé : inscrivez-vous avec le compte Google que vous utiliserez pour
tester, et ouvrez le lien d'inscription dans le navigateur de votre mobile — le test fermé peut ne
pas être visible depuis l'application Google Play. Déjà inscrit ? Allez directement à la
<a href="{playUrl}" rel="noopener">fiche Play</a>.`
  }
};
