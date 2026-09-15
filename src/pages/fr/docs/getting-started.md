---
layout: ../../../layouts/DocLayout.astro
title: "Premiers pas"
description: "Installer Mobile SSH, vérifier les identités, configurer bastions et clés, sauvegarder serveurs, identifiants et réglages."
---

# Premiers pas

Mobile SSH est un client SSH pour Android et iOS permettant de vous connecter à vos propres serveurs Linux, Unix, réseau, IoT ou de développement. Vous fournissez l'adresse du serveur et les identifiants ; l'app ouvre un terminal SSH interactif.

## Prérequis

- Android 8.0 ou plus récent, ou iOS 16 ou plus récent (iPhone ou iPad).
- Un accès réseau de l'appareil vers votre serveur SSH.
- Le nom d'hôte ou l'adresse IP du serveur SSH, le port, le nom d'utilisateur et un mot de passe ou une clé privée.
- Pour les fichiers locaux, choisissez dossiers ou fichiers avec le sélecteur système. Aucune plateforme ne nécessite d'accès global au stockage.

## Installer l'app

- **Android :** Mobile SSH est actuellement en test fermé sur Google Play. Ouvrez le lien d'inscription dans un navigateur mobile sur l'appareil — pas dans l'application Google Play, où le test peut ne pas être visible — et inscrivez-vous avec le compte Google que vous utiliserez. Ensuite, l'app s'installe et se met à jour depuis Play comme n'importe quelle autre.
- **iOS :** l'app iOS est proposée en bêta publique sur TestFlight. Installez l'app TestFlight d'Apple, puis ouvrez le lien d'invitation Mobile SSH depuis la page d'accueil du site pour l'installer et recevoir les mises à jour.

## Se connecter à un serveur

1. Ouvrez Mobile SSH.
2. Touchez **+ Add Session** et recherchez un serveur enregistré, ou ajoutez-en un nouveau depuis cet écran.
3. Saisissez l'hôte, le port, le nom d'utilisateur et les informations d'authentification si vous ajoutez un nouveau serveur.
4. Touchez le serveur pour ouvrir une session de terminal.
5. Utilisez **Active Sessions** sur l'écran d'accueil pour revenir aux sessions encore en cours.

Le port SSH par défaut est `22`. Si votre serveur utilise un autre port, indiquez-le dans le profil du serveur.

## Vérifier les identités des serveurs

Les deux apps vérifient l'identité SSH avant les identifiants. Une clé modifiée bloque la connexion, y compris avec adresses alternatives et bastions.

- **Android :** **Accepter automatiquement les nouvelles identités SSH** est activé par défaut. La première clé brute est enregistrée ; les suivantes doivent correspondre. Désactivez-le dans **Réglages → Général → Sécurité** pour comparer chaque nouvelle empreinte SHA-256 avec l'administrateur avant acceptation et reconnexion.
- **iOS :** une clé inconnue exige confirmation. Comparez son empreinte SHA-256 par un canal fiable, puis choisissez **Faire confiance et reconnecter**.

Consultez les identités enregistrées dans les réglages. Les deux plateformes acceptent les révocations de clés d’hôte fournies par l’administrateur ; Android prend aussi en charge les autorités de certification d’hôtes. Sur iOS, utilisez **Réglages → Identités des serveurs → Importer des clés révoquées** pour les entrées OpenSSH `@revoked` Ed25519/ECDSA à portée définie. Les clés révoquées sont bloquées lors des nouvelles connexions et reconnexions, même si elles étaient déjà approuvées ; importer une révocation ne ferme pas les connexions existantes. iOS ne prend en charge ni les certificats d’hôte ni l’importation de CA. La confiance reste propre à chaque appareil et n’est pas importée depuis une sauvegarde. Ne retirez pas une clé modifiée ou révoquée sans avoir vérifié pourquoi elle a été bloquée.

## Choisir un transport

