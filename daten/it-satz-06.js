// IT-Theorie-Übungssatz 6 – gemischt: Datenschutz, Schnittstellen, Entwurfsmuster, Datenstrukturen, Vorgehensmodelle (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_IT_SAETZE = window.WISO_IT_SAETZE || []).push({
  id: 'it-06',
  titel: 'IT-Theorie-Übungssatz 6',
  untertitel: 'Gemischt: Datenschutz, Schnittstellen, Entwurfsmuster, Datenstrukturen und Vorgehensmodelle',
  ausgangssituation:
    'Die Niers Energiedaten GmbH ist ein IT-Dienstleistungsunternehmen mit Sitz in Viersen. Sie entwickelt und betreibt für mehrere Stadtwerke das Kundenportal „ZählerBlick“, in dem Haushalte ihre Strom- und Wasserverbräuche einsehen. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 6,
      text: 'Die Niers Energiedaten GmbH verarbeitet im Auftrag der Stadtwerke die Verbrauchsdaten von rund 80 000 Haushalten. Die Datenschutzkoordinatorin Frau Hermes bereitet eine Schulung zur DSGVO vor.'
    },
    {
      von: 7, bis: 12,
      text: 'Stadtwerke und Smartphone-App greifen über eine REST-Schnittstelle auf ZählerBlick zu. Die Messwerte werden im JSON-Format übertragen; einige Stadtwerke liefern ihre Daten als XML.'
    },
    {
      von: 13, bis: 18,
      text: 'Für die nächste Version von ZählerBlick überarbeitet der Softwarearchitekt Herr Peters die Architektur und bespricht mit dem Team die eingesetzten Entwurfsmuster.'
    },
    {
      von: 19, bis: 24,
      text: 'In einer internen Schulung wiederholen die Auszubildenden die Datenstrukturen, die bei der Verarbeitung der Messwerte eingesetzt werden.'
    },
    {
      von: 25, bis: 30,
      text: 'ZählerBlick wird mit Scrum weiterentwickelt, das Betriebsteam arbeitet mit einem Kanban-Board. Für das Großprojekt eines Stadtwerks ist das V-Modell vorgegeben.'
    }
  ],

  aufgaben: [
    // --- Datenschutz (1–6) ---
    {
      nr: 1, thema: 'it-datenschutz', typ: 'einfach',
      text: 'ZählerBlick zeigt Haushalten ihren Stromverbrauch in Viertelstundenwerten an. Jeder Wert ist der Zählernummer des jeweiligen Anschlusses zugeordnet; die Stadtwerke kennen zu jeder Zählernummer den Vertragskunden.',
      frage: 'Welche Aussage zu diesen Verbrauchswerten trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Die Viertelstundenwerte eines Haushalts …',
      optionen: [
        'sind anonyme technische Messdaten.',
        'werden erst durch den Namen des Kunden personenbezogen.',
        'sind personenbezogene Daten.',
        'fallen als Energiedaten nicht unter die DSGVO.',
        'sind Gesundheitsdaten im Sinne der DSGVO.'
      ],
      loesung: 3,
      erklaerung: 'Personenbezogen sind alle Informationen über eine identifizierte oder identifizierbare natürliche Person (Art. 4 Nr. 1 DSGVO). Über die Zählernummer lassen sich die Werte dem Vertragskunden zuordnen; ein Name im selben Datensatz ist dafür nicht nötig. Viertelstundenwerte lassen zudem Rückschlüsse auf den Tagesablauf der Bewohner zu (Anwesenheit, Schlafenszeiten) und sind deshalb besonders schutzbedürftig. Zu den besonderen Kategorien nach Art. 9 DSGVO gehören sie trotzdem nicht.'
    },
    {
      nr: 2, thema: 'it-datenschutz', typ: 'zuordnung',
      text: 'Frau Hermes stellt die technischen und organisatorischen Maßnahmen (TOM) der Niers Energiedaten GmbH vor.',
      frage: 'Welche der folgenden Kontrollziele sind den nachstehenden Maßnahmen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Kontrollziel in das Kästchen ein.',
      optionenTitel: 'Kontrollziele',
      optionen: [
        'Eingabekontrolle',
        'Verfügbarkeitskontrolle',
        'Trennungskontrolle',
        'Auftragskontrolle'
      ],
      itemsTitel: 'Maßnahmen',
      items: [
        { text: 'Die Daten jedes Stadtwerks liegen in einer eigenen Datenbank.', loesung: 3 },
        { text: 'Jede Änderung an Kundendaten wird mit Benutzer und Zeitpunkt protokolliert.', loesung: 1 },
        { text: 'Ein externer Rechenzentrumsbetreiber arbeitet nur nach dokumentierten Weisungen.', loesung: 4 },
        { text: 'Unterbrechungsfreie Stromversorgung und tägliche Sicherungen schützen vor Datenverlust.', loesung: 2 }
      ],
      erklaerung: 'Art. 32 DSGVO verlangt Maßnahmen, die Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit der Systeme sicherstellen. Zur Gliederung werden in der Praxis weiterhin die Kontrollziele aus der Anlage zu § 9 BDSG (alte Fassung) genutzt: Eingabekontrolle (nachvollziehbar, wer wann welche Daten eingegeben oder geändert hat), Verfügbarkeitskontrolle (Schutz vor Zerstörung und Verlust), Trennungskontrolle (getrennte Verarbeitung von Daten unterschiedlicher Zwecke oder Auftraggeber) und Auftragskontrolle (Verarbeitung im Auftrag nur nach Weisung).'
    },
    {
      nr: 3, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Ein Schadprogramm verschlüsselt die Datenbankserver von ZählerBlick. Zwei Tage lang können die Haushalte ihre Verbrauchsdaten nicht abrufen. Ein Abfluss von Daten wurde nicht festgestellt.',
      frage: 'Welches Schutzziel ist in erster Linie verletzt?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Schutzziel in das Kästchen ein.',
      optionen: [
        'Vertraulichkeit',
        'Integrität',
        'Authentizität',
        'Verfügbarkeit',
        'Nichtabstreitbarkeit'
      ],
      loesung: 4,
      erklaerung: 'Verfügbarkeit bedeutet, dass Daten und Systeme bei Bedarf nutzbar sind; durch die Verschlüsselung sind sie das nicht mehr. Vertraulichkeit (Schutz vor unbefugter Kenntnisnahme) wäre bei einem Datenabfluss verletzt, Integrität bei einer unbemerkten Veränderung der Daten. Auch der Verlust der Verfügbarkeit ist eine Verletzung des Schutzes personenbezogener Daten (Art. 4 Nr. 12 DSGVO) und kann eine Meldepflicht nach Art. 33 DSGVO auslösen.'
    },
    {
      nr: 4, thema: 'it-datenschutz', typ: 'zahl',
      text: 'Gegen die Rheinstrom AG, einen Kunden der Niers Energiedaten GmbH, prüft die Aufsichtsbehörde eine Geldbuße wegen eines Verstoßes gegen die Grundsätze der Verarbeitung. Die Rheinstrom AG erzielte im vorangegangenen Geschäftsjahr einen weltweiten Jahresumsatz von 650 Mio. EUR.',
      kasten: {
        titel: 'Art. 83 Abs. 5 DSGVO (Auszug, vereinfacht)',
        absaetze: [
          'Bei Verstößen gegen die Grundsätze für die Verarbeitung werden Geldbußen von bis zu 20 000 000 EUR oder im Fall eines Unternehmens von bis zu 4 % seines gesamten weltweit erzielten Jahresumsatzes des vorangegangenen Geschäftsjahrs verhängt, je nachdem, welcher der Beträge höher ist.'
        ]
      },
      frage: 'Ermitteln Sie den Höchstbetrag der möglichen Geldbuße in Mio. EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 26,
      einheit: 'Mio. EUR',
      erklaerung: '4 % von 650 Mio. EUR = 26 Mio. EUR. Dieser Betrag ist höher als 20 Mio. EUR und bildet deshalb die Obergrenze. Die tatsächliche Höhe legt die Aufsichtsbehörde nach den Kriterien des Art. 83 Abs. 2 DSGVO fest, z. B. Art, Schwere und Dauer des Verstoßes, Vorsatz oder Fahrlässigkeit und ergriffene Gegenmaßnahmen. Gehört ein Unternehmen zu einem Konzern, ist der Umsatz des Konzerns maßgeblich (Erwägungsgrund 150).'
    },
    {
      nr: 5, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Die Niers Energiedaten GmbH beschäftigt 34 Personen. 28 davon arbeiten ständig mit der automatisierten Verarbeitung personenbezogener Daten.',
      frage: 'Welche Aussage zur Benennung eines Datenschutzbeauftragten trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Eine Benennung ist erst ab 50 Beschäftigten Pflicht.',
        'Den Datenschutzbeauftragten bestimmt die Aufsichtsbehörde.',
        'Nur Behörden müssen einen Datenschutzbeauftragten benennen.',
        'Der Geschäftsführer kann die Aufgabe selbst übernehmen.',
        'Die GmbH muss einen Datenschutzbeauftragten benennen.'
      ],
      loesung: 5,
      erklaerung: 'Nach § 38 Abs. 1 Satz 1 BDSG benennen Verantwortliche und Auftragsverarbeiter einen Datenschutzbeauftragten, wenn sie in der Regel mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigen. Mit 28 Personen ist diese Grenze überschritten. Das Unternehmen benennt den Datenschutzbeauftragten selbst, intern oder extern (Art. 37 Abs. 6 DSGVO). Der Geschäftsführer scheidet wegen des Interessenkonflikts aus (Art. 38 Abs. 6 DSGVO).'
    },
    {
      nr: 6, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Über ein Kontaktformular auf ihrer eigenen Website erhebt die Niers Energiedaten GmbH Namen und E-Mail-Adressen von Interessenten. Frau Hermes überarbeitet dazu die Datenschutzhinweise.',
      frage: 'Welche der folgenden Angaben gehört **nicht** zu den Pflichtinformationen bei der Erhebung der Daten?',
      anweisung: 'Tragen Sie die Ziffer vor der **nicht** geforderten Angabe in das Kästchen ein.',
      optionen: [
        'Namen aller Beschäftigten mit Zugriff auf die Daten',
        'Name und Kontaktdaten des Verantwortlichen',
        'Zwecke und Rechtsgrundlage der Verarbeitung',
        'Dauer der Speicherung',
        'Hinweis auf das Beschwerderecht bei einer Aufsichtsbehörde'
      ],
      loesung: 1,
      erklaerung: 'Werden Daten bei der betroffenen Person erhoben, muss der Verantwortliche nach Art. 13 DSGVO u. a. informieren über: Name und Kontaktdaten des Verantwortlichen und des Datenschutzbeauftragten, Zwecke und Rechtsgrundlage, Empfänger, Speicherdauer, die Rechte der betroffenen Person und das Beschwerderecht bei einer Aufsichtsbehörde. Die Namen der Beschäftigten, die mit den Daten arbeiten, gehören nicht dazu.'
    },

    // --- Schnittstellen und Datenformate (7–12) ---
    {
      nr: 7, thema: 'schnittstellen', typ: 'einfach',
      text: 'Ein Stadtwerk stellt seine Abrechnungsdaten über einen älteren Webservice bereit. Jede Nachricht ist ein XML-Dokument mit den Elementen Envelope, Header und Body; die angebotenen Operationen sind in einer WSDL-Datei beschrieben.',
      frage: 'Um welche Schnittstellentechnik handelt es sich?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Schnittstellentechnik in das Kästchen ein.',
      optionen: [
        'REST',
        'GraphQL',
        'SOAP',
        'gRPC',
        'WebSocket'
      ],
      loesung: 3,
      erklaerung: 'SOAP ist ein Protokoll für den Austausch von XML-Nachrichten. Jede Nachricht steckt in einem Envelope mit optionalem Header und einem Body; die Schnittstelle wird maschinenlesbar in einer WSDL-Datei (Web Services Description Language) beschrieben. REST ist dagegen ein Architekturstil, der Ressourcen über URIs und die HTTP-Methoden anspricht und kein bestimmtes Datenformat vorschreibt; meist wird JSON verwendet.'
    },
    {
      nr: 8, thema: 'schnittstellen', typ: 'einfach',
      text: 'Während einer geplanten Wartung beantwortet der Server von ZählerBlick alle Anfragen mit demselben Statuscode und dem Header „Retry-After: 3600“.',
      frage: 'Welcher Statuscode ist für diesen Fall vorgesehen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Statuscode in das Kästchen ein.',
      optionen: [
        '500',
        '404',
        '408',
        '503',
        '301'
      ],
      loesung: 4,
      erklaerung: '503 Service Unavailable bedeutet, dass der Server die Anfrage vorübergehend nicht bearbeiten kann, etwa wegen Wartung oder Überlastung. Mit dem Header Retry-After teilt er mit, wann ein neuer Versuch sinnvoll ist, hier nach 3600 Sekunden. 500 Internal Server Error meldet einen unerwarteten Fehler, 404 Not Found eine nicht vorhandene Ressource, 408 Request Timeout eine Zeitüberschreitung beim Empfang der Anfrage, 301 Moved Permanently eine dauerhafte Umleitung (RFC 9110).'
    },
    {
      nr: 9, thema: 'schnittstellen', typ: 'einfach',
      text: 'Das Format der Messwerte in der Schnittstelle ändert sich grundlegend. Die bestehenden Apps der Stadtwerke sollen ohne Anpassung weiter funktionieren.',
      frage: 'Welches Vorgehen ist dafür üblich?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Vorgehen in das Kästchen ein.',
      optionen: [
        'Bereitstellung der neuen Version unter einem eigenen Pfad wie /v2/messwerte',
        'Änderung der bestehenden Ressource ohne Ankündigung',
        'Umstellung aller Apps auf SOAP',
        'Auslieferung der Messwerte nur noch als PDF-Datei',
        'Abschaltung der alten Schnittstelle am Tag der Umstellung'
      ],
      loesung: 1,
      erklaerung: 'Bei inkompatiblen Änderungen wird eine neue Version der Schnittstelle bereitgestellt, häufig über den Pfad (/v1/…, /v2/…), seltener über einen Header. Bestehende Clients nutzen weiter /v1, bis sie umgestellt sind; die alte Version wird erst nach einer angekündigten Übergangszeit abgeschaltet. Eine unangekündigte Änderung oder sofortige Abschaltung würde die vorhandenen Apps unbrauchbar machen.'
    },
    {
      nr: 10, thema: 'schnittstellen', typ: 'einfach', codeOptionen: true,
      text: 'Ein Messwert soll als XML-Element „messwert“ übertragen werden. Die Zählernummer Z-1188 steht als Attribut „zaehler“, Zeitpunkt und Wert stehen als Kindelemente „zeit“ und „wert“.',
      frage: 'Welches XML-Element erfüllt diese Vorgaben und ist wohlgeformt?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden XML-Element in das Kästchen ein.',
      optionen: [
        '<messwert><zaehler>Z-1188</zaehler><zeit>2027-01-31T23:45</zeit><wert>0.42</wert></messwert>',
        '<messwert zaehler="Z-1188"><zeit>2027-01-31T23:45</zeit><wert>0.42</wert></messwert>',
        '<messwert zaehler="Z-1188" zeit="2027-01-31T23:45" wert="0.42"/>',
        '<messwert zaehler=Z-1188><zeit>2027-01-31T23:45</zeit><wert>0.42</wert></messwert>',
        '<messwert zaehler="Z-1188"><zeit>2027-01-31T23:45</zeit><wert>0.42</messwert></wert>'
      ],
      loesung: 2,
      erklaerung: 'Attribute stehen im Start-Tag in der Form name="wert", Kindelemente zwischen Start- und End-Tag. Element 1 legt die Zählernummer als Kindelement statt als Attribut an, Element 3 legt auch Zeit und Wert als Attribute an. Element 4 ist nicht wohlgeformt, weil der Attributwert nicht in Anführungszeichen steht; in Element 5 sind die End-Tags von wert und messwert vertauscht.'
    },
    {
      nr: 11, thema: 'schnittstellen', typ: 'mehrfach',
      text: 'Für die Schnittstellendokumentation vergleicht das Team die Datenformate JSON und XML.',
      frage: 'Welche Aussagen zum Vergleich von JSON und XML treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'JSON kennt wie XML Attribute an Elementen.',
        'XML-Dokumente lassen sich mit einem XML-Schema (XSD) auf Gültigkeit prüfen.',
        'JSON benötigt zu jedem Wert ein schließendes Tag.',
        'XML erlaubt keine verschachtelten Strukturen.',
        'JSON stellt dieselben Daten meist kompakter dar als XML.'
      ],
      loesung: [2, 5],
      erklaerung: 'XML-Dokumente können gegen eine DTD oder ein XML-Schema (XSD) validiert werden; für JSON gibt es mit JSON Schema eine vergleichbare, separat festgelegte Möglichkeit. JSON kommt ohne End-Tags aus und ist deshalb meist kompakter. Attribute gibt es nur in XML, JSON kennt nur Schlüssel-Wert-Paare. Beide Formate erlauben beliebig tiefe Verschachtelung.'
    },
    {
      nr: 12, thema: 'schnittstellen', typ: 'zahl',
      text: 'Die Schnittstelle liefert für einen Stromzähler folgende Zählerstände:',
      kasten: {
        titel: 'JSON-Dokument',
        code: [
          '{',
          '  "zaehler": "Z-1188",',
          '  "einheit": "kWh",',
          '  "staende": [',
          '    { "datum": "2027-01-01", "stand": 12450 },',
          '    { "datum": "2027-02-01", "stand": 12730 },',
          '    { "datum": "2027-03-01", "stand": 13015 }',
          '  ]',
          '}'
        ]
      },
      frage: 'Ermitteln Sie den Stromverbrauch vom 01.01.2027 bis zum 01.03.2027 in kWh.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 565,
      einheit: 'kWh',
      erklaerung: 'Das Array „staende“ enthält drei Objekte mit Datum und Zählerstand. Der Verbrauch ist die Differenz zwischen dem letzten und dem ersten Zählerstand: 13 015 − 12 450 = 565 kWh (280 kWh im Januar, 285 kWh im Februar). Die Zählerstände dürfen nicht addiert werden, weil jeder Stand den gesamten bisherigen Verbrauch enthält.'
    },

    // --- Entwurfsmuster (13–18) ---
    {
      nr: 13, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Die Klasse „Konfiguration“ von ZählerBlick ist als Singleton umgesetzt. Herr Peters zeichnet dafür ein UML-Klassendiagramm mit dem statischen Attribut „instanz“ und der statischen Methode „getInstance()“.',
      frage: 'Woran sind statische Attribute und Methoden im UML-Klassendiagramm zu erkennen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Darstellung in das Kästchen ein.',
      optionen: [
        'Sie sind kursiv gesetzt.',
        'Sie beginnen mit einem Pluszeichen.',
        'Sie sind unterstrichen.',
        'Sie beginnen mit einer Raute (#).',
        'Sie beginnen mit einem Schrägstrich (/).'
      ],
      loesung: 3,
      erklaerung: 'In UML werden statische Attribute und Methoden (Klassenattribute und -methoden) unterstrichen dargestellt. Kursiv gesetzt werden abstrakte Klassen und Methoden. Die Zeichen vor dem Namen geben die Sichtbarkeit an: + public, - private, # protected, ~ package. Ein Schrägstrich kennzeichnet ein abgeleitetes Attribut. Beim Singleton sind instanz und getInstance() unterstrichen, der Konstruktor ist privat (-).'
    },
    {
      nr: 14, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Mehrere Klassen von ZählerBlick greifen direkt über Konfiguration.getInstance() auf die Konfiguration zu. Beim Schreiben von Unit-Tests für diese Klassen treten Probleme auf.',
      frage: 'Welcher Nachteil des Singleton-Musters zeigt sich hier?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Nachteil in das Kästchen ein.',
      optionen: [
        'Bei jedem Aufruf entsteht ein neues Objekt.',
        'Die Instanz lässt sich in Tests kaum durch ein Testobjekt ersetzen.',
        'Die Klasse darf keine Attribute besitzen.',
        'Der Zugriff ist nur aus Unterklassen möglich.',
        'Statische Methoden dürfen keine Werte zurückgeben.'
      ],
      loesung: 2,
      erklaerung: 'Ein Singleton wirkt wie eine globale Variable: Die Klassen holen sich die Instanz selbst, statt sie übergeben zu bekommen. Ihre Abhängigkeit ist dadurch von außen nicht sichtbar, und in Unit-Tests lässt sich die echte Konfiguration kaum durch ein Testobjekt (Mock) ersetzen. Außerdem kann der gemeinsame Zustand Tests gegenseitig beeinflussen. Abhilfe schafft die Übergabe der Instanz von außen (Dependency Injection).'
    },
    {
      nr: 15, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Trifft ein neuer Messwert ein, ruft das Subjekt bei allen angemeldeten Beobachtern die Methode aktualisiere() ohne Parameter auf. Die Beobachter fragen den neuen Wert anschließend selbst mit gibMesswert() beim Subjekt ab.',
      frage: 'Wie wird diese Variante des Observer-Musters bezeichnet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bezeichnung in das Kästchen ein.',
      optionen: [
        'Push-Modell',
        'Polling',
        'Lazy Initialization',
        'Fabrikmethode',
        'Pull-Modell'
      ],
      loesung: 5,
      erklaerung: 'Beim Pull-Modell teilt das Subjekt nur mit, dass sich etwas geändert hat; die Beobachter holen sich die benötigten Daten selbst. Beim Push-Modell übergibt das Subjekt die geänderten Daten direkt als Parameter, z. B. aktualisiere(messwert). Polling bedeutet dagegen, dass ein Programm ohne Benachrichtigung in festen Abständen nachfragt; genau das vermeidet das Observer-Muster.'
    },
    {
      nr: 16, thema: 'entwurfsmuster', typ: 'zuordnung',
      text: 'Herr Peters beschreibt dem Team vier Anforderungen an die neue Version von ZählerBlick.',
      frage: 'Welche der folgenden Muster sind den nachstehenden Anforderungen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Muster in das Kästchen ein.',
      optionenTitel: 'Muster',
      optionen: [
        'Singleton',
        'Factory',
        'Observer',
        'Model-View-Controller (MVC)'
      ],
      itemsTitel: 'Anforderungen',
      items: [
        { text: 'Bei Überschreiten eines Grenzwerts werden Warn-App und Leitstand automatisch informiert.', loesung: 3 },
        { text: 'Darstellung, Datenhaltung und Eingabeverarbeitung des Portals liegen in getrennten Komponenten.', loesung: 4 },
        { text: 'Alle Programmteile schreiben in genau einen gemeinsamen Protokolldienst.', loesung: 1 },
        { text: 'Je nach Zählertyp erzeugt eine zentrale Methode das passende Ausleseobjekt.', loesung: 2 }
      ],
      erklaerung: 'Observer: Beobachter werden bei einer Zustandsänderung automatisch benachrichtigt. MVC: Trennung in Model (Daten und Logik), View (Darstellung) und Controller (Eingabeverarbeitung). Singleton: Von einer Klasse existiert genau ein Objekt mit globalem Zugriffspunkt. Factory: Eine Erzeugungsmethode entscheidet, welches konkrete Objekt erzeugt wird.'
    },
    {
      nr: 17, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Im Kundenportal zeigen mehrere Views dieselben Verbrauchsdaten an: eine Tabelle, ein Diagramm und eine Kurzübersicht. Ändert sich ein Wert im Model, sollen alle drei Views sofort aktuell sein.',
      frage: 'Welches Entwurfsmuster wird im MVC-Muster dafür typischerweise eingesetzt?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Entwurfsmuster in das Kästchen ein.',
      optionen: [
        'Observer',
        'Singleton',
        'Factory',
        'Adapter',
        'Iterator'
      ],
      loesung: 1,
      erklaerung: 'Im klassischen MVC-Muster melden sich die Views als Beobachter beim Model an. Ändert sich das Model, benachrichtigt es alle angemeldeten Views, die sich daraufhin neu darstellen. Das Model muss die Views dabei nicht im Einzelnen kennen, sondern nur die gemeinsame Beobachter-Schnittstelle. Schon die „Gang of Four“ beschreibt MVC als Zusammenspiel mehrerer Muster, darunter Observer.'
    },
    {
      nr: 18, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Herr Peters schlägt vor, die Ausleseobjekte für die verschiedenen Zählertypen über eine Fabrikmethode (Factory Method) zu erzeugen.',
      frage: 'Welche Aussage zur Fabrikmethode trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Bei der Fabrikmethode …',
      optionen: [
        'existiert von jeder Klasse genau ein Objekt.',
        'melden sich Objekte für Benachrichtigungen an.',
        'erzeugt der Aufrufer alle Objekte selbst mit new.',
        'entscheiden Unterklassen über die Klasse des erzeugten Objekts.',
        'werden Daten und Darstellung in getrennten Komponenten gehalten.'
      ],
      loesung: 4,
      erklaerung: 'Die Fabrikmethode definiert eine Methode zur Objekterzeugung; welche konkrete Klasse dabei instanziiert wird, legen Unterklassen fest, indem sie die Methode überschreiben (Gang of Four). In der parametrisierten Form entscheidet ein Parameter, welches Objekt entsteht. Der Aufrufer arbeitet nur mit der gemeinsamen Schnittstelle. Aussage 1 beschreibt das Singleton, Aussage 2 den Observer, Aussage 5 MVC.'
    },

    // --- Datenstrukturen (19–24) ---
    {
      nr: 19, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Ein Rechenmodul wertet Formeln in umgekehrter polnischer Notation (UPN) mit einem Stack aus. Zahlen werden auf den Stack gelegt. Bei einem Operator werden die beiden obersten Zahlen entnommen, verknüpft und das Ergebnis wieder auf den Stack gelegt. Ausgewertet wird der Ausdruck: 6 2 3 + *',
      frage: 'Welches Ergebnis liegt nach der Auswertung auf dem Stack?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Ergebnis in das Kästchen ein.',
      optionen: [
        '11',
        '15',
        '24',
        '30',
        '36'
      ],
      loesung: 4,
      erklaerung: '6, 2 und 3 werden nacheinander auf den Stack gelegt; oben liegt 3. Der Operator + entnimmt 3 und 2 und legt 5 ab. Der Operator * entnimmt 5 und 6 und legt 30 ab. In üblicher Schreibweise entspricht der Ausdruck 6 × (2 + 3). Das Ergebnis 24 entstünde bei falscher Rechnung von links nach rechts ((6 + 2) × 3).'
    },
    {
      nr: 20, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Beim Test des Rechenmoduls wird pop() auf einem leeren Stack aufgerufen.',
      frage: 'Wie wird dieser Fehlerfall bezeichnet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bezeichnung in das Kästchen ein.',
      optionen: [
        'Stack Overflow',
        'Kollision',
        'Stack Underflow',
        'Deadlock',
        'Pufferüberlauf'
      ],
      loesung: 3,
      erklaerung: 'Ein Stack Underflow tritt auf, wenn ein Element von einem leeren Stack entnommen werden soll. Ein Stack Overflow ist das Gegenstück: Der Stack ist voll, etwa durch zu tiefe Rekursion. Programme prüfen deshalb vor pop() mit isEmpty(), ob der Stack Elemente enthält, oder fangen den Fehler als Ausnahme ab.'
    },
    {
      nr: 21, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Die Auszubildenden sammeln Einsatzmöglichkeiten für eine Queue.',
      frage: 'Für welche der folgenden Aufgaben ist eine Queue **nicht** geeignet?',
      anweisung: 'Tragen Sie die Ziffer vor der **nicht** geeigneten Aufgabe in das Kästchen ein.',
      optionen: [
        'Abarbeitung von Druckaufträgen in Eingangsreihenfolge',
        'Zwischenspeicherung eingehender Messwerte bis zur Verarbeitung',
        'Warteschlange für Anrufe bei der Kundenhotline',
        'Weitergabe von Nachrichten zwischen zwei Diensten in Sendereihenfolge',
        'Rückgängig-Funktion für die letzten Eingaben im Portal'
      ],
      loesung: 5,
      erklaerung: 'Eine Queue arbeitet nach dem FIFO-Prinzip: Das zuerst eingefügte Element wird zuerst entnommen. Das passt zu Druckaufträgen, Messwertpuffern, Hotline-Warteschlangen und Nachrichtenwarteschlangen. Eine Rückgängig-Funktion muss die zuletzt ausgeführte Aktion zuerst zurücknehmen (LIFO) und nutzt deshalb einen Stack.'
    },
    {
      nr: 22, thema: 'datenstrukturen', typ: 'einfach',
      text: 'In einen leeren binären Suchbaum werden die Zählernummern 45, 25, 65, 15, 35, 55 und 75 in dieser Reihenfolge eingefügt. Anschließend wird der Schlüssel 35 gesucht.',
      frage: 'Wie viele Schlüsselvergleiche sind bis zum Finden von 35 nötig?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anzahl in das Kästchen ein.',
      optionen: [
        '1 Vergleich',
        '2 Vergleiche',
        '3 Vergleiche',
        '4 Vergleiche',
        '5 Vergleiche'
      ],
      loesung: 3,
      erklaerung: 'Der Baum hat die Wurzel 45 mit den Kindern 25 und 65; darunter liegen 15 und 35 bzw. 55 und 75. Suche nach 35: Vergleich mit 45 (kleiner, nach links), Vergleich mit 25 (größer, nach rechts), Vergleich mit 35 (gefunden). Es sind 3 Vergleiche nötig. Eine lineare Suche in der Einfügereihenfolge bräuchte 5 Vergleiche; bei großen ausgeglichenen Bäumen wächst der Vorsprung stark, weil der Aufwand nur logarithmisch steigt.'
    },
    {
      nr: 23, thema: 'datenstrukturen', typ: 'mehrfach',
      text: 'Die Auszubildenden sollen typische Anwendungen von Bäumen nennen.',
      frage: 'Für welche der folgenden Anwendungsfälle ist ein Baum die naheliegende Datenstruktur?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Anwendungsfällen in die Kästchen ein.',
      optionen: [
        'Druckaufträge in Eingangsreihenfolge',
        'Ordner und Unterordner eines Dateisystems',
        'Zuletzt geöffnete Seiten für die Zurück-Funktion',
        'Elemente eines XML-Dokuments mit ihren Kindelementen',
        'Messwerte mit direktem Zugriff über eine Positionsnummer'
      ],
      loesung: [2, 4],
      erklaerung: 'Bäume bilden hierarchische Strukturen ab: Ein Ordner enthält Unterordner und Dateien, ein XML-Element enthält Kindelemente (DOM-Baum). Für Druckaufträge passt eine Queue, für die Zurück-Funktion ein Stack, für den Zugriff über eine Positionsnummer ein Array.'
    },
    {
      nr: 24, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Eine Hashtabelle für Zählernummern hat 20 Plätze und enthält 15 Einträge. Der Belegungsfaktor ist der Quotient aus der Anzahl der Einträge und der Anzahl der Plätze.',
      frage: 'Welchen Belegungsfaktor hat die Tabelle?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Belegungsfaktor in das Kästchen ein.',
      optionen: [
        '0,25',
        '0,50',
        '0,75',
        '1,33',
        '5,00'
      ],
      loesung: 3,
      erklaerung: 'Belegungsfaktor = 15 ÷ 20 = 0,75. Je höher der Belegungsfaktor, desto häufiger treten Kollisionen auf und desto langsamer werden Einfügen und Suchen. Viele Implementierungen vergrößern die Tabelle deshalb ab einem festgelegten Wert (z. B. 0,75 bei der Java-HashMap) und verteilen alle Einträge neu (Rehashing). 1,33 wäre der Kehrwert, 5,00 die Zahl der freien Plätze.'
    },

    // --- Vorgehensmodelle (25–30) ---
    {
      nr: 25, thema: 'vorgehensmodelle', typ: 'mehrfach',
      text: 'Zum Start der agilen Weiterentwicklung stellt die Scrum Masterin Frau Dahmen die Werte des Agilen Manifests vor.',
      frage: 'Welche der folgenden Aussagen sind Werte des Agilen Manifests?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Umfassende Dokumentation mehr als funktionierende Software',
        'Individuen und Interaktionen mehr als Prozesse und Werkzeuge',
        'Befolgen eines Plans mehr als Reagieren auf Veränderung',
        'Festpreise mehr als flexible Budgets',
        'Zusammenarbeit mit dem Kunden mehr als Vertragsverhandlung'
      ],
      loesung: [2, 5],
      erklaerung: 'Das Agile Manifest (2001) nennt vier Werte: Individuen und Interaktionen mehr als Prozesse und Werkzeuge, funktionierende Software mehr als umfassende Dokumentation, Zusammenarbeit mit dem Kunden mehr als Vertragsverhandlung, Reagieren auf Veränderung mehr als das Befolgen eines Plans. Die Werte auf der rechten Seite sind nicht wertlos, die auf der linken werden aber höher geschätzt. In den Aussagen 1 und 3 ist die Rangfolge vertauscht.'
    },
    {
      nr: 26, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Mitten im Sprint kündigt ein Stadtwerk den Auftrag, für den das Sprint-Ziel festgelegt wurde. Das Sprint-Ziel ist damit hinfällig.',
      frage: 'Wer darf den Sprint in Scrum abbrechen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Der Scrum Master',
        'Die Entwickler',
        'Die Geschäftsführung',
        'Das Stadtwerk als Kunde',
        'Der Product Owner'
      ],
      loesung: 5,
      erklaerung: 'Laut Scrum Guide kann ein Sprint abgebrochen werden, wenn das Sprint-Ziel hinfällig wird. Dazu befugt ist nur der Product Owner. Fertige Einträge werden geprüft, nicht fertige gehen zurück ins Product Backlog; danach beginnt mit dem Sprint Planning ein neuer Sprint.'
    },
    {
      nr: 27, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Am Kanban-Board des Betriebsteams hat die Spalte „Test“ ein WIP-Limit von 2 und enthält bereits zwei Aufgaben. Herr Janssen hat seine Aufgabe in der Spalte „In Arbeit“ fertiggestellt.',
      frage: 'Wie verhält er sich nach den Regeln von Kanban?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Verhalten in das Kästchen ein.',
      optionen: [
        'Er schiebt seine Aufgabe trotzdem in die Spalte „Test“.',
        'Er erhöht das WIP-Limit der Spalte „Test“ auf 3.',
        'Er verschiebt eine Aufgabe aus „Test“ zurück nach „Offen“.',
        'Er hilft beim Testen der Aufgaben in der Spalte „Test“.',
        'Er beginnt sofort eine weitere Aufgabe aus „Offen“.'
      ],
      loesung: 4,
      erklaerung: 'Ein erreichtes WIP-Limit zeigt einen Engpass. Nach dem Pull-Prinzip darf die Aufgabe erst in die Spalte „Test“ wechseln, wenn dort ein Platz frei wird. Statt neue Arbeit zu beginnen („Stop starting, start finishing“), unterstützt Herr Janssen den Engpass und hilft beim Testen. Das Limit eigenmächtig zu erhöhen oder die Aufgabe trotzdem weiterzuschieben, würde den Engpass nur verdecken.'
    },
    {
      nr: 28, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Für einen Sprint von 10 Arbeitstagen hat das Team 40 Story Points eingeplant. Das Burndown-Chart zeigt folgende Werte:',
      kasten: {
        titel: 'Burndown-Chart (Auszug)',
        absaetze: [
          'Arbeitstag 0: 40 offene Story Points',
          'Arbeitstag 5: 32 offene Story Points',
          'Ideallinie: gleichmäßiger Abbau von 40 auf 0 Story Points bis Arbeitstag 10'
        ]
      },
      frage: 'Welche Aussage lässt sich aus dem Burndown-Chart ableiten?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Team liegt hinter dem Plan zurück.',
        'Das Team liegt vor dem Plan.',
        'Das Team hat bereits 32 Story Points erledigt.',
        'Die Velocity des Teams beträgt 32 Story Points.',
        'Der Sprint wird automatisch um fünf Tage verlängert.'
      ],
      loesung: 1,
      erklaerung: 'Nach der Ideallinie sollten an Arbeitstag 5 nur noch 20 Story Points offen sein. Tatsächlich sind es 32; erledigt sind erst 8 Story Points. Das Team liegt also hinter dem Plan. Der Sprint wird deshalb nicht verlängert: Das Team bespricht im Daily Scrum, wie es den Plan anpasst, und klärt den Umfang mit dem Product Owner. Die Velocity ergibt sich erst am Sprintende aus den abgeschlossenen Story Points.'
    },
    {
      nr: 29, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Vor der Freigabe prüft ein Stadtwerk im Abnahmetest, ob ZählerBlick im praktischen Einsatz die Bedürfnisse seiner Kunden erfüllt.',
      frage: 'Wie wird diese Art der Prüfung bezeichnet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bezeichnung in das Kästchen ein.',
      optionen: [
        'Verifikation',
        'Validierung',
        'Integration',
        'Regression',
        'Refactoring'
      ],
      loesung: 2,
      erklaerung: 'Validierung prüft, ob das richtige Produkt entwickelt wurde, also ob es für den vorgesehenen Einsatz geeignet ist; im V-Modell geschieht das im Abnahmetest. Verifikation prüft dagegen, ob das Produkt richtig entwickelt wurde, also ob es die Spezifikation erfüllt, z. B. durch Komponenten- und Integrationstests. Refactoring ist eine Verbesserung der Codestruktur ohne Änderung des Verhaltens.'
    },
    {
      nr: 30, thema: 'vorgehensmodelle', typ: 'reihenfolge',
      text: 'Für das Großprojekt eines Stadtwerks plant die Projektleiterin Frau Kox die Phasen auf dem linken Ast des V-Modells bis zur Implementierung.',
      frage: 'Bringen Sie die folgenden Phasen des V-Modells in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für die erste Phase die Ziffer 1, für die zweite Phase die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Phasen',
      items: [
        { text: 'Technischer Systementwurf', loesung: 3 },
        { text: 'Anforderungsdefinition', loesung: 1 },
        { text: 'Implementierung', loesung: 5 },
        { text: 'Funktionaler Systementwurf', loesung: 2 },
        { text: 'Komponentenentwurf', loesung: 4 }
      ],
      erklaerung: 'Der linke Ast des V-Modells verfeinert das System schrittweise: Anforderungsdefinition, funktionaler Systementwurf, technischer Systementwurf, Komponentenentwurf. An der Spitze des V steht die Implementierung. Der rechte Ast prüft in umgekehrter Reihenfolge mit Komponenten-, Integrations-, System- und Abnahmetest.'
    }
  ]
});
