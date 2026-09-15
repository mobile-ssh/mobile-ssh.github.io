---
layout: ../../../layouts/DocLayout.astro
title: "Dépannage"
description: "Dépanner les connexions Mobile SSH, identités, clés de sécurité, terminaux, transferts, VPN, sauvegardes et bureaux distants."
---

# Dépannage

Cette page couvre les problèmes courants de Mobile SSH et les premières vérifications à faire avant de modifier les réglages SSH côté serveur.

## Impossible de se connecter

Vérifiez :

- L'appareil dispose d'un accès réseau.
- Le nom d'hôte ou l'adresse IP du serveur est correct.
- Le port SSH est correct, généralement `22`.
- Un pare-feu, un VPN, le réseau de l'opérateur ou le réseau Wi-Fi ne bloquent pas le port.
- Le serveur SSH est en cours d'exécution et accepte les connexions depuis le réseau que vous utilisez.

Si le même hôte fonctionne depuis un autre appareil, comparez exactement l'hôte, le port, le nom d'utilisateur, la clé et le chemin réseau.

## Une identité de serveur demande votre attention

Les deux plateformes vérifient l'identité SSH avant d'envoyer les identifiants. Sur iOS, une nouvelle clé nécessite confirmation de l'empreinte et **Faire confiance et reconnecter**. Sur Android, **Réglages → Général → Sécurité → Accepter automatiquement les nouvelles identités SSH** est activé par défaut : la première clé brute est enregistrée et les suivantes doivent correspondre. Désactivez-le pour vérifier chaque nouvelle empreinte avant connexion.

Comparez l'empreinte SHA-256 nouvelle ou modifiée avec l'administrateur par un canal fiable. Un changement peut indiquer un serveur remplacé ou inattendu ; ne retirez pas l'ancienne identité sans vérification. Consultez les identités dans les réglages. Adresses alternatives et bastions ne contournent pas la vérification.

Android prend aussi en charge les autorités de certification d’hôtes à portée définie et les révocations. Les autorités inconnues, certificats expirés ou invalides et clés révoquées restent bloqués même avec l’acceptation automatique au premier usage. Sur iOS, **Réglages → Identités des serveurs → Importer des clés révoquées** accepte les entrées OpenSSH `@revoked` Ed25519/ECDSA à portée définie. Un texte collé contenant des entrées non prises en charge est rejeté en entier ; les entrées de CA, certificats, clés RSA et noms d’hôtes hachés ne sont pas acceptés. Les révocations priment sur une confiance antérieure lors des nouvelles connexions et reconnexions, sans fermer les connexions existantes. Les identités et révocations sont exclues des sauvegardes. Sur iOS, vérifiez un serveur inconnu dans l’app principale avant un envoi via l’extension de partage.

## Impossible de se connecter par un bastion

Vérifiez adresses et identifiants de chaque bastion et l'accès du téléphone au premier. Chaque hôte suivant doit être accessible depuis le précédent. Les bastions doivent autoriser le transfert TCP, y compris les restrictions `permitopen`. La route exige SSH, sans boucle, avec huit sauts développés maximum.

Un bastion supprimé ou introuvable ne provoque pas de connexion directe. Corrigez la route et reconnectez-vous. L'état et le journal Android distinguent le saut défaillant du serveur final.

## Échec de l'authentification

Vérifiez :

- L'orthographe du nom d'utilisateur.
- Le mot de passe ou la phrase secrète de la clé.
- Si le serveur autorise la connexion par mot de passe, par clé ou les deux.
- Si la clé privée correspond à une clé publique dans le `authorized_keys` de l'utilisateur du serveur.
- Si le fichier de clé a été importé en entier, y compris les lignes d'en-tête et de pied.

Pour les clés privées chiffrées, saisissez la phrase secrète dans le champ mot de passe/phrase secrète.

Sur Android, `ssh` ou `git` distant nécessite **Transférer l'agent SSH** activé pour ce serveur et autorisé côté serveur. Seules les clés enregistrées utilisables sont proposées. Une demande Autoriser/Refuser ou de clé physique peut suspendre terminal, fichiers et tunnels jusqu'à 30 secondes ; répondez dans l'app ou sa notification.

## Échec de l'importation de la clé privée

L'importation de la clé privée utilise le sélecteur de fichiers du système. Si l'importation échoue :

- Confirmez que le fichier sélectionné est une clé privée, et non un fichier public `.pub`.
- Ouvrez le fichier dans un éditeur de texte de confiance et vérifiez qu'il contient le bloc de clé complet.
- Essayez de coller la clé manuellement dans le champ de clé privée.
- Confirmez que le type de clé est pris en charge : Ed25519, ECDSA (P-256/384/521) ou RSA sur Android ; Ed25519 ou ECDSA sur iOS. DSA (`ssh-dss`) ne fonctionne sur aucune des deux, et iOS ne prend pas en charge RSA — générez plutôt une clé Ed25519.

## La clé de sécurité ne répond pas sur Android

