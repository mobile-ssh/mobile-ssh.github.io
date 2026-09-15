---
layout: ../../../layouts/DocLayout.astro
title: "Transfert de fichiers"
description: "Transferts SFTP Mobile SSH, dossiers mémorisés, répertoires des sessions tmux, files d'attente, permissions et partage vers le terminal."
---

# Transfert de fichiers

Mobile SSH inclut un écran de transfert de fichiers SFTP lié à la connexion SSH active. Il est destiné à la maintenance rapide d'un serveur depuis votre téléphone ou votre tablette : envoyer une configuration, télécharger un journal, renommer un fichier distant ou inspecter des permissions sans quitter l'app.

## Ouvrir le transfert de fichiers

1. Connectez-vous à un serveur SSH.
2. Sélectionnez le volet de terminal connecté.
3. Ouvrez **Transfer** depuis la barre d'outils du terminal, ou appuyez longuement sur l'en-tête du volet lorsque l'écran actuel le permet.
4. L'écran de transfert de fichiers s'ouvre avec un volet local et un volet distant.

S'il n'y a pas de session SSH active, le transfert de fichiers ne peut pas s'ouvrir.

## Volets local et distant

L'écran de transfert de fichiers comporte deux volets de navigation :

- **Volet local :** le stockage du téléphone.
- **Volet distant :** les fichiers du serveur via SFTP.

L'app mémorise les chemins distants récents et le tri par hôte. Ouvrez ces chemins depuis l'en-tête distant sur Android ou l'horloge sur iOS. Le volet local montre le dossier choisi ; iOS utilise Documents de l'app jusqu'à ce que vous en choisissiez un autre.

L'écran de transfert de fichiers suit le thème clair ou sombre de votre système, pour rester cohérent avec le reste de Mobile SSH.

### Où chaque session s'ouvre

Sur les deux plateformes, ouvrir Transfert de fichiers depuis tmux restaure le répertoire associé à **cette session et ce socket**. Une nouvelle session essaie les dossiers fréquents de l'hôte, puis les autres emplacements mémorisés ou le répertoire de connexion.

Si un répertoire manque ou est inaccessible, le navigateur essaie l'emplacement utilisable suivant. Une panne de connexion est signalée, sans la confondre avec un dossier absent. Actualiser ne compte pas comme une nouvelle visite.

## Accès au stockage

Mobile SSH ne demande d'autorisation de stockage globale sur aucune des deux plateformes.

Sur Android, vous accordez **un seul dossier** avec le sélecteur de dossiers du système, et les téléchargements y sont écrits — à un endroit que toutes les autres applications peuvent déjà lire. L'autorisation persiste d'un lancement à l'autre.

Sur iOS, **Mon téléphone → Choisir un dossier local** autorise un dossier de Fichiers, notamment iCloud Drive et les fournisseurs compatibles. Le choix persiste. **Utiliser le dossier de l'app** revient à Documents de Mobile SSH. Si le dossier devient indisponible, sélectionnez-le à nouveau ou revenez explicitement au dossier de l'app ; les téléchargements ne sont pas redirigés silencieusement. L'autorisation de dossier n'est pas sauvegardée.

Les sélecteurs de documents et photos iOS importent aussi plusieurs éléments. Un conflit de nom propose **Remplacer**, **Conserver les deux** ou **Annuler**. Un fichier déjà situé à destination reste intact.

L'importation de la clé privée est distincte du transfert de fichiers et utilise le sélecteur de fichiers du système.

## Envoyer des fichiers

1. Ouvrez le volet local.
2. Naviguez jusqu'au fichier à envoyer.
3. Choisissez l'envoi.
4. Confirmez la destination distante.
5. Surveillez la file de transfert pour la progression et la fin.

Les envois suivent la route SSH du serveur choisi, y compris ses bastions enregistrés. Après une coupure, réessayez après reconnexion.

## Télécharger des fichiers

1. Ouvrez le volet distant.
2. Naviguez jusqu'au fichier à télécharger.
3. Choisissez le téléchargement.
4. Confirmez la destination locale.
5. Surveillez la file de transfert pour la progression et la fin.

Les téléchargements volumineux doivent se faire sur un réseau stable lorsque c'est possible.

## Copier des dossiers entiers

