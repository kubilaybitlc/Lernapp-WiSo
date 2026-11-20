// IT-Theorie-Übungssatz 3 – Entwurfsmuster, Vorgehensmodelle, Datenschutz (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_IT_SAETZE = window.WISO_IT_SAETZE || []).push({
  id: 'it-03',
  titel: 'IT-Theorie-Übungssatz 3',
  untertitel: 'Entwurfsmuster, Vorgehensmodelle und Datenschutz',
  ausgangssituation:
    'Die Kranich Software GmbH in Krefeld entwickelt Branchensoftware für Handwerksbetriebe. Sie arbeiten als Fachinformatiker/-in Anwendungsentwicklung in dem Team, das die neue Auftragsverwaltung „WerkPlan“ entwickelt.',

  situationen: [
    {
      von: 1, bis: 8,
      text: 'Im Architektur-Workshop legt das Team fest, welche Entwurfsmuster in „WerkPlan“ eingesetzt werden. Die Teamleiterin Frau Demir bittet Sie, die Vorschläge fachlich einzuordnen.'
    },
    {
      von: 9, bis: 17,
      text: 'Die Geschäftsführung möchte entscheiden, nach welchem Vorgehensmodell „WerkPlan“ und künftige Projekte entwickelt werden. Sie bereiten dazu einen Vergleich klassischer und agiler Vorgehensmodelle vor.'
    },
    {
      von: 18, bis: 25,
      text: '„WerkPlan“ verarbeitet Daten von Kunden und Beschäftigten der Handwerksbetriebe. Gemeinsam mit dem Datenschutzbeauftragten Herrn Petersen prüfen Sie die Anforderungen der Datenschutz-Grundverordnung (DSGVO).'
    },
    {
      von: 26, bis: 30,
      text: 'Der Malermeister Jan Albers führt seinen Betrieb als Einzelunternehmer und ist Kunde der Kranich Software GmbH. Er macht gegenüber dem Unternehmen mehrere Rechte als betroffene Person nach der DSGVO geltend.'
    }
  ],

  aufgaben: [
    // --- Entwurfsmuster (1–8) ---
    {
      nr: 1, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Die Klasse „Einstellungen“ soll als Singleton umgesetzt werden, damit alle Programmteile mit denselben Konfigurationswerten arbeiten.',
      frage: 'Welche Kombination von Merkmalen kennzeichnet die Umsetzung eines Singletons?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Kombination in das Kästchen ein.',
      optionen: [
        'Öffentlicher Konstruktor, öffentliches Attribut für die Instanz, keine Zugriffsmethode',
        'Abstrakte Klasse, geschützter Konstruktor, je Unterklasse eine eigene Instanz',
        'Privater Konstruktor, Attribut für die Instanz in jedem Objekt, öffentliche Methode zum Kopieren',
        'Privater Konstruktor, statisches Attribut für die Instanz, öffentliche statische Zugriffsmethode',
        'Öffentlicher Konstruktor, statische Zählvariable, bei jedem Aufruf ein neues Objekt'
      ],
      loesung: 4,
      erklaerung: 'Beim Singleton ist der Konstruktor privat, sodass von außen kein Objekt mit „new“ erzeugt werden kann. Die einzige Instanz liegt in einem statischen Attribut der Klasse und wird über eine öffentliche statische Methode (meist getInstance()) herausgegeben, die das Objekt beim ersten Aufruf erzeugt. Kritikpunkt: Ein Singleton wirkt wie ein globaler Zustand und erschwert dadurch Unit-Tests.'
    },
    {
      nr: 2, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Im Code-Review liegt Ihnen folgender Ausschnitt vor. Die Klasse „Einstellungen“ ist als Singleton umgesetzt.',
      kasten: {
        titel: 'Pseudocode',
        code: [
          'a ← Einstellungen.getInstance()',
          'b ← Einstellungen.getInstance()',
          'a.setzeSprache("de")',
          'b.setzeSprache("en")',
          'AUSGABE a.gibSprache()'
        ]
      },
      frage: 'Welche Ausgabe erzeugt der Pseudocode?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Ausgabe in das Kästchen ein.',
      optionen: [
        '"de"',
        '"en"',
        '"de" und "en" nacheinander',
        '"en" und "de" nacheinander',
        'Es erfolgt keine Ausgabe (Fehler).'
      ],
      loesung: 2,
      erklaerung: 'getInstance() liefert bei jedem Aufruf dieselbe Instanz zurück. Die Variablen a und b verweisen daher auf ein und dasselbe Objekt. Der zweite Aufruf setzeSprache("en") überschreibt den Wert "de"; a.gibSprache() liefert deshalb "en". Ein Fehler entsteht nicht, weil getInstance() beliebig oft aufgerufen werden darf.'
    },
    {
      nr: 3, thema: 'entwurfsmuster', typ: 'einfach',
      text: '„WerkPlan“ soll Angebote als PDF-, CSV- oder XML-Datei exportieren. Der aufrufende Programmteil übergibt nur das gewünschte Format und erhält ein passendes Exporter-Objekt zurück. Welche konkrete Klasse (z. B. „PdfExporter“) dahintersteht, soll er nicht kennen müssen.',
      frage: 'Welches Entwurfsmuster eignet sich für diese Anforderung?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Entwurfsmuster in das Kästchen ein.',
      optionen: [
        'Factory',
        'Singleton',
        'Observer',
        'Model-View-Controller',
        'Iterator'
      ],
      loesung: 1,
      erklaerung: 'Eine Factory (Fabrik) kapselt die Objekterzeugung: Der Aufrufer fordert über eine Erzeugungsmethode ein Objekt an und arbeitet nur mit der gemeinsamen Schnittstelle (hier z. B. „Exporter“). Welche konkrete Klasse instanziiert wird, entscheidet die Fabrik. Das Singleton begrenzt die Anzahl der Instanzen, der Observer verteilt Benachrichtigungen, Model-View-Controller (MVC) trennt Daten, Darstellung und Steuerung.'
    },
    {
      nr: 4, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Später soll „WerkPlan“ zusätzlich einen Export im JSON-Format erhalten. Die Exporter werden über eine Factory erzeugt.',
      frage: 'Welcher Vorteil ergibt sich in diesem Fall aus dem Einsatz der Factory?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Von jeder Exporter-Klasse kann nur noch genau ein Objekt erzeugt werden.',
        'Die Exporter werden automatisch über jede Änderung an einem Angebot benachrichtigt.',
        'Die neue Klasse wird nur in der Factory ergänzt, ohne Änderung am aufrufenden Code.',
        'Die Exporter-Klassen benötigen keine gemeinsame Schnittstelle mehr.',
        'Die Objekterzeugung entfällt dank der rein statischen Methoden der Factory.'
      ],
      loesung: 3,
      erklaerung: 'Weil die Erzeugung an einer Stelle gebündelt ist, hängt der aufrufende Code nur von der Schnittstelle „Exporter“ ab (lose Kopplung). Ein „JsonExporter“ wird als neue Klasse angelegt und in der Factory ergänzt – bestehender Code, der Exporter verwendet, muss nicht angepasst werden (Offen-Geschlossen-Prinzip). Eine gemeinsame Schnittstelle bleibt dafür Voraussetzung.'
    },
    {
      nr: 5, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Ändert sich der Status eines Auftrags, sollen die Auftragsübersicht, die E-Mail-Benachrichtigung und das Änderungsprotokoll automatisch reagieren. Die Klasse „Auftrag“ soll diese Programmteile nicht fest kennen; weitere Empfänger sollen sich später anmelden können.',
      frage: 'Welches Entwurfsmuster wird hier beschrieben?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Entwurfsmuster in das Kästchen ein.',
      optionen: [
        'Singleton',
        'Factory',
        'Model-View-Controller',
        'Observer',
        'Adapter'
      ],
      loesung: 4,
      erklaerung: 'Beim Observer-Muster (Beobachter, auch Publish-Subscribe) melden sich Beobachter bei einem Subjekt an. Ändert sich dessen Zustand, ruft das Subjekt bei allen angemeldeten Beobachtern eine Benachrichtigungsmethode (z. B. aktualisiere()) auf. Das Subjekt kennt nur die Beobachter-Schnittstelle, nicht die konkreten Klassen – neue Empfänger lassen sich ohne Änderung der Klasse „Auftrag“ ergänzen. Model-View-Controller (MVC) ist dagegen ein Architekturmuster zur Trennung von Daten, Darstellung und Steuerung.'
    },
    {
      nr: 6, thema: 'entwurfsmuster', typ: 'mehrfach',
      text: 'Für die Benachrichtigung über Statusänderungen wird das Observer-Muster eingesetzt.',
      frage: 'Welche Aussagen zum Observer-Muster treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Das Subjekt verwaltet eine Liste der angemeldeten Beobachter und benachrichtigt sie bei einer Zustandsänderung.',
        'Die Beobachter fragen das Subjekt in festen Zeitabständen nach Änderungen ab (Polling).',
        'Das Subjekt muss die konkrete Klasse jedes Beobachters kennen.',
        'Beobachter können sich zur Laufzeit beim Subjekt an- und wieder abmelden.',
        'An ein Subjekt darf höchstens ein Beobachter angemeldet sein.'
      ],
      loesung: [1, 4],
      erklaerung: 'Das Subjekt (Observable) hält eine Liste seiner Beobachter und stellt Methoden zum An- und Abmelden bereit. Bei einer Zustandsänderung benachrichtigt es alle angemeldeten Beobachter von sich aus – ein regelmäßiges Abfragen (Polling) entfällt gerade dadurch. Es können beliebig viele Beobachter angemeldet sein, und das Subjekt kennt nur deren gemeinsame Schnittstelle (lose Kopplung).'
    },
    {
      nr: 7, thema: 'entwurfsmuster', typ: 'zuordnung',
      text: 'Die Oberfläche von „WerkPlan“ wird nach dem Architekturmuster Model-View-Controller (MVC) aufgebaut.',
      frage: 'Welche der folgenden Komponenten sind den nachstehenden Aufgaben zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Komponente in das Kästchen ein. Eine Komponente kann zwei Aufgaben zugeordnet werden.',
      optionenTitel: 'Komponenten',
      optionen: [
        'Model',
        'View',
        'Controller'
      ],
      itemsTitel: 'Aufgaben',
      items: [
        { text: 'Stellt die Auftragsliste als Tabelle auf dem Bildschirm dar.', loesung: 2 },
        { text: 'Nimmt den Klick auf „Speichern“ entgegen und veranlasst die Änderung der Daten.', loesung: 3 },
        { text: 'Enthält die Auftragsdaten und berechnet die Auftragssumme.', loesung: 1 },
        { text: 'Prüft die Geschäftsregel, dass das Lieferdatum nicht vor dem Auftragsdatum liegt.', loesung: 1 }
      ],
      erklaerung: 'MVC trennt eine Anwendung in drei Teile: Das Model enthält die Daten und die Geschäftslogik (Berechnungen, Geschäftsregeln). Die View stellt die Daten dar und enthält keine Geschäftslogik. Der Controller nimmt die Eingaben des Benutzers entgegen und steuert, welche Änderungen am Model ausgelöst und welche Views angezeigt werden. Vorteil: Die Darstellung lässt sich austauschen (z. B. Web und App), ohne das Model zu ändern.'
    },
    {
      nr: 8, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'In der Teamdokumentation sollen die verwendeten Muster nach Kategorien geordnet werden.',
      frage: 'Zu welcher Kategorie von Entwurfsmustern gehören Singleton und Factory?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Kategorie in das Kästchen ein.',
      optionen: [
        'Strukturmuster',
        'Erzeugungsmuster',
        'Verhaltensmuster',
        'Architekturmuster',
        'Nebenläufigkeitsmuster'
      ],
      loesung: 2,
      erklaerung: 'Entwurfsmuster werden in Erzeugungsmuster (z. B. Singleton, Factory), Strukturmuster (z. B. Adapter, Fassade) und Verhaltensmuster (z. B. Observer, Strategie) eingeteilt. Erzeugungsmuster regeln, wie Objekte erzeugt werden. MVC gehört nicht zu diesen drei Gruppen, sondern ist ein Architekturmuster für den Aufbau einer ganzen Anwendung.'
    },

    // --- Vorgehensmodelle (9–17) ---
    {
      nr: 9, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Die Geschäftsführung fragt, wann ein Projekt nach dem Wasserfallmodell sinnvoll ist.',
      frage: 'Für welches der folgenden Projekte eignet sich das Wasserfallmodell am ehesten?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Projekt in das Kästchen ein.',
      optionen: [
        'Eine App mit erst aus Rückmeldungen der Nutzer entstehendem Funktionsumfang',
        'Ein Prototyp zur möglichst schnellen Erprobung einer neuen Geschäftsidee',
        'Ein Kundenportal mit neuen Wünschen des Auftraggebers alle zwei Wochen',
        'Die laufende Wartung einer Software mit täglich eingehenden Fehlermeldungen',
        'Eine Schnittstelle zum Finanzamt mit gesetzlich vollständig vorgegebenen Anforderungen'
      ],
      loesung: 5,
      erklaerung: 'Das Wasserfallmodell durchläuft die Phasen nacheinander; jede Phase wird mit einem Ergebnis (Meilenstein) abgeschlossen, Rücksprünge sind nicht vorgesehen. Es eignet sich daher für Projekte mit stabilen, zu Beginn vollständig bekannten Anforderungen. Ändern sich Anforderungen häufig oder sind sie anfangs unklar, sind agile Vorgehensweisen wie Scrum oder Kanban im Vorteil.'
    },
    {
      nr: 10, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Als Alternative zum Wasserfallmodell wird das V-Modell vorgestellt.',
      frage: 'Welche Aussage kennzeichnet das V-Modell im Vergleich zum Wasserfallmodell?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jeder Entwurfsphase ist eine Teststufe mit früh geplanten Testfällen gegenübergestellt.',
        'Die Entwicklung erfolgt in Sprints von höchstens einem Monat Dauer.',
        'Ohne feste Phasen fließt die Arbeit kontinuierlich über ein Board.',
        'Getestet wird ausschließlich durch den Auftraggeber nach der Auslieferung.',
        'Auf die Dokumentation der Anforderungen wird zugunsten früher Lieferung verzichtet.'
      ],
      loesung: 1,
      erklaerung: 'Das V-Modell erweitert das sequenzielle Vorgehen um die Qualitätssicherung: Der linke Ast enthält die Spezifikations- und Entwurfsphasen, der rechte Ast die zugehörigen Teststufen. Zu jeder Phase links werden bereits die Testfälle der gegenüberliegenden Stufe geplant (z. B. Anforderungsdefinition – Abnahmetest). Sprints gehören zu Scrum, das Board mit kontinuierlichem Arbeitsfluss zu Kanban.'
    },
    {
      nr: 11, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Im V-Modell wird im Architekturentwurf (technischer Systementwurf) festgelegt, aus welchen Komponenten das System besteht und über welche Schnittstellen sie zusammenarbeiten.',
      frage: 'Welche Teststufe steht dieser Phase im V-Modell gegenüber?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Teststufe in das Kästchen ein.',
      optionen: [
        'Komponententest',
        'Systemtest',
        'Integrationstest',
        'Abnahmetest',
        'Lasttest'
      ],
      loesung: 3,
      erklaerung: 'Im V-Modell gehören zusammen: Anforderungsdefinition – Abnahmetest, funktionaler Systementwurf – Systemtest, technischer Systementwurf (Architektur) – Integrationstest, Komponentenentwurf – Komponententest (Unit-Test). Der Integrationstest prüft das Zusammenspiel der Komponenten über genau die Schnittstellen, die im Architekturentwurf festgelegt wurden.'
    },
    {
      nr: 12, thema: 'vorgehensmodelle', typ: 'zuordnung',
      text: 'Für „WerkPlan“ wird ein Scrum-Team gebildet.',
      frage: 'Welche der folgenden Scrum-Rollen sind den nachstehenden Aufgaben zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Rolle in das Kästchen ein. Eine Rolle kann zwei Aufgaben zugeordnet werden.',
      optionenTitel: 'Scrum-Rollen',
      optionen: [
        'Product Owner',
        'Scrum Master',
        'Entwickler'
      ],
      itemsTitel: 'Aufgaben',
      items: [
        { text: 'Beseitigt Hindernisse, die das Team bei der Arbeit behindern, und achtet auf die Einhaltung der Scrum-Regeln.', loesung: 2 },
        { text: 'Ordnet die Einträge des Product Backlogs nach ihrem Wert für den Kunden.', loesung: 1 },
        { text: 'Setzen die für den Sprint ausgewählten Einträge um und schätzen deren Aufwand.', loesung: 3 },
        { text: 'Vertritt die Interessen der Stakeholder und entscheidet, welche Anforderungen ins Product Backlog kommen.', loesung: 1 }
      ],
      erklaerung: 'Der Product Owner verantwortet den Wert des Produkts: Er pflegt und ordnet das Product Backlog und ist Ansprechpartner der Stakeholder. Der Scrum Master sorgt dafür, dass Scrum verstanden und eingehalten wird, und räumt Hindernisse (Impediments) aus dem Weg; er ist kein Projektleiter mit Weisungsbefugnis. Die Entwickler (Developers) setzen die Einträge des Sprint Backlogs um, organisieren ihre Arbeit selbst und schätzen den Aufwand.'
    },
    {
      nr: 13, thema: 'vorgehensmodelle', typ: 'reihenfolge',
      text: 'Ein Sprint in Scrum besteht aus festgelegten Ereignissen.',
      frage: 'Bringen Sie die folgenden Ereignisse eines Sprints in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für das erste Ereignis die Ziffer 1, für das zweite Ereignis die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Ereignisse',
      items: [
        { text: 'Sprint Review', loesung: 3 },
        { text: 'Sprint Planning', loesung: 1 },
        { text: 'Sprint Retrospective', loesung: 4 },
        { text: 'Daily Scrum', loesung: 2 }
      ],
      erklaerung: 'Ein Sprint beginnt mit dem Sprint Planning (Was wird umgesetzt und wie?). Während des Sprints stimmen die Entwickler täglich im Daily Scrum (höchstens 15 Minuten) ihre Arbeit ab. Am Ende steht zuerst das Sprint Review, in dem das Inkrement mit den Stakeholdern begutachtet wird (Blick auf das Produkt), danach die Sprint Retrospective, in der das Team seine Arbeitsweise verbessert (Blick auf den Prozess). Direkt danach beginnt der nächste Sprint.'
    },
    {
      nr: 14, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Am letzten Tag eines zweiwöchigen Sprints ist eine User Story erst zur Hälfte umgesetzt.',
      frage: 'Wie wird in Scrum mit dieser User Story verfahren?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Sprint wird um die benötigten Tage verlängert.',
        'Sie gilt wegen der zur Hälfte erledigten Arbeit als geliefert.',
        'Sie wird gestrichen und darf nicht erneut eingeplant werden.',
        'Sie kommt zurück ins Product Backlog und wird neu eingeordnet.',
        'Der Scrum Master stellt sie nach dem Sprint allein fertig.'
      ],
      loesung: 4,
      erklaerung: 'Ein Sprint ist eine Timebox mit fester Länge (höchstens ein Monat) und wird nicht verlängert. Zum Inkrement zählt nur, was die „Definition of Done“ vollständig erfüllt. Nicht fertiggestellte Einträge gehen zurück ins Product Backlog; der Product Owner ordnet sie neu ein, sodass sie in einem späteren Sprint erneut ausgewählt werden können.'
    },
    {
      nr: 15, thema: 'vorgehensmodelle', typ: 'zahl',
      text: 'Das Team hat in den letzten drei Sprints 22, 26 und 24 Story Points abgeschlossen. Im Product Backlog stehen für das erste Release noch User Storys mit insgesamt 144 Story Points.',
      frage: 'Ermitteln Sie, wie viele Sprints das Team bei gleichbleibender durchschnittlicher Velocity noch benötigt.',
      anweisung: 'Tragen Sie die Anzahl der Sprints in das Kästchen ein.',
      loesung: 6,
      einheit: 'Sprints',
      erklaerung: 'Die Velocity ist die Menge an Story Points, die ein Team je Sprint abschließt. Durchschnitt: (22 + 26 + 24) / 3 = 24 Story Points je Sprint. Benötigte Sprints: 144 / 24 = 6.'
    },
    {
      nr: 16, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Das Support-Team der Kranich Software GmbH arbeitet mit einem Kanban-Board mit den Spalten „Offen“, „In Arbeit“, „Test“ und „Erledigt“. Über der Spalte „In Arbeit“ steht die Zahl 3.',
      frage: 'Welche Bedeutung hat diese Zahl?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jede Aufgabe darf höchstens drei Tage in dieser Spalte bleiben.',
        'In dieser Spalte dürfen sich höchstens drei Aufgaben gleichzeitig befinden.',
        'An jeder Aufgabe in dieser Spalte müssen drei Personen arbeiten.',
        'Die Spalte wird erst ab drei darin liegenden Aufgaben bearbeitet.',
        'Aufgaben in dieser Spalte haben die Priorität 3.'
      ],
      loesung: 2,
      erklaerung: 'Die Zahl ist ein WIP-Limit (Work in Progress): Es begrenzt, wie viele Aufgaben gleichzeitig in einem Prozessschritt bearbeitet werden. Ist das Limit erreicht, wird erst eine Aufgabe abgeschlossen und weitergezogen, bevor eine neue begonnen wird (Pull-Prinzip). So werden Engpässe sichtbar und die Durchlaufzeit sinkt.'
    },
    {
      nr: 17, thema: 'vorgehensmodelle', typ: 'mehrfach',
      text: 'In der Präsentation für die Geschäftsführung soll Kanban von Scrum abgegrenzt werden.',
      frage: 'Welche Aussagen zu Kanban treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Kanban schreibt die Rollen Product Owner und Scrum Master vor.',
        'Die Arbeit wird in Sprints fester Länge eingeteilt.',
        'Der Arbeitsfluss wird auf einem Board sichtbar gemacht.',
        'Aufgaben werden von der Projektleitung in den nächsten Schritt geschoben (Push-Prinzip).',
        'Aufgaben können laufend und ohne vorgeschriebene feste Iterationen aufgenommen werden.'
      ],
      loesung: [3, 5],
      erklaerung: 'Kanban macht den Arbeitsfluss auf einem Board sichtbar, begrenzt die parallele Arbeit je Spalte (WIP-Limits) und arbeitet nach dem Pull-Prinzip: Wer Kapazität frei hat, zieht die nächste Aufgabe. Anders als Scrum schreibt Kanban weder Rollen noch Sprints vor; die Arbeit fließt kontinuierlich. Kanban eignet sich deshalb gut für Support und Wartung mit laufend eingehenden Aufgaben.'
    },

    // --- Datenschutz (18–25) ---
    {
      nr: 18, thema: 'it-datenschutz', typ: 'zuordnung',
      text: 'Bei der Entwicklung von „WerkPlan“ sind die Grundsätze für die Verarbeitung personenbezogener Daten zu beachten.',
      frage: 'Welche der folgenden Grundsätze sind den nachstehenden Sachverhalten zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Grundsatz in das Kästchen ein.',
      optionenTitel: 'Grundsätze (Art. 5 DSGVO)',
      optionen: [
        'Zweckbindung',
        'Datenminimierung',
        'Speicherbegrenzung',
        'Integrität und Vertraulichkeit'
      ],
      itemsTitel: 'Sachverhalte',
      items: [
        { text: 'Kundendaten werden gelöscht, sobald sie für die Auftragsabwicklung nicht mehr erforderlich sind und keine Aufbewahrungsfrist mehr läuft.', loesung: 3 },
        { text: 'Im Kundenformular werden nur die Angaben abgefragt, die für den Auftrag benötigt werden; das Geburtsdatum gehört nicht dazu.', loesung: 2 },
        { text: 'Die Datenbank ist verschlüsselt, und nur berechtigte Beschäftigte können auf die Kundendaten zugreifen.', loesung: 4 },
        { text: 'Die für einen Auftrag erhobene Telefonnummer wird nicht für Werbeanrufe eines Partnerunternehmens verwendet.', loesung: 1 }
      ],
      erklaerung: 'Art. 5 Abs. 1 DSGVO nennt die Grundsätze: Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz (Buchst. a), Zweckbindung – Daten nur für festgelegte, eindeutige Zwecke (b), Datenminimierung – nur so viele Daten wie nötig (c), Richtigkeit (d), Speicherbegrenzung – nur so lange wie nötig (e) sowie Integrität und Vertraulichkeit – Schutz vor unbefugtem Zugriff, Verlust und Veränderung (f). Nach Abs. 2 muss der Verantwortliche die Einhaltung nachweisen können (Rechenschaftspflicht).'
    },
    {
      nr: 19, thema: 'it-datenschutz', typ: 'einfach',
      text: '„WerkPlan“ speichert unterschiedliche Angaben zu Kunden, Beschäftigten und Aufträgen.',
      frage: 'Welche der folgenden Angaben ist **kein** personenbezogenes Datum im Sinne der DSGVO?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Angabe in das Kästchen ein.',
      optionen: [
        'Die IP-Adresse eines Kunden bei der Anmeldung im Kundenportal',
        'Die Personalnummer eines Monteurs',
        'Die Gesamtzahl der im März über das Kundenportal erteilten Aufträge',
        'Die dienstliche E-Mail-Adresse einer Ansprechpartnerin',
        'Das Kennzeichen des Firmenwagens eines Außendienstmitarbeiters'
      ],
      loesung: 3,
      erklaerung: 'Personenbezogene Daten sind nach Art. 4 Nr. 1 DSGVO alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Es genügt, dass die Person über eine Kennung bestimmt werden kann, z. B. Personalnummer, E-Mail-Adresse, Kfz-Kennzeichen oder eine Online-Kennung wie die IP-Adresse (Erwägungsgrund 30). Eine zusammengefasste Zahl ohne Bezug zu einzelnen Personen ist anonym und fällt nicht unter die DSGVO (Erwägungsgrund 26).'
    },
    {
      nr: 20, thema: 'it-datenschutz', typ: 'mehrfach',
      text: 'Ein Kunde möchte in der Personalverwaltung von „WerkPlan“ weitere Angaben zu seinen Beschäftigten speichern.',
      frage: 'Welche der folgenden Angaben gehören zu den besonderen Kategorien personenbezogener Daten, die nach der DSGVO besonders geschützt sind?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Angaben in die Kästchen ein.',
      optionen: [
        'Bankverbindung',
        'Grad der Behinderung',
        'Privatanschrift',
        'Geburtsdatum',
        'Gewerkschaftszugehörigkeit'
      ],
      loesung: [2, 5],
      erklaerung: 'Art. 9 Abs. 1 DSGVO stellt besondere Kategorien unter erhöhten Schutz: Daten zu rassischer und ethnischer Herkunft, politischen Meinungen, religiösen oder weltanschaulichen Überzeugungen, Gewerkschaftszugehörigkeit, genetische und biometrische Daten, Gesundheitsdaten sowie Daten zum Sexualleben oder zur sexuellen Orientierung. Der Grad der Behinderung ist ein Gesundheitsdatum. Die Verarbeitung ist grundsätzlich untersagt und nur in den Ausnahmefällen des Art. 9 Abs. 2 erlaubt. Bankverbindung, Anschrift und Geburtsdatum sind „normale“ personenbezogene Daten.'
    },
    {
      nr: 21, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Ein Malerbetrieb speichert in „WerkPlan“ Name, Anschrift und Telefonnummer einer Privatkundin, um den von ihr erteilten Auftrag auszuführen und abzurechnen.',
      frage: 'Auf welche Rechtsgrundlage der DSGVO stützt sich diese Verarbeitung?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Rechtsgrundlage in das Kästchen ein.',
      optionen: [
        'Einwilligung der betroffenen Person',
        'Wahrung lebenswichtiger Interessen',
        'Wahrnehmung einer Aufgabe im öffentlichen Interesse',
        'Keine Rechtsgrundlage erforderlich',
        'Erfüllung eines Vertrags mit der betroffenen Person'
      ],
      loesung: 5,
      erklaerung: 'Jede Verarbeitung personenbezogener Daten braucht eine Rechtsgrundlage (Verbot mit Erlaubnisvorbehalt, Art. 6 Abs. 1 DSGVO). Sind die Daten zur Erfüllung eines Vertrags mit der betroffenen Person erforderlich, ist die Verarbeitung nach Art. 6 Abs. 1 Buchst. b DSGVO rechtmäßig; eine Einwilligung (Buchst. a) ist dafür nicht nötig. Für andere Zwecke, etwa Werbung per Telefon, wäre eine eigene Rechtsgrundlage erforderlich.'
    },
    {
      nr: 22, thema: 'it-datenschutz', typ: 'zuordnung',
      text: 'Für das Rechenzentrum, in dem „WerkPlan“ betrieben wird, werden die technischen und organisatorischen Maßnahmen (TOM) dokumentiert.',
      frage: 'Welche der folgenden Kontrollziele sind den nachstehenden Maßnahmen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Kontrollziel in das Kästchen ein.',
      optionenTitel: 'Kontrollziele',
      optionen: [
        'Zutrittskontrolle',
        'Zugangskontrolle',
        'Zugriffskontrolle',
        'Weitergabekontrolle'
      ],
      itemsTitel: 'Maßnahmen',
      items: [
        { text: 'Die Anmeldung am System ist nur mit Benutzername, Passwort und zweitem Faktor möglich.', loesung: 2 },
        { text: 'Kundendaten werden zwischen den Standorten ausschließlich über ein verschlüsseltes VPN übertragen.', loesung: 4 },
        { text: 'Der Serverraum lässt sich nur mit einer personalisierten Chipkarte öffnen; Besucher werden begleitet.', loesung: 1 },
        { text: 'Über ein Rollenkonzept sehen Sachbearbeiter nur die Kundendaten ihrer eigenen Niederlassung.', loesung: 3 }
      ],
      erklaerung: 'Art. 32 DSGVO verpflichtet Verantwortliche und Auftragsverarbeiter zu technischen und organisatorischen Maßnahmen, die ein dem Risiko angemessenes Schutzniveau gewährleisten. Zur Gliederung werden in der Praxis weiterhin die Kontrollziele aus der Anlage zu § 9 BDSG (alte Fassung) verwendet: Zutrittskontrolle – Unbefugte gelangen nicht in die Räume; Zugangskontrolle – Unbefugte können die Systeme nicht nutzen; Zugriffskontrolle – Berechtigte erreichen nur die Daten, für die sie berechtigt sind; Weitergabekontrolle – Daten sind bei Übertragung und Transport geschützt.'
    },
    {
      nr: 23, thema: 'it-datenschutz', typ: 'einfach',
      text: 'In der Dokumentation werden die TOM in technische und organisatorische Maßnahmen unterteilt.',
      frage: 'Welche der folgenden Maßnahmen ist eine organisatorische Maßnahme?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Schulung der Beschäftigten und Verpflichtung auf Vertraulichkeit',
        'Verschlüsselung der Festplatten aller Notebooks',
        'Automatische Bildschirmsperre nach fünf Minuten',
        'Firewall zwischen Internet und Firmennetz',
        'Tägliche automatische Datensicherung auf ein zweites System'
      ],
      loesung: 1,
      erklaerung: 'Technische Maßnahmen werden durch Hard- oder Software umgesetzt (z. B. Verschlüsselung, Firewall, Bildschirmsperre, Datensicherung). Organisatorische Maßnahmen sind Regelungen und Abläufe für Menschen, z. B. Schulungen, Verpflichtung auf Vertraulichkeit, Besucherregelungen oder das Vier-Augen-Prinzip. Art. 32 DSGVO verlangt geeignete Maßnahmen beider Arten.'
    },
    {
      nr: 24, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Für Tests mit realitätsnahen Daten werden in einer Kopie der Datenbank die Kundennamen durch Kennnummern ersetzt. Die Tabelle, die Kennnummern und Namen einander zuordnet, wird getrennt aufbewahrt und ist besonders geschützt.',
      frage: 'Wie wird dieses Verfahren bezeichnet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bezeichnung in das Kästchen ein.',
      optionen: [
        'Anonymisierung',
        'Verschlüsselung',
        'Datenminimierung',
        'Pseudonymisierung',
        'Archivierung'
      ],
      loesung: 4,
      erklaerung: 'Bei der Pseudonymisierung (Art. 4 Nr. 5 DSGVO) lassen sich die Daten ohne zusätzliche, getrennt aufbewahrte Informationen keiner Person mehr zuordnen. Mit der Zuordnungstabelle ist der Personenbezug wiederherstellbar, deshalb bleiben pseudonymisierte Daten personenbezogen. Bei der Anonymisierung ist der Personenbezug dauerhaft entfernt; solche Daten fallen nicht mehr unter die DSGVO. Art. 32 Abs. 1 DSGVO nennt die Pseudonymisierung ausdrücklich als Schutzmaßnahme.'
    },
    {
      nr: 25, thema: 'it-datenschutz', typ: 'zahl',
      text: 'Durch eine falsch gesetzte Berechtigung konnten Unbefugte mehrere Tage lang Kundendaten im Kundenportal einsehen. Für die betroffenen Personen besteht ein Risiko. Der Vorfall wird am Montagmorgen entdeckt.',
      frage: 'Innerhalb wie vieler Stunden nach Bekanntwerden soll der Verantwortliche die Verletzung der Aufsichtsbehörde spätestens melden?',
      anweisung: 'Tragen Sie die Anzahl der Stunden in das Kästchen ein.',
      loesung: 72,
      einheit: 'Stunden',
      erklaerung: 'Nach Art. 33 Abs. 1 DSGVO meldet der Verantwortliche eine Verletzung des Schutzes personenbezogener Daten unverzüglich und möglichst binnen 72 Stunden, nachdem sie ihm bekannt wurde, der zuständigen Aufsichtsbehörde. Die Meldung entfällt nur, wenn voraussichtlich kein Risiko für die betroffenen Personen besteht. Bei hohem Risiko sind zusätzlich die Betroffenen zu benachrichtigen (Art. 34 DSGVO).'
    },

    // --- Betroffenenrechte (26–30) ---
    {
      nr: 26, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Herr Albers bittet die Kranich Software GmbH schriftlich um Auskunft über die zu seiner Person gespeicherten Daten.',
      frage: 'Welche der folgenden Leistungen muss die Kranich Software GmbH im Rahmen der Auskunft erbringen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Leistung in das Kästchen ein.',
      optionen: [
        'Herausgabe des Quellcodes der Kundenverwaltung',
        'Auskunft über die Daten anderer Kunden aus Krefeld',
        'Übermittlung seiner Daten an einen Anbieter seiner Wahl',
        'Kostenlose Kopie seiner gespeicherten personenbezogenen Daten',
        'Vorlage der Arbeitsverträge aller Beschäftigten mit Datenzugriff'
      ],
      loesung: 4,
      erklaerung: 'Nach Art. 15 Abs. 1 DSGVO erhält die betroffene Person Auskunft über ihre Daten sowie u. a. über Zwecke, Empfänger, Speicherdauer und Herkunft der Daten. Nach Art. 15 Abs. 3 DSGVO stellt der Verantwortliche eine Kopie der Daten zur Verfügung; die erste Kopie ist unentgeltlich. Daten anderer Personen und Geschäftsgeheimnisse wie Quellcode sind nicht herauszugeben (Art. 15 Abs. 4 DSGVO). Die Übermittlung an einen anderen Anbieter gehört zum Recht auf Datenübertragbarkeit (Art. 20 DSGVO).'
    },
    {
      nr: 27, thema: 'it-datenschutz', typ: 'datum',
      text: 'Der Auskunftsantrag von Herrn Albers geht am Dienstag, 09.03.2027, bei der Kranich Software GmbH ein. Eine Verlängerung der Frist ist nicht erforderlich.',
      kasten: {
        titel: 'Art. 12 Abs. 3 Satz 1 DSGVO',
        absaetze: [
          'Der Verantwortliche stellt der betroffenen Person Informationen über die auf Antrag gemäß den Artikeln 15 bis 22 ergriffenen Maßnahmen unverzüglich, in jedem Fall aber innerhalb eines Monats nach Eingang des Antrags zur Verfügung.'
        ]
      },
      frage: 'Mit Ablauf welchen Tages endet die Frist für die Auskunft spätestens?',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '09.04.2027',
      erklaerung: 'Die Monatsfrist beginnt mit dem Eingang des Antrags; der Eingangstag selbst wird nicht mitgezählt. Sie endet mit Ablauf des Tages im Folgemonat, der dieselbe Zahl trägt wie der Eingangstag (Art. 3 der Verordnung (EWG, Euratom) Nr. 1182/71; ebenso §§ 187 Abs. 1, 188 Abs. 2 BGB). Der 09.04.2027 ist ein Freitag und kein Feiertag, die Frist endet also mit Ablauf dieses Tages. Bei komplexen oder zahlreichen Anträgen kann die Frist um weitere zwei Monate verlängert werden; darüber ist die betroffene Person innerhalb eines Monats zu unterrichten (Art. 12 Abs. 3 Satz 2 und 3 DSGVO).'
    },
    {
      nr: 28, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Herr Albers kündigt seinen Vertrag und verlangt die Löschung aller zu seiner Person gespeicherten Daten. Für seine Rechnungen laufen noch gesetzliche Aufbewahrungsfristen.',
      frage: 'Wie muss die Kranich Software GmbH mit den Rechnungsdaten verfahren?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Sie löscht die Rechnungsdaten sofort vollständig.',
        'Sie nutzt die Rechnungsdaten weiter uneingeschränkt für Werbung.',
        'Sie bewahrt die Rechnungsdaten auf und nutzt sie nur noch für die Aufbewahrung.',
        'Sie benötigt für die Aufbewahrung eine neue Einwilligung von Herrn Albers.',
        'Sie übergibt die Rechnungen zur Aufbewahrung an die Aufsichtsbehörde.'
      ],
      loesung: 3,
      erklaerung: 'Das Recht auf Löschung (Art. 17 Abs. 1 DSGVO) gilt nicht, soweit die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist (Art. 17 Abs. 3 Buchst. b DSGVO), etwa wegen der Aufbewahrungspflichten nach § 147 AO und § 257 HGB. Die Rechnungsdaten bleiben gespeichert, dürfen aber nur noch für diesen Zweck verwendet werden; nach Ablauf der Fristen sind sie zu löschen. Alle übrigen Daten, die nicht mehr benötigt werden, löscht das Unternehmen sofort.'
    },
    {
      nr: 29, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Herr Albers wechselt zu einem anderen Softwareanbieter. Er verlangt von der Kranich Software GmbH die Daten, die er selbst bereitgestellt hat, in einem strukturierten, gängigen und maschinenlesbaren Format.',
      frage: 'Welches Recht macht Herr Albers damit geltend?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Recht in das Kästchen ein.',
      optionen: [
        'Recht auf Auskunft',
        'Recht auf Berichtigung',
        'Recht auf Datenübertragbarkeit',
        'Recht auf Einschränkung der Verarbeitung',
        'Widerspruchsrecht'
      ],
      loesung: 3,
      erklaerung: 'Nach Art. 20 Abs. 1 DSGVO hat die betroffene Person das Recht, die Daten, die sie einem Verantwortlichen bereitgestellt hat, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, z. B. als CSV-, JSON- oder XML-Datei. Soweit technisch machbar, kann sie auch die direkte Übermittlung an den neuen Anbieter verlangen (Art. 20 Abs. 2 DSGVO). Das Recht gilt für Verarbeitungen auf Grundlage einer Einwilligung oder eines Vertrags, die automatisiert erfolgen.'
    },
    {
      nr: 30, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Herr Albers erhält Werbebriefe der Kranich Software GmbH zu neuen Produkten. Die Werbung stützt sich auf das berechtigte Interesse des Unternehmens. Herr Albers widerspricht dieser Verwendung seiner Daten.',
      frage: 'Welche Aussage zu diesem Widerspruch trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Daten dürfen nicht mehr für Direktwerbung verwendet werden.',
        'Der Widerspruch ist nur mit einer Begründung wirksam.',
        'Die Werbung darf bis zum Jahresende fortgesetzt werden.',
        'Der Widerspruch führt zur Löschung aller Vertragsdaten.',
        'Ein Widerspruch ist nur per Einschreiben möglich.'
      ],
      loesung: 1,
      erklaerung: 'Gegen die Verarbeitung zum Zweck der Direktwerbung kann die betroffene Person jederzeit Widerspruch einlegen (Art. 21 Abs. 2 DSGVO). Eine Begründung ist dafür nicht nötig, und der Verantwortliche darf die Daten danach nicht mehr für Direktwerbung verarbeiten (Art. 21 Abs. 3 DSGVO). Daten, die für andere Zwecke wie die Abwicklung von Verträgen nötig sind, bleiben davon unberührt. Eine bestimmte Form ist für den Widerspruch nicht vorgeschrieben.'
    }
  ]
});
