import type { Dict } from "../types";

export const fr: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Langue",
    languageSwitcher: "Changer de langue"
  },
  nav: {
    home: "Accueil",
    features: "Fonctionnalités",
    docs: "Documentation",
    compare: "Comparer",
    about: "À propos",
    privacy: "Confidentialité"
  },
  footer: {
    tagline: "Flux SSH, SFTP et terminal ciblés pour les appareils Android.",
    documentation: "Documentation",
    comparison: "Comparaison",
    privacy: "Confidentialité",
    contact: "Contact"
  },
  home: {
    metaTitle: "Mobile SSH — Client SSH pour Android",
    metaDescription:
      "Mobile SSH est un client SSH ciblé pour Android avec terminaux multi-sessions, transfert SFTP, clés privées, redirection de ports et flux compatibles tmux.",
    eyebrow: "Client SSH pour Android",
    h1: "Mobile SSH",
    intro:
      "Un client SSH ciblé pour Android, avec terminaux multi-sessions, authentification par clé privée, transfert de fichiers SFTP, redirection de ports locale et contrôles compatibles tmux pensés pour téléphone et tablette.",
    versionLine: "Disponible en {count} langues · version {version}",
    ctaDocs: "Lire la documentation",
    ctaPlay: "Disponible sur Google Play",
    advantagesHead: "Pourquoi Mobile SSH",
    advantagesIntro: "Conçu autour des points faibles habituels des clients SSH mobiles.",
    advantages: [
      { title: "Pas de version Pro, pas de pubs", text: "Toutes les fonctions dans la même app. Pas de paywall qui cache les workflows essentiels derrière un Pro, pas de bannières publicitaires dans le terminal." },
      { title: "Vos données restent locales", text: "Serveurs, identifiants et clés enregistrés sur l'appareil. Aucun compte cloud, rien qui puisse être abandonné." },
      { title: "Hôtes enregistrés, connexion en un tap", text: "Ajoutez un hôte une fois et reconnectez-vous en un tap — clé, port et tunnels configurés inclus." },
      { title: "Touches terminal au-dessus du clavier", text: "Rangée dédiée avec ESC, TAB, CTRL, ALT, FN, flèches, Home, End, PgUp/PgDn — sans gêner les suggestions Gboard." },
      { title: "Redirection de ports sans commandes", text: "Les tunnels sont liés au profil serveur et s'activent automatiquement à la connexion." },
      { title: "Résiste au verrouillage et au changement de réseau", text: "Service au premier plan, wake locks et reconnexion automatique gardent les sessions actives malgré l'écran éteint, les changements d'app et de réseau." }
    ],
    sectionAHead: "Conçu pour l'usage SSH sur Android",
    sectionAIntro:
      "Mobile SSH raccourcit le chemin d'administration habituel : enregistrer un serveur, se connecter, garder les sessions vivantes, déplacer des fichiers au besoin et revenir vite aux terminaux actifs.",
    features: [
      { title: "Terminal SSH", text: "Émulation VT100/xterm-256color avec couleurs, touches de curseur, scrollback, copie et prise en charge du clavier Android." },
      { title: "Grille multi-sessions", text: "Jusqu'à huit sessions à la fois, changement de panneau au tapotement, double-tap pour passer un panneau en plein écran." },
      { title: "Clés privées", text: "Mots de passe ou clés privées importées/collées, dont Ed25519, RSA, ECDSA et DSA prises en charge par l'application." },
      { title: "Transfert SFTP", text: "Déplacez des fichiers entre le stockage du téléphone et un serveur distant à l'aide de panneaux d'exploration local et distant." },
      { title: "Redirection de ports", text: "Enregistrez des spécifications de tunnel locales avec un profil de serveur ou ajoutez des tunnels en cours de connexion." },
      { title: "Reconnexion fiable", text: "Service de premier plan, wake locks, keepalives et tentatives de reconnexion aident les sessions à survivre aux changements de réseau mobile." },
      { title: "Sélection dans le terminal", text: "Sélectionnez du texte pour copier, partager ou tout sélectionner ; la copie va dans le presse-papiers Android." },
      { title: "Compatible clavier mobile", text: "Les suggestions Gboard et la saisie vocale fonctionnent avec la rangée de touches supplémentaires ; le texte en composition est mis en tampon jusqu'à la limite de mot." }
    ],
    multiHead: "Un écran, plusieurs shells actifs",
    multiP1:
      "La vue terminal peut contenir plusieurs sessions SSH actives en grille. Sélectionnez un panneau pour saisir, utilisez la rangée de touches supplémentaires pour les contrôles du terminal, pincez pour ajuster la taille du texte et double-tapez un panneau pour le mettre en plein écran.",
    multiP2:
      "L'historique des sessions et la récupération des sessions actives vous aident à revenir au travail en cours après un changement d'application, un verrouillage d'écran ou une recréation d'activité Android.",
    multiAlt:
      "Mobile SSH sur une tablette Android 10 pouces affichant quatre panneaux de terminaux SSH actifs côte à côte.",
    sftpHead: "SFTP quand le terminal ne suffit pas",
    sftpBody:
      "Ouvrez le transfert de fichiers depuis une session connectée pour parcourir le stockage du téléphone et les dossiers distants. Mettez en file les envois et téléchargements, triez les fichiers, mémorisez les chemins récents par hôte et inspectez les permissions distantes avant d'agir.",
    sftpCtaGuide: "Guide du transfert de fichiers",
    sftpCtaAll: "Toutes les fonctionnalités",
    sftpAlt: "Écran de transfert de fichiers de Mobile SSH sur un téléphone avec panneaux local et distant.",
    galleryHead: "Voyez-le sur un vrai appareil",
    galleryIntro:
      "Captures réalisées sur des téléphones Android — les écrans que vous utiliserez pour ajouter des serveurs, travailler dans des terminaux, lancer plusieurs sessions et déplacer des fichiers en SFTP.",
    galleryAlts: [
      "Écran d'accueil de Mobile SSH sur un téléphone avec les tuiles Serveurs, Identifiants, Journaux, Paramètres, Débogage et À propos.",
      "Boîte de dialogue Ajouter un serveur sur un téléphone montrant les champs hôte, port, identifiants, clé privée et redirection de ports.",
      "Terminal SSH mono-session sur un téléphone avec la rangée de touches supplémentaires en bas.",
      "Deux sessions SSH empilées sur un téléphone avec le panneau actif mis en évidence.",
      "Écran de transfert SFTP sur un téléphone avec les panneaux Mon téléphone et Hôte distant.",
      "Boîte de dialogue À propos sur un téléphone montrant la version, l'auteur, la licence et le site web."
    ],
    compareHead: "Sa place à côté de Termux et Termius",
    compareIntro:
      "Mobile SSH est volontairement restreint : ce n'est pas un environnement Linux complet, ni un coffre cloud d'équipe. C'est un outil SSH/SFTP local pour Android avec un accès rapide aux contrôles de session dont les utilisateurs mobiles ont le plus besoin.",
    compareGuideTitle: "Guide de comparaison",
    compareGuideText: "Quand choisir Mobile SSH, Termux ou Termius sur appareils Android.",
    privacyTitle: "Politique de confidentialité",
    privacyText: "Quelles données de connexion restent locales et quelles données sont envoyées à vos serveurs."
  },
  features: {
    metaTitle: "Fonctionnalités | Mobile SSH",
    metaDescription:
      "Principales fonctionnalités de Mobile SSH pour SSH, terminal, SFTP, clé privée, tmux et redirection de ports sur Android.",
    eyebrow: "Liste des fonctionnalités",
    h1: "Fonctionnalités de Mobile SSH",
    intro:
      "Mobile SSH est conçu pour un usage SSH direct sur Android : ouvrir des terminaux, les garder vivants, déplacer des fichiers, enregistrer des serveurs et se remettre vite des interruptions mobiles.",
    groups: [
      {
        title: "Connexions",
        items: [
          "Authentification par mot de passe et par clé privée",
          "Clés privées Ed25519, RSA, ECDSA et DSA prises en charge par l'implémentation actuelle",
          "Profils de serveur enregistrés avec hôte, port, utilisateur, identifiant, clé privée et tunnels optionnels",
          "Enregistrements d'identifiants réutilisables sélectionnables lors de la configuration d'un serveur",
          "Historique des sessions récentes pour se reconnecter aux groupes de serveurs habituels",
          "Journal des tentatives de connexion, réussies et échouées"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Comportement de terminal de type VT100/xterm-256color",
          "Tampon de scrollback de 5000 lignes",
          "Rangée de touches supplémentaires pour ESC, TAB, CTRL, Maj, flèches, Home, End, PgUp, PgDn et bascule clavier",
          "Tap pour focus, option « tap pour afficher le clavier », actions de copie et tout copier",
          "Pincement pour redimensionner le texte avec resize du terminal distant",
          "Mode plein écran d'un panneau au double-tap",
          "Sélection de texte avec actions Copier, Partager et Tout sélectionner",
          "Suggestions/autocorrection Gboard et saisie vocale prises en charge, avec mise en tampon du texte en composition"
        ]
      },
      {
        title: "Sessions",
        items: [
          "Jusqu'à huit sessions SSH simultanées",
          "Disposition en grille pour les sessions actives",
          "Service de premier plan pour la résilience en arrière-plan et au verrouillage d'écran",
          "Keepalives et tentatives de reconnexion avec backoff exponentiel",
          "Point d'entrée Sessions actives depuis l'écran d'accueil",
          "Suivi des commandes tmux et indications de reattach pour les travaux interrompus"
        ]
      },
      {
        title: "Fichiers et tunnels",
        items: [
          "Explorateur SFTP à deux panneaux pour fichiers locaux et distants",
          "Files d'attente d'envois et de téléchargements",
          "Actions distantes renommer, supprimer, créer, éditer et détails",
          "Tri par nom ou par date avec persistance par hôte",
          "Redirection locale de ports enregistrée avec le profil du serveur",
          "Vue d'ajout/suppression de tunnels à chaud pour les sessions connectées"
        ]
      },
      {
        title: "Localisation",
        items: [
          "Interface traduite : arabe, bengali, chinois (simplifié et traditionnel), anglais, français, allemand, hindi, indonésien, japonais, marathi, pidgin nigérian, portugais, russe, espagnol, tamoul, télougou, turc et ourdou",
          "Suit la langue système Android ; aucun sélecteur intégré requis"
        ]
      }
    ],
    security:
      "Sécurité : l'application actuelle stocke les profils de serveur et les identifiants enregistrés localement sur l'appareil Android. Elle ne propose pas de synchronisation cloud. Protégez l'appareil par un verrouillage d'écran solide et évitez d'enregistrer des identifiants sur des appareils partagés."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius sur Android",
    metaDescription:
      "Comparaison équilibrée de Mobile SSH, Termux et Termius pour les flux SSH sur Android.",
    eyebrow: "Options SSH sur Android",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Ces outils se recoupent autour de SSH mais visent des usages différents. Mobile SSH est un client SSH/SFTP ciblé pour Android, Termux est un environnement Linux et Termius est un client SSH multi-plateformes avec fonctionnalités de productivité basées sur compte.",
    columns: {
      need: "Besoin",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "But principal",
        mobileSsh: "Client SSH, SFTP, tunnel local et terminal dédié pour Android.",
        termux: "Émulateur de terminal et environnement Linux pour Android avec paquets APT.",
        termius: "Client SSH moderne pour Android, iOS, bureau et flux d'équipe orientés web."
      },
      {
        need: "Style de configuration",
        mobileSsh: "Saisir un hôte ou enregistrer un profil de serveur puis se connecter directement.",
        termux: "Installer des paquets comme OpenSSH, configurer des outils shell et travailler depuis une ligne de commande à la Linux.",
        termius: "Créer ou synchroniser hôtes, clés, snippets et coffres via l'app/compte Termius."
      },
      {
        need: "Contrôles terminal Android",
        mobileSsh: "Rangée de touches supplémentaires intégrée, sessions en grille, panneaux plein écran, zoom au pincement, sélection avec copier/partager, suggestions Gboard, saisie vocale et défilement compatible tmux.",
        termux: "Environnement de terminal puissant ; le comportement dépend des outils et de la configuration installés.",
        termius: "Module clavier mobile, gestes, onglets, autocomplétion, snippets et UX de terminal soignée."
      },
      {
        need: "Transfert de fichiers",
        mobileSsh: "Transfert SFTP à deux panneaux intégré, lié à la session SSH active.",
        termux: "Utilisez des outils CLI comme scp, sftp, rsync ou des utilitaires installés.",
        termius: "SFTP intégré et gestion des hôtes/clés."
      },
      {
        need: "Travail multi-sessions",
        mobileSsh: "Jusqu'à huit sessions SSH simultanées dans une grille Android.",
        termux: "Utilisez des multiplexeurs comme tmux dans Termux ou dans les shells distants.",
        termius: "Onglets et vue divisée, selon la plateforme et l'offre."
      },
      {
        need: "Modèle de données",
        mobileSsh: "Serveurs, identifiants, historique, paramètres et journaux uniquement locaux.",
        termux: "Système de fichiers à la Linux et paquets à l'intérieur de l'environnement Termux.",
        termius: "Coffres chiffrés pour hôtes, clés, snippets, règles de redirection, known hosts et partage d'équipe."
      },
      {
        need: "Cas idéal",
        mobileSsh: "Une app Android simple pour se connecter à des serveurs, transférer des fichiers et garder les sessions actives.",
        termux: "Un environnement en ligne de commande complet sur Android, avec l'aisance d'installer et configurer des paquets.",
        termius: "Synchronisation multi-appareils, productivité soignée, coffres et collaboration."
      }
    ],
    cards: [
      {
        title: "Choisissez Mobile SSH si",
        body: "Vous voulez un accès SSH direct depuis Android sans monter d'environnement Linux complet ni de compte cloud synchronisé. Particulièrement adapté aux serveurs enregistrés, à SFTP, aux sessions tmux et aux flux rapides de tunnel local."
      },
      {
        title: "Choisissez Termux si",
        body: "Vous avez besoin d'un gestionnaire de paquets, de shells, compilateurs, scripts, rsync, curl, Git, Python, Node.js ou d'autres outils Linux directement sur l'appareil Android."
      },
      {
        title: "Choisissez Termius si",
        body: "Vous voulez un espace de travail SSH commercial et multi-plateformes avec coffre chiffré synchronisé, partage d'équipe, gestion des trousseaux, snippets et une app cohérente sur plusieurs appareils."
      }
    ],
    sources:
      "Sources : Termux se décrit comme un émulateur de terminal Android et un environnement Linux avec paquets APT et prise en charge d'OpenSSH sur [termux.dev](https://termux.dev/en/). Termius décrit SSH, SFTP, Mosh, Telnet, Serial, modules clavier, SFTP, coffres chiffrés et gestion des clés sur sa [page Android](https://www.termius.com/free-ssh-client-for-android) et dans sa [documentation des coffres](https://termius.com/documentation/set-up-vaults)."
  },
  privacy: {
    metaTitle: "Politique de confidentialité | Mobile SSH",
    metaDescription:
      "Politique de confidentialité de Mobile SSH, comprenant stockage local, transmission de données SSH, transfert de fichiers, journaux et permissions Android.",
    eyebrow: "Confidentialité",
    h1: "Politique de confidentialité",
    intro:
      "Mobile SSH est conçu comme un client SSH local pour Android. Il ne nécessite pas de compte Mobile SSH et ne propose pas de service de synchronisation cloud.",
    sections: [
      {
        heading: "Informations stockées sur votre appareil",
        body: "Si vous choisissez d'enregistrer des données dans l'application, Mobile SSH les conserve localement sur l'appareil Android. Cela peut inclure les profils de serveur enregistrés, noms d'utilisateur, ports, mots de passe, clés privées, phrases de passe, règles de redirection de ports, sessions récentes, historique des tentatives de connexion, chemins de transfert, préférences de tri, indications de reattach tmux, paramètres de l'application et journaux de débogage lorsque l'enregistrement de débogage est activé."
      },
      {
        heading: "Informations envoyées sur le réseau",
        body: "Mobile SSH envoie les données d'authentification SSH uniquement aux serveurs que vous configurez et auxquels vous vous connectez. Les entrées/sorties du terminal, le contenu des fichiers SFTP et le trafic des redirections de ports locales sont échangés avec les serveurs et points de terminaison distants que vous choisissez. Mobile SSH n'envoie pas ces données à un service d'analytique, de publicité, de télémétrie ou de synchronisation cloud Mobile SSH."
      },
      {
        heading: "Transfert de fichiers et accès au stockage",
        body: "La fonctionnalité de transfert de fichiers parcourt le stockage local du téléphone et les dossiers SFTP distants pour permettre l'envoi et le téléchargement. Sur les versions d'Android qui l'exigent, l'application peut demander l'accès au stockage pour que l'explorateur local puisse lire et écrire les fichiers sélectionnés."
      },
      {
        heading: "Journaux et dépannage",
        body: "L'historique des connexions et les journaux de débogage optionnels sont stockés localement pour le dépannage. Les journaux de débogage peuvent inclure des événements de terminal, des tailles de données SSH, des diagnostics tactiles, des événements de redimensionnement et des événements de cycle de vie des tunnels. Vérifiez toute archive de débogage avant de la partager avec le support ou un tiers."
      }
    ],
    permissionsHeading: "Permissions",
    permissions: [
      { label: "Internet", body: "nécessaire pour se connecter aux serveurs SSH." },
      { label: "Wake lock et Wi-Fi lock", body: "utilisés pour garder les sessions SSH actives pendant que l'appareil dort." },
      { label: "Service de premier plan et notifications", body: "utilisés pour gérer les connexions actives en arrière-plan." },
      { label: "Accès au stockage", body: "utilisé par le transfert de fichiers et l'import de clés." }
    ],
    securityHeading: "Responsabilités de sécurité",
    securityBody:
      "Protégez votre appareil Android avec un verrouillage d'écran solide si vous enregistrez des identifiants ou des clés privées. Ne vous connectez qu'à des serveurs de confiance. L'implémentation actuelle utilise le stockage local de l'app plutôt qu'un coffre cloud chiffré séparé.",
    contactHeading: "Contact",
    contactBody: "Contact support : [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentation | Mobile SSH",
    metaDescription: "Documentation utilisateur de Mobile SSH pour Android.",
    eyebrow: "Guide utilisateur",
    h1: "Documentation Mobile SSH",
    intro:
      "Utilisez ces pages comme guide public pour installer, se connecter, gérer les sessions, transférer des fichiers, rediriger des ports et dépanner Mobile SSH.",
    cards: [
      { slug: "getting-started",  title: "Premiers pas",          text: "Installer, ouvrir l'app, se connecter au premier serveur et enregistrer les hôtes habituels." },
      { slug: "terminal",         title: "Terminal",              text: "Panneaux, rangée de touches supplémentaires, défilement, actions de copie, tmux et réglages clavier." },
      { slug: "file-transfer",    title: "Transfert de fichiers", text: "Parcourir téléphone et serveur, envoyer, télécharger, trier et inspecter les détails distants." },
      { slug: "port-forwarding",  title: "Redirection de ports", text: "Configurer des chaînes de tunnels locales et gérer les redirections actives en cours de connexion." },
      { slug: "troubleshooting",  title: "Dépannage",             text: "Régler les problèmes de connexion, d'authentification, de clavier, de stockage et de reconnexion." }
    ]
  },
  docsNav: {
    home: "Accueil docs",
    gettingStarted: "Premiers pas",
    terminal: "Terminal",
    fileTransfer: "Transfert de fichiers",
    portForwarding: "Redirection de ports",
    troubleshooting: "Dépannage"
  },
  about: {
    metaTitle: "À propos | Mobile SSH",
    metaDescription: "À propos de Mobile SSH : version, auteur, licence et mentions open source du client SSH pour Android.",
    eyebrow: "À propos",
    h1: "À propos de Mobile SSH",
    intro: "Client SSH multi-sessions avec tmux, redirection de ports et SFTP.",
    appHeading: "À propos de l'app",
    versionLabel: "Version",
    authorLabel: "Auteur",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "Licence",
    licenseValue: "MIT",
    websiteLabel: "Site web",
    privacyLabel: "Politique de confidentialité",
    privacyLinkText: "Politique de confidentialité",
    noticesHeading: "Mentions open source",
    noticesIntro: "Mobile SSH s'appuie sur les bibliothèques open source suivantes, chacune utilisée selon sa licence respective.",
    notices: [
      { name: "JSch (mwiede fork)",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch)",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch)", license: "ISC" },
      { name: "Ed25519 / Ed448 Java",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" }
    ],
    contactHeading: "Contact",
    contactBody: "Contact support : [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
