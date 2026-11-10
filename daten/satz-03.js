// Übungssatz 3 – eigene Aufgaben im Stil der IHK-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-03',
  titel: 'Übungssatz 3',
  untertitel: 'Rheinpuls IT-Systeme GmbH',
  ausgangssituation:
    'Die Rheinpuls IT-Systeme GmbH ist ein IT-Dienstleistungsunternehmen mit Sitz in Koblenz. Sie entwickelt Cloud-Lösungen für mittelständische Unternehmen und betreut deren IT-Infrastruktur. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 5, bis: 7,
      text: 'Die Rheinpuls IT-Systeme GmbH bildet jedes Jahr Fachinformatikerinnen und Fachinformatiker aus. Ausbildungsleiterin ist Carolin Vogel. Zu den neuen Auszubildenden gehört der 17-jährige Elias Ayhan.'
    },
    {
      von: 8, bis: 10,
      text: 'Bei der Rheinpuls IT-Systeme GmbH besteht ein Betriebsrat. Das Unternehmen ist Mitglied im Arbeitgeberverband und an den Tarifvertrag gebunden.'
    },
    {
      von: 13, bis: 15,
      text: 'Die Fachkraft für Arbeitssicherheit Jens Kohler führt für alle neuen Mitarbeitenden und Auszubildenden eine Unterweisung zu Arbeitssicherheit und Erster Hilfe durch.'
    },
    {
      von: 18, bis: 19,
      text: 'Die Rheinpuls IT-Systeme GmbH arbeitet eng mit der Berger & Konrad Datentechnik KG zusammen. Außerdem gründet sie gemeinsam mit dem IT-Berater Pascal Nowak eine Tochtergesellschaft, die Rheinpuls Cloud GmbH.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Die Rheinpuls IT-Systeme GmbH setzt zur Leistungserstellung verschiedene Produktionsfaktoren ein.',
      frage: 'Welcher der folgenden Produktionsfaktoren ist ein Betriebsmittel?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Produktionsfaktor in das Kästchen ein.',
      optionen: [
        'Das Speziallötzinn, das bei der Reparatur von Platinen verbraucht wird',
        'Der Serverschrank im Rechenzentrum',
        'Die Arbeitsleistung der Servicetechnikerin',
        'Das von den Gesellschaftern eingezahlte Stammkapital',
        'Die für die Montage benötigten Kabelbinder'
      ],
      loesung: 2,
      erklaerung: 'Die betrieblichen Produktionsfaktoren nach Gutenberg sind Betriebsmittel (langlebige Güter wie Gebäude, Maschinen und Anlagen, hier der Serverschrank), Werkstoffe (verbrauchte Roh-, Hilfs- und Betriebsstoffe wie Lötzinn und Kabelbinder) und die menschliche Arbeitsleistung. Kapital ist ein volkswirtschaftlicher Produktionsfaktor.'
    },
    {
      nr: 2, thema: 'wirtschaft-grundlagen', typ: 'mehrfach',
      text: 'Die Rheinpuls IT-Systeme GmbH betreut Kunden aus unterschiedlichen Wirtschaftsbereichen.',
      frage: 'Welche der folgenden Unternehmen gehören zum sekundären (produzierenden) Wirtschaftssektor?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Unternehmen in die Kästchen ein.',
      optionen: [
        'Spedition Nordhaus e. K.',
        'Fensterbau Reimann GmbH',
        'Weinbaubetrieb Halbeck',
        'Kunststoffwerk Lahnstein GmbH',
        'Unternehmensberatung Sander & Co.',
        'Fischzucht Moselgrund'
      ],
      loesung: [2, 4],
      erklaerung: 'Der sekundäre Sektor (produzierendes Gewerbe) umfasst Industrie, Handwerk und Bau, die Rohstoffe weiterverarbeiten (Fensterbau, Kunststoffwerk). Zur Urerzeugung des primären Sektors gehören Weinbau und Fischzucht, zu den Dienstleistungen des tertiären Sektors Spedition und Beratung.'
    },
    {
      nr: 3, thema: 'konjunktur', typ: 'einfach',
      text: 'In einer längeren Rezession sinkt die gesamtwirtschaftliche Nachfrage. Der Staat will mit einer antizyklischen Fiskalpolitik gegensteuern.',
      frage: 'Welche der folgenden Maßnahmen ist geeignet, die Konjunktur in einer Rezession zu beleben?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Erhöhung der staatlichen Investitionen in Verkehrswege und Schulen',
        'Anhebung der Einkommensteuer',
        'Abbau der Staatsverschuldung durch Kürzung öffentlicher Ausgaben',
        'Erhöhung der Mehrwertsteuer',
        'Bildung zusätzlicher Rücklagen im Staatshaushalt'
      ],
      loesung: 1,
      erklaerung: 'Antizyklische Fiskalpolitik nach Keynes, Grundlage ist das Stabilitäts- und Wachstumsgesetz (§ 1 StabG): In der Rezession erhöht der Staat seine Ausgaben (Deficit Spending) und senkt Steuern, um die Nachfrage zu stärken. Steuererhöhungen und Ausgabenkürzungen dämpfen die Nachfrage zusätzlich und gehören in die Hochkonjunktur.'
    },
    {
      nr: 4, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Die Geschäftsleitung der Rheinpuls IT-Systeme GmbH legt für das nächste Geschäftsjahr mehrere Ziele fest und prüft, wie sich diese gegenseitig beeinflussen.',
      frage: 'In welcher Zielbeziehung stehen die Ziele „Erhöhung des Servicepersonals für einen 24-Stunden-Support“ und „Senkung der Personalkosten“ zueinander?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Zielbeziehung in das Kästchen ein.',
      optionen: [
        'Zielharmonie (komplementäre Ziele)',
        'Zielkonflikt (konkurrierende Ziele)',
        'Zielneutralität (indifferente Ziele)',
        'Zielidentität',
        'Zielhierarchie'
      ],
      loesung: 2,
      erklaerung: 'Mehr Servicepersonal erhöht die Personalkosten, das eine Ziel behindert also das andere: Es liegt ein Zielkonflikt (konkurrierende Ziele) vor. Bei Zielharmonie fördern sich die Ziele gegenseitig, bei Zielneutralität beeinflussen sie sich nicht.'
    },
    {
      nr: 5, thema: 'ausbildung', typ: 'einfach',
      text: 'Der Auszubildende Fabian Reuter hat seinen letzten Prüfungsteil bereits vor dem im Ausbildungsvertrag vereinbarten Ende abgelegt. Frau Vogel erläutert, wann ein Berufsausbildungsverhältnis endet.',
      frage: 'Welche der folgenden Aussagen zum Ende des Berufsausbildungsverhältnisses trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Das Berufsausbildungsverhältnis …',
      optionen: [
        'endet ausnahmslos mit dem im Ausbildungsvertrag vereinbarten Zeitpunkt.',
        'endet bei Bestehen der Abschlussprüfung vor Ablauf der Ausbildungszeit mit der Bekanntgabe des Prüfungsergebnisses durch den Prüfungsausschuss.',
        'verlängert sich bei Nichtbestehen der Abschlussprüfung automatisch um ein volles Jahr.',
        'geht nach bestandener Prüfung stets unmittelbar in ein unbefristetes Arbeitsverhältnis über.',
        'kann von der oder dem Auszubildenden nach der Probezeit jederzeit fristlos gekündigt werden.'
      ],
      loesung: 2,
      erklaerung: '§ 21 Abs. 2 BBiG: Bestehen Auszubildende die Abschlussprüfung vor Ablauf der Ausbildungszeit, endet das Ausbildungsverhältnis mit der Bekanntgabe des Ergebnisses. Bei Nichtbestehen verlängert es sich auf Verlangen bis zur nächsten Wiederholungsprüfung, höchstens um ein Jahr (§ 21 Abs. 3 BBiG). Eine Übernahmepflicht besteht nicht.'
    },
    {
      nr: 6, thema: 'ausbildung', typ: 'mehrfach',
      text: 'Frau Vogel bespricht mit den neuen Auszubildenden ihre Pflichten aus dem Berufsausbildungsverhältnis.',
      frage: 'Welche der folgenden Pflichten treffen die Auszubildenden nach § 13 BBiG?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Pflichten in die Kästchen ein.',
      optionen: [
        'Die für die Ausbildung erforderlichen Ausbildungsmittel kostenlos zur Verfügung stellen',
        'Die im Rahmen der Ausbildung übertragenen Aufgaben sorgfältig ausführen und den Weisungen folgen',
        'Den schriftlichen oder elektronischen Ausbildungsnachweis (Berichtsheft) führen',
        'Für die Teilnahme am Berufsschulunterricht und an Prüfungen freistellen',
        'Eine angemessene Ausbildungsvergütung zahlen',
        'Nach bestandener Prüfung unbefristet übernehmen'
      ],
      loesung: [2, 3],
      erklaerung: '§ 13 BBiG zählt die Pflichten der Auszubildenden auf, u. a. die Lern- und Sorgfaltspflicht, die Weisungsgebundenheit, das Führen des Ausbildungsnachweises und die Verschwiegenheit. Ausbildungsmittel kostenlos bereitstellen, freistellen und die Vergütung zahlen sind Pflichten des Ausbildenden (§§ 14, 15, 17 BBiG); eine Übernahmepflicht gibt es nicht.'
    },
    {
      nr: 7, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Der 17-jährige Auszubildende Elias Ayhan fragt, welche Arbeitszeiten für ihn gelten.',
      kasten: {
        titel: '§ 8 und § 14 JArbSchG (Auszug)',
        absaetze: [
          '§ 8 Abs. 1: Jugendliche dürfen nicht mehr als acht Stunden täglich und nicht mehr als 40 Stunden wöchentlich beschäftigt werden.',
          '§ 14 Abs. 1: Jugendliche dürfen nur in der Zeit von 6 bis 20 Uhr beschäftigt werden.'
        ]
      },
      frage: 'Welche der folgenden Regelungen des Jugendarbeitsschutzgesetzes gilt für Herrn Ayhan?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Regelung in das Kästchen ein.',
      optionen: [
        'Er darf an einzelnen Tagen bis zu zehn Stunden beschäftigt werden, wenn die 40-Stunden-Woche eingehalten wird.',
        'Er darf höchstens acht Stunden täglich und 40 Stunden wöchentlich beschäftigt werden und grundsätzlich nicht nach 20 Uhr.',
        'Er darf regelmäßig bis 23 Uhr arbeiten, wenn er dafür einen Freizeitausgleich erhält.',
        'Für ihn gilt wie für Erwachsene eine werktägliche Höchstarbeitszeit von acht, verlängerbar auf zehn Stunden.',
        'Er darf bis zu 48 Stunden wöchentlich beschäftigt werden.'
      ],
      loesung: 2,
      erklaerung: '§ 8 Abs. 1 JArbSchG: höchstens 8 Stunden täglich und 40 Stunden wöchentlich. § 14 Abs. 1 JArbSchG: Beschäftigung nur zwischen 6 und 20 Uhr (Nachtruhe). Die Zehn-Stunden-Grenze und die 48-Stunden-Woche gelten nur für erwachsene Arbeitnehmer nach dem Arbeitszeitgesetz.'
    },
    {
      nr: 8, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Auszubildenden möchten wissen, welche Aufgaben der Betriebsrat im Unternehmen hat.',
      frage: 'Welche der folgenden Aufgaben gehört nach § 80 BetrVG zu den allgemeinen Aufgaben des Betriebsrats?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aufgabe in das Kästchen ein.',
      optionen: [
        'Er bestimmt die Höhe der Löhne und Gehälter eigenständig.',
        'Er überwacht, dass die zugunsten der Arbeitnehmer geltenden Gesetze, Tarifverträge und Betriebsvereinbarungen eingehalten werden.',
        'Er entscheidet allein über Einstellungen und Entlassungen.',
        'Er legt die Verkaufspreise für die Produkte des Unternehmens fest.',
        'Er führt die laufenden Geschäfte des Unternehmens.'
      ],
      loesung: 2,
      erklaerung: '§ 80 Abs. 1 BetrVG nennt als allgemeine Aufgaben u. a. die Überwachung der Einhaltung der zugunsten der Arbeitnehmer geltenden Gesetze, Tarifverträge und Betriebsvereinbarungen sowie die Förderung der Gleichstellung. Unternehmerische Entscheidungen wie Preise und Geschäftsführung trifft der Arbeitgeber.'
    },
    {
      nr: 9, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Geschäftsleitung möchte eine neue Mitarbeiterin einstellen. Im Betrieb sind in der Regel mehr als 20 wahlberechtigte Arbeitnehmer beschäftigt.',
      frage: 'Welche der folgenden Aussagen zur Beteiligung des Betriebsrats bei der Einstellung trifft nach § 99 BetrVG zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Betriebsrat muss der Einstellung vorher zustimmen und kann die Zustimmung nur aus den im Gesetz genannten Gründen verweigern.',
        'Der Betriebsrat kann die Einstellung ohne Angabe von Gründen dauerhaft verhindern.',
        'Einstellungen gehören allein zu den Aufgaben des Betriebsrats.',
        'Der Betriebsrat muss über erfolgte Einstellungen nur nachträglich informiert werden, ein Zustimmungsrecht hat er nicht.',
        'Die Zustimmung des Betriebsrats ist nur bei der Einstellung von Führungskräften erforderlich.'
      ],
      loesung: 1,
      erklaerung: '§ 99 BetrVG: In Unternehmen mit in der Regel mehr als 20 wahlberechtigten Arbeitnehmern hat der Betriebsrat bei Einstellungen, Ein- und Umgruppierungen sowie Versetzungen ein Mitbestimmungsrecht. Er muss vorher unterrichtet werden und kann die Zustimmung nur aus den in § 99 Abs. 2 BetrVG genannten Gründen verweigern.'
    },
    {
      nr: 10, thema: 'tarifrecht', typ: 'einfach',
      text: 'Zwischen der Gewerkschaft und dem Arbeitgeberverband kommt es zu einer Tarifauseinandersetzung. Frau Vogel erklärt den Auszubildenden die Regeln des Arbeitskampfes.',
      frage: 'Welche der folgenden Aussagen zum Arbeitskampf trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein zulässiges Kampfmittel der Arbeitgeberseite ist die Aussperrung.',
        'Während der Laufzeit eines Tarifvertrags darf jederzeit gestreikt werden.',
        'Ein Streik ist auch ohne vorherige Urabstimmung und ohne gescheiterte Verhandlungen der Regelfall.',
        'Der Streik ist das Kampfmittel des Arbeitgeberverbandes.',
        'Eine Schlichtung findet grundsätzlich erst nach einem Streik statt.'
      ],
      loesung: 1,
      erklaerung: 'Die Koalitions- und Tarifautonomie ist durch Art. 9 Abs. 3 GG geschützt. Die Aussperrung ist das Kampfmittel der Arbeitgeberseite, der Streik das der Gewerkschaften. Während der Laufzeit eines Tarifvertrags gilt die Friedenspflicht. Der Streik ist das letzte Mittel (Ultima Ratio); üblich ist der Ablauf Verhandlungen, Scheitern, ggf. Schlichtung, Urabstimmung nach der Gewerkschaftssatzung, Streik.'
    },
    {
      nr: 11, thema: 'arbeitsvertrag', typ: 'datum',
      text: 'Der Netzwerkadministrator Thomas Reichert (49 Jahre) ist seit dem 01.07.2018 im Unternehmen beschäftigt. Die ordentliche, betriebsbedingte Kündigung durch den Arbeitgeber geht ihm am 18.12.2026 zu. Es gilt die gesetzliche Kündigungsfrist.',
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
      frage: 'Mit Ablauf welchen Tages endet das Arbeitsverhältnis von Herrn Reichert?',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '31.03.2027',
      erklaerung: 'Beim Zugang der Kündigung am 18.12.2026 besteht das Arbeitsverhältnis seit dem 01.07.2018, also mehr als 8, aber noch keine 10 Jahre. Nach § 622 Abs. 2 BGB (Stufe „acht Jahre“) gilt daher eine Frist von drei Monaten zum Ende eines Kalendermonats. Vom 18.12.2026 aus drei Monate ergeben den 18.03.2027; das maßgebliche Monatsende ist der 31.03.2027.'
    },
    {
      nr: 12, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Herr Reichert bittet bei seinem Ausscheiden um ein qualifiziertes Arbeitszeugnis.',
      frage: 'Welche der folgenden Aussagen zum qualifizierten Arbeitszeugnis trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Das qualifizierte Arbeitszeugnis …',
      optionen: [
        'enthält ausschließlich Angaben zu Art und Dauer der Beschäftigung.',
        'enthält zusätzlich zu Art und Dauer der Tätigkeit eine Bewertung von Leistung und Verhalten und muss wohlwollend formuliert sein.',
        'darf absichtlich schlechter formuliert werden, um den Arbeitnehmer an einem Wechsel zu hindern.',
        'wird nur auf Verlangen des Arbeitgebers ausgestellt.',
        'muss zwingend den Kündigungsgrund enthalten.'
      ],
      loesung: 2,
      erklaerung: 'Das einfache Zeugnis enthält nur Art und Dauer der Beschäftigung, das qualifizierte Zeugnis zusätzlich die Bewertung von Leistung und Verhalten (§ 109 GewO). Das Zeugnis muss wahr und wohlwollend sein und darf das berufliche Fortkommen nicht unnötig erschweren.'
    },
    {
      nr: 13, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Herr Kohler erklärt die im Unternehmen verwendeten Sicherheitszeichen.',
      frage: 'Wie ist ein Verbotszeichen nach den Arbeitsstättenrichtlinien (ASR A1.3) gestaltet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Beschreibung in das Kästchen ein.',
      einleitung: 'Ein Verbotszeichen ist …',
      optionen: [
        'dreieckig mit gelbem Grund und schwarzem Rand.',
        'rund mit weißem Grund, rotem Rand und einem roten diagonalen Balken.',
        'rund mit blauem Grund und weißem Symbol.',
        'quadratisch mit grünem Grund und weißem Symbol.',
        'quadratisch mit rotem Grund und weißem Symbol.'
      ],
      loesung: 2,
      erklaerung: 'Nach der Technischen Regel für Arbeitsstätten ASR A1.3 sind Verbotszeichen rund, haben einen weißen Grund, einen roten Rand und einen roten Querbalken (z. B. „Rauchen verboten“). Gebotszeichen sind rund und blau, Warnzeichen dreieckig und gelb, Rettungszeichen quadratisch und grün, Brandschutzzeichen quadratisch und rot.'
    },
    {
      nr: 14, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Herr Kohler erläutert, wie der Arbeitsschutz im Betrieb organisiert ist.',
      frage: 'Welche der folgenden Aussagen zur Arbeitsschutzorganisation trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Berufsgenossenschaft ist Träger der gesetzlichen Unfallversicherung und erlässt Vorschriften zur Unfallverhütung.',
        'Die Fachkraft für Arbeitssicherheit zahlt die Beiträge zur Unfallversicherung.',
        'Der Betriebsarzt ist für die strafrechtliche Verfolgung von Arbeitsunfällen zuständig.',
        'Für die Sicherheit am Arbeitsplatz ist allein der einzelne Mitarbeiter verantwortlich, nicht der Arbeitgeber.',
        'Die Berufsgenossenschaft stellt die Arbeitsverträge der Beschäftigten aus.'
      ],
      loesung: 1,
      erklaerung: 'Die Berufsgenossenschaften sind Träger der gesetzlichen Unfallversicherung; sie erlassen Unfallverhütungsvorschriften (DGUV) und überwachen den Arbeitsschutz. Die Fachkraft für Arbeitssicherheit und der Betriebsarzt beraten den Arbeitgeber (§§ 5, 6 ASiG). Für den Arbeitsschutz ist nach § 3 ArbSchG der Arbeitgeber verantwortlich.'
    },
    {
      nr: 15, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die Auszubildenden fragen Herrn Kohler nach den Regeln zur Ersten Hilfe im Betrieb.',
      frage: 'Welche der folgenden Aussagen zur Ersten Hilfe im Betrieb trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Arbeitgeber muss eine ausreichende Zahl von Beschäftigten zu Ersthelfern ausbilden lassen und für Erste-Hilfe-Material sorgen.',
        'Erste Hilfe ist allein Aufgabe des öffentlichen Rettungsdienstes; der Betrieb trifft keine Vorkehrungen.',
        'Die Kosten der Ersthelfer-Ausbildung tragen die Beschäftigten selbst.',
        'Ein Verbandkasten ist nur in Betrieben mit mehr als 100 Beschäftigten vorgeschrieben.',
        'Jeder Arbeitsunfall muss unabhängig von seiner Schwere sofort der Staatsanwaltschaft gemeldet werden.'
      ],
      loesung: 1,
      erklaerung: 'Nach § 10 ArbSchG und der DGUV Vorschrift 1 muss der Arbeitgeber die Erste Hilfe sicherstellen: ausreichend ausgebildete Ersthelfer (in Verwaltungs- und Handelsbetrieben in der Regel mindestens 5 % der Beschäftigten), Erste-Hilfe-Material und Meldeeinrichtungen. Die Kosten trägt der Arbeitgeber. Bei der Berufsgenossenschaft meldepflichtig sind Unfälle mit mehr als drei Tagen Arbeitsunfähigkeit.'
    },
    {
      nr: 16, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Ein Mitarbeiter verunglückt auf dem direkten Weg von der Wohnung zur Arbeit. Er fragt, wie dieser Unfall abgesichert ist.',
      frage: 'Welche der folgenden Aussagen zur gesetzlichen Unfallversicherung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Beiträge tragen Arbeitgeber und Arbeitnehmer je zur Hälfte.',
        'Auch ein Unfall auf dem direkten Weg zur Arbeit (Wegeunfall) ist versichert; Träger ist die Berufsgenossenschaft und die Beiträge trägt allein der Arbeitgeber.',
        'Träger der gesetzlichen Unfallversicherung ist die Krankenkasse.',
        'Versichert sind nur Unfälle, die in der Mittagspause außerhalb des Betriebs geschehen.',
        'Die Beiträge zur Unfallversicherung trägt allein der Arbeitnehmer.'
      ],
      loesung: 2,
      erklaerung: 'Die gesetzliche Unfallversicherung (SGB VII) versichert Arbeits- und Wegeunfälle sowie Berufskrankheiten. Träger sind die Berufsgenossenschaften; die Beiträge trägt allein der Arbeitgeber.'
    },
    {
      nr: 17, thema: 'sozialversicherung', typ: 'zahl',
      text: 'Die Softwareentwicklerin Nadine Grabowski erhält ein monatliches Bruttogehalt von 4.200,00 EUR. Der Beitragssatz zur gesetzlichen Rentenversicherung beträgt 18,6 %. Arbeitgeber und Arbeitnehmer tragen den Beitrag jeweils zur Hälfte.',
      frage: 'Berechnen Sie den monatlichen Arbeitnehmeranteil zur Rentenversicherung in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 390.6, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Arbeitgeber und Arbeitnehmer tragen den Rentenversicherungsbeitrag je zur Hälfte (§ 168 Abs. 1 Nr. 1 SGB VI). Arbeitnehmeranteil = halber Beitragssatz = 18,6 % ÷ 2 = 9,3 %. 4.200,00 EUR × 9,3 % = 390,60 EUR.'
    },
    {
      nr: 18, thema: 'rechtsformen', typ: 'einfach',
      text: 'Partnerunternehmen der Rheinpuls IT-Systeme GmbH ist die Berger & Konrad Datentechnik KG. Herr Konrad ist dort Kommanditist.',
      frage: 'Welche der folgenden Aussagen zur Kommanditgesellschaft (KG) trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Alle Gesellschafter haften nur bis zur Höhe ihrer Einlage.',
        'Der Kommanditist haftet nur bis zur Höhe seiner im Handelsregister eingetragenen Einlage, der Komplementär haftet unbeschränkt.',
        'Der Kommanditist haftet unbeschränkt, der Komplementär nur mit seiner Einlage.',
        'Die KG ist eine Kapitalgesellschaft mit einem Mindestkapital von 25.000,00 EUR.',
        'Zur Geschäftsführung ist allein der Kommanditist berechtigt.'
      ],
      loesung: 2,
      erklaerung: 'Die KG ist eine Personengesellschaft mit mindestens einem Komplementär (Vollhafter: unbeschränkte Haftung, Geschäftsführung) und mindestens einem Kommanditisten (Teilhafter: Haftung begrenzt auf die eingetragene Einlage, von der Geschäftsführung grundsätzlich ausgeschlossen; §§ 161 ff. HGB). Ein Mindestkapital gibt es nicht.'
    },
    {
      nr: 19, thema: 'rechtsformen', typ: 'zahl',
      text: 'Die neu gegründete Rheinpuls Cloud GmbH hat ein Stammkapital von 100.000,00 EUR. Davon hält die Rheinpuls IT-Systeme GmbH 70.000,00 EUR und Herr Nowak 30.000,00 EUR. Im ersten Geschäftsjahr erzielt die Rheinpuls Cloud GmbH einen Gewinn von 50.000,00 EUR, den die Gesellschafter vollständig ausschütten. Für die Gewinnverteilung ist keine vom Gesetz abweichende Regelung vereinbart.',
      frage: 'Berechnen Sie den Gewinnanteil der Rheinpuls IT-Systeme GmbH in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 35000, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Ohne abweichende Regelung wird der Gewinn einer GmbH nach dem Verhältnis der Geschäftsanteile verteilt (§ 29 Abs. 3 GmbHG). Die Rheinpuls IT-Systeme GmbH hält 70.000,00 EUR von 100.000,00 EUR Stammkapital, also 70 %. 70 % von 50.000,00 EUR = 35.000,00 EUR.'
    },
    {
      nr: 20, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Rheinpuls IT-Systeme GmbH weist für das abgelaufene Geschäftsjahr einen Jahresüberschuss (Gewinn) von 42.000,00 EUR aus. Das Eigenkapital beträgt 350.000,00 EUR.',
      frage: 'Berechnen Sie die Eigenkapitalrentabilität in Prozent.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie auf eine Nachkommastelle.',
      loesung: 12, nachkommastellen: 1, einheit: '%',
      erklaerung: 'Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100 = 42.000,00 EUR ÷ 350.000,00 EUR × 100 = 12,0 %. Die Kennzahl zeigt, wie sich das eingesetzte Eigenkapital im Geschäftsjahr verzinst hat.'
    },
    {
      nr: 21, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'Die Rheinpuls IT-Systeme GmbH besetzt eine freie Stelle und beachtet dabei das Allgemeine Gleichbehandlungsgesetz (AGG).',
      frage: 'Welche der folgenden Vorgehensweisen bei der Personalauswahl entspricht dem AGG?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Vorgehensweise in das Kästchen ein.',
      optionen: [
        'Die Stelle wird ausschließlich an Bewerber unter 35 Jahren vergeben.',
        'Die Auswahl der Bewerberinnen und Bewerber erfolgt ausschließlich anhand ihrer fachlichen Qualifikation und Eignung.',
        'In der Stellenanzeige wird gezielt nur eine „junge, deutsche Mitarbeiterin“ gesucht.',
        'Bewerber werden nach ihrer Religionszugehörigkeit vorsortiert.',
        'Schwerbehinderte Bewerber werden grundsätzlich nicht zum Vorstellungsgespräch eingeladen.'
      ],
      loesung: 2,
      erklaerung: 'Das AGG verbietet Benachteiligungen wegen der ethnischen Herkunft, des Geschlechts, der Religion oder Weltanschauung, einer Behinderung, des Alters oder der sexuellen Identität (§ 1 AGG). Zulässig ist die Auswahl nach der fachlichen Eignung; die übrigen Vorgehensweisen sind unzulässige Benachteiligungen.'
    },
    {
      nr: 22, thema: 'rechtsquellen', typ: 'einfach',
      text: 'Die Mitarbeiterin Sabine Horn hält ihre Kündigung für unwirksam und möchte dagegen klagen.',
      frage: 'Welches Gericht ist für ihre Kündigungsschutzklage zuständig?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Gericht in das Kästchen ein.',
      optionen: [
        'Das Amtsgericht',
        'Das Arbeitsgericht',
        'Das Sozialgericht',
        'Das Verwaltungsgericht',
        'Das Landgericht'
      ],
      loesung: 2,
      erklaerung: 'Für Streitigkeiten aus dem Arbeitsverhältnis, insbesondere Kündigungsschutzklagen, sind die Arbeitsgerichte zuständig (§ 2 ArbGG). Die Klage ist innerhalb von drei Wochen ab Zugang der Kündigung zu erheben (§ 4 KSchG). Die Sozialgerichte entscheiden über Sozialversicherungsstreitigkeiten.'
    },
    {
      nr: 23, thema: 'organisation', typ: 'einfach',
      text: 'Für ein großes Kundenprojekt richtet die Rheinpuls IT-Systeme GmbH eine Matrixorganisation ein.',
      frage: 'Welches der folgenden Merkmale kennzeichnet die Matrixorganisation?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Merkmal in das Kästchen ein.',
      optionen: [
        'Jede Stelle ist genau einer übergeordneten Instanz unterstellt (Einheit der Auftragserteilung).',
        'Jede Stelle ist zwei Vorgesetzten unterstellt, z. B. einem Fach- und einem Projektvorgesetzten (Mehrfachunterstellung).',
        'Es gibt keine Hierarchieebenen; alle Mitarbeiter sind gleichgestellt.',
        'Stabsstellen haben umfassende Weisungsbefugnis gegenüber den Linienstellen.',
        'Die Leitung wird vollständig an externe Dienstleister übertragen.'
      ],
      loesung: 2,
      erklaerung: 'Die Matrixorganisation ist ein Mehrliniensystem: Die Kompetenzen werden nach Funktionen (senkrecht) und nach Objekten oder Projekten (waagerecht) aufgeteilt, sodass jede Stelle zwei Vorgesetzten untersteht. Vorteil sind direkte Kommunikationswege und Spezialisierung, Nachteil mögliche Kompetenzkonflikte. Die Einfachunterstellung kennzeichnet dagegen das Einliniensystem.'
    },
    {
      nr: 24, thema: 'weiterbildung', typ: 'zuordnung',
      text: 'Mehrere Beschäftigte der Rheinpuls IT-Systeme GmbH planen Weiterbildungen.',
      frage: 'Welche der folgenden Formen der beruflichen Bildung sind den nachstehenden Vorhaben zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Form in das Kästchen ein.',
      optionenTitel: 'Formen der beruflichen Bildung',
      optionen: [
        'Anpassungsfortbildung',
        'Aufstiegsfortbildung',
        'Umschulung'
      ],
      itemsTitel: 'Vorhaben',
      items: [
        { text: 'Ein Systemadministrator besucht einen Lehrgang zur neuen Version der eingesetzten Virtualisierungssoftware.', loesung: 1 },
        { text: 'Eine Fachinformatikerin bereitet sich auf die IHK-Fortbildungsprüfung zum Bachelor Professional vor, um eine Teamleitung zu übernehmen.', loesung: 2 },
        { text: 'Ein gelernter Koch wird nach einem Unfall in einer zweijährigen Maßnahme zum Fachinformatiker ausgebildet.', loesung: 3 }
      ],
      erklaerung: 'Die Anpassungsfortbildung hält die Kenntnisse im ausgeübten Beruf auf dem aktuellen Stand, die Aufstiegsfortbildung (z. B. Fachwirt, Meister, Bachelor Professional) qualifiziert für höherwertige Tätigkeiten (§ 1 Abs. 4 BBiG). Die Umschulung befähigt zu einer anderen beruflichen Tätigkeit (§ 1 Abs. 5 BBiG).'
    },
    {
      nr: 25, thema: 'zusammenschluesse', typ: 'einfach',
      text: 'Die Geschäftsleitung befasst sich mit verschiedenen Formen von Unternehmenszusammenschlüssen und Absprachen.',
      frage: 'Welche der folgenden Aussagen beschreibt ein Kartell zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Mehrere Unternehmen verlieren ihre rechtliche Selbstständigkeit und bilden ein einziges neues Unternehmen.',
        'Rechtlich selbstständig bleibende Unternehmen stimmen ihr Marktverhalten ab (z. B. Preise), was grundsätzlich verboten ist.',
        'Ein Unternehmen wird von einem anderen vollständig aufgekauft und aufgelöst.',
        'Mehrere rechtlich selbstständige Unternehmen werden unter einheitlicher Leitung zusammengefasst.',
        'Ein Einzelunternehmen wird in eine GmbH umgewandelt.'
      ],
      loesung: 2,
      erklaerung: 'Beim Kartell bleiben die Unternehmen rechtlich und wirtschaftlich selbstständig, stimmen aber ihr Marktverhalten ab; solche Absprachen sind nach dem GWB und dem EU-Recht grundsätzlich verboten. Beim Konzern bleiben die Unternehmen rechtlich selbstständig, stehen aber unter einheitlicher Leitung. Bei der Fusion verschmelzen Unternehmen zu einer Einheit.'
    },
    {
      nr: 26, thema: 'unternehmensgruendung', typ: 'einfach',
      text: 'Ein ehemaliger Mitarbeiter der Rheinpuls IT-Systeme GmbH möchte ein eigenes IT-Unternehmen gründen und prüft mögliche Standorte.',
      frage: 'Welcher der folgenden Standortfaktoren ist ein weicher Standortfaktor?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Standortfaktor in das Kästchen ein.',
      optionen: [
        'Höhe der Gewerbesteuer (Hebesatz)',
        'Verkehrsanbindung an die Autobahn',
        'Freizeit- und Kulturangebot sowie das Image der Region',
        'Verfügbarkeit von leistungsfähigem Breitband-Internet',
        'Nähe zu Absatzmärkten und Kunden'
      ],
      loesung: 3,
      erklaerung: 'Harte Standortfaktoren sind messbar und unmittelbar kostenwirksam (Steuern, Verkehrsanbindung, Infrastruktur, Arbeitskräfte, Absatzmärkte). Weiche Standortfaktoren sind schwer messbar und wirken indirekt, z. B. Freizeitwert, Kultur, Image und Wohnqualität.'
    },
    {
      nr: 27, thema: 'entgelt', typ: 'zahl',
      text: 'Der Servicetechniker Deniz Öztürk hat im Monat Oktober 160 Stunden gearbeitet. Sein Stundenlohn beträgt 22,50 EUR. Zusätzlich erhält er eine Leistungszulage von 150,00 EUR.',
      frage: 'Berechnen Sie das Bruttoentgelt von Herrn Öztürk für den Monat Oktober in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 3750, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Bruttoentgelt = Stundenlohn × geleistete Stunden + Zulage = 22,50 EUR × 160 + 150,00 EUR = 3.600,00 EUR + 150,00 EUR = 3.750,00 EUR.'
    },
    {
      nr: 28, thema: 'datenschutz', typ: 'einfach',
      text: 'Ein Mitarbeiter erhält eine E-Mail, die angeblich von der Hausbank stammt und ihn auffordert, über einen Link umgehend seine Zugangsdaten zu bestätigen.',
      frage: 'Welche der folgenden Reaktionen ist richtig?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Reaktion in das Kästchen ein.',
      optionen: [
        'Er klickt auf den Link und gibt seine Zugangsdaten ein, weil die Nachricht dringend wirkt.',
        'Er klickt weder auf den Link noch gibt er Daten ein, sondern löscht die E-Mail bzw. meldet sie der IT-Abteilung.',
        'Er leitet die E-Mail an alle Kollegen weiter, damit diese ebenfalls ihre Daten bestätigen.',
        'Er antwortet mit seinen Zugangsdaten direkt auf die E-Mail.',
        'Er deaktiviert den Virenschutz, um den Link gefahrlos öffnen zu können.'
      ],
      loesung: 2,
      erklaerung: 'Es handelt sich um eine typische Phishing-Mail. Richtiges Verhalten: keine Links anklicken, keine Zugangsdaten preisgeben, die Nachricht löschen oder der IT-Abteilung melden. Seriöse Banken fordern niemals per E-Mail zur Eingabe von Zugangsdaten auf. Zu angemessenen technischen und organisatorischen Sicherheitsmaßnahmen ist das Unternehmen auch nach Art. 32 DSGVO verpflichtet.'
    },
    {
      nr: 29, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Rheinpuls IT-Systeme GmbH achtet beim Einkauf von Bürogeräten auf Umweltzeichen.',
      frage: 'Wofür steht das Umweltzeichen „Der Blaue Engel“?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Es garantiert die Einhaltung europäischer Sicherheitsvorschriften.',
        'Es kennzeichnet besonders umweltfreundliche und ressourcenschonende Produkte und Dienstleistungen.',
        'Es weist auf fair gehandelte Rohstoffe aus Entwicklungsländern hin.',
        'Es bestätigt, dass ein Lebensmittel aus kontrolliert biologischem Anbau stammt.',
        'Es zeigt an, dass ein Produkt elektrische Geräte enthält, die nicht in den Hausmüll gehören.'
      ],
      loesung: 2,
      erklaerung: 'Der Blaue Engel ist das älteste Umweltzeichen Deutschlands und kennzeichnet besonders umweltfreundliche Produkte und Dienstleistungen (z. B. geringer Energieverbrauch, recyclingfähig). Das CE-Zeichen steht für die Einhaltung von EU-Sicherheitsanforderungen, das Fairtrade-Siegel für fairen Handel, das Bio-Siegel für ökologischen Landbau.'
    },
    {
      nr: 30, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Rheinpuls IT-Systeme GmbH verkauft Zubehör über einen Onlineshop auch an Privatkunden und versendet die Ware in Kartons. Sie informiert sich über ihre Pflichten nach dem Verpackungsgesetz (VerpackG).',
      frage: 'Welche der folgenden Aussagen zum Verpackungsgesetz trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Wer mit Ware befüllte Verpackungen an private Endverbraucher in Verkehr bringt, muss sich im Verpackungsregister registrieren und an einem dualen System beteiligen.',
        'Verkaufsverpackungen dürfen ausschließlich über den Restmüll entsorgt werden.',
        'Das Verpackungsgesetz gilt nur für Elektrogeräte.',
        'Die Rücknahme und Verwertung von Verpackungen ist allein Aufgabe der Kommunen.',
        'Private Endverbraucher müssen sich für die Entsorgung von Verpackungen kostenpflichtig registrieren.'
      ],
      loesung: 1,
      erklaerung: 'Das Verpackungsgesetz verpflichtet Hersteller und Vertreiber, sich vor dem Inverkehrbringen verpackter Waren im Verpackungsregister LUCID zu registrieren und sich an einem dualen System zu beteiligen (Lizenzierung), das Sammlung und Verwertung organisiert. Ziel sind die Vermeidung und das Recycling von Verpackungsabfällen (Produktverantwortung, Verursacherprinzip).'
    }
  ]
});
