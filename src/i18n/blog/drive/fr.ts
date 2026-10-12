import { defineDrive } from "./define";

export const fr = defineDrive({
  "metaTitle": "L’article commencé sur le chemin du retour | Mobile SSH",
  "metaDescription": "Une séance d’écriture vocale imaginée compare T3 Code, Moshi, Mobile SSH et paseo.sh : rédaction, modification de fichiers, écriture de code, préparation des changements et bruit.",
  "back": "Blog",
  "eyebrow": "Travailler à la voix",
  "title": "L’article commencé sur le chemin du retour",
  "standfirst": "Une idée arrive avant la fin du trajet. Peut-on en faire un brouillon, une modification du code et un diff soigneusement préparé sans rester collé à un écran tactile ? Quatre produits proposent différentes parties de cette conversation.",
  "author": "Le comité de rédaction de Mobile SSH",
  "date": "11 octobre 2026",
  "readingTime": "7 min de lecture",
  "evidence": "Un trajet imaginé, pas un essai au volant. Les fonctions ont été vérifiées dans la documentation officielle et le code actuel le 11 octobre 2026. Aucun test comparatif de microphones ou de bruit routier n’a été réalisé. Configurez le tout à l’arrêt ; la conduite reste prioritaire, et la consultation de l’écran ou les validations attendront un arrêt en sécurité.",
  "body": [
    "L’article commence dans une voiture à l’arrêt. Vous disposez d’un dépôt sur un ordinateur accessible, d’un agent de programmation prêt à travailler et d’une idée qui risque de disparaître si vous promettez de vous en souvenir après le dîner. Avant de partir, vous choisissez le projet et établissez la connexion. La première demande se formule à voix haute, tout simplement.",
    "Rédige un article sur notre nouvelle fonction de recherche. Commence par le problème du lecteur. Enregistre un brouillon dans le répertoire du blog et ne crée pas de commit.",
    "Le trajet fournit le décor, mais la question utile est ce qui se passe après que le microphone vous a entendu. La parole remplit-elle seulement un champ de texte ? Faut-il encore appuyer sur Envoyer ? Peut-on entendre une réponse et poser une autre question ? T3 Code, Moshi, Mobile SSH et paseo.sh n’apportent pas la même réponse.",
    "Une demande, quatre conversations différentes",
    "T3 Code réunit l’agent de programmation et son travail sur le dépôt dans une interface mobile. D’après sa documentation, la saisie vocale intégrée transcrit localement sur les iPhone compatibles sous iOS 26 ou version ultérieure. Le point essentiel : la transcription modifie le brouillon dans l’éditeur de message ; elle ne transmet pas le tour à l’agent. Cela convient pour dicter des consignes de rédaction détaillées à l’arrêt, les vérifier, puis les envoyer. Cela n’établit pas une conversation continue avec des réponses parlées. Le travail peut se poursuivre sur l’hôte après l’envoi, mais la dictée seule ne suffit pas à boucler l’échange sans les mains. <a href=\"#source-t3-voice\">[1]</a>",
    "Moshi passe par le terminal. Sa documentation vocale décrit une parole convertie en entrée de terminal, avec validation facultative par Entrée, ou en texte dans un éditeur de message modifiable. Sa propre comparaison avec Paseo parle de dictée à sens unique, plutôt que d’un échange avec des réponses parlées. Un agent de programmation déjà lancé dans ce terminal peut recevoir les consignes de rédaction. Dans notre trajet imaginé, l’étape manquante consiste à entendre le résultat et à en discuter dans un mode vocal bidirectionnel documenté. Un bouton de microphone et une validation automatique par Entrée sont utiles, mais ne prouvent ni le retour vocal ni les autorisations par la voix. <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-moshi-conversation\">[4]</a>",
    "paseo.sh documente à la fois la dictée et les conversations vocales : la reconnaissance vocale transmet votre demande à un agent, et la synthèse vocale restitue les réponses. Son fonctionnement vocal permet de lancer et de contrôler des agents de programmation, ce qui en fait un candidat direct pour cet échange imaginé. Il s’agit d’un mode d’interaction documenté, pas d’un résultat obtenu pendant ce trajet. Le cycle de vie impose aussi des limites : l’implémentation Android examinée met l’audio en pause lorsque l’application passe en arrière-plan. Ne supposez pas que la conversation vocale implique une session ininterrompue avec le téléphone verrouillé. <a href=\"#source-paseo-voice\">[5]</a> <a href=\"#source-paseo-background\">[7]</a>",
    "L’assistant expérimental de Mobile SSH pour Android offre un autre intérêt : la voix peut agir sur les sessions SSH que vous utilisez déjà. Son mode Live permet les échanges parlés ; ses commandes peuvent découvrir les hôtes et les ressources des multiplexeurs, lire la sortie du terminal sélectionné et, après une autorisation distincte, envoyer des entrées au terminal ou exécuter les commandes prises en charge. Pour quelqu’un qui jongle entre un éditeur, un agent de programmation et un volet de tests, pouvoir nommer une cible existante est utile. Voilà l’avantage étayé à retenir : la voix intégrée au travail SSH général, avec des permissions de contrôle explicites. Ce n’est pas une preuve d’une meilleure reconnaissance vocale que les trois autres. <a href=\"#source-mobile-voice\">[8]</a>",
    "La précision concernant la plateforme compte. La nouvelle implémentation vocale de Mobile SSH pour iOS propose la dictée au premier plan, la relecture et l’envoi explicite, avec des réponses parlées et un accès en lecture seule au terminal sélectionné. Ses notes de version décrivent une version de test privée. Elle ne fournit ni le contrôle en écriture du terminal de l’assistant Android, ni l’écoute continue. L’adaptateur Android Auto de développement n’est pas non plus une intégration automobile publiée. Le récit doit correspondre à la version dont vous disposez réellement. <a href=\"#source-mobile-ios\">[11]</a> <a href=\"#source-mobile-car\">[12]</a>",
    "Le brouillon devient un fichier, puis une modification du code",
    "Imaginons que le plan soit prêt au prochain arrêt en sécurité. La tâche devient alors plus précise. Vous voulez raccourcir l’introduction, corriger un exemple et apporter une petite modification au code du site. Vous pouvez toujours exprimer ces changements à la voix ; nul besoin de dicter chaque accolade et chaque point-virgule.",
    "Raccourcis l’introduction du brouillon. Ajoute ensuite une indication du temps de lecture au composant de l’article, en respectant les conventions du projet. Lance les tests pertinents et indique-moi les fichiers modifiés.",
    "Ici, c’est l’agent de programmation qui écrit. L’interface vocale transmet l’instruction ; l’accès au dépôt, les outils disponibles et les permissions déterminent s’il peut modifier les fichiers et réaliser le composant. Appliquer ces capacités à ce blog précis constitue une proposition de méthode, pas une démonstration vérifiée que les quatre produits l’ont accomplie. T3 Code propose la modification par agent et des actions Git ; Moshi fournit un vrai terminal ; Paseo documente des méthodes de développement avec des agents ; Mobile SSH sur Android peut viser un terminal ou une cible de commande autorisés. L’agent choisi doit encore comprendre la tâche.",
    "Mobile SSH reste utile après la session vocale : la même application dispose d’un terminal SSH, de l’édition de texte par SFTP et d’un accès à lazygit distant. Vous avez ainsi un endroit pratique pour examiner les fichiers réels et le diff à l’arrêt. Ce sont des outils de révision interactifs, pas la preuve que tous leurs boutons sont utilisables à la voix. <a href=\"#source-mobile-voice\">[8]</a>",
    "La mise en index mérite sa propre phrase",
    "Ajoute à l’index uniquement le brouillon du blog et le composant de l’article que nous venons de relire. Ne touche à aucune autre modification. Ne fais ni commit ni push.",
    "La mise en index sélectionne le contenu du prochain commit Git ; elle est distincte de l’enregistrement, du commit et de la publication. Le parcours de commit mobile de T3 Code sélectionne les fichiers et les ajoute à l’index dans le cadre du commit. Cela ne revient pas à documenter une action vocale autonome de mise en index. Dans Moshi, Paseo ou une session Mobile SSH Android autorisée à écrire, demander à un agent capable de préparer des fichiers précis est un usage raisonnable de ses outils shell, sous réserve des permissions. Rien de cela ne prouve qu’un diff quelconque puisse être approuvé de façon fiable uniquement à la voix. Vérifiez le diff indexé à l’arrêt, en sécurité. <a href=\"#source-t3-git\">[2]</a> <a href=\"#source-paseo-work\">[6]</a>",
    "Puis la route devient plus bruyante",
    "Dans notre trajet imaginé, la pluie arrive, la ventilation accélère et un passager se met à parler. C’est là qu’une démonstration soignée cesse de répondre à la question importante. Nous n’avons trouvé aucun résultat contrôlé et comparable sur le bruit routier pour ces quatre produits. Rien ici ne permet de désigner un vainqueur de la reconnaissance, une distance fiable au microphone, ou de promettre qu’une conversation en arrière-plan ne deviendra jamais une commande.",
    "La transcription sur l’appareil de T3 Code indique où se fait la reconnaissance, pas sa précision dans un habitacle bruyant. Moshi propose plusieurs moteurs de reconnaissance sur iOS et suggère une transcription hébergée quand la reconnaissance locale peine avec le bruit ; cette suggestion n’est pas un test comparatif. Paseo propose des services vocaux locaux et des alternatives cloud configurables, mais le choix du fournisseur ne suffit pas à établir les performances dans votre voiture. Bruit routier, autres voix, placement du microphone et modèle de reconnaissance choisi doivent être évalués dans la configuration réelle. <a href=\"#source-t3-voice\">[1]</a> <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-paseo-voice\">[5]</a>",
    "Mobile SSH propose des réglages utiles à évaluer sur Android : le circuit audio du téléphone active la réduction du bruit et l’annulation d’écho de la plateforme lorsqu’elles sont disponibles, et l’hôte vocal propose un filtrage RNNoise facultatif ainsi qu’un filtre fondé sur un locuteur enregistré. Ce sont des choix d’implémentation vérifiés, pas une supériorité vérifiée. La protection de l’entrée est désactivée par défaut, nécessite une configuration et peut rejeter le locuteur attendu ou accepter une voix indésirable. Sa documentation précise explicitement que les contrôles synthétiques enregistrés ne mesurent pas la précision avec des personnes utilisant un casque ou dans le bruit d’une voiture. <a href=\"#source-mobile-noise\">[10]</a>",
    "Pour la reconnaissance sur serveur de Mobile SSH Android, les commandes de casque documentées permettent de démarrer ou reprendre une conversation configurée et de contrôler une session active en arrière-plan, sous réserve du routage d’Android et de la priorité d’autres applications. Cela peut réduire les interactions avec l’écran. Il faut toutefois le tester avec votre téléphone et votre casque à l’arrêt ; ce n’est une garantie ni pour les boutons du volant, ni pour les mots d’activation, ni pour toutes les voitures. Si la conversation demande une correction ou de l’attention, mettez-la en pause. <a href=\"#source-mobile-headset\">[9]</a>",
    "Arriver avec quelque chose qui mérite une relecture",
    "Le résultat utile, c’est un brouillon et une petite modification facile à examiner qui vous attendent à la fin du trajet. T3 Code et Moshi offrent différentes façons de dicter des instructions dans un processus de programmation existant. Paseo propose une alternative conversationnelle documentée. Mobile SSH mérite particulièrement d’être évalué par les utilisateurs Android qui veulent la voix aux côtés de leurs terminaux SSH et sessions de multiplexeurs existants, puis des outils complets de terminal et de fichiers pour la révision. Ce jugement découle des capacités, pas d’un concours face au bruit que nous n’avons pas organisé.",
    "Les quatre ont leur place dans la comparaison. Choisissez l’interaction adaptée à votre appareil et au travail, formulez des demandes précises et gardez votre attention sur la route. Le brouillon peut attendre. Le diff final mérite votre attention."
  ],
  "comparison": {
    "heading": "Ce que ce trajet imaginé peut raisonnablement demander à chaque produit",
    "productHeading": "Produit",
    "voiceHeading": "Fonctionnement vocal vérifié",
    "fitHeading": "Intérêt et limites",
    "rows": [
      {
        "id": "t3",
        "voice": "Appareils iOS compatibles : dictée dans un brouillon ; envoi séparé.",
        "fit": "Modification par agent et actions Git mobiles ; dialogue parlé continu non établi."
      },
      {
        "id": "moshi",
        "voice": "Dictée dans le terminal ou l’éditeur de message ; validation par Entrée facultative.",
        "fit": "Utilisation d’un agent existant dans le terminal ; la voix documentée est à sens unique."
      },
      {
        "id": "mobile",
        "voice": "Conversation Live expérimentale sur Android et contrôle du terminal sur autorisation explicite.",
        "fit": "Cibles SSH et multiplexeurs existants ; le nouvel assistant iOS est en lecture seule et exige un envoi explicite."
      },
      {
        "id": "paseo",
        "voice": "Dictée, reconnaissance vocale et réponses parlées dans le mode vocal.",
        "fit": "Contrôle conversationnel d’agents ; l’audio en arrière-plan dépend de la plateforme et de la version."
      }
    ],
    "note": "La documentation et le code établissent des mécanismes, pas la réussite de ce scénario. Aucune performance comparative face au bruit routier n’est établie pour l’un des quatre."
  },
  "sources": {
    "heading": "Sources de cette comparaison",
    "t3Voice": "T3 Code : saisie vocale et limite de l’envoi depuis le brouillon",
    "t3Ios": "T3 Code : disponibilité de la voix sur iOS",
    "t3Git": "T3 Code : sélection mobile des fichiers pour les commits",
    "t3Stage": "T3 Code : mise en index des fichiers sélectionnés sur le serveur",
    "moshiVoice": "Moshi : moteurs vocaux, entrée du terminal et comportement de l’éditeur de message",
    "moshiConversation": "Moshi : sa description de la dictée par rapport à la conversation",
    "paseoVoice": "paseo.sh : dictée et conversations vocales",
    "paseoWork": "paseo.sh : méthodes de développement dans un dépôt",
    "paseoBackground": "Paseo : cycle de vie de l’audio Android dans la v0.11.2",
    "mobileVoice": "Mobile SSH : commandes vocales Android et usages habituels du terminal et des fichiers",
    "mobileHeadset": "Mobile SSH : commandes du casque et leurs limites",
    "mobileNoise": "Mobile SSH : protection facultative de l’entrée et implémentation audio",
    "mobileAudio": "Mobile SSH : traitement audio de la plateforme",
    "mobileIos": "Mobile SSH : implémentation vocale iOS et limites de la version privée",
    "mobileCar": "Mobile SSH : adaptateur Android Auto réservé au développement",
    "mobileAudit": "Les références Mobile SSH consignent notre examen des dépôts privés Android et iOS aux révisions indiquées. Il s’agit de constats tirés du code source, pas de confirmations de versions publiques ni de résultats de tests en voiture."
  },
  "cta": {
    "heading": "Gardez la conversation près du travail.",
    "body": "Découvrez les méthodes documentées de Mobile SSH et vérifiez les capacités de votre plateforme et de votre version avant de configurer une session vocale.",
    "docsLink": "Lire la documentation",
    "featuresLink": "Consulter les fonctions par plateforme"
  }
});