Lors de l'ajout ou de la modification d'un serveur, le sélecteur **Transport** détermine la façon dont Mobile SSH se connecte :

- **SSH** — une connexion SSH standard (par défaut).
- **Eternal Terminal** — une session résiliente qui survit aux coupures réseau, à la mise en veille et aux changements d'IP. Si l'hôte n'a pas d'`etserver`, Mobile SSH peut en installer un pour vous via SSH. Voyez le guide **Terminal** pour les détails.

Android propose aussi des connexions expérimentales par proxy **Teleport**. Les routes par bastions nécessitent SSH et ne se combinent pas avec Eternal Terminal.

## Enregistrer des serveurs

Les serveurs enregistrés conservent la cible de connexion et la configuration de tunnels facultative. Un serveur enregistré peut inclure :

- Le nom d'hôte ou l'adresse IP.
- Le port SSH.
- Le nom d'utilisateur.
- Les informations de mot de passe ou de clé privée.
- Des règles facultatives de redirection de ports locale.
- Des adresses supplémentaires facultatives pour la même machine (voir ci-dessous).
- Bastions enregistrés facultatifs et choix **Rattacher à la connexion** : Auto, Rien, tmux, herdr ou Zellij.

Utilisez les serveurs enregistrés pour les hôtes auxquels vous accédez régulièrement. Si un serveur enregistré pointe vers un hôte différent de votre session active actuelle, Mobile SSH démarre une nouvelle connexion pour la cible sélectionnée.

### Plusieurs adresses (itinérance LAN/VPN)

La même machine est souvent joignable à différentes adresses selon l'endroit où vous vous trouvez — une IP Wi-Fi domestique ou une IP VPN. Ajoutez les alternatives dans la boîte de dialogue d'édition du serveur, chacune avec son propre port si nécessaire. Lors de la connexion, Mobile SSH essaie les adresses dans l'ordre jusqu'à ce que l'une réponde, et il mémorise l'adresse qui a fonctionné en dernier pour la composer en premier la fois suivante. Un changement de réseau (par exemple en quittant le VPN) déclenche une reconnexion immédiate vers l'adresse désormais joignable, au lieu d'attendre l'expiration de la route morte.

### Bastions

Enregistrez d'abord les bastions, puis choisissez leur ordre dans les réglages du serveur cible. Les deux plateformes acceptent huit sauts SSH développés maximum. Chaque saut a ses identifiants et vérifications ; la cible doit être accessible depuis le saut précédent. Hôtes absents, boucles et échecs arrêtent la route sans connexion directe silencieuse. Terminal, SFTP, redirections locales et fonctions SSH compatibles utilisent cette route.

## Enregistrer des identifiants

L'écran **Credentials** stocke des enregistrements réutilisables utilisateur/mot de passe ou utilisateur/clé privée. Les identifiants enregistrés peuvent être sélectionnés dans la boîte de dialogue de configuration du serveur, pour ne pas resaisir les mêmes informations de connexion pour chaque hôte.

Les enregistrements d'identifiants sont stockés localement sur l'appareil — sur iOS, les secrets sont conservés dans le Keychain du système. Protégez l'appareil par un verrouillage d'écran si vous enregistrez des mots de passe, des phrases secrètes ou des clés privées.

## Utiliser des clés privées

Mobile SSH prend en charge les clés privées collées et l'importation de clés via le sélecteur de fichiers du système. Sur Android, l'app prend en charge les clés Ed25519, ECDSA (P-256/384/521) et RSA ; sur iOS, elle prend en charge les clés Ed25519 et ECDSA (P-256/384/521). DSA (`ssh-dss`) n'est pris en charge sur aucune des deux plateformes. Les deux plateformes savent ouvrir une clé chiffrée par phrase secrète — saisissez la phrase secrète dans le champ mot de passe/phrase secrète.

Pour utiliser une clé privée :

