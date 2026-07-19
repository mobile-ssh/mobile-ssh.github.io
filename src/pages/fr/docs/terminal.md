---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Commandes du terminal Mobile SSH, touches supplémentaires, volets, défilement, comportement de tmux, actions de copie, alertes d'agent et réglages du clavier."
---

# Terminal

Le terminal de Mobile SSH est conçu pour une utilisation sur téléphone et tablette. Il combine une zone de terminal, une rangée de touches supplémentaires, des volets multi-sessions, la gestion du défilement et un comportement de reconnexion.

## Bases du terminal

- Le terminal utilise un comportement de type xterm, avec prise en charge des couleurs et gestion des touches de curseur.
- Le tampon de défilement conserve jusqu'à 5000 lignes.
- Touchez un volet pour le sélectionner avant de taper.
- Pincez un volet du terminal pour modifier la taille du texte. Mobile SSH redimensionne le PTY distant une fois le geste stabilisé.
- Touchez deux fois un volet (ou utilisez sa commande d'agrandissement) pour passer en plein écran. Utilisez Retour sur Android, ou la commande de réduction sur iOS, pour revenir à la grille.

## Grille multi-sessions

Mobile SSH peut exécuter jusqu'à huit sessions SSH simultanément. Chaque session apparaît comme un volet dans la grille de terminaux. L'en-tête du volet affiche la cible ou le titre actuel. Touchez un volet pour le sélectionner, ou utilisez **+ Add Session** pour démarrer une autre connexion.

Fermer un volet déconnecte cette session SSH. Revenir à l'écran d'accueil garde les sessions actives disponibles via **Active Sessions**.

## Rangée de touches supplémentaires

Sur Android comme sur iOS, la rangée de touches supplémentaires apparaît au-dessus du clavier à l'écran et fournit des touches de terminal peu pratiques sur les claviers tactiles :

- `ESC`
- `TAB`
- `CTRL`
- `Shift`
- Touches fléchées
- `HOME`
- `END`
- `PGUP`
- `PGDN`
- Bascule du clavier

`CTRL` et `Shift` agissent comme des modificateurs persistants pour la prochaine entrée compatible. Par exemple, touchez `CTRL`, puis tapez `C` pour envoyer Ctrl-C.

## Comportement du clavier

Le terminal utilise une connexion native en pass-through vers le clavier à l'écran : chaque caractère est envoyé au shell distant au fur et à mesure de la frappe, avec l'autocorrection et les suggestions prédictives désactivées, de sorte que le clavier ne réécrit jamais l'entrée avant qu'elle n'atteigne le shell. Cela garde Vim, tmux, htop, less, les shells aux combinaisons de touches inhabituelles et les invites de mot de passe distantes prévisibles — il n'y a aucun tampon de suggestions à désactiver.

- **Toucher le terminal pour afficher le clavier :** lorsqu'il est activé, toucher le terminal demande au système d'afficher le clavier à l'écran.

La dictée vocale du clavier logiciel fonctionne toujours : le texte dicté est transmis directement au shell, comme toute autre saisie.

## Claviers matériels

Les claviers externes et Bluetooth pilotent le terminal directement sur Android comme sur iOS. Au-delà des caractères ordinaires, Mobile SSH gère les touches fléchées, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, les touches de fonction `F1`–`F12`, les combinaisons `Ctrl`+touche et `Alt`/`Option` comme Meta, ainsi que `Shift`+`Tab`. Les touches de modification se combinent avec les modificateurs persistants de la rangée de touches supplémentaires.

## Coller

Le collage dans un programme qui le demande (bash, Vim et d'autres applications compatibles bracketed paste) est encadré par des marqueurs de bracketed paste, de sorte que le contenu multi-lignes du presse-papiers est inséré comme texte au lieu d'être exécuté automatiquement ligne par ligne. Seuls les vrais collages sont encadrés ; le texte saisi ou dicté n'est pas modifié.

## Sélectionner, copier, partager

Appuyez longuement dans le terminal pour sélectionner le mot sous votre doigt, puis faites glisser les poignées pour ajuster. La barre de sélection propose trois actions :

- **Copier** — place le texte sélectionné dans le presse-papiers du système. La sélection reste surlignée ensuite, pour que vous puissiez la partager, la recopier ou l'étendre.
- **Partager** — transmet le texte sélectionné à la feuille de partage du système (mail, notes, messagerie, etc.).
- **Tout sélectionner** — étend la sélection à tout le tampon visible du terminal, puis Copier ou Partager.

## Rechercher dans le terminal

Recherchez dans tout le tampon du terminal — le scrollback et l'écran visible — et sautez d'une occurrence à l'autre. Ouvrez la recherche depuis les contrôles du terminal, tapez une requête et parcourez les correspondances. Cela fonctionne à la fois sur Android et iOS.

## Couleur, italiques et presse-papiers distant

- Le terminal affiche les **couleurs vraies 24 bits** et les **italiques**, si bien que les invites thématisées, la coloration syntaxique et les TUI s'affichent comme sur le bureau.
- **Presse-papiers OSC 52 :** quand un programme distant copie du texte (tmux `set-clipboard`, un yank OSC 52 de Vim/Neovim), il arrive dans le presse-papiers de votre téléphone — vous pouvez ainsi copier depuis le serveur et coller dans une application locale.
- Sur Android, une **Nerd Font** intégrée dessine les glyphes d'icônes powerline, starship, devicon et Material Design que la police système afficherait autrement comme des cases vides, et les caractères CJK larges, les emoji et les caractères combinants sont mesurés correctement.

## Défilement

Mobile SSH oriente les gestes de défilement selon l'état du terminal :

- Dans la sortie normale du shell, le balayage fait défiler le tampon de défilement local.
- Dans les applications de terminal en mode souris, le défilement envoie des séquences d'échappement de molette.
- Dans les applications à écran alternatif sans mode souris, comme de nombreuses sessions tmux, le défilement entre dans le mode copie de tmux et envoie des commandes de défilement par lignes.

Si vous tapez pendant que vous avez fait défiler vers l'arrière, Mobile SSH revient à la vue en direct du terminal.

## Comportement de tmux

Mobile SSH observe les commandes tmux sortantes d'attache et de nouvelle session, telles que :

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Lorsqu'une connexion tombe alors que vous étiez dans tmux, l'application peut mémoriser le nom de la dernière session tmux de ce serveur et tenter de s'y rattacher après reconnexion. Si aucun nom de session explicite n'a été observé mais que l'application sait que vous étiez dans une session de type tmux à écran alternatif, elle peut tenter un `tmux attach` générique.

Ce comportement est au mieux. Si la session tmux distante n'existe plus, le shell distant reste disponible.

## Agent alerts

Mobile SSH peut surveiller la sortie du terminal de la session active à la recherche de motifs indiquant qu'un agent distant attend une entrée. Lorsqu'une correspondance est détectée — par exemple, Claude Code ou Codex marquant une pause pour une invite — l'application envoie une notification avec son et vibration optionnels.

Pour configurer :

1. Ouvrez **Settings** depuis l'écran d'accueil.
2. Activez **Agent alerts**.
3. Choisissez un son de notification et un schéma de vibration.

L'alerte se joue via la sortie audio active, y compris les écouteurs, ce qui vous permet de l'entendre pendant que vous regardez une vidéo ou avec le téléphone verrouillé. La notification s'affiche même lorsque Mobile SSH est en arrière-plan.

Les motifs d'alerte d'agent sont comparés à la sortie visible du terminal. Si votre outil distant affiche une ligne d'invite reconnaissable (un nom d'utilisateur, un `?`, une question entre crochets), l'application peut la détecter automatiquement. Si les alertes se déclenchent trop souvent ou pas du tout, ajustez la sensibilité dans Settings.

## Programmes de terminal en plein écran

Pour les programmes tels que Vim, less, htop, les outils ncurses et les volets tmux :

- L'entrée passe directement au programme — il n'y a aucun tampon d'autocorrection ou de suggestions pour interférer.
- Utilisez la rangée de touches supplémentaires pour `ESC`, les flèches, `PGUP` et `PGDN`.
- Utilisez le zoom par pincement si le texte est trop petit, puis attendez un instant que la taille du terminal distant se stabilise.
