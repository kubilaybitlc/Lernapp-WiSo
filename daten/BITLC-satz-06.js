// BITLC-Satz 06 (Winter 2023/24) – Fragen von Klassenkamerad und Dozent.
(window.WISO_IHK_SAETZE = window.WISO_IHK_SAETZE || []).push({
  id: 'BITLC-eigen-06',
  titel: 'Winter 2023/24',
  untertitel: 'Die Ecotec GmbH ist ein IT-Dienstleistungsunternehmen in Erfurt.',
  ausgangssituation:
    'Die Ecotec GmbH ist ein IT-Dienstleistungsunternehmen in Erfurt.',

  aufgaben: [
    {
      nr: 1, thema: 'arbeitsvertrag', typ: 'reihenfolge',
      frage: 'Bringen Sie die Schritte bei der Einstellung in die richtige Reihenfolge (1 = erster Schritt).',
      anweisung: 'Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Schritte',
      items: [
        { text: 'Vorstellungsgespräch', loesung: 2 },
        { text: 'Digitale Bewerbung um einen Arbeitsplatz', loesung: 1 },
        { text: 'Abschluss des Arbeitsvertrages', loesung: 3 },
        { text: 'Erster Arbeitstag', loesung: 4 },
        { text: 'Ende der Probezeit', loesung: 6 },
        { text: 'Überweisung der ersten Vergütung', loesung: 5 }
      ],
      erklaerung: 'Bewerbung → Gespräch → Vertrag → erster Arbeitstag → erstes Gehalt (Monatsende) → Ende der Probezeit (nach bis zu 6 Monaten).'
    },
    {
      nr: 2, thema: 'arbeitsvertrag', typ: 'einfach',
      frage: 'Welche Frage ist im Vorstellungsgespräch UNZULÄSSIG? Die Frage nach …',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'der Mitgliedschaft in einer Gewerkschaft.',
        'den Zusatzqualifikationen.',
        'der Schulbildung.',
        'den Vorbeschäftigungen und der letzten Tätigkeit.',
        'der Gehaltsvorstellung.'
      ],
      loesung: 1,
      erklaerung: 'Gewerkschaftszugehörigkeit ist durch die Koalitionsfreiheit (Art. 9 GG) geschützt.'
    },
    {
      nr: 3, thema: 'arbeitsvertrag', typ: 'mehrfach',
      frage: 'Welche zwei Unterlagen muss eine neue Mitarbeiterin dem Arbeitgeber auf Anforderung vorlegen?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Antworten in die Kästchen ein.',
      optionen: [
        'Nachweis über private Unfallversicherung',
        'Geburtsurkunde',
        'Urlaubsbescheinigung des letzten Arbeitgebers',
        'Nachweis über Berufsunfähigkeitsversicherung',
        'Steuerliche Identifikationsnummer',
        'Nachweis über private Krankenzusatzversicherung'
      ],
      loesung: [3, 5],
      erklaerung: 'Urlaubsbescheinigung (§ 6 BUrlG, verhindert Doppelurlaub) und Steuer-ID für den Lohnsteuerabzug.'
    },
    {
      nr: 4, thema: 'kennzahlen', typ: 'zahl',
      frage: 'Stundenlohn 15,80 €, 170 Stunden im Monat, davon 12 Stunden an Samstagen mit 30 % Zuschlag. Dazu 250,00 € Urlaubsgeld brutto.\na) Bruttolohn?\nb) Arbeitnehmeranteil zur Rentenversicherung (Beitragssatz 18,6 %)?',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 2992.88, nachkommastellen: 2,
      erklaerung: '170 × 15,80 = 2.686,00; Zuschlag 12 × 15,80 × 0,3 = 56,88; + 250 = 2.992,88 €. AN trägt die Hälfte: 9,3 % × 2.992,88 = 278,34 €.'
    },
    {
      nr: 5, thema: 'rechtsformen', typ: 'einfach',
      frage: 'Welche Aussage über das Handelsregister trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Abteilung A: Großunternehmen, Abteilung B: alle anderen',
        'Nur in Deutschland tätige Unternehmen werden geführt.',
        'In Abteilung A werden Personengesellschaften, in Abteilung B Kapitalgesellschaften geführt.',
        'Das Handelsregister wird von der Handelskammer verwaltet.',
        'Kleinunternehmen können zwischen A und B wählen.'
      ],
      loesung: 3,
      erklaerung: 'HRA: Einzelkaufleute, OHG, KG; HRB: GmbH, AG. Geführt vom Amtsgericht.'
    },
    {
      nr: 6, thema: 'arbeitsschutz', typ: 'einfach',
      frage: 'Eine Sicherheitsbeauftragte möchte Informationen zur Unfallverhütung. An welche Einrichtung wendet sie sich?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Gewerbeaufsichtsbehörde',
        'Berufsgenossenschaft',
        'Fachverband',
        'Deutscher Gewerkschaftsbund',
        'Industrie- und Handelskammer'
      ],
      loesung: 2,
      erklaerung: 'Die Berufsgenossenschaft erlässt Unfallverhütungsvorschriften und schult Sicherheitsbeauftragte.'
    },
    {
      nr: 7, thema: 'mitbestimmung', typ: 'zahl',
      frage: 'Wie viele Mitarbeiter dürfen bei der Betriebsratswahl wählen?\n45 volljährige Mitarbeiter, 8 volljährige Azubis, 3 Zeitarbeitnehmer (seit einem Monat eingesetzt), 3 Azubis à 16 Jahre, 2 Azubis à 17 Jahre.\n§ 7 BetrVG: Wahlberechtigt sind alle AN ab 16; Leiharbeitnehmer, wenn sie länger als drei Monate eingesetzt werden.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 58, nachkommastellen: 0,
      einheit: 'Personen',
      erklaerung: '45 + 8 + 3 + 2 = 58. Die Zeitarbeitnehmer sind erst einen Monat da → nicht wahlberechtigt.'
    },
    {
      nr: 8, thema: 'mitbestimmung', typ: 'einfach',
      frage: 'Die Betriebsratswahl findet zwei Monate nach Eintritt von Frau Medstein (volljährig) statt. Ist sie wählbar?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Ja, jeder AN ist sofort wählbar.',
        'Ja, weil sie volljährig ist.',
        'Ja, weil sie eine abgeschlossene Ausbildung hat.',
        'Nein, weil sie noch keine sechs Monate beschäftigt ist.',
        'Nein, weil sie kein Gewerkschaftsmitglied ist.'
      ],
      loesung: 4,
      erklaerung: '§ 8 BetrVG: Wählbar nach 6 Monaten Betriebszugehörigkeit (und ab 18).'
    },
    {
      nr: 9, thema: 'mitbestimmung', typ: 'einfach',
      frage: 'Welche Aussage über die Wahl des Betriebsrats ist zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Ein Betriebsrat muss alle vier Jahre neu gewählt werden.',
        'Er muss je zur Hälfte aus Männern und Frauen bestehen.',
        'Nur Mitarbeiter mit zwei Jahren Zugehörigkeit sind wählbar.',
        'Er muss in Kapitalgesellschaften mit mehr als 500 Mitarbeitern gewählt werden.',
        'Wählen dürfen nur Arbeitnehmer ab 25.'
      ],
      loesung: 1,
      erklaerung: '§ 21 BetrVG: Amtszeit 4 Jahre (regelmäßige Wahlen 1. März bis 31. Mai).'
    },
    {
      nr: 10, thema: 'mitbestimmung', typ: 'mehrfach',
      frage: 'In welchen zwei Angelegenheiten hat der Betriebsrat ein Mitbestimmungsrecht?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Antworten in die Kästchen ein.',
      optionen: [
        'Einführung von Überwachungskameras im Warenlager',
        'Planung des Personalbedarfs',
        'Festlegung von Beginn und Ende der täglichen Arbeitszeit',
        'Errichtung einer neuen Lagerhalle',
        'Gründung einer Filiale',
        'Umwandlung der Rechtsform'
      ],
      loesung: [1, 3],
      erklaerung: '§ 87 Abs. 1 Nr. 6 (technische Überwachung) und Nr. 2 (Arbeitszeitlage) BetrVG.'
    },
    {
      nr: 11, thema: 'ausbildung', typ: 'einfach',
      frage: '§ 11 JArbSchG: Pausen frühestens 1 Stunde nach Beginn und spätestens 1 Stunde vor Ende; länger als 4,5 Stunden hintereinander keine Beschäftigung ohne Pause.\nDienstplan eines 17-Jährigen (Arbeitszeit / Beginn der ersten Pause):\n1 Mo 08:00–15:00 / 11:30\n2 Di 09:00–17:00 / 12:00\n3 Mi 09:00–17:00 / 12:30\n4 Do 09:30–17:00 / 13:00\n5 Fr 09:00–17:30 / 14:00\nAn welchem Tag liegt ein Verstoß vor?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag'
      ],
      loesung: 5,
      erklaerung: 'Freitag: 9:00 bis 14:00 = 5 Stunden ohne Pause > 4,5 Stunden.'
    },
    {
      nr: 12, thema: 'ausbildung', typ: 'einfach',
      frage: 'Welche Voraussetzung muss ein Ausbilder nach den gesetzlichen Regelungen erfüllen? Er muss …',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Mitglied im Prüfungsausschuss sein.',
        'über die notwendige persönliche und fachliche Eignung verfügen.',
        'jährlich ein BITLC-Seminar besuchen.',
        'Mitglied der Geschäftsleitung sein.',
        'Mitglied einer Gewerkschaft sein.'
      ],
      loesung: 2,
      erklaerung: '§§ 28–30 BBiG.'
    },
    {
      nr: 13, thema: 'arbeitsvertrag', typ: 'einfach',
      frage: 'Welche Ursache rechtfertigt eine außerordentliche (fristlose) Kündigung?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Arbeitsmangel',
        'Diebstahl von Firmeneigentum',
        'Eintägiges unentschuldigtes Fehlen',
        'Tod eines Gesellschafters',
        'Unverschuldete Krankheit'
      ],
      loesung: 2,
      erklaerung: '§ 626 BGB: wichtiger Grund, der die Fortsetzung unzumutbar macht (z. B. Diebstahl). Erklärung binnen 2 Wochen.'
    },
    {
      nr: 14, thema: 'arbeitsvertrag', typ: 'zuordnung',
      frage: 'Ordnen Sie die Fälle den Kündigungsgründen zu.',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Zuordnung in das Kästchen ein.',
      optionenTitel: 'Zuordnungen',
      optionen: [
        'Betriebsbedingte Kündigung',
        'Personenbedingte Kündigung',
        'Verhaltensbedingte Kündigung'
      ],
      itemsTitel: 'Sachverhalte',
      items: [
        { text: 'Ein Mitarbeiter hat heimlich Kundendaten kopiert und an einen Konkurrenten verkauft.', loesung: 3 },
        { text: 'Der Standort wird geschlossen, die Lohnbuchhaltung an ein Steuerbüro abgegeben.', loesung: 1 },
        { text: 'Ein Programmierer erfüllt die Anforderungen nicht mehr, seine Arbeit ist fehlerhaft, Fortbildung lehnt er ab.', loesung: 2 }
      ],
      erklaerung: 'Datenverkauf = Pflichtverletzung; Standortschließung = betrieblich; fehlende Eignung für die Stelle = personenbedingt.'
    },
    {
      nr: 15, thema: 'rechtsformen', typ: 'einfach',
      frage: 'Zwei Gründer wollen gleichberechtigte Geschäftsführer sein, die Haftung soll auf das Gesellschaftsvermögen beschränkt sein, sie bringen je 20.000 € ein. Welche Rechtsform ist geeignet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'AG',
        'KG',
        'GmbH',
        'eG',
        'GbR'
      ],
      loesung: 3,
      erklaerung: '40.000 € ≥ 25.000 € Stammkapital, Haftung beschränkt, beide als Geschäftsführer möglich. AG bräuchte 50.000 €.'
    },
    {
      nr: 16, thema: 'kennzahlen', typ: 'zahl',
      frage: 'Gewinn im ersten Geschäftsjahr: 3.140,00 €. Eingesetztes Eigenkapital: 40.000,00 €. Wie hoch ist die Eigenkapitalrentabilität in Prozent?',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 7.85, nachkommastellen: 2,
      einheit: '%',
      erklaerung: '3.140 ÷ 40.000 × 100 = 7,85 %.'
    },
    {
      nr: 17, thema: 'arbeitsvertrag', typ: 'einfach',
      frage: 'Welche Personengruppe genießt KEINEN besonderen Kündigungsschutz?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Betriebsratsmitglieder',
        'Schwerbehinderte',
        'Werdende Mütter',
        'Leitende Angestellte',
        'Auszubildende nach der Probezeit'
      ],
      loesung: 4,
      erklaerung: 'Leitende Angestellte haben sogar einen eingeschränkten Kündigungsschutz.'
    },
    {
      nr: 18, thema: 'arbeitsvertrag', typ: 'zahl',
      frage: 'Wie viele Wochen Mutterschutz stehen einer Mutter nach der Entbindung eines gesunden Kindes laut MuSchG zu?',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 8, nachkommastellen: 0,
      einheit: 'Wochen',
      erklaerung: '§ 3 Abs. 2 MuSchG: 8 Wochen (12 bei Früh- oder Mehrlingsgeburten bzw. Behinderung).'
    },
    {
      nr: 19, thema: 'rechtsformen', typ: 'einfach',
      frage: 'Welche Aussage trifft auf eine GmbH zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'GmbH-Anteile werden an der Börse gehandelt.',
        'Das Stammkapital muss bei Gründung mindestens 25.000 EUR betragen.',
        'Alle Gesellschafter sind jederzeit zur Geschäftsführung berechtigt.',
        'Die Gesellschafter haften mit ihrem Privatvermögen.',
        'Der Aufsichtsrat leitet die GmbH.'
      ],
      loesung: 2,
      erklaerung: '§ 5 GmbHG. Geleitet wird die GmbH vom Geschäftsführer.'
    },
    {
      nr: 20, thema: 'kennzahlen', typ: 'zahl',
      frage: 'Auftrag 1: Aufwand 300.000 €, Ertrag 360.000 €\nAuftrag 2: Aufwand 80.000 €, Ertrag 100.000 €\nAuftrag 3: Aufwand 80.000 €, Ertrag 104.000 €\nAuftrag 4: Aufwand 100.000 €, Ertrag 124.000 €\nWelcher Auftrag war am wirtschaftlichsten? (Nummer)',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 3, nachkommastellen: 0,
      erklaerung: '1,20 / 1,25 / 1,30 / 1,24 → Auftrag 3.'
    },
    {
      nr: 21, thema: 'organisation', typ: 'einfach',
      frage: 'Schema: Drei Vorgesetzte oben, fünf Stellen unten. Jede untere Stelle ist mit allen drei Vorgesetzten verbunden (Linien kreuzen sich). Welches Leitungssystem liegt vor?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Einliniensystem',
        'Matrixsystem',
        'Mehrliniensystem',
        'Stabliniensystem',
        'Abteilungssystem'
      ],
      loesung: 3,
      erklaerung: 'Eine Stelle erhält Weisungen von mehreren Vorgesetzten → Mehrliniensystem (Taylor, Funktionsmeister).'
    },
    {
      nr: 22, thema: 'rechtsformen', typ: 'einfach',
      frage: 'Welche Aussage über einen Businessplan trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Er wird von der BITLC ausgestellt.',
        'Er wird im Handelsregister hinterlegt.',
        'Er muss nur bei Kapitalgesellschaften erstellt werden.',
        'Er ist nur bei Darlehen notwendig.',
        'Im Businessplan werden u. a. die strategischen Ziele eines Unternehmens festgelegt.'
      ],
      loesung: 5,
      erklaerung: 'Der Businessplan beschreibt Idee, Ziele, Markt und Finanzierung.'
    },
    {
      nr: 23, thema: 'zusammenschluesse', typ: 'einfach',
      frage: 'Welche Aussage trifft auf Kartelle zu? Kartelle …',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'sind Absprachen auf gleicher Produktionsstufe, um durch Wettbewerbsbeschränkung wirtschaftlich stärker zu sein.',
        'schaffen günstigere Preise durch bessere Produktionsbedingungen.',
        'sorgen für eine Sanierung durch innerbetriebliche Neuorganisation.',
        'sorgen für eine völlige Haftungsbeschränkung.',
        'werden von den Handelskammern überprüft.'
      ],
      loesung: 1,
      erklaerung: 'Kartell = horizontale Absprache rechtlich selbstständiger Unternehmen. Kontrolle durch das Bundeskartellamt.'
    },
    {
      nr: 24, thema: 'tarifrecht', typ: 'mehrfach',
      frage: 'Welche zwei Vertragsparteien schließen den Tarifvertrag ab?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Antworten in die Kästchen ein.',
      optionen: [
        'Bundesministerium für Arbeit und Soziales',
        'Arbeitgeberverband',
        'Industrie- und Handelskammer',
        'Berufsgenossenschaft',
        'Gewerkschaft',
        'Bundesagentur für Arbeit'
      ],
      loesung: [2, 5],
      erklaerung: 'Tarifvertragsparteien = Sozialpartner.'
    },
    {
      nr: 25, thema: 'tarifrecht', typ: 'einfach',
      frage: 'Die Tarifvertragsparteien haben das Recht, Löhne und Arbeitsbedingungen selbstständig ohne staatliche Einmischung zu regeln. Wie heißt dieses Recht?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Generationenvertrag',
        'Allgemeinverbindlichkeit',
        'Freizügigkeit',
        'Tarifautonomie',
        'Tarifbindung'
      ],
      loesung: 4,
      erklaerung: 'Tarifautonomie (Art. 9 Abs. 3 GG).'
    },
    {
      nr: 26, thema: 'tarifrecht', typ: 'reihenfolge',
      frage: 'Bringen Sie die Schritte bis zum neuen Tarifvertrag in die richtige Reihenfolge (1 = erster Schritt).',
      anweisung: 'Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Schritte',
      items: [
        { text: 'Schlichtung empfiehlt 3,5 % Lohnerhöhung', loesung: 6 },
        { text: 'Urabstimmung – Streik', loesung: 4 },
        { text: 'Ein Tarifpartner kündigt den Gehaltstarifvertrag', loesung: 1 },
        { text: 'Schlichter wird angerufen, Schlichtung', loesung: 5 },
        { text: 'Erste Tarifverhandlungen', loesung: 2 },
        { text: 'Der andere Tarifpartner erklärt die Verhandlungen für gescheitert', loesung: 3 },
        { text: 'Schlichtung wird von den Tarifparteien angenommen', loesung: 7 }
      ],
      erklaerung: 'Kündigung → Verhandlungen → Scheitern → Urabstimmung/Streik → Schlichtung → Empfehlung → Annahme. (Da die Annahme der Schlichtung den Abschluss bildet, muss der Streik davor liegen.)'
    },
    {
      nr: 27, thema: 'arbeitsvertrag', typ: 'datum',
      frage: 'Ein Arbeitnehmer kündigt sein Arbeitsverhältnis am 06.05.2023 schriftlich. § 622 Abs. 1 BGB: Kündigung mit einer Frist von vier Wochen zum Fünfzehnten oder zum Ende eines Kalendermonats. Wann endet das Arbeitsverhältnis frühestens? (TT.MM.JJJJ)',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '15.06.2023',
      erklaerung: '06.05. + 4 Wochen = 03.06.2023 → nächster zulässiger Termin ist der 15.06.2023.'
    },
    {
      nr: 28, thema: 'sozialversicherung', typ: 'zuordnung',
      frage: 'Ordnen Sie die Beispiele den Leistungen der gesetzlichen Unfallversicherung zu.',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Zuordnung in das Kästchen ein.',
      optionenTitel: 'Zuordnungen',
      optionen: [
        'Übernahme der Reha-Kosten nach einem Wegeunfall',
        'Finanzielle Unterstützung zum Lebensunterhalt bei Arbeitsunfähigkeit wegen eines Arbeitsunfalls',
        'Finanzielle Unterstützung bei Pflegebedürftigkeit nach einem Arbeitsunfall',
        'Rente bei dauerhaftem Gesundheitsschaden mit mindestens 20 % Minderung der Erwerbsfähigkeit'
      ],
      itemsTitel: 'Sachverhalte',
      items: [
        { text: 'Verletztengeld', loesung: 2 },
        { text: 'Heilbehandlungen', loesung: 1 },
        { text: 'Rente', loesung: 4 },
        { text: 'Pflegegeld', loesung: 3 }
      ],
      erklaerung: 'Verletztengeld ersetzt den Lohn bei Arbeitsunfähigkeit; Verletztenrente ab 20 % MdE.'
    },
    {
      nr: 29, thema: 'umweltschutz', typ: 'mehrfach',
      frage: 'Welche zwei Maßnahmen unterstützen Nachhaltigkeit?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Antworten in die Kästchen ein.',
      optionen: [
        'Ladesäulen für Mitarbeiter und Kunden',
        'Geschäftsreisen nur noch per Flugzeug',
        'Günstigste Produkte unabhängig von der Herkunft',
        'Dokumente auf schwerem Hochglanzpapier drucken',
        'Nur Bewerber über 30 einstellen',
        'To-go-Behälter in der Kantine aus nachwachsenden Rohstoffen'
      ],
      loesung: [1, 6],
      erklaerung: 'E-Mobilität und nachwachsende Rohstoffe fördern Nachhaltigkeit.'
    },
    {
      nr: 30, thema: 'umweltschutz', typ: 'einfach',
      frage: 'Welche Maßnahme dient der Vermeidung bzw. Verringerung von Umweltbelastungen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Bei der Dachsanierung keine Photovoltaik installieren',
        'Mehrlagiges Einwegplastik statt Kartons',
        'Flauschiger, wenig langlebiger Teppich',
        'Fuhrpark von E-/Hybrid- auf Dieselfahrzeuge umstellen',
        'Recyclingpapier-Verpackungen von einem lokalen statt ausländischen Hersteller beziehen'
      ],
      loesung: 5,
      erklaerung: 'Kürzere Transportwege senken Emissionen.'
    }
  ]
});