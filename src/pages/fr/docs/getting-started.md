---
layout: ../../../layouts/DocLayout.astro
title: "Premiers pas"
description: "Premiers pas pour installer Mobile SSH, se connecter à un serveur et enregistrer des profils, des identifiants et des sessions."
---

# Premiers pas

Mobile SSH est un client SSH pour Android et iOS permettant de vous connecter à vos propres serveurs Linux, Unix, réseau, IoT ou de développement. Vous fournissez l'adresse du serveur et les identifiants ; l'app ouvre un terminal SSH interactif.

## Prérequis

- Android 8.0 ou plus récent, ou iOS 16 ou plus récent (iPhone ou iPad).
- Un accès réseau de l'appareil vers votre serveur SSH.
- Le nom d'hôte ou l'adresse IP du serveur SSH, le port, le nom d'utilisateur et un mot de passe ou une clé privée.
- Sur Android, un accès au stockage si vous souhaitez utiliser le transfert de fichiers SFTP avec l'explorateur de fichiers local du téléphone ; iOS utilise à la place les sélecteurs de fichiers et de photos du système.

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

## Choisir un transport

Lors de l'ajout ou de la modification d'un serveur, le sélecteur **Transport** détermine la façon dont Mobile SSH se connecte :

- **SSH** — une connexion SSH standard (par défaut).
- **Eternal Terminal** — une session résiliente qui survit aux coupures réseau, à la mise en veille et aux changements d'IP. Si l'hôte n'a pas d'`etserver`, Mobile SSH peut en installer un pour vous via SSH. Voyez le guide **Terminal** pour les détails.

## Enregistrer des serveurs

Les serveurs enregistrés conservent la cible de connexion et la configuration de tunnels facultative. Un serveur enregistré peut inclure :

- Le nom d'hôte ou l'adresse IP.
- Le port SSH.
- Le nom d'utilisateur.
- Les informations de mot de passe ou de clé privée.
- Des règles facultatives de redirection de ports locale.
- Des adresses supplémentaires facultatives pour la même machine (voir ci-dessous).

Utilisez les serveurs enregistrés pour les hôtes auxquels vous accédez régulièrement. Si un serveur enregistré pointe vers un hôte différent de votre session active actuelle, Mobile SSH démarre une nouvelle connexion pour la cible sélectionnée.

### Plusieurs adresses (itinérance LAN/VPN)

La même machine est souvent joignable à différentes adresses selon l'endroit où vous vous trouvez — une IP Wi-Fi domestique ou une IP VPN. Ajoutez les alternatives dans la boîte de dialogue d'édition du serveur, chacune avec son propre port si nécessaire. Lors de la connexion, Mobile SSH essaie les adresses dans l'ordre jusqu'à ce que l'une réponde, et il mémorise l'adresse qui a fonctionné en dernier pour la composer en premier la fois suivante. Un changement de réseau (par exemple en quittant le VPN) déclenche une reconnexion immédiate vers l'adresse désormais joignable, au lieu d'attendre l'expiration de la route morte.

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

L'importation de la clé privée utilise le sélecteur de fichiers du système pour les fichiers de clé. Sur Android, le transfert de fichiers utilise un explorateur de fichiers local distinct et peut demander un accès au stockage plus large sur les versions récentes d'Android ; sur iOS, les fichiers passent par les sélecteurs de documents et de photos du système.

## L'écran d'accueil

L'écran d'accueil est conçu pour répondre à la question « où puis-je reprendre ? » plutôt que pour ouvrir un formulaire de connexion vierge :

- **Continue** liste les connexions actives à l'instant, avec un compteur de panneaux lorsqu'une connexion en compte plusieurs. Touchez une ligne pour y revenir.
- **Tmux sessions** liste ce qui tourne sur vos serveurs enregistrés. La liste provient d'un instantané que l'app a déjà stocké : elle s'affiche donc instantanément, sans aucun réseau — chaque ligne porte l'âge de l'instantané, et en toucher une connecte puis attache cette session. Les instantanés s'estompent au bout de quelques heures et sont supprimés après une semaine.
- Sur iOS, une liste **Recent** figure sous ces sections ; l'app Android l'a abandonnée, car « où puis-je reprendre ? » s'est révélé plus utile que « quand me suis-je connecté pour la dernière fois ? ».

Si rien n'est actif et que rien n'est en cache, l'écran le signale et vous renvoie vers **Servers**.

## Nommer et rechercher des serveurs enregistrés

