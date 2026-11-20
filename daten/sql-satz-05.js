// SQL-Übungssatz 5 – Prüfungsvorbereitung, gemischte Aufgaben (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_SQL_SAETZE = window.WISO_SQL_SAETZE || []).push({
  id: 'sql-05',
  titel: 'SQL-Übungssatz 5',
  untertitel: 'Prüfungsvorbereitung (gemischt)',
  ausgangssituation:
    'Die CloudTech GmbH ist ein IT-Dienstleister, der Softwareprojekte für verschiedene Kunden betreut. Die Projektverwaltung erfolgt über eine relationale Datenbank.',

  situationen: [
    {
      von: 1, bis: 20,
      text: 'Die Datenbank der CloudTech GmbH enthält folgende Tabellen (Auszug):',
      tabelle: {
        name: 'Mitarbeiter',
        kopf: ['MitarbeiterNr', 'Vorname', 'Nachname', 'AbteilungNr', 'Position', 'Gehalt', 'Eintrittsdatum'],
        zeilen: [
          ['301', 'Lena', 'Richter', '10', 'Entwicklerin', '5400.00', '2019-04-01'],
          ['302', 'Jonas', 'Berger', '20', 'Vertriebsleiter', '5800.00', '2017-08-15'],
          ['303', 'Sophie', 'Klein', '10', 'Entwicklerin', '4900.00', '2021-01-10'],
          ['304', 'Markus', 'Schäfer', '30', 'Support-Techniker', '4200.00', '2022-06-01'],
          ['305', 'Nina', 'Hartmann', '40', 'Geschäftsführerin', '7200.00', '2015-03-01'],
          ['306', 'Tim', 'Lorenz', '10', 'Junior-Entwickler', '3800.00', '2024-02-15']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Abteilungen',
        kopf: ['AbteilungNr', 'Name', 'Standort', 'Leiter'],
        zeilen: [
          ['10', 'Entwicklung', 'Berlin', 'Richter'],
          ['20', 'Vertrieb', 'München', 'Berger'],
          ['30', 'Support', 'Hamburg', 'Schäfer'],
          ['40', 'Management', 'Berlin', 'Hartmann']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Projekte',
        kopf: ['ProjektNr', 'Bezeichnung', 'Kunde', 'Budget', 'Startdatum', 'Status'],
        zeilen: [
          ['P100', 'Kundenportal', 'Stadtwerke Köln', '120000.00', '2024-01-15', 'Aktiv'],
          ['P101', 'App-Relaunch', 'FitLife AG', '85000.00', '2023-06-01', 'Abgeschlossen'],
          ['P102', 'ERP-Migration', 'Müller Maschinenbau', '210000.00', '2024-09-01', 'Aktiv'],
          ['P103', 'Datenanalyse', 'Stadtwerke Köln', '45000.00', '2025-03-01', 'Geplant'],
          ['P104', 'Webshop', 'BioMarkt Heller', '67000.00', '2023-11-10', 'Abgeschlossen']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Aufgaben',
        kopf: ['AufgabeNr', 'ProjektNr', 'MitarbeiterNr', 'Beschreibung', 'Stunden', 'Erledigt'],
        zeilen: [
          ['A1', 'P100', '301', 'Backend-Entwicklung', '120', '0'],
          ['A2', 'P100', '303', 'Frontend-Entwicklung', '90', '0'],
          ['A3', 'P101', '301', 'API-Anbindung', '60', '1'],
          ['A4', 'P102', '306', 'Datenmigration', '200', '0'],
          ['A5', 'P104', '303', 'Responsive Design', '45', '1']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Zeiterfassung',
        kopf: ['ErfassungNr', 'MitarbeiterNr', 'ProjektNr', 'Datum', 'Stunden', 'Taetigkeit'],
        zeilen: [
          ['Z1', '301', 'P100', '2024-10-07', '8.0', 'Backend-Programmierung'],
          ['Z2', '301', 'P100', '2024-10-08', '7.5', 'Code-Review'],
          ['Z3', '303', 'P100', '2024-10-07', '6.0', 'UI-Entwicklung'],
          ['Z4', '306', 'P102', '2024-10-07', '8.0', 'Datenmigration'],
          ['Z5', '306', 'P102', '2024-10-08', '8.0', 'Datenmigration'],
          ['Z6', '303', 'P104', '2024-10-09', '4.5', 'Testing']
        ]
      }
    }
  ],

  aufgaben: [
    // 1 – SELECT mit Alias
    {
      nr: 1, thema: 'sql-select', typ: 'einfach', codeOptionen: true,
      text: 'Aus der Tabelle „Mitarbeiter" sollen die Spalten Vorname und Nachname ausgegeben werden. Die Spalte Nachname soll in der Ergebnistabelle als „Familienname" angezeigt werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        "SELECT Vorname, Nachname RENAME 'Familienname' FROM Mitarbeiter",
        "SELECT Vorname, Nachname AS Familienname FROM Mitarbeiter",
        "SELECT Vorname, Nachname LABEL Familienname FROM Mitarbeiter",
        "SELECT Vorname, Nachname = Familienname FROM Mitarbeiter",
        "SELECT Vorname, ALIAS(Nachname, 'Familienname') FROM Mitarbeiter"
      ],
      loesung: 2,
      erklaerung: 'Mit AS wird einer Spalte ein Alias (Alternativname) zugewiesen, der in der Ergebnistabelle als Spaltenüberschrift erscheint. RENAME, LABEL und ALIAS sind keine SQL-Schlüsselwörter für diesen Zweck.'
    },

    // 2 – WHERE mit mehreren Bedingungen
    {
      nr: 2, thema: 'sql-where', typ: 'sql',
      text: 'Es sollen alle Mitarbeiter ausgegeben werden, die in der Abteilung 10 arbeiten und deren Gehalt über 5000,00 EUR liegt. Ausgegeben werden Vorname, Nachname und Gehalt.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT Vorname, Nachname, Gehalt FROM Mitarbeiter WHERE AbteilungNr = 10 AND Gehalt > 5000",
      loesungVarianten: [
        "SELECT Vorname, Nachname, Gehalt FROM Mitarbeiter WHERE AbteilungNr = 10 AND Gehalt > 5000.00"
      ],
      erklaerung: 'Mehrere Bedingungen werden mit AND verknüpft. Beide Bedingungen müssen gleichzeitig erfüllt sein, damit eine Zeile im Ergebnis erscheint.'
    },

    // 3 – ORDER BY mit Ausdruck
    {
      nr: 3, thema: 'sql-sortierung', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen Vorname, Nachname und das berechnete Monatsgehalt (Gehalt / 12) aller Mitarbeiter ausgegeben werden, sortiert nach dem Monatsgehalt – das höchste zuerst.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT Vorname, Nachname, Gehalt / 12 AS Monatsgehalt FROM Mitarbeiter SORT Monatsgehalt DESC',
        'SELECT Vorname, Nachname, Gehalt / 12 AS Monatsgehalt FROM Mitarbeiter ORDER BY Monatsgehalt DESC',
        'SELECT Vorname, Nachname, Gehalt / 12 AS Monatsgehalt FROM Mitarbeiter ORDER BY Monatsgehalt DESCENDING',
        'SELECT Vorname, Nachname, Gehalt / 12 AS Monatsgehalt FROM Mitarbeiter ORDER BY Gehalt / 12 ASC',
        'SELECT Vorname, Nachname, Gehalt / 12 AS Monatsgehalt FROM Mitarbeiter GROUP BY Monatsgehalt DESC'
      ],
      loesung: 2,
      erklaerung: 'ORDER BY sortiert die Ergebnismenge. DESC steht für absteigende Reihenfolge (größter Wert zuerst). Ein Alias aus der SELECT-Liste kann in ORDER BY verwendet werden. SORT und DESCENDING sind keine Standard-SQL-Schlüsselwörter; GROUP BY dient der Gruppierung, nicht der Sortierung.'
    },

    // 4 – WHERE mit BETWEEN für Datum
    {
      nr: 4, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Mitarbeiter angezeigt werden, deren Eintrittsdatum zwischen dem 01.01.2020 und dem 31.12.2022 liegt.',
      frage: 'Welche WHERE-Bedingung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bedingung in das Kästchen ein.',
      optionen: [
        "WHERE Eintrittsdatum BETWEEN '2020-01-01' AND '2022-12-31'",
        "WHERE Eintrittsdatum FROM '2020-01-01' TO '2022-12-31'",
        "WHERE Eintrittsdatum IN ('2020-01-01', '2022-12-31')",
        "WHERE Eintrittsdatum >= 2020 AND Eintrittsdatum <= 2022",
        "WHERE YEAR(Eintrittsdatum) BETWEEN 2020 TO 2022"
      ],
      loesung: 1,
      erklaerung: 'BETWEEN ... AND ... funktioniert auch mit Datumswerten und schließt beide Grenzen ein. Die Datumswerte werden als Zeichenkette im ISO-Format angegeben. FROM ... TO und BETWEEN ... TO sind keine gültige SQL-Syntax. IN prüft auf exakte Übereinstimmung.'
    },

    // 5 – SUM und COUNT in einer Abfrage
    {
      nr: 5, thema: 'sql-aggregat', typ: 'sql',
      text: 'Aus der Tabelle „Zeiterfassung" soll die Gesamtanzahl aller Einträge und die Gesamtsumme der gebuchten Stunden ermittelt werden. Die Ergebnisse sollen als „AnzahlBuchungen" und „GesamtStunden" angezeigt werden.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT COUNT(*) AS AnzahlBuchungen, SUM(Stunden) AS GesamtStunden FROM Zeiterfassung',
      erklaerung: 'Mehrere Aggregatfunktionen können in derselben SELECT-Anweisung kombiniert werden. COUNT(*) zählt alle Zeilen, SUM(Stunden) summiert die Werte der Spalte Stunden.'
    },

    // 6 – INNER JOIN
    {
      nr: 6, thema: 'sql-join', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen die Vornamen und Nachnamen der Mitarbeiter zusammen mit dem Namen ihrer Abteilung angezeigt werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT Vorname, Nachname, Name FROM Mitarbeiter, Abteilungen',
        'SELECT m.Vorname, m.Nachname, a.Name FROM Mitarbeiter m INNER JOIN Abteilungen a ON m.AbteilungNr = a.AbteilungNr',
        'SELECT Vorname, Nachname, Name FROM Mitarbeiter LINK Abteilungen ON AbteilungNr',
        'SELECT Vorname, Nachname, Name FROM Mitarbeiter JOIN Abteilungen WHERE Mitarbeiter.AbteilungNr = Abteilungen.AbteilungNr',
        'SELECT Vorname, Nachname, Name FROM Mitarbeiter CONNECT Abteilungen USING AbteilungNr'
      ],
      loesung: 2,
      erklaerung: 'INNER JOIN ... ON verknüpft zwei Tabellen über eine gemeinsame Spalte. Ohne ON-Klausel (Option 1) entsteht ein kartesisches Produkt. LINK und CONNECT existieren nicht. Bei Option 4 fehlt nach JOIN die ON-Klausel – das ist in Standard-SQL ein Syntaxfehler, auch wenn einzelne Datenbanksysteme es zulassen.'
    },

    // 7 – Drei-Tabellen-JOIN
    {
      nr: 7, thema: 'sql-join', typ: 'sql',
      text: 'Es sollen die Vornamen und Nachnamen aller Mitarbeiter zusammen mit der Beschreibung ihrer Aufgaben und der Bezeichnung des zugehörigen Projekts ausgegeben werden.',
      frage: 'Schreiben Sie die passende SQL-Abfrage mit INNER JOIN.',
      loesung: 'SELECT m.Vorname, m.Nachname, au.Beschreibung, p.Bezeichnung FROM Mitarbeiter m INNER JOIN Aufgaben au ON m.MitarbeiterNr = au.MitarbeiterNr INNER JOIN Projekte p ON au.ProjektNr = p.ProjektNr',
      loesungVarianten: [
        'SELECT Vorname, Nachname, Beschreibung, Bezeichnung FROM Mitarbeiter INNER JOIN Aufgaben ON Mitarbeiter.MitarbeiterNr = Aufgaben.MitarbeiterNr INNER JOIN Projekte ON Aufgaben.ProjektNr = Projekte.ProjektNr',
        'SELECT m.Vorname, m.Nachname, a.Beschreibung, p.Bezeichnung FROM Mitarbeiter m INNER JOIN Aufgaben a ON m.MitarbeiterNr = a.MitarbeiterNr INNER JOIN Projekte p ON a.ProjektNr = p.ProjektNr',
        'SELECT Vorname, Nachname, Beschreibung, Bezeichnung FROM Mitarbeiter JOIN Aufgaben ON Mitarbeiter.MitarbeiterNr = Aufgaben.MitarbeiterNr JOIN Projekte ON Aufgaben.ProjektNr = Projekte.ProjektNr'
      ],
      erklaerung: 'Drei Tabellen werden durch zwei aufeinanderfolgende JOINs verknüpft: Mitarbeiter → Aufgaben über MitarbeiterNr und Aufgaben → Projekte über ProjektNr. Tabellen-Aliase (m, a, p) verkürzen die Schreibweise.'
    },

    // 8 – GROUP BY mit HAVING
    {
      nr: 8, thema: 'sql-gruppierung', typ: 'einfach', codeOptionen: true,
      text: 'Es soll ermittelt werden, welche Projekte mehr als 10 gebuchte Stunden in der Zeiterfassung haben. Ausgegeben werden die ProjektNr und die Summe der Stunden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT ProjektNr, SUM(Stunden) FROM Zeiterfassung WHERE SUM(Stunden) > 10 GROUP BY ProjektNr',
        'SELECT ProjektNr, SUM(Stunden) FROM Zeiterfassung GROUP BY ProjektNr WHERE SUM(Stunden) > 10',
        'SELECT ProjektNr, SUM(Stunden) FROM Zeiterfassung GROUP BY ProjektNr HAVING SUM(Stunden) > 10',
        'SELECT ProjektNr, SUM(Stunden) FROM Zeiterfassung HAVING SUM(Stunden) > 10',
        'SELECT ProjektNr, TOTAL(Stunden) FROM Zeiterfassung GROUP BY ProjektNr HAVING TOTAL(Stunden) > 10'
      ],
      loesung: 3,
      erklaerung: 'HAVING filtert nach der Gruppierung auf Aggregatwerte. WHERE wird vor der Gruppierung ausgewertet und darf keine Aggregatfunktionen enthalten. HAVING ohne GROUP BY ist ungültig. TOTAL ist keine Standard-SQL-Funktion.'
    },

    // 9 – Komplexe GROUP BY + JOIN + ORDER BY
    {
      nr: 9, thema: 'sql-gruppierung', typ: 'sql',
      text: 'Es soll für jeden Mitarbeiter, der Einträge in der Zeiterfassung hat, die Summe der gebuchten Stunden ermittelt werden. Ausgegeben werden Vorname, Nachname und die Stundensumme als „GesamtStunden", sortiert nach den meisten Stunden zuerst.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT m.Vorname, m.Nachname, SUM(z.Stunden) AS GesamtStunden FROM Mitarbeiter m INNER JOIN Zeiterfassung z ON m.MitarbeiterNr = z.MitarbeiterNr GROUP BY m.Vorname, m.Nachname ORDER BY GesamtStunden DESC",
      loesungVarianten: [
        "SELECT Vorname, Nachname, SUM(Stunden) AS GesamtStunden FROM Mitarbeiter INNER JOIN Zeiterfassung ON Mitarbeiter.MitarbeiterNr = Zeiterfassung.MitarbeiterNr GROUP BY Vorname, Nachname ORDER BY GesamtStunden DESC",
        "SELECT Vorname, Nachname, SUM(Stunden) AS GesamtStunden FROM Mitarbeiter JOIN Zeiterfassung ON Mitarbeiter.MitarbeiterNr = Zeiterfassung.MitarbeiterNr GROUP BY Vorname, Nachname ORDER BY GesamtStunden DESC",
        "SELECT Vorname, Nachname, SUM(Stunden) AS GesamtStunden FROM Mitarbeiter INNER JOIN Zeiterfassung ON Mitarbeiter.MitarbeiterNr = Zeiterfassung.MitarbeiterNr GROUP BY Vorname, Nachname ORDER BY SUM(Stunden) DESC"
      ],
      erklaerung: 'Diese Abfrage kombiniert JOIN (Verknüpfung mit der Zeiterfassung), GROUP BY (Gruppierung je Mitarbeiter), die Aggregatfunktion SUM() und ORDER BY DESC (absteigende Sortierung). Alle nicht-aggregierten Spalten in SELECT müssen in GROUP BY stehen.'
    },

    // 10 – INSERT mit Spaltenliste
    {
      nr: 10, thema: 'sql-dml', typ: 'einfach', codeOptionen: true,
      text: 'In die Tabelle „Projekte" soll ein neues Projekt eingefügt werden: ProjektNr „P105", Bezeichnung „Intranet", Kunde „CloudTech GmbH", Budget 35000. Die Spalten Startdatum und Status sollen nicht befüllt werden.',
      frage: 'Welche SQL-Anweisung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anweisung in das Kästchen ein.',
      optionen: [
        "INSERT INTO Projekte VALUES ('P105', 'Intranet', 'CloudTech GmbH', 35000)",
        "INSERT INTO Projekte (ProjektNr, Bezeichnung, Kunde, Budget) VALUES ('P105', 'Intranet', 'CloudTech GmbH', 35000)",
        "INSERT Projekte SET ProjektNr = 'P105', Bezeichnung = 'Intranet', Kunde = 'CloudTech GmbH', Budget = 35000",
        "ADD INTO Projekte (ProjektNr, Bezeichnung, Kunde, Budget) VALUES ('P105', 'Intranet', 'CloudTech GmbH', 35000)",
        "INSERT INTO Projekte ('P105', 'Intranet', 'CloudTech GmbH', 35000)"
      ],
      loesung: 2,
      erklaerung: 'Wenn nicht alle Spalten befüllt werden sollen, muss eine Spaltenliste angegeben werden: INSERT INTO Tabelle (Spalte1, Spalte2, ...) VALUES (...). Option 1 ohne Spaltenliste würde alle Spalten erwarten. ADD INTO existiert nicht. Option 5 hat keine VALUES-Klausel.'
    },

    // 11 – UPDATE mit Bedingung
    {
      nr: 11, thema: 'sql-dml', typ: 'sql',
      text: 'Der Status aller Projekte mit dem Status „Geplant" soll auf „Aktiv" geändert werden.',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: "UPDATE Projekte SET Status = 'Aktiv' WHERE Status = 'Geplant'",
      erklaerung: 'UPDATE Tabelle SET Spalte = Wert WHERE Bedingung ändert alle Zeilen, die die WHERE-Bedingung erfüllen. Ohne WHERE würden alle Zeilen geändert.'
    },

    // 12 – ALTER TABLE
    {
      nr: 12, thema: 'sql-ddl', typ: 'einfach', codeOptionen: true,
      text: 'Die Tabelle „Mitarbeiter" soll um eine Spalte „Telefon" vom Typ VARCHAR(20) erweitert werden.',
      frage: 'Welche SQL-Anweisung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anweisung in das Kästchen ein.',
      optionen: [
        'MODIFY TABLE Mitarbeiter ADD Telefon VARCHAR(20)',
        'ALTER TABLE Mitarbeiter ADD COLUMN Telefon VARCHAR(20)',
        'UPDATE TABLE Mitarbeiter ADD Telefon VARCHAR(20)',
        'ALTER TABLE Mitarbeiter INSERT COLUMN Telefon VARCHAR(20)',
        'CHANGE TABLE Mitarbeiter ADD Telefon VARCHAR(20)'
      ],
      loesung: 2,
      erklaerung: 'ALTER TABLE ... ADD COLUMN fügt einer bestehenden Tabelle eine neue Spalte hinzu. MODIFY TABLE, UPDATE TABLE und CHANGE TABLE sind keine DDL-Befehle. INSERT COLUMN existiert nicht.'
    },

    // 13 – CREATE TABLE mit PRIMARY KEY und FOREIGN KEY
    {
      nr: 13, thema: 'sql-ddl', typ: 'sql',
      text: 'Es soll eine neue Tabelle „Kommentare" erstellt werden mit den Spalten: KommentarNr (INT, Primärschlüssel), AufgabeNr (VARCHAR(10), Fremdschlüssel auf Aufgaben), Text (VARCHAR(500)) und Datum (DATE).',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: "CREATE TABLE Kommentare (KommentarNr INT PRIMARY KEY, AufgabeNr VARCHAR(10) REFERENCES Aufgaben(AufgabeNr), Text VARCHAR(500), Datum DATE)",
      loesungVarianten: [
        "CREATE TABLE Kommentare (KommentarNr INT PRIMARY KEY, AufgabeNr VARCHAR(10), Text VARCHAR(500), Datum DATE, FOREIGN KEY (AufgabeNr) REFERENCES Aufgaben(AufgabeNr))"
      ],
      erklaerung: 'CREATE TABLE definiert eine neue Tabelle. PRIMARY KEY kennzeichnet den Primärschlüssel. Ein Fremdschlüssel kann direkt bei der Spalte mit REFERENCES oder am Ende mit FOREIGN KEY (...) REFERENCES ... angegeben werden.'
    },

    // 14 – Unterabfrage in WHERE
    {
      nr: 14, thema: 'sql-unterabfragen', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Projekte angezeigt werden, deren Budget über dem durchschnittlichen Budget aller Projekte liegt.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT * FROM Projekte WHERE Budget > AVG(Budget)',
        'SELECT * FROM Projekte WHERE Budget > (SELECT AVG(Budget) FROM Projekte)',
        'SELECT * FROM Projekte HAVING Budget > AVG(Budget)',
        'SELECT * FROM Projekte WHERE Budget > AVERAGE(Budget)',
        'SELECT * FROM Projekte WHERE Budget > (SELECT MEAN(Budget) FROM Projekte)'
      ],
      loesung: 2,
      erklaerung: 'Aggregatfunktionen können nicht direkt in WHERE verwendet werden. Stattdessen berechnet eine Unterabfrage (Subquery) den Durchschnitt, und die äußere Abfrage vergleicht damit. AVERAGE und MEAN sind keine SQL-Funktionen.'
    },

    // 15 – NOT IN-Unterabfrage
    {
      nr: 15, thema: 'sql-unterabfragen', typ: 'sql',
      text: 'Es sollen alle Mitarbeiter (Vorname, Nachname) ausgegeben werden, die keinen einzigen Eintrag in der Tabelle „Zeiterfassung" haben.',
      frage: 'Schreiben Sie die passende SQL-Abfrage mit einer Unterabfrage.',
      loesung: 'SELECT Vorname, Nachname FROM Mitarbeiter WHERE MitarbeiterNr NOT IN (SELECT MitarbeiterNr FROM Zeiterfassung)',
      loesungVarianten: [
        'SELECT Vorname, Nachname FROM Mitarbeiter WHERE MitarbeiterNr NOT IN (SELECT DISTINCT MitarbeiterNr FROM Zeiterfassung)'
      ],
      erklaerung: 'NOT IN (...) prüft, ob ein Wert nicht in der Ergebnismenge der Unterabfrage enthalten ist. Die Unterabfrage liefert alle MitarbeiterNr, die in der Zeiterfassung vorkommen, und die äußere Abfrage schließt diese aus.'
    },

    // 16 – CASE WHEN
    {
      nr: 16, thema: 'sql-erweitert', typ: 'einfach', codeOptionen: true,
      text: 'Für jeden Mitarbeiter soll neben dem Gehalt eine Einstufung angezeigt werden: „Hoch" bei einem Gehalt ab 5500, „Mittel" bei einem Gehalt ab 4000 und „Niedrig" bei allen anderen.',
      frage: 'Welcher Ausdruck erzeugt die Spalte „Einstufung" korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Ausdruck in das Kästchen ein.',
      optionen: [
        "IF Gehalt >= 5500 THEN 'Hoch' ELIF Gehalt >= 4000 THEN 'Mittel' ELSE 'Niedrig' AS Einstufung",
        "CASE WHEN Gehalt >= 5500 THEN 'Hoch' WHEN Gehalt >= 4000 THEN 'Mittel' ELSE 'Niedrig' END AS Einstufung",
        "SWITCH Gehalt WHEN >= 5500 THEN 'Hoch' WHEN >= 4000 THEN 'Mittel' DEFAULT 'Niedrig' END AS Einstufung",
        "DECODE(Gehalt, >= 5500, 'Hoch', >= 4000, 'Mittel', 'Niedrig') AS Einstufung",
        "CASE Gehalt OVER 5500 = 'Hoch', OVER 4000 = 'Mittel', ELSE 'Niedrig' END AS Einstufung"
      ],
      loesung: 2,
      erklaerung: 'CASE WHEN ... THEN ... ELSE ... END ist der Standard-SQL-Ausdruck für bedingte Werte. Die Bedingungen werden der Reihe nach geprüft; die erste zutreffende liefert das Ergebnis. IF/THEN, SWITCH und DECODE (Oracle-spezifisch) gehören nicht zum Searched-CASE-Standard.'
    },

    // 17 – Redundanz in Projekte und Abteilungen
    {
      nr: 17, thema: 'db-normalisierung', typ: 'mehrfach',
      text: 'In der Tabelle „Projekte“ ist der Kunde als Text gespeichert, „Stadtwerke Köln“ steht dort zweimal. In der Tabelle „Abteilungen“ ist der Leiter nur mit seinem Nachnamen eingetragen.',
      frage: 'Welche Aussagen zu diesem Datenbankentwurf treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Eine Namensänderung der Stadtwerke Köln in nur einer Zeile von „Projekte“ macht die Daten inkonsistent.',
        'Die Kundennamen sollten in eine eigene Tabelle „Kunden“ ausgelagert und in „Projekte“ nur über eine KundenNr als Fremdschlüssel referenziert werden.',
        'Der Leiter einer Abteilung ist durch seinen Nachnamen eindeutig bestimmt.',
        'Redundante Kundennamen beschleunigen jede Abfrage und sind deshalb immer erwünscht.',
        'Nach dem Löschen des Projekts P104 bleibt der Kunde „BioMarkt Heller“ weiterhin in der Datenbank gespeichert.'
      ],
      loesung: [1, 2],
      erklaerung: 'Steht derselbe Kunde in mehreren Zeilen, müssen bei einer Änderung alle Zeilen angepasst werden, sonst entstehen Widersprüche (Änderungsanomalie). Abhilfe ist eine Tabelle Kunden (KundenNr, Name, …) mit der KundenNr als Fremdschlüssel in „Projekte“. Aussage 3 ist falsch: Nachnamen sind nicht eindeutig, der Leiter sollte über die MitarbeiterNr als Fremdschlüssel eingetragen werden. Aussage 5 ist falsch: „BioMarkt Heller“ kommt nur in P104 vor, mit dem Löschen des Projekts gingen auch die Kundendaten verloren (Löschanomalie).'
    },

    // 18 – LIKE mit Muster
    {
      nr: 18, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Projekte angezeigt werden, deren Bezeichnung den Buchstaben „a" an der zweiten Stelle enthält (z. B. „Datenanalyse").',
      frage: 'Welche WHERE-Bedingung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bedingung in das Kästchen ein.',
      optionen: [
        "WHERE Bezeichnung LIKE '%a%'",
        "WHERE Bezeichnung LIKE '_a%'",
        "WHERE Bezeichnung LIKE '?a*'",
        "WHERE Bezeichnung LIKE '[a]%'",
        "WHERE Bezeichnung LIKE 'a_%'"
      ],
      loesung: 2,
      erklaerung: 'Der Unterstrich _ steht in LIKE für genau ein beliebiges Zeichen. _a% bedeutet: ein beliebiges Zeichen, dann „a", dann beliebig viele weitere Zeichen. Option 1 findet „a" an jeder Stelle. ? und * sind Platzhalter der Betriebssystem-Ebene, nicht von SQL.'
    },

    // 19 – COUNT(*) vs. COUNT(DISTINCT ...)
    {
      nr: 19, thema: 'sql-aggregat', typ: 'einfach', codeOptionen: true,
      text: 'Aus der Tabelle „Zeiterfassung" soll ermittelt werden, wie viele verschiedene Mitarbeiter mindestens einen Eintrag haben.',
      frage: 'Welche SQL-Abfrage liefert die korrekte Anzahl?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT COUNT(*) FROM Zeiterfassung',
        'SELECT COUNT(MitarbeiterNr) FROM Zeiterfassung',
        'SELECT COUNT(DISTINCT MitarbeiterNr) FROM Zeiterfassung',
        'SELECT DISTINCT COUNT(MitarbeiterNr) FROM Zeiterfassung',
        'SELECT COUNT(UNIQUE MitarbeiterNr) FROM Zeiterfassung'
      ],
      loesung: 3,
      erklaerung: 'COUNT(DISTINCT Spalte) zählt nur die unterschiedlichen Werte einer Spalte. COUNT(*) zählt alle Zeilen (hier 6). COUNT(MitarbeiterNr) ohne DISTINCT zählt alle nicht-NULL-Werte (auch doppelte). DISTINCT vor COUNT() hat eine andere Bedeutung und UNIQUE ist kein Argument für COUNT.'
    },

    // 20 – LEFT JOIN, um fehlende Zuordnungen zu finden
    {
      nr: 20, thema: 'sql-join', typ: 'sql',
      text: 'Es sollen alle Mitarbeiter (Vorname, Nachname) angezeigt werden, denen keine Aufgabe zugeordnet ist. Dazu wird ein LEFT JOIN verwendet: Mitarbeiter ohne Treffer in der Tabelle „Aufgaben" haben dort NULL-Werte.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT m.Vorname, m.Nachname FROM Mitarbeiter m LEFT JOIN Aufgaben au ON m.MitarbeiterNr = au.MitarbeiterNr WHERE au.AufgabeNr IS NULL',
      loesungVarianten: [
        'SELECT Vorname, Nachname FROM Mitarbeiter LEFT JOIN Aufgaben ON Mitarbeiter.MitarbeiterNr = Aufgaben.MitarbeiterNr WHERE Aufgaben.AufgabeNr IS NULL',
        'SELECT m.Vorname, m.Nachname FROM Mitarbeiter m LEFT JOIN Aufgaben a ON m.MitarbeiterNr = a.MitarbeiterNr WHERE a.AufgabeNr IS NULL',
        'SELECT Vorname, Nachname FROM Mitarbeiter LEFT JOIN Aufgaben ON Mitarbeiter.MitarbeiterNr = Aufgaben.MitarbeiterNr WHERE Aufgaben.MitarbeiterNr IS NULL',
        'SELECT m.Vorname, m.Nachname FROM Mitarbeiter m LEFT JOIN Aufgaben a ON m.MitarbeiterNr = a.MitarbeiterNr WHERE a.MitarbeiterNr IS NULL',
        'SELECT m.Vorname, m.Nachname FROM Mitarbeiter m LEFT JOIN Aufgaben au ON m.MitarbeiterNr = au.MitarbeiterNr WHERE au.MitarbeiterNr IS NULL'
      ],
      erklaerung: 'LEFT JOIN gibt alle Zeilen der linken Tabelle (Mitarbeiter) zurück – auch wenn es keinen passenden Eintrag in der rechten Tabelle (Aufgaben) gibt. Für Mitarbeiter ohne Aufgabe stehen dort NULL-Werte, die mit IS NULL gefiltert werden.'
    }
  ]
});
