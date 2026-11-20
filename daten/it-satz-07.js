// IT-Theorie-Übungssatz 7 – gemischt: Schnittstellen, Datenstrukturen, Vorgehensmodelle, Datenschutz, Entwurfsmuster (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_IT_SAETZE = window.WISO_IT_SAETZE || []).push({
  id: 'it-07',
  titel: 'IT-Theorie-Übungssatz 7',
  untertitel: 'Gemischt: Schnittstellen, Datenstrukturen, Vorgehensmodelle, Datenschutz und Entwurfsmuster',
  ausgangssituation:
    'Sie sind Mitarbeiter/-in der Erftwerk Software GmbH mit Sitz in Grevenbroich. Das Unternehmen entwickelt die App und die Serverplattform für den E-Bike-Verleih „ErftRad“ mehrerer Städte im Rhein-Kreis Neuss. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 6,
      text: 'Die App kommuniziert über eine REST-Schnittstelle mit der Serverplattform. Stationen sind unter /stationen, Fahrräder unter /fahrraeder und Ausleihen unter /ausleihen erreichbar. Partnersysteme der Städte liefern ihre Daten teilweise als XML.'
    },
    {
      von: 7, bis: 12,
      text: 'Die Serverplattform verwaltet Fahrräder, Stationen und Ausleihvorgänge in verschiedenen Datenstrukturen. Die Entwicklerin Frau Krings erklärt sie den neuen Auszubildenden.'
    },
    {
      von: 13, bis: 18,
      text: 'ErftRad wird mit Scrum weiterentwickelt, der Kundensupport arbeitet mit Kanban. Der Scrum Master Herr Odendahl führt neue Teammitglieder in die agile Arbeitsweise ein.'
    },
    {
      von: 19, bis: 24,
      text: 'Für jede Ausleihe speichert ErftRad Kundendaten, Zahlungsdaten und den GPS-Verlauf der Fahrt. Der externe Datenschutzbeauftragte Herr Esser prüft die Verarbeitung.'
    },
    {
      von: 25, bis: 30,
      text: 'Für die nächste Version der Serverplattform überarbeitet das Team die Architektur. Die Softwarearchitektin Frau Lenzen bespricht die eingesetzten Entwurfsmuster.'
    }
  ],

  aufgaben: [
    // --- Schnittstellen und Datenformate (1–6) ---
    {
      nr: 1, thema: 'schnittstellen', typ: 'einfach',
      text: 'Ein fehlerhaft programmiertes Partnersystem sendet mehrere Hundert Anfragen pro Sekunde an die Plattform. Die Plattform lässt je Client höchstens 100 Anfragen pro Minute zu und weist weitere Anfragen ab.',
      frage: 'Welcher Statuscode ist für die abgewiesenen Anfragen vorgesehen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Statuscode in das Kästchen ein.',
      optionen: [
        '403',
        '409',
        '503',
        '429',
        '400'
      ],
      loesung: 4,
      erklaerung: '429 Too Many Requests meldet, dass ein Client in einem Zeitraum zu viele Anfragen gesendet hat (Rate Limiting, RFC 6585); mit dem Header Retry-After kann der Server mitteilen, wann wieder Anfragen möglich sind. 503 Service Unavailable betrifft die Verfügbarkeit des gesamten Dienstes, 403 Forbidden eine fehlende Berechtigung, 409 Conflict einen Konflikt mit dem Zustand der Ressource, 400 Bad Request eine fehlerhaft aufgebaute Anfrage.'
    },
    {
      nr: 2, thema: 'schnittstellen', typ: 'einfach',
      text: 'Die App sendet POST /ausleihen mit einem JSON-Dokument. Darin fehlt das Pflichtfeld „fahrradId“.',
      frage: 'Welcher Statuscode ist für die Antwort des Servers vorgesehen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Statuscode in das Kästchen ein.',
      optionen: [
        '400',
        '401',
        '201',
        '404',
        '500'
      ],
      loesung: 1,
      erklaerung: '400 Bad Request zeigt, dass der Server die Anfrage wegen eines Fehlers auf Seiten des Clients nicht verarbeitet, z. B. bei fehlenden Pflichtfeldern oder ungültigem JSON. Die Antwort sollte den Fehler beschreiben, damit die App ihn anzeigen kann. 201 Created käme nur bei erfolgreich angelegter Ausleihe, 401 bei fehlender Anmeldung, 404 bei unbekannter Ressource, 500 bei einem Fehler im Server.'
    },
    {
      nr: 3, thema: 'schnittstellen', typ: 'zahl',
      text: 'Die App ruft GET /stationen/7/fahrraeder auf und erhält folgende Antwort. Ausleihbar ist ein Fahrrad mit dem Status „frei“ und einem Akkustand von mindestens 20 Prozent.',
      kasten: {
        titel: 'JSON-Dokument',
        code: [
          '{',
          '  "station": "Bahnhof Grevenbroich",',
          '  "fahrraeder": [',
          '    { "id": 101, "status": "frei", "akku": 85 },',
          '    { "id": 102, "status": "ausgeliehen", "akku": 40 },',
          '    { "id": 103, "status": "frei", "akku": 15 },',
          '    { "id": 104, "status": "frei", "akku": 92 },',
          '    { "id": 105, "status": "wartung", "akku": 0 }',
          '  ]',
          '}'
        ]
      },
      frage: 'Ermitteln Sie, wie viele Fahrräder an dieser Station ausleihbar sind.',
      anweisung: 'Tragen Sie die Anzahl der Fahrräder in das Kästchen ein.',
      loesung: 2,
      einheit: 'Fahrräder',
      erklaerung: 'Das Array „fahrraeder“ enthält fünf Objekte. Den Status „frei“ haben die Fahrräder 101, 103 und 104. Fahrrad 103 hat nur 15 Prozent Akkustand und ist deshalb nicht ausleihbar. Ausleihbar sind die Fahrräder 101 (85 Prozent) und 104 (92 Prozent), also 2 Fahrräder.'
    },
    {
      nr: 4, thema: 'schnittstellen', typ: 'einfach',
      text: 'Ein Partnersystem liefert die Daten einer Station als XML:',
      kasten: {
        titel: 'XML-Dokument',
        code: [
          '<station id="3" name="Markt">',
          '  <fahrrad id="201" akku="80"/>',
          '  <fahrrad id="202" akku="35"/>',
          '  <standort>',
          '    <lat>51.0884</lat>',
          '    <lon>6.5872</lon>',
          '  </standort>',
          '</station>'
        ]
      },
      frage: 'Wie viele Kindelemente hat das Element „station“?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anzahl in das Kästchen ein.',
      optionen: [
        '1 Kindelement',
        '2 Kindelemente',
        '3 Kindelemente',
        '4 Kindelemente',
        '5 Kindelemente'
      ],
      loesung: 3,
      erklaerung: 'Kindelemente sind die Elemente, die direkt in „station“ stehen: zweimal „fahrrad“ und einmal „standort“, also 3. „lat“ und „lon“ sind Kindelemente von „standort“ und damit Enkelelemente von „station“. id und name sind Attribute, keine Elemente. <fahrrad …/> ist ein leeres Element, bei dem der Schrägstrich das End-Tag ersetzt.'
    },
    {
      nr: 5, thema: 'schnittstellen', typ: 'einfach', codeOptionen: true,
      text: 'Eine Kundin leiht das Fahrrad 101 aus. Die App legt dazu eine neue Ausleihe an; die Fahrradnummer steht im JSON-Nachrichtenrumpf der Anfrage.',
      frage: 'Welcher Aufruf entspricht den REST-Konventionen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Aufruf in das Kästchen ein.',
      optionen: [
        'GET /ausleihen?fahrrad=101',
        'DELETE /fahrraeder/101',
        'POST /ausleihen',
        'GET /ausleiheAnlegen?fahrrad=101',
        'PUT /ausleihen/neu'
      ],
      loesung: 3,
      erklaerung: 'Eine neue Ressource wird mit POST an die Sammlung gesendet: POST /ausleihen mit dem Rumpf {"fahrradId": 101}. Der Server vergibt die Nummer der Ausleihe und antwortet mit 201 Created und der Adresse der neuen Ressource im Header Location. GET darf keine Daten verändern und eignet sich nicht zum Anlegen; Verben wie „ausleiheAnlegen“ gehören nicht in den Pfad.'
    },
    {
      nr: 6, thema: 'schnittstellen', typ: 'zuordnung',
      text: 'Für die Fehlerbehandlung in der App wertet das Team die Statuscodes der Plattform aus.',
      frage: 'Welche der folgenden Statuscodes sind den nachstehenden Situationen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Statuscode in das Kästchen ein.',
      optionenTitel: 'Statuscodes',
      optionen: [
        '200',
        '201',
        '204',
        '401',
        '404'
      ],
      itemsTitel: 'Situationen',
      items: [
        { text: 'Die Anfrage enthält kein Zugangstoken.', loesung: 4 },
        { text: 'Die Liste aller Stationen wird erfolgreich geliefert.', loesung: 1 },
        { text: 'Die App ruft /fahrraeder/999 auf; ein Fahrrad mit dieser Nummer gibt es nicht.', loesung: 5 },
        { text: 'Eine Reservierung wurde erfolgreich gelöscht; die Antwort hat keinen Inhalt.', loesung: 3 }
      ],
      erklaerung: '200 OK: erfolgreiche Anfrage mit Inhalt, z. B. bei GET. 201 Created: neue Ressource angelegt. 204 No Content: erfolgreich ohne Inhalt in der Antwort, z. B. nach DELETE. 401 Unauthorized: Anmeldung fehlt oder ist ungültig. 404 Not Found: Die angefragte Ressource existiert nicht (RFC 9110).'
    },

    // --- Datenstrukturen (7–12) ---
    {
      nr: 7, thema: 'datenstrukturen', typ: 'zahl',
      text: 'Die Stationen einer Stadt werden in einem Binärbaum der Höhe 3 verwaltet. Die Höhe ist die Anzahl der Kanten auf dem längsten Weg von der Wurzel zu einem Blatt. Jeder innere Knoten hat genau zwei Kinder, und alle Blätter liegen auf derselben Ebene.',
      frage: 'Ermitteln Sie die Anzahl der Knoten dieses Baums.',
      anweisung: 'Tragen Sie die Anzahl der Knoten in die Kästchen ein.',
      loesung: 15,
      einheit: 'Knoten',
      erklaerung: 'Der Baum hat vier Ebenen (Höhe 3 plus die Ebene der Wurzel). Von Ebene zu Ebene verdoppelt sich die Anzahl der Knoten: 1 + 2 + 4 + 8 = 15. Allgemein hat ein solcher vollständiger Binärbaum der Höhe h genau 2^(h+1) − 1 Knoten, davon 2^h Blätter.'
    },
    {
      nr: 8, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Die Fahrräder einer Station sind in einer einfach verketteten Liste gespeichert. Die Akkustände lauten vom Kopf an: 80, 25, 10, 55, 29. Frau Krings zeigt dazu folgenden Pseudocode:',
      kasten: {
        titel: 'Pseudocode',
        code: [
          'anzahl ← 0',
          'k ← kopf',
          'SOLANGE k ≠ NULL',
          '    WENN k.akku < 30 DANN',
          '        anzahl ← anzahl + 1',
          '    ENDE WENN',
          '    k ← k.naechster',
          'ENDE SOLANGE',
          'AUSGABE anzahl'
        ]
      },
      frage: 'Welchen Wert gibt der Pseudocode aus?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Wert in das Kästchen ein.',
      optionen: [
        '1',
        '2',
        '3',
        '4',
        '5'
      ],
      loesung: 3,
      erklaerung: 'Die Schleife durchläuft die Liste vom Kopf bis zum Ende (k = NULL) und zählt alle Knoten mit einem Akkustand unter 30: 25, 10 und 29. Ausgabe: 3. Ein Knoten mit genau 30 würde nicht gezählt, weil die Bedingung „kleiner als“ lautet. Ohne die Anweisung k ← k.naechster entstünde eine Endlosschleife.'
    },
    {
      nr: 9, thema: 'datenstrukturen', typ: 'mehrfach',
      text: 'Die Plattform findet Fahrräder über ihre Nummer in einer Hashtabelle. Frau Krings bespricht die Anforderungen an die Hashfunktion.',
      frage: 'Welche Eigenschaften sollte eine gute Hashfunktion besitzen?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Eigenschaften in die Kästchen ein.',
      optionen: [
        'Sie liefert für denselben Schlüssel bei jedem Aufruf einen zufälligen Platz.',
        'Sie verteilt die Schlüssel möglichst gleichmäßig auf alle Plätze.',
        'Sie sortiert die Schlüssel aufsteigend.',
        'Sie vergrößert die Tabelle bei jedem Einfügen.',
        'Sie ist schnell berechenbar.'
      ],
      loesung: [2, 5],
      erklaerung: 'Eine Hashfunktion muss deterministisch sein: Derselbe Schlüssel ergibt immer denselben Platz, sonst wäre er nicht wiederzufinden. Sie soll die Schlüssel gleichmäßig verteilen, damit wenige Kollisionen entstehen, und schnell berechenbar sein, weil sie bei jedem Zugriff ausgeführt wird. Eine Sortierung leistet sie nicht; vergrößert wird die Tabelle nur bei hohem Belegungsfaktor, nicht bei jedem Einfügen.'
    },
    {
      nr: 10, thema: 'datenstrukturen', typ: 'zuordnung',
      text: 'Frau Krings vergleicht den Aufwand typischer Operationen bei n Elementen.',
      frage: 'Welche der folgenden Komplexitätsklassen sind den nachstehenden Operationen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Komplexitätsklasse in das Kästchen ein. Eine Komplexitätsklasse kann zwei Operationen zugeordnet werden.',
      optionenTitel: 'Komplexitätsklassen',
      optionen: [
        'O(1)',
        'O(log n)',
        'O(n)',
        'O(n²)'
      ],
      itemsTitel: 'Operationen',
      items: [
        { text: 'Suche in einer unsortierten verketteten Liste', loesung: 3 },
        { text: 'Zugriff auf ein Array-Element über seinen Index', loesung: 1 },
        { text: 'Vergleich jedes Listenelements mit jedem anderen Element', loesung: 4 },
        { text: 'Suche in einem ausgeglichenen binären Suchbaum', loesung: 2 },
        { text: 'Entnahme des obersten Elements eines Stacks', loesung: 1 }
      ],
      erklaerung: 'O(1): konstanter Aufwand unabhängig von der Datenmenge, z. B. Indexzugriff im Array oder pop() beim Stack. O(log n): Der Suchbereich halbiert sich mit jedem Schritt, z. B. im ausgeglichenen binären Suchbaum. O(n): Im ungünstigsten Fall wird jedes Element einmal betrachtet, z. B. bei der Suche in einer unsortierten Liste. O(n²): Jedes Element wird mit jedem anderen verglichen, z. B. bei der einfachen Suche nach Duplikaten.'
    },
    {
      nr: 11, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Eine rekursive Methode zur Berechnung der Tourlänge ruft sich wegen eines Programmierfehlers ohne Abbruchbedingung immer wieder selbst auf.',
      frage: 'Welcher Fehler tritt dabei auf?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Fehler in das Kästchen ein.',
      optionen: [
        'Stack Underflow',
        'Kollision in der Hashtabelle',
        'Division durch null',
        'Stack Overflow',
        'Deadlock'
      ],
      loesung: 4,
      erklaerung: 'Jeder Methodenaufruf legt einen Eintrag mit Parametern, lokalen Variablen und Rücksprungadresse auf den Aufrufstapel (Call Stack). Fehlt die Abbruchbedingung, wächst der Stapel, bis der dafür reservierte Speicher erschöpft ist: Es kommt zum Stack Overflow (in Java z. B. StackOverflowError). Jede Rekursion braucht deshalb einen Basisfall, der ohne weiteren Selbstaufruf endet.'
    },
    {
      nr: 12, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Ein Binärbaum hat die Wurzel 8. Ihr linkes Kind ist 4 mit den Kindern 2 (links) und 6 (rechts), ihr rechtes Kind ist 10. Der Baum wird in Postorder durchlaufen: zuerst der linke Teilbaum, dann der rechte Teilbaum, zuletzt der Knoten selbst.',
      frage: 'In welcher Reihenfolge werden die Schlüssel ausgegeben?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Reihenfolge in das Kästchen ein.',
      optionen: [
        '8, 4, 2, 6, 10',
        '2, 4, 6, 8, 10',
        '8, 4, 10, 2, 6',
        '10, 8, 6, 4, 2',
        '2, 6, 4, 10, 8'
      ],
      loesung: 5,
      erklaerung: 'Postorder (links – rechts – Knoten): Zuerst wird der linke Teilbaum der Wurzel vollständig ausgegeben (2, 6, 4), dann der rechte (10), zuletzt die Wurzel 8. Reihenfolge 1 ist Preorder, 2 Inorder, 3 der ebenenweise Durchlauf. Postorder eignet sich z. B. zum Löschen eines Baums, weil jeder Knoten erst nach seinen Kindern verarbeitet wird.'
    },

    // --- Vorgehensmodelle (13–18) ---
    {
      nr: 13, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Herr Odendahl erklärt einem neuen Teammitglied, dass ErftRad inkrementell entwickelt wird.',
      frage: 'Welche Aussage beschreibt inkrementelles Vorgehen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Alle Funktionen werden gemeinsam am Projektende ausgeliefert.',
        'Jede Phase wird genau einmal durchlaufen.',
        'Die Software entsteht in aufeinander aufbauenden, nutzbaren Teilen.',
        'Anforderungen werden nach Projektbeginn nicht mehr geändert.',
        'Der Auftraggeber sieht die Software erst bei der Abnahme.'
      ],
      loesung: 3,
      erklaerung: 'Beim inkrementellen Vorgehen wird die Software in Teilen (Inkrementen) ausgeliefert, die jeweils nutzbar sind und auf den vorherigen aufbauen. Iterativ bedeutet, dass Abläufe wiederholt durchlaufen werden, um das Ergebnis schrittweise zu verbessern. Scrum verbindet beides: In jedem Sprint entsteht ein nutzbares Inkrement. Die übrigen Aussagen beschreiben ein streng sequenzielles Vorgehen wie das Wasserfallmodell.'
    },
    {
      nr: 14, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Im Refinement schätzt das Team den Aufwand von User Storys mit Zahlenkarten. Alle decken ihre Karten gleichzeitig auf. Bei großen Abweichungen begründen die Teammitglieder mit der höchsten und der niedrigsten Schätzung ihre Wahl, danach wird erneut geschätzt.',
      frage: 'Wie wird dieses Schätzverfahren bezeichnet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bezeichnung in das Kästchen ein.',
      optionen: [
        'Function-Point-Analyse',
        'Planning Poker',
        'Drei-Punkt-Schätzung',
        'COCOMO',
        'Analogieschätzung'
      ],
      loesung: 2,
      erklaerung: 'Beim Planning Poker schätzen alle gleichzeitig und unabhängig, meist in Story Points mit Karten einer an die Fibonacci-Folge angelehnten Reihe (1, 2, 3, 5, 8, 13 …). So orientiert sich niemand an der zuerst genannten Zahl. Die Function-Point-Analyse bewertet den Funktionsumfang nach festen Regeln, die Drei-Punkt-Schätzung kombiniert optimistische, wahrscheinliche und pessimistische Werte, COCOMO ist ein Kostenmodell auf Basis der Programmgröße, die Analogieschätzung vergleicht mit abgeschlossenen Projekten.'
    },
    {
      nr: 15, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Am Kanban-Board des Kundensupports sind durchschnittlich 12 Tickets in Bearbeitung. Pro Arbeitstag werden durchschnittlich 4 Tickets abgeschlossen. Es gilt: durchschnittliche Durchlaufzeit = Tickets in Bearbeitung ÷ abgeschlossene Tickets pro Arbeitstag.',
      frage: 'Wie lang ist die durchschnittliche Durchlaufzeit eines Tickets?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Durchlaufzeit in das Kästchen ein.',
      optionen: [
        '0,33 Arbeitstage',
        '3 Arbeitstage',
        '4 Arbeitstage',
        '8 Arbeitstage',
        '48 Arbeitstage'
      ],
      loesung: 2,
      erklaerung: 'Durchlaufzeit = 12 ÷ 4 = 3 Arbeitstage (Little’s Law). Die Formel zeigt, warum Kanban die parallele Arbeit begrenzt: Sinkt die Zahl der Tickets in Bearbeitung bei gleichem Durchsatz, sinkt auch die Durchlaufzeit. Bei einem WIP von 8 Tickets wären es nur noch 2 Arbeitstage.'
    },
    {
      nr: 16, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Ein neues Teammitglied fragt Herrn Odendahl nach dem Zweck des Daily Scrum.',
      frage: 'Welche Aussage zum Daily Scrum trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Das Daily Scrum …',
      optionen: [
        'ist ein Statusbericht der Entwickler an die Geschäftsführung.',
        'dient der Abnahme fertiger User Storys durch den Kunden.',
        'findet einmal pro Sprint mit allen Stakeholdern statt.',
        'dauert je nach Teamgröße bis zu zwei Stunden.',
        'dient der täglichen Abstimmung der Entwickler auf das Sprint-Ziel.'
      ],
      loesung: 5,
      erklaerung: 'Das Daily Scrum ist ein tägliches Ereignis von höchstens 15 Minuten für die Entwickler. Sie prüfen den Fortschritt in Richtung Sprint-Ziel und passen ihren Plan für den nächsten Arbeitstag an (Scrum Guide). Es ist kein Statusbericht an Vorgesetzte. Fertige Ergebnisse werden im Sprint Review mit den Stakeholdern besprochen.'
    },
    {
      nr: 17, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Herr Odendahl erläutert die Regeln für die Dauer eines Sprints.',
      frage: 'Welche Aussage zur Dauer eines Sprints trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Sprints haben eine feste Dauer von höchstens einem Monat.',
        'Ein Sprint endet erst mit der Fertigstellung aller geplanten Einträge.',
        'Die Dauer jedes Sprints legt der Kunde einzeln fest.',
        'Ein Sprint dauert mindestens drei Monate.',
        'Bei Verzug wird ein Sprint um eine Woche verlängert.'
      ],
      loesung: 1,
      erklaerung: 'Sprints sind Zeitfenster (Timeboxes) fester Länge von höchstens einem Monat; ein neuer Sprint beginnt unmittelbar nach dem vorherigen (Scrum Guide). Die feste Länge sorgt für einen gleichmäßigen Rhythmus und regelmäßige Rückmeldung der Stakeholder. Nicht fertige Einträge gehen zurück ins Product Backlog; der Sprint wird nicht verlängert.'
    },
    {
      nr: 18, thema: 'vorgehensmodelle', typ: 'einfach',
      text: 'Nach dem Sprint Planning zeigt Herr Odendahl dem Team das neue Sprint Backlog.',
      frage: 'Welche Aussage zum Sprint Backlog trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Das Sprint Backlog …',
      optionen: [
        'ist die vollständige, nach Wert geordnete Liste aller Produktanforderungen.',
        'umfasst das Sprint-Ziel, die ausgewählten Einträge und den Umsetzungsplan.',
        'wird vom Kunden geschrieben und vertraglich festgelegt.',
        'ist die Summe aller fertigen Einträge eines Sprints.',
        'wird ausschließlich vom Scrum Master gepflegt.'
      ],
      loesung: 2,
      erklaerung: 'Das Sprint Backlog besteht laut Scrum Guide aus dem Sprint-Ziel (Wozu?), den für den Sprint ausgewählten Einträgen des Product Backlogs (Was?) und dem Plan der Entwickler für die Umsetzung (Wie?). Es gehört den Entwicklern und wird während des Sprints laufend aktualisiert. Die geordnete Liste aller Anforderungen ist das Product Backlog, die Summe der fertigen Einträge das Inkrement.'
    },

    // --- Datenschutz (19–24) ---
    {
      nr: 19, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Die GPS-Verläufe aller Fahrten bleiben nach Abschluss der Abrechnung ohne festgelegtes Ende gespeichert. Die Geschäftsführung möchte sie für mögliche spätere Auswertungen aufheben.',
      frage: 'Gegen welchen Grundsatz der DSGVO verstößt diese Praxis in erster Linie?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Grundsatz in das Kästchen ein.',
      optionen: [
        'Richtigkeit',
        'Speicherbegrenzung',
        'Transparenz',
        'Integrität und Vertraulichkeit',
        'Rechenschaftspflicht'
      ],
      loesung: 2,
      erklaerung: 'Nach dem Grundsatz der Speicherbegrenzung (Art. 5 Abs. 1 Buchst. e DSGVO) dürfen personenbezogene Daten nur so lange in identifizierbarer Form gespeichert werden, wie es für den Zweck erforderlich ist. Ist die Fahrt abgerechnet, ist der GPS-Verlauf zu löschen oder zu anonymisieren, sofern keine Aufbewahrungspflicht besteht. Bewegungsprofile sind besonders aussagekräftig, weil sie Rückschlüsse auf Wohnort, Arbeitsplatz und Gewohnheiten zulassen. Für spätere Auswertungen genügen meist anonymisierte Daten.'
    },
    {
      nr: 20, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Eine Kundin aus Neuss ist mit der Antwort der Erftwerk Software GmbH auf ihren Auskunftsantrag nicht zufrieden. Sie möchte sich bei der zuständigen Aufsichtsbehörde beschweren.',
      frage: 'An welche Stelle kann sie sich wenden?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Stelle in das Kästchen ein.',
      optionen: [
        'Bundesamt für Sicherheit in der Informationstechnik',
        'Industrie- und Handelskammer Mittlerer Niederrhein',
        'Bundesnetzagentur',
        'Landesbeauftragte für Datenschutz und Informationsfreiheit NRW',
        'Gewerbeamt der Stadt Grevenbroich'
      ],
      loesung: 4,
      erklaerung: 'Jede betroffene Person kann sich bei einer Aufsichtsbehörde beschweren (Art. 77 DSGVO). Für Unternehmen mit Sitz in Nordrhein-Westfalen ist die Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (LDI NRW) in Düsseldorf zuständig. Das BSI ist für die Informationssicherheit zuständig, nicht für die Datenschutzaufsicht über Unternehmen. Kammer, Bundesnetzagentur und Gewerbeamt sind keine Datenschutzaufsichtsbehörden für die GmbH.'
    },
    {
      nr: 21, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Auf der Website von ErftRad soll ein Analysewerkzeug Cookies auf den Endgeräten der Besucher speichern, um sie bei späteren Besuchen wiederzuerkennen.',
      frage: 'Welche Voraussetzung gilt für den Einsatz dieser Cookies?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Voraussetzung in das Kästchen ein.',
      optionen: [
        'Ein Hinweis im Impressum genügt.',
        'Verschlüsselte Cookies sind ohne Einwilligung zulässig.',
        'Die Besucher müssen vorher einwilligen.',
        'Eine Einwilligung ist nur bei Besuchern unter 16 Jahren nötig.',
        'Die Aufsichtsbehörde muss den Einsatz genehmigen.'
      ],
      loesung: 3,
      erklaerung: 'Das Speichern von Informationen auf dem Endgerät und der Zugriff darauf sind nach § 25 Abs. 1 TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz, früher TTDSG) nur mit Einwilligung zulässig. Ausgenommen sind Cookies, die für den vom Nutzer gewünschten Dienst unbedingt erforderlich sind, z. B. für den Warenkorb oder die Anmeldung (§ 25 Abs. 2 TDDDG). Analysecookies gehören nicht dazu. Die Einwilligung muss vor dem Setzen eingeholt werden; für die weitere Verarbeitung der Daten gilt zusätzlich die DSGVO.'
    },
    {
      nr: 22, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Herr Esser bittet die Geschäftsführung um eine Übersicht aller Verarbeitungen mit Zwecken, Kategorien der betroffenen Personen und Daten, Empfängern und Löschfristen.',
      frage: 'Um welches Dokument handelt es sich?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Dokument in das Kästchen ein.',
      optionen: [
        'Datenschutzerklärung der Website',
        'Vertrag zur Auftragsverarbeitung',
        'Datenschutz-Folgenabschätzung',
        'Löschkonzept',
        'Verzeichnis von Verarbeitungstätigkeiten'
      ],
      loesung: 5,
      erklaerung: 'Nach Art. 30 Abs. 1 DSGVO führt jeder Verantwortliche ein Verzeichnis aller Verarbeitungstätigkeiten. Es enthält u. a. Name und Kontaktdaten des Verantwortlichen, Zwecke, Kategorien betroffener Personen und personenbezogener Daten, Empfänger, Übermittlungen in Drittländer, Löschfristen und eine allgemeine Beschreibung der TOM. Es ist schriftlich oder elektronisch zu führen und der Aufsichtsbehörde auf Anfrage vorzulegen. Ein Löschkonzept regelt nur die Löschfristen und deren Umsetzung.'
    },
    {
      nr: 23, thema: 'it-datenschutz', typ: 'mehrfach',
      text: 'Durch eine Sicherheitslücke konnten Unbefugte die Ausleihhistorie von rund 1 200 Kunden abrufen. Die Erftwerk Software GmbH meldet den Vorfall der Aufsichtsbehörde.',
      frage: 'Welche Angaben muss die Meldung enthalten?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Angaben in die Kästchen ein.',
      optionen: [
        'Namen und Anschriften aller betroffenen Kunden',
        'Art der Verletzung mit ungefährer Zahl der Betroffenen',
        'Jahresumsatz des Unternehmens',
        'Quellcode der betroffenen Anwendung',
        'Name und Kontaktdaten des Datenschutzbeauftragten'
      ],
      loesung: [2, 5],
      erklaerung: 'Nach Art. 33 Abs. 3 DSGVO enthält die Meldung mindestens: eine Beschreibung der Art der Verletzung, möglichst mit Kategorien und ungefährer Zahl der betroffenen Personen und Datensätze; Name und Kontaktdaten des Datenschutzbeauftragten oder einer anderen Anlaufstelle; die wahrscheinlichen Folgen; die ergriffenen oder vorgeschlagenen Maßnahmen. Eine namentliche Liste der Betroffenen ist nicht vorgeschrieben. Die Meldung erfolgt möglichst binnen 72 Stunden nach Bekanntwerden (Art. 33 Abs. 1 DSGVO).'
    },
    {
      nr: 24, thema: 'it-datenschutz', typ: 'einfach',
      text: 'Ein Auszubildender fragt Herrn Esser nach seinen Aufgaben als Datenschutzbeauftragter.',
      frage: 'Welche Aussage zum Datenschutzbeauftragten trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Der Datenschutzbeauftragte …',
      optionen: [
        'überwacht die Einhaltung der DSGVO und berät das Unternehmen.',
        'haftet persönlich für alle Datenschutzverstöße des Unternehmens.',
        'erteilt Einwilligungen anstelle der Kunden.',
        'erhält von der Geschäftsführung fachliche Weisungen für seine Prüfungen.',
        'unterschreibt alle Verträge mit Kunden.'
      ],
      loesung: 1,
      erklaerung: 'Der Datenschutzbeauftragte unterrichtet und berät Verantwortliche und Beschäftigte, überwacht die Einhaltung der Datenschutzvorschriften, berät bei der Datenschutz-Folgenabschätzung und arbeitet mit der Aufsichtsbehörde zusammen (Art. 39 DSGVO). Bei der Erfüllung seiner Aufgaben ist er weisungsfrei (Art. 38 Abs. 3 DSGVO). Verantwortlich für die Einhaltung der DSGVO bleibt das Unternehmen selbst, vertreten durch die Geschäftsführung.'
    },

    // --- Entwurfsmuster (25–30) ---
    {
      nr: 25, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Frau Lenzen prüft, für welche Klassen der Serverplattform das Singleton-Muster in Frage kommt.',
      frage: 'Für welche der folgenden Klassen ist das Singleton-Muster **nicht** geeignet?',
      anweisung: 'Tragen Sie die Ziffer vor der **nicht** geeigneten Klasse in das Kästchen ein.',
      optionen: [
        'Protokolldienst der gesamten Anwendung',
        'Zentrale Konfiguration der Plattform',
        'Fahrrad mit Nummer, Akkustand und Standort',
        'Verbindungspool zur Datenbank',
        'Zentraler Zähler für fortlaufende Ausleihnummern'
      ],
      loesung: 3,
      erklaerung: 'Ein Singleton ist sinnvoll, wenn es von einer Klasse fachlich genau ein Objekt geben darf, auf das alle Programmteile gemeinsam zugreifen, etwa Protokolldienst, Konfiguration, Verbindungspool oder ein zentraler Nummernkreis. Von der Klasse „Fahrrad“ gibt es dagegen viele Objekte, je eines pro Fahrrad. Ein Singleton würde hier verhindern, dass mehr als ein Fahrrad verwaltet wird.'
    },
    {
      nr: 26, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Der Protokolldienst der Plattform ist so umgesetzt:',
      kasten: {
        titel: 'Pseudocode',
        code: [
          'KLASSE Protokoll',
          '    PRIVAT STATISCH instanz ← NEU Protokoll()',
          '',
          '    PRIVAT KONSTRUKTOR Protokoll()',
          '    ENDE KONSTRUKTOR',
          '',
          '    ÖFFENTLICH STATISCH FUNKTION getInstance()',
          '        RÜCKGABE instanz',
          '    ENDE FUNKTION',
          'ENDE KLASSE'
        ]
      },
      frage: 'Welche Aussage zu dieser Umsetzung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Instanz entsteht erst beim ersten Aufruf von getInstance().',
        'Jeder Aufruf von getInstance() erzeugt ein neues Objekt.',
        'Andere Klassen können mit NEU Protokoll() weitere Objekte erzeugen.',
        'Die Instanz entsteht bereits beim Laden der Klasse.',
        'Die Klasse Protokoll ist abstrakt.'
      ],
      loesung: 4,
      erklaerung: 'Das statische Attribut instanz wird direkt bei seiner Deklaration initialisiert. Das Objekt entsteht deshalb, sobald die Klasse geladen wird (Eager Initialization), unabhängig davon, ob es später gebraucht wird. Vorteil: Beim ersten Zugriff gibt es keine Race Condition, eine Synchronisation ist nicht nötig. Der private Konstruktor verhindert, dass andere Klassen weitere Objekte erzeugen; getInstance() liefert immer dasselbe Objekt.'
    },
    {
      nr: 27, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'An vielen Stellen im Code der Plattform steht dieselbe Fallunterscheidung: Je nach Modell wird mit NEU ein Objekt der Klasse „StadtRad“, „LastenRad“ oder „KinderRad“ erzeugt. Für jedes neue Modell müssen alle diese Stellen geändert werden.',
      frage: 'Mit welcher Maßnahme lässt sich dieser Aufwand verringern?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Bündelung der Objekterzeugung in einer Factory',
        'Umsetzung aller Fahrradklassen als Singleton',
        'Anmeldung der Fahrradklassen als Beobachter',
        'Aufteilung der Fahrradklassen in Model, View und Controller',
        'Verlagerung der Fallunterscheidung in die Benutzeroberfläche'
      ],
      loesung: 1,
      erklaerung: 'Eine Factory bündelt die Fallunterscheidung an einer einzigen Stelle: Der übrige Code fordert über eine Erzeugungsmethode ein Fahrradobjekt an und arbeitet nur mit der gemeinsamen Oberklasse oder Schnittstelle. Für ein neues Modell wird nur die neue Klasse angelegt und die Factory ergänzt. Ein Singleton ließe nur ein Objekt je Klasse zu; Observer und MVC lösen andere Probleme.'
    },
    {
      nr: 28, thema: 'entwurfsmuster', typ: 'mehrfach',
      text: 'Frau Lenzen begründet, warum die Oberfläche der App nach dem MVC-Muster aufgebaut ist.',
      frage: 'Welche Vorteile bietet das MVC-Muster?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Vorteilen in die Kästchen ein.',
      optionen: [
        'Die Anwendung benötigt insgesamt weniger Klassen.',
        'Mehrere Views können dieselben Daten des Models darstellen.',
        'Tests der Geschäftslogik werden überflüssig.',
        'Darstellung und Geschäftslogik lassen sich getrennt ändern und testen.',
        'Die Anwendung läuft grundsätzlich schneller.'
      ],
      loesung: [2, 4],
      erklaerung: 'MVC trennt die Zuständigkeiten (Separation of Concerns): Das Model kennt die Darstellung nicht, deshalb können mehrere Views, etwa Karte und Liste, dieselben Daten zeigen. Änderungen an der Oberfläche berühren die Geschäftslogik nicht, und das Model lässt sich ohne Oberfläche testen. Dafür entstehen eher mehr Klassen; die Geschwindigkeit hängt nicht vom Muster ab, und Tests bleiben nötig.'
    },
    {
      nr: 29, thema: 'entwurfsmuster', typ: 'reihenfolge',
      text: 'Frau Lenzen erklärt am Beispiel einer Ausleihe, wie die Komponenten der App nach dem MVC-Muster zusammenarbeiten.',
      frage: 'Bringen Sie die folgenden Schritte in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Schritte',
      items: [
        { text: 'Der Controller ruft die passende Methode des Models auf.', loesung: 3 },
        { text: 'Die Benutzerin tippt in der App auf „Ausleihen“.', loesung: 1 },
        { text: 'Das Model ändert den Status des Fahrrads und benachrichtigt die View.', loesung: 4 },
        { text: 'Der Controller nimmt das Ereignis entgegen und prüft die Eingabe.', loesung: 2 },
        { text: 'Die View liest den neuen Status aus dem Model und zeigt ihn an.', loesung: 5 }
      ],
      erklaerung: 'Die Eingabe der Benutzerin erreicht zuerst den Controller. Er prüft sie und ruft die passende Methode des Models auf. Das Model ändert seinen Zustand und benachrichtigt die angemeldeten Views (Observer-Muster). Die View holt sich daraufhin die aktuellen Daten und stellt sie dar.'
    },
    {
      nr: 30, thema: 'entwurfsmuster', typ: 'einfach',
      text: 'Ein Bildschirm der App meldet sich beim Öffnen als Beobachter beim Objekt „Fahrrad“ an. Beim Schließen des Bildschirms wird abmelden() nicht aufgerufen.',
      frage: 'Welche Folge hat das?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Folge in das Kästchen ein.',
      optionen: [
        'Das Subjekt entfernt den Bildschirm automatisch aus seiner Liste.',
        'Alle übrigen Beobachter werden ebenfalls abgemeldet.',
        'Das Subjekt kann keine Zustandsänderungen mehr speichern.',
        'Die Klasse „Fahrrad“ wird dadurch zum Singleton.',
        'Das Subjekt benachrichtigt den geschlossenen Bildschirm weiter.'
      ],
      loesung: 5,
      erklaerung: 'Das Subjekt hält in seiner Beobachterliste weiter einen Verweis auf den Bildschirm und ruft bei jeder Änderung dessen Methode aktualisiere() auf. Das kostet Rechenzeit, kann Fehler auslösen und verhindert, dass der Speicher des Bildschirms freigegeben wird (Speicherleck, „Lapsed Listener“). Beobachter müssen sich deshalb abmelden, wenn sie nicht mehr gebraucht werden.'
    }
  ]
});
