import type { CloudGuides } from "./types";

export const de: CloudGuides = {
  "title": "Eine VM bei {provider} erstellen",
  "description": "Schrittweise eine VM bei {provider} erstellen: öffentliche IPv4, Firewallregeln, SSH-Zugriff mit Mobile SSH, optionale API-Zugangsdaten und Ressourcen löschen.",
  "intro": "Erstelle einen Ubuntu-Server mit öffentlicher IPv4 in deinem eigenen {provider}-Konto. Folge den Konsolenschritten, verbinde dich über Mobile SSH und installiere wg-easy anschließend als separate Aufgabe.",
  "back": "Cloud-VMs und wg-easy",
  "indexHeading": "Schrittweise Anleitungen für Cloudanbieter",
  "indexIntro": "Wähle deinen Anbieter für dessen Konsolenansichten, Einstellungen zur öffentlichen IP, SSH-Benutzer, optionale API-Zugangsdaten und das Löschen von Ressourcen. Für AWS Lightsail und EC2 gibt es getrennte Anleitungen.",
  "cardAction": "Eine VM erstellen und mit Mobile SSH verbinden",
  "navLabel": "Einen Cloudanbieter auswählen",
  "openConsole": "Anbieterkonsole öffnen",
  "availability": "Diese Anleitungen verwenden die Konsole des Anbieters. Separate Plugins zum Erstellen von VMs sind geplant; die kombinierte Android-Implementierung VPN Setup ist lokal und unveröffentlicht. Der API-Abschnitt bereitet einen künftigen Zugriff vor und ist für diesen manuellen Weg nicht nötig.",
  "availabilityLink": "Plugin-Verfügbarkeit prüfen",
  "checked": "Konsolendokumentation am 8. November 2026 geprüft.",
  "beforeHeading": "Vorbereitung",
  "before": [
    "Aktiviere die Abrechnung und prüfe regionale Kontingente für VMs, Datenträger und öffentliche IPs. Prüfe vor dem Erstellen von Ressourcen den angezeigten Preis; gehe weder von einem kostenlosen Kontingent noch von der Verfügbarkeit eines bestimmten Tarifs aus.",
    "Verwende für diese Einrichtung Ubuntu 24.04 LTS mit mindestens 1 GB RAM und 20 GB Speicher oder dem höheren Mindestwert des Anbieters. CPU-Architektur und Image müssen zusammenpassen. Das ist die Grundlage dieser Anleitung, kein allgemeiner Mindestbedarf von wg-easy.",
    "Bewahre einen privaten SSH-Schlüssel in Mobile SSH auf und lade nur seinen öffentlichen Schlüssel hoch. Ed25519 funktioniert mit den aktuellen Android- und iOS-Clients; der RSA-Import von Lightsail und der zusätzliche Weg für iOS stehen in dessen Schritten. Notiere deine aktuelle öffentliche IPv4 mit anschließendem <code>/32</code> als SSH-Quelle oder verwende deinen genehmigten Verwaltungs-CIDR."
  ],
  "networkHeading": "Netzwerkregeln für diese Einrichtung",
  "networkRules": [
    "Erlaube eingehendes <code>TCP 22</code> vom Verwaltungs-CIDR. Entferne weiter gefasste SSH-Freigaben, wenn sie nicht benötigt werden; eine zusätzliche enge Regel hebt eine breitere nicht automatisch auf. Aktualisiere die Quelle, wenn sich die öffentliche Adresse deines Telefons ändert.",
    "Erlaube für den späteren VPN-Schritt eingehendes <code>UDP 51820</code> aus den Netzen der VPN-Clients; mobile Clients benötigen möglicherweise <code>0.0.0.0/0</code>. Konfiguriere IPv6-Regeln gezielt, wenn du IPv6 aktivierst.",
    "Lass öffentliches <code>TCP 51821</code> geschlossen. Die Verwaltungsoberfläche von wg-easy bindet an die Loopback-Adresse des Servers und wird über SSH-Weiterleitung erreicht.",
    "Erlaube den nötigen ausgehenden DNS-Verkehr, Paket- und Containerdownloads sowie VPN-Verkehr. Prüfe Cloud- und Gast-Firewalls; erhalte die Speicherregeln des Anbieters und wichtige ICMP-Regeln."
  ],
  "stepsHeading": "Server erstellen und verbinden",
  "sourceLink": "Anleitung des Anbieters",
  "connectHeading": "Server in Mobile SSH speichern",
  "connectText": "Öffne Server, füge einen Server hinzu und trage diese Werte ein. Wähle den Zugang mit dem passenden privaten Schlüssel. Verwende deinen konfigurierten Benutzernamen, falls er vom Beispiel der Anleitung abweicht.",
  "hostLabel": "Host",
  "hostValue": "Die öffentliche IPv4 der VM aus der Anbieterkonsole",
  "portLabel": "Port",
  "userLabel": "Benutzername",
  "credentialLabel": "Authentifizierung",
  "credentialValue": "Der Zugang mit dem passenden privaten SSH-Schlüssel",
  "identityText": "Ermittle den Fingerabdruck des SSH-Hostschlüssels über die vertrauenswürdige Anbieterkonsole oder Startprotokolle und vergleiche ihn, bevor du der Verbindung vertraust. Deaktiviere unter Android die automatische Annahme neuer Identitäten, wenn du die erste Verwendung prüfen möchtest. Kläre Warnungen über geänderte Schlüssel, bevor du eine gespeicherte Identität ersetzt.",
  "connectionGuide": "SSH-Schlüssel und Identitätsprüfungen",
  "vpnHeading": "wg-easy in einem eigenen Schritt installieren",
  "vpnText": "Prüfe zuerst, ob der gespeicherte Server ein Terminal öffnet und dein Benutzer root- oder sudo-Zugriff hat. Folge anschließend der gemeinsamen wg-easy-Installationsanleitung: Docker, festgelegte Containerversion, private Verwaltung über SSH, Client-Erstellung und VPN-Prüfung. Das Installationsprogramm braucht SSH-Zugriff, nicht dein Cloud-API-Geheimnis.",
  "vpnLink": "Zu den Installationsschritten für wg-easy",
  "apiHeading": "Optionale API-Zugangsdaten für ein künftiges Plugin",
  "apiIntro": "Überspringe diesen Abschnitt bei der Einrichtung über die Konsole. Erstelle Zugangsdaten erst, wenn ein kompatibles Bereitstellungswerkzeug sie benötigt. Die folgenden Berechtigungslisten dienen der Vorbereitung; sie sind keine geprüften Mindestrichtlinien für ein veröffentlichtes Plugin.",
  "apiSecretNote": "Gib Zugangsdaten nur in ein unterstütztes geschütztes Formular ein. Schreibe Cloud-Geheimnisse weder in Sprachaufträge noch in Terminalbefehle oder auf die VM. Nutze den engsten unterstützten Berechtigungsumfang, notiere das Ablaufdatum und widerrufe nicht mehr benötigte Zugangsdaten.",
  "cleanupHeading": "Nicht mehr benötigte Ressourcen löschen",
  "cleanupWarning": "Das Stoppen der VM, Abbrechen eines Einrichtungsauftrags oder Entfernen eines Mobile-SSH-Profils löscht keine Cloudressourcen und garantiert kein Ende der Kosten. Bewahre Ressourcen-IDs auf, bis die Löschung bestätigt ist, und erhalte nicht zugehörige Ressourcen.",
  "providers": {
    "aws-lightsail": {
      "consoleSteps": [
        "Melde dich bei deinem AWS-Konto an, öffne Lightsail und wähle <strong>Instance erstellen</strong>. Wähle die Region, die deinem geplanten VPN-Standort am nächsten liegt.",
        "Wähle <strong>Linux/Unix → Nur Betriebssystem → Ubuntu 24.04 LTS</strong>. Wähle einen IPv4/IPv6-Dual-Stack-Tarif mit mindestens 1 GB RAM und 20 GB Speicher; prüfe den angezeigten Preis.",
        "Wähle das regionale SSH-Schlüsselpaar oder lade deinen öffentlichen RSA-Schlüssel hoch. Bewahre den privaten Schlüssel sicher auf, benenne die Instance und wähle <strong>Instance erstellen</strong>. iOS benötigt die zusätzliche Schlüsseleinrichtung weiter unten.",
        "Öffne <strong>Netzwerk → Statische IP erstellen</strong>. Wähle dieselbe Region, ordne die Adresse dieser Instance zu, benenne und erstelle sie. Notiere die statische IPv4.",
        "Beschränke SSH im Tab <strong>Netzwerk</strong> der Instance auf die öffentliche IPv4 deines Telefons und behalte <strong>Lightsail-Browser-SSH/RDP zulassen</strong> bei. Ergänze die gemeinsame UDP-51820-Regel; prüfe IPv6-Regeln separat und lass TCP 51821 geschlossen.",
        "Wähle für iOS <strong>Verbinden → Über SSH verbinden</strong>. Ergänze den öffentlichen Ed25519-Schlüssel deiner App als neue Zeile in <code>/home/ubuntu/.ssh/authorized_keys</code> und erhalte vorhandene Schlüssel. Browser-SSH nutzt einen separaten Anbieterschlüssel; deine statische IPv4 ist jetzt bereit."
      ],
      "apiSteps": [
        "Erstelle nur für ein künftiges Bereitstellungswerkzeug eine eigene IAM-Identität mit den nötigen Lightsail-Aktionen für Instances, SSH-Schlüssel, statische IPs und Firewalls einschließlich Löschung. Beschränke Region und Ressourcen, wo unterstützt; dies ist keine geprüfte Mindestrichtlinie.",
        "Erstelle unter <strong>IAM → Benutzer → Sicherheitsanmeldeinformationen</strong> nur dann einen Zugriffsschlüssel, wenn unterstützte Automatisierung ihn benötigt. Übergib ID und Geheimnis über das geschützte native Formular; temporäre Zugangsdaten benötigen zusätzlich ihr Sitzungstoken. Verwende niemals Root-Schlüssel."
      ],
      "cleanupSteps": [
        "Lösche die Instance nach Gebrauch. Prüfe erhaltene Snapshots und Datenträger separat; das Stoppen einer Instance beendet nicht alle Kosten.",
        "Gib die statische IP nach dem Trennen separat frei. Das Löschen ihrer Instance löscht die Adresse nicht."
      ]
    },
    "aws-ec2": {
      "consoleSteps": [
        "Öffne EC2 in deiner AWS-Region und wähle <strong>Instance starten</strong>. Benenne den Server und wähle ein offizielles Canonical-AMI <strong>Ubuntu Server 24.04 LTS</strong>; prüfe Herausgeber und Architektur.",
        "Wähle einen Instance-Typ mit mindestens 1 GB RAM und passender Architektur. Wähle unter <strong>Speicher konfigurieren</strong> mindestens 20 GB für das Startvolume und prüfe die geschätzten Ressourcenkosten.",
        "Wähle unter <strong>Schlüsselpaar</strong> einen vorhandenen Schlüssel oder erstelle/importiere ein Ed25519-Schlüsselpaar für Linux. Halte den passenden privaten Schlüssel in der App bereit; AWS installiert den öffentlichen Schlüssel auf der Instance.",
        "Wähle in <strong>Netzwerkeinstellungen</strong> ein öffentliches Subnetz. Dessen VPC benötigt ein zugeordnetes Internet-Gateway und eine Route <code>0.0.0.0/0</code> zu diesem Gateway. Aktiviere eine öffentliche IPv4; die statische Adresse folgt unten.",
        "Erstelle oder wähle eine Sicherheitsgruppe mit den gemeinsamen TCP-22- und UDP-51820-Regeln. Beschränke SSH auf die öffentliche IPv4 des Telefons, lass TCP 51821 geschlossen, wähle <strong>Instance starten</strong> und warte auf den laufenden Zustand.",
        "Öffne <strong>Netzwerk und Sicherheit → Elastic IPs → Elastic-IP-Adresse zuweisen</strong>. Wähle dann <strong>Aktionen → Elastic-IP-Adresse zuordnen</strong> und diese Instance mit ihrer primären privaten IP. Notiere die statische IPv4; öffentliche IPv4-Adressen sind kostenpflichtig."
      ],
      "apiSteps": [
        "Erstelle nur für ein künftiges Bereitstellungswerkzeug eine eigene IAM-Identität für die Instance-Erstellung, zugehörige AMI-/Netzwerk-/Datenträger-/Schlüsselressourcen, Tags, Elastic IPs und Löschung. Vorhandene Lese-/Start-/Stopp-Berechtigungen reichen nicht. Ergänze <code>iam:PassRole</code> nur beim Zuordnen eines Instance-Profils.",
        "Erstelle oder beschaffe die Zugangsdaten dieser Identität und übergib sie ausschließlich über unterstützte geschützte native Einstellungen. Bevorzuge unterstützte temporäre Zugangsdaten einschließlich Sitzungstoken; verwende nie Root-Zugriffsschlüssel. Dieser Konsolenablauf benötigt keinen API-Schlüssel in Mobile SSH."
      ],
      "cleanupSteps": [
        "Beende die Instance. Prüfe <strong>Bei Beendigung löschen</strong> und entferne unerwünschte erhaltene EBS-Volumes oder Snapshots separat.",
        "Gib die Elastic IP separat frei. Die Beendigung trennt die Adresse, gibt sie aber nicht frei und beendet ihre Kosten nicht."
      ]
    },
    "google-cloud": {
      "consoleSteps": [
        "Wähle oder erstelle ein Google-Cloud-Projekt, aktiviere die Abrechnung und die <strong>Compute Engine API</strong>. Öffne <strong>Compute Engine → VM-Instanzen → Instanz erstellen</strong>.",
        "Benenne die VM und wähle Region, Zone sowie eine Maschine mit mindestens 1 GB RAM. Wähle unter <strong>Betriebssystem und Speicher → Ändern</strong> die Optionen <strong>Ubuntu → Ubuntu 24.04 LTS</strong> und mindestens 20 GB Speicher.",
        "Reserviere eine regionale statische externe IPv4 in der Region der VM. Wähle in deren Einstellungen <strong>Netzwerk</strong> die vorgesehene VPC und das Subnetz sowie diese Adresse als externe IPv4 der Netzwerkschnittstelle. Die VPC benötigt eine Standardroute ins Internet; erstelle ein geeignetes Netzwerk und Subnetz, falls das Projekt keines hat.",
        "Füge in den SSH-Schlüsseleinstellungen der VM den öffentlichen App-Schlüssel mit <code>mobileuser</code> als Benutzernamenkommentar ein: <code>ssh-ed25519 AAAA… mobileuser</code>. Erzwingt dein Projekt OS Login, nutze diesen Ablauf mit dem zugewiesenen POSIX-Benutzernamen; Metadatenschlüssel setzen ihn nicht außer Kraft.",
        "Ergänze ein Netzwerk-Tag wie <code>wg-vpn</code>. Erstelle eingehende Firewallregeln für dieses Tag mit dem gemeinsamen TCP-22- und UDP-51820-Zugriff. Beschränke SSH auf die öffentliche IPv4 des Telefons und lass TCP 51821 geschlossen.",
        "Prüfe die VM-Konfiguration abschließend und wähle <strong>Erstellen</strong>. Warte, bis die Instanz läuft, und notiere ihre externe IPv4 sowie den oben gewählten SSH-Benutzernamen. Gehe nicht davon aus, dass der Benutzer <code>ubuntu</code> heißt."
      ],
      "apiSteps": [
        "Nutze nur für ein künftiges Bereitstellungswerkzeug ein eigenes Dienstkonto mit den projektbezogenen Rollen Compute-Instanzadministrator (v1), Compute-Netzwerkadministrator und Compute-Sicherheitsadministrator oder engeren Entsprechungen. Compute-Netzwerkadministratoren können keine Firewalls erstellen. Ordne beim Anhängen eines VM-Dienstkontos zusätzlich die Rolle Dienstkontonutzer für dieses Konto zu.",
        "Falls unterstützte Automatisierung einen JSON-Schlüssel benötigt und die Organisationsrichtlinie dies erlaubt, öffne <strong>IAM und Verwaltung → Dienstkonten → Schlüssel → Schlüssel hinzufügen → Neuen Schlüssel erstellen → JSON</strong>. Übergib Projekt-ID und JSON über geschützte native Einstellungen; umgehe niemals eine Schlüsselbeschränkung."
      ],
      "cleanupSteps": [
        "Lösche die VM und prüfe, ob ihre Start- und Datenträger gelöscht oder behalten werden; entferne unerwünschte erhaltene Datenträger und Snapshots.",
        "Gib die reservierte externe IPv4 separat frei. Das Löschen der VM gibt eine reservierte Adresse nicht frei."
      ]
    },
    "azure": {
      "consoleSteps": [
        "Öffne das Azure-Portal mit einem aktiven Abonnement. Erstelle eine eigene Ressourcengruppe, öffne <strong>Virtuelle Computer → Erstellen → Virtueller Azure-Computer</strong> und wähle dieses Abonnement und diese Gruppe.",
        "Gib Namen und Region an. Wähle <strong>Ubuntu Server 24.04 LTS – x64 Gen2</strong> und eine kompatible Größe mit mindestens 1 GB RAM. Behalte einen Betriebssystemdatenträger mit mindestens 20 GB bei und prüfe die angezeigten Kosten.",
        "Wähle <strong>Öffentlicher SSH-Schlüssel</strong> als Authentifizierung, setze den Administratorbenutzernamen auf <code>azureuser</code> und wähle einen vorhandenen öffentlichen Schlüssel. Füge den öffentlichen Ed25519-Schlüssel der App ein; bewahre den privaten Schlüssel in der App auf.",
        "Wähle oder erstelle unter <strong>Netzwerk</strong> ein VNet und Subnetz. Erstelle oder wähle eine statische öffentliche Standard-IPv4 in der passenden Region und ordne sie der IP-Konfiguration der Netzwerkschnittstelle dieser VM zu.",
        "Konfiguriere die zugehörige Netzwerksicherheitsgruppe mit den gemeinsamen TCP-22- und UDP-51820-Regeln. Beschränke SSH auf die öffentliche IPv4 des Telefons; lass TCP 51821 geschlossen. Haben Subnetz und Schnittstelle Sicherheitsgruppen, müssen beide den Verkehr erlauben.",
        "Wähle <strong>Überprüfen + erstellen → Erstellen</strong>. Warte auf die Bereitstellung, öffne die <strong>Übersicht</strong> der VM und notiere deren öffentliche IPv4. Die VM ist mit dem Konto <code>azureuser</code> und deinem gewählten SSH-Schlüssel bereit."
      ],
      "apiSteps": [
        "Erstelle nur für ein künftiges Bereitstellungswerkzeug eine eigene Single-Tenant-App unter <strong>Microsoft Entra ID → App-Registrierungen</strong>. Notiere Mandanten-, Client- und Abonnement-ID. Erstelle bei Bedarf unter <strong>Zertifikate und Geheimnisse</strong> ein Clientgeheimnis und kopiere dessen Wert, nicht die Geheimnis-ID.",
        "Weise diesem Prinzipal unter <strong>Zugriffssteuerung (IAM)</strong> der Ressourcengruppe geeignete Compute-/Netzwerkberechtigungen zu. Mitwirkender für diese eigene Gruppe ist weit gefasst, aber nutzbar; bevorzuge eine engere getestete Rolle. Erstelle die Gruppe vorher, da gruppenbezogene Berechtigungen sie nicht erstellen können. Nutze geschützte native Zugangsdaten-Einstellungen."
      ],
      "cleanupSteps": [
        "Enthält die Ressourcengruppe nur diese Bereitstellung, prüfe ihren Inhalt und lösche die Gruppe nach Gebrauch.",
        "Wenn du die Gruppe behältst, lösche die VM und prüfe ihre Löschoptionen für zugeordnete Ressourcen. Lösche unerwünschte erhaltene Datenträger, Netzwerkschnittstellen und öffentliche IPs separat."
      ]
    },
    "digitalocean": {
      "consoleSteps": [
        "Öffne <strong>Erstellen → Droplet</strong> im Kontrollpanel. Wähle eine nahe <strong>Region</strong> mit verfügbarer Kapazität. Verwende einen passenden Projekt- und Hostnamen zur Identifizierung des Servers; Region, Tarifverfügbarkeit und Preise können variieren.",
        "Wähle unter <strong>Image auswählen → Betriebssystem</strong> die Option <strong>Ubuntu 24.04 LTS</strong>. Falls eine Auswahl des Konfigurationstyps erscheint, wähle <strong>Gebündelt</strong> und dann <strong>Geteilte CPU → Basic</strong>. Wähle mindestens <strong>1 GB RAM</strong> und <strong>20 GB Datenträger</strong> oder den höheren Mindestwert des Anbieters.",
        "Füge unter <strong>Authentifizierungsmethode auswählen → SSH-Schlüssel → SSH-Schlüssel hinzufügen</strong> deinen öffentlichen Schlüssel ein, benenne und wähle ihn. Bewahre den passenden privaten Schlüssel auf deinem Gerät auf; später hinzugefügte Kontoschlüssel werden nicht automatisch auf vorhandenen Droplets installiert.",
        "Lass unter <strong>Netzwerk</strong> die Option <strong>Öffentliche IPv4-Adresse</strong> ausgewählt. Setze die Anzahl auf <strong>1</strong>, bestätige Hostname und Projekt und klicke auf <strong>Droplet erstellen</strong>. Werden beide öffentlichen Adressoptionen abgewählt, entsteht ein ausschließlich privater Server.",
        "Öffne <strong>Erstellen → Firewall</strong> und benenne sie. Ersetze die standardmäßige SSH-Quelle von überall durch deinen Verwaltungs-CIDR für <strong>TCP 22</strong>; ergänze optional die Regel <strong>UDP 51820</strong> der gemeinsamen Anleitung. Behalte geeignete ausgehende Regeln bei, wähle den Server unter <strong>Auf Droplets anwenden</strong> und erstelle die Firewall.",
        "Öffne für eine beim Austausch erhaltene Adresse <strong>Netzwerk → Reservierte IPs → Reservierte IP hinzufügen</strong>. Wähle <strong>IPv4-Adresse → Droplet zuweisen</strong>, diesen Droplet und bestätige. Notiere nach Abschluss der Bereitstellung die zugewiesene öffentliche IPv4."
      ],
      "apiSteps": [
        "Nur für ein künftiges kompatibles Plugin: Öffne <strong>Konto → API → Tokens → Neues Token erzeugen</strong>. Gib einen aussagekräftigen Namen und ein Ablaufdatum an.",
        "Wähle <strong>Benutzerdefinierte Berechtigungsbereiche</strong> für die vom implementierten Ablauf benötigten Droplet-, SSH-Schlüssel-, Firewall- und reservierten-IP-Operationen samt Abhängigkeiten. Wähle nicht standardmäßig Vollzugriff; speichere das Token, wenn es angezeigt wird."
      ],
      "cleanupSteps": [
        "Öffne nach dem Sichern benötigter Daten <strong>Einstellungen → Zerstören</strong>, prüfe zugehörige Ressourcen, gib den Droplet-Namen ein und bestätige. Nicht ausgewählte Volumes und Snapshots bleiben erhalten; automatische Sicherungen behalten ihre Ablaufdaten.",
        "Öffne für jede unerwünschte Adresse <strong>Netzwerk → Reservierte IPs → … → Löschen</strong> und bestätige <strong>Reservierte IP löschen</strong>. Erhaltene Adressen und andere Ressourcen können weiter Kosten verursachen."
      ]
    },
    "hetzner": {
      "consoleSteps": [
        "Öffne das vorgesehene Projekt und dann <strong>Firewalls → Firewall erstellen</strong>. Benenne die Firewall und erlaube eingehendes <strong>TCP 22</strong> von deinem Verwaltungs-CIDR. Ergänze optional die Regel <strong>UDP 51820</strong> der gemeinsamen Anleitung. Leere ausgehende Regeln erlauben ausgehenden Verkehr.",
        "Öffne <strong>Server → Server hinzufügen</strong>. Wähle einen nahen <strong>Standort</strong>, an dem dein Servertyp verfügbar ist. Behalte Firewall und Server im selben Projekt; die Verfügbarkeit kann je nach Standort und aktueller Kapazität variieren.",
        "Wähle einen verfügbaren <strong>Typ</strong> mit mindestens <strong>1 GB RAM</strong> und <strong>20 GB Datenträger</strong> oder dem höheren Mindestwert des Anbieters. Wähle unter <strong>Image → Betriebssystem-Images</strong> die Option <strong>Ubuntu 24.04</strong> passend zur gewählten Serverarchitektur.",
        "Aktiviere unter <strong>Netzwerk</strong> eine öffentliche <strong>IPv4</strong>. Wähle eine nicht zugewiesene <strong>Primäre IPv4</strong> im selben Projekt und Standort oder lass Hetzner eine erstellen. Ein nur privater oder IPv6-only-Server erfüllt die öffentliche-IPv4-Anforderung dieser Anleitung nicht.",
        "Füge unter <strong>SSH-Schlüssel</strong> deinen öffentlichen Schlüssel hinzu oder wähle ihn. Wähle unter <strong>Firewalls</strong> die zuvor erstellte Firewall. Hier gewählte Kontoschlüssel werden beim Erstellen installiert; spätere zusätzliche Kontoschlüssel aktualisieren diesen Server nicht.",
        "Gib einen erkennbaren <strong>Namen</strong> ein, prüfe optionale Sicherungen und Gesamtkosten und klicke auf <strong>Jetzt erstellen und kaufen</strong>. Warte auf die Bereitschaft des Servers und notiere seine primäre IPv4. Behalte diese IP-Ressource, falls du die Adresse wiederverwenden möchtest."
      ],
      "apiSteps": [
        "Nur für ein künftiges kompatibles Plugin: Öffne im vorgesehenen Projekt <strong>Sicherheit → API-Tokens → API-Token erzeugen</strong> und gib eine Beschreibung ein.",
        "Wähle zur Bereitstellung <strong>Lesen und Schreiben</strong> und kopiere das Token vor dem Schließen des Fensters. Das gewährt Schreibzugriff auf das gesamte Projekt, nicht nur auf diesen Server."
      ],
      "cleanupSteps": [
        "Sichere benötigte Daten und lösche den vorgesehenen Server. Deaktiviere zuerst <strong>Automatisch löschen</strong> für die primäre IP, wenn du ihre Adresse für einen Ersatzserver behalten möchtest.",
        "Lösche unerwünschte erhaltene primäre IPs, Volumes und Snapshots separat. Eine IPv4 bleibt kostenpflichtig, solange sie erhalten bleibt; aktiviertes <strong>Automatisch löschen</strong> entfernt eine ungeschützte primäre IP mit ihrem Server."
      ]
    },
    "linode": {
      "consoleSteps": [
        "Öffne <strong>Firewalls → Firewall erstellen → Benutzerdefinierte Firewall</strong>. Gib eine Bezeichnung ein. Behalte <strong>Standardrichtlinie eingehend: Verwerfen</strong> und <strong>Standardrichtlinie ausgehend: Akzeptieren</strong> bei; das erlaubt ausgehenden Verkehr und verlangt ausdrückliche Regeln für eingehende Verbindungen.",
        "Ergänze eine eingehende Regel mit <strong>Protokoll: TCP</strong>, <strong>Ports: 22</strong>, <strong>Quellen: IP/Netzmaske</strong> mit deinem Verwaltungs-CIDR und <strong>Aktion: Akzeptieren</strong>. Ergänze optional die Regel <strong>UDP 51820</strong> der gemeinsamen Anleitung. Klicke zum Aktivieren auf <strong>Änderungen speichern</strong>.",
        "Öffne <strong>Erstellen → Linode</strong>. Wähle eine nahe zentrale Compute-Region und dann <strong>Distributionen → Ubuntu 24.04</strong>. Wähle einen verfügbaren Tarif mit mindestens <strong>1 GB RAM</strong> und <strong>20 GB Datenträger</strong> oder dem höheren Mindestwert des Anbieters.",
        "Setze die <strong>Bezeichnung</strong>. Wähle unter Sicherheit einen vorhandenen SSH-Schlüssel oder klicke auf <strong>SSH-Schlüssel hinzufügen</strong> und füge deinen öffentlichen Schlüssel ein. Das <strong>Root-Passwort</strong> ist bei der Bereitstellung mit SSH-Schlüssel optional; bewahre den privaten Schlüssel auf deinem Gerät auf.",
        "Wähle unter Netzwerk <strong>Öffentliches Internet</strong> und <strong>Linode-Schnittstellen</strong>. Wähle die Firewall für diese öffentliche Schnittstelle. Wähle unter <strong>IP-Adresse</strong> die Option <strong>Reserviert</strong> und eine Adresse derselben Region oder beschaffe über <strong>IP reservieren</strong> eine neue.",
        "Prüfe optionale Sicherungen und weitere Kosten in der <strong>Linode-Zusammenfassung</strong> und klicke auf <strong>Linode erstellen</strong>. Warte auf die Initialisierung und notiere die öffentliche IPv4. Die reservierte Adresse bleibt nach dem Löschen des Servers im Konto und kann nicht in eine andere Region verschoben werden."
      ],
      "apiSteps": [
        "Nur für ein künftiges kompatibles Plugin: Öffne dein Benutzermenü → <strong>API-Tokens → Persönliches Zugriffstoken erstellen</strong>. Lege eine Bezeichnung und ein Ablaufdatum fest.",
        "Gewähre nur nötige Berechtigungsbereiche: Die Bereitstellung braucht in der Regel Lesen/Schreiben für Linodes und Firewalls; das Reservieren oder Freigeben von Adressen benötigt außerdem <code>ips:read_write</code>. Bewahre das Token sicher auf."
      ],
      "cleanupSteps": [
        "Sichere benötigte Daten und öffne <strong>Linodes → … → Löschen → Linode löschen</strong>. Prüfe separat erhaltene Volumes und Images.",
        "Öffne für eine unerwünschte Adresse <strong>Reservierte IPs → … → Reservierung aufheben</strong> und bestätige. Reservierte IPs bleiben nach der Serverlöschung erhalten und bis zur Freigabe kostenpflichtig."
      ]
    },
    "vultr": {
      "consoleSteps": [
        "Öffne <strong>Konto → SSH-Schlüssel → SSH-Schlüssel hinzufügen</strong>. Füge deinen öffentlichen Schlüssel ein, benenne und speichere ihn. Bewahre den passenden privaten Schlüssel auf deinem Gerät auf; wähle diesen gespeicherten öffentlichen Schlüssel beim Konfigurieren der Instanz.",
        "Öffne <strong>Netzwerk → Firewallgruppen → Firewallgruppe erstellen</strong> und benenne sie. Ergänze eine eingehende IPv4-Regel für <strong>TCP 22</strong> von deinem Verwaltungs-CIDR sowie optional <strong>UDP 51820</strong>. Prüfe, dass eine Regel gespeichert ist: Leere Gruppen werden nicht angewendet.",
        "Öffne <strong>Compute → Instanzen → Instanz erstellen + → Geteilte CPU</strong>. Wähle einen verfügbaren Tarif mit mindestens <strong>1 GB RAM</strong> und <strong>20 GB Datenträger</strong> oder dem höheren Mindestwert des Anbieters. Wähle einen nahen Standort und klicke auf <strong>Konfigurieren</strong>.",
        "Wähle unter <strong>Image-Auswahl und Konfiguration → Betriebssystem</strong> die Option <strong>Ubuntu 24.04</strong>. Wähle unter <strong>Servereinstellungen</strong> deinen Eintrag bei <strong>SSH-Schlüssel</strong> und die mit Regeln gefüllte <strong>Firewallgruppe</strong>. Gib <strong>Hostname von Server 1</strong> und <strong>Bezeichnung von Server 1</strong> ein.",
        "Wähle unter <strong>Instanzkonnektivität</strong> die Option <strong>Instanz(en) mit öffentlicher IP</strong> und lass <strong>Öffentliche IPv4</strong> aktiviert. Prüfe automatische Sicherungen und weitere optionale Kosten. <strong>Anmeldung mit eingeschränktem Benutzer</strong> ändert das Konto von <code>root</code> auf den sudo-fähigen <code>linuxuser</code>. Prüfe die <strong>Zusammenfassung</strong> und klicke auf <strong>Bereitstellen</strong>.",
        "Warte, bis die Instanz bereit ist, und notiere ihre öffentliche IPv4. Die normale Adresse bleibt unverändert, solange diese Instanz existiert; nutze eine reservierte IP derselben Region, wenn sie einen Austausch überstehen soll."
      ],
      "apiSteps": [
        "Nur für ein künftiges kompatibles Plugin: Öffne <strong>Konto → API</strong> und dann <strong>API aktivieren</strong> unter <strong>Persönliches Zugriffstoken</strong>. Bewahre die Zugangsdaten sicher auf.",
        "Erlaube unter <strong>Zugriffssteuerung</strong> die IP/den CIDR, von dem API-Anfragen ausgehen werden. Aktualisiere sie nach Mobilfunknetzwechseln; dies beschränkt den Anfrageursprung, nicht Berechtigungen für bestimmte Ressourcen."
      ],
      "cleanupSteps": [
        "Sichere benötigte Daten, öffne die Instanz und klicke auf <strong>Server zerstören</strong>. Wähle <strong>Ja, diesen Server zerstören</strong> und dann <strong>Server zerstören</strong>.",
        "Lösche unerwünschte erhaltene Adressen über <strong>Netzwerk → Reservierte IPs → Reservierte IP entfernen</strong>. Prüfe auch separaten Speicher und Snapshots; das Löschen des Servers bereinigt nicht das gesamte Konto."
      ]
    },
    "oracle-cloud": {
      "consoleSteps": [
        "Wähle deine OCI-Region und ein eigenes Compartment. Prüfe Kontingente für Compute, Volumes und öffentliche IPs; verfügbare Kapazität und Anspruch auf kostenlose Nutzung hängen von den gewählten Ressourcen ab.",
        "Öffne <strong>Netzwerk → Virtuelle Cloudnetzwerke → VCN-Assistent starten → VCN mit Internetverbindung erstellen</strong>. Nutze dessen öffentliches Subnetz und bestätige eine Route <code>0.0.0.0/0</code> über das Internet-Gateway.",
        "Prüfe die Sicherheitsliste des öffentlichen Subnetzes und alle zugeordneten Netzwerksicherheitsgruppen. Beschränke TCP <code>22</code> auf deinen Verwaltungs-CIDR, erlaube UDP <code>51820</code> und erhalte nötige ausgehende und ICMP-Regeln.",
        "Öffne <strong>Compute → Instanzen → Instanz erstellen</strong>. Setze Name, Compartment und Verfügbarkeitsdomain. Wähle <strong>Image ändern → Ubuntu → 24.04</strong>, eine kompatible VM-Shape sowie ausreichend Arbeitsspeicher und Startspeicher.",
        "Wähle das öffentliche Subnetz und aktiviere die Zuweisung einer öffentlichen IPv4. Füge unter <strong>SSH-Schlüssel hinzufügen</strong> deinen öffentlichen Ed25519-/ECDSA-Schlüssel ein oder lade ihn hoch; der von der Konsole erzeugte Schlüssel ist RSA. Bewahre den passenden privaten Schlüssel auf deinem Gerät auf.",
        "Prüfe und erstelle die VM. Notiere im laufenden Zustand ihre öffentliche IPv4. Für eine Adresse, die den Austausch der VM übersteht, kannst du ihre flüchtige IP durch eine reservierte öffentliche IP an ihrer primären privaten IP ersetzen; notiere die neue Adresse."
      ],
      "apiSteps": [
        "Nur für ein künftiges Bereitstellungsplugin: Lass einen Administrator einem eigenen IAM-Benutzer/einer Gruppe die nötigen Compute-, Netzwerk- und Volume-Berechtigungen in diesem Compartment gewähren.",
        "Öffne <strong>Benutzereinstellungen → API-Schlüssel → API-Schlüssel hinzufügen</strong>. Speichere den privaten RSA-PEM-Signaturschlüssel, Fingerabdruck, Mandanten-/Benutzer-OCIDs und Region; notiere die Compartment-OCID. Dieser Schlüssel ist vom SSH-Schlüssel getrennt."
      ],
      "cleanupSteps": [
        "Beende die Instanz und lösche ihr Startvolume ausdrücklich, falls es nicht mehr benötigt wird; OCI behält dieses Volume standardmäßig. Sichere gewünschte Daten vorher.",
        "Lösche unerwünschte reservierte öffentliche IPs und erhaltene Volumes. Entferne ungenutzte Subnetze, Gateways und andere Netzwerkressourcen des eigenen VCN, einschließlich der vom Assistenten erstellten privaten Netzwerkressourcen."
      ]
    },
    "ovhcloud": {
      "consoleSteps": [
        "Aktiviere ein Public-Cloud-Projekt und eine Zahlungsmethode. Prüfe <strong>Projektverwaltung → Kontingente</strong>. Benenne und füge unter <strong>SSH-Schlüssel → SSH-Schlüssel erstellen</strong> deinen öffentlichen Schlüssel ein und wähle <strong>Hinzufügen</strong>.",
        "Öffne <strong>Compute → Instanzen → Instanz erstellen</strong>. Benenne die VM, wähle Region und geeignetes Modell, Ubuntu <code>24.04</code> und den gespeicherten SSH-Schlüssel.",
        "Aktiviere unter Netzwerk <strong>Öffentliche IP zuweisen → Öffentliche Basic-IP</strong>; öffentliche Konnektivität ist standardmäßig aus. Die Basic-IP nutzt <code>Ext-Net</code> und ist nicht mit einem Gateway kompatibel. Prüfe automatische Snapshots und Kosten, wähle stündliche Abrechnung und dann <strong>Meine Instanz erstellen</strong>.",
        "Öffne zur Filterkonfiguration <strong>Projektverwaltung → Benutzer</strong>. Erstelle bei Bedarf einen OpenStack-Benutzer mit passenden Netzwerk-/Instanzberechtigungen, speichere sein Passwort und wähle seine Aktion <strong>… → OpenStack Horizon starten</strong>.",
        "Wähle in Horizon die Region der VM und dann <strong>Netzwerk → Sicherheitsgruppen → Sicherheitsgruppe erstellen</strong>. Erstelle eine eigene Gruppe. Erlaube unter <strong>Regeln verwalten</strong> TCP <code>22</code> von deinem Verwaltungs-CIDR sowie UDP <code>51820</code>; behalte ausgehende Regeln bei.",
        "Öffne in Horizon <strong>Compute → Instanzen → Sicherheitsgruppen bearbeiten</strong>. Wende die eigene Gruppe an und entferne die offene Standardgruppe nur von dieser VM; bearbeite oder lösche niemals die gemeinsam genutzte Standardgruppe. Notiere im aktiven Zustand die öffentliche IPv4 aus der Übersicht."
      ],
      "apiSteps": [
        "Nur für ein künftiges Bereitstellungsplugin: Öffne die Token-Erstellungsseite für die API-Region deines Kontos. Benenne die Anwendung, setze ein Ablaufdatum und beschränke Rechte auf ihre dokumentierten Projektpfade/-aktionen.",
        "Bewahre Anwendungsschlüssel, Anwendungsgeheimnis und Consumer-Schlüssel sicher auf. Diese signierten API-Zugangsdaten unterscheiden sich vom OpenStack-Benutzernamen und -Passwort für Horizon."
      ],
      "cleanupSteps": [
        "Sichere gewünschte Daten und wähle bei der Instanz <strong>… → Löschen → Instanz löschen</strong>. Die stündliche Abrechnung läuft bis zur Löschung weiter.",
        "Entferne unerwünschte Volumes, Snapshots/Sicherungen und unabhängig erstellte Floating-/Additional-IPs oder Gateways separat. Das Löschen der VM entfernt nicht jede zugehörige Ressource."
      ]
    },
    "scaleway": {
      "consoleSteps": [
        "Wähle die richtige Organisation und das richtige Projekt, aktiviere die Abrechnung und prüfe Kontingente. Benenne und füge unter <strong>Projekt-Dashboard → SSH-Schlüssel hinzufügen</strong> deinen öffentlichen Schlüssel ein. SSH-Schlüssel gelten nur für dieses Projekt.",
        "Öffne <strong>Compute → CPU- und GPU-Instanzen → Sicherheitsgruppen</strong> in deiner gewählten Verfügbarkeitszone. Erstelle dort eine eigene Gruppe. Aktiviere zustandsbehaftete Filterung, setze eingehend auf <strong>Verwerfen</strong> und ausgehend auf <strong>Akzeptieren</strong>.",
        "Erlaube im Tab <strong>Regeln</strong> der Gruppe TCP <code>22</code> von deinem Verwaltungs-CIDR und UDP <code>51820</code> für VPN-Clients. Lass TCP <code>51821</code> geschlossen. Die automatisch erstellte Standardgruppe ist zustandslos; wähle daher deine eigene Gruppe ausdrücklich.",
        "Wähle <strong>Instanz erstellen → CPU-Instanz erstellen</strong>, eine geeignete CPU-Konfiguration und dieselbe Verfügbarkeitszone, dann <strong>Instanz konfigurieren</strong>. Benenne sie, wähle Ubuntu <code>24.04</code>/Noble und konfiguriere mindestens 20 GB Systemvolume.",
        "Lass <strong>Öffentliche IPv4</strong> aktiviert und weise eine Adresse zu oder wähle eine verfügbare vorhandene Adresse. Wähle deine eigene Sicherheitsgruppe und prüfe die angezeigten SSH-Schlüssel. Prüfe IPv6-Einstellungen separat, falls aktiviert.",
        "Wähle <strong>Prüfen</strong>, kontrolliere die Kostenschätzung und dann <strong>Instanz erstellen</strong>. Warte auf das Ende der Bereitstellung und kopiere die öffentliche IPv4 aus der <strong>Übersicht</strong>. Diese flexible IP ist eine separate Ressource, deren Lebenszyklus du verwalten musst."
      ],
      "apiSteps": [
        "Nur für ein künftiges Bereitstellungsplugin: Erstelle eine IAM-Anwendung und gewähre die nötigen Berechtigungen für Instanzen, Netzwerk und Speicher im Zielprojekt.",
        "Öffne <strong>IAM und API-Schlüssel → API-Schlüssel → API-Schlüssel erzeugen</strong>. Wähle Anwendung und Ablaufdatum. Speichere Zugriffsschlüssel und das einmal angezeigte Geheimnis; notiere Projekt-UUID und Zone separat."
      ],
      "cleanupSteps": [
        "Sichere gewünschte Daten. Wähle in der richtigen Verfügbarkeitszone bei der Instanz <strong>… → Löschen</strong>, tippe <code>DELETE</code> und wähle die Löschung nicht mehr benötigter zugehöriger IPs und Block-Storage-Volumes.",
        "Bestätige <strong>Instanz löschen</strong>. Prüfe auf unerwünschte erhaltene flexible IPs, Volumes und Snapshots; bloßes Ausschalten entfernt diese Ressourcen nicht."
      ]
    }
  }
};
