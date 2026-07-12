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

- **Android :** installez Mobile SSH depuis Google Play.
- **iOS :** l'app iOS est proposée en bêta publique sur TestFlight. Installez l'app TestFlight d'Apple, puis ouvrez le lien d'invitation Mobile SSH depuis la page d'accueil du site pour l'installer et recevoir les mises à jour.

## Se connecter à un serveur

1. Ouvrez Mobile SSH.
2. Touchez **+ Add Session** et recherchez un serveur enregistré, ou ajoutez-en un nouveau depuis cet écran.
3. Saisissez l'hôte, le port, le nom d'utilisateur et les informations d'authentification si vous ajoutez un nouveau serveur.
4. Touchez le serveur pour ouvrir une session de terminal.
5. Utilisez **Active Sessions** sur l'écran d'accueil pour revenir aux sessions encore en cours.

Le port SSH par défaut est `22`. Si votre serveur utilise un autre port, indiquez-le dans le profil du serveur.

## Enregistrer des serveurs

Les serveurs enregistrés conservent la cible de connexion et la configuration de tunnels facultative. Un serveur enregistré peut inclure :

- Le nom d'hôte ou l'adresse IP.
- Le port SSH.
- Le nom d'utilisateur.
- Les informations de mot de passe ou de clé privée.
- Des règles facultatives de redirection de ports locale.

Utilisez les serveurs enregistrés pour les hôtes auxquels vous accédez régulièrement. Si un serveur enregistré pointe vers un hôte différent de votre session active actuelle, Mobile SSH démarre une nouvelle connexion pour la cible sélectionnée.

## Enregistrer des identifiants

L'écran **Credentials** stocke des enregistrements réutilisables utilisateur/mot de passe ou utilisateur/clé privée. Les identifiants enregistrés peuvent être sélectionnés dans la boîte de dialogue de configuration du serveur, pour ne pas resaisir les mêmes informations de connexion pour chaque hôte.

Les enregistrements d'identifiants sont stockés localement sur l'appareil — sur iOS, les secrets sont conservés dans le Keychain du système. Protégez l'appareil par un verrouillage d'écran si vous enregistrez des mots de passe, des phrases secrètes ou des clés privées.

## Utiliser des clés privées

Mobile SSH prend en charge les clés privées collées et l'importation de clés via le sélecteur de fichiers du système. Sur Android, l'app prend en charge les clés Ed25519, RSA, ECDSA et DSA ; sur iOS, elle prend en charge les clés Ed25519 et ECDSA (P-256/384/521).

Pour utiliser une clé privée :

1. Ouvrez **Credentials** ou la boîte de dialogue d'édition du serveur.
2. Collez le texte de la clé privée, ou choisissez **Import from file**.
3. Saisissez la phrase secrète de la clé dans le champ mot de passe/phrase secrète si la clé est chiffrée.
4. Enregistrez l'identifiant ou le serveur.

L'importation de la clé privée utilise le sélecteur de fichiers du système pour les fichiers de clé. Sur Android, le transfert de fichiers utilise un explorateur de fichiers local distinct et peut demander un accès au stockage plus large sur les versions récentes d'Android ; sur iOS, les fichiers passent par les sélecteurs de documents et de photos du système.

## Sessions récentes

L'écran d'accueil affiche les sessions récentes. Une session récente peut se reconnecter au même ensemble de serveurs. Si la session précédente est encore active, Mobile SSH y revient au lieu de démarrer une connexion en double.

## Rechercher des serveurs enregistrés

Touchez le champ de recherche sur la page **Saved Servers** pour filtrer par nom ou par hôte. L'écran **+ Add Session** s'ouvre également avec une recherche, ce qui vous permet de trouver et de vous connecter à un serveur enregistré en une seule étape.

## Sessions actives

Lorsque des sessions sont en cours, l'écran d'accueil affiche **Active Sessions** avec un compteur. Touchez-le pour revenir à la grille de terminaux. Une notification persistante liste également les hôtes actifs — touchez un hôte dans la notification pour accéder directement à ce terminal.

Revenir à l'écran d'accueil ne déconnecte pas les sessions SSH actives ; fermer des volets ou terminer l'activité de terminal les déconnecte.

## Premiers réglages utiles

Ouvrez **Settings** depuis l'écran d'accueil (il dispose de sa propre page) :

- Activez l'affichage du clavier au toucher si vous préférez que le clavier apparaisse en touchant le terminal.
- Désactivez les suggestions de l'IME si les suggestions du clavier gênent les programmes de terminal comme Vim, less, htop ou les apps tmux en plein écran.
- Activez **Agent alerts** si vous exécutez de longues tâches en arrière-plan (Claude Code, Codex, scripts shell) et souhaitez recevoir une notification sonore ou une vibration lorsque l'agent a besoin de votre intervention.
- Désactivez l'envoi d'analyses d'utilisation anonymes si vous préférez qu'aucune donnée ne soit transmise.

## Langues

Mobile SSH suit la langue du système. L'app est livrée avec des traductions en arabe, bengali, chinois (simplifié et traditionnel), anglais, français, allemand, hindi, indonésien, japonais, marathi, pidgin nigérian, portugais, russe, espagnol, tamoul, télougou, turc et ourdou. Changez de langue dans **Settings → System → Languages** d'Android, ou sur iOS dans **Settings → General → Language & Region**, et non depuis l'app.

## Note de sécurité

Connectez-vous uniquement à des serveurs de confiance. L'app actuelle stocke les données de connexion enregistrées localement et n'offre ni coffre-fort cloud ni synchronisation entre appareils. L'implémentation actuelle ne présente pas non plus de confirmation d'hôte connu ; évitez donc de vous connecter via des réseaux non fiables lorsque l'identité de l'hôte est importante.
