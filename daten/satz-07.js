// Übungssatz 7 – eigene Aufgaben im Stil der IHK-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-07',
  titel: 'Übungssatz 7',
  untertitel: 'Spreetakt Software UG (haftungsbeschränkt)',
  ausgangssituation:
    'Die Spreetakt Software UG (haftungsbeschränkt) ist ein junges IT-Unternehmen mit Sitz in Berlin. Sie entwickelt Apps für Smartphones und Tablets für Kunden aus Handel, Gesundheitswesen und Kultur und ist in den letzten Jahren stark gewachsen. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 1,
      titel: 'Situation zur 1. Aufgabe',
      text: 'Die Spreetakt Software UG bietet in Berlin auch Wochenend-Workshops zur App-Entwicklung an. Auf diesem Markt gibt es viele Anbieter und viele Nachfrager. Für einen Monat ergeben sich bei unterschiedlichen Preisen die folgenden Mengen:',
      tabelle: {
        kopf: ['Preis je Workshopplatz', 'Nachgefragte Menge (Plätze)', 'Angebotene Menge (Plätze)'],
        zeilen: [
          ['200,00 EUR', '900', '300'],
          ['250,00 EUR', '750', '450'],
          ['300,00 EUR', '600', '600'],
          ['350,00 EUR', '450', '750'],
          ['400,00 EUR', '300', '900']
        ]
      }
    },
    {
      von: 4, bis: 8,
      text: 'Lea Brenner und Malik Aydın haben die Spreetakt Software UG (haftungsbeschränkt) im Jahr 2021 gegründet. Beide sind Gesellschafter und Geschäftsführer. Vorher hatte Herr Aydın als Einzelunternehmer die im Handelsregister eingetragene Firma „Aydın Webdesign e. K.“ geführt.'
    },
    {
      von: 9, bis: 12,
      text: 'Die Spreetakt Software UG bildet zum ersten Mal aus. Ab dem 1. August beginnt die 16-jährige Mira Okafor eine Ausbildung zur Fachinformatikerin für Anwendungsentwicklung. Ausbilderin ist die Softwareentwicklerin Svenja Kroll.'
    },
    {
      von: 13, bis: 15,
      text: 'Die Spreetakt Software UG beschäftigt inzwischen ständig 130 Arbeitnehmerinnen und Arbeitnehmer. Seit dem vergangenen Jahr besteht ein Betriebsrat, Vorsitzender ist Henrik Sauer.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Die Geschäftsführerin Lea Brenner wertet die Übersicht zum Workshop-Markt aus.',
      frage: 'Welche der folgenden Aussagen zur Preisbildung auf diesem Markt trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Gleichgewichtspreis liegt bei 250,00 EUR, weil die Nachfrage dort größer ist als das Angebot.',
        'Bei einem Preis von 350,00 EUR besteht ein Nachfrageüberhang.',
        'Der Gleichgewichtspreis liegt bei 300,00 EUR; zu diesem Preis werden 600 Plätze verkauft.',
        'Bei einem Preis von 200,00 EUR werden 900 Plätze verkauft.',
        'Der Gleichgewichtspreis liegt bei 400,00 EUR, weil die Anbieter dort die größte Menge anbieten.'
      ],
      loesung: 3,
      erklaerung: 'Marktmodell (Preisbildung bei vollständiger Konkurrenz): Der Gleichgewichtspreis ist der Preis, bei dem angebotene und nachgefragte Menge übereinstimmen, hier 300,00 EUR mit 600 Plätzen. Bei diesem Preis wird die größtmögliche Menge umgesetzt. Unterhalb des Gleichgewichtspreises entsteht ein Nachfrageüberhang (bei 200,00 EUR werden nur die 300 angebotenen Plätze verkauft), oberhalb ein Angebotsüberhang (bei 350,00 EUR).'
    },
    {
      nr: 2, thema: 'konjunktur', typ: 'einfach',
      text: 'Die Beschäftigten der Spreetakt Software UG erhalten zum 1. Januar eine Gehaltserhöhung von 2,0 %. Im selben Jahr beträgt die Inflationsrate 3,0 %.',
      frage: 'Welche der folgenden Aussagen zur Entwicklung der Einkommen der Beschäftigten trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Nominaleinkommen sinkt, das Realeinkommen steigt.',
        'Nominal- und Realeinkommen steigen jeweils um 2,0 %.',
        'Das Nominaleinkommen steigt, die Kaufkraft der Einkommen (Realeinkommen) sinkt jedoch.',
        'Das Realeinkommen steigt um 5,0 %, weil Gehaltserhöhung und Inflationsrate addiert werden.',
        'Die Inflationsrate hat keinen Einfluss auf das Realeinkommen.'
      ],
      loesung: 3,
      erklaerung: 'Das Nominaleinkommen ist der Geldbetrag, das Realeinkommen gibt an, wie viele Güter man dafür kaufen kann (Kaufkraft). Vereinfacht gilt: Veränderung des Realeinkommens ≈ Gehaltserhöhung – Inflationsrate = 2,0 % – 3,0 % = –1,0 %. Die Inflationsrate wird vom Statistischen Bundesamt über den Verbraucherpreisindex gemessen. Preisniveaustabilität ist ein Ziel des Stabilitäts- und Wachstumsgesetzes (§ 1 StabG).'
    },
    {
      nr: 3, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Im Gesellschaftsvertrag der Spreetakt Software UG ist der Gegenstand des Unternehmens festgelegt. Die Geschäftsführung formuliert außerdem mehrere Ziele für das kommende Geschäftsjahr.',
      frage: 'Welches der folgenden Ziele ist ein Sachziel der Spreetakt Software UG?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Ziel in das Kästchen ein.',
      optionen: [
        'Erzielung einer Umsatzrentabilität von 8 %',
        'Entwicklung und Vertrieb von Apps für Smartphones und Tablets',
        'Steigerung des Gewinns um 10 % gegenüber dem Vorjahr',
        'Sicherung der jederzeitigen Zahlungsfähigkeit (Liquidität)',
        'Erhöhung des Eigenkapitals durch Einbehaltung von Gewinnen'
      ],
      loesung: 2,
      erklaerung: 'Sachziele (Leistungsziele) legen fest, welche Leistungen ein Unternehmen erstellt; sie entsprechen dem Gegenstand des Unternehmens, der im Gesellschaftsvertrag einer GmbH bzw. UG angegeben werden muss (§ 3 Abs. 1 Nr. 2 GmbHG). Formalziele beschreiben den angestrebten Erfolg, z. B. Gewinn, Rentabilität, Liquidität oder Eigenkapitalausstattung.'
    },
    {
      nr: 4, thema: 'unternehmensgruendung', typ: 'mehrfach',
      text: 'Vor der Gründung haben Frau Brenner und Herr Aydın einen Businessplan erstellt, um ihn ihrer Hausbank und einem Investor vorzulegen.',
      frage: 'Welche der folgenden Inhalte gehören typischerweise in einen Businessplan?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Inhalten in die Kästchen ein.',
      optionen: [
        'Die Personalakten der künftigen Mitarbeitenden',
        'Eine Markt- und Wettbewerbsanalyse',
        'Der Ausbildungsrahmenplan für Fachinformatiker',
        'Ein Finanzplan mit Kapitalbedarfs-, Rentabilitäts- und Liquiditätsplanung',
        'Die Satzung der zuständigen Industrie- und Handelskammer',
        'Die Protokolle künftiger Betriebsversammlungen'
      ],
      loesung: [2, 4],
      erklaerung: 'Ein Businessplan beschreibt das Gründungsvorhaben: Geschäftsidee und Angebot, Gründerpersonen, Markt- und Wettbewerbsanalyse, Marketing, Organisation und Rechtsform, Chancen und Risiken sowie den Finanzplan (Kapitalbedarf, Finanzierung, Rentabilität, Liquidität). Er ist gesetzlich nicht vorgeschrieben, wird aber von Banken und Investoren verlangt; für den Gründungszuschuss der Agentur für Arbeit muss eine fachkundige Stelle die Tragfähigkeit bestätigen (§ 93 SGB III).'
    },
    {
      nr: 5, thema: 'unternehmensgruendung', typ: 'reihenfolge',
      text: 'Eine Praktikantin möchte wissen, welche Schritte bei der Gründung der Spreetakt Software UG nötig waren.',
      frage: 'Bringen Sie die folgenden Gründungsschritte in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Gründungsschritte',
      items: [
        { text: 'Gewerbeanmeldung beim Bezirksamt unter Vorlage des Handelsregisterauszugs', loesung: 4 },
        { text: 'Beurkundung des Gesellschaftsvertrags durch eine Notarin', loesung: 1 },
        { text: 'Steuerliche Erfassung beim Finanzamt und Zuteilung einer Steuernummer', loesung: 5 },
        { text: 'Einzahlung des Stammkapitals in voller Höhe auf ein Geschäftskonto der Gesellschaft', loesung: 2 },
        { text: 'Anmeldung der Gesellschaft zum Handelsregister durch die Notarin und Eintragung', loesung: 3 }
      ],
      erklaerung: 'Der Gesellschaftsvertrag bedarf der notariellen Form (§ 2 Abs. 1 GmbHG). Bei der UG muss das Stammkapital vor der Anmeldung in voller Höhe und in bar eingezahlt sein (§ 5a Abs. 2 GmbHG). Danach wird die Gesellschaft zum Handelsregister angemeldet (§§ 7, 8 GmbHG); mit der Eintragung entsteht sie als juristische Person (§ 11 Abs. 1 GmbHG). Anschließend folgen die Gewerbeanzeige (§ 14 GewO) und die steuerliche Erfassung beim Finanzamt (§ 138 AO), das vom Gewerbeamt informiert wird.'
    },
    {
      nr: 6, thema: 'rechtsformen', typ: 'zuordnung',
      text: 'Herr Aydın erklärt einer neuen Mitarbeiterin, wer im Sinne des Handelsgesetzbuchs (HGB) Kaufmann ist.',
      frage: 'Welche der folgenden Kaufmannsarten sind den nachstehenden Unternehmen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Kaufmannsart in das Kästchen ein.',
      optionenTitel: 'Kaufmannsarten',
      optionen: [
        'Istkaufmann',
        'Kannkaufmann',
        'Formkaufmann',
        'Kein Kaufmann im Sinne des HGB'
      ],
      itemsTitel: 'Unternehmen',
      items: [
        { text: 'Die Spreetakt Software UG (haftungsbeschränkt)', loesung: 3 },
        { text: 'Ein IT-Systemhaus als Einzelunternehmen mit 25 Beschäftigten, mehreren Millionen Euro Umsatz und kaufmännischer Buchführung', loesung: 1 },
        { text: 'Ein kleiner Handy-Reparaturdienst, der keinen kaufmännisch eingerichteten Geschäftsbetrieb erfordert und sich freiwillig in das Handelsregister hat eintragen lassen', loesung: 2 },
        { text: 'Ein Student, der nebenbei als Kleingewerbetreibender Computer repariert und nicht im Handelsregister eingetragen ist', loesung: 4 }
      ],
      erklaerung: 'Istkaufmann ist, wer ein Handelsgewerbe betreibt, also einen Gewerbebetrieb, der nach Art und Umfang einen kaufmännisch eingerichteten Geschäftsbetrieb erfordert (§ 1 HGB); die Eintragung wirkt nur deklaratorisch. Kleingewerbetreibende werden erst durch die freiwillige Eintragung Kaufmann (Kannkaufmann, § 2 HGB). Handelsgesellschaften wie GmbH und UG sind Kaufleute kraft Rechtsform (Formkaufmann, § 6 HGB, § 13 Abs. 3 GmbHG). Nicht eingetragene Kleingewerbetreibende sind keine Kaufleute.'
    },
    {
      nr: 7, thema: 'rechtsformen', typ: 'zahl',
      text: 'Die Spreetakt Software UG wurde mit einem Stammkapital von 3.000,00 EUR gegründet. Im ersten Geschäftsjahr erzielte sie einen Jahresüberschuss von 18.400,00 EUR. Ein Verlustvortrag aus dem Vorjahr bestand nicht.',
      kasten: {
        titel: '§ 5a GmbHG Unternehmergesellschaft (Auszug)',
        absaetze: [
          '(3) In der Bilanz des nach den §§ 242, 264 des Handelsgesetzbuchs aufzustellenden Jahresabschlusses ist eine gesetzliche Rücklage zu bilden, in die ein Viertel des um einen Verlustvortrag aus dem Vorjahr geminderten Jahresüberschusses einzustellen ist.'
        ]
      },
      frage: 'Berechnen Sie den Betrag in EUR, den die Spreetakt Software UG für das erste Geschäftsjahr mindestens in die gesetzliche Rücklage einstellen musste.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 4600, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Nach § 5a Abs. 3 GmbHG ist ein Viertel des (um einen Verlustvortrag geminderten) Jahresüberschusses in die gesetzliche Rücklage einzustellen: 18.400,00 EUR ÷ 4 = 4.600,00 EUR. Die Rücklage darf nur zur Kapitalerhöhung aus Gesellschaftsmitteln oder zum Ausgleich von Verlusten verwendet werden. Die Pflicht entfällt, sobald das Stammkapital auf mindestens 25.000,00 EUR erhöht wurde (§ 5a Abs. 5 GmbHG).'
    },
    {
      nr: 8, thema: 'rechtsformen', typ: 'einfach',
      text: 'Herr Aydın berichtet von seiner früheren Firma „Aydın Webdesign e. K.“.',
      frage: 'Welche der folgenden Aussagen zur Haftung des eingetragenen Kaufmanns trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Herr Aydın haftete als eingetragener Kaufmann …',
      optionen: [
        'nur mit dem in das Unternehmen eingebrachten Kapital.',
        'nur bis zu dem im Handelsregister eingetragenen Betrag.',
        'unbeschränkt, also auch mit seinem Privatvermögen, für alle Verbindlichkeiten des Unternehmens.',
        'gemeinsam mit der Industrie- und Handelskammer als Gesamtschuldner.',
        'erst nach Ablauf von zwei Jahren ab der Eintragung in das Handelsregister.'
      ],
      loesung: 3,
      erklaerung: 'Das Einzelunternehmen hat keine eigene Rechtspersönlichkeit; Schuldner der Geschäftsverbindlichkeiten ist der Inhaber selbst. Er haftet daher unbeschränkt mit seinem Geschäfts- und Privatvermögen. Die Eintragung in das Handelsregister ändert daran nichts; sie verpflichtet nur zum Rechtsformzusatz „eingetragener Kaufmann“ bzw. „e. K.“ (§ 19 Abs. 1 Nr. 1 HGB).'
    },
    {
      nr: 9, thema: 'ausbildung', typ: 'einfach',
      text: 'Bevor der Ausbildungsvertrag mit Frau Okafor abgeschlossen wird, informiert sich Frau Brenner über die Voraussetzungen für das Ausbilden.',
      frage: 'Welche der folgenden Voraussetzungen muss erfüllt sein, damit die Spreetakt Software UG ausbilden darf?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Voraussetzung in das Kästchen ein.',
      optionen: [
        'Die Ausbildungsstätte muss nach Art und Einrichtung für die Berufsausbildung geeignet sein, und Frau Kroll muss persönlich und fachlich geeignet sein.',
        'Das Unternehmen muss mindestens 50 Beschäftigte haben.',
        'Frau Kroll muss ein abgeschlossenes Hochschulstudium in Informatik nachweisen.',
        'Das Unternehmen muss Mitglied eines Arbeitgeberverbands sein.',
        'Die Agentur für Arbeit muss jeden Ausbildungsvertrag vorher genehmigen.'
      ],
      loesung: 1,
      erklaerung: 'Auszubildende dürfen nur eingestellt werden, wenn die Ausbildungsstätte nach Art und Einrichtung geeignet ist und die Zahl der Auszubildenden in einem angemessenen Verhältnis zur Zahl der Fachkräfte steht (§ 27 BBiG). Ausbilden darf nur, wer persönlich und fachlich geeignet ist (§§ 28 bis 30 BBiG); die berufs- und arbeitspädagogische Eignung wird in der Regel durch die Ausbilder-Eignungsprüfung (AEVO) nachgewiesen. Die IHK überwacht die Eignung (§ 32 BBiG).'
    },
    {
      nr: 10, thema: 'ausbildung', typ: 'zuordnung',
      text: 'Frau Kroll erklärt Frau Okafor, welche Einrichtungen an ihrer Ausbildung beteiligt sind.',
      frage: 'Welche der folgenden Einrichtungen sind den nachstehenden Aufgaben zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Einrichtung in das Kästchen ein. Eine Einrichtung kann mehreren Aufgaben zugeordnet werden.',
      optionenTitel: 'Einrichtungen',
      optionen: [
        'Industrie- und Handelskammer',
        'Berufsschule',
        'Ausbildungsbetrieb',
        'Agentur für Arbeit'
      ],
      itemsTitel: 'Aufgaben',
      items: [
        { text: 'Eintragung des Ausbildungsvertrags in das Verzeichnis der Berufsausbildungsverhältnisse', loesung: 1 },
        { text: 'Vermittlung der fachtheoretischen und allgemeinbildenden Inhalte nach dem Rahmenlehrplan', loesung: 2 },
        { text: 'Vermittlung der berufspraktischen Fertigkeiten nach dem Ausbildungsrahmenplan und Zahlung der Ausbildungsvergütung', loesung: 3 },
        { text: 'Überwachung der Durchführung der Berufsausbildung und Beratung durch Ausbildungsberater', loesung: 1 },
        { text: 'Berufsberatung und Vermittlung freier Ausbildungsstellen', loesung: 4 }
      ],
      erklaerung: 'Für IT-Berufe ist die IHK die zuständige Stelle (§ 71 Abs. 2 BBiG). Sie führt das Verzeichnis der Berufsausbildungsverhältnisse (§§ 34, 35 BBiG) und überwacht die Ausbildung mithilfe von Ausbildungsberatern (§ 76 BBiG). Die Berufsschule vermittelt nach dem Rahmenlehrplan die Theorie (Schulgesetze der Länder). Der Ausbildungsbetrieb bildet nach dem Ausbildungsrahmenplan aus und zahlt die Vergütung (§§ 14, 17 BBiG). Die Agentur für Arbeit bietet Berufsberatung und Ausbildungsvermittlung an (§§ 29, 35 SGB III).'
    },
    {
      nr: 11, thema: 'ausbildung', typ: 'einfach',
      text: 'Frau Kroll erklärt Frau Okafor, wie sie ihren Ausbildungsnachweis führen soll.',
      frage: 'Welche der folgenden Aussagen zum Ausbildungsnachweis trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Der Ausbildungsnachweis …',
      optionen: [
        'darf nur außerhalb der Ausbildungszeit und auf eigene Kosten geführt werden.',
        'muss für die Zulassung zur Abschlussprüfung nicht vorgelegt werden.',
        'wird schriftlich oder elektronisch geführt; Frau Okafor darf ihn am Arbeitsplatz führen, und die Ausbildenden müssen ihn regelmäßig durchsehen.',
        'wird ausschließlich von der Berufsschule geführt und benotet.',
        'muss nur geführt werden, solange die Auszubildende minderjährig ist.'
      ],
      loesung: 3,
      erklaerung: 'Auszubildende sind verpflichtet, einen schriftlichen oder elektronischen Ausbildungsnachweis zu führen (§ 13 Satz 2 Nr. 7 BBiG). Die Ausbildenden müssen sie dazu anhalten, den Nachweis regelmäßig durchsehen und Gelegenheit geben, ihn am Arbeitsplatz zu führen (§ 14 Abs. 2 BBiG). Der vorgelegte Ausbildungsnachweis ist Voraussetzung für die Zulassung zur Abschlussprüfung (§ 43 Abs. 1 Nr. 2 BBiG).'
    },
    {
      nr: 12, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Für ein wichtiges App-Release soll das Entwicklungsteam am kommenden Samstag arbeiten. Die Projektleitung möchte auch die 16-jährige Auszubildende Mira Okafor einplanen, die von Montag bis Freitag bereits im Betrieb bzw. in der Berufsschule ist.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Jugendarbeitsschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Okafor darf am Samstag arbeiten, wenn ihre Eltern schriftlich zustimmen.',
        'Frau Okafor darf am Samstag arbeiten, wenn sie dafür einen Zuschlag von 25 % erhält.',
        'Frau Okafor darf an bis zu sechs Tagen in der Woche beschäftigt werden, solange sie insgesamt nicht mehr als 48 Stunden arbeitet.',
        'Frau Okafor darf nur an fünf Tagen in der Woche und grundsätzlich nicht an Samstagen beschäftigt werden; die gesetzlichen Ausnahmen für die Samstagsarbeit gelten für ein Softwareunternehmen nicht.',
        'Für Auszubildende über 15 Jahren gelten bei der Samstagsarbeit dieselben Regeln wie für Erwachsene.'
      ],
      loesung: 4,
      erklaerung: 'Jugendliche dürfen nur an fünf Tagen in der Woche beschäftigt werden; die beiden wöchentlichen Ruhetage sollen nach Möglichkeit aufeinander folgen (§ 15 JArbSchG). An Samstagen dürfen sie grundsätzlich nicht beschäftigt werden (§ 16 Abs. 1 JArbSchG). Ausnahmen lässt § 16 Abs. 2 JArbSchG nur für bestimmte Bereiche zu, z. B. Krankenanstalten, offene Verkaufsstellen, Gaststätten, das Verkehrswesen oder Kfz-Reparaturwerkstätten; auch dann ist die Fünf-Tage-Woche durch Freistellung an einem anderen Tag derselben Woche sicherzustellen (§ 16 Abs. 3 JArbSchG). Eine Zustimmung der Eltern oder ein Zuschlag ändern daran nichts; die 48-Stunden-Woche ergibt sich nur für Erwachsene aus dem Arbeitszeitgesetz.'
    },
    {
      nr: 13, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Herr Sauer bereitet die nächste regelmäßige Betriebsversammlung vor.',
      frage: 'Welche der folgenden Aussagen zur regelmäßigen Betriebsversammlung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Die regelmäßige Betriebsversammlung …',
      optionen: [
        'findet einmal in jedem Kalendervierteljahr statt; der Betriebsrat erstattet dort einen Tätigkeitsbericht.',
        'ist öffentlich, sodass auch Kunden und Presse teilnehmen dürfen.',
        'findet grundsätzlich außerhalb der Arbeitszeit und ohne Vergütung statt.',
        'wird von der Geschäftsführung geleitet; der Betriebsrat darf nur zuhören.',
        'kann für die Geschäftsführung verbindliche Weisungen beschließen.'
      ],
      loesung: 1,
      erklaerung: 'Die Betriebsversammlung besteht aus den Arbeitnehmern des Betriebs, wird vom Vorsitzenden des Betriebsrats geleitet und ist nicht öffentlich (§ 42 Abs. 1 BetrVG). Der Betriebsrat beruft sie einmal in jedem Kalendervierteljahr ein und erstattet einen Tätigkeitsbericht (§ 43 Abs. 1 BetrVG). Sie findet grundsätzlich während der Arbeitszeit statt, die Zeit wird wie Arbeitszeit vergütet (§ 44 Abs. 1 BetrVG). Sie kann dem Betriebsrat Anträge unterbreiten und Stellung nehmen, aber keine Weisungen erteilen (§ 45 BetrVG).'
    },
    {
      nr: 14, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Geschäftsführung plant, die Abteilung Kundensupport mit 25 Beschäftigten zu schließen und deren Aufgaben künftig an einen externen Dienstleister zu vergeben. Nicht alle Betroffenen können in andere Abteilungen wechseln.',
      frage: 'Welche der folgenden Aussagen zur Beteiligung des Betriebsrats trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Betriebsrat muss erst informiert werden, wenn die Kündigungen bereits ausgesprochen sind.',
        'Die Schließung einer Abteilung ist eine rein unternehmerische Entscheidung, bei der der Betriebsrat keinerlei Beteiligungsrechte hat.',
        'Die Geschäftsführung muss den Betriebsrat rechtzeitig und umfassend unterrichten und mit ihm über einen Interessenausgleich beraten; der Betriebsrat kann einen Sozialplan zum Ausgleich der wirtschaftlichen Nachteile verlangen, notfalls über die Einigungsstelle.',
        'Der Betriebsrat kann die Schließung der Abteilung durch seinen Widerspruch endgültig verhindern.',
        'Über die Schließung entscheiden die betroffenen Beschäftigten in einer geheimen Abstimmung.'
      ],
      loesung: 3,
      erklaerung: 'Die Stilllegung eines wesentlichen Betriebsteils ist eine Betriebsänderung (§ 111 Satz 3 Nr. 1 BetrVG). In Unternehmen mit in der Regel mehr als 20 wahlberechtigten Arbeitnehmern muss der Unternehmer den Betriebsrat über geplante Betriebsänderungen, die wesentliche Nachteile für die Belegschaft haben können, rechtzeitig und umfassend unterrichten und sie mit ihm beraten (§ 111 Satz 1 BetrVG). Über das Ob und Wie der Maßnahme wird ein Interessenausgleich versucht; erzwingen kann ihn der Betriebsrat nicht. Einen Sozialplan zum Ausgleich oder zur Milderung der wirtschaftlichen Nachteile, z. B. durch Abfindungen, kann er dagegen über die Einigungsstelle durchsetzen (§ 112 Abs. 1 und 4 BetrVG). Vor jeder einzelnen Kündigung ist der Betriebsrat außerdem anzuhören (§ 102 BetrVG).'
    },
    {
      nr: 15, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Weil in der Spreetakt Software UG in der Regel mehr als 100 Arbeitnehmer ständig beschäftigt sind, wird ein Wirtschaftsausschuss gebildet.',
      frage: 'Welche der folgenden Aussagen zum Wirtschaftsausschuss trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Der Wirtschaftsausschuss …',
      optionen: [
        'entscheidet anstelle der Geschäftsführung über Investitionen.',
        'berät wirtschaftliche Angelegenheiten mit dem Unternehmer und unterrichtet den Betriebsrat; der Unternehmer muss ihn rechtzeitig und umfassend informieren.',
        'wird von den Gesellschaftern gewählt und kontrolliert die Geschäftsführung.',
        'ist nur in Aktiengesellschaften vorgeschrieben.',
        'legt die Gehälter aller Beschäftigten verbindlich fest.'
      ],
      loesung: 2,
      erklaerung: 'In Unternehmen mit in der Regel mehr als 100 ständig beschäftigten Arbeitnehmern ist ein Wirtschaftsausschuss zu bilden. Er hat die Aufgabe, wirtschaftliche Angelegenheiten mit dem Unternehmer zu beraten und den Betriebsrat zu unterrichten; der Unternehmer muss ihn rechtzeitig und umfassend unterrichten (§ 106 Abs. 1 und 2 BetrVG). Die Mitglieder bestimmt der Betriebsrat (§ 107 BetrVG). Ein Entscheidungs- oder Mitbestimmungsrecht hat der Wirtschaftsausschuss nicht.'
    },
    {
      nr: 16, thema: 'entgelt', typ: 'einfach',
      text: 'Die Spreetakt Software UG beschäftigt neben ihren festen Mitarbeitenden auch Aushilfen mit Minijob, Praktikantinnen und Praktikanten sowie Auszubildende. Der gesetzliche Mindestlohn beträgt im Jahr 2026 13,90 EUR brutto je Zeitstunde.',
      frage: 'Welche der folgenden Aussagen zum gesetzlichen Mindestlohn trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Mindestlohn gilt nicht für Aushilfen mit einem Minijob.',
        'Studierende, die ein in ihrer Studienordnung vorgeschriebenes Pflichtpraktikum absolvieren, haben Anspruch auf den Mindestlohn.',
        'Der Mindestlohn gilt nur in Unternehmen, die an einen Tarifvertrag gebunden sind.',
        'Arbeitgeber und Arbeitnehmer können im Arbeitsvertrag wirksam einen niedrigeren Stundenlohn vereinbaren.',
        'Auszubildende haben keinen Anspruch auf den gesetzlichen Mindestlohn; für sie gilt die Mindestvergütung nach dem Berufsbildungsgesetz.'
      ],
      loesung: 5,
      erklaerung: 'Der Mindestlohn steht grundsätzlich allen Arbeitnehmerinnen und Arbeitnehmern zu, auch Minijobbern und unabhängig von einer Tarifbindung (§§ 1, 22 Abs. 1 MiLoG). Vereinbarungen, die ihn unterschreiten, sind insoweit unwirksam (§ 3 MiLoG). Ausgenommen sind u. a. Auszubildende (§ 22 Abs. 3 MiLoG), für die die Mindestvergütung nach § 17 Abs. 2 BBiG gilt, sowie Pflichtpraktika aufgrund einer Studien- oder Ausbildungsordnung (§ 22 Abs. 1 Satz 2 Nr. 1 MiLoG). Die Höhe passt die Mindestlohnkommission regelmäßig an.'
    },
    {
      nr: 17, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Für ein großes Kundenprojekt setzt die Spreetakt Software UG zwei Softwaretester ein, die bei dem Personaldienstleister FlexIT Personal GmbH angestellt sind und von diesem an die Spreetakt Software UG überlassen werden.',
      frage: 'Welche der folgenden Aussagen zur Arbeitnehmerüberlassung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Leiharbeitnehmer haben ihren Arbeitsvertrag mit der FlexIT Personal GmbH; die Arbeitsanweisungen im Projekt erteilt die Spreetakt Software UG.',
        'Die Leiharbeitnehmer erhalten ihr Gehalt direkt von der Spreetakt Software UG.',
        'Leiharbeitnehmer dürfen unbegrenzt lange an denselben Entleiher überlassen werden.',
        'Leiharbeitnehmer dürfen grundsätzlich dauerhaft schlechter bezahlt werden als vergleichbare Stammbeschäftigte des Entleihers.',
        'Mit Beginn des Einsatzes entsteht automatisch ein Arbeitsverhältnis zwischen den Leiharbeitnehmern und der Spreetakt Software UG.'
      ],
      loesung: 1,
      erklaerung: 'Bei der Arbeitnehmerüberlassung besteht der Arbeitsvertrag zwischen dem Verleiher (Personaldienstleister) und dem Leiharbeitnehmer; der Verleiher zahlt das Entgelt und braucht eine Erlaubnis der Bundesagentur für Arbeit (§ 1 Abs. 1 AÜG). Der Entleiher setzt die Leiharbeitnehmer in seinem Betrieb ein und erteilt ihnen die fachlichen Weisungen. Die Überlassung an denselben Entleiher ist grundsätzlich auf 18 aufeinanderfolgende Monate begrenzt (§ 1 Abs. 1b AÜG). Während der Überlassung gilt der Gleichstellungsgrundsatz (Equal Pay, § 8 Abs. 1 AÜG); ein Tarifvertrag kann davon abweichen, beim Entgelt in der Regel aber nur für die ersten neun Monate (§ 8 Abs. 4 AÜG). Ein Arbeitsverhältnis mit dem Entleiher entsteht nur in den Fällen des § 10 AÜG, z. B. bei fehlender Erlaubnis des Verleihers.'
    },
    {
      nr: 18, thema: 'arbeitsvertrag', typ: 'datum',
      text: 'Die Mobile-Entwicklerin Jana Wolff ist seit dem 01.02.2027 bei der Spreetakt Software UG beschäftigt. Im Arbeitsvertrag ist eine Probezeit von sechs Monaten vereinbart. Nach Anhörung des Betriebsrats kündigt die Spreetakt Software UG das Arbeitsverhältnis ordentlich; die Kündigung geht Frau Wolff am Donnerstag, dem 17.06.2027, zu. Es gilt die gesetzliche Kündigungsfrist.',
      kasten: {
        titel: '§ 622 BGB Kündigungsfristen bei Arbeitsverhältnissen (Auszug)',
        absaetze: [
          '(3) Während einer vereinbarten Probezeit, längstens für die Dauer von sechs Monaten, kann das Arbeitsverhältnis mit einer Frist von zwei Wochen gekündigt werden.'
        ]
      },
      frage: 'Mit Ablauf welchen Tages endet das Arbeitsverhältnis von Frau Wolff?',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '01.07.2027',
      erklaerung: 'Die Kündigung geht innerhalb der vereinbarten Probezeit zu, daher gilt die Frist von zwei Wochen (§ 622 Abs. 3 BGB), und zwar zu jedem beliebigen Tag. Der Tag des Zugangs wird nicht mitgezählt (§ 187 Abs. 1 BGB); die Frist endet mit Ablauf des Tages der zweiten Woche, der durch seine Benennung dem Tag des Zugangs entspricht (§ 188 Abs. 2 BGB): Donnerstag, 17.06.2027 → Donnerstag, 01.07.2027. Das Kündigungsschutzgesetz greift noch nicht, weil das Arbeitsverhältnis keine sechs Monate besteht (§ 1 Abs. 1 KSchG).'
    },
    {
      nr: 19, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Der App-Entwickler Kevin Lindner trägt ein neues Test-Smartphone der Spreetakt Software UG im Wert von 1.200,00 EUR in den Besprechungsraum. Als ihn eine Kollegin anspricht, rutscht ihm das Gerät aus der Hand und zerbricht. Das Missgeschick beruht auf einer geringfügigen, leicht entschuldbaren Unachtsamkeit (leichteste Fahrlässigkeit).',
      frage: 'Welche der folgenden Aussagen zur Haftung von Herrn Lindner trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Lindner muss den Schaden immer in voller Höhe ersetzen, weil er das Gerät beschädigt hat.',
        'Herr Lindner und die Spreetakt Software UG tragen jeden Schaden stets je zur Hälfte.',
        'Die Haftung richtet sich allein nach der Höhe seines Monatsgehalts.',
        'Bei leichtester Fahrlässigkeit haftet Herr Lindner nicht; bei mittlerer Fahrlässigkeit würde der Schaden anteilig verteilt, bei grober Fahrlässigkeit oder Vorsatz haftete er grundsätzlich voll.',
        'Herr Lindner muss beweisen, dass ihn kein Verschulden trifft, sonst haftet er voll.'
      ],
      loesung: 4,
      erklaerung: 'Für Schäden, die Arbeitnehmer bei betrieblich veranlassten Tätigkeiten verursachen, gelten nach der Rechtsprechung des Bundesarbeitsgerichts die Grundsätze des innerbetrieblichen Schadensausgleichs: Bei leichtester Fahrlässigkeit haftet der Arbeitnehmer nicht, bei mittlerer Fahrlässigkeit wird der Schaden nach den Umständen des Einzelfalls zwischen Arbeitgeber und Arbeitnehmer aufgeteilt, bei grober Fahrlässigkeit und Vorsatz haftet der Arbeitnehmer in der Regel voll. Abweichend von § 280 Abs. 1 Satz 2 BGB muss der Arbeitgeber das Verschulden des Arbeitnehmers beweisen (§ 619a BGB).'
    },
    {
      nr: 20, thema: 'arbeitsschutz', typ: 'mehrfach',
      text: 'Wegen eines dringenden Release-Termins plant die Projektleiterin Aylin Demir die Arbeitszeiten ihres Teams. Alle Teammitglieder sind volljährig.',
      frage: 'Welche der folgenden Regelungen entsprechen dem Arbeitszeitgesetz?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Regelungen in die Kästchen ein.',
      optionen: [
        'Die werktägliche Arbeitszeit darf dauerhaft zwölf Stunden betragen, wenn die Beschäftigten zustimmen.',
        'Bei einer Arbeitszeit von mehr als sechs bis zu neun Stunden ist die Arbeit durch Ruhepausen von insgesamt mindestens 30 Minuten zu unterbrechen.',
        'Nach Beendigung der täglichen Arbeitszeit ist eine ununterbrochene Ruhezeit von mindestens elf Stunden einzuhalten.',
        'Die Ruhepause darf an das Ende der Arbeitszeit gelegt werden, damit die Beschäftigten früher gehen können.',
        'Die Arbeitszeit darf auf zehn Stunden werktäglich verlängert werden, auch wenn sie im Durchschnitt von sechs Monaten nicht auf acht Stunden ausgeglichen wird.',
        'Länger als vier Stunden hintereinander dürfen Erwachsene nicht ohne Ruhepause beschäftigt werden.'
      ],
      loesung: [2, 3],
      erklaerung: 'Die werktägliche Arbeitszeit darf acht Stunden nicht überschreiten; eine Verlängerung auf bis zu zehn Stunden ist nur zulässig, wenn innerhalb von sechs Kalendermonaten oder 24 Wochen im Durchschnitt acht Stunden werktäglich nicht überschritten werden (§ 3 ArbZG). Die Arbeit ist durch im Voraus feststehende Ruhepausen zu unterbrechen: mindestens 30 Minuten bei mehr als sechs bis zu neun Stunden, 45 Minuten bei mehr als neun Stunden; länger als sechs Stunden hintereinander darf niemand ohne Ruhepause arbeiten (§ 4 ArbZG). Nach Arbeitsende ist eine Ruhezeit von mindestens elf Stunden einzuhalten (§ 5 Abs. 1 ArbZG). Die 4,5-Stunden-Grenze gilt für Jugendliche (§ 11 JArbSchG).'
    },
    {
      nr: 21, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die Spreetakt Software UG richtet der Entwicklerin Johanna Kraus auf ihren Wunsch einen festen Arbeitsplatz in ihrer Wohnung ein. Im Arbeitsvertrag wird vereinbart, dass sie dort an drei Tagen pro Woche arbeitet. Andere Beschäftigte arbeiten nur gelegentlich unterwegs mit ihrem Notebook.',
      frage: 'Welche der folgenden Aussagen zum Telearbeitsplatz nach der Arbeitsstättenverordnung (ArbStättV) trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Telearbeitsplatz liegt bereits vor, wenn Beschäftigte gelegentlich unterwegs mit dem Notebook arbeiten.',
        'Für einen Telearbeitsplatz gelten keinerlei Arbeitsschutzvorschriften, weil er sich in der Privatwohnung befindet.',
        'Ein Telearbeitsplatz ist ein vom Arbeitgeber fest eingerichteter Bildschirmarbeitsplatz im Privatbereich der Beschäftigten; die Bedingungen werden vereinbart, und der Arbeitgeber stellt die benötigte Ausstattung bereit.',
        'Die Einrichtung und Ausstattung des Telearbeitsplatzes muss Frau Kraus selbst bezahlen.',
        'Ein Telearbeitsplatz darf nur mit Genehmigung der Berufsgenossenschaft eingerichtet werden.'
      ],
      loesung: 3,
      erklaerung: 'Telearbeitsplätze sind vom Arbeitgeber fest eingerichtete Bildschirmarbeitsplätze im Privatbereich der Beschäftigten, für die eine wöchentliche Arbeitszeit und die Dauer der Einrichtung vereinbart sind. Eingerichtet ist ein Telearbeitsplatz erst, wenn die Bedingungen arbeitsvertraglich oder in einer Vereinbarung festgelegt sind und der Arbeitgeber die benötigte Ausstattung mit Mobiliar, Arbeitsmitteln und Kommunikationseinrichtungen bereitgestellt und installiert hat (§ 2 Abs. 7 ArbStättV). Für Telearbeitsplätze gelten u. a. die Gefährdungsbeurteilung bei der erstmaligen Beurteilung und die Anforderungen an Bildschirmarbeitsplätze (§ 1 ArbStättV). Gelegentliches mobiles Arbeiten unterwegs ist kein Telearbeitsplatz im Sinne der ArbStättV; das Arbeitsschutzgesetz gilt aber auch dort.'
    },
    {
      nr: 22, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die Softwaretesterin Lena Hoffmann teilt ihrem Vorgesetzten mit, dass sie schwanger ist.',
      frage: 'Welche der folgenden Pflichten hat die Spreetakt Software UG nach dem Mutterschutzgesetz?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Pflicht in das Kästchen ein.',
      optionen: [
        'Sie muss die zuständige Aufsichtsbehörde unverzüglich über die Schwangerschaft benachrichtigen.',
        'Sie muss die Schwangerschaft allen Kolleginnen und Kollegen bekannt geben.',
        'Sie darf Frau Hoffmann ab sofort nicht mehr beschäftigen.',
        'Sie darf das Arbeitsverhältnis wegen der Schwangerschaft mit der gesetzlichen Frist kündigen.',
        'Sie muss das Gehalt von Frau Hoffmann ab der Mitteilung halbieren.'
      ],
      loesung: 1,
      erklaerung: 'Teilt eine Frau dem Arbeitgeber mit, dass sie schwanger ist, muss er die Aufsichtsbehörde unverzüglich benachrichtigen; Dritten darf er die Information nicht unbefugt bekannt geben (§ 27 Abs. 1 MuSchG). Die Gefährdungsbeurteilung ist für die Schwangere zu konkretisieren (§ 10 MuSchG). Eine Kündigung ist während der Schwangerschaft grundsätzlich unzulässig (§ 17 MuSchG). Ein allgemeines Beschäftigungsverbot gilt erst in der Schutzfrist sechs Wochen vor der Entbindung (§ 3 Abs. 1 MuSchG).'
    },
    {
      nr: 23, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Der gesetzlich krankenversicherte Entwickler Paul Neumann ist seit drei Jahren bei der Spreetakt Software UG beschäftigt. Nach einem Sportunfall in seiner Freizeit ist er zehn Wochen arbeitsunfähig.',
      frage: 'Welche der folgenden Aussagen zu seiner finanziellen Absicherung während der Arbeitsunfähigkeit trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Spreetakt Software UG zahlt sein Arbeitsentgelt für die gesamten zehn Wochen weiter.',
        'Die Spreetakt Software UG zahlt sein Arbeitsentgelt bis zu sechs Wochen weiter; danach erhält er Krankengeld von seiner Krankenkasse.',
        'Weil es ein Freizeitunfall ist, zahlt die Berufsgenossenschaft vom ersten Tag an Verletztengeld.',
        'In den ersten sechs Wochen zahlt die Krankenkasse Krankengeld, danach setzt der Arbeitgeber das Gehalt fort.',
        'Herr Neumann erhält während der Arbeitsunfähigkeit keinerlei Leistungen, weil sich der Unfall in der Freizeit ereignet hat.'
      ],
      loesung: 2,
      erklaerung: 'Bei unverschuldeter Arbeitsunfähigkeit zahlt der Arbeitgeber das Arbeitsentgelt bis zur Dauer von sechs Wochen weiter (§ 3 Abs. 1 EFZG); das gilt auch nach Freizeitunfällen. Danach zahlt die gesetzliche Krankenkasse Krankengeld (§ 44 SGB V) in Höhe von 70 % des regelmäßigen Bruttoentgelts, höchstens 90 % des Nettoentgelts (§ 47 SGB V). Die Berufsgenossenschaft ist nur bei Arbeits- und Wegeunfällen zuständig.'
    },
    {
      nr: 24, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Der Teamleiter Simon Krüger verdient 84.000,00 EUR brutto im Jahr. Die Versicherungspflichtgrenze (Jahresarbeitsentgeltgrenze) der gesetzlichen Krankenversicherung beträgt im Jahr 2026 77.400,00 EUR. Sein Gehalt überschreitet diese Grenze im laufenden Jahr und auch im Folgejahr.',
      frage: 'Welche der folgenden Aussagen zur Sozialversicherung von Herrn Krüger trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Er bleibt in der gesetzlichen Krankenversicherung pflichtversichert, weil dort alle Arbeitnehmer unabhängig vom Einkommen pflichtversichert sind.',
        'Er wird in der Krankenversicherung versicherungsfrei und kann sich freiwillig gesetzlich oder privat versichern.',
        'Er wird auch in der gesetzlichen Rentenversicherung versicherungsfrei.',
        'Er muss sich gegen Arbeitslosigkeit privat versichern, weil er aus der Arbeitslosenversicherung ausscheidet.',
        'Er darf überhaupt keine Krankenversicherung mehr abschließen.'
      ],
      loesung: 2,
      erklaerung: 'Arbeitnehmer, deren regelmäßiges Jahresarbeitsentgelt die Jahresarbeitsentgeltgrenze übersteigt, sind in der Krankenversicherung versicherungsfrei (§ 6 Abs. 1 Nr. 1 SGB V); die Versicherungspflicht endet mit Ablauf des Kalenderjahres, wenn auch die Grenze des Folgejahres überschritten wird (§ 6 Abs. 4 SGB V). Sie können sich freiwillig gesetzlich (§ 9 SGB V) oder privat versichern; eine Krankenversicherung müssen sie haben. In der Renten- und Arbeitslosenversicherung gibt es keine Versicherungspflichtgrenze, dort gilt nur die Beitragsbemessungsgrenze.'
    },
    {
      nr: 25, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Spreetakt Software UG erzielte im abgelaufenen Geschäftsjahr Umsatzerlöse von 12.800.000,00 EUR und einen Gewinn von 832.000,00 EUR.',
      frage: 'Berechnen Sie die Umsatzrentabilität in Prozent.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf die erste Nachkommastelle.',
      loesung: 6.5, nachkommastellen: 1, einheit: '%',
      erklaerung: 'Umsatzrentabilität = Gewinn ÷ Umsatzerlöse × 100 = 832.000,00 EUR ÷ 12.800.000,00 EUR × 100 = 6,5 %. Von jedem Euro Umsatz bleiben also 6,5 Cent als Gewinn im Unternehmen.'
    },
    {
      nr: 26, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'Die Entwicklerin Fatma Yıldız fühlt sich von ihrem Teamleiter wegen ihrer ethnischen Herkunft benachteiligt, weil er sie trotz gleicher Qualifikation regelmäßig von Kundenprojekten ausschließt.',
      frage: 'Welche der folgenden Aussagen zu den Rechten von Frau Yıldız nach dem Allgemeinen Gleichbehandlungsgesetz (AGG) trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Sie kann sich bei der zuständigen Stelle des Betriebs beschweren; die Beschwerde ist zu prüfen und ihr das Ergebnis mitzuteilen.',
        'Eine Beschwerde ist nur zulässig, wenn mindestens drei Kolleginnen und Kollegen sie unterschreiben.',
        'Wegen der Beschwerde darf der Arbeitgeber sie abmahnen.',
        'Sie muss zuerst beim Arbeitsgericht klagen, bevor sie sich im Betrieb beschweren darf.',
        'Das AGG schützt nur bei der Einstellung, nicht im bestehenden Arbeitsverhältnis.'
      ],
      loesung: 1,
      erklaerung: 'Beschäftigte haben das Recht, sich bei den zuständigen Stellen des Betriebs zu beschweren, wenn sie sich wegen eines in § 1 AGG genannten Grundes benachteiligt fühlen; die Beschwerde ist zu prüfen und das Ergebnis mitzuteilen (§ 13 Abs. 1 AGG). Der Arbeitgeber muss die zuständige Beschwerdestelle im Betrieb bekannt machen (§ 12 Abs. 5 AGG) und darf Beschäftigte wegen der Inanspruchnahme ihrer Rechte nicht benachteiligen (Maßregelungsverbot, § 16 AGG). Das AGG gilt auch für Arbeitsbedingungen und beruflichen Aufstieg (§ 2 Abs. 1 AGG).'
    },
    {
      nr: 27, thema: 'weiterbildung', typ: 'einfach',
      text: 'Der Fachinformatiker Robin Schäfer möchte sich neben dem Beruf auf eine IHK-Fortbildungsprüfung zum Bachelor Professional vorbereiten. Er fragt nach dem Aufstiegs-BAföG.',
      frage: 'Welche der folgenden Aussagen zum Aufstiegs-BAföG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Aufstiegs-BAföG fördert nur ein Hochschulstudium in Vollzeit.',
        'Es fördert die Vorbereitung auf Fortbildungsabschlüsse wie den Bachelor Professional in Voll- oder Teilzeit; ein Teil der Lehrgangs- und Prüfungsgebühren ist ein Zuschuss, der nicht zurückgezahlt werden muss.',
        'Die gesamte Förderung muss in voller Höhe zurückgezahlt werden.',
        'Gefördert werden nur Personen unter 25 Jahren.',
        'Den Antrag stellt der Arbeitgeber bei der Berufsgenossenschaft.'
      ],
      loesung: 2,
      erklaerung: 'Das Aufstiegs-BAföG nach dem Aufstiegsfortbildungsförderungsgesetz (AFBG) fördert die Vorbereitung auf öffentlich-rechtliche Fortbildungsabschlüsse, z. B. nach §§ 53 ff. BBiG (Geprüfter Berufsspezialist, Bachelor Professional, Master Professional) oder die Meisterprüfung, in Voll- oder Teilzeit und ohne Altersgrenze. Lehrgangs- und Prüfungsgebühren werden teilweise als Zuschuss, im Übrigen als zinsgünstiges Darlehen gefördert; bei bestandener Prüfung wird ein Teil des Darlehens erlassen. Den Antrag stellt der Teilnehmer bei der zuständigen Förderbehörde des Landes.'
    },
    {
      nr: 28, thema: 'datenschutz', typ: 'einfach',
      text: 'Ein Mitarbeiter verliert in der S-Bahn einen unverschlüsselten Laptop mit Kundendaten (Namen, Anschriften, Bankverbindungen). Die Geschäftsführung erfährt am selben Tag davon.',
      frage: 'Innerhalb welcher Frist muss die Spreetakt Software UG diese Verletzung des Schutzes personenbezogener Daten grundsätzlich der zuständigen Aufsichtsbehörde melden?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Frist in das Kästchen ein.',
      optionen: [
        'Unverzüglich und möglichst binnen 72 Stunden, nachdem ihr die Verletzung bekannt wurde',
        'Innerhalb von 14 Tagen nach dem Verlust',
        'Innerhalb eines Monats nach dem Verlust',
        'Nur auf Nachfrage der Aufsichtsbehörde',
        'Erst wenn bei einem Kunden ein Schaden nachgewiesen ist'
      ],
      loesung: 1,
      erklaerung: 'Eine Verletzung des Schutzes personenbezogener Daten ist unverzüglich und möglichst binnen 72 Stunden, nachdem sie dem Verantwortlichen bekannt wurde, der zuständigen Aufsichtsbehörde zu melden, es sei denn, sie führt voraussichtlich nicht zu einem Risiko für die Betroffenen; eine spätere Meldung ist zu begründen (Art. 33 Abs. 1 DSGVO). Bei voraussichtlich hohem Risiko sind auch die betroffenen Personen zu benachrichtigen (Art. 34 DSGVO). Eine Verschlüsselung der Festplatte hätte das Risiko erheblich gesenkt (Art. 32 DSGVO).'
    },
    {
      nr: 29, thema: 'datenschutz', typ: 'einfach',
      text: 'In der Spreetakt Software UG sind über 100 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt. Die Geschäftsführung prüft, ob sie einen Datenschutzbeauftragten benennen muss.',
      frage: 'Welche der folgenden Aussagen zum betrieblichen Datenschutzbeauftragten trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Datenschutzbeauftragter muss erst ab 500 Beschäftigten benannt werden.',
        'Die Spreetakt Software UG muss einen Datenschutzbeauftragten benennen; das kann ein Beschäftigter oder ein externer Dienstleister sein, der bei seiner Aufgabe keinen Weisungen unterliegt.',
        'Datenschutzbeauftragter muss immer ein Geschäftsführer des Unternehmens sein.',
        'Der Datenschutzbeauftragte wird vom Betriebsrat gewählt und ist an dessen Weisungen gebunden.',
        'Der Datenschutzbeauftragte ist anstelle des Unternehmens für die Einhaltung des Datenschutzes verantwortlich.'
      ],
      loesung: 2,
      erklaerung: 'Ein Datenschutzbeauftragter ist zu benennen, soweit in der Regel mindestens 20 Personen ständig mit der automatisierten Verarbeitung personenbezogener Daten beschäftigt sind (§ 38 Abs. 1 BDSG). Er wird aufgrund seiner Fachkunde benannt und kann Beschäftigter oder externer Dienstleister sein (Art. 37 Abs. 5 und 6 DSGVO). Bei der Erfüllung seiner Aufgaben ist er weisungsfrei (Art. 38 Abs. 3 DSGVO); Interessenkonflikte, etwa bei der Geschäftsführung, sind zu vermeiden (Art. 38 Abs. 6 DSGVO). Er berät und überwacht (Art. 39 DSGVO), verantwortlich bleibt das Unternehmen (Art. 24 DSGVO).'
    },
    {
      nr: 30, thema: 'umweltschutz', typ: 'mehrfach',
      text: 'Die Spreetakt Software UG möchte ihre IT umweltfreundlicher gestalten („Green IT“) und sammelt Vorschläge.',
      frage: 'Welche der folgenden Maßnahmen sind **nicht** geeignet, den Energie- und Ressourcenverbrauch der IT zu senken?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** **nicht** geeigneten Maßnahmen in die Kästchen ein.',
      optionen: [
        'Virtualisierung und Zusammenlegung von Servern',
        'Austausch funktionsfähiger Notebooks jedes Jahr gegen neue Modelle',
        'Aktivierung von Energiesparfunktionen und automatischem Standby',
        'Betrieb aller Testserver rund um die Uhr, obwohl sie nur tagsüber genutzt werden',
        'Kauf energieeffizienter Geräte mit langer Ersatzteilversorgung',
        'Weiterverwendung oder Aufbereitung ausgemusterter Geräte'
      ],
      loesung: [2, 4],
      erklaerung: 'Green IT bezeichnet den energie- und ressourcenschonenden Einsatz von Informationstechnik über den gesamten Lebenszyklus von der Herstellung über die Nutzung bis zur Entsorgung. Weil die Herstellung von Geräten einen großen Teil der Umweltbelastung verursacht, schont eine lange Nutzungsdauer Ressourcen; nicht benötigte Server sollten abgeschaltet werden. Für größere Rechenzentren schreibt das Energieeffizienzgesetz (EnEfG) Effizienzanforderungen vor; Altgeräte sind nach dem Elektro- und Elektronikgerätegesetz (ElektroG) zu entsorgen.'
    }
  ]
});