1. Ouvrez **Credentials** ou la boîte de dialogue d'édition du serveur.
2. Collez le texte de la clé privée, ou choisissez **Import from file**.
3. Saisissez la phrase secrète de la clé dans le champ mot de passe/phrase secrète si la clé est chiffrée.
4. Enregistrez l'identifiant ou le serveur.

L'import de clé utilise le sélecteur système et ne donne pas accès au reste du stockage. Le transfert de fichiers a sa propre sélection de dossiers et fichiers.

Android accepte les **clés de sécurité FIDO2** par USB/NFC : enregistrez une clé ou importez son identifiant OpenSSH, puis suivez les demandes de toucher/PIN. La clé physique reste nécessaire après export/restauration. **Transfert d'agent SSH** s'active par serveur : les clés enregistrées répondent aux demandes de signature, avec approbation facultative par usage. N'activez que pour des serveurs auxquels vous faites confiance pour signer. iOS ne prend en charge ni ces clés ni le transfert d'agent.

## L'écran d'accueil

L'écran d'accueil est conçu pour répondre à la question « où puis-je reprendre ? » plutôt que pour ouvrir un formulaire de connexion vierge :

- **Continue** liste les connexions actives à l'instant, avec un compteur de panneaux lorsqu'une connexion en compte plusieurs. Touchez une ligne pour y revenir.
- **Tmux sessions** liste ce qui tourne sur vos serveurs enregistrés. La liste provient d'un instantané que l'app a déjà stocké : elle s'affiche donc instantanément, sans aucun réseau — chaque ligne porte l'âge de l'instantané, et en toucher une connecte puis attache cette session. Les instantanés s'estompent au bout de quelques heures et sont supprimés après une semaine.
- Sur iOS, **Récents** se trouve dans **Nouvelle connexion** ; choisir une entrée remplit le formulaire.

La tuile **VPN** d'Android ouvre les clients intégrés ; **À propos** se trouve dans les réglages. Le guide VPN fait partie de **Redirection de ports** sur ce site.

Si rien n'est actif et que rien n'est en cache, l'écran le signale et vous renvoie vers **Servers**.

## Nommer et rechercher des serveurs enregistrés

Un serveur enregistré peut porter un nom — « NAS maison », « Web prod » — et la liste l'affiche à la place de l'adresse. L'adresse revient d'elle-même dès que le nom serait ambigu : deux lignes portant le même nom, ou une recherche en cours, pour que vous puissiez toujours distinguer les lignes.

Touchez le champ de recherche sur la page **Saved Servers** pour filtrer. La recherche porte sur le nom, l'utilisateur, l'hôte, le port, l'identifiant et toutes les adresses alternatives. L'écran **+ Add Session** s'ouvre également avec une recherche, ce qui vous permet de trouver et de vous connecter à un serveur enregistré en une seule étape.

Les serveurs peuvent être classés dans des dossiers. Un dossier se replie, se souvient qu'il était replié, et peut être réordonné ou renommé ; en supprimer un déplace ses serveurs vers **Ungrouped** au lieu de les supprimer.

## Exporter une partie de votre configuration

**Export selected…** sur les écrans Servers et Credentials transforme la liste en sélecteur à cases à cocher : vous pouvez transmettre trois serveurs sans tout exporter. Toucher l'en-tête d'un dossier prend tout le dossier. Les exports sont chiffrés si vous fournissez une phrase secrète — sans elle, le fichier contient les mots de passe et les clés privées en clair, et l'app vous le dit avant d'écrire.

Pour une sauvegarde complète, choisissez **Tout exporter (sauvegarde)** sur Android ou **Sauvegarde et restauration** sur iOS. Elle inclut serveurs, identifiants et préférences : langue, touches, tri des multiplexeurs. Android ajoute les profils VPN/SOCKS. Protégez le fichier entier avec une phrase de passe.

