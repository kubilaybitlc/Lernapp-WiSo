// Übungssatz 4 – eigene Aufgaben im Stil der IHK-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-04',
  titel: 'Übungssatz 4',
  untertitel: 'Alpenblick Systemhaus GmbH',
  ausgangssituation:
    'Die Alpenblick Systemhaus GmbH mit Sitz in Kempten (Allgäu) plant, installiert und betreut Netzwerke und Arbeitsplatz-IT für Unternehmen, Arztpraxen und Kommunen in der Region. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 4,
      text: 'Die Alpenblick Systemhaus GmbH bildet Fachinformatikerinnen und Fachinformatiker für Systemintegration sowie Kaufleute für IT-System-Management aus. Ausbildungsleiter ist Johannes Kiechle.'
    },
    {
      von: 5, bis: 7,
      text: 'Die Alpenblick Systemhaus GmbH beschäftigt derzeit 190 Arbeitnehmerinnen und Arbeitnehmer. Es besteht ein Betriebsrat mit sieben Mitgliedern, Vorsitzende ist Monika Zengerle.'
    },
    {
      von: 8, bis: 9,
      text: 'Die Alpenblick Systemhaus GmbH ist Mitglied im Arbeitgeberverband und an die Tarifverträge gebunden, die dieser mit der zuständigen Gewerkschaft abgeschlossen hat.'
    },
    {
      von: 14, bis: 16,
      text: 'Die Geschäftsführerin Barbara Allgaier lässt sich von der Fachkraft für Arbeitssicherheit Tobias Rauch zu ihren Pflichten im Arbeitsschutz beraten.'
    },
    {
      von: 20, bis: 21,
      text: 'Die Alpenblick Systemhaus GmbH ist im Handelsregister des Amtsgerichts Kempten (Allgäu) eingetragen. Alleinige Geschäftsführerin ist Barbara Allgaier.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'ausbildung', typ: 'einfach',
      text: 'Herr Kiechle prüft den Entwurf eines Ausbildungsvertrags für die künftige Auszubildende Hannah Bader. Der Entwurf enthält mehrere Vereinbarungen.',
      frage: 'Welche der folgenden Vereinbarungen ist nach § 12 BBiG nichtig?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Vereinbarung in das Kästchen ein.',
      optionen: [
        'Die Probezeit beträgt drei Monate.',
        'Frau Bader erhält 30 Werktage Urlaub im Kalenderjahr.',
        'Die Ausbildungsvergütung liegt in jedem Ausbildungsjahr über der gesetzlichen Mindestvergütung.',
        'Bricht Frau Bader die Ausbildung vorzeitig ab, muss sie die Kosten für ihre Ausbildung, z. B. Lehrgangs- und Prüfungsgebühren, an die Alpenblick Systemhaus GmbH erstatten.',
        'Frau Bader und die Alpenblick Systemhaus GmbH dürfen in den letzten sechs Monaten der Ausbildung vereinbaren, dass Frau Bader nach der Prüfung in ein Arbeitsverhältnis übernommen wird.'
      ],
      loesung: 4,
      erklaerung: '§ 12 Abs. 2 Nr. 1 BBiG: Nichtig ist eine Vereinbarung über die Verpflichtung Auszubildender, für die Berufsausbildung eine Entschädigung zu zahlen; ebenso nichtig sind Vertragsstrafen sowie der Ausschluss oder die Pauschalierung von Schadensersatz (§ 12 Abs. 2 Nr. 2 bis 4 BBiG). Die Kosten der Ausbildung trägt der Ausbildungsbetrieb. Eine Probezeit von einem bis vier Monaten ist zulässig (§ 20 BBiG). Eine Vereinbarung über die Weiterarbeit nach der Ausbildung ist erlaubt, wenn sie innerhalb der letzten sechs Monate des Ausbildungsverhältnisses getroffen wird (§ 12 Abs. 1 Satz 2 BBiG).'
    },
    {
      nr: 2, thema: 'ausbildung', typ: 'einfach',
      text: 'Der Auszubildende Valentin Stölzle hat die Probezeit seit Monaten hinter sich. Statt ihn auszubilden, setzt ihn die Alpenblick Systemhaus GmbH fast nur noch für Kurierfahrten und Lagerarbeiten ein. Er kündigt deshalb aus wichtigem Grund fristlos und findet erst drei Monate später einen neuen Ausbildungsbetrieb.',
      frage: 'Welche der folgenden Aussagen zu einem Schadensersatzanspruch von Herrn Stölzle trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Stölzle kann Schadensersatz verlangen, weil die Alpenblick Systemhaus GmbH den Grund für die Auflösung zu vertreten hat; er muss den Anspruch innerhalb von drei Monaten nach Beendigung des Ausbildungsverhältnisses geltend machen.',
        'Schadensersatzansprüche sind bei Berufsausbildungsverhältnissen gesetzlich ausgeschlossen.',
        'Ein Schadensersatzanspruch besteht nur, wenn das Ausbildungsverhältnis während der Probezeit gelöst wird.',
        'Herr Stölzle kann seinen Anspruch innerhalb von drei Jahren nach Ende des Ausbildungsverhältnisses geltend machen.',
        'Schadensersatz kann nur die Alpenblick Systemhaus GmbH verlangen, weil Herr Stölzle selbst gekündigt hat.'
      ],
      loesung: 1,
      erklaerung: '§ 23 Abs. 1 BBiG: Wird das Berufsausbildungsverhältnis nach der Probezeit vorzeitig gelöst, können Ausbildende oder Auszubildende Schadensersatz verlangen, wenn die andere Seite den Grund für die Auflösung zu vertreten hat; das gilt nicht bei einer Kündigung wegen Aufgabe der Ausbildung oder Berufswechsels. Der Anspruch erlischt, wenn er nicht innerhalb von drei Monaten nach Beendigung geltend gemacht wird (§ 23 Abs. 2 BBiG). Auszubildenden dürfen nur Aufgaben übertragen werden, die dem Ausbildungszweck dienen (§ 14 Abs. 3 BBiG); der wiederholte Verstoß ist ein wichtiger Grund für eine fristlose Kündigung (§ 22 Abs. 2 Nr. 1 BBiG).'
    },
    {
      nr: 3, thema: 'ausbildung', typ: 'einfach',
      text: 'Der Auszubildende Lukas Hörmann hat seine Ausbildung zum Kaufmann für IT-System-Management am 01.09.2026 begonnen. Im Ausbildungsvertrag ist eine Probezeit von vier Monaten vereinbart. Im Oktober 2026 stellt Herr Kiechle fest, dass Herr Hörmann für den Beruf offensichtlich nicht geeignet ist.',
      frage: 'Welche der folgenden Aussagen zur Kündigung des Berufsausbildungsverhältnisses trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Ausbildungsbetrieb muss in der Probezeit eine Kündigungsfrist von vier Wochen einhalten.',
        'Während der Probezeit kann das Berufsausbildungsverhältnis von beiden Seiten jederzeit ohne Einhalten einer Kündigungsfrist gekündigt werden; die Kündigung muss schriftlich erfolgen.',
        'Eine Kündigung in der Probezeit ist nur wirksam, wenn die IHK zustimmt.',
        'Die Probezeit hätte im Ausbildungsvertrag auch auf sechs Monate festgelegt werden können.',
        'Nach Ablauf der Probezeit kann der Ausbildungsbetrieb ordentlich mit einer Frist von vier Wochen kündigen.'
      ],
      loesung: 2,
      erklaerung: '§ 20 BBiG: Die Probezeit beträgt mindestens einen Monat und höchstens vier Monate. § 22 Abs. 1 BBiG: Während der Probezeit kann ohne Einhalten einer Kündigungsfrist gekündigt werden; die Kündigung muss schriftlich erfolgen (§ 22 Abs. 3 BBiG). Nach der Probezeit kann der Ausbildende nur noch aus wichtigem Grund fristlos kündigen (§ 22 Abs. 2 Nr. 1 BBiG). Die Frist von vier Wochen gilt nur für Auszubildende, die die Ausbildung aufgeben oder sich für einen anderen Beruf ausbilden lassen wollen (§ 22 Abs. 2 Nr. 2 BBiG).'
    },
    {
      nr: 4, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Die 17-jährige Auszubildende Mia Schöllhorn hilft bei einer Kundenveranstaltung der Alpenblick Systemhaus GmbH. Ihre Arbeitszeit hat an diesem Tag erst mittags begonnen, die Veranstaltung endet um 20:00 Uhr. Am nächsten Tag soll sie wieder im Betrieb arbeiten.',
      frage: 'Zu welcher Uhrzeit darf Frau Schöllhorn am nächsten Tag frühestens wieder beschäftigt werden?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Uhrzeit in das Kästchen ein.',
      optionen: [
        '06:00 Uhr',
        '07:00 Uhr',
        '07:30 Uhr',
        '08:00 Uhr',
        '09:00 Uhr'
      ],
      loesung: 4,
      erklaerung: '§ 13 JArbSchG: Nach Beendigung der täglichen Arbeitszeit dürfen Jugendliche nicht vor Ablauf einer ununterbrochenen Freizeit von mindestens zwölf Stunden beschäftigt werden. Arbeitsende 20:00 Uhr + 12 Stunden = 08:00 Uhr am nächsten Tag. Die Nachtruhe nach § 14 Abs. 1 JArbSchG (Beschäftigung nur von 6 bis 20 Uhr) würde zwar einen Beginn um 06:00 Uhr zulassen, die zwölfstündige Freizeit geht aber vor. Erwachsene haben nach § 5 Abs. 1 ArbZG eine Ruhezeit von mindestens elf Stunden.'
    },
    {
      nr: 5, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Belegschaft wächst weiter. Bei der nächsten regelmäßigen Betriebsratswahl wird die Alpenblick Systemhaus GmbH voraussichtlich 215 Arbeitnehmerinnen und Arbeitnehmer beschäftigen, die alle wahlberechtigt sind.',
      kasten: {
        titel: '§ 9 und § 38 BetrVG (Auszug)',
        absaetze: [
          '§ 9: Der Betriebsrat besteht in Betrieben mit in der Regel … 51 wahlberechtigten Arbeitnehmern bis 100 Arbeitnehmern aus 5 Mitgliedern, 101 bis 200 Arbeitnehmern aus 7 Mitgliedern, 201 bis 400 Arbeitnehmern aus 9 Mitgliedern, 401 bis 700 Arbeitnehmern aus 11 Mitgliedern …',
          '§ 38 Abs. 1: Von ihrer beruflichen Tätigkeit sind mindestens freizustellen in Betrieben mit in der Regel 200 bis 500 Arbeitnehmern ein Betriebsratsmitglied, 501 bis 900 Arbeitnehmern 2 Betriebsratsmitglieder …'
        ]
      },
      frage: 'Welche der folgenden Aussagen zum Betriebsrat nach der nächsten regelmäßigen Wahl trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Betriebsrat bleibt bei sieben Mitgliedern, weil sich seine Größe nach der ersten Wahl richtet.',
        'Der Betriebsrat besteht aus elf Mitgliedern; zwei Mitglieder sind freizustellen.',
        'Der Betriebsrat besteht aus neun Mitgliedern, die alle vollständig von ihrer beruflichen Tätigkeit freizustellen sind.',
        'Der Betriebsrat besteht aus neun Mitgliedern; mindestens ein Mitglied ist ganz von seiner beruflichen Tätigkeit freizustellen.',
        'Die Zahl der Betriebsratsmitglieder legt die Geschäftsführung nach dem Bedarf des Unternehmens fest.'
      ],
      loesung: 4,
      erklaerung: 'Nach § 9 BetrVG besteht der Betriebsrat bei 201 bis 400 Arbeitnehmern aus neun Mitgliedern. Nach § 38 Abs. 1 BetrVG ist bei 200 bis 500 Arbeitnehmern mindestens ein Betriebsratsmitglied ganz von der beruflichen Tätigkeit freizustellen. Maßgeblich ist die Zahl der in der Regel Beschäftigten bei der Wahl; der Arbeitgeber kann die Größe nicht bestimmen.'
    },
    {
      nr: 6, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Geschäftsführung kündigt dem Servicetechniker Andreas Wiedemann ordentlich. Der Betriebsrat wurde vor Ausspruch der Kündigung nicht beteiligt und erfährt erst danach davon.',
      frage: 'Welche Rechtsfolge hat das Vorgehen der Geschäftsführung?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Rechtsfolge in das Kästchen ein.',
      optionen: [
        'Die Kündigung ist unwirksam, weil der Betriebsrat vor jeder Kündigung unter Mitteilung der Gründe anzuhören ist.',
        'Die Kündigung ist wirksam, wenn die Geschäftsführung den Betriebsrat innerhalb einer Woche nachträglich informiert.',
        'Die Kündigung ist wirksam, weil der Betriebsrat nur vor außerordentlichen Kündigungen zu hören ist.',
        'Die Kündigung ist nur dann unwirksam, wenn Herr Wiedemann Mitglied des Betriebsrats ist.',
        'Die Kündigung wird automatisch in eine Abmahnung umgedeutet.'
      ],
      loesung: 1,
      erklaerung: '§ 102 Abs. 1 BetrVG: Der Betriebsrat ist vor jeder Kündigung zu hören, der Arbeitgeber muss ihm die Gründe mitteilen. Eine ohne Anhörung ausgesprochene Kündigung ist unwirksam. Bedenken gegen eine ordentliche Kündigung muss der Betriebsrat innerhalb einer Woche schriftlich mitteilen, bei einer außerordentlichen Kündigung unverzüglich, spätestens innerhalb von drei Tagen (§ 102 Abs. 2 BetrVG).'
    },
    {
      nr: 7, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Das Betriebsratsmitglied Daniel Wetzel ist nicht freigestellt und arbeitet als Netzwerktechniker. Jede Woche nimmt er während seiner Arbeitszeit an der Betriebsratssitzung teil. Sein Teamleiter fragt, wie diese Zeit zu behandeln ist.',
      frage: 'Welche der folgenden Aussagen zur Tätigkeit von Herrn Wetzel im Betriebsrat trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Wetzel erhält für seine Betriebsratstätigkeit eine zusätzliche Vergütung vom Arbeitgeber.',
        'Die Zeit der Betriebsratssitzungen muss Herr Wetzel unbezahlt nacharbeiten.',
        'Herr Wetzel führt sein Amt als unentgeltliches Ehrenamt; für die erforderliche Betriebsratstätigkeit ist er ohne Minderung seines Arbeitsentgelts von der Arbeit zu befreien.',
        'Für die Sitzungszeit zahlt die Gewerkschaft Herrn Wetzel sein Gehalt.',
        'Die Kosten der Betriebsratsarbeit, z. B. für Räume und Fachliteratur, werden durch Beiträge der Beschäftigten finanziert.'
      ],
      loesung: 3,
      erklaerung: '§ 37 Abs. 1 BetrVG: Die Mitglieder des Betriebsrats führen ihr Amt unentgeltlich als Ehrenamt. § 37 Abs. 2 BetrVG: Sie sind von ihrer beruflichen Tätigkeit ohne Minderung des Arbeitsentgelts zu befreien, soweit es zur ordnungsgemäßen Durchführung ihrer Aufgaben erforderlich ist. Die Kosten der Betriebsratstätigkeit sowie Räume, Sachmittel und Fachliteratur trägt der Arbeitgeber (§ 40 BetrVG); Beiträge der Arbeitnehmer für Zwecke des Betriebsrats sind unzulässig (§ 41 BetrVG).'
    },
    {
      nr: 8, thema: 'tarifrecht', typ: 'zuordnung',
      text: 'Die neue Personalreferentin Sabrina Fink arbeitet sich in die Tarifverträge ein, die für die Alpenblick Systemhaus GmbH gelten.',
      frage: 'Welche der folgenden Tarifvertragsarten sind den nachstehenden Regelungsinhalten zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Tarifvertragsart in das Kästchen ein.',
      optionenTitel: 'Tarifvertragsarten',
      optionen: [
        'Manteltarifvertrag (Rahmentarifvertrag)',
        'Entgelttarifvertrag (Lohn- und Gehaltstarifvertrag)',
        'Entgeltrahmentarifvertrag (Lohn- und Gehaltsrahmentarifvertrag)'
      ],
      itemsTitel: 'Regelungsinhalte',
      items: [
        { text: 'Die regelmäßige wöchentliche Arbeitszeit beträgt 38 Stunden.', loesung: 1 },
        { text: 'Das monatliche Grundgehalt in der Entgeltgruppe E6 beträgt 3.950,00 EUR.', loesung: 2 },
        { text: 'Beschreibung der Tätigkeitsmerkmale, nach denen die Beschäftigten in die Entgeltgruppen eingruppiert werden', loesung: 3 },
        { text: 'Der Jahresurlaub beträgt 30 Arbeitstage.', loesung: 1 }
      ],
      erklaerung: 'Der Manteltarifvertrag regelt allgemeine Arbeitsbedingungen wie Arbeitszeit, Urlaub, Zuschläge und Kündigungsfristen und hat meist eine lange Laufzeit. Der Entgelttarifvertrag legt die Höhe der Löhne und Gehälter fest und wird meist nach ein bis zwei Jahren neu verhandelt. Der Entgeltrahmentarifvertrag beschreibt die Entgeltgruppen und die Merkmale für die Eingruppierung. Grundlage ist das Tarifvertragsgesetz (§ 1 TVG).'
    },
    {
      nr: 9, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Verhandlungen über einen neuen Entgelttarifvertrag sind gescheitert. Nach einer erfolgreichen Urabstimmung ruft die Gewerkschaft zu einem rechtmäßigen Streik auf. Der Netzwerktechniker Stefan Wörle ist Gewerkschaftsmitglied und beteiligt sich drei Tage lang am Streik.',
      frage: 'Welche der folgenden Aussagen zu den Folgen der Streikteilnahme für Herrn Wörle trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Alpenblick Systemhaus GmbH muss das Gehalt für die Streiktage in voller Höhe weiterzahlen.',
        'Wegen der Teilnahme am Streik darf die Alpenblick Systemhaus GmbH Herrn Wörle fristlos kündigen.',
        'Für die Streiktage zahlt die Bundesagentur für Arbeit Arbeitslosengeld.',
        'Herr Wörle muss die Streiktage nachträglich als Urlaub nehmen.',
        'Für die Streiktage entfällt sein Anspruch auf Arbeitsentgelt; als Gewerkschaftsmitglied erhält er in der Regel eine Streikunterstützung (Streikgeld) von seiner Gewerkschaft.'
      ],
      loesung: 5,
      erklaerung: 'Das Streikrecht folgt aus der Koalitionsfreiheit (Art. 9 Abs. 3 GG). Während eines rechtmäßigen Streiks ruhen die Hauptpflichten aus dem Arbeitsverhältnis: Die Streikenden müssen nicht arbeiten, der Arbeitgeber muss für diese Zeit kein Entgelt zahlen. Das Arbeitsverhältnis bleibt bestehen, die Teilnahme an einem rechtmäßigen Streik ist kein Kündigungsgrund. Gewerkschaftsmitglieder erhalten nach der Satzung ihrer Gewerkschaft Streikgeld. Die Bundesagentur für Arbeit muss im Arbeitskampf neutral bleiben; ein Anspruch auf Arbeitslosengeld ruht (§ 160 SGB III).'
    },
    {
      nr: 10, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Für ein Projekt zur Umstellung der Telefonanlagen mehrerer Kunden möchte die Alpenblick Systemhaus GmbH den IT-Techniker Tim Stadler einstellen. Der Arbeitsvertrag soll ohne sachlichen Grund befristet werden. Herr Stadler war bisher noch nie bei der Alpenblick Systemhaus GmbH beschäftigt.',
      frage: 'Welche der folgenden Aussagen zur sachgrundlosen Befristung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Befristung kann mündlich vereinbart werden, wenn beide Seiten einverstanden sind.',
        'Der Vertrag darf ohne sachlichen Grund höchstens für die Dauer von sechs Monaten befristet werden.',
        'Nach Ablauf der Befristung hat Herr Stadler automatisch Anspruch auf einen unbefristeten Arbeitsvertrag.',
        'Der befristete Vertrag kann beliebig oft verlängert werden, solange Herr Stadler zustimmt.',
        'Der Vertrag darf ohne sachlichen Grund bis zur Dauer von zwei Jahren befristet werden; bis zu dieser Gesamtdauer ist eine höchstens dreimalige Verlängerung zulässig.'
      ],
      loesung: 5,
      erklaerung: '§ 14 Abs. 2 TzBfG: Ohne sachlichen Grund ist eine Befristung bis zur Dauer von zwei Jahren zulässig, innerhalb dieser Zeit ist sie höchstens dreimal verlängerbar. Sie ist nicht zulässig, wenn mit demselben Arbeitgeber bereits zuvor ein Arbeitsverhältnis bestanden hat. Die Befristung bedarf zu ihrer Wirksamkeit der Schriftform (§ 14 Abs. 4 TzBfG). Einen Anspruch auf Entfristung gibt es nicht.'
    },
    {
      nr: 11, thema: 'arbeitsvertrag', typ: 'zahl',
      text: 'Die Netzwerkadministratorin Lea Brugger beginnt am 01.08.2026 bei der Alpenblick Systemhaus GmbH. Laut Arbeitsvertrag stehen ihr bei einer Fünftagewoche 30 Urlaubstage im Kalenderjahr zu. Für den gesamten Urlaubsanspruch gelten die Regelungen des Bundesurlaubsgesetzes.',
      kasten: {
        titel: 'Bundesurlaubsgesetz (Auszug)',
        absaetze: [
          '§ 4: Der volle Urlaubsanspruch wird erstmalig nach sechsmonatigem Bestehen des Arbeitsverhältnisses erworben.',
          '§ 5 Abs. 1: Anspruch auf ein Zwölftel des Jahresurlaubs für jeden vollen Monat des Bestehens des Arbeitsverhältnisses hat der Arbeitnehmer a) für Zeiten eines Kalenderjahrs, für die er wegen Nichterfüllung der Wartezeit in diesem Kalenderjahr keinen vollen Urlaubsanspruch erwirbt; …',
          '§ 5 Abs. 2: Bruchteile von Urlaubstagen, die mindestens einen halben Tag ergeben, sind auf volle Urlaubstage aufzurunden.'
        ]
      },
      frage: 'Ermitteln Sie, wie viele Urlaubstage Frau Brugger für das Kalenderjahr 2026 zustehen.',
      anweisung: 'Tragen Sie die Anzahl der Urlaubstage in das Kästchen ein.',
      loesung: 13, nachkommastellen: 0, einheit: 'Urlaubstage',
      erklaerung: 'Die Wartezeit von sechs Monaten (§ 4 BUrlG) ist erst mit Ablauf des 31.01.2027 erfüllt, für 2026 entsteht daher nur Teilurlaub nach § 5 Abs. 1 Buchst. a BUrlG. Volle Beschäftigungsmonate 2026: August bis Dezember = 5. 30 Urlaubstage ÷ 12 × 5 = 12,5 Tage; nach § 5 Abs. 2 BUrlG wird auf 13 Urlaubstage aufgerundet.'
    },
    {
      nr: 12, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Systemadministratorin Theresa Fäßler ist seit vier Jahren in Vollzeit bei der Alpenblick Systemhaus GmbH beschäftigt. Sie möchte ihre Arbeitszeit ab dem 01.04.2027 dauerhaft auf 30 Wochenstunden verringern.',
      frage: 'Welche der folgenden Aussagen zu ihrem Anspruch auf Verringerung der Arbeitszeit nach dem Teilzeit- und Befristungsgesetz (TzBfG) trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Anspruch auf Teilzeit besteht nur, wenn Frau Fäßler Kinder unter zwölf Jahren betreut.',
        'Die Alpenblick Systemhaus GmbH kann den Wunsch ohne Angabe von Gründen ablehnen.',
        'Eine Verringerung der Arbeitszeit ist nur mit Zustimmung des Betriebsrats und der IHK möglich.',
        'Frau Fäßler muss die Verringerung spätestens drei Monate vor dem gewünschten Beginn in Textform verlangen; der Arbeitgeber darf nur ablehnen, wenn betriebliche Gründe entgegenstehen.',
        'Ein Anspruch auf Teilzeit besteht erst nach einer Betriebszugehörigkeit von zehn Jahren.'
      ],
      loesung: 4,
      erklaerung: '§ 8 TzBfG: Wer länger als sechs Monate beschäftigt ist, kann verlangen, dass die vertraglich vereinbarte Arbeitszeit verringert wird (Abs. 1), wenn der Arbeitgeber in der Regel mehr als 15 Arbeitnehmer beschäftigt (Abs. 7); das ist hier mit 190 Beschäftigten erfüllt. Die Verringerung ist spätestens drei Monate vor Beginn in Textform geltend zu machen (Abs. 2). Der Arbeitgeber hat zuzustimmen, soweit betriebliche Gründe nicht entgegenstehen (Abs. 4), und muss spätestens einen Monat vor Beginn in Textform entscheiden (Abs. 5). Eine zeitlich begrenzte Verringerung regelt die Brückenteilzeit (§ 9a TzBfG).'
    },
    {
      nr: 13, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'Die Alpenblick Systemhaus GmbH zahlt eine jährliche Erfolgsprämie nur an ihre Vollzeitbeschäftigten. Von den 24 Teilzeitbeschäftigten sind 22 Frauen. Einen sachlichen Grund für den Ausschluss der Teilzeitkräfte gibt es nicht.',
      frage: 'Welche Form der Benachteiligung im Sinne des Allgemeinen Gleichbehandlungsgesetzes (AGG) liegt vor?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Form der Benachteiligung in das Kästchen ein.',
      optionen: [
        'Unmittelbare Benachteiligung',
        'Mittelbare Benachteiligung',
        'Belästigung',
        'Sexuelle Belästigung',
        'Anweisung zur Benachteiligung'
      ],
      loesung: 2,
      erklaerung: 'Eine mittelbare Benachteiligung liegt vor, wenn dem Anschein nach neutrale Vorschriften oder Verfahren Personen wegen eines in § 1 AGG genannten Grundes in besonderer Weise benachteiligen können, ohne dass ein sachlicher Grund dies rechtfertigt (§ 3 Abs. 2 AGG). Die Regel knüpft nicht ausdrücklich an das Geschlecht an, trifft aber fast nur Frauen. Bei einer unmittelbaren Benachteiligung würde direkt wegen des Geschlechts schlechter behandelt (§ 3 Abs. 1 AGG). Zusätzlich verbietet § 4 Abs. 1 TzBfG, Teilzeitbeschäftigte ohne sachlichen Grund schlechter zu behandeln; die Prämie steht ihnen mindestens anteilig zu.'
    },
    {
      nr: 14, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Frau Allgaier möchte wissen, welche Pflichten sie bei der Gefährdungsbeurteilung hat.',
      frage: 'Welche der folgenden Aussagen zur Gefährdungsbeurteilung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Gefährdungsbeurteilung wird von der Berufsgenossenschaft für jeden Betrieb erstellt.',
        'Eine Gefährdungsbeurteilung ist erst in Betrieben mit mehr als 20 Beschäftigten vorgeschrieben.',
        'Für reine Büroarbeitsplätze ist keine Gefährdungsbeurteilung erforderlich.',
        'Der Arbeitgeber muss die Gefährdungen an den Arbeitsplätzen einschließlich psychischer Belastungen beurteilen, die erforderlichen Schutzmaßnahmen festlegen und das Ergebnis dokumentieren.',
        'Die Gefährdungsbeurteilung wird einmalig bei der Gründung des Unternehmens erstellt und danach nicht mehr angepasst.'
      ],
      loesung: 4,
      erklaerung: '§ 5 ArbSchG verpflichtet den Arbeitgeber, die Gefährdungen der Beschäftigten zu beurteilen und daraus die erforderlichen Maßnahmen abzuleiten; ausdrücklich genannt sind auch psychische Belastungen (§ 5 Abs. 3 Nr. 6 ArbSchG). Ergebnis, Maßnahmen und deren Überprüfung sind unabhängig von der Betriebsgröße zu dokumentieren (§ 6 Abs. 1 ArbSchG). Bei Änderungen ist die Beurteilung zu aktualisieren. Fachkraft für Arbeitssicherheit und Betriebsarzt unterstützen dabei.'
    },
    {
      nr: 15, thema: 'arbeitsschutz', typ: 'mehrfach',
      text: 'Herr Rauch prüft die Bildschirmarbeitsplätze im Servicedesk.',
      frage: 'Welche der folgenden Maßnahmen entsprechen den Vorgaben für Bildschirmarbeitsplätze?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Maßnahmen in die Kästchen ein.',
      optionen: [
        'Die Bildschirme werden so aufgestellt, dass die Beschäftigten direkt auf ein Fenster blicken.',
        'Die tägliche Bildschirmarbeit wird auf höchstens vier Stunden begrenzt, weil das Gesetz dies vorschreibt.',
        'Die Arbeit am Bildschirm wird regelmäßig durch Pausen oder andere Tätigkeiten unterbrochen.',
        'Tastatur und Bildschirm der Desktop-Arbeitsplätze sind fest miteinander verbunden.',
        'Alle Beschäftigten erhalten unabhängig von einer Untersuchung eine Bildschirmbrille auf Kosten des Arbeitgebers.',
        'Den Beschäftigten wird eine arbeitsmedizinische Vorsorge zur Untersuchung der Augen und des Sehvermögens angeboten.'
      ],
      loesung: [3, 6],
      erklaerung: 'Nach Anhang Nr. 6 der Arbeitsstättenverordnung (ArbStättV) ist Bildschirmarbeit regelmäßig durch Pausen oder andere Tätigkeiten zu unterbrechen; Blendungen und Spiegelungen sind zu vermeiden (Blickrichtung parallel zum Fenster), und die Tastatur muss vom Bildschirm getrennt sein. Bei Tätigkeiten an Bildschirmgeräten ist eine Angebotsvorsorge anzubieten (§ 5 ArbMedVV mit Anhang Teil 4). Eine spezielle Sehhilfe stellt der Arbeitgeber nur, wenn die Untersuchung ergibt, dass sie notwendig ist. Eine feste Stundengrenze gibt es nicht.'
    },
    {
      nr: 16, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die Projektleiterin Sarah Kögel hat mitgeteilt, dass sie schwanger ist. Der voraussichtliche Entbindungstermin ist der 19.03.2027. Frau Kögel möchte möglichst lange weiterarbeiten.',
      frage: 'Welche der folgenden Aussagen zur Schutzfrist vor der Entbindung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'In den letzten sechs Wochen vor der Entbindung besteht ein absolutes Beschäftigungsverbot, auf das Frau Kögel nicht verzichten kann.',
        'Die Schutzfrist vor der Entbindung beträgt acht Wochen.',
        'Der Arbeitgeber darf Frau Kögel während der Schwangerschaft ordentlich kündigen, wenn er eine Frist von drei Monaten einhält.',
        'Während der Schutzfrist erhält Frau Kögel keine finanziellen Leistungen.',
        'In den letzten sechs Wochen vor der Entbindung darf Frau Kögel nur beschäftigt werden, wenn sie sich ausdrücklich dazu bereit erklärt; diese Erklärung kann sie jederzeit widerrufen.'
      ],
      loesung: 5,
      erklaerung: '§ 3 Abs. 1 MuSchG: In den letzten sechs Wochen vor der Entbindung darf eine Schwangere nur beschäftigt werden, wenn sie sich ausdrücklich dazu bereit erklärt; die Erklärung ist jederzeit widerruflich. Nach der Entbindung gilt dagegen ein Beschäftigungsverbot von acht Wochen (§ 3 Abs. 2 MuSchG). Während der Schutzfristen erhält sie Mutterschaftsgeld und einen Arbeitgeberzuschuss (§§ 19, 20 MuSchG). Während der Schwangerschaft ist eine Kündigung grundsätzlich unzulässig (§ 17 MuSchG).'
    },
    {
      nr: 17, thema: 'sozialversicherung', typ: 'zuordnung',
      text: 'In einer Informationsveranstaltung erklärt die Personalabteilung, welche Zweige der Sozialversicherung welche Leistungen erbringen.',
      frage: 'Welche der folgenden Zweige der Sozialversicherung sind den nachstehenden Leistungen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Zweig in das Kästchen ein.',
      optionenTitel: 'Zweige der Sozialversicherung',
      optionen: [
        'Krankenversicherung',
        'Pflegeversicherung',
        'Rentenversicherung',
        'Arbeitslosenversicherung',
        'Unfallversicherung'
      ],
      itemsTitel: 'Leistungen',
      items: [
        { text: 'Pflegegeld für eine pflegebedürftige Person, die zu Hause von Angehörigen gepflegt wird', loesung: 2 },
        { text: 'Rente wegen voller Erwerbsminderung nach einer schweren Erkrankung', loesung: 3 },
        { text: 'Verletztenrente wegen einer anerkannten Berufskrankheit', loesung: 5 },
        { text: 'Gründungszuschuss für eine Person, die Arbeitslosengeld bezieht und sich selbstständig macht', loesung: 4 }
      ],
      erklaerung: 'Pflegegeld bei häuslicher Pflege zahlt die Pflegeversicherung (§ 37 SGB XI). Renten wegen Erwerbsminderung zahlt die Rentenversicherung (§ 43 SGB VI). Die Unfallversicherung leistet bei Arbeitsunfällen und Berufskrankheiten, u. a. eine Verletztenrente (§ 56 SGB VII). Den Gründungszuschuss zahlt die Agentur für Arbeit aus der Arbeitslosenversicherung (§ 93 SGB III). Die Krankenversicherung ist keiner der Leistungen zuzuordnen.'
    },
    {
      nr: 18, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Die Studentin Carina Hefele arbeitet als Aushilfe im Lager der Alpenblick Systemhaus GmbH und verdient regelmäßig 540,00 EUR im Monat. Sie ist gesetzlich krankenversichert. Die Verdienstgrenze für eine geringfügig entlohnte Beschäftigung (Minijob) beträgt im Jahr 2026 603,00 EUR monatlich.',
      frage: 'Welche der folgenden Aussagen zu diesem Minijob trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Hefele zahlt aus ihrem Verdienst die vollen Beiträge zur Kranken-, Pflege- und Arbeitslosenversicherung.',
        'Für Minijobs müssen keine Meldungen an die Sozialversicherung abgegeben werden.',
        'Die Alpenblick Systemhaus GmbH zahlt Pauschalbeiträge zur Kranken- und Rentenversicherung; Frau Hefele ist rentenversicherungspflichtig, kann sich aber auf Antrag davon befreien lassen.',
        'Minijobber haben keinen Anspruch auf bezahlten Urlaub.',
        'Ein Minijob ist grundsätzlich nur für höchstens drei Monate im Kalenderjahr zulässig.'
      ],
      loesung: 3,
      erklaerung: 'Eine geringfügig entlohnte Beschäftigung liegt vor, wenn das regelmäßige Entgelt die Geringfügigkeitsgrenze nicht übersteigt (§ 8 Abs. 1 Nr. 1 SGB IV). Der Arbeitgeber zahlt Pauschalbeiträge zur Krankenversicherung (13 %, § 249b SGB V) und zur Rentenversicherung (15 %, § 172 Abs. 3 SGB VI). Minijobber sind rentenversicherungspflichtig und tragen die Differenz zum vollen Beitragssatz, können sich aber auf Antrag befreien lassen (§ 6 Abs. 1b SGB VI). Meldungen und Beiträge gehen an die Minijob-Zentrale. Arbeitsrechtlich haben Minijobber dieselben Rechte wie andere Beschäftigte, etwa auf Urlaub. Die Begrenzung auf drei Monate oder 70 Arbeitstage gilt für die kurzfristige Beschäftigung (§ 8 Abs. 1 Nr. 2 SGB IV).'
    },
    {
      nr: 19, thema: 'entgelt', typ: 'einfach',
      text: 'Die Mitarbeiterin Jana Riedl ist ledig und hat keine Kinder. Sie arbeitet in Vollzeit bei der Alpenblick Systemhaus GmbH. Zusätzlich nimmt sie bei einem anderen Arbeitgeber eine Nebenbeschäftigung auf, die nicht pauschal versteuert wird.',
      frage: 'Nach welcher Lohnsteuerklasse wird der Arbeitslohn aus der Nebenbeschäftigung besteuert?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Steuerklasse in das Kästchen ein.',
      optionen: [
        'Steuerklasse I',
        'Steuerklasse II',
        'Steuerklasse III',
        'Steuerklasse V',
        'Steuerklasse VI'
      ],
      loesung: 5,
      erklaerung: 'Nach § 38b Abs. 1 Satz 2 Nr. 6 EStG gilt für den Arbeitslohn aus einem zweiten oder weiteren Dienstverhältnis die Steuerklasse VI. Bei der Alpenblick Systemhaus GmbH bleibt es bei Steuerklasse I für Ledige. Steuerklasse II gilt für Alleinerziehende, die Kombination III/V für Ehegatten mit unterschiedlich hohem Einkommen.'
    },
    {
      nr: 20, thema: 'rechtsformen', typ: 'einfach',
      text: 'Ein neuer Auszubildender möchte wissen, wer in der Alpenblick Systemhaus GmbH welche Aufgaben hat.',
      frage: 'Welche der folgenden Aussagen zu den Organen der Alpenblick Systemhaus GmbH trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Allgaier vertritt die GmbH gerichtlich und außergerichtlich; über ihre Bestellung und Abberufung entscheidet die Gesellschafterversammlung.',
        'Die GmbH wird nach außen von allen Gesellschaftern gemeinsam vertreten.',
        'Wegen ihrer 190 Arbeitnehmer muss die GmbH einen Aufsichtsrat bilden, der die Geschäftsführerin bestellt.',
        'Geschäftsführerin einer GmbH kann nur sein, wer selbst Gesellschafterin ist.',
        'Über die Verwendung des Jahresgewinns der GmbH beschließt die Hauptversammlung der Aktionäre.'
      ],
      loesung: 1,
      erklaerung: 'Die GmbH wird durch ihre Geschäftsführer gerichtlich und außergerichtlich vertreten (§ 35 Abs. 1 GmbHG). Die Gesellschafterversammlung bestellt und beruft die Geschäftsführer ab (§ 46 Nr. 5 GmbHG) und beschließt über die Ergebnisverwendung (§ 46 Nr. 1 GmbHG). Geschäftsführer können Gesellschafter oder andere Personen sein (§ 6 Abs. 3 GmbHG). Einen Aufsichtsrat muss eine GmbH erst bei in der Regel mehr als 500 Arbeitnehmern bilden (§ 1 Abs. 1 Nr. 3 DrittelbG). Die Hauptversammlung ist ein Organ der Aktiengesellschaft.'
    },
    {
      nr: 21, thema: 'rechtsformen', typ: 'einfach',
      text: 'Frau Allgaier erteilt dem Vertriebsleiter Michael Kustermann Prokura. Im Innenverhältnis vereinbaren beide, dass Herr Kustermann Verträge nur bis zu einem Wert von 50.000,00 EUR abschließen darf.',
      frage: 'Welche der folgenden Aussagen zur Prokura von Herrn Kustermann trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Beschränkung auf Verträge bis 50.000,00 EUR ist auch gegenüber Kunden und Lieferanten wirksam.',
        'Die Prokura entsteht stillschweigend, wenn Herr Kustermann regelmäßig Verträge für das Unternehmen abschließt.',
        'Herr Kustermann darf seine Prokura auf einen Mitarbeiter seiner Abteilung übertragen.',
        'Die Prokura muss ausdrücklich erteilt und zur Eintragung in das Handelsregister angemeldet werden; Herr Kustermann zeichnet mit dem Zusatz „ppa.“.',
        'Die Prokura kann nur zusammen mit dem Arbeitsvertrag gekündigt werden.'
      ],
      loesung: 4,
      erklaerung: 'Die Prokura wird vom Inhaber oder gesetzlichen Vertreter nur mittels ausdrücklicher Erklärung erteilt (§ 48 Abs. 1 HGB) und ist zur Eintragung in das Handelsregister anzumelden (§ 53 Abs. 1 HGB). Der Prokurist zeichnet mit einem die Prokura andeutenden Zusatz, üblich ist „ppa.“ (§ 51 HGB). Eine Beschränkung des Umfangs ist Dritten gegenüber unwirksam (§ 50 Abs. 1 HGB) und gilt nur im Innenverhältnis. Die Prokura ist nicht übertragbar (§ 52 Abs. 2 HGB) und jederzeit widerruflich (§ 52 Abs. 1 HGB).'
    },
    {
      nr: 22, thema: 'organisation', typ: 'einfach',
      text: 'Teamleiter Markus Hagn bespricht anstehende Entscheidungen mit seinem Team, nimmt Vorschläge auf und überträgt den Mitarbeitenden Aufgaben mit eigener Verantwortung. Er kontrolliert vor allem die Ergebnisse.',
      frage: 'Welcher Führungsstil wird beschrieben?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Führungsstil in das Kästchen ein.',
      optionen: [
        'Autoritärer Führungsstil',
        'Patriarchalischer Führungsstil',
        'Kooperativer Führungsstil',
        'Laissez-faire-Führungsstil',
        'Bürokratischer Führungsstil'
      ],
      loesung: 3,
      erklaerung: 'Beim kooperativen Führungsstil werden die Mitarbeitenden an Entscheidungen beteiligt, Aufgaben und Verantwortung werden delegiert, kontrolliert wird vor allem das Ergebnis. Beim autoritären Stil entscheidet die Führungskraft allein, beim Laissez-faire-Stil greift sie kaum ein. Eine gesetzliche Grundlage gibt es nicht; es handelt sich um Modelle der Betriebswirtschaftslehre.'
    },
    {
      nr: 23, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Die Geschäftsführung legt Ziele für das Geschäftsjahr 2027 fest. Die Ziele sollen operational, also eindeutig überprüfbar, formuliert sein.',
      frage: 'Welches der folgenden Ziele ist operational formuliert?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Ziel in das Kästchen ein.',
      optionen: [
        'Wir wollen unseren Umsatz deutlich steigern.',
        'Die Kundenzufriedenheit soll in Zukunft verbessert werden.',
        'Wir wollen der führende IT-Dienstleister im Allgäu werden.',
        'Die Kosten sollen so gering wie möglich gehalten werden.',
        'Der Umsatz mit Wartungsverträgen für Netzwerke soll bis zum 31.12.2027 um 10 % gegenüber dem Geschäftsjahr 2026 steigen.'
      ],
      loesung: 5,
      erklaerung: 'Ein operationales Ziel legt Zielinhalt (Umsatz mit Wartungsverträgen), Zielausmaß (plus 10 %) und Zeitbezug (bis 31.12.2027) fest und ist damit messbar (SMART: spezifisch, messbar, akzeptiert, realistisch, terminiert). Bei den übrigen Zielen lässt sich nicht überprüfen, ob sie erreicht wurden. Eine gesetzliche Grundlage gibt es nicht.'
    },
    {
      nr: 24, thema: 'kennzahlen', typ: 'zahl',
      text: 'Im Servicedesk der Alpenblick Systemhaus GmbH haben die Beschäftigten im dritten Quartal insgesamt 2.880 Arbeitsstunden geleistet und dabei 6.480 Störungsmeldungen (Tickets) abschließend bearbeitet.',
      frage: 'Berechnen Sie die Arbeitsproduktivität des Servicedesks im dritten Quartal in abgeschlossenen Tickets je Arbeitsstunde.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf die zweite Nachkommastelle.',
      loesung: 2.25, nachkommastellen: 2, einheit: 'Tickets je Std.',
      erklaerung: 'Arbeitsproduktivität = Ausbringungsmenge ÷ Arbeitseinsatz = 6.480 Tickets ÷ 2.880 Arbeitsstunden = 2,25 Tickets je Arbeitsstunde. Die Produktivität ist eine mengenmäßige Kennzahl; die Wirtschaftlichkeit setzt dagegen Werte (Ertrag ÷ Aufwand) ins Verhältnis.'
    },
    {
      nr: 25, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Für Schulungen steht im kommenden Jahr ein fest vorgegebenes Budget von 18.000,00 EUR zur Verfügung. Mit diesem Betrag sollen möglichst viele Beschäftigte eine Netzwerk-Zertifizierung erwerben.',
      frage: 'Nach welchem Prinzip handelt die Alpenblick Systemhaus GmbH?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Prinzip in das Kästchen ein.',
      optionen: [
        'Minimalprinzip',
        'Maximalprinzip',
        'Optimumprinzip',
        'Solidaritätsprinzip',
        'Verursacherprinzip'
      ],
      loesung: 2,
      erklaerung: 'Beim Maximalprinzip wird mit gegebenen Mitteln (hier 18.000,00 EUR) ein möglichst großer Erfolg (möglichst viele Zertifizierungen) angestrebt. Beim Minimalprinzip soll ein vorgegebenes Ziel mit möglichst geringem Mitteleinsatz erreicht werden, beim Optimumprinzip werden Mitteleinsatz und Ergebnis so abgestimmt, dass das günstigste Verhältnis entsteht. Das ökonomische Prinzip ist ein Modell der Wirtschaftslehre, keine Rechtsnorm.'
    },
    {
      nr: 26, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Die Alpenblick Systemhaus GmbH verkauft Laserdrucker zu einem günstigen Preis. Ihren Gewinn erzielt sie vor allem mit dem Verkauf des passenden Toners.',
      frage: 'Um welche Art von Gütern handelt es sich bei Laserdrucker und Toner?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Güterart in das Kästchen ein.',
      optionen: [
        'Substitutionsgüter',
        'Freie Güter',
        'Immaterielle Güter',
        'Komplementärgüter',
        'Inferiore Güter'
      ],
      loesung: 4,
      erklaerung: 'Komplementärgüter ergänzen sich und werden gemeinsam nachgefragt: Ohne Toner ist der Drucker nicht nutzbar. Substitutionsgüter können sich gegenseitig ersetzen (z. B. Tintenstrahl- und Laserdrucker). Freie Güter stehen unbegrenzt und kostenlos zur Verfügung, immaterielle Güter sind Dienstleistungen und Rechte. Inferiore Güter werden bei steigendem Einkommen weniger nachgefragt. Es handelt sich um Grundbegriffe der Volkswirtschaftslehre ohne Rechtsgrundlage.'
    },
    {
      nr: 27, thema: 'konjunktur', typ: 'mehrfach',
      text: 'Die Geschäftsführung möchte frühzeitig erkennen, wie sich die Konjunktur in den nächsten Monaten entwickelt, um ihre Personal- und Investitionsplanung anzupassen.',
      frage: 'Welche der folgenden Größen sind Frühindikatoren der Konjunktur?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Größen in die Kästchen ein.',
      optionen: [
        'Arbeitslosenquote',
        'Auftragseingänge in der Industrie',
        'Bruttoinlandsprodukt',
        'Verbraucherpreisindex (Inflationsrate)',
        'ifo-Geschäftsklimaindex',
        'Höhe der Tarifabschlüsse'
      ],
      loesung: [2, 5],
      erklaerung: 'Frühindikatoren laufen der Konjunktur voraus, z. B. Auftragseingänge und die Geschäftserwartungen der Unternehmen (ifo-Geschäftsklimaindex). Das Bruttoinlandsprodukt und die Kapazitätsauslastung zeigen die aktuelle Lage (Präsenzindikatoren). Arbeitslosenquote, Preisentwicklung und Tarifabschlüsse reagieren erst mit Verzögerung (Spätindikatoren). Die Konjunkturbeobachtung dient der Wirtschaftspolitik nach dem Stabilitäts- und Wachstumsgesetz (§ 1 StabG).'
    },
    {
      nr: 28, thema: 'datenschutz', typ: 'mehrfach',
      text: 'Die Datenschutzbeauftragte Katharina Mayr prüft, ob die Verarbeitung personenbezogener Daten bei der Alpenblick Systemhaus GmbH den Grundsätzen der DSGVO entspricht.',
      frage: 'Welche der folgenden Vorgehensweisen entsprechen den Grundsätzen für die Verarbeitung personenbezogener Daten nach Art. 5 DSGVO?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Vorgehensweisen in die Kästchen ein.',
      optionen: [
        'Im Bewerbungsformular werden nur die Angaben abgefragt, die für die Besetzung der Stelle erforderlich sind.',
        'Kundendaten aus dem Support werden ohne Einwilligung an ein Partnerunternehmen für Werbezwecke weitergegeben.',
        'Personaldaten ausgeschiedener Beschäftigter werden vorsorglich unbegrenzt aufbewahrt.',
        'Unterlagen abgelehnter Bewerberinnen und Bewerber werden nach Ablauf der festgelegten Aufbewahrungsfrist gelöscht.',
        'Für die Anmeldung zum Newsletter sind Geburtsdatum und Familienstand Pflichtangaben.',
        'Krankmeldungen der Beschäftigten werden in einem Ordner abgelegt, auf den alle Beschäftigten zugreifen können.'
      ],
      loesung: [1, 4],
      erklaerung: 'Art. 5 Abs. 1 DSGVO nennt u. a. Rechtmäßigkeit und Transparenz, Zweckbindung, Datenminimierung (nur erforderliche Daten, Buchst. c), Richtigkeit, Speicherbegrenzung (Löschung, wenn die Daten nicht mehr benötigt werden, Buchst. e) sowie Integrität und Vertraulichkeit (Schutz vor unbefugtem Zugriff, Buchst. f). Die Weitergabe für Werbung ohne Rechtsgrundlage verletzt Rechtmäßigkeit und Zweckbindung, die unbegrenzte Aufbewahrung die Speicherbegrenzung, die Pflichtangaben im Newsletter die Datenminimierung und der offene Ordner mit Gesundheitsdaten die Vertraulichkeit.'
    },
    {
      nr: 29, thema: 'umweltschutz', typ: 'reihenfolge',
      text: 'Die Alpenblick Systemhaus GmbH will beim Austausch von Kundenhardware die Abfallhierarchie des Kreislaufwirtschaftsgesetzes (KrWG) beachten.',
      frage: 'Bringen Sie die folgenden Maßnahmen in die Rangfolge der Abfallhierarchie nach § 6 KrWG.',
      anweisung: 'Tragen Sie für die Maßnahme mit dem höchsten Rang die Ziffer 1, für die Maßnahme mit dem zweithöchsten Rang die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Maßnahmen',
      items: [
        { text: 'Kunststoffgehäuse und Metalle defekter Monitore werden getrennt und stofflich verwertet.', loesung: 3 },
        { text: 'Von Kunden als Elektroaltgeräte abgegebene Notebooks werden geprüft, repariert und für den erneuten Einsatz aufbereitet.', loesung: 2 },
        { text: 'Nicht verwertbare Reste werden auf einer Deponie abgelagert.', loesung: 5 },
        { text: 'Hardware wird in Mehrweg-Transportboxen statt in Einwegkartons ausgeliefert.', loesung: 1 },
        { text: 'Verschmutzte Verpackungsreste werden in einem Kraftwerk zur Energiegewinnung verbrannt.', loesung: 4 }
      ],
      erklaerung: '§ 6 Abs. 1 KrWG legt die Rangfolge fest: 1. Vermeidung (z. B. Mehrwegverpackungen), 2. Vorbereitung zur Wiederverwendung (Prüfen, Reinigen, Reparieren von Abfällen), 3. Recycling (stoffliche Verwertung), 4. sonstige Verwertung, insbesondere energetische Verwertung, 5. Beseitigung (z. B. Deponie).'
    },
    {
      nr: 30, thema: 'umweltschutz', typ: 'einfach',
      text: 'Für die Notstromaggregate im neuen Rechenzentrum der Alpenblick Systemhaus GmbH verlangt die Behörde schon vor der Inbetriebnahme Auffangwannen unter den Dieseltanks. So soll verhindert werden, dass bei einem Leck Kraftstoff in das Grundwasser gelangt.',
      frage: 'Welches Prinzip der Umweltpolitik liegt dieser Auflage zugrunde?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Prinzip in das Kästchen ein.',
      optionen: [
        'Vorsorgeprinzip – Umweltschäden sollen durch vorausschauendes Handeln von vornherein vermieden werden.',
        'Verursacherprinzip – wer einen Umweltschaden verursacht hat, muss für dessen Beseitigung aufkommen.',
        'Gemeinlastprinzip – die Allgemeinheit trägt die Kosten des Umweltschutzes über Steuern.',
        'Kooperationsprinzip – Staat, Wirtschaft und Gesellschaft lösen Umweltprobleme gemeinsam.',
        'Maximalprinzip – mit gegebenen Mitteln soll ein möglichst großer Erfolg erzielt werden.'
      ],
      loesung: 1,
      erklaerung: 'Nach dem Vorsorgeprinzip sollen Umweltbelastungen schon im Vorfeld vermieden werden, bevor ein Schaden entsteht, hier durch Auffangwannen vor der Inbetriebnahme (Anforderungen an Anlagen mit wassergefährdenden Stoffen, § 62 WHG). Das Prinzip folgt aus dem Staatsziel Umweltschutz (Art. 20a GG) und ist in Art. 191 Abs. 2 AEUV ausdrücklich genannt. Das Verursacherprinzip betrifft die Kostentragung für verursachte Schäden, das Gemeinlastprinzip die Finanzierung durch die Allgemeinheit.'
    }
  ]
});
