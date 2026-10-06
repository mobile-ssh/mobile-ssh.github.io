import { defineYourServer } from "./define";

export const de = defineYourServer({
  "metaTitle": "Dein Agent. Dein Server. Deine Regeln. | Mobile SSH",
  "metaDescription": "Wähle, wo dein Coding-Agent läuft: in einer verwalteten Umgebung, deinem Cloud-Konto oder auf eigener Hardware. Behalte die Kontrolle über Zugriffe, Backups und den Wechsel.",
  "back": "Blog",
  "eyebrow": "Eigentum",
  "title": "Dein Agent. Dein Server. Deine Regeln.",
  "standfirst": "Eine fertige Agentenumgebung spart Einrichtungszeit. Bevor du ihr dein Repository anvertraust, entscheide, wer die Maschine, die Zugangsdaten und die Möglichkeit zum Wechsel kontrollieren soll. Mit Mobile SSH bringst du deinen eigenen Host mit, vom Rechner unter dem Schreibtisch bis zur VM in deinem Cloud-Konto.",
  "author": "Die Mobile SSH-Redaktion",
  "date": "5. Oktober 2026",
  "readingTime": "7 Min. Lesezeit",
  "figure": {
    "heading": "Wähle den Host. Prüfe den Weg zum Modell.",
    "phone": "Dein Smartphone · Mobile SSH",
    "connection": "SSH zum Host deiner Wahl",
    "hosts": [
      {
        "id": "owned",
        "title": "Dein eigener Rechner",
        "detail": "Zu Hause, im Büro oder im eigenen Serverraum"
      },
      {
        "id": "cloud",
        "title": "VM in deinem Cloud-Konto",
        "detail": "Du verwaltest das Gastsystem; der Anbieter betreibt die Hardware"
      }
    ],
    "workspace": "Dateien, Werkzeuge und Agentenprozess liegen auf dem gewählten Host",
    "modelConnection": "Bei einem Cloud-Modell verlassen Prompts und ausgewählter Kontext den Host",
    "model": "Der von dir gewählte Modelldienst",
    "caption": "Drei getrennte Entscheidungen: wie du dich verbindest, wo Code läuft und wo das Modell ihn verarbeitet. Die Kontrolle über die ersten beiden macht die dritte nicht lokal."
  },
  "body": [
    "Das Angebot klingt verlockend: eine Arbeitsumgebung öffnen und Codex, Claude Code oder Gemini CLI schon vorfinden. Keine Maschine vorbereiten, keine Pakete installieren. Repository verbinden, Aufgabe beschreiben und eine Cloud-VM arbeiten lassen. Für ein Experiment oder ein Wegwerfprojekt kann diese Bequemlichkeit genau richtig sein.",
    "Dann wird aus dem Experiment dein täglicher Arbeitsplatz. Privater Code kommt hinzu. Ebenso Testdaten, interne Dokumentation und alle Zugangsdaten, die du bereitstellst. Bevor diese Übergabe zur Routine wird, stell eine grundsätzlichere Frage: Wer kontrolliert den Ort, an dem diese Arbeit liegt?",
    "Eine fertige Arbeitsumgebung hat einen Betreiber",
    "In einer vom Anbieter verwalteten Agentenumgebung betreibt jemand anderes den Ausführungshost. Dein Repository wird möglicherweise dorthin geklont, Daten werden hochgeladen und Berechtigungen für andere Systeme erteilt. Isolation, Administratorzugriff, Aufbewahrung und Exportmöglichkeiten hängen vom Dienst ab. Vorinstallierte Werkzeuge zeigen, wie schnell du loslegen kannst; über diese Rahmenbedingungen sagen sie wenig.",
    "Diese Entscheidung kannst du bewusst treffen. Verwaltete Umgebungen können Wartung reduzieren und sinnvolle Isolation bieten. Lies nach, was mit Arbeitslaufwerken, Mitschriften, Snapshots und Zugangsdaten geschieht, auch nach Sitzungsende oder Kontoschließung. Du musst keine schlechten Absichten unterstellen, um klare Antworten zu deiner privaten Arbeit zu wollen.",
    "Behalte die Schlüssel. Behalte ein Backup. Behalte die Möglichkeit zu gehen.",
    "Drei Orte für denselben Agenten",
    "Eine VM in deinem eigenen Cloud-Konto bietet eine andere Aufteilung. Du wählst das Gastbetriebssystem, installierst Werkzeuge, vergibst Zugriffe und verwaltest den Lebenszyklus der Instanz. Das Cloud-Unternehmen betreibt weiterhin die physische Infrastruktur. Die Bezeichnung dein Server beschreibt administrative Kontrolle, nicht das Eigentum an der darunterliegenden Hardware. <a href=\"#source-cloud\">[1]</a>",
    "Ein physischer Rechner in deinem Eigentum geht weiter: Du wählst die Hardware und bestimmst ihren Standort. Ein vorhandener Desktop, ein kleiner Heimserver oder ein Bürorechner können die Arbeitsumgebung beherbergen. Du übernimmst auch die praktischen Aufgaben: Strom, Verbindung, Reparaturen, Updates und Wiederherstellung. Eigentum gibt dir Entscheidungen; es nimmt sie dir nicht ab.",
    "Hol deinen Server aufs Smartphone",
    "Mobile SSH funktioniert mit beiden selbst betriebenen Varianten. Verbinde dich mit einem erreichbaren SSH-Host im lokalen Netz, über einen von dir eingerichteten Netzwerkpfad oder in deinem Cloud-Konto. Normale SSH-Sitzungen brauchen weder einen von Mobile SSH betriebenen Sitzungsrelay noch ein Mobile SSH-Konto. Du wählst das Ziel und stellst seine Zugangsdaten bereit.",
    "Installiere den gewünschten Agenten auf diesem Host. Öffne sein Arbeitsverzeichnis, starte Codex, Claude Code oder Gemini CLI und nutze das Terminal, das du bereits kennst. Du kannst eine Sitzung unter tmux, herdr oder Zellij laufen lassen und vom Smartphone zu ihr zurückkehren, solange Host und Prozess weiterlaufen. Die Arbeit gehört zu dieser Umgebung; ein neues Smartphone erfordert keinen Umzug des Repositorys.",
    "Damit bleiben nützliche Entscheidungen bei dir. Behalte sensible Testdaten auf einem lokalen Rechner. Nutze eine Cloud-VM, wenn ihre Ressourcen zur Aufgabe passen. Wechsle den Agenten, ohne den mobilen Arbeitsablauf neu aufzubauen. Mobile SSH bietet Terminalzugriff, SFTP und Tunnel; es verlangt nicht, dass du eine bestimmte Agentenumgebung mietest.",
    "Dein Server und dein Modell sind getrennte Entscheidungen",
    "Dieser Unterschied ist bei privaten Daten besonders wichtig. Wenn ein Agent auf eigener Hardware läuft, muss sein Modell nicht dort laufen. Ein Agent mit Cloud-Anbindung kann Prompts, ausgewählten Repository-Kontext und Werkzeugergebnisse an den Modelldienst senden. Agentenprozess und Arbeitsbaum können auf deinem Server bleiben, während die Inferenz anderswo erfolgt. <a href=\"#source-claude\">[2]</a> <a href=\"#source-gemini\">[3]</a>",
    "SSH verschlüsselt die Verbindung zwischen deinem Smartphone und seinem Endpunkt. Es hindert Software auf dem Host nicht daran, erlaubte Dateien zu lesen oder eigene Netzwerkanfragen zu stellen. Entscheide, welchen Modelldienst der Agent nutzt, was er lesen darf und welche Werkzeuge oder Integrationen Daten nach außen senden dürfen. Prüfe die Regeln für dein tatsächliches Konto und deine Konfiguration.",
    "Wenn die Arbeit lokale Inferenz erfordert, wähle eine kompatible Agenten- und Modellkonfiguration und überprüfe ihr Netzwerkverhalten. Leite diese Garantie nicht aus dem Wort lokal in einem Installationsprogramm ab. Auch die optionalen Nutzungsanalysen und Plugin-Downloads von Mobile SSH haben eigene Datenflüsse; die Datenschutzeinstellungen und die Datenschutzerklärung der App erläutern sie.",
    "Mach Kontrolle zu etwas, das du ausüben kannst",
    "Ein Root-Passwort ist erst der Anfang. Praktische Kontrolle bedeutet, Zugriffe begrenzen, Fehler beheben, Änderungen prüfen und die Arbeitsumgebung verschieben zu können, ohne eine Agentenplattform um ihre Aufbewahrung zu bitten. Schenke diesen Fähigkeiten dieselbe Aufmerksamkeit wie der Modellwahl.",
    "Nichts davon macht einen Heimserver automatisch sicherer als einen verwalteten Dienst. Ein vernachlässigter Rechner mit weitreichenden Zugangsdaten kann ein schlechter Ort für private Daten sein. Wähle ein Maß an Verantwortung, das du dauerhaft tragen kannst. Der Vorteil liegt darin, diese Wahl treffen, überprüfen und bei neuen Anforderungen ändern zu können.",
    "Besitze die Maschine, wenn du kannst. Behalte die Kontrolle über die Arbeitsumgebung, wo auch immer sie läuft.",
    "Wenn eine fertige Agentenumgebung das nächste Mal nach deinem Repository fragt, halte vor dem Verbinden kurz inne. Entscheide, wo die Dateien liegen sollen, wer diesen Host verwalten soll und wie du die Arbeit mitnehmen wirst. Dann greif zum Smartphone. Mobile SSH erreicht dich auf dem Server, den du gewählt hast."
  ],
  "comparison": {
    "heading": "Wer kontrolliert was?",
    "dimension": "Entscheidung",
    "models": [
      {
        "id": "managed",
        "title": "Verwaltete Agentenumgebung"
      },
      {
        "id": "cloud",
        "title": "VM in deinem Cloud-Konto"
      },
      {
        "id": "owned",
        "title": "Eigene Hardware"
      }
    ],
    "rows": [
      {
        "id": "hardware",
        "label": "Physische Hardware",
        "managed": "Dienst- oder Infrastrukturanbieter",
        "cloud": "Cloud-Anbieter",
        "owned": "Du besitzt die Maschine"
      },
      {
        "id": "admin",
        "label": "Administrative Kontrolle",
        "managed": "Vom Dienst festgelegt",
        "cloud": "Du verwaltest das Gastbetriebssystem",
        "owned": "Du verwaltest den Host"
      },
      {
        "id": "storage",
        "label": "Arbeitsumgebung und Speicher",
        "managed": "Vom Dienst verwaltete Laufwerke und Aufbewahrung",
        "cloud": "Von dir konfigurierte Volumes und Lebenszyklen",
        "owned": "Von dir gewählter und gepflegter Speicher"
      },
      {
        "id": "access",
        "label": "Zugangsdaten und Netzwerkrichtlinien",
        "managed": "Dienstvorgaben und von dir erteilte Berechtigungen",
        "cloud": "Deine System-, Identitäts- und Netzwerkkonfiguration",
        "owned": "Deine System-, Identitäts- und Netzwerkkonfiguration"
      },
      {
        "id": "portability",
        "label": "Backups und Wechselmöglichkeiten",
        "managed": "Export- und Löschmöglichkeiten prüfen",
        "cloud": "Kopien außerhalb der Instanz verwalten",
        "owned": "Kopien außerhalb der Maschine verwalten"
      },
      {
        "id": "maintenance",
        "label": "Betriebsaufwand",
        "managed": "Der Anbieter betreibt die Umgebung; du konfigurierst ihre Nutzung",
        "cloud": "Du wartest das Gastsystem; der Anbieter die Infrastruktur",
        "owned": "Du wartest Hardware, Betriebssystem und Verbindung"
      }
    ],
    "note": "Typische Aufteilungen, keine Garantien für jeden Dienst. In jeder Spalte hängen die Datenflüsse zum Modellanbieter vom gewählten Agenten und seiner Konfiguration ab."
  },
  "checklist": {
    "heading": "Sechs Wege, die Kontrolle zu behalten",
    "steps": [
      {
        "heading": "Gib Zugangsdaten eine kleine Aufgabe",
        "body": "Nutze getrennte, widerrufbare Zugangsdaten für die Arbeitsumgebung. Erteile nur die Repository- und Dienstberechtigungen, die die Aufgabe braucht."
      },
      {
        "heading": "Begrenze die Arbeitsumgebung",
        "body": "Führe den Agenten möglichst unter einem eigenen Benutzer ohne Sonderrechte aus. Halte andere private Dateien und Produktionsgeheimnisse außerhalb seiner Reichweite."
      },
      {
        "heading": "Prüfe das SSH-Ziel",
        "body": "Prüfe unbekannte Host-Fingerabdrücke über einen vertrauenswürdigen Kanal. Untersuche geänderte Schlüssel, bevor du eine gespeicherte Identität ersetzt."
      },
      {
        "heading": "Behalte ein unabhängiges Backup",
        "body": "Bewahre verschlüsselte Kopien unter selbst kontrollierten Konten getrennt vom Arbeitshost auf. Teste eine Wiederherstellung, auch mit noch nicht committierter Arbeit, die erhalten bleiben soll."
      },
      {
        "heading": "Prüfe, was den Host verlässt",
        "body": "Prüfe Modellendpunkte, Plugins, externe Werkzeuge und Telemetrieeinstellungen. Teile nur den nötigen Kontext und kontrolliere die entstandenen Änderungen."
      },
      {
        "heading": "Übe den Umzug",
        "body": "Stelle die Arbeitsumgebung auf einem anderen Host wieder her, verbinde dich erneut und führe ihre Tests aus. Die Möglichkeit zu gehen solltest du ausprobiert haben."
      }
    ]
  },
  "sources": {
    "heading": "Quellen und Grenzen",
    "aws": "AWS: geteilte Verantwortung für Cloud-Infrastruktur und Gastsysteme",
    "anthropic": "Claude Code: lokale Ausführung, Cloud-Verbindungen und Datennutzung",
    "google": "Gemini CLI: Modelldienste und geltende Datenschutzhinweise",
    "checked": "Quelldokumentation geprüft am 5. Oktober 2026. Kontobedingungen und Dienstfunktionen können sich ändern."
  },
  "cta": {
    "heading": "Verbinde dich mit dem Server deiner Wahl.",
    "body": "Nutze Mobile SSH auf Android oder iOS, um deine eigenen Rechner zu erreichen, deine Werkzeuge auszuführen und deine Arbeitsumgebung griffbereit zu halten.",
    "playButton": "Bei Google Play herunterladen",
    "iosButton": "An der iOS-Beta teilnehmen",
    "docsLink": "Die erste Verbindung einrichten",
    "privacyLink": "Datenschutzerklärung lesen"
  }
});
