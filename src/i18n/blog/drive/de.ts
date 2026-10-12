import { defineDrive } from "./define";

export const de = defineDrive({
  "metaTitle": "Der Blogbeitrag, der auf der Heimfahrt begann | Mobile SSH",
  "metaDescription": "Eine gedachte Schreibsitzung per Sprache vergleicht T3 Code, Moshi, Mobile SSH und paseo.sh: Entwürfe, Dateiänderungen, Quellcode, Staging und der Umgang mit Lärm.",
  "back": "Blog",
  "eyebrow": "Arbeiten per Sprache",
  "title": "Der Blogbeitrag, der auf der Heimfahrt begann",
  "standfirst": "Eine Idee kommt, bevor die Fahrt endet. Kannst du daraus einen Entwurf, eine Quellcodeänderung und einen sorgfältig zum Commit vorgemerkten Diff machen, ohne ständig auf den Touchscreen zu schauen? Vier Produkte bieten unterschiedliche Teile dieses Gesprächs.",
  "author": "Die Mobile SSH-Redaktion",
  "date": "11. Oktober 2026",
  "readingTime": "7 Min. Lesezeit",
  "evidence": "Eine gedachte Fahrt, kein Fahrtest. Die Funktionen wurden am 11. Oktober 2026 anhand offizieller Dokumentation und des aktuellen Quellcodes geprüft. Es gab keinen vergleichenden Mikrofon- oder Fahrgeräuschtest. Richte alles im geparkten Auto ein; das Fahren hat Vorrang. Bildschirmprüfungen und Freigaben warten bis zu einem sicheren Halt.",
  "body": [
    "Der Beitrag beginnt in einem geparkten Auto. Du hast ein Repository auf einem erreichbaren Rechner, einen einsatzbereiten Programmieragenten und eine Idee, die wahrscheinlich verschwindet, wenn du sie erst nach dem Abendessen festhalten willst. Vor der Abfahrt wählst du das Projekt und stellst die Verbindung her. Die erste Bitte sprichst du ganz normal aus.",
    "Entwirf einen Blogbeitrag über unsere neue Suchfunktion. Beginne mit dem Problem des Lesers. Speichere einen Entwurf im Blogverzeichnis und erstelle keinen Commit.",
    "Die Fahrt liefert den Rahmen. Die nützliche Frage ist aber, was passiert, nachdem das Mikrofon dich gehört hat. Füllt Sprache nur ein Textfeld? Muss noch jemand auf Senden tippen? Kannst du eine Antwort hören und nachfragen? T3 Code, Moshi, Mobile SSH und paseo.sh geben darauf unterschiedliche Antworten.",
    "Eine Bitte, vier verschiedene Gespräche",
    "T3 Code bringt den Programmieragenten und seine Arbeit am Repository in eine mobile Oberfläche. Die dokumentierte integrierte Spracheingabe transkribiert lokal auf unterstützten iPhones mit iOS 26 oder neuer. Entscheidend ist: Die Transkription ändert den Entwurf im Eingabefeld; sie sendet die Anfrage nicht an den Agenten. Das eignet sich dafür, im geparkten Auto ausführliche Schreibanweisungen zu diktieren, zu prüfen und abzusenden. Ein durchgehendes Gespräch mit gesprochenen Antworten ist damit nicht belegt. Nach dem Absenden kann die Arbeit auf dem Host weiterlaufen, aber Diktieren allein schließt den Kreislauf ohne Handbedienung nicht. <a href=\"#source-t3-voice\">[1]</a>",
    "Moshi wählt den Weg über das Terminal. Die Sprachdokumentation beschreibt, wie Gesprochenes zu Terminaleingaben mit optionalem Absenden per Enter oder zu bearbeitbarem Text im Eingabefeld wird. Der eigene Vergleich mit Paseo nennt das einseitiges Diktieren statt eines Gesprächs mit gesprochenen Antworten. Ein bereits im Terminal laufender Programmieragent kann die Schreibanweisung erhalten. In unserer gedachten Fahrt fehlt der Schritt, das Ergebnis über einen dokumentierten bidirektionalen Sprachmodus zu hören und gemeinsam anzupassen. Eine Mikrofontaste und automatisches Enter sind nützlich, belegen aber weder gesprochene Rückmeldungen noch Freigaben per Sprache. <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-moshi-conversation\">[4]</a>",
    "paseo.sh dokumentiert sowohl Diktieren als auch Sprachgespräche: Spracherkennung übermittelt deine Anfrage an einen Agenten, Sprachsynthese liefert Antworten. Der Sprachablauf kann Programmieragenten starten und steuern und passt damit unmittelbar zu unserem gedachten Austausch. Das ist eine dokumentierte Interaktionsform, kein Ergebnis dieser Fahrt. Auch der App-Lebenszyklus setzt Grenzen: Die geprüfte Android-Implementierung pausiert Audio im Hintergrund. Gehe nicht davon aus, dass ein Sprachgespräch zugleich eine ununterbrochene Sitzung bei gesperrtem Telefon bedeutet. <a href=\"#source-paseo-voice\">[5]</a> <a href=\"#source-paseo-background\">[7]</a>",
    "Der experimentelle Android-Assistent von Mobile SSH bietet einen anderen Reiz: Sprache kann mit den SSH-Sitzungen arbeiten, die du bereits nutzt. Sein Live-Modus unterstützt gesprochene Interaktion; seine Steuerfunktionen können Hosts und Multiplexer-Ressourcen finden, ausgewählte Terminalausgaben lesen und nach gesonderter Zustimmung Terminaleingaben senden oder unterstützte Befehle ausführen. Wer zwischen Editor, Programmieragent und Testbereich wechselt, profitiert davon, ein vorhandenes Ziel benennen zu können. Das ist der belegte Vorteil: Sprache als Teil der allgemeinen SSH-Arbeit, mit ausdrücklich erteilten Steuerrechten. Eine bessere Spracherkennung als bei den anderen drei ist damit nicht belegt. <a href=\"#source-mobile-voice\">[8]</a>",
    "Die Einschränkung nach Plattform ist wichtig. Die neue iOS-Sprachimplementierung von Mobile SSH bietet Diktieren im Vordergrund, Prüfen und ausdrückliches Senden, mit gesprochenen Antworten und rein lesendem Zugriff auf das ausgewählte Terminal. Die Versionshinweise beschreiben eine private Testversion. Sie bietet weder den schreibenden Terminalzugriff des Android-Assistenten noch dauerhaftes Zuhören. Auch der Android-Auto-Entwicklungsadapter ist keine veröffentlichte Fahrzeugintegration. Die Geschichte muss zu der Version passen, die du tatsächlich hast. <a href=\"#source-mobile-ios\">[11]</a> <a href=\"#source-mobile-car\">[12]</a>",
    "Aus dem Entwurf wird eine Datei, dann eine Quellcodeänderung",
    "Stell dir vor, die Gliederung ist beim nächsten sicheren Halt fertig. Jetzt wird die Aufgabe genauer. Du möchtest die Einleitung kürzen, ein Beispiel korrigieren und den Quellcode der Website leicht ändern. Diese Änderungen kannst du weiterhin aussprechen; du musst nicht jede geschweifte Klammer und jedes Semikolon diktieren.",
    "Kürze die Einleitung im Entwurf. Ergänze dann eine Lesezeitangabe in der Artikelkomponente nach den Konventionen dieses Projekts. Führe die passenden Tests aus und sage mir, welche Dateien geändert wurden.",
    "Hier schreibt der Programmieragent. Die Sprachoberfläche übermittelt die Anweisung; Repository-Zugriff, verfügbare Werkzeuge und Berechtigungen bestimmen, ob er Dateien bearbeiten und die Komponente umsetzen kann. Diese Fähigkeiten auf genau diesen Blog anzuwenden ist ein vorgeschlagener Ablauf, kein überprüfter Nachweis, dass alle vier Produkte ihn abgeschlossen haben. T3 Code bietet Agentenbearbeitung und Git-Aktionen; Moshi liefert ein echtes Terminal; Paseo dokumentiert Entwicklungsabläufe mit Agenten; Mobile SSH auf Android kann ein freigegebenes Terminal oder Befehlsziel ansprechen. Der gewählte Agent muss die Aufgabe immer noch verstehen.",
    "Mobile SSH bleibt nach der Sprachsitzung nützlich: Dieselbe App bietet ein SSH-Terminal, Textbearbeitung über SFTP und Zugriff auf entferntes lazygit. Damit kannst du im geparkten Auto die tatsächlichen Dateien und den Diff bequem prüfen. Das sind interaktive Prüfwerkzeuge, kein Beleg dafür, dass sich sämtliche Schaltflächen per Sprache bedienen lassen. <a href=\"#source-mobile-voice\">[8]</a>",
    "Staging verdient einen eigenen Satz",
    "Merke nur den Blogentwurf und die gerade geprüfte Artikelkomponente für den Commit vor. Lass alle anderen Änderungen unberührt. Erstelle keinen Commit und führe keinen Push aus.",
    "Staging wählt Inhalte für den nächsten Git-Commit aus; es ist vom Speichern, Committen und Veröffentlichen getrennt. Im mobilen Commit-Ablauf von T3 Code werden Dateien ausgewählt und als Teil des Commits vorgemerkt. Das ist nicht dasselbe wie eine dokumentierte eigenständige Staging-Aktion per Sprache. In Moshi, Paseo oder einer Mobile-SSH-Android-Sitzung mit Schreibrechten ist es eine sinnvolle Verwendung der Shell-Werkzeuge eines fähigen Agenten, bestimmte Dateien vormerken zu lassen, abhängig von den Berechtigungen. Nichts davon belegt die zuverlässige Freigabe beliebiger Diffs allein per Sprache. Prüfe den vorgemerkten Diff beim sicheren Halt. <a href=\"#source-t3-git\">[2]</a> <a href=\"#source-paseo-work\">[6]</a>",
    "Dann wird es auf der Straße lauter",
    "Auf unserer gedachten Fahrt beginnt es zu regnen, das Gebläse dreht auf und ein Mitfahrer fängt an zu sprechen. Hier beantwortet eine ausgefeilte Demo die wichtige Frage nicht mehr. Wir fanden für diese vier Produkte keine kontrollierten, vergleichbaren Ergebnisse zu Fahrgeräuschen. Es gibt hier keine Belege für einen Sieger bei der Erkennung, einen zuverlässigen Mikrofonabstand oder das Versprechen, dass ein Hintergrundgespräch niemals zum Befehl wird.",
    "Die Transkription auf dem Gerät bei T3 Code beschreibt den Ort der Erkennung, nicht deren Genauigkeit in einem lauten Innenraum. Moshi bietet unter iOS mehrere Erkennungsdienste und empfiehlt gehostete Transkription, wenn lokale Erkennung mit Lärm kämpft; diese Empfehlung ist kein Vergleichstest. Paseo bietet lokale Sprachdienste und konfigurierbare Cloud-Alternativen, aber die Anbieterwahl allein belegt keine Leistung in deinem Auto. Fahrgeräusche, andere Stimmen, die Mikrofonposition und das gewählte Erkennungsmodell müssen im tatsächlichen Aufbau geprüft werden. <a href=\"#source-t3-voice\">[1]</a> <a href=\"#source-moshi-voice\">[3]</a> <a href=\"#source-paseo-voice\">[5]</a>",
    "Mobile SSH bietet unter Android nützliche Einstellungen zum Erproben: Der Audiopfad des Telefons aktiviert die Rauschunterdrückung und Echokompensation der Plattform, sofern verfügbar. Der Sprachhost bietet optional einen RNNoise-Filter und eine Zugangskontrolle anhand eines eingelernten Sprechers. Das sind überprüfte Implementierungsentscheidungen, keine überprüfte Überlegenheit. Der Eingabeschutz ist standardmäßig aus, erfordert Einrichtung und kann den gewünschten Sprecher abweisen oder unerwünschte Sprache akzeptieren. Die Dokumentation sagt ausdrücklich, dass die aufgezeichneten synthetischen Prüfungen keine Erkennungsgenauigkeit für Menschen mit Headset oder bei Autogeräuschen messen. <a href=\"#source-mobile-noise\">[10]</a>",
    "Beim serverseitigen Erkennungspfad von Mobile SSH für Android können die dokumentierten Headset-Bedienelemente ein eingerichtetes Gespräch starten oder fortsetzen und eine aktive Sitzung im Hintergrund steuern. Dabei gelten Androids Routing-Regeln und der Vorrang anderer Apps. Das ist relevant, um weniger am Bildschirm zu bedienen. Du musst es trotzdem mit deinem Telefon und Headset im geparkten Auto testen; es ist keine Garantie für Lenkradtasten, Aktivierungswörter oder jedes Auto. Wenn das Gespräch Korrekturen oder Aufmerksamkeit verlangt, pausiere es. <a href=\"#source-mobile-headset\">[9]</a>",
    "Mit etwas ankommen, das eine Prüfung wert ist",
    "Das nützliche Ergebnis ist ein Entwurf und eine kleine, überschaubare Änderung, die am Ende der Fahrt auf dich warten. T3 Code und Moshi bieten unterschiedliche Wege, Anweisungen in einem bestehenden Programmierablauf zu diktieren. Paseo bietet eine dokumentierte Gesprächsalternative. Mobile SSH lohnt sich besonders für Android-Nutzer zum Erproben, die Sprache neben vorhandenen SSH-Terminals und Multiplexer-Sitzungen möchten und anschließend vollständige Terminal- und Dateiwerkzeuge zur Prüfung brauchen. Dieses Urteil folgt aus den Funktionen, nicht aus einem Lärmvergleich, den wir nicht durchgeführt haben.",
    "Alle vier gehören in den Vergleich. Wähle die Interaktion, die zu deinem Gerät und zur Arbeit passt, formuliere konkrete Wünsche und widme deine Aufmerksamkeit der Straße. Der Entwurf kann warten. Der endgültige Diff verdient deine Aufmerksamkeit."
  ],
  "comparison": {
    "heading": "Was die gedachte Fahrt vernünftigerweise von jedem Produkt erwarten kann",
    "productHeading": "Produkt",
    "voiceHeading": "Überprüfter Sprachablauf",
    "fitHeading": "Eignung und Grenze",
    "rows": [
      {
        "id": "t3",
        "voice": "Unterstützte iOS-Geräte: Diktieren in einen Entwurf; gesondertes Absenden.",
        "fit": "Agentenbearbeitung und mobile Git-Aktionen; durchgehender gesprochener Dialog nicht belegt."
      },
      {
        "id": "moshi",
        "voice": "Diktieren ins Terminal oder Eingabefeld; optionales Enter.",
        "fit": "Vorhandenen Terminalagenten verwenden; dokumentierte Sprache funktioniert nur in eine Richtung."
      },
      {
        "id": "mobile",
        "voice": "Experimentelles Live-Gespräch unter Android und Terminalsteuerung nach ausdrücklicher Zustimmung.",
        "fit": "Vorhandene SSH- und Multiplexer-Ziele; der neue iOS-Assistent liest nur und erfordert Senden."
      },
      {
        "id": "paseo",
        "voice": "Diktieren sowie Spracherkennung und gesprochene Antworten im Sprachmodus.",
        "fit": "Agentensteuerung im Gespräch; Hintergrundaudio hängt von Plattform und Version ab."
      }
    ],
    "note": "Dokumentation und Quellcode belegen Mechanismen, nicht die erfolgreiche Durchführung dieses Szenarios. Für keines der vier Produkte ist eine vergleichende Leistung bei Fahrgeräuschen belegt."
  },
  "sources": {
    "heading": "Quellen für diesen Vergleich",
    "t3Voice": "T3 Code: Spracheingabe und die Grenze beim Absenden aus dem Entwurf",
    "t3Ios": "T3 Code: Verfügbarkeit der Spracheingabe unter iOS",
    "t3Git": "T3 Code: mobile Dateiauswahl für Commits",
    "t3Stage": "T3 Code: ausgewählte Dateien auf dem Server vormerken",
    "moshiVoice": "Moshi: Spracherkennungsdienste, Terminaleingabe und Verhalten des Eingabefelds",
    "moshiConversation": "Moshi: die eigene Beschreibung von Diktieren gegenüber Gesprächen",
    "paseoVoice": "paseo.sh: Diktieren und Sprachgespräche",
    "paseoWork": "paseo.sh: Entwicklungsabläufe in Repositories",
    "paseoBackground": "Paseo: Android-Audiolebenszyklus in v0.11.2",
    "mobileVoice": "Mobile SSH: Android-Sprachsteuerung und übliche Terminal- und Dateiabläufe",
    "mobileHeadset": "Mobile SSH: Headset-Steuerung und ihre Grenzen",
    "mobileNoise": "Mobile SSH: optionaler Eingabeschutz und Audioimplementierung",
    "mobileAudio": "Mobile SSH: Audioverarbeitung der Plattform",
    "mobileIos": "Mobile SSH: iOS-Sprachimplementierung und Grenzen der privaten Testversion",
    "mobileCar": "Mobile SSH: Android-Auto-Adapter nur für die Entwicklung",
    "mobileAudit": "Die Mobile SSH-Verweise dokumentieren unsere Prüfung der privaten Android- und iOS-Repositories an den angegebenen Revisionen. Es sind Erkenntnisse aus dem Quellcode, keine Bestätigungen öffentlicher Veröffentlichungen oder Ergebnisse von Tests im Auto."
  },
  "cta": {
    "heading": "Halte das Gespräch nah an der Arbeit.",
    "body": "Entdecke die dokumentierten Abläufe von Mobile SSH und prüfe die Funktionen deiner Plattform und Version, bevor du eine Sprachsitzung einrichtest.",
    "docsLink": "Dokumentation lesen",
    "featuresLink": "Plattformfunktionen prüfen"
  }
});
