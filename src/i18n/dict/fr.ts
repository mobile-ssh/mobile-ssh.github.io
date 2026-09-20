import type { Dict } from "../types";

export const fr: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Langue",
    languageSwitcher: "Changer de langue"
  },
  nav: {
    blog: "Blog",
    home: "Accueil",
    features: "Fonctionnalités",
    docs: "Documentation",
    compare: "Comparer",
    about: "À propos",
    privacy: "Confidentialité"
  },
  footer: {
    discordCommunity: "Communauté Mobile SSH sur Discord",
    beta: "Bêta-test",
    tagline: "Flux SSH, SFTP et terminal ciblés pour les appareils Android et iOS.",
    documentation: "Documentation",
    comparison: "Comparaison",
    privacy: "Confidentialité",
    contact: "Contact",
    feedback: "Commentaires"
  },
  home: {
    metaTitle: "Mobile SSH — Client SSH pour Android et iOS",
    metaDescription:
      "Mobile SSH pour Android et iOS : terminaux SSH, hôtes de rebond, tmux, herdr, Zellij, SFTP, bureaux VNC et sauvegardes. Android propose aussi des clients VPN et des clés de sécurité.",
    eyebrow: "Client SSH pour Android et iOS",
    h1: "Mobile SSH",
    intro:
      "Terminaux SSH, gestionnaires tmux, herdr et Zellij, SFTP, bureaux VNC, hôtes de rebond et tunnels locaux — conçus pour les téléphones et tablettes. Eternal Terminal maintient les shells distants malgré les coupures. Android propose aussi des clients VPN et une authentification par clé de sécurité USB/NFC.",
    versionLine: "Disponible en {count} langues · Android {version} · iOS {iosVersion} bêta",
    ctaDocs: "Lire la documentation",
    ctaPlay: "Disponible sur Google Play",
    ctaIos: "Obtenir la bêta iOS sur TestFlight",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone et iPad",
    advantagesHead: "Pourquoi Mobile SSH",
    advantagesIntro: "Conçu autour des points faibles habituels des clients SSH mobiles.",
    advantages: [
      { title: "Pas de version Pro, pas de pubs", text: "Toutes les fonctions dans la même app. Pas de paywall qui cache les workflows essentiels derrière un Pro, pas de bannières publicitaires dans le terminal." },
      { title: "Vos données restent locales", text: "Serveurs, identifiants et clés enregistrés sur l'appareil. Aucun compte cloud, rien qui puisse être abandonné." },
      { title: "Hôtes enregistrés, connexion en un tap", text: "Ajoutez un hôte une fois et reconnectez-vous en un tap — clé, port et tunnels configurés inclus." },
      { title: "Alertes agent, et une réponse en un tap", text: "Sachez à l'instant où Claude Code, Codex ou un autre agent a besoin de vous : le panneau passe à l'ambre, un badge dans la barre d'outils compte ceux qui attendent, et la liste Agents répond à l'invite en un tap — sans rien saisir dans le terminal." },
      { title: "Touches terminal au-dessus du clavier", text: "Une rangée de treize touches — ESC, TAB, CTRL, flèches, Home, End, PgUp, PgDn — qui passe à une deuxième ligne au lieu de défiler, pour que rien ne reste hors écran. Ajoutez F1–F12, des combinaisons Ctrl ou vos propres séquences d'échappement depuis une palette de préréglages." },
      { title: "Redirection de ports sans commandes", text: "Les tunnels sont liés au profil serveur et s'activent automatiquement à la connexion." },
      { title: "Résiste au verrouillage et au changement de réseau", text: "Attribuez plusieurs adresses à un serveur enregistré — une IP LAN domestique et une IP VPN — et Mobile SSH compose celle qui répond, en essayant d'abord la dernière qui a fonctionné, et se reconnecte dès que le réseau change. Sur Android, un service de premier plan et des wake locks gardent les shells actifs malgré l'écran éteint ; sur iOS, la reconnexion automatique et le rattachement tmux automatique vous ramènent là où vous étiez." },
      { title: "Eternal Terminal", text: "Un transport ET optionnel garde le shell distant actif malgré les coupures réseau, la mise en veille et les changements d'IP. Pas d'etserver sur l'hôte ? Mobile SSH peut l'installer pour vous via SSH." },
      { title: "Extensible par plugins", text: "Parcourez un catalogue public et installez des plugins à la demande pour ajouter de nouveaux workflows. Chaque plugin est téléchargé et vérifié par SHA-256 dans le stockage privé de l'app." }
    ],
    sectionAHead: "Conçu pour l'usage SSH mobile",
    sectionAIntro:
      "Mobile SSH raccourcit le chemin d'administration habituel : enregistrer un serveur, se connecter, garder les sessions vivantes, déplacer des fichiers au besoin et revenir vite aux terminaux actifs.",
    features: [
      { title: "Terminal SSH", text: "Terminal xterm-256color avec couleurs vraies 24 bits, italiques, recherche dans le terminal, intégration shell OSC 133 et zoom du texte par pincement — plus une police et un jeu de couleurs configurables ainsi que les glyphes powerline/d'icônes Nerd Font sur Android et iOS." },
      { title: "Grille multi-sessions", text: "Jusqu'à huit sessions SSH dans une grille redimensionnable — tapotez un panneau pour le focaliser, double-tapez pour le plein écran, pincez pour redimensionner le texte." },
      { title: "Liens cliquables", text: "Les URL dans le terminal sont soulignées et s'ouvrent dans le navigateur d'un tapotement — pas besoin de copier ni de changer d'application." },
      { title: "Dossiers et noms de serveurs", text: "Organisez les serveurs enregistrés en groupes repliables, et donnez à un serveur un nom qui s'affiche à la place de son adresse. L'adresse revient dès qu'un nom serait ambigu, pour que les lignes ne se confondent jamais." },
      { title: "Alertes agent", text: "Les agents se signalent via le terminal : l'app sait donc lequel est bloqué et sur quoi. Répondez depuis la liste Agents en un tap ; les alertes se remplacent au lieu de s'empiler, et en tapoter une ouvre le panneau qui a sonné." },
      { title: "Clés privées", text: "Utilisez un mot de passe ou une clé privée, et générez des clés Ed25519 ou ECDSA sur l’appareil (également RSA sur Android). Android prend aussi en charge les clés de sécurité FIDO2 USB/NFC et le transfert d’agent SSH par serveur." },
      { title: "Transfert SFTP", text: "Explorateur de fichiers à deux panneaux lié à une session SSH active. Mettez en file envois et téléchargements, renommez, supprimez et inspectez les permissions distantes." },
      { title: "Redirection de ports", text: "Enregistrez des spécifications de tunnel locales avec un profil de serveur et elles s'ouvrent automatiquement à la connexion — y compris après une reconnexion sur un nouveau réseau, sans avoir à les reconstruire à la main." },
      { title: "Workflow de reconnexion", text: "Changez de réseau et les sessions recomposent aussitôt au lieu d'attendre l'expiration d'une route morte, et une session en backoff se réveille dès qu'un réseau utilisable apparaît. Sur iOS, un serveur qui a cessé de répondre en silence est repéré et reconnecté." },
      { title: "Sauvegarde et restauration", text: "Sauvegardez serveurs, identifiants et réglages, avec chiffrement facultatif par phrase secrète et aperçu Fusionner/Remplacer. Android inclut les profils VPN ; les sauvegardes Android et iOS actuelles partagent un format commun et conservent les réglages propres à chaque plateforme lorsqu’ils sont pris en charge." },
      { title: "Eternal Terminal", text: "Connectez-vous via Eternal Terminal (ET) pour des sessions qui survivent aux coupures réseau, à la mise en veille et aux changements d'IP — avec installation automatique optionnelle d'etserver via SSH." },
      { title: "Gestionnaires de multiplexeurs", text: "Connectez, renommez, créez, divisez, agrandissez ou fermez des sessions avec les gestionnaires tmux, herdr et Zellij sur les deux plateformes. Un bouton commun ouvre les gestionnaires disponibles ; chaque serveur enregistré définit la session à rejoindre à la connexion." },
      { title: "Plugins", text: "Parcourez, recherchez et filtrez les plugins par catégorie, puis installez les outils utiles à votre travail. Les téléchargements sont vérifiés par SHA-256 et conservés dans l’espace privé de l’application." },
      {
        "title": "Identités et hôtes de rebond",
        "text": "Accédez aux serveurs via des bastions enregistrés sur les deux plateformes. Les clés d’hôte sont vérifiées avant l’authentification et les clés modifiées sont bloquées. Android peut enregistrer automatiquement les nouvelles clés ou demander confirmation ; iOS demande confirmation pour les clés inconnues."
      },
      {
        "title": "Bureaux distants",
        "text": "Ouvrez un bureau VNC via SSH sur Android et iOS, avec commandes tactiles, clavier, presse-papiers et réglage de la résolution distante lorsque le serveur le permet."
      },
      {
        "title": "Clients VPN sur Android",
        "text": "Gérez SSH VPN, le proxy SOCKS5 local, WireGuard, Shadowsocks et OpenVPN depuis l’accueil. Choisissez un profil, lancez le routage et utilisez la tuile Mobile SSH VPN des réglages rapides pour arrêter ou reprendre."
      }
    ],
    multiHead: "Un écran, plusieurs shells actifs",
    multiP1:
      "La vue terminal peut contenir plusieurs sessions SSH actives en grille. Sélectionnez un panneau pour saisir, utilisez la rangée de touches supplémentaires pour les contrôles du terminal, pincez pour ajuster la taille du texte et double-tapez un panneau pour le mettre en plein écran.",
    multiP2:
      "L'écran d'accueil répond à la question « où puis-je reprendre ? » — les connexions actives à l'instant, et les sessions tmux qui attendent sur vos serveurs enregistrés, reconstituées depuis un instantané stocké pour s'afficher même sans aucun réseau.",
    multiAlt:
      "Mobile SSH sur un téléphone affichant deux sessions SSH actives dans une vue côte à côte en écran partagé.",
    sftpHead: "SFTP quand le terminal ne suffit pas",
    sftpBody:
      "Parcourez les dossiers locaux et distants, mettez les transferts en file d’attente, mémorisez le dossier distant de chaque session tmux et ouvrez les fichiers distants dans d’autres applications. Les deux plateformes reçoivent des fichiers partagés dans les sessions de terminal ; iOS peut mémoriser un dossier choisi dans Fichiers.",
    sftpCtaGuide: "Guide du transfert de fichiers",
    sftpCtaAll: "Toutes les fonctionnalités",
    sftpAlt: "Écran de transfert de fichiers de Mobile SSH sur un téléphone avec panneaux local et distant.",
    galleryHead: "Voyez-le sur un vrai appareil",
    galleryIntro:
      "Captures réalisées sur des téléphones Android et des iPhone — les écrans que vous utiliserez pour ajouter des serveurs, travailler dans des terminaux, lancer plusieurs sessions et déplacer des fichiers en SFTP.",
    carouselPrev: "Capture précédente",
    carouselNext: "Capture suivante",
    carouselDot: "Aller à la position {n}",
    videoHead: "Voir en action",
    videoIntro: "Courtes démonstrations sur les deux plateformes. Android : l'écran d'accueil qui montre ce que vous pouvez reprendre, une barre d'outils de session qui n'affiche que ce dont dispose le serveur, l'envoi d'un fichier directement dans l'invite, puis les gestionnaires tmux, herdr et Zellij. iOS : l'ouverture directe sur une session de terminal en direct et l'écran d'accueil auquel vous revenez.",
    videoAlt: "Démonstration Android de l'écran d'accueil listant les sessions tmux à reprendre, de la barre d'outils de session, de l'ajout d'un fichier directement dans l'invite et des gestionnaires de sessions tmux, herdr et Zellij",
    videoIosAlt: "Démonstration iOS de l'ouverture de Mobile SSH sur une session de terminal SSH en direct, puis du retour à l'écran d'accueil, avec le gestionnaire tmux, les Paramètres et les autres écrans de l'application",
    muxHead: "Une vidéo par gestionnaire de sessions",
    muxIntro:
      "Les vidéos de présentation montrent tmux, herdr et Zellij. Ces enregistrements plus longs détaillent les commandes de sessions, fenêtres, onglets et volets sur les deux plateformes, avec un serveur réel.",
    muxItems: [
        {
          text: "Sessions, fenêtres et volets atteints depuis l'écran d'accueil, une session signalée par une cloche parce que quelque chose y réclame de l'attention. Attachez une fenêtre et le terminal en cours la suit ; créez une fenêtre et nommez-la, sans jamais taper de raccourci préfixe.",
          androidAlt: "Démo Android du gestionnaire tmux : la liste de sessions en cache de l'écran d'accueil, puis sessions, fenêtres et volets, l'attachement d'une fenêtre que le terminal suit, et la création d'une fenêtre nommée.",
          iosAlt: "Démo iOS du gestionnaire tmux : les sessions tmux avec leur ancienneté et une cloche sur celle qui attend une saisie, puis fenêtres et volets, chaque ligne proposant Ouvrir, Renommer et Tuer."
        },
        {
          text: "Espaces de travail, onglets et volets portant un véritable état d'agent : l'un travaille, l'autre est bloqué et attend une personne. Prévisualisez le bloqué, répondez-lui depuis le téléphone, et voyez herdr le reclasser en travail, puis en terminé.",
          androidAlt: "Démo Android du gestionnaire herdr : sessions et espaces de travail étiquetés avec l'état de l'agent, un agent marqué « needs you », la réponse envoyée depuis le téléphone, et un nouvel espace de travail créé puis renommé.",
          iosAlt: "Démo iOS du gestionnaire herdr : des espaces de travail portant l'état de l'agent et une feuille de réponse qui envoie la saisie à un agent bloqué, suivie d'Entrée."
        },
        {
          text: "Les sessions avec leur ancienneté, puis les onglets et les volets. Prévisualisez la sortie d'un volet, ajoutez un onglet nommé, mettez au premier plan celui qui compte, et attachez-vous — sans rien taper à l'invite.",
          androidAlt: "Démo Android du gestionnaire Zellij : sessions avec leur ancienneté, onglets et volets, prévisualisation de la sortie d'un volet, création d'un onglet nommé et attachement d'une session.",
          iosAlt: "Démo iOS du gestionnaire Zellij : une session avec attacher, renommer, tuer et supprimer, ses onglets, et un volet proposant la prévisualisation et les deux sens de division."
        }
    ],
    demoHead: "Trois autres, filmées sur Android",
    demoIntro:
      "Il n'en existe pas encore de prise iOS. Le même vrai serveur que dans les démos ci-dessus : une session qui survit quand vous quittez l'application, une clé fabriquée sur le téléphone au lieu d'y être saisie, et des serveurs regroupés comme vous vous les représentez.",
    demoItems: [
      {
        title: "La session survit à l'application",
        text: "Android maintient la connexion dans un service de premier plan ; la notification persistante indique le serveur et propose Tout déconnecter. Quittez l’application pendant qu’un journal défile, puis retrouvez la session active. iOS n’accorde qu’un bref délai en arrière-plan, puis se reconnecte et rejoint le multiplexeur.",
        androidAlt:
          "Démo Android d'une session qui continue de tourner en arrière-plan : un journal HTTP en direct qui défile dans le terminal, la demande d'autorisation de notification, la notification persistante nommant le serveur connecté avec Tout déconnecter, puis le passage à l'écran d'accueil du téléphone et le retour au même flux qui arrive toujours."
      },
      {
        title: "Les clés se fabriquent ici, elles ne se saisissent pas",
        text: "Générez une clé Ed25519 sur le téléphone : un libellé, un utilisateur, une phrase secrète facultative. La feuille qui suit affiche la moitié publique à ajouter au fichier authorized_keys d'un serveur, et permet de partager ou d'enregistrer l'une ou l'autre moitié.",
        androidAlt:
          "Démo Android de la génération de clés : la boîte de dialogue Générer une clé SSH avec un libellé, un utilisateur, le type de clé Ed25519 et une phrase secrète, puis la feuille de clé publique proposant de partager ou d'enregistrer la clé."
      },
      {
        title: "Les serveurs vivent dans des dossiers que vous nommez",
        text: "Regroupez les serveurs enregistrés dans des dossiers et repliez ceux dont vous ne vous servez pas. La même prise se termine dans le terminal, où une URL affichée par une commande est soulignée et tapotable au lieu d'être quelque chose à sélectionner à la main.",
        androidAlt:
          "Démo Android des dossiers de serveurs : des serveurs enregistrés regroupés dans des dossiers nommés qui se déplient et se replient, puis un terminal où les URL de la sortie des commandes sont soulignées et tapotables."
      }
    ],
    graphicsHead: "Un graphique animé, dans le terminal",
    graphicsBody:
      "Un GIF de 36 images diffusé via le protocole graphique de Kitty et décodé par l'application au rythme du fichier lui-même, et non avancé de l'extérieur. Puis les séquences d'échappement sur lesquelles un terminal se juge : OSC 8 transforme numéros de build et noms de tableaux de bord en éléments tactiles, OSC 52 laisse la machine distante écrire dans le presse-papiers du téléphone, et OSC 777 déclenche une vraie notification Android.",
    graphicsAlt:
      "Démo Android d'un graphique de latence animé diffusé dans le terminal via le protocole graphique de Kitty, suivi de liens OSC 8, d'une écriture du presse-papiers en OSC 52 et d'une notification OSC 777.",
    lightboxClose: "Fermer",
    lightboxPrev: "Précédent",
    lightboxNext: "Suivant",
    galleryAlts: [
      "Écran d'accueil de Mobile SSH sur un téléphone Android avec une bannière Sessions actives et une liste Continuer de serveurs enregistrés à reprendre, au-dessus des boutons Serveurs, Identifiants, Réglages, À propos et Extensions.",
      "Boîte de dialogue Ajouter un serveur sur un téléphone avec les champs nom du serveur, hôte et port, adresses supplémentaires, identifiants, clé privée et redirections de ports.",
      "Terminal SSH mono-session sur un téléphone montrant le correctif d'un agent de code et une série de tests réussie, sous la barre d'outils de session.",
      "Deux sessions SSH dans une vue côte à côte en écran partagé sur un téléphone.",
      "Quatre sessions SSH dans une grille sur un téléphone, chacune sur un serveur différent, avec le panneau actif mis en évidence.",
      "Écran de transfert SFTP sur un téléphone avec les panneaux Mon téléphone et Hôte distant.",
      "Boîte de dialogue À propos sur un téléphone montrant la version, l'auteur, la licence et le site web.",
      "Boîte de dialogue Générer une clé SSH sur un téléphone avec les champs libellé, utilisateur, type de clé et phrase secrète.",
      "Boîte de dialogue Clé publique sur un téléphone affichant la clé générée avec des options copier, partager et enregistrer.",
      "Écran Serveurs enregistrés affichant les serveurs organisés en groupes de dossiers Travail et Personnel repliables.",
      "Terminal SSH sur un téléphone avec des URL https:// soulignées comme liens cliquables tapotables.",
      "Gestionnaire Zellij sur un téléphone Android listant les sessions, onglets et panneaux avec des boutons pour les attacher, les renommer, les tuer et les activer.",
      "Gestionnaire tmux sur un téléphone listant les sessions, fenêtres et panneaux tmux avec des boutons pour attacher, renommer et basculer.",
      "Écran Plugins sur un téléphone affichant un catalogue de plugins installables avec Tailscale, WireGuard et Claude Code CLI.",
      "Plugin AI Chat sur un téléphone diffusant en continu une réponse d'un modèle llama3.2 local exécuté sur le serveur distant via SSH.",
      "Boîte de dialogue Ajouter un serveur sur un téléphone avec le transport réglé sur Eternal Terminal pour que les sessions survivent aux coupures réseau."
    ],
    galleryIosAlts: [
      "Formulaire de connexion de Mobile SSH sur un iPhone avec les champs serveur, authentification, dossier et transport.",
      "Serveurs enregistrés sur un iPhone organisés en groupes Production et Staging avec recherche de serveurs.",
      "Terminal SSH en direct sur un iPhone avec une barre d'état tmux et la rangée de touches supplémentaires en bas.",
      "Deux sessions SSH empilées dans une grille sur un iPhone avec panneaux focalisables au tap.",
      "Transfert de fichiers sur un iPhone avec les panneaux Mon téléphone et Hôte distant et un journal de transfert terminé.",
      "Authentification par clé sur un iPhone avec une clé Ed25519 générée sur l'appareil et une clé publique copiable.",
      "Gestionnaire tmux sur un iPhone listant sessions et fenêtres avec des actions ouvrir, renommer et tuer — une cloche signale un agent en attente d'intervention.",
      "Terminal SSH sur un iPhone attaché à une fenêtre tmux affichant du code dans un éditeur distant.",
      "Catalogue de plugins sur un iPhone avec Tailscale, WireGuard, Claude Code CLI, VS Code et AI Chat disponibles à l'installation.",
      "Formulaire de connexion sur un iPhone avec le transport réglé sur Eternal Terminal pour que les sessions survivent aux coupures réseau.",
      "Réglages des alertes agent sur un iPhone avec les options vibration, son et écouteurs uniquement.",
      "Écran d'accueil de Mobile SSH sur un iPhone avec une bannière Sessions actives et une ligne Continuer pour revenir à une session en cours, au-dessus des tuiles Serveurs, Identifiants, Journaux, Paramètres, À propos et Plugins."
    ],
    compareHead: "Sa place à côté de Termux et Termius",
    compareIntro:
      "Mobile SSH est volontairement restreint : ce n'est pas un environnement Linux complet, ni un coffre cloud d'équipe. C'est un outil SSH/SFTP local pour Android et iOS avec un accès rapide aux contrôles de session dont les utilisateurs mobiles ont le plus besoin.",
    compareGuideTitle: "Guide de comparaison",
    compareGuideText: "Quand choisir Mobile SSH, Termux ou Termius sur votre téléphone ou votre tablette.",
    privacyTitle: "Politique de confidentialité",
    privacyText: "Quelles données de connexion restent locales et quelles données sont envoyées à vos serveurs."
  },
  features: {
    metaTitle: "Fonctionnalités | Mobile SSH",
    metaDescription:
      "Découvrez les terminaux, hôtes de rebond, vérifications de serveurs, SFTP, VNC, sauvegardes et gestionnaires de multiplexeurs de Mobile SSH sur Android et iOS, ainsi que les VPN et clés de sécurité sur Android.",
    eyebrow: "Liste des fonctionnalités",
    h1: "Fonctionnalités de Mobile SSH",
    intro:
      "Accédez à vos serveurs sur Android et iOS avec des terminaux SSH, des identités vérifiées, des hôtes de rebond, SFTP, VNC et des gestionnaires de sessions. Android ajoute le routage VPN intégré et les clés de sécurité physiques ; les fonctions propres à chaque plateforme sont précisées ci-dessous.",
    groups: [
      {
        title: "Plateformes",
        items: [
          "Android 8.0 ou plus récent — actuellement un test fermé sur Google Play : ouvrez le lien d'inscription dans un navigateur mobile, puis installez depuis Play",
          "iOS 16 ou plus récent sur iPhone et iPad — rejoignez la bêta publique sur TestFlight",
          "Les versions Android et iOS actuelles partagent le format de sauvegarde 2 pour l’inventaire et les réglages ; importer une sauvegarde ne rend pas disponibles les fonctions absentes de la plateforme"
        ]
      },
      {
        title: "Connexions",
        items: [
          "Authentification par mot de passe et par clé privée",
          "Clés privées Ed25519, ECDSA (P-256/384/521) et RSA sur Android ; Ed25519 et ECDSA sur iOS. Les deux plateformes ouvrent les clés chiffrées par phrase secrète",
          "Profils de serveur enregistrés avec hôte, port, utilisateur, identifiant, clé privée et tunnels optionnels — clonez un profil pour dupliquer ses réglages dans un nouveau serveur",
          "Donnez un nom à un serveur et la liste l'affiche à la place de son adresse — l'adresse revient dès que deux lignes risqueraient de se ressembler",
          "Recherche parmi les serveurs enregistrés par nom, hôte, port, identifiant ou n'importe laquelle de leurs adresses alternatives",
          "Connectez-vous deux fois à la même machine depuis deux fiches enregistrées et l'application s'en aperçoit : elle compare l'empreinte de la clé d'hôte et propose de les fusionner en un seul serveur multi-adresses",
          "Flux Ajouter une session avec recherche en premier : choisissez un serveur enregistré depuis une page de recherche dédiée et connectez-vous en un tap",
          "Plusieurs adresses par serveur enregistré pour l'itinérance LAN/VPN — composées dans l'ordre, la dernière adresse fonctionnelle essayée en premier, avec reconnexion déclenchée lors d'un changement de réseau",
          "Enregistrements d'identifiants réutilisables sélectionnables lors de la configuration d'un serveur",
          "Un écran d'accueil pensé pour la reprise : les connexions actives à l'instant et les sessions tmux qui attendent sur vos serveurs — issues d'un instantané stocké, elles s'affichent donc sans réseau, chaque ligne portant son âge. Sur iOS, la liste Récents est passée dans l'écran Nouvelle connexion, où un tap préremplit le formulaire",
          "IPv6 de bout en bout : littéraux entre crochets avec port facultatif dans les champs d'adresse, et destinations IPv6 entre crochets dans les règles de redirection de ports",
          "Journal des tentatives de connexion, réussies et échouées, enregistrant l'adresse exacte composée et, en cas d'échec, la raison",
          "Transport proxy Teleport (expérimental, Android) : connectez-vous avec nom d'utilisateur, mot de passe et OTP ou importez un fichier de configuration ou d'identité Teleport, parcourez les nœuds du cluster, puis exécutez terminaux, SFTP, tmux et plugins par le tunnel du proxy",
          "Hôtes de rebond SSH enregistrés sur les deux plateformes, avec chaînes ordonnées jusqu’à huit sauts après expansion ; chaque saut utilise ses propres identifiants et vérifications d’identité",
          "Transfert d’agent SSH sur Android : activez-le par serveur pour permettre aux programmes distants de demander des signatures aux clés enregistrées, avec approbation facultative avant utilisation ; les clés privées restent sur le téléphone",
          "Clés de sécurité FIDO2 sur Android via USB ou NFC : enregistrez ou importez des identifiants de clé de sécurité OpenSSH et répondez aux demandes de contact et de code PIN"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Comportement de terminal de type VT100/xterm-256color avec couleurs vraies 24 bits et italiques — le shell reçoit TERM=xterm-256color et COLORTERM=truecolor",
          "Tampon de scrollback réglable à 1 000, 5 000, 10 000 ou 50 000 lignes sur Android et iOS (5 000 par défaut)",
          "Recherche dans le terminal — cherchez dans le scrollback et l'écran visible et sautez d'une occurrence à l'autre (Android et iOS)",
          "Intégration shell (OSC 133) : passez d'une invite à l'autre, sélectionnez la sortie complète d'une commande — l'erreur de compilation 300 lignes plus haut, pas seulement la dernière — et soyez alerté lorsqu'une commande longue se termine (Android et iOS)",
          "Images en ligne dans le terminal via le protocole graphique Kitty, qui survivent au zoom par pincement et au reformatage au lieu de disparaître (Android et iOS)",
          "L’application dessine les blocs, le braille et les sextants : chafa, timg et l’art ANSI remplissent correctement la grille sur Android et iOS",
          "Le toucher envoie des clics aux programmes de terminal qui suivent la souris sur les deux plateformes, avec glissement facultatif ; iOS propose aussi un réglage pour positionner le curseur à la place",
          "L'en-tête du panneau indique le répertoire de travail réel du panneau, demandé à tmux ou signalé par le shell via OSC 7 (Android)",
          "Rangée de treize touches supplémentaires — ESC, TAB, CTRL, flèches, Home, End, PgUp, PgDn, bascule clavier — qui passe à une deuxième ligne plutôt que de défiler, le reste étant replié dans un menu de débordement pour qu'aucune touche ne sorte de l'écran",
          "Personnalisez la rangée sur Android et iOS : ajoutez depuis une palette d'environ 45 préréglages dont F1–F12, des combinaisons Ctrl et des symboles ; supprimez, réorganisez, masquez, définissez vos propres touches de séquences d'échappement et réinitialisez aux valeurs par défaut, avec aperçu en direct",
          "Tap pour focus, option « tap pour afficher le clavier », actions de copie et tout copier",
          "Pincement pour redimensionner le texte avec resize du terminal distant",
          "Mode plein écran d'un panneau au double-tap",
          "Sélection de texte avec actions Copier, Partager et Tout sélectionner — l'appui long sélectionne le mot, et Copier conserve la sélection pour la partager ou la recopier",
          "Presse-papiers OSC 52 — copiez du texte depuis une session tmux ou vim distante directement vers le presse-papiers du téléphone (Android et iOS)",
          "Claviers physiques et dictée vocale sur les deux plateformes ; iOS active Dictée et suggestions par défaut, avec correction automatique. Désactivez ce mode pour saisir directement dans le terminal",
          "Prise en charge des claviers externes et Bluetooth sur Android et iOS, y compris flèches, touches de fonction et combinaisons Ctrl/Alt",
          "Collage entre crochets (bracketed paste) pour que le contenu multi-lignes du presse-papiers ne soit pas exécuté automatiquement",
          "La police Nerd Font intégrée affiche sur Android et iOS les glyphes d'icônes powerline, starship, devicon et Material Design que la police système afficherait autrement comme des cases vides",
          "Les caractères CJK larges, les emoji et les caractères combinants sont mesurés et affichés correctement sur Android et iOS, y compris les grappes de graphèmes et les liants de largeur nulle (zero-width joiners)",
          "Police de terminal configurable (police monospace du système, JetBrains Mono ou Source Code Pro) et jeu de couleurs ANSI (Solarized, Gruvbox, Dracula, Nord) sur Android et iOS, appliqués en direct aux panneaux ouverts",
          "Un curseur de taille du texte du terminal dans les Réglages, en plus du zoom par pincement, et un thème d'application réglable sur Système, Clair ou Sombre",
          "Les indicateurs de débit et de connexion sans réponse aident à distinguer une commande distante occupée d’une connexion bloquée ; assombrissement et vibrations sont facultatifs",
          "Les réglages contrôlent les notifications distantes, alertes de fin de commande et lectures distantes du presse-papiers ; ces autorisations sont désactivées par défaut"
        ]
      },
      {
        title: "Sessions",
        items: [
          "Jusqu'à huit sessions SSH simultanées",
          "Disposition en grille pour les sessions actives",
          "Résilience en arrière-plan et au verrouillage d'écran : sur Android, un service de premier plan garde shells et agents en marche même après avoir balayé l'application hors des récentes ; sur iOS, le rattachement tmux automatique rattache votre shell",
          "Keepalives et tentatives de reconnexion avec backoff exponentiel — jusqu'à dix essais, et les échecs sur un réseau que vous avez déjà quitté ne comptent pas dans cette limite",
          "Un changement de Wi-Fi, de réseau mobile ou de VPN relance la connexion immédiatement au lieu d'attendre l'expiration de la route morte, et une session déjà en backoff réessaie dès qu'un réseau utilisable apparaît",
          "Les sondes keepalive sans réponse détectent les serveurs qui ne répondent plus et déclenchent la reconnexion sur Android et iOS",
          "Point d'entrée Sessions actives depuis l'écran d'accueil ; la notification persistante liste les sessions — tapotez pour ouvrir",
          "Suivi des commandes tmux et indications de reprise, avec les choix Automatique, Rien, tmux, herdr ou Zellij par serveur sur Android et iOS ; l’identité de session est conservée lors d’un changement de socket tmux",
          "Les agents se signalent eux-mêmes via le terminal : l'application connaît donc l'agent, l'outil qu'il exécute et s'il est bloqué sur vous — le panneau passe à l'ambre, son en-tête affiche « claude · a besoin de vous » et un badge dans la barre d'outils compte ceux qui attendent",
          "Répondez à la question d'un agent en un tap depuis la liste Agents ; la réponse passe par un canal séparé, elle n'est donc jamais saisie dans ce qui est à l'écran",
          "Installez le hook d'agent sur un serveur depuis l'application — un petit script shell que n'importe quel agent peut appeler, pas une intégration propre à un fournisseur",
          "Transport Eternal Terminal (ET) pour des sessions qui survivent aux coupures réseau, à la mise en veille et aux changements d'IP, avec installation automatique optionnelle d'etserver via SSH",
          "Gestionnaire tmux : listez et basculez entre sessions, fenêtres et panneaux — attachez, renommez, créez, divisez, zoomez ou tuez, avec tri par nom/date et un 🔔 pour les agents en attente d'intervention",
          "Un seul bouton de multiplexeur ouvre les gestionnaires tmux, herdr et Zellij ; Herdr propose aperçus, focus et réponses par volet, et Zellij gère les sessions actives et terminées"
        ]
      },
      {
        title: "Fichiers et tunnels",
        items: [
          "Explorateur SFTP à deux panneaux pour fichiers locaux et distants, avec un journal de transfert qui affiche chaque transfert et se fait défiler",
          "Envois et téléchargements en file d’attente ; partagez des fichiers avec Mobile SSH sur Android ou via l’extension de partage iOS, envoyez-les à une session connectée et insérez leurs chemins distants",
          "Envoi et téléchargement récursifs de dossiers entre le téléphone et l'hôte distant",
          "Actions distantes renommer, supprimer, créer, éditer, compresser en .tar.gz, permissions (chmod/chown) et détails",
          "Ouvrez un fichier téléchargé dans une autre application sur les deux plateformes — sur iOS, les téléchargements apparaissent aussi dans l'app Fichiers sous « Sur mon iPhone »",
          "Le transfert de fichiers mémorise les dossiers distants par hôte et session tmux sur les deux plateformes ; iOS mémorise aussi un dossier local externe choisi dans Fichiers",
          "Tri par nom ou par date avec persistance par hôte, et retour rapide aux chemins distants récents",
          "Tailles de fichiers en unités binaires, identiques à ce qu'affiche ls -h dans le terminal de l'onglet d'à côté",
          "Redirection locale de ports enregistrée avec le profil du serveur et activée automatiquement à la connexion",
          "Suit le thème clair ou sombre du système dans toute l'application et l'explorateur de fichiers — choisissez Système, Clair ou Sombre sur Android et iOS"
        ]
      },
      {
        title: "Localisation",
        items: [
          "Vingt langues dans l’application sur les deux plateformes : arabe, arabe égyptien, bengali, chinois (simplifié et traditionnel), anglais, français, allemand, hindi, indonésien, japonais, marathi, pidgin nigérian, portugais, russe, espagnol, tamoul, télougou, turc et ourdou",
          "Suit la langue du système par défaut, et les Réglages proposent un sélecteur de langue si vous voulez l'application dans une autre langue que celle du téléphone"
        ]
      },
      {
        title: "Clés et sauvegarde",
        items: [
          "Générez de nouvelles clés Ed25519 ou ECDSA sur l'appareil (RSA aussi sur Android), avec une phrase secrète facultative",
          "Copiez, partagez ou enregistrez une clé publique générée pour l'ajouter au authorized_keys du serveur",
          "Les sauvegardes complètes incluent serveurs, identifiants, réglages, langue et tri des multiplexeurs ; Android inclut aussi les profils SSH VPN, SOCKS5, WireGuard, Shadowsocks et OpenVPN",
          "Utilisez une exportation sélective ou limitée à l’inventaire pour réduire le contenu ; examinez l’aperçu de la sauvegarde complète et choisissez Fusionner ou Remplacer, avec chiffrement facultatif par phrase secrète",
          "Les sauvegardes non chiffrées contiennent mots de passe et clés privées. La confiance SSH, les sessions actives, les autorisations système et l’accès aux dossiers locaux ne sont pas portables ; les identifiants de clé de sécurité nécessitent toujours la clé physique"
        ]
      },
      {
        title: "Sécurité",
        items: [
          "Écran sécurisé : sur Android, bloquez les captures et l'enregistrement d'écran et masquez l'application de l'aperçu des applications récentes ; sur iOS, masquez l'aperçu du sélecteur d'applications et bloquez l'enregistrement et la recopie d'écran (une capture manuelle ne peut pas être bloquée sur iOS) — une option à activer quand des mots de passe, des clés ou des jetons sont à l'écran",
          "Les serveurs, identifiants et clés enregistrés restent sur l’appareil, sans compte cloud ni synchronisation obligatoires ; consultez la page de confidentialité pour connaître les protections du stockage et leurs limites",
          "Les statistiques d’utilisation anonymes sont activées par défaut, mais peuvent être désactivées dans les réglages Android et iOS ; les événements ne contiennent ni serveurs, ni identifiants, ni commandes, ni contenu de fichiers",
          "Les identités SSH sont vérifiées avant l’authentification. Android enregistre automatiquement les nouvelles clés brutes par défaut, avec option d’approbation préalable ; iOS demande confirmation avant de faire confiance à une clé inconnue. Les deux refusent les clés modifiées",
          "Les deux plateformes importent des révocations de clés d’hôte OpenSSH à portée définie. iOS accepte les clés Ed25519/ECDSA marquées @revoked ; Android prend aussi en charge les autorités de certification d’hôtes. iOS ne prend en charge ni les certificats d’hôte ni l’importation de CA. La confiance SSH reste propre à chaque appareil et n’entre pas dans les sauvegardes"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Parcourez les catégories, recherchez, installez et exécutez des plugins ; les catalogues sont actualisés lorsque vous changez de sources",
          "Les plugins se téléchargent à la demande depuis un catalogue public et sont vérifiés par SHA-256 dans le stockage privé de l'app",
          "Un plugin déclare ce dont il a besoin — commandes SSH, un tunnel, du stockage — et l'application refuse tout ce qu'il n'a pas demandé",
          "Quand un plugin met en place quelque chose sur votre serveur, vous voyez d'abord les commandes exactes et vous les approuvez avant leur exécution",
          "Configurez une source de catalogue personnalisée ou privée, ou installez depuis un dossier sur votre propre serveur"
        ]
      },
      {
        "title": "Bureaux distants",
        "items": [
          "Bureaux VNC via un tunnel SSH sur Android et iOS, sans exposer de port VNC à l’internet public",
          "Contrôle tactile du pointeur, claviers physique et virtuel, échange du presse-papiers et prise en charge du signal sonore du bureau",
          "Choisissez une taille prédéfinie ou des dimensions personnalisées si le serveur VNC le permet ; les demandes de redimensionnement non prises en charge sont signalées"
        ]
      },
      {
        "title": "Clients VPN (Android)",
        "items": [
          "Ouvrez VPN depuis l’accueil pour gérer les profils SSH VPN, proxy SOCKS5, WireGuard, Shadowsocks et OpenVPN",
          "SSH VPN achemine TCP et DNS via un serveur SSH enregistré pour l’ensemble des applications ou une sélection d’applications et de domaines ; les autres paquets UDP affectés à SSH sont bloqués",
          "Le proxy SOCKS5 local authentifié fonctionne avec un autre VPN ; les applications participantes doivent utiliser le proxy et le DNS distant",
          "Importez des fichiers WireGuard .conf, des liens Shadowsocks ss:// pris en charge ou des profils OpenVPN .ovpn autonomes avec vérification des certificats du serveur",
          "Lancez un profil pour changer de VPN et utilisez la tuile Mobile SSH VPN des réglages rapides pour arrêter ou lancer le profil mémorisé ; la tuile ne couvre pas les proxies SOCKS",
          "Android autorise un seul VPN de l’appareil à la fois. Tailscale utilise son application séparée ; IKEv2/IPsec se gère dans les réglages Android. Mobile SSH ne promet ni VPN permanent ni blocage des connexions hors VPN"
        ]
      }
    ],
    security:
      "Sécurité : l'application actuelle stocke les profils de serveur et les identifiants enregistrés localement sur l'appareil (sur iOS, les secrets sont conservés dans le trousseau système Keychain). Elle ne propose pas de synchronisation cloud. Protégez l'appareil par un verrouillage d'écran solide et évitez d'enregistrer des identifiants sur des appareils partagés."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius sur mobile",
    metaDescription:
      "Comparaison équilibrée de Mobile SSH, Termux et Termius pour les flux SSH sur Android et iOS.",
    eyebrow: "Options SSH mobiles",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Mobile SSH réunit SSH, SFTP, VNC et des gestionnaires de multiplexeurs sur Android et iOS, avec des clients VPN intégrés et l’authentification par clé de sécurité sur Android. Termux est un environnement Linux pour Android, et Termius est un client SSH multiplateforme avec des fonctions de productivité liées à un compte.",
    columns: {
      need: "Besoin",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "But principal",
        mobileSsh: "SSH, SFTP, VNC, hôtes de rebond et gestionnaires de multiplexeurs sur les deux plateformes ; clients VPN et clés de sécurité FIDO2 sur Android.",
        termux: "Émulateur de terminal et environnement Linux pour Android avec paquets APT.",
        termius: "Client SSH moderne pour Android, iOS, bureau et flux d'équipe orientés web."
      },
      {
        need: "Style de configuration",
        mobileSsh: "Enregistrez un serveur et ses identifiants, choisissez des hôtes de rebond si nécessaire, puis connectez-vous avec vérification de l’identité des serveurs avant l’authentification.",
        termux: "Installer des paquets comme OpenSSH, configurer des outils shell et travailler depuis une ligne de commande à la Linux.",
        termius: "Créer ou synchroniser hôtes, clés, snippets et coffres via l'app/compte Termius."
      },
      {
        need: "Contrôles terminal mobiles",
        mobileSsh: "Touches supplémentaires, grille de sessions, volets plein écran, zoom tactile, copie/partage, souris et claviers externes. Sur iOS, Dictée et suggestions peut être désactivé pour une saisie directe dans le terminal.",
        termux: "Environnement de terminal puissant ; le comportement dépend des outils et de la configuration installés.",
        termius: "Module clavier mobile, gestes, onglets, autocomplétion, snippets et UX de terminal soignée."
      },
      {
        need: "Transfert de fichiers",
        mobileSsh: "SFTP à deux volets, historique des dossiers par tmux, partage de fichiers distants et réception de fichiers sur les deux plateformes ; iOS mémorise un dossier externe de Fichiers.",
        termux: "Utilisez des outils CLI comme scp, sftp, rsync ou des utilitaires installés.",
        termius: "SFTP intégré et gestion des hôtes/clés."
      },
      {
        need: "Travail multi-sessions",
        mobileSsh: "Jusqu'à huit sessions SSH simultanées dans une grille.",
        termux: "Utilisez des multiplexeurs comme tmux dans Termux ou dans les shells distants.",
        termius: "Onglets et vue divisée, selon la plateforme et l'offre."
      },
      {
        need: "Modèle de données",
        mobileSsh: "Profils, identifiants, confiance SSH et réglages sur l’appareil ; sauvegardes portables facultatives de l’inventaire et des réglages. Les sauvegardes Android incluent aussi les profils VPN ; la confiance SSH reste propre à chaque appareil.",
        termux: "Système de fichiers à la Linux et paquets à l'intérieur de l'environnement Termux.",
        termius: "Coffres chiffrés pour hôtes, clés, snippets, règles de redirection, known hosts et partage d'équipe."
      },
      {
        need: "Cas idéal",
        mobileSsh: "Une app simple sur Android ou iOS pour se connecter à des serveurs, transférer des fichiers et garder les sessions actives.",
        termux: "Un environnement en ligne de commande complet sur Android, avec l'aisance d'installer et configurer des paquets.",
        termius: "Synchronisation multi-appareils, productivité soignée, coffres et collaboration."
      }
    ],
    cards: [
      {
        title: "Choisissez Mobile SSH si",
        body: "Vous voulez un accès SSH direct depuis votre téléphone ou votre tablette — Android ou iOS — sans monter d'environnement Linux complet ni de compte cloud synchronisé. Particulièrement adapté aux serveurs enregistrés, à SFTP, aux sessions tmux et aux flux rapides de tunnel local."
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
      { category: "Connexion",          feature: "Fonctionne sur Android et iOS",                       mobile: "yes",     termux: "Android uniquement", termius: "yes" },
      { category: "Connexion",          feature: "Profils de serveur enregistrés",                      mobile: "yes",     termux: "via ssh config", termius: "yes" },
      { category: "Connexion",          feature: "Recherche de serveurs enregistrés",                   mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connexion",          feature: "Dossiers / groupes de serveurs",                      mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connexion",          feature: "Sélecteur Ajouter une session avec recherche en premier", mobile: "Android", termux: "no",        termius: "no" },
      { category: "Connexion",          feature: "Plusieurs adresses par serveur (itinérance LAN/VPN)", mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Connexion",          feature: "Enregistrements d'identifiants réutilisables",        mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connexion",          feature: "L'écran d'accueil liste ce qu'on peut reprendre",     mobile: "yes",     termux: "no",            termius: "partiel" },
      { category: "Connexion",          feature: "Liste hors ligne des sessions tmux (sans connexion)", mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Connexion",          feature: "Serveurs nommés affichés à la place de l'adresse",    mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Connexion",          feature: "Journal des connexions",                              mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Connexion",          feature: "Transport proxy Teleport (expérimental)",             mobile: "Android", termux: "no",            termius: "no" },
      { category: "Connexion",          feature: "Hôtes et destinations de redirection IPv6",           mobile: "yes",     termux: "yes",           termius: "partiel" },
      { category: "Terminal",           feature: "Terminal SSH",                                         mobile: "yes",     termux: "via OpenSSH",   termius: "yes" },
      { category: "Terminal",           feature: "Émulation xterm-256color",                            mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",           feature: "Scrollback configurable (1k–50k lignes)",             mobile: "yes",     termux: "configurable",  termius: "partiel" },
      { category: "Terminal",           feature: "Recherche dans le terminal (scrollback)",             mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",           feature: "Rangée de touches supplémentaires (ESC/TAB/CTRL/…)",  mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",           feature: "Zoom du texte par pincement",                         mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",           feature: "Double-tap pour passer un panneau en plein écran",    mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",           feature: "URL tapotables dans la sortie terminal",              mobile: "yes",     termux: "partiel",       termius: "yes" },
      { category: "Terminal",           feature: "Sélection de texte : copier / partager / tout sélectionner", mobile: "yes", termux: "yes",       termius: "yes" },
      { category: "Terminal",           feature: "Prise en charge clavier matériel / Bluetooth",        mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Terminal",           feature: "Intégration shell (OSC 133)",                         mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",           feature: "Images en ligne (graphiques Kitty)",                  mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Terminal",           feature: "Glyphes mosaïques dessinés par l'app (chafa, art ANSI)", mobile: "yes", termux: "selon la police", termius: "no" },
      { category: "Terminal",           feature: "Le tap vaut un clic dans les TUI en mode souris",     mobile: "yes", termux: "yes",           termius: "no" },
      { category: "Terminal",           feature: "Rendu des glyphes Nerd Font / powerline",             mobile: "yes",     termux: "configurable",  termius: "partiel" },
      { category: "Sessions",           feature: "Sessions SSH simultanées multiples",                  mobile: "jusqu'à 8", termux: "jusqu'à 8",   termius: "yes" },
      { category: "Sessions",           feature: "Disposition en grille",                               mobile: "yes",     termux: "via tmux",      termius: "onglets" },
      { category: "Sessions",           feature: "Défilement compatible tmux",                          mobile: "yes",     termux: "yes",           termius: "no" },
      { category: "Sessions",           feature: "Indications de reattach tmux à la reconnexion",       mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",           feature: "Alertes agent (Claude Code / Codex)",                 mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",           feature: "Notification persistante avec liste de sessions",     mobile: "Android", termux: "partiel",       termius: "no" },
      { category: "Sessions",           feature: "Service de premier plan et wake lock",                mobile: "Android", termux: "yes",           termius: "partiel" },
      { category: "Sessions",           feature: "Reconnexion automatique avec backoff",                mobile: "yes",     termux: "via autossh",   termius: "yes" },
      { category: "Fichiers",           feature: "Interface de transfert SFTP intégrée",                mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Fichiers",           feature: "Explorateur local + distant à deux panneaux",         mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Fichiers",           feature: "File d'attente d'envois / téléchargements",           mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Fichiers",           feature: "Renommer / supprimer / créer à distance",             mobile: "yes",     termux: "no",            termius: "yes" },
      { category: "Fichiers",           feature: "Vue des permissions de fichiers distants",            mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Fichiers",           feature: "Tri par nom ou par date par hôte",                   mobile: "yes",     termux: "no",            termius: "partiel" },
      { category: "Tunnels",            feature: "Redirection de ports locale",                        mobile: "yes",     termux: "via CLI",       termius: "yes" },
      { category: "Tunnels",            feature: "Tunnels enregistrés avec le profil serveur",         mobile: "yes",     termux: "via ssh config", termius: "yes" },
      { category: "Tunnels",            feature: "Ajout / suppression de tunnels à chaud",             mobile: "no",      termux: "no",            termius: "yes" },
      { category: "Clés",               feature: "Authentification par mot de passe",                  mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Clés",               feature: "Authentification par clé privée",                    mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Clés",               feature: "Génération de clés sur l'appareil",                  mobile: "yes",     termux: "via ssh-keygen", termius: "yes" },
      { category: "Clés",               feature: "Partager / enregistrer la clé publique générée",     mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Sauvegarde",         feature: "Exporter / importer une sauvegarde de serveurs",     mobile: "yes",     termux: "via termux-backup", termius: "coffre-fort cloud Pro" },
      { category: "Sauvegarde",         feature: "Fichier de sauvegarde local chiffré",                mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sauvegarde",         feature: "Aucun compte requis",                               mobile: "yes",     termux: "yes",           termius: "partiel" },
      { category: "Confidentialité et coût", feature: "Pas de paywall Pro",                            mobile: "yes",     termux: "yes",           termius: "partiel" },
      { category: "Confidentialité et coût", feature: "Pas de publicités",                             mobile: "yes",     termux: "yes",           termius: "yes" },
      { category: "Confidentialité et coût", feature: "Désactivation des statistiques",               mobile: "yes", termux: "pas de statistiques", termius: "no" },
      { category: "Confidentialité et coût", feature: "Données uniquement locales (pas de cloud sync)", mobile: "yes",  termux: "yes",           termius: "partiel" },
      { category: "Confidentialité et coût", feature: "Écran sécurisé (bloque la capture d'écran)",     mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",           feature: "Eternal Terminal (sessions résilientes)",            mobile: "yes",     termux: "via CLI",       termius: "no" },
      { category: "Sessions",           feature: "Installation automatique d'etserver via SSH",        mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",           feature: "Gestionnaire de sessions tmux",                      mobile: "yes",     termux: "via CLI",       termius: "no" },
      { category: "Sessions",           feature: "Gestionnaires de sessions herdr et Zellij",          mobile: "yes"    , termux: "via CLI",       termius: "no" },
      { category: "Sessions",           feature: "Réponses en un tap à un agent bloqué",               mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Plugins",            feature: "Prise en charge des plugins",                        mobile: "yes",     termux: "via paquets",   termius: "no" },
      { category: "Plugins",            feature: "Catalogue de plugins à installation à la demande",   mobile: "yes",     termux: "no",            termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH vs les applications d'agents de codage IA",
    agentAppsIntro:
      "Une catégorie d'applications en pleine croissance existe uniquement pour piloter des agents de codage — Claude Code, Codex et consorts — depuis votre téléphone. Certaines sont des applications SSH ou relais tierces (Onepilot, Happy, Omnara, Moshi, Orca) ; OpenAI et Anthropic proposent désormais cela nativement aussi, avec Codex dans l'application ChatGPT et Claude Code dans l'application Claude, tous deux s'exécutant dans le cloud propre du fournisseur. Mobile SSH les recoupe toutes — vous pouvez exécuter ces agents via SSH et être alerté quand ils ont besoin de vous — mais il aborde la tâche par l'autre côté : c'est avant tout un client SSH généraliste et direct, et un compagnon d'agent en second lieu.",
    agentAppsRows: [
      { feature: "Exécute des agents de codage depuis votre téléphone",          mobile: "yes", onepilot: "yes",           happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",              claude: "yes" },
      { feature: "Compatible avec n'importe quel agent de codage (pas un seul fournisseur)", mobile: "yes", onepilot: "yes", happy: "Claude Code", omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "Codex uniquement", claude: "Claude Code uniquement" },
      { feature: "S'exécute sur votre propre machine (pas un cloud de fournisseur)", mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",               claude: "partiel" },
      { feature: "SSH direct — sans relais cloud",                               mobile: "yes", onepilot: "yes",           happy: "no",          omnara: "no", moshi: "yes", orca: "no",      chatgpt: "no",               claude: "no" },
      { feature: "Terminal SSH généraliste (exécute n'importe quelle commande)", mobile: "yes", onepilot: "yes",           happy: "no",          omnara: "partiel", moshi: "yes", orca: "Terminal de l’ordinateur associé", chatgpt: "no",               claude: "no" },
      { feature: "Transfert de fichiers SFTP",                                   mobile: "yes", onepilot: "partiel",       happy: "no",          omnara: "no", moshi: "Documentation contradictoire", orca: "Sur ordinateur uniquement",      chatgpt: "no",               claude: "no" },
      { feature: "Redirection de ports locale",                                  mobile: "yes", onepilot: "yes",           happy: "no",          omnara: "no", moshi: "Aperçus de développement (Pro)", orca: "Sur ordinateur uniquement",      chatgpt: "no",               claude: "no" },
      { feature: "Gestionnaire de sessions tmux",                                mobile: "yes", onepilot: "partiel",       happy: "no",          omnara: "no", moshi: "Pro", orca: "Non documenté",      chatgpt: "no",               claude: "no" },
      { feature: "Fonctionne avec un agent que vous avez installé vous-même",    mobile: "yes", onepilot: "yes",           happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "no",               claude: "no" },
      { feature: "Alertes d’agent (quand un agent connecté attend une réponse)",     mobile: "yes", onepilot: "yes",           happy: "yes",         omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",              claude: "yes" },
      { feature: "Approuver/refuser les invites de l'agent en un tap",           mobile: "yes", onepilot: "yes",           happy: "yes",         omnara: "yes", moshi: "Pro après l’essai", orca: "Agents pris en charge",     chatgpt: "yes",              claude: "yes" },
      { feature: "Aucune configuration de serveur ou de SSH",                    mobile: "no",  onepilot: "no",            happy: "partiel",     omnara: "partiel", moshi: "no", orca: "Association avec un ordinateur", chatgpt: "yes",              claude: "yes" },
      { feature: "Android et iOS",                                               mobile: "yes", onepilot: "iOS uniquement", happy: "yes",        omnara: "yes", moshi: "yes", orca: "yes",     chatgpt: "yes",              claude: "yes" },
      { feature: "Aucun compte requis",                                          mobile: "yes", onepilot: "yes",           happy: "yes",         omnara: "no", moshi: "yes", orca: "LAN/Tailscale ; Relay exige un compte",      chatgpt: "no",               claude: "no" },
      { feature: "Pas de paywall Pro (toutes les fonctionnalités gratuites)",    mobile: "yes", onepilot: "no",            happy: "no",          omnara: "no", moshi: "no", orca: "yes",      chatgpt: "offre gratuite",   claude: "no" },
      { feature: "Open source",                                                  mobile: "Apache 2.0",  onepilot: "no",            happy: "MIT",         omnara: "Apache", moshi: "no", orca: "MIT",  chatgpt: "no",               claude: "no" }
    ],
    agentAppsNote:
      "Les applications natives ChatGPT et Claude sont le moyen le plus fluide d'exécuter l'agent d'un seul fournisseur sans aucune configuration — pas de serveur, juste un compte — et elles ajoutent un écran soigné d'approbation/refus en un tap. Le hic : elles n'exécutent que leur propre modèle dans leur propre cloud, sans terminal généraliste, sans SFTP ni tunnels, et sans possibilité d'utiliser votre propre machine, et elles sont payantes ou nécessitent un compte. Onepilot, Happy et Omnara gardent l'agent sur du matériel que vous contrôlez (Onepilot via SSH direct ; Happy et Omnara via un relais cloud, et Omnara nécessite un compte). Mobile SSH se connecte directement à votre propre serveur sans compte ni relais du fournisseur, exécute n'importe quel agent aux côtés d'un terminal complet, du SFTP et de la redirection de ports, et toutes les fonctionnalités sont gratuites. Il répond désormais aux invites des agents de la même façon qu'elles — une liste Agents montrant chaque agent de chaque connexion, avec un bouton par choix possible — à ceci près que l'agent s'exécute sur votre machine et que la réponse voyage par votre propre connexion SSH. Le compromis reste celui qu'il a toujours été : c'est vous qui fournissez le serveur, et le hook de l'agent doit y être installé une fois.",
    agentAppsSourcesNote: "Vérifié le 2026-09-19. Le terminal SSH direct de Moshi est distinct de son service facultatif pour les événements et approbations des agents. Sa fiche Android annonce SFTP, mais sa documentation détaillée décrit des envois SCP et des aperçus de serveurs de développement ; les cellules concernées sont donc nuancées. L’app mobile Orca s’associe à Orca sur un ordinateur : LAN/Tailscale peuvent fonctionner sans compte Orca, tandis que Relay en exige un. Les fonctions réservées à l’ordinateur et celles qui ne sont pas documentées sont signalées dans le tableau.",
  },
  privacy: {
    metaTitle: "Politique de confidentialité | Mobile SSH",
    metaDescription:
      "Comment Mobile SSH traite les données enregistrées, les identités de serveurs, les sauvegardes, le trafic SSH et VPN, les fichiers, les statistiques et les autorisations sur Android et iOS.",
    eyebrow: "Confidentialité",
    h1: "Politique de confidentialité",
    intro:
      "Mobile SSH conserve votre configuration sur l’appareil et se connecte aux serveurs et services que vous choisissez. Aucun compte Mobile SSH ni synchronisation cloud n’est nécessaire. Les clients VPN facultatifs d’Android acheminent aussi une sélection du trafic de l’appareil via les serveurs configurés.",
    sections: [
      {
        heading: "Informations stockées sur votre appareil",
        body: "Les données enregistrées comprennent les profils de serveurs, identifiants, clés privées, identités d’hôtes, hôtes de rebond, règles de tunnels, instantanés de sessions, historique de connexion, chemins, autorisations de dossiers et réglages. Android conserve aussi les configurations VPN/proxy et leurs secrets. Les secrets iOS utilisent le Keychain. Android chiffre l’inventaire avec une clé protégée par Keystore, mais peut l’enregistrer en clair si le chiffrement est indisponible ; le stockage des profils WireGuard, Shadowsocks et OpenVPN exige le chiffrement. La sauvegarde cloud Android est désactivée. Les journaux de débogage facultatifs restent sur l’appareil."
      },
      {
        heading: "Informations envoyées sur le réseau",
        body: "L’authentification SSH est envoyée aux serveurs et hôtes de rebond configurés après vérification de leur identité. Le trafic de terminal, SFTP, VNC et de redirection rejoint les destinations choisies. Les catalogues et téléchargements de plugins contactent les sources configurées. Sur Android, les profils VPN/proxy peuvent acheminer le trafic d’autres applications et le DNS via vos serveurs SSH, WireGuard, Shadowsocks ou OpenVPN selon les routes choisies. Ce trafic n’est pas envoyé aux statistiques ni à un stockage cloud Mobile SSH."
      },
      {
        heading: "Transfert de fichiers et accès au stockage",
        body: "Les transferts utilisent les dossiers et fichiers sélectionnés, sans autorisation générale de stockage. Android conserve l’accès au dossier autorisé. iOS peut utiliser le dossier de l’application ou mémoriser un dossier choisi dans Fichiers, et importe documents, photos et fichiers partagés via les interfaces système. Le fournisseur de fichiers choisi peut conserver des données dans son propre cloud. Ouvrir ou partager un fichier le transmet à l’application ou à la destination choisie."
      },
      {
        heading: "Journaux et dépannage",
        body: "Les tentatives de connexion sont consignées localement lors des connexions. L’enregistrement de débogage est facultatif : l’enregistreur Android avertit que les diagnostics incluent toutes les frappes, même les mots de passe, et exporte une archive. Les journaux iOS consignent adresses, échecs, reconnexions, changements de réseau et diagnostics tmux. Vérifiez-les avant de les partager : ils peuvent révéler des détails de serveurs et, sur Android, des secrets saisis."
      },
      { heading: "Analyse de l'utilisation", body: "Lorsque l'analyse est activée, Mobile SSH envoie à Aptabase les interactions avec les fonctionnalités (y compris l'utilisation des VPN/proxys et le type de multiplexeur de terminal), les diagnostics de connexion, les versions de l'application et du système, le modèle de l'appareil, la langue et un identifiant de session temporaire via HTTPS afin d'améliorer l'application. Aptabase traite l'adresse IP et le User-Agent de la requête pour déterminer le pays ou la région et un identifiant pseudonyme quotidien ; l'adresse IP d'origine et le User-Agent ne sont pas conservés avec les données d'analyse. Les événements ne contiennent pas de trafic de navigation, de requêtes DNS, d'adresses de serveurs, de noms d'utilisateur, d'identifiants de connexion, de commandes ou de contenu de fichiers. Les versions Android qui affichent la demande de consentement à l'analyse exigent un accord explicite ; les anciennes versions Android et iOS activent l'analyse par défaut. Toutes les fonctionnalités sont disponibles sans analyse. Les paramètres permettent d'arrêter la collecte ; les événements déjà en attente peuvent encore être envoyés sur iOS. Le consentement Android est propre à l'appareil et n'est pas restauré depuis les sauvegardes. Consultez l'[accord de traitement des données d'Aptabase](https://aptabase.com/legal/dpa)." },
      {
        "heading": "Sauvegardes que vous exportez",
        "body": "Les sauvegardes complètes incluent l’inventaire et les réglages, ainsi que les profils VPN/proxy sur Android. Une phrase secrète chiffre le fichier ; sans elle, mots de passe et clés privées restent en clair. Vous choisissez où l’enregistrer ou le partager. La confiance SSH, les sessions actives et les accès aux dossiers accordés par le système sont exclus. L’aperçu d’importation montre les sections et préférences de sécurité qui seront appliquées."
      },
      {
        "heading": "Routage VPN sur Android",
        "body": "Le routage VPN nécessite le consentement Android et continue jusqu’à son arrêt ou sa fermeture par le système. Un seul VPN de l’appareil fonctionne à la fois ; un proxy SOCKS local peut coexister avec un autre VPN. Le routage SSH transporte TCP et DNS, et bloque les autres paquets UDP affectés à SSH. Arrêter, changer de VPN ou forcer l’arrêt de l’application met fin à la protection du VPN précédent ; Mobile SSH ne garantit ni VPN permanent ni blocage des connexions hors VPN."
      }
    ],
    permissionsHeading: "Permissions",
    permissions: [
      { label: "Internet", body: "utilisé pour les connexions SSH, transferts de fichiers, bureaux distants, VPN et plugins, ainsi que les statistiques lorsqu’elles sont activées." },
      { label: "Wake lock et Wi-Fi lock", body: "utilisés sur Android pour garder les sessions SSH actives pendant que l'appareil dort." },
      { label: "Service de premier plan et notifications", body: "utilisés sur Android pour gérer les connexions actives en arrière-plan ; sur iOS, les notifications servent aux alertes agent." },
      { label: "Accès aux fichiers", body: "accordé par les sélecteurs système de dossiers, documents et photos ; iOS peut mémoriser un dossier externe de Fichiers. Aucune plateforme ne demande un accès illimité au stockage." },
      {
        "label": "Consentement VPN (Android)",
        "body": "nécessaire avant qu’un client VPN intégré achemine le trafic de l’appareil. Un proxy SOCKS seul n’occupe pas la connexion VPN de l’appareil."
      },
      {
        "label": "USB et NFC (Android)",
        "body": "utilisés pour communiquer avec une clé de sécurité FIDO2 physique afin d’enregistrer une clé ou de signer pour SSH, avec autorisation USB et confirmation par contact/code PIN si nécessaire."
      }
    ],
    securityHeading: "Responsabilités de sécurité",
    securityBody:
      "Protégez l’appareil et les sauvegardes exportées. Comparez les empreintes SSH inconnues par un canal fiable : désactivez l’acceptation automatique des nouvelles identités sur Android pour approuver le premier accès ; iOS demande confirmation par défaut. Examinez les changements de clé avant de remplacer une identité enregistrée. Écran sécurisé bloque captures et enregistrement sur Android ; sur iOS, il masque l’aperçu du sélecteur d’applications et l’enregistrement/la recopie, mais ne bloque pas les captures manuelles.",
    contactHeading: "Contact",
    contactBody: "Contact support : [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentation | Mobile SSH",
    metaDescription: "Documentation utilisateur de Mobile SSH pour Android et iOS.",
    eyebrow: "Guide utilisateur",
    h1: "Documentation Mobile SSH",
    intro:
      "Des guides sur les identités SSH et hôtes de rebond, terminaux et VNC, gestionnaires de multiplexeurs, SFTP, sauvegardes, tunnels locaux et clients VPN Android, avec les différences entre plateformes expliquées.",
    cards: [
      { slug: "getting-started",  title: "Premiers pas",          text: "Installez l’application, vérifiez les identités de serveurs, configurez hôtes de rebond et clés, puis sauvegardez votre configuration." },
      { slug: "terminal",         title: "Terminal",              text: "Utilisez les commandes du terminal, tmux, herdr, Zellij, les alertes d’agents et les bureaux VNC." },
      { slug: "file-transfer",    title: "Transfert de fichiers", text: "Transférez des fichiers, mémorisez les dossiers et partagez des fichiers avec des sessions ou d’autres applications." },
      { slug: "port-forwarding",  title: "Redirection de ports",  text: "Configurez les tunnels locaux et SSH VPN, SOCKS5, WireGuard, Shadowsocks et OpenVPN sur Android." },
      { slug: "troubleshooting",  title: "Dépannage",             text: "Diagnostiquez les problèmes d’identité, d’hôtes de rebond, de terminal, de transfert, de sauvegarde et de VPN." }
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
    metaDescription: "À propos de Mobile SSH : version, auteur, licence et mentions open source du client SSH pour Android et iOS.",
    eyebrow: "À propos",
    h1: "À propos de Mobile SSH",
    intro: "SSH, SFTP, VNC et gestionnaires de multiplexeurs pour Android et iOS, avec sauvegardes locales, identités vérifiées et hôtes de rebond. Android propose aussi des clients VPN et la prise en charge des clés de sécurité physiques.",
    appHeading: "À propos de l'app",
    versionLabel: "Version",
    authorLabel: "Auteur",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "Licence",
    licenseValue: "Apache 2.0",
    websiteLabel: "Site web",
    privacyLabel: "Politique de confidentialité",
    privacyLinkText: "Politique de confidentialité",
    noticesHeading: "Mentions open source",
    noticesIntro: "Mobile SSH s'appuie sur les bibliothèques open source suivantes, chacune utilisée selon sa licence respective.",
    notices: [
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh", licenseUrl: "https://github.com/apple/swift-nio-ssh/blob/main/LICENSE.txt" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto", licenseUrl: "https://github.com/apple/swift-crypto/blob/main/LICENSE.txt" },
      { name: "WireGuard Android — Android", license: "Apache-2.0", url: "https://github.com/WireGuard/wireguard-android", licenseUrl: "/licenses/wireguard-android-APACHE-2.0.txt" },
      { name: "wireguard-go — Android", license: "MIT", url: "https://github.com/WireGuard/wireguard-go", licenseUrl: "/licenses/wireguard-go-MIT.txt" },
      { name: "Go / golang.org/x/crypto / golang.org/x/net / golang.org/x/sys — Android", license: "BSD-3-Clause", licenseUrl: "/licenses/wireguard-third-party-notices.txt" },
      { name: "hev-socks5-tunnel / hev-socks5-core / hev-task-system — Android", license: "MIT", url: "https://github.com/heiher/hev-socks5-tunnel", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "lwIP — Android", license: "BSD-3-Clause", url: "https://savannah.nongnu.org/projects/lwip/", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "shadowsocks-rust — Android", license: "MIT / Apache-2.0 / BSD / ISC / Unicode-3.0", url: "https://github.com/shadowsocks/shadowsocks-rust", licenseUrl: "/licenses/shadowsocks-NOTICES.txt" },
      { name: "OpenVPN 3 Core — Android", license: "MPL-2.0", url: "https://github.com/OpenVPN/openvpn3", licenseUrl: "/licenses/openvpn3-MPL-2.0.txt" },
      { name: "mbed TLS — Android", license: "Apache-2.0", url: "https://github.com/Mbed-TLS/mbedtls", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "Asio — Android", license: "BSL-1.0", url: "https://github.com/chriskohlhoff/asio", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "LZ4 / xxHash — Android", license: "BSD-2-Clause", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
    ],
    openvpnSourceHeading: "Code source d’OpenVPN",
    openvpnSourceBody: "OpenVPN 3 Core est utilisé sous MPL 2.0. Téléchargez le code source couvert et les versions exactes des dépendances, les textes des licences et les informations de compilation native.",
    openvpnSourceLabel: "Télécharger l’archive du code source",
    certificatesHeading: "Certificats",
    apkCertificateLabel: "Certificat de signature de l’APK installé directement (PEM)",
    apkCertificateBody: "Ce certificat public identifie le signataire de l’APK Mobile SSH installé directement. Google Play peut signer les téléchargements avec un autre certificat.",
    serverCertificateBody: "Les certificats des serveurs SSH et VPN doivent provenir de votre administrateur système ou fournisseur VPN. Vérifiez leurs empreintes par un canal de confiance ; ce certificat de signature n’est pas une autorité de certification VPN.",
    signingHelpLabel: "Documentation Android sur la signature",
    contactHeading: "Contact",
    contactBody: "Contact support : [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
