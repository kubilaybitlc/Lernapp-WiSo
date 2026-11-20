// SQL-Übungssatz 4 – Erweiterte SQL-Konzepte (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_SQL_SAETZE = window.WISO_SQL_SAETZE || []).push({
  id: 'sql-04',
  titel: 'SQL-Übungssatz 4',
  untertitel: 'Erweiterte SQL-Konzepte',
  ausgangssituation:
    'Das FitTrack Sportstudio verwaltet Mitgliederdaten, Kursbuchungen und Trainereinsätze in einer relationalen Datenbank.',

  situationen: [
    {
      von: 1, bis: 20,
      text: 'Die Datenbank des FitTrack Sportstudios enthält folgende Tabellen (Auszug):',
      tabelle: {
        name: 'Mitglieder',
        kopf: ['MitgliedNr', 'Vorname', 'Nachname', 'Geburtsdatum', 'Tarif', 'Beitrag', 'Eintrittsdatum'],
        zeilen: [
          ['201', 'Lena', 'Kraft', '1990-05-12', 'Premium', '49.90', '2022-01-15'],
          ['202', 'Moritz', 'Stein', '1985-11-03', 'Basis', '29.90', '2023-03-01'],
          ['203', 'Sophie', 'Winter', '1998-07-22', 'VIP', '79.90', '2021-06-10'],
          ['204', 'Jonas', 'Berger', '2001-02-14', 'Basis', '29.90', '2024-01-20'],
          ['205', 'Nina', 'Scholz', '1993-09-30', 'Premium', '49.90', '2022-08-01'],
          ['206', 'Paul', 'Hartmann', '1979-04-18', 'VIP', '79.90', '2024-05-01']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Kurse',
        kopf: ['KursNr', 'Bezeichnung', 'TrainerNr', 'MaxTeilnehmer', 'Wochentag', 'Uhrzeit'],
        zeilen: [
          ['301', 'Yoga Grundkurs', '401', '15', 'Montag', '09:00'],
          ['302', 'Spinning', '402', '20', 'Dienstag', '18:00'],
          ['303', 'Rückenfit', '401', '12', 'Mittwoch', '10:00'],
          ['304', 'CrossFit', '403', '10', 'Donnerstag', '17:00'],
          ['305', 'Pilates', '402', '15', 'Freitag', '11:00']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Trainer',
        kopf: ['TrainerNr', 'Vorname', 'Nachname', 'Spezialgebiet', 'Stundenlohn'],
        zeilen: [
          ['401', 'Marie', 'Lang', 'Yoga', '35.00'],
          ['402', 'Tim', 'Richter', 'Ausdauer', '40.00'],
          ['403', 'Fabian', 'Groß', 'Kraft', '45.00']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Buchungen',
        kopf: ['BuchungNr', 'MitgliedNr', 'KursNr', 'Datum'],
        zeilen: [
          ['501', '201', '301', '2025-09-02'],
          ['502', '201', '303', '2025-09-04'],
          ['503', '203', '302', '2025-09-03'],
          ['504', '205', '304', '2025-09-05'],
          ['505', '203', '301', '2025-09-09'],
          ['506', '201', '305', '2025-09-12'],
          ['507', '205', '301', '2025-09-16'],
          ['508', '206', '302', '2025-10-01'],
          ['509', '206', '304', '2025-10-02'],
          ['510', '201', '301', '2025-10-06']
        ]
      }
    },
    {
      von: 1, bis: 20,
      tabelle: {
        name: 'Mitgliedschaften',
        kopf: ['MitgliedNr', 'Tarif', 'GueltigVon', 'GueltigBis'],
        zeilen: [
          ['201', 'Premium', '2022-01-15', '2026-01-14'],
          ['202', 'Basis', '2023-03-01', 'NULL'],
          ['203', 'VIP', '2021-06-10', '2025-12-31'],
          ['204', 'Basis', '2024-01-20', 'NULL'],
          ['205', 'Premium', '2022-08-01', 'NULL'],
          ['206', 'VIP', '2024-05-01', '2026-04-30']
        ]
      }
    }
  ],

  aufgaben: [
    // 1 – Transitive Abhängigkeit erkennen
    {
      nr: 1, thema: 'db-normalisierung', typ: 'einfach',
      text: 'In der Tabelle „Mitglieder“ (Primärschlüssel MitgliedNr) ist bei jedem Mitglied neben dem Tarif auch der monatliche Beitrag gespeichert. Der Beitrag ergibt sich allein aus dem Tarif.',
      frage: 'Welche Aussage zur Tabelle „Mitglieder“ trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Tabelle verletzt wegen der Dezimalzahlen in der Spalte Beitrag die 1. Normalform.',
        'Die Tabelle verletzt wegen der Abhängigkeit des Beitrags vom Tarif die 3. Normalform.',
        'Die Tabelle verletzt wegen der Abhängigkeit des Beitrags von einem Teil des Primärschlüssels die 2. Normalform.',
        'Die Tabelle ist dank der eindeutigen MitgliedNr redundanzfrei.',
        'Die Spalte Beitrag muss als Fremdschlüssel auf die Tabelle „Mitgliedschaften“ verweisen.'
      ],
      loesung: 2,
      erklaerung: 'Es gilt MitgliedNr → Tarif und Tarif → Beitrag. Der Beitrag ist also transitiv vom Primärschlüssel abhängig, das verletzt die 3. Normalform. Folge: Der Beitrag je Tarif steht mehrfach in der Tabelle (Redundanz, z. B. 29,90 bei Stein und Berger). Lösung: eigene Tabelle Tarife (Tarif, Beitrag), in „Mitglieder“ bleibt nur der Tarif als Fremdschlüssel. Die 2. Normalform ist erfüllt, weil der Primärschlüssel nur aus einer Spalte besteht. Die 1. Normalform betrifft atomare Werte, nicht den Datentyp.'
    },
    // 2 – Änderungsanomalie vermeiden (UPDATE)
    {
      nr: 2, thema: 'db-normalisierung', typ: 'sql',
      text: 'Bis die Tabelle „Mitglieder“ normalisiert ist, wird der Beitrag weiterhin dort gespeichert. Der Beitrag des Tarifs Premium steigt auf 54,90 EUR. Damit keine Änderungsanomalie entsteht, muss der neue Beitrag bei allen Mitgliedern mit diesem Tarif gespeichert werden.',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: "UPDATE Mitglieder SET Beitrag = 54.90 WHERE Tarif = 'Premium'",
      erklaerung: 'Weil der Beitrag redundant bei jedem Mitglied steht, müssen alle Zeilen mit dem Tarif Premium geändert werden (hier Kraft und Scholz). Würde nur eine Zeile geändert, hätte derselbe Tarif zwei verschiedene Beiträge: Die Daten wären inkonsistent (Änderungsanomalie). Nach der Normalisierung mit einer Tabelle Tarife müsste nur noch eine einzige Zeile geändert werden.'
    },
    // 3 – CASE WHEN Syntax
    {
      nr: 3, thema: 'sql-erweitert', typ: 'einfach', codeOptionen: true,
      text: 'Jedes Mitglied soll abhängig von seinem Tarif eine Bezeichnung erhalten: „Standard" für Basis, „Komfort" für Premium, „Exklusiv" für VIP.',
      frage: 'Welche SQL-Abfrage verwendet die CASE-WHEN-Syntax korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        "SELECT Nachname, IF Tarif = 'Basis' THEN 'Standard' ELSE IF Tarif = 'Premium' THEN 'Komfort' ELSE 'Exklusiv' FROM Mitglieder",
        "SELECT Nachname, CASE Tarif WHEN 'Basis' THEN 'Standard' WHEN 'Premium' THEN 'Komfort' ELSE 'Exklusiv' END FROM Mitglieder",
        "SELECT Nachname, SWITCH(Tarif, 'Basis', 'Standard', 'Premium', 'Komfort', 'Exklusiv') FROM Mitglieder",
        "SELECT Nachname, DECODE(Tarif, 'Basis', 'Standard', 'Premium', 'Komfort', 'VIP', 'Exklusiv') FROM Mitglieder",
        "SELECT Nachname, CHOOSE(Tarif, 'Standard', 'Komfort', 'Exklusiv') FROM Mitglieder"
      ],
      loesung: 2,
      erklaerung: 'CASE ... WHEN ... THEN ... ELSE ... END ist die Standard-SQL-Syntax für bedingte Ausdrücke. IF/THEN, SWITCH, DECODE und CHOOSE sind keine Standard-SQL-Konstrukte für SELECT-Listen (DECODE existiert nur in Oracle).'
    },
    // 4 – CASE WHEN schreiben
    {
      nr: 4, thema: 'sql-erweitert', typ: 'sql',
      text: 'Für eine Auswertung soll der monatliche Beitrag jedes Mitglieds in Kategorien eingeteilt werden: unter 40,00 EUR als „günstig", von 40,00 bis unter 60,00 EUR als „mittel", ab 60,00 EUR als „teuer". Ausgegeben werden sollen Nachname, Beitrag und die Kategorie als „Preisklasse".',
      frage: 'Schreiben Sie die passende SQL-Abfrage mit CASE WHEN.',
      loesung: "SELECT Nachname, Beitrag, CASE WHEN Beitrag < 40 THEN 'günstig' WHEN Beitrag < 60 THEN 'mittel' ELSE 'teuer' END AS Preisklasse FROM Mitglieder",
      loesungVarianten: [
        "SELECT Nachname, Beitrag, CASE WHEN Beitrag < 40 THEN 'günstig' WHEN Beitrag >= 40 AND Beitrag < 60 THEN 'mittel' ELSE 'teuer' END AS Preisklasse FROM Mitglieder"
      ],
      erklaerung: 'CASE WHEN prüft die Bedingungen der Reihe nach. Die erste zutreffende Bedingung bestimmt das Ergebnis. ELSE fängt alle übrigen Fälle auf. END schließt den CASE-Ausdruck ab. AS vergibt den Alias „Preisklasse".'
    },
    // 5 – CREATE VIEW
    {
      nr: 5, thema: 'sql-erweitert', typ: 'einfach', codeOptionen: true,
      text: 'Die Studioleitung möchte für häufig benötigte Auswertungen Views einsetzen.',
      frage: 'Was bewirkt der Befehl CREATE VIEW?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Beschreibung in das Kästchen ein.',
      optionen: [
        'Er erstellt eine neue Tabelle mit einer Kopie der Daten',
        'Er speichert eine bei jedem Zugriff neu ausgeführte SELECT-Abfrage als virtuelle Tabelle',
        'Er erstellt einen Index für schnellere Abfragen',
        'Er exportiert Daten in eine externe Datei',
        'Er sperrt eine Tabelle für Schreibzugriffe'
      ],
      loesung: 2,
      erklaerung: 'Eine View (Sicht) ist eine gespeicherte Abfrage, die sich wie eine Tabelle verwenden lässt. Sie enthält keine eigenen Daten, sondern greift bei jedem Aufruf auf die zugrunde liegenden Tabellen zu. Änderungen an den Basistabellen sind sofort in der View sichtbar.'
    },
    // 6 – CREATE VIEW schreiben
    {
      nr: 6, thema: 'sql-erweitert', typ: 'sql',
      text: 'Es soll eine View namens „KursUebersicht" erstellt werden, die für jeden Kurs die Bezeichnung und den vollständigen Namen des Trainers (Vorname, Nachname) anzeigt.',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: "CREATE VIEW KursUebersicht AS SELECT k.Bezeichnung, t.Vorname, t.Nachname FROM Kurse k INNER JOIN Trainer t ON k.TrainerNr = t.TrainerNr",
      loesungVarianten: [
        "CREATE VIEW KursUebersicht AS SELECT Kurse.Bezeichnung, Trainer.Vorname, Trainer.Nachname FROM Kurse INNER JOIN Trainer ON Kurse.TrainerNr = Trainer.TrainerNr",
        "CREATE VIEW KursUebersicht AS SELECT Kurse.Bezeichnung, Trainer.Vorname, Trainer.Nachname FROM Kurse JOIN Trainer ON Kurse.TrainerNr = Trainer.TrainerNr",
        "CREATE VIEW KursUebersicht AS SELECT k.Bezeichnung, t.Vorname, t.Nachname FROM Kurse k JOIN Trainer t ON k.TrainerNr = t.TrainerNr"
      ],
      erklaerung: 'CREATE VIEW Name AS SELECT ... definiert eine View. Die Abfrage hinter AS kann beliebig komplex sein, einschließlich JOINs. Danach kann man mit SELECT * FROM KursUebersicht auf die View zugreifen wie auf eine Tabelle.'
    },
    // 7 – EXISTS vs IN
    {
      nr: 7, thema: 'sql-unterabfragen', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Mitglieder angezeigt werden, die mindestens eine Buchung haben. Die Abfrage kann mit IN oder EXISTS formuliert werden.',
      frage: 'Welche Aussage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'IN und EXISTS liefern immer ein identisches Ergebnis und unterscheiden sich nur in der Schreibweise',
        'EXISTS prüft die Unterabfrage auf mindestens eine Zeile, IN vergleicht einen Wert mit einer Liste',
        'EXISTS kann nur mit einer einzigen Tabelle verwendet werden',
        'IN ist immer schneller als EXISTS',
        'EXISTS liefert die gefundenen Zeilen zurück, IN liefert nur TRUE oder FALSE'
      ],
      loesung: 2,
      erklaerung: 'EXISTS prüft, ob eine korrelierte Unterabfrage mindestens eine Zeile zurückgibt (TRUE/FALSE). IN prüft, ob ein Wert in einer Ergebnisliste enthalten ist. Bei großen Datenmengen kann EXISTS effizienter sein, weil es nach dem ersten Treffer abbricht.'
    },
    // 8 – EXISTS schreiben
    {
      nr: 8, thema: 'sql-unterabfragen', typ: 'sql',
      text: 'Es sollen Vorname und Nachname aller Mitglieder angezeigt werden, die mindestens eine Buchung haben. Verwenden Sie EXISTS.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT Vorname, Nachname FROM Mitglieder m WHERE EXISTS (SELECT 1 FROM Buchungen b WHERE b.MitgliedNr = m.MitgliedNr)",
      loesungVarianten: [
        "SELECT Vorname, Nachname FROM Mitglieder WHERE EXISTS (SELECT 1 FROM Buchungen WHERE Buchungen.MitgliedNr = Mitglieder.MitgliedNr)",
        "SELECT Vorname, Nachname FROM Mitglieder WHERE EXISTS (SELECT * FROM Buchungen WHERE Buchungen.MitgliedNr = Mitglieder.MitgliedNr)",
        "SELECT Vorname, Nachname FROM Mitglieder m WHERE EXISTS (SELECT * FROM Buchungen b WHERE b.MitgliedNr = m.MitgliedNr)"
      ],
      erklaerung: 'EXISTS prüft für jedes Mitglied, ob es mindestens eine Zeile in Buchungen gibt, die zur MitgliedNr passt. Die Unterabfrage ist korreliert, weil sie sich auf die äußere Abfrage bezieht. SELECT 1 reicht, da nur die Existenz geprüft wird, nicht der Inhalt.'
    },
    // 9 – NOT EXISTS
    {
      nr: 9, thema: 'sql-unterabfragen', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Mitglieder angezeigt werden, die noch nie einen Kurs gebucht haben.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT * FROM Mitglieder WHERE MitgliedNr NOT IN Buchungen',
        'SELECT * FROM Mitglieder m WHERE NOT EXISTS (SELECT 1 FROM Buchungen b WHERE b.MitgliedNr = m.MitgliedNr)',
        'SELECT * FROM Mitglieder WHERE Buchungen IS NULL',
        'SELECT * FROM Mitglieder WHERE COUNT(Buchungen) = 0',
        'SELECT * FROM Mitglieder WHERE MitgliedNr <> Buchungen.MitgliedNr'
      ],
      loesung: 2,
      erklaerung: 'NOT EXISTS prüft, ob die korrelierte Unterabfrage keine Zeile liefert. Option 1 ist syntaktisch falsch (IN braucht eine Unterabfrage oder Werteliste). Option 3 prüft keine andere Tabelle. COUNT kann nicht direkt in WHERE stehen. In Option 5 ist die Tabelle Buchungen gar nicht in FROM angegeben, ihre Spalten können deshalb nicht verwendet werden.'
    },
    // 10 – Korrelierte Unterabfrage schreiben
    {
      nr: 10, thema: 'sql-unterabfragen', typ: 'sql',
      text: 'Es sollen alle Kurse angezeigt werden, die mehr Buchungen haben als der Durchschnitt aller Kurse. Ausgegeben werden sollen die Bezeichnung und die Anzahl der Buchungen.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT k.Bezeichnung, COUNT(*) AS Anzahl FROM Kurse k INNER JOIN Buchungen b ON k.KursNr = b.KursNr GROUP BY k.Bezeichnung HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM Buchungen GROUP BY KursNr) AS sub)",
      loesungVarianten: [
        "SELECT Kurse.Bezeichnung, COUNT(*) AS Anzahl FROM Kurse INNER JOIN Buchungen ON Kurse.KursNr = Buchungen.KursNr GROUP BY Kurse.Bezeichnung HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM Buchungen GROUP BY KursNr) AS sub)",
        "SELECT k.Bezeichnung, COUNT(*) AS Anzahl FROM Kurse k JOIN Buchungen b ON k.KursNr = b.KursNr GROUP BY k.Bezeichnung HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM Buchungen GROUP BY KursNr) sub)",
        "SELECT k.Bezeichnung, COUNT(*) AS Anzahl FROM Kurse k JOIN Buchungen b ON k.KursNr = b.KursNr GROUP BY k.Bezeichnung HAVING COUNT(*) > (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM Buchungen GROUP BY KursNr) AS sub)"
      ],
      erklaerung: 'Hier wird in der HAVING-Klausel eine Unterabfrage verwendet, die den Durchschnitt der Buchungen je Kurs berechnet. Die innere Unterabfrage zählt zunächst die Buchungen pro Kurs, die äußere bildet daraus den Durchschnitt.'
    },
    // 11 – Self-Join Konzept
    {
      nr: 11, thema: 'sql-join', typ: 'einfach', codeOptionen: true,
      text: 'Für eine Auswertung der Mitgliederdaten soll ein Self-Join verwendet werden.',
      frage: 'Welche Beschreibung trifft auf einen Self-Join zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Beschreibung in das Kästchen ein.',
      optionen: [
        'Eine Tabelle wird zur Suche nach Duplikaten mit einer exakten Kopie von sich selbst verknüpft',
        'Eine Tabelle wird über Aliase wie zwei verschiedene Tabellen mit sich selbst verknüpft',
        'Eine Abfrage wird automatisch bis zum Ausbleiben neuer Ergebnisse wiederholt',
        'Zwei verschiedene Tabellen werden über Primär- und Fremdschlüssel verknüpft',
        'Eine View wird auf Basis derselben Tabelle erstellt'
      ],
      loesung: 2,
      erklaerung: 'Bei einem Self-Join wird dieselbe Tabelle zweimal in der FROM-Klausel genannt und bekommt verschiedene Aliase (z. B. m1 und m2). Dadurch können Beziehungen innerhalb einer Tabelle abgefragt werden, z. B. „Mitglieder mit demselben Tarif".'
    },
    // 12 – Self-Join schreiben
    {
      nr: 12, thema: 'sql-join', typ: 'sql',
      text: 'Es sollen alle Paare von Mitgliedern angezeigt werden, die denselben Tarif haben. Jedes Paar soll nur einmal erscheinen (nicht doppelt und kein Paar mit sich selbst). Ausgegeben werden sollen die Nachnamen beider Mitglieder und der Tarif.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT m1.Nachname, m2.Nachname, m1.Tarif FROM Mitglieder m1 INNER JOIN Mitglieder m2 ON m1.Tarif = m2.Tarif AND m1.MitgliedNr < m2.MitgliedNr",
      loesungVarianten: [
        "SELECT m1.Nachname, m2.Nachname, m1.Tarif FROM Mitglieder m1 JOIN Mitglieder m2 ON m1.Tarif = m2.Tarif AND m1.MitgliedNr < m2.MitgliedNr",
        "SELECT m1.Nachname, m2.Nachname, m1.Tarif FROM Mitglieder m1, Mitglieder m2 WHERE m1.Tarif = m2.Tarif AND m1.MitgliedNr < m2.MitgliedNr"
      ],
      erklaerung: 'Der Self-Join verknüpft die Tabelle Mitglieder mit sich selbst (Aliase m1 und m2). Die Bedingung m1.MitgliedNr < m2.MitgliedNr verhindert, dass ein Mitglied mit sich selbst gepaart wird und dass jedes Paar doppelt erscheint (z. B. Kraft-Scholz und Scholz-Kraft).'
    },
    // 13 – COUNT(DISTINCT)
    {
      nr: 13, thema: 'sql-aggregat', typ: 'einfach', codeOptionen: true,
      text: 'Es soll ermittelt werden, wie viele verschiedene Mitglieder mindestens einen Kurs gebucht haben.',
      frage: 'Welche SQL-Abfrage ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT COUNT(*) FROM Buchungen',
        'SELECT COUNT(MitgliedNr) FROM Buchungen',
        'SELECT COUNT(DISTINCT MitgliedNr) FROM Buchungen',
        'SELECT DISTINCT COUNT(MitgliedNr) FROM Buchungen',
        'SELECT COUNT(UNIQUE MitgliedNr) FROM Buchungen'
      ],
      loesung: 3,
      erklaerung: 'COUNT(DISTINCT Spalte) zählt die unterschiedlichen Werte in einer Spalte. COUNT(*) zählt alle Zeilen (auch wenn ein Mitglied mehrfach gebucht hat). COUNT(MitgliedNr) zählt alle Nicht-NULL-Werte, also ebenfalls mit Duplikaten. UNIQUE ist kein gültiges Schlüsselwort innerhalb von COUNT.'
    },
    // 14 – Komplexe Aggregation schreiben
    {
      nr: 14, thema: 'sql-aggregat', typ: 'sql',
      text: 'Es soll die durchschnittliche Anzahl von Buchungen je Mitglied berechnet werden. Das Ergebnis soll als „DurchschnittBuchungen" angezeigt werden.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT AVG(cnt) AS DurchschnittBuchungen FROM (SELECT COUNT(*) AS cnt FROM Buchungen GROUP BY MitgliedNr) AS sub",
      loesungVarianten: [
        "SELECT AVG(cnt) AS DurchschnittBuchungen FROM (SELECT COUNT(*) AS cnt FROM Buchungen GROUP BY MitgliedNr) sub",
        "SELECT AVG(Anzahl) AS DurchschnittBuchungen FROM (SELECT MitgliedNr, COUNT(*) AS Anzahl FROM Buchungen GROUP BY MitgliedNr) AS sub"
      ],
      erklaerung: 'Da AVG() nicht auf COUNT() verschachtelt angewendet werden kann, wird eine Unterabfrage benötigt: Zuerst zählt die innere Abfrage die Buchungen je Mitglied, dann berechnet die äußere den Durchschnitt über diese Zählergebnisse.'
    },
    // 15 – GROUP BY mit mehreren Spalten
    {
      nr: 15, thema: 'sql-gruppierung', typ: 'einfach', codeOptionen: true,
      text: 'Es soll ermittelt werden, wie viele Buchungen jedes Mitglied für jeden einzelnen Kurs hat.',
      frage: 'Welche SQL-Abfrage gruppiert korrekt nach Mitglied und Kurs?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abfrage in das Kästchen ein.',
      optionen: [
        'SELECT MitgliedNr, KursNr, COUNT(*) FROM Buchungen GROUP BY MitgliedNr',
        'SELECT MitgliedNr, KursNr, COUNT(*) FROM Buchungen GROUP BY KursNr',
        'SELECT MitgliedNr, KursNr, COUNT(*) FROM Buchungen GROUP BY MitgliedNr, KursNr',
        'SELECT MitgliedNr, KursNr, COUNT(*) FROM Buchungen GROUP BY ALL',
        'SELECT MitgliedNr, KursNr, COUNT(*) FROM Buchungen ORDER BY MitgliedNr, KursNr'
      ],
      loesung: 3,
      erklaerung: 'Wenn zwei Spalten in der SELECT-Liste neben einer Aggregatfunktion stehen, müssen beide in GROUP BY aufgeführt werden. Nur so wird je Kombination aus MitgliedNr und KursNr ein eigener Zähler gebildet.'
    },
    // 16 – GROUP BY + HAVING + JOIN schreiben
    {
      nr: 16, thema: 'sql-gruppierung', typ: 'sql',
      text: 'Es sollen alle Kurse angezeigt werden, die weniger als 3 Buchungen haben. Ausgegeben werden sollen die Bezeichnung des Kurses und die Anzahl der Buchungen.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT k.Bezeichnung, COUNT(*) AS Anzahl FROM Kurse k INNER JOIN Buchungen b ON k.KursNr = b.KursNr GROUP BY k.Bezeichnung HAVING COUNT(*) < 3",
      loesungVarianten: [
        "SELECT Kurse.Bezeichnung, COUNT(*) AS Anzahl FROM Kurse INNER JOIN Buchungen ON Kurse.KursNr = Buchungen.KursNr GROUP BY Kurse.Bezeichnung HAVING COUNT(*) < 3",
        "SELECT k.Bezeichnung, COUNT(*) AS Anzahl FROM Kurse k JOIN Buchungen b ON k.KursNr = b.KursNr GROUP BY k.Bezeichnung HAVING COUNT(*) < 3"
      ],
      erklaerung: 'Der JOIN verknüpft Kurse und Buchungen. GROUP BY fasst die Zeilen nach Kursbezeichnung zusammen, COUNT(*) zählt die Buchungen. HAVING filtert die Gruppen mit weniger als 3 Buchungen. WHERE könnte hier nicht verwendet werden, da es Aggregatfunktionen nicht auswertet.'
    },
    // 17 – Datumsvergleich
    {
      nr: 17, thema: 'sql-where', typ: 'einfach', codeOptionen: true,
      text: 'Es sollen alle Mitglieder angezeigt werden, die im Jahr 2022 eingetreten sind.',
      frage: 'Welche WHERE-Bedingung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bedingung in das Kästchen ein.',
      optionen: [
        "WHERE YEAR(Eintrittsdatum) = 2022",
        "WHERE Eintrittsdatum BETWEEN '2022-01-01' AND '2022-12-31'",
        "WHERE Eintrittsdatum LIKE '2022%'",
        "WHERE Eintrittsdatum IN (2022)",
        "WHERE Eintrittsdatum = 2022"
      ],
      loesung: 2,
      erklaerung: 'BETWEEN mit zwei Datumswerten ist die portabelste Methode. YEAR() existiert in vielen, aber nicht in allen Datenbanksystemen. LIKE auf Datumsfelder ist unsicher. IN (2022) vergleicht mit einer Zahl, nicht einem Datumsbereich. Option 5 vergleicht ein Datum mit einer Zahl.'
    },
    // 18 – WHERE mit Unterabfrage und Datumsbereich schreiben
    {
      nr: 18, thema: 'sql-where', typ: 'sql',
      text: 'Es sollen alle Mitglieder angezeigt werden, die im September 2025 mindestens einen Kurs gebucht haben. Ausgegeben werden sollen Vorname und Nachname.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT Vorname, Nachname FROM Mitglieder WHERE MitgliedNr IN (SELECT MitgliedNr FROM Buchungen WHERE Datum BETWEEN '2025-09-01' AND '2025-09-30')",
      loesungVarianten: [
        "SELECT DISTINCT m.Vorname, m.Nachname FROM Mitglieder m INNER JOIN Buchungen b ON m.MitgliedNr = b.MitgliedNr WHERE b.Datum BETWEEN '2025-09-01' AND '2025-09-30'",
        "SELECT Vorname, Nachname FROM Mitglieder m WHERE EXISTS (SELECT 1 FROM Buchungen b WHERE b.MitgliedNr = m.MitgliedNr AND b.Datum BETWEEN '2025-09-01' AND '2025-09-30')"
      ],
      erklaerung: 'Die Unterabfrage filtert die MitgliedNr aus Buchungen im September 2025. Die äußere Abfrage zeigt dann die zugehörigen Namen. Alternativ funktioniert ein JOIN mit DISTINCT oder eine EXISTS-Unterabfrage.'
    },
    // 19 – COALESCE
    {
      nr: 19, thema: 'sql-erweitert', typ: 'einfach', codeOptionen: true,
      text: 'Die Spalte „GueltigBis" in der Tabelle „Mitgliedschaften" enthält bei einigen Mitgliedern den Wert NULL (unbefristete Mitgliedschaft).',
      frage: 'Was bewirkt die Funktion COALESCE(GueltigBis, \'unbefristet\')?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Beschreibung in das Kästchen ein.',
      optionen: [
        'Sie löscht alle Zeilen mit NULL in GueltigBis',
        'Sie gibt den Wert von GueltigBis zurück, bei NULL stattdessen „unbefristet"',
        'Sie wandelt alle Datumswerte in den Text „unbefristet" um',
        'Sie ersetzt alle Werte in der Spalte dauerhaft durch „unbefristet"',
        'Sie sucht den Text „unbefristet" in der Spalte'
      ],
      loesung: 2,
      erklaerung: 'COALESCE gibt den ersten Wert aus der Parameterliste zurück, der nicht NULL ist. Ist GueltigBis gefüllt, wird dessen Wert zurückgegeben. Ist er NULL, wird der Ersatzwert „unbefristet" ausgegeben. Die Spalte selbst wird dadurch nicht verändert.'
    },
    // 20 – COALESCE schreiben
    {
      nr: 20, thema: 'sql-erweitert', typ: 'sql',
      text: 'Es sollen MitgliedNr, Tarif, GueltigVon und GueltigBis aller Mitgliedschaften angezeigt werden. Wenn GueltigBis NULL ist, soll stattdessen der Text „unbefristet" angezeigt werden. Die Spalte soll als „Laufzeit" erscheinen.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT MitgliedNr, Tarif, GueltigVon, COALESCE(GueltigBis, 'unbefristet') AS Laufzeit FROM Mitgliedschaften",
      erklaerung: 'COALESCE(GueltigBis, \'unbefristet\') prüft den Wert von GueltigBis. Ist er vorhanden, wird er ausgegeben. Ist er NULL, wird „unbefristet" als Ersatz angezeigt. Mit AS Laufzeit erhält die Spalte im Ergebnis den gewünschten Namen.'
    }
  ]
});
