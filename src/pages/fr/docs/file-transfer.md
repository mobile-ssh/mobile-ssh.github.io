---
layout: ../../../layouts/DocLayout.astro
title: "Transfert de fichiers"
description: "Guide de transfert de fichiers SFTP de Mobile SSH pour les fichiers locaux et distants, l'envoi, le téléchargement, le tri et les permissions."
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

L'app mémorise les dix derniers chemins distants par hôte — ouvrez-les depuis l'en-tête du volet distant sur Android, ou l'icône d'horloge sur iOS. Les réglages de tri sont mémorisés par hôte pour les deux volets. Il n'y a pas d'historique des chemins locaux : sur Android, le volet local est le dossier que vous avez accordé, et sur iOS c'est la zone de documents propre à l'app.

L'écran de transfert de fichiers suit le thème clair ou sombre de votre système, pour rester cohérent avec le reste de Mobile SSH.

### Où chaque session s'ouvre (Android)

Ouvrir le transfert de fichiers depuis un volet attaché à une session tmux replace le volet distant là où **cette session** travaillait en dernier, avec le nom de la session dans l'en-tête du volet. Une session depuis laquelle vous ne l'aviez encore jamais ouvert démarre dans les dossiers que vous utilisez le plus sur cet hôte, puis le dernier répertoire de l'hôte, puis votre répertoire personnel.

Si un répertoire mémorisé a depuis été supprimé, l'app descend cette liste jusqu'à en trouver un qui s'affiche réellement, au lieu de vous laisser sur une erreur — et elle ne réécrit pas le chemin cassé. Sur iOS, un seul répertoire distant est mémorisé par hôte.

## Accès au stockage

Mobile SSH ne demande d'autorisation de stockage globale sur aucune des deux plateformes.

Sur Android, vous accordez **un seul dossier** avec le sélecteur de dossiers du système, et les téléchargements y sont écrits — à un endroit que toutes les autres applications peuvent déjà lire. L'autorisation persiste d'un lancement à l'autre.

Sur iOS, le volet local est la zone de documents de l'app, et les fichiers y entrent via les sélecteurs de documents et de photos du système.

Sur iOS, le volet local fonctionne avec la zone de documents propre à l'app, et vous importez des fichiers via les sélecteurs de documents et de photos du système — y compris l'importation en sélection multiple de photos et de documents. Aucune permission de stockage distincte n'est nécessaire.

L'importation de la clé privée est distincte du transfert de fichiers et utilise le sélecteur de fichiers du système.

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

## Copier des dossiers entiers

Les envois et les téléchargements ne se limitent pas aux fichiers isolés. Choisissez un dossier et Mobile SSH copie toute l'arborescence dans les deux sens — du téléphone vers l'hôte distant et de l'hôte distant vers le téléphone — en créant d'abord les répertoires de destination, puis en mettant chaque fichier en file d'attente. Un sous-répertoire illisible n'interrompt pas le reste de la copie ; sur Android, il est signalé comme une ligne en échec indiquant « Can't list directory », tandis qu'iOS poursuit sans lister ce qu'il a ignoré.

## Actions sur les fichiers distants

Selon l'élément distant sélectionné, Mobile SSH peut afficher des actions telles que :

- Télécharger, ou **Copy to phone** sur Android.
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

Les transferts sont mis en file et affichés par statut, et le journal montre chaque transfert et se fait défiler — Android les répartit en onglets Queued / Failed / Successful, iOS en Active / Failed / Done. Les transferts échoués indiquent un motif lorsque l'opération SFTP sous-jacente en fournit un. Sur iOS, le fichier en cours de transfert reste en haut de l'onglet Active, et une ligne peut être annulée en cours de route.

## Sortir des fichiers de l'app

- **Android :** les téléchargements atterrissent dans le dossier que vous avez accordé, ils sont donc déjà visibles par toutes les autres applications. **Open in another app** est disponible dans les deux volets ; un fichier distant est d'abord téléchargé, puis transmis.
- **iOS :** Mobile SSH apparaît dans l'app Fichiers sous **Sur mon iPhone**, si bien que tout ce qui se trouve dans le volet My Phone est accessible depuis Mail, les sélecteurs et d'autres applications. Appuyez longuement sur un fichier téléchargé et choisissez **Open in another app** pour le transmettre, l'envoyer par AirDrop ou l'enregistrer ailleurs.

## Envoyer un fichier dans une session (Android)

Android accepte les fichiers partagés vers lui depuis n'importe quelle autre application : partagez vers Mobile SSH et le fichier est téléversé dans `~/.cache/mobile-ssh` sur l'hôte du volet, son chemin distant étant saisi à l'invite pour que vous puissiez l'utiliser immédiatement. Le bouton 📎 de la barre d'outils du terminal fait la même chose depuis le sélecteur de fichiers du système, et les deux acceptent plusieurs fichiers à la fois.

Sur iOS, importez des fichiers dans le volet local avec le bouton ＋ et envoyez-les depuis là.

## Conseils pratiques

- Utilisez SFTP pour des déplacements de fichiers ponctuels ; utilisez des outils en ligne de commande comme `rsync` sur le serveur pour synchroniser de grands répertoires.
- Évitez de modifier des fichiers de production en service sans sauvegarde ni possibilité de retour arrière du déploiement.
- Si un fichier n'apparaît pas après l'envoi, actualisez le volet distant ou vérifiez le chemin de destination.
- Si le volet local d'Android est vide, choisissez un dossier avec **Pick folder** — l'app n'a accès qu'au dossier que vous lui accordez. Sur iOS, utilisez plutôt les sélecteurs pour ajouter des fichiers au volet local.
