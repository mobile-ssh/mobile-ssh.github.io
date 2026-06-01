---
layout: ../../../layouts/DocLayout.astro
title: "Premiers pas"
description: "Premiers pas pour installer Mobile SSH, se connecter à un serveur et enregistrer des profils, des identifiants et des sessions."
---

# Premiers pas

Mobile SSH est un client SSH pour Android permettant de vous connecter à vos propres serveurs Linux, Unix, réseau, IoT ou de développement. Vous fournissez l'adresse du serveur et les identifiants ; l'app ouvre un terminal SSH interactif.

## Prérequis

- Android 8.0 ou plus récent.
- Un accès réseau de l'appareil Android vers votre serveur SSH.
- Le nom d'hôte ou l'adresse IP du serveur SSH, le port, le nom d'utilisateur et un mot de passe ou une clé privée.
- Un accès au stockage si vous souhaitez utiliser le transfert de fichiers SFTP avec l'explorateur de fichiers local du téléphone.

## Se connecter à un serveur

1. Ouvrez Mobile SSH.
2. Touchez **Serveurs enregistrés** si vous avez déjà créé un profil, ou ajoutez un serveur depuis le flux de connexion.
3. Saisissez l'hôte, le port, le nom d'utilisateur et les informations d'authentification.
4. Touchez le serveur pour ouvrir une session de terminal.
5. Utilisez **Sessions actives** sur l'écran d'accueil pour revenir aux sessions encore en cours.

Le port SSH par défaut est `22`. Si votre serveur utilise un autre port, indiquez-le dans le profil du serveur.

## Enregistrer des serveurs

Les serveurs enregistrés conservent la cible de connexion et la configuration de tunnels facultative. Un serveur enregistré peut inclure :

- Le nom d'hôte ou l'adresse IP.
- Le port SSH.
- Le nom d'utilisateur.
- Les informations de mot de passe ou de clé privée.
- Des règles facultatives de redirection de ports local.

Utilisez les serveurs enregistrés pour les hôtes auxquels vous accédez régulièrement. Si un serveur enregistré pointe vers un hôte différent de votre session active actuelle, Mobile SSH démarre une nouvelle connexion pour la cible sélectionnée.

## Enregistrer des identifiants

L'écran **Identifiants** stocke des enregistrements réutilisables utilisateur/mot de passe ou utilisateur/clé privée. Les identifiants enregistrés peuvent être sélectionnés dans la boîte de dialogue de configuration du serveur, pour ne pas resaisir les mêmes informations de connexion pour chaque hôte.

Les enregistrements d'identifiants sont stockés localement sur l'appareil Android. Protégez l'appareil par un verrouillage d'écran si vous enregistrez des mots de passe, des phrases secrètes ou des clés privées.

## Utiliser des clés privées

Mobile SSH prend en charge les clés privées collées et l'importation de clés via le sélecteur de fichiers d'Android. L'implémentation de l'app prend en charge les clés Ed25519, RSA, ECDSA et DSA.

Pour utiliser une clé privée :

1. Ouvrez **Identifiants** ou la boîte de dialogue d'édition du serveur.
2. Collez le texte de la clé privée, ou choisissez **Importer depuis un fichier**.
3. Saisissez la phrase secrète de la clé dans le champ mot de passe/phrase secrète si la clé est chiffrée.
4. Enregistrez l'identifiant ou le serveur.

L'importation de la clé privée utilise le sélecteur de fichiers d'Android pour les fichiers de clé. Le transfert de fichiers utilise un explorateur de fichiers local distinct et peut demander un accès au stockage plus large sur les versions récentes d'Android.

## Sessions récentes

L'écran d'accueil affiche les sessions récentes. Une session récente peut se reconnecter au même ensemble de serveurs. Si la session précédente est encore active, Mobile SSH y revient au lieu de démarrer une connexion en double.

## Sessions actives

Lorsque des sessions sont en cours, l'écran d'accueil affiche **Sessions actives** avec un compteur. Touchez-le pour revenir à la grille de terminaux. Revenir à l'écran d'accueil ne déconnecte pas forcément les sessions SSH actives ; fermer des volets ou terminer l'activité de terminal les déconnecte.

## Premiers réglages utiles

Ouvrez **Réglages** depuis l'écran d'accueil :

- Activez l'affichage du clavier au toucher si vous préférez que le clavier apparaisse en touchant le terminal.
- Désactivez les suggestions de l'IME si les suggestions du clavier gênent les programmes de terminal comme Vim, less, htop ou les apps tmux en plein écran.

## Langues

Mobile SSH suit la langue du système Android. L'app est livrée avec des traductions en arabe, bengali, chinois (simplifié et traditionnel), anglais, français, allemand, hindi, indonésien, japonais, marathi, pidgin nigérian, portugais, russe, espagnol, tamoul, télougou, turc et ourdou. Changez de langue dans **Réglages → Système → Langues** d'Android, et non depuis l'app.

## Note de sécurité

Connectez-vous uniquement à des serveurs de confiance. L'app actuelle stocke les données de connexion enregistrées localement et n'offre ni coffre-fort cloud ni synchronisation entre appareils. L'implémentation actuelle ne présente pas non plus de confirmation d'hôte connu ; évitez donc de vous connecter via des réseaux non fiables lorsque l'identité de l'hôte est importante.
