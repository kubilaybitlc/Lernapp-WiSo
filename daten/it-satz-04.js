// IT-Theorie-Übungssatz 4 – Schnittstellen, Datenformate, Datenstrukturen (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_IT_SAETZE = window.WISO_IT_SAETZE || []).push({
  id: 'it-04',
  titel: 'IT-Theorie-Übungssatz 4',
  untertitel: 'Schnittstellen, Datenformate und Datenstrukturen',
  ausgangssituation:
    'Die Nordkanal Systems GmbH in Mönchengladbach betreibt eine Plattform zur Sendungsverfolgung für regionale Speditionen. Sie arbeiten als Fachinformatiker/-in Anwendungsentwicklung im Backend-Team.',

  situationen: [
    {
      von: 1, bis: 8,
      text: 'Die Plattform stellt den Speditionen eine REST-Schnittstelle (API) bereit. Die Sendungen sind unter dem Pfad /sendungen erreichbar, eine einzelne Sendung unter /sendungen/{sendungsnummer}. Sie überarbeiten die Dokumentation der Schnittstelle.'
    },
    {
      von: 9, bis: 13,
      text: 'Die Schnittstelle liefert ihre Daten im JSON-Format. Das ältere Lagersystem eines Kunden tauscht Daten dagegen als XML aus. Sie prüfen und erstellen Beispieldokumente in beiden Formaten.'
    },
    {
      von: 14, bis: 25,
      text: 'Für die interne Verarbeitung der Sendungsdaten wählt das Team passende Datenstrukturen aus. In einer Schulung für die Auszubildenden werden Stack, Queue, verkettete Liste, Baum und Hashtabelle besprochen.'
    },
    {
      von: 26, bis: 30,
      text: 'Die Schnittstelle wird für einen Großkunden erweitert. Er soll Sendungen gefiltert abrufen, sich mit einem Zugangstoken anmelden und Daten aus seinem Lagersystem als XML übergeben können.'
    }
  ],

  aufgaben: [
    // --- REST, HTTP-Methoden, Statuscodes (1–8) ---
    {
      nr: 1, thema: 'schnittstellen', typ: 'einfach',
      text: 'In der Dokumentation soll erläutert werden, dass die Schnittstelle zustandslos arbeitet.',
      frage: 'Welche Aussage beschreibt die Zustandslosigkeit einer REST-Schnittstelle?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Server speichert nach der Anmeldung eine Sitzung für alle weiteren Anfragen.',
        'Der Server liefert auf jede Anfrage dieselbe Antwort, unabhängig von der angefragten Ressource.',
        'Jede Anfrage enthält alle zu ihrer Verarbeitung nötigen Angaben.',
        'Die Daten der Ressourcen werden nicht dauerhaft in einer Datenbank gespeichert.',
        'Client und Server halten die Verbindung nach der ersten Anfrage dauerhaft offen.'
      ],
      loesung: 3,
      erklaerung: 'REST (Representational State Transfer) verlangt Zustandslosigkeit: Der Server merkt sich zwischen zwei Anfragen keinen Sitzungszustand des Clients. Jede Anfrage bringt daher alles Nötige mit, z. B. die Adresse der Ressource und ein Zugangstoken. Das erleichtert die Verteilung der Last auf mehrere Server. Die Ressourcen selbst (z. B. die Sendungen) werden natürlich dauerhaft gespeichert.'
    },
    {
      nr: 2, thema: 'schnittstellen', typ: 'zuordnung',
      text: 'Eine Spedition möchte über die Schnittstelle Sendungen anlegen, lesen, ändern und löschen (CRUD).',
      frage: 'Welche der folgenden HTTP-Methoden sind den nachstehenden Vorgängen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden HTTP-Methode in das Kästchen ein.',
      optionenTitel: 'HTTP-Methoden',
      optionen: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
      ],
      itemsTitel: 'Vorgänge',
      items: [
        { text: 'Eine neue Sendung wird angelegt; die Sendungsnummer vergibt der Server.', loesung: 2 },
        { text: 'Die Sendung 4711 wird storniert und aus dem Bestand entfernt.', loesung: 4 },
        { text: 'Die Daten der Sendung 4711 werden abgerufen.', loesung: 1 },
        { text: 'Der Datensatz der Sendung 4711 wird vollständig durch eine neue Fassung ersetzt.', loesung: 3 }
      ],
      erklaerung: 'Die HTTP-Methoden bilden die CRUD-Operationen ab: POST legt eine neue Ressource an (Create), GET liest (Read), PUT ersetzt eine vorhandene Ressource vollständig (Update), DELETE löscht (Delete). Für teilweise Änderungen gibt es zusätzlich PATCH.'
    },
    {
      nr: 3, thema: 'schnittstellen', typ: 'einfach', codeOptionen: true,
      text: 'Die Daten der Sendung mit der Sendungsnummer 4711 sollen abgerufen werden.',
      frage: 'Welcher Aufruf entspricht den REST-Konventionen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Aufruf in das Kästchen ein.',
      optionen: [
        'GET /getSendung?nummer=4711',
        'POST /sendungen/4711/abrufen',
        'GET /sendungen/abrufen/4711',
        'GET /sendungen/4711',
        'PUT /sendungen?nummer=4711'
      ],
      loesung: 4,
      erklaerung: 'In REST wird jede Ressource über eine eigene Adresse (URI) angesprochen, die aus Substantiven besteht: /sendungen ist die Sammlung, /sendungen/4711 die einzelne Sendung. Was mit der Ressource geschieht, drückt die HTTP-Methode aus – hier GET für das Lesen. Verben wie „getSendung“ oder „abrufen“ gehören deshalb nicht in den Pfad.'
    },
    {
      nr: 4, thema: 'schnittstellen', typ: 'einfach',
      text: 'Bei der Sendung 4711 soll nur das Feld „status“ von „unterwegs“ auf „zugestellt“ geändert werden. Alle anderen Felder bleiben unverändert und werden nicht mitgesendet.',
      frage: 'Welche HTTP-Methode ist für diese teilweise Änderung vorgesehen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden HTTP-Methode in das Kästchen ein.',
      optionen: [
        'GET',
        'POST',
        'PUT',
        'HEAD',
        'PATCH'
      ],
      loesung: 5,
      erklaerung: 'PATCH ändert eine Ressource teilweise: Es werden nur die Felder übertragen, die sich ändern. PUT ersetzt dagegen die gesamte Ressource durch die mitgesendete Fassung; nicht mitgesendete Felder gingen dabei verloren. POST legt neue Ressourcen an, GET und HEAD lesen nur.'
    },
    {
      nr: 5, thema: 'schnittstellen', typ: 'mehrfach',
      text: 'Wegen einer Netzwerkstörung sendet ein Client dieselbe Anfrage versehentlich zweimal. In der Dokumentation soll stehen, bei welchen Methoden das unkritisch ist.',
      frage: 'Welche Aussagen zu den HTTP-Methoden treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'POST ist idempotent.',
        'GET ist eine sichere Methode.',
        'DELETE überträgt im Nachrichtenrumpf die neue Fassung der Ressource.',
        'GET überträgt die Nutzdaten grundsätzlich im Nachrichtenrumpf (Body).',
        'PUT ist idempotent.'
      ],
      loesung: [2, 5],
      erklaerung: 'Sicher (safe) heißt: Die Methode ändert nichts auf dem Server (GET, HEAD). Idempotent heißt: Mehrfaches Ausführen derselben Anfrage führt zum selben Zustand wie einmaliges Ausführen (GET, PUT, DELETE). POST ist nicht idempotent – zwei gleiche Anfragen legen zwei Ressourcen an. GET-Anfragen übergeben ihre Parameter in der Adresse (Pfad oder Query-String), nicht im Body.'
    },
    {
      nr: 6, thema: 'schnittstellen', typ: 'zuordnung',
      text: 'Der Server beantwortet jede Anfrage mit einem dreistelligen HTTP-Statuscode. Die Statuscodes sind in Klassen eingeteilt.',
      frage: 'Welche der folgenden Klassen sind den nachstehenden Statuscodes zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Klasse in das Kästchen ein.',
      optionenTitel: 'Klassen',
      optionen: [
        'Erfolg',
        'Umleitung',
        'Fehler des Clients',
        'Fehler des Servers'
      ],
      itemsTitel: 'Statuscodes',
      items: [
        { text: '404', loesung: 3 },
        { text: '503', loesung: 4 },
        { text: '204', loesung: 1 },
        { text: '301', loesung: 2 }
      ],
      erklaerung: 'Die erste Ziffer gibt die Klasse an. 2xx: Die Anfrage war erfolgreich (200 OK, 201 Created, 204 No Content). 3xx: Der Client muss einer Umleitung folgen (301 Moved Permanently, 302 Found). 4xx: Der Fehler liegt in der Anfrage des Clients (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found). 5xx: Der Server konnte eine gültige Anfrage nicht verarbeiten (500 Internal Server Error, 503 Service Unavailable). 1xx sind reine Informationsmeldungen.'
    },
    {
      nr: 7, thema: 'schnittstellen', typ: 'einfach',
      text: 'Eine Spedition legt mit POST /sendungen eine neue Sendung an. Der Server speichert sie und teilt in der Antwort die Adresse der neuen Ressource mit.',
      frage: 'Welcher Statuscode ist für diesen Fall vorgesehen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Statuscode in das Kästchen ein.',
      optionen: [
        '200',
        '201',
        '204',
        '302',
        '409'
      ],
      loesung: 2,
      erklaerung: '201 Created bestätigt, dass durch die Anfrage eine neue Ressource angelegt wurde; ihre Adresse steht üblicherweise im Header „Location“. 200 OK steht allgemein für eine erfolgreiche Anfrage (z. B. GET), 204 No Content für Erfolg ohne Inhalt in der Antwort (z. B. nach DELETE). 302 Found leitet um, 409 Conflict meldet einen Konflikt mit dem aktuellen Zustand der Ressource.'
    },
    {
      nr: 8, thema: 'schnittstellen', typ: 'einfach',
      text: 'Ein Disponent der Spedition Albers ist korrekt angemeldet und sendet ein gültiges Zugangstoken mit. Er ruft eine Sendung ab, die einer anderen Spedition gehört und für die er keine Berechtigung hat.',
      frage: 'Welcher Statuscode ist für diesen Fall vorgesehen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Statuscode in das Kästchen ein.',
      optionen: [
        '403',
        '401',
        '400',
        '404',
        '500'
      ],
      loesung: 1,
      erklaerung: '403 Forbidden: Der Server hat den Client erkannt, verweigert aber den Zugriff, weil die Berechtigung fehlt (Autorisierung). 401 Unauthorized bedeutet dagegen, dass die Anmeldung fehlt oder ungültig ist (Authentifizierung). 400 Bad Request meldet eine fehlerhaft aufgebaute Anfrage, 404 Not Found eine nicht vorhandene Ressource, 500 Internal Server Error einen Fehler im Server.'
    },

    // --- JSON und XML (9–13) ---
    {
      nr: 9, thema: 'schnittstellen', typ: 'zahl',
      text: 'Die Schnittstelle liefert zu einer Sendung folgendes JSON-Dokument:',
      kasten: {
        titel: 'JSON-Dokument',
        code: [
          '{',
          '  "sendungsnummer": 4711,',
          '  "status": "unterwegs",',
          '  "empfaenger": {',
          '    "name": "Tischlerei Brandt",',
          '    "ort": "Viersen"',
          '  },',
          '  "pakete": [',
          '    { "nr": 1, "gewichtKg": 12.5 },',
          '    { "nr": 2, "gewichtKg": 7.5 },',
          '    { "nr": 3, "gewichtKg": 20.0 }',
          '  ],',
          '  "express": false',
          '}'
        ]
      },
      frage: 'Ermitteln Sie das Gesamtgewicht aller Pakete dieser Sendung in kg.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 40,
      einheit: 'kg',
      erklaerung: 'Der Schlüssel „pakete“ enthält ein Array (eckige Klammern) mit drei Objekten (geschweifte Klammern). Jedes Objekt besitzt den Schlüssel „gewichtKg“: 12,5 + 7,5 + 20,0 = 40 kg. In JSON werden Dezimalzahlen mit Punkt geschrieben.'
    },
    {
      nr: 10, thema: 'schnittstellen', typ: 'einfach', codeOptionen: true,
      text: 'Ein Programm hat das folgende JSON-Dokument in ein Objekt mit dem Namen sendung eingelesen. Die Zählung der Array-Elemente beginnt bei 0.',
      kasten: {
        titel: 'JSON-Dokument',
        code: [
          '{',
          '  "sendungsnummer": 4711,',
          '  "empfaenger": { "name": "Tischlerei Brandt", "ort": "Viersen" },',
          '  "pakete": [',
          '    { "nr": 1, "gewichtKg": 12.5 },',
          '    { "nr": 2, "gewichtKg": 7.5 }',
          '  ]',
          '}'
        ]
      },
      frage: 'Mit welchem Ausdruck wird das Gewicht des zweiten Pakets gelesen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Ausdruck in das Kästchen ein.',
      optionen: [
        'sendung.pakete.gewichtKg[2]',
        'sendung.pakete[2].gewichtKg',
        'sendung.pakete[1].gewichtKg',
        'sendung.gewichtKg[1]',
        'sendung.empfaenger.pakete[1].gewichtKg'
      ],
      loesung: 3,
      erklaerung: 'Der Zugriff folgt der Verschachtelung des Dokuments: sendung.pakete liefert das Array, [1] das zweite Element (die Zählung beginnt bei 0), .gewichtKg dessen Wert 7.5. Der Index [2] würde auf ein drittes Element zeigen, das es nicht gibt. „pakete“ liegt direkt im äußeren Objekt und nicht unter „empfaenger“.'
    },
    {
      nr: 11, thema: 'schnittstellen', typ: 'einfach', codeOptionen: true,
      text: 'Für einen neuen Kunden sollen folgende Daten als JSON-Dokument gesendet werden: Kundennummer 205 (Zahl), Name Albers (Zeichenkette), aktiv: ja (Wahrheitswert), Standorte Neuss und Krefeld (Liste).',
      frage: 'Welches JSON-Dokument bildet diese Daten korrekt ab?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden JSON-Dokument in das Kästchen ein.',
      optionen: [
        '{ "kundennummer": "205", "name": "Albers", "aktiv": "ja", "standorte": "Neuss, Krefeld" }',
        '{ kundennummer: 205, name: "Albers", aktiv: true, standorte: ["Neuss", "Krefeld"] }',
        '{ "kundennummer": 205, "name": "Albers", "aktiv": true, "standorte": { "Neuss", "Krefeld" } }',
        '{ "kundennummer": 205, "name": "Albers", "aktiv": true, "standorte": ["Neuss", "Krefeld"] }',
        '[ "kundennummer": 205, "name": "Albers", "aktiv": true, "standorte": ["Neuss", "Krefeld"] ]'
      ],
      loesung: 4,
      erklaerung: 'Ein JSON-Objekt steht in geschweiften Klammern und besteht aus Schlüssel-Wert-Paaren; Schlüssel sind immer Zeichenketten in doppelten Anführungszeichen. Zahlen und die Wahrheitswerte true/false stehen ohne Anführungszeichen, Listen als Array in eckigen Klammern. Dokument 1 ist zwar gültiges JSON, speichert aber alles als Zeichenkette. In 2 fehlen die Anführungszeichen der Schlüssel, in 3 enthält das innere Objekt Werte ohne Schlüssel, in 5 stehen Schlüssel-Wert-Paare in einem Array.'
    },
    {
      nr: 12, thema: 'schnittstellen', typ: 'einfach', codeOptionen: true,
      text: 'Für das Lagersystem des Kunden soll eine Sendung als XML-Dokument übergeben werden. Das Lagersystem verarbeitet nur wohlgeformte Dokumente.',
      frage: 'Welches der folgenden XML-Dokumente ist wohlgeformt?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden XML-Dokument in das Kästchen ein.',
      optionen: [
        '<sendung><nr>4711</nr><ort>Neuss</sendung></ort>',
        '<sendung nr="4711"><ort>Neuss</ort></sendung>',
        '<sendung nr=4711><ort>Neuss</ort></sendung>',
        '<sendung nr="4711"><ort>Neuss</Ort></sendung>',
        '<sendung nr="4711"><ort>Neuss</ort></sendung><sendung nr="4712"/>'
      ],
      loesung: 2,
      erklaerung: 'Ein XML-Dokument ist wohlgeformt, wenn es genau ein Wurzelelement hat, jedes Element geschlossen und korrekt verschachtelt ist, Start- und End-Tag gleich geschrieben sind (Groß-/Kleinschreibung zählt) und Attributwerte in Anführungszeichen stehen. In 1 sind die End-Tags vertauscht, in 3 fehlen die Anführungszeichen um den Attributwert, in 4 passt </Ort> nicht zu <ort>, in 5 gibt es zwei Wurzelelemente.'
    },
    {
      nr: 13, thema: 'schnittstellen', typ: 'einfach',
      text: 'Das Lagersystem des Kunden liefert folgende Rückmeldung:',
      kasten: {
        titel: 'XML-Dokument',
        code: [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<sendung nr="4711">',
          '  <status>zugestellt</status>',
          '  <pakete>',
          '    <paket gewicht="12.5"/>',
          '    <paket gewicht="7.5"/>',
          '  </pakete>',
          '</sendung>'
        ]
      },
      frage: 'Welche Aussage zu diesem XML-Dokument trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        '„nr“ ist ein Kindelement von „sendung“.',
        '„status“ ist ein Attribut mit dem Wert „zugestellt“.',
        'Das Dokument ist wegen des fehlenden End-Tags von „paket“ nicht wohlgeformt.',
        '„pakete“ ist das Wurzelelement und enthält drei Kindelemente.',
        '„sendung“ ist das Wurzelelement, „gewicht“ ein Attribut von „paket“.'
      ],
      loesung: 5,
      erklaerung: 'Das äußerste Element „sendung“ ist das Wurzelelement. Attribute stehen im Start-Tag in der Form name="wert" (hier nr und gewicht), Elemente werden durch Tags gebildet (hier status, pakete, paket). <paket …/> ist ein leeres Element: Der Schrägstrich vor der schließenden Klammer ersetzt das End-Tag, das Dokument ist also wohlgeformt. „pakete“ hat zwei Kindelemente.'
    },

    // --- Datenstrukturen (14–25) ---
    {
      nr: 14, thema: 'datenstrukturen', typ: 'zahl',
      text: 'In der Schulung wird die Arbeitsweise eines Stacks (Stapel) an folgendem Pseudocode gezeigt. push legt ein Element ab, pop entnimmt das oberste Element und gibt es zurück, peek gibt das oberste Element zurück, ohne es zu entnehmen.',
      kasten: {
        titel: 'Pseudocode',
        code: [
          'stapel ← NEUER Stack',
          'stapel.push(4)',
          'stapel.push(9)',
          'stapel.push(2)',
          'stapel.pop()',
          'stapel.push(7)',
          'x ← stapel.pop()',
          'AUSGABE x + stapel.peek()'
        ]
      },
      frage: 'Ermitteln Sie den Wert, den das Programm ausgibt.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 16,
      erklaerung: 'Ein Stack arbeitet nach dem LIFO-Prinzip (Last In – First Out). Nach den drei push-Aufrufen liegt die 2 oben (4, 9, 2). pop entfernt die 2, push(7) legt die 7 oben auf (4, 9, 7). x ← pop() liefert 7, danach liegt die 9 oben. peek() liefert 9, ohne sie zu entfernen: 7 + 9 = 16.'
    },
    {
      nr: 15, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Eingehende Statusmeldungen der Fahrer werden in einer Queue (Warteschlange) zwischengespeichert. enqueue fügt ein Element hinten an, dequeue entnimmt das vorderste Element und gibt es zurück.',
      kasten: {
        titel: 'Pseudocode',
        code: [
          'schlange ← NEUE Queue',
          'schlange.enqueue("A")',
          'schlange.enqueue("B")',
          'schlange.enqueue("C")',
          'schlange.dequeue()',
          'schlange.enqueue("D")',
          'schlange.dequeue()',
          'AUSGABE schlange.dequeue()'
        ]
      },
      frage: 'Welche Ausgabe erzeugt der Pseudocode?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Ausgabe in das Kästchen ein.',
      optionen: [
        '"A"',
        '"B"',
        '"C"',
        '"D"',
        'Keine Ausgabe (leere Queue)'
      ],
      loesung: 3,
      erklaerung: 'Eine Queue arbeitet nach dem FIFO-Prinzip (First In – First Out). Nach den drei enqueue-Aufrufen steht A vorn (A, B, C). Das erste dequeue entnimmt A, enqueue("D") hängt D hinten an (B, C, D). Das zweite dequeue entnimmt B, das dritte liefert C; in der Queue bleibt D zurück.'
    },
    {
      nr: 16, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Die Auszubildenden sollen zu jeder Datenstruktur einen typischen Einsatzfall nennen.',
      frage: 'Für welche der folgenden Aufgaben ist ein Stack die passende Datenstruktur?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aufgabe in das Kästchen ein.',
      optionen: [
        'Statusmeldungen in der Reihenfolge ihres Eingangs abarbeiten',
        'Kunden über ihre Kundennummer ohne Durchsuchen aller Einträge finden',
        'Die Ordnerstruktur eines Dateisystems mit Unterordnern abbilden',
        'Das passende Schließen jeder geöffneten Klammer in einem Ausdruck prüfen',
        'Messwerte mit direktem Zugriff über ihre Position speichern'
      ],
      loesung: 4,
      erklaerung: 'Bei der Klammerprüfung wird jede öffnende Klammer auf den Stack gelegt; bei einer schließenden Klammer wird die oberste entnommen und verglichen. Die zuletzt geöffnete Klammer muss zuerst geschlossen werden – genau das LIFO-Prinzip. Weitere typische Einsätze: Rückgängig-Funktion und der Aufrufstapel von Funktionen. Zu den anderen Aufgaben passen Queue (1), Hashtabelle (2), Baum (3) und Array (5).'
    },
    {
      nr: 17, thema: 'datenstrukturen', typ: 'einfach', codeOptionen: true,
      text: 'Die Stationen einer Tour sind als einfach verkettete Liste gespeichert: A → B → C. Jeder Knoten besitzt den Verweis „naechster“ auf seinen Nachfolger. Eine neue Station X soll zwischen A und B eingefügt werden.',
      frage: 'Welche Anweisungsfolge fügt X korrekt ein?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anweisungsfolge in das Kästchen ein.',
      optionen: [
        'X.naechster ← A.naechster\nA.naechster ← X',
        'A.naechster ← X\nX.naechster ← A.naechster',
        'B.naechster ← X\nX.naechster ← C',
        'X.naechster ← A\nB.naechster ← X',
        'A.naechster ← X\nX.naechster ← C'
      ],
      loesung: 1,
      erklaerung: 'Zuerst muss X auf den bisherigen Nachfolger von A zeigen (X.naechster ← A.naechster, also B), erst danach wird A auf X umgehängt: A → X → B → C. In umgekehrter Reihenfolge (2) ginge der Verweis auf B verloren, X würde auf sich selbst zeigen. Folge 3 fügt X hinter B ein, Folge 4 erzeugt einen Kreis, Folge 5 hängt B aus der Liste aus. Anders als beim Array müssen keine Elemente verschoben werden; es ändern sich nur zwei Verweise.'
    },
    {
      nr: 18, thema: 'datenstrukturen', typ: 'einfach',
      text: 'In der Tourenplanung soll von einer Station sowohl zur nächsten als auch zur vorherigen Station gewechselt werden können. Das Team erwägt deshalb eine doppelt verkettete Liste.',
      frage: 'Welchen Vorteil hat eine doppelt verkettete Liste gegenüber einer einfach verketteten Liste?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Sie benötigt je Knoten weniger Speicherplatz.',
        'Sie kann in beiden Richtungen durchlaufen werden.',
        'Auf jedes Element kann direkt über einen Index zugegriffen werden.',
        'Ihre Elemente sind automatisch aufsteigend sortiert.',
        'Sie kann beliebig viele Elemente aufnehmen, eine einfach verkettete nicht.'
      ],
      loesung: 2,
      erklaerung: 'In einer doppelt verketteten Liste besitzt jeder Knoten zwei Verweise: auf den Nachfolger und auf den Vorgänger. Dadurch kann die Liste vorwärts und rückwärts durchlaufen werden, und ein Knoten lässt sich entfernen, ohne seinen Vorgänger erst suchen zu müssen. Der Preis ist ein zusätzlicher Verweis je Knoten, also mehr Speicherbedarf. Einen Direktzugriff über einen Index bietet auch sie nicht.'
    },
    {
      nr: 19, thema: 'datenstrukturen', typ: 'zuordnung',
      text: 'Die Organisationsstruktur einer Spedition (Zentrale, Niederlassungen, Abteilungen) wird als Baum gespeichert.',
      frage: 'Welche der folgenden Begriffe sind den nachstehenden Beschreibungen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Begriff in das Kästchen ein.',
      optionenTitel: 'Begriffe',
      optionen: [
        'Wurzel',
        'Blatt',
        'Innerer Knoten',
        'Höhe des Baums'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Knoten ohne Kindknoten', loesung: 2 },
        { text: 'Anzahl der Kanten auf dem längsten Weg vom obersten Knoten bis zu einem Knoten ohne Kinder', loesung: 4 },
        { text: 'Oberster Knoten des Baums; er hat keinen Elternknoten', loesung: 1 },
        { text: 'Knoten, der einen Elternknoten und mindestens einen Kindknoten hat', loesung: 3 }
      ],
      erklaerung: 'Ein Baum ist eine hierarchische Datenstruktur aus Knoten und Kanten. Die Wurzel ist der einzige Knoten ohne Elternknoten. Blätter haben keine Kinder, innere Knoten liegen dazwischen. Die Höhe ist die Länge des längsten Weges von der Wurzel zu einem Blatt. In einem Binärbaum hat jeder Knoten höchstens zwei Kinder.'
    },
    {
      nr: 20, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Die Sendungsnummern sollen in einem binären Suchbaum abgelegt werden.',
      frage: 'Welche Bedingung gilt in einem binären Suchbaum für jeden Knoten?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bedingung in das Kästchen ein.',
      optionen: [
        'Jeder Knoten hat genau zwei Kindknoten.',
        'Der Schlüssel jedes Knotens ist größer als die Schlüssel seiner beiden Kindknoten.',
        'Alle Blätter liegen auf derselben Ebene.',
        'Die Schlüssel sind von links nach rechts in der Reihenfolge ihres Einfügens angeordnet.',
        'Im linken Teilbaum liegen nur kleinere, im rechten Teilbaum nur größere Schlüssel.'
      ],
      loesung: 5,
      erklaerung: 'In einem binären Suchbaum hat jeder Knoten höchstens zwei Kinder. Für jeden Knoten gilt: Alle Schlüssel im linken Teilbaum sind kleiner, alle im rechten Teilbaum größer als der eigene Schlüssel. Dadurch kann bei der Suche an jedem Knoten ein ganzer Teilbaum ausgeschlossen werden. Aussage 2 beschreibt die Eigenschaft eines Heaps, Aussage 3 die eines vollständig ausgeglichenen Baums.'
    },
    {
      nr: 21, thema: 'datenstrukturen', typ: 'einfach',
      text: 'In einen leeren binären Suchbaum werden nacheinander die Schlüssel 50, 30, 70, 20, 40, 60 und 80 eingefügt. Anschließend wird der Schlüssel 65 eingefügt.',
      frage: 'An welcher Stelle wird der Schlüssel 65 eingehängt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Stelle in das Kästchen ein.',
      optionen: [
        'Als rechtes Kind von 60',
        'Als linkes Kind von 70',
        'Als linkes Kind von 80',
        'Als rechtes Kind von 40',
        'Als linkes Kind von 60'
      ],
      loesung: 1,
      erklaerung: 'Der Baum hat die Wurzel 50, darunter 30 (links) und 70 (rechts); unter 30 liegen 20 und 40, unter 70 liegen 60 und 80. Einfügen von 65: 65 > 50 → nach rechts zur 70; 65 < 70 → nach links zur 60; 65 > 60 → der Platz rechts von 60 ist frei, dort wird 65 eingehängt. Neue Schlüssel werden immer als Blatt eingefügt.'
    },
    {
      nr: 22, thema: 'datenstrukturen', typ: 'einfach',
      text: 'Ein binärer Suchbaum hat die Wurzel 50. Deren linkes Kind ist 30 mit den Kindern 20 (links) und 40 (rechts), ihr rechtes Kind ist 70. Der Baum wird in Inorder-Reihenfolge durchlaufen: erst der linke Teilbaum, dann der Knoten selbst, dann der rechte Teilbaum.',
      frage: 'In welcher Reihenfolge werden die Schlüssel ausgegeben?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Reihenfolge in das Kästchen ein.',
      optionen: [
        '50, 30, 20, 40, 70',
        '20, 40, 30, 70, 50',
        '50, 30, 70, 20, 40',
        '20, 30, 40, 50, 70',
        '70, 50, 40, 30, 20'
      ],
      loesung: 4,
      erklaerung: 'Inorder (links – Knoten – rechts): Der linke Teilbaum von 50 liefert 20, 30, 40; dann folgt 50, dann der rechte Teilbaum mit 70. Bei einem binären Suchbaum liefert der Inorder-Durchlauf die Schlüssel immer aufsteigend sortiert. Reihenfolge 1 ist Preorder (Knoten – links – rechts), 2 ist Postorder (links – rechts – Knoten), 3 ist der ebenenweise Durchlauf.'
    },
    {
      nr: 23, thema: 'datenstrukturen', typ: 'zahl',
      text: 'Die Sendungen werden in einer Hashtabelle mit 11 Plätzen (Index 0 bis 10) gespeichert. Der Index wird mit der Hashfunktion h(k) = k MOD 11 aus der Sendungsnummer k berechnet.',
      frage: 'Ermitteln Sie den Index, unter dem die Sendung mit der Sendungsnummer 4711 gespeichert wird.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 3,
      erklaerung: 'MOD liefert den Rest der ganzzahligen Division: 4711 / 11 = 428 Rest 3, denn 428 × 11 = 4708 und 4711 − 4708 = 3. Die Sendung wird unter Index 3 abgelegt. Weil die Hashfunktion den Index direkt aus dem Schlüssel berechnet, ist der Zugriff im Durchschnitt in konstanter Zeit möglich.'
    },
    {
      nr: 24, thema: 'datenstrukturen', typ: 'einfach',
      text: 'In derselben Hashtabelle (h(k) = k MOD 11) liefern die Sendungsnummern 4711 und 4722 denselben Index 3.',
      frage: 'Wie wird diese Situation bezeichnet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bezeichnung in das Kästchen ein.',
      optionen: [
        'Überlauf',
        'Redundanz',
        'Kollision',
        'Deadlock',
        'Rekursion'
      ],
      loesung: 3,
      erklaerung: 'Bilden zwei verschiedene Schlüssel auf denselben Index ab, spricht man von einer Kollision (4722 MOD 11 = 3, denn 429 × 11 = 4719). Üblich sind zwei Verfahren: Verkettung – jeder Tabellenplatz verweist auf eine Liste aller Einträge mit diesem Index – oder offene Adressierung, bei der nach einer festen Regel der nächste freie Platz gesucht wird (Sondieren). Viele Kollisionen verlangsamen den Zugriff, im ungünstigsten Fall auf O(n).'
    },
    {
      nr: 25, thema: 'datenstrukturen', typ: 'mehrfach',
      text: 'Zum Abschluss der Schulung fassen die Auszubildenden die Eigenschaften der Datenstrukturen zusammen.',
      frage: 'Welche Aussagen zu den Datenstrukturen treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Bei einem Stack erfolgen Einfügen und Entnehmen am selben Ende.',
        'Aus einer Queue wird stets das zuletzt eingefügte Element zuerst entnommen.',
        'In einer einfach verketteten Liste ist jedes Element direkt über einen Index erreichbar.',
        'In einem ausgeglichenen binären Suchbaum wächst der Suchaufwand logarithmisch mit der Elementanzahl.',
        'Eine Hashtabelle hält ihre Einträge automatisch nach Schlüsseln sortiert.'
      ],
      loesung: [1, 4],
      erklaerung: 'Stack: push und pop arbeiten am selben Ende (LIFO). Queue: Entnommen wird das zuerst eingefügte Element (FIFO). Verkettete Liste: Um das k-te Element zu erreichen, müssen die Vorgänger durchlaufen werden, O(n). Ausgeglichener binärer Suchbaum: Jeder Vergleich halbiert den Suchbereich, O(log n). Hashtabelle: Der Platz ergibt sich aus der Hashfunktion, die Einträge liegen in keiner sortierten Reihenfolge vor.'
    },

    // --- Erweiterung der Schnittstelle (26–30) ---
    {
      nr: 26, thema: 'schnittstellen', typ: 'einfach',
      text: 'Das Lagersystem des Großkunden kann nur XML verarbeiten. Es fordert die Sendungsdaten bei jedem Aufruf ausdrücklich im XML-Format an.',
      frage: 'Mit welchem Header teilt der Client dem Server das gewünschte Format der Antwort mit?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Header in das Kästchen ein.',
      optionen: [
        'Content-Type',
        'Accept',
        'Authorization',
        'User-Agent',
        'Location'
      ],
      loesung: 2,
      erklaerung: 'Mit dem Anfrage-Header Accept nennt der Client die Medientypen, die er als Antwort verarbeiten kann, hier Accept: application/xml. Der Server antwortet dann mit Content-Type: application/xml; kann er das Format nicht liefern, antwortet er mit 406 Not Acceptable (RFC 9110). Content-Type beschreibt dagegen das Format der mitgesendeten Daten, Authorization überträgt Zugangsdaten, User-Agent nennt das Clientprogramm, Location steht in Antworten und verweist auf eine Ressource.'
    },
    {
      nr: 27, thema: 'schnittstellen', typ: 'einfach', codeOptionen: true,
      text: 'Der Großkunde möchte alle Sendungen abrufen, die den Status „zugestellt“ haben.',
      frage: 'Welcher Aufruf entspricht den REST-Konventionen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Aufruf in das Kästchen ein.',
      optionen: [
        'POST /sendungen/filter/zugestellt',
        'DELETE /sendungen?status=zugestellt',
        'GET /sendungen?status=zugestellt',
        'GET /holeZugestellteSendungen',
        'PUT /sendungen/status/zugestellt'
      ],
      loesung: 3,
      erklaerung: 'Gefiltert wird eine Sammlung über Parameter im Query-String: GET /sendungen?status=zugestellt. Die Ressource bleibt /sendungen, der Parameter schränkt nur die Auswahl ein; mehrere Filter werden mit & verbunden (z. B. ?status=zugestellt&ort=Neuss). POST und PUT verändern Daten, DELETE würde die gefilterten Sendungen löschen. Verben wie „hole…“ gehören nicht in den Pfad.'
    },
    {
      nr: 28, thema: 'schnittstellen', typ: 'einfach',
      text: 'Für den Zugriff auf die Schnittstelle erhält der Großkunde ein Zugangstoken. Es soll bei jeder Anfrage mitgesendet werden.',
      frage: 'Wo wird das Zugangstoken bei einer Anfrage üblicherweise übertragen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Im Pfad der URL',
        'Im Query-String der URL',
        'Im Header „Accept“',
        'Im Header „Authorization“',
        'Im Header „Content-Type“'
      ],
      loesung: 4,
      erklaerung: 'Zugangstoken werden im Header Authorization übertragen, meist in der Form „Authorization: Bearer ‹Token›“ (RFC 6750). Bestandteile der URL landen dagegen in Server-Protokollen, im Browserverlauf und in Weiterleitungen und sind deshalb für geheime Werte ungeeignet. Fehlt das Token oder ist es ungültig, antwortet der Server mit 401 Unauthorized. Die Verbindung muss zusätzlich per HTTPS verschlüsselt sein.'
    },
    {
      nr: 29, thema: 'schnittstellen', typ: 'einfach',
      text: 'Laut XML-Schema (XSD) des Großkunden muss das Element „gewicht“ eine Dezimalzahl enthalten. Das Lagersystem liefert folgendes Dokument:',
      kasten: {
        titel: 'XML-Dokument',
        code: [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<sendung nr="4790">',
          '  <empfaenger>Möbelhaus Klein</empfaenger>',
          '  <gewicht>zwölf</gewicht>',
          '</sendung>'
        ]
      },
      frage: 'Welche Aussage zu diesem Dokument trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Es ist weder wohlgeformt noch gültig.',
        'Es ist wohlgeformt, aber nicht gültig.',
        'Es ist gültig, aber nicht wohlgeformt.',
        'Es ist wohlgeformt und gültig.',
        'Der Umlaut in „Möbelhaus“ verletzt die Wohlgeformtheit.'
      ],
      loesung: 2,
      erklaerung: 'Wohlgeformt ist ein Dokument, wenn es die Syntaxregeln von XML einhält: ein Wurzelelement, korrekt verschachtelte und geschlossene Elemente, Attributwerte in Anführungszeichen. Das ist hier der Fall; Umlaute sind in UTF-8 erlaubt. Gültig (valide) ist es erst, wenn es zusätzlich den Regeln einer DTD oder eines XML-Schemas entspricht. Das Schema verlangt eine Dezimalzahl, „zwölf“ ist aber Text. Ein gültiges Dokument ist immer auch wohlgeformt.'
    },
    {
      nr: 30, thema: 'schnittstellen', typ: 'reihenfolge',
      text: 'Das Lagersystem ruft GET /sendungen mit seinem Zugangstoken auf.',
      frage: 'Bringen Sie die folgenden Schritte dieses Aufrufs in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Schritte',
      items: [
        { text: 'Der Server prüft das Zugangstoken.', loesung: 3 },
        { text: 'Der Client erstellt die Anfrage mit Methode, Pfad und Headern.', loesung: 1 },
        { text: 'Der Client wertet den Statuscode aus und liest die Daten der Antwort.', loesung: 5 },
        { text: 'Der Client sendet die Anfrage über eine HTTPS-Verbindung an den Server.', loesung: 2 },
        { text: 'Der Server liest die Sendungen aus der Datenbank und erstellt die Antwort.', loesung: 4 }
      ],
      erklaerung: 'Der Client baut die Anfrage aus Methode (GET), Pfad (/sendungen) und Headern (u. a. Authorization, Accept) auf und sendet sie über eine verschlüsselte HTTPS-Verbindung. Der Server prüft zuerst die Berechtigung; ohne gültiges Token bricht er mit 401 ab. Erst danach liest er die Daten und erstellt die Antwort mit Statuscode, Headern und Rumpf. Der Client prüft den Statuscode, bevor er die Daten verarbeitet.'
    }
  ]
});
