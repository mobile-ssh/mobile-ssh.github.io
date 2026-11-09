---
layout: ../../../layouts/DocLayout.astro
title: "Cloud-VMs und wg-easy"
description: "Erstelle eine Cloud-VM mit öffentlicher IP, speichere ihre SSH-Verbindung in Mobile SSH und installiere wg-easy separat – mit Erklärungen zu Zugangsdaten, Netzwerk und Ressourcenlöschung."
---

# Cloud-VMs und wg-easy

Erstelle eine Linux-VM in deinem eigenen Cloud-Konto, verbinde dich mit Mobile SSH und installiere anschließend wg-easy für ein WireGuard-VPN. Die Trennung von Bereitstellung und Installation lässt dich dieselbe VM für einen anderen Dienst nutzen oder das VPN auf einem vorhandenen Server installieren.

**Verfügbarkeit – 8. November 2026:** Separate Plugins zum Erstellen von VMs sind der unten beschriebene geplante Ablauf. Die geprüfte lokale Android-Implementierung **VPN Setup** kombiniert Bereitstellung, Installation und Client-Import; ihre Plugin- und Katalogänderungen sind unveröffentlicht, und echte Cloud-Bereitstellungen wurden noch nicht getestet. Die separaten Einträge für AWS, Google Cloud und Azure sind derzeit nur Gerüste aus Manifest und Einstellungen; ihre Aktionen zum Auflisten und Steuern von VMs sind nicht implementiert, und sie erstellen keine VMs. Nutze die folgenden Anleitungen für Konsole und manuelle Installation, wenn dein Katalog keinen Erstellungsablauf bietet. Der neue native Ablauf erfordert eine kompatible Android-Version; eine entsprechende iOS-Automatisierung ist nicht belegt.

## Zwei Plugins mit getrennten Aufgaben

- **Cloud-Bereitstellungsplugin:** erstellt über die Anbieter-API die VM, öffentliche Adresse und nötigen Netzwerkressourcen und speichert anschließend eine SSH-Verbindung. Es bewahrt die Ressourcen-IDs für spätere Verwaltung oder Löschung auf.
- **wg-easy-Installer:** verbindet sich per SSH mit einem ausgewählten gespeicherten Server, installiert den VPN-Dienst und hilft beim Erstellen einer Client-Konfiguration. Er benötigt Serverzugriff und Verwaltungsrechte, nicht deine Cloud-API-Zugangsdaten. Auch eine manuell erstellte VM lässt sich verwenden.

Die Übergabe sollte die Referenz auf den gespeicherten Server, öffentliche Adresse, SSH-Port, Benutzernamen, Referenz auf die SSH-Zugangsdaten sowie Bereitstellungs- und Ressourcen-IDs enthalten. Cloud-Geheimnisse und private SSH-Schlüssel sollten weder in Plugin-Ausgaben noch auf die VM kopiert werden. Das Entfernen des VPNs und das Löschen der Cloud-VM sind getrennte Vorgänge.

## Konto und Servereinstellungen vorbereiten

1. Aktiviere Cloud-Konto und Abrechnung, wähle eine Region und prüfe Kontingente für VMs, Datenträger und öffentliche IPs. Prüfe die aktuellen Kosten für VM, IPv4, Speicher und Datenverkehr; ein kostenloses Kontingent wird nicht vorausgesetzt.
2. Wähle für diese Anleitung eine dedizierte VM mit **Ubuntu 24.04 LTS**, mindestens **1 GB RAM und 20 GB Datenträger** sowie **amd64 oder arm64**. Das sind die Ausgangswerte dieses Aufbaus, keine allgemeingültigen Mindestanforderungen von wg-easy. Verwende einen Zugang mit root- oder sudo-Rechten; unbeaufsichtigte Installation benötigt eine nicht interaktive Rechteerweiterung.
3. Wähle oder erzeuge einen SSH-Schlüssel und behalte den privaten Schlüssel in Mobile SSH. Lade nur den öffentlichen Schlüssel in die Cloud. Der Lightsail-Import erfordert einen RSA-SSH-Schlüssel. Andere Anbieter und Images haben eigene unterstützte Schlüsseltypen. Der aktuelle iOS-SSH-Client unterstützt private Ed25519-/ECDSA-Schlüssel statt RSA. Nutze für Lightsail auf iOS zuerst die Browser-SSH-Konsole des Anbieters, um einen von der App unterstützten öffentlichen Schlüssel in `authorized_keys` einzutragen, und verbinde dich anschließend mit diesem Schlüssel.
4. Wähle eine **öffentliche IPv4**, möglichst reserviert oder statisch, sofern angeboten. Eine private Adresse, reine IPv6-Instanz oder ein NAT-Gateway nur für ausgehenden Verkehr erfüllt die Endpunktanforderung dieser Anleitung nicht.
5. Lege das SSH-Quell-CIDR ausdrücklich fest, etwa deine aktuelle öffentliche IPv4 mit `/32`. Verlasse dich nicht darauf, dass die Plugin-Voreinstellung den Zugriff einschränkt. Beim Wechsel zwischen Mobilfunk und WLAN musst du diese Regel möglicherweise über die Cloud-Konsole aktualisieren.

