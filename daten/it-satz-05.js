// IT-Theorie-Übungssatz 5 – gemischt: Vorgehensmodelle, Entwurfsmuster, Schnittstellen, Datenstrukturen, Datenschutz (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_IT_SAETZE = window.WISO_IT_SAETZE || []).push({
  id: 'it-05',
  titel: 'IT-Theorie-Übungssatz 5',
  untertitel: 'Gemischt: Vorgehensmodelle, Entwurfsmuster, Schnittstellen, Datenstrukturen und Datenschutz',
  ausgangssituation:
    'Die Quirinus Data GmbH ist ein IT-Dienstleistungsunternehmen mit Sitz in Neuss. Sie entwickelt die Online-Terminplattform „TerminFix“ für Physiotherapiepraxen. Sie sind Mitarbeiter/-in der Abteilung Anwendungsentwicklung. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 6,
      text: 'Ein Verbund von Physiotherapiepraxen beauftragt die Quirinus Data GmbH mit der Entwicklung von TerminFix. Die Projektleiterin Frau Wienen erläutert dem Team die Grundlagen der Projektorganisation.'
    },
    {
      von: 7, bis: 12,
      text: 'Im Architektur-Workshop legt der Softwarearchitekt Herr Lambertz fest, welche Entwurfsmuster in TerminFix eingesetzt werden.'
    },
    {
      von: 13, bis: 18,
      text: 'TerminFix stellt den Praxen eine REST-Schnittstelle bereit. Termine sind unter /termine, Patienten unter /patienten erreichbar. Die Daten werden im JSON-Format übertragen; ein älteres Praxisprogramm liefert seine Daten als XML.'
    },
    {
      von: 19, bis: 24,
      text: 'In einer Schulung für die Auszubildenden erklärt Herr Lambertz die Datenstrukturen, die TerminFix intern nutzt.'
    },
    {
      von: 25, bis: 30,
      text: 'Der Datenschutzbeauftragte Herr Kaya prüft, welche Anforderungen der Datenschutz-Grundverordnung (DSGVO) für TerminFix und für die eigene Datenverarbeitung der Quirinus Data GmbH gelten.'
    }
  ],

  aufgaben: [
    // --- Vorgehensmodelle (1–6) ---
    {
      nr: 1, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Vor Projektbeginn hat der Praxisverbund seine Anforderungen an TerminFix in einem Lastenheft beschrieben. Als Nächstes erstellt die Quirinus Data GmbH das Pflichtenheft.',
      frage: 'Welche Aussage zum Pflichtenheft trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Das Pflichtenheft …',
      optionen: [
        'wird vom Auftraggeber erstellt und enthält nur seine Anforderungen.',
        'enthält den vollständigen Quellcode der geplanten Anwendung.',
        'wird vom Auftragnehmer erstellt und beschreibt die Umsetzung des Lastenhefts.',
        'wird erst nach der Abnahme der fertigen Software erstellt.',
        'ersetzt den Vertrag zwischen Auftraggeber und Auftragnehmer.'
      ],
      loesung: 3,
      erklaerung: 'Nach DIN 69901-5 enthält das Lastenheft die vom Auftraggeber festgelegten Anforderungen („Was und wofür?“). Das Pflichtenheft erstellt der Auftragnehmer auf dieser Grundlage; es beschreibt, wie und womit die Anforderungen umgesetzt werden. Es entsteht vor der Umsetzung, dient als Grundlage für die Abnahme und ersetzt weder den Vertrag noch enthält es Quellcode.'
    },
    {
      nr: 2, thema: 'vorgehensmodelle', typ: 'mehrfach',
      text: 'Ein Mitglied des Praxisverbunds schlägt vor, TerminFix nach dem Wasserfallmodell zu entwickeln. Frau Wienen nennt dazu typische Nachteile.',
      frage: 'Welche der folgenden Aussagen beschreiben Nachteile des Wasserfallmodells?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Lauffähige Software liegt erst spät im Projekt vor.',
        'Termine und Kosten lassen sich kaum planen.',
        'Jede Phase endet ohne dokumentiertes Ergebnis.',
        'Fehler in den Anforderungen fallen oft erst im Test auf.',
        'Die Anforderungen müssen zu Projektbeginn noch nicht feststehen.'
      ],
      loesung: [1, 4],
      erklaerung: 'Im Wasserfallmodell werden die Phasen nacheinander durchlaufen; jede Phase endet mit einem dokumentierten Ergebnis. Der Auftraggeber sieht lauffähige Software deshalb erst nach der Implementierung, und Fehler oder Missverständnisse in den Anforderungen werden oft erst im Test entdeckt, wenn ihre Behebung teuer ist. Die klaren Phasen erleichtern dagegen die Planung von Terminen und Kosten. Das Modell setzt voraus, dass die Anforderungen zu Beginn feststehen.'
    },
    {
      nr: 3, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Für TerminFix sammelt der Product Owner die Anforderungen als User Storys. Eine davon lautet:',
      kasten: {
        titel: 'User Story',
        absaetze: [
          '„Als Praxisinhaberin möchte ich alle freien Termine der kommenden Woche auf einen Blick sehen.“'
        ]
      },
      frage: 'Welcher Bestandteil der üblichen Satzschablone für User Storys fehlt?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Bestandteil in das Kästchen ein.',
      optionen: [
        'Rolle',
        'Ziel',
        'Nutzen',
        'Priorität',
        'Schätzung in Story Points'
      ],
      loesung: 3,
      erklaerung: 'Die übliche Schablone lautet: „Als ‹Rolle› möchte ich ‹Ziel›, damit ‹Nutzen›.“ Rolle (Praxisinhaberin) und Ziel (freie Termine sehen) sind vorhanden. Es fehlt der Nutzen, z. B. „…, damit ich ausgefallene Termine schnell neu vergeben kann“. Priorität und Schätzung werden im Product Backlog gepflegt, gehören aber nicht zur Satzschablone. Ergänzt wird eine User Story durch Akzeptanzkriterien.'
    },
    {
      nr: 4, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Das Scrum-Team von TerminFix legt eine gemeinsame „Definition of Done“ fest.',
      frage: 'Welche Aussage zur Definition of Done trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Die Definition of Done …',
      optionen: [
        'ist die nach Wert geordnete Liste aller Anforderungen.',
        'beschreibt das Ziel des aktuellen Sprints.',
        'enthält die durchschnittliche Velocity des Teams.',
        'wird vom Scrum Master allein für jeden Sprint festgelegt.',
        'legt die Qualitätskriterien für einen fertigen Eintrag des Inkrements fest.'
      ],
      loesung: 5,
      erklaerung: 'Laut Scrum Guide beschreibt die Definition of Done den Zustand, den ein Eintrag erreichen muss, um als fertig zu gelten und Teil des Inkrements zu werden (z. B. Code geprüft, getestet, dokumentiert). Was sie nicht erfüllt, wird im Sprint Review nicht vorgestellt und geht zurück ins Product Backlog. Sie wird vom Scrum-Team erstellt, sofern die Organisation keinen Standard vorgibt. Die geordnete Liste aller Anforderungen ist das Product Backlog, das Ziel des Sprints das Sprint-Ziel.'
    },
    {
      nr: 5, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Herr Thelen übernimmt im Scrum-Team von TerminFix die Rolle des Scrum Masters.',
      frage: 'Welche der folgenden Aufgaben gehört **nicht** zur Rolle des Scrum Masters?',
      anweisung: 'Tragen Sie die Ziffer vor der **nicht** zutreffenden Aufgabe in das Kästchen ein.',
      optionen: [
        'Beseitigung von Hindernissen für das Team',
        'Festlegung der Reihenfolge im Product Backlog',
        'Coaching des Teams in der Anwendung von Scrum',
        'Moderation der Scrum-Ereignisse bei Bedarf',
        'Unterstützung des Product Owners bei der Backlog-Pflege'
      ],
      loesung: 2,
      erklaerung: 'Der Scrum Master ist für die Wirksamkeit des Scrum-Teams verantwortlich: Er coacht das Team, beseitigt Hindernisse, sorgt dafür, dass die Ereignisse stattfinden, und unterstützt den Product Owner, etwa mit Techniken zur Pflege des Product Backlogs (Scrum Guide). Die Reihenfolge der Einträge im Product Backlog legt allein der Product Owner fest, denn er ist für den Wert des Produkts verantwortlich.'
    },
    {
      nr: 6, thema: 'vorgehensmodelle', typ: 'zuordnung',
      text: 'Ein Teilprojekt für die Abrechnungsschnittstelle der Praxen wird nach dem V-Modell durchgeführt. Frau Wienen plant zu jeder Entwurfsphase die zugehörige Teststufe.',
      frage: 'Welche der folgenden Teststufen sind den nachstehenden Entwurfsphasen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Teststufe in das Kästchen ein.',
      optionenTitel: 'Teststufen',
      optionen: [
        'Komponententest',
        'Integrationstest',
        'Systemtest',
        'Abnahmetest'
      ],
      itemsTitel: 'Entwurfsphasen',
      items: [
        { text: 'Funktionaler Systementwurf', loesung: 3 },
        { text: 'Anforderungsdefinition', loesung: 4 },
        { text: 'Komponentenentwurf', loesung: 1 },
        { text: 'Technischer Systementwurf', loesung: 2 }
      ],
      erklaerung: 'Im V-Modell steht jeder Entwurfsphase auf dem linken Ast eine Teststufe auf dem rechten Ast gegenüber: Anforderungsdefinition – Abnahmetest, funktionaler Systementwurf – Systemtest, technischer Systementwurf (Architektur) – Integrationstest, Komponentenentwurf – Komponententest. Die Testfälle jeder Stufe werden bereits in der zugehörigen Entwurfsphase geplant.'
    },

    // --- Entwurfsmuster (7–12) ---
    {
      nr: 7, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Herr Lambertz eröffnet den Workshop mit einer Begriffsklärung.',
      frage: 'Welche Aussage zu Entwurfsmustern trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Ein Entwurfsmuster …',
      optionen: [
        'ist eine bewährte Lösungsvorlage für ein wiederkehrendes Entwurfsproblem.',
        'ist eine fertige Klassenbibliothek zum direkten Einbinden.',
        'ist ein Vorgehensmodell für die Planung von Softwareprojekten.',
        'ist ein Verfahren zum Testen der Programmlogik.',
        'ist eine Vorschrift für die Gestaltung der Benutzeroberfläche.'
      ],
      loesung: 1,
      erklaerung: 'Ein Entwurfsmuster (Design Pattern) beschreibt eine bewährte, sprachunabhängige Lösungsidee für ein Problem, das im Softwareentwurf immer wieder auftritt. Bekannt wurden die Muster durch das Buch der „Gang of Four“ (Gamma, Helm, Johnson, Vlissides, 1994). Ein Muster ist kein fertiger Code, sondern wird für das jeweilige Programm umgesetzt. Beispiele sind Singleton, Factory und Observer.'
    },
    {
      nr: 8, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Die Klasse „Einstellungen“ ist als Singleton umgesetzt; die Instanz entsteht erst beim ersten Aufruf von getInstance(). In TerminFix rufen zwei Threads die Methode zum ersten Mal genau gleichzeitig auf.',
      kasten: {
        titel: 'Pseudocode',
        code: [
          'FUNKTION getInstance()',
          '    WENN instanz = NULL DANN',
          '        instanz ← NEU Einstellungen()',
          '    ENDE WENN',
          '    RÜCKGABE instanz',
          'ENDE FUNKTION'
        ]
      },
      frage: 'Welches Problem kann dabei auftreten?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Beide Threads erhalten den Wert NULL.',
        'Der zweite Aufruf löst immer einen Laufzeitfehler aus.',
        'Das zuerst erzeugte Objekt wird sofort wieder gelöscht.',
        'Die Methode getInstance() bleibt dauerhaft gesperrt.',
        'Es entstehen zwei Objekte der Klasse „Einstellungen“.'
      ],
      loesung: 5,
      erklaerung: 'Beide Threads können die Bedingung instanz = NULL prüfen, bevor einer von ihnen die Zuweisung ausgeführt hat (Race Condition). Dann erzeugt jeder Thread ein eigenes Objekt, und das Singleton-Prinzip ist verletzt. Abhilfe schaffen eine Synchronisation der Methode (z. B. synchronized in Java) oder die Erzeugung der Instanz schon beim Laden der Klasse (Eager Initialization).'
    },
    {
      nr: 9, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Für die Terminerinnerungen nutzt TerminFix eine parametrisierte Fabrikmethode:',
      kasten: {
        titel: 'Pseudocode',
        code: [
          'FUNKTION erzeugeKanal(art)',
          '    WENN art = "sms" DANN',
          '        RÜCKGABE NEU SmsKanal()',
          '    ENDE WENN',
          '    WENN art = "mail" DANN',
          '        RÜCKGABE NEU MailKanal()',
          '    ENDE WENN',
          '    RÜCKGABE NEU PostKanal()',
          'ENDE FUNKTION',
          '',
          'k ← erzeugeKanal("fax")'
        ]
      },
      frage: 'Von welcher Klasse ist das Objekt k?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Klasse in das Kästchen ein.',
      optionen: [
        'SmsKanal',
        'MailKanal',
        'FaxKanal',
        'PostKanal',
        'Kein Objekt (Laufzeitfehler)'
      ],
      loesung: 4,
      erklaerung: 'Der Wert "fax" erfüllt keine der beiden Bedingungen. Die Funktion erreicht deshalb die letzte Anweisung und gibt ein neues Objekt der Klasse PostKanal zurück (Standardfall). Eine Klasse FaxKanal kommt in der Funktion nicht vor. Der Aufrufer arbeitet mit dem zurückgegebenen Objekt, ohne die konkrete Klasse kennen zu müssen; genau das ist der Zweck der Factory.'
    },
    {
      nr: 10, thema: 'entwurfsmuster', typ: 'zahl',
      text: 'Ändert sich der Status eines Termins, benachrichtigt das Objekt termin seine Beobachter. Jeder Aufruf von setzeStatus() ruft bei jedem zu diesem Zeitpunkt angemeldeten Beobachter genau einmal aktualisiere() auf.',
      kasten: {
        titel: 'Pseudocode',
        code: [
          'termin ← NEU Termin()',
          'termin.anmelden(kalenderAnsicht)',
          'termin.anmelden(smsDienst)',
          'termin.anmelden(mailDienst)',
          'termin.setzeStatus("bestätigt")',
          'termin.abmelden(smsDienst)',
          'termin.setzeStatus("verschoben")',
          'termin.setzeStatus("abgesagt")'
        ]
      },
      frage: 'Ermitteln Sie, wie oft aktualisiere() insgesamt aufgerufen wird.',
      anweisung: 'Tragen Sie die Anzahl der Aufrufe in das Kästchen ein.',
      loesung: 7,
      einheit: 'Aufrufe',
      erklaerung: 'Beim ersten Statuswechsel sind drei Beobachter angemeldet: 3 Aufrufe. Danach wird smsDienst abgemeldet. Bei den beiden folgenden Statuswechseln sind nur noch kalenderAnsicht und mailDienst angemeldet: 2 × 2 = 4 Aufrufe. Insgesamt: 3 + 4 = 7 Aufrufe.'
    },
    {
      nr: 11, thema: 'entwurfsmuster', typ: 'mehrfach',
      text: 'Herr Lambertz möchte, dass das Team das Observer-Muster auch außerhalb von TerminFix wiedererkennt.',
      frage: 'In welchen der folgenden Fälle wird typischerweise das Observer-Muster eingesetzt?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Fällen in die Kästchen ein.',
      optionen: [
        'Eine Klasse lässt nur ein einziges Objekt von sich zu.',
        'Ein Button meldet jeden Klick an alle registrierten Listener.',
        'Eine Methode erzeugt je nach Parameter ein passendes Exportobjekt.',
        'Eine Klasse passt die Schnittstelle einer Fremdbibliothek an.',
        'Eine Börsen-App informiert alle Abonnenten über Kursänderungen.'
      ],
      loesung: [2, 5],
      erklaerung: 'Beim Observer-Muster melden sich Beobachter bei einem Subjekt an und werden bei Änderungen automatisch benachrichtigt. Ereignis-Listener in Benutzeroberflächen und Abonnements von Kursänderungen folgen genau diesem Prinzip. Fall 1 beschreibt das Singleton, Fall 3 eine Factory, Fall 4 das Adapter-Muster.'
    },
    {
      nr: 12, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'TerminFix ist nach dem MVC-Muster aufgebaut. Zusätzlich zur Weboberfläche soll eine Smartphone-App entstehen, die dieselben Termindaten und Buchungsregeln verwendet.',
      frage: 'Welche Komponente kann bei sauberer Trennung nach MVC unverändert weiterverwendet werden?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Komponente in das Kästchen ein.',
      optionen: [
        'View',
        'Controller',
        'Model',
        'View und Controller',
        'Keine der drei Komponenten'
      ],
      loesung: 3,
      erklaerung: 'Das Model enthält die Daten und die Geschäftslogik, z. B. die Regeln für Buchung und Absage. Es kennt die Darstellung nicht und kann deshalb für eine neue Oberfläche unverändert weiterverwendet werden. View und Controller sind an die jeweilige Oberfläche gebunden (Darstellung im Browser bzw. auf dem Smartphone, Verarbeitung von Klicks oder Gesten) und müssen für die App neu entwickelt oder angepasst werden.'
    },

    // --- Schnittstellen und Datenformate (13–18) ---
    {
      nr: 13, thema: 'schnittstellen', typ: 'einfach', codeOptionen: true,
      text: 'Ein Praxisprogramm legt mit POST /termine einen neuen Termin an. Der Termin steht als JSON-Dokument im Nachrichtenrumpf der Anfrage.',
      frage: 'Welcher Wert gehört in den Header „Content-Type“ der Anfrage?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Wert in das Kästchen ein.',
      optionen: [
        'application/json',
        'text/html',
        'application/xml',
        'multipart/form-data',
        'text/plain'
      ],
      loesung: 1,
      erklaerung: 'Der Header Content-Type gibt den Medientyp der mitgesendeten Daten an. Für JSON ist application/json festgelegt (RFC 8259), für XML application/xml. text/html kennzeichnet Webseiten, multipart/form-data Formulare mit Dateiuploads. Welches Format der Client in der Antwort erwartet, teilt er mit dem Header Accept mit.'
    },
    {
      nr: 14, thema: 'schnittstellen', typ: 'einfach', codeOptionen: true,
      text: 'Eine Praxis möchte alle Termine des Patienten mit der Patientennummer 88 abrufen.',
      frage: 'Welcher Aufruf entspricht den REST-Konventionen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Aufruf in das Kästchen ein.',
      optionen: [
        'POST /patienten/88/termine',
        'GET /patienten/88/termine',
        'GET /getTermine?patient=88',
        'DELETE /patienten/88/termine',
        'PUT /patienten/termine/88'
      ],
      loesung: 2,
      erklaerung: 'Die Termine eines Patienten sind eine untergeordnete Ressource: /patienten/88 ist der Patient, /patienten/88/termine die Sammlung seiner Termine. Gelesen wird mit GET. POST würde einen neuen Termin anlegen, DELETE Termine löschen. Verben wie „getTermine“ gehören nicht in den Pfad, weil die Aktion bereits durch die HTTP-Methode ausgedrückt wird.'
    },
    {
      nr: 15, thema: 'schnittstellen', typ: 'einfach',
      text: 'Für die Schnittstellendokumentation listet Herr Lambertz die Datentypen auf, die in einem JSON-Dokument als Werte vorkommen dürfen.',
      frage: 'Welcher der folgenden Datentypen ist in JSON **nicht** vorgesehen?',
      anweisung: 'Tragen Sie die Ziffer vor dem **nicht** vorgesehenen Datentyp in das Kästchen ein.',
      optionen: [
        'Zeichenkette (string)',
        'Zahl (number)',
        'Wahrheitswert (boolean)',
        'Array',
        'Datum (date)'
      ],
      loesung: 5,
      erklaerung: 'JSON kennt als Werte Zeichenketten, Zahlen, die Wahrheitswerte true und false, null sowie Objekte und Arrays (RFC 8259). Einen eigenen Datentyp für Datum oder Uhrzeit gibt es nicht. Datumsangaben werden deshalb als Zeichenkette übertragen, üblich ist das Format nach ISO 8601, z. B. "2027-03-15T09:30".'
    },
    {
      nr: 16, thema: 'schnittstellen', typ: 'zahl',
      text: 'Die Schnittstelle liefert Termine seitenweise. Der Aufruf GET /termine?seite=3&anzahl=20 liefert die dritte Seite mit jeweils 20 Terminen. Die Seiten werden ab 1 gezählt, die Termine sind fortlaufend ab 1 nummeriert.',
      frage: 'Ermitteln Sie die laufende Nummer des ersten Termins auf dieser Seite.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 41,
      erklaerung: 'Auf den Seiten 1 und 2 stehen (3 − 1) × 20 = 40 Termine. Die dritte Seite beginnt deshalb mit dem Termin Nr. 41 und endet mit Nr. 60. Allgemein gilt: erste Nummer = (Seite − 1) × Anzahl + 1. Durch die Seitenaufteilung (Pagination) bleiben die Antworten klein, auch wenn sehr viele Datensätze vorhanden sind.'
    },
    {
      nr: 17, thema: 'schnittstellen', typ: 'einfach',
      text: 'Ein Praxisprogramm sendet das folgende Dokument. Der Server lehnt es als fehlerhaftes JSON ab.',
      kasten: {
        titel: 'JSON-Dokument (mit Zeilennummern)',
        code: [
          '1  {',
          '2    "terminId": 5012,',
          '3    "patient": "Lea Hoffmann",',
          '4    "beginn": "2027-03-15T09:30",',
          "5    'dauerMin': 30,",
          '6    "bestaetigt": true',
          '7  }'
        ]
      },
      frage: 'In welcher Zeile verstößt das Dokument gegen die JSON-Syntax?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Zeile in das Kästchen ein.',
      optionen: [
        'Zeile 2',
        'Zeile 3',
        'Zeile 4',
        'Zeile 5',
        'Zeile 6'
      ],
      loesung: 4,
      erklaerung: 'In JSON müssen Schlüssel und Zeichenketten in doppelten Anführungszeichen stehen (RFC 8259). In Zeile 5 steht der Schlüssel dauerMin in einfachen Anführungszeichen; richtig ist "dauerMin": 30. Zahlen (5012, 30) und Wahrheitswerte (true) stehen ohne Anführungszeichen. Nach dem letzten Schlüssel-Wert-Paar in Zeile 6 darf kein Komma folgen; das ist hier korrekt umgesetzt.'
    },
    {
      nr: 18, thema: 'schnittstellen', typ: 'einfach', codeOptionen: true,
      text: 'Das ältere Praxisprogramm liefert einen Termin als XML. TerminFix wandelt ihn in JSON um.',
      kasten: {
        titel: 'XML-Dokument',
        code: [
          '<termin id="5012">',
          '  <patient>Lea Hoffmann</patient>',
          '  <dauer>30</dauer>',
          '</termin>'
        ]
      },
      frage: 'Welches JSON-Dokument gibt die Daten des XML-Dokuments inhaltlich korrekt wieder?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden JSON-Dokument in das Kästchen ein.',
      optionen: [
        '{ "termin": [ "id", 5012, "patient", "Lea Hoffmann", "dauer", 30 ] }',
        '{ "termin": { "id": 5012, "patient": Lea Hoffmann, "dauer": 30 } }',
        '{ "termin": { "id": 5012, "patient": "Lea Hoffmann", "dauer": 30 } }',
        '[ "termin": { "id": 5012, "patient": "Lea Hoffmann", "dauer": 30 } ]',
        '{ "termin": { "5012": "id", "patient": "Lea Hoffmann", "dauer": 30 } }'
      ],
      loesung: 3,
      erklaerung: 'Das Element termin wird zu einem Objekt; sein Attribut id und seine Kindelemente patient und dauer werden zu Schlüssel-Wert-Paaren. Zeichenketten stehen in doppelten Anführungszeichen, Zahlen ohne. Dokument 1 macht aus den Daten eine Liste ohne Schlüssel, in Dokument 2 fehlen die Anführungszeichen um den Namen, Dokument 4 enthält Schlüssel-Wert-Paare in einem Array (ungültiges JSON), in Dokument 5 sind Schlüssel und Wert vertauscht.'
    },

    // --- Datenstrukturen (19–24) ---
    {
      nr: 19, thema: 'datenstrukturen', typ: 'reihenfolge',
      text: 'Herr Lambertz zeigt die Arbeitsweise eines Stacks. Die Buchstaben A bis D werden mit den folgenden Anweisungen verarbeitet; jedes pop() gibt das entnommene Element aus.',
      kasten: {
        titel: 'Pseudocode',
        code: [
          'push("A")',
          'push("B")',
          'pop()',
          'push("C")',
          'push("D")',
          'pop()',
          'pop()',
          'pop()'
        ]
      },
      frage: 'Bringen Sie die Buchstaben in die Reihenfolge ihrer Ausgabe.',
      anweisung: 'Tragen Sie für den zuerst ausgegebenen Buchstaben die Ziffer 1, für den als Zweites ausgegebenen Buchstaben die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Buchstaben',
      items: [
        { text: 'A', loesung: 4 },
        { text: 'B', loesung: 1 },
        { text: 'C', loesung: 3 },
        { text: 'D', loesung: 2 }
      ],
      erklaerung: 'Ein Stack arbeitet nach dem LIFO-Prinzip (Last In – First Out). Nach push("A") und push("B") liegt B oben und wird als Erstes ausgegeben. Danach liegen A, C und D auf dem Stack, D oben. Die drei folgenden pop()-Aufrufe geben D, C und A aus. Ausgabereihenfolge: B, D, C, A.'
    },
    {
      nr: 20, thema: 'datenstrukturen', typ: 'zahl',
      text: 'Eingehende Rückrufwünsche speichert TerminFix in einer Queue, die als Ringpuffer mit 5 Plätzen (Index 0 bis 4) umgesetzt ist. Die Variable ende zeigt auf den nächsten freien Platz und hat zu Beginn den Wert 0. Jedes enqueue legt das Element auf den Platz ende und erhöht ende anschließend um 1; auf Index 4 folgt wieder Index 0. Ausgeführt werden nacheinander: 4 × enqueue, 2 × dequeue, 3 × enqueue.',
      frage: 'Ermitteln Sie den Wert der Variablen ende nach diesen Operationen.',
      anweisung: 'Tragen Sie das Ergebnis in das Kästchen ein.',
      loesung: 2,
      erklaerung: 'Die ersten vier enqueue-Operationen belegen die Plätze 0 bis 3; ende steht danach auf 4. dequeue entnimmt Elemente am Anfang der Queue und verändert ende nicht. Die drei weiteren enqueue-Operationen belegen die Plätze 4, 0 und 1; ende steht danach auf 2. Kurz: ende = (4 + 3) MOD 5 = 2. Der Ringpuffer nutzt so die durch dequeue frei gewordenen Plätze wieder.'
    },
    {
      nr: 21, thema: 'datenstrukturen', typ: 'einfach', codeOptionen: true,
      text: 'Die Wartenden für einen kurzfristig frei gewordenen Termin stehen in einer einfach verketteten Liste A → B → C. Jeder Knoten besitzt den Verweis „naechster“; C.naechster ist NULL. Der Knoten B soll aus der Liste entfernt werden.',
      frage: 'Welche Anweisung entfernt B korrekt aus der Liste?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anweisung in das Kästchen ein.',
      optionen: [
        'A.naechster ← B.naechster',
        'B.naechster ← A.naechster',
        'A.naechster ← C.naechster',
        'A ← B.naechster',
        'C.naechster ← A'
      ],
      loesung: 1,
      erklaerung: 'Zum Entfernen von B wird der Verweis seines Vorgängers A auf den Nachfolger von B umgehängt: A.naechster ← B.naechster, also auf C. Die Liste lautet danach A → C. Anweisung 3 setzt A.naechster auf NULL und trennt damit auch C ab, Anweisung 5 erzeugt einen Kreis. Elemente müssen dabei nicht verschoben werden; geändert wird nur ein Verweis.'
    },
    {
      nr: 22, thema: 'datenstrukturen', typ: 'einfach',
      text: 'In einem binären Suchbaum ist die Wurzel 40. Ihr linkes Kind ist 20 mit den Kindern 10 (links) und 30 (rechts), ihr rechtes Kind ist 60 mit dem rechten Kind 70. Der Baum wird in Preorder durchlaufen: zuerst der Knoten selbst, dann sein linker Teilbaum, dann sein rechter Teilbaum.',
      frage: 'In welcher Reihenfolge werden die Schlüssel ausgegeben?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Reihenfolge in das Kästchen ein.',
      optionen: [
        '10, 20, 30, 40, 60, 70',
        '40, 20, 10, 30, 60, 70',
        '40, 20, 60, 10, 30, 70',
        '10, 30, 20, 70, 60, 40',
        '70, 60, 40, 30, 20, 10'
      ],
      loesung: 2,
      erklaerung: 'Preorder (Knoten – links – rechts): Ausgabe der Wurzel 40, dann Preorder des linken Teilbaums (20, 10, 30), dann des rechten Teilbaums (60, 70). Reihenfolge 1 ist Inorder (sortiert), 3 der ebenenweise Durchlauf, 4 Postorder. Preorder eignet sich z. B. zum Kopieren eines Baums, weil jeder Knoten vor seinen Kindern verarbeitet wird.'
    },
    {
      nr: 23, thema: 'datenstrukturen', typ: 'einfach',
      text: 'In einen leeren binären Suchbaum werden die Patientennummern 10, 20, 30, 40 und 50 in dieser Reihenfolge eingefügt.',
      frage: 'Welche Aussage zum entstandenen Baum trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Wurzel des Baums ist 30.',
        'Der Baum ist vollständig ausgeglichen.',
        'Alle Schlüssel liegen im linken Teilbaum der Wurzel.',
        'Die Suche nach 50 benötigt nur einen Vergleich.',
        'Der Baum ist zu einer Kette entartet.'
      ],
      loesung: 5,
      erklaerung: 'Jeder neue Schlüssel ist größer als alle vorhandenen und wird deshalb als rechtes Kind des bisher größten Knotens eingefügt. Es entsteht die Kette 10 → 20 → 30 → 40 → 50 mit der Wurzel 10. Der Baum verhält sich wie eine verkettete Liste: Die Suche nach 50 braucht fünf Vergleiche, der Aufwand steigt auf O(n). Selbstausgleichende Bäume wie AVL- oder Rot-Schwarz-Bäume verhindern das.'
    },
    {
      nr: 24, thema: 'datenstrukturen', typ: 'einfach',
      text: 'TerminFix speichert Patientennummern in einer Hashtabelle mit 7 Plätzen (0 bis 6). Der Platz wird mit h(k) = k MOD 7 berechnet. Ist der Platz belegt, wird der jeweils nächste Platz geprüft (lineares Sondieren). Eingefügt werden nacheinander die Schlüssel 15, 22 und 8.',
      frage: 'Auf welchem Platz wird der Schlüssel 8 gespeichert?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Platz in das Kästchen ein.',
      optionen: [
        'Platz 1',
        'Platz 2',
        'Platz 3',
        'Platz 4',
        'Platz 5'
      ],
      loesung: 3,
      erklaerung: '15 MOD 7 = 1: Platz 1. 22 MOD 7 = 1: Platz 1 ist belegt, also Platz 2. 8 MOD 7 = 1: Die Plätze 1 und 2 sind belegt, der nächste freie Platz ist 3. Bei vielen Kollisionen bilden sich beim linearen Sondieren zusammenhängende Blöcke belegter Plätze (Clustering), die Einfügen und Suchen verlangsamen.'
    },

    // --- Datenschutz (25–30) ---
    {
      nr: 25, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Bei der Online-Buchung geben Patientinnen und Patienten neben Name und Telefonnummer auch den Behandlungsgrund an, z. B. „Nachbehandlung Knieoperation“.',
      frage: 'Welche Aussage zur Angabe des Behandlungsgrunds trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Der Behandlungsgrund …',
      optionen: [
        'ist ein Gesundheitsdatum mit besonderem Schutz.',
        'ist ohne Geburtsdatum ein anonymes Datum.',
        'fällt als medizinische Angabe nicht unter die DSGVO.',
        'darf wie jede Kontaktangabe ohne weitere Voraussetzung verarbeitet werden.',
        'darf nur mit Genehmigung der Ärztekammer gespeichert werden.'
      ],
      loesung: 1,
      erklaerung: 'Angaben zum Gesundheitszustand sind Gesundheitsdaten (Art. 4 Nr. 15 DSGVO) und gehören zu den besonderen Kategorien personenbezogener Daten (Art. 9 Abs. 1 DSGVO). Ihre Verarbeitung ist grundsätzlich untersagt und nur in den Ausnahmen des Art. 9 Abs. 2 DSGVO zulässig, z. B. mit ausdrücklicher Einwilligung oder für Zwecke der Gesundheitsversorgung. Zusammen mit dem Namen ist die Angabe eindeutig einer Person zugeordnet und keinesfalls anonym.'
    },
    {
      nr: 26, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Die Praxen verwalten die Termine ihrer Patienten in TerminFix. Die Quirinus Data GmbH speichert die Daten auf ihren Servern und verarbeitet sie ausschließlich für die Praxen nach deren Vorgaben.',
      frage: 'Welche Rolle hat die Quirinus Data GmbH dabei im Sinne der DSGVO?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Rolle in das Kästchen ein.',
      optionen: [
        'Verantwortlicher',
        'Gemeinsam Verantwortlicher',
        'Dritter',
        'Auftragsverarbeiter',
        'Datenschutzbeauftragter'
      ],
      loesung: 4,
      erklaerung: 'Verantwortlicher ist, wer über Zwecke und Mittel der Verarbeitung entscheidet (Art. 4 Nr. 7 DSGVO), hier die Praxen. Wer personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet, ist Auftragsverarbeiter (Art. 4 Nr. 8 DSGVO). Praxen und Quirinus Data GmbH müssen deshalb einen Vertrag zur Auftragsverarbeitung nach Art. 28 Abs. 3 DSGVO schließen; der Auftragsverarbeiter darf die Daten nur auf dokumentierte Weisung verarbeiten.'
    },
    {
      nr: 27, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Ein Klinikverbund mit mehreren Standorten möchte TerminFix künftig für die Termine und Behandlungsgründe von mehreren Zehntausend Patienten nutzen.',
      frage: 'Welche Pflicht hat der Klinikverbund als Verantwortlicher vor Beginn dieser Verarbeitung?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Pflicht in das Kästchen ein.',
      optionen: [
        'Einholung einer Genehmigung beim BSI',
        'Anmeldung der Verarbeitung beim Gewerbeamt',
        'Durchführung einer Datenschutz-Folgenabschätzung',
        'Zertifizierung der Software durch den TÜV',
        'Einwilligung aller Beschäftigten des Klinikverbunds'
      ],
      loesung: 3,
      erklaerung: 'Hat eine Verarbeitung voraussichtlich ein hohes Risiko für die Rechte und Freiheiten der Betroffenen, muss der Verantwortliche vorab eine Datenschutz-Folgenabschätzung durchführen (Art. 35 Abs. 1 DSGVO). Das gilt insbesondere bei der umfangreichen Verarbeitung besonderer Kategorien wie Gesundheitsdaten (Art. 35 Abs. 3 Buchst. b DSGVO). Der Auftragsverarbeiter unterstützt ihn dabei (Art. 28 Abs. 3 Buchst. f DSGVO). Bleibt trotz geplanter Maßnahmen ein hohes Risiko, ist vorher die Aufsichtsbehörde zu konsultieren (Art. 36 DSGVO).'
    },
    {
      nr: 28, thema: 'it-datenschutz', typ: 'mehrfach',
      text: 'Eine Praxis möchte ihre Patienten per SMS an Termine erinnern und holt dafür über TerminFix eine Einwilligung ein.',
      frage: 'Welche Aussagen zur Einwilligung nach der DSGVO treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Ein bereits angekreuztes Kästchen genügt als Einwilligung.',
        'Die Einwilligung ist jederzeit widerrufbar.',
        'Ein Widerruf macht auch die bereits versandten Erinnerungen rechtswidrig.',
        'Eine Einwilligung ist nur mit eigenhändiger Unterschrift wirksam.',
        'Die Praxis muss die Einwilligung nachweisen können.'
      ],
      loesung: [2, 5],
      erklaerung: 'Die betroffene Person kann ihre Einwilligung jederzeit widerrufen; der Widerruf wirkt nur für die Zukunft, die bis dahin erfolgte Verarbeitung bleibt rechtmäßig (Art. 7 Abs. 3 DSGVO). Der Verantwortliche muss nachweisen können, dass eine Einwilligung vorliegt (Art. 7 Abs. 1 DSGVO). Eine Einwilligung erfordert eine eindeutige bestätigende Handlung; Stillschweigen oder bereits angekreuzte Kästchen genügen nicht (Erwägungsgrund 32). Eine bestimmte Form schreibt die DSGVO nicht vor, auch ein Häkchen im Online-Formular reicht.'
    },
    {
      nr: 29, thema: 'it-datenschutz', typ: 'einfach',
      text: 'In TerminFix können Patienten ein Profil anlegen. Neue Profile sind sofort für alle Praxen der Plattform sichtbar. Die Patienten können die Sichtbarkeit nachträglich selbst einschränken.',
      frage: 'Gegen welche Vorgabe der DSGVO verstößt diese Gestaltung?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Vorgabe in das Kästchen ein.',
      optionen: [
        'Recht auf Datenübertragbarkeit',
        'Privacy by Default',
        'Meldepflicht bei Datenpannen',
        'Recht auf Berichtigung',
        'Benennungspflicht für Datenschutzbeauftragte'
      ],
      loesung: 2,
      erklaerung: 'Nach Art. 25 Abs. 2 DSGVO muss der Verantwortliche durch Voreinstellungen sicherstellen, dass nur die für den jeweiligen Zweck erforderlichen Daten verarbeitet werden. Insbesondere dürfen Daten nicht ohne Eingreifen der Person einer unbestimmten Zahl von Personen zugänglich gemacht werden (Privacy by Default, datenschutzfreundliche Voreinstellungen). Richtig wäre ein Profil, das zunächst nur für die gebuchte Praxis sichtbar ist. Art. 25 Abs. 1 DSGVO verlangt zusätzlich Datenschutz durch Technikgestaltung (Privacy by Design).'
    },
    {
      nr: 30, thema: 'it-datenschutz', typ: 'zuordnung',
      text: 'Herr Kaya prüft, auf welche Rechtsgrundlagen nach Art. 6 Abs. 1 DSGVO die Quirinus Data GmbH ihre eigenen Verarbeitungen stützt.',
      frage: 'Welche der folgenden Rechtsgrundlagen sind den nachstehenden Verarbeitungen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Rechtsgrundlage in das Kästchen ein.',
      optionenTitel: 'Rechtsgrundlagen',
      optionen: [
        'Einwilligung',
        'Erfüllung eines Vertrags',
        'Erfüllung einer rechtlichen Verpflichtung',
        'Berechtigtes Interesse'
      ],
      itemsTitel: 'Verarbeitungen',
      items: [
        { text: 'Übermittlung der Lohnsteuerdaten der Beschäftigten an das Finanzamt', loesung: 3 },
        { text: 'Versand eines Newsletters an Interessenten nach Anmeldung mit Bestätigungslink', loesung: 1 },
        { text: 'Kurzzeitige Protokollierung der Serverzugriffe zur Abwehr von Angriffen', loesung: 4 },
        { text: 'Speicherung der Rechnungsanschrift einer Einzelpraxis für die Abrechnung des Nutzungsvertrags', loesung: 2 }
      ],
      erklaerung: 'Art. 6 Abs. 1 DSGVO: Buchst. a Einwilligung (Newsletter mit bestätigter Anmeldung), Buchst. b Erfüllung eines Vertrags (Rechnungsanschrift für den Nutzungsvertrag), Buchst. c rechtliche Verpflichtung (Lohnsteuer-Anmeldung nach § 41a EStG), Buchst. f berechtigtes Interesse (Netz- und Informationssicherheit, Erwägungsgrund 49). Jede Verarbeitung personenbezogener Daten braucht mindestens eine dieser Rechtsgrundlagen.'
    }
  ]
});
