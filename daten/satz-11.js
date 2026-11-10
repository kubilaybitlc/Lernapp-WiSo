// Übungssatz 11 – eigene Aufgaben im Stil der IHK-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-11',
  titel: 'Übungssatz 11',
  untertitel: 'Ruhrkontor IT-Service e. K.',
  ausgangssituation:
    'Die Ruhrkontor IT-Service e. K. mit Sitz in Bochum betreut die Computer und Netzwerke von Arztpraxen sowie Anwalts- und Steuerkanzleien im Ruhrgebiet. Inhaberin ist die eingetragene Kauffrau Katrin Wolters. Das Unternehmen beschäftigt 45 Arbeitnehmerinnen und Arbeitnehmer und ist nicht tarifgebunden. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 3,
      text: 'Die Ruhrkontor bildet Fachinformatikerinnen und Fachinformatiker für Systemintegration aus; die Ausbildung dauert laut Ausbildungsordnung drei Jahre. Die Inhaberin Katrin Wolters hat die Ausbildungsverträge abgeschlossen. Ausgebildet werden die Auszubildenden vom Systemadministrator Dirk Pohlmann, der die Ausbilder-Eignungsprüfung bestanden hat.'
    },
    {
      von: 4, bis: 6,
      text: 'Im Frühjahr 2026 haben die Beschäftigten der Ruhrkontor erstmals einen Betriebsrat gewählt. Er besteht aus drei Mitgliedern, Vorsitzende ist Sabine Koch.'
    },
    {
      von: 27, bis: 27,
      text: 'Die Ruhrkontor hat im letzten Quartal zwei Projekte abgeschlossen. Das Controlling hat die Erträge und Aufwendungen ermittelt, die den Projekten zuzurechnen sind:',
      tabelle: {
        kopf: ['Projekt', 'Erträge', 'Aufwendungen'],
        zeilen: [
          ['Netzwerk Kanzlei Becker & Partner', '30.000,00 EUR', '25.000,00 EUR'],
          ['Praxis-IT Dr. Hoffmeister', '14.000,00 EUR', '10.000,00 EUR']
        ]
      }
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'ausbildung', typ: 'einfach',
      text: 'Die Auszubildende Ayla Demirtaş möchte im zweiten Ausbildungsjahr drei Monate bei einem Partnerunternehmen in Rotterdam arbeiten und dort Netzwerke in Arztpraxen einrichten.',
      frage: 'Welche der folgenden Aussagen zum Auslandsaufenthalt trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Auslandsaufenthalt ist während der Berufsausbildung nicht zulässig; er ist erst nach der Abschlussprüfung möglich.',
        'Für die Zeit im Ausland muss das Berufsausbildungsverhältnis aufgelöst und danach neu abgeschlossen werden.',
        'Teile der Ausbildung dürfen im Ausland stattfinden, wenn dies dem Ausbildungsziel dient; insgesamt sollen sie ein Viertel der Ausbildungsdauer, hier neun Monate, nicht überschreiten.',
        'Die Zeit im Ausland wird nicht auf die Ausbildungsdauer angerechnet, sodass sich die Ausbildung um drei Monate verlängert.',
        'Während des Auslandsaufenthalts entfällt der Anspruch auf Ausbildungsvergütung.'
      ],
      loesung: 3,
      erklaerung: '§ 2 Abs. 3 BBiG: Teile der Berufsausbildung können im Ausland durchgeführt werden, wenn dies dem Ausbildungsziel dient; ihre Gesamtdauer soll ein Viertel der in der Ausbildungsordnung festgelegten Ausbildungsdauer nicht überschreiten (36 Monate ÷ 4 = 9 Monate). Der Auslandsaufenthalt ist Teil der Ausbildung: Das Ausbildungsverhältnis mit allen Rechten und Pflichten, auch der Vergütung, besteht weiter. Dauert er länger als vier Wochen, ist ein mit der IHK abgestimmter Plan erforderlich (§ 76 Abs. 3 BBiG).'
    },
    {
      nr: 2, thema: 'ausbildung', typ: 'mehrfach',
      text: 'Der Auszubildende Tim Brockhoff ist im dritten Ausbildungsjahr und hat an Teil 1 der Abschlussprüfung teilgenommen. Nun meldet Herr Pohlmann ihn zu Teil 2 der Abschlussprüfung an.',
      frage: 'Welche der folgenden Voraussetzungen muss Herr Brockhoff für die Zulassung zu Teil 2 der Abschlussprüfung erfüllen?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Voraussetzungen in die Kästchen ein.',
      optionen: [
        'Er hat seinen Ausbildungsnachweis über die Ausbildende schriftlich oder elektronisch vorgelegt.',
        'Er hat in allen Fächern der Berufsschule mindestens die Note „befriedigend“ erreicht.',
        'Sein Berufsausbildungsverhältnis ist im Verzeichnis der Berufsausbildungsverhältnisse bei der IHK eingetragen.',
        'Er hat in Teil 1 der Abschlussprüfung mindestens 50 Punkte erreicht.',
        'Der Betriebsrat hat der Anmeldung schriftlich zugestimmt.',
        'Er ist persönlich Mitglied der Industrie- und Handelskammer.'
      ],
      loesung: [1, 3],
      erklaerung: '§ 43 Abs. 1 BBiG: Zur Abschlussprüfung ist zuzulassen, wer die Ausbildungsdauer zurückgelegt hat oder wessen Ausbildungsdauer nicht später als zwei Monate nach dem Prüfungstermin endet (Nr. 1), wer an vorgeschriebenen Zwischenprüfungen teilgenommen und den Ausbildungsnachweis über die Ausbildenden schriftlich oder elektronisch vorgelegt hat (Nr. 2; eine Unterschrift ist seit August 2024 nicht mehr vorgeschrieben) und wessen Berufsausbildungsverhältnis in das Verzeichnis eingetragen ist (Nr. 3). Bei der gestreckten Abschlussprüfung muss für Teil 2 zusätzlich an Teil 1 teilgenommen worden sein; auf das Ergebnis kommt es dafür nicht an (§ 44 Abs. 3 BBiG). Berufsschulnoten, eine Zustimmung des Betriebsrats oder eine IHK-Mitgliedschaft der Auszubildenden sind keine Voraussetzungen.'
    },
    {
      nr: 3, thema: 'ausbildung', typ: 'zuordnung',
      text: 'Ein neuer Auszubildender fragt, wer im Betrieb welche Aufgaben in der Ausbildung hat.',
      frage: 'Welche der folgenden Personen sind den nachstehenden Aufgaben zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Person in das Kästchen ein. Eine Person kann mehreren Aufgaben zugeordnet werden.',
      optionenTitel: 'Personen',
      optionen: [
        'Katrin Wolters als Ausbildende',
        'Dirk Pohlmann als Ausbilder',
        'Die Auszubildenden'
      ],
      itemsTitel: 'Aufgaben',
      items: [
        { text: 'Schließt den Berufsausbildungsvertrag ab und zahlt die Ausbildungsvergütung', loesung: 1 },
        { text: 'Vermittelt die Ausbildungsinhalte in der Ausbildungsstätte unmittelbar, verantwortlich und in wesentlichem Umfang', loesung: 2 },
        { text: 'Führen den Ausbildungsnachweis und legen ihn regelmäßig zur Durchsicht vor', loesung: 3 },
        { text: 'Stellt die für die Ausbildung erforderlichen Ausbildungsmittel kostenlos zur Verfügung', loesung: 1 }
      ],
      erklaerung: 'Ausbildende sind diejenigen, die Auszubildende einstellen und den Vertrag schließen (§ 10 Abs. 1 BBiG); sie zahlen die Vergütung (§ 17 BBiG) und stellen die Ausbildungsmittel kostenlos zur Verfügung (§ 14 Abs. 1 Nr. 3 BBiG). Bilden sie nicht selbst aus, müssen sie einen persönlich und fachlich geeigneten Ausbilder ausdrücklich damit beauftragen (§ 14 Abs. 1 Nr. 2, § 28 BBiG), der die Inhalte unmittelbar, verantwortlich und in wesentlichem Umfang vermittelt. Die Auszubildenden führen den Ausbildungsnachweis (§ 13 Satz 2 Nr. 7 BBiG), die Ausbildenden sehen ihn regelmäßig durch (§ 14 Abs. 2 BBiG).'
    },
    {
      nr: 4, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Bernd Lüttgen wurde zum ersten Mal in den Betriebsrat gewählt. Der Betriebsrat beschließt, dass er an einem dreitägigen Grundlagenseminar zum Betriebsverfassungsgesetz teilnehmen soll, und teilt Frau Wolters Termin und Kosten rechtzeitig mit.',
      frage: 'Welche der folgenden Aussagen zur Seminarteilnahme trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Lüttgen muss für das Seminar Urlaub nehmen, weil es außerhalb des Betriebs stattfindet.',
        'Herr Lüttgen ist unter Fortzahlung seines Arbeitsentgelts freizustellen, und die erforderlichen Seminarkosten trägt der Arbeitgeber.',
        'Die Seminarkosten muss die Gewerkschaft tragen, in der Herr Lüttgen Mitglied ist.',
        'Ein Seminarbesuch ist nur mit ausdrücklicher Zustimmung der Inhaberin zulässig, die sie ohne Begründung verweigern kann.',
        'Die Seminarkosten werden in Raten vom Gehalt des Betriebsratsmitglieds einbehalten.'
      ],
      loesung: 2,
      erklaerung: '§ 37 Abs. 6 BetrVG: Betriebsratsmitglieder sind für Schulungen, die für die Betriebsratsarbeit erforderliche Kenntnisse vermitteln, ohne Minderung des Arbeitsentgelts freizustellen; Grundkenntnisse des Betriebsverfassungsrechts sind für neu gewählte Mitglieder stets erforderlich. Der Betriebsrat beschließt die Teilnahme, berücksichtigt betriebliche Notwendigkeiten und teilt Zeitpunkt und Teilnehmer rechtzeitig mit. Die Kosten der erforderlichen Schulung trägt der Arbeitgeber (§ 40 Abs. 1 BetrVG). Zusätzlich hat jedes Mitglied während seiner Amtszeit Anspruch auf drei Wochen, erstmals gewählte Mitglieder auf vier Wochen bezahlte Freistellung für als geeignet anerkannte Veranstaltungen (§ 37 Abs. 7 BetrVG).'
    },
    {
      nr: 5, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Der Betriebsrat hat verlangt, dass alle frei werdenden Stellen zunächst innerhalb des Betriebs ausgeschrieben werden. Frau Wolters möchte die Stelle der Teamleitung Netzwerktechnik trotzdem ohne interne Ausschreibung mit einem externen Bewerber besetzen.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Betriebsverfassungsgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Betriebsrat darf selbst bestimmen, welcher Bewerber die Stelle erhält.',
        'Interne Bewerber müssen bei gleicher Eignung immer den Vorzug vor externen Bewerbern erhalten.',
        'Eine innerbetriebliche Ausschreibung kann der Betriebsrat nur für Ausbildungsplätze verlangen.',
        'Die Stelle muss vor ihrer Besetzung im Betrieb ausgeschrieben werden; unterbleibt dies, kann der Betriebsrat die Zustimmung zur Einstellung verweigern.',
        'Nach dem Verlangen des Betriebsrats ist eine Stellenanzeige außerhalb des Betriebs verboten.'
      ],
      loesung: 4,
      erklaerung: '§ 93 BetrVG: Der Betriebsrat kann verlangen, dass Arbeitsplätze, die besetzt werden sollen, vor ihrer Besetzung innerhalb des Betriebs ausgeschrieben werden. Unterbleibt die verlangte Ausschreibung, kann er die Zustimmung zur Einstellung verweigern (§ 99 Abs. 2 Nr. 5 BetrVG; die Ruhrkontor beschäftigt mehr als 20 wahlberechtigte Arbeitnehmer). Eine externe Stellenanzeige bleibt zulässig, und die Arbeitgeberin entscheidet weiterhin selbst, wen sie einstellt; einen Vorrang interner Bewerber schreibt das Gesetz nicht vor.'
    },
    {
      nr: 6, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Nach einem Streit über die Einteilung der Rufbereitschaft schlägt ein Betriebsratsmitglied vor, der Betriebsrat solle die Beschäftigten zu einer zweistündigen Arbeitsniederlegung aufrufen, um Druck auf Frau Wolters auszuüben.',
      frage: 'Welche der folgenden Aussagen zum Verhältnis zwischen Arbeitgeberin und Betriebsrat trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Arbeitgeberin und Betriebsrat arbeiten vertrauensvoll zusammen und sollen mindestens einmal im Monat zu einer Besprechung zusammentreten; Maßnahmen des Arbeitskampfes zwischen ihnen sind unzulässig.',
        'Der Betriebsrat darf zur Arbeitsniederlegung aufrufen, wenn die Mehrheit der Beschäftigten zustimmt.',
        'Der Betriebsrat darf streiken, sobald die Arbeitgeberin einen Vorschlag des Betriebsrats ablehnt.',
        'Die Arbeitgeberin darf dem Betriebsrat im Gegenzug Sitzungen während der Arbeitszeit verbieten.',
        'Meinungsverschiedenheiten zwischen Arbeitgeberin und Betriebsrat entscheidet die Industrie- und Handelskammer verbindlich.'
      ],
      loesung: 1,
      erklaerung: 'Arbeitgeber und Betriebsrat arbeiten vertrauensvoll zum Wohl der Arbeitnehmer und des Betriebs zusammen (§ 2 Abs. 1 BetrVG). Sie sollen mindestens einmal im Monat zu einer Besprechung zusammentreten und über strittige Fragen mit dem ernsten Willen zur Einigung verhandeln (§ 74 Abs. 1 BetrVG). Maßnahmen des Arbeitskampfes zwischen Arbeitgeber und Betriebsrat sind unzulässig (§ 74 Abs. 2 BetrVG); Streiks sind Sache der Gewerkschaften. Die Einteilung der Rufbereitschaft ist mitbestimmungspflichtig (§ 87 Abs. 1 Nr. 2 BetrVG); kommt keine Einigung zustande, entscheidet die Einigungsstelle (§ 87 Abs. 2 BetrVG).'
    },
    {
      nr: 7, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Ruhrkontor verlegt ihre Werkstatt von Bochum nach Essen. Der Servicetechniker Jonas Ebert arbeitet seit sieben Jahren im Unternehmen; in seinem Arbeitsvertrag ist Bochum als Arbeitsort festgelegt. Frau Wolters kündigt sein Arbeitsverhältnis nach Anhörung des Betriebsrats fristgerecht und bietet ihm gleichzeitig an, nach Ablauf der Kündigungsfrist zu sonst gleichen Bedingungen in Essen weiterzuarbeiten.',
      frage: 'Welche der folgenden Aussagen zu dieser Änderungskündigung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Ebert muss das Angebot annehmen, weil die Arbeitgeberin den Arbeitsort jederzeit einseitig festlegen kann.',
        'Eine Änderungskündigung ist ohne Einhaltung einer Kündigungsfrist wirksam.',
        'Lehnt Herr Ebert das Angebot ab, arbeitet er automatisch zu den bisherigen Bedingungen in Bochum weiter.',
        'Eine Änderungskündigung ist nur gegenüber Auszubildenden zulässig.',
        'Herr Ebert kann das Angebot unter dem Vorbehalt annehmen, dass die Änderung nicht sozial ungerechtfertigt ist, und dies vom Arbeitsgericht prüfen lassen; den Vorbehalt muss er spätestens innerhalb von drei Wochen nach Zugang der Kündigung erklären.'
      ],
      loesung: 5,
      erklaerung: 'Bei einer Änderungskündigung kündigt der Arbeitgeber das Arbeitsverhältnis und bietet zugleich die Fortsetzung zu geänderten Bedingungen an. Der Arbeitnehmer kann das Angebot unter dem Vorbehalt annehmen, dass die Änderung nicht sozial ungerechtfertigt ist; den Vorbehalt muss er innerhalb der Kündigungsfrist, spätestens innerhalb von drei Wochen nach Zugang der Kündigung erklären (§ 2 KSchG) und Änderungsschutzklage erheben (§ 4 Satz 2 KSchG). Lehnt er ab, endet das Arbeitsverhältnis, wenn die Kündigung sozial gerechtfertigt ist. Kündigungsfristen (§ 622 BGB) und Anhörung des Betriebsrats (§ 102 BetrVG) gelten auch hier. Weil Bochum vertraglich festgelegt ist, kann der Arbeitsort nicht einfach per Weisung geändert werden (§ 106 GewO).'
    },
    {
      nr: 8, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Kundenbetreuerin Melanie Hartwig hat vom 10.08.2026 bis zum 21.08.2026 zehn Arbeitstage Urlaub. Am dritten Urlaubstag erkrankt sie und ist laut ärztlicher Bescheinigung vier Arbeitstage arbeitsunfähig. Sie teilt die Erkrankung sofort mit.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Bundesurlaubsgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Krankheitstage gelten als genommener Urlaub, weil sie in den genehmigten Urlaubszeitraum fallen.',
        'Die vier durch ärztliche Bescheinigung nachgewiesenen Krankheitstage werden nicht auf den Jahresurlaub angerechnet; den Urlaub darf Frau Hartwig aber nicht eigenmächtig um diese Tage verlängern.',
        'Krankheitstage im Urlaub werden nur dann nicht angerechnet, wenn die Erkrankung länger als eine Woche dauert.',
        'Für Krankheitstage im Urlaub braucht Frau Hartwig keine ärztliche Bescheinigung.',
        'Die Arbeitgeberin darf für die Krankheitstage das Urlaubsentgelt vom nächsten Gehalt abziehen.'
      ],
      loesung: 2,
      erklaerung: '§ 9 BUrlG: Erkrankt ein Arbeitnehmer während des Urlaubs, werden die durch ärztliches Zeugnis nachgewiesenen Tage der Arbeitsunfähigkeit auf den Jahresurlaub nicht angerechnet. Die vier Tage bleiben als Urlaubsanspruch erhalten und werden später neu festgelegt (§ 7 Abs. 1 BUrlG). Der Urlaub verlängert sich nicht automatisch; Frau Hartwig muss nach dem geplanten Urlaubsende wieder zur Arbeit kommen. Für die Krankheitstage erhält sie Entgeltfortzahlung (§ 3 EFZG); die Arbeitsunfähigkeit ist unverzüglich mitzuteilen (§ 5 EFZG).'
    },
    {
      nr: 9, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Frau Wolters möchte den Netzwerktechniker Marco Velić als „freien Mitarbeiter“ beschäftigen, um Sozialversicherungsbeiträge zu sparen. Herr Velić soll ausschließlich für die Ruhrkontor arbeiten, sich an den Dienstplan halten, seine Aufträge von der Disposition zugewiesen bekommen und mit Firmenwagen und Firmenkleidung zu den Kunden fahren.',
      frage: 'Welche der folgenden Aussagen zur Beschäftigung von Herrn Velić trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Entscheidend ist allein die Bezeichnung im Vertrag; als „freier Mitarbeiter“ ist Herr Velić selbstständig.',
        'Herr Velić ist selbstständig, sobald er ein Gewerbe anmeldet und Rechnungen schreibt.',
        'Herr Velić ist Arbeitnehmer, weil er weisungsgebunden und in die Arbeitsorganisation eingegliedert arbeitet; die Bezeichnung als freier Mitarbeiter ändert daran nichts.',
        'Scheinselbstständigkeit gibt es nur in der Bauwirtschaft.',
        'Als freier Mitarbeiter darf Herr Velić höchstens 20 Stunden pro Woche arbeiten.'
      ],
      loesung: 3,
      erklaerung: '§ 611a Abs. 1 BGB: Arbeitnehmer ist, wer im Dienst eines anderen zur Leistung weisungsgebundener, fremdbestimmter Arbeit in persönlicher Abhängigkeit verpflichtet ist; das Weisungsrecht kann Inhalt, Durchführung, Zeit und Ort der Tätigkeit betreffen. Maßgeblich ist eine Gesamtbetrachtung der tatsächlichen Durchführung, nicht die Bezeichnung im Vertrag. Liegt Scheinselbstständigkeit vor, muss der Arbeitgeber die Sozialversicherungsbeiträge auch rückwirkend zahlen (§§ 7, 28e SGB IV). Klarheit schafft ein Statusfeststellungsverfahren bei der Deutschen Rentenversicherung (§ 7a SGB IV).'
    },
    {
      nr: 10, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Im Juli zeigt das Thermometer im Büro der Hotline nachmittags 31 °C. Die Beschäftigten fragen, welche Regeln für die Raumtemperatur gelten.',
      frage: 'Welche der folgenden Aussagen trifft nach der Technischen Regel für Arbeitsstätten „Raumtemperatur“ (ASR A3.5) zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ab 26 °C haben alle Beschäftigten gesetzlich hitzefrei.',
        'Die Raumtemperatur im Büro darf höchstens 22 °C betragen; bei höheren Werten muss die Arbeit eingestellt werden.',
        'Bei mehr als 30 °C muss die Arbeitgeberin wirksame Maßnahmen ergreifen, z. B. Sonnenschutz, Lüften in den frühen Morgenstunden, Gleitzeit, gelockerte Kleiderregeln oder Getränke.',
        'Für Raumtemperaturen gibt es keine Vorgaben; sie werden ausschließlich im Tarifvertrag geregelt.',
        'Die Beschäftigten müssen Ventilatoren auf eigene Kosten anschaffen.'
      ],
      loesung: 3,
      erklaerung: 'Nach ASR A3.5 muss die Lufttemperatur in Büroräumen mindestens 20 °C betragen und soll 26 °C nicht überschreiten. Wird diese Grenze überschritten, sollen zusätzliche Maßnahmen ergriffen werden; bei mehr als 30 °C müssen nach der Gefährdungsbeurteilung wirksame Maßnahmen getroffen werden, z. B. Sonnenschutz, Lüften in den frühen Morgenstunden, Gleitzeit, gelockerte Bekleidungsregeln oder geeignete Getränke. Über 35 °C ist ein Raum ohne besondere technische oder organisatorische Maßnahmen nicht als Arbeitsraum geeignet. Einen gesetzlichen Anspruch auf „hitzefrei“ gibt es nicht. Grundlage ist § 3a ArbStättV mit Anhang Nr. 3.5; die Kosten für Schutzmaßnahmen trägt der Arbeitgeber (§ 3 Abs. 3 ArbSchG).'
    },
    {
      nr: 11, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'In der Werkstatt werden Lötstationen, Kabeltrommeln und Netzteile benutzt. Einige Beschäftigte bringen außerdem eigene Wasserkocher und Ladegeräte mit. Frau Wolters fragt die Fachkraft für Arbeitssicherheit, wie diese Geräte geprüft werden müssen.',
      frage: 'Welche der folgenden Aussagen zur Prüfung ortsveränderlicher elektrischer Geräte trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Arbeitgeberin muss dafür sorgen, dass die Geräte in regelmäßigen Abständen von einer Elektrofachkraft oder unter deren Leitung und Aufsicht geprüft werden; die Prüffristen legt sie anhand der Gefährdungsbeurteilung fest.',
        'Elektrische Geräte müssen erst geprüft werden, wenn mit ihnen ein Unfall passiert ist.',
        'Privat mitgebrachte Geräte dürfen ohne Prüfung benutzt werden, weil die Arbeitgeberin für sie nicht verantwortlich ist.',
        'Die Prüfung darf jeder Beschäftigte auch ohne elektrotechnische Kenntnisse durchführen.',
        'Die Prüfung ist nur in Betrieben mit mehr als 50 Beschäftigten vorgeschrieben.'
      ],
      loesung: 1,
      erklaerung: 'Nach § 5 der DGUV Vorschrift 3 („Elektrische Anlagen und Betriebsmittel“) hat der Unternehmer dafür zu sorgen, dass elektrische Betriebsmittel nach Änderung oder Instandsetzung und in bestimmten Zeitabständen von einer Elektrofachkraft oder unter deren Leitung und Aufsicht auf ihren ordnungsgemäßen Zustand geprüft werden. Die Fristen sind so zu bemessen, dass Mängel rechtzeitig erkannt werden, und ergeben sich aus der Gefährdungsbeurteilung (§ 3 Abs. 6 BetrSichV); als Richtwerte nennt die DGUV z. B. für Büros höchstens zwei Jahre, für Werkstätten deutlich kürzere Fristen (in der Regel sechs Monate, bei geringer Fehlerquote bis zu einem Jahr). Auch privat mitgebrachte Geräte, die im Betrieb benutzt werden, müssen geprüft oder ihre Benutzung muss untersagt werden. Die Pflicht gilt unabhängig von der Betriebsgröße.'
    },
    {
      nr: 12, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die Systemadministratorin Nadine Schreiber kehrt acht Monate nach der Geburt ihres Kindes aus der Elternzeit zurück und arbeitet wieder in Vollzeit. Sie stillt ihr Kind noch und bittet um Freistellung zum Stillen.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Mutterschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Anspruch auf Stillzeit besteht nur in den ersten sechs Wochen nach der Entbindung.',
        'Die Stillzeit wird auf die gesetzlichen Ruhepausen angerechnet.',
        'Frau Schreiber muss die Stillzeit am Ende des Arbeitstages nacharbeiten.',
        'Frau Schreiber ist in den ersten zwölf Monaten nach der Entbindung auf ihr Verlangen für die zum Stillen erforderliche Zeit freizustellen, mindestens zweimal täglich für eine halbe Stunde oder einmal täglich für eine Stunde, ohne dass ihr Entgelt gemindert wird.',
        'Für die Stillzeit braucht Frau Schreiber die Zustimmung des Betriebsrats.'
      ],
      loesung: 4,
      erklaerung: '§ 7 Abs. 2 MuSchG: Der Arbeitgeber hat eine stillende Frau auf ihr Verlangen während der ersten zwölf Monate nach der Entbindung für die zum Stillen erforderliche Zeit freizustellen, mindestens aber zweimal täglich für eine halbe Stunde oder einmal täglich für eine Stunde. § 23 Abs. 1 MuSchG: Durch die Freistellung darf kein Entgeltausfall eintreten; sie ist weder vor- noch nachzuarbeiten und wird nicht auf Ruhepausen angerechnet.'
    },
    {
      nr: 13, thema: 'rechtsformen', typ: 'einfach',
      text: 'Die Steuerberaterinnen Dr. Anja Kemper und Ulrike Neuhaus, langjährige Kundinnen der Ruhrkontor, wollen ihre Kanzleien zusammenlegen. Sie erwägen dafür eine Partnerschaftsgesellschaft.',
      frage: 'Welche der folgenden Aussagen zur Partnerschaftsgesellschaft trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Partnerschaftsgesellschaft wird in Abteilung B des Handelsregisters eingetragen.',
        'Für die Gründung ist ein Mindestkapital von 25.000,00 EUR erforderlich.',
        'Partner können auch Gewerbetreibende wie ein IT-Händler sein.',
        'Die Partnerinnen haften für Verbindlichkeiten der Gesellschaft überhaupt nicht persönlich.',
        'Sie steht nur Angehörigen freier Berufe offen; für Fehler bei der Berufsausübung haftet neben der Gesellschaft grundsätzlich nur die Partnerin persönlich, die mit dem Auftrag befasst war.'
      ],
      loesung: 5,
      erklaerung: 'In der Partnerschaftsgesellschaft schließen sich Angehörige freier Berufe, z. B. Steuerberater, Ärzte oder Architekten, zur Ausübung ihrer Berufe zusammen; sie übt kein Handelsgewerbe aus, Partner können grundsätzlich nur natürliche Personen sein (§ 1 PartGG). Sie wird in das Partnerschaftsregister beim Amtsgericht eingetragen (§ 4 PartGG) und braucht kein Mindestkapital. Für Verbindlichkeiten haften die Partner neben dem Gesellschaftsvermögen als Gesamtschuldner; für berufliche Fehler haftet jedoch nur der Partner, der mit dem Auftrag befasst war (§ 8 Abs. 1, 2 PartGG). Mit einer Berufshaftpflichtversicherung ist auch eine PartG mbB möglich (§ 8 Abs. 4 PartGG).'
    },
    {
      nr: 14, thema: 'rechtsformen', typ: 'zahl',
      text: 'Frau Wolters besitzt privat 400 Aktien der Rheinhard Hardware AG, die die Ruhrkontor mit Notebooks beliefert. Die AG hat ein Grundkapital von 12.000.000,00 EUR, eingeteilt in 2.400.000 Stückaktien. Für das abgelaufene Geschäftsjahr weist sie einen Bilanzgewinn von 3.600.000,00 EUR aus. Die Hauptversammlung beschließt, 2.880.000,00 EUR als Dividende auszuschütten und den Rest auf neue Rechnung vorzutragen.',
      frage: 'Berechnen Sie die Dividende je Aktie in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 1.2, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Über die Verwendung des Bilanzgewinns beschließt die Hauptversammlung (§§ 119 Abs. 1 Nr. 2, 174 AktG). Die Aktionäre haben Anspruch auf den ausgeschütteten Bilanzgewinn, verteilt nach ihren Anteilen am Grundkapital (§§ 58 Abs. 4, 60 Abs. 1 AktG). Dividende je Aktie = 2.880.000,00 EUR ÷ 2.400.000 Aktien = 1,20 EUR. Frau Wolters erhält damit 400 × 1,20 EUR = 480,00 EUR vor Steuern.'
    },
    {
      nr: 15, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Der Servicetechniker Patrick Szymański (28 Jahre) möchte für sein Alter vorsorgen. Er hat gehört, dass die gesetzliche Rente allein künftig nicht ausreichen wird, und fragt nach seinen Möglichkeiten.',
      frage: 'Welche der folgenden Aussagen zur Altersvorsorge trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die betriebliche Altersversorgung ist für alle Arbeitnehmer gesetzlich vorgeschrieben und wird allein vom Arbeitgeber finanziert.',
        'Die Altersvorsorge stützt sich auf gesetzliche Rentenversicherung, betriebliche Altersversorgung und private Vorsorge; Herr Szymański kann verlangen, dass ein Teil seines Gehalts für eine betriebliche Altersversorgung verwendet wird (Entgeltumwandlung).',
        'Eine Entgeltumwandlung ist nur möglich, wenn der Arbeitgeber tarifgebunden ist.',
        'Private Vorsorge, z. B. eine private Rentenversicherung, ist Teil der gesetzlichen Rentenversicherung.',
        'Wer eine betriebliche Altersversorgung abschließt, scheidet aus der gesetzlichen Rentenversicherung aus.'
      ],
      loesung: 2,
      erklaerung: 'Die Altersvorsorge in Deutschland beruht auf drei Säulen: gesetzliche Rentenversicherung (SGB VI), betriebliche Altersversorgung (BetrAVG) und private Vorsorge. Nach § 1a BetrAVG können Arbeitnehmer verlangen, dass von ihren künftigen Entgeltansprüchen bis zu 4 % der Beitragsbemessungsgrenze der Rentenversicherung für ihre betriebliche Altersversorgung verwendet werden (2026: 4 % von 101.400,00 EUR = 4.056,00 EUR im Jahr). Spart der Arbeitgeber dadurch Sozialversicherungsbeiträge, muss er grundsätzlich 15 % des umgewandelten Betrags zusätzlich einzahlen (§ 1a Abs. 1a BetrAVG). Die Pflichtversicherung in der gesetzlichen Rentenversicherung bleibt bestehen.'
    },
    {
      nr: 16, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Die sechsjährige, über ihren Vater familienversicherte Tochter des gesetzlich krankenversicherten Netzwerktechnikers Oliver Kamps hat eine Lungenentzündung. Laut Kinderarzt muss sie zu Hause betreut werden. Die Mutter ist auf Dienstreise, weitere Personen leben nicht im Haushalt. Der Arbeitsvertrag schließt eine bezahlte Freistellung nach § 616 BGB aus; Betriebsvereinbarungen sehen für diesen Fall nichts vor.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Kamps muss für die Betreuung seiner Tochter Urlaub nehmen.',
        'Die Arbeitgeberin muss das Gehalt nach dem Entgeltfortzahlungsgesetz bis zu sechs Wochen weiterzahlen.',
        'Einen Anspruch auf Freistellung zur Betreuung eines kranken Kindes haben nur Mütter.',
        'Herr Kamps hat Anspruch auf Freistellung von der Arbeit und erhält für diese Tage Kinderkrankengeld von seiner Krankenkasse, weil seine Tochter jünger als zwölf Jahre ist und ein ärztliches Zeugnis vorliegt.',
        'Das Kinderkrankengeld zahlt die Pflegekasse der Tochter.'
      ],
      loesung: 4,
      erklaerung: '§ 45 Abs. 1 SGB V: Versicherte haben Anspruch auf Krankengeld, wenn es nach ärztlichem Zeugnis erforderlich ist, dass sie zur Beaufsichtigung, Betreuung oder Pflege ihres erkrankten und versicherten Kindes der Arbeit fernbleiben, eine andere im Haushalt lebende Person das Kind nicht betreuen kann und das Kind das zwölfte Lebensjahr noch nicht vollendet hat. Für diese Zeit besteht gegen den Arbeitgeber ein Anspruch auf unbezahlte Freistellung (§ 45 Abs. 3 SGB V), soweit nicht schon ein Anspruch auf bezahlte Freistellung besteht, z. B. nach § 616 BGB. Die Zahl der Anspruchstage je Kind und Kalenderjahr ist gesetzlich begrenzt. Das Entgeltfortzahlungsgesetz gilt nur bei eigener Arbeitsunfähigkeit.'
    },
    {
      nr: 17, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Ruhrkontor will in ihrer Verwaltung Papier sparen und umweltfreundlicher arbeiten. Die Beschäftigten sammeln Vorschläge.',
      frage: 'Welche der folgenden Maßnahmen ist dafür **nicht** geeignet?',
      anweisung: 'Tragen Sie die Ziffer vor der **nicht** geeigneten Maßnahme in das Kästchen ein.',
      optionen: [
        'Die Drucker werden standardmäßig auf beidseitigen Schwarz-Weiß-Druck eingestellt.',
        'Rechnungen werden als elektronische Rechnung versendet und digital archiviert.',
        'Für unvermeidbare Ausdrucke wird Recyclingpapier mit dem Blauen Engel verwendet.',
        'Alle eingehenden E-Mails werden zur Sicherheit ausgedruckt und in Ordnern abgelegt.',
        'Kundenunterschriften werden auf dem Tablet statt auf Papierformularen eingeholt.'
      ],
      loesung: 4,
      erklaerung: 'Nach der Abfallhierarchie des Kreislaufwirtschaftsgesetzes hat die Vermeidung von Abfällen Vorrang (§ 6 Abs. 1 KrWG). Beidseitiger Druck, elektronische Rechnungen und Archivierung sowie digitale Unterschriften vermeiden Papier; Recyclingpapier mit dem Blauen Engel spart Holz, Wasser und Energie. Das Ausdrucken aller E-Mails erhöht dagegen den Verbrauch von Papier, Toner und Energie und ist auch für die Aufbewahrung nicht nötig, weil Geschäftsunterlagen grundsätzlich elektronisch aufbewahrt werden dürfen (§ 257 Abs. 3 HGB, § 147 Abs. 2 AO).'
    },
    {
      nr: 18, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Ruhrkontor bietet ihren Kunden neben Neugeräten auch „refurbished“ Notebooks an.',
      frage: 'Welche der folgenden Aussagen beschreibt Refurbishing zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Beim Refurbishing …',
      optionen: [
        'werden gebrauchte Geräte geprüft, gereinigt, repariert und mit sicher gelöschten Datenträgern wieder verkauft, sodass sie länger genutzt und Ressourcen geschont werden.',
        'werden Altgeräte zerkleinert, um daraus Metalle und Kunststoffe als Rohstoffe zurückzugewinnen.',
        'werden Altgeräte in einem Kraftwerk zur Energiegewinnung verbrannt.',
        'werden Neugeräte in einer Verpackung aus Recyclingkarton ausgeliefert.',
        'werden Geräte nur gemietet statt gekauft und bleiben Eigentum des Herstellers.'
      ],
      loesung: 1,
      erklaerung: 'Refurbishing ist die fachgerechte Aufbereitung gebrauchter Geräte zur Wiederverwendung. Es verlängert die Nutzungsdauer und vermeidet, dass neue Geräte mit hohem Rohstoff- und Energieaufwand hergestellt werden; in der Abfallhierarchie stehen Vermeidung und Vorbereitung zur Wiederverwendung vor dem Recycling (§ 6 Abs. 1 KrWG). Die Rückgewinnung von Rohstoffen ist Recycling, die Verbrennung energetische Verwertung. Vor der Weitergabe müssen personenbezogene Daten sicher gelöscht werden (Art. 17, 32 DSGVO).'
    },
    {
      nr: 19, thema: 'tarifrecht', typ: 'einfach',
      text: 'Ein Bewerber fragt Frau Wolters, warum der Staat nicht einfach einheitliche Gehälter für die IT-Branche festlegt.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Gehälter aller Branchen legt das Bundesministerium für Arbeit und Soziales jährlich fest.',
        'Tarifverträge werden von der Industrie- und Handelskammer für ihre Mitgliedsunternehmen abgeschlossen.',
        'Tarifverträge treten erst in Kraft, wenn der Bundestag ihnen zugestimmt hat.',
        'Tarifverträge werden zwischen Betriebsrat und Arbeitgeber abgeschlossen.',
        'Löhne und Arbeitsbedingungen handeln Gewerkschaften und Arbeitgeberverbände oder einzelne Arbeitgeber eigenverantwortlich ohne staatliche Einmischung aus (Tarifautonomie); der Staat setzt nur Mindeststandards wie den gesetzlichen Mindestlohn.'
      ],
      loesung: 5,
      erklaerung: 'Die Tarifautonomie folgt aus der Koalitionsfreiheit (Art. 9 Abs. 3 GG): Gewerkschaften und Arbeitgeberverbände bzw. einzelne Arbeitgeber regeln Löhne und Arbeitsbedingungen in Tarifverträgen selbst (§§ 1, 2 TVG). Der Staat greift nicht in die Verhandlungen ein, setzt aber gesetzliche Mindeststandards, z. B. Mindestlohn, Mindesturlaub oder Höchstarbeitszeit. Betriebsrat und Arbeitgeber schließen Betriebsvereinbarungen, keine Tarifverträge (§ 77 BetrVG).'
    },
    {
      nr: 20, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Ruhrkontor betreut auch die IT einer Stadtverwaltung. Die Gewerkschaft ver.di ruft dort nach gescheiterten Tarifverhandlungen rechtmäßig zum Streik auf. In der IT-Abteilung der Stadt arbeiten Tarifbeschäftigte und Beamte.',
      frage: 'Welche der folgenden Aussagen zur Streikbeteiligung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Alle Beschäftigten der Stadtverwaltung dürfen streiken, auch die Beamten.',
        'Die Tarifbeschäftigten dürfen sich am Streik beteiligen, die Beamten dagegen nicht.',
        'Im öffentlichen Dienst ist jeder Streik verboten, weil der Staat Arbeitgeber ist.',
        'Beamte dürfen streiken, wenn sie Mitglied der Gewerkschaft sind.',
        'Der Streik braucht die Zustimmung des Oberbürgermeisters.'
      ],
      loesung: 2,
      erklaerung: 'Tarifbeschäftigte im öffentlichen Dienst haben wie alle Arbeitnehmer das Streikrecht aus Art. 9 Abs. 3 GG. Für Beamte gilt dagegen ein Streikverbot; es gehört zu den hergebrachten Grundsätzen des Berufsbeamtentums (Art. 33 Abs. 5 GG), die das Bundesverfassungsgericht 2018 bestätigt hat. Ihre Besoldung wird nicht durch Tarifvertrag, sondern durch Gesetz geregelt. Mitglied einer Gewerkschaft dürfen Beamte aber sein.'
    },
    {
      nr: 21, thema: 'wirtschaft-grundlagen', typ: 'mehrfach',
      text: 'In einer Schulung zur Wirtschaftsordnung geht es um das Sozialstaatsprinzip des Grundgesetzes.',
      frage: 'Welche der folgenden Einrichtungen oder Leistungen dienen der Verwirklichung des Sozialstaatsprinzips (Art. 20 Abs. 1 GG)?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Einrichtungen oder Leistungen in die Kästchen ein.',
      optionen: [
        'Das Verbot von Preisabsprachen durch das Kartellrecht',
        'Die gesetzliche Sozialversicherung mit Versicherungspflicht für Arbeitnehmer',
        'Die Eintragung von Kaufleuten in das Handelsregister',
        'Die Gewerbefreiheit, nach der grundsätzlich jeder ein Gewerbe betreiben darf',
        'Die Grundsicherung für Arbeitsuchende, die ein menschenwürdiges Existenzminimum sichert',
        'Die Privatisierung staatlicher Unternehmen'
      ],
      loesung: [2, 5],
      erklaerung: 'Nach Art. 20 Abs. 1 GG ist die Bundesrepublik ein „sozialer Bundesstaat“. Der Staat muss für soziale Sicherheit und sozialen Ausgleich sorgen, z. B. durch die Sozialversicherung und die Grundsicherung für Arbeitsuchende (SGB II), die das Existenzminimum sichert. Kartellverbot und Gewerbefreiheit sichern den Wettbewerb und die wirtschaftliche Freiheit, das Handelsregister dient der Information im Handelsverkehr, Privatisierungen verringern den Einfluss des Staates. Die soziale Marktwirtschaft verbindet freien Wettbewerb mit sozialem Ausgleich.'
    },
    {
      nr: 22, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'Die Ruhrkontor sucht Personal für verschiedene Aufgaben. Einige Kunden haben besondere Wünsche.',
      frage: 'In welchem der folgenden Fälle ist eine unterschiedliche Behandlung nach dem Allgemeinen Gleichbehandlungsgesetz (AGG) zulässig?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Fall in das Kästchen ein.',
      optionen: [
        'Für die Hotline werden nur Bewerberinnen und Bewerber unter 35 Jahren eingeladen, weil das Team jung ist.',
        'Für ein international besetztes Entwicklerteam, das auf Englisch arbeitet, werden nur „deutsche Muttersprachler“ gesucht.',
        'Frauen werden für den Serverraum grundsätzlich nicht eingestellt, weil dort gelegentlich schwere Geräte getragen werden.',
        'Bewerberinnen mit Kopftuch werden abgelehnt, weil sie Kundenkontakt hätten.',
        'Für die IT-Betreuung eines Frauenhauses, das Männer zum Schutz der Bewohnerinnen nicht betreten dürfen, wird ausschließlich eine Technikerin eingesetzt.'
      ],
      loesung: 5,
      erklaerung: '§ 8 Abs. 1 AGG: Eine unterschiedliche Behandlung wegen eines in § 1 AGG genannten Grundes ist zulässig, wenn dieser Grund wegen der Art der Tätigkeit oder der Bedingungen ihrer Ausübung eine wesentliche und entscheidende berufliche Anforderung darstellt, der Zweck rechtmäßig und die Anforderung angemessen ist. Das trifft zu, wenn Männer ein Frauenhaus zum Schutz der Bewohnerinnen nicht betreten dürfen. Ein junges Team, Kundenwünsche oder pauschale Annahmen über die körperliche Belastbarkeit rechtfertigen dagegen keine Benachteiligung wegen des Alters, der ethnischen Herkunft, der Religion oder des Geschlechts (§§ 1, 7 AGG); das Merkmal „Muttersprachler“ knüpft an die ethnische Herkunft an.'
    },
    {
      nr: 23, thema: 'organisation', typ: 'zuordnung',
      text: 'Frau Wolters möchte sich als Inhaberin entlasten und informiert sich über verschiedene Führungstechniken („Management by …“).',
      frage: 'Welche der folgenden Führungstechniken sind den nachstehenden Beschreibungen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Führungstechnik in das Kästchen ein. Eine Führungstechnik kann mehreren Beschreibungen zugeordnet werden.',
      optionenTitel: 'Führungstechniken',
      optionen: [
        'Management by Objectives',
        'Management by Exception',
        'Management by Delegation'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Frau Wolters vereinbart mit dem Teamleiter Felix Stratmann messbare Jahresziele, z. B. eine Reaktionszeit unter vier Stunden; wie er sie erreicht, entscheidet er selbst.', loesung: 1 },
        { text: 'Herr Stratmann entscheidet im Tagesgeschäft allein; nur bei Ausgaben über 5.000,00 EUR oder wenn ein Großkunde kündigen will, greift Frau Wolters ein.', loesung: 2 },
        { text: 'Die Werkstattleiterin übernimmt dauerhaft den Aufgabenbereich Ersatzteilbeschaffung mit den dazugehörigen Entscheidungsbefugnissen und der Verantwortung.', loesung: 3 },
        { text: 'Die Höhe der jährlichen Prämie richtet sich danach, in welchem Umfang die vereinbarten Ziele erreicht wurden.', loesung: 1 }
      ],
      erklaerung: 'Management by Objectives: Führung durch Zielvereinbarung; die Mitarbeitenden entscheiden selbst über den Weg, die Zielerreichung wird oft mit Prämien verknüpft. Management by Exception: Die Mitarbeitenden entscheiden im Normalfall selbstständig, die Führungskraft greift nur in vorher festgelegten Ausnahmefällen ein. Management by Delegation: Aufgaben werden dauerhaft mit den nötigen Kompetenzen und der Verantwortung übertragen (Harzburger Modell). Es handelt sich um Führungsmodelle der Betriebswirtschaftslehre ohne Rechtsgrundlage.'
    },
    {
      nr: 24, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Die Ruhrkontor stellt einem Jugendzentrum kostenlos aufbereitete Computer zur Verfügung, unterstützt ehrenamtliches Engagement ihrer Beschäftigten und bezieht Ökostrom, obwohl sie dazu nicht verpflichtet ist. Frau Wolters spricht von Corporate Social Responsibility (CSR).',
      frage: 'Welche der folgenden Aussagen beschreibt Corporate Social Responsibility zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'CSR ist die gesetzliche Pflicht aller Unternehmen, einen Teil ihres Gewinns zu spenden.',
        'CSR ist ein anderes Wort für Gewinnmaximierung.',
        'CSR ist die freiwillige Übernahme gesellschaftlicher Verantwortung für ökologische und soziale Belange, die über die gesetzlichen Pflichten hinausgeht.',
        'CSR ist ein Tarifvertrag über soziale Leistungen für Beschäftigte.',
        'CSR bedeutet, dass ein Unternehmen nur noch gemeinnützige Ziele verfolgen darf.'
      ],
      loesung: 3,
      erklaerung: 'Corporate Social Responsibility (unternehmerische Gesellschaftsverantwortung) umfasst freiwillige Beiträge zu einer nachhaltigen Entwicklung in den Bereichen Umwelt und Soziales, die über die gesetzlichen Anforderungen hinausgehen. Sie ergänzt ökonomische Ziele um ökologische und soziale Ziele und kann das Image sowie die Bindung von Beschäftigten und Kunden stärken. Eine allgemeine Rechtspflicht zu CSR-Maßnahmen gibt es nicht; große Unternehmen haben allerdings Berichtspflichten zur Nachhaltigkeit.'
    },
    {
      nr: 25, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Die Ruhrkontor stellt die Server einer Anwaltskanzlei am Pfingstsonntag, dem 24.05.2026, und am Pfingstmontag, dem 25.05.2026, um, damit der Kanzleibetrieb nicht gestört wird. Der 17-jährige Auszubildende Leon Schaefer möchte unbedingt mithelfen.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Jugendarbeitsschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Schaefer darf an beiden Tagen nicht beschäftigt werden, weil die gesetzlichen Ausnahmen vom Verbot der Sonn- und Feiertagsarbeit für einen IT-Dienstleister nicht gelten.',
        'Herr Schaefer darf an beiden Tagen arbeiten, wenn er dafür in der folgenden Woche zwei freie Tage erhält.',
        'Herr Schaefer darf an beiden Tagen arbeiten, wenn seine Eltern schriftlich zustimmen.',
        'Herr Schaefer darf arbeiten, weil er sich freiwillig gemeldet hat.',
        'Herr Schaefer darf am Sonntag nicht, am Feiertag aber mit einem Zuschlag von 100 % arbeiten.'
      ],
      loesung: 1,
      erklaerung: 'An Sonntagen dürfen Jugendliche nicht beschäftigt werden (§ 17 Abs. 1 JArbSchG), an gesetzlichen Feiertagen ebenfalls nicht (§ 18 Abs. 1 JArbSchG). Ausnahmen gelten nur für bestimmte Bereiche, z. B. Krankenhäuser, Gaststätten, Sport, Landwirtschaft oder Theater (§ 17 Abs. 2, § 18 Abs. 2 JArbSchG); dann ist die Fünf-Tage-Woche durch Freistellung an einem anderen berufsschulfreien Arbeitstag derselben Woche sicherzustellen (§ 17 Abs. 3, § 18 Abs. 3 JArbSchG). Zustimmung der Eltern, Freiwilligkeit oder Zuschläge ändern am Verbot nichts.'
    },
    {
      nr: 26, thema: 'rechtsquellen', typ: 'einfach',
      text: 'Ein Mitarbeiter möchte nachlesen, wie lange seine Arbeitgeberin ihm bei unverschuldeter Arbeitsunfähigkeit infolge Krankheit das Gehalt weiterzahlen muss.',
      frage: 'In welchem der folgenden Gesetze ist dies geregelt?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Gesetz in das Kästchen ein.',
      optionen: [
        'Bundesurlaubsgesetz (BUrlG)',
        'Entgeltfortzahlungsgesetz (EFZG)',
        'Arbeitsschutzgesetz (ArbSchG)',
        'Berufsbildungsgesetz (BBiG)',
        'Kündigungsschutzgesetz (KSchG)'
      ],
      loesung: 2,
      erklaerung: 'Das Entgeltfortzahlungsgesetz regelt die Zahlung des Arbeitsentgelts an Feiertagen und im Krankheitsfall, bei unverschuldeter Arbeitsunfähigkeit bis zur Dauer von sechs Wochen (§ 3 Abs. 1 EFZG); danach zahlt die Krankenkasse Krankengeld (§ 44 SGB V). Das BUrlG regelt den Erholungsurlaub, das ArbSchG den Gesundheitsschutz bei der Arbeit, das BBiG die Berufsausbildung und das KSchG den Schutz vor sozial ungerechtfertigten Kündigungen.'
    },
    {
      nr: 27, thema: 'kennzahlen', typ: 'einfach',
      text: 'Frau Wolters möchte wissen, welches der beiden Projekte wirtschaftlicher war.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Kanzleiprojekt ist wirtschaftlicher, weil es die höheren Erträge erzielt hat.',
        'Beide Projekte sind gleich wirtschaftlich, weil beide einen Gewinn erzielt haben.',
        'Die Wirtschaftlichkeit berechnet man als Differenz von Erträgen und Aufwendungen; das Kanzleiprojekt liegt daher vorn.',
        'Das Praxisprojekt ist mit einer Wirtschaftlichkeit von 1,40 wirtschaftlicher als das Kanzleiprojekt mit 1,20, obwohl es den geringeren Gewinn erbracht hat.',
        'Das Praxisprojekt ist unwirtschaftlich, weil seine Wirtschaftlichkeit über 1 liegt.'
      ],
      loesung: 4,
      erklaerung: 'Wirtschaftlichkeit = Erträge ÷ Aufwendungen. Kanzlei: 30.000,00 ÷ 25.000,00 = 1,20; Praxis: 14.000,00 ÷ 10.000,00 = 1,40. Je höher der Wert, desto wirtschaftlicher wurde gearbeitet; ein Wert über 1 bedeutet, dass die Erträge die Aufwendungen übersteigen. Der Gewinn (Erträge − Aufwendungen) ist beim Kanzleiprojekt mit 5.000,00 EUR zwar höher als beim Praxisprojekt mit 4.000,00 EUR, sagt aber nichts über das Verhältnis von Ertrag und Aufwand aus.'
    },
    {
      nr: 28, thema: 'konjunktur', typ: 'einfach',
      text: 'In den Nachrichten wird über die Wirtschaftslage berichtet: Das reale Bruttoinlandsprodukt ist gegenüber dem Vorjahr nur um 0,1 % gestiegen, die Arbeitslosenquote nimmt zu und die Inflationsrate liegt bei 6,5 %.',
      frage: 'Wie wird diese gesamtwirtschaftliche Lage bezeichnet?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Bezeichnung in das Kästchen ein.',
      optionen: [
        'Hochkonjunktur (Boom)',
        'Deflation',
        'Stagflation',
        'Aufschwung (Expansion)',
        'Vollbeschäftigung'
      ],
      loesung: 3,
      erklaerung: 'Stagflation verbindet wirtschaftliche Stagnation (kaum Wachstum, steigende Arbeitslosigkeit) mit hoher Inflation. Damit werden mehrere Ziele des magischen Vierecks gleichzeitig verfehlt: Preisniveaustabilität, hoher Beschäftigungsstand und angemessenes Wachstum (§ 1 StabG). Die Wirtschaftspolitik steckt in einem Dilemma: Zinserhöhungen dämpfen die Inflation, bremsen aber das Wachstum zusätzlich. Bei einer Deflation sinkt dagegen das Preisniveau.'
    },
    {
      nr: 29, thema: 'datenschutz', typ: 'mehrfach',
      text: 'Der Servicetechniker Erik Lange wartet in einem Café auf seinen nächsten Termin und möchte mit seinem Firmennotebook per Fernwartung auf die Server einer Arztpraxis zugreifen. Das Café bietet ein offenes WLAN ohne Passwort an.',
      frage: 'Welche der folgenden Maßnahmen schützen die übertragenen Daten?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Maßnahmen in die Kästchen ein.',
      optionen: [
        'Den gesamten Datenverkehr verschlüsselt über das VPN der Ruhrkontor übertragen',
        'Die Dateifreigabe des Notebooks aktivieren, damit Kollegen schneller auf Dateien zugreifen können',
        'Die Firewall des Notebooks abschalten, um Verbindungsprobleme zu vermeiden',
        'Die automatische Verbindung mit offenen WLAN-Netzen deaktivieren und stattdessen den mobilen Hotspot des Diensthandys nutzen',
        'Die Zugangsdaten der Arztpraxis auf einem Notizzettel am Notebook befestigen',
        'Die Fernwartung über eine unverschlüsselte Verbindung starten, weil das schneller geht'
      ],
      loesung: [1, 4],
      erklaerung: 'In offenen WLANs können Dritte den Datenverkehr mitlesen oder manipulieren, z. B. über gefälschte Hotspots. Ein VPN baut einen verschlüsselten Tunnel zum Firmennetz auf; ein eigener mobiler Hotspot vermeidet das fremde Netz. Aktivierte Freigaben, eine abgeschaltete Firewall, notierte Passwörter und unverschlüsselte Verbindungen erhöhen dagegen das Risiko. Nach Art. 32 DSGVO sind geeignete technische und organisatorische Maßnahmen zu treffen, um die Vertraulichkeit und Integrität der Daten zu gewährleisten; Patientendaten sind besonders schutzbedürftig.'
    },
    {
      nr: 30, thema: 'weiterbildung', typ: 'einfach',
      text: 'Ein ehemaliger Mitarbeiter der Ruhrkontor ist seit einigen Monaten arbeitslos. Er möchte bei einem privaten Bildungsträger eine berufliche Weiterbildung zur Cloud-Administration besuchen und fragt, wer die Lehrgangskosten übernehmen kann.',
      frage: 'Welche der folgenden Aussagen zum Bildungsgutschein trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Den Bildungsgutschein stellt die Industrie- und Handelskammer jedem Mitglied einmal jährlich aus.',
        'Mit dem Bildungsgutschein wird ausschließlich ein Hochschulstudium finanziert.',
        'Die Kosten aus dem Bildungsgutschein muss er nach Abschluss der Weiterbildung zurückzahlen.',
        'Den Bildungsgutschein erhält jeder Arbeitnehmer automatisch nach fünf Jahren Betriebszugehörigkeit.',
        'Die Agentur für Arbeit oder das Jobcenter kann die Weiterbildungskosten mit einem Bildungsgutschein übernehmen, wenn die Weiterbildung für die berufliche Eingliederung notwendig ist und Bildungsträger und Maßnahme zugelassen sind.'
      ],
      loesung: 5,
      erklaerung: 'Nach § 81 SGB III können Arbeitnehmer bei beruflicher Weiterbildung durch Übernahme der Weiterbildungskosten gefördert werden, wenn die Weiterbildung notwendig ist, um sie bei Arbeitslosigkeit beruflich einzugliedern oder eine drohende Arbeitslosigkeit abzuwenden, vorher eine Beratung stattgefunden hat und Maßnahme und Träger zugelassen sind (§§ 176 ff. SGB III, AZAV). Die Agentur für Arbeit bescheinigt die Voraussetzungen mit einem Bildungsgutschein (§ 81 Abs. 4 SGB III); für Leistungsberechtigte der Grundsicherung ist das Jobcenter zuständig (§ 16 SGB II). Die Förderung ist ein Zuschuss und muss nicht zurückgezahlt werden.'
    }
  ]
});
