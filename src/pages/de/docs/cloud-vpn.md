---
layout: ../../../layouts/DocLayout.astro
title: "Cloud-VMs und wg-easy"
description: "Erstelle eine Cloud-VM mit öffentlicher IP, speichere ihre SSH-Verbindung in Mobile SSH und installiere wg-easy separat – mit Erklärungen zu Zugangsdaten, Netzwerk und Ressourcenlöschung."
---

# Cloud-VMs und wg-easy

Erstelle eine Linux-VM in deinem eigenen Cloudkonto und betreibe mit wg-easy ein WireGuard-VPN. Auf kompatiblen Android-Builds kann das veröffentlichte Plugin **VPN Setup** die VM erstellen, wg-easy installieren und einen Client in einem geführten Ablauf importieren. Du kannst die VM auch in der Anbieterkonsole erstellen und über Mobile SSH installieren oder einen vorhandenen öffentlichen Server verwenden.

**Verfügbarkeit — 19. November 2026:** **VPN Setup 1.0.7** ist im [Standard-Plugin-Katalog](https://github.com/mobile-ssh/mobile-ssh-plugins/tree/main/plugins/vpnsetup) veröffentlicht. Die grundlegende Einrichtung benötigt Plugin-Bridge **1.3.0**, Serverupdates **1.4.0** und das Entfernen geeigneter abgeschlossener Einträge **1.5.0**. Die Verfügbarkeit hängt vom installierten Android-Build und Veröffentlichungskanal ab; ein veröffentlichtes Plugin bestätigt nicht die Verfügbarkeit einer bestimmten App-Version für dich. Eine entsprechende iOS-Automatisierung ist nicht belegt. Ist das Plugin nicht verfügbar, nutze die Konsolen- und manuellen Anleitungen unten.

## Geführten oder manuellen Ablauf wählen

- **Mit Cloud-API erstellen:** VPN Setup erstellt mit deinem Anbieterkonto die VM und Netzwerkressourcen, speichert die SSH-Verbindung, installiert wg-easy und importiert einen Client. Ressourcen-IDs und Eigentumszuordnungen bleiben für die spätere Bereinigung erhalten.
- **In der Cloudkonsole erstellen oder vorhandenen Server verwenden:** Erstelle die VM selbst und übergib VPN Setup ihre öffentliche IPv4, den SSH-Benutzernamen und Schlüssel, oder folge der manuellen Installation unten. Für die Installation auf deinem Server braucht das Plugin keine Cloud-API-Zugangsdaten.

Das veröffentlichte Plugin verbindet Bereitstellung und Installation; getrennte Plugins dafür bleiben eine geplante Architektur. Über die API erstellte Ressourcen und selbst bereitgestellte Server haben unterschiedliches Löschverhalten, wie unten beschrieben. Ein dokumentierter Live-Test mit Hetzner auf einem Android-Emulator bestand Einrichtung, VPN-Datenverkehr, Clientverwaltung, private Administration und Bereinigung. Das belegt keine Live-Abnahme für jeden Anbieter, jede Kontorichtlinie oder jedes physische Telefon.

## Konto und Servereinstellungen vorbereiten

1. Aktiviere Cloud-Konto und Abrechnung, wähle eine Region und prüfe Kontingente für VMs, Datenträger und öffentliche IPs. Prüfe die aktuellen Kosten für VM, IPv4, Speicher und Datenverkehr; ein kostenloses Kontingent wird nicht vorausgesetzt.
2. Wähle für diese Anleitung eine dedizierte VM mit **Ubuntu 24.04 LTS**, mindestens **1 GB RAM und 20 GB Datenträger** sowie **amd64 oder arm64**. Das sind die Ausgangswerte dieses Aufbaus, keine allgemeingültigen Mindestanforderungen von wg-easy. Verwende einen Zugang mit root- oder sudo-Rechten; unbeaufsichtigte Installation benötigt eine nicht interaktive Rechteerweiterung.
3. Wähle oder erzeuge einen SSH-Schlüssel und behalte den privaten Schlüssel in Mobile SSH. Lade nur den öffentlichen Schlüssel in die Cloud. Der Lightsail-Import erfordert einen RSA-SSH-Schlüssel. Andere Anbieter und Images haben eigene unterstützte Schlüsseltypen. Der aktuelle iOS-SSH-Client unterstützt private Ed25519-/ECDSA-Schlüssel statt RSA. Nutze für Lightsail auf iOS zuerst die Browser-SSH-Konsole des Anbieters, um einen von der App unterstützten öffentlichen Schlüssel in `authorized_keys` einzutragen, und verbinde dich anschließend mit diesem Schlüssel.
4. Wähle eine **öffentliche IPv4**, möglichst reserviert oder statisch, sofern angeboten. Eine private Adresse, reine IPv6-Instanz oder ein NAT-Gateway nur für ausgehenden Verkehr erfüllt die Endpunktanforderung dieser Anleitung nicht.
5. Lege das SSH-Quell-CIDR ausdrücklich fest, etwa deine aktuelle öffentliche IPv4 mit `/32`. Verlasse dich nicht darauf, dass die Plugin-Voreinstellung den Zugriff einschränkt. Beim Wechsel zwischen Mobilfunk und WLAN musst du diese Regel möglicherweise über die Cloud-Konsole aktualisieren.

Der manuelle Weg unterstützt die oben genannten Architekturen. VPN Setup wählt derzeit **Ubuntu 24.04 auf amd64/x86-64**, verbindet über **SSH-Port 22** und akzeptiert **Ed25519- oder RSA**-SSH-Schlüssel; Lightsail erfordert RSA. ECDSA-Schlüssel, ausschließlich private Hosts und reine IPv6-Endpunkte werden in diesem Ablauf nicht unterstützt. Ein vorhandener Server braucht eine öffentliche IPv4 und nichtinteraktiven administrativen Zugriff.

Cloud-API-Zugangsdaten erlauben Ressourcenverwaltung; SSH-Schlüssel erlauben die Serveranmeldung. Gib API-Geheimnisse nur im geschützten nativen Formular ein, niemals in Sprachprompts, Terminalbefehlen oder Quelldateien. Nativer Code authentifiziert sich bei genehmigten Anbieterendpunkten; Geheimnisse gelangen weder zur VM noch zum Plugin-Worker. Gespeicherte Zugangsdaten sind mit Android Keystore verschlüsselt. Ohne Speicherung verbleiben sie im Arbeitsspeicher und müssen nach Ende des App-Prozesses möglicherweise erneut eingegeben werden.

Sprachsteuerung kann unterstützte Fragen ohne Geheimnisse beantworten und Fortschritt melden; Zugangsdaten und Freigaben erfordern jedoch den Bildschirm. Die Mikrofonaufnahme pausiert bei geschützten Formularen und muss ausdrücklich fortgesetzt werden. Spracheinrichtung braucht Aktivierung, ein heruntergeladenes lokales Modell und Mikrofonberechtigung. Ein Offline-Sprachmodell ermöglicht keine Cloud-API-Aufrufe, Downloads oder SSH-Verbindungen ohne Internet.

## Cloud wählen und öffentliche Adresse erhalten

Für die **Konsoleneinrichtung** meldest du dich selbst beim Anbieter an; Mobile SSH braucht dessen API-Zugangsdaten nicht. Für die **API-Bereitstellung mit VPN Setup** bereite die unten genannten Zugangsdaten mit den erforderlichen Erstellungs-, Lese-, Netzwerk- und Löschrechten vor. Das Plugin implementiert die zehn Anbieter dieser Tabelle; AWS EC2 ist eine separate Option ausschließlich über die Konsole. Begrenze den Zugriff möglichst auf ein eigenes Projekt oder Deployment. Kontorichtlinien gelten für beide Methoden.

Erstelle die gewählte Ubuntu-VM mit deinem öffentlichen SSH-Schlüssel und wende die SSH-Regel aus dem nächsten Abschnitt an. Die Links erklären die jeweiligen Schritte für Adressen und Anmeldung beim Anbieter.

<div class="doc-table" tabindex="0" role="region" aria-label="Cloud-Anbieter und öffentliche Adressen">

| Anbieter | Zugangsdaten für API-Bereitstellung | Öffentliche IPv4 über die Konsole einrichten |
| --- | --- | --- |
| [AWS Lightsail](./aws-lightsail/) | Zugriffsschlüssel-ID und Geheimnis; bei temporären Zugangsdaten zusätzlich Sitzungstoken. Erlaube die nötigen [Lightsail-Aktionen](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html). | Erstelle eine Ubuntu-Instanz mit Dual Stack, wähle den RSA-SSH-Schlüssel und reserviere und verknüpfe eine [statische IPv4 in derselben Region](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Verwende beim Ubuntu-Image `ubuntu`. |
| [Google Cloud Compute Engine](./google-cloud/) | JSON-Schlüssel eines Dienstkontos und Projekt-ID. Berechtigungen müssen VM-/Datenträger-, Netzwerk-, Adress- und Firewall-Operationen abdecken; Compute Network Admin allein kann keine Firewallregeln schreiben. Prüfe die [IAM-Berechtigungen](https://docs.cloud.google.com/compute/docs/access/iam). | Aktiviere die Compute Engine API, wähle VPC/Subnetz mit Internet-Routing, reserviere eine [regionale externe IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address) und ordne sie der VM zu. Konfiguriere passenden SSH-Benutzernamen und Schlüssel; OS Login braucht eine eigene Identitätseinrichtung. VPN Setup verwendet Metadaten-SSH-Schlüssel und deaktiviert OS Login für seine VM; schreibt deine Organisation OS Login vor, verwende eine genehmigte Konsolenkonfiguration. |
| [Microsoft Azure](./azure/) | Mandanten-ID, Anwendungs-/Client-ID, Clientgeheimnis-**Wert** und Abonnement-ID. VPN Setup erstellt eine eigene Ressourcengruppe: Erlaube deren Erstellung/Löschung auf Abonnement- oder übergeordneter Ebene sowie Compute-/Netzwerkoperationen. Zugriff nur auf eine bestehende Gruppe reicht nicht. Siehe [Dienstprinzipal einrichten](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Erstelle eine eigene Ressourcengruppe und VNet/Subnetz. Ordne der VM-NIC eine [Standard-IP mit statischer IPv4](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) und eine NSG zu. Verwende den bei der Erstellung gewählten Administratornamen. |
| [DigitalOcean](./digitalocean/) | Persönliches Zugriffstoken mit den nötigen [Berechtigungsbereichen](https://docs.digitalocean.com/reference/api/create-personal-access-token/) für Droplets, SSH-Schlüssel, Reserved IPs, Firewalls und zugehörige Aktionen. | Erstelle ein Ubuntu-Droplet mit öffentlichem SSH-Schlüssel, weise eine [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) zu und verknüpfe eine Cloud Firewall. Der anfängliche Ubuntu-Benutzer ist meist `root`. |
| [Hetzner Cloud](./hetzner/) | Projektspezifisches [Read-&-Write-API-Token](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/). | Erstelle einen Ubuntu-Server mit [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), deinem SSH-Schlüssel und einer Cloud Firewall. Verwende `root`. Prüfe, ob die separate Primary IP beim Löschen des Servers erhalten bleibt. |
| [Akamai / Linode](./linode/) | Persönliches Zugriffstoken mit Lese-/Schreibrechten für Linodes und Firewalls sowie den nötigen [Leseberechtigungen](https://techdocs.akamai.com/linode-api/reference/get-started). | Erstelle einen Ubuntu-Linode mit öffentlicher IPv4 und SSH-Schlüssel, verknüpfe dann eine [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Verwende `root`. Behalte die zugewiesene Adresse für die Lebensdauer der Instanz. |
| [Vultr](./vultr/) | API-Schlüssel mit aktiviertem API-Zugang; seine [Freigabeliste für Quell-IPs](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) muss die aktuelle Telefonverbindung zulassen. | Erstelle eine Ubuntu-Cloud-Compute-Instanz mit öffentlicher Haupt-IPv4, SSH-Schlüssel und Firewall Group. Verwende `root`. Die [zugewiesene Adresse gilt für die Lebensdauer der Instanz](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); eine Reserved IP ist eine separate Option. |
| [Oracle Cloud Infrastructure](./oracle-cloud/) | Mandanten-/Benutzer-OCIDs, API-Schlüsselfingerabdruck und [privater RSA-Signaturschlüssel](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), dessen öffentlicher Schlüssel registriert ist. Er ist vom SSH-Schlüssel getrennt. | Erstelle VCN, Internetgateway und öffentliches Subnetz mit Gateway-Route. Weise der privaten IP der VM-VNIC eine [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) zu. Verwende bei Canonical Ubuntu `ubuntu`; konfiguriere Sicherheitslisten/NSG. |
| [OVHcloud Public Cloud](./ovhcloud/) | Anwendungsschlüssel, Anwendungsgeheimnis und bestätigter Verbraucherschlüssel für den passenden EU-/CA-/US-API-Endpunkt. Beschränke die [API-Rechte](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) auf Aktionen im ausgewählten Projekt. | Erstelle eine Ubuntu-[Public-Cloud-Instanz](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) mit Basic Public IP über Ext-Net, SSH-Schlüssel und Sicherheitsgruppe. Verwende `ubuntu`. Floating/Additional IPs sind separate Ressourcen. |
| [Scaleway Instances](./scaleway/) | API-Geheimschlüssel einer IAM-Anwendung und Projekt-UUID mit Rechten für Instanzen, Volumes, IPs, Sicherheitsgruppen und SSH-Schlüssel. Siehe [API-Schlüssel erstellen](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Erstelle eine Ubuntu-Instanz, verknüpfe eine [flexible geroutete IPv4 derselben Zone](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), konfiguriere eine Sicherheitsgruppe und schalte die Instanz ein. Verwende den SSH-Benutzer des Images, häufig `root`. |

</div>

**Alternative [AWS EC2](./aws-ec2/):** Starte Ubuntu in einem öffentlichen Subnetz mit [Internet-Gateway und Gatewayroute `0.0.0.0/0`](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), wähle SSH-Schlüssel und Sicherheitsgruppe und ordne eine [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html) zu. Verwende `ubuntu`. Der automatische AWS-Adapter von VPN Setup verwendet Lightsail; EC2 wird über die Konsole eingerichtet. Eine Elastic IP allein macht ein privates Subnetz nicht erreichbar.

Wenn eine Organisation Dienstkontoschlüssel, externe IPs oder die gewählte SSH-Anmeldung untersagt, hole eine vom Administrator genehmigte Konfiguration ein. Die Konsoleneinrichtung umgeht diese Einschränkungen nicht.

## Bereitstellen und SSH-Verbindung speichern

Öffne **Plugins**, installiere **VPN Setup** aus dem Standardkatalog und öffne seine eigenständige Seite. Wähle **VPN einrichten**, einen Anbieter und anschließend **Mit Cloud-API erstellen** oder **In der Cloudkonsole erstellen**. Wähle für einen vorhandenen Server die Option für einen bestehenden öffentlichen Server. Gib Zugangsdaten im nativen Formular ein, wähle oder erzeuge einen SSH-Schlüssel und prüfe Standort, Größe, Image und SSH-Quell-CIDR. Kontoabhängige Auswahlmöglichkeiten und Vorabprüfungen helfen bei unterstützten Angeboten; sie reservieren keine Kapazität und garantieren keine Kontingente. Prüfe aktuelle Anbieterpreise und bestätige die Erstellung auf dem Bildschirm.

Verfolge den bestehenden Vorgang, bis VM und SSH bereit sind. Bei einer Zeitüberschreitung oder durch Android pausierter Hintergrundarbeit setze diesen Vorgang fort oder prüfe ihn, statt eine weitere kostenpflichtige VM zu erstellen. Verlorene Erstellungsantworten können eine Cloudsuche oder Konsolenprüfung erfordern. Bewahre die IDs von VM, Datenträger, Adresse und Firewall auf; auch ein gestoppter Ablauf kann bereits Ressourcen erstellt haben.

VPN Setup fordert die Bestätigung des SSH-Hostschlüssels an, speichert die Verbindung, installiert wg-easy und importiert den ersten Client. Vergleiche den Fingerabdruck mit der vertrauenswürdigen Anbieterkonsole. Füge bei manueller Einrichtung den Server unter **Server** mit öffentlicher IPv4, SSH-Port `22`, Image-Benutzernamen und passendem privaten Schlüssel hinzu. Die automatischen Adapter für Google Cloud und Azure verwenden `ubuntu`; die Konsolenanleitungen verwenden die dort festgelegten Namen. Siehe [Erste Schritte](../getting-started/) zu Identitätsprüfungen und gespeicherten Zugangsdaten.

## Die beiden Netzwerkschichten konfigurieren

Eine öffentliche Adresse benötigt eine Route, Freigaben in Cloud- und Gast-Firewall sowie einen lauschenden Dienst. Verwende diese Regeln in der Firewall/Sicherheitsgruppe des Anbieters; erhalte nötige bestehende Gastregeln.

- **TCP 22:** Erlaube SSH aus deinem gewählten Verwaltungs-CIDR. Richte das während der Bereitstellung ein.
- **UDP 51820:** Erlaube die Netze, aus denen das VPN genutzt wird. Für mobile Clients kann das `0.0.0.0/0` bedeuten. VPN Setup konfiguriert dies für API-erstellte Deployments; nutze bei eigenen Servern die Cloudkonsole.
- **TCP 51821:** Halte den Port öffentlich geschlossen. Veröffentliche die wg-easy-Verwaltung nur auf Server-Loopback und greife über einen SSH-Tunnel darauf zu.
- **Ausgehender Verkehr:** Erlaube Paket-/Containerdownloads, DNS und den Internetverkehr, den das VPN transportieren soll.

Prüfe das [Firewall-Verhalten von Docker](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): Veröffentlichte Containerports können UFW-Regeln umgehen. Verlasse dich zum Verbergen der Verwaltungsoberfläche nicht allein auf UFW und leere keine Firewallketten des Anbieters, insbesondere nicht OCIs Speicher-/iSCSI-Regeln.

<a id="wg-easy-install"></a>

## wg-easy auf der ausgewählten VM installieren

Nach der Freigabe installiert VPN Setup seine per Digest festgelegte wg-easy-Version über SSH, bei Bedarf Docker auf Ubuntu 24.04 und erstellt den ersten Client. Die Verwaltung bleibt auf Server-Loopback, Firewallketten des Anbieters bleiben erhalten. Konfiguriere bei einem konsolenerstellten oder vorhandenen Server die Cloudfirewall selbst; der Installer braucht SSH-Zugriff und Administratorrechte, nicht dein Cloud-API-Geheimnis. Nutze einen frischen dedizierten Server und gehe nicht davon aus, dass eine fremde VPN-Installation übernommen werden kann.

Das ältere Katalogplugin **WireGuard (wg-easy)** braucht eine aktive SSH-Sitzung und Docker. Es ist von **VPN Setup** getrennt und verspricht keinen nativen Clientimport. Nutze VPN Setup auf einem kompatiblen Android-Build oder den folgenden manuellen Weg im Mobile-SSH-Terminal auf einer frischen dedizierten VM.

### Manuelle Installation über SSH

Installiere Docker Engine und das Compose-Plugin nach der offiziellen [Ubuntu-Anleitung](https://docs.docker.com/engine/install/ubuntu/). Lade anschließend die Konfiguration der angegebenen Version aus dem Originalprojekt herunter:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.5.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Bearbeite `/opt/wg-easy/compose.yaml` vor dem Start mit einem Terminaleditor mit erhöhten Rechten. Ersetze unter `services.wg-easy` das Image, aktiviere oder setze den Umgebungsblock und ersetze die Portzuordnungen durch diese Werte. Erhalte den Rest der Originaldatei einschließlich persistentem Volume, Moduleinbindung, Fähigkeiten, Netzwerken und sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.5.0@sha256:071f79a639e9361123a5e57733107320207b844ddbbd92dfa6962f541fe8aac8
environment:
  - INSECURE=true
ports:
  - "51820:51820/udp"
  - "127.0.0.1:51821:51821/tcp"
```

Dies ist ein Ersatzabschnitt, keine vollständige Compose-Datei; erhalte die YAML-Einrückung innerhalb des Dienstes. `INSECURE=true` erlaubt HTTP nur für den SSH-Tunnel über Loopback. Veröffentliche den Verwaltungsport nicht im Internet. Der Listener im Container ist von der Loopback-Zuordnung auf dem Host zu unterscheiden. Siehe die [HTTP-Konfiguration des Originalprojekts](https://wg-easy.github.io/wg-easy/latest/examples/tutorials/reverse-proxyless/).

```sh
cd /opt/wg-easy
sudo docker compose -f compose.yaml config --quiet
sudo docker compose -f compose.yaml up -d
sudo docker compose -f compose.yaml ps
```

Bewahre die Containerdaten unter `/etc/wireguard` im persistenten Volume auf. Übernimm keine älteren Rezepte mit `PASSWORD`, `PASSWORD_HASH` oder `WG_HOST` für v15; verwende den Einrichtungsassistenten. Das Image ist bewusst festgelegt: Ein Upgrade erfordert die Prüfung einer neuen Version und eine Änderung der festen Referenz, nicht nur `pull`.

## Verwaltungsoberfläche öffnen und Client hinzufügen

Erstelle in Mobile SSH eine [lokale Portweiterleitung](../port-forwarding/) mit lokalem Port `51821`, entferntem Host `127.0.0.1` und entferntem Port `51821`. Halte die SSH-Verbindung aktiv und öffne `http://127.0.0.1:51821` auf demselben Telefon. Ist der lokale Port belegt, wähle einen anderen und verwende ihn in der Browser-URL.

Erstelle im [Assistenten beim ersten Start](https://wg-easy.github.io/wg-easy/latest/guides/setup/) von wg-easy ein Administratorkonto, wähle eine neue Installation und setze als VPN-Endpunkt die öffentliche IPv4 oder den DNS-Namen der VM mit Port `51820`. Der VPN-Endpunkt ist weder die Loopback-Adresse der Weboberfläche noch Port `51821`.

Erstelle einen Client pro Gerät und lade seine WireGuard-`.conf` herunter. Wenn dein Mobile-SSH-Build es anbietet, öffne **VPN → WireGuard**, füge ein Profil hinzu, importiere die Datei und speichere sie. Aktueller Android- und iOS-Quellcode unterstützen Dateiimport; prüfe deinen installierten Build. VPN Setup importiert seinen ersten Client auf kompatiblen Android-Builds direkt. Seine Seite bietet außerdem **Client hinzufügen**, **Client widerrufen**, **Client/QR exportieren** und **Verwaltung öffnen** über einen privaten SSH-Tunnel. Daraus folgen keine entsprechenden Fähigkeiten des älteren Plugins oder einer iOS-Automatisierung. Konfigurationsdateien und QR-Codes enthalten private Schlüssel; halte sie geheim.

## VPN prüfen und Fehler beheben

Starte das Profil und bestätige die VPN-Anfrage des Betriebssystems. Prüfe einen aktuellen Peer-Handshake und steigende Verkehrszähler, teste dann DNS und die gewünschten Internet- oder privaten Netzrouten. Ein importiertes Profil oder laufender Container allein beweist kein funktionierendes VPN.

- **VM-Erstellung abgelehnt:** Prüfe Abrechnung, Kontingente, regionale Kapazität, Ablauf der Zugangsdaten und genaue IAM-Rechte. Firewalländerungen bei Google Cloud brauchen mehr als Compute Network Admin; organisationsweit vorgeschriebenes OS Login erfordert eine genehmigte Konsoleneinrichtung.
- **SSH-Zeitüberschreitung:** Prüfe öffentliche Adresse, Subnetz-Routing, TCP-22-Regeln und die aktuelle Quell-IP des Telefons. Authentifizierungsfehler erfordern meist richtigen Image-Benutzernamen und SSH-Schlüssel.
- **Verwaltung nicht erreichbar:** Halte die SSH-Weiterleitung verbunden, prüfe Containerstatus und Loopback-Portzuordnung und bestätige, dass HTTP nur für den Tunnel aktiviert ist.
- **Kein WireGuard-Handshake:** Prüfe Clientendpunkt, UDP 51820 in beiden Firewalls, Clientschlüssel und ob der Server lauscht.
- **Handshake ohne Verkehr:** Prüfe Forwarding/NAT, DNS, überlappende Routen und `AllowedIPs`. Ein vollständiger IPv4-Tunnel verwendet `0.0.0.0/0`; bewerte IPv6 separat. Eine VM ohne vorgeschaltetes IPv6 bietet keinen IPv6-Internetausgang, und reine IPv4-Routen können IPv6 außerhalb des VPN lassen.

## Plugin und VPN-Server aktualisieren

Nutze unter **Plugins** die verfügbare Aktion **Aktualisieren** für eine neuere kompatible Version aus demselben Katalog. Prüfe neu angeforderte Fähigkeiten. Einstellungen, Zugangsdaten und Deploymentdatensätze bleiben erhalten; ein unfertiger Vorgang läuft mit seiner ursprünglichen Plugin-Version weiter. Ein Plugin-Update allein aktualisiert den wg-easy-Container auf dem Server nicht.

Ab Plugin-Bridge 1.4.0 meldet **Server prüfen** die laufende wg-easy-Version; **WireGuard aktualisieren** bietet die festgelegte Plugin-Version an. Bestätige das Update auf dem Bildschirm. Das Image wird vor Änderung des Dienstes geladen; Serverschlüssel, Clients und lokale Profile bleiben erhalten. Nutzt dieses Telefon das VPN, trennt die App es vorher; verbinde dich anschließend erneut. Aktualisiert wird der verwaltete Container, nicht das Hostbetriebssystem.

Ein fehlgeschlagenes Update unterscheidet zwischen Downloadfehler, erfolgreichem Rollback und fehlgeschlagenem Rollback mit ausgefallenem VPN. Folge der Wiederherstellungsprüfung oder versuche es erneut, statt die Rückkehr des Dienstes anzunehmen. Manuelle Installationen brauchen eine separat geprüfte Änderung der festgelegten Image-Version und eine Sicherung; die Neuinstallation oben ist keine Migrationsanleitung.

## Clients entfernen und Cloud-Kosten beenden

Widerrufe den Client in wg-easy, bevor du sein lokales Profil verwirfst. Das Löschen eines Profils in Mobile SSH widerruft den Peer-Schlüssel auf dem Server nicht. Sichere nötige Konfiguration vertraulich, bevor du VPN-Container oder persistente Daten entfernst.

Für ein API-erstelltes Deployment prüft und löscht **Deployment löschen** dessen eigene Cloudressourcen über die Anbieter-API, auch ohne SSH. Prüfe bei Pausen oder Fehlern die gemeldeten übrigen Ressourcen; setze die Bereinigung fort oder kontrolliere die Konsole. Halte fremde Ressourcen aus einem Plugin-Deployment heraus, insbesondere aus seiner eigenen Azure-Ressourcengruppe.

Bei einem konsolenerstellten oder bestehenden Server entfernt die Plugin-Löschung seine verwaltete VPN-Installation, **nicht** deine VM oder öffentliche IP. Lösche diese bei Nichtbedarf in der Anbieterkonsole und prüfe verbleibende Datenträger, Snapshots, Adressen und Netzwerkressourcen. Wurden bei der Wiederherstellung Konto oder Standort geändert, prüfe auch die früheren, einschließlich eines früheren Scaleway-Projekts oder Oracle-Cloud-Compartments.

**Ablauf stoppen** beendet den Vorgang, löscht aber keine Ressourcen. Ab Bridge 1.5.0 wird **Aus Liste entfernen** nur angeboten, wenn die App bestätigt, dass keine unfertigen Vorgänge oder ausstehenden verwalteten Ressourcen bleiben und der Eintrag vergessen werden darf. Es löscht lokale Historie, keine Cloudressourcen. Auch das Stoppen einer VM oder Deinstallieren des Plugins garantiert kein Ende der Kosten. Bewahre Ressourcen-IDs bis zur bestätigten Löschung auf.
