import type { CloudGuides } from "./types";

export const fr: CloudGuides = {
  "title": "Créer une VM chez {provider}",
  "description": "Création pas à pas d’une VM chez {provider} : IPv4 publique, règles de pare-feu, accès SSH depuis Mobile SSH, identifiants API facultatifs et suppression des ressources.",
  "intro": "Créez un serveur Ubuntu avec une IPv4 publique dans votre propre compte {provider}. Suivez les étapes de la console, connectez-vous depuis Mobile SSH, puis installez wg-easy séparément.",
  "back": "Machines virtuelles cloud et wg-easy",
  "indexHeading": "Guides pas à pas par fournisseur cloud",
  "indexIntro": "Choisissez votre fournisseur pour retrouver ses écrans de console, réglages d’IP publique, identifiant SSH, identifiants API facultatifs et opérations de suppression. AWS Lightsail et EC2 disposent de guides distincts.",
  "cardAction": "Créer une VM et se connecter avec Mobile SSH",
  "navLabel": "Choisir un fournisseur cloud",
  "openConsole": "Ouvrir la console du fournisseur",
  "availability": "Ces instructions utilisent la console du fournisseur. Des extensions distinctes de création de VM sont prévues ; l’implémentation combinée Android VPN Setup est locale et non publiée. La section API prépare un accès futur et n’est pas nécessaire pour cette méthode manuelle.",
  "availabilityLink": "Vérifier la disponibilité des extensions",
  "checked": "Documentation des consoles vérifiée le 8 novembre 2026.",
  "beforeHeading": "Avant de commencer",
  "before": [
    "Activez la facturation et vérifiez les quotas régionaux de VM, de disques et d’IP publiques. Vérifiez le prix affiché avant de créer des ressources ; ne supposez pas qu’une offre gratuite ou un forfait précis est disponible.",
    "Pour cette configuration, utilisez Ubuntu 24.04 LTS avec au moins 1 Go de RAM et 20 Go de stockage, ou le minimum supérieur imposé par le fournisseur. Faites correspondre l’architecture du processeur à l’image. Il s’agit de la base retenue pour ce guide, pas d’un minimum universel pour wg-easy.",
    "Conservez une clé privée SSH dans Mobile SSH et importez uniquement sa clé publique. Ed25519 fonctionne avec les clients Android et iOS actuels ; les étapes Lightsail expliquent l’importation RSA et la solution pour iOS. Notez votre IPv4 publique actuelle suivie de <code>/32</code> comme source SSH, ou utilisez votre CIDR d’administration autorisé."
  ],
  "networkHeading": "Règles réseau pour cette configuration",
  "networkRules": [
    "Autorisez les connexions entrantes <code>TCP 22</code> depuis le CIDR d’administration. Supprimez les autorisations SSH plus larges si elles sont inutiles ; ajouter une règle restrictive n’annule pas automatiquement une règle plus large. Actualisez la source lorsque l’adresse publique du téléphone change.",
    "Pour l’étape VPN ultérieure, autorisez les connexions entrantes <code>UDP 51820</code> depuis les réseaux des clients VPN ; les clients itinérants peuvent nécessiter <code>0.0.0.0/0</code>. Si vous activez IPv6, configurez ses règles explicitement.",
    "Gardez <code>TCP 51821</code> fermé au public. L’interface d’administration de wg-easy écoutera sur la boucle locale du serveur et sera accessible par redirection SSH.",
    "Autorisez le trafic sortant nécessaire au DNS, aux téléchargements de paquets et de conteneurs, et au VPN. Vérifiez les pare-feu du cloud et du système invité ; préservez les règles de stockage du fournisseur et les règles ICMP essentielles."
  ],
  "stepsHeading": "Créer le serveur et se connecter",
  "sourceLink": "Instructions du fournisseur",
  "connectHeading": "Enregistrer le serveur dans Mobile SSH",
  "connectText": "Ouvrez Serveurs, ajoutez un serveur et renseignez ces valeurs. Sélectionnez l’identifiant contenant la clé privée correspondante. Utilisez le nom d’utilisateur configuré s’il diffère de l’exemple du guide.",
  "hostLabel": "Hôte",
  "hostValue": "L’IPv4 publique de la VM indiquée dans la console du fournisseur",
  "portLabel": "Port",
  "userLabel": "Nom d’utilisateur",
  "credentialLabel": "Authentification",
  "credentialValue": "L’identifiant contenant la clé privée SSH correspondante",
  "identityText": "Obtenez l’empreinte de la clé d’hôte SSH dans la console de confiance du fournisseur ou les journaux de démarrage, puis comparez-la avant d’approuver la connexion. Sur Android, désactivez l’acceptation automatique des nouvelles identités si vous souhaitez vérifier la première connexion. Examinez les alertes de changement de clé avant de remplacer une identité enregistrée.",
  "connectionGuide": "Clés SSH et vérification des identités",
  "vpnHeading": "Installer wg-easy dans une étape distincte",
  "vpnText": "Vérifiez d’abord que le serveur enregistré ouvre un terminal et que votre compte dispose d’un accès root ou sudo. Suivez ensuite le guide commun d’installation de wg-easy : Docker, conteneur fixé à une version, administration privée par SSH, création des clients et vérification du VPN. L’installateur a besoin d’un accès SSH, pas du secret de votre API cloud.",
  "vpnLink": "Continuer vers l’installation de wg-easy",
  "apiHeading": "Identifiants API facultatifs pour une future extension",
  "apiIntro": "Ignorez cette section pour une configuration par la console. Ne créez des identifiants que lorsqu’un outil de provisionnement compatible les exige. Les listes de permissions ci-dessous servent à préparer l’accès ; ce ne sont pas des politiques minimales testées pour une extension publiée.",
  "apiSecretNote": "Saisissez les identifiants uniquement dans un formulaire protégé compatible. Ne placez pas de secrets cloud dans des instructions vocales, des commandes de terminal ou la VM. Utilisez le périmètre le plus restreint pris en charge, notez l’expiration et révoquez les identifiants devenus inutiles.",
  "cleanupHeading": "Supprimer les ressources devenues inutiles",
  "cleanupWarning": "Arrêter la VM, annuler une tâche de configuration ou supprimer un profil Mobile SSH ne supprime pas les ressources cloud et ne garantit pas l’arrêt de la facturation. Conservez les identifiants des ressources jusqu’à confirmation de leur suppression, et préservez les ressources sans rapport avec cette configuration.",
  "providers": {
    "aws-lightsail": {
      "consoleSteps": [
        "Connectez-vous à votre compte AWS, ouvrez Lightsail et sélectionnez <strong>Créer une instance</strong>. Choisissez la région la plus proche de l’emplacement prévu pour votre VPN.",
        "Sélectionnez <strong>Linux/Unix → Système d’exploitation uniquement → Ubuntu 24.04 LTS</strong>. Choisissez un forfait double pile IPv4/IPv6 avec au moins 1 Go de RAM et 20 Go de stockage ; vérifiez le prix affiché.",
        "Choisissez la paire de clés SSH régionale ou importez votre clé publique RSA. Conservez sa clé privée en sécurité, nommez l’instance et sélectionnez <strong>Créer une instance</strong>. iOS nécessite l’ajout de clé décrit ci-dessous.",
        "Ouvrez <strong>Mise en réseau → Créer une IP statique</strong>. Sélectionnez la même région, attachez l’adresse à cette instance, nommez-la et créez-la. Notez l’IPv4 statique.",
        "Dans l’onglet <strong>Mise en réseau</strong> de l’instance, limitez SSH à l’IPv4 publique de votre téléphone en conservant <strong>Autoriser SSH/RDP depuis le navigateur Lightsail</strong>. Ajoutez la règle UDP 51820 commune ; vérifiez séparément les règles IPv6 et gardez TCP 51821 fermé.",
        "Pour iOS, sélectionnez <strong>Connexion → Se connecter via SSH</strong>. Ajoutez la clé publique Ed25519 de votre application sur une nouvelle ligne dans <code>/home/ubuntu/.ssh/authorized_keys</code>, sans supprimer les clés existantes. Le SSH du navigateur utilise une clé distincte du fournisseur ; votre IPv4 statique est prête."
      ],
      "apiSteps": [
        "Uniquement pour un futur outil de provisionnement, créez une identité IAM dédiée avec les actions Lightsail requises pour les instances, clés SSH, IP statiques et pare-feu, y compris leur suppression. Limitez la région et les ressources lorsque c’est possible ; ce n’est pas une politique minimale testée.",
        "Dans <strong>IAM → Utilisateurs → Informations d’identification de sécurité</strong>, ne créez une clé d’accès que lorsqu’une automatisation compatible en a besoin. Fournissez son identifiant et son secret via le formulaire natif protégé ; les identifiants temporaires exigent aussi leur jeton de session. N’utilisez jamais de clés root."
      ],
      "cleanupSteps": [
        "Supprimez l’instance lorsque vous avez terminé. Vérifiez séparément les instantanés et disques conservés ; arrêter une instance ne met pas fin à tous les frais.",
        "Libérez séparément l’IP statique après l’avoir détachée. La suppression de son instance ne supprime pas l’adresse."
      ]
    },
    "aws-ec2": {
      "consoleSteps": [
        "Ouvrez EC2 dans votre région AWS et sélectionnez <strong>Lancer une instance</strong>. Nommez le serveur et choisissez une AMI officielle Canonical <strong>Ubuntu Server 24.04 LTS</strong>, en vérifiant son éditeur et son architecture.",
        "Sélectionnez un type d’instance avec au moins 1 Go de RAM et une architecture correspondante. Dans <strong>Configurer le stockage</strong>, prévoyez au moins 20 Go pour le volume de démarrage et vérifiez le coût estimé des ressources.",
        "Dans <strong>Paire de clés</strong>, sélectionnez une clé existante ou créez/importez une paire Ed25519 pour Linux. Gardez la clé privée correspondante disponible dans l’application ; AWS installe la clé publique sur l’instance.",
        "Dans <strong>Paramètres réseau</strong>, choisissez un sous-réseau public. Son VPC doit disposer d’une passerelle Internet attachée et d’une route <code>0.0.0.0/0</code> vers cette passerelle. Activez une IPv4 publique ; l’adresse statique sera configurée plus bas.",
        "Créez ou sélectionnez un groupe de sécurité avec les règles TCP 22 et UDP 51820 communes. Limitez SSH à l’IPv4 publique du téléphone, gardez TCP 51821 fermé, puis sélectionnez <strong>Lancer une instance</strong> et attendez son démarrage.",
        "Ouvrez <strong>Réseau et sécurité → Adresses IP élastiques → Allouer une adresse IP élastique</strong>. Sélectionnez ensuite <strong>Actions → Associer une adresse IP élastique</strong> et choisissez cette instance et son IP privée principale. Notez l’IPv4 statique ; les adresses IPv4 publiques sont facturées."
      ],
      "apiSteps": [
        "Uniquement pour un futur outil de provisionnement, créez une identité IAM dédiée couvrant la création d’instances, les ressources AMI/réseau/disque/clés associées, les balises, les IP élastiques et la suppression. Les permissions existantes de lecture/démarrage/arrêt ne suffisent pas. Ajoutez <code>iam:PassRole</code> uniquement si vous attachez un profil d’instance.",
        "Créez ou obtenez les identifiants de cette identité et fournissez-les uniquement via des paramètres natifs protégés compatibles. Préférez les identifiants temporaires lorsqu’ils sont pris en charge, avec leur jeton de session ; n’utilisez jamais de clés d’accès root. Cette procédure par la console ne nécessite aucune clé API dans Mobile SSH."
      ],
      "cleanupSteps": [
        "Résiliez l’instance. Vérifiez <strong>Supprimer à la résiliation</strong> et supprimez séparément les volumes EBS ou instantanés conservés devenus inutiles.",
        "Libérez séparément l’IP élastique. La résiliation dissocie l’adresse mais ne la libère pas et ne met pas fin à sa facturation."
      ]
    },
    "google-cloud": {
      "consoleSteps": [
        "Sélectionnez ou créez un projet Google Cloud, activez la facturation et l’<strong>API Compute Engine</strong>. Ouvrez <strong>Compute Engine → Instances de VM → Créer une instance</strong>.",
        "Nommez la VM, choisissez sa région, sa zone et une machine avec au moins 1 Go de RAM. Dans <strong>Système d’exploitation et stockage → Modifier</strong>, sélectionnez <strong>Ubuntu → Ubuntu 24.04 LTS</strong> et au moins 20 Go de stockage.",
        "Réservez une IPv4 externe statique régionale dans la région de la VM. Dans ses paramètres <strong>Mise en réseau</strong>, sélectionnez le VPC/sous-réseau prévu et choisissez cette adresse comme IPv4 externe de l’interface réseau. Le VPC doit avoir une route Internet par défaut ; créez un réseau et un sous-réseau adaptés si votre projet n’en possède pas.",
        "Dans les paramètres de clés SSH de la VM, ajoutez la clé publique de l’application avec <code>mobileuser</code> comme commentaire de nom d’utilisateur : <code>ssh-ed25519 AAAA… mobileuser</code>. Si votre projet impose OS Login, suivez cette procédure et utilisez le nom POSIX attribué ; les clés de métadonnées ne la contournent pas.",
        "Ajoutez une balise réseau telle que <code>wg-vpn</code>. Créez des règles de pare-feu entrantes ciblant cette balise pour l’accès TCP 22 et UDP 51820 commun. Limitez SSH à l’IPv4 publique du téléphone et gardez TCP 51821 fermé.",
        "Terminez la vérification de la configuration de la VM et sélectionnez <strong>Créer</strong>. Attendez que l’instance fonctionne, puis notez son IPv4 externe et le nom SSH choisi précédemment. Ne supposez pas que le nom d’utilisateur est <code>ubuntu</code>."
      ],
      "apiSteps": [
        "Uniquement pour un futur outil de provisionnement, utilisez un compte de service dédié avec les rôles d’administrateur d’instances Compute (v1), d’administrateur réseau Compute et d’administrateur de sécurité Compute limités au projet, ou des équivalents plus restreints. L’administrateur réseau Compute ne peut pas créer de pare-feu. Si vous attachez un compte de service à la VM, accordez aussi le rôle Utilisateur de compte de service sur ce compte.",
        "Si une automatisation compatible exige une clé JSON et que la politique de l’organisation l’autorise, ouvrez <strong>IAM et administration → Comptes de service → Clés → Ajouter une clé → Créer une clé → JSON</strong>. Fournissez l’ID du projet et le JSON via des paramètres natifs protégés ; ne contournez jamais une restriction de clés."
      ],
      "cleanupSteps": [
        "Supprimez la VM et vérifiez si ses disques de démarrage et de données sont supprimés ou conservés ; supprimez les disques et instantanés conservés devenus inutiles.",
        "Libérez séparément l’IPv4 externe réservée. Supprimer la VM ne libère pas une adresse réservée."
      ]
    },
    "azure": {
      "consoleSteps": [
        "Ouvrez le portail Azure avec un abonnement actif. Créez un groupe de ressources dédié, puis ouvrez <strong>Machines virtuelles → Créer → Machine virtuelle Azure</strong> et sélectionnez cet abonnement et ce groupe.",
        "Saisissez un nom et une région. Choisissez <strong>Ubuntu Server 24.04 LTS – x64 Gen2</strong> et une taille compatible avec au moins 1 Go de RAM. Conservez un disque système d’au moins 20 Go ; vérifiez le coût affiché.",
        "Choisissez l’authentification par <strong>Clé publique SSH</strong>, définissez le nom d’administrateur sur <code>azureuser</code> et sélectionnez une clé publique existante. Collez la clé publique Ed25519 de l’application ; conservez la clé privée dans l’application.",
        "Dans <strong>Mise en réseau</strong>, sélectionnez ou créez un VNet et un sous-réseau. Créez ou sélectionnez une IPv4 publique statique Standard dans la région appropriée et attachez-la à la configuration IP de l’interface réseau de cette VM.",
        "Configurez le groupe de sécurité réseau concerné avec les règles TCP 22 et UDP 51820 communes. Limitez SSH à l’IPv4 publique du téléphone ; gardez TCP 51821 fermé. Si le sous-réseau et l’interface ont chacun un groupe de sécurité, les deux doivent autoriser le trafic.",
        "Sélectionnez <strong>Vérifier + créer → Créer</strong>. Attendez le déploiement, ouvrez la <strong>Vue d’ensemble</strong> de la VM et notez son IPv4 publique. La VM est prête avec le compte <code>azureuser</code> et la clé SSH choisie."
      ],
      "apiSteps": [
        "Uniquement pour un futur outil de provisionnement, créez une application dédiée à locataire unique dans <strong>Microsoft Entra ID → Inscriptions d’applications</strong>. Notez les ID de locataire, client et abonnement. Si nécessaire, créez un secret client dans <strong>Certificats et secrets</strong> et copiez sa Valeur, pas l’ID du secret.",
        "Dans le <strong>Contrôle d’accès (IAM)</strong> du groupe de ressources, attribuez à ce principal les permissions de calcul/réseau appropriées. Contributeur sur ce groupe dédié est large mais utilisable ; préférez un rôle plus restreint et testé. Créez d’abord le groupe, car une permission limitée au groupe ne permet pas de le créer. Utilisez des paramètres natifs protégés pour les identifiants."
      ],
      "cleanupSteps": [
        "Si le groupe de ressources ne contient que ce déploiement, vérifiez son contenu et supprimez-le lorsque vous avez terminé.",
        "Si vous conservez le groupe, supprimez la VM et vérifiez ses options de suppression des ressources attachées. Supprimez séparément les disques, interfaces réseau et IP publiques conservés devenus inutiles."
      ]
    },
    "digitalocean": {
      "consoleSteps": [
        "Ouvrez <strong>Créer → Droplet</strong> dans le panneau de contrôle. Choisissez une <strong>Région</strong> proche disposant de capacité. Utilisez un projet et un nom d’hôte identifiant ce serveur ; région, disponibilité des forfaits et tarifs peuvent varier.",
        "Dans <strong>Choisir une image → Système d’exploitation</strong>, sélectionnez <strong>Ubuntu 24.04 LTS</strong>. Si un sélecteur de configuration apparaît, choisissez <strong>Forfait groupé</strong>, puis <strong>CPU partagé → Basique</strong>. Prévoyez au moins <strong>1 Go de RAM</strong> et <strong>20 Go de disque</strong>, ou le minimum supérieur du fournisseur.",
        "Dans <strong>Choisir la méthode d’authentification → Clé SSH → Ajouter une clé SSH</strong>, collez et nommez votre clé publique, puis sélectionnez-la. Gardez la clé privée correspondante sur votre appareil ; une clé de compte ajoutée ensuite n’est pas automatiquement installée sur les Droplets existants.",
        "Dans <strong>Mise en réseau</strong>, laissez <strong>Adresse IPv4 publique</strong> sélectionné. Définissez la quantité sur <strong>1</strong>, confirmez le nom d’hôte et le projet, puis cliquez sur <strong>Créer un Droplet</strong>. Désélectionner les deux options d’adresse publique crée un serveur uniquement privé.",
        "Ouvrez <strong>Créer → Pare-feu</strong> et nommez-le. Remplacez la source SSH par défaut autorisant tout Internet par votre CIDR d’administration pour <strong>TCP 22</strong> ; ajoutez si nécessaire la règle <strong>UDP 51820</strong> du guide commun. Conservez des règles sortantes adaptées, choisissez le serveur dans <strong>Appliquer aux Droplets</strong>, puis créez le pare-feu.",
        "Pour conserver l’adresse lors d’un remplacement, ouvrez <strong>Mise en réseau → IP réservées → Ajouter une IP réservée</strong>. Choisissez <strong>Adresse IPv4 → Affecter au Droplet</strong>, sélectionnez ce Droplet et confirmez. Notez l’IPv4 publique affectée une fois le provisionnement terminé."
      ],
      "apiSteps": [
        "Uniquement pour une future extension compatible : ouvrez <strong>Compte → API → Jetons → Générer un nouveau jeton</strong>. Saisissez un nom explicite et une expiration.",
        "Choisissez <strong>Périmètres personnalisés</strong> pour les opérations Droplet, clés SSH, pare-feu et IP réservées et leurs dépendances exigées par le processus implémenté. Évitez l’Accès complet par défaut ; enregistrez le jeton lorsqu’il s’affiche."
      ],
      "cleanupSteps": [
        "Après avoir sauvegardé les données nécessaires, ouvrez <strong>Paramètres → Détruire</strong>, vérifiez les ressources associées, saisissez le nom du Droplet et confirmez. Les volumes et instantanés non sélectionnés restent présents ; les sauvegardes automatiques conservent leurs dates d’expiration.",
        "Ouvrez <strong>Mise en réseau → IP réservées → … → Supprimer</strong> pour chaque adresse inutile, puis confirmez <strong>Supprimer l’IP réservée</strong>. Les adresses et autres ressources conservées peuvent rester facturées."
      ]
    },
    "hetzner": {
      "consoleSteps": [
        "Ouvrez le projet prévu, puis <strong>Pare-feu → Créer un pare-feu</strong>. Nommez le pare-feu et autorisez <strong>TCP 22</strong> entrant depuis votre CIDR d’administration. Ajoutez si nécessaire la règle <strong>UDP 51820</strong> du guide commun. Laisser les règles sortantes vides autorise le trafic sortant.",
        "Ouvrez <strong>Serveurs → Ajouter un serveur</strong>. Choisissez un <strong>Emplacement</strong> proche où le type de serveur choisi est disponible. Gardez le pare-feu et le serveur dans le même projet ; la disponibilité dépend de l’emplacement et de la capacité actuelle.",
        "Choisissez un <strong>Type</strong> disponible avec au moins <strong>1 Go de RAM</strong> et <strong>20 Go de disque</strong>, ou le minimum supérieur du fournisseur. Dans <strong>Image → Images du système d’exploitation</strong>, sélectionnez <strong>Ubuntu 24.04</strong> correspondant à l’architecture du serveur choisi.",
        "Dans <strong>Mise en réseau</strong>, activez une <strong>IPv4</strong> publique. Sélectionnez une <strong>IPv4 principale</strong> non affectée dans le même projet et au même emplacement, ou laissez Hetzner en créer une. Un serveur uniquement privé ou uniquement IPv6 ne satisfait pas l’exigence d’IPv4 publique de ce guide.",
        "Dans <strong>Clé SSH</strong>, ajoutez ou sélectionnez votre clé publique. Dans <strong>Pare-feu</strong>, sélectionnez le pare-feu créé précédemment. Les clés de compte choisies ici sont installées à la création ; ajouter ensuite une autre clé de compte ne met pas ce serveur à jour.",
        "Saisissez un <strong>Nom</strong> reconnaissable, vérifiez les sauvegardes facultatives et le coût total, puis cliquez sur <strong>Créer et acheter maintenant</strong>. Attendez que le serveur soit prêt et notez son IPv4 principale. Conservez cette ressource IP pour réutiliser l’adresse."
      ],
      "apiSteps": [
        "Uniquement pour une future extension compatible : ouvrez <strong>Sécurité → Jetons API → Générer un jeton API</strong> dans le projet prévu et saisissez une description.",
        "Choisissez <strong>Lecture et écriture</strong> pour le provisionnement et copiez le jeton avant de fermer la fenêtre. Cela accorde un accès en écriture à tout le projet, et pas uniquement à ce serveur."
      ],
      "cleanupSteps": [
        "Sauvegardez les données nécessaires, puis supprimez le serveur concerné. Pour conserver son adresse lors d’un remplacement, désactivez d’abord <strong>Suppression automatique</strong> sur l’IP principale.",
        "Supprimez séparément les IP principales, volumes et instantanés conservés devenus inutiles. Une IPv4 reste facturée tant qu’elle est conservée ; <strong>Suppression automatique</strong> activée supprime une IP principale non protégée avec son serveur."
      ]
    },
    "linode": {
      "consoleSteps": [
        "Ouvrez <strong>Pare-feu → Créer un pare-feu → Pare-feu personnalisé</strong>. Saisissez un libellé. Gardez <strong>Politique entrante par défaut : Rejeter</strong> et <strong>Politique sortante par défaut : Accepter</strong> ; cela autorise le trafic sortant tout en exigeant des règles explicites pour les connexions entrantes.",
        "Ajoutez une règle entrante avec <strong>Protocole : TCP</strong>, <strong>Ports : 22</strong>, <strong>Sources : IP/Masque réseau</strong> contenant votre CIDR d’administration, et <strong>Action : Accepter</strong>. Ajoutez si nécessaire la règle <strong>UDP 51820</strong> du guide commun. Cliquez sur <strong>Enregistrer les modifications</strong> pour activer les règles.",
        "Ouvrez <strong>Créer → Linode</strong>. Choisissez une région de calcul principale proche, puis <strong>Distributions → Ubuntu 24.04</strong>. Sélectionnez un forfait disponible avec au moins <strong>1 Go de RAM</strong> et <strong>20 Go de disque</strong>, ou le minimum supérieur du fournisseur.",
        "Définissez le <strong>Libellé</strong>. Dans la sécurité, sélectionnez une clé SSH existante ou cliquez sur <strong>Ajouter une clé SSH</strong> et collez votre clé publique. Le <strong>Mot de passe root</strong> est facultatif lors d’un provisionnement avec clé SSH ; gardez votre clé privée sur votre appareil.",
        "Dans la mise en réseau, choisissez <strong>Internet public</strong> et <strong>Interfaces Linode</strong>. Sélectionnez votre pare-feu pour cette interface publique. Dans <strong>Adresse IP</strong>, choisissez <strong>Réservée</strong> et une adresse de la même région, ou cliquez sur <strong>Réserver une IP</strong> pour en obtenir une.",
        "Vérifiez les sauvegardes facultatives et autres frais dans <strong>Résumé Linode</strong>, puis cliquez sur <strong>Créer un Linode</strong>. Attendez l’initialisation et notez son IPv4 publique. L’adresse réservée reste dans votre compte après suppression du serveur et ne peut pas changer de région."
      ],
      "apiSteps": [
        "Uniquement pour une future extension compatible : ouvrez le menu de votre nom d’utilisateur → <strong>Jetons API → Créer un jeton d’accès personnel</strong>. Définissez un libellé et une expiration.",
        "Accordez uniquement les périmètres nécessaires : le provisionnement nécessite généralement Lecture/Écriture pour Linodes et Pare-feu ; réserver ou libérer des adresses exige aussi <code>ips:read_write</code>. Conservez le jeton en sécurité."
      ],
      "cleanupSteps": [
        "Sauvegardez les données nécessaires, puis ouvrez <strong>Linodes → … → Supprimer → Supprimer le Linode</strong>. Vérifiez les volumes et images conservés séparément.",
        "Pour une adresse inutile, ouvrez <strong>IP réservées → … → Annuler la réservation</strong> et confirmez. Les IP réservées survivent à la suppression du serveur et restent facturées jusqu’à leur libération."
      ]
    },
    "vultr": {
      "consoleSteps": [
        "Ouvrez <strong>Compte → Clés SSH → Ajouter une clé SSH</strong>. Collez et nommez votre clé publique, puis enregistrez-la. Gardez la clé privée correspondante sur votre appareil ; sélectionnez cette clé publique enregistrée lors de la configuration de l’instance.",
        "Ouvrez <strong>Réseau → Groupes de pare-feu → Créer un groupe de pare-feu</strong> et nommez-le. Ajoutez une règle IPv4 entrante pour <strong>TCP 22</strong> depuis votre CIDR d’administration, ainsi que la règle facultative <strong>UDP 51820</strong>. Vérifiez qu’une règle est enregistrée : les groupes vides ne sont pas appliqués.",
        "Ouvrez <strong>Calcul → Instances → Créer une instance + → CPU partagé</strong>. Choisissez un forfait disponible avec au moins <strong>1 Go de RAM</strong> et <strong>20 Go de disque</strong>, ou le minimum supérieur du fournisseur. Sélectionnez un emplacement proche, puis cliquez sur <strong>Configurer</strong>.",
        "Dans <strong>Sélection et configuration de l’image → Système d’exploitation</strong>, choisissez <strong>Ubuntu 24.04</strong>. Dans <strong>Paramètres du serveur</strong>, sélectionnez votre entrée <strong>Clés SSH</strong> et le <strong>Groupe de pare-feu</strong> contenant des règles. Saisissez le <strong>Nom d’hôte du serveur 1</strong> et le <strong>Libellé du serveur 1</strong>.",
        "Dans <strong>Connectivité de l’instance</strong>, sélectionnez <strong>Instance(s) avec IP publique</strong> et gardez <strong>IPv4 publique</strong> activé. Vérifiez les sauvegardes automatiques et autres frais facultatifs. <strong>Connexion d’utilisateur limité</strong> remplace le compte <code>root</code> par <code>linuxuser</code>, qui peut utiliser sudo. Vérifiez le <strong>Résumé</strong> et cliquez sur <strong>Déployer</strong>.",
        "Attendez que l’instance soit prête et notez son IPv4 publique. L’adresse ordinaire reste fixe tant que cette instance existe ; utilisez une IP réservée de la même région si elle doit survivre à un remplacement."
      ],
      "apiSteps": [
        "Uniquement pour une future extension compatible : ouvrez <strong>Compte → API</strong>, puis <strong>Activer l’API</strong> dans <strong>Jeton d’accès personnel</strong>. Conservez cet identifiant en sécurité.",
        "Dans <strong>Contrôle d’accès</strong>, autorisez l’IP/CIDR à l’origine des requêtes API. Actualisez-la après un changement de réseau mobile ; cela limite l’origine des requêtes, pas les permissions sur des ressources particulières."
      ],
      "cleanupSteps": [
        "Sauvegardez les données nécessaires, ouvrez l’instance et cliquez sur <strong>Détruire le serveur</strong>. Sélectionnez <strong>Oui, détruire ce serveur</strong>, puis <strong>Détruire le serveur</strong>.",
        "Supprimez les adresses conservées devenues inutiles via <strong>Réseau → IP réservées → Supprimer l’IP réservée</strong>. Vérifiez aussi le stockage et les instantanés séparés ; supprimer le serveur ne nettoie pas tout le compte."
      ]
    },
    "oracle-cloud": {
      "consoleSteps": [
        "Sélectionnez votre région OCI et un compartiment dédié. Confirmez les quotas de calcul, volumes et IP publiques ; la capacité disponible et l’éligibilité à l’offre gratuite dépendent des ressources choisies.",
        "Ouvrez <strong>Mise en réseau → Réseaux cloud virtuels → Démarrer l’assistant VCN → Créer un VCN avec connectivité Internet</strong>. Utilisez son sous-réseau public et confirmez une route <code>0.0.0.0/0</code> via la passerelle Internet.",
        "Vérifiez la liste de sécurité du sous-réseau public et les groupes de sécurité réseau attachés. Limitez TCP <code>22</code> à votre CIDR d’administration, autorisez UDP <code>51820</code> et préservez les règles sortantes et ICMP nécessaires.",
        "Ouvrez <strong>Calcul → Instances → Créer une instance</strong>. Définissez le nom, le compartiment et le domaine de disponibilité. Choisissez <strong>Changer d’image → Ubuntu → 24.04</strong>, une forme de VM compatible, ainsi qu’une mémoire et un stockage de démarrage suffisants.",
        "Sélectionnez le sous-réseau public et activez l’affectation d’IPv4 publique. Dans <strong>Ajouter des clés SSH</strong>, collez ou importez votre clé publique Ed25519/ECDSA ; la clé générée par la console est RSA. Gardez la clé privée correspondante sur votre appareil.",
        "Vérifiez et créez la VM. Une fois en cours d’exécution, notez son IPv4 publique. Pour conserver l’adresse lors du remplacement de la VM, vous pouvez remplacer son IP éphémère par une IP publique réservée affectée à son IP privée principale ; notez la nouvelle adresse."
      ],
      "apiSteps": [
        "Uniquement pour une future extension de provisionnement : demandez à un administrateur d’accorder à un utilisateur/groupe IAM dédié les permissions de calcul, réseau et volumes nécessaires dans ce compartiment.",
        "Ouvrez <strong>Paramètres utilisateur → Clés API → Ajouter une clé API</strong>. Conservez la clé privée de signature RSA PEM, l’empreinte, les OCID de location/utilisateur et la région ; notez l’OCID du compartiment. Cette clé est distincte de votre clé SSH."
      ],
      "cleanupSteps": [
        "Résiliez l’instance et supprimez explicitement son volume de démarrage s’il est inutile ; OCI le conserve par défaut. Sauvegardez d’abord les données à conserver.",
        "Supprimez les IP publiques réservées et volumes conservés inutiles. Supprimez les sous-réseaux, passerelles et autres ressources réseau inutilisées du VCN dédié, y compris les ressources privées créées par l’assistant."
      ]
    },
    "ovhcloud": {
      "consoleSteps": [
        "Activez un projet Public Cloud et un moyen de paiement. Vérifiez <strong>Gestion du projet → Quotas</strong>. Dans <strong>Clés SSH → Créer une clé SSH</strong>, nommez et collez votre clé publique, puis sélectionnez <strong>Ajouter</strong>.",
        "Ouvrez <strong>Calcul → Instances → Créer une instance</strong>. Nommez la VM, choisissez une région et un modèle adapté, sélectionnez Ubuntu <code>24.04</code>, puis la clé SSH enregistrée.",
        "Dans la mise en réseau, activez <strong>Affecter une IP publique → IP publique basique</strong> ; la connectivité publique est désactivée par défaut. L’IP basique utilise <code>Ext-Net</code> et est incompatible avec une passerelle. Vérifiez les instantanés automatiques et les coûts, choisissez la facturation horaire, puis sélectionnez <strong>Créer mon instance</strong>.",
        "Pour configurer le filtrage, ouvrez <strong>Gestion du projet → Utilisateurs</strong>. Créez si nécessaire un utilisateur OpenStack avec les permissions réseau/instances adaptées, sauvegardez son mot de passe et choisissez son action <strong>… → Lancer OpenStack Horizon</strong>.",
        "Dans Horizon, sélectionnez la région de la VM, puis <strong>Réseau → Groupes de sécurité → Créer un groupe de sécurité</strong>. Créez un groupe dédié. Dans <strong>Gérer les règles</strong>, autorisez TCP <code>22</code> depuis votre CIDR d’administration et UDP <code>51820</code> ; conservez les règles sortantes.",
        "Ouvrez <strong>Calcul → Instances → Modifier les groupes de sécurité</strong> dans Horizon. Appliquez le groupe dédié et retirez le groupe par défaut permissif uniquement de cette VM ; ne modifiez ni ne supprimez jamais le groupe par défaut partagé. Une fois l’instance active, notez son IPv4 publique dans la Vue d’ensemble."
      ],
      "apiSteps": [
        "Uniquement pour une future extension de provisionnement : ouvrez la page de création de jeton correspondant à la région API de votre compte. Nommez l’application, définissez une expiration et limitez les Droits aux chemins/actions documentés de son projet.",
        "Conservez en sécurité la clé d’application, le secret d’application et la clé consommateur. Ces identifiants d’API signée diffèrent du nom d’utilisateur/mot de passe OpenStack utilisé par Horizon."
      ],
      "cleanupSteps": [
        "Sauvegardez les données à conserver, puis sélectionnez <strong>… → Supprimer → Supprimer l’instance</strong> pour cette instance. La facturation horaire continue jusqu’à la suppression.",
        "Supprimez séparément les volumes, instantanés/sauvegardes et les IP flottantes/additionnelles ou passerelles créées indépendamment devenus inutiles. Supprimer la VM ne supprime pas toutes les ressources associées."
      ]
    },
    "scaleway": {
      "consoleSteps": [
        "Sélectionnez l’organisation et le projet corrects, activez la facturation et vérifiez les quotas. Dans <strong>Tableau de bord du projet → Ajouter une clé SSH</strong>, nommez et collez votre clé publique. Les clés SSH sont limitées à ce projet.",
        "Ouvrez <strong>Calcul → Instances CPU et GPU → Groupes de sécurité</strong> dans la zone de disponibilité choisie. Créez un groupe dédié dans cette zone. Activez le filtrage avec état, réglez l’entrée sur <strong>Rejeter</strong> et la sortie sur <strong>Accepter</strong>.",
        "Dans l’onglet <strong>Règles</strong> du groupe, autorisez TCP <code>22</code> depuis votre CIDR d’administration et UDP <code>51820</code> pour les clients VPN. Gardez TCP <code>51821</code> fermé. Le groupe par défaut créé automatiquement est sans état ; sélectionnez donc explicitement votre groupe dédié.",
        "Choisissez <strong>Créer une instance → Créer une instance CPU</strong>, sélectionnez une configuration CPU adaptée et la même zone de disponibilité, puis <strong>Configurer l’instance</strong>. Nommez-la, choisissez Ubuntu <code>24.04</code>/Noble et configurez un volume système d’au moins 20 Go.",
        "Gardez <strong>IPv4 publique</strong> activé et allouez une adresse, ou sélectionnez une adresse existante disponible. Choisissez votre groupe de sécurité dédié et vérifiez les clés SSH affichées. Vérifiez séparément les réglages IPv6 si cette option est activée.",
        "Sélectionnez <strong>Vérifier</strong>, examinez les coûts estimés, puis <strong>Créer une instance</strong>. Attendez la fin du provisionnement et copiez l’IPv4 publique depuis la <strong>Vue d’ensemble</strong>. Cette IP flexible est une ressource distincte dont vous devez gérer le cycle de vie."
      ],
      "apiSteps": [
        "Uniquement pour une future extension de provisionnement : créez une application IAM et accordez les permissions nécessaires pour les instances, le réseau et le stockage dans le projet cible.",
        "Ouvrez <strong>IAM et clés API → Clés API → Générer une clé API</strong>. Sélectionnez l’application et une expiration. Conservez la clé d’accès et le secret affiché une seule fois ; notez séparément l’UUID du projet et la zone."
      ],
      "cleanupSteps": [
        "Sauvegardez les données à conserver. Dans la bonne zone de disponibilité, choisissez <strong>… → Supprimer</strong> pour l’instance, saisissez <code>DELETE</code> et sélectionnez la suppression des IP et volumes Block Storage associés devenus inutiles.",
        "Confirmez <strong>Supprimer l’instance</strong>. Vérifiez les IP flexibles, volumes et instantanés conservés devenus inutiles ; éteindre l’instance ne supprime pas ces ressources."
      ]
    }
  }
};
