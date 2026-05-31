import type { Dict } from "../types";

export const de: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Sprache",
    languageSwitcher: "Sprache wechseln"
  },
  nav: {
    home: "Start",
    features: "Funktionen",
    docs: "Dokumentation",
    compare: "Vergleich",
    about: "Über",
    privacy: "Datenschutz"
  },
  footer: {
    tagline: "Fokussierte SSH-, SFTP- und Terminal-Workflows für Android-Geräte.",
    documentation: "Dokumentation",
    comparison: "Vergleich",
    privacy: "Datenschutz",
    contact: "Kontakt",
    feedback: "Feedback"
  },
  home: {
    metaTitle: "Mobile SSH — SSH-Client für Android",
    metaDescription:
      "Mobile SSH ist ein fokussierter SSH-Client für Android mit Multi-Session-Terminals, SFTP-Übertragung, privaten Schlüsseln, Portweiterleitung und tmux-tauglichen Workflows.",
    eyebrow: "SSH-Client für Android",
    h1: "Mobile SSH",
    intro:
      "Ein fokussierter SSH-Client für Android: Multi-Session-Terminals, Authentifizierung mit privatem Schlüssel, SFTP-Dateiübertragung, lokale Portweiterleitung und tmux-taugliche Steuerung – gebaut für Smartphone und Tablet.",
    versionLine: "Verfügbar in {count} Sprachen · Version {version}",
    ctaDocs: "Dokumentation lesen",
    ctaPlay: "Jetzt bei Google Play",
    advantagesHead: "Warum Mobile SSH",
    advantagesIntro: "Gebaut um die Stellen herum, an denen mobile SSH-Clients üblicherweise scheitern.",
    advantages: [
      { title: "Keine Pro-Stufe, keine Werbung", text: "Alle Funktionen in derselben App. Keine Paywall, die wesentliche Workflows hinter einem Pro-Upgrade versteckt, keine Werbebanner im Terminal." },
      { title: "Deine Daten bleiben lokal", text: "Gespeicherte Server, Zugangsdaten und Schlüssel liegen auf dem Gerät. Kein Cloud-Konto; nichts, was abgeschaltet werden könnte." },
      { title: "Gespeicherte Hosts, ein Tippen", text: "Host einmal anlegen und mit einem Tippen wieder verbinden — inklusive Schlüssel, Port und konfigurierten Tunneln." },
      { title: "Terminal-Tasten über der Tastatur", text: "Eigene Reihe mit ESC, TAB, CTRL, ALT, FN, Pfeilen, Home, End, PgUp/PgDn — ohne Gboard-Vorschläge zu stören." },
      { title: "Portweiterleitung ohne Befehle", text: "Tunnel hängen am Server-Profil und gehen beim Verbinden automatisch hoch." },
      { title: "Übersteht Sperre und Netzwechsel", text: "Foreground-Service, Wake Locks und Auto-Reconnect halten Sitzungen am Leben — bei ausgeschaltetem Bildschirm, App-Wechsel und Netzwerkwechsel." }
    ],
    sectionAHead: "Gebaut für SSH-Arbeit auf Android",
    sectionAIntro:
      "Mobile SSH hält den üblichen Admin-Weg kurz: Server speichern, verbinden, Sitzungen am Leben halten, bei Bedarf Dateien bewegen und schnell zu aktiven Terminals zurückkehren.",
    features: [
      { title: "SSH-Terminal", text: "VT100/xterm-256color-Emulation mit Farben, Cursortasten, Scrollback, Kopieren und Unterstützung der Android-Tastatur." },
      { title: "Multi-Session-Raster", text: "Bis zu acht Sitzungen gleichzeitig, Wechsel per Antippen eines Panels, Doppeltipp für Vollbild-Fokus." },
      { title: "Private Schlüssel", text: "Passwörter oder importierte/eingefügte private Schlüssel, inklusive Ed25519, RSA, ECDSA und DSA, die von der App unterstützt werden." },
      { title: "SFTP-Übertragung", text: "Dateien zwischen Telefonspeicher und entferntem Server verschieben – mit lokalen und entfernten Browser-Panels." },
      { title: "Portweiterleitung", text: "Lokale Tunnelangaben mit einem Serverprofil speichern oder Tunnel im laufenden Betrieb hinzufügen." },
      { title: "Reconnect-Workflow", text: "Vordergrunddienst, Wake Locks, Keepalives und Reconnect-Versuche helfen Sessions, Netzwerkwechsel zu überleben." },
      { title: "Terminal-Auswahl", text: "Terminaltext markieren zum Kopieren, Teilen oder Alles-auswählen; Kopien landen in der Android-Zwischenablage." },
      { title: "Tastaturfreundlich", text: "Gboard-Vorschläge und Spracheingabe arbeiten neben der Zusatztastenreihe; komponierter Text wird sauber bis zur Wortgrenze gepuffert." }
    ],
    multiHead: "Ein Bildschirm, mehrere aktive Shells",
    multiP1:
      "Die Terminalansicht kann mehrere aktive SSH-Sitzungen im Raster halten. Panel antippen zum Tippen, Zusatztastenreihe für Terminalsteuerung verwenden, mit Pinch die Textgröße anpassen und ein Panel doppelt antippen, wenn Vollbildfokus nötig ist.",
    multiP2:
      "Sitzungsverlauf und Wiederherstellung aktiver Sitzungen helfen, nach App-Wechseln, Bildschirmsperre oder Android-Activity-Recreation zur laufenden Arbeit zurückzukehren.",
    multiAlt:
      "Mobile SSH auf einem 10-Zoll-Android-Tablet mit vier aktiven SSH-Terminal-Panels nebeneinander.",
    sftpHead: "SFTP, wenn das Terminal nicht reicht",
    sftpBody:
      "Öffne die Dateiübertragung aus einer verbundenen Sitzung, um Telefonspeicher und entfernte Verzeichnisse zu durchsuchen. Uploads und Downloads in die Warteschlange stellen, sortieren, zuletzt verwendete Pfade pro Host merken und entfernte Dateirechte prüfen, bevor etwas bewegt wird.",
    sftpCtaGuide: "Dateiübertragungs-Anleitung",
    sftpCtaAll: "Alle Funktionen",
    sftpAlt: "Dateiübertragungs-Bildschirm von Mobile SSH auf einem Telefon mit lokalem und entferntem Panel.",
    galleryHead: "Auf einem echten Gerät ansehen",
    galleryIntro:
      "Screenshots von Android-Telefonen – dieselben Bildschirme, mit denen du Server hinzufügst, in Terminals arbeitest, mehrere Sitzungen ausführst und Dateien per SFTP überträgst.",
    galleryAlts: [
      "Startbildschirm von Mobile SSH auf einem Telefon mit Kacheln Server, Anmeldedaten, Logs, Einstellungen, Debug und Über.",
      "Dialog „Server hinzufügen“ auf einem Telefon mit Feldern für Host, Port, Anmeldedaten, privatem Schlüssel und Portweiterleitung.",
      "Einzelnes SSH-Terminal auf einem Telefon mit Zusatztastenreihe unten.",
      "Zwei gestapelte SSH-Sitzungen auf einem Telefon mit hervorgehobenem aktivem Panel.",
      "SFTP-Dateiübertragungs-Bildschirm auf einem Telefon mit Panels „Mein Telefon“ und „Remote-Host“.",
      "Über-Dialog auf einem Telefon mit Version, Autor, Lizenz und Website."
    ],
    compareHead: "Sein Platz neben Termux und Termius",
    compareIntro:
      "Mobile SSH ist absichtlich schmal gehalten: keine vollständige Linux-Umgebung und kein plattformübergreifender Team-Tresor. Es ist ein lokales Android-SSH-/SFTP-Werkzeug mit schnellem Zugriff auf die Session-Steuerung, die mobile Nutzer am häufigsten brauchen.",
    compareGuideTitle: "Vergleichsleitfaden",
    compareGuideText: "Wann du auf Android Mobile SSH, Termux oder Termius wählen solltest.",
    privacyTitle: "Datenschutzerklärung",
    privacyText: "Welche Verbindungsdaten lokal gespeichert werden und was an deine Server gesendet wird."
  },
  features: {
    metaTitle: "Funktionen | Mobile SSH",
    metaDescription:
      "Wichtige Funktionen von Mobile SSH für Android-SSH-, Terminal-, SFTP-, Private-Key-, tmux- und Portweiterleitungs-Workflows.",
    eyebrow: "Funktionsliste",
    h1: "Mobile-SSH-Funktionen",
    intro:
      "Mobile SSH ist für direkten SSH-Einsatz auf Android gebaut: Terminals öffnen, am Leben halten, Dateien bewegen, Server speichern und sich schnell von mobilen Unterbrechungen erholen.",
    groups: [
      {
        title: "Verbindungen",
        items: [
          "Passwort- und Private-Key-Authentifizierung",
          "Private Schlüssel Ed25519, RSA, ECDSA und DSA, die von der aktuellen App unterstützt werden",
          "Gespeicherte Serverprofile mit Host, Port, Benutzer, Anmeldedaten, privatem Schlüssel und optionalen Tunneln",
          "Wiederverwendbare Anmeldedaten, die bei der Servereinrichtung ausgewählt werden können",
          "Verlauf kürzlicher Sitzungen für die Wiederverbindung üblicher Servergruppen",
          "Login-Log für erfolgreiche und fehlgeschlagene Versuche"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Terminalverhalten im Stil von VT100/xterm-256color",
          "Scrollback-Puffer von 5000 Zeilen",
          "Zusatztastenreihe für ESC, TAB, CTRL, Umschalt, Pfeile, Home, End, PgUp, PgDn und Tastaturumschaltung",
          "Antippen für Fokus, optionales „Tippen zeigt Tastatur“, Aktionen Kopieren und Alles kopieren",
          "Pinch-Zoom-Textgröße mit Größenänderung des entfernten Terminals",
          "Vollbildmodus per Doppeltipp",
          "Terminaltext-Auswahl mit Kopieren, Teilen und Alles auswählen",
          "Gboard-Vorschläge/Autokorrektur und Spracheingabe, mit Pufferung des komponierten Texts"
        ]
      },
      {
        title: "Sitzungen",
        items: [
          "Bis zu acht gleichzeitige SSH-Sitzungen",
          "Rasteranordnung für aktive Sitzungen",
          "Vordergrunddienst für Hintergrund- und Bildschirmsperre-Stabilität",
          "Keepalives und Reconnect-Versuche mit exponentiellem Backoff",
          "Einstieg „Aktive Sitzungen“ vom Startbildschirm",
          "tmux-Befehlsverfolgung und Reattach-Hinweise für unterbrochene Arbeit"
        ]
      },
      {
        title: "Dateien und Tunnel",
        items: [
          "SFTP-Browser mit zwei Panels für lokale und entfernte Dateien",
          "Upload- und Download-Operationen in der Warteschlange",
          "Entferntes Umbenennen, Löschen, Erstellen, Bearbeiten und Details",
          "Sortieren nach Name oder Datum mit Persistenz pro Host",
          "Lokale Portweiterleitung im Serverprofil gespeichert",
          "Laufzeit-Tunnelansicht zum Hinzufügen/Entfernen bei verbundenen Sitzungen"
        ]
      },
      {
        title: "Lokalisierung",
        items: [
          "App-Übersetzungen: Arabisch, Bengalisch, Chinesisch (vereinfacht und traditionell), Englisch, Französisch, Deutsch, Hindi, Indonesisch, Japanisch, Marathi, Nigerianisches Pidgin, Portugiesisch, Russisch, Spanisch, Tamil, Telugu, Türkisch und Urdu",
          "Folgt der Android-Systemsprache; kein gesonderter App-Sprachpicker nötig"
        ]
      }
    ],
    security:
      "Sicherheitshinweis: Die aktuelle App speichert Serverprofile und Anmeldedaten lokal auf dem Android-Gerät. Es gibt keine Cloud-Synchronisation. Schütze das Gerät mit einer starken Bildschirmsperre und speichere keine Anmeldedaten auf geteilten Geräten."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius auf Android",
    metaDescription:
      "Ausgewogener Vergleich von Mobile SSH, Termux und Termius für SSH-Workflows auf Android.",
    eyebrow: "Android-SSH-Optionen",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Diese Werkzeuge überschneiden sich rund um SSH, sind aber für unterschiedliche Aufgaben gebaut. Mobile SSH ist ein fokussierter SSH-/SFTP-Client für Android, Termux eine Linux-Umgebung und Termius ein plattformübergreifender SSH-Client mit kontobasierten Produktivitätsfunktionen.",
    columns: {
      need: "Bedarf",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Hauptzweck",
        mobileSsh: "Dedizierter SSH-, SFTP-, lokaler Tunnel- und Terminalclient für Android.",
        termux: "Android-Terminalemulator und Linux-Umgebung mit APT-Paketen.",
        termius: "Moderner SSH-Client für Android, iOS, Desktop und team-orientierte, webfreundliche Workflows."
      },
      {
        need: "Einrichtungsstil",
        mobileSsh: "Host eingeben oder Serverprofil speichern und direkt verbinden.",
        termux: "Pakete wie OpenSSH installieren, Shell-Werkzeuge konfigurieren und auf einer Linux-ähnlichen Kommandozeile arbeiten.",
        termius: "Hosts, Schlüssel, Snippets und Tresore über die Termius-App und das Kontomodell anlegen oder synchronisieren."
      },
      {
        need: "Terminalsteuerung auf Android",
        mobileSsh: "Eingebaute Zusatztastenreihe, Rasterausführungen, Vollbild-Panels, Pinch-Zoom, Textauswahl mit Kopieren/Teilen, Gboard-Vorschläge, Spracheingabe und tmux-taugliches Scrollen.",
        termux: "Mächtige Terminalumgebung; das Verhalten hängt von installierten Werkzeugen und Konfiguration ab.",
        termius: "Mobile-Tastaturzusatz, Gesten, Tabs, Autovervollständigung, Snippets und feinpolierte Terminal-UX."
      },
      {
        need: "Dateiübertragung",
        mobileSsh: "Eingebaute Dual-Panel-SFTP-Übertragung, an die aktive SSH-Sitzung gebunden.",
        termux: "Kommandozeilenwerkzeuge wie scp, sftp, rsync oder installierte Dateitools verwenden.",
        termius: "Eingebautes SFTP sowie Host-/Schlüsselverwaltung."
      },
      {
        need: "Multi-Session-Arbeit",
        mobileSsh: "Bis zu acht gleichzeitige SSH-Sitzungen in einem Android-Raster.",
        termux: "Multiplexer wie tmux innerhalb von Termux oder in entfernten Shells verwenden.",
        termius: "Tabs und Split-View-artige Workflows, je nach Plattform und Tarif."
      },
      {
        need: "Datenmodell",
        mobileSsh: "Ausschließlich lokal gespeicherte Server, Anmeldedaten, Verlauf, Einstellungen und Logs.",
        termux: "Linux-ähnliches Dateisystem und Pakete innerhalb der Termux-App.",
        termius: "Verschlüsselte Tresore für Hosts, Schlüssel, Snippets, Forwarding-Regeln, Known Hosts und Team-Sharing."
      },
      {
        need: "Bester Anwendungsfall",
        mobileSsh: "Du willst eine einfache Android-App, um dich mit Servern zu verbinden, Dateien zu übertragen und Sitzungen am Leben zu halten.",
        termux: "Du willst eine vollständige Kommandozeilen-Umgebung auf Android und bist sicher beim Installieren und Konfigurieren von Paketen.",
        termius: "Du willst Geräteübergreifende Synchronisation, gepflegte Produktivitätsfunktionen, Tresore und Zusammenarbeit."
      }
    ],
    cards: [
      {
        title: "Wähle Mobile SSH, wenn",
        body: "Du direkten SSH-Zugriff von Android willst, ohne eine vollständige Linux-Umgebung oder ein cloud-synchronisiertes Kontomodell aufzubauen. Besonders geeignet für gespeicherte Server, SFTP, tmux-Sitzungen und schnelle lokale Tunnel-Workflows."
      },
      {
        title: "Wähle Termux, wenn",
        body: "Du Paketverwaltung, Shells, Compiler, Skripte, rsync, curl, Git, Python, Node.js oder andere Linux-Werkzeuge direkt auf dem Android-Gerät brauchst."
      },
      {
        title: "Wähle Termius, wenn",
        body: "Du einen kommerziellen, plattformübergreifenden SSH-Arbeitsraum mit verschlüsselten Tresoren, Team-Sharing, Schlüsselbund-Verwaltung, Snippets und einer konsistenten App auf mehreren Geräten willst."
      }
    ]
  },
  privacy: {
    metaTitle: "Datenschutzerklärung | Mobile SSH",
    metaDescription:
      "Datenschutzerklärung für Mobile SSH inklusive lokaler Speicherung, SSH-Datenübertragung, Dateiübertragung, Logs und Android-Berechtigungen.",
    eyebrow: "Datenschutz",
    h1: "Datenschutzerklärung",
    intro:
      "Mobile SSH ist als lokaler SSH-Client für Android konzipiert. Es benötigt kein Mobile-SSH-Konto und bietet keinen Mobile-SSH-Cloud-Sync.",
    sections: [
      {
        heading: "Auf deinem Gerät gespeicherte Informationen",
        body: "Wenn du dich entscheidest, App-Daten zu speichern, legt Mobile SSH sie lokal auf dem Android-Gerät ab. Das kann gespeicherte Serverprofile, Benutzernamen, Ports, Passwörter, private Schlüssel, Schlüssel-Passphrasen, Portweiterleitungs-Regeln, aktuelle Sitzungen, Anmeldeversuchs-Verlauf, Dateiübertragungs-Pfade, Sortierpräferenzen, tmux-Reattach-Hinweise, App-Einstellungen und Debug-Logs bei aktivierter Debug-Aufzeichnung umfassen."
      },
      {
        heading: "Über das Netzwerk gesendete Informationen",
        body: "Mobile SSH sendet SSH-Authentifizierungsdaten nur an die Server, die du konfigurierst und mit denen du dich verbindest. Terminal-Ein-/Ausgaben, SFTP-Dateiinhalte und Verkehr lokaler Portweiterleitungen werden mit den von dir gewählten Servern und entfernten Endpunkten ausgetauscht. Mobile SSH sendet diese Daten nicht an einen Mobile-SSH-Analyse-, Werbe-, Telemetrie- oder Cloud-Sync-Dienst."
      },
      {
        heading: "Dateiübertragung und Speicherzugriff",
        body: "Die Dateiübertragungsfunktion durchsucht den lokalen Telefonspeicher und entfernte SFTP-Verzeichnisse zum Hoch- und Herunterladen. Auf Android-Versionen, die das erfordern, kann die App Speicherzugriff anfragen, damit der lokale Datei-Browser ausgewählte Dateien lesen und schreiben kann."
      },
      {
        heading: "Logs und Fehlerbehebung",
        body: "Login-Verlauf und optionale Debug-Logs werden lokal zur Fehleranalyse gespeichert. Debug-Logs können Terminal-Ereignisse, SSH-Datengrößen, Touch-Diagnose, Resize-Ereignisse und Tunnel-Lifecycle-Ereignisse enthalten. Prüfe ein Debug-Archiv, bevor du es mit Support oder Dritten teilst."
      }
    ],
    permissionsHeading: "Berechtigungen",
    permissions: [
      { label: "Internet", body: "nötig, um sich mit SSH-Servern zu verbinden." },
      { label: "Wake Lock und Wi-Fi Lock", body: "halten aktive SSH-Sitzungen am Leben, während das Gerät schläft." },
      { label: "Vordergrunddienst und Benachrichtigungen", body: "ermöglichen die Verwaltung aktiver Verbindungen im Hintergrund." },
      { label: "Speicherzugriff", body: "wird für Dateiübertragung und Schlüsselimport benötigt." }
    ],
    securityHeading: "Sicherheitsverantwortung",
    securityBody:
      "Schütze dein Android-Gerät mit einer starken Bildschirmsperre, wenn du Anmeldedaten oder private Schlüssel speicherst. Verbinde dich nur mit Servern, denen du vertraust. Die aktuelle Implementierung nutzt den lokalen App-Speicher statt eines separaten verschlüsselten Cloud-Tresors.",
    contactHeading: "Kontakt",
    contactBody: "Support-Kontakt: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Dokumentation | Mobile SSH",
    metaDescription: "Endbenutzer-Dokumentation für Mobile SSH auf Android.",
    eyebrow: "Benutzerhandbuch",
    h1: "Mobile-SSH-Dokumentation",
    intro:
      "Verwende diese Seiten als öffentlichen Leitfaden zum Installieren, Verbinden, Verwalten von Sitzungen, Übertragen von Dateien, Weiterleiten von Ports und zum Beheben von Mobile-SSH-Problemen.",
    cards: [
      { slug: "getting-started",  title: "Erste Schritte",       text: "Installieren, App öffnen, ersten Server verbinden und übliche Hosts speichern." },
      { slug: "terminal",         title: "Terminal",             text: "Panels, Zusatztastenreihe, Scrollen, Kopier-Aktionen, tmux-Verhalten und Tastatur-Einstellungen." },
      { slug: "file-transfer",    title: "Dateiübertragung",     text: "Telefon- und Serverdateien durchsuchen, hochladen, herunterladen, sortieren und entfernte Datei-Details prüfen." },
      { slug: "port-forwarding",  title: "Portweiterleitung",    text: "Lokale Tunnel-Strings konfigurieren und aktive Weiterleitungen im Betrieb verwalten." },
      { slug: "troubleshooting",  title: "Fehlerbehebung",       text: "Probleme mit Verbindung, Authentifizierung, Tastatur, Speicher und Reconnect lösen." }
    ]
  },
  docsNav: {
    home: "Docs-Startseite",
    gettingStarted: "Erste Schritte",
    terminal: "Terminal",
    fileTransfer: "Dateiübertragung",
    portForwarding: "Portweiterleitung",
    troubleshooting: "Fehlerbehebung"
  },
  about: {
    metaTitle: "Über | Mobile SSH",
    metaDescription: "Über Mobile SSH: Version, Autor, Lizenz und Open-Source-Hinweise für den Android-SSH-Client.",
    eyebrow: "Über",
    h1: "Über Mobile SSH",
    intro: "Multi-Session-SSH-Client mit tmux, Portweiterleitungen und SFTP.",
    appHeading: "Über die App",
    versionLabel: "Version",
    authorLabel: "Autor",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "Lizenz",
    licenseValue: "MIT",
    websiteLabel: "Website",
    privacyLabel: "Datenschutzerklärung",
    privacyLinkText: "Datenschutzerklärung",
    noticesHeading: "Open-Source-Hinweise",
    noticesIntro: "Mobile SSH baut auf den folgenden Open-Source-Bibliotheken auf. Jede wird unter ihrer jeweiligen Lizenz genutzt.",
    notices: [
      { name: "JSch (mwiede fork)",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch" },
      { name: "JZlib (bundled in JSch)",   license: "BSD 3-clause" },
      { name: "jBCrypt (bundled in JSch)", license: "ISC" },
      { name: "Ed25519 / Ed448 Java",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java" },
      { name: "StringFog",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog" }
    ],
    contactHeading: "Kontakt",
    contactBody: "Support-Kontakt: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
