---
layout: ../../../layouts/DocLayout.astro
title: "Redirection de ports"
description: "Syntaxe de redirection de ports local de Mobile SSH, destinations IPv6 et activation des tunnels enregistrés sur Android et iOS."
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

## Les tunnels appartiennent au profil du serveur

Les redirections sont déclarées sur le serveur enregistré et activées quand ce serveur se connecte. Il n'existe pas d'écran séparé pour ajouter ou supprimer un tunnel en cours de session, sur aucune des deux plateformes : pour modifier vos redirections, modifiez le profil du serveur et reconnectez-vous.

C'est un compromis délibéré — un tunnel qui vit dans le profil revient à chaque connexion, y compris après une reconnexion sur un nouveau réseau, sans que vous ayez à le reconstruire à la main.

## Destinations IPv6

Une destination IPv6 doit être entre crochets, pour que les deux-points ne soient pas confondus avec le séparateur de port :

```text
8080:[2001:db8::1]:80
```

Une adresse IPv6 nue, sans crochets, est rejetée comme ambiguë plutôt que mal interprétée en silence. La même forme entre crochets fonctionne dans le champ d'adresse d'un serveur, avec un port facultatif après elle (`[fe80::1]:22`).

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

- Assurez-vous que la session SSH est connectée — les redirections s'activent après la session.
- Vérifiez que le port local n'est pas déjà utilisé.
- Vérifiez que l'hôte et le port distants sont joignables depuis le serveur SSH.
- Utilisez `localhost` lorsque le service de destination se trouve sur le serveur SSH lui-même.
- Utilisez le nom DNS interne ou l'adresse IP du serveur lors d'une redirection vers un autre hôte derrière le serveur SSH.