Cloud-API-Zugangsdaten erlauben die Ressourcenverwaltung; SSH-Schlüssel erlauben die Serveranmeldung. Es sind unterschiedliche Zugangsdaten. Gib API-Geheimnisse nur im geschützten Zugangsdatenformular für den Anbieter ein, niemals in Sprachanweisungen, Terminalbefehlen oder Quelldateien. Im lokalen Android-Ablauf übernimmt nativer Code die Anbieteranmeldung und verschlüsselte Speicherung; erforderlichenfalls werden Zugangsdaten an den Anbieter gesendet, nicht an die VM oder den Plugin-Worker. Ein Offline-Sprachmodell ermöglicht Cloud-API-Aufrufe, Downloads und SSH nicht ohne Internetzugang.

## Cloud wählen und öffentliche Adresse erhalten

Melde dich für die **Einrichtung über die Konsole** selbst beim Anbieter an; Mobile SSH braucht dafür keine API-Zugangsdaten. Bereite für die zukünftige **Bereitstellung per Plugin** die unten genannten Zugangsdaten mit den nötigen Erstellungs-, Lese-, Netzwerk- und Löschrechten vor. Beschränke den Zugriff auf ein dediziertes Projekt oder eine Bereitstellung, soweit unterstützt. Kontorichtlinien gelten für beide Verfahren.

Erstelle die gewählte Ubuntu-VM mit deinem öffentlichen SSH-Schlüssel und wende die SSH-Regel aus dem nächsten Abschnitt an. Die Links erklären die jeweiligen Schritte für Adressen und Anmeldung beim Anbieter.

<div class="doc-table" tabindex="0" role="region" aria-label="Cloud-Anbieter und öffentliche Adressen">

