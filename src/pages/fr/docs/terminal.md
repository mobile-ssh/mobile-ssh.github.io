---
layout: ../../../layouts/DocLayout.astro
title: "Terminal"
description: "Commandes du terminal Mobile SSH, clavier, gestionnaires tmux, herdr et Zellij, alertes, presse-papiers, images et bureaux distants."
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

Fermer un volet déconnecte sa session SSH. Revenir à l'accueil conserve les connexions dans **Sessions actives**. L'en-tête indique les connexions bloquées ; les réglages proposent les débits et une atténuation ou vibration facultative lorsque la liaison ne répond plus.

## Eternal Terminal (ET)

Les deux plateformes proposent ces transports dans **Transport** lors de l'ajout ou de la modification d'un serveur :

- **SSH** — une connexion SSH standard (par défaut).
- **Eternal Terminal** — une session ET qui survit aux coupures réseau, à la mise en veille de l'appareil et aux changements d'adresse IP sans redémarrer votre shell.

ET garde la session vivante sur le serveur : quand votre téléphone change de réseau ou sort de veille, Mobile SSH se rattache au même shell en cours d'exécution au lieu d'en ouvrir un nouveau. C'est donc un bon choix pour les données mobiles, les bascules Wi-Fi/réseau cellulaire et les commandes de longue durée.

ET nécessite `etserver` sur le serveur. S'il manque, Mobile SSH peut proposer son installation et son démarrage par SSH. Vérifiez et approuvez les commandes, puis connectez-vous avec **Eternal Terminal**. Les chemins passant par des bastions nécessitent **SSH**.

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

Sur Android, la saisie ordinaire est transmise directement au shell distant, avec correction automatique et suggestions désactivées par défaut. La dictée vocale peut néanmoins envoyer du texte depuis le clavier.

Sur iOS, **Réglages → Terminal → Dictée et suggestions** est activé par défaut : dictée, prédictions et corrections sont disponibles pendant la rédaction d'une ligne. Pour transmettre les touches directement, désactivez-le, laissez **Suggestions du clavier** désactivé et ouvrez un nouveau volet.

**Afficher le clavier au toucher** détermine si un toucher ouvre le clavier logiciel. Désactivé par défaut sur Android, activé sur iOS ; le bouton clavier reste disponible dans la barre.

## Claviers matériels

Les claviers externes et Bluetooth pilotent le terminal directement sur Android comme sur iOS. Au-delà des caractères ordinaires, Mobile SSH gère les touches fléchées, `Home`/`End`, `PgUp`/`PgDn`, `Insert`, `Delete`, `Esc`, les touches de fonction `F1`–`F12`, les combinaisons `Ctrl`+touche et `Alt`/`Option` comme Meta, ainsi que `Shift`+`Tab`. Les touches de modification se combinent avec les modificateurs persistants de la rangée de touches supplémentaires.

## Coller