Android accepte CTAP2/FIDO2 `ed25519-sk` et `ecdsa-sk` par USB ou NFC. Utilisez la clé physique ayant créé le fichier importé. USB nécessite mode hôte et autorisation ; activez NFC et maintenez la clé contre le téléphone jusqu'à la fin. Entrez le PIN demandé, puis touchez la clé.

Le serveur nécessite OpenSSH 8.2 ou ultérieur et l'algorithme `sk-*` choisi autorisé. Clés U2F uniquement et découverte d'identifiants résidents sont exclues. Le délai de connexion peut expirer pendant la recherche de la clé : préparez-la. Pour une demande en arrière-plan, ouvrez sa notification ou revenez dans l'app. iOS ne prend pas en charge les clés de sécurité matérielles.

## La saisie au clavier est retardée ou modifiée

Android transmet directement la saisie sans correction ni prédiction. Sur iOS, **Dictée et suggestions** est activé par défaut pour la voix et les corrections de la ligne. S'il modifie le shell de façon inattendue, désactivez-le, vérifiez **Suggestions du clavier** et ouvrez un nouveau volet.

Utilisez la rangée supplémentaire pour `ESC`, `TAB`, `CTRL`, flèches, `HOME`, `END`, `PGUP` et `PGDN`. Un réseau bloqué peut retarder la saisie. L'en-tête Android affiche **sans réponse** ou **non envoyé** ; la saisie pendant reconnexion est abandonnée et non rejouée dans un nouveau shell. Attendez la connexion, vérifiez l'invite et ne retapez que le nécessaire.

## Le défilement de tmux n'est pas celui attendu

Mobile SSH modifie le comportement du défilement selon l'état du terminal. Dans tmux ou d'autres programmes à écran alternatif, les gestes de défilement peuvent envoyer des commandes du mode copie de tmux au lieu de faire défiler l'historique local. Si le mode souris de tmux est activé, l'app envoie des séquences d'échappement de molette.

Si le défilement semble incorrect :

- Essayez d'activer ou de désactiver le mode souris de tmux sur le serveur distant.
- Utilisez `PGUP` et `PGDN` de la rangée de touches supplémentaires.
- Touchez deux fois le volet pour passer en plein écran avant de faire défiler une sortie dense.
- Détachez puis rattachez tmux si la taille du terminal distant semble obsolète.

Sur Android, atteindre le bas quitte automatiquement le mode copie tmux géré par l'app si son indicateur standard apparaît. Une disposition personnalisée ou divisée sans cet indicateur peut nécessiter une sortie manuelle. Lors d'un changement de session, vérifiez serveur, socket et nom de session dans le gestionnaire.

## La session est tombée après le verrouillage de l'écran

Sur Android, Mobile SSH utilise des keepalives, un service de premier plan, un wake lock, un Wi-Fi lock et des tentatives de reconnexion pour réduire les déconnexions. Les politiques de batterie d'Android peuvent tout de même arrêter le travail en arrière-plan.

Vérifiez :

- Désactivez l'optimisation de batterie pour Mobile SSH si votre appareil arrête agressivement les apps en arrière-plan.
- Gardez le Wi-Fi ou les données mobiles stables pendant les longues sessions.
- Rouvrez Mobile SSH et touchez **Active Sessions** après le déverrouillage.
- Vérifiez que **Keep sessions running in background** est activé dans Settings si vous voulez que les shells survivent au balayage de l'app hors des récentes.
- Si le serveur a déconnecté la session SSH, reconnectez-vous depuis l'écran d'accueil — **Continue** liste ce qui est encore actif, et **Tmux sessions** liste ce qui attend sur le serveur.

iOS suspend les apps en arrière-plan : SSH ne peut rester connecté indéfiniment après verrouillage ou changement d'app. Un court délai couvre les changements rapides. Choisissez tmux, Herdr ou Zellij dans **Rattacher à la connexion**, ou **Eternal Terminal**, pour reprendre après reconnexion. Le multiplexeur doit toujours fonctionner sur le serveur ; Eternal Terminal n'accepte pas de route par bastions.

## Le transfert de fichiers ne parcourt pas les fichiers du téléphone

Mobile SSH ne demande aucune permission de stockage sur Android. À la place, le volet local affiche un seul dossier que vous accordez avec le sélecteur de dossiers du système — s'il est vide, utilisez **Pick folder** pour en choisir un. L'autorisation persiste : c'est donc une étape unique.

Si les fichiers distants se chargent mais pas les fichiers locaux, la connexion SSH est correcte et vous n'avez simplement encore accordé aucun dossier.

Sur iOS, le volet local commence dans Documents de l'app. **Mon téléphone → Choisir un dossier local** mémorise un autre dossier de Fichiers. Si le fournisseur ou l'autorisation manque, choisissez-le à nouveau ou revenez au dossier de l'app. Ses téléchargements apparaissent sous **Sur mon iPhone** ; les dossiers externes restent chez leur fournisseur. Les permissions ne sont pas transférées par sauvegarde.

## Échec de l'envoi ou du téléchargement

Vérifiez :

