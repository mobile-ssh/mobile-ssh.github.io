---
layout: ../../../layouts/DocLayout.astro
title: "Transfert de fichiers"
description: "Guide de transfert de fichiers SFTP de Mobile SSH pour les fichiers locaux et distants, l'envoi, le téléchargement, le tri et les permissions."
---

# Transfert de fichiers

Mobile SSH inclut un écran de transfert de fichiers SFTP lié à la connexion SSH active. Il est destiné à la maintenance rapide d'un serveur depuis Android : envoyer une configuration, télécharger un journal, renommer un fichier distant ou inspecter des permissions sans quitter l'app.

## Ouvrir le transfert de fichiers

1. Connectez-vous à un serveur SSH.
2. Sélectionnez le volet de terminal connecté.
3. Ouvrez **Transfert** depuis la barre d'outils du terminal, ou appuyez longuement sur l'en-tête du volet lorsque l'écran actuel le permet.
4. L'écran de transfert de fichiers s'ouvre avec un volet local et un volet distant.

S'il n'y a pas de session SSH active, le transfert de fichiers ne peut pas s'ouvrir.

## Volets local et distant

L'écran de transfert de fichiers comporte deux volets de navigation :

- **Volet local :** le stockage du téléphone.
- **Volet distant :** les fichiers du serveur via SFTP.

L'app mémorise les chemins locaux et distants récents par hôte. Les réglages de tri sont aussi mémorisés par hôte pour les deux volets.

## Permission de stockage Android

Sur les versions d'Android qui restreignent la navigation directe dans les fichiers, Mobile SSH peut demander un accès au stockage avant que le volet local puisse parcourir les fichiers du téléphone. Si vous ignorez ou refusez cette permission, la navigation distante peut toujours fonctionner, mais les chemins locaux d'envoi et de téléchargement peuvent être limités.

L'importation de la clé privée est distincte du transfert de fichiers et utilise le sélecteur de fichiers d'Android.

## Envoyer des fichiers

1. Ouvrez le volet local.
2. Naviguez jusqu'au fichier à envoyer.
3. Choisissez l'envoi.
4. Confirmez la destination distante.
5. Surveillez la file de transfert pour la progression et la fin.

Les envois utilisent la connexion SSH/SFTP existante. Si la connexion tombe, réessayez après reconnexion.

## Télécharger des fichiers

1. Ouvrez le volet distant.
2. Naviguez jusqu'au fichier à télécharger.
3. Choisissez le téléchargement.
4. Confirmez la destination locale.
5. Surveillez la file de transfert pour la progression et la fin.

Les téléchargements volumineux doivent se faire sur un réseau stable lorsque c'est possible.

## Actions sur les fichiers distants

Selon l'élément distant sélectionné, Mobile SSH peut afficher des actions telles que :

- Télécharger.
- Renommer.
- Supprimer.
- Créer un fichier ou un répertoire.
- Modifier un fichier texte.
- Voir les détails du fichier.

Les détails d'un fichier distant peuvent inclure les bits de permission, le propriétaire, le groupe et les valeurs de permission en octal. Utilisez ces détails avant de modifier des fichiers du serveur gérés par un autre processus ou un outil de déploiement.

## Tri et chemins récents

Chaque volet peut trier par nom ou par date, en ordre croissant ou décroissant. Mobile SSH stocke les modes de tri local et distant sélectionnés par hôte, ainsi que les chemins récents, afin que les transferts répétés vers le même serveur commencent à des emplacements familiers.

## File de transfert

Les transferts sont mis en file et affichés par statut. La zone de journal sépare les transferts en file, échoués et réussis. Les transferts échoués indiquent un motif lorsque l'opération SFTP sous-jacente en fournit un.

## Conseils pratiques

- Utilisez SFTP pour des déplacements de fichiers ponctuels ; utilisez des outils en ligne de commande comme `rsync` sur le serveur pour synchroniser de grands répertoires.
- Évitez de modifier des fichiers de production en service sans sauvegarde ni possibilité de retour arrière du déploiement.
- Si un fichier n'apparaît pas après l'envoi, actualisez le volet distant ou vérifiez le chemin de destination.
- Si l'accès au stockage Android bloque la navigation locale, accordez la permission dans les Réglages d'Android et rouvrez le transfert de fichiers.
