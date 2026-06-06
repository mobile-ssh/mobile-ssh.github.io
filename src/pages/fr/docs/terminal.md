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
- Touchez deux fois un volet pour passer en plein écran. Utilisez Retour pour revenir à la grille.

## Grille multi-sessions

Mobile SSH peut exécuter jusqu'à huit sessions SSH simultanément. Chaque session apparaît comme un volet dans la grille de terminaux. L'en-tête du volet affiche la cible ou le titre actuel. Touchez un volet pour le sélectionner, ou utilisez **+ Add Session** pour démarrer une autre connexion.

Fermer un volet déconnecte cette session SSH. Revenir à l'écran d'accueil garde les sessions actives disponibles via **Active Sessions**.

## Rangée de touches supplémentaires

La rangée de touches supplémentaires apparaît au-dessus du clavier Android et fournit des touches de terminal peu pratiques sur les claviers tactiles :

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

Mobile SSH propose deux réglages liés au clavier :

- **Toucher le terminal pour afficher le clavier :** lorsqu'il est activé, toucher le terminal demande à Android d'afficher la méthode de saisie.
- **Suggestions du clavier :** lorsqu'elles sont activées, les claviers compatibles peuvent afficher des suggestions aux invites du shell. Désactivez-les si les suggestions gênent les programmes de terminal.

Lorsque les suggestions sont activées, Mobile SSH met en tampon le texte en cours de composition jusqu'à une limite de mot, afin que la correction du clavier puisse remplacer le mot actuel avant son envoi au shell distant. Les touches de contrôle et les combinaisons de terminal contournent ce tampon, de sorte que les raccourcis comme les commandes de préfixe tmux arrivent rapidement.

La saisie vocale (le bouton micro de Gboard) passe par le même tampon de texte en composition ; le texte dicté est donc envoyé une fois résolu, et non caractère par caractère.

## Sélectionner, copier, partager

Appuyez longuement dans le terminal pour entrer en mode sélection. La barre de sélection propose trois actions :

- **Copier** — place le texte sélectionné dans le presse-papiers d'Android.
- **Partager** — transmet le texte sélectionné à la feuille de partage d'Android (mail, notes, messagerie, etc.).
- **Tout sélectionner** — étend la sélection à tout le tampon visible du terminal, puis Copier ou Partager.

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

- Désactivez les suggestions du clavier si le clavier commence à mettre l'entrée en tampon d'une manière que le programme n'attend pas.
- Utilisez la rangée de touches supplémentaires pour `ESC`, les flèches, `PGUP` et `PGDN`.
- Utilisez le zoom par pincement si le texte est trop petit, puis attendez un instant que la taille du terminal distant se stabilise.
