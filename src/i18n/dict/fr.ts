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
      "Mobile SSH est un client SSH ciblé pour Android et iOS avec terminaux multi-sessions, sessions résilientes Eternal Terminal, un gestionnaire tmux, transfert SFTP, clés privées, redirection de ports et plugins.",
    eyebrow: "Client SSH pour Android et iOS",
    h1: "Mobile SSH",
    intro:
      "Un client SSH ciblé pour Android et iOS, avec terminaux multi-sessions, authentification par clé privée, transfert de fichiers SFTP, redirection de ports locale et contrôles compatibles tmux pensés pour téléphone et tablette.",
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
      { title: "Clés privées", text: "Authentification par mot de passe ou clé privée. Générez des clés Ed25519 ou ECDSA sur l'appareil (RSA aussi sur Android) ; importez ou collez des clés existantes." },
      { title: "Transfert SFTP", text: "Explorateur de fichiers à deux panneaux lié à une session SSH active. Mettez en file envois et téléchargements, renommez, supprimez et inspectez les permissions distantes." },
      { title: "Redirection de ports", text: "Enregistrez des spécifications de tunnel locales avec un profil de serveur et elles s'ouvrent automatiquement à la connexion — y compris après une reconnexion sur un nouveau réseau, sans avoir à les reconstruire à la main." },
      { title: "Workflow de reconnexion", text: "Changez de réseau et les sessions recomposent aussitôt au lieu d'attendre l'expiration d'une route morte, et une session en backoff se réveille dès qu'un réseau utilisable apparaît. Sur iOS, un serveur qui a cessé de répondre en silence est repéré et reconnecté." },
      { title: "Sauvegarde et restauration", text: "Exportez serveurs et identifiants dans un fichier de sauvegarde chiffré ; importez avec fusion ou remplacement pour passer d'un appareil à l'autre — les sauvegardes sont interopérables entre Android et iOS." },
      { title: "Eternal Terminal", text: "Connectez-vous via Eternal Terminal (ET) pour des sessions qui survivent aux coupures réseau, à la mise en veille et aux changements d'IP — avec installation automatique optionnelle d'etserver via SSH." },
      { title: "Gestionnaires de multiplexeurs", text: "Pilotez tmux sans combinaisons de préfixe — attachez, renommez, créez, divisez, zoomez ou tuez. Android en fait autant pour herdr et Zellij, et une icône n'apparaît dans la barre d'outils qu'une fois ce programme détecté sur le serveur." },
      { title: "Plugins", text: "Parcourez, installez et exécutez des plugins pour étendre Mobile SSH. Les plugins se téléchargent à la demande depuis un catalogue public et sont vérifiés par SHA-256 dans le stockage privé de l'app." }
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
      "Ouvrez le transfert de fichiers depuis une session connectée pour parcourir le stockage du téléphone et les dossiers distants. Mettez en file les envois et téléchargements, triez les fichiers, revenez aux chemins distants récents et inspectez ou modifiez les permissions distantes avant d'agir.",
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
    videoIosAlt: "Démonstration iOS de l'ouverture de Mobile SSH sur une session de terminal SSH en direct, puis du retour à l'écran d'accueil avec la liste Récents et les autres écrans de l'application",
    lightboxClose: "Fermer",
    lightboxPrev: "Précédent",
    lightboxNext: "Suivant",
    betaJoin: "Rejoindre la bêta",
    betaOr: "ou envoyez un e-mail à",
    betaRequest: "pour demander un accès à la bêta privée",
    galleryAlts: [
      "Écran d'accueil de Mobile SSH sur un téléphone Android affichant la liste des sessions tmux en attente sur un serveur enregistré, au-dessus des boutons Serveurs, Identifiants, Paramètres, À propos et Plugins.",
      "Boîte de dialogue Ajouter un serveur sur un téléphone montrant les champs hôte, port, identifiants, clé privée et redirection de ports.",
      "Terminal SSH mono-session sur un téléphone avec la rangée de touches supplémentaires en bas.",
      "Deux sessions SSH dans une vue côte à côte en écran partagé sur un téléphone.",
      "Deux sessions SSH empilées verticalement sur un téléphone avec le panneau actif mis en évidence.",
      "Écran de transfert SFTP sur un téléphone avec les panneaux Mon téléphone et Hôte distant.",
      "Boîte de dialogue À propos sur un téléphone montrant la version, l'auteur, la licence et le site web.",
      "Boîte de dialogue Générer une clé SSH sur un téléphone avec les champs libellé, utilisateur, type de clé et phrase secrète.",
      "Boîte de dialogue Clé publique sur un téléphone affichant la clé générée avec des options copier, partager et enregistrer.",
      "Écran Serveurs enregistrés affichant les serveurs organisés en groupes de dossiers Travail et Personnel repliables.",
      "Terminal SSH sur un téléphone avec des URL https:// soulignées comme liens cliquables tapotables.",
      "Gestionnaire Zellij sur un téléphone Android listant les sessions, onglets et panneaux avec des boutons pour les attacher, les renommer, les tuer et les activer.",
      "Gestionnaire tmux sur un téléphone listant les sessions, fenêtres et panneaux tmux avec des boutons pour attacher, renommer et basculer.",
      "Écran Plugins sur un téléphone affichant un catalogue de plugins installables avec Tailscale, WireGuard et VS Code.",
      "Plugin AI Chat sur un téléphone diffusant en continu une réponse d'un modèle llama3.2 local exécuté sur le serveur distant via SSH.",
      "Boîte de dialogue Ajouter un serveur sur un téléphone avec le transport réglé sur Eternal Terminal pour que les sessions survivent aux coupures réseau."
    ],
    galleryIosAlts: [
      "Formulaire de connexion de Mobile SSH sur un iPhone avec les champs serveur, authentification, dossier et transport.",
      "Serveurs enregistrés sur un iPhone organisés en groupes Production et Staging avec recherche de serveurs.",
      "Terminal SSH en direct sur un iPhone avec une barre d'état tmux et la rangée de touches supplémentaires en bas.",
      "Deux sessions SSH côte à côte dans une grille sur un iPhone avec panneaux focalisables au tap.",
      "Transfert de fichiers sur un iPhone avec les panneaux Mon téléphone et Hôte distant et un journal de transfert terminé.",
      "Authentification par clé sur un iPhone avec une clé Ed25519 générée sur l'appareil et une clé publique copiable.",
      "Gestionnaire tmux sur un iPhone listant sessions et fenêtres avec des actions attacher, renommer et tuer — une cloche signale un agent en attente d'intervention.",
      "Terminal SSH sur un iPhone attaché à une fenêtre tmux affichant du code dans un éditeur distant.",
      "Catalogue de plugins sur un iPhone avec Tailscale, WireGuard, VS Code, AI Chat et Open WebUI disponibles à l'installation.",
      "Formulaire de connexion sur un iPhone avec le transport réglé sur Eternal Terminal pour que les sessions survivent aux coupures réseau.",
      "Réglages des alertes agent sur un iPhone avec les options vibration, son et écouteurs uniquement.",
      "Écran d'accueil de Mobile SSH sur un iPhone avec une liste Récents pour se reconnecter en un tap, au-dessus des tuiles Serveurs, Identifiants, Journaux, Paramètres, À propos et Plugins."
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
      "Principales fonctionnalités de Mobile SSH pour SSH sur Android et iOS : terminal, Eternal Terminal, gestionnaire tmux, SFTP, clés privées, redirection de ports et plugins.",
    eyebrow: "Liste des fonctionnalités",
    h1: "Fonctionnalités de Mobile SSH",
    intro:
      "Mobile SSH est conçu pour un usage SSH direct depuis les appareils Android et iOS : ouvrir des terminaux, les garder vivants, déplacer des fichiers, enregistrer des serveurs et se remettre vite des interruptions mobiles.",
    groups: [
      {
        title: "Plateformes",
        items: [
          "Android 8.0 ou plus récent — actuellement un test fermé sur Google Play : ouvrez le lien d'inscription dans un navigateur mobile, puis installez depuis Play",
          "iOS 16 ou plus récent sur iPhone et iPad — rejoignez la bêta publique sur TestFlight",
          "Les sauvegardes chiffrées sont interopérables : exportez sur une plateforme, importez sur l'autre"
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
          "Un écran d'accueil pensé pour la reprise : les connexions actives à l'instant et les sessions tmux qui attendent sur vos serveurs — issues d'un instantané stocké, elles s'affichent donc sans réseau, chaque ligne portant son âge. iOS conserve en plus une liste Récents",
          "IPv6 de bout en bout : littéraux entre crochets avec port facultatif dans les champs d'adresse, et destinations IPv6 entre crochets dans les règles de redirection de ports",
          "Journal des tentatives de connexion, réussies et échouées, enregistrant l'adresse exacte composée et, en cas d'échec, la raison",
          "Transport proxy Teleport (expérimental, Android) : connectez-vous avec nom d'utilisateur, mot de passe et OTP ou importez un fichier de configuration ou d'identité Teleport, parcourez les nœuds du cluster, puis exécutez terminaux, SFTP, tmux et plugins par le tunnel du proxy"
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
          "Glyphes mosaïques — blocs, braille et sextants — dessinés par l'application elle-même, pour que chafa, timg et l'art ANSI pavent la grille exactement au lieu d'afficher des cases vides (Android)",
          "Dans une TUI qui suit la souris, un tap vaut un clic — htop, vim et la sélection de panneau répondent au toucher (Android)",
          "L'en-tête du panneau indique le répertoire de travail réel du panneau, demandé à tmux ou signalé par le shell via OSC 7 (Android)",
          "Rangée de treize touches supplémentaires — ESC, TAB, CTRL, flèches, Home, End, PgUp, PgDn, bascule clavier — qui passe à une deuxième ligne plutôt que de défiler, le reste étant replié dans un menu de débordement pour qu'aucune touche ne sorte de l'écran",
          "Personnalisez la rangée sur Android et iOS : ajoutez depuis une palette d'environ 45 préréglages dont F1–F12, des combinaisons Ctrl et des symboles ; supprimez, réorganisez, masquez, définissez vos propres touches de séquences d'échappement et réinitialisez aux valeurs par défaut, avec aperçu en direct",
          "Tap pour focus, option « tap pour afficher le clavier », actions de copie et tout copier",
          "Pincement pour redimensionner le texte avec resize du terminal distant",
          "Mode plein écran d'un panneau au double-tap",
          "Sélection de texte avec actions Copier, Partager et Tout sélectionner — l'appui long sélectionne le mot, et Copier conserve la sélection pour la partager ou la recopier",
          "Presse-papiers OSC 52 — copiez du texte depuis une session tmux ou vim distante directement vers le presse-papiers du téléphone (Android et iOS)",
          "Saisie clavier native en pass-through — pas d'autocorrection qui perturbe le shell ; la dictée vocale du clavier logiciel fonctionne toujours",
          "Prise en charge des claviers externes et Bluetooth sur Android et iOS, y compris flèches, touches de fonction et combinaisons Ctrl/Alt",
          "Collage entre crochets (bracketed paste) pour que le contenu multi-lignes du presse-papiers ne soit pas exécuté automatiquement",
          "La police Nerd Font intégrée affiche sur Android et iOS les glyphes d'icônes powerline, starship, devicon et Material Design que la police système afficherait autrement comme des cases vides",
          "Les caractères CJK larges, les emoji et les caractères combinants sont mesurés et affichés correctement sur Android et iOS, y compris les grappes de graphèmes et les liants de largeur nulle (zero-width joiners)",
          "Police de terminal configurable (police monospace du système, JetBrains Mono ou Source Code Pro) et jeu de couleurs ANSI (Solarized, Gruvbox, Dracula, Nord) sur Android et iOS, appliqués en direct aux panneaux ouverts",
          "Un curseur de taille du texte du terminal dans les Réglages, en plus du zoom par pincement, et un thème d'application réglable sur Système, Clair ou Sombre"
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
          "Un serveur qui a cessé de répondre en silence — une VM suspendue, un rebond bloqué — est repéré grâce aux sondes keepalive restées sans réponse, puis reconnecté, au lieu d'avaler discrètement vos frappes (iOS)",
          "Point d'entrée Sessions actives depuis l'écran d'accueil ; la notification persistante liste les sessions — tapotez pour ouvrir",
          "Suivi des commandes tmux et indications de reattach pour les travaux interrompus, avec un choix par serveur de ce qu'il faut attacher à la connexion : détection automatique, rien, tmux, herdr ou Zellij (Android)",
          "Les agents se signalent eux-mêmes via le terminal : l'application connaît donc l'agent, l'outil qu'il exécute et s'il est bloqué sur vous — le panneau passe à l'ambre, son en-tête affiche « claude · a besoin de vous » et un badge dans la barre d'outils compte ceux qui attendent",
          "Répondez à la question d'un agent en un tap depuis la liste Agents ; la réponse passe par un canal séparé, elle n'est donc jamais saisie dans ce qui est à l'écran",
          "Installez le hook d'agent sur un serveur depuis l'application — un petit script shell que n'importe quel agent peut appeler, pas une intégration propre à un fournisseur",
          "Transport Eternal Terminal (ET) pour des sessions qui survivent aux coupures réseau, à la mise en veille et aux changements d'IP, avec installation automatique optionnelle d'etserver via SSH",
          "Gestionnaire tmux : listez et basculez entre sessions, fenêtres et panneaux — attachez, renommez, créez, divisez, zoomez ou tuez, avec tri par nom/date et un 🔔 pour les agents en attente d'intervention",
          "Gestionnaires herdr et Zellij sur Android, chacun avec la même portée sur ses propres sessions, onglets et panneaux — la barre d'outils n'affiche une icône qu'une fois ce programme détecté sur le serveur"
        ]
      },
      {
        title: "Fichiers et tunnels",
        items: [
          "Explorateur SFTP à deux panneaux pour fichiers locaux et distants, avec un journal de transfert qui affiche chaque transfert et se fait défiler",
          "Files d'attente d'envois et de téléchargements ; sur Android, partagez n'importe quel fichier depuis une autre application vers la session en cours et son chemin distant est saisi à l'invite",
          "Envoi et téléchargement récursifs de dossiers entre le téléphone et l'hôte distant",
          "Actions distantes renommer, supprimer, créer, éditer, compresser en .tar.gz, permissions (chmod/chown) et détails",
          "Ouvrez un fichier téléchargé dans une autre application sur les deux plateformes — sur iOS, les téléchargements apparaissent aussi dans l'app Fichiers sous « Sur mon iPhone »",
          "Sur Android, le transfert de fichiers rouvre là où cette session tmux s'était arrêtée, en nommant la session dans l'en-tête du panneau, et retombe sur les dossiers que vous utilisez le plus sur cet hôte quand il n'y a rien à retenir",
          "Tri par nom ou par date avec persistance par hôte, et retour rapide aux chemins distants récents",
          "Tailles de fichiers en unités binaires, identiques à ce qu'affiche ls -h dans le terminal de l'onglet d'à côté",
          "Redirection locale de ports enregistrée avec le profil du serveur et activée automatiquement à la connexion",
          "Suit le thème clair ou sombre du système dans toute l'application et l'explorateur de fichiers — choisissez Système, Clair ou Sombre sur Android et iOS"
        ]
      },
      {
        title: "Localisation",
        items: [
          "Interface traduite : arabe, bengali, chinois (simplifié et traditionnel), anglais, français, allemand, hindi, indonésien, japonais, marathi, portugais, russe, espagnol, tamoul, télougou, turc et ourdou — vingt langues sur Android, qui ajoute le pidgin nigérian et l'arabe égyptien, et dix-huit sur iOS",
          "Suit la langue du système par défaut, et les Réglages proposent un sélecteur de langue si vous voulez l'application dans une autre langue que celle du téléphone"
        ]
      },
      {
        title: "Clés et sauvegarde",
        items: [
          "Générez de nouvelles clés Ed25519 ou ECDSA sur l'appareil (RSA aussi sur Android), avec une phrase secrète facultative",
          "Copiez, partagez ou enregistrez une clé publique générée pour l'ajouter au authorized_keys du serveur",
          "Exportez les serveurs et identifiants enregistrés vers un fichier de sauvegarde — tous, ou seulement les lignes que vous cochez, un tapotement sur l'en-tête d'un dossier prenant tout le dossier",
          "Une phrase secrète facultative chiffre la sauvegarde ; importez avec fusion ou remplacement",
          "Une sauvegarde non chiffrée stocke mots de passe et clés en clair — protégez ou supprimez le fichier"
        ]
      },
      {
        title: "Sécurité",
        items: [
          "Écran sécurisé : sur Android, bloquez les captures et l'enregistrement d'écran et masquez l'application de l'aperçu des applications récentes ; sur iOS, masquez l'aperçu du sélecteur d'applications et bloquez l'enregistrement et la recopie d'écran (une capture manuelle ne peut pas être bloquée sur iOS) — une option à activer quand des mots de passe, des clés ou des jetons sont à l'écran",
          "Les serveurs, identifiants et clés enregistrés restent sur l'appareil — les secrets vivent dans le Keystore Android et le Keychain iOS, sans compte cloud ni synchronisation",
          "Uniquement des statistiques d'usage anonymes — jamais vos serveurs, identifiants, commandes ni contenus de fichiers. Android propose un interrupteur pour les désactiver dans les Réglages ; iOS n'en a pas encore"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Parcourez, installez et exécutez des plugins pour étendre Mobile SSH",
          "Les plugins se téléchargent à la demande depuis un catalogue public et sont vérifiés par SHA-256 dans le stockage privé de l'app",
          "Un plugin déclare ce dont il a besoin — commandes SSH, un tunnel, du stockage — et l'application refuse tout ce qu'il n'a pas demandé",
          "Quand un plugin met en place quelque chose sur votre serveur, vous voyez d'abord les commandes exactes et vous les approuvez avant leur exécution",
          "Configurez une source de catalogue personnalisée ou privée, ou installez depuis un dossier sur votre propre serveur"
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
      "Ces outils se recoupent autour de SSH mais visent des usages différents. Mobile SSH est un client SSH/SFTP ciblé pour Android et iOS, Termux est un environnement Linux réservé à Android et Termius est un client SSH multi-plateformes avec fonctionnalités de productivité basées sur compte.",
    columns: {
      need: "Besoin",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "But principal",
        mobileSsh: "Client SSH, SFTP, tunnel local et terminal dédié pour Android et iOS.",
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
        need: "Contrôles terminal mobiles",
        mobileSsh: "Rangée de touches supplémentaires intégrée, sessions en grille, panneaux plein écran, zoom au pincement, sélection avec copier/partager et défilement compatible tmux — avec saisie native en pass-through et prise en charge des claviers externes sur les deux plateformes.",
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
        mobileSsh: "Jusqu'à huit sessions SSH simultanées dans une grille.",
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
      { category: "Terminal",           feature: "Glyphes mosaïques dessinés par l'app (chafa, art ANSI)", mobile: "Android", termux: "selon la police", termius: "no" },
      { category: "Terminal",           feature: "Le tap vaut un clic dans les TUI en mode souris",     mobile: "Android", termux: "yes",           termius: "no" },
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
      { category: "Confidentialité et coût", feature: "Désactivation des statistiques",               mobile: "Android", termux: "pas de statistiques", termius: "no" },
      { category: "Confidentialité et coût", feature: "Données uniquement locales (pas de cloud sync)", mobile: "yes",  termux: "yes",           termius: "partiel" },
      { category: "Confidentialité et coût", feature: "Écran sécurisé (bloque la capture d'écran)",     mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",           feature: "Eternal Terminal (sessions résilientes)",            mobile: "yes",     termux: "via CLI",       termius: "no" },
      { category: "Sessions",           feature: "Installation automatique d'etserver via SSH",        mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Sessions",           feature: "Gestionnaire de sessions tmux",                      mobile: "yes",     termux: "via CLI",       termius: "no" },
      { category: "Sessions",           feature: "Gestionnaires de sessions herdr et Zellij",          mobile: "Android", termux: "via CLI",       termius: "no" },
      { category: "Sessions",           feature: "Réponses en un tap à un agent bloqué",               mobile: "yes",     termux: "no",            termius: "no" },
      { category: "Plugins",            feature: "Prise en charge des plugins",                        mobile: "yes",     termux: "via paquets",   termius: "no" },
      { category: "Plugins",            feature: "Catalogue de plugins à installation à la demande",   mobile: "yes",     termux: "no",            termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH vs les applications d'agents de codage IA",
    agentAppsIntro:
      "Une catégorie d'applications en pleine croissance existe uniquement pour piloter des agents de codage — Claude Code, Codex et consorts — depuis votre téléphone. Certaines sont des applications SSH ou relais tierces (Onepilot, Happy, Omnara) ; OpenAI et Anthropic proposent désormais cela nativement aussi, avec Codex dans l'application ChatGPT et Claude Code dans l'application Claude, tous deux s'exécutant dans le cloud propre du fournisseur. Mobile SSH les recoupe toutes — vous pouvez exécuter ces agents via SSH et être alerté quand ils ont besoin de vous — mais il aborde la tâche par l'autre côté : c'est avant tout un client SSH généraliste et direct, et un compagnon d'agent en second lieu.",
    agentAppsRows: [
      { feature: "Exécute des agents de codage depuis votre téléphone",          mobile: "yes", onepilot: "yes",           happy: "yes",         omnara: "yes",     chatgpt: "yes",              claude: "yes" },
      { feature: "Compatible avec n'importe quel agent de codage (pas un seul fournisseur)", mobile: "yes", onepilot: "yes", happy: "Claude Code", omnara: "yes",     chatgpt: "Codex uniquement", claude: "Claude Code uniquement" },
      { feature: "S'exécute sur votre propre machine (pas un cloud de fournisseur)", mobile: "yes", onepilot: "yes",        happy: "yes",         omnara: "yes",     chatgpt: "no",               claude: "partiel" },
      { feature: "SSH direct — sans relais cloud",                               mobile: "yes", onepilot: "yes",           happy: "no",          omnara: "no",      chatgpt: "no",               claude: "no" },
      { feature: "Terminal SSH généraliste (exécute n'importe quelle commande)", mobile: "yes", onepilot: "yes",           happy: "no",          omnara: "partiel", chatgpt: "no",               claude: "no" },
      { feature: "Transfert de fichiers SFTP",                                   mobile: "yes", onepilot: "partiel",       happy: "no",          omnara: "no",      chatgpt: "no",               claude: "no" },
      { feature: "Redirection de ports locale",                                  mobile: "yes", onepilot: "yes",           happy: "no",          omnara: "no",      chatgpt: "no",               claude: "no" },
      { feature: "Gestionnaire de sessions tmux",                                mobile: "yes", onepilot: "partiel",       happy: "no",          omnara: "no",      chatgpt: "no",               claude: "no" },
      { feature: "Fonctionne avec un agent que vous avez installé vous-même",    mobile: "yes", onepilot: "yes",           happy: "yes",         omnara: "yes",     chatgpt: "no",               claude: "no" },
      { feature: "Alertes agent (push quand l'agent a besoin d'une entrée)",     mobile: "yes", onepilot: "yes",           happy: "yes",         omnara: "yes",     chatgpt: "yes",              claude: "yes" },
      { feature: "Approuver/refuser les invites de l'agent en un tap",           mobile: "yes", onepilot: "yes",           happy: "yes",         omnara: "yes",     chatgpt: "yes",              claude: "yes" },
      { feature: "Aucune configuration de serveur ou de SSH",                    mobile: "no",  onepilot: "no",            happy: "partiel",     omnara: "partiel", chatgpt: "yes",              claude: "yes" },
      { feature: "Android et iOS",                                               mobile: "yes", onepilot: "iOS uniquement", happy: "yes",        omnara: "yes",     chatgpt: "yes",              claude: "yes" },
      { feature: "Aucun compte requis",                                          mobile: "yes", onepilot: "yes",           happy: "yes",         omnara: "no",      chatgpt: "no",               claude: "no" },
      { feature: "Pas de paywall Pro (toutes les fonctionnalités gratuites)",    mobile: "yes", onepilot: "no",            happy: "no",          omnara: "no",      chatgpt: "offre gratuite",   claude: "no" },
      { feature: "Open source",                                                  mobile: "Apache 2.0",  onepilot: "no",            happy: "MIT",         omnara: "Apache",  chatgpt: "no",               claude: "no" }
    ],
    agentAppsNote:
      "Les applications natives ChatGPT et Claude sont le moyen le plus fluide d'exécuter l'agent d'un seul fournisseur sans aucune configuration — pas de serveur, juste un compte — et elles ajoutent un écran soigné d'approbation/refus en un tap. Le hic : elles n'exécutent que leur propre modèle dans leur propre cloud, sans terminal généraliste, sans SFTP ni tunnels, et sans possibilité d'utiliser votre propre machine, et elles sont payantes ou nécessitent un compte. Onepilot, Happy et Omnara gardent l'agent sur du matériel que vous contrôlez (Onepilot via SSH direct ; Happy et Omnara via un relais cloud, et Omnara nécessite un compte). Mobile SSH se connecte directement à votre propre serveur sans compte ni relais du fournisseur, exécute n'importe quel agent aux côtés d'un terminal complet, du SFTP et de la redirection de ports, et toutes les fonctionnalités sont gratuites. Il répond désormais aux invites des agents de la même façon qu'elles — une liste Agents montrant chaque agent de chaque connexion, avec un bouton par choix possible — à ceci près que l'agent s'exécute sur votre machine et que la réponse voyage par votre propre connexion SSH. Le compromis reste celui qu'il a toujours été : c'est vous qui fournissez le serveur, et le hook de l'agent doit y être installé une fois.",
  },
  privacy: {
    metaTitle: "Politique de confidentialité | Mobile SSH",
    metaDescription:
      "Politique de confidentialité de Mobile SSH, comprenant stockage local, transmission de données SSH, transfert de fichiers, journaux et permissions de l'app sur Android et iOS.",
    eyebrow: "Confidentialité",
    h1: "Politique de confidentialité",
    intro:
      "Mobile SSH est conçu comme un client SSH local pour Android et iOS. Il ne nécessite pas de compte Mobile SSH et ne propose pas de service de synchronisation cloud.",
    sections: [
      {
        heading: "Informations stockées sur votre appareil",
        body: "Si vous choisissez d'enregistrer des données dans l'application, Mobile SSH les conserve localement sur l'appareil. Sur iOS, les secrets sont conservés dans le trousseau système Keychain ; sur Android, ils sont chiffrés avec une clé détenue dans le Keystore Android, qui ne peut pas être exportée hors de l'appareil, et l'application se retire de la sauvegarde cloud d'Android. Cela peut inclure les profils de serveur enregistrés, noms d'utilisateur, ports, mots de passe, clés privées, phrases de passe, règles de redirection de ports, sessions récentes, historique des tentatives de connexion, chemins de transfert, préférences de tri, instantanés de sessions tmux et indications de reattach, paramètres de l'application et journaux de débogage lorsque l'enregistrement de débogage est activé."
      },
      {
        heading: "Informations envoyées sur le réseau",
        body: "Mobile SSH envoie les données d'authentification SSH uniquement aux serveurs que vous configurez et auxquels vous vous connectez. Les entrées/sorties du terminal, le contenu des fichiers SFTP et le trafic des redirections de ports locales sont échangés avec les serveurs et points de terminaison distants que vous choisissez. Mobile SSH n'envoie pas ces données à un service d'analytique, de publicité, de télémétrie ou de synchronisation cloud Mobile SSH."
      },
      {
        heading: "Transfert de fichiers et accès au stockage",
        body: "La fonctionnalité de transfert de fichiers parcourt le stockage local du téléphone et les dossiers SFTP distants pour permettre l'envoi et le téléchargement. Mobile SSH ne demande pas à Android d'autorisation de stockage étendue : vous choisissez un seul dossier avec le sélecteur de dossiers du système et l'application ne peut lire et écrire qu'à l'intérieur de celui-ci. Sur iOS, l'accès aux fichiers locaux et aux photos passe par les sélecteurs de documents et de photos du système."
      },
      {
        heading: "Journaux et dépannage",
        body: "L'historique des connexions et les journaux de débogage optionnels sont stockés localement pour le dépannage, et les deux restent désactivés ou vides tant que vous ne les activez pas. L'enregistreur de débogage d'Android capture les événements de terminal, les tailles de données SSH, les diagnostics tactiles, les événements de redimensionnement et les événements de cycle de vie des tunnels — il vous avertit avant de démarrer que cela inclut chaque touche que vous saisissez, mots de passe compris, et il écrit une archive dans votre dossier Téléchargements. iOS enregistre un journal différent et plus restreint : les adresses composées et la raison de chaque échec, les reconnexions et le backoff, les connexions perdues, les changements de réseau et les commandes tmux avec leurs erreurs. Vérifiez tout journal ou archive de débogage avant de le partager avec le support ou un tiers."
      },
      { heading: "Statistiques d'usage anonymes", body: "Pour comprendre comment l'app est utilisée et l'améliorer, Mobile SSH envoie des statistiques d'usage anonymes à Aptabase, un fournisseur d'analytique respectueux de la vie privée agissant pour notre compte. Cela se limite à des événements anonymes (comme les ouvertures de l'app et les fonctions utilisées) ainsi qu'à la version de l'app, la version du système d'exploitation, le modèle de l'appareil et la langue. Un identifiant de session aléatoire, réinitialisé régulièrement, est utilisé ; il n'est lié ni à vous ni à votre appareil. Cela n'inclut jamais vos serveurs SSH, noms d'hôte, identifiants, mots de passe, clés, commandes ou contenus de fichiers. Les données sont envoyées via une connexion chiffrée (HTTPS). L'analytique est activée par défaut. Sur Android, vous pouvez la désactiver à tout moment dans les Réglages, et lorsqu'elle est désactivée rien n'est envoyé ; l'application iOS ne propose pas encore cet interrupteur, si bien que sur iOS ces événements anonymes sont envoyés tant que l'application reste installée. Nous comptons ajouter l'interrupteur iOS — d'ici là, cette page décrit la situation telle qu'elle est réellement." }
    ],
    permissionsHeading: "Permissions",
    permissions: [
      { label: "Internet", body: "nécessaire pour se connecter aux serveurs SSH." },
      { label: "Wake lock et Wi-Fi lock", body: "utilisés sur Android pour garder les sessions SSH actives pendant que l'appareil dort." },
      { label: "Service de premier plan et notifications", body: "utilisés sur Android pour gérer les connexions actives en arrière-plan ; sur iOS, les notifications servent aux alertes agent." },
      { label: "Accès aux fichiers", body: "accordé dossier par dossier via le sélecteur du système sur Android, et via les sélecteurs de documents et de photos du système sur iOS. Mobile SSH ne demande d'autorisation de stockage globale sur aucune des deux plateformes." }
    ],
    securityHeading: "Responsabilités de sécurité",
    securityBody:
      "Protégez votre appareil avec un verrouillage d'écran solide si vous enregistrez des identifiants ou des clés privées. Ne vous connectez qu'à des serveurs de confiance. L'implémentation actuelle utilise le stockage local de l'app (et le trousseau Keychain sur iOS) plutôt qu'un coffre cloud chiffré séparé. Une option Écran sécurisé ajoute une protection quand des secrets sont à l'écran : sur Android, elle bloque les captures et l'enregistrement d'écran et masque l'application de la vue des applications récentes ; sur iOS, elle masque l'aperçu du sélecteur d'applications et bloque l'enregistrement et la recopie d'écran (une capture manuelle ne peut pas être bloquée sur iOS).",
    contactHeading: "Contact",
    contactBody: "Contact support : [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Documentation | Mobile SSH",
    metaDescription: "Documentation utilisateur de Mobile SSH pour Android et iOS.",
    eyebrow: "Guide utilisateur",
    h1: "Documentation Mobile SSH",
    intro:
      "Utilisez ces pages comme guide public pour installer, se connecter, gérer les sessions, transférer des fichiers, rediriger des ports et dépanner Mobile SSH.",
    cards: [
      { slug: "getting-started",  title: "Premiers pas",          text: "Installer, ouvrir l'app, se connecter au premier serveur et enregistrer les hôtes habituels." },
      { slug: "terminal",         title: "Terminal",              text: "Panneaux, rangée de touches supplémentaires, défilement, actions de copie, tmux et réglages clavier." },
      { slug: "file-transfer",    title: "Transfert de fichiers", text: "Parcourir téléphone et serveur, envoyer, télécharger, trier et inspecter les détails distants." },
      { slug: "port-forwarding",  title: "Redirection de ports",  text: "Écrire des chaînes de tunnels locales, rediriger vers des destinations IPv6 et les voir s'activer à la connexion." },
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
    metaDescription: "À propos de Mobile SSH : version, auteur, licence et mentions open source du client SSH pour Android et iOS.",
    eyebrow: "À propos",
    h1: "À propos de Mobile SSH",
    intro: "Client SSH multi-sessions avec tmux, redirection de ports et SFTP.",
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
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto" }
    ],
    contactHeading: "Contact",
    contactBody: "Contact support : [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
