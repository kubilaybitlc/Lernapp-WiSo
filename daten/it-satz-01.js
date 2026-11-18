// IT-Theorie-Übungssatz 1 – OOP, Pseudocode, Algorithmen, Softwareentwicklung (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_IT_SAETZE = window.WISO_IT_SAETZE || []).push({
  id: 'it-01',
  titel: 'IT-Theorie-Übungssatz 1',
  untertitel: 'OOP, Pseudocode, Algorithmen und Softwareentwicklung',
  ausgangssituation:
    'Die DataBridge Solutions GmbH in Leipzig entwickelt Individualsoftware für mittelständische Unternehmen. Sie arbeiten als Fachinformatiker/-in Anwendungsentwicklung in der Entwicklungsabteilung.',

  situationen: [
    {
      von: 1, bis: 6,
      text: 'Die Abteilungsleiterin Frau Schuster plant die Entwicklung einer neuen Kundenverwaltung. Sie soll objektorientiert umgesetzt werden. Im Entwurf sind die Klassen „Kunde", „Privatkunde", „Geschaeftskunde", „Bestellung" und „Adresse" vorgesehen. „Privatkunde" und „Geschaeftskunde" erben von „Kunde". Die Klasse „Kunde" soll die Attribute kundenNr, name und adresse enthalten. Der direkte Zugriff auf die Attribute von außen soll verhindert werden; stattdessen sollen öffentliche Methoden den kontrollierten Zugriff ermöglichen.'
    },
    {
      von: 7, bis: 12,
      text: 'In einem Code-Review sollen verschiedene Algorithmen geprüft werden. Analysieren Sie die Pseudocode-Abschnitte und beantworten Sie die Fragen zur Ablaufsteuerung und zu Kontrollstrukturen.'
    },
    {
      von: 13, bis: 18,
      text: 'Im Rahmen einer internen Schulung werden grundlegende Algorithmen und Datenstrukturen besprochen. Die Teilnehmer sollen die Eigenschaften und Einsatzbereiche verschiedener Datenstrukturen kennenlernen.'
    },
    {
      von: 19, bis: 25,
      text: 'Die DataBridge Solutions GmbH stellt ihre Softwareentwicklung auf ein agiles Vorgehensmodell um. Im Zuge dessen werden auch Themen wie Versionskontrolle, Testverfahren und Entwurfsmuster besprochen.'
    }
  ],

  aufgaben: [
    // --- OOP (1–6) ---
    {
      nr: 1, thema: 'oop', typ: 'einfach',
      text: 'Die Klasse „Kunde" soll die Attribute kundenNr, name und adresse enthalten. Der direkte Zugriff auf die Attribute von außen soll verhindert werden; stattdessen sollen öffentliche Methoden den kontrollierten Zugriff ermöglichen.',
      frage: 'Welches Prinzip der objektorientierten Programmierung wird hier angewendet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Vererbung – die Attribute werden aus einer Oberklasse übernommen.',
        'Polymorphie – die Methoden verhalten sich je nach Kontext unterschiedlich.',
        'Kapselung – die Attribute werden als privat deklariert und über Getter-/Setter-Methoden zugänglich gemacht.',
        'Abstraktion – die Klasse wird als abstrakt deklariert und kann nicht instanziiert werden.',
        'Komposition – die Klasse „Kunde" enthält Objekte anderer Klassen als Bestandteile.'
      ],
      loesung: 3,
      erklaerung: 'Kapselung (Encapsulation) bedeutet, dass die internen Daten eines Objekts vor dem direkten Zugriff von außen geschützt werden. Die Attribute werden als privat (private) deklariert und der Zugriff erfolgt über öffentliche Getter- und Setter-Methoden. So kann die Klasse kontrollieren, welche Werte gesetzt werden (z. B. Validierung).'
    },
    {
      nr: 2, thema: 'oop', typ: 'einfach',
      text: '„Privatkunde" und „Geschaeftskunde" erben von „Kunde". Beide Unterklassen überschreiben die Methode berechneRabatt(): Ein Privatkunde erhält 5 % Rabatt, ein Geschäftskunde 15 %. In einer Liste vom Typ „Kunde" befinden sich sowohl Privat- als auch Geschäftskunden. Beim Durchlaufen der Liste wird für jedes Objekt berechneRabatt() aufgerufen.',
      frage: 'Welches OOP-Prinzip sorgt dafür, dass zur Laufzeit die jeweils passende Methode aufgerufen wird?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Kapselung – die Methode ist nur innerhalb der jeweiligen Klasse sichtbar.',
        'Polymorphie – die aufgerufene Methode wird erst zur Laufzeit anhand des tatsächlichen Objekttyps bestimmt.',
        'Abstraktion – die Methode existiert nur als Platzhalter ohne Implementierung.',
        'Vererbung – die Methode wird unverändert aus der Oberklasse übernommen.',
        'Komposition – die Methode wird an ein eingebettetes Objekt delegiert.'
      ],
      loesung: 2,
      erklaerung: 'Polymorphie (griech. Vielgestaltigkeit) ermöglicht, dass eine Methode in verschiedenen Unterklassen unterschiedlich implementiert wird. Beim Aufruf über eine Referenz vom Typ der Oberklasse wird zur Laufzeit (dynamische Bindung/Late Binding) die Methode des tatsächlichen Objekttyps ausgeführt.'
    },
    {
      nr: 3, thema: 'oop', typ: 'zuordnung',
      text: 'Frau Schuster erklärt den Auszubildenden die vier Grundprinzipien der objektorientierten Programmierung.',
      frage: 'Welches OOP-Prinzip wird in der jeweiligen Beschreibung erläutert?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Prinzip in das Kästchen ein.',
      optionenTitel: 'OOP-Prinzipien',
      optionen: [
        'Kapselung',
        'Vererbung',
        'Polymorphie',
        'Abstraktion'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Eine Unterklasse übernimmt Attribute und Methoden einer Oberklasse und kann diese erweitern oder spezialisieren.', loesung: 2 },
        { text: 'Komplexe Systeme werden auf ihre wesentlichen Eigenschaften reduziert; Implementierungsdetails werden verborgen.', loesung: 4 },
        { text: 'Die internen Daten eines Objekts werden vor direktem Zugriff geschützt; der Zugang erfolgt über definierte Schnittstellen.', loesung: 1 },
        { text: 'Ein und derselbe Methodenaufruf führt je nach Objekttyp zu unterschiedlichem Verhalten.', loesung: 3 }
      ],
      erklaerung: 'Die vier Grundprinzipien der OOP: Kapselung schützt die internen Daten (Information Hiding). Vererbung ermöglicht die Wiederverwendung von Code durch Spezialisierung. Polymorphie erlaubt, dass gleichnamige Methoden je nach Typ unterschiedlich reagieren. Abstraktion reduziert Komplexität, indem nur die relevanten Merkmale modelliert werden.'
    },
    {
      nr: 4, thema: 'oop', typ: 'einfach',
      text: 'Im Entwurf der Kundenverwaltung ist eine Beziehung zwischen „Kunde" und „Adresse" vorgesehen. Jeder Kunde hat genau eine Adresse, und das Adressobjekt wird zusammen mit dem Kundenobjekt erzeugt und gelöscht.',
      frage: 'Wie wird diese Beziehung in der objektorientierten Modellierung bezeichnet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bezeichnung in das Kästchen ein.',
      optionen: [
        'Vererbung – „Adresse" erbt von „Kunde".',
        'Assoziation – „Kunde" kennt „Adresse", beide existieren unabhängig voneinander.',
        'Aggregation – „Kunde" enthält „Adresse", die Adresse kann ohne den Kunden weiterexistieren.',
        'Komposition – „Kunde" enthält „Adresse", die Adresse existiert nicht ohne den Kunden.',
        'Implementierung – „Kunde" implementiert die Schnittstelle „Adresse".'
      ],
      loesung: 4,
      erklaerung: 'Komposition ist eine starke Form der Aggregation: Das Teilelement (Adresse) ist existenzabhängig vom Ganzen (Kunde). Wird das Kundenobjekt gelöscht, wird auch das Adressobjekt gelöscht. In UML wird die Komposition durch eine ausgefüllte Raute dargestellt.'
    },
    {
      nr: 5, thema: 'oop', typ: 'mehrfach',
      text: 'Die Klasse „Kunde" wird im Entwurf als abstrakte Klasse definiert.',
      frage: 'Welche der folgenden Aussagen zu abstrakten Klassen treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Von einer abstrakten Klasse können direkt Objekte erzeugt werden.',
        'Eine abstrakte Klasse kann abstrakte Methoden enthalten, die in Unterklassen implementiert werden müssen.',
        'Abstrakte Klassen dürfen keine konkreten (implementierten) Methoden enthalten.',
        'Eine abstrakte Klasse kann als gemeinsame Basis für Unterklassen dienen und gemeinsame Attribute definieren.',
        'Abstrakte Klassen können nicht vererbt werden.'
      ],
      loesung: [2, 4],
      erklaerung: 'Abstrakte Klassen können nicht instanziiert werden (Aussage 1 ist falsch). Sie dürfen sowohl abstrakte als auch konkrete Methoden enthalten (Aussage 3 ist falsch). Sie können vererbt werden – das ist ihr Hauptzweck (Aussage 5 ist falsch). Sie dienen als gemeinsame Basis (Aussage 4) und können abstrakte Methoden vorschreiben, die von Unterklassen implementiert werden müssen (Aussage 2).'
    },
    {
      nr: 6, thema: 'oop', typ: 'einfach',
      text: 'Im Entwicklerteam wird diskutiert, ob man für gemeinsame Fähigkeiten wie „Druckbar" und „Exportierbar" Schnittstellen (Interfaces) verwenden soll.',
      frage: 'Welche Aussage zu Schnittstellen (Interfaces) in der OOP ist zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Interface kann Attribute mit Standardwerten und fertig implementierte Methoden enthalten.',
        'Eine Klasse kann nur ein einziges Interface implementieren.',
        'Ein Interface definiert Methodensignaturen, die von implementierenden Klassen bereitgestellt werden müssen.',
        'Interfaces werden nur zur Dokumentation verwendet und haben keinen Einfluss auf den Programmcode.',
        'Interfaces ersetzen die Vererbung vollständig und machen Oberklassen überflüssig.'
      ],
      loesung: 3,
      erklaerung: 'Ein Interface definiert einen Vertrag: Es legt Methodensignaturen fest, die implementierende Klassen bereitstellen müssen. Eine Klasse kann mehrere Interfaces implementieren (Mehrfachimplementierung). Seit Java 8 können Interfaces auch Default-Methoden enthalten, in der Grunddefinition sind sie jedoch rein abstrakt.'
    },

    // --- Pseudocode / Schleifen (7–12) ---
    {
      nr: 7, thema: 'pseudocode', typ: 'zahl',
      text: 'Analysieren Sie den folgenden Pseudocode:',
      kasten: {
        titel: 'Pseudocode',
        absaetze: [
          'x ← 0',
          'FÜR i ← 1 BIS 5',
          '    x ← x + i',
          'ENDE FÜR',
          'AUSGABE x'
        ]
      },
      frage: 'Welchen Wert gibt das Programm aus?',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 15,
      erklaerung: 'Die Schleife addiert die Zahlen 1 bis 5: x = 0 + 1 + 2 + 3 + 4 + 5 = 15. Dies entspricht der Gaußschen Summenformel n × (n + 1) / 2 = 5 × 6 / 2 = 15.'
    },
    {
      nr: 8, thema: 'pseudocode', typ: 'einfach',
      text: 'Analysieren Sie den folgenden Pseudocode:',
      kasten: {
        titel: 'Pseudocode',
        absaetze: [
          'zahl ← 7',
          'WENN zahl MOD 2 = 0 DANN',
          '    AUSGABE "gerade"',
          'SONST',
          '    AUSGABE "ungerade"',
          'ENDE WENN'
        ]
      },
      frage: 'Welche Ausgabe erzeugt der Pseudocode?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Ausgabe in das Kästchen ein.',
      optionen: [
        '"gerade"',
        '"ungerade"',
        '"7"',
        'Es erfolgt keine Ausgabe, weil die Bedingung einen Fehler verursacht.',
        '"gerade" und "ungerade" nacheinander'
      ],
      loesung: 2,
      erklaerung: 'Der Modulo-Operator (MOD) liefert den Rest einer ganzzahligen Division. 7 MOD 2 = 1 (nicht 0), daher ist die Bedingung falsch und der SONST-Zweig wird ausgeführt: Ausgabe "ungerade".'
    },
    {
      nr: 9, thema: 'pseudocode', typ: 'zahl',
      text: 'Analysieren Sie den folgenden Pseudocode:',
      kasten: {
        titel: 'Pseudocode',
        absaetze: [
          'a ← 10',
          'b ← 3',
          'SOLANGE a > b',
          '    a ← a - b',
          'ENDE SOLANGE',
          'AUSGABE a'
        ]
      },
      frage: 'Welchen Wert gibt das Programm aus?',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 1,
      erklaerung: 'Durchlauf 1: a = 10 - 3 = 7 (7 > 3 → weiter). Durchlauf 2: a = 7 - 3 = 4 (4 > 3 → weiter). Durchlauf 3: a = 4 - 3 = 1 (1 > 3 ist falsch → Schleife endet). Ausgabe: 1. Der Algorithmus berechnet den Rest der Division 10 / 3 (Modulo-Operation).'
    },
    {
      nr: 10, thema: 'pseudocode', typ: 'einfach',
      text: 'Analysieren Sie den folgenden Pseudocode:',
      kasten: {
        titel: 'Pseudocode',
        absaetze: [
          'i ← 1',
          'WIEDERHOLE',
          '    AUSGABE i',
          '    i ← i + 1',
          'BIS i > 3'
        ]
      },
      frage: 'Welche Zahlen werden ausgegeben?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Ausgabe in das Kästchen ein.',
      optionen: [
        '1, 2, 3, 4',
        '1, 2, 3',
        '2, 3',
        '1, 2',
        '1'
      ],
      loesung: 2,
      erklaerung: 'WIEDERHOLE…BIS ist eine fußgesteuerte Schleife (Do-While): Der Schleifenkörper wird mindestens einmal ausgeführt, bevor die Bedingung geprüft wird. Durchlauf 1: Ausgabe 1, i = 2 (2 > 3? Nein). Durchlauf 2: Ausgabe 2, i = 3 (3 > 3? Nein). Durchlauf 3: Ausgabe 3, i = 4 (4 > 3? Ja → Ende). Ausgabe: 1, 2, 3.'
    },
    {
      nr: 11, thema: 'pseudocode', typ: 'zahl',
      text: 'Analysieren Sie den folgenden Pseudocode:',
      kasten: {
        titel: 'Pseudocode',
        absaetze: [
          'ergebnis ← 1',
          'FÜR i ← 1 BIS 4',
          '    ergebnis ← ergebnis * i',
          'ENDE FÜR',
          'AUSGABE ergebnis'
        ]
      },
      frage: 'Welchen Wert gibt das Programm aus?',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 24,
      erklaerung: 'Das Programm berechnet die Fakultät von 4: ergebnis = 1 × 1 × 2 × 3 × 4 = 24. Die Fakultät n! ist das Produkt aller natürlichen Zahlen von 1 bis n.'
    },
    {
      nr: 12, thema: 'pseudocode', typ: 'einfach',
      text: 'Bei der Entwicklung eines Algorithmus muss zwischen verschiedenen Kontrollstrukturen gewählt werden.',
      frage: 'Welche Aussage über den Unterschied zwischen einer kopfgesteuerten und einer fußgesteuerten Schleife trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Beide Schleifentypen prüfen die Bedingung vor dem Schleifendurchlauf.',
        'Eine kopfgesteuerte Schleife (SOLANGE) wird mindestens einmal durchlaufen, eine fußgesteuerte nicht.',
        'Eine fußgesteuerte Schleife (WIEDERHOLE…BIS) wird mindestens einmal durchlaufen, eine kopfgesteuerte nicht zwingend.',
        'Fußgesteuerte Schleifen können keine Zählvariable verwenden.',
        'Kopfgesteuerte und fußgesteuerte Schleifen sind funktional identisch und austauschbar.'
      ],
      loesung: 3,
      erklaerung: 'Bei einer kopfgesteuerten Schleife (SOLANGE/While) wird die Abbruchbedingung vor dem ersten Durchlauf geprüft – ist sie von Anfang an falsch, wird der Schleifenkörper nie ausgeführt. Bei einer fußgesteuerten Schleife (WIEDERHOLE…BIS / Do-While) wird die Bedingung erst nach dem ersten Durchlauf geprüft, sodass der Schleifenkörper mindestens einmal durchlaufen wird.'
    },

    // --- Algorithmen / Datenstrukturen (13–18) ---
    {
      nr: 13, thema: 'programmierung', typ: 'zuordnung',
      text: 'Im Team werden verschiedene Datenstrukturen und ihre typischen Einsatzbereiche besprochen.',
      frage: 'Welche Datenstruktur passt zur jeweiligen Beschreibung?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Datenstruktur in das Kästchen ein.',
      optionenTitel: 'Datenstrukturen',
      optionen: [
        'Array (Feld)',
        'Stack (Stapel)',
        'Queue (Warteschlange)',
        'Verkettete Liste'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Elemente werden nach dem Prinzip „First In – First Out" verarbeitet, z. B. Druckaufträge in einer Druckerwarteschlange.', loesung: 3 },
        { text: 'Elemente werden nach dem Prinzip „Last In – First Out" verarbeitet, z. B. der Zurück-Button im Browser.', loesung: 2 },
        { text: 'Elemente werden über einen ganzzahligen Index direkt angesprochen; die Größe steht bei der Erzeugung fest.', loesung: 1 },
        { text: 'Jedes Element verweist auf das nächste; das Einfügen und Löschen an beliebiger Stelle ist effizient.', loesung: 4 }
      ],
      erklaerung: 'Stack (LIFO): der Zurück-Button speichert Seiten auf einem Stapel. Queue (FIFO): Druckaufträge werden in Reihenfolge abgearbeitet. Array: feste Größe, Direktzugriff über Index in O(1). Verkettete Liste: dynamische Größe, Einfügen/Löschen in O(1) an bekannter Position, aber Suche in O(n).'
    },
    {
      nr: 14, thema: 'programmierung', typ: 'einfach',
      text: 'Ein Array enthält die sortierten Werte [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]. Gesucht wird der Wert 23.',
      frage: 'Wie viele Vergleiche benötigt die binäre Suche im schlechtesten Fall, um den Wert 23 in diesem Array zu finden?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anzahl in das Kästchen ein.',
      optionen: [
        '1 Vergleich',
        '2 Vergleiche',
        '3 Vergleiche',
        '4 Vergleiche',
        '10 Vergleiche'
      ],
      loesung: 4,
      erklaerung: 'Binäre Suche halbiert den Suchbereich bei jedem Schritt. Bei 10 Elementen: Schritt 1: Mitte = Index 4 (Wert 16, zu klein). Schritt 2: Mitte = Index 7 (Wert 56, zu groß). Schritt 3: Mitte = Index 5 (Wert 23, gefunden) – also 3 Vergleiche. Im schlechtesten Fall braucht die binäre Suche bei n Elementen ⌈log₂(n)⌉ Vergleiche, also ⌈log₂(10)⌉ = 4.'
    },
    {
      nr: 15, thema: 'programmierung', typ: 'einfach',
      text: 'Beim Sortieren eines Arrays mit 1.000 Elementen soll ein effizienter Algorithmus verwendet werden.',
      frage: 'Welche durchschnittliche Zeitkomplexität hat der Sortieralgorithmus Quicksort?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Zeitkomplexität in das Kästchen ein.',
      optionen: [
        'O(1)',
        'O(n)',
        'O(n log n)',
        'O(n²)',
        'O(2ⁿ)'
      ],
      loesung: 3,
      erklaerung: 'Quicksort hat im Durchschnitt eine Zeitkomplexität von O(n log n). Im schlechtesten Fall (z. B. bereits sortierte Daten bei ungünstiger Pivotwahl) liegt die Komplexität bei O(n²). Vergleichsbasierte Sortierverfahren können im Durchschnitt nicht besser als O(n log n) sein.'
    },
    {
      nr: 16, thema: 'programmierung', typ: 'reihenfolge',
      text: 'Das Array [5, 3, 8, 1] soll mit Bubblesort aufsteigend sortiert werden.',
      frage: 'Bringen Sie die Zustände des Arrays nach jedem vollständigen Durchlauf in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für den ersten Zustand die Ziffer 1, für den zweiten Zustand die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Array-Zustände nach Durchlauf',
      items: [
        { text: '[1, 3, 5, 8] – das Array ist vollständig sortiert', loesung: 3 },
        { text: '[3, 5, 1, 8] – das größte Element steht am Ende', loesung: 1 },
        { text: '[3, 1, 5, 8] – die zwei größten Elemente stehen am Ende', loesung: 2 }
      ],
      erklaerung: 'Bubblesort vergleicht benachbarte Elemente und tauscht sie bei falscher Reihenfolge. Durchlauf 1: [5,3,8,1] → [3,5,8,1] → [3,5,8,1] → [3,5,1,8]. Durchlauf 2: [3,5,1,8] → [3,5,1,8] → [3,1,5,8]. Durchlauf 3: [3,1,5,8] → [1,3,5,8]. Nach jedem Durchlauf „blubbert" das nächstgrößte Element an seine endgültige Position.'
    },
    {
      nr: 17, thema: 'programmierung', typ: 'einfach',
      text: 'Für eine Anwendung muss die passende Datenstruktur gewählt werden. Die Anforderung lautet: Daten sollen über einen eindeutigen Schlüssel (z. B. eine Kundennummer) in durchschnittlich konstanter Zeit gefunden werden.',
      frage: 'Welche Datenstruktur ist für diese Anforderung am besten geeignet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Datenstruktur in das Kästchen ein.',
      optionen: [
        'Sortiertes Array – Suche in O(log n)',
        'Einfach verkettete Liste – Suche in O(n)',
        'Hashtabelle (HashMap) – Suche im Durchschnitt in O(1)',
        'Binärer Suchbaum – Suche in O(log n)',
        'Stack – Zugriff nur auf das oberste Element'
      ],
      loesung: 3,
      erklaerung: 'Eine Hashtabelle (HashMap/Dictionary) speichert Schlüssel-Wert-Paare und ermöglicht den Zugriff über eine Hashfunktion in durchschnittlich O(1). Der Schlüssel wird durch die Hashfunktion auf einen Index im Array abgebildet. Bei Kollisionen kann die Zugriffszeit im Worst Case auf O(n) steigen.'
    },
    {
      nr: 18, thema: 'programmierung', typ: 'mehrfach',
      text: 'Ein Entwickler steht vor der Wahl zwischen einem Array und einer verketteten Liste.',
      frage: 'Bei welchen der folgenden Operationen ist ein Array einer einfach verketteten Liste überlegen?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Operationen in die Kästchen ein.',
      optionen: [
        'Einfügen eines Elements am Anfang der Datenstruktur',
        'Zugriff auf ein Element an einer bestimmten Position (Index)',
        'Löschen eines Elements aus der Mitte der Datenstruktur',
        'Zugriff auf das letzte Element über den Index',
        'Einfügen eines Elements an einer beliebigen Stelle, wenn die Position bereits bekannt ist'
      ],
      loesung: [2, 4],
      erklaerung: 'Arrays ermöglichen den Direktzugriff über den Index in O(1) – sowohl auf beliebige als auch auf das letzte Element. Verkettete Listen müssen für den Zugriff auf ein Element an Position n alle vorherigen Elemente durchlaufen (O(n)). Dafür ist das Einfügen und Löschen an bekannter Position in verketteten Listen effizienter (O(1) bei bekanntem Vorgänger).'
    },

    // --- Softwareentwicklung (19–25) ---
    {
      nr: 19, thema: 'softwareentwicklung', typ: 'einfach',
      text: 'Die Geschäftsführung möchte auf ein agiles Vorgehensmodell umstellen, bei dem in Zyklen von zwei bis vier Wochen ein funktionsfähiges Produktinkrement geliefert wird.',
      frage: 'Welches Vorgehensmodell wird beschrieben?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Vorgehensmodell in das Kästchen ein.',
      optionen: [
        'Wasserfallmodell',
        'V-Modell',
        'Scrum',
        'Spiralmodell',
        'Kanban'
      ],
      loesung: 3,
      erklaerung: 'Scrum ist ein agiles Framework, bei dem in festen Zeitabschnitten (Sprints, üblicherweise 2–4 Wochen) ein potenziell auslieferbares Produktinkrement erstellt wird. Zentrale Rollen sind Product Owner, Scrum Master und Entwicklungsteam. Das Wasserfallmodell und das V-Modell sind sequenzielle Vorgehensmodelle.'
    },
    {
      nr: 20, thema: 'softwareentwicklung', typ: 'zuordnung',
      text: 'In der Schulung werden verschiedene Testverfahren besprochen.',
      frage: 'Welches Testverfahren passt zur jeweiligen Beschreibung?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Testverfahren in das Kästchen ein.',
      optionenTitel: 'Testverfahren',
      optionen: [
        'Unit-Test',
        'Integrationstest',
        'Systemtest',
        'Abnahmetest'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Einzelne Methoden oder Funktionen werden isoliert mit vordefinierten Ein- und Ausgabewerten geprüft.', loesung: 1 },
        { text: 'Das Zusammenspiel mehrerer Module oder Komponenten wird überprüft, z. B. ob die Kundenverwaltung korrekt mit der Datenbank kommuniziert.', loesung: 2 },
        { text: 'Der Auftraggeber prüft, ob die Software die vereinbarten Anforderungen erfüllt, und gibt sie zur Nutzung frei.', loesung: 4 },
        { text: 'Das vollständige System wird in einer produktionsnahen Umgebung gegen die Anforderungsspezifikation getestet.', loesung: 3 }
      ],
      erklaerung: 'Die Teststufen folgen dem V-Modell: Unit-Tests prüfen einzelne Einheiten (Methoden/Funktionen). Integrationstests prüfen das Zusammenspiel von Komponenten. Systemtests prüfen das Gesamtsystem. Abnahmetests (Akzeptanztests) werden vom Auftraggeber durchgeführt und entscheiden über die Freigabe.'
    },
    {
      nr: 21, thema: 'softwareentwicklung', typ: 'einfach',
      text: 'Das Entwicklerteam nutzt Git als Versionskontrollsystem. Ein neues Feature soll in einem eigenen Branch entwickelt werden.',
      frage: 'Welcher Git-Befehl erstellt einen neuen Branch mit dem Namen „feature/kundenverwaltung" und wechselt gleichzeitig zu diesem Branch?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Befehl in das Kästchen ein.',
      optionen: [
        'git branch feature/kundenverwaltung',
        'git checkout -b feature/kundenverwaltung',
        'git merge feature/kundenverwaltung',
        'git push feature/kundenverwaltung',
        'git clone feature/kundenverwaltung'
      ],
      loesung: 2,
      erklaerung: 'git checkout -b <branchname> erstellt einen neuen Branch und wechselt direkt dorthin. Alternativ: git switch -c <branchname> (seit Git 2.23). git branch <name> erstellt den Branch nur, wechselt aber nicht. git merge führt Branches zusammen, git push überträgt an ein Remote-Repository.'
    },
    {
      nr: 22, thema: 'softwareentwicklung', typ: 'einfach',
      text: 'Beim Testen einer Funktion wird geprüft, ob sie für bestimmte Eingaben die erwarteten Ausgaben liefert. Der interne Aufbau der Funktion wird dabei nicht betrachtet.',
      frage: 'Wie wird dieses Testverfahren bezeichnet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bezeichnung in das Kästchen ein.',
      optionen: [
        'White-Box-Test – der interne Code wird analysiert.',
        'Black-Box-Test – die Funktion wird nur anhand ihrer Ein- und Ausgaben getestet.',
        'Regressionstest – es wird geprüft, ob bestehende Funktionen nach einer Änderung noch korrekt arbeiten.',
        'Lasttest – es wird geprüft, wie sich das System unter hoher Belastung verhält.',
        'Code-Review – der Quellcode wird von einem anderen Entwickler überprüft.'
      ],
      loesung: 2,
      erklaerung: 'Beim Black-Box-Test (funktionaler Test) wird die Software nur anhand der Spezifikation geprüft, ohne den internen Aufbau zu kennen. Im Gegensatz dazu berücksichtigt der White-Box-Test (struktureller Test) die interne Struktur des Codes, z. B. Anweisungs- und Zweigüberdeckung.'
    },
    {
      nr: 23, thema: 'softwareentwicklung', typ: 'reihenfolge',
      text: 'Ein neues Softwareprojekt soll nach dem klassischen Wasserfallmodell durchgeführt werden.',
      frage: 'Bringen Sie die Phasen des Wasserfallmodells in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für die erste Phase die Ziffer 1, für die zweite Phase die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Phasen',
      items: [
        { text: 'Implementierung – das System wird programmiert', loesung: 3 },
        { text: 'Anforderungsanalyse – die Anforderungen an das System werden erfasst und dokumentiert', loesung: 1 },
        { text: 'Wartung – das System wird im Betrieb gepflegt und weiterentwickelt', loesung: 5 },
        { text: 'Test – das System wird gegen die Anforderungen geprüft', loesung: 4 },
        { text: 'Entwurf – die Architektur und das Design des Systems werden festgelegt', loesung: 2 }
      ],
      erklaerung: 'Das Wasserfallmodell durchläuft die Phasen streng sequenziell: 1. Anforderungsanalyse, 2. Entwurf (Design), 3. Implementierung, 4. Test (Verifikation), 5. Wartung (Betrieb). Ein Rücksprung in eine frühere Phase ist im klassischen Modell nicht vorgesehen, was als wesentlicher Nachteil gilt.'
    },
    {
      nr: 24, thema: 'softwareentwicklung', typ: 'einfach',
      text: 'Bei der Entwicklung der Kundenverwaltung soll ein Entwurfsmuster verwendet werden, das sicherstellt, dass von einer Klasse „Datenbankverbindung" nur genau ein Objekt existiert.',
      frage: 'Welches Entwurfsmuster (Design Pattern) wird beschrieben?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Entwurfsmuster in das Kästchen ein.',
      optionen: [
        'Observer (Beobachter)',
        'Singleton (Einzelstück)',
        'Factory (Fabrik)',
        'Adapter',
        'Strategy (Strategie)'
      ],
      loesung: 2,
      erklaerung: 'Das Singleton-Muster stellt sicher, dass von einer Klasse nur genau eine Instanz existiert und bietet einen globalen Zugriffspunkt darauf. Typischer Einsatz: Datenbankverbindungen, Konfigurationsmanager, Logger. Der Konstruktor wird als privat deklariert und der Zugriff erfolgt über eine statische Methode.'
    },
    {
      nr: 25, thema: 'softwareentwicklung', typ: 'einfach',
      text: 'Frau Schuster möchte die Softwarequalität sicherstellen und plant verschiedene Maßnahmen der Qualitätssicherung.',
      frage: 'Welche der folgenden Maßnahmen ist eine konstruktive (vorbeugende) Maßnahme der Qualitätssicherung?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Durchführung von Unit-Tests nach der Implementierung',
        'Verwendung von Coding-Richtlinien und Entwurfsmustern während der Entwicklung',
        'Auswertung von Fehlerprotokollen nach der Auslieferung',
        'Durchführung eines Abnahmetests durch den Kunden',
        'Analyse der Testabdeckung mit einem Coverage-Tool'
      ],
      loesung: 2,
      erklaerung: 'Konstruktive Maßnahmen der Qualitätssicherung wirken vorbeugend und werden während der Entwicklung eingesetzt: z. B. Coding-Richtlinien, Entwurfsmuster, Prototyping, Pair Programming. Analytische Maßnahmen prüfen dagegen nachträglich: Tests, Reviews, statische Codeanalyse, Metriken.'
    }
  ]
});
