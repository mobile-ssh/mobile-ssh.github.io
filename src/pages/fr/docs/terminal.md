---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Commandes du terminal Mobile SSH, touches supplémentaires, volets, défilement, tmux, gestionnaires herdr et Zellij, alertes d'agent, actions de copie et réglages du clavier."
---

# Terminal

Le terminal de Mobile SSH est conçu pour une utilisation sur téléphone et tablette. Il combine une zone de terminal, une rangée de touches supplémentaires, des volets multi-sessions, la gestion du défilement et un comportement de reconnexion.

## Bases du terminal

- Le terminal utilise un comportement de type xterm, avec prise en charge des couleurs et gestion des touches de curseur.
- Le tampon de défilement conserve 5000 lignes par défaut, et peut être réglé à 1 000, 10 000 ou 50 000 lignes dans Settings.
- Touchez un volet pour le sélectionner avant de taper.
- Pincez un volet du terminal pour modifier la taille du texte. Mobile SSH redimensionne le PTY distant une fois le geste stabilisé.
- Touchez deux fois un volet (ou utilisez sa commande d'agrandissement) pour passer en plein écran. Utilisez Retour sur Android, ou la commande de réduction sur iOS, pour revenir à la grille.

## Grille multi-sessions

Mobile SSH peut exécuter jusqu'à huit sessions SSH simultanément. Chaque session apparaît comme un volet dans la grille de terminaux. Touchez un volet pour le sélectionner, ou utilisez **+ Add Session** pour démarrer une autre connexion.

L'en-tête du volet indique où vous êtes. Sur Android, il affiche le répertoire de travail réel du volet, demandé à tmux ou signalé par le shell via OSC 7 et rafraîchi tant que l'app est ouverte ; sur iOS, il affiche le titre défini par la machine distante, à défaut `user@host:port`.

Fermer un volet déconnecte cette session SSH. Revenir à l'écran d'accueil garde les sessions actives disponibles via **Active Sessions**.

## Eternal Terminal (ET)

Chaque serveur enregistré peut utiliser l'un des deux transports, choisi avec le sélecteur **Transport** lorsque vous ajoutez ou modifiez un serveur :

- **SSH** — une connexion SSH standard (par défaut).
- **Eternal Terminal** — une session ET qui survit aux coupures réseau, à la mise en veille de l'appareil et aux changements d'adresse IP sans redémarrer votre shell.

ET garde la session vivante sur le serveur : quand votre téléphone change de réseau ou sort de veille, Mobile SSH se rattache au même shell en cours d'exécution au lieu d'en ouvrir un nouveau. C'est donc un bon choix pour les données mobiles, les bascules Wi-Fi/réseau cellulaire et les commandes de longue durée.

ET nécessite un processus `etserver` sur l'hôte. Si le serveur n'en a pas, Mobile SSH peut l'installer et le démarrer pour vous via la connexion SSH existante — aucune configuration manuelle du serveur n'est nécessaire. Une fois ET disponible, connectez-vous avec le transport **Eternal Terminal** sélectionné.

## Rangée de touches supplémentaires

Les deux plateformes mettent à portée une rangée de treize touches de terminal — celles qui sont peu pratiques ou absentes sur un clavier tactile. Sur Android, c'est une bande en bas de la session (qui se masque quand un clavier matériel est branché) ; sur iOS, elle se place au-dessus du clavier logiciel.

Les deux jeux par défaut ont la même taille, mais ne sont pas identiques :

| | Android | iOS |
|---|---|---|
| Par défaut | `ESC` `TAB` `CTRL` flèches `HOME` `PGUP` `END` `PGDN` `⌫` `⌨` | `ESC` `TAB` `CTRL` `⇧` flèches `HOME` `END` `PGUP` `PGDN` `⌨` |
| Différence | a un retour arrière, pas de Shift | a un Shift persistant, pas de retour arrière |

**La rangée ne défile jamais.** Quand les touches cessent de tenir dans la largeur, elles se partagent l'espace équitablement et passent à une deuxième ligne ; ce qui dépasse encore est replié dans un menu de débordement `⋯`. Rien n'est caché derrière un balayage ni rogné au bord de l'écran, et un modificateur armé s'applique toujours à une touche choisie dans le menu de débordement.

`CTRL` agit comme un modificateur persistant : touchez `CTRL`, puis tapez `C` pour envoyer Ctrl-C. `Shift` est plus persistant sur iOS que sur Android — sur iOS, il met aussi en majuscule le prochain caractère tapé sur le clavier logiciel, alors que sur Android il ne s'applique qu'aux touches de la barre elle-même (`Shift`+`Tab`, `Shift`+flèches).

Maintenez une touche comme une flèche ou `PGDN` et elle se répète.

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
- Sur Android et iOS, les caractères CJK larges, les emoji et les caractères combinants (grappes de graphèmes et liants de largeur nulle) sont mesurés et affichés correctement, et une **Nerd Font** intégrée dessine les glyphes d'icônes powerline, starship, devicon et Material Design que la police système afficherait autrement comme des cases vides.

## Intégration shell et images en ligne

- **Intégration shell (OSC 133) :** lorsque votre shell émet les marqueurs d'invite OSC 133, Mobile SSH peut passer d'une invite à l'autre et vous alerter lorsqu'une commande longue se termine. Fonctionne sur Android et iOS. Aucune des deux apps n'injecte les marqueurs — c'est à votre shell de les émettre (un hook `PROMPT_COMMAND`/`precmd`, ou starship). Sur Android, la navigation entre invites est désactivée tant que vous ne l'activez pas dans **Settings → Shell integration** ; sur iOS, le menu apparaît de lui-même dès que des marqueurs commencent à arriver.
- **Sélectionner la sortie :** touchez n'importe où dans la sortie d'une commande et sélectionnez tout ce bloc — l'erreur de compilation d'il y a 300 lignes, pas seulement la dernière commande — puis copiez-la, partagez-la ou étendez-la.
- **Images en ligne :** les programmes qui utilisent le protocole graphique Kitty dessinent des images directement dans le terminal, sur Android et iOS. Les images survivent au zoom par pincement et au reformatage : elles sont mesurées en cellules et suivent leur ligne, au lieu d'être abandonnées en laissant un trou. C'est une fonctionnalité de l'écran principal ; elles sont effacées lorsqu'une TUI en plein écran prend la main.
- **Glyphes mosaïques (Android) :** les caractères de blocs, braille, sextants et octants sont dessinés par l'application elle-même plutôt que demandés à une police, si bien que `chafa`, `timg` et l'art ANSI pavent la grille exactement — pas de coutures, pas de cases vides, quelle que soit la police choisie.
- **Répertoire de travail réel (Android) :** l'en-tête du volet indique où le volet se trouve réellement, information demandée à tmux ou signalée par le shell via OSC 7, plutôt que ce que la dernière invite a affiché par hasard.

## Apparence et touches

Sur Android et iOS, Settings vous permet d'adapter le terminal :

- **Police :** choisissez la police monospace du système, JetBrains Mono ou Source Code Pro.
- **Jeu de couleurs :** Default, Solarized Dark ou Light, Gruvbox, Dracula ou Nord — appliqué en direct aux volets ouverts.
- **Rangée de touches supplémentaires :** ajoutez, supprimez, réorganisez et masquez des touches, définissez vos propres touches de séquences d'échappement et réinitialisez aux valeurs par défaut, avec un aperçu en direct qui montre exactement le découpage de rangée que vous obtiendrez. Android place cela dans un onglet **Keys** ; iOS sous **Extra keys → Customize keys**.
- **Ajouter depuis les préréglages :** une palette d'environ 45 touches en six groupes — `F1`–`F12`, des combinaisons Ctrl telles que `^C` `^D` `^Z` `^R` `^L`, des symboles comme `|` `~` `/` `_` `:` et des modificateurs. `F1`–`F12` sont envoyées comme des séquences d'échappement ordinaires : aucune combinaison `FN` n'est nécessaire. Android propose en plus une touche 📎 **Attach a file** qui ouvre le sélecteur de fichiers et téléverse dans la session en cours ; iOS propose `INS`, `DEL` et une touche `FN` qui révèle une rangée de chiffres.
- **Taille du scrollback :** 1 000, 5 000, 10 000 ou 50 000 lignes (5 000 par défaut). S'applique aux nouveaux volets.
- **Taille du texte :** un curseur, en plus du zoom par pincement.
- **Thème :** Système, Clair ou Sombre pour toute l'application.

La réinitialisation restaure les valeurs par défaut livrées plutôt que de figer la liste d'aujourd'hui : les améliorations d'une version ultérieure vous parviennent donc quand même. Les modifications s'appliquent en direct aux volets déjà ouverts.

## Défilement

Mobile SSH oriente les gestes de défilement selon l'état du terminal :

- Dans la sortie normale du shell, le balayage fait défiler le tampon de défilement local.
- Dans les applications de terminal en mode souris, le défilement envoie des séquences d'échappement de molette.
- Dans les applications à écran alternatif sans mode souris, comme de nombreuses sessions tmux, le défilement entre dans le mode copie de tmux et envoie des commandes de défilement par lignes.

Sur Android, un toucher dans un programme qui suit la souris est transmis comme un clic gauche sur cette cellule : htop, vim et les volets à focus au clic répondent donc au toucher. Sur iOS, un toucher dans le même programme fait apparaître le clavier au lieu de cliquer ; seul le défilement à la molette est signalé.

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

## Gestionnaire tmux

Mobile SSH inclut un gestionnaire tmux qui vous permet de parcourir et de piloter tmux sans taper de combinaisons de préfixe. Ouvrez-le avec le bouton **Tmux** depuis une session connectée. Il liste, en trois sections :

- **Sessions** — toutes les sessions tmux du serveur.
- **Fenêtres** — les fenêtres de la session sélectionnée.
- **Volets** — les volets de la fenêtre sélectionnée.

Depuis le gestionnaire, vous pouvez :

- **Attacher** une session au terminal courant.
- **Créer** une nouvelle session ou fenêtre, et les **renommer**.
- **Diviser** un volet horizontalement ou verticalement, **zoomer** un volet et **tuer** sessions, fenêtres ou volets.
- **Trier** les sessions par nom ou par date de création.

Un 🔔 marque toute session dont l'agent attend une entrée : vous repérez ainsi d'un coup d'œil une exécution de Claude Code ou de Codex en pause et vous vous y attachez. Cela complète les indications de rattachement ci-dessus : la logique de rattachement restaure automatiquement votre dernière session à la reconnexion, tandis que le gestionnaire vous donne un contrôle manuel complet.

Les deux plateformes peuvent aussi gérer plusieurs serveurs tmux (sockets) sur le même hôte, et trier les sessions par nom ou par date de création.

## Herdr et Zellij (Android)

Android livre la même idée pour deux autres multiplexeurs. Chacun a sa propre icône dans la barre d'outils, et **une icône n'apparaît qu'une fois que l'application a réellement trouvé ce programme sur le serveur** — la barre d'outils vous dit donc ce qui y est installé sans que vous ayez à lancer `which`.

- **Herdr** a son propre vocabulaire : sessions, espaces de travail, onglets, volets. Chaque volet affiche l'état de son agent — au travail, a besoin de vous, inactif — et un agent bloqué peut recevoir une réponse directement depuis la liste. L'état propre à herdr alimente le badge d'agent de l'application : cela fonctionne donc sans aucun hook installé sur le serveur.
- **Zellij** liste sessions, onglets et volets, avec attacher, renommer, tuer et diviser. Les sessions tuées restent listées, si bien que s'y attacher les ressuscite, tandis que la suppression les oublie définitivement. Le détail des onglets et des volets nécessite Zellij 0.44 ou plus récent ; sur une version antérieure, la page affiche les noms d'onglets et explique pourquoi. Les divisions nécessitent un client attaché à la session, et la page l'explique au lieu de proposer un bouton qui échouerait.

Si herdr ou Zellij est installé mais absent du `PATH` du shell de connexion, la page propose de l'ajouter.

Chaque serveur enregistré dispose d'un réglage **Attach on connect** : **Auto (detect)**, **Nothing**, **tmux**, **herdr** ou **Zellij**. Auto choisit celui que vous avez utilisé en dernier sur ce serveur, puis celui qui a des sessions actives, puis celui qui est installé — et ne s'attache à rien plutôt que de deviner tant qu'il n'a pas sondé le serveur.

L'app iOS ne gère aujourd'hui que tmux.

## Agent alerts

Mobile SSH vous prévient quand un agent de codage IA distant — Claude Code, Codex, Gemini — est bloqué et vous attend. Il ne le devine pas en lisant la sortie de votre terminal. Il existe deux chemins, qui fonctionnent à des niveaux de détail différents.

### La cloche

D'emblée, une cloche de terminal provenant d'une session que vous ne regardez pas déclenche une alerte, tout comme les séquences d'échappement de notification de bureau (OSC 9, OSC 777) que de nombreux outils émettent déjà. Les cloches qui arrivent juste après une frappe sont ignorées : le bruit ordinaire de la complétion du shell ne vous alerte donc pas.

Cela ne demande aucune configuration, mais l'application sait seulement que *quelque chose* a sonné.

### Le hook d'agent

Pour que l'application sache *quel* agent attend et *ce qu'*il fait, installez le hook d'agent sur le serveur :

- **iOS :** Settings → **Agent alerts** → **Install Agent Hook**. Si plusieurs serveurs sont connectés, il demande lequel.
- **Android :** appuyez longuement sur l'en-tête du volet d'une session et choisissez **Install agent hooks**.

Cela écrit un petit script shell dans `~/.mobile-ssh/agent-hook.sh` sur ce serveur. Il est indépendant de l'agent — il prend des arguments en ligne de commande plutôt que d'analyser le format d'un fournisseur en particulier — donc tout ce qui peut exécuter une commande peut s'y signaler. Supprimer le fichier suffit à le désinstaller proprement.

Une fois qu'un agent se signale via le hook :

- L'en-tête du volet affiche `claude · needs you`, ou nomme l'outil qu'il exécute.
- Un volet dont l'agent est bloqué reçoit une bordure ambre. Le volet que vous regardez déjà est laissé tranquille — l'invite est juste là.
- Un badge dans la barre d'outils compte les agents en attente sur toutes les connexions, plafonné à `9+`.
- L'écran **Agents** liste chaque agent de chaque connexion, avec ce qu'il fait et depuis combien de temps il attend.

### Répondre sans taper

Quand un agent pose une question à choix fixes, l'application affiche un bouton par option — jusqu'à six — dans la liste Agents. Sur Android, vous pouvez aussi toucher la pastille d'agent dans l'en-tête d'un volet.

Votre réponse n'est pas saisie dans la session. Elle est écrite dans un fichier via un canal séparé et récupérée par le hook : répondre ne peut donc pas corrompre ce qui est à l'écran. L'application refuse d'envoyer une option que l'invite ne proposait pas réellement, et vous dit clairement si la connexion est tombée entre-temps au lieu d'échouer en silence.

### Réglages

Les alertes sont activées par défaut sur les deux plateformes, avec des interrupteurs distincts pour la notification, le son, la vibration et le fait que la session en cours de consultation doive alerter elle aussi.

Un réglage par défaut mérite d'être connu : **le son est limité aux écouteurs**. Sans rien de branché ni d'appairé, une alerte notifie et vibre mais ne joue aucun son. Désactivez ce réglage si vous voulez entendre l'alerte sur le haut-parleur du téléphone.

Il n'y a pas de réglage de sensibilité ni de sélecteur de son — les contrôles sont de simples activer/désactiver.

## Programmes de terminal en plein écran

Pour les programmes tels que Vim, less, htop, les outils ncurses et les volets tmux :

- L'entrée passe directement au programme — il n'y a aucun tampon d'autocorrection ou de suggestions pour interférer.
- Utilisez la rangée de touches supplémentaires pour `ESC`, les flèches, `PGUP` et `PGDN`.
- Utilisez le zoom par pincement si le texte est trop petit, puis attendez un instant que la taille du terminal distant se stabilise.
