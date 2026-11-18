// SQL-Übungssatz 2 – Fortgeschrittene Abfragen (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_SQL_SAETZE = window.WISO_SQL_SAETZE || []).push({
  id: 'sql-02',
  titel: 'SQL-Übungssatz 2',
  untertitel: 'Fortgeschrittene Abfragen',
  ausgangssituation:
    'Die MegaShop Online-Handel GmbH betreibt einen Webshop für Elektronik und Zubehör. Die Bestelldaten werden in einer relationalen Datenbank verwaltet.',

  situationen: [
    {
      von: 1, bis: 10,
      text: 'Die Datenbank enthält die Tabellen „Produkte" und „Kategorien" mit folgenden Spalten und Beispieldaten:',
      tabelle: {
        kopf: ['ProduktNr', 'Bezeichnung', 'KategorieNr', 'Preis', 'Lagerbestand'],
        zeilen: [
          ['1001', 'USB-C-Kabel 2 m', '10', '8.99', '350'],
          ['1002', 'Bluetooth-Lautsprecher', '20', '49.99', '82'],
          ['1003', 'Webcam HD 1080p', '10', '39.99', '0'],
          ['1004', 'Mechanische Tastatur', '10', '79.99', '45'],
          ['1005', 'Wireless Maus', '10', '24.99', '210'],
          ['1006', 'Smartphone-Hülle', 'NULL', '12.99', '500']
        ]
      }
    },
    {
      von: 1, bis: 10,
      titel: 'Tabelle „Kategorien"',
      text: '',
      tabelle: {
        kopf: ['KategorieNr', 'Name'],
        zeilen: [
          ['10', 'Computer-Zubehör'],
          ['20', 'Audio'],
          ['30', 'Smartphones'],
          ['40', 'Gaming']
        ]
      }
    },
    {
      von: 11, bis: 20,
      text: 'Die Datenbank enthält außerdem die Tabellen „Kunden", „Bestellungen" und „Bestellpositionen":',
      tabelle: {
        kopf: ['KundenNr', 'Vorname', 'Nachname', 'Email', 'Ort', 'Registrierung'],
        zeilen: [
          ['201', 'Laura', 'Meier', 'l.meier@mail.de', 'Berlin', '2024-01-15'],
          ['202', 'Tom', 'Krause', 'tk@example.com', 'München', '2024-03-22'],
          ['203', 'Sara', 'Yilmaz', 's.yilmaz@web.de', 'Hamburg', '2024-06-10'],
          ['204', 'Jan', 'Becker', 'j.becker@mail.de', 'Berlin', '2024-08-01'],
          ['205', 'Nina', 'Scholz', 'NULL', 'Köln', '2024-09-30']
        ]
      }
    },
    {
      von: 11, bis: 20,
      titel: 'Tabelle „Bestellungen"',
      text: '',
      tabelle: {
        kopf: ['BestellNr', 'KundenNr', 'Bestelldatum', 'Versandkosten'],
        zeilen: [
          ['5001', '201', '2025-01-10', '4.99'],
          ['5002', '201', '2025-02-14', '0.00'],
          ['5003', '202', '2025-02-20', '4.99'],
          ['5004', '203', '2025-03-05', '3.49'],
          ['5005', '204', '2025-03-12', '4.99']
        ]
      }
    },
    {
      von: 11, bis: 20,
      titel: 'Tabelle „Bestellpositionen"',
      text: '',
      tabelle: {
        kopf: ['BestellNr', 'ProduktNr', 'Menge', 'Einzelpreis'],
        zeilen: [
          ['5001', '1001', '2', '8.99'],
          ['5001', '1004', '1', '79.99'],
          ['5002', '1005', '3', '24.99'],
          ['5003', '1002', '1', '49.99'],
          ['5004', '1001', '5', '8.99'],
          ['5005', '1004', '1', '79.99']
        ]
      }
    }
  ],

  aufgaben: [
    // 1 – WHERE mit AND
    {
      nr: 1, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Produkte angezeigt werden, die mehr als 20,00 EUR kosten und von denen mehr als 50 Stück auf Lager sind.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT * FROM Produkte WHERE Preis > 20 AND Lagerbestand > 50',
        'SELECT * FROM Produkte WHERE Preis > 20 OR Lagerbestand > 50',
        'SELECT * FROM Produkte WHERE Preis > 20, Lagerbestand > 50',
        'SELECT * FROM Produkte WHERE Preis > 20 ALSO Lagerbestand > 50',
        'SELECT * FROM Produkte WHERE Preis > 20 & Lagerbestand > 50'
      ],
      loesung: 1,
      erklaerung: 'AND verknüpft zwei Bedingungen, die beide erfüllt sein müssen. OR wäre wahr, wenn mindestens eine Bedingung zutrifft. Ein Komma, ALSO oder & sind keine gültigen logischen Operatoren in SQL.'
    },
    // 2 – WHERE mit OR und NOT
    {
      nr: 2, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Produkte angezeigt werden, die nicht zur Kategorie 10 gehören.',
      frage: 'Welche WHERE-Bedingung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bedingung in das Kästchen ein.',
      optionen: [
        'WHERE KategorieNr != 10',
        'WHERE NOT KategorieNr = 10',
        'WHERE KategorieNr <> 10',
        'WHERE EXCLUDE KategorieNr = 10',
        'WHERE KategorieNr NOT 10'
      ],
      loesung: 3,
      erklaerung: 'In Standard-SQL ist <> der Ungleichheitsoperator. != funktioniert in vielen Datenbanksystemen ebenfalls, ist aber nicht Teil des SQL-Standards. NOT KategorieNr = 10 wäre syntaktisch korrekt als NOT (KategorieNr = 10), ohne Klammern ist es missverständlich. EXCLUDE existiert nicht als Operator.'
    },
    // 3 – WHERE mit IN
    {
      nr: 3, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Kunden aus Berlin, München oder Hamburg angezeigt werden.',
      frage: 'Welche WHERE-Bedingung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bedingung in das Kästchen ein.',
      optionen: [
        "WHERE Ort = 'Berlin' AND Ort = 'München' AND Ort = 'Hamburg'",
        "WHERE Ort = ('Berlin', 'München', 'Hamburg')",
        "WHERE Ort LIKE ('Berlin', 'München', 'Hamburg')",
        "WHERE Ort IN ('Berlin', 'München', 'Hamburg')",
        "WHERE Ort BETWEEN 'Berlin' AND 'Hamburg'"
      ],
      loesung: 4,
      erklaerung: 'IN prüft, ob ein Wert in einer angegebenen Liste enthalten ist. Die Variante mit AND wäre nie wahr, weil ein Ort nicht gleichzeitig drei Werte haben kann (hier wäre OR richtig). BETWEEN vergleicht Bereiche, nicht Einzelwerte. LIKE erlaubt Mustervergleiche, aber keine Listen.'
    },
    // 4 – WHERE mit IS NULL
    {
      nr: 4, thema: 'sql-where', typ: 'sql',
      text: 'Es sollen alle Produkte angezeigt werden, denen keine Kategorie zugewiesen ist (KategorieNr ist NULL).',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT * FROM Produkte WHERE KategorieNr IS NULL',
      erklaerung: 'NULL ist ein spezieller Wert, der „kein Wert vorhanden" bedeutet. Man prüft mit IS NULL (nicht mit = NULL), weil NULL keine normale Vergleichsoperation erlaubt – jeder Vergleich mit NULL ergibt UNKNOWN.'
    },
    // 5 – Spaltenaliase mit AS
    {
      nr: 5, thema: 'sql-select', typ: 'einfach', codeOptionen: true,
      text: 'Die Spalte „Bezeichnung" soll in der Ergebnistabelle als „Produktname" angezeigt werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT Bezeichnung RENAME Produktname FROM Produkte',
        'SELECT Bezeichnung AS Produktname FROM Produkte',
        'SELECT Bezeichnung = Produktname FROM Produkte',
        'SELECT Bezeichnung -> Produktname FROM Produkte',
        'SELECT Bezeichnung LABEL Produktname FROM Produkte'
      ],
      loesung: 2,
      erklaerung: 'Mit AS wird einer Spalte oder einem Ausdruck ein Alias (Anzeigename) zugewiesen. RENAME, LABEL und -> sind keine SQL-Schlüsselwörter für Aliase.'
    },
    // 6 – DISTINCT mit mehreren Spalten
    {
      nr: 6, thema: 'sql-select', typ: 'sql',
      text: 'Es sollen alle unterschiedlichen Kombinationen aus Ort und Registrierungsjahr der Kunden angezeigt werden, ohne Doppelungen.',
      frage: 'Schreiben Sie die passende SQL-Abfrage. Verwenden Sie für das Jahr die Funktion YEAR(Registrierung).',
      loesung: 'SELECT DISTINCT Ort, YEAR(Registrierung) FROM Kunden',
      loesungVarianten: [
        'SELECT DISTINCT Ort, YEAR(Registrierung) AS Jahr FROM Kunden'
      ],
      erklaerung: 'DISTINCT wirkt auf die gesamte Zeile, also auf die Kombination aller ausgewählten Spalten. Zwei Kunden aus Berlin mit unterschiedlichem Registrierungsjahr ergeben zwei Zeilen.'
    },
    // 7 – ORDER BY mit mehreren Spalten
    {
      nr: 7, thema: 'sql-sortierung', typ: 'einfach', codeOptionen: true,
      text: 'Die Produkte sollen zuerst nach Preis absteigend (teuerste zuerst) und bei gleichem Preis nach Bezeichnung alphabetisch sortiert werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT * FROM Produkte ORDER BY Preis DESC AND Bezeichnung ASC',
        'SELECT * FROM Produkte ORDER BY Preis DESC, Bezeichnung ASC',
        'SELECT * FROM Produkte SORT BY Preis DESC, Bezeichnung ASC',
        'SELECT * FROM Produkte ORDER BY Preis DOWN, Bezeichnung UP',
        'SELECT * FROM Produkte ORDER BY (Preis DESC) (Bezeichnung ASC)'
      ],
      loesung: 2,
      erklaerung: 'Mehrere Sortierkriterien werden durch Komma getrennt. Das erste Kriterium hat Vorrang. DESC = absteigend, ASC = aufsteigend (Standard). AND ist ein logischer Operator, kein Trennzeichen für Sortierkriterien.'
    },
    // 8 – TOP / LIMIT
    {
      nr: 8, thema: 'sql-sortierung', typ: 'sql',
      text: 'Es sollen nur die 5 teuersten Produkte angezeigt werden (Bezeichnung und Preis, absteigend nach Preis sortiert).',
      frage: 'Schreiben Sie die passende SQL-Abfrage. Verwenden Sie SELECT TOP.',
      loesung: 'SELECT TOP 5 Bezeichnung, Preis FROM Produkte ORDER BY Preis DESC',
      erklaerung: 'SELECT TOP n begrenzt die Ergebnismenge auf die ersten n Zeilen. In Kombination mit ORDER BY DESC werden die höchsten Werte zuerst sortiert und dann die obersten 5 zurückgegeben. In MySQL wird stattdessen LIMIT 5 am Ende der Abfrage verwendet.'
    },
    // 9 – COUNT mit WHERE
    {
      nr: 9, thema: 'sql-aggregat', typ: 'einfach', codeOptionen: true,
      text: 'Es soll gezählt werden, wie viele Produkte einen Lagerbestand von 0 haben (nicht lieferbar).',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT COUNT(*) FROM Produkte WHERE Lagerbestand = 0',
        'SELECT COUNT(Lagerbestand = 0) FROM Produkte',
        'SELECT SUM(*) FROM Produkte WHERE Lagerbestand = 0',
        'SELECT TOTAL(*) FROM Produkte WHERE Lagerbestand = 0',
        'SELECT COUNT(*) FROM Produkte HAVING Lagerbestand = 0'
      ],
      loesung: 1,
      erklaerung: 'COUNT(*) zählt die Zeilen, die die WHERE-Bedingung erfüllen. COUNT(Bedingung) ist kein gültiger Ausdruck. SUM summiert Werte, zählt aber nicht. HAVING wird nach GROUP BY verwendet, nicht statt WHERE.'
    },
    // 10 – SUM mit Berechnung
    {
      nr: 10, thema: 'sql-aggregat', typ: 'sql',
      text: 'Es soll der Gesamtwert aller Bestellpositionen berechnet werden (Menge × Einzelpreis). Das Ergebnis soll als „Gesamtumsatz" angezeigt werden.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT SUM(Menge * Einzelpreis) AS Gesamtumsatz FROM Bestellpositionen',
      erklaerung: 'SUM() kann nicht nur Spalten summieren, sondern auch berechnete Ausdrücke. Menge * Einzelpreis ergibt den Positionswert, und SUM() addiert alle Positionswerte. Mit AS wird das Ergebnis benannt.'
    },
    // 11 – MIN und MAX
    {
      nr: 11, thema: 'sql-aggregat', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen der niedrigste und der höchste Produktpreis in einer einzigen Abfrage ermittelt werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT MIN(Preis), MAX(Preis) FROM Produkte',
        'SELECT LOWEST(Preis), HIGHEST(Preis) FROM Produkte',
        'SELECT BOTTOM(Preis), TOP(Preis) FROM Produkte',
        'SELECT MIN(Preis) AND MAX(Preis) FROM Produkte',
        'SELECT RANGE(Preis) FROM Produkte'
      ],
      loesung: 1,
      erklaerung: 'MIN() und MAX() sind SQL-Aggregatfunktionen, die den kleinsten bzw. größten Wert einer Spalte liefern. Beide können in einer SELECT-Anweisung kombiniert werden, getrennt durch Komma. LOWEST, HIGHEST, BOTTOM, TOP (als Funktion) und RANGE sind keine SQL-Aggregatfunktionen.'
    },
    // 12 – LEFT JOIN
    {
      nr: 12, thema: 'sql-join', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Kunden mit ihren Bestellungen angezeigt werden. Auch Kunden, die noch nie bestellt haben, sollen im Ergebnis erscheinen.',
      frage: 'Welcher JOIN-Typ ist hier richtig?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden JOIN in das Kästchen ein.',
      optionen: [
        'INNER JOIN',
        'LEFT JOIN',
        'RIGHT JOIN',
        'CROSS JOIN',
        'SELF JOIN'
      ],
      loesung: 2,
      erklaerung: 'LEFT JOIN gibt alle Zeilen der linken Tabelle (Kunden) zurück, auch wenn in der rechten Tabelle (Bestellungen) keine Übereinstimmung existiert. INNER JOIN würde Kunden ohne Bestellung weglassen. CROSS JOIN bildet das kartesische Produkt. SELF JOIN verknüpft eine Tabelle mit sich selbst.'
    },
    // 13 – JOIN Produkte mit Kategorien
    {
      nr: 13, thema: 'sql-join', typ: 'sql',
      text: 'Es sollen die Bezeichnung und der Preis aller Produkte zusammen mit dem Namen ihrer Kategorie angezeigt werden. Produkte ohne Kategorie sollen nicht erscheinen.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT Bezeichnung, Preis, Name FROM Produkte INNER JOIN Kategorien ON Produkte.KategorieNr = Kategorien.KategorieNr",
      loesungVarianten: [
        "SELECT p.Bezeichnung, p.Preis, k.Name FROM Produkte p INNER JOIN Kategorien k ON p.KategorieNr = k.KategorieNr",
        "SELECT Bezeichnung, Preis, Name FROM Produkte JOIN Kategorien ON Produkte.KategorieNr = Kategorien.KategorieNr"
      ],
      erklaerung: 'INNER JOIN verknüpft zwei Tabellen über die gemeinsame Spalte KategorieNr. Nur Zeilen mit Übereinstimmung in beiden Tabellen werden zurückgegeben – Produkte ohne zugewiesene Kategorie (NULL) erscheinen nicht.'
    },
    // 14 – Drei-Tabellen-JOIN
    {
      nr: 14, thema: 'sql-join', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen die Bestellnummer, das Bestelldatum und die Produktbezeichnung aller bestellten Artikel angezeigt werden. Dazu müssen die Tabellen „Bestellungen", „Bestellpositionen" und „Produkte" verknüpft werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT BestellNr, Bestelldatum, Bezeichnung FROM Bestellungen, Bestellpositionen, Produkte',
        'SELECT BestellNr, Bestelldatum, Bezeichnung FROM Bestellungen INNER JOIN Bestellpositionen ON Bestellungen.BestellNr = Bestellpositionen.BestellNr INNER JOIN Produkte ON Bestellpositionen.ProduktNr = Produkte.ProduktNr',
        'SELECT BestellNr, Bestelldatum, Bezeichnung FROM Bestellungen INNER JOIN Bestellpositionen AND Produkte',
        'SELECT BestellNr, Bestelldatum, Bezeichnung FROM Bestellungen LINK Bestellpositionen LINK Produkte',
        'SELECT BestellNr, Bestelldatum, Bezeichnung FROM Bestellungen INNER JOIN (Bestellpositionen, Produkte)'
      ],
      loesung: 2,
      erklaerung: 'Für drei Tabellen werden zwei INNER JOIN-Klauseln mit jeweils einer ON-Bedingung benötigt. Option 1 (Komma-Trennung) erzeugt ein kartesisches Produkt ohne Verknüpfungsbedingung. AND, LINK und die Klammer-Syntax sind keine gültigen JOIN-Varianten.'
    },
    // 15 – GROUP BY mit COUNT
    {
      nr: 15, thema: 'sql-gruppierung', typ: 'einfach', codeOptionen: true,
      text: 'Es soll ermittelt werden, wie viele Bestellungen jeder Kunde aufgegeben hat. Ausgegeben werden sollen KundenNr und die Anzahl.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT KundenNr, COUNT(*) FROM Bestellungen',
        'SELECT KundenNr, COUNT(*) FROM Bestellungen ORDER BY KundenNr',
        'SELECT KundenNr, COUNT(*) FROM Bestellungen GROUP BY KundenNr',
        'SELECT KundenNr, COUNT(*) FROM Bestellungen HAVING KundenNr',
        'SELECT KundenNr, SUM(*) FROM Bestellungen GROUP BY KundenNr'
      ],
      loesung: 3,
      erklaerung: 'GROUP BY fasst alle Zeilen mit gleichem Wert in KundenNr zusammen. COUNT(*) zählt dann die Zeilen je Gruppe. Ohne GROUP BY wäre die Angabe von KundenNr neben COUNT(*) ungültig. SUM(*) existiert nicht – SUM erwartet eine numerische Spalte.'
    },
    // 16 – GROUP BY mit HAVING und SUM
    {
      nr: 16, thema: 'sql-gruppierung', typ: 'sql',
      text: 'Es sollen die Produkte angezeigt werden, die insgesamt mehr als 3-mal bestellt wurden (Summe der Menge über alle Bestellpositionen). Ausgegeben werden sollen ProduktNr und die Gesamtmenge.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT ProduktNr, SUM(Menge) FROM Bestellpositionen GROUP BY ProduktNr HAVING SUM(Menge) > 3',
      loesungVarianten: [
        'SELECT ProduktNr, SUM(Menge) AS Gesamtmenge FROM Bestellpositionen GROUP BY ProduktNr HAVING SUM(Menge) > 3'
      ],
      erklaerung: 'GROUP BY gruppiert die Bestellpositionen nach ProduktNr, SUM(Menge) addiert die Mengen je Produkt. HAVING filtert die Gruppen nach dem Ergebnis der Aggregatfunktion. WHERE könnte hier nicht verwendet werden, weil SUM erst nach der Gruppierung berechnet wird.'
    },
    // 17 – Unterabfrage mit IN
    {
      nr: 17, thema: 'sql-unterabfragen', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Kunden angezeigt werden, die mindestens eine Bestellung aufgegeben haben.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT * FROM Kunden WHERE KundenNr IN (SELECT KundenNr FROM Bestellungen)',
        'SELECT * FROM Kunden WHERE KundenNr = (SELECT KundenNr FROM Bestellungen)',
        'SELECT * FROM Kunden WHERE KundenNr IN Bestellungen.KundenNr',
        'SELECT * FROM Kunden WHERE EXISTS Bestellungen',
        'SELECT * FROM Kunden WHERE KundenNr CONTAINS (SELECT KundenNr FROM Bestellungen)'
      ],
      loesung: 1,
      erklaerung: 'Die Unterabfrage liefert alle KundenNr, die in Bestellungen vorkommen. IN prüft, ob der Wert in dieser Liste enthalten ist. Option 2 mit = würde einen Fehler erzeugen, weil die Unterabfrage mehrere Zeilen liefert. CONTAINS ist kein SQL-Operator für diesen Zweck.'
    },
    // 18 – Unterabfrage mit Vergleich
    {
      nr: 18, thema: 'sql-unterabfragen', typ: 'sql',
      text: 'Es sollen alle Produkte angezeigt werden, deren Preis über dem Durchschnittspreis aller Produkte liegt.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT * FROM Produkte WHERE Preis > (SELECT AVG(Preis) FROM Produkte)',
      erklaerung: 'Die Unterabfrage berechnet den Durchschnittspreis und liefert einen einzelnen Wert. Dieser kann direkt mit > verglichen werden. AVG() darf nicht in der äußeren WHERE-Klausel stehen, deshalb ist die Unterabfrage nötig.'
    },
    // 19 – EXISTS
    {
      nr: 19, thema: 'sql-unterabfragen', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Kunden angezeigt werden, für die mindestens eine Bestellung existiert. Es soll EXISTS verwendet werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT * FROM Kunden WHERE EXISTS (SELECT 1 FROM Bestellungen WHERE Bestellungen.KundenNr = Kunden.KundenNr)',
        'SELECT * FROM Kunden WHERE EXISTS Bestellungen',
        'SELECT * FROM Kunden WHERE EXISTS (SELECT * FROM Bestellungen)',
        'SELECT * FROM Kunden WHERE HAS (SELECT 1 FROM Bestellungen WHERE KundenNr = Kunden.KundenNr)',
        'SELECT * FROM Kunden WHERE EXISTS IN (SELECT KundenNr FROM Bestellungen)'
      ],
      loesung: 1,
      erklaerung: 'EXISTS prüft, ob die Unterabfrage mindestens eine Zeile liefert. Die Unterabfrage muss die äußere Tabelle referenzieren (hier: Kunden.KundenNr), damit für jeden Kunden einzeln geprüft wird (korrelierte Unterabfrage). Option 3 ohne WHERE-Bezug wäre immer wahr, wenn Bestellungen existieren.'
    },
    // 20 – Komplexes WHERE mit LIKE, AND, OR
    {
      nr: 20, thema: 'sql-where', typ: 'sql',
      text: 'Es sollen alle Produkte angezeigt werden, deren Bezeichnung mit „Wireless" beginnt oder deren Preis unter 15,00 EUR liegt, und die gleichzeitig einen Lagerbestand von mehr als 0 haben.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT * FROM Produkte WHERE (Bezeichnung LIKE 'Wireless%' OR Preis < 15) AND Lagerbestand > 0",
      loesungVarianten: [
        "SELECT * FROM Produkte WHERE (Bezeichnung LIKE 'Wireless%' OR Preis < 15.00) AND Lagerbestand > 0"
      ],
      erklaerung: 'Die Klammern um die OR-Bedingung sind wichtig, weil AND stärker bindet als OR. Ohne Klammern würde „Preis < 15 AND Lagerbestand > 0" zuerst ausgewertet – Produkte mit „Wireless" im Namen würden dann unabhängig vom Lagerbestand erscheinen.'
    }
  ]
});
