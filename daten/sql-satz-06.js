// SQL-Übungssatz 6 – Datenbankentwurf: Redundanz, Anomalien, Normalisierung (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_SQL_SAETZE = window.WISO_SQL_SAETZE || []).push({
  id: 'sql-06',
  titel: 'SQL-Übungssatz 6',
  untertitel: 'Redundanz, Anomalien und Normalisierung',
  ausgangssituation:
    'Die ByteAkademie GmbH bietet IT-Seminare für Firmenkunden an. Bisher werden alle Seminaranmeldungen in einer einzigen Tabelle erfasst. Als Auszubildende/r sollen Sie den Datenbankentwurf prüfen und verbessern.',

  situationen: [
    {
      von: 1, bis: 11,
      text: 'Die bisherige Tabelle „Seminaranmeldungen“ hat den zusammengesetzten Primärschlüssel (TeilnehmerNr, SeminarNr). Es gelten folgende Abhängigkeiten: TeilnehmerNr → Name, Firma; Firma → Ort; SeminarNr → Seminartitel, Preis, DozentNr; DozentNr → Dozent; (TeilnehmerNr, SeminarNr) → Bezahlt.',
      tabelle: {
        name: 'Seminaranmeldungen',
        kopf: ['TeilnehmerNr', 'Name', 'Firma', 'Ort', 'SeminarNr', 'Seminartitel', 'Preis', 'DozentNr', 'Dozent', 'Bezahlt'],
        zeilen: [
          ['1001', 'Anna Weber', 'Datenwerk GmbH', 'Köln', '10', 'SQL-Grundlagen', '690.00', '1', 'Klein', 'ja'],
          ['1001', 'Anna Weber', 'Datenwerk GmbH', 'Köln', '12', 'Linux-Administration', '890.00', '2', 'Yilmaz', 'nein'],
          ['1002', 'Ben Fischer', 'Netzpunkt AG', 'Düsseldorf', '10', 'SQL-Grundlagen', '690.00', '1', 'Klein', 'ja'],
          ['1003', 'Clara Hoffmann', 'Datenwerk GmbH', 'Köln', '11', 'Python-Einstieg', '790.00', '1', 'Klein', 'ja'],
          ['1003', 'Clara Hoffmann', 'Datenwerk GmbH', 'Köln', '10', 'SQL-Grundlagen', '690.00', '1', 'Klein', 'nein'],
          ['1004', 'David Schulz', 'Netzpunkt AG', 'Düsseldorf', '12', 'Linux-Administration', '890.00', '2', 'Yilmaz', 'ja'],
          ['1005', 'Emma Wolf', 'Codehaus KG', 'Bonn', '13', 'IT-Sicherheit', '990.00', '3', 'Brandt', 'ja']
        ]
      }
    },
    {
      von: 12, bis: 12,
      text: 'Eine Partnerfirma hat ihre Kundendaten in folgender Tabelle gespeichert:',
      tabelle: {
        name: 'KundenAlt',
        kopf: ['KundenNr', 'Kunde', 'Anschrift', 'Telefon'],
        zeilen: [
          ['1', 'Datenwerk GmbH', 'Ringstraße 4, 50667 Köln', '0221 4711, 0221 4712'],
          ['2', 'Netzpunkt AG', 'Kaiserallee 17, 40210 Düsseldorf', '0211 8800'],
          ['3', 'Codehaus KG', 'Marktplatz 2, 53111 Bonn', '0228 5150, 0171 2233445']
        ]
      }
    },
    {
      von: 13, bis: 20,
      text: 'Nach der Normalisierung besteht die Datenbank der ByteAkademie aus folgenden Tabellen. Primärschlüssel: Firmen.FirmaNr, Teilnehmer.TeilnehmerNr, Dozenten.DozentNr, Seminare.SeminarNr, Anmeldungen (TeilnehmerNr, SeminarNr). Fremdschlüssel: Teilnehmer.FirmaNr → Firmen, Seminare.DozentNr → Dozenten, Anmeldungen.TeilnehmerNr → Teilnehmer, Anmeldungen.SeminarNr → Seminare.',
      tabelle: {
        name: 'Firmen',
        kopf: ['FirmaNr', 'Firma', 'Ort'],
        zeilen: [
          ['1', 'Datenwerk GmbH', 'Köln'],
          ['2', 'Netzpunkt AG', 'Düsseldorf'],
          ['3', 'Codehaus KG', 'Bonn']
        ]
      }
    },
    {
      von: 13, bis: 20,
      tabelle: {
        name: 'Teilnehmer',
        kopf: ['TeilnehmerNr', 'Name', 'FirmaNr'],
        zeilen: [
          ['1001', 'Anna Weber', '1'],
          ['1002', 'Ben Fischer', '2'],
          ['1003', 'Clara Hoffmann', '1'],
          ['1004', 'David Schulz', '2'],
          ['1005', 'Emma Wolf', '3']
        ]
      }
    },
    {
      von: 13, bis: 20,
      tabelle: {
        name: 'Dozenten',
        kopf: ['DozentNr', 'Dozent'],
        zeilen: [
          ['1', 'Klein'],
          ['2', 'Yilmaz'],
          ['3', 'Brandt']
        ]
      }
    },
    {
      von: 13, bis: 20,
      tabelle: {
        name: 'Seminare',
        kopf: ['SeminarNr', 'Seminartitel', 'Preis', 'DozentNr'],
        zeilen: [
          ['10', 'SQL-Grundlagen', '690.00', '1'],
          ['11', 'Python-Einstieg', '790.00', '1'],
          ['12', 'Linux-Administration', '890.00', '2'],
          ['13', 'IT-Sicherheit', '990.00', '3']
        ]
      }
    },
    {
      von: 13, bis: 20,
      tabelle: {
        name: 'Anmeldungen',
        kopf: ['TeilnehmerNr', 'SeminarNr', 'Bezahlt'],
        zeilen: [
          ['1001', '10', 'ja'],
          ['1001', '12', 'nein'],
          ['1002', '10', 'ja'],
          ['1003', '11', 'ja'],
          ['1003', '10', 'nein'],
          ['1004', '12', 'ja'],
          ['1005', '13', 'ja']
        ]
      }
    }
  ],

  aufgaben: [
    // 1 – Begriff Redundanz
    {
      nr: 1, thema: 'db-normalisierung', typ: 'einfach',
      text: 'Die Geschäftsführung bemängelt, dass die Tabelle „Seminaranmeldungen“ viele Redundanzen enthält.',
      frage: 'Was versteht man unter Redundanz in einer Datenbank?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Beschreibung in das Kästchen ein.',
      optionen: [
        'Die regelmäßige Sicherung der Datenbank auf ein zweites Speichermedium',
        'Die mehrfache Speicherung derselben Information an verschiedenen Stellen',
        'Das Fehlen von Werten in einzelnen Spalten (NULL-Werte)',
        'Die Verknüpfung zweier Tabellen über einen Fremdschlüssel',
        'Die Verwendung eines zusammengesetzten Primärschlüssels'
      ],
      loesung: 2,
      erklaerung: 'Redundanz bedeutet, dass dieselbe Information mehrfach gespeichert ist, z. B. Titel, Preis und Dozent von „SQL-Grundlagen“ in drei Zeilen. Redundanz kostet Speicherplatz und führt vor allem zu Anomalien und Inkonsistenzen. Eine Datensicherung ist zwar auch eine Kopie, wird aber nicht als Redundanz im Datenbankentwurf bezeichnet.'
    },
    // 2 – Folgen der Redundanz zählen
    {
      nr: 2, thema: 'db-normalisierung', typ: 'zahl',
      text: 'Der Preis des Seminars „SQL-Grundlagen“ wird auf 720,00 EUR erhöht.',
      frage: 'In wie vielen Zeilen der Tabelle „Seminaranmeldungen“ muss der Preis geändert werden, damit die Daten widerspruchsfrei bleiben?',
      anweisung: 'Tragen Sie die Anzahl in das Kästchen ein.',
      loesung: 3,
      erklaerung: 'Das Seminar 10 „SQL-Grundlagen“ kommt in drei Zeilen vor (Weber, Fischer, Hoffmann). Der Preis ist dreimal gespeichert und muss deshalb an drei Stellen geändert werden. Wird eine Zeile vergessen, hat dasselbe Seminar zwei verschiedene Preise (Änderungsanomalie). Nach der Normalisierung steht der Preis nur noch einmal in der Tabelle Seminare.'
    },
    // 3 – Anomalien zuordnen
    {
      nr: 3, thema: 'db-normalisierung', typ: 'zuordnung',
      text: 'In der Tabelle „Seminaranmeldungen“ treten verschiedene Probleme auf.',
      frage: 'Um welche Art von Anomalie handelt es sich jeweils?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Anomalie in das Kästchen ein.',
      optionenTitel: 'Anomalien',
      optionen: [
        'Einfügeanomalie',
        'Änderungsanomalie',
        'Löschanomalie'
      ],
      itemsTitel: 'Situationen',
      items: [
        { text: 'Das neue Seminar „Cloud-Grundlagen“ kann noch nicht gespeichert werden, weil sich bisher niemand angemeldet hat und die TeilnehmerNr Teil des Primärschlüssels ist.', loesung: 1 },
        { text: 'Die Netzpunkt AG zieht nach Essen um. Der Ort wird nur bei Ben Fischer geändert, bei David Schulz steht weiterhin Düsseldorf.', loesung: 2 },
        { text: 'Emma Wolf storniert ihre Anmeldung. Mit dem Löschen der Zeile gehen auch alle Angaben zum Seminar „IT-Sicherheit“ und zum Dozenten Brandt verloren.', loesung: 3 },
        { text: 'Der Dozent Klein heißt nach seiner Heirat Klein-Berg. Die Änderung wird nur in den Zeilen von Anna Weber vorgenommen.', loesung: 2 }
      ],
      erklaerung: 'Einfügeanomalie: Ein Datensatz kann nicht oder nur mit unvollständigen Angaben gespeichert werden, weil andere Daten fehlen (hier fehlt die TeilnehmerNr als Teil des Primärschlüssels). Änderungsanomalie: Eine redundant gespeicherte Information wird nicht überall geändert, die Daten werden inkonsistent. Löschanomalie: Beim Löschen eines Datensatzes gehen ungewollt weitere Informationen verloren.'
    },
    // 4 – Löschanomalie im Detail
    {
      nr: 4, thema: 'db-normalisierung', typ: 'einfach',
      text: 'Die Anmeldung von Emma Wolf (TeilnehmerNr 1005) zum Seminar 13 wird aus der Tabelle „Seminaranmeldungen“ gelöscht.',
      frage: 'Welche Informationen gehen dadurch verloren?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Nur die Anmeldung, keine weiteren Daten.',
        'Die Daten von Emma Wolf und der Bezahlstatus, nicht aber das Seminar „IT-Sicherheit“.',
        'Die Daten von Emma Wolf, der Codehaus KG, des Seminars „IT-Sicherheit“ und des Dozenten Brandt.',
        'Alle Seminare des Dozenten Brandt und alle Teilnehmer aus Bonn.',
        'Keine Informationen wegen der automatischen Archivierung gelöschter Zeilen durch SQL.'
      ],
      loesung: 3,
      erklaerung: 'Emma Wolf, die Codehaus KG (Bonn), das Seminar 13 „IT-Sicherheit“ (990,00 EUR) und der Dozent 3 Brandt kommen nur in dieser einen Zeile vor. Mit der Zeile verschwinden alle diese Informationen. Das ist eine Löschanomalie. In normalisierten Tabellen wird nur die Zeile in „Anmeldungen“ gelöscht, Seminar, Dozent und Firma bleiben erhalten.'
    },
    // 5 – Primärschlüssel
    {
      nr: 5, thema: 'db-modell', typ: 'einfach',
      text: 'Für die Tabelle „Seminaranmeldungen“ wurde der Primärschlüssel (TeilnehmerNr, SeminarNr) gewählt.',
      frage: 'Warum reicht die TeilnehmerNr allein nicht als Primärschlüssel aus?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Begründung in das Kästchen ein.',
      optionen: [
        'Ein Primärschlüssel muss immer aus mindestens zwei Spalten bestehen.',
        'Die TeilnehmerNr kommt bei Teilnehmern mit mehreren Seminaren mehrfach vor.',
        'Primärschlüssel müssen aus Text statt aus Zahlen bestehen.',
        'Die TeilnehmerNr darf NULL-Werte enthalten.',
        'Die TeilnehmerNr wird bereits als Fremdschlüssel verwendet.'
      ],
      loesung: 2,
      erklaerung: 'Ein Primärschlüssel muss jede Zeile eindeutig kennzeichnen und darf nicht NULL sein. Die TeilnehmerNr 1001 und 1003 kommen jeweils zweimal vor, weil diese Teilnehmer zwei Seminare gebucht haben. Erst die Kombination aus TeilnehmerNr und SeminarNr ist eindeutig (zusammengesetzter Primärschlüssel). Primärschlüssel können aus einer oder mehreren Spalten bestehen.'
    },
    // 6 – Normalform bestimmen
    {
      nr: 6, thema: 'db-normalisierung', typ: 'einfach',
      text: 'Die Tabelle „Seminaranmeldungen“ soll schrittweise normalisiert werden.',
      frage: 'In welcher Normalform befindet sich die Tabelle derzeit?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Sie ist wegen mehrfach vorkommender Werte wie „SQL-Grundlagen“ nicht in der 1. Normalform.',
        'Sie ist in der 1. Normalform, aber nicht in der 2. Normalform.',
        'Sie ist in der 2. Normalform, aber nicht in der 3. Normalform.',
        'Sie ist wegen ihres Primärschlüssels in der 3. Normalform.',
        'Normalformen gelten nur für Tabellen mit einspaltigem Primärschlüssel.'
      ],
      loesung: 2,
      erklaerung: 'Alle Werte sind atomar (je Feld nur ein Wert), die 1. Normalform ist also erfüllt. Mehrfach vorkommende Werte verletzen die 1. NF nicht, sie sind Redundanz. Die 2. Normalform ist verletzt, weil z. B. Name nur von der TeilnehmerNr und Seminartitel nur von der SeminarNr abhängen, also nur von einem Teil des zusammengesetzten Primärschlüssels.'
    },
    // 7 – Partielle Abhängigkeit
    {
      nr: 7, thema: 'db-normalisierung', typ: 'mehrfach',
      text: 'Für die 2. Normalform müssen Attribute gefunden werden, die nur von einem Teil des Primärschlüssels (TeilnehmerNr, SeminarNr) abhängen.',
      frage: 'Welche Attribute hängen nur von einem Teil des Primärschlüssels ab?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Attributen in die Kästchen ein.',
      optionen: [
        'Bezahlt',
        'Name',
        'TeilnehmerNr',
        'Preis',
        'SeminarNr'
      ],
      loesung: [2, 4],
      erklaerung: 'Name hängt nur von der TeilnehmerNr ab, Preis nur von der SeminarNr (partielle Abhängigkeiten, Verstoß gegen die 2. NF). Bezahlt hängt vom gesamten Schlüssel ab: Erst Teilnehmer und Seminar zusammen bestimmen, ob diese Anmeldung bezahlt ist. TeilnehmerNr und SeminarNr sind selbst Teile des Primärschlüssels.'
    },
    // 8 – Transitive Abhängigkeit
    {
      nr: 8, thema: 'db-normalisierung', typ: 'einfach',
      text: 'Für die 3. Normalform müssen transitive Abhängigkeiten aufgelöst werden.',
      frage: 'Welche der folgenden Abhängigkeiten ist transitiv?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Abhängigkeit in das Kästchen ein.',
      optionen: [
        'TeilnehmerNr → Name',
        '(TeilnehmerNr, SeminarNr) → Bezahlt',
        'SeminarNr → Preis',
        'SeminarNr → Dozent',
        'TeilnehmerNr → Firma'
      ],
      loesung: 4,
      erklaerung: 'Transitiv ist eine Abhängigkeit, wenn ein Nichtschlüsselattribut nur über ein anderes Nichtschlüsselattribut vom Schlüssel abhängt. Der Name des Dozenten hängt von der DozentNr ab, die wiederum von der SeminarNr abhängt (SeminarNr → DozentNr → Dozent). Ebenso transitiv ist TeilnehmerNr → Firma → Ort. Die übrigen Abhängigkeiten sind direkt.'
    },
    // 9 – Anzahl Tabellen in 3NF
    {
      nr: 9, thema: 'db-normalisierung', typ: 'zahl',
      text: 'Die Tabelle „Seminaranmeldungen“ wird unter Beachtung aller angegebenen Abhängigkeiten in die 3. Normalform überführt. Für die Firmen wird dabei ein eigener Schlüssel FirmaNr eingeführt.',
      frage: 'Aus wie vielen Tabellen besteht die Datenbank danach?',
      anweisung: 'Tragen Sie die Anzahl in das Kästchen ein.',
      loesung: 5,
      erklaerung: '2. NF: Aufteilen nach den Schlüsselteilen in Teilnehmer (TeilnehmerNr, Name, Firma, Ort), Seminare (SeminarNr, Seminartitel, Preis, DozentNr, Dozent) und Anmeldungen (TeilnehmerNr, SeminarNr, Bezahlt). 3. NF: Die transitiven Abhängigkeiten Firma → Ort und DozentNr → Dozent werden in die Tabellen Firmen und Dozenten ausgelagert. Ergebnis: Firmen, Teilnehmer, Dozenten, Seminare und Anmeldungen, also 5 Tabellen.'
    },
    // 10 – Normalformen zuordnen
    {
      nr: 10, thema: 'db-normalisierung', typ: 'zuordnung',
      text: 'Ein Kollege bringt die Regeln der Normalformen durcheinander.',
      frage: 'Welche Normalform wird jeweils beschrieben?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Normalform in das Kästchen ein.',
      optionenTitel: 'Normalformen',
      optionen: [
        '1. Normalform',
        '2. Normalform',
        '3. Normalform'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Jedes Nichtschlüsselattribut hängt vom gesamten Primärschlüssel ab und nicht nur von einem Teil davon.', loesung: 2 },
        { text: 'Jedes Feld enthält nur einen einzigen, nicht weiter zerlegbaren (atomaren) Wert.', loesung: 1 },
        { text: 'Kein Nichtschlüsselattribut hängt von einem anderen Nichtschlüsselattribut ab.', loesung: 3 }
      ],
      erklaerung: '1. NF: atomare Werte, keine Wiederholungsgruppen. 2. NF: 1. NF und volle funktionale Abhängigkeit aller Nichtschlüsselattribute vom gesamten Primärschlüssel (nur bei zusammengesetzten Schlüsseln relevant). 3. NF: 2. NF und keine transitiven Abhängigkeiten zwischen Nichtschlüsselattributen.'
    },
    // 11 – Inkonsistenz
    {
      nr: 11, thema: 'db-normalisierung', typ: 'einfach',
      text: 'Angenommen, bei Clara Hoffmann wird im zweiten Datensatz versehentlich der Ort „Bonn“ statt „Köln“ eingetragen, obwohl ihre Firma weiterhin die Datenwerk GmbH ist.',
      frage: 'Wie bezeichnet man diesen Zustand der Daten?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Begriff in das Kästchen ein.',
      optionen: [
        'Referentielle Integrität',
        'Atomarität',
        'Inkonsistenz',
        'Normalisierung',
        'Persistenz'
      ],
      loesung: 3,
      erklaerung: 'Widersprüchliche Angaben zur selben Sache (die Datenwerk GmbH sitzt einmal in Köln, einmal in Bonn) nennt man Inkonsistenz. Sie ist die typische Folge von Redundanz und Änderungsanomalien. Steht der Ort nur einmal in der Tabelle Firmen, kann dieser Widerspruch nicht entstehen.'
    },
    // 12 – 1. Normalform
    {
      nr: 12, thema: 'db-normalisierung', typ: 'einfach',
      text: 'Die Tabelle „KundenAlt“ der Partnerfirma soll übernommen werden.',
      frage: 'Warum verletzt die Tabelle „KundenAlt“ die 1. Normalform?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Begründung in das Kästchen ein.',
      optionen: [
        'Die KundenNr ist fortlaufend nummeriert.',
        'Die Spalten Anschrift und Telefon enthalten nicht atomare Werte.',
        'Die Tabelle besitzt keinen Fremdschlüssel.',
        'Die Firmennamen enthalten Rechtsformzusätze wie „GmbH“.',
        'Die Tabelle hat weniger als fünf Spalten.'
      ],
      loesung: 2,
      erklaerung: 'Die 1. NF verlangt atomare Werte. Anschrift enthält Straße, PLZ und Ort in einem Feld, Telefon teilweise mehrere Nummern. Lösung: Anschrift in Strasse, PLZ und Ort aufteilen und die Telefonnummern in eine eigene Tabelle (KundenNr, Telefon) auslagern, weil ein Kunde beliebig viele Nummern haben kann.'
    },
    // 13 – Fremdschlüssel / referentielle Integrität
    {
      nr: 13, thema: 'db-modell', typ: 'einfach',
      text: 'In der normalisierten Datenbank verweist die Spalte Anmeldungen.TeilnehmerNr als Fremdschlüssel auf die Tabelle „Teilnehmer“.',
      frage: 'Was stellt das Datenbanksystem durch diesen Fremdschlüssel sicher?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jeder Teilnehmer muss mindestens ein Seminar gebucht haben.',
        'In „Anmeldungen“ kann nur eine in „Teilnehmer“ vorhandene TeilnehmerNr eingetragen werden.',
        'Die TeilnehmerNr darf in „Anmeldungen“ nur einmal vorkommen.',
        'Die Namen der Teilnehmer werden automatisch in „Anmeldungen“ kopiert.',
        'Die Tabelle „Anmeldungen“ wird automatisch nach TeilnehmerNr sortiert.'
      ],
      loesung: 2,
      erklaerung: 'Ein Fremdschlüssel sichert die referentielle Integrität: Jeder Wert im Fremdschlüssel muss als Primärschlüssel in der referenzierten Tabelle existieren (oder NULL sein, sofern erlaubt). Eine Anmeldung für eine nicht vorhandene TeilnehmerNr wird abgewiesen. Der Fremdschlüssel darf mehrfach vorkommen, ein Teilnehmer kann also mehrere Anmeldungen haben.'
    },
    // 14 – JOIN über normalisierte Tabellen
    {
      nr: 14, thema: 'sql-join', typ: 'sql',
      text: 'Nach der Normalisierung stehen Seminar und Dozent in getrennten Tabellen. Für den Seminarkatalog sollen Seminartitel, Preis und der Name des Dozenten (Spalte Dozent) aller Seminare ausgegeben werden.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: 'SELECT s.Seminartitel, s.Preis, d.Dozent FROM Seminare s INNER JOIN Dozenten d ON s.DozentNr = d.DozentNr',
      erklaerung: 'Die getrennten Tabellen werden über Fremdschlüssel (Seminare.DozentNr) und Primärschlüssel (Dozenten.DozentNr) wieder verknüpft. Normalisierung vermeidet Redundanz, dafür werden die Daten bei Abfragen per JOIN zusammengeführt.'
    },
    // 15 – UPDATE nur noch an einer Stelle
    {
      nr: 15, thema: 'sql-dml', typ: 'sql',
      text: 'Der Preis des Seminars „SQL-Grundlagen“ (SeminarNr 10) wird auf 720,00 EUR erhöht. In der normalisierten Datenbank steht der Preis nur noch an einer Stelle.',
      frage: 'Schreiben Sie die passende SQL-Anweisung.',
      loesung: 'UPDATE Seminare SET Preis = 720.00 WHERE SeminarNr = 10',
      loesungVarianten: [
        "UPDATE Seminare SET Preis = 720.00 WHERE Seminartitel = 'SQL-Grundlagen'"
      ],
      erklaerung: 'Der Preis ist nur in der Tabelle Seminare gespeichert. Ein einziges UPDATE ändert genau eine Zeile, eine Änderungsanomalie ist nicht mehr möglich. In der alten Tabelle „Seminaranmeldungen“ mussten dafür drei Zeilen geändert werden.'
    },
    // 16 – INSERT ohne Einfügeanomalie
    {
      nr: 16, thema: 'sql-dml', typ: 'sql',
      text: 'Das neue Seminar „Cloud-Grundlagen“ mit der SeminarNr 14 soll zum Preis von 750,00 EUR in das Programm aufgenommen werden. Es wird vom Dozenten Yilmaz (DozentNr 2) gehalten. Anmeldungen gibt es noch keine.',
      frage: 'Schreiben Sie die passende SQL-Anweisung, die das Seminar speichert.',
      loesung: "INSERT INTO Seminare (SeminarNr, Seminartitel, Preis, DozentNr) VALUES (14, 'Cloud-Grundlagen', 750.00, 2)",
      loesungVarianten: [
        "INSERT INTO Seminare VALUES (14, 'Cloud-Grundlagen', 750.00, 2)"
      ],
      erklaerung: 'Weil Seminare eine eigene Tabelle mit dem Primärschlüssel SeminarNr haben, kann ein Seminar ohne Teilnehmer gespeichert werden. In der alten Tabelle war das nicht möglich, weil die TeilnehmerNr Teil des Primärschlüssels war und nicht NULL sein durfte (Einfügeanomalie).'
    },
    // 17 – Daten wieder zusammenführen
    {
      nr: 17, thema: 'sql-join', typ: 'sql',
      text: 'Die Buchhaltung benötigt eine Liste aller noch nicht bezahlten Anmeldungen (Bezahlt = \'nein\'). Ausgegeben werden sollen der Name des Teilnehmers und der Seminartitel.',
      frage: 'Schreiben Sie die passende SQL-Abfrage.',
      loesung: "SELECT t.Name, s.Seminartitel FROM Anmeldungen a INNER JOIN Teilnehmer t ON a.TeilnehmerNr = t.TeilnehmerNr INNER JOIN Seminare s ON a.SeminarNr = s.SeminarNr WHERE a.Bezahlt = 'nein'",
      erklaerung: 'Die Tabelle Anmeldungen enthält nur die Schlüssel. Über zwei JOINs werden Name (aus Teilnehmer) und Seminartitel (aus Seminare) ergänzt, WHERE filtert die offenen Anmeldungen. Ergebnis: Anna Weber – Linux-Administration und Clara Hoffmann – SQL-Grundlagen.'
    },
    // 18 – Löschen mit referentieller Integrität
    {
      nr: 18, thema: 'db-modell', typ: 'einfach',
      text: 'Der Dozent Klein (DozentNr 1) verlässt die ByteAkademie. Ein Mitarbeiter führt die Anweisung DELETE FROM Dozenten WHERE DozentNr = 1 aus. Für den Fremdschlüssel Seminare.DozentNr ist keine ON-DELETE-Regel festgelegt.',
      frage: 'Wie reagiert das Datenbanksystem?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Dozent wird zusammen mit den Seminaren 10 und 11 gelöscht.',
        'Der Dozent wird gelöscht und die DozentNr in den Seminaren 10 und 11 auf NULL gesetzt.',
        'Das Löschen wird wegen der Verweise der Seminare 10 und 11 auf den Dozenten abgewiesen.',
        'Der Dozent wird ohne Änderung an den Seminaren 10 und 11 gelöscht.',
        'Die gesamte Tabelle „Dozenten“ wird gelöscht.'
      ],
      loesung: 3,
      erklaerung: 'Ohne ON-DELETE-Regel (Standard: NO ACTION bzw. RESTRICT) verhindert das Datenbanksystem das Löschen, weil sonst Seminare auf einen nicht mehr vorhandenen Dozenten verweisen würden. Das sichert die referentielle Integrität. Mit ON DELETE CASCADE würden die Seminare mitgelöscht, mit ON DELETE SET NULL würde die DozentNr auf NULL gesetzt.'
    },
    // 19 – Vor- und Nachteile der Normalisierung
    {
      nr: 19, thema: 'db-normalisierung', typ: 'mehrfach',
      text: 'Die Geschäftsführung fragt, was die Normalisierung der Datenbank gebracht hat.',
      frage: 'Welche Aussagen zur Normalisierung treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Redundanzen werden weitgehend vermieden.',
        'Abfragen werden durch den Wegfall von JOINs immer schneller.',
        'Einfüge-, Änderungs- und Löschanomalien werden vermieden.',
        'Fremdschlüssel werden nach der Normalisierung überflüssig.',
        'Die Anzahl der Tabellen verringert sich.'
      ],
      loesung: [1, 3],
      erklaerung: 'Normalisierung verteilt die Daten auf mehrere Tabellen, sodass jede Information nur einmal gespeichert wird. Dadurch werden Redundanzen und Anomalien vermieden. Die Zahl der Tabellen steigt jedoch, und für Auswertungen sind mehr JOINs nötig. Die Tabellen werden über Fremdschlüssel verknüpft, diese sind also gerade notwendig.'
    },
    // 20 – Gewollte Redundanz
    {
      nr: 20, thema: 'db-normalisierung', typ: 'einfach',
      text: 'Für die Rechnungen soll später eine Tabelle Rechnungspositionen (RechnungNr, SeminarNr, TeilnehmerNr, Preis) angelegt werden. Ein Kollege meint, die Spalte Preis sei überflüssig, weil der Preis bereits in der Tabelle „Seminare“ steht.',
      frage: 'Welche Aussage trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Spalte verstößt als Wiederholung eines Werts gegen die 1. Normalform.',
        'Die Spalte ist zum Festhalten des Preises am Rechnungsdatum sinnvoll.',
        'Die Spalte ist wegen der Pflicht zur Kopie aller Spalten der referenzierten Tabelle sinnvoll.',
        'Die Spalte ist wegen des Speicherverbots für Rechnungsbeträge in Datenbanken überflüssig.',
        'Die Spalte ist nur als Primärschlüssel sinnvoll.'
      ],
      loesung: 2,
      erklaerung: 'Seminare.Preis ist der aktuelle Preis, Rechnungspositionen.Preis der Preis zum Rechnungsdatum. Das sind fachlich zwei verschiedene Informationen. Würde nur auf Seminare verwiesen, würde eine Preiserhöhung nachträglich alle alten Rechnungen verändern. Solche bewusst gespeicherten Werte sind keine schädliche Redundanz.'
    }
  ]
});
