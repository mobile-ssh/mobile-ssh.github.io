import type { Dict } from "../types";

export const de: Dict = {
  meta: {
    siteName: "Mobile SSH",
    languageLabel: "Sprache",
    languageSwitcher: "Sprache wechseln"
  },
  nav: {
    blog: "Blog",
    home: "Start",
    features: "Funktionen",
    docs: "Dokumentation",
    compare: "Vergleich",
    about: "Über",
    privacy: "Datenschutz"
  },
  footer: {
    discordCommunity: "Mobile SSH-Community auf Discord",
    beta: "Betatest",
    tagline: "Fokussierte SSH-, SFTP- und Terminal-Workflows für Android- und iOS-Geräte.",
    documentation: "Dokumentation",
    comparison: "Vergleich",
    privacy: "Datenschutz",
    contact: "Kontakt",
    feedback: "Feedback"
  },
  home: {
    metaTitle: "Mobile SSH — SSH-Client für Android & iOS",
    metaDescription:
      "Mobile SSH für Android und iOS: SSH-Terminals, Sprungserver, tmux, herdr, Zellij, SFTP, VNC-Desktops und Backups. Android bietet außerdem VPN-Clients und Sicherheitsschlüssel.",
    eyebrow: "SSH-Client für Android & iOS",
    h1: "Mobile SSH",
    intro:
      "SSH-Terminals, tmux-, herdr- und Zellij-Manager, SFTP, VNC-Desktops, Sprungserver und lokale Tunnel für Telefone und Tablets. Eternal Terminal hält entfernte Shells über Unterbrechungen hinweg am Leben. Android ergänzt VPN-Clients und Anmeldung mit USB-/NFC-Sicherheitsschlüsseln.",
    versionLine: "Verfügbar in {count} Sprachen · Android {version} · iOS {iosVersion} Beta",
    ctaDocs: "Dokumentation lesen",
    ctaPlay: "Jetzt bei Google Play",
    ctaIos: "iOS-Beta auf TestFlight laden",
    platformAndroid: "Android",
    platformIos: "iOS — iPhone & iPad",
    advantagesHead: "Warum Mobile SSH",
    advantagesIntro: "Gebaut um die Stellen herum, an denen mobile SSH-Clients üblicherweise scheitern.",
    advantages: [
      { title: "Keine Pro-Stufe, keine Werbung", text: "Alle Funktionen in derselben App. Keine Paywall, die wesentliche Workflows hinter einem Pro-Upgrade versteckt, keine Werbebanner im Terminal." },
      { title: "Deine Daten bleiben lokal", text: "Gespeicherte Server, Zugangsdaten und Schlüssel liegen auf dem Gerät. Kein Cloud-Konto; nichts, was abgeschaltet werden könnte." },
      { title: "Gespeicherte Hosts, Suche zum Verbinden", text: "Host einmal anlegen, dann suchen und antippen zum Verbinden – Schlüssel, Ports und Tunnel kommen automatisch mit." },
      { title: "Agenten-Benachrichtigungen – und Antworten mit einem Tippen", text: "Erfahre sofort, wenn Claude Code, Codex oder ein anderer Agent dich braucht: Das Panel färbt sich bernsteinfarben, ein Zähler in der Symbolleiste zeigt, wie viele warten, und in der Agenten-Liste beantwortest du die Rückfrage mit einem einzigen Tippen – ganz ohne im Terminal zu tippen." },
      { title: "Terminal-Tasten über der Tastatur", text: "Eine Reihe aus dreizehn Tasten – ESC, TAB, CTRL, Pfeile, Home, End, PgUp, PgDn –, die statt zu scrollen in eine zweite Zeile umbricht, sodass nichts außerhalb des Bildschirms verschwindet. Ergänze F1–F12, Ctrl-Kombinationen oder eigene Escape-Sequenzen aus einer Vorlagen-Palette." },
      { title: "Portweiterleitung ohne Befehle", text: "Tunnel hängen am Server-Profil und gehen beim Verbinden automatisch hoch." },
      { title: "Übersteht Sperre und Netzwechsel", text: "Gib einem gespeicherten Server mehrere Adressen – eine LAN-IP zu Hause und eine VPN-IP – und Mobile SSH wählt diejenige, die antwortet, versucht dabei zuerst die zuletzt funktionierende und verbindet sich neu, sobald sich das Netzwerk ändert. Auf Android halten ein Vordergrunddienst und Wake Locks Shells bei ausgeschaltetem Bildschirm am Leben; auf iOS bringen dich Auto-Reconnect plus tmux-Auto-Attach dorthin zurück, wo du aufgehört hast." },
      { title: "Eternal Terminal", text: "Ein optionaler ET-Transport hält die entfernte Shell über Netzwerkausfälle, Schlafmodus und IP-Wechsel hinweg am Leben. Kein etserver auf dem Host? Mobile SSH kann ihn für dich über SSH installieren." },
      { title: "Erweiterbar mit Plugins", text: "Durchsuche einen öffentlichen Katalog und installiere Plugins bei Bedarf, um neue Workflows hinzuzufügen. Jedes Plugin wird heruntergeladen und per SHA-256 verifiziert im app-privaten Speicher abgelegt." }
    ],
    sectionAHead: "Gebaut für mobile SSH-Arbeit",
    sectionAIntro:
      "Mobile SSH hält den üblichen Admin-Weg kurz: Server speichern, verbinden, Sitzungen am Leben halten, bei Bedarf Dateien bewegen und schnell zu aktiven Terminals zurückkehren.",
    features: [
      { title: "SSH-Terminal", text: "xterm-256color-Terminal mit 24-bit True Color, Kursivschrift, Suche im Terminal, OSC 133-Shell-Integration und Pinch-to-Zoom-Textgröße – plus konfigurierbarer Schriftart und konfigurierbarem Farbschema sowie Nerd-Font-Powerline-/-Icon-Glyphen auf Android und iOS." },
      { title: "Multi-Session-Raster", text: "Bis zu acht SSH-Sitzungen in einem veränderbaren Raster – Tippen auf ein Panel für Fokus, Doppeltippen für Vollbild, Pinch zum Textgrößen-Anpassen." },
      { title: "Anklickbare Links", text: "URLs im Terminal sind unterstrichen und öffnen sich mit einem Tippen im Browser – kein Kopieren oder Wechseln der App nötig." },
      { title: "Serverordner und Servernamen", text: "Gespeicherte Server in einklappbare Gruppen organisieren und einem Server einen Namen geben, der statt seiner Adresse erscheint. Die Adresse kommt zurück, sobald ein Name mehrdeutig wäre – so verschwimmen Einträge nie ineinander." },
      { title: "Agenten-Benachrichtigungen", text: "Agenten melden sich über das Terminal, deshalb weiß die App, welcher blockiert ist und woran. Antworte mit einem Tippen aus der Agenten-Liste; Benachrichtigungen ersetzen einander, statt sich zu stapeln, und ein Tippen öffnet genau das Panel, das sich gemeldet hat." },
      { title: "Private Schlüssel", text: "Nutze Passwörter oder private Schlüssel und erzeuge Ed25519- oder ECDSA-Schlüssel auf dem Gerät, unter Android auch RSA. Android unterstützt außerdem FIDO2 über USB/NFC und SSH-Agent-Weiterleitung pro Server." },
      { title: "SFTP-Übertragung", text: "Dual-Panel-Dateibrowser, an eine aktive SSH-Sitzung gebunden. Uploads und Downloads in die Warteschlange stellen, umbenennen, löschen und entfernte Berechtigungen prüfen." },
      { title: "Portweiterleitung", text: "Lokale Tunnel-Angaben mit einem Serverprofil speichern – sie öffnen sich beim Verbinden automatisch, auch nach einem Reconnect in einem neuen Netzwerk, ohne dass du sie von Hand neu aufbauen musst." },
      { title: "Reconnect-Workflow", text: "Wechselt das Netzwerk, wählen die Sitzungen sofort neu, statt eine tote Route auslaufen zu lassen, und eine Sitzung im Backoff wacht auf, sobald ein nutzbares Netzwerk erscheint. Auf iOS wird ein Server, der stillschweigend nicht mehr antwortet, erkannt und neu verbunden." },
      { title: "Sicherung & Wiederherstellung", text: "Sichere Server, Zugangsdaten und Einstellungen mit optionaler Passphrase und Vorschau für Zusammenführen/Ersetzen. Android enthält VPN-Profile; aktuelle Android- und iOS-Backups teilen ein Format und bewahren unterstützte plattformspezifische Einstellungen." },
      { title: "Eternal Terminal", text: "Verbinde dich über Eternal Terminal (ET) für Sitzungen, die Netzwerkausfälle, Schlafmodus und IP-Wechsel überstehen – mit optionaler automatischer etserver-Einrichtung über SSH." },
      { title: "Multiplexer-Manager", text: "Über tmux-, herdr- und Zellij-Manager auf beiden Plattformen Sitzungen anhängen, umbenennen, erstellen, teilen, zoomen oder beenden. Eine gemeinsame Multiplexer-Schaltfläche öffnet die verfügbaren Manager; im Serverprofil wählst du das Anhängen beim Verbinden." },
      { title: "Plugins", text: "Plugins nach Kategorie durchsuchen, suchen und filtern und benötigte Abläufe installieren. Downloads werden per SHA-256 geprüft und im privaten App-Speicher abgelegt." },
      {
        "title": "Serveridentität und Sprungserver",
        "text": "Erreiche Server über gespeicherte Bastionen auf beiden Plattformen. Schlüsselprüfungen erfolgen vor Anmeldung und blockieren Änderungen. Android speichert neue Schlüssel automatisch oder fragt; iOS verlangt Bestätigung unbekannter Schlüssel."
      },
      {
        "title": "Entfernte Desktops",
        "text": "Öffne VNC-Desktops durch SSH unter Android/iOS mit Berührung, Tastatur, Zwischenablage und serverseitig unterstützter Größenanpassung."
      },
      {
        "title": "VPN-Clients unter Android",
        "text": "Verwalte SSH VPN, lokalen SOCKS5-Proxy, WireGuard, Shadowsocks und OpenVPN von der Startseite. Wähle und starte ein Profil; die Schnelleinstellungskachel Mobile SSH VPN stoppt oder setzt es fort."
      }
    ],
    multiHead: "Ein Bildschirm, mehrere aktive Shells",
    multiP1:
      "Die Terminalansicht kann mehrere aktive SSH-Sitzungen im Raster halten. Panel antippen zum Tippen, Zusatztastenreihe für Terminalsteuerung verwenden, mit Pinch die Textgröße anpassen und ein Panel doppelt antippen, wenn Vollbildfokus nötig ist.",
    multiP2:
      "Der Startbildschirm beantwortet die Frage „Wohin kann ich zurückkehren?“ – die gerade laufenden Verbindungen und die tmux-Sitzungen, die auf deinen gespeicherten Servern warten, aus einem gespeicherten Schnappschuss rekonstruiert, sodass sie auch ganz ohne Netzwerk erscheinen.",
    multiAlt:
      "Mobile SSH auf einem Smartphone mit zwei aktiven SSH-Terminal-Sitzungen in einer nebeneinander angeordneten geteilten Ansicht.",
    sftpHead: "SFTP, wenn das Terminal nicht reicht",
    sftpBody:
      "Lokale und entfernte Ordner durchsuchen, Transfers vormerken, das Verzeichnis jeder tmux-Sitzung merken und entfernte Dateien in anderen Apps öffnen. Beide Plattformen empfangen geteilte Dateien für Terminalsitzungen; iOS merkt sich einen in Dateien gewählten Ordner.",
    sftpCtaGuide: "Dateiübertragungs-Anleitung",
    sftpCtaAll: "Alle Funktionen",
    sftpAlt:
      "Dateiübertragungs-Bildschirm von Mobile SSH auf einem Telefon mit lokalem und entferntem Panel.",
    galleryHead: "Auf einem echten Gerät ansehen",
    galleryIntro:
      "Screenshots von Android-Telefonen und iPhones – dieselben Bildschirme, mit denen du Server hinzufügst, in Terminals arbeitest, mehrere Sitzungen ausführst und Dateien per SFTP überträgst.",
    carouselPrev: "Vorheriger Screenshot",
    carouselNext: "Nächster Screenshot",
    carouselDot: "Zu Position {n} wechseln",
    videoHead: "In Aktion sehen",
    videoIntro: "Kurze Demos auf beiden Plattformen. Android: der Startbildschirm, der zeigt, wo du wieder einsteigen kannst, eine Sitzungs-Symbolleiste, die nur anbietet, was der jeweilige Server kann, das Senden einer Datei direkt in die Eingabezeile sowie die Manager für tmux, herdr und Zellij. iOS: der Start direkt in ein laufendes Terminal und der Startbildschirm, zu dem du zurückkehrst.",
    videoAlt: "Android-Demo mit dem Startbildschirm, der fortsetzbare tmux-Sitzungen auflistet, der Sitzungs-Symbolleiste, dem Anhängen einer Datei an die Eingabezeile und den Sitzungsmanagern für tmux, herdr und Zellij",
    videoIosAlt: "iOS-Demo, in der Mobile SSH direkt in eine laufende SSH-Terminalsitzung startet und danach zum Startbildschirm zurückkehrt, mit dem tmux-Manager, den Einstellungen und den übrigen Bildschirmen der App",
    muxHead: "Ein Video pro Sitzungsmanager",
    muxIntro:
      "Die Übersichtsdemos stellen tmux, herdr und Zellij vor. Diese längeren Aufnahmen zeigen auf beiden Plattformen die Steuerung von Sitzungen, Fenstern, Tabs und Panes an einem laufenden Server.",
    muxItems: [
        {
          text: "Sitzungen, Fenster und Bereiche direkt vom Startbildschirm aus, eine Sitzung mit Glocke markiert, weil dort etwas Aufmerksamkeit verlangt. Hänge ein Fenster an, und das laufende Terminal folgt ihm; lege ein Fenster an und benenne es — ohne ein einziges Präfix-Kürzel zu tippen.",
          androidAlt: "Android-Demo des tmux-Managers: die zwischengespeicherte Sitzungsliste des Startbildschirms, dann Sitzungen, Fenster und Bereiche, das Anhängen eines Fensters, dem das Terminal folgt, und das Anlegen eines benannten Fensters.",
          iosAlt: "iOS-Demo des tmux-Managers: tmux-Sitzungen mit ihrem Alter und einer Glocke an einer, die auf Eingabe wartet, dann Fenster und Bereiche, jede Zeile mit Öffnen, Umbenennen und Beenden."
        },
        {
          text: "Arbeitsbereiche, Tabs und Bereiche, die echten Agentenzustand tragen — ein Agent arbeitet, einer ist blockiert und wartet auf einen Menschen. Sieh dir den blockierten an, antworte ihm vom Telefon aus und beobachte, wie herdr ihn als arbeitend und dann als fertig einstuft.",
          androidAlt: "Android-Demo des herdr-Managers: Sitzungen und Arbeitsbereiche mit Agentenzustand beschriftet, ein Agent als „needs you“ markiert, die Antwort vom Telefon aus, und ein neuer Arbeitsbereich, der angelegt und umbenannt wird.",
          iosAlt: "iOS-Demo des herdr-Managers: Arbeitsbereiche mit Agentenzustand und ein Antwortblatt, das getippte Eingabe an einen blockierten Agenten sendet, gefolgt von Enter."
        },
        {
          text: "Sitzungen mit ihrem Alter, dann Tabs und Bereiche. Sieh dir die Ausgabe eines Bereichs an, füge einen benannten Tab hinzu, hole den wichtigen nach vorn und hänge dich an — ohne irgendetwas an der Eingabeaufforderung zu tippen.",
          androidAlt: "Android-Demo des Zellij-Managers: Sitzungen mit ihrem Alter, Tabs und Bereiche, die Vorschau der Ausgabe eines Bereichs, das Anlegen eines benannten Tabs und das Anhängen einer Sitzung.",
          iosAlt: "iOS-Demo des Zellij-Managers: eine Sitzung mit Anhängen, Umbenennen, Beenden und Löschen, ihre Tabs und ein Bereich mit Vorschau und beiden Teilungsrichtungen."
        }
    ],
    demoHead: "Drei weitere, auf Android gefilmt",
    demoIntro:
      "Von diesen gibt es noch keine iOS-Fassung. Derselbe echte Server wie in den Demos oben: eine Sitzung, die es übersteht, wenn du die App verlässt, ein Schlüssel, der auf dem Telefon entsteht, statt in es hineingetippt zu werden, und Server, gruppiert so, wie du über sie denkst.",
    demoItems: [
      {
        title: "Die Sitzung überlebt die App",
        text: "Android hält die Verbindung in einem Vordergrunddienst; die dauerhafte Benachrichtigung nennt den Server und bietet Alle trennen. Verlasse die App bei laufendem Log und kehre zur aktiven Sitzung zurück. iOS erlaubt nur kurze Hintergrundzeit und verbindet sich danach erneut mit deinem Multiplexer.",
        androidAlt:
          "Android-Demo einer Sitzung, die im Hintergrund weiterläuft: ein HTTP-Log, das live ins Terminal strömt, die Abfrage der Benachrichtigungsberechtigung, die dauerhafte Benachrichtigung, die den verbundenen Server nennt, mit „Alle trennen“, dann der Wechsel zum Startbildschirm des Telefons und die Rückkehr zu demselben Strom, der weiterhin eintrifft."
      },
      {
        title: "Schlüssel entstehen hier, statt getippt zu werden",
        text: "Erzeuge einen Ed25519-Schlüssel auf dem Telefon: eine Bezeichnung, ein Benutzername, eine optionale Passphrase. Das Blatt, das danach erscheint, zeigt die öffentliche Hälfte, die in die authorized_keys eines Servers gehört, und kann jede der beiden Hälften teilen oder speichern.",
        androidAlt:
          "Android-Demo der Schlüsselerzeugung: der Dialog „SSH-Schlüssel erzeugen“ mit einer Bezeichnung, einem Benutzernamen, dem Schlüsseltyp Ed25519 und einer Passphrase, dann das Blatt mit dem öffentlichen Schlüssel, das anbietet, den Schlüssel zu teilen oder zu speichern."
      },
      {
        title: "Server leben in Ordnern, die du benennst",
        text: "Gruppiere gespeicherte Server in Ordner und klappe die zu, die du gerade nicht brauchst. Dieselbe Aufnahme endet im Terminal, wo eine von einem Befehl ausgegebene URL unterstrichen und antippbar ist, statt etwas, das du von Hand markieren musst.",
        androidAlt:
          "Android-Demo der Server-Ordner: gespeicherte Server, gruppiert in benannte Ordner, die sich auf- und zuklappen lassen, dann ein Terminal, in dem URLs in der Befehlsausgabe unterstrichen und antippbar sind."
      }
    ],
    graphicsHead: "Ein animiertes Diagramm, im Terminal",
    graphicsBody:
      "Ein GIF mit 36 Bildern, über das Kitty-Grafikprotokoll gestreamt und von der App im Takt der Datei selbst dekodiert — nicht von außen weitergeschaltet. Danach die Escape-Sequenzen, an denen ein Terminal gemessen wird: OSC 8 macht Build-Nummern und Dashboard-Namen antippbar, OSC 52 lässt die Gegenstelle in die Zwischenablage deines Telefons schreiben, und OSC 777 löst eine echte Android-Benachrichtigung aus.",
    graphicsAlt:
      "Android-Demo eines animierten Latenzdiagramms, das über das Kitty-Grafikprotokoll ins Terminal gestreamt wird, gefolgt von OSC-8-Links, einem OSC-52-Schreibvorgang in die Zwischenablage und einer OSC-777-Benachrichtigung.",
    lightboxClose: "Schließen",
    lightboxPrev: "Zurück",
    lightboxNext: "Weiter",
    galleryAlts: [
      "Startbildschirm von Mobile SSH auf einem Android-Telefon mit einem Banner „Aktive Sitzungen“ und einer Fortsetzen-Liste gespeicherter Server, darüber Schaltflächen für Server, Anmeldedaten, Einstellungen, Über und Plugins.",
      "Dialog „Server hinzufügen“ auf einem Telefon mit Feldern für Servername, Host und Port, weitere Adressen, Anmeldedaten, privaten Schlüssel und Portweiterleitungen.",
      "Einzelnes SSH-Terminal auf einem Telefon mit dem Patch eines Coding-Agenten und einem bestandenen Testlauf, unter der Sitzungs-Symbolleiste.",
      "Zwei SSH-Sitzungen in einer nebeneinander angeordneten geteilten Ansicht auf einem Telefon.",
      "Vier SSH-Sitzungen in einem Raster auf einem Telefon, jede auf einem anderen Server, mit hervorgehobenem aktivem Panel.",
      "SFTP-Dateiübertragungs-Bildschirm auf einem Telefon mit Panels „Mein Telefon“ und „Remote-Host“.",
      "Über-Dialog auf einem Telefon mit Feldern für Version, Autor, Lizenz und Website.",
      "Dialog „SSH-Schlüssel erzeugen“ auf einem Telefon mit Feldern für Bezeichnung, Benutzer, Schlüsseltyp und Passphrase.",
      "Dialog „Öffentlicher Schlüssel“ auf einem Telefon mit dem erzeugten Schlüssel und Optionen zum Kopieren, Teilen und Speichern.",
      "Bildschirm „Gespeicherte Server“ mit Servern, die in einklappbaren Gruppen „Arbeit“ und „Privat“ organisiert sind.",
      "SSH-Terminal auf einem Telefon mit https://-URLs, die als antippbare, anklickbare Links unterstrichen sind.",
      "Zellij-Manager auf einem Android-Telefon mit einer Auflistung von Sitzungen, Tabs und Panels samt Schaltflächen zum Anhängen, Umbenennen, Beenden und Fokussieren.",
      "Tmux-Manager auf einem Telefon mit einer Auflistung von tmux-Sitzungen, -Fenstern und -Panels samt Schaltflächen zum Anhängen, Umbenennen und Wechseln.",
      "Plugins-Bildschirm auf einem Telefon mit einem installierbaren Plugin-Katalog mit Tailscale, WireGuard und Claude Code CLI.",
      "AI-Chat-Plugin auf einem Telefon, das eine Antwort eines lokalen llama3.2-Modells streamt, das über SSH auf dem entfernten Server läuft.",
      "Dialog „Server hinzufügen“ auf einem Telefon mit dem Transport auf Eternal Terminal eingestellt, damit Sitzungen Netzwerkausfälle überstehen."
    ],
    galleryIosAlts: [
      "Verbindungsformular von Mobile SSH auf einem iPhone mit Feldern für Server, Authentifizierung, Ordner und Transport.",
      "Gespeicherte Server auf einem iPhone, organisiert in die Gruppen „Production“ und „Staging“, mit Serversuche.",
      "Aktives SSH-Terminal auf einem iPhone mit tmux-Statusleiste und Zusatztastenreihe unten.",
      "Zwei SSH-Sitzungen übereinander in einem Raster auf einem iPhone mit Panels, die per Tippen fokussiert werden.",
      "Dateiübertragung auf einem iPhone mit Panels „Mein Telefon“ und „Remote-Host“ sowie einem Protokoll abgeschlossener Übertragungen.",
      "Schlüssel-Authentifizierung auf einem iPhone mit einem auf dem Gerät erzeugten Ed25519-Schlüssel und kopierbarem öffentlichem Schlüssel.",
      "Tmux-Manager auf einem iPhone mit einer Auflistung von Sitzungen und Fenstern samt Aktionen zum Öffnen, Umbenennen und Beenden – eine Glocke markiert einen Agenten, der auf Eingabe wartet.",
      "SSH-Terminal auf einem iPhone, verbunden mit einem tmux-Fenster, das Code in einem entfernten Editor zeigt.",
      "Plugin-Katalog auf einem iPhone mit Tailscale, WireGuard, Claude Code CLI, VS Code und AI Chat zur Installation.",
      "Verbindungsformular auf einem iPhone mit dem Transport auf Eternal Terminal eingestellt, damit Sitzungen Netzwerkausfälle überstehen.",
      "Einstellungen für Agenten-Benachrichtigungen auf einem iPhone mit Schaltern für Vibration, Ton und Nur-Kopfhörer.",
      "Startbildschirm von Mobile SSH auf einem iPhone mit einem Banner „Aktive Sitzungen“ und einer Fortsetzen-Zeile, um zu einer laufenden Sitzung zurückzukehren, darunter Kacheln für Server, Anmeldedaten, Logs, Einstellungen, Über und Plugins."
    ],
    compareHead: "Sein Platz neben Termux und Termius",
    compareIntro:
      "Mobile SSH ist absichtlich schmal gehalten: keine vollständige Linux-Umgebung und kein plattformübergreifender Team-Tresor. Es ist ein lokales SSH-/SFTP-Werkzeug für Android und iOS mit schnellem Zugriff auf die Session-Steuerung, die mobile Nutzer am häufigsten brauchen.",
    compareGuideTitle: "Vergleichsleitfaden",
    compareGuideText: "Wann du auf deinem Smartphone oder Tablet Mobile SSH, Termux oder Termius wählen solltest.",
    privacyTitle: "Datenschutzerklärung",
    privacyText: "Welche Verbindungsdaten lokal gespeichert werden und was an deine Server gesendet wird."
  },
  features: {
    metaTitle: "Funktionen | Mobile SSH",
    metaDescription:
      "Entdecke Mobile-SSH-Terminals, Sprungserver, Identitätsprüfung, SFTP, VNC, Backups und Multiplexer auf Android/iOS sowie Android-VPN und Sicherheitsschlüssel.",
    eyebrow: "Funktionsliste",
    h1: "Mobile-SSH-Funktionen",
    intro:
      "Verbinde deine Server von Android und iOS aus mit SSH-Terminals, geprüften Identitäten, Sprungservern, SFTP, VNC und Sitzungsmanagern. Android ergänzt integriertes VPN-Routing und Hardware-Sicherheitsschlüssel; Plattformunterschiede sind unten markiert.",
    groups: [
      {
        title: "Plattformen",
        items: [
          "Android 8.0 oder neuer – derzeit ein geschlossener Test bei Google Play: Öffne den Opt-in-Link in einem mobilen Browser und installiere danach über Play",
          "iOS 16 oder neuer auf iPhone und iPad – öffentliche Beta über TestFlight",
          "Aktuelle Android- und iOS-Versionen nutzen Backupformat 2 für Inventar und Einstellungen; ein Import macht nicht unterstützte Plattformfunktionen nicht verfügbar"
        ]
      },
      {
        title: "Verbindungen",
        items: [
          "Passwort- und Private-Key-Authentifizierung",
          "Private Schlüssel Ed25519, ECDSA (P-256/384/521) und RSA auf Android; Ed25519 und ECDSA auf iOS. Beide Plattformen öffnen passphrasenverschlüsselte Schlüssel",
          "Gespeicherte Serverprofile mit Host, Port, Benutzer, Anmeldedaten, privatem Schlüssel und optionalen Tunneln – klone ein Profil, um seine Einstellungen in einen neuen Server zu übernehmen",
          "Gib einem Server einen Namen, und die Liste zeigt ihn statt der Adresse – die Adresse kommt zurück, sobald zwei Einträge sonst gleich aussähen",
          "Gespeicherte Server nach Name, Host, Port, Anmeldedaten oder einer ihrer Alternativadressen durchsuchen",
          "Verbindest du dich unter zwei gespeicherten Einträgen zweimal mit derselben Maschine, merkt die App das – sie vergleicht den Fingerabdruck des Host-Keys und bietet an, beide zu einem Server mit mehreren Adressen zusammenzuführen",
          "Suche-zuerst-Sitzung-hinzufügen-Ablauf: gespeicherten Server auf einer eigenen Suchseite auswählen und mit einem Tippen verbinden",
          "Mehrere Adressen pro gespeichertem Server für LAN/VPN-Roaming – der Reihe nach gewählt, wobei die zuletzt funktionierende Adresse zuerst versucht wird, und bei Netzwechsel setzt die Wiederverbindung ein",
          "Wiederverwendbare Anmeldedaten, die bei der Servereinrichtung ausgewählt werden können",
          "Ein Startbildschirm rund ums Weitermachen: die gerade laufenden Verbindungen und die tmux-Sitzungen, die auf deinen Servern warten – aus einem gespeicherten Schnappschuss, sodass sie auch ohne Netzwerk erscheinen und jeder Eintrag mit seinem Alter versehen ist. Unter iOS ist die Liste „Zuletzt“ in den Dialog „Neue Verbindung“ umgezogen, wo ein Tippen das Formular vorausfüllt",
          "IPv6 durchgehend: Literale in eckigen Klammern mit optionalem Port in den Adressfeldern und IPv6-Ziele in eckigen Klammern in Portweiterleitungsregeln",
          "Login-Log für erfolgreiche und fehlgeschlagene Versuche, das die genau gewählte Adresse und bei einem Fehlschlag auch den Grund festhält",
          "Teleport-Proxy-Transport (experimentell, Android): mit Benutzername, Passwort und OTP anmelden oder eine Teleport-Konfigurations- oder Identitätsdatei importieren, Cluster-Knoten durchsuchen und dann Terminals, SFTP, tmux und Plugins über den Proxy-Tunnel ausführen",
          "Gespeicherte SSH-Sprungserver auf beiden Plattformen, mit geordneten Ketten bis acht aufgelöste Sprünge; jeder hat eigene Zugangsdaten und Identitätsprüfung",
          "Android-SSH-Agent-Weiterleitung: pro Server aktivieren, damit entfernte Programme Signaturen gespeicherter Schlüssel anfragen; optionale Freigabe, private Schlüssel bleiben am Telefon",
          "Android-FIDO2 über USB/NFC: OpenSSH-Sicherheitsschlüssel registrieren oder importieren und Touch-/PIN-Anfragen beantworten"
        ]
      },
      {
        title: "Terminal",
        items: [
          "Terminalverhalten im Stil von VT100/xterm-256color mit 24-bit True Color und Kursivschrift – der Shell werden TERM=xterm-256color und COLORTERM=truecolor mitgeteilt",
          "Scrollback-Puffer auf 1.000, 5.000, 10.000 oder 50.000 Zeilen einstellbar, auf Android und iOS (standardmäßig 5.000)",
          "Suche im Terminal – den Scrollback und den sichtbaren Bildschirm durchsuchen und zwischen Treffern springen (Android und iOS)",
          "Shell-Integration (OSC 133): von Prompt zu Prompt springen, die vollständige Ausgabe eines Befehls auswählen – den Build-Fehler von vor 300 Zeilen, nicht nur den letzten – und benachrichtigt werden, wenn ein lang laufender Befehl fertig ist (Android und iOS)",
          "Inline-Bilder im Terminal über das Kitty-Grafikprotokoll, die Pinch-Zoom und Neuumbruch überstehen, statt zu verschwinden (Android und iOS)",
          "Die App zeichnet Block-, Braille- und Sextant-Mosaikglyphen selbst, sodass chafa, timg und ANSI-Kunst auf Android und iOS korrekt ins Raster passen",
          "Berührungen senden auf beiden Plattformen Mausklicks an Terminalprogramme mit Mausverfolgung, mit optionalem Ziehen; iOS bietet zusätzlich eine Einstellung, um stattdessen den Cursor zu platzieren",
          "Die Bereichskopfzeile nennt das tatsächliche Arbeitsverzeichnis des Bereichs, bei tmux erfragt oder von der Shell über OSC 7 gemeldet (Android)",
          "Zusatztastenreihe aus dreizehn Tasten – ESC, TAB, CTRL, Pfeile, Home, End, PgUp, PgDn, Tastaturumschaltung –, die statt zu scrollen in eine zweite Zeile umbricht und den Rest in ein Überlaufmenü faltet, sodass keine Taste außerhalb des Bildschirms landet",
          "Die Reihe auf Android und iOS anpassen: aus einer Palette von rund 45 Vorlagen hinzufügen, darunter F1–F12, Ctrl-Kombinationen und Symbole; entfernen, neu anordnen, ausblenden, eigene Escape-Sequenz-Tasten definieren und auf die Standardwerte zurücksetzen, mit Live-Vorschau",
          "Antippen für Fokus, optionales „Tippen zeigt Tastatur“, Aktionen Kopieren und Alles kopieren",
          "Pinch-Zoom-Textgröße mit Größenänderung des entfernten Terminals",
          "Vollbildmodus per Doppeltipp",
          "Terminaltext-Auswahl mit Kopieren, Teilen und Alles auswählen – langes Drücken wählt das Wort aus, und Kopieren behält die Auswahl zum Teilen oder erneuten Kopieren",
          "OSC 52-Zwischenablage – Text aus einer entfernten tmux- oder vim-Sitzung direkt in die Telefon-Zwischenablage kopieren (Android und iOS)",
          "Hardwaretastaturen und Diktat auf beiden Plattformen; iOS aktiviert Diktat und Vorschläge samt Autokorrektur standardmäßig. Für direkte Eingabe ausschalten",
          "Unterstützung externer und Bluetooth-Tastaturen auf Android und iOS, einschließlich Pfeiltasten, Funktionstasten und Ctrl/Alt-Tastenkombinationen",
          "Bracketed Paste, damit mehrzeiliger Zwischenablage-Inhalt nicht automatisch ausgeführt wird",
          "Die mitgelieferte Nerd Font stellt auf Android und iOS Powerline-, Starship-, Devicon- und Material-Design-Icon-Glyphen dar, die die Systemschrift sonst als leere Kästchen zeigen würde",
          "Breite CJK-, Emoji- und kombinierende Zeichen werden auf Android und iOS korrekt vermessen und gezeichnet, einschließlich Graphem-Cluster und Zero-Width-Joiner",
          "Konfigurierbare Terminalschrift (System-Monospace, JetBrains Mono oder Source Code Pro) und ANSI-Farbschema (Solarized, Gruvbox, Dracula, Nord) auf Android und iOS, live auf offene Panels angewendet",
          "Ein Schieberegler für die Terminal-Textgröße in den Einstellungen, ergänzend zum Pinch-Zoom, und ein App-Design mit den Optionen System, Hell oder Dunkel",
          "Durchsatz und Anzeigen hängender Verbindungen unterscheiden ausgelastete Befehle von fehlender Antwort; optionales Abdunkeln und Vibrieren",
          "Einstellungen steuern entfernte Meldungen, Befehlsabschlussalarme und entfernte Zwischenablageabfragen; Freigaben sind standardmäßig aus"
        ]
      },
      {
        title: "Sitzungen",
        items: [
          "Bis zu acht gleichzeitige SSH-Sitzungen",
          "Rasteranordnung für aktive Sitzungen",
          "Hintergrund- und Bildschirmsperre-Stabilität: Auf Android hält ein Vordergrunddienst Shells und Agenten am Laufen, auch nachdem du die App weggewischt hast; auf iOS hängt tmux-Auto-Attach deine Shell wieder an",
          "Keepalives und Reconnect-Versuche mit exponentiellem Backoff – bis zu zehn Versuche, wobei Fehlschläge gegenüber einem Netzwerk, das du längst verlassen hast, nicht auf das Limit angerechnet werden",
          "Ein Wechsel von WLAN, Mobilfunk oder VPN wählt sofort neu, statt die tote Route auslaufen zu lassen, und eine Sitzung, die bereits im Backoff steckt, versucht es erneut, sobald ein nutzbares Netzwerk erscheint",
          "Unbeantwortete Keepalive-Proben erkennen nicht mehr reagierende Server und lösen unter Android und iOS eine Neuverbindung aus",
          "Einstieg „Aktive Sitzungen“ vom Startbildschirm; dauerhafte Benachrichtigung listet Sitzungen auf – tippen zum Öffnen",
          "tmux-Befehlsverfolgung und Wiederanheften mit Auto, Nichts, tmux, herdr oder Zellij pro Server auf Android/iOS; die Sitzungsidentität bleibt beim tmux-Socketwechsel erhalten",
          "Agenten melden sich selbst über das Terminal, sodass die App den Agenten kennt, das Werkzeug, das er ausführt, und ob er auf dich wartet – das Panel färbt sich bernsteinfarben, seine Kopfzeile liest „claude · needs you“, und ein Zähler in der Symbolleiste zeigt, wie viele warten",
          "Beantworte die Frage eines Agenten mit einem Tippen aus der Agenten-Liste; die Antwort läuft über einen eigenen Kanal und tippt daher nie in das hinein, was gerade auf dem Bildschirm steht",
          "Installiere den Agenten-Hook aus der App heraus auf einem Server – ein kleines Shell-Skript, das jeder Agent aufrufen kann, keine Anbieter-Integration",
          "Eternal-Terminal-Transport (ET) für Sitzungen, die Netzwerkausfälle, Schlafmodus und IP-Wechsel überstehen, mit optionaler automatischer etserver-Einrichtung über SSH",
          "Tmux-Manager: Sitzungen, Fenster und Panels auflisten und wechseln – anhängen, umbenennen, erstellen, teilen, zoomen oder beenden, mit Sortierung nach Name/Datum und einem 🔔 für Agenten, die auf Eingabe warten",
          "Eine Multiplexer-Schaltfläche öffnet tmux-, herdr- und Zellij-Manager; Herdr bietet Pane-Vorschau, Fokus und Antworten, Zellij aktive und beendete Sitzungen"
        ]
      },
      {
        title: "Dateien und Tunnel",
        items: [
          "SFTP-Browser mit zwei Panels für lokale und entfernte Dateien, mit einem Übertragungsprotokoll, das jede Übertragung zeigt und scrollt",
          "Uploads und Downloads mit Warteschlange; teile Dateien mit Mobile SSH unter Android oder der iOS-Teilen-Erweiterung, lade sie in eine verbundene Sitzung und füge ihre entfernten Pfade ein",
          "Rekursiver Ordner-Upload und -Download zwischen Telefon und entferntem Host",
          "Entferntes Umbenennen, Löschen, Erstellen, Bearbeiten, Komprimieren zu .tar.gz, Berechtigungen (chmod/chown) und Details",
          "Eine heruntergeladene Datei auf beiden Plattformen in einer anderen App öffnen – auf iOS erscheinen Downloads zusätzlich in der Dateien-App unter „Auf meinem iPhone“",
          "Dateiübertragung merkt entfernte Ordner pro Host und tmux-Sitzung auf beiden Plattformen; iOS merkt zusätzlich einen externen lokalen Dateien-Ordner",
          "Sortieren nach Name oder Datum mit Persistenz pro Host und Rücksprung zu zuletzt verwendeten entfernten Pfaden",
          "Dateigrößen in Binäreinheiten – passend zu dem, was ls -h im Terminal einen Tab weiter anzeigt",
          "Lokale Portweiterleitung im Serverprofil gespeichert und beim Verbinden automatisch aufgebaut",
          "Folgt dem hellen oder dunklen Systemdesign in der gesamten App und im Dateibrowser – wähle System, Hell oder Dunkel auf Android und iOS"
        ]
      },
      {
        title: "Lokalisierung",
        items: [
          "Zwanzig App-Sprachen auf beiden Plattformen: Arabisch, Ägyptisch-Arabisch, Bengalisch, vereinfachtes und traditionelles Chinesisch, Englisch, Französisch, Deutsch, Hindi, Indonesisch, Japanisch, Marathi, Nigerianisches Pidgin, Portugiesisch, Russisch, Spanisch, Tamil, Telugu, Türkisch und Urdu",
          "Folgt standardmäßig der Systemsprache, und in den Einstellungen gibt es eine Sprachauswahl, falls du die App in einer anderen Sprache als der des Telefons möchtest"
        ]
      },
      {
        title: "Schlüssel und Sicherung",
        items: [
          "Erzeuge neue Ed25519- oder ECDSA-Schlüssel auf dem Gerät (auf Android auch RSA), mit optionaler Passphrase",
          "Kopiere, teile oder speichere einen erzeugten öffentlichen Schlüssel für die authorized_keys des Servers",
          "Vollbackups enthalten Server, Zugangsdaten, Einstellungen, Sprache und Multiplexersortierung; Android zusätzlich SSH-VPN-, SOCKS5-, WireGuard-, Shadowsocks- und OpenVPN-Profile",
          "Für kleineren Umfang ausgewählte Einträge oder nur Inventar exportieren; Vollbackup vorab prüfen und Zusammenführen oder Ersetzen wählen, optional mit Passphrase verschlüsselt",
          "Unverschlüsselte Backups enthalten Passwörter und private Schlüssel. SSH-Vertrauen, aktive Sitzungen, Systemrechte und Ordnerfreigaben sind nicht übertragbar; Sicherheitsschlüssel-Zugangsdaten benötigen weiterhin den physischen Schlüssel"
        ]
      },
      {
        title: "Sicherheit",
        items: [
          "Sicherer Bildschirm: Auf Android werden Screenshots und Bildschirmaufnahmen blockiert und die App aus der Vorschau der letzten Apps ausgeblendet; auf iOS wird die Vorschau im App-Umschalter geleert und Bildschirmaufnahme und -spiegelung blockiert (ein manueller Screenshot lässt sich auf iOS nicht blockieren) – eine Opt-in-Einstellung für Momente, in denen Passwörter, Schlüssel oder Tokens auf dem Bildschirm sind",
          "Gespeicherte Server, Zugangsdaten und Schlüssel liegen auf dem Gerät, ohne verpflichtendes Cloud-Konto oder Synchronisation; die Datenschutzseite erklärt den Speicherschutz und seine Grenzen",
          "Anonyme Nutzungsanalyse ist standardmäßig an und kann unter Android und iOS in Einstellungen abgeschaltet werden; Ereignisse enthalten weder Server noch Zugangsdaten, Befehle oder Dateiinhalte",
          "SSH-Identitäten werden vor Anmeldung geprüft. Android speichert neue Rohschlüssel standardmäßig automatisch, auf Wunsch mit Freigabe; iOS fragt bei unbekannten Schlüsseln. Beide lehnen Änderungen ab",
          "Beide Plattformen importieren OpenSSH-Hostschlüssel-Widerrufe mit festgelegtem Geltungsbereich. iOS akzeptiert mit @revoked markierte Ed25519-/ECDSA-Schlüssel; Android unterstützt zusätzlich Host-Zertifizierungsstellen. iOS unterstützt weder Host-Zertifikate noch CA-Importe. SSH-Vertrauen bleibt auf dem jeweiligen Gerät und ist von Backups ausgeschlossen"
        ]
      },
      {
        title: "Plugins",
        items: [
          "Plugins nach Kategorien durchsuchen, suchen, installieren und ausführen; ein Quellenwechsel aktualisiert den Katalog",
          "Plugins werden bei Bedarf aus einem öffentlichen Katalog geladen und per SHA-256 verifiziert im app-privaten Speicher abgelegt",
          "Ein Plugin erklärt, was es braucht – SSH-Befehle, einen Tunnel, Speicher –, und die App verweigert alles, was es nicht angefordert hat",
          "Richtet ein Plugin etwas auf deinem Server ein, siehst du zuerst die genauen Befehle und gibst sie frei, bevor sie laufen",
          "Konfiguriere eine eigene oder private Katalogquelle oder installiere aus einem Ordner auf deinem eigenen Server"
        ]
      },
      {
        "title": "Entfernte Desktops",
        "items": [
          "VNC-Desktops durch SSH-Tunnel auf Android/iOS, ohne einen VNC-Port ins öffentliche Internet zu stellen",
          "Touch-Zeigersteuerung, Hardware-/Bildschirmtastatur, Zwischenablageaustausch und Desktopglocke",
          "Wähle Bildschirmvorgaben oder eigene Maße bei unterstützter VNC-Größenanpassung; nicht unterstützte Anfragen werden gemeldet"
        ]
      },
      {
        "title": "VPN-Clients (Android)",
        "items": [
          "VPN auf der Startseite verwaltet SSH VPN, SOCKS5-Proxy, WireGuard, Shadowsocks und OpenVPN",
          "SSH VPN leitet TCP/DNS für alle oder ausgewählte Apps und Domains durch gespeichertes SSH; anderes zugewiesenes UDP wird blockiert",
          "Authentifizierter lokaler SOCKS5-Proxy neben anderem VPN; teilnehmende Apps müssen Proxy und entferntes DNS verwenden",
          "Import von WireGuard-.conf, unterstützten Shadowsocks-ss://-Links und eigenständigen OpenVPN-.ovpn-Profilen mit geprüften Serverzertifikaten",
          "Profilstart wechselt VPN; Mobile SSH VPN in Schnelleinstellungen startet/stoppt das gemerkte VPN-Profil und schließt SOCKS-Proxys aus",
          "Android erlaubt ein Geräte-VPN. Tailscale nutzt seine App, IKEv2/IPsec Android-Einstellungen. Mobile SSH verspricht weder Always-on noch Lockdown"
        ]
      }
    ],
    security:
      "Sicherheitshinweis: Die aktuelle App speichert Serverprofile und Anmeldedaten lokal auf dem Gerät (auf iOS liegen Geheimnisse im System-Keychain). Es gibt keine Cloud-Synchronisation. Schütze das Gerät mit einer starken Bildschirmsperre und speichere keine Anmeldedaten auf geteilten Geräten."
  },
  compare: {
    metaTitle: "Mobile SSH vs Termux vs Termius auf Mobilgeräten",
    metaDescription:
      "Ausgewogener Vergleich von Mobile SSH, Termux und Termius für SSH-Workflows auf Android und iOS.",
    eyebrow: "Mobile SSH-Optionen",
    h1: "Mobile SSH vs Termux vs Termius",
    intro:
      "Mobile SSH vereint SSH, SFTP, VNC und Multiplexer-Manager auf Android und iOS, mit integrierten VPN-Clients und Sicherheitsschlüsseln unter Android. Termux ist eine Android-Linux-Umgebung; Termius ein plattformübergreifender SSH-Client mit kontobasierten Produktivitätsfunktionen.",
    columns: {
      need: "Bedarf",
      mobileSsh: "Mobile SSH",
      termux: "Termux",
      termius: "Termius"
    },
    rows: [
      {
        need: "Hauptzweck",
        mobileSsh: "SSH, SFTP, VNC, Sprungserver und Multiplexer auf beiden Plattformen; VPN-Clients und FIDO2 unter Android.",
        termux: "Android-Terminalemulator und Linux-Umgebung mit APT-Paketen.",
        termius: "Moderner SSH-Client für Android, iOS, Desktop und team-orientierte, webfreundliche Workflows."
      },
      {
        need: "Einrichtungsstil",
        mobileSsh: "Server und Zugangsdaten speichern, optional Sprungserver auswählen und mit Identitätsprüfung vor Anmeldung verbinden.",
        termux: "Pakete wie OpenSSH installieren, Shell-Werkzeuge konfigurieren und auf einer Linux-ähnlichen Kommandozeile arbeiten.",
        termius: "Hosts, Schlüssel, Snippets und Tresore über die Termius-App und das Kontomodell anlegen oder synchronisieren."
      },
      {
        need: "Mobile Terminalsteuerung",
        mobileSsh: "Zusatztasten, Sitzungsraster, Vollbild-Panes, Pinch-Zoom, Kopieren/Teilen, Maus und externe Tastaturen. iOS-Diktat und Vorschläge lassen sich für direkte Eingabe abschalten.",
        termux: "Mächtige Terminalumgebung; das Verhalten hängt von installierten Werkzeugen und Konfiguration ab.",
        termius: "Mobile-Tastaturzusatz, Gesten, Tabs, Autovervollständigung, Snippets und feinpolierte Terminal-UX."
      },
      {
        need: "Dateiübertragung",
        mobileSsh: "SFTP mit zwei Panes, tmux-Ordnerverlauf sowie eingehende und entfernte Dateifreigaben auf beiden Plattformen; iOS merkt externe Dateien-Ordner.",
        termux: "Kommandozeilenwerkzeuge wie scp, sftp, rsync oder installierte Dateitools verwenden.",
        termius: "Eingebautes SFTP sowie Host-/Schlüsselverwaltung."
      },
      {
        need: "Multi-Session-Arbeit",
        mobileSsh: "Bis zu acht gleichzeitige SSH-Sitzungen in einem Raster.",
        termux: "Multiplexer wie tmux innerhalb von Termux oder in entfernten Shells verwenden.",
        termius: "Tabs und Split-View-artige Workflows, je nach Plattform und Tarif."
      },
      {
        need: "Datenmodell",
        mobileSsh: "Profile, Zugangsdaten, Host-Vertrauen und Einstellungen auf dem Gerät; optionale portable Inventar- und Einstellungsbackups. Android enthält VPN-Profile; SSH-Vertrauen bleibt pro Gerät.",
        termux: "Linux-ähnliches Dateisystem und Pakete innerhalb der Termux-App.",
        termius: "Verschlüsselte Tresore für Hosts, Schlüssel, Snippets, Forwarding-Regeln, Known Hosts und Team-Sharing."
      },
      {
        need: "Bester Anwendungsfall",
        mobileSsh: "Du willst eine einfache App auf Android oder iOS, um dich mit Servern zu verbinden, Dateien zu übertragen und Sitzungen am Leben zu halten.",
        termux: "Du willst eine vollständige Kommandozeilen-Umgebung auf Android und bist sicher beim Installieren und Konfigurieren von Paketen.",
        termius: "Du willst geräteübergreifende Synchronisation, gepflegte Produktivitätsfunktionen, Tresore und Zusammenarbeit."
      }
    ],
    cards: [
      {
        title: "Wähle Mobile SSH, wenn",
        body: "Du direkten SSH-Zugriff von deinem Smartphone oder Tablet willst – Android oder iOS –, ohne eine vollständige Linux-Umgebung oder ein cloud-synchronisiertes Kontomodell aufzubauen. Besonders geeignet für gespeicherte Server, SFTP, tmux-Sitzungen und schnelle lokale Tunnel-Workflows."
      },
      {
        title: "Wähle Termux, wenn",
        body: "Du Paketverwaltung, Shells, Compiler, Skripte, rsync, curl, Git, Python, Node.js oder andere Linux-Werkzeuge direkt auf dem Android-Gerät brauchst."
      },
      {
        title: "Wähle Termius, wenn",
        body: "Du einen kommerziellen, plattformübergreifenden SSH-Arbeitsraum mit verschlüsselten Tresoren, Team-Sharing, Schlüsselbund-Verwaltung, Snippets und einer konsistenten App auf mehreren Geräten willst."
      }
    ],
    featureHeading: "Funktion für Funktion",
    featureRows: [
      { category: "Verbindung",        feature: "Läuft auf Android und iOS",                     mobile: "yes",      termux: "nur Android",    termius: "yes" },
      { category: "Verbindung",        feature: "Gespeicherte Serverprofile",                        mobile: "yes",      termux: "über ssh config", termius: "yes" },
      { category: "Verbindung",        feature: "Gespeicherte Server durchsuchen",                   mobile: "yes",      termux: "no",             termius: "yes" },
      { category: "Verbindung",        feature: "Serverordner / Gruppen",                            mobile: "yes",      termux: "no",             termius: "yes" },
      { category: "Verbindung",        feature: "Suche-zuerst-Sitzung-hinzufügen-Auswahl",           mobile: "Android",  termux: "no",             termius: "no" },
      { category: "Verbindung",        feature: "Mehrere Adressen pro Server (LAN/VPN-Roaming)", mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Verbindung",        feature: "Wiederverwendbare Anmeldedaten",                    mobile: "yes",      termux: "no",             termius: "yes" },
      { category: "Verbindung",        feature: "Startbildschirm listet auf, wo du weitermachen kannst", mobile: "yes",   termux: "no",             termius: "teilweise" },
      { category: "Verbindung",        feature: "Offline-Liste der tmux-Sitzungen (ohne Verbindung)", mobile: "yes",     termux: "no",             termius: "no" },
      { category: "Verbindung",        feature: "Benannte Server statt der Adresse angezeigt",       mobile: "yes",      termux: "no",             termius: "yes" },
      { category: "Verbindung",        feature: "Login-Log",                                         mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Verbindung",        feature: "Teleport-Proxy-Transport (experimentell)",          mobile: "Android",  termux: "no",             termius: "no" },
      { category: "Verbindung",        feature: "IPv6-Hosts und Weiterleitungsziele",                mobile: "yes",      termux: "yes",            termius: "teilweise" },
      { category: "Terminal",          feature: "SSH-Terminal",                                      mobile: "yes",      termux: "über OpenSSH",    termius: "yes" },
      { category: "Terminal",          feature: "xterm-256color-Emulation",                          mobile: "yes",      termux: "yes",            termius: "yes" },
      { category: "Terminal",          feature: "Konfigurierbarer Scrollback (1k–50k Zeilen)",       mobile: "yes",      termux: "konfigurierbar", termius: "teilweise" },
      { category: "Terminal",          feature: "Suche im Terminal (Scrollback)",                mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Terminal",          feature: "Zusatztastenreihe (ESC/TAB/CTRL/…)",                mobile: "yes",      termux: "yes",            termius: "yes" },
      { category: "Terminal",          feature: "Pinch-to-Zoom-Textgröße",                           mobile: "yes",      termux: "yes",            termius: "yes" },
      { category: "Terminal",          feature: "Doppeltipp auf Panel für Vollbild",                 mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Terminal",          feature: "Antippbare URLs in der Terminalausgabe",            mobile: "yes",      termux: "teilweise",      termius: "yes" },
      { category: "Terminal",          feature: "Textauswahl: Kopieren / Teilen / Alles auswählen",  mobile: "yes",      termux: "yes",            termius: "yes" },
      { category: "Terminal",          feature: "Hardware- / Bluetooth-Tastaturunterstützung",       mobile: "yes",      termux: "yes",            termius: "yes" },
      { category: "Terminal",          feature: "Shell-Integration (OSC 133)",                       mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Terminal",          feature: "Inline-Bilder (Kitty-Grafik)",                      mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Terminal",          feature: "Von der App gezeichnete Mosaikglyphen (chafa, ANSI-Art)", mobile: "yes", termux: "schriftabhängig", termius: "no" },
      { category: "Terminal",          feature: "Tippen wirkt als Klick in TUIs mit Maus-Modus",     mobile: "yes",  termux: "yes",            termius: "no" },
      { category: "Terminal",          feature: "Nerd-Font-/Powerline-Glyphen-Darstellung",          mobile: "yes",      termux: "konfigurierbar", termius: "teilweise" },
      { category: "Sitzungen",         feature: "Mehrere gleichzeitige SSH-Sitzungen",               mobile: "bis zu 8",  termux: "bis zu 8",       termius: "yes" },
      { category: "Sitzungen",         feature: "Raster-Panel-Anordnung",                            mobile: "yes",      termux: "über tmux",      termius: "Tabs" },
      { category: "Sitzungen",         feature: "tmux-taugliches Scrollen",                          mobile: "yes",      termux: "yes",            termius: "no" },
      { category: "Sitzungen",         feature: "tmux-Reattach-Hinweise beim Reconnect",             mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Sitzungen",         feature: "Agenten-Benachrichtigungen (Claude Code / Codex)",  mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Sitzungen",         feature: "Dauerhafte Benachrichtigung mit Sitzungsliste",     mobile: "Android",  termux: "teilweise",      termius: "no" },
      { category: "Sitzungen",         feature: "Vordergrunddienst & Wake Lock",                     mobile: "Android",  termux: "yes",            termius: "teilweise" },
      { category: "Sitzungen",         feature: "Auto-Reconnect mit Backoff",                        mobile: "yes",      termux: "über autossh",   termius: "yes" },
      { category: "Dateien",           feature: "Eingebaute SFTP-Dateiübertragungs-UI",              mobile: "yes",      termux: "no",             termius: "yes" },
      { category: "Dateien",           feature: "Dual-Panel lokaler + entfernter Browser",           mobile: "yes",      termux: "no",             termius: "yes" },
      { category: "Dateien",           feature: "Upload-/Download-Warteschlange",                    mobile: "yes",      termux: "no",             termius: "yes" },
      { category: "Dateien",           feature: "Entferntes Umbenennen / Löschen / Erstellen",       mobile: "yes",      termux: "no",             termius: "yes" },
      { category: "Dateien",           feature: "Entfernte Dateirechte anzeigen",                    mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Dateien",           feature: "Sortieren nach Name oder Datum pro Host",           mobile: "yes",      termux: "no",             termius: "teilweise" },
      { category: "Tunnel",            feature: "Lokale Portweiterleitung",                          mobile: "yes",      termux: "über CLI",        termius: "yes" },
      { category: "Tunnel",            feature: "Gespeicherte Tunnel mit Serverprofil",              mobile: "yes",      termux: "über ssh config", termius: "yes" },
      { category: "Tunnel",            feature: "Tunnel im Betrieb hinzufügen / entfernen",          mobile: "no",       termux: "no",             termius: "yes" },
      { category: "Schlüssel",         feature: "Passwort-Authentifizierung",                        mobile: "yes",      termux: "yes",            termius: "yes" },
      { category: "Schlüssel",         feature: "Private-Key-Authentifizierung",                     mobile: "yes",      termux: "yes",            termius: "yes" },
      { category: "Schlüssel",         feature: "Schlüsselerzeugung auf dem Gerät",                  mobile: "yes",      termux: "über ssh-keygen", termius: "yes" },
      { category: "Schlüssel",         feature: "Erzeugten öffentlichen Schlüssel teilen / speichern", mobile: "yes",   termux: "yes",            termius: "yes" },
      { category: "Sicherung",         feature: "Server-Sicherung exportieren / importieren",        mobile: "yes",      termux: "über termux-backup", termius: "Pro-Cloud-Tresor" },
      { category: "Sicherung",         feature: "Verschlüsselte lokale Sicherungsdatei",             mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Sicherung",         feature: "Kein Konto erforderlich",                           mobile: "yes",      termux: "yes",            termius: "teilweise" },
      { category: "Datenschutz & Kosten", feature: "Keine Pro-Paywall",                              mobile: "yes",      termux: "yes",            termius: "teilweise" },
      { category: "Datenschutz & Kosten", feature: "Keine Werbung",                                  mobile: "yes",      termux: "yes",            termius: "yes" },
      { category: "Datenschutz & Kosten", feature: "Analyse-Opt-out",                                mobile: "yes",  termux: "keine Analyse",  termius: "no" },
      { category: "Datenschutz & Kosten", feature: "Nur lokale Daten (keine Cloud-Synchronisation)", mobile: "yes",      termux: "yes",            termius: "teilweise" },
      { category: "Datenschutz & Kosten", feature: "Sicherer Bildschirm (Bildschirmerfassung blockieren)",   mobile: "yes",  termux: "no",             termius: "no" },
      { category: "Sitzungen",         feature: "Eternal Terminal (ausfallsichere Sitzungen)",       mobile: "yes",      termux: "über CLI",        termius: "no" },
      { category: "Sitzungen",         feature: "Automatische etserver-Installation über SSH",       mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Sitzungen",         feature: "tmux-Sitzungsmanager",                              mobile: "yes",      termux: "über CLI",        termius: "no" },
      { category: "Sitzungen",         feature: "herdr- und Zellij-Sitzungsmanager",                 mobile: "yes"    ,  termux: "über CLI",        termius: "no" },
      { category: "Sitzungen",         feature: "Ein-Tipp-Antworten an einen blockierten Agenten",   mobile: "yes",      termux: "no",             termius: "no" },
      { category: "Plugins",           feature: "Plugin-Unterstützung",                              mobile: "yes",      termux: "über Pakete",     termius: "no" },
      { category: "Plugins",           feature: "Plugin-Katalog mit Installation bei Bedarf",        mobile: "yes",      termux: "no",             termius: "no" }
    ],
    agentAppsHeading: "Mobile SSH vs. KI-Coding-Agenten-Apps",
    agentAppsIntro:
      "Eine schnell wachsende Kategorie von Apps existiert einzig dafür, Coding-Agenten – Claude Code, Codex und Co. – vom Smartphone aus zu steuern. Einige sind Drittanbieter-SSH- oder Relay-Apps (Onepilot, Happy, Omnara); OpenAI und Anthropic liefern das inzwischen auch nativ, mit Codex in der ChatGPT-App und Claude Code in der Claude-App, die beide in der Cloud des jeweiligen Anbieters laufen. Mobile SSH überschneidet sich mit ihnen allen – du kannst diese Agenten über SSH ausführen und wirst benachrichtigt, wenn sie dich brauchen –, geht die Aufgabe aber von der anderen Seite an: Es ist zuerst ein allgemeiner, direkter SSH-Client und erst danach ein Agenten-Begleiter.",
    agentAppsRows: [
      { feature: "Führt Coding-Agenten vom Smartphone aus",                   mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",       chatgpt: "yes",             claude: "yes" },
      { feature: "Funktioniert mit jedem Coding-Agenten (nicht nur einem Anbieter)", mobile: "yes", onepilot: "yes", happy: "Claude Code", omnara: "yes",     chatgpt: "nur Codex",       claude: "nur Claude Code" },
      { feature: "Läuft auf deinem eigenen Rechner (nicht in einer Anbieter-Cloud)", mobile: "yes", onepilot: "yes", happy: "yes",       omnara: "yes",       chatgpt: "no",              claude: "teilweise" },
      { feature: "Direktes SSH – kein Cloud-Relay",                           mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no",        chatgpt: "no",              claude: "no" },
      { feature: "Allgemeines SSH-Terminal (beliebige Befehle ausführen)",    mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "teilweise", chatgpt: "no",              claude: "no" },
      { feature: "SFTP-Dateiübertragung",                                     mobile: "yes", onepilot: "teilweise", happy: "no",        omnara: "no",        chatgpt: "no",              claude: "no" },
      { feature: "Lokale Portweiterleitung",                                  mobile: "yes", onepilot: "yes",      happy: "no",         omnara: "no",        chatgpt: "no",              claude: "no" },
      { feature: "tmux-Sitzungsmanager",                                      mobile: "yes", onepilot: "teilweise", happy: "no",        omnara: "no",        chatgpt: "no",              claude: "no" },
      { feature: "Funktioniert mit einem selbst installierten Agenten",       mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",       chatgpt: "no",              claude: "no" },
      { feature: "Agentenmeldungen (wenn ein verbundener Agent eine Eingabe benötigt)", mobile: "yes", onepilot: "yes", happy: "yes",   omnara: "yes",       chatgpt: "yes",             claude: "yes" },
      { feature: "Ein-Tipp-Freigabe/-Ablehnung von Agenten-Anfragen",        mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "yes",       chatgpt: "yes",             claude: "yes" },
      { feature: "Keine Server- oder SSH-Einrichtung",                        mobile: "no",  onepilot: "no",       happy: "teilweise",  omnara: "teilweise", chatgpt: "yes",             claude: "yes" },
      { feature: "Android und iOS",                                           mobile: "yes", onepilot: "nur iOS",  happy: "yes",        omnara: "yes",       chatgpt: "yes",             claude: "yes" },
      { feature: "Kein Konto erforderlich",                                   mobile: "yes", onepilot: "yes",      happy: "yes",        omnara: "no",        chatgpt: "no",              claude: "no" },
      { feature: "Keine Pro-Paywall (alle Funktionen kostenlos)",            mobile: "yes", onepilot: "no",       happy: "no",         omnara: "no",        chatgpt: "kostenlose Stufe", claude: "no" },
      { feature: "Open Source",                                               mobile: "Apache 2.0",  onepilot: "no",       happy: "MIT",        omnara: "Apache",    chatgpt: "no",              claude: "no" }
    ],
    agentAppsNote:
      "Die nativen ChatGPT- und Claude-Apps sind der reibungsloseste Weg, den Agenten eines Anbieters ganz ohne Einrichtung auszuführen – kein Server, nur ein Konto – und sie bieten einen ausgefeilten Ein-Tipp-Freigabe-/Ablehnungsbildschirm. Der Haken: Sie führen ausschließlich ihr eigenes Modell in ihrer eigenen Cloud aus, ohne allgemeines Terminal, ohne SFTP oder Tunnel und ohne eigenen Rechner, und sie sind kostenpflichtig oder an ein Konto gebunden. Onepilot, Happy und Omnara halten den Agenten auf Hardware, die du kontrollierst (Onepilot per direktem SSH; Happy und Omnara über ein Cloud-Relay, und Omnara benötigt ein Konto). Mobile SSH verbindet sich direkt mit deinem eigenen Server ohne Konto oder Anbieter-Relay, führt jeden Agenten neben einem vollwertigen Terminal, SFTP und Portweiterleitung aus, und jede Funktion ist kostenlos. Inzwischen beantwortet es Agenten-Anfragen genauso wie sie – über eine Agenten-Liste, die jeden Agenten über alle Verbindungen hinweg zeigt, mit einer Schaltfläche pro Auswahlmöglichkeit –, mit dem Unterschied, dass der Agent auf deiner Maschine läuft und die Antwort über deine eigene SSH-Verbindung reist. Der Kompromiss ist derselbe wie immer: Du bringst den Server mit, und der Hook des Agenten muss dort einmal installiert werden.",
  },
  privacy: {
    metaTitle: "Datenschutzerklärung | Mobile SSH",
    metaDescription:
      "Wie Mobile SSH gespeicherte Daten, Identitäten, Backups, SSH-/VPN-Verkehr, Dateien, Analyse und Berechtigungen unter Android und iOS behandelt.",
    eyebrow: "Datenschutz",
    h1: "Datenschutzerklärung",
    intro:
      "Mobile SSH speichert seine Konfiguration auf deinem Gerät und verbindet mit gewählten Servern und Diensten. Kein Mobile-SSH-Konto und keine Cloud-Synchronisierung nötig. Optionale Android-VPN-Clients leiten ausgewählten Geräteverkehr durch deine Server.",
    sections: [
      {
        heading: "Auf deinem Gerät gespeicherte Informationen",
        body: "Gespeicherte Daten umfassen Serverprofile, Zugangsdaten, private Schlüssel, Host-Identitäten, Sprungserver, Tunnelregeln, Sitzungsstände, Anmeldeverlauf, Dateipfade, Ordnerberechtigungen und App-Einstellungen. Android speichert auch VPN-/Proxykonfigurationen samt Geheimnissen. iOS nutzt für Geheimnisse die Keychain. Android verschlüsselt das Inventar mit einem Keystore-geschützten Schlüssel, kann es bei nicht verfügbarer Verschlüsselung aber im Klartext speichern; die Speicherung von WireGuard-, Shadowsocks- und OpenVPN-Profilen erfordert Verschlüsselung. Android-Cloudbackup ist deaktiviert. Optionale Debugprotokolle bleiben lokal."
      },
      {
        heading: "Über das Netzwerk gesendete Informationen",
        body: "SSH-Anmeldung geht nach Identitätsprüfung an konfigurierte Server und Sprungserver. Terminal-, SFTP-, VNC- und Weiterleitungsverkehr geht an gewählte Ziele. Pluginkataloge und Downloads kontaktieren konfigurierte Quellen. Android-VPN-/Proxyprofile leiten Verkehr anderer Apps und DNS gemäß gewählten Routen über SSH-, WireGuard-, Shadowsocks- oder OpenVPN-Server. Dieser Verkehr geht nicht an Mobile-SSH-Analyse oder Cloudspeicher."
      },
      {
        heading: "Dateiübertragung und Speicherzugriff",
        body: "Dateitransfer nutzt gewählte Dateien und Ordner ohne umfassendes Speicherrecht. Android behält die erteilte Ordnerfreigabe. iOS nutzt den App-Ordner oder merkt einen Dateien-Ordner und importiert Dokumente, Fotos und geteilte Dateien über Systemschnittstellen. Ein Dateianbieter kann seine eigene Cloud nutzen. Öffnen oder Teilen sendet die Datei an deine gewählte App oder dein Ziel."
      },
      {
        heading: "Logs und Fehlerbehebung",
        body: "Anmeldeversuche werden beim Verbinden lokal erfasst. Debugaufnahme ist optional: Android warnt, dass Terminaldiagnosen jede getippte Taste einschließlich Passwörtern enthalten, und exportiert ein Archiv. iOS-Logs enthalten Verbindungsadressen, Fehler, Wiederverbindungen, Netzwerkwechsel und tmux-Diagnosen. Prüfe Logs vor dem Teilen; sie können Serverdetails und unter Android eingegebene Geheimnisse offenlegen."
      },
      {
        heading: "Anonyme Nutzungsanalyse",
        body: "Mobile SSH sendet anonyme App- und Funktionsereignisse über HTTPS an Aptabase, mit App-/Betriebssystemversion, Gerätemodell und Sprache. Verwendet wird eine wechselnde zufällige Sitzungskennung; Ereignisse enthalten nie Serveradressen, Benutzernamen, Zugangsdaten, Befehle oder Dateiinhalte. Analyse ist standardmäßig an. Ein Einstellungsschalter auf beiden Plattformen stoppt neue Erfassung; unter iOS können zuvor vorgemerkte Ereignisse noch ankommen."
      },
      {
        "heading": "Exportierte Backups",
        "body": "Vollbackups enthalten Inventar und Einstellungen, unter Android auch VPN/Proxy. Eine Passphrase verschlüsselt alles; ohne stehen Passwörter und private Schlüssel im Klartext. Du wählst Speicher- oder Teilziel. SSH-Vertrauen, aktive Sitzungen und Systemordnerfreigaben fehlen. Die Importvorschau zeigt anzuwendende Bereiche und Sicherheitseinstellungen."
      },
      {
        "heading": "VPN-Routing unter Android",
        "body": "Geräte-VPN benötigt Androids Zustimmung und läuft bis zum Stoppen oder Systemende. Ein Geräte-VPN gleichzeitig; lokaler SOCKS-Proxy kann ein anderes VPN begleiten. SSH trägt TCP/DNS, anderes SSH zugewiesenes UDP wird blockiert. Stoppen, Wechseln oder App-Ende beendet den bisherigen Schutz; keine Always-on-/Lockdown-Garantie."
      }
    ],
    permissionsHeading: "Berechtigungen",
    permissions: [
      { label: "Internet", body: "für SSH-, Datei-, Desktop-, VPN- und Pluginverbindungen sowie aktivierte Analyse verwendet." },
      { label: "Wake Lock und Wi-Fi Lock", body: "halten auf Android aktive SSH-Sitzungen am Leben, während das Gerät schläft." },
      { label: "Vordergrunddienst und Benachrichtigungen", body: "ermöglichen auf Android die Verwaltung aktiver Verbindungen im Hintergrund; auf iOS werden Benachrichtigungen für Agenten-Benachrichtigungen genutzt." },
      { label: "Dateizugriff", body: "über Systemauswahl für Ordner, Dokumente und Fotos erteilt; iOS kann einen externen Dateien-Ordner merken. Keine Plattform fordert pauschales Speicherrecht." },
      {
        "label": "VPN-Zustimmung (Android)",
        "body": "erforderlich, bevor integrierte VPN-Clients Geräteverkehr leiten. Reiner SOCKS-Proxy belegt keinen Geräte-VPN-Platz."
      },
      {
        "label": "USB und NFC (Android)",
        "body": "für physische FIDO2-Schlüssel beim Registrieren oder SSH-Signieren, mit USB-Erlaubnis und erforderlicher Touch-/PIN-Bestätigung."
      }
    ],
    securityHeading: "Sicherheitsverantwortung",
    securityBody:
      "Schütze Gerät und exportierte Backups. Vergleiche unbekannte SSH-Fingerabdrücke über einen vertrauenswürdigen Kanal: schalte Androids automatische Annahme aus, wenn du den Erstkontakt bestätigen möchtest; iOS fragt standardmäßig. Kläre Schlüsselwechsel vor dem Ersetzen einer Identität. Sicherer Bildschirm blockiert Android-Screenshots und Aufnahmen; iOS verbirgt Appwechselvorschau, Aufnahme und Spiegelung, kann manuelle Screenshots aber nicht verhindern.",
    contactHeading: "Kontakt",
    contactBody: "Support-Kontakt: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  },
  docsIndex: {
    metaTitle: "Dokumentation | Mobile SSH",
    metaDescription: "Endbenutzer-Dokumentation für Mobile SSH auf Android und iOS.",
    eyebrow: "Benutzerhandbuch",
    h1: "Mobile-SSH-Dokumentation",
    intro:
      "Anleitungen zu SSH-Identitäten und Sprungservern, Terminals und VNC, Multiplexern, SFTP, Backups, lokalen Tunneln und Android-VPN mit erklärten Plattformunterschieden.",
    cards: [
      { slug: "getting-started",  title: "Erste Schritte",       text: "Installieren, Identitäten prüfen, Sprungserver und Schlüssel einrichten und Konfiguration sichern." },
      { slug: "terminal",         title: "Terminal",             text: "Terminalsteuerung, tmux, herdr, Zellij, Agentenalarme und VNC-Desktops verwenden." },
      { slug: "file-transfer",    title: "Dateiübertragung",     text: "Dateien übertragen, Ordner merken und Dateien mit Sitzungen oder anderen Apps teilen." },
      { slug: "port-forwarding",  title: "Portweiterleitung",    text: "Lokale Tunnel sowie Android SSH VPN, SOCKS5, WireGuard, Shadowsocks und OpenVPN einrichten." },
      { slug: "troubleshooting",  title: "Fehlerbehebung",       text: "Probleme mit Identitäten, Sprungservern, Terminal, Transfers, Backups und VPN untersuchen." }
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
    metaDescription: "Über Mobile SSH: Version, Autor, Lizenz und Open-Source-Hinweise für den SSH-Client für Android und iOS.",
    eyebrow: "Über",
    h1: "Über Mobile SSH",
    intro: "SSH, SFTP, VNC und Multiplexer für Android/iOS, mit lokalen Backups, geprüften Identitäten und Sprungservern. Android ergänzt VPN-Clients und Hardware-Sicherheitsschlüssel.",
    appHeading: "Über die App",
    versionLabel: "Version",
    authorLabel: "Autor",
    authorValue: "Dmitry Kozlov",
    licenseLabel: "Lizenz",
    licenseValue: "Apache 2.0",
    websiteLabel: "Website",
    privacyLabel: "Datenschutzerklärung",
    privacyLinkText: "Datenschutzerklärung",
    noticesHeading: "Open-Source-Hinweise",
    noticesIntro: "Mobile SSH baut auf den folgenden Open-Source-Bibliotheken auf. Jede wird unter ihrer jeweiligen Lizenz genutzt.",
    notices: [
      { name: "JSch (mwiede fork) — Android",        license: "BSD 3-clause", url: "https://github.com/mwiede/jsch", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "JZlib (bundled in JSch) — Android",   license: "BSD 3-clause", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "jBCrypt (bundled in JSch) — Android", license: "ISC", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "Ed25519 / Ed448 Java — Android",      license: "CC0 (public domain)", url: "https://github.com/str4d/ed25519-java", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "StringFog — Android",                 license: "Apache 2.0", url: "https://github.com/megatronking/stringfog", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "SwiftNIO & SwiftNIO SSH — iOS",       license: "Apache 2.0", url: "https://github.com/apple/swift-nio-ssh", licenseUrl: "https://github.com/apple/swift-nio-ssh/blob/main/LICENSE.txt" },
      { name: "Swift Crypto — iOS",                  license: "Apache 2.0", url: "https://github.com/apple/swift-crypto", licenseUrl: "https://github.com/apple/swift-crypto/blob/main/LICENSE.txt" },
      { name: "WireGuard Android — Android", license: "Apache-2.0", url: "https://github.com/WireGuard/wireguard-android", licenseUrl: "/licenses/wireguard-android-APACHE-2.0.txt" },
      { name: "wireguard-go — Android", license: "MIT", url: "https://github.com/WireGuard/wireguard-go", licenseUrl: "/licenses/wireguard-go-MIT.txt" },
      { name: "Go / golang.org/x/crypto / golang.org/x/net / golang.org/x/sys — Android", license: "BSD-3-Clause", licenseUrl: "/licenses/wireguard-third-party-notices.txt" },
      { name: "hev-socks5-tunnel / hev-socks5-core / hev-task-system — Android", license: "MIT", url: "https://github.com/heiher/hev-socks5-tunnel", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "lwIP — Android", license: "BSD-3-Clause", url: "https://savannah.nongnu.org/projects/lwip/", licenseUrl: "/licenses/android-third-party-notices.txt" },
      { name: "shadowsocks-rust — Android", license: "MIT / Apache-2.0 / BSD / ISC / Unicode-3.0", url: "https://github.com/shadowsocks/shadowsocks-rust", licenseUrl: "/licenses/shadowsocks-NOTICES.txt" },
      { name: "OpenVPN 3 Core — Android", license: "MPL-2.0", url: "https://github.com/OpenVPN/openvpn3", licenseUrl: "/licenses/openvpn3-MPL-2.0.txt" },
      { name: "mbed TLS — Android", license: "Apache-2.0", url: "https://github.com/Mbed-TLS/mbedtls", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "Asio — Android", license: "BSL-1.0", url: "https://github.com/chriskohlhoff/asio", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
      { name: "LZ4 / xxHash — Android", license: "BSD-2-Clause", licenseUrl: "/licenses/openvpn-NOTICES.txt" },
    ],
    openvpnSourceHeading: "OpenVPN-Quellcode",
    openvpnSourceBody: "OpenVPN 3 Core wird unter MPL 2.0 verwendet. Laden Sie den genauen erfassten Quellcode und die Abhängigkeitsversionen, Lizenztexte und Informationen zum nativen Build herunter.",
    openvpnSourceLabel: "Quellcodearchiv herunterladen",
    certificatesHeading: "Zertifikate",
    apkCertificateLabel: "Signaturzertifikat für direkt installierte APKs (PEM)",
    apkCertificateBody: "Dieses öffentliche Zertifikat identifiziert den Unterzeichner der direkt installierten APKs von Mobile SSH. Google Play kann Downloads mit einem anderen Zertifikat signieren.",
    serverCertificateBody: "Zertifikate für SSH- und VPN-Server müssen von Ihrem Serveradministrator oder VPN-Anbieter stammen. Prüfen Sie ihre Fingerabdrücke über einen vertrauenswürdigen Kanal; dieses Signaturzertifikat ist keine VPN-Zertifizierungsstelle.",
    signingHelpLabel: "Android-Dokumentation zur App-Signierung",
    contactHeading: "Kontakt",
    contactBody: "Support-Kontakt: [mobile.ssh.info@gmail.com](mailto:mobile.ssh.info@gmail.com)."
  }
};
