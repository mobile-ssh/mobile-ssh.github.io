---
layout: ../../../layouts/DocLayout.astro
title: "Machines virtuelles cloud et wg-easy"
description: "Créez une machine virtuelle cloud avec une IP publique, enregistrez sa connexion SSH dans Mobile SSH et installez wg-easy séparément, avec les explications sur les identifiants, le réseau et la suppression des ressources."
---

# Machines virtuelles cloud et wg-easy

Créez une VM Linux dans votre propre compte cloud et faites fonctionner un VPN WireGuard avec wg-easy. Sur les versions Android compatibles, l'extension publiée **VPN Setup** peut créer la VM, installer wg-easy et importer un client dans une seule procédure guidée. Vous pouvez aussi créer la VM dans la console du fournisseur et installer via Mobile SSH, ou utiliser un serveur public existant.

**Disponibilité — 19 novembre 2026 :** **VPN Setup 1.0.7** est publié dans le [catalogue d'extensions par défaut](https://github.com/mobile-ssh/mobile-ssh-plugins/tree/main/plugins/vpnsetup). La configuration de base nécessite le pont d'extensions **1.3.0**, les mises à jour du serveur **1.4.0** et la suppression des entrées terminées admissibles **1.5.0**. La disponibilité dépend de votre version Android installée et du canal de publication ; la publication de l'extension ne confirme pas qu'une version précise de l'app vous est accessible. Une automatisation iOS équivalente n'est pas établie. Utilisez les instructions de console et d'installation manuelle ci-dessous si l'extension est indisponible.

## Choisir la procédure guidée ou manuelle

- **Créer avec l'API cloud :** VPN Setup utilise votre compte fournisseur pour créer la VM et les ressources réseau, enregistre sa connexion SSH, installe wg-easy et importe un client. Il conserve les identifiants des ressources et les données de propriété pour leur nettoyage ultérieur.
- **Créer dans la console cloud ou utiliser un serveur existant :** créez vous-même la VM, puis fournissez son IPv4 publique, son nom d'utilisateur SSH et sa clé à VPN Setup, ou suivez l'installation manuelle ci-dessous. L'extension n'a pas besoin d'identifiants d'API cloud pour installer sur votre serveur.

L'extension publiée combine provisionnement et installation ; des extensions distinctes pour ces tâches restent une architecture prévue. Les ressources créées par API et les serveurs que vous apportez suivent des règles de suppression différentes, expliquées plus bas. Un test réel documenté sur Hetzner a validé la configuration, le trafic VPN, la gestion des clients, l'administration privée et le nettoyage sur un émulateur Android. Cela n'établit pas une validation réelle pour chaque fournisseur, politique de compte ou téléphone physique.

## Préparer le compte et les paramètres du serveur

1. Activez un compte cloud et sa facturation, choisissez une région et vérifiez les quotas de machines, disques et IP publiques. Consultez les tarifs actuels des machines, IPv4, stockage et trafic ; la disponibilité d’une offre gratuite n’est pas présumée.
2. Pour ce guide, choisissez une machine dédiée **Ubuntu 24.04 LTS**, avec au moins **1 Go de RAM et 20 Go de disque**, en **amd64 ou arm64**. Ce sont les choix de base de cette configuration, pas un minimum universel pour wg-easy. Utilisez un compte avec accès root ou sudo ; une installation sans intervention nécessite une élévation de privilèges non interactive.
3. Sélectionnez ou générez une clé SSH et gardez la clé privée dans Mobile SSH. Téléversez uniquement la clé publique dans le cloud. L’importation de Lightsail exige une clé SSH RSA. Les autres fournisseurs et images acceptent leurs propres types de clés. Le client SSH iOS actuel prend en charge les clés privées Ed25519/ECDSA plutôt que RSA. Pour Lightsail sur iOS, utilisez d’abord la console SSH du fournisseur dans le navigateur pour ajouter une clé publique prise en charge par l’application à `authorized_keys`, puis connectez-vous avec cette clé.
4. Choisissez une **IPv4 publique**, de préférence réservée ou statique si le fournisseur le propose. Une adresse privée, une instance IPv6 seule ou une passerelle NAT réservée au trafic sortant ne satisfait pas le besoin de point d’accès de ce guide.
5. Définissez explicitement le CIDR source SSH, par exemple votre IPv4 publique actuelle suivie de `/32`. Ne supposez pas que le réglage par défaut du plugin limite l’accès. Les changements entre réseau mobile et Wi-Fi peuvent nécessiter une mise à jour de cette règle dans la console cloud.

La procédure manuelle prend en charge les architectures ci-dessus. VPN Setup sélectionne actuellement **Ubuntu 24.04 sur amd64/x86-64**, se connecte sur le **port SSH 22** et accepte les clés SSH **Ed25519 ou RSA** ; son parcours Lightsail exige RSA. Cette procédure ne prend pas en charge les clés ECDSA, les hôtes exclusivement privés ni les points d'accès uniquement IPv6. Un serveur existant doit disposer d'une IPv4 publique et permettre un accès administratif non interactif.

Les identifiants d'API cloud autorisent la gestion des ressources ; les clés SSH autorisent la connexion au serveur. Saisissez les secrets d'API uniquement dans le formulaire natif protégé, jamais dans des prompts vocaux, commandes de terminal ou fichiers source. Le code natif s'authentifie auprès des points d'accès approuvés du fournisseur ; les secrets ne sont transmis ni à la VM ni au moteur de l'extension. Les identifiants mémorisés sont chiffrés par Android Keystore ; si vous choisissez de ne pas les mémoriser, ils restent en mémoire et peuvent devoir être saisis à nouveau après l'arrêt du processus de l'app.

Les commandes vocales peuvent répondre aux questions compatibles sans secret et annoncer la progression, mais la saisie des identifiants et les approbations nécessitent l'écran. La capture du microphone se met en pause pour les formulaires protégés et demande une action explicite pour reprendre. La configuration vocale nécessite son activation, un modèle local téléchargé et l'autorisation du microphone. Un modèle vocal hors ligne ne permet pas d'appeler les API cloud, de télécharger ou d'utiliser SSH sans internet.

## Choisir un cloud et obtenir une adresse publique

Pour la **configuration par console**, connectez-vous vous-même au fournisseur ; Mobile SSH n'a pas besoin de ses identifiants d'API. Pour le **provisionnement par API avec VPN Setup**, préparez l'identifiant indiqué ci-dessous avec les permissions nécessaires de création, lecture, réseau et suppression. L'extension implémente les dix fournisseurs de ce tableau ; AWS EC2 est une option distincte par console uniquement. Limitez l'accès à un projet ou déploiement dédié lorsque c'est possible. Les politiques du compte s'appliquent toujours aux deux méthodes.

Créez la machine Ubuntu choisie avec votre clé SSH publique et appliquez la règle SSH de la section suivante. Les liens expliquent les étapes propres à chaque fournisseur pour l’adressage et l’authentification.

<div class="doc-table" tabindex="0" role="region" aria-label="Fournisseurs cloud et adresses publiques">

| Fournisseur | Identifiants pour créer les ressources par API | Configuration de l’IPv4 publique dans la console |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | Identifiant et secret de clé d’accès ; ajoutez le jeton de session pour des identifiants temporaires. Accordez les [actions Lightsail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) nécessaires. | Créez une instance Ubuntu à double pile, sélectionnez la clé SSH RSA, puis réservez et associez une [IPv4 statique dans sa région](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Utilisez `ubuntu` pour l’image Ubuntu. |
| [Google Cloud Compute Engine](./google-cloud/) | Clé JSON de compte de service et identifiant du projet. Les permissions doivent couvrir les opérations de VM/disque, réseau, adresse et pare-feu ; Compute Network Admin seul ne peut pas modifier les règles de pare-feu. Consultez les [permissions IAM](https://docs.cloud.google.com/compute/docs/access/iam). | Activez Compute Engine API, choisissez un VPC/sous-réseau avec routage internet, réservez une [IPv4 externe régionale](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address) et associez-la à la VM. Configurez le compte et la clé SSH correspondants ; OS Login nécessite sa propre configuration d’identité. VPN Setup utilise des clés SSH dans les métadonnées et désactive OS Login sur sa VM ; si votre organisation impose OS Login, utilisez une configuration de console approuvée. |
| [Microsoft Azure](./azure/) | Identifiant du locataire, identifiant d’application/client, **valeur** du secret client et identifiant d’abonnement. VPN Setup crée son propre groupe de ressources de déploiement : autorisez la création/suppression de groupes au niveau de l’abonnement ou supérieur ainsi que les opérations de calcul/réseau. Un accès limité à un groupe existant ne suffit pas. Consultez la [configuration d’un principal de service](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Créez un groupe de ressources dédié et un VNet/sous-réseau. Associez une [Public IP IPv4 statique Standard](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) à la NIC de la VM et liez un NSG. Utilisez le nom d’administrateur choisi à la création. |
| [DigitalOcean](./digitalocean/) | Jeton d’accès personnel avec les [portées](https://docs.digitalocean.com/reference/api/create-personal-access-token/) requises pour Droplets, clés SSH, Reserved IP, pare-feu et opérations liées. | Créez un Droplet Ubuntu avec la clé SSH publique, attribuez une [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) et associez un Cloud Firewall. Le compte Ubuntu initial est généralement `root`. |
| [Hetzner Cloud](./hetzner/) | [Jeton d’API Read & Write](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/) propre au projet. | Créez un serveur Ubuntu avec une [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), votre clé SSH et un Cloud Firewall. Utilisez `root`. Vérifiez si la Primary IP distincte sera conservée après la suppression du serveur. |
| [Akamai / Linode](./linode/) | Jeton d’accès personnel avec les permissions de lecture/écriture Linodes et Firewalls et les [portées de lecture](https://techdocs.akamai.com/linode-api/reference/get-started) requises. | Créez un Linode Ubuntu avec IPv4 publique et clé SSH, puis associez un [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Utilisez `root`. Conservez l’adresse attribuée pendant la durée de vie de l’instance. |
| [Vultr](./vultr/) | Clé d’API avec accès API activé ; sa [liste d’IP sources autorisées](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) doit accepter la connexion actuelle du téléphone. | Créez une instance Ubuntu Cloud Compute avec IPv4 publique principale, clé SSH et Firewall Group. Utilisez `root`. L’[adresse attribuée dure pendant toute la vie de l’instance](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address) ; une Reserved IP est un choix distinct. |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | OCID du locataire et de l’utilisateur, empreinte de clé d’API et [clé privée de signature RSA](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), avec la clé publique de signature correspondante enregistrée. Elle est distincte de la clé SSH. | Créez un VCN, une passerelle internet et un sous-réseau public avec une route vers cette passerelle. Attribuez une [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) à l’IP privée de la VNIC de la machine. Utilisez `ubuntu` pour Canonical Ubuntu ; configurez les listes de sécurité ou le NSG. |
| [OVHcloud Public Cloud](./ovhcloud/) | Clé d’application, secret d’application et clé consommateur validée pour le point d’accès API EU/CA/US correspondant. Limitez les [droits API](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) aux opérations du projet choisi. | Créez une [instance Public Cloud](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) Ubuntu avec Basic Public IP via Ext-Net, clé SSH et groupe de sécurité. Utilisez `ubuntu`. Les Floating/Additional IP sont des ressources distinctes. |
| [Scaleway Instances](./scaleway/) | Clé secrète d’API d’une application IAM et UUID du projet, avec les permissions d’instances, volumes, IP, groupes de sécurité et clés SSH. Consultez la [création de clés d’API](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Créez une instance Ubuntu, associez une [IPv4 flexible routée dans la même zone](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), configurez un groupe de sécurité et démarrez-la. Utilisez le compte SSH de l’image, généralement `root`. |

</div>

**Alternative [AWS EC2](./aws-ec2/) :** lancez Ubuntu dans un sous-réseau public avec une [passerelle internet et une route `0.0.0.0/0` vers celle-ci](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), sélectionnez une clé SSH et un groupe de sécurité, puis associez une [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Utilisez `ubuntu`. L'adaptateur AWS automatique de VPN Setup vise Lightsail ; EC2 passe par la console. Une Elastic IP seule ne rend pas un sous-réseau privé accessible.

Si une organisation interdit les clés de comptes de service, les IP externes ou la méthode d’authentification SSH choisie, obtenez une configuration approuvée par un administrateur. La console ne contourne pas ces restrictions.

## Créer les ressources et enregistrer la connexion SSH

Ouvrez **Extensions**, installez **VPN Setup** depuis le catalogue par défaut et ouvrez sa page autonome. Choisissez **Configurer un VPN**, sélectionnez un fournisseur, puis **Créer avec l'API cloud** ou **Créer dans la console cloud**. Pour un serveur déjà disponible, sélectionnez l'option de serveur public existant. Saisissez les identifiants dans le formulaire natif, choisissez ou générez une clé SSH et vérifiez l'emplacement, la taille, l'image et le CIDR source SSH. Les choix issus du compte et les vérifications préalables aident à sélectionner des offres compatibles ; ils ne réservent pas de capacité et ne garantissent pas de quota. Consultez les tarifs actuels du fournisseur et approuvez la création à l'écran.

Suivez l'opération existante jusqu'à ce que la VM et SSH soient prêts. Si une requête expire ou qu'Android suspend le travail en arrière-plan, reprenez ou examinez cette opération plutôt que de créer une autre VM facturable. Une réponse de création perdue peut nécessiter une recherche dans le cloud ou une vérification dans la console. Conservez les identifiants de la VM, du disque, de l'adresse et du pare-feu ; une procédure arrêtée peut tout de même avoir créé des ressources.

VPN Setup demande l'approbation de la clé d'hôte SSH, enregistre la connexion, installe wg-easy et importe son premier client. Comparez l'empreinte avec la console de confiance du fournisseur. Pour une configuration manuelle, ajoutez le serveur sous **Serveurs** avec son IPv4 publique, le port SSH `22`, le compte de l'image et la clé privée correspondante. Les adaptateurs automatiques Google Cloud et Azure utilisent `ubuntu` ; les guides de console utilisent les comptes configurés dans celles-ci. Consultez [Premiers pas](../getting-started/) pour la vérification des identités et les identifiants enregistrés.

## Configurer les deux couches réseau

Une adresse publique nécessite une route, des permissions dans le pare-feu cloud et dans celui du système invité, ainsi qu’un service à l’écoute. Utilisez ces règles dans le pare-feu ou groupe de sécurité du fournisseur ; préservez les règles existantes nécessaires dans le système invité.

- **TCP 22 :** autorisez votre CIDR d'administration choisi pour SSH. Configurez-le pendant le provisionnement.
- **UDP 51820 :** autorisez les réseaux qui utiliseront le VPN. Pour des clients itinérants, cela peut être `0.0.0.0/0`. VPN Setup configure cette règle pour les déploiements créés par API ; utilisez la console cloud pour un serveur que vous apportez.
- **TCP 51821 :** gardez-le fermé publiquement. Publiez l'interface d'administration wg-easy uniquement sur la boucle locale du serveur et accédez-y par un tunnel SSH.
- **Trafic sortant :** autorisez les téléchargements de paquets/conteneurs, le DNS et le trafic internet que le VPN doit transporter.

Consultez le [comportement du pare-feu de Docker](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations) : les ports de conteneur publiés peuvent contourner les règles UFW. Ne comptez pas uniquement sur UFW pour masquer l’interface d’administration et ne videz pas les chaînes de pare-feu du fournisseur, notamment les règles de stockage/iSCSI d’OCI.

<a id="wg-easy-install"></a>

## Installer wg-easy sur la machine choisie

Après approbation, VPN Setup installe par SSH sa version de wg-easy fixée par empreinte, installe Docker si nécessaire sur Ubuntu 24.04 et crée le premier client. Il garde l'interface d'administration sur la boucle locale et préserve les chaînes de pare-feu du fournisseur. Pour un serveur créé en console ou existant, configurez vous-même le pare-feu cloud ; l'installateur nécessite un accès SSH et des privilèges administratifs, pas votre secret d'API cloud. Utilisez un serveur dédié neuf au lieu de supposer qu'il peut reprendre une installation VPN indépendante.

L'ancienne extension du catalogue **WireGuard (wg-easy)** nécessite une session SSH active et Docker. Elle est distincte de **VPN Setup** et ne promet pas l'importation native des clients. Utilisez VPN Setup sur une version Android compatible, ou la procédure manuelle suivante depuis le terminal Mobile SSH sur une VM dédiée neuve.

### Installation manuelle par SSH

Installez Docker Engine et son plugin Compose en suivant les [instructions officielles Ubuntu](https://docs.docker.com/engine/install/ubuntu/). Téléchargez ensuite la configuration amont de la version indiquée :

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.5.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Modifiez `/opt/wg-easy/compose.yaml` avec un éditeur de terminal disposant des privilèges nécessaires avant de démarrer. Sous `services.wg-easy`, remplacez l’image, décommentez ou définissez le bloc d’environnement et remplacez les correspondances de ports par ces valeurs. Conservez le reste du fichier amont, notamment le volume persistant, le montage des modules, les capacités, les réseaux et les sysctls :

```yaml
image: ghcr.io/wg-easy/wg-easy:15.5.0@sha256:071f79a639e9361123a5e57733107320207b844ddbbd92dfa6962f541fe8aac8
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

Il s’agit d’un fragment de remplacement, pas d’un fichier Compose complet ; conservez l’indentation YAML sous le service. `INSECURE=true` autorise HTTP uniquement pour le tunnel SSH sur la boucle locale. Ne publiez pas le port d’administration sur internet. L’écoute du conteneur est distincte de la correspondance sur la boucle locale côté hôte. Consultez la [configuration HTTP amont](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/).

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

Conservez les données `/etc/wireguard` du conteneur dans son volume persistant. N’appliquez pas d’anciennes recettes `PASSWORD`, `PASSWORD_HASH` ou `WG_HOST` à la v15 ; utilisez son assistant de configuration. L’image est volontairement figée : mettre à jour nécessite d’examiner une nouvelle version et de modifier la référence, pas simplement d’exécuter `pull`.

## Ouvrir l’interface d’administration et ajouter un client

Créez une [redirection de port locale](../port-forwarding/) dans Mobile SSH avec le port local `51821`, l’hôte distant `127.0.0.1` et le port distant `51821`. Gardez la connexion SSH active et ouvrez `http://127.0.0.1:51821` sur le même téléphone. Si ce port local est occupé, choisissez-en un autre et utilisez-le dans l’URL du navigateur.

Dans l’[assistant de premier démarrage](https://wg-easy.github.io/wg-easy/latest/guides/setup/) de wg-easy, créez un compte administrateur, choisissez une nouvelle installation et définissez comme point d’accès VPN l’IPv4 publique ou le nom DNS de la machine avec le port `51820`. Ce point d’accès n’est ni l’adresse de boucle locale de l’interface web ni le port `51821`.

Créez un client par appareil et téléchargez son fichier WireGuard `.conf`. Si votre version de Mobile SSH le propose, ouvrez **VPN → WireGuard**, ajoutez un profil, importez le fichier et enregistrez-le. Le code source actuel d'Android et d'iOS prend en charge l'importation de fichiers ; vérifiez votre version installée. VPN Setup importe directement son premier client sur les versions Android compatibles. Sa page propose aussi **Ajouter un client**, **Révoquer un client**, **Exporter le client/QR** et **Ouvrir l'administration** via un tunnel SSH privé. Cela n'établit pas ces capacités pour l'ancienne extension ni une automatisation équivalente sur iOS. Les fichiers de configuration et codes QR contiennent des clés privées ; gardez-les confidentiels.

## Vérifier le VPN et résoudre les problèmes

Démarrez le profil et approuvez la demande VPN du système. Vérifiez une négociation récente avec le pair et des compteurs de trafic qui augmentent, puis testez DNS et les routes internet ou privées prévues. Un profil importé ou un conteneur actif ne prouvent pas, à eux seuls, que le VPN fonctionne.

- **Création de VM refusée :** vérifiez facturation, quota, capacité régionale, expiration des identifiants et permissions IAM exactes. La modification des pare-feu Google Cloud exige des permissions au-delà de Compute Network Admin ; si l'organisation impose OS Login, utilisez une configuration de console approuvée.
- **Délai SSH dépassé :** vérifiez l'adresse publique, le routage du sous-réseau, les règles TCP 22 et l'IP source actuelle du téléphone. Les échecs d'authentification nécessitent généralement le bon compte de l'image et la bonne clé SSH.
- **Interface d'administration inaccessible :** maintenez la redirection SSH connectée, vérifiez l'état du conteneur et le mappage des ports de boucle locale, puis confirmez que HTTP n'est activé que pour le tunnel.
- **Pas de négociation WireGuard :** vérifiez le point d'accès client, UDP 51820 dans les deux couches de pare-feu, les clés client et l'écoute du serveur.
- **Négociation sans trafic :** inspectez le transfert/NAT, DNS, les chevauchements de routes et `AllowedIPs`. Un tunnel IPv4 complet utilise `0.0.0.0/0` ; évaluez IPv6 séparément. Une VM sans connexion IPv6 en amont ne peut pas offrir de sortie internet IPv6, et les routes IPv4 seules peuvent laisser IPv6 hors du VPN.

## Mettre à jour l'extension et le serveur VPN

Dans **Extensions**, utilisez l'action **Mettre à jour** disponible pour une version compatible plus récente du même catalogue. Examinez les capacités supplémentaires demandées. Réglages, identifiants et données de déploiement sont conservés ; une opération inachevée continue avec la version de l'extension qui l'a démarrée. La mise à jour de l'extension seule ne met pas à jour le conteneur wg-easy du serveur.

Avec le pont d'extensions 1.4.0 ou ultérieur, **Vérifier le serveur** indique la version de wg-easy en cours et **Mettre à jour WireGuard** propose la version fixée par l'extension. Approuvez la mise à jour à l'écran. L'image est téléchargée avant la modification du service ; clés du serveur, clients et profils locaux sont conservés. Si ce téléphone utilise ce VPN, l'app le déconnecte avant la mise à jour ; reconnectez-vous ensuite. Cela met à jour le conteneur géré, pas le système d'exploitation de l'hôte.

Un échec de mise à jour distingue le téléchargement d'image échoué, le retour arrière réussi et le retour arrière échoué laissant le VPN arrêté. Suivez la vérification de récupération ou réessayez plutôt que de supposer le service rétabli. Les installations manuelles nécessitent leur propre changement contrôlé d'image fixée et une sauvegarde ; la recette d'installation neuve ci-dessus n'est pas un guide de migration.

## Retirer les clients et arrêter les frais cloud

Révoquez le client dans wg-easy avant de supprimer son profil local. Supprimer un profil dans Mobile SSH ne révoque pas la clé du pair sur le serveur. Sauvegardez la configuration nécessaire de manière sûre avant de retirer le conteneur VPN ou ses données persistantes.

Pour un déploiement créé par API, **Supprimer le déploiement** examine et supprime les ressources cloud qu'il possède via l'API du fournisseur, même si SSH est indisponible. Si la suppression s'arrête ou échoue, vérifiez les ressources signalées comme restantes ; reprenez le nettoyage ou consultez la console. N'ajoutez pas de ressources indépendantes à un déploiement géré par l'extension, notamment dans son groupe de ressources Azure dédié.

Pour un serveur créé en console ou existant, la suppression par l'extension retire l'installation VPN qu'elle gère ; elle ne supprime **pas** votre VM ni votre IP publique. Supprimez-les dans la console du fournisseur lorsqu'elles ne servent plus, puis vérifiez les disques, instantanés, adresses et ressources réseau conservés. Si le compte ou l'emplacement a changé pendant la récupération, inspectez aussi les précédents, notamment un ancien projet Scaleway ou compartiment Oracle Cloud.

**Arrêter la procédure** arrête l'opération ; cela ne supprime pas les ressources. Avec le pont 1.5.0 ou ultérieur, **Retirer de la liste** n'est proposé que lorsque l'app peut vérifier que l'entrée peut être oubliée, sans opération inachevée ni ressource gérée restante. Cela efface l'historique local, pas les ressources cloud. Arrêter une VM ou désinstaller l'extension ne garantit pas non plus l'arrêt de la facturation. Conservez les identifiants des ressources jusqu'à confirmation de leur suppression.