Les envois et les téléchargements ne se limitent pas aux fichiers isolés. Choisissez un dossier et Mobile SSH copie toute l'arborescence dans les deux sens — du téléphone vers l'hôte distant et de l'hôte distant vers le téléphone — en créant d'abord les répertoires de destination, puis en mettant chaque fichier en file d'attente. Un sous-répertoire illisible n'interrompt pas le reste de la copie ; sur Android, il est signalé comme une ligne en échec indiquant « Can't list directory », tandis qu'iOS poursuit sans lister ce qu'il a ignoré.

## Actions sur les fichiers distants

Selon l'élément distant sélectionné, Mobile SSH peut afficher des actions telles que :

- **Copier sur le téléphone** pour télécharger.
- Copier ou déplacer **sur le serveur** — `cp -r` / `mv` s'exécutent sur l'hôte, sans que les octets passent par votre téléphone.
- Renommer.
- Supprimer.
- Créer un fichier ou un répertoire.
- Modifier un fichier texte.
- Compresser en `.tar.gz`.
- Permissions — changer le mode et le propriétaire, avec une option pour appliquer à tout un dossier.
- Ouvrir dans une autre application.
- Voir les détails du fichier.

Les détails d'un fichier distant peuvent inclure les bits de permission, le propriétaire, le groupe et les valeurs de permission en octal. Utilisez ces détails avant de modifier des fichiers du serveur gérés par un autre processus ou un outil de déploiement.

Les tailles de fichiers sont affichées en unités binaires, pour correspondre à ce qu'affiche `ls -h` dans le terminal de l'onglet d'à côté.

## Tri et chemins récents

Chaque volet peut trier par nom ou par date, en ordre croissant ou décroissant. Mobile SSH stocke les modes de tri local et distant sélectionnés par hôte, ainsi que les chemins récents, afin que les transferts répétés vers le même serveur commencent à des emplacements familiers.

## File de transfert

Les transferts sont classés par état : En attente / Échec / Réussite sur Android, Actifs / Échec / Terminés sur iOS. Les échecs affichent le motif disponible. Sur iOS, le transfert courant reste en tête d'Actifs et peut être annulé.

Sur iOS, les transferts en attente conservent leur dossier d'origine même si vous naviguez ailleurs. Les téléchargements se terminent dans un espace temporaire avant remplacement ; annulation ou échec préserve le fichier existant. Si la destination a changé après l'accord d'écrasement, l'app s'arrête.

## Sortir des fichiers de l'app

- **Android :** les téléchargements atterrissent dans le dossier que vous avez accordé, ils sont donc déjà visibles par toutes les autres applications. **Open in another app** est disponible dans les deux volets ; un fichier distant est d'abord téléchargé, puis transmis.
- **iOS :** **Ouvrir dans une autre app** concerne les fichiers locaux et distants. Un fichier distant est téléchargé avant l'ouverture de la feuille de partage. Le dossier de l'app apparaît sous **Sur mon iPhone → Mobile SSH** ; un dossier externe reste à son emplacement Fichiers d'origine.

## Envoyer un fichier dans une session

Les deux plateformes acceptent les fichiers partagés par d'autres apps et proposent 📎 **Joindre un fichier** dans le terminal. Ils sont envoyés dans `~/.cache/mobile-ssh` de l'hôte choisi ; leurs chemins peuvent être insérés à l'invite sans appuyer sur Entrée. Plusieurs fichiers sont acceptés.

Sur Android, le partage vise la session en cours. Sur iOS, le trombone propose **Photothèque** ou **Fichiers**. L'extension de partage iOS peut envoyer vers un serveur SSH enregistré même lorsque Mobile SSH est fermé ; les profils Eternal Terminal sont exclus. Vérifiez d'abord toute identité inconnue dans l'app principale.

Après un envoi par l'extension iOS, les chemins sont copiés au presse-papiers et attendent un volet connecté à ce serveur pour être insérés. Ils ne sont jamais insérés dans un volet connecté à un autre hôte.

## Conseils pratiques

- Utilisez SFTP pour des déplacements de fichiers ponctuels ; utilisez des outils en ligne de commande comme `rsync` sur le serveur pour synchroniser de grands répertoires.
- Évitez de modifier des fichiers de production en service sans sauvegarde ni possibilité de retour arrière du déploiement.
- Si un fichier n'apparaît pas après l'envoi, actualisez le volet distant ou vérifiez le chemin de destination.
- Si le volet local Android est vide, utilisez **Choisir un dossier**. Sur iOS, choisissez **Choisir un dossier local**, **Utiliser le dossier de l'app** ou les sélecteurs d'importation selon l'emplacement souhaité.
