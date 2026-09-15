---
layout: ../../../layouts/DocLayout.astro
title: "Redirection de ports"
description: "Configurer tunnels SSH et bastions sur Android et iOS, ainsi que VPN, proxy SOCKS5, routage et DNS sur Android."
---

# Redirection de ports

Mobile SSH prend en charge la redirection de ports SSH locale aussi bien sur Android que sur iOS. Un port local sur l'appareil écoute sur `127.0.0.1` et redirige le trafic via la connexion SSH vers un hôte et un port distants.

Android dispose aussi d'une page **VPN** pour SSH VPN, proxy SOCKS5 local, WireGuard, Shadowsocks et OpenVPN. Ces profils sont distincts des redirections locales décrites ci-dessous.

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

Les redirections locales sont enregistrées dans le profil et démarrent à sa connexion. Pour les changer, modifiez le profil puis reconnectez-vous.

Un tunnel enregistré revient à chaque connexion, même après reconnexion sur un autre réseau.

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

## Connexions par des bastions

Sur les deux plateformes, un serveur SSH peut passer par une liste ordonnée de bastions enregistrés. Modifiez la destination, ajoutez-les dans **Se connecter via** et ordonnez-les. Chaque saut utilise ses propres identifiants ; la route développée admet huit sauts maximum.

Le téléphone atteint le premier bastion ; chaque adresse suivante doit être accessible depuis le serveur précédent. Redirections locales, terminal et SFTP suivent la même route SSH vérifiée. La destination d'une redirection est atteinte depuis le dernier serveur SSH. Les bastions doivent autoriser le transfert TCP et chaque identité est vérifiée avant authentification. Ces routes exigent SSH et ne s'appliquent pas à Eternal Terminal.

## Routage VPN sur Android

Ouvrez **VPN** depuis l'accueil, ajoutez ou importez un profil nommé, puis touchez **Démarrer**. Autorisez la demande VPN d'Android. L'icône devient **Arrêter le routage** tant que le profil est activé ; le crayon modifie, la corbeille supprime. Les types fréquents apparaissent d'abord.

Android autorise un VPN d'appareil à la fois. Démarrer un autre profil remplace le précédent. Un proxy SSH SOCKS5 local peut continuer via un VPN non SSH. Tailscale utilise son app distincte ; démarrer un VPN Mobile SSH remplace sa connexion. IKEv2/IPsec se gère dans les paramètres VPN d'Android, pas dans Mobile SSH.

### SSH VPN et proxy SOCKS5

- **SSH VPN :** choisissez un serveur SSH enregistré avec identifiants et bastions, puis toutes ou certaines apps et sites. Le serveur doit autoriser le transfert TCP, sans auxiliaire VPN. SSH transporte TCP et DNS distant ; les autres paquets UDP assignés à SSH sont bloqués, permettant au navigateur de passer de QUIC à TCP.
- **Proxy SOCKS5 :** choisissez un serveur dans son éditeur distinct, puis configurez chaque app avec le proxy local et DNS distant. Valeur par défaut : `127.0.0.1:1080` et mot de passe généré. **Copier l'URL du proxy avec identifiants** fournit `socks5h://` aux clients compatibles. Ce mode utilise un VPN existant, y compris Tailscale. Un seul profil SSH VPN ou SSH SOCKS5 peut fonctionner à la fois.

Saisissez des domaines comme `example.org`, couvrant aussi leurs sous-domaines. Les domaines identifiés hors liste utilisent le réseau normal. Les IP directes et adresses obtenues par DNS chiffré ne peuvent être comparées fiablement et passent par SSH. SSH VPN applique les deux sélections, apps et sites ; les clients SOCKS5 sont choisis par leur configuration propre.

Le DNS distant est `1.1.1.1:53` par défaut ; indiquez un résolveur numérique accessible depuis le serveur SSH. Pendant reconnexion ou authentification, le trafic SSH reste bloqué tandis que les destinations de contournement connues continuent normalement. Arrêter, changer de profil, révoquer l'autorisation ou terminer l'app met fin à cette protection. Ces clients ne garantissent pas les modes VPN permanent ou verrouillage d'Android.

### WireGuard, Shadowsocks et OpenVPN

- **WireGuard :** importez ou collez un `.conf` standard. `AllowedIPs` définit les routes et `DNS` les résolveurs. Consultez la négociation du pair et les compteurs ; une interface active ne prouve pas sa disponibilité.
- **Shadowsocks :** importez `ss://` ou saisissez serveur, port, mot de passe, chiffrement et DNS. Chiffrements : AES-128-GCM, AES-256-GCM, ChaCha20-Poly1305. TCP et UDP passent dans le tunnel ; le serveur doit relayer UDP pour UDP et DNS. Liens nécessitant des plugins et AEAD-2022 sont exclus.
- **OpenVPN :** importez un `.ovpn` autonome avec certificats et clés intégrés. Identifiant/mot de passe et phrase de passe de clé privée sont acceptés. Vérifier le certificat serveur est obligatoire. Routes et DNS viennent du profil/serveur ; un tunnel complet exige un DNS VPN. Fichiers externes, scripts, plugins, TAP et défis interactifs sont exclus.

L'app inclut ces moteurs de protocole. Shadowsocks et OpenVPN n'offrent pas les sélections d'apps et sites de SSH VPN. Un VPN n'accorde pas non plus au serveur un accès internet interdit par son fournisseur ou administrateur.

### Tuile des réglages rapides

Démarrez un profil VPN une fois pour le mémoriser dans **Mobile SSH VPN**. La tuile s'allume lorsqu'un VPN Mobile SSH est activé, même pendant connexion ou reconnexion. Touchez pour arrêter, puis pour redémarrer le profil mémorisé. Elle ne démarre pas SOCKS5 et n'arrête pas le VPN d'une autre app.

Sur Android 13 et ultérieur, la première ouverture de VPN demande l'ajout de la tuile. Si vous refusez, ou sur un ancien Android, ajoutez-la via **Réglages rapides → Modifier**. Un profil supprimé ou une autorisation manquante ouvre VPN pour terminer la configuration.

## Dépannage des tunnels

- Assurez-vous que la session SSH est connectée — les redirections s'activent après la session.
- Vérifiez que le port local n'est pas déjà utilisé.
- Vérifiez que l'hôte et le port distants sont joignables depuis le serveur SSH.
- Utilisez `localhost` lorsque le service de destination se trouve sur le serveur SSH lui-même.
- Utilisez le nom DNS interne ou l'adresse IP du serveur lors d'une redirection vers un autre hôte derrière le serveur SSH.
- Avec des bastions, vérifiez identifiants, identité et autorisation TCP de chaque saut.
- Pour un VPN, vérifiez serveur/configuration, DNS, autorisation Android et autres VPN actifs. Consultez le [guide de dépannage](../troubleshooting/) pour chaque protocole.
