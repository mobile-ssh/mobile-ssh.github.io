import { defineYourServer } from "./define";

export const fr = defineYourServer({
  "metaTitle": "Votre agent. Votre serveur. Vos règles. | Mobile SSH",
  "metaDescription": "Choisissez où tourne votre agent de programmation : environnement géré, compte cloud personnel ou matériel vous appartenant. Gardez la maîtrise des accès, des sauvegardes et du départ.",
  "back": "Blog",
  "eyebrow": "Propriété",
  "title": "Votre agent. Votre serveur. Vos règles.",
  "standfirst": "Un environnement d’agent prêt à l’emploi fait gagner du temps. Avant de lui confier votre dépôt, décidez qui doit détenir la machine, les identifiants et les moyens de partir. Mobile SSH vous permet d’utiliser votre propre hôte, de l’ordinateur sous votre bureau à une machine virtuelle dans votre compte cloud.",
  "author": "Le comité de rédaction de Mobile SSH",
  "date": "5 octobre 2026",
  "readingTime": "7 min de lecture",
  "figure": {
    "heading": "Choisissez l’hôte. Vérifiez le trajet vers le modèle.",
    "phone": "Votre téléphone · Mobile SSH",
    "connection": "SSH vers l’hôte de votre choix",
    "hosts": [
      {
        "id": "owned",
        "title": "Votre machine physique",
        "detail": "Chez vous, au bureau ou dans votre propre salle serveur"
      },
      {
        "id": "cloud",
        "title": "Une machine virtuelle dans votre compte cloud",
        "detail": "Vous administrez le système invité ; le fournisseur exploite le matériel"
      }
    ],
    "workspace": "Les fichiers, les outils et le processus de l’agent résident sur l’hôte choisi",
    "modelConnection": "Avec un modèle cloud, les instructions et le contexte sélectionné quittent l’hôte",
    "model": "Le service de modèles de votre choix",
    "caption": "Trois décisions distinctes : comment vous connecter, où exécuter le code et où le modèle le traite. Maîtriser les deux premières ne rend pas la troisième locale."
  },
  "body": [
    "La proposition est séduisante : ouvrir un environnement et y trouver Codex, Claude Code ou Gemini CLI déjà prêts. Aucune machine à préparer, aucun paquet à installer. Connectez un dépôt, décrivez la tâche et laissez une machine virtuelle dans le cloud travailler. Pour une expérience ou un projet jetable, cette commodité peut être exactement ce qu’il vous faut.",
    "Puis l’expérience devient votre environnement quotidien. Du code privé y arrive. Des données de test, de la documentation interne et les identifiants que vous fournissez aussi. Avant que ce transfert devienne habituel, posez une question plus durable : qui contrôle l’endroit où vit ce travail ?",
    "Un environnement prêt à l’emploi a un exploitant",
    "Dans un environnement d’agent géré par un fournisseur, quelqu’un d’autre exploite l’hôte d’exécution. Votre dépôt peut y être cloné, des données téléversées et des autorisations accordées pour accéder à d’autres systèmes. L’isolation, les accès administrateurs, la conservation et les possibilités d’export dépendent du service. Les outils préinstallés indiquent la rapidité du démarrage ; ils disent peu de ces dispositions.",
    "Vous pouvez faire ce choix en connaissance de cause. Les environnements gérés peuvent alléger la maintenance et offrir une isolation utile. Lisez ce qu’il advient des disques de travail, des transcriptions, des instantanés et des identifiants, y compris après la fin d’une session ou la fermeture d’un compte. Nul besoin de supposer de mauvaises intentions pour vouloir des réponses claires sur son travail privé.",
    "Gardez les clés. Gardez une sauvegarde. Gardez la possibilité de partir.",
    "Trois endroits pour exécuter le même agent",
    "Une machine virtuelle dans votre propre compte cloud offre une autre répartition. Vous choisissez le système invité, installez les outils, accordez les accès et gérez le cycle de vie de l’instance. Le fournisseur cloud exploite toujours l’infrastructure physique. Parler de votre serveur décrit une maîtrise administrative, pas la propriété du matériel sous-jacent. <a href=\"#source-cloud\">[1]</a>",
    "Une machine physique qui vous appartient va plus loin : vous choisissez le matériel et son emplacement. Un ordinateur existant, un petit serveur domestique ou une machine de bureau peuvent héberger l’environnement. Vous héritez aussi des tâches pratiques : alimentation, connectivité, réparations, correctifs et récupération. La propriété vous donne des décisions à prendre ; elle ne les prend pas à votre place.",
    "Retrouvez votre serveur sur votre téléphone",
    "Mobile SSH fonctionne avec les deux options que vous exploitez vous-même. Connectez-vous à un hôte SSH accessible sur votre réseau local, par un chemin réseau que vous configurez ou dans votre compte cloud. Les sessions SSH ordinaires ne nécessitent ni relais de session exploité par Mobile SSH ni compte Mobile SSH. Vous choisissez la destination et fournissez ses identifiants.",
    "Installez l’agent de votre choix sur cet hôte. Ouvrez son répertoire de travail, lancez Codex, Claude Code ou Gemini CLI et utilisez le terminal que vous connaissez déjà. Vous pouvez garder une session sous tmux, herdr ou Zellij et y revenir depuis votre téléphone tant que l’hôte et le processus continuent de tourner. Le travail appartient à cet environnement ; changer de téléphone n’impose pas de déplacer le dépôt.",
    "Cela vous laisse des choix utiles. Gardez les données de test sensibles sur une machine locale. Utilisez une machine virtuelle cloud quand ses ressources conviennent à la tâche. Changez d’agent sans reconstruire votre façon de travailler sur mobile. Mobile SSH fournit l’accès au terminal, SFTP et des tunnels ; il ne vous impose pas de louer un environnement d’agent particulier.",
    "Votre serveur et votre modèle sont deux choix distincts",
    "Cette distinction compte surtout lorsqu’il s’agit de données privées. Exécuter un agent sur votre matériel ne signifie pas nécessairement y exécuter son modèle. Un agent adossé au cloud peut envoyer des instructions, une sélection du contexte du dépôt et les résultats des outils au service de modèles. Le processus de l’agent et l’arbre de travail peuvent rester sur votre serveur tandis que l’inférence a lieu ailleurs. <a href=\"#source-claude\">[2]</a> <a href=\"#source-gemini\">[3]</a>",
    "SSH chiffre la connexion entre votre téléphone et son point d’arrivée. Il n’empêche pas les logiciels de l’hôte de lire les fichiers autorisés ou d’effectuer leurs propres requêtes réseau. Décidez du service de modèles utilisé par l’agent, de ce qu’il peut lire et des outils ou intégrations pouvant envoyer des données à l’extérieur. Vérifiez les règles applicables à votre compte et à votre configuration réels.",
    "Si le travail exige une inférence locale, choisissez un ensemble agent-modèle compatible et vérifiez son comportement réseau. Ne déduisez pas cette garantie du mot local dans un installateur. Les analyses facultatives et téléchargements de plugins de Mobile SSH ont aussi leurs propres flux de données ; les réglages et la politique de confidentialité de l’app les expliquent.",
    "Faites du contrôle une capacité réelle",
    "Un mot de passe root n’est qu’un début. Une maîtrise concrète signifie pouvoir limiter les accès, se remettre d’une erreur, examiner les modifications et déplacer l’environnement sans demander à une plateforme d’agents de le préserver pour vous. Accordez à ces capacités autant d’attention qu’au choix du modèle.",
    "Rien de cela ne rend automatiquement un serveur domestique plus sûr qu’un service géré. Une machine négligée dotée d’identifiants trop puissants peut être un mauvais endroit pour des données privées. Choisissez un niveau de responsabilité que vous pouvez assumer dans la durée. L’avantage est de pouvoir faire ce choix, l’examiner et le changer quand vos besoins évoluent.",
    "Possédez la machine quand vous le pouvez. Gardez la maîtrise de l’environnement où qu’il tourne.",
    "La prochaine fois qu’un environnement d’agent prêt à l’emploi demande votre dépôt, prenez un instant avant de le connecter. Décidez où les fichiers doivent résider, qui doit administrer cet hôte et comment vous emporterez votre travail. Puis prenez votre téléphone. Mobile SSH peut vous retrouver sur le serveur que vous avez choisi."
  ],
  "comparison": {
    "heading": "Qui contrôle quoi ?",
    "dimension": "Décision",
    "models": [
      {
        "id": "managed",
        "title": "Environnement d’agent géré"
      },
      {
        "id": "cloud",
        "title": "Machine virtuelle dans votre compte cloud"
      },
      {
        "id": "owned",
        "title": "Matériel vous appartenant"
      }
    ],
    "rows": [
      {
        "id": "hardware",
        "label": "Matériel physique",
        "managed": "Fournisseur du service ou de l’infrastructure",
        "cloud": "Fournisseur cloud",
        "owned": "Vous possédez la machine"
      },
      {
        "id": "admin",
        "label": "Maîtrise administrative",
        "managed": "Définie par le service",
        "cloud": "Vous administrez le système invité",
        "owned": "Vous administrez l’hôte"
      },
      {
        "id": "storage",
        "label": "Environnement et stockage",
        "managed": "Disques et conservation gérés par le service",
        "cloud": "Volumes et cycle de vie que vous configurez",
        "owned": "Stockage que vous choisissez et entretenez"
      },
      {
        "id": "access",
        "label": "Identifiants et politique réseau",
        "managed": "Contrôles du service et permissions que vous accordez",
        "cloud": "Votre configuration système, identités et réseau",
        "owned": "Votre configuration système, identités et réseau"
      },
      {
        "id": "portability",
        "label": "Sauvegardes et possibilité de partir",
        "managed": "Vérifiez les options d’export et de suppression",
        "cloud": "Gérez des copies hors de l’instance",
        "owned": "Gérez des copies hors de la machine"
      },
      {
        "id": "maintenance",
        "label": "Travail d’exploitation",
        "managed": "Le fournisseur exploite l’environnement ; vous configurez son usage",
        "cloud": "Vous entretenez le système invité ; le fournisseur, l’infrastructure",
        "owned": "Vous entretenez le matériel, le système et la connectivité"
      }
    ],
    "note": "Il s’agit de configurations habituelles, pas de garanties sur chaque service. Dans chaque colonne, les flux de données vers le fournisseur du modèle dépendent de l’agent et de la configuration choisis."
  },
  "checklist": {
    "heading": "Six façons de garder la maîtrise",
    "steps": [
      {
        "heading": "Donnez une petite mission aux identifiants",
        "body": "Utilisez des identifiants distincts et révocables pour l’environnement. N’accordez que les permissions de dépôts et de services nécessaires à la tâche."
      },
      {
        "heading": "Limitez l’environnement",
        "body": "Lorsque c’est possible, exécutez l’agent avec un utilisateur dédié sans privilèges. Gardez hors de sa portée les fichiers privés sans rapport avec la tâche et les secrets de production."
      },
      {
        "heading": "Vérifiez la destination SSH",
        "body": "Contrôlez les empreintes d’hôtes inconnus par un canal fiable. Enquêtez sur les clés modifiées avant de remplacer une identité enregistrée."
      },
      {
        "heading": "Gardez une sauvegarde indépendante",
        "body": "Conservez des copies chiffrées dans des comptes que vous contrôlez, séparément de l’hôte de travail. Testez une restauration, y compris du travail non commité à préserver."
      },
      {
        "heading": "Examinez ce qui quitte l’hôte",
        "body": "Vérifiez les points d’accès aux modèles, les plugins, les outils externes et la télémétrie. Partagez le minimum de contexte nécessaire et examinez les modifications obtenues."
      },
      {
        "heading": "Entraînez-vous à déménager",
        "body": "Restaurez l’environnement sur un autre hôte, reconnectez-vous et lancez ses tests. La possibilité de partir doit être quelque chose que vous avez essayé."
      }
    ]
  },
  "sources": {
    "heading": "Sources et limites",
    "aws": "AWS : responsabilité partagée entre infrastructure cloud et systèmes invités",
    "anthropic": "Claude Code : exécution locale, connexions cloud et utilisation des données",
    "google": "Gemini CLI : services de modèles et avis de confidentialité applicables",
    "checked": "Documentation des sources vérifiée le 5 octobre 2026. Les conditions des comptes et les capacités des services peuvent évoluer."
  },
  "cta": {
    "heading": "Connectez-vous au serveur que vous avez choisi.",
    "body": "Utilisez Mobile SSH sur Android ou iOS pour accéder à vos machines, exécuter vos outils et garder votre environnement à portée de main.",
    "playButton": "Disponible sur Google Play",
    "iosButton": "Rejoindre la bêta iOS",
    "docsLink": "Configurer votre première connexion",
    "privacyLink": "Lire la politique de confidentialité"
  }
});
