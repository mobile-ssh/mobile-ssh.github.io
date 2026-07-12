---
layout: ../../../layouts/DocLayout.astro
title: "Redirection de ports"
description: "Syntaxe de redirection de ports local de Mobile SSH et gestion des tunnels sur Android et iOS."
---

# Redirection de ports

Mobile SSH prend en charge la redirection de ports SSH locale aussi bien sur Android que sur iOS. Un port local sur l'appareil écoute sur `127.0.0.1` et redirige le trafic via la connexion SSH vers un hôte et un port distants.

## Syntaxe du tunnel enregistré

Les règles de redirection de ports sont séparées par des virgules. Chaque entrée utilise l'une des deux formes :

```text
PORT
LOCAL:REMOTEHOST:REMOTE
```

Forme courte :

```text
8080
```

Cela lie `127.0.0.1:8080` sur l'appareil et le redirige vers `localhost:8080` du point de vue du serveur.

Forme complète :

```text
3000:localhost:3000
```

Cela lie `127.0.0.1:3000` sur l'appareil et le redirige via SSH vers `localhost:3000` du côté distant.

Plusieurs redirections :

```text
8080, 3000:localhost:3000, 15432:db.internal:5432
```

## Ajouter un tunnel à un serveur enregistré

1. Ouvrez **Saved Servers**.
2. Ajoutez ou modifiez un profil de serveur.
3. Saisissez les règles de redirection dans **Port forwards**.
4. Enregistrez le serveur.
5. Connectez-vous au serveur.

L'application applique les redirections enregistrées une fois la session SSH établie.

## Gérer les tunnels actifs

Une fois connecté, sélectionnez la session et ouvrez la vue des tunnels depuis la barre d'outils du terminal. De là, vous pouvez inspecter les redirections locales actives, ajouter un nouveau tunnel ou supprimer une redirection locale.

## Liaison d'adresse

Mobile SSH lie les redirections locales à `127.0.0.1` sur l'appareil. C'est intentionnel : cela garde le tunnel local à l'appareil et évite les surprises liées aux adresses de loopback IPv6. D'autres applications sur le même appareil peuvent se connecter au port local redirigé si le système d'exploitation autorise leur accès réseau.

## Exemples courants

Accéder à un service web exécuté sur le serveur distant :

```text
8080
```

Puis ouvrez `http://127.0.0.1:8080` depuis un navigateur sur le même appareil.

Accéder à un serveur de développement :

```text
3000:localhost:3000
```

Accéder à une base de données interne joignable depuis le serveur SSH :

```text
15432:db.internal:5432
```

## Dépannage des tunnels

- Assurez-vous que la session SSH est connectée avant d'ajouter des tunnels en cours d'exécution.
- Vérifiez que le port local n'est pas déjà utilisé.
- Vérifiez que l'hôte et le port distants sont joignables depuis le serveur SSH.
- Utilisez `localhost` lorsque le service de destination se trouve sur le serveur SSH lui-même.
- Utilisez le nom DNS interne ou l'adresse IP du serveur lors d'une redirection vers un autre hôte derrière le serveur SSH.