Le collage dans un programme qui le demande (bash, Vim et d'autres applications compatibles bracketed paste) est encadré par des marqueurs de bracketed paste, de sorte que le contenu multi-lignes du presse-papiers est inséré comme texte au lieu d'être exécuté automatiquement ligne par ligne. Seuls les vrais collages sont encadrés ; le texte saisi ou dicté n'est pas modifié.

## Sélectionner, copier, partager

Appuyez longuement sur un mot, puis ajustez la sélection avec ses poignées. La barre comprend :

- **Copier** — place le texte sélectionné dans le presse-papiers du système. La sélection reste surlignée ensuite, pour que vous puissiez la partager, la recopier ou l'étendre.
- **Partager** — transmet le texte sélectionné à la feuille de partage du système (mail, notes, messagerie, etc.).
- **Tout sélectionner** — étend la sélection à tout le tampon visible du terminal, puis Copier ou Partager.
- **Coller** : insérer le contenu du presse-papiers dans le terminal.

## Rechercher dans le terminal

Recherchez dans tout le tampon du terminal — le scrollback et l'écran visible — et sautez d'une occurrence à l'autre. Ouvrez la recherche depuis les contrôles du terminal, tapez une requête et parcourez les correspondances. Cela fonctionne à la fois sur Android et iOS.

## Couleur, italiques et presse-papiers distant

- Le terminal affiche les **couleurs vraies 24 bits** et les **italiques**, si bien que les invites thématisées, la coloration syntaxique et les TUI s'affichent comme sur le bureau.
- **Presse-papiers OSC 52 :** les programmes distants peuvent copier du texte vers le téléphone. La lecture du presse-papiers du téléphone nécessite une autorisation distincte, désactivée par défaut.
- Sur Android et iOS, les caractères CJK larges, les emoji et les caractères combinants (grappes de graphèmes et liants de largeur nulle) sont mesurés et affichés correctement, et une **Nerd Font** intégrée dessine les glyphes d'icônes powerline, starship, devicon et Material Design que la police système afficherait autrement comme des cases vides.

## Intégration shell et images en ligne

- **Intégration shell (OSC 133) :** lorsque votre shell émet les marqueurs d'invite OSC 133, Mobile SSH peut passer d'une invite à l'autre et vous alerter lorsqu'une commande longue se termine. Fonctionne sur Android et iOS. Aucune des deux apps n'injecte les marqueurs — c'est à votre shell de les émettre (un hook `PROMPT_COMMAND`/`precmd`, ou starship). Sur Android, la navigation entre invites est désactivée tant que vous ne l'activez pas dans **Settings → Shell integration** ; sur iOS, le menu apparaît de lui-même dès que des marqueurs commencent à arriver.
- **Sélectionner la sortie :** touchez n'importe où dans la sortie d'une commande et sélectionnez tout ce bloc — l'erreur de compilation d'il y a 300 lignes, pas seulement la dernière commande — puis copiez-la, partagez-la ou étendez-la.
- **Images intégrées :** les programmes utilisant Kitty affichent leurs images dans le terminal sur Android et iOS. Mesurées en cellules et rattachées à leur ligne, elles survivent au zoom et au réagencement. Elles fonctionnent aussi dans les applications plein écran, avec des placements distincts de l'historique normal.
- **Glyphes mosaïques :** l'app dessine blocs, braille, sextants et octants elle-même ; `chafa`, `timg` et l'art ANSI remplissent exactement la grille, sans jointures ni carrés vides, quelle que soit la police.
- **Résolution des images :** le réglage Images peut annoncer une résolution complète, de moitié ou d'un tiers aux programmes, pour réduire les pixels transmis sur le réseau mobile.
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

Sur les deux plateformes, toucher un programme suivant la souris envoie normalement un clic gauche. Sur iOS, **Le toucher place le curseur** échange ce geste avec le déplacement du curseur ; Maj-toucher effectue l'autre action. Le glisser après appui prolongé est désactivé par défaut, donc un balayage ordinaire fait défiler.

Si vous tapez pendant que vous avez fait défiler vers l'arrière, Mobile SSH revient à la vue en direct du terminal.

## Comportement de tmux

Mobile SSH observe les commandes tmux sortantes d'attache et de nouvelle session, telles que :

```bash
tmux attach -t work
tmux a -t work
tmux new -A -s work
```

Après une coupure, l'app mémorise la session tmux et son socket pour retrouver la même cible. Chaque volet du même hôte conserve son propre rattachement. Si la session n'existe plus, le shell reste disponible.

Sur iOS, changer de socket consulte le préfixe tmux actuel sans supposer Ctrl+B. Un préfixe incompatible ou une recherche échouée arrête l'opération avec un message. Saisir, fermer le volet ou déconnecter annule les étapes de rattachement en attente ; aucun ordre de rattachement n'est envoyé à un programme plein écran non identifié.

## Gestionnaire tmux

Le gestionnaire tmux permet de le parcourir et de le contrôler sans accords de préfixe. Ouvrez-le depuis la commande de multiplexeur d'une session connectée ; un appui prolongé permet de choisir tmux si plusieurs sont disponibles. Il comporte trois sections :

- **Sessions** — toutes les sessions tmux du serveur.
- **Fenêtres** — les fenêtres de la session sélectionnée.
- **Volets** — les volets de la fenêtre sélectionnée.

Depuis le gestionnaire, vous pouvez :

- **Attacher** une session au terminal courant.
- **Créer** une nouvelle session ou fenêtre, et les **renommer**.
- **Diviser** un volet horizontalement ou verticalement, **zoomer** un volet et **tuer** sessions, fenêtres ou volets.
- **Trier** les sessions par utilisation récente (par défaut), nom ou date de création.

Un 🔔 marque toute session dont l'agent attend une entrée : vous repérez ainsi d'un coup d'œil une exécution de Claude Code ou de Codex en pause et vous vous y attachez. Cela complète les indications de rattachement ci-dessus : la logique de rattachement restaure automatiquement votre dernière session à la reconnexion, tandis que le gestionnaire vous donne un contrôle manuel complet.

Les deux plateformes gèrent plusieurs serveurs tmux (sockets) sur un hôte. Les indicateurs de rattachement concernent votre terminal, pas un autre client du serveur.

## Herdr et Zellij

Android et iOS gèrent aussi Herdr et Zellij. Une commande de la barre ouvre le multiplexeur principal détecté ; maintenez-la pour en choisir un autre. Seuls les programmes trouvés sur ce serveur sont proposés. Dans le gestionnaire, le titre change de serveur et le sélecteur de multiplexeur change de gestionnaire.

- **Herdr** affiche sessions, espaces de travail, onglets et volets avec l'état des agents. Prévisualisez ou répondez depuis la liste. La réponse reste destinée au volet et à la session sélectionnés ; **Envoyer** transmet le texte et **Entrée seule** une confirmation vide. Le focus précis est proposé lorsqu'il est pris en charge ; sinon utilisez celui de l'onglet parent. Herdr fournit l'état sans hook supplémentaire.
- **Zellij** liste sessions, onglets et volets, avec attacher, renommer, tuer et diviser. Les sessions tuées restent listées, si bien que s'y attacher les ressuscite, tandis que la suppression les oublie définitivement. Le détail des onglets et des volets nécessite Zellij 0.44 ou plus récent ; sur une version antérieure, la page affiche les noms d'onglets et explique pourquoi. Les divisions nécessitent un client attaché à la session, et la page l'explique au lieu de proposer un bouton qui échouerait.

Si herdr ou Zellij est installé mais absent du `PATH` du shell de connexion, la page propose de l'ajouter.

Chaque serveur propose **Rattacher à la connexion** : **Auto (détecter)**, **Rien**, **tmux**, **herdr** ou **Zellij**. Auto utilise la détection et l'historique disponibles : multiplexeur déjà utilisé, puis sessions actives, puis programme installé. Sans détection en cache, un shell simple s'ouvre. Une détection ultérieure ne concerne que les futures connexions et ne perturbe pas votre saisie.

## Agent alerts

Mobile SSH vous prévient quand un agent de codage IA distant — Claude Code, Codex, Gemini — est bloqué et vous attend. Il ne le devine pas en lisant la sortie de votre terminal. Il existe deux chemins, qui fonctionnent à des niveaux de détail différents.

### La cloche

Les sonneries du terminal peuvent alerter qu'un agent vous attend. Celles qui suivent immédiatement une saisie sont ignorées par défaut. Les notifications distantes OSC 9/OSC 777 et de fin de commande OSC 133 ont des réglages distincts, tous deux désactivés initialement sur iOS.

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

Les alertes d'agents sont activées par défaut sur les deux plateformes, avec interrupteurs pour notification, son, vibration et volet actif. Sur iOS, celles du volet actif sont activées par défaut et une option limite la réception à l'arrière-plan. Elles ne fonctionnent que lorsque iOS autorise l'app à s'exécuter ; une suspension prolongée interrompt les alertes SSH en direct.

Un réglage par défaut mérite d'être connu : **le son est limité aux écouteurs**. Sans rien de branché ni d'appairé, une alerte notifie et vibre mais ne joue aucun son. Désactivez ce réglage si vous voulez entendre l'alerte sur le haut-parleur du téléphone.

Il n'y a pas de réglage de sensibilité ni de sélecteur de son — les contrôles sont de simples activer/désactiver.

## Programmes de terminal en plein écran

Pour les programmes tels que Vim, less, htop, les outils ncurses et les volets tmux :

- Pour une saisie directe sur iOS, désactivez **Dictée et suggestions** et **Suggestions du clavier**, puis ouvrez un nouveau volet.
- Utilisez la rangée de touches supplémentaires pour `ESC`, les flèches, `PGUP` et `PGDN`.
- Utilisez le zoom par pincement si le texte est trop petit, puis attendez un instant que la taille du terminal distant se stabilise.

## Bureaux distants

Les deux plateformes ouvrent un bureau distant par VNC transporté dans SSH. Réutilisez un écran partagé, y compris le partage d'écran macOS, ou approuvez la configuration d'un bureau Linux compatible. Le serveur doit fournir le bureau ; un accès SSH ne crée pas à lui seul de session graphique. La duplication Linux nécessite X11 plutôt que Wayland ; macOS utilise son écran partagé existant sans créer de bureau privé.

Utilisez le toucher pour cliquer, déplacer et zoomer, et le clavier logiciel ou matériel pour saisir. Le presse-papiers permet de coller le texte du téléphone dans le bureau et de copier du texte du bureau vers le téléphone.

**Taille d'écran** propose des dimensions prédéfinies ou personnalisées, mémorisées par serveur. Sur iOS, chaque dimension doit être comprise entre 320 et 5120 pixels. Le redimensionnement à chaud conserve les applications si le serveur le permet. Un redémarrage nécessite confirmation et n'est proposé que pour un bureau privé créé par l'app. Les bureaux réutilisés et consoles partagées ne sont pas redémarrés pour les redimensionner ; sur Mac, utilisez les réglages Moniteurs si nécessaire.