| Anbieter | Zugangsdaten für API-Bereitstellung | Öffentliche IPv4 über die Konsole einrichten |
| --- | --- | --- |
| AWS Lightsail | Zugriffsschlüssel-ID und Geheimnis; bei temporären Zugangsdaten zusätzlich Sitzungstoken. Erlaube die nötigen [Lightsail-Aktionen](https://docs.aws.amazon.com/service-authorization/latest/reference/list_lightsail.html). | Erstelle eine Ubuntu-Instanz mit Dual Stack, wähle den RSA-SSH-Schlüssel und reserviere und verknüpfe eine [statische IPv4 in derselben Region](https://docs.aws.amazon.com/lightsail/latest/userguide/lightsail-create-static-ip.html). Verwende beim Ubuntu-Image `ubuntu`. |
| Google Cloud Compute Engine | JSON-Schlüssel eines Dienstkontos und Projekt-ID. Rechte müssen VM/Datenträger, Netzwerk, Adressen und Firewall abdecken; Network Admin allein darf Firewallregeln nicht schreiben. Prüfe die [IAM-Berechtigungen](https://docs.cloud.google.com/compute/docs/access/iam). | Aktiviere Compute Engine API, wähle VPC/Subnetz mit Internetrouting, reserviere eine [regionale externe IPv4](https://docs.cloud.google.com/compute/docs/ip-addresses/configure-static-external-ip-address) und ordne sie der VM zu. Richte passenden SSH-Benutzernamen und Schlüssel ein; OS Login benötigt eine eigene Identitätseinrichtung. |
| Microsoft Azure | Mandanten-ID, Anwendungs-/Client-ID, **Wert** des Client-Geheimnisses und Abonnement-ID. Erlaube Compute-/Netzwerkoperationen; das Erstellen einer Ressourcengruppe erfordert auch Rechte im übergeordneten Geltungsbereich. Siehe [Dienstprinzipal einrichten](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal). | Erstelle eine dedizierte Ressourcengruppe und VNet/Subnetz. Verknüpfe eine [statische Standard-IPv4-Public-IP](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses) mit der VM-NIC und ordne eine NSG zu. Verwende den bei der Erstellung gewählten Administratornamen. |
| DigitalOcean | Persönliches Zugriffstoken mit den nötigen [Berechtigungsbereichen](https://docs.digitalocean.com/reference/api/create-personal-access-token/) für Droplets, SSH-Schlüssel, Reserved IPs, Firewalls und zugehörige Aktionen. | Erstelle ein Ubuntu-Droplet mit öffentlichem SSH-Schlüssel, weise eine [Reserved IPv4](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/) zu und verknüpfe eine Cloud Firewall. Der anfängliche Ubuntu-Benutzer ist meist `root`. |
| Hetzner Cloud | Projektspezifisches [Read-&-Write-API-Token](https://docs.hetzner.com/cloud/api/getting-started/generating-api-token/). | Erstelle einen Ubuntu-Server mit [Primary IPv4](https://docs.hetzner.com/cloud/servers/primary-ips/overview/), deinem SSH-Schlüssel und einer Cloud Firewall. Verwende `root`. Prüfe, ob die separate Primary IP beim Löschen des Servers erhalten bleibt. |
| Akamai / Linode | Persönliches Zugriffstoken mit Lese-/Schreibrechten für Linodes und Firewalls sowie den nötigen [Leseberechtigungen](https://techdocs.akamai.com/linode-api/reference/get-started). | Erstelle einen Ubuntu-Linode mit öffentlicher IPv4 und SSH-Schlüssel, verknüpfe dann eine [Cloud Firewall](https://techdocs.akamai.com/cloud-computing/docs/getting-started-with-cloud-firewalls). Verwende `root`. Behalte die zugewiesene Adresse für die Lebensdauer der Instanz. |
| Vultr | API-Schlüssel mit aktiviertem API-Zugang; seine [Freigabeliste für Quell-IPs](https://docs.vultr.com/support/platform/users/how-can-i-manage-api-access-for-users) muss die aktuelle Telefonverbindung zulassen. | Erstelle eine Ubuntu-Cloud-Compute-Instanz mit öffentlicher Haupt-IPv4, SSH-Schlüssel und Firewall Group. Verwende `root`. Die [zugewiesene Adresse gilt für die Lebensdauer der Instanz](https://docs.vultr.com/support/products/compute/how-do-i-get-a-vultr-compute-instance-dedicated-ip-address); eine Reserved IP ist eine separate Option. |
| Oracle Cloud Infrastructure | Mandanten-/Benutzer-OCIDs, API-Schlüsselfingerabdruck und [privater RSA-Signaturschlüssel](https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm), dessen öffentlicher Schlüssel registriert ist. Er ist vom SSH-Schlüssel getrennt. | Erstelle VCN, Internetgateway und öffentliches Subnetz mit Gateway-Route. Weise der privaten IP der VM-VNIC eine [Reserved Public IPv4](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingpublicIPs.htm) zu. Verwende bei Canonical Ubuntu `ubuntu`; konfiguriere Sicherheitslisten/NSG. |
| OVHcloud Public Cloud | Anwendungsschlüssel, Anwendungsgeheimnis und bestätigter Verbraucherschlüssel für den passenden EU-/CA-/US-API-Endpunkt. Beschränke die [API-Rechte](https://docs.ovhcloud.com/en/guides/manage-and-operate/api/first-steps) auf Aktionen im ausgewählten Projekt. | Erstelle eine Ubuntu-[Public-Cloud-Instanz](https://docs.ovhcloud.com/en/guides/public-cloud/compute/getting-started) mit Basic Public IP über Ext-Net, SSH-Schlüssel und Sicherheitsgruppe. Verwende `ubuntu`. Floating/Additional IPs sind separate Ressourcen. |
| Scaleway Instances | API-Geheimschlüssel einer IAM-Anwendung und Projekt-UUID mit Rechten für Instanzen, Volumes, IPs, Sicherheitsgruppen und SSH-Schlüssel. Siehe [API-Schlüssel erstellen](https://www.scaleway.com/en/docs/iam/credentials/create-api-keys/). | Erstelle eine Ubuntu-Instanz, verknüpfe eine [flexible geroutete IPv4 derselben Zone](https://www.scaleway.com/en/docs/instances/how-to/use-flexips/), konfiguriere eine Sicherheitsgruppe und schalte die Instanz ein. Verwende den SSH-Benutzer des Images, häufig `root`. |

</div>

**AWS-EC2-Alternative:** Starte Ubuntu in einem öffentlichen Subnetz mit [Internetgateway und einer `0.0.0.0/0`-Route zum Gateway](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html), wähle SSH-Schlüssel und Sicherheitsgruppe und ordne anschließend eine [Elastic IP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-eips.html) zu. Verwende `ubuntu`. Der lokale automatische Adapter nutzt Lightsail; EC2 wird über die Konsole eingerichtet. Eine Elastic IP allein macht ein privates Subnetz nicht erreichbar.

Wenn eine Organisation Dienstkontoschlüssel, externe IPs oder die gewählte SSH-Anmeldung untersagt, hole eine vom Administrator genehmigte Konfiguration ein. Die Konsoleneinrichtung umgeht diese Einschränkungen nicht.

## Bereitstellen und SSH-Verbindung speichern

Öffne im geplanten getrennten Ablauf **Plugins**, installiere das Bereitstellungsplugin des Anbieters aus einem vertrauenswürdigen Katalog, wähle Konto und Region sowie VM-Größe, Image, öffentliche Adresse und SSH-Schlüssel. Prüfe Ressourcen und Kosten vor der Bestätigung. Ein reines Verwaltungsplugin ohne Erstellungsaktion kann diesen Schritt nicht übernehmen; nutze stattdessen die Anbieterkonsole.

Warte, bis der Anbieter die VM als laufend meldet und SSH erreichbar ist. Bewahre die IDs von VM, Datenträger, Adresse und Firewall auf. Prüfe oder setze bei einer Zeitüberschreitung den bestehenden Vorgang fort, bevor du erneut erstellst, damit keine zweite kostenpflichtige VM entsteht.

Speichere die zurückgegebene Verbindung in Mobile SSH oder füge sie unter **Server** manuell hinzu: öffentliche IPv4, SSH-Port `22`, Image-Benutzername und passender privater Schlüssel. Vergleiche vor der Verbindung den Fingerabdruck des SSH-Hostschlüssels über die vertrauenswürdige Anbieterkonsole. Unter [Erste Schritte](../getting-started/) findest du Identitätsprüfungen und gespeicherte Zugangsdaten.

## Die beiden Netzwerkschichten konfigurieren

Eine öffentliche Adresse benötigt eine Route, Freigaben in Cloud- und Gast-Firewall sowie einen lauschenden Dienst. Verwende diese Regeln in der Firewall/Sicherheitsgruppe des Anbieters; erhalte nötige bestehende Gastregeln.

- **TCP 22:** Erlaube SSH aus deinem gewählten Verwaltungs-CIDR. Richte das bei der Bereitstellung ein.
- **UDP 51820:** Erlaube die Netze, die das VPN verwenden werden. Für wechselnde Client-Netze kann das `0.0.0.0/0` bedeuten. Füge die Regel bei der WireGuard-Einrichtung über das Bereitstellungsplugin oder die Konsole hinzu.
- **TCP 51821:** Halte den Port öffentlich geschlossen. Veröffentliche die wg-easy-Verwaltungsoberfläche nur auf dem Server-Loopback und greife per SSH-Tunnel darauf zu.
- **Ausgehender Verkehr:** Erlaube Paket-/Containerdownloads, DNS und den Internetverkehr, den das VPN transportieren soll.

Prüfe das [Firewall-Verhalten von Docker](https://docs.docker.com/engine/install/ubuntu/#firewall-limitations): Veröffentlichte Containerports können UFW-Regeln umgehen. Verlasse dich zum Verbergen der Verwaltungsoberfläche nicht allein auf UFW und leere keine Firewallketten des Anbieters, insbesondere nicht OCIs Speicher-/iSCSI-Regeln.

## wg-easy auf der ausgewählten VM installieren

Der separate Installer sollte den gespeicherten SSH-Server übernehmen und Änderungen am Server zur Freigabe vorlegen. Er sollte Betriebssystem, Rechte, vorhandene Docker-/VPN-Installationen und Portkonflikte prüfen, persistente Daten erhalten und die installierte Version melden. Das Cloud-Kontogeheimnis benötigt er nicht; ändere die Cloud-Firewall über Bereitstellungsplugin oder Konsole.

Das ältere Katalogplugin **WireGuard (wg-easy)** benötigt eine aktive SSH-Sitzung und Docker. Es ist nicht der neue automatische Installer und verspricht keinen nativen Client-Import. Verwende einen kompatiblen aktualisierten Installer oder den folgenden manuellen Weg im Mobile-SSH-Terminal auf einer frischen dedizierten VM.

### Manuelle Installation über SSH

Installiere Docker Engine und das Compose-Plugin nach der offiziellen [Ubuntu-Anleitung](https://docs.docker.com/engine/install/ubuntu/). Lade anschließend die Konfiguration der angegebenen Version aus dem Originalprojekt herunter:

```sh
sudo mkdir -p /opt/wg-easy
sudo curl -fL https://raw.githubusercontent.com/wg-easy/wg-easy/v15.4.0/docker-compose.yml -o /opt/wg-easy/compose.yaml
```

Bearbeite `/opt/wg-easy/compose.yaml` vor dem Start mit einem Terminaleditor mit erhöhten Rechten. Ersetze unter `services.wg-easy` das Image, aktiviere oder setze den Umgebungsblock und ersetze die Portzuordnungen durch diese Werte. Erhalte den Rest der Originaldatei einschließlich persistentem Volume, Moduleinbindung, Fähigkeiten, Netzwerken und sysctls:

```yaml
image: ghcr.io/wg-easy/wg-easy:15.4.0@sha256:0e7bc9d34e86ddcaa92bc700d4d7dc9b33291dbc07ac8d13382f7c2095f949ec
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

Erstelle einen Client pro Gerät und lade dessen WireGuard-Datei `.conf` herunter. Wenn deine Mobile-SSH-Version es anbietet, öffne **VPN → WireGuard**, füge ein Profil hinzu, importiere die Datei und speichere sie. Der aktuelle Android- und iOS-Quellcode unterstützt Dateiimport; prüfe deine installierte Version. Der lokale kombinierte Android-Ablauf kann direkt importieren. Das ist jedoch keine Zusage für das ältere Plugin oder eine iOS-Automatisierung. Konfigurationsdateien und QR-Codes enthalten private Schlüssel; halte sie vertraulich.

## VPN prüfen und Fehler beheben

Starte das Profil und bestätige die VPN-Anfrage des Betriebssystems. Prüfe einen aktuellen Peer-Handshake und steigende Verkehrszähler, teste dann DNS und die gewünschten Internet- oder privaten Netzrouten. Ein importiertes Profil oder laufender Container allein beweist kein funktionierendes VPN.

- **VM-Erstellung abgelehnt:** Prüfe Abrechnung, Kontingente, regionale Kapazität, Ablauf der Zugangsdaten und genaue IAM-Rechte. Firewalländerungen in Google Cloud brauchen zusätzliche Rechte zu Network Admin.
- **SSH-Zeitüberschreitung:** Prüfe öffentliche Adresse, Subnetzrouting, TCP-22-Regeln und die aktuelle Quell-IP des Telefons. Bei Anmeldefehlern werden meist der richtige Image-Benutzername und SSH-Schlüssel benötigt.
- **Verwaltungsoberfläche nicht erreichbar:** Halte die SSH-Weiterleitung verbunden, prüfe Containerstatus und Loopback-Portzuordnung und bestätige, dass HTTP nur für den Tunnel aktiviert ist.
- **Kein WireGuard-Handshake:** Prüfe Client-Endpunkt, UDP 51820 in beiden Firewall-Schichten, Client-Schlüssel und ob der Server lauscht.
- **Handshake, aber kein Verkehr:** Prüfe Weiterleitung/NAT, DNS, überlappende Routen und `AllowedIPs`. Ein IPv4-Volltunnel nutzt `0.0.0.0/0`; bewerte IPv6 gesondert. Eine VM ohne vorgelagerte IPv6-Anbindung bietet keinen IPv6-Internetzugang, und reine IPv4-Routen können IPv6 außerhalb des VPNs lassen.

## Clients entfernen und Cloud-Kosten beenden

Widerrufe den Client in wg-easy, bevor du sein lokales Profil verwirfst. Das Löschen eines Profils in Mobile SSH widerruft den Peer-Schlüssel auf dem Server nicht. Sichere nötige Konfiguration vertraulich, bevor du VPN-Container oder persistente Daten entfernst.

Lösche eine nicht mehr benötigte VM über das zuständige Bereitstellungsplugin oder die Anbieterkonsole und prüfe anschließend erhaltene Datenträger, Snapshots, reservierte/öffentliche Adressen und Netzwerkressourcen. Prüfe vor dem Löschen den Inhalt einer dedizierten Azure-Ressourcengruppe. Halte fremde Ressourcen aus einer vom Plugin verwalteten Bereitstellung heraus.

Das Stoppen einer VM, Abbrechen eines Einrichtungsauftrags oder Deinstallieren des Plugins garantiert weder Ressourcenlöschung noch Kostenende. Über die Konsole erstellte Ressourcen musst du selbst aufräumen; bewahre ihre Anbieter-IDs auf, bis die Löschung bestätigt ist.
