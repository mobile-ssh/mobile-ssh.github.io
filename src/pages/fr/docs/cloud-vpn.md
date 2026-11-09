---
layout: ../../../layouts/DocLayout.astro
title: "Machines virtuelles cloud et wg-easy"
description: "Créez une machine virtuelle cloud avec une IP publique, enregistrez sa connexion SSH dans Mobile SSH et installez wg-easy séparément, avec les explications sur les identifiants, le réseau et la suppression des ressources."
---

# Machines virtuelles cloud et wg-easy

Créez une machine virtuelle Linux dans votre propre compte cloud, connectez-vous avec Mobile SSH, puis installez wg-easy pour exploiter un VPN WireGuard. Séparer la création des ressources de l’installation permet d’utiliser la même machine pour un autre service ou d’installer le VPN sur un serveur existant.

**Disponibilité — 8 novembre 2026 :** les plugins distincts de création de machines virtuelles constituent le fonctionnement prévu décrit ci-dessous. L’implémentation locale Android **VPN Setup** examinée combine création, installation et importation des clients ; ses modifications de plugin et de catalogue ne sont pas publiées, et aucun déploiement cloud réel n’a encore été testé. Les entrées distinctes AWS, Google Cloud et Azure ne sont actuellement que des ébauches de manifeste et de paramètres ; leurs actions de liste et de contrôle des machines virtuelles ne sont pas implémentées et elles ne créent pas de machines. Utilisez les instructions de console et d’installation manuelle ci-dessous si votre catalogue ne propose pas de création. Le nouveau fonctionnement natif nécessite une version Android compatible ; une automatisation équivalente sur iOS n’est pas établie.

## Deux plugins aux responsabilités distinctes

- **Plugin de création cloud :** utilise l’API du fournisseur pour créer la machine, l’adresse publique et les ressources réseau nécessaires, puis enregistre une connexion SSH. Il conserve les identifiants des ressources pour leur gestion ou suppression ultérieure.
- **Installateur wg-easy :** se connecte en SSH au serveur enregistré choisi, installe le service VPN et aide à créer une configuration client. Il nécessite un accès au serveur et des privilèges administratifs, pas les identifiants de votre API cloud. Une machine créée manuellement convient également.

Le transfert entre plugins devrait contenir la référence du serveur enregistré, l’adresse publique, le port SSH, le nom d’utilisateur, la référence des identifiants SSH et les identifiants du déploiement et des ressources. Les secrets cloud et les clés SSH privées ne devraient être copiés ni dans la sortie du plugin ni sur la machine. Retirer le VPN et supprimer la machine cloud sont deux opérations distinctes.

## Préparer le compte et les paramètres du serveur

1. Activez un compte cloud et sa facturation, choisissez une région et vérifiez les quotas de machines, disques et IP publiques. Consultez les tarifs actuels des machines, IPv4, stockage et trafic ; la disponibilité d’une offre gratuite n’est pas présumée.
2. Pour ce guide, choisissez une machine dédiée **Ubuntu 24.04 LTS**, avec au moins **1 Go de RAM et 20 Go de disque**, en **amd64 ou arm64**. Ce sont les choix de base de cette configuration, pas un minimum universel pour wg-easy. Utilisez un compte avec accès root ou sudo ; une installation sans intervention nécessite une élévation de privilèges non interactive.
3. Sélectionnez ou générez une clé SSH et gardez la clé privée dans Mobile SSH. Téléversez uniquement la clé publique dans le cloud. L’importation de Lightsail exige une clé SSH RSA. Les autres fournisseurs et images acceptent leurs propres types de clés. Le client SSH iOS actuel prend en charge les clés privées Ed25519/ECDSA plutôt que RSA. Pour Lightsail sur iOS, utilisez d’abord la console SSH du fournisseur dans le navigateur pour ajouter une clé publique prise en charge par l’application à `authorized_keys`, puis connectez-vous avec cette clé.
4. Choisissez une **IPv4 publique**, de préférence réservée ou statique si le fournisseur le propose. Une adresse privée, une instance IPv6 seule ou une passerelle NAT réservée au trafic sortant ne satisfait pas le besoin de point d’accès de ce guide.
5. Définissez explicitement le CIDR source SSH, par exemple votre IPv4 publique actuelle suivie de `/32`. Ne supposez pas que le réglage par défaut du plugin limite l’accès. Les changements entre réseau mobile et Wi-Fi peuvent nécessiter une mise à jour de cette règle dans la console cloud.