Un serveur enregistré peut porter un nom — « NAS maison », « Web prod » — et la liste l'affiche à la place de l'adresse. L'adresse revient d'elle-même dès que le nom serait ambigu : deux lignes portant le même nom, ou une recherche en cours, pour que vous puissiez toujours distinguer les lignes.

Touchez le champ de recherche sur la page **Saved Servers** pour filtrer. La recherche porte sur le nom, l'utilisateur, l'hôte, le port, l'identifiant et toutes les adresses alternatives. L'écran **+ Add Session** s'ouvre également avec une recherche, ce qui vous permet de trouver et de vous connecter à un serveur enregistré en une seule étape.

Les serveurs peuvent être classés dans des dossiers. Un dossier se replie, se souvient qu'il était replié, et peut être réordonné ou renommé ; en supprimer un déplace ses serveurs vers **Ungrouped** au lieu de les supprimer.

## Exporter une partie de votre configuration

**Export selected…** sur les écrans Servers et Credentials transforme la liste en sélecteur à cases à cocher : vous pouvez transmettre trois serveurs sans tout exporter. Toucher l'en-tête d'un dossier prend tout le dossier. Les exports sont chiffrés si vous fournissez une phrase secrète — sans elle, le fichier contient les mots de passe et les clés privées en clair, et l'app vous le dit avant d'écrire.

## Sessions actives

Lorsque des sessions sont en cours, l'écran d'accueil affiche **Active Sessions** avec un compteur. Touchez-le pour revenir à la grille de terminaux. Une notification persistante liste également les hôtes actifs — touchez un hôte dans la notification pour accéder directement à ce terminal.

Revenir à l'écran d'accueil ne déconnecte pas les sessions SSH actives ; fermer des volets ou terminer l'activité de terminal les déconnecte.

## Premiers réglages utiles

Ouvrez **Settings** depuis l'écran d'accueil (il dispose de sa propre page) :

- Décidez si toucher le terminal fait apparaître le clavier. Les deux plateformes livrent des valeurs par défaut opposées : sur Android, le clavier n'apparaît que via le bouton ⌨ ; sur iOS, un toucher le fait apparaître.
- Réglez la **taille du texte**, la **police**, le **jeu de couleurs** et la taille du **scrollback** du terminal, puis choisissez un **thème** d'application (Système, Clair ou Sombre).
- Activez **Agent alerts** si vous exécutez de longues tâches en arrière-plan (Claude Code, Codex, scripts shell) et souhaitez être prévenu lorsque l'agent a besoin de votre intervention. Voyez le guide **Terminal** pour savoir comment les agents se signalent.
- Sur Android, **Keep sessions running in background** est activé par défaut : les shells et les agents survivent au balayage de l'app hors des récentes.
- Sur Android, désactivez l'envoi d'analyses d'utilisation anonymes si vous préférez qu'aucune donnée ne soit transmise. L'app iOS ne propose pas encore cet interrupteur.

## Plugins

Les plugins étendent Mobile SSH avec des flux de travail supplémentaires. Ouvrez **Plugins** depuis l'écran d'accueil pour :

- Parcourir un catalogue de plugins disponibles.
- Installer ceux que vous voulez — chaque plugin est téléchargé à la demande et vérifié par somme de contrôle SHA-256 dans le stockage privé de l'app.
- Exécuter les plugins installés depuis le même écran.

Les plugins sont récupérés depuis un catalogue public par défaut. Si vous maintenez le vôtre, vous pouvez pointer Mobile SSH vers une source de catalogue personnalisée ou privée. N'installez que des plugins provenant de sources de confiance.

## Langues

Mobile SSH suit la langue du système par défaut. L'app est livrée avec des traductions en arabe, bengali, chinois (simplifié et traditionnel), anglais, français, allemand, hindi, indonésien, japonais, marathi, portugais, russe, espagnol, tamoul, télougou, turc et ourdou — vingt langues sur Android, qui ajoute le pidgin nigérian et l'arabe égyptien, et dix-huit sur iOS.

Si vous voulez l'app dans une autre langue que celle du téléphone, **Settings → Language** propose un sélecteur avec une option « System default ». Vous pouvez aussi toujours en changer dans **Settings → System → Languages** d'Android ou dans **Settings → General → Language & Region** sur iOS.

## Note de sécurité

Connectez-vous uniquement à des serveurs de confiance. L'app actuelle stocke les données de connexion enregistrées localement et n'offre ni coffre-fort cloud ni synchronisation entre appareils. L'implémentation actuelle ne présente pas non plus de confirmation d'hôte connu ; évitez donc de vous connecter via des réseaux non fiables lorsque l'identité de l'hôte est importante.
