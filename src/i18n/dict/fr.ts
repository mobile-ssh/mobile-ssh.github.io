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
    contact: "Contact",
    feedback: "Commentaires"
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
      { title: "Alertes agent", text: "Recevez une notification — avec son et vibration — au moment où Claude Code, Codex ou un autre agent distant a besoin de votre intervention. Fonctionne dans les écouteurs même pendant une vidéo." },
      { title: "Touches terminal au-dessus du clavier", text: "Rangée dédiée avec ESC, TAB, CTRL, ALT, FN, flèches, Home, End, PgUp/PgDn — sans gêner les suggestions Gboard." },
      { title: "Redirection de ports sans commandes", text: "Les tunnels sont liés au profil serveur et s'activent automatiquement à la connexion." },
      { title: "Résiste au verrouillage et au changement de réseau", text: "Service au premier plan, wake locks et reconnexion automatique gardent les sessions actives malgré l'écran éteint, les changements d'app et de réseau." }
    ],
    sectionAHead: "Conçu pour l'usage SSH sur Android",
    sectionAIntro:
      "Mobile SSH raccourcit le chemin d'administration habituel : enregistrer un serveur, se connecter, garder les sessions vivantes, déplacer des fichiers au besoin et revenir vite aux terminaux actifs.",
    features: [
      { title: "Terminal SSH", text: "Émulation de terminal xterm-256color avec scrollback de 5000 lignes, couleurs, touches de curseur, copie/partage et zoom par pincement." },
      { title: "Grille multi-sessions", text: "Jusqu'à huit sessions SSH dans une grille redimensionnable — tapotez un panneau pour le focaliser, double-tapez pour le plein écran, pincez pour redimensionner le texte." },
      { title: "Liens cliquables", text: "Les URL dans le terminal sont soulignées et s'ouvrent dans le navigateur d'un tapotement — pas besoin de copier ni de changer d'application." },
      { title: "Dossiers de serveurs", text: "Organisez les serveurs enregistrés en groupes repliables. Tapotez l'en-tête d'un groupe pour le replier ; la structure de dossiers se retrouve dans le sélecteur de connexion rapide." },
      { title: "Alertes agent", text: "Notification avec son et vibration quand un agent distant (Claude Code, Codex, etc.) a besoin de votre intervention. Fonctionne dans les écouteurs même pendant les appels vidéo." },
      { title: "Clés privées", text: "Authentification par mot de passe ou clé privée. Générez des clés Ed25519, ECDSA ou RSA sur l'appareil ; importez ou collez des clés existantes." },
      { title: "Transfert SFTP", text: "Explorateur de fichiers à deux panneaux lié à une session SSH active. Mettez en file envois et téléchargements, renommez, supprimez et inspectez les permissions distantes." },
      { title: "Redirection de ports", text: "Enregistrez des spécifications de tunnel locales avec un profil de serveur — les tunnels s'ouvrent automatiquement à la connexion, ou ajoutez/retirez-les en cours de connexion." },
      { title: "Workflow de reconnexion", text: "Service de premier plan, wake locks, keepalives et reconnexion à backoff exponentiel gardent les sessions actives malgré l'écran éteint et l'itinérance." },
      { title: "Sauvegarde et restauration", text: "Exportez serveurs et identifiants dans un fichier de sauvegarde chiffré ; importez avec fusion ou remplacement pour passer d'un appareil à l'autre." }
    ],
    multiHead: "Un écran, plusieurs shells actifs",
    multiP1:
      "La vue terminal peut contenir plusieurs sessions SSH actives en grille. Sélectionnez un panneau pour saisir, utilisez la rangée de touches supplémentaires pour les contrôles du terminal, pincez pour ajuster la taille du texte et double-tapez un panneau pour le mettre en plein écran.",
    multiP2:
      "L'historique des sessions et la récupération des sessions actives vous aident à revenir au travail en cours après un changement d'application, un verrouillage d'écran ou une recréation d'activité Android.",
    multiAlt:
      "Mobile SSH sur un téléphone affichant deux sessions SSH actives dans une vue côte à côte en écran partagé.",
    sftpHead: "SFTP quand le terminal ne suffit pas",
    sftpBody:
      "Ouvrez le transfert de fichiers depuis une session connectée pour parcourir le stockage du téléphone et les dossiers distants. Mettez en file les envois et téléchargements, triez les fichiers, mémorisez les chemins récents par hôte et inspectez les permissions distantes avant d'agir.",
    sftpCtaGuide: "Guide du transfert de fichiers",
    sftpCtaAll: "Toutes les fonctionnalités",
    sftpAlt: "Écran de transfert de fichiers de Mobile SSH sur un téléphone avec panneaux local et distant.",
    galleryHead: "Voyez-le sur un vrai appareil",
    galleryIntro:
      "Captures réalisées sur des téléphones Android — les écrans que vous utiliserez pour ajouter des serveurs, travailler dans des terminaux, lancer plusieurs sessions et déplacer des fichiers en SFTP.",
    carouselPrev: "Capture précédente",
    carouselNext: "Capture suivante",
    carouselDot: "Aller à la position {n}",
    videoHead: "Voir en action",
    videoIntro: "Courtes démonstrations des fonctionnalités 2.0 — un changement de fenêtre tmux, un transfert de fichier SFTP, l'installation du plugin AI Chat et une conversation avec lui, Eternal Terminal et les sessions récentes en un tap.",
    videoAlt: "Démonstration d'un changement de fenêtre tmux, d'un téléchargement de fichier SFTP, de l'installation et de l'utilisation du plugin AI Chat, du transport Eternal Terminal et des sessions récentes",
    lightboxClose: "Fermer",
    lightboxPrev: "Précédent",
    lightboxNext: "Suivant",
    betaJoin: "Rejoindre la bêta",
    betaOr: "ou envoyez un e-mail à",
    betaRequest: "pour demander un accès à la bêta privée",
    galleryAlts: [
      "Écran d'accueil de Mobile SSH sur un téléphone avec les tuiles Serveurs, Identifiants, Journaux, Paramètres, Débogage et À propos.",
      "Boîte de dialogue Ajouter un serveur sur un téléphone montrant les champs hôte, port, identifiants, clé privée et redirection de ports.",
      "Terminal SSH mono-session sur un téléphone avec la rangée de touches supplémentaires en bas.",
      "Deux sessions SSH dans une vue côte à côte en écran partagé sur un téléphone.",
      "Deux sessions SSH empilées verticalement sur un téléphone avec le panneau actif mis en évidence.",
      "Écran de transfert SFTP sur un téléphone avec les panneaux Mon téléphone et Hôte distant.",
      "Boîte de dialogue À propos sur un téléphone montrant la version, l'auteur, la licence et le site web.",
      "Boîte de dialogue Générer une clé SSH sur un téléphone avec les champs libellé, utilisateur, type de clé et phrase secrète.",
      "Boîte de dialogue Clé publique sur un téléphone affichant la clé générée avec des options copier, partager et enregistrer.",
      "Écran Serveurs enregistrés affichant les serveurs organisés en groupes de dossiers Travail et Personnel repliables.",
      "Terminal SSH sur un téléphone avec des URL https:// soulignées comme liens cliquables tapotables."
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
          "Recherche de serveurs enregistrés par nom ou hôte",
          "Flux Ajouter une session avec recherche en premier : choisissez un serveur enregistré depuis une page de recherche dédiée et connectez-vous en un tap",
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
          "Point d'entrée Sessions actives depuis l'écran d'accueil ; la notification persistante liste les sessions — tapotez pour ouvrir",
          "Suivi des commandes tmux et indications de reattach pour les travaux interrompus",
          "Alertes agent : notification avec son et vibration optionnels quand un agent distant (Claude Code, Codex, etc.) a besoin d'une intervention ; fonctionne dans les écouteurs pendant une vidéo"
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
      },
      {
        title: "Clés et sauvegarde",
        items: [
          "Générez de nouvelles clés Ed25519, ECDSA ou RSA sur l'appareil, avec une phrase secrète facultative",
          "Copiez, partagez ou enregistrez une clé publique générée pour l'ajouter au authorized_keys du serveur",
          "Exportez les serveurs et identifiants enregistrés vers un fichier de sauvegarde",
          "Une phrase secrète facultative chiffre la sauvegarde ; importez avec fusion ou remplacement",
          "Une sauvegarde non chiffrée stocke mots de passe et clés en clair — protégez ou supprimez le fichier"
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
    featureHeading: "Fonctionnalité par fonctionnalité",
    featureRows: [
      { category: "Connexion",          feature: "Profils de serveur enregistrés",                      mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connexion",          feature: "Recherche de serveurs enregistrés",                   mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connexion",          feature: "Dossiers / groupes de serveurs",                      mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connexion",          feature: "Sélecteur Ajouter une session avec recherche en premier", mobile: "yes", termux: "no",            termius: "no" },
      { category: "Connexion",          feature: "Enregistrements d'identifiants réutilisables",        mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connexion",          feature: "Historique des sessions récentes",                    mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connexion",          feature: "Journal des connexions",                              mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",           feature: "Terminal SSH",                                         mobile: "yes",     termux: "via OpenSSH",   termius: "yes" },
      { category: "Terminal",           feature: "Émulation xterm-256color",                            mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",           feature: "Tampon de scrollback de 5 000 lignes",                mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",           feature: "Rangée de touches supplémentaires (ESC/TAB/CTRL/…)",  mobile: "yes",     termux: "partiel",       termius: "yes" },
      { category: "Terminal",           feature: "Zoom du texte par pincement",                         mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",           feature: "Double-tap pour passer un panneau en plein écran",    mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",           feature: "URL tapotables dans la sortie terminal",              mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Terminal",           feature: "Sélection de texte : copier / partager / tout sélectionner", mobile: "yes", termux: "yes",       termius: "yes" },
      { category: "Terminal",           feature: "Suggestions Gboard et saisie vocale",                 mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Sessions",           feature: "Sessions SSH simultanées multiples",                  mobile: "jusqu'à 8", termux: "via tmux",      termius: "yes" },
      { category: "Sessions",           feature: "Disposition en grille",                               mobile: "yes",     termux: "no",            termius: "onglets" },
      { category: "Sessions",           feature: "Défilement compatible tmux",                          mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Sessions",           feature: "Indications de reattach tmux à la reconnexion",       mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Sessions",           feature: "Alertes agent (Claude Code / Codex)",                 mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",           feature: "Notification persistante avec liste de sessions",     mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",           feature: "Service de premier plan et wake lock",                mobile: "yes",     termux: "partiel",       termius: "yes" },
      { category: "Sessions",           feature: "Reconnexion automatique avec backoff",                mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Fichiers",           feature: "Interface de transfert SFTP intégrée",                mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Fichiers",           feature: "Explorateur local + distant à deux panneaux",         mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Fichiers",           feature: "File d'attente d'envois / téléchargements",           mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Fichiers",           feature: "Renommer / supprimer / créer à distance",             mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Fichiers",           feature: "Vue des permissions de fichiers distants",            mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Fichiers",           feature: "Tri par nom ou par date par hôte",                   mobile: "yes",     termux: "no",            termius: "partiel" },
      { category: "Tunnels",            feature: "Redirection de ports locale",                        mobile: "yes",     termux: "via CLI",       termius: "yes" },
      { category: "Tunnels",            feature: "Tunnels enregistrés avec le profil serveur",         mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Tunnels",            feature: "Ajout / suppression de tunnels à chaud",             mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Clés",               feature: "Authentification par mot de passe",                  mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Clés",               feature: "Authentification par clé privée",                    mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Clés",               feature: "Génération de clés sur l'appareil",                  mobile: "yes",     termux: "via ssh-keygen", termius: "yes" },
      { category: "Clés",               feature: "Partager / enregistrer la clé publique générée",     mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Sauvegarde",         feature: "Exporter / importer une sauvegarde de serveurs",     mobile: "yes",     termux: "no",            termius: "coffre-fort cloud" },
      { category: "Sauvegarde",         feature: "Fichier de sauvegarde local chiffré",                mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sauvegarde",         feature: "Aucun compte requis",                               mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Confidentialité et coût", feature: "Pas de paywall Pro",                            mobile: "yes",     termux: "yes",           termius: "partiel" },
      { category: "Confidentialité et coût", feature: "Pas de publicités",                             mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Confidentialité et coût", feature: "Désactivation des statistiques",               mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Confidentialité et coût", feature: "Données uniquement locales (pas de cloud sync)", mobile: "yes",  termux: "yes",           termius: "no" }
    ]
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
      },
      { heading: "Statistiques d'usage anonymes", body: "Pour comprendre comment l'app est utilisée et l'améliorer, Mobile SSH envoie des statistiques d'usage anonymes à Aptabase, un fournisseur d'analytique respectueux de la vie privée agissant pour notre compte. Cela se limite à des événements anonymes (comme les ouvertures de l'app et les fonctions utilisées) ainsi qu'à la version de l'app, la version d'Android, le modèle de l'appareil et la langue. Un identifiant de session aléatoire, réinitialisé régulièrement, est utilisé ; il n'est lié ni à vous ni à votre appareil. Cela n'inclut jamais vos serveurs SSH, noms d'hôte, identifiants, mots de passe, clés, commandes ou contenus de fichiers. Les données sont envoyées via une connexion chiffrée (HTTPS). L'analytique est activée par défaut et peut être désactivée à tout moment dans les Réglages ; lorsqu'elle est désactivée, rien n'est envoyé." }
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
      { slug: "port-forwarding",  title: "Redirection de ports",  text: "Configurer des chaînes de tunnels locales et gérer les redirections actives en cours de connexion." },
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