Les deux apps lisent le format 2 et les anciens inventaires. Vérifiez l'aperçu : **Fusionner** applique les sections en conservant les éléments existants ; **Remplacer** remplace les sections incluses et rétablit les valeurs par défaut des préférences omises dans une section de réglages fournie. Les sections absentes restent intactes. Les options incompatibles sont signalées ; les importer ne crée pas ces fonctions dans l'autre app. Aucun VPN ne démarre à l'import.

Identités, sessions actives, permissions système et accès aux dossiers ne sont pas restaurés. Vérifiez les hôtes et autorisez les dossiers sur le nouvel appareil. Les anciennes versions ne lisent pas le nouveau format complet.

## Sessions actives

Lorsque des sessions tournent, **Sessions actives** affiche leur nombre et ouvre la grille. Sur Android, une notification persistante liste aussi les hôtes et ouvre les commandes de connexion.

Revenir à l'écran d'accueil ne déconnecte pas les sessions SSH actives ; fermer des volets ou terminer l'activité de terminal les déconnecte.

## Premiers réglages utiles

Ouvrez **Settings** depuis l'écran d'accueil (il dispose de sa propre page) :

- Décidez si toucher le terminal fait apparaître le clavier. Les deux plateformes livrent des valeurs par défaut opposées : sur Android, le clavier n'apparaît que via le bouton ⌨ ; sur iOS, un toucher le fait apparaître.
- Réglez la **taille du texte**, la **police**, le **jeu de couleurs** et la taille du **scrollback** du terminal, puis choisissez un **thème** d'application (Système, Clair ou Sombre).
- Activez **Agent alerts** si vous exécutez de longues tâches en arrière-plan (Claude Code, Codex, scripts shell) et souhaitez être prévenu lorsque l'agent a besoin de votre intervention. Voyez le guide **Terminal** pour savoir comment les agents se signalent.
- Sur Android, **Keep sessions running in background** est activé par défaut : les shells et les agents survivent au balayage de l'app hors des récentes.
- Les deux plateformes ont un interrupteur d'analyse anonyme ; le désactiver arrête la collecte de nouveaux événements.
- Sur iOS, **Dictée et suggestions** est activé. Désactivez-le et ouvrez un nouveau volet pour une saisie directe sans dictée ni correction.
- Notifications distantes, fin de commande et lecture distante du presse-papiers ont des autorisations séparées. N'activez que les actions souhaitées.

## Plugins

Les plugins étendent Mobile SSH avec des flux de travail supplémentaires. Ouvrez **Plugins** depuis l'écran d'accueil pour :

- Parcourez le catalogue par catégorie et recherchez des plugins.
- Installer ceux que vous voulez — chaque plugin est téléchargé à la demande et vérifié par somme de contrôle SHA-256 dans le stockage privé de l'app.
- Exécuter les plugins installés depuis le même écran.

Les plugins sont récupérés depuis un catalogue public par défaut. Si vous maintenez le vôtre, vous pouvez pointer Mobile SSH vers une source de catalogue personnalisée ou privée. N'installez que des plugins provenant de sources de confiance.

## Langues

Mobile SSH suit la langue système par défaut. Les deux apps proposent vingt langues : arabe, arabe égyptien, bengali, chinois simplifié et traditionnel, anglais, français, allemand, hindi, indonésien, japonais, marathi, pidgin nigérian, portugais, russe, espagnol, tamoul, télougou, turc et ourdou.

Si vous voulez l'app dans une autre langue que celle du téléphone, **Settings → Language** propose un sélecteur avec une option « System default ». Vous pouvez aussi toujours en changer dans **Settings → System → Languages** d'Android ou dans **Settings → General → Language & Region** sur iOS.

## Note de sécurité

Connectez-vous uniquement à des serveurs fiables. Les données restent sur l'appareil sauf export ou partage ; Mobile SSH n'a ni coffre cloud ni synchronisation automatique. Protégez appareil et sauvegardes, vérifiez les empreintes inconnues et examinez les changements de clé avant reconnexion.