Les identifiants de l’API cloud autorisent la gestion des ressources ; les clés SSH autorisent la connexion au serveur. Ce sont des identifiants différents. Saisissez les secrets d’API uniquement dans le formulaire protégé d’identifiants du fournisseur, jamais dans des demandes vocales, des commandes de terminal ou des fichiers source. Dans le fonctionnement local Android, le code natif gère l’authentification auprès du fournisseur et le stockage chiffré des identifiants ; ceux-ci sont envoyés au fournisseur si nécessaire, pas à la machine ni au moteur du plugin. Un modèle vocal hors ligne ne permet pas d’appeler les API cloud, de télécharger ou d’utiliser SSH sans accès à internet.

## Choisir un cloud et obtenir une adresse publique

Pour la **configuration par console**, connectez-vous vous-même au fournisseur ; Mobile SSH n’a pas besoin de ses identifiants d’API. Pour la future **création par plugin**, préparez les identifiants indiqués ci-dessous avec les permissions requises de création, lecture, réseau et suppression. Limitez l’accès à un projet ou déploiement dédié lorsque c’est possible. Les politiques du compte s’appliquent aux deux méthodes.

Créez la machine Ubuntu choisie avec votre clé SSH publique et appliquez la règle SSH de la section suivante. Les liens expliquent les étapes propres à chaque fournisseur pour l’adressage et l’authentification.

<div class="doc-table" tabindex="0" role="region" aria-label="Fournisseurs cloud et adresses publiques">

