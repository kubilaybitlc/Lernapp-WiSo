// Übungssatz 1 – eigene Aufgaben im Stil der IHK-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-01',
  titel: 'Übungssatz 1',
  untertitel: 'Kaltenbach IT-Solutions GmbH',
  ausgangssituation:
    'Die Kaltenbach IT-Solutions GmbH ist ein IT-Systemhaus mit Sitz in Kassel. Sie entwickelt Branchensoftware für mittelständische Unternehmen und betreut deren IT-Infrastruktur. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 4, bis: 6,
      text: 'Die Kaltenbach IT-Solutions GmbH beobachtet die gesamtwirtschaftliche Entwicklung in Deutschland, um ihre Investitionen zu planen. Im Quartalsbericht der Geschäftsleitung werden folgende Kennzahlen genannt:',
      tabelle: {
        kopf: ['Indikator', 'Vorjahr', 'Aktuelles Jahr'],
        zeilen: [
          ['Wachstum des Bruttoinlandsprodukts (real)', '+ 2,9 %', '+ 3,4 %'],
          ['Inflationsrate', '3,8 %', '5,1 %'],
          ['Arbeitslosenquote', '3,9 %', '3,1 %'],
          ['Auslastung der Produktionskapazitäten', '91 %', '97 %']
        ]
      }
    },
    {
      von: 8, bis: 11,
      text: 'Die Kaltenbach IT-Solutions GmbH bildet jedes Jahr Fachinformatikerinnen und Fachinformatiker aus. Ausbildungsleiterin ist Svenja Brandt.'
    },
    {
      von: 13, bis: 15,
      text: 'Bei der Kaltenbach IT-Solutions GmbH besteht ein Betriebsrat. Das Unternehmen ist in den letzten Jahren stark gewachsen.'
    },
    {
      von: 18, bis: 19,
      text: 'Die Kaltenbach IT-Solutions GmbH hat einen Großkunden verloren und muss Personal abbauen. Die Geschäftsleitung prüft mehrere Kündigungen. Das Kündigungsschutzgesetz ist anzuwenden.'
    },
    {
      von: 25, bis: 26,
      text: 'Die Kaltenbach IT-Solutions GmbH arbeitet eng mit der Weber & Arslan IT-Service OHG zusammen. Gesellschafter der OHG sind Tobias Weber mit einer Kapitaleinlage von 160.000,00 EUR und Deniz Arslan mit einer Kapitaleinlage von 240.000,00 EUR.'
    },
    {
      von: 28, bis: 30,
      text: 'Die Fachkraft für Arbeitssicherheit unterweist alle neuen Mitarbeitenden und Auszubildenden zu Arbeitssicherheit und Umweltschutz.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Die Kaltenbach IT-Solutions GmbH betreut Kunden aus unterschiedlichen Wirtschaftsbereichen.',
      frage: 'Welches der folgenden Unternehmen gehört zum tertiären Wirtschaftssektor?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Unternehmen in das Kästchen ein.',
      optionen: [
        'Obsthof Lindner e. K.',
        'Leiterplattenfertigung Roth GmbH',
        'Brauerei Weißbach OHG',
        'Steuerberatungskanzlei Albers & Partner mbB',
        'Forstbetrieb Grünwald e. K.'
      ],
      loesung: 4,
      erklaerung: 'Der tertiäre Sektor umfasst Dienstleistungen wie Handel, Banken, Beratung und IT-Dienstleistungen. Obsthof und Forstbetrieb gehören zum primären Sektor (Urerzeugung), Leiterplattenfertigung und Brauerei zum sekundären Sektor (Weiterverarbeitung).'
    },
    {
      nr: 2, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Die Geschäftsleitung möchte, dass in allen Abteilungen wirtschaftlich gehandelt wird.',
      frage: 'In welchem der folgenden Fälle handelt die Kaltenbach IT-Solutions GmbH nach dem ökonomischen Minimalprinzip?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Fall in das Kästchen ein.',
      optionen: [
        'Mit dem vorhandenen Werbebudget sollen möglichst viele Neukunden gewonnen werden.',
        'Mit möglichst geringem Aufwand soll ein möglichst hoher Gewinn erzielt werden.',
        'Mit den vorhandenen Servern soll eine möglichst hohe Rechenleistung erreicht werden.',
        'Der Umsatz soll im kommenden Geschäftsjahr um 10 % steigen.',
        'Ein Softwareprojekt mit festgelegtem Leistungsumfang soll mit möglichst wenigen Personentagen umgesetzt werden.'
      ],
      loesung: 5,
      erklaerung: 'Minimalprinzip: Ein vorgegebenes Ziel soll mit möglichst geringem Mitteleinsatz erreicht werden. Fall 1 und 3 sind Maximalprinzip (gegebene Mittel, größtmöglicher Erfolg). Fall 2 ist unmöglich, weil nicht beide Größen gleichzeitig optimiert werden können. Fall 4 nennt nur ein Ziel ohne Bezug zum Mitteleinsatz.'
    },
    {
      nr: 3, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Die Kaltenbach IT-Solutions GmbH vertreibt eine Verwaltungssoftware für Fahrschulen. Neben ihr bieten bundesweit nur zwei weitere Unternehmen eine vergleichbare Software an. Nachgefragt wird die Software von mehreren Tausend Fahrschulen.',
      frage: 'Welche der folgenden Marktformen liegt auf diesem Markt vor?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Marktform in das Kästchen ein.',
      optionen: [
        'Angebotsmonopol',
        'Nachfrageoligopol',
        'Angebotsoligopol',
        'Zweiseitiges Monopol',
        'Polypol (vollständige Konkurrenz)'
      ],
      loesung: 3,
      erklaerung: 'Wenige Anbieter stehen vielen Nachfragern gegenüber: Das ist ein Angebotsoligopol.'
    },
    {
      nr: 4, thema: 'konjunktur', typ: 'einfach',
      frage: 'In welcher der folgenden Phasen des Konjunkturzyklus befindet sich die Wirtschaft anhand der Angaben in der Spalte „Aktuelles Jahr“?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Konjunkturphase in das Kästchen ein.',
      optionen: [
        'Tiefstand/Depression',
        'Aufschwung/Expansion',
        'Abschwung/Rezession',
        'Hochkonjunktur/Boom',
        'Stagnation'
      ],
      loesung: 4,
      erklaerung: 'Nahezu voll ausgelastete Kapazitäten, sehr niedrige Arbeitslosigkeit und stark steigende Preise kennzeichnen die Hochkonjunktur (Boom). Im Aufschwung wären die Kapazitäten noch nicht ausgelastet und die Preise würden nur mäßig steigen.'
    },
    {
      nr: 5, thema: 'konjunktur', typ: 'einfach',
      text: 'Die Europäische Zentralbank (EZB) will dem Anstieg der Inflationsrate entgegenwirken.',
      frage: 'Welche der folgenden Maßnahmen ist dafür geeignet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Erhöhung der Leitzinsen',
        'Umfangreicher Ankauf von Staatsanleihen',
        'Senkung der Leitzinsen',
        'Senkung des Mindestreservesatzes',
        'Erhöhung des Kindergeldes'
      ],
      loesung: 1,
      erklaerung: 'Höhere Leitzinsen verteuern Kredite. Unternehmen und Haushalte fragen weniger nach, der Preisanstieg wird gebremst. Anleihekäufe, Zinssenkungen und ein niedrigerer Mindestreservesatz erhöhen dagegen die Geldmenge. Das Kindergeld ist keine Maßnahme der EZB, sondern staatliche Sozialpolitik.'
    },
    {
      nr: 6, thema: 'konjunktur', typ: 'mehrfach',
      text: 'Im Stabilitäts- und Wachstumsgesetz sind gesamtwirtschaftliche Ziele festgelegt, die als „magisches Viereck“ bezeichnet werden.',
      frage: 'Welche der folgenden Ziele gehören zum magischen Viereck?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Zielen in die Kästchen ein.',
      optionen: [
        'Gerechte Einkommens- und Vermögensverteilung',
        'Hoher Beschäftigungsstand',
        'Erhaltung einer lebenswerten Umwelt',
        'Ausgeglichener Staatshaushalt',
        'Außenwirtschaftliches Gleichgewicht',
        'Möglichst niedrige Unternehmenssteuern'
      ],
      loesung: [2, 5],
      erklaerung: 'Die vier Ziele nach § 1 StabG sind: stabiles Preisniveau, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht sowie stetiges und angemessenes Wirtschaftswachstum. Gerechte Verteilung und Umweltschutz erweitern es zum „magischen Sechseck“.'
    },
    {
      nr: 7, thema: 'unternehmensziele', typ: 'zuordnung',
      text: 'Die Geschäftsleitung der Kaltenbach IT-Solutions GmbH legt mehrere Ziele für das nächste Geschäftsjahr fest und prüft, wie sich diese gegenseitig beeinflussen.',
      frage: 'Welche der folgenden Zielbeziehungen liegen bei den nachstehenden Zielpaaren vor?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Zielbeziehung in das Kästchen ein.',
      optionenTitel: 'Zielbeziehungen',
      optionen: [
        'Zielharmonie (Komplementarität)',
        'Zielkonflikt (Konkurrenz)',
        'Zielneutralität (Indifferenz)'
      ],
      itemsTitel: 'Zielpaare',
      items: [
        { text: 'Senkung der Stromkosten durch energieeffiziente Server – Verringerung der CO₂-Emissionen', loesung: 1 },
        { text: 'Erhöhung der Gehälter um 5 % – Senkung der Personalkosten', loesung: 2 },
        { text: 'Einführung eines neuen Firmenlogos – Senkung der Reisekosten im Außendienst', loesung: 3 },
        { text: 'Ausbau der Kundenhotline zu einem 24-Stunden-Service – Senkung der Personalkosten', loesung: 2 }
      ],
      erklaerung: 'Harmonie: Das eine Ziel fördert das andere (weniger Strom = weniger CO₂). Konflikt: Das eine Ziel behindert das andere (höhere Gehälter oder mehr Hotline-Personal erhöhen die Personalkosten). Neutralität: Die Ziele beeinflussen sich nicht.'
    },
    {
      nr: 8, thema: 'ausbildung', typ: 'einfach',
      text: 'Lea Yilmaz hat am 01.08.2026 ihre Ausbildung zur Fachinformatikerin für Anwendungsentwicklung begonnen. Frau Brandt erklärt ihr die Regelungen zur Probezeit.',
      frage: 'Welche der folgenden Aussagen zur Probezeit nach dem Berufsbildungsgesetz trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Die Probezeit …',
      optionen: [
        'darf höchstens sechs Monate betragen.',
        'muss mindestens einen Monat und darf höchstens vier Monate betragen.',
        'kann nur vom Ausbildungsbetrieb, nicht von der Auszubildenden für eine Kündigung genutzt werden.',
        'erlaubt eine Kündigung nur mit einer Frist von vier Wochen.',
        'entfällt, wenn die Auszubildende vorher ein Praktikum im Betrieb absolviert hat.'
      ],
      loesung: 2,
      erklaerung: '§ 20 BBiG: Die Probezeit beträgt mindestens einen und höchstens vier Monate. Während der Probezeit können beide Seiten jederzeit ohne Kündigungsfrist schriftlich kündigen (§ 22 Abs. 1 BBiG).'
    },
    {
      nr: 9, thema: 'ausbildung', typ: 'zuordnung',
      text: 'Frau Brandt bespricht mit den neuen Auszubildenden die Rechte und Pflichten aus dem Berufsausbildungsverhältnis.',
      frage: 'Welche der folgenden Zuordnungen gelten nach dem Berufsbildungsgesetz für die nachstehenden Sachverhalte?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Zuordnung in das Kästchen ein.',
      optionenTitel: 'Zuordnungen',
      optionen: [
        'Pflicht des Ausbildenden (Ausbildungsbetrieb)',
        'Pflicht der oder des Auszubildenden',
        'Keine Pflicht nach dem Berufsbildungsgesetz'
      ],
      itemsTitel: 'Sachverhalte',
      items: [
        { text: 'Führen eines schriftlichen oder elektronischen Ausbildungsnachweises', loesung: 2 },
        { text: 'Kostenlose Bereitstellung der für die Ausbildung erforderlichen Ausbildungsmittel', loesung: 1 },
        { text: 'Stillschweigen über Betriebs- und Geschäftsgeheimnisse', loesung: 2 },
        { text: 'Übernahme in ein unbefristetes Arbeitsverhältnis nach bestandener Abschlussprüfung', loesung: 3 },
        { text: 'Freistellung für die Teilnahme am Berufsschulunterricht', loesung: 1 }
      ],
      erklaerung: 'Pflichten der Auszubildenden stehen in § 13 BBiG (u. a. Ausbildungsnachweis führen, Geheimnisse wahren). Pflichten der Ausbildenden stehen in §§ 14, 15 BBiG (u. a. Ausbildungsmittel kostenlos stellen, für die Berufsschule freistellen). Eine Übernahmepflicht gibt es nach dem BBiG nicht.'
    },
    {
      nr: 10, thema: 'ausbildung', typ: 'datum',
      text: 'Der Auszubildende Jonas Becker hat laut Ausbildungsvertrag eine Ausbildungszeit bis zum 31.07.2027. Am 10.06.2027 legt er den letzten Prüfungsteil ab. Der Prüfungsausschuss teilt ihm noch am selben Tag mit, dass er die Abschlussprüfung bestanden hat.',
      frage: 'An welchem Tag endet das Berufsausbildungsverhältnis von Herrn Becker?',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '10.06.2027',
      erklaerung: '§ 21 Abs. 2 BBiG: Bestehen Auszubildende die Abschlussprüfung vor Ablauf der Ausbildungszeit, endet das Ausbildungsverhältnis mit der Bekanntgabe des Ergebnisses durch den Prüfungsausschuss.'
    },
    {
      nr: 11, thema: 'ausbildung', typ: 'einfach',
      text: 'Lea Yilmaz hat die Probezeit beendet. Im März 2027 teilt sie Frau Brandt mit, dass sie ihre Ausbildung aufgeben möchte, um eine Ausbildung zur Mediengestalterin zu beginnen.',
      frage: 'Welche der folgenden Aussagen trifft auf diesen Fall zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Yilmaz kann nach Ablauf der Probezeit nur noch aus wichtigem Grund fristlos kündigen.',
        'Frau Yilmaz kann jederzeit mündlich und ohne Einhaltung einer Frist kündigen.',
        'Die Kündigung ist nur mit Zustimmung der Industrie- und Handelskammer wirksam.',
        'Frau Yilmaz kann mit einer Frist von vier Wochen kündigen. Die Kündigung muss schriftlich unter Angabe des Kündigungsgrundes erfolgen.',
        'Frau Yilmaz muss die Ausbildung bis zum Ende des laufenden Ausbildungsjahres fortsetzen.'
      ],
      loesung: 4,
      erklaerung: '§ 22 Abs. 2 Nr. 2 und Abs. 3 BBiG: Wer die Ausbildung aufgeben oder sich für einen anderen Beruf ausbilden lassen will, kann nach der Probezeit mit einer Frist von vier Wochen kündigen, schriftlich und mit Angabe des Grundes.'
    },
    {
      nr: 12, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Am 01.08.2026 hat auch der 17-jährige Tim Krause seine Ausbildung bei der Kaltenbach IT-Solutions GmbH begonnen.',
      frage: 'Welche der folgenden Regelungen gilt für Herrn Krause nach dem Jugendarbeitsschutzgesetz?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Regelung in das Kästchen ein.',
      optionen: [
        'Er darf bis zu 48 Stunden in der Woche beschäftigt werden.',
        'Nach Ende der täglichen Arbeitszeit muss er eine ununterbrochene Freizeit von mindestens zehn Stunden erhalten.',
        'Bei einer täglichen Arbeitszeit von mehr als sechs Stunden stehen ihm Ruhepausen von mindestens 60 Minuten zu.',
        'Er darf an fünf Tagen in der Woche jeweils bis zu zehn Stunden beschäftigt werden.',
        'Er darf grundsätzlich auch an Sonntagen beschäftigt werden, wenn er dafür einen freien Werktag erhält.'
      ],
      loesung: 3,
      erklaerung: '§ 11 JArbSchG: Ruhepausen von 30 Minuten bei mehr als 4,5 bis 6 Stunden, von 60 Minuten bei mehr als 6 Stunden Arbeitszeit. Außerdem gilt: höchstens 8 Stunden täglich und 40 Stunden wöchentlich (§ 8), mindestens 12 Stunden Freizeit (§ 13), Sonntagsruhe (§ 17).'
    },
    {
      nr: 13, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Geschäftsleitung plant mehrere Veränderungen und fragt, in welchen Fällen der Betriebsrat zustimmen muss.',
      frage: 'Bei welcher der folgenden Maßnahmen hat der Betriebsrat ein Mitbestimmungsrecht nach dem Betriebsverfassungsgesetz?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Einführung einer Software, mit der Verhalten und Leistung der Mitarbeitenden überwacht werden können',
        'Festlegung der Stundensätze für Kundenprojekte',
        'Kauf neuer Server für das Rechenzentrum',
        'Auswahl eines neuen Steuerberaters für das Unternehmen',
        'Festlegung der Werbestrategie für das nächste Jahr'
      ],
      loesung: 1,
      erklaerung: '§ 87 Abs. 1 Nr. 6 BetrVG: Bei der Einführung technischer Einrichtungen, die Verhalten oder Leistung der Arbeitnehmer überwachen können, muss der Betriebsrat zustimmen. Die übrigen Maßnahmen sind unternehmerische Entscheidungen ohne Mitbestimmung.'
    },
    {
      nr: 14, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Im Unternehmen sind derzeit neun Auszubildende beschäftigt, alle jünger als 25 Jahre. Sie möchten eine Jugend- und Auszubildendenvertretung (JAV) wählen.',
      frage: 'Welche der folgenden Aussagen zur JAV trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die JAV wird für eine Amtszeit von vier Jahren gewählt.',
        'Die JAV kann ohne Beteiligung des Betriebsrats Betriebsvereinbarungen mit der Geschäftsleitung abschließen.',
        'In die JAV können nur Auszubildende gewählt werden, die das 18. Lebensjahr vollendet haben.',
        'Die JAV ersetzt für die Auszubildenden den Betriebsrat.',
        'Eine JAV kann gewählt werden, weil ein Betriebsrat besteht und mindestens fünf Auszubildende unter 25 Jahren beschäftigt sind.'
      ],
      loesung: 5,
      erklaerung: '§ 60 BetrVG: Eine JAV wird gewählt, wenn in der Regel mindestens fünf Arbeitnehmer unter 18 Jahren oder Auszubildende unter 25 Jahren beschäftigt sind. Sie arbeitet über den Betriebsrat. Die Amtszeit beträgt zwei Jahre (§ 64 BetrVG), wählbar sind Arbeitnehmer unter 25 Jahren.'
    },
    {
      nr: 15, thema: 'mitbestimmung', typ: 'zahl',
      text: 'Die Zahl der wahlberechtigten Arbeitnehmer ist seit der letzten Betriebsratswahl von 46 auf 68 gestiegen. Bei der nächsten regelmäßigen Wahl wird der Betriebsrat neu gewählt.',
      kasten: {
        titel: '§ 9 BetrVG Zahl der Betriebsratsmitglieder (Auszug)',
        absaetze: [
          'Der Betriebsrat besteht in Betrieben mit in der Regel',
          '5 bis 20 wahlberechtigten Arbeitnehmern aus einer Person,',
          '21 bis 50 wahlberechtigten Arbeitnehmern aus 3 Mitgliedern,',
          '51 wahlberechtigten Arbeitnehmern bis 100 Arbeitnehmern aus 5 Mitgliedern,',
          '101 bis 200 Arbeitnehmern aus 7 Mitgliedern,',
          '201 bis 400 Arbeitnehmern aus 9 Mitgliedern.'
        ]
      },
      frage: 'Aus wie vielen Mitgliedern besteht der Betriebsrat nach der nächsten Wahl?',
      anweisung: 'Tragen Sie die Anzahl in das Kästchen ein.',
      loesung: 5, nachkommastellen: 0,
      erklaerung: '68 wahlberechtigte Arbeitnehmer liegen im Bereich 51 bis 100, also besteht der Betriebsrat aus 5 Mitgliedern (vorher bei 46: 3 Mitglieder).'
    },
    {
      nr: 16, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Kaltenbach IT-Solutions GmbH ist Mitglied im Arbeitgeberverband und an den Tarifvertrag gebunden. Der Systemadministrator Ole Jansen ist Gewerkschaftsmitglied. In seinem Arbeitsvertrag sind 32 Urlaubstage vereinbart, der Tarifvertrag sieht 30 Urlaubstage vor.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Jansen erhält nur 30 Urlaubstage, weil der Tarifvertrag dem Arbeitsvertrag immer vorgeht.',
        'Herr Jansen erhält 32 Urlaubstage, weil vom Tarifvertrag zugunsten des Arbeitnehmers abgewichen werden darf.',
        'Herr Jansen erhält nur den gesetzlichen Mindesturlaub, weil sich Arbeitsvertrag und Tarifvertrag widersprechen.',
        'Die Regelung im Arbeitsvertrag ist nur wirksam, wenn der Betriebsrat ihr zugestimmt hat.',
        'Die Regelung im Arbeitsvertrag ist unwirksam, weil sie vom Tarifvertrag abweicht.'
      ],
      loesung: 2,
      erklaerung: 'Günstigkeitsprinzip (§ 4 Abs. 3 TVG): Abweichungen vom Tarifvertrag sind zulässig, wenn sie den Arbeitnehmer besserstellen. Schlechtere Regelungen wären unwirksam.'
    },
    {
      nr: 17, thema: 'tarifrecht', typ: 'reihenfolge',
      text: 'In einer Schulung erklärt Frau Brandt den Auszubildenden den typischen Ablauf einer Tarifauseinandersetzung bis zum Abschluss eines neuen Tarifvertrags.',
      frage: 'Bringen Sie die folgenden Schritte in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Schritte',
      items: [
        { text: 'Urabstimmung der Gewerkschaftsmitglieder über einen Streik', loesung: 4 },
        { text: 'Kündigung des bestehenden Tarifvertrags', loesung: 1 },
        { text: 'Scheitern der Verhandlungen und erfolgloses Schlichtungsverfahren', loesung: 3 },
        { text: 'Verhandlungen zwischen Gewerkschaft und Arbeitgeberverband', loesung: 2 },
        { text: 'Streik', loesung: 5 },
        { text: 'Zweite Urabstimmung über das neue Verhandlungsergebnis', loesung: 6 }
      ],
      erklaerung: 'Ablauf: Kündigung des Tarifvertrags (Ende der Friedenspflicht) → Verhandlungen → Scheitern und Schlichtung → Urabstimmung (in der Regel 75 % Zustimmung) → Streik → neues Verhandlungsergebnis und zweite Urabstimmung (in der Regel 25 % Zustimmung).'
    },
    {
      nr: 18, thema: 'arbeitsvertrag', typ: 'datum',
      text: 'Die Mitarbeiterin Karin Vogt (52 Jahre) ist seit dem 01.09.2017 im Unternehmen beschäftigt. Die ordentliche, betriebsbedingte Kündigung geht ihr am 25.11.2026 zu. Es gilt die gesetzliche Kündigungsfrist.',
      kasten: {
        titel: '§ 622 BGB Kündigungsfristen bei Arbeitsverhältnissen (Auszug)',
        absaetze: [
          '(1) Das Arbeitsverhältnis eines Arbeitnehmers kann mit einer Frist von vier Wochen zum Fünfzehnten oder zum Ende eines Kalendermonats gekündigt werden.',
          '(2) Für eine Kündigung durch den Arbeitgeber beträgt die Kündigungsfrist, wenn das Arbeitsverhältnis in dem Betrieb oder Unternehmen'
        ],
        liste: [
          'zwei Jahre bestanden hat, einen Monat zum Ende eines Kalendermonats,',
          'fünf Jahre bestanden hat, zwei Monate zum Ende eines Kalendermonats,',
          'acht Jahre bestanden hat, drei Monate zum Ende eines Kalendermonats,',
          'zehn Jahre bestanden hat, vier Monate zum Ende eines Kalendermonats,',
          'zwölf Jahre bestanden hat, fünf Monate zum Ende eines Kalendermonats,',
          '15 Jahre bestanden hat, sechs Monate zum Ende eines Kalendermonats,',
          '20 Jahre bestanden hat, sieben Monate zum Ende eines Kalendermonats.'
        ]
      },
      frage: 'Mit Ablauf welchen Tages endet das Arbeitsverhältnis von Frau Vogt?',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '28.02.2027',
      erklaerung: 'Beim Zugang der Kündigung besteht das Arbeitsverhältnis gut 9 Jahre (mindestens 8, aber keine 10 Jahre), also gilt eine Frist von drei Monaten zum Monatsende. 25.11.2026 + 3 Monate = 25.02.2027, das nächste Monatsende ist der 28.02.2027 (2027 ist kein Schaltjahr).'
    },
    {
      nr: 19, thema: 'arbeitsvertrag', typ: 'mehrfach',
      frage: 'Für welche der folgenden Mitarbeitenden besteht ein besonderer Kündigungsschutz?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Mitarbeitenden in die Kästchen ein.',
      optionen: [
        'Rolf Henning, 58 Jahre, seit 20 Jahren im Unternehmen, verheiratet',
        'Aylin Demir, 31 Jahre, Softwareentwicklerin, derzeit in Elternzeit',
        'Kai Lorenz, 26 Jahre, Teilzeitkraft mit 20 Wochenstunden',
        'Mia Schuster, 40 Jahre, alleinerziehend mit zwei Kindern',
        'Sven Kröger, 45 Jahre, Netzwerktechniker, Mitglied des Betriebsrats',
        'Paula Ries, 34 Jahre, seit drei Jahren Projektleiterin'
      ],
      loesung: [2, 5],
      erklaerung: 'Besonderen Kündigungsschutz haben u. a. Beschäftigte in Elternzeit (§ 18 BEEG), Betriebsratsmitglieder (§ 15 KSchG), Schwangere (§ 17 MuSchG) und schwerbehinderte Menschen (§ 168 SGB IX). Alter, Betriebszugehörigkeit und Unterhaltspflichten zählen nur bei der Sozialauswahl.'
    },
    {
      nr: 20, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Der Auszubildende Tim Krause fragt, wer die Beiträge zu den einzelnen Zweigen der Sozialversicherung bezahlt.',
      frage: 'Welcher der folgenden Zweige der Sozialversicherung wird ausschließlich vom Arbeitgeber finanziert?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Versicherungszweig in das Kästchen ein.',
      optionen: [
        'Gesetzliche Unfallversicherung',
        'Gesetzliche Krankenversicherung',
        'Soziale Pflegeversicherung',
        'Gesetzliche Rentenversicherung',
        'Arbeitslosenversicherung'
      ],
      loesung: 1,
      erklaerung: 'Die Beiträge zur gesetzlichen Unfallversicherung (Berufsgenossenschaft) zahlt allein der Arbeitgeber. Die übrigen Zweige werden grundsätzlich von Arbeitgeber und Arbeitnehmer gemeinsam finanziert.'
    },
    {
      nr: 21, thema: 'sozialversicherung', typ: 'zuordnung',
      text: 'Tim Krause möchte außerdem wissen, welche Träger für bestimmte Leistungen der Sozialversicherung zuständig sind.',
      frage: 'Welche der folgenden Träger sind für die nachstehenden Leistungen zuständig?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Träger in das Kästchen ein.',
      optionenTitel: 'Träger',
      optionen: [
        'Berufsgenossenschaft',
        'Bundesagentur für Arbeit',
        'Deutsche Rentenversicherung',
        'Krankenkasse',
        'Pflegekasse'
      ],
      itemsTitel: 'Leistungen',
      items: [
        { text: 'Zahlung von Kurzarbeitergeld', loesung: 2 },
        { text: 'Heilbehandlung nach einem Unfall auf dem direkten Weg zur Arbeit', loesung: 1 },
        { text: 'Zahlung von Krankengeld nach Ablauf der sechswöchigen Entgeltfortzahlung', loesung: 4 },
        { text: 'Zahlung einer Altersrente', loesung: 3 }
      ],
      erklaerung: 'Kurzarbeitergeld zahlt die Bundesagentur für Arbeit. Wegeunfälle gelten als Arbeitsunfälle, zuständig ist die Berufsgenossenschaft (Unfallversicherung). Krankengeld zahlt die Krankenkasse, die Altersrente die Deutsche Rentenversicherung.'
    },
    {
      nr: 22, thema: 'sozialversicherung', typ: 'zahl',
      text: 'Der Systemadministrator Ole Jansen erhält ein monatliches Bruttogehalt von 3.850,00 EUR. Der Beitragssatz zur gesetzlichen Rentenversicherung beträgt 18,6 %. Arbeitgeber und Arbeitnehmer tragen den Beitrag jeweils zur Hälfte.',
      frage: 'Berechnen Sie den monatlichen Arbeitnehmeranteil zur Rentenversicherung in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 358.05, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Arbeitnehmeranteil = 18,6 % ÷ 2 = 9,3 %. 3.850,00 EUR × 9,3 % = 358,05 EUR.'
    },
    {
      nr: 23, thema: 'rechtsformen', typ: 'einfach',
      text: 'Die Geschäftsführung der Kaltenbach IT-Solutions GmbH erteilt dem kaufmännischen Leiter Bernd Ernst Prokura. Die Prokura wird in das Handelsregister eingetragen.',
      frage: 'Welche der folgenden Rechtshandlungen darf Herr Ernst **nicht** ohne besondere Befugnis vornehmen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Rechtshandlung in das Kästchen ein.',
      optionen: [
        'Einstellung eines neuen Systemadministrators',
        'Aufnahme eines Bankkredits über 200.000,00 EUR',
        'Verkauf eines unbebauten Betriebsgrundstücks',
        'Kauf von zwei Firmenfahrzeugen',
        'Abschluss eines Mietvertrags für zusätzliche Büroräume'
      ],
      loesung: 3,
      erklaerung: '§ 49 HGB: Die Prokura umfasst alle Geschäfte, die der Betrieb eines Handelsgewerbes mit sich bringt. Für die Veräußerung und Belastung von Grundstücken braucht der Prokurist eine besondere Befugnis. Grundlagengeschäfte wie Bilanz unterschreiben oder Prokura erteilen sind ganz ausgeschlossen.'
    },
    {
      nr: 24, thema: 'rechtsformen', typ: 'einfach',
      text: 'Bei der Eintragung der Prokura stellt der Auszubildende Jonas Becker Fragen zum Handelsregister.',
      frage: 'Welche der folgenden Aussagen zum Handelsregister trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Handelsregister wird von der Industrie- und Handelskammer geführt.',
        'In Abteilung A werden die Kapitalgesellschaften eingetragen.',
        'Einsicht in das Handelsregister erhalten nur die Gesellschafter des Unternehmens.',
        'Kleingewerbetreibende sind verpflichtet, sich in das Handelsregister eintragen zu lassen.',
        'Das Handelsregister wird elektronisch vom Amtsgericht (Registergericht) geführt.'
      ],
      loesung: 5,
      erklaerung: 'Das Handelsregister führt das Amtsgericht elektronisch (§ 8 HGB). Jeder darf es einsehen (§ 9 HGB). Abteilung A: Einzelkaufleute und Personengesellschaften, Abteilung B: Kapitalgesellschaften. Kleingewerbetreibende können sich eintragen lassen, müssen aber nicht.'
    },
    {
      nr: 25, thema: 'rechtsformen', typ: 'einfach',
      frage: 'Welche der folgenden Aussagen zur offenen Handelsgesellschaft (OHG) trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Haftung der Gesellschafter ist auf ihre Kapitaleinlage beschränkt.',
        'Die Gesellschafter haften für die Verbindlichkeiten der OHG unbeschränkt, also auch mit ihrem Privatvermögen.',
        'Die OHG ist eine Kapitalgesellschaft und muss einen Aufsichtsrat bilden.',
        'Für die Gründung ist ein Mindestkapital von 25.000,00 EUR vorgeschrieben.',
        'Eine OHG muss mindestens drei Gesellschafter haben.'
      ],
      loesung: 2,
      erklaerung: 'Die OHG ist eine Personengesellschaft. Ihre Gesellschafter haften unbeschränkt, unmittelbar und gesamtschuldnerisch (§ 126 HGB). Ein Mindestkapital gibt es nicht, zwei Gesellschafter genügen.'
    },
    {
      nr: 26, thema: 'rechtsformen', typ: 'zahl',
      text: 'Die OHG erzielt im abgelaufenen Geschäftsjahr einen Gewinn von 96.000,00 EUR. Laut Gesellschaftsvertrag erhält jeder Gesellschafter zunächst 4 % seiner Kapitaleinlage. Der Restgewinn wird nach Köpfen verteilt.',
      frage: 'Berechnen Sie den Gewinnanteil von Herrn Weber in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 46400, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Vorabanteile: 4 % von 160.000,00 = 6.400,00 EUR (Weber) und 4 % von 240.000,00 = 9.600,00 EUR (Arslan). Restgewinn: 96.000,00 − 16.000,00 = 80.000,00 EUR, je Kopf 40.000,00 EUR. Weber: 6.400,00 + 40.000,00 = 46.400,00 EUR.'
    },
    {
      nr: 27, thema: 'datenschutz', typ: 'einfach',
      text: 'Die Kaltenbach IT-Solutions GmbH speichert Daten von Kunden und Mitarbeitenden. Die Datenschutzbeauftragte schult die Belegschaft zur Datenschutz-Grundverordnung (DSGVO).',
      frage: 'Welche der folgenden Aussagen zur DSGVO trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die DSGVO gilt nur für Behörden, nicht für private Unternehmen.',
        'Personenbezogene Daten dürfen unbegrenzt gespeichert werden, wenn sie verschlüsselt sind.',
        'Betroffene Personen haben kein Recht auf Auskunft über ihre gespeicherten Daten.',
        'Personenbezogene Daten dürfen nur verarbeitet werden, wenn eine Rechtsgrundlage besteht, zum Beispiel eine Einwilligung oder ein Vertrag.',
        'Ein Datenschutzbeauftragter muss erst ab 250 Beschäftigten benannt werden.'
      ],
      loesung: 4,
      erklaerung: 'Art. 6 DSGVO: Jede Verarbeitung personenbezogener Daten braucht eine Rechtsgrundlage. Betroffene haben ein Auskunftsrecht (Art. 15), Daten dürfen nur so lange gespeichert werden wie nötig. Einen Datenschutzbeauftragten braucht ein Unternehmen in der Regel schon, wenn mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind (§ 38 BDSG).'
    },
    {
      nr: 28, thema: 'arbeitsschutz', typ: 'zuordnung',
      text: 'Bei einem Rundgang durch das Unternehmen werden verschiedene Sicherheitszeichen erklärt.',
      frage: 'Welche der folgenden Schilder sind den nachstehenden Arten von Sicherheitszeichen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Schild in das Kästchen ein.',
      optionenTitel: 'Schilder',
      optionen: [
        { bild: 'brandschutz-feuerloescher' },
        { bild: 'warn-spannung' },
        { bild: 'gebot-gehoerschutz' },
        { bild: 'rettung-erste-hilfe' },
        { bild: 'verbot-feuer' }
      ],
      itemsTitel: 'Arten von Sicherheitszeichen',
      items: [
        { text: 'Gebotszeichen', loesung: 3 },
        { text: 'Rettungszeichen', loesung: 4 },
        { text: 'Warnzeichen', loesung: 2 },
        { text: 'Brandschutzzeichen', loesung: 1 },
        { text: 'Verbotszeichen', loesung: 5 }
      ],
      erklaerung: 'Verbotszeichen: rund, rot umrandet mit Querbalken. Gebotszeichen: rund, blau. Warnzeichen: dreieckig, gelb mit schwarzem Rand. Rettungszeichen: quadratisch, grün. Brandschutzzeichen: quadratisch, rot.'
    },
    {
      nr: 29, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Kaltenbach IT-Solutions GmbH will in ihrem Nachhaltigkeitsbericht Maßnahmen aus allen drei Dimensionen der Nachhaltigkeit darstellen.',
      frage: 'Welche der folgenden Maßnahmen ist der **sozialen** Dimension der Nachhaltigkeit zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Umstellung der Stromversorgung auf Ökostrom',
        'Einführung flexibler Arbeitszeitmodelle zur besseren Vereinbarkeit von Familie und Beruf',
        'Senkung der Lagerkosten durch einen höheren Lagerumschlag',
        'Einbau einer Wärmepumpe im Bürogebäude',
        'Erhöhung der Eigenkapitalquote durch Gewinnrücklagen'
      ],
      loesung: 2,
      erklaerung: 'Die drei Dimensionen sind ökologisch (Ökostrom, Wärmepumpe), ökonomisch (Lagerkosten, Eigenkapital) und sozial (Arbeitsbedingungen, Familienfreundlichkeit, Gesundheit).'
    },
    {
      nr: 30, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Kaltenbach IT-Solutions GmbH nimmt alte Notebooks und Monitore ihrer Kunden zurück.',
      frage: 'Welches der folgenden Gesetze regelt die Rücknahme und umweltgerechte Entsorgung von Elektro- und Elektronikaltgeräten?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Gesetz in das Kästchen ein.',
      optionen: [
        'Elektro- und Elektronikgerätegesetz (ElektroG)',
        'Verpackungsgesetz (VerpackG)',
        'Bundes-Immissionsschutzgesetz (BImSchG)',
        'Produktsicherheitsgesetz (ProdSG)',
        'Arbeitsschutzgesetz (ArbSchG)'
      ],
      loesung: 1,
      erklaerung: 'Das ElektroG regelt Rücknahme, Wiederverwendung und umweltgerechte Entsorgung von Elektro- und Elektronikaltgeräten. Altgeräte gehören nicht in den Hausmüll (Symbol: durchgestrichene Mülltonne).'
    }
  ]
});
