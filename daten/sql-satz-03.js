// SQL-Übungssatz 3 – Datenbankstruktur und Datenmanipulation (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_SQL_SAETZE = window.WISO_SQL_SAETZE || []).push({
  id: 'sql-03',
  titel: 'SQL-Übungssatz 3',
  untertitel: 'Datenbankstruktur und Datenmanipulation',
  ausgangssituation:
    'Die Stadtbibliothek Nordpark verwaltet ihren Bestand und die Ausleihen in einer relationalen Datenbank. Die folgenden Aufgaben befassen sich mit der Struktur und den Daten dieser Datenbank.',

  situationen: [
    {
      von: 1, bis: 8,
      text: 'Die Datenbank enthält folgende Tabellen mit Beispieldaten:',
      tabelle: {
        kopf: ['BuchNr', 'Titel', 'AutorNr', 'GenreNr', 'ISBN', 'Erscheinungsjahr', 'Verfuegbar'],
        zeilen: [
          ['1', 'Der Prozess', '10', '1', '978-3-596-90042-5', '1925', '1'],
          ['2', 'Die Vermessung der Welt', '11', '1', '978-3-499-24100-0', '2005', '1'],
          ['3', 'Tintenherz', '12', '2', '978-3-7915-0465-1', '2003', '0'],
          ['4', 'Das Parfum', '13', '1', '978-3-257-22800-7', '1985', '1'],
          ['5', 'Momo', '14', '2', '978-3-522-20231-5', '1973', '0']
        ]
      }
    },
    {
      von: 1, bis: 8,
      titel: 'Tabelle „Autoren"',
      text: '',
      tabelle: {
        kopf: ['AutorNr', 'Vorname', 'Nachname', 'Land'],
        zeilen: [
          ['10', 'Franz', 'Kafka', 'Österreich'],
          ['11', 'Daniel', 'Kehlmann', 'Deutschland'],
          ['12', 'Cornelia', 'Funke', 'Deutschland'],
          ['13', 'Patrick', 'Süskind', 'Deutschland']
        ]
      }
    },
    {
      von: 1, bis: 8,
      titel: 'Tabelle „Genres"',
      text: '',
      tabelle: {
        kopf: ['GenreNr', 'Bezeichnung'],
        zeilen: [
          ['1', 'Roman'],
          ['2', 'Kinderbuch'],
          ['3', 'Sachbuch']
        ]
      }
    },
    {
      von: 9, bis: 14,
      text: 'Die Datenbank enthält außerdem die Tabellen „Mitglieder" und „Ausleihen":',
      tabelle: {
        kopf: ['MitgliedNr', 'Vorname', 'Nachname', 'Geburtsdatum', 'Eintrittsdatum', 'Aktiv'],
        zeilen: [
          ['201', 'Lena', 'Koch', '1990-04-12', '2020-01-15', '1'],
          ['202', 'Markus', 'Berger', '1985-09-30', '2019-06-01', '1'],
          ['203', 'Sophie', 'Klein', '2001-11-05', '2022-03-10', '0'],
          ['204', 'Jonas', 'Richter', '1998-02-18', '2023-08-20', '1']
        ]
      }
    },
    {
      von: 9, bis: 14,
      titel: 'Tabelle „Ausleihen"',
      text: '',
      tabelle: {
        kopf: ['AusleihNr', 'MitgliedNr', 'BuchNr', 'Ausleihdatum', 'Rueckgabedatum'],
        zeilen: [
          ['301', '201', '3', '2024-10-01', '2024-10-15'],
          ['302', '202', '1', '2024-10-05', '2024-10-20'],
          ['303', '201', '5', '2024-11-01', 'NULL'],
          ['304', '204', '2', '2024-11-03', 'NULL'],
          ['305', '202', '4', '2024-09-10', '2024-09-25']
        ]
      }
    },
    {
      von: 15, bis: 20,
      text: 'Die Bibliothek erweitert ihre Datenbank um neue Tabellen und Spalten, um Räume für Lesungen und Veranstaltungen zu verwalten.'
    }
  ],

  aufgaben: [
    // --- DDL: CREATE TABLE ---
    {
      nr: 1, thema: 'sql-ddl', typ: 'einfach', codeOptionen: true,
      text: 'Die Bibliothek möchte eine neue Tabelle anlegen, in der die Räume für Veranstaltungen gespeichert werden.',
      frage: 'Welches SQL-Schlüsselwort wird verwendet, um eine neue Tabelle zu erstellen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Schlüsselwort in das Kästchen ein.',
      optionen: [
        'NEW TABLE',
        'ADD TABLE',
        'CREATE TABLE',
        'MAKE TABLE',
        'INSERT TABLE'
      ],
      loesung: 3,
      erklaerung: 'CREATE TABLE ist der DDL-Befehl (Data Definition Language) zum Anlegen einer neuen Tabelle. NEW TABLE, ADD TABLE, MAKE TABLE und INSERT TABLE existieren nicht in Standard-SQL.'
    },
    {
      nr: 2, thema: 'sql-ddl', typ: 'sql',
      text: 'Es soll eine neue Tabelle „Raeume" mit folgenden Spalten erstellt werden: RaumNr (Ganzzahl, Primärschlüssel), Bezeichnung (Text, maximal 50 Zeichen) und Kapazitaet (Ganzzahl).',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: 'CREATE TABLE Raeume (RaumNr INT PRIMARY KEY, Bezeichnung VARCHAR(50), Kapazitaet INT)',
      loesungVarianten: [
        'CREATE TABLE Raeume (RaumNr INTEGER PRIMARY KEY, Bezeichnung VARCHAR(50), Kapazitaet INTEGER)',
        'CREATE TABLE Raeume (RaumNr INT PRIMARY KEY, Bezeichnung VARCHAR(50), Kapazitaet INT);'
      ],
      erklaerung: 'CREATE TABLE definiert den Tabellennamen und in Klammern die Spalten mit Datentyp. PRIMARY KEY kennzeichnet die Spalte, die jeden Datensatz eindeutig identifiziert. INT und INTEGER sind gleichwertig.'
    },
    {
      nr: 3, thema: 'sql-ddl', typ: 'einfach', codeOptionen: true,
      text: 'Beim Erstellen einer Tabelle muss für jede Spalte ein Datentyp angegeben werden. Eine Spalte soll ein Datum speichern.',
      frage: 'Welcher Datentyp ist für ein Datumsfeld korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Datentyp in das Kästchen ein.',
      optionen: [
        'VARCHAR(10)',
        'DATE',
        'INT',
        'DATETIME_STRING',
        'CALENDAR'
      ],
      loesung: 2,
      erklaerung: 'DATE ist der SQL-Datentyp für Datumswerte (z. B. 2024-11-15). VARCHAR speichert Text, INT speichert Ganzzahlen. DATETIME_STRING und CALENDAR existieren nicht als SQL-Datentypen.'
    },
    {
      nr: 4, thema: 'sql-ddl', typ: 'einfach', codeOptionen: true,
      text: 'In der Tabelle „Buecher" ist die Spalte BuchNr als PRIMARY KEY definiert.',
      frage: 'Welche Aussage beschreibt die Aufgabe eines PRIMARY KEY korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Er verschlüsselt die Daten in der Spalte.',
        'Er stellt sicher, dass jeder Wert in der Spalte eindeutig ist und nicht NULL sein darf.',
        'Er sortiert die Tabelle automatisch nach dieser Spalte.',
        'Er verhindert, dass die Tabelle gelöscht werden kann.',
        'Er legt fest, dass die Spalte nur Zahlen enthalten darf.'
      ],
      loesung: 2,
      erklaerung: 'Ein PRIMARY KEY (Primärschlüssel) identifiziert jeden Datensatz eindeutig. Er erzwingt Eindeutigkeit (kein doppelter Wert) und verbietet NULL-Werte. Er hat nichts mit Verschlüsselung, Sortierung oder Löschschutz zu tun.'
    },
    {
      nr: 5, thema: 'sql-ddl', typ: 'sql',
      text: 'Die bestehende Tabelle „Buecher" soll um eine neue Spalte „Seitenzahl" (Ganzzahl) erweitert werden.',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: 'ALTER TABLE Buecher ADD Seitenzahl INT',
      loesungVarianten: [
        'ALTER TABLE Buecher ADD COLUMN Seitenzahl INT',
        'ALTER TABLE Buecher ADD Seitenzahl INTEGER',
        'ALTER TABLE Buecher ADD COLUMN Seitenzahl INTEGER'
      ],
      erklaerung: 'ALTER TABLE ändert die Struktur einer bestehenden Tabelle. ADD (oder ADD COLUMN) fügt eine neue Spalte hinzu. Die bestehenden Daten bleiben erhalten; die neue Spalte ist zunächst in allen Zeilen NULL.'
    },
    {
      nr: 6, thema: 'sql-ddl', typ: 'einfach', codeOptionen: true,
      text: 'Die Tabelle „Buecher" enthält die Spalte AutorNr. Diese verweist auf die Spalte AutorNr in der Tabelle „Autoren".',
      frage: 'Welches Konzept beschreibt diese Beziehung zwischen zwei Tabellen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Konzept in das Kästchen ein.',
      optionen: [
        'PRIMARY KEY',
        'UNIQUE INDEX',
        'FOREIGN KEY',
        'CHECK CONSTRAINT',
        'DEFAULT VALUE'
      ],
      loesung: 3,
      erklaerung: 'Ein FOREIGN KEY (Fremdschlüssel) verweist auf den PRIMARY KEY einer anderen Tabelle und stellt die referenzielle Integrität sicher: Es darf kein Wert eingetragen werden, der in der referenzierten Tabelle nicht existiert.'
    },
    {
      nr: 7, thema: 'sql-ddl', typ: 'einfach', codeOptionen: true,
      text: 'Die Bibliothek möchte eine veraltete Tabelle „AltBestand" vollständig entfernen, also sowohl die Daten als auch die Tabellenstruktur.',
      frage: 'Welche SQL-Anweisung ist dafür korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anweisung in das Kästchen ein.',
      optionen: [
        'DELETE TABLE AltBestand',
        'REMOVE TABLE AltBestand',
        'DROP TABLE AltBestand',
        'DELETE FROM AltBestand',
        'ERASE TABLE AltBestand'
      ],
      loesung: 3,
      erklaerung: 'DROP TABLE löscht die gesamte Tabelle einschließlich Struktur und aller Daten. DELETE FROM löscht nur die Daten (Zeilen), die Tabelle bleibt bestehen. DELETE TABLE, REMOVE TABLE und ERASE TABLE existieren nicht in SQL.'
    },
    {
      nr: 8, thema: 'sql-ddl', typ: 'sql',
      text: 'Es soll eine neue Tabelle „Veranstaltungen" erstellt werden mit den Spalten: VeranstaltungNr (Ganzzahl, Primärschlüssel), Titel (Text, maximal 100 Zeichen), RaumNr (Ganzzahl, Fremdschlüssel auf Raeume.RaumNr) und Datum (Datum).',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: 'CREATE TABLE Veranstaltungen (VeranstaltungNr INT PRIMARY KEY, Titel VARCHAR(100), RaumNr INT REFERENCES Raeume(RaumNr), Datum DATE)',
      loesungVarianten: [
        'CREATE TABLE Veranstaltungen (VeranstaltungNr INT PRIMARY KEY, Titel VARCHAR(100), RaumNr INT, Datum DATE, FOREIGN KEY (RaumNr) REFERENCES Raeume(RaumNr))',
        'CREATE TABLE Veranstaltungen (VeranstaltungNr INTEGER PRIMARY KEY, Titel VARCHAR(100), RaumNr INTEGER REFERENCES Raeume(RaumNr), Datum DATE)'
      ],
      erklaerung: 'FOREIGN KEY kann direkt hinter der Spalte als REFERENCES Tabelle(Spalte) oder als eigene Klausel am Ende der Spaltenliste definiert werden. Beide Schreibweisen sind gleichwertig.'
    },

    // --- DML: INSERT, UPDATE, DELETE ---
    {
      nr: 9, thema: 'sql-dml', typ: 'einfach', codeOptionen: true,
      text: 'In die Tabelle „Autoren" soll nur der Vorname und der Nachname eines neuen Autors eingefügt werden (AutorNr und Land bleiben zunächst leer).',
      frage: 'Welche INSERT-Syntax ist korrekt, um nur bestimmte Spalten zu füllen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anweisung in das Kästchen ein.',
      optionen: [
        "INSERT INTO Autoren VALUES ('Michael', 'Ende')",
        "INSERT INTO Autoren (Vorname, Nachname) VALUES ('Michael', 'Ende')",
        "INSERT Autoren SET Vorname = 'Michael', Nachname = 'Ende'",
        "INSERT INTO Autoren (Vorname, Nachname) SET ('Michael', 'Ende')",
        "ADD INTO Autoren (Vorname, Nachname) VALUES ('Michael', 'Ende')"
      ],
      loesung: 2,
      erklaerung: 'Mit INSERT INTO Tabelle (Spalte1, Spalte2) VALUES (...) werden nur die angegebenen Spalten gefüllt. Ohne Spaltenliste müssten Werte für alle Spalten angegeben werden, was hier einen Fehler verursachen würde.'
    },
    {
      nr: 10, thema: 'sql-dml', typ: 'sql',
      text: 'In die Tabelle „Buecher" soll ein neues Buch eingefügt werden: BuchNr 6, Titel „Tschick", AutorNr 15, GenreNr 1, ISBN „978-3-499-25635-6", Erscheinungsjahr 2010, Verfuegbar 1.',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: "INSERT INTO Buecher VALUES (6, 'Tschick', 15, 1, '978-3-499-25635-6', 2010, 1)",
      loesungVarianten: [
        "INSERT INTO Buecher (BuchNr, Titel, AutorNr, GenreNr, ISBN, Erscheinungsjahr, Verfuegbar) VALUES (6, 'Tschick', 15, 1, '978-3-499-25635-6', 2010, 1)"
      ],
      erklaerung: 'INSERT INTO mit VALUES fügt einen neuen Datensatz ein. Werden alle Spalten in der richtigen Reihenfolge angegeben, kann die Spaltenliste entfallen. Die Variante mit expliziter Spaltenliste ist sicherer und lesbarer.'
    },
    {
      nr: 11, thema: 'sql-dml', typ: 'einfach', codeOptionen: true,
      text: 'Das Mitglied mit der MitgliedNr 203 hat die Bibliothek wieder aktiviert. Gleichzeitig soll das Eintrittsdatum auf das heutige Datum geändert werden.',
      frage: 'Welche SQL-Anweisung ändert mehrere Spalten gleichzeitig?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anweisung in das Kästchen ein.',
      optionen: [
        "UPDATE Mitglieder SET Aktiv = 1 AND Eintrittsdatum = '2024-11-15' WHERE MitgliedNr = 203",
        "UPDATE Mitglieder SET Aktiv = 1, Eintrittsdatum = '2024-11-15' WHERE MitgliedNr = 203",
        "UPDATE Mitglieder SET (Aktiv, Eintrittsdatum) = (1, '2024-11-15') WHERE MitgliedNr = 203",
        "CHANGE Mitglieder SET Aktiv = 1, Eintrittsdatum = '2024-11-15' WHERE MitgliedNr = 203",
        "UPDATE Mitglieder (Aktiv = 1, Eintrittsdatum = '2024-11-15') WHERE MitgliedNr = 203"
      ],
      loesung: 2,
      erklaerung: 'Bei UPDATE werden mehrere Spalten mit Komma getrennt in der SET-Klausel angegeben. AND wäre ein logischer Operator und ist in SET nicht erlaubt.'
    },
    {
      nr: 12, thema: 'sql-dml', typ: 'sql',
      text: 'Alle Bücher des Genres „Kinderbuch" (GenreNr 2) sollen als nicht verfügbar markiert werden (Verfuegbar = 0).',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: 'UPDATE Buecher SET Verfuegbar = 0 WHERE GenreNr = 2',
      loesungVarianten: [
        "UPDATE Buecher SET Verfuegbar = 0 WHERE GenreNr = (SELECT GenreNr FROM Genres WHERE Bezeichnung = 'Kinderbuch')"
      ],
      erklaerung: 'UPDATE mit WHERE ändert nur die Zeilen, die die Bedingung erfüllen. Die Variante mit Unterabfrage sucht die GenreNr dynamisch anhand des Namens, was bei unbekannter Nummer hilfreicher ist.'
    },

    // --- WHERE: IS NULL, LIKE ---
    {
      nr: 13, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Ausleihen angezeigt werden, bei denen das Rückgabedatum noch nicht eingetragen ist (das Buch ist also noch nicht zurückgegeben).',
      frage: 'Welche WHERE-Bedingung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bedingung in das Kästchen ein.',
      optionen: [
        "WHERE Rueckgabedatum = NULL",
        "WHERE Rueckgabedatum IS NULL",
        "WHERE Rueckgabedatum = ''",
        "WHERE Rueckgabedatum == NULL",
        "WHERE ISNULL(Rueckgabedatum)"
      ],
      loesung: 2,
      erklaerung: 'NULL ist ein spezieller Wert in SQL, der „kein Wert vorhanden" bedeutet. Man prüft mit IS NULL (nicht mit = NULL), weil ein Vergleich mit = bei NULL immer UNKNOWN liefert, nicht TRUE.'
    },
    {
      nr: 14, thema: 'sql-where', typ: 'sql',
      text: 'Es sollen die Ausleihnummern und das Ausleihdatum aller Ausleihen angezeigt werden, die nach dem 01.10.2024 begonnen wurden und bei denen das Buch noch nicht zurückgegeben wurde (Rueckgabedatum ist NULL).',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT AusleihNr, Ausleihdatum FROM Ausleihen WHERE Ausleihdatum > '2024-10-01' AND Rueckgabedatum IS NULL",
      loesungVarianten: [
        "SELECT AusleihNr, Ausleihdatum FROM Ausleihen WHERE Ausleihdatum > '2024-10-01' AND Rueckgabedatum IS NULL;"
      ],
      erklaerung: 'Zwei Bedingungen werden mit AND verknüpft. Datumsvergleiche nutzen die Operatoren >, <, >= usw. Fehlende Rückgaben erkennt man an Rueckgabedatum IS NULL.'
    },
    {
      nr: 15, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Bücher gefunden werden, deren Titel das Wort „Welt" enthält – egal an welcher Stelle.',
      frage: 'Welche WHERE-Bedingung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bedingung in das Kästchen ein.',
      optionen: [
        "WHERE Titel LIKE 'Welt'",
        "WHERE Titel = '%Welt%'",
        "WHERE Titel LIKE '%Welt%'",
        "WHERE Titel LIKE '_Welt_'",
        "WHERE Titel CONTAINS 'Welt'"
      ],
      loesung: 3,
      erklaerung: 'LIKE mit % als Platzhalter für beliebig viele Zeichen: %Welt% findet „Die Vermessung der Welt" ebenso wie „Weltgeschichte". Ohne % müsste der Titel exakt „Welt" lauten. Der Unterstrich _ steht für genau ein Zeichen. CONTAINS ist kein Standard-SQL.'
    },

    // --- JOIN ---
    {
      nr: 16, thema: 'sql-join', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen die Buchtitel zusammen mit dem Nachnamen des jeweiligen Autors angezeigt werden.',
      frage: 'Welche ON-Klausel verknüpft die Tabellen „Buecher" und „Autoren" korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Klausel in das Kästchen ein.',
      optionen: [
        'ON Buecher.BuchNr = Autoren.AutorNr',
        'ON Buecher.AutorNr = Autoren.AutorNr',
        'ON Buecher.Titel = Autoren.Nachname',
        'ON Buecher.GenreNr = Autoren.AutorNr',
        'ON Buecher.ISBN = Autoren.AutorNr'
      ],
      loesung: 2,
      erklaerung: 'Die Verknüpfung erfolgt über die gemeinsame Spalte AutorNr: In der Tabelle Buecher ist sie Fremdschlüssel, in Autoren Primärschlüssel. Nur so werden die richtigen Autoren den richtigen Büchern zugeordnet.'
    },
    {
      nr: 17, thema: 'sql-join', typ: 'sql',
      text: 'Es sollen die Titel aller Bücher angezeigt werden, die noch nie ausgeliehen wurden. Dazu werden „Buecher" und „Ausleihen" mit einem LEFT JOIN verknüpft.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT Titel FROM Buecher LEFT JOIN Ausleihen ON Buecher.BuchNr = Ausleihen.BuchNr WHERE Ausleihen.AusleihNr IS NULL',
      loesungVarianten: [
        'SELECT b.Titel FROM Buecher b LEFT JOIN Ausleihen a ON b.BuchNr = a.BuchNr WHERE a.AusleihNr IS NULL',
        'SELECT Titel FROM Buecher LEFT JOIN Ausleihen ON Buecher.BuchNr = Ausleihen.BuchNr WHERE Ausleihen.BuchNr IS NULL'
      ],
      erklaerung: 'LEFT JOIN liefert alle Zeilen der linken Tabelle (Buecher), auch wenn kein passender Datensatz in Ausleihen existiert. In dem Fall sind die Spalten aus Ausleihen NULL. Mit WHERE ... IS NULL werden genau diese Bücher ohne Ausleihe gefiltert.'
    },

    // --- SELECT / Aggregat ---
    {
      nr: 18, thema: 'sql-select', typ: 'einfach', codeOptionen: true,
      text: 'Die Bibliothek möchte die Anzahl aller Bücher und die Anzahl der Bücher, bei denen ein Erscheinungsjahr eingetragen ist, vergleichen.',
      frage: 'Welche Aussage zum Unterschied zwischen COUNT(*) und COUNT(Spalte) ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'COUNT(*) zählt nur Zahlen, COUNT(Spalte) zählt alle Datentypen.',
        'COUNT(*) zählt alle Zeilen, COUNT(Spalte) zählt nur die Zeilen, in denen die Spalte nicht NULL ist.',
        'COUNT(*) und COUNT(Spalte) liefern immer dasselbe Ergebnis.',
        'COUNT(*) zählt verschiedene Werte, COUNT(Spalte) zählt alle Werte.',
        'COUNT(Spalte) ist schneller als COUNT(*).'
      ],
      loesung: 2,
      erklaerung: 'COUNT(*) zählt alle Zeilen der Ergebnismenge, unabhängig davon, ob Spalten NULL enthalten. COUNT(Spalte) zählt nur die Zeilen, in denen der Wert der angegebenen Spalte nicht NULL ist. Die Ergebnisse unterscheiden sich also, wenn NULL-Werte vorkommen.'
    },
    {
      nr: 19, thema: 'sql-aggregat', typ: 'sql',
      text: 'Für jedes Genre soll die Anzahl der Bücher ermittelt werden. Ausgegeben werden sollen die Genre-Bezeichnung und die Anzahl (als „AnzahlBuecher").',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT Bezeichnung, COUNT(*) AS AnzahlBuecher FROM Genres INNER JOIN Buecher ON Genres.GenreNr = Buecher.GenreNr GROUP BY Bezeichnung',
      loesungVarianten: [
        'SELECT g.Bezeichnung, COUNT(*) AS AnzahlBuecher FROM Genres g INNER JOIN Buecher b ON g.GenreNr = b.GenreNr GROUP BY g.Bezeichnung',
        'SELECT Bezeichnung, COUNT(*) AS AnzahlBuecher FROM Genres JOIN Buecher ON Genres.GenreNr = Buecher.GenreNr GROUP BY Bezeichnung'
      ],
      erklaerung: 'Um die Genre-Bezeichnung statt der GenreNr anzuzeigen, wird Genres mit Buecher verknüpft. GROUP BY Bezeichnung fasst alle Bücher desselben Genres zusammen, COUNT(*) zählt die Treffer je Gruppe.'
    },
    {
      nr: 20, thema: 'sql-dml', typ: 'sql',
      text: 'Alle Ausleihen, die vor dem 01.10.2024 zurückgegeben wurden (Rueckgabedatum ist nicht NULL und liegt vor dem 01.10.2024), sollen aus der Tabelle „Ausleihen" gelöscht werden.',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: "DELETE FROM Ausleihen WHERE Rueckgabedatum IS NOT NULL AND Rueckgabedatum < '2024-10-01'",
      loesungVarianten: [
        "DELETE FROM Ausleihen WHERE Rueckgabedatum < '2024-10-01' AND Rueckgabedatum IS NOT NULL"
      ],
      erklaerung: 'DELETE FROM mit WHERE löscht nur die Zeilen, die beide Bedingungen erfüllen: Das Rückgabedatum darf nicht NULL sein (Buch wurde zurückgegeben) und muss vor dem Stichtag liegen. Ohne WHERE würden alle Ausleihen gelöscht.'
    }
  ]
});