| Fournisseur | Identifiants pour créer les ressources par API | Configuration de l’IPv4 publique dans la console |
| --- | --- | --- |
| AWS Lightsail | Identifiant et secret de clé d’accès ; ajoutez le jeton de session pour des identifiants temporaires. Accordez les [actions Lightsail](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html) nécessaires. | Créez une instance Ubuntu à double pile, sélectionnez la clé SSH RSA, puis réservez et associez une [IPv4 statique dans sa région](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Utilisez `ubuntu` pour l’image Ubuntu. |
| Google Cloud Compute Engine | Clé JSON de compte de service et identifiant du projet. Les permissions doivent couvrir machines/disques, réseau, adresses et pare-feu ; Network Admin seul ne peut pas modifier les règles de pare-feu. Consultez les [permissions IAM](https://docs.cloud.google.com/compute/docs/access/iam). | Activez Compute Engine API, choisissez un VPC/sous-réseau routé vers internet, réservez une [IPv4 externe régionale](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address), puis associez-la à la machine. Configurez le nom d’utilisateur et la clé SSH correspondants ; OS Login nécessite sa propre configuration d’identité. |
| Microsoft Azure | Identifiant de locataire, identifiant d’application/client, **valeur** du secret client et identifiant d’abonnement. Accordez les permissions de calcul/réseau ; créer un groupe de ressources nécessite aussi une permission au périmètre parent. Consultez la [configuration du principal de service](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Créez un groupe de ressources dédié et un VNet/sous-réseau. Associez une [Public IP IPv4 statique Standard](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) à la NIC de la machine et liez un NSG. Utilisez le nom d’administrateur choisi à la création. |
| DigitalOcean | Jeton d’accès personnel avec les [portées](https://docs.digitalocean.com/reference/api/create-personal-access-token/) requises pour Droplets, clés SSH, Reserved IP, pare-feu et opérations liées. | Créez un Droplet Ubuntu avec la clé SSH publique, attribuez une [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) et associez un Cloud Firewall. Le compte Ubuntu initial est généralement `root`. |
| Hetzner Cloud | [Jeton d’API Read & Write](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/) propre au projet. | Créez un serveur Ubuntu avec une [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), votre clé SSH et un Cloud Firewall. Utilisez `root`. Vérifiez si la Primary IP distincte sera conservée après la suppression du serveur. |
| Akamai / Linode | Jeton d’accès personnel avec les permissions de lecture/écriture Linodes et Firewalls et les [portées de lecture](https://techdocs.akamai.com/linode-api/reference/get-started) requises. | Créez un Linode Ubuntu avec IPv4 publique et clé SSH, puis associez un [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Utilisez `root`. Conservez l’adresse attribuée pendant la durée de vie de l’instance. |
| Vultr | Clé d’API avec accès API activé ; sa [liste d’IP sources autorisées](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) doit accepter la connexion actuelle du téléphone. | Créez une instance Ubuntu Cloud Compute avec IPv4 publique principale, clé SSH et Firewall Group. Utilisez `root`. L’[adresse attribuée dure pendant toute la vie de l’instance](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address) ; une Reserved IP est un choix distinct. |
| Oracle Cloud Infrastructure | OCID du locataire et de l’utilisateur, empreinte de clé d’API et [clé privée de signature RSA](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), avec la clé publique de signature correspondante enregistrée. Elle est distincte de la clé SSH. | Créez un VCN, une passerelle internet et un sous-réseau public avec une route vers cette passerelle. Attribuez une [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) à l’IP privée de la VNIC de la machine. Utilisez `ubuntu` pour Canonical Ubuntu ; configurez les listes de sécurité ou le NSG. |
| OVHcloud Public Cloud | Clé d’application, secret d’application et clé consommateur validée pour le point d’accès API EU/CA/US correspondant. Limitez les [droits API](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) aux opérations du projet choisi. | Créez une [instance Public Cloud](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) Ubuntu avec Basic Public IP via Ext-Net, clé SSH et groupe de sécurité. Utilisez `ubuntu`. Les Floating/Additional IP sont des ressources distinctes. |
| Scaleway Instances | Clé secrète d’API d’une application IAM et UUID du projet, avec les permissions d’instances, volumes, IP, groupes de sécurité et clés SSH. Consultez la [création de clés d’API](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Créez une instance Ubuntu, associez une [IPv4 flexible routée dans la même zone](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), configurez un groupe de sécurité et démarrez-la. Utilisez le compte SSH de l’image, généralement `root`. |

</div>

**Alternative AWS EC2 :** lancez Ubuntu dans un sous-réseau public avec une [passerelle internet et une route `0.0.0.0/0` vers celle-ci](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), sélectionnez une clé SSH et un groupe de sécurité, puis associez une [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html). Utilisez `ubuntu`. L’adaptateur automatique local vise Lightsail ; EC2 passe par la console. Une Elastic IP seule ne rend pas un sous-réseau privé accessible.

Si une organisation interdit les clés de comptes de service, les IP externes ou la méthode d’authentification SSH choisie, obtenez une configuration approuvée par un administrateur. La console ne contourne pas ces restrictions.

## Créer les ressources et enregistrer la connexion SSH

Dans le fonctionnement séparé prévu, ouvrez **Plugins**, installez le plugin de création du fournisseur depuis un catalogue de confiance, sélectionnez son compte et sa région, puis choisissez la taille de la machine, l’image, l’adresse publique et la clé SSH. Examinez ressources et coûts avant de confirmer. Un plugin de gestion sans action de création ne peut pas accomplir cette étape ; utilisez la console du fournisseur.

Attendez que le fournisseur indique que la machine fonctionne et que SSH soit accessible. Conservez les identifiants de la machine, du disque, de l’adresse et du pare-feu. Si une requête expire, inspectez ou reprenez l’opération existante avant de réessayer, afin de ne pas créer une deuxième machine facturée.

Enregistrez la connexion renvoyée dans Mobile SSH ou ajoutez-la manuellement dans **Serveurs** : IPv4 publique, port SSH `22`, nom d’utilisateur de l’image et identifiant de clé privée correspondant. Comparez l’empreinte de clé d’hôte SSH au moyen de la console de confiance du fournisseur avant la connexion. Consultez [Premiers pas](../getting-started/) pour les vérifications d’identité et les identifiants enregistrés.

## Configurer les deux couches réseau

Une adresse publique nécessite une route, des permissions dans le pare-feu cloud et dans celui du système invité, ainsi qu’un service à l’écoute. Utilisez ces règles dans le pare-feu ou groupe de sécurité du fournisseur ; préservez les règles existantes nécessaires dans le système invité.

- **TCP 22 :** autorisez SSH depuis le CIDR de gestion choisi. Configurez-le pendant la création.
- **UDP 51820 :** autorisez les réseaux qui utiliseront le VPN. Pour des clients itinérants, cela peut signifier `0.0.0.0/0`. Ajoutez cette règle lors de la configuration de WireGuard, via le plugin de création ou la console.
- **TCP 51821 :** gardez-le fermé au public. Publiez l’interface d’administration wg-easy uniquement sur la boucle locale du serveur et accédez-y par tunnel SSH.
- **Trafic sortant :** autorisez les téléchargements de paquets/conteneurs, DNS et le trafic internet que le VPN doit transporter.

Consultez le [comportement du pare-feu de Docker](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations) : les ports de conteneur publiés peuvent contourner les règles UFW. Ne comptez pas uniquement sur UFW pour masquer l’interface d’administration et ne videz pas les chaînes de pare-feu du fournisseur, notamment les règles de stockage/iSCSI d’OCI.

## Installer wg-easy sur la machine choisie

L’installateur distinct devrait accepter le serveur SSH enregistré et demander une approbation pour les modifications. Il devrait vérifier le système, les privilèges, les installations Docker/VPN existantes et les conflits de ports, préserver les données persistantes et indiquer la version installée. Il n’a pas besoin du secret du compte cloud ; utilisez le plugin de création ou la console pour modifier le pare-feu cloud.

L’ancien plugin **WireGuard (wg-easy)** du catalogue exige une session SSH active et Docker. Ce n’est pas le nouvel installateur automatisé et il ne promet pas l’importation native des clients. Utilisez un installateur compatible mis à jour, ou la procédure manuelle suivante depuis le terminal Mobile SSH sur une nouvelle machine dédiée.

### Installation manuelle par SSH

Installez Docker Engine et son plugin Compose en suivant les [instructions officielles Ubuntu](https://docs.docker.com/engine/install/ubuntu/). Téléchargez ensuite la configuration amont de la version indiquée :

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Modifiez `/opt/wg-easy/compose.yaml` avec un éditeur de terminal disposant des privilèges nécessaires avant de démarrer. Sous `services.wg-easy`, remplacez l’image, décommentez ou définissez le bloc d’environnement et remplacez les correspondances de ports par ces valeurs. Conservez le reste du fichier amont, notamment le volume persistant, le montage des modules, les capacités, les réseaux et les sysctls :

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
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

Créez un client par appareil et téléchargez son fichier WireGuard `.conf`. Si votre version Mobile SSH le propose, ouvrez **VPN → WireGuard**, ajoutez un profil, importez le fichier et enregistrez-le. Le code actuel Android et iOS prend en charge l’importation de fichiers ; vérifiez votre version installée. Le fonctionnement combiné local Android peut importer directement, sans que cela garantisse quoi que ce soit pour l’ancien plugin ou l’automatisation iOS. Les fichiers de configuration et codes QR contiennent des clés privées ; gardez-les confidentiels.

## Vérifier le VPN et résoudre les problèmes

Démarrez le profil et approuvez la demande VPN du système. Vérifiez une négociation récente avec le pair et des compteurs de trafic qui augmentent, puis testez DNS et les routes internet ou privées prévues. Un profil importé ou un conteneur actif ne prouvent pas, à eux seuls, que le VPN fonctionne.

- **Création de machine refusée :** vérifiez facturation, quotas, capacité régionale, expiration des identifiants et permissions IAM exactes. Modifier les pare-feu Google Cloud exige des permissions supplémentaires à Network Admin.
- **Délai SSH dépassé :** vérifiez l’adresse publique, le routage du sous-réseau, les règles TCP 22 et l’IP source actuelle du téléphone. Les échecs d’authentification nécessitent généralement le bon utilisateur de l’image et la bonne clé SSH.
- **Interface d’administration inaccessible :** maintenez la redirection SSH connectée, vérifiez l’état du conteneur et la correspondance du port sur la boucle locale, puis confirmez que HTTP n’est activé que pour le tunnel.
- **Aucune négociation WireGuard :** vérifiez le point d’accès client, UDP 51820 dans les deux couches de pare-feu, les clés client et l’écoute du serveur.
- **Négociation réussie mais aucun trafic :** inspectez transfert/NAT, DNS, chevauchement des routes et `AllowedIPs`. Un tunnel complet IPv4 utilise `0.0.0.0/0` ; évaluez IPv6 séparément. Une machine sans connectivité IPv6 en amont ne peut pas offrir de sortie internet IPv6, et des routes uniquement IPv4 peuvent laisser IPv6 hors du VPN.

## Retirer les clients et arrêter les frais cloud

Révoquez le client dans wg-easy avant de supprimer son profil local. Supprimer un profil dans Mobile SSH ne révoque pas la clé du pair sur le serveur. Sauvegardez la configuration nécessaire de manière sûre avant de retirer le conteneur VPN ou ses données persistantes.

Utilisez le plugin responsable ou la console du fournisseur pour supprimer une machine devenue inutile, puis vérifiez les disques conservés, instantanés, adresses réservées/publiques et ressources réseau. Examinez le contenu d’un groupe de ressources Azure dédié avant de le supprimer. N’ajoutez pas de ressources sans rapport à un déploiement géré par plugin.

Arrêter une machine, annuler une tâche de configuration ou désinstaller le plugin ne garantit ni la suppression des ressources ni l’arrêt des frais. Les ressources créées dans la console restent à votre charge pour leur suppression ; conservez leurs identifiants jusqu’à confirmation de celle-ci.
