---
layout: ../../../layouts/DocLayout.astro
title: "Dépannage"
description: "Guide de dépannage de Mobile SSH pour la connexion, l'authentification, le clavier, tmux, le transfert de fichiers et les tunnels."
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

## Échec de l'authentification

Vérifiez :

- L'orthographe du nom d'utilisateur.
- Le mot de passe ou la phrase secrète de la clé.
- Si le serveur autorise la connexion par mot de passe, par clé ou les deux.
- Si la clé privée correspond à une clé publique dans le `authorized_keys` de l'utilisateur du serveur.
- Si le fichier de clé a été importé en entier, y compris les lignes d'en-tête et de pied.

Pour les clés privées chiffrées, saisissez la phrase secrète dans le champ mot de passe/phrase secrète.

## Échec de l'importation de la clé privée

L'importation de la clé privée utilise le sélecteur de fichiers du système. Si l'importation échoue :

- Confirmez que le fichier sélectionné est une clé privée, et non un fichier public `.pub`.
- Ouvrez le fichier dans un éditeur de texte de confiance et vérifiez qu'il contient le bloc de clé complet.
- Essayez de coller la clé manuellement dans le champ de clé privée.
- Confirmez que le type de clé est pris en charge : Ed25519, RSA, ECDSA ou DSA sur Android ; Ed25519 ou ECDSA (P-256/384/521) sur iOS.

## La saisie au clavier est retardée ou modifiée

Mobile SSH envoie les frappes directement au shell, avec l'autocorrection et les suggestions prédictives désactivées, de sorte que le clavier ne devrait pas réécrire le texte avant qu'il n'atteigne le côté distant. Si votre clavier modifie tout de même l'entrée, vérifiez qu'aucun outil système de remplacement ou de presse-papiers ne l'intercepte, et utilisez la rangée de touches supplémentaires pour les touches de terminal comme `ESC`, `TAB`, `CTRL`, les flèches, `HOME`, `END`, `PGUP` et `PGDN`.

## Le défilement de tmux n'est pas celui attendu

Mobile SSH modifie le comportement du défilement selon l'état du terminal. Dans tmux ou d'autres programmes à écran alternatif, les gestes de défilement peuvent envoyer des commandes du mode copie de tmux au lieu de faire défiler l'historique local. Si le mode souris de tmux est activé, l'app envoie des séquences d'échappement de molette.

Si le défilement semble incorrect :

- Essayez d'activer ou de désactiver le mode souris de tmux sur le serveur distant.
- Utilisez `PGUP` et `PGDN` de la rangée de touches supplémentaires.
- Touchez deux fois le volet pour passer en plein écran avant de faire défiler une sortie dense.
- Détachez puis rattachez tmux si la taille du terminal distant semble obsolète.

## La session est tombée après le verrouillage de l'écran

Sur Android, Mobile SSH utilise des keepalives, un service de premier plan, un wake lock, un Wi-Fi lock et des tentatives de reconnexion pour réduire les déconnexions. Les politiques de batterie d'Android peuvent tout de même arrêter le travail en arrière-plan.

Vérifiez :

- Désactivez l'optimisation de batterie pour Mobile SSH si votre appareil arrête agressivement les apps en arrière-plan.
- Gardez le Wi-Fi ou les données mobiles stables pendant les longues sessions.
- Rouvrez Mobile SSH et touchez **Active Sessions** après le déverrouillage.
- Si le serveur a déconnecté la session SSH, reconnectez-vous depuis les sessions récentes.

Sur iOS, le système suspend les apps en arrière-plan : une connexion SSH brute ne peut donc pas rester ouverte indéfiniment une fois que vous changez d'app ou verrouillez l'écran. Un court délai de grâce couvre les changements d'app rapides ; pour toute durée plus longue, activez **Auto-attach tmux session** sur le profil du serveur (ou utilisez le transport **Eternal Terminal**) afin que la reconnexion vous ramène dans le même shell, là où vous vous étiez arrêté.

## Le transfert de fichiers ne parcourt pas les fichiers du téléphone

Sur les versions récentes d'Android, la navigation dans les fichiers locaux peut nécessiter un accès au stockage. Accordez l'accès au stockage dans les Réglages d'Android pour Mobile SSH, puis rouvrez l'écran de transfert de fichiers.

Si les fichiers distants se chargent mais pas les fichiers locaux, la connexion SSH est probablement correcte et le problème vient de l'accès au stockage local Android.

Sur iOS, il n'y a pas de permission de stockage : le volet local affiche la zone de documents de l'app, et vous ajoutez des fichiers via les sélecteurs de documents et de photos du système.

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

## Journaux de débogage

L'écran d'accueil comporte un bouton **Debug**. Lorsqu'il est activé, Mobile SSH enregistre des informations de diagnostic sur les événements du terminal, les tailles de données SSH, la saisie tactile, le comportement de redimensionnement et le cycle de vie des tunnels. Arrêtez l'enregistrement pour sauvegarder une archive de débogage localement.

Examinez les archives de débogage avant de les partager. Elles sont destinées au dépannage et peuvent révéler des noms de serveurs, des horodatages, le comportement du terminal ou d'autres détails de l'environnement.