- La session SSH est toujours connectée.
- Le répertoire distant existe.
- L'utilisateur distant a la permission de lire ou d'écrire le chemin.
- La destination locale est accessible en écriture.
- Il y a assez d'espace libre sur l'appareil.
- Le réseau est stable pour les transferts volumineux.

## Échec de la redirection de port

Vérifiez :

- Le port local est compris entre `1` et `65535`.
- Le port local n'est pas déjà utilisé.
- La chaîne du tunnel est `PORT` ou `LOCAL:REMOTEHOST:REMOTE`.
- L'hôte distant et le port distant sont joignables depuis le serveur SSH.
- Le serveur SSH autorise la redirection TCP.

## Le VPN ou proxy ne transporte pas de trafic sur Android

- Démarrez le profil voulu dans **VPN** et autorisez Android. Un VPN d'appareil remplace le précédent ; utilisez SOCKS5 local pour conserver un autre VPN.
- Pour SSH VPN, vérifiez serveur, bastions, identité, autorisation TCP et sélection apps/sites. SSH transporte TCP et DNS, pas UDP général.
- Pour SOCKS5, configurez adresse locale, port, mot de passe et DNS distant dans le client. Le proxy ne redirige pas automatiquement toutes les apps.
- Pour WireGuard, vérifiez négociation, clés, `AllowedIPs` et DNS. Pour Shadowsocks, accordez chiffrement/mot de passe et vérifiez le relais UDP pour DNS.
- Pour OpenVPN, utilisez un profil autonome compatible, vérifiez CA/identité et identifiants, et fournissez un DNS VPN au tunnel complet. Corrigez erreurs d'authentification/certificat puis arrêtez et redémarrez le profil.

SSH VPN, Shadowsocks et OpenVPN peuvent bloquer le trafic capturé pendant les reconnexions sans basculer en accès direct. L'arrêt met fin à cette protection. Un VPN ne contourne pas les restrictions internet imposées au serveur par son fournisseur ou administrateur.

## La sauvegarde n'a pas tout restauré

Vérifiez l'aperçu et le choix **Fusionner** ou **Remplacer**. Une section absente d'une sauvegarde ancienne ou partielle reste inchangée. Les sauvegardes complètes incluent les préférences compatibles ; Android ajoute VPN et proxies. Tout n'est pas portable vers iOS et une ancienne version peut refuser un format complet récent.

Identités d'hôtes, autorisations système et accès aux dossiers restent locaux. Vérifiez les hôtes et accordez dossiers/VPN sur le nouvel appareil. Les identifiants matériels nécessitent toujours leur clé physique. Importer ne démarre aucun VPN ; vérifiez les profils avant de les lancer.

## Bureau distant indisponible ou impossible à redimensionner

Ouvrez le bureau depuis une session SSH connectée et vérifiez l'autorisation de redirection TCP locale. Sur Linux, installez les logiciels bureau/VNC indiqués par le message de paquet manquant. Android ne duplique pas une console Wayland ; choisissez un bureau virtuel compatible.

Sur macOS, activez Partage d’écran dans les réglages du Mac. Android accepte l’authentification par compte Mac ; iOS exige l’activation de l’accès VNC classique par mot de passe dans Partage d’écran et utilise ce mot de passe, plutôt que celui d’un compte Mac. La visionneuse montre l’écran existant du Mac. Sa résolution peut devoir être changée sur le Mac. Un bureau virtuel ne peut être redimensionné à chaud que si son serveur le permet ; redémarrer un bureau créé par l’app nécessite confirmation et ferme ses programmes. Quitter la visionneuse laisse le bureau distant fonctionner.

## Journaux de débogage

Les deux plateformes n'enregistrent pas les mêmes choses : choisissez celle qui correspond à votre problème.

**Android — terminal et rendu.** Activez **Settings → Debugging → Show Debug and Logs buttons**, puis utilisez le bouton **Debug** qui apparaît sur l'écran d'accueil. Il enregistre les événements du terminal, les tailles de données SSH, la saisie tactile, le comportement de redimensionnement et le cycle de vie des tunnels. Démarrer un enregistrement vous avertit d'abord qu'il capture chaque touche que vous saisissez, mots de passe compris. L'arrêter écrit une archive dans votre dossier Téléchargements.

**iOS — connexions et reconnexions.** Activez **Settings → Diagnostics → Record debug log**. Il enregistre chaque adresse composée et la raison de son échec, les tentatives de reconnexion et leur backoff, les connexions perdues, « peer stopped answering keepalives », les changements de réseau et les commandes tmux avec leurs erreurs. Settings affiche un compteur de lignes en direct pour confirmer que l'enregistrement est en cours, et **Export Debug Log** le partage sous forme de fichier texte. Il est conservé en mémoire et ne couvre que la session applicative en cours.

Examinez tout journal ou archive de débogage avant de le partager. Ils sont destinés au dépannage et peuvent révéler des noms de serveurs, des adresses, des horodatages ou d'autres détails de l'environnement — et sur Android, tout ce que vous avez saisi.
