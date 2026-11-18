// SQL-Übungssatz 1 – Grundlagen der Datenbankabfragen (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_SQL_SAETZE = window.WISO_SQL_SAETZE || []).push({
  id: 'sql-01',
  titel: 'SQL-Übungssatz 1',
  untertitel: 'Grundlagen der Datenbankabfragen',
  ausgangssituation:
    'Die TechNova Solutions GmbH verwaltet ihre Geschäftsdaten in einer relationalen Datenbank. Für die folgenden Aufgaben gelten die in den Situationsbeschreibungen angegebenen Tabellen und Spalten.',

  situationen: [
    {
      von: 1, bis: 20,
      text: 'Die Datenbank der TechNova Solutions GmbH enthält folgende Tabellen (Auszug):',
      tabelle: {
        name: 'Mitarbeiter',
        kopf: ['MitarbeiterNr', 'Vorname', 'Nachname', 'Abteilung', 'Gehalt', 'Eintrittsdatum'],
        zeilen: [
          ['101', 'Anna', 'Müller', 'Entwicklung', '4800.00', '2019-03-15'],
          ['102', 'Ben', 'Schmidt', 'Vertrieb', '4200.00', '2020-07-01'],
          ['103', 'Clara', 'Weber', 'Entwicklung', '5200.00', '2018-01-10'],
          ['104', 'David', 'Fischer', 'Support', '3800.00', '2021-09-01'],
          ['105', 'Eva', 'Braun', 'Vertrieb', '4500.00', '2019-11-20'],
          ['106', 'Felix', 'Wagner', 'Entwicklung', '4900.00', '2022-04-01'],
          ['107', 'Gina', 'Hoffmann', 'Support', '3600.00', '2023-02-15']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Projekte',
        kopf: ['ProjektNr', 'Bezeichnung', 'Startdatum', 'Budget'],
        zeilen: [
          ['1', 'Kundenportal Relaunch', '2024-02-01', '85000.00'],
          ['2', 'CRM-Einführung', '2024-05-15', '42000.00'],
          ['3', 'Helpdesk-Automatisierung', '2024-09-01', '23000.00'],
          ['4', 'Cloud-Migration', '2025-01-10', '120000.00'],
          ['5', 'Intranet-App', '2025-06-01', '18000.00']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Projektzuordnung',
        kopf: ['MitarbeiterNr', 'ProjektNr', 'Stunden'],
        zeilen: [
          ['101', '1', '120'],
          ['103', '1', '80'],
          ['102', '2', '60'],
          ['105', '2', '40'],
          ['104', '3', '30'],
          ['106', '3', '90'],
          ['103', '4', '50']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Kunden',
        kopf: ['KundenNr', 'Firmenname', 'Ort', 'Branche'],
        zeilen: [
          ['401', 'WebSolutions Nord GmbH', 'Hamburg', 'IT-Dienstleistungen'],
          ['402', 'Bäckerei Hansen KG', 'Kiel', 'Lebensmittel'],
          ['403', 'Autohaus Becker GmbH', 'Bremen', 'Handel'],
          ['404', 'Logistik Petersen AG', 'Hannover', 'Logistik'],
          ['405', 'Praxis Dr. Yilmaz', 'Lübeck', 'Gesundheit']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Auftraege',
        kopf: ['AuftragNr', 'KundenNr', 'Bezeichnung', 'Datum', 'Betrag'],
        zeilen: [
          ['7001', '401', 'Webshop-Anbindung', '2025-01-14', '12500.00'],
          ['7002', '403', 'Netzwerkinstallation', '2025-02-03', '8400.00'],
          ['7003', '401', 'Wartungsvertrag 2025', '2025-02-20', '3600.00'],
          ['7004', '404', 'Lagerverwaltungssoftware', '2025-03-11', '24800.00'],
          ['7005', '403', 'Firewall-Upgrade', '2025-04-02', '2150.00'],
          ['7006', '402', 'Kassensystem', '2025-04-28', '5900.00']
        ]
      }
    }
  ],

  aufgaben: [
    // --- SELECT-Grundlagen ---
    {
      nr: 1, thema: 'sql-select', typ: 'einfach', codeOptionen: true,
      text: 'Aus der Tabelle „Mitarbeiter" sollen alle Vornamen und Nachnamen ausgegeben werden.',
      frage: 'Welche SQL-Abfrage ist dafür korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'GET Vorname, Nachname FROM Mitarbeiter',
        'SELECT Vorname, Nachname FROM Mitarbeiter',
        'SHOW Vorname, Nachname IN Mitarbeiter',
        'READ Vorname, Nachname FROM Mitarbeiter',
        'FIND Vorname, Nachname IN Mitarbeiter'
      ],
      loesung: 2,
      erklaerung: 'Die korrekte SQL-Syntax zum Abfragen von Spalten lautet SELECT Spalte1, Spalte2 FROM Tabelle. Die anderen Schlüsselwörter (GET, SHOW, READ, FIND) existieren nicht als DQL-Befehle in Standard-SQL.'
    },
    {
      nr: 2, thema: 'sql-select', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Spalten und alle Zeilen der Tabelle „Mitarbeiter" angezeigt werden.',
      frage: 'Welche SQL-Abfrage liefert dieses Ergebnis?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT ALL FROM Mitarbeiter',
        'SELECT Mitarbeiter',
        'SELECT * FROM Mitarbeiter',
        'SELECT (*) FROM Mitarbeiter',
        'SELECT Mitarbeiter.*'
      ],
      loesung: 3,
      erklaerung: 'Der Platzhalter * (Stern) steht für „alle Spalten". Die korrekte Syntax ist SELECT * FROM Tabelle.'
    },

    // --- WHERE ---
    {
      nr: 3, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen nur die Mitarbeiter angezeigt werden, die in der Abteilung „Entwicklung" arbeiten.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        "SELECT * FROM Mitarbeiter WHERE Abteilung = 'Entwicklung'",
        "SELECT * FROM Mitarbeiter IF Abteilung = 'Entwicklung'",
        "SELECT * FROM Mitarbeiter HAVING Abteilung = 'Entwicklung'",
        "SELECT * FROM Mitarbeiter WITH Abteilung = 'Entwicklung'",
        "SELECT * FROM Mitarbeiter WHEN Abteilung = 'Entwicklung'"
      ],
      loesung: 1,
      erklaerung: 'Mit WHERE werden Zeilen gefiltert, die eine Bedingung erfüllen. IF, WITH und WHEN sind keine SQL-Filterschlüsselwörter. HAVING wird nur in Kombination mit GROUP BY für Aggregatbedingungen verwendet.'
    },
    {
      nr: 4, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Mitarbeiter ausgegeben werden, deren Gehalt zwischen 4000,00 und 5000,00 EUR liegt (einschließlich der Grenzen).',
      frage: 'Welche WHERE-Bedingung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bedingung in das Kästchen ein.',
      optionen: [
        'WHERE Gehalt > 4000 AND Gehalt < 5000',
        'WHERE Gehalt FROM 4000 TO 5000',
        'WHERE Gehalt BETWEEN 4000 AND 5000',
        'WHERE Gehalt IN (4000, 5000)',
        'WHERE Gehalt >= 4000 OR Gehalt <= 5000'
      ],
      loesung: 3,
      erklaerung: 'BETWEEN ... AND ... schließt beide Grenzwerte ein und ist die passende Syntax. Option 1 schließt die Grenzen aus (> statt >=). Option 5 mit OR wäre bei jedem Gehalt wahr. IN prüft nur auf exakte Übereinstimmung mit den Werten in der Liste.'
    },
    {
      nr: 5, thema: 'sql-where', typ: 'sql',
      text: 'Es sollen Vorname und Nachname aller Mitarbeiter angezeigt werden, die in der Abteilung „Vertrieb" arbeiten.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT Vorname, Nachname FROM Mitarbeiter WHERE Abteilung = 'Vertrieb'",
      erklaerung: 'Mit SELECT werden die gewünschten Spalten ausgewählt, FROM gibt die Tabelle an und WHERE filtert auf die Abteilung „Vertrieb".'
    },

    // --- Sortierung ---
    {
      nr: 6, thema: 'sql-sortierung', typ: 'einfach', codeOptionen: true,
      text: 'Die Mitarbeiter sollen nach Nachname in alphabetischer Reihenfolge (A–Z) sortiert ausgegeben werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT * FROM Mitarbeiter SORT BY Nachname',
        'SELECT * FROM Mitarbeiter ORDER BY Nachname DESC',
        'SELECT * FROM Mitarbeiter ORDER BY Nachname ASC',
        'SELECT * FROM Mitarbeiter ARRANGE BY Nachname',
        'SELECT * FROM Mitarbeiter GROUP BY Nachname'
      ],
      loesung: 3,
      erklaerung: 'ORDER BY sortiert die Ergebnismenge. ASC steht für aufsteigende Reihenfolge (A–Z, Standard). DESC wäre absteigend (Z–A). SORT BY und ARRANGE BY gibt es in SQL nicht. GROUP BY fasst Zeilen zusammen, sortiert aber nicht.'
    },
    {
      nr: 7, thema: 'sql-sortierung', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle unterschiedlichen Abteilungen angezeigt werden, die in der Tabelle „Mitarbeiter" vorkommen – ohne Doppelungen.',
      frage: 'Welche SQL-Abfrage liefert das gewünschte Ergebnis?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT Abteilung FROM Mitarbeiter',
        'SELECT SINGLE Abteilung FROM Mitarbeiter',
        'SELECT DISTINCT Abteilung FROM Mitarbeiter',
        'SELECT DIFFERENT Abteilung FROM Mitarbeiter',
        'SELECT Abteilung FROM Mitarbeiter ORDER BY Abteilung'
      ],
      loesung: 3,
      erklaerung: 'DISTINCT entfernt doppelte Zeilen aus dem Ergebnis. SINGLE und DIFFERENT gibt es in SQL nicht. ORDER BY sortiert nur, entfernt aber keine Doppelungen – ohne DISTINCT erscheint jede Abteilung so oft, wie sie vorkommt. (Dasselbe Ergebnis wie mit DISTINCT liefert übrigens auch GROUP BY Abteilung.)'
    },

    // --- Aggregatfunktionen ---
    {
      nr: 8, thema: 'sql-aggregat', typ: 'einfach', codeOptionen: true,
      text: 'Es soll die Anzahl aller Mitarbeiter ermittelt werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT AMOUNT(*) FROM Mitarbeiter',
        'SELECT COUNT(*) FROM Mitarbeiter',
        'SELECT SUM(*) FROM Mitarbeiter',
        'SELECT NUMBER(*) FROM Mitarbeiter',
        'SELECT TOTAL(*) FROM Mitarbeiter'
      ],
      loesung: 2,
      erklaerung: 'COUNT(*) zählt die Anzahl der Zeilen in einer Tabelle. SUM bildet eine Summe über numerische Werte. AMOUNT, NUMBER und TOTAL sind keine SQL-Aggregatfunktionen.'
    },
    {
      nr: 9, thema: 'sql-aggregat', typ: 'sql',
      text: 'Es soll das durchschnittliche Gehalt aller Mitarbeiter berechnet werden. Das Ergebnis soll als „Durchschnittsgehalt" angezeigt werden.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT AVG(Gehalt) AS Durchschnittsgehalt FROM Mitarbeiter',
      erklaerung: 'AVG() berechnet den Durchschnitt einer numerischen Spalte. Mit AS wird dem Ergebnis ein Alias (Spaltenüberschrift) zugewiesen.'
    },
    {
      nr: 10, thema: 'sql-aggregat', typ: 'einfach', codeOptionen: true,
      text: 'Es soll das höchste Gehalt in der Tabelle „Mitarbeiter" ermittelt werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT TOP(Gehalt) FROM Mitarbeiter',
        'SELECT HIGHEST(Gehalt) FROM Mitarbeiter',
        'SELECT MAX(Gehalt) FROM Mitarbeiter',
        'SELECT BIGGEST(Gehalt) FROM Mitarbeiter',
        'SELECT UPPER(Gehalt) FROM Mitarbeiter'
      ],
      loesung: 3,
      erklaerung: 'MAX() gibt den größten Wert einer Spalte zurück. MIN() wäre das Gegenstück für den kleinsten Wert. TOP, HIGHEST, BIGGEST und UPPER sind keine Aggregatfunktionen in Standard-SQL.'
    },

    // --- GROUP BY / HAVING ---
    {
      nr: 11, thema: 'sql-gruppierung', typ: 'einfach', codeOptionen: true,
      text: 'Es soll für jede Abteilung die Anzahl der Mitarbeiter ermittelt werden.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT Abteilung, COUNT(*) FROM Mitarbeiter',
        'SELECT Abteilung, COUNT(*) FROM Mitarbeiter GROUP BY Abteilung',
        'SELECT Abteilung, COUNT(*) FROM Mitarbeiter ORDER BY Abteilung',
        'SELECT Abteilung, COUNT(*) FROM Mitarbeiter HAVING Abteilung',
        'SELECT COUNT(*) FROM Mitarbeiter WHERE GROUP = Abteilung'
      ],
      loesung: 2,
      erklaerung: 'GROUP BY fasst alle Zeilen mit gleichem Wert in der angegebenen Spalte zusammen. Ohne GROUP BY würde COUNT(*) nur eine Gesamtzahl liefern und die Angabe von Abteilung in der SELECT-Liste wäre ungültig.'
    },
    {
      nr: 12, thema: 'sql-gruppierung', typ: 'sql',
      text: 'Es sollen nur die Abteilungen angezeigt werden, in denen mehr als 2 Mitarbeiter arbeiten. Ausgegeben werden sollen der Abteilungsname und die Anzahl.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT Abteilung, COUNT(*) FROM Mitarbeiter GROUP BY Abteilung HAVING COUNT(*) > 2',
      loesungVarianten: [
        'SELECT Abteilung, COUNT(*) AS Anzahl FROM Mitarbeiter GROUP BY Abteilung HAVING COUNT(*) > 2'
      ],
      erklaerung: 'HAVING filtert die Ergebnisse nach der Gruppierung. WHERE kann hier nicht verwendet werden, weil es vor der Gruppierung ausgewertet wird und keine Aggregatfunktionen enthalten darf.'
    },

    // --- JOIN ---
    {
      nr: 13, thema: 'sql-join', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen die Vornamen und Nachnamen der Mitarbeiter zusammen mit den Bezeichnungen der Projekte angezeigt werden, denen sie zugeordnet sind. Mitarbeiter ohne Projektzuordnung sollen nicht erscheinen.',
      frage: 'Welcher JOIN-Typ ist hier richtig?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden JOIN in das Kästchen ein.',
      optionen: [
        'LEFT JOIN',
        'RIGHT JOIN',
        'FULL OUTER JOIN',
        'INNER JOIN',
        'CROSS JOIN'
      ],
      loesung: 4,
      erklaerung: 'INNER JOIN gibt nur die Zeilen zurück, für die in beiden Tabellen eine Übereinstimmung besteht. LEFT JOIN würde auch Mitarbeiter ohne Zuordnung zeigen. CROSS JOIN bildet das kartesische Produkt (jede Zeile mit jeder).'
    },
    {
      nr: 14, thema: 'sql-join', typ: 'sql',
      text: 'Es sollen die Vornamen und Nachnamen aller Mitarbeiter zusammen mit der Bezeichnung ihrer Projekte ausgegeben werden. Dazu werden die Tabellen „Mitarbeiter", „Projektzuordnung" und „Projekte" über INNER JOIN verknüpft.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT m.Vorname, m.Nachname, p.Bezeichnung FROM Mitarbeiter m INNER JOIN Projektzuordnung pz ON m.MitarbeiterNr = pz.MitarbeiterNr INNER JOIN Projekte p ON pz.ProjektNr = p.ProjektNr',
      loesungVarianten: [
        'SELECT Vorname, Nachname, Bezeichnung FROM Mitarbeiter INNER JOIN Projektzuordnung ON Mitarbeiter.MitarbeiterNr = Projektzuordnung.MitarbeiterNr INNER JOIN Projekte ON Projektzuordnung.ProjektNr = Projekte.ProjektNr',
        'SELECT Vorname, Nachname, Bezeichnung FROM Mitarbeiter JOIN Projektzuordnung ON Mitarbeiter.MitarbeiterNr = Projektzuordnung.MitarbeiterNr JOIN Projekte ON Projektzuordnung.ProjektNr = Projekte.ProjektNr',
        'SELECT m.Vorname, m.Nachname, p.Bezeichnung FROM Mitarbeiter m JOIN Projektzuordnung pz ON m.MitarbeiterNr = pz.MitarbeiterNr JOIN Projekte p ON pz.ProjektNr = p.ProjektNr'
      ],
      erklaerung: 'Für die Verknüpfung von drei Tabellen werden zwei JOINs benötigt. Die ON-Klausel gibt jeweils die Verbindungsspalte an. INNER JOIN kann auch als JOIN abgekürzt werden.'
    },

    // --- DML: INSERT, UPDATE, DELETE ---
    {
      nr: 15, thema: 'sql-dml', typ: 'einfach', codeOptionen: true,
      text: 'In die Tabelle „Kunden" soll ein neuer Datensatz eingefügt werden: KundenNr 501, Firmenname „Webdesign Lorenz", Ort „Hamburg", Branche „IT-Dienstleistungen".',
      frage: 'Welche SQL-Anweisung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anweisung in das Kästchen ein.',
      optionen: [
        "INSERT INTO Kunden VALUES (501, 'Webdesign Lorenz', 'Hamburg', 'IT-Dienstleistungen')",
        "ADD TO Kunden VALUES (501, 'Webdesign Lorenz', 'Hamburg', 'IT-Dienstleistungen')",
        "INSERT Kunden SET (501, 'Webdesign Lorenz', 'Hamburg', 'IT-Dienstleistungen')",
        "CREATE ROW Kunden (501, 'Webdesign Lorenz', 'Hamburg', 'IT-Dienstleistungen')",
        "PUT INTO Kunden VALUES (501, 'Webdesign Lorenz', 'Hamburg', 'IT-Dienstleistungen')"
      ],
      loesung: 1,
      erklaerung: 'INSERT INTO Tabelle VALUES (...) fügt einen neuen Datensatz ein. Die Reihenfolge der Werte muss der Spaltenreihenfolge der Tabelle entsprechen. ADD TO, CREATE ROW und PUT INTO existieren nicht in SQL.'
    },
    {
      nr: 16, thema: 'sql-dml', typ: 'einfach', codeOptionen: true,
      text: 'Das Gehalt des Mitarbeiters mit der MitarbeiterNr 104 soll auf 4100,00 EUR erhöht werden.',
      frage: 'Welche SQL-Anweisung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anweisung in das Kästchen ein.',
      optionen: [
        'CHANGE Mitarbeiter SET Gehalt = 4100 WHERE MitarbeiterNr = 104',
        'ALTER Mitarbeiter SET Gehalt = 4100 WHERE MitarbeiterNr = 104',
        'MODIFY Mitarbeiter SET Gehalt = 4100 WHERE MitarbeiterNr = 104',
        'UPDATE Mitarbeiter SET Gehalt = 4100 WHERE MitarbeiterNr = 104',
        'SET Mitarbeiter.Gehalt = 4100 WHERE MitarbeiterNr = 104'
      ],
      loesung: 4,
      erklaerung: 'UPDATE Tabelle SET Spalte = Wert WHERE Bedingung ändert vorhandene Datensätze. CHANGE und MODIFY sind keine SQL-Befehle. ALTER wird für Strukturänderungen an Tabellen verwendet, nicht für Datenänderungen.'
    },
    {
      nr: 17, thema: 'sql-dml', typ: 'sql',
      text: 'Alle Aufträge des Kunden mit der KundenNr 403 sollen aus der Tabelle „Auftraege" gelöscht werden.',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: 'DELETE FROM Auftraege WHERE KundenNr = 403',
      erklaerung: 'DELETE FROM Tabelle WHERE Bedingung löscht alle Zeilen, die die Bedingung erfüllen. Ohne WHERE würden alle Zeilen gelöscht.'
    },

    // --- Unterabfragen ---
    {
      nr: 18, thema: 'sql-unterabfragen', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Mitarbeiter angezeigt werden, deren Gehalt über dem Durchschnittsgehalt aller Mitarbeiter liegt.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT * FROM Mitarbeiter WHERE Gehalt > AVG(Gehalt)',
        'SELECT * FROM Mitarbeiter WHERE Gehalt > (SELECT AVG(Gehalt) FROM Mitarbeiter)',
        'SELECT * FROM Mitarbeiter HAVING Gehalt > AVG(Gehalt)',
        'SELECT * FROM Mitarbeiter WHERE Gehalt > AVERAGE(Gehalt)',
        'SELECT * FROM Mitarbeiter WHERE Gehalt > (SELECT MEAN(Gehalt) FROM Mitarbeiter)'
      ],
      loesung: 2,
      erklaerung: 'Aggregatfunktionen wie AVG() können nicht direkt in der WHERE-Klausel stehen. Die Lösung ist eine Unterabfrage (Subquery), die den Durchschnitt zuerst berechnet. AVERAGE und MEAN sind keine SQL-Funktionen.'
    },
    {
      nr: 19, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Kunden angezeigt werden, deren Firmenname mit „Web" beginnt.',
      frage: 'Welche WHERE-Bedingung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bedingung in das Kästchen ein.',
      optionen: [
        "WHERE Firmenname = 'Web*'",
        "WHERE Firmenname LIKE 'Web%'",
        "WHERE Firmenname STARTS WITH 'Web'",
        "WHERE Firmenname CONTAINS 'Web'",
        "WHERE Firmenname LIKE 'Web_'"
      ],
      loesung: 2,
      erklaerung: 'LIKE ermöglicht Mustervergleiche. Das Prozentzeichen % steht für beliebig viele Zeichen. Der Unterstrich _ steht für genau ein Zeichen. STARTS WITH und CONTAINS sind keine SQL-Schlüsselwörter. Der Stern * ist kein Platzhalter in LIKE.'
    },
    {
      nr: 20, thema: 'sql-join', typ: 'sql',
      text: 'Es sollen die Firmennamen aller Kunden zusammen mit der Summe ihrer Auftragsbeträge angezeigt werden. Kunden ohne Aufträge sollen nicht erscheinen. Die Summe soll als „Gesamtbetrag" angezeigt und absteigend sortiert werden.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT k.Firmenname, SUM(a.Betrag) AS Gesamtbetrag FROM Kunden k INNER JOIN Auftraege a ON k.KundenNr = a.KundenNr GROUP BY k.Firmenname ORDER BY Gesamtbetrag DESC",
      loesungVarianten: [
        "SELECT Firmenname, SUM(Betrag) AS Gesamtbetrag FROM Kunden INNER JOIN Auftraege ON Kunden.KundenNr = Auftraege.KundenNr GROUP BY Firmenname ORDER BY Gesamtbetrag DESC",
        "SELECT Firmenname, SUM(Betrag) AS Gesamtbetrag FROM Kunden JOIN Auftraege ON Kunden.KundenNr = Auftraege.KundenNr GROUP BY Firmenname ORDER BY Gesamtbetrag DESC",
        "SELECT k.Firmenname, SUM(a.Betrag) AS Gesamtbetrag FROM Kunden k JOIN Auftraege a ON k.KundenNr = a.KundenNr GROUP BY k.Firmenname ORDER BY Gesamtbetrag DESC",
        "SELECT Firmenname, SUM(Betrag) AS Gesamtbetrag FROM Kunden INNER JOIN Auftraege ON Kunden.KundenNr = Auftraege.KundenNr GROUP BY Firmenname ORDER BY SUM(Betrag) DESC"
      ],
      erklaerung: 'Diese Abfrage kombiniert JOIN (Tabellenverknüpfung), Aggregatfunktion SUM() (Summenbildung), GROUP BY (Gruppierung nach Kunde) und ORDER BY DESC (absteigende Sortierung). Das Alias „Gesamtbetrag" kann in ORDER BY verwendet werden.'
    }
  ]
});
