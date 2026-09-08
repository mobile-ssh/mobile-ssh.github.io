import { defineGoOutside } from "./define";

export const fr = defineGoOutside({
  metaTitle: "Sortez. L’agent travaille toujours. | Mobile SSH",
  metaDescription:
    "Votre agent de code tourne sur votre serveur, pas sur votre téléphone. Lancez-le sous tmux, sortez, et laissez les alertes vous trouver quand il a vraiment besoin d’une personne.",
  back: "Blog",
  eyebrow: "Note de terrain",
  title: "Sortez. L’agent travaille toujours.",
  standfirst:
    "Ce n’est jamais le téléphone qui maintenait votre agent en vie : c’est le serveur. Une fois cela admis, un après-midi dehors ne coûte rien — vous partez, le travail continue, et la seule chose qui vous interrompt est une question qui mérite vraiment une réponse.",
  author: "Le comité éditorial de Mobile SSH",
  date: "7 septembre 2026",
  readingTime: "7 min de lecture",

  board: {
    ariaLabel:
      "Un tableau de conditions qui lit quatre sessions en cours comme des spots de surf : trois avancent régulièrement et une, nommée claude, attend une personne.",
    heading: "CONDITIONS DU JOUR",
    timeLabel: "06:14 HST",
    breakHeading: "Spot",
    swellHeading: "Houle",
    stateHeading: "État",
    rows: [
      { name: "api-prod", swell: "2-3 ft", state: "monte", needsYou: false },
      { name: "nightly-tests", swell: "6-8 ft", state: "stable", needsYou: false },
      { name: "claude", swell: "10+ ft", state: "vous attend", needsYou: true },
      { name: "web-api", swell: "1-2 ft", state: "stable", needsYou: false }
    ],
    statusLine: "4 sessions · 1 en attente · dernier relevé 06:14",
    caption:
      "Quatre sessions sur une machine qui vous appartient. Trois d’entre elles se moquent de l’endroit où vous êtes. La quatrième est la seule raison de sortir le téléphone de votre poche."
  },

  body: [
    `Le travail se termine, que la compilation soit finie ou non. <em>Pau hana</em> — la fin de la journée de travail — arrive selon son propre horaire, et la réponse habituelle consiste à l’ignorer : garder le portable ouvert sur la table, surveiller d’un œil une barre de progression et sacrifier sa soirée à un processus qui n’a besoin de vous à aucun moment.`,
    `Ce marché n’a de sens que si le travail se déroule sur la machine que vous transportez. En général, ce n’est pas le cas. L’agent est un processus sur un serveur : il modifie les fichiers du disque de ce serveur et lance les tests de ce serveur. Votre téléphone est une fenêtre ouverte dessus. Fermez la fenêtre, la pièce est toujours là.`,
    `Le serveur est la couche durable`,
    `Lancez Claude Code ou Codex dans <code>tmux</code>, <code>herdr</code> ou Zellij et la session appartient au serveur, pas à votre connexion. Tombez à une barre de réseau, entrez dans un tunnel de lave, rangez le téléphone pendant deux heures — l’agent continue de lire, de modifier et de lancer les tests, car rien en lui n’a jamais été rattaché à vous.`,
    `C’est là toute l’astuce, et il vaut la peine d’être précis, car on attribue facilement le mérite au mauvais composant. Ce n’est pas l’app qui maintient le processus en vie. C’est le multiplexeur, à l’autre bout. Le rôle de Mobile SSH est de partir et de revenir proprement.`,
    `Vous n’êtes pas l’alimentation électrique. Cessez de vous comporter comme telle.`,
    `Passez voir, ne montez pas la garde`,
    `Un agent qui tourne pendant une heure a besoin d’une personne durant quatre-vingt-dix secondes environ. Le problème n’a jamais été l’attente ; c’est de ne pas savoir <em>quand</em> ces quatre-vingt-dix secondes arrivent, et c’est ce qui pousse à fixer un écran qui n’a rien à dire.`,
    `Les Agent Alerts répondent à cela. La détection est volontairement bête, et donc digne de confiance : une cloche de terminal, une notification <code>OSC 9</code> ou <code>OSC 777</code>, et le hook d’agent que vous installez une seule fois sur le serveur. Elle ne lit pas votre sortie pour en deviner l’intention, et il n’existe aucun réglage de sensibilité à ajuster — elle rapporte ce que le programme d’en face a réellement annoncé.`,
    `Le téléphone reste donc dans votre poche jusqu’à ce qu’une vraie question se pose. Il vibre alors, vous lisez l’invite, vous tapez une réponse et vous le rangez. Toute l’interaction tient là, et elle fonctionne depuis une plage, un départ de sentier ou la file d’attente pour une glace pilée.`,
    `Ce que l’île ne peut pas réparer`,
    `Deux limites honnêtes, car un billet qui ne liste que des points forts est une publicité.`,
    `La différence entre les plateformes est réelle et mérite d’être anticipée. Sur Android, un service de premier plan maintient la connexion pendant que l’app est en arrière-plan — la notification persistante <em>est</em> la session. iOS n’a aucune exécution en arrière-plan ; il se reconnecte et se rattache à votre multiplexeur à votre retour. Dans les deux cas, l’agent sur le serveur ne s’est jamais arrêté, et c’est bien là l’essentiel. Seule la fenêtre s’est fermée.`,
    `L’aloha n’excuse pas la négligence`,
    `Bien partir demande une petite discipline. Tout ce que vous ne voudriez pas laisser tourner sans surveillance pendant deux heures ne doit pas être lancé au moment de franchir la porte — un agent au milieu d’une migration ne s’améliore pas avec la distance. Donnez-lui une tâche avec un point d’arrêt naturel, demandez-lui d’inspecter avant de modifier, et laissez le diff être ce que vous relirez à votre retour.`,
    `Et traitez la notification avec le même soin qu’un bipeur. Si tout alerte, plus rien n’alerte. Le hook se déclenche sur les états qui méritent d’interrompre une personne ; laissez-le ainsi et la vibration gardera son sens.`,
    `La compilation n’a pas besoin de public. Sortez et soyez quelque part.`
  ],

  checklist: {
    heading: "Avant de franchir la porte",
    steps: [
      {
        heading: "Lancez-le sous un multiplexeur",
        body: "Exécutez l’agent dans <code>tmux</code>, <code>herdr</code> ou Zellij pour que la session survive à votre connexion au lieu d’en dépendre."
      },
      {
        heading: "Installez le hook d’agent",
        body: "Une fois par serveur, depuis l’app. C’est un petit script shell que n’importe quel agent peut appeler — pas une intégration propriétaire, et sans lien avec une seule CLI."
      },
      {
        heading: "Vérifiez qu’une alerte arrive",
        body: "Déclenchez une invite et confirmez que le téléphone vibre avant de vous y fier. Une alerte que vous n’avez jamais vue fonctionner n’est pas un plan."
      },
      {
        heading: "Donnez-lui un point d’arrêt",
        body: "Une tâche qui se termine quelque part de sensé vaut mieux qu’une tâche ouverte, puisque vous choisissez de ne pas la surveiller."
      }
    ],
    promptLabel: "Une tâche qu’on peut laisser seule",
    prompt:
      "Lis AGENTS.md, puis corrige les tests de handler qui échouent. Inspecte le diff avant de modifier, lance les tests ciblés, et arrête-toi une fois qu’ils passent — ne commite pas."
  },

  truth: {
    heading: "Ce qui survit à votre départ",
    itemHeading: "Quand le téléphone retourne dans la poche",
    resultHeading: "Ça continue ?",
    yes: "Oui",
    no: "Non",
    rows: [
      { item: "Le processus de l’agent sur le serveur", value: "Détenu par tmux, herdr ou Zellij", survives: true },
      { item: "Fichiers, diffs et sortie des tests", value: "Sur le disque du serveur", survives: true },
      { item: "Votre place dans la session", value: "Rattachée à votre retour", survives: true },
      { item: "La connexion, sur Android", value: "Maintenue par un service de premier plan", survives: true },
      { item: "La connexion, sur iOS", value: "Aucune exécution en arrière-plan — il se reconnecte", survives: false },
      { item: "Une alerte sans réseau pour la transmettre", value: "Arrive dès que le téléphone est de nouveau joignable", survives: false }
    ],
    note: "L’agent continue de tourner à chaque ligne. Seul varie le fait que votre téléphone gardait ou non la fenêtre ouverte."
  },

  cta: {
    ariaLabel: "Obtenir Mobile SSH",
    heading: "Laissez le portable. Emportez le terminal.",
    body: "Connectez-vous directement à votre machine, lancez l’agent de votre choix dans tmux, herdr ou Zellij, et laissez les Agent Alerts vous prévenir quand il a besoin d’une personne — avec SFTP, les tunnels et un vrai terminal dans la même app.",
    tags: ["Tout agent", "SSH direct", "Agent Alerts", "Apache-2.0"],
    playButton: "Disponible sur Google Play",
    iosButton: "Rejoindre la bêta iOS",
    note: `Android est en test fermé : inscrivez-vous avec le compte Google utilisé pour le test, puis ouvrez le lien d’inscription dans votre navigateur mobile. Déjà inscrit ? Ouvrez directement la <a href="{playUrl}" rel="noopener">fiche Play</a>.`
  }
});
