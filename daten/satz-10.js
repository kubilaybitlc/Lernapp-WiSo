// Übungssatz 10 – eigene Aufgaben im Stil der IHK-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-10',
  titel: 'Übungssatz 10',
  untertitel: 'Mainblick Software AG',
  ausgangssituation:
    'Die Mainblick Software AG mit Sitz in Frankfurt am Main entwickelt Software für Banken und Versicherungen. Sie beschäftigt in der Regel 420 Arbeitnehmerinnen und Arbeitnehmer und ist Mitglied im Arbeitgeberverband. Vorstandsvorsitzender ist Dr. Ulrich Pfannmüller. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 3,
      text: 'Die Mainblick Software AG bildet Fachinformatikerinnen und Fachinformatiker sowie Kaufleute für Digitalisierungsmanagement aus. Ausbildungsleiterin ist Katrin Seebach.'
    },
    {
      von: 4, bis: 6,
      text: 'In der Mainblick Software AG besteht ein Betriebsrat mit elf Mitgliedern. Vorsitzender ist Jörg Leinweber.'
    },
    {
      von: 7, bis: 9,
      text: 'Die Personalleiterin Simone Krämer bearbeitet mehrere arbeitsrechtliche Fälle aus der Belegschaft.'
    },
    {
      von: 13, bis: 14,
      text: 'Die Mainblick Software AG baut ihr Geschäft mit Zahlungsverkehrssoftware aus. Dazu gründet sie eine Tochtergesellschaft und ordnet die Vertretungsbefugnisse im Unternehmen neu.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'ausbildung', typ: 'einfach',
      text: 'Die Mainblick Software AG hat mit Amira Haddad einen Berufsausbildungsvertrag zur Fachinformatikerin für Daten- und Prozessanalyse abgeschlossen. Die Ausbildung beginnt am 01.08.2027.',
      frage: 'Welche der folgenden Aussagen zur Eintragung in das Verzeichnis der Berufsausbildungsverhältnisse trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Eintragung beantragt Frau Haddad selbst bei der Berufsschule, sobald der Unterricht begonnen hat.',
        'Die Mainblick Software AG muss die Eintragung unverzüglich nach Abschluss des Vertrags bei der IHK beantragen und eine Kopie der Vertragsniederschrift beifügen.',
        'Eine Eintragung ist nur erforderlich, wenn die Auszubildende minderjährig ist.',
        'Die Eintragung erfolgt erst, wenn Teil 1 der Abschlussprüfung bestanden ist.',
        'Über die Eintragung entscheidet die Agentur für Arbeit.'
      ],
      loesung: 2,
      erklaerung: '§ 36 Abs. 1 BBiG: Ausbildende haben unverzüglich nach Abschluss des Berufsausbildungsvertrags die Eintragung in das Verzeichnis der Berufsausbildungsverhältnisse zu beantragen; beizufügen sind eine Kopie der Vertragsniederschrift und der Nachweis, dass sie den Auszubildenden ausgehändigt oder übermittelt wurde. Das gilt auch für wesentliche Änderungen. Das Verzeichnis führt die zuständige Stelle (§ 34 BBiG), bei IT-Berufen die IHK; sie trägt den Vertrag ein, wenn er dem BBiG und der Ausbildungsordnung entspricht (§ 35 Abs. 1 BBiG). Die Eintragung ist grundsätzlich Voraussetzung für die Zulassung zur Abschlussprüfung; unterbleibt sie ohne Verschulden der Auszubildenden, steht das der Zulassung nicht entgegen (§ 43 Abs. 1 Nr. 3 BBiG).'
    },
    {
      nr: 2, thema: 'ausbildung', typ: 'einfach',
      text: 'In der Einführungswoche stellt Frau Seebach den neuen Auszubildenden die Ausbildungsordnung ihres Berufs vor.',
      frage: 'Welche der folgenden Angaben ist **nicht** Bestandteil der Ausbildungsordnung nach § 5 Abs. 1 BBiG?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Angabe in das Kästchen ein.',
      optionen: [
        'Die Ausbildungsdauer',
        'Das Ausbildungsberufsbild mit den zu vermittelnden Fertigkeiten, Kenntnissen und Fähigkeiten',
        'Die Höhe der Ausbildungsvergütung im ersten Ausbildungsjahr',
        'Der Ausbildungsrahmenplan als Anleitung zur sachlichen und zeitlichen Gliederung der Ausbildung',
        'Die Prüfungsanforderungen'
      ],
      loesung: 3,
      erklaerung: 'Die Ausbildungsordnung ist eine Rechtsverordnung des Bundes (§ 4 BBiG). Nach § 5 Abs. 1 BBiG legt sie mindestens fest: die Bezeichnung des Ausbildungsberufs, die Ausbildungsdauer (nicht mehr als drei und nicht weniger als zwei Jahre), das Ausbildungsberufsbild, den Ausbildungsrahmenplan und die Prüfungsanforderungen. Die Höhe der Vergütung wird im Ausbildungsvertrag oder Tarifvertrag geregelt (§§ 11, 17 BBiG).'
    },
    {
      nr: 3, thema: 'ausbildung', typ: 'einfach',
      text: 'Der 17-jährige Auszubildende Lukas Fendrich hat nach Ablauf der Probezeit vertrauliche Kundendaten unerlaubt auf einen privaten USB-Stick kopiert. Frau Seebach erfährt davon am 02.11.2026. Die Mainblick Software AG möchte das Ausbildungsverhältnis deshalb aus wichtigem Grund fristlos kündigen.',
      frage: 'Welche der folgenden Aussagen zu dieser Kündigung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Kündigung ist jederzeit möglich, weil es für Kündigungen aus wichtigem Grund keine Frist gibt.',
        'Die Kündigung kann nur mündlich in Anwesenheit der Eltern ausgesprochen werden.',
        'Nach Ablauf der Probezeit kann der Ausbildungsbetrieb überhaupt nicht mehr kündigen.',
        'Die Kündigung muss innerhalb von zwei Wochen, nachdem die Tatsachen bekannt geworden sind, schriftlich und unter Angabe der Kündigungsgründe erklärt werden.',
        'Vor der Kündigung muss die IHK zustimmen.'
      ],
      loesung: 4,
      erklaerung: 'Nach der Probezeit kann der Ausbildende nur aus wichtigem Grund ohne Einhalten einer Kündigungsfrist kündigen (§ 22 Abs. 2 Nr. 1 BBiG). Die Kündigung muss schriftlich und unter Angabe der Kündigungsgründe erfolgen (§ 22 Abs. 3 BBiG). Sie ist unwirksam, wenn die zugrunde liegenden Tatsachen dem Kündigungsberechtigten länger als zwei Wochen bekannt sind (§ 22 Abs. 4 BBiG). Bei einem Minderjährigen muss die Kündigung den gesetzlichen Vertretern zugehen (§ 131 BGB); der Betriebsrat ist vorher anzuhören (§ 102 BetrVG).'
    },
    {
      nr: 4, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Der Netzwerkadministrator Tim Ostermann war bis zum Ende der Amtszeit im Mai 2026 Mitglied des Betriebsrats und wurde nicht wiedergewählt. Im September 2026 möchte die Mainblick Software AG ihm wegen wiederholter Verspätungen ordentlich kündigen.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die ordentliche Kündigung ist ohne Weiteres zulässig, weil Herr Ostermann kein Betriebsratsmitglied mehr ist.',
        'Eine ordentliche Kündigung ist bis zum Ablauf eines Jahres nach dem Ende seiner Amtszeit grundsätzlich unzulässig; möglich bleibt eine außerordentliche Kündigung aus wichtigem Grund.',
        'Ehemalige Betriebsratsmitglieder sind lebenslang unkündbar.',
        'Die ordentliche Kündigung ist zulässig, wenn der Betriebsrat ihr zustimmt.',
        'Der besondere Kündigungsschutz gilt nur für den Vorsitzenden des Betriebsrats.'
      ],
      loesung: 2,
      erklaerung: 'Einem Betriebsratsmitglied kann während der Amtszeit nur außerordentlich aus wichtigem Grund gekündigt werden, und dafür ist die Zustimmung des Betriebsrats oder deren gerichtliche Ersetzung nötig (§ 15 Abs. 1 Satz 1 KSchG, § 103 BetrVG). Nach dem Ende der Amtszeit ist eine ordentliche Kündigung noch ein Jahr lang unzulässig (nachwirkender Kündigungsschutz, § 15 Abs. 1 Satz 2 KSchG). Eine Ausnahme gilt bei der Stilllegung des Betriebs (§ 15 Abs. 4 KSchG). Vor jeder Kündigung ist der Betriebsrat anzuhören (§ 102 BetrVG).'
    },
    {
      nr: 5, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Wegen eines Großprojekts für eine Bank möchte der Vorstand für die Entwicklungsabteilung sechs Wochen lang täglich zwei Überstunden anordnen.',
      frage: 'Welche Beteiligung des Betriebsrats ist erforderlich?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Betriebsrat muss nach Einführung der Überstunden lediglich informiert werden.',
        'Der Betriebsrat hat kein Beteiligungsrecht, weil die Arbeitszeit im Arbeitsvertrag geregelt ist.',
        'Der Betriebsrat ist anzuhören, seine Meinung ist aber nicht bindend.',
        'Die Überstunden dürfen nur angeordnet werden, wenn die IHK zustimmt.',
        'Der Betriebsrat hat ein Mitbestimmungsrecht; ohne seine Zustimmung oder einen Spruch der Einigungsstelle dürfen die Überstunden nicht angeordnet werden.'
      ],
      loesung: 5,
      erklaerung: 'Bei der vorübergehenden Verlängerung oder Verkürzung der betriebsüblichen Arbeitszeit, also bei Überstunden und Kurzarbeit, hat der Betriebsrat mitzubestimmen (§ 87 Abs. 1 Nr. 3 BetrVG). Kommt keine Einigung zustande, entscheidet die Einigungsstelle; ihr Spruch ersetzt die Einigung zwischen Arbeitgeber und Betriebsrat (§ 87 Abs. 2 BetrVG). Unabhängig davon sind die Höchstgrenzen des Arbeitszeitgesetzes einzuhalten (§ 3 ArbZG).'
    },
    {
      nr: 6, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Entwicklerin Natalia Wróbel fühlt sich von ihrem Teamleiter bei der Verteilung interessanter Projekte immer wieder ungerecht behandelt.',
      frage: 'Welche der folgenden Aussagen zu ihrem Beschwerderecht nach dem Betriebsverfassungsgesetz trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Sie kann sich bei der zuständigen Stelle des Betriebs beschweren und dazu ein Betriebsratsmitglied hinzuziehen; sie kann die Beschwerde auch beim Betriebsrat einreichen, der dann beim Arbeitgeber auf Abhilfe hinwirkt.',
        'Eine Beschwerde ist nur schriftlich über einen Rechtsanwalt zulässig.',
        'Wegen der Beschwerde darf der Arbeitgeber ihr eine Abmahnung erteilen.',
        'Beschwerden sind nur zulässig, wenn mindestens drei Beschäftigte betroffen sind.',
        'Über jede Beschwerde entscheidet das Arbeitsgericht.'
      ],
      loesung: 1,
      erklaerung: '§ 84 Abs. 1 BetrVG: Jeder Arbeitnehmer kann sich bei den zuständigen Stellen des Betriebs beschweren, wenn er sich benachteiligt oder ungerecht behandelt fühlt, und dazu ein Betriebsratsmitglied hinzuziehen. Wegen der Beschwerde dürfen ihm keine Nachteile entstehen (§ 84 Abs. 3 BetrVG). Der Betriebsrat hat Beschwerden entgegenzunehmen und, wenn er sie für berechtigt hält, beim Arbeitgeber auf Abhilfe hinzuwirken (§ 85 Abs. 1 BetrVG); bei Meinungsverschiedenheiten kann er die Einigungsstelle anrufen (§ 85 Abs. 2 BetrVG).'
    },
    {
      nr: 7, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Der Softwareentwickler Florian Becht hat ein Angebot eines anderen Unternehmens, das ihn bereits in vier Wochen einstellen möchte. Seine vertragliche Kündigungsfrist beträgt drei Monate. Frau Krämer schlägt deshalb einen Aufhebungsvertrag vor.',
      frage: 'Welche der folgenden Aussagen zum Aufhebungsvertrag trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Aufhebungsvertrag kann mündlich oder per E-Mail wirksam geschlossen werden.',
        'Vor Abschluss eines Aufhebungsvertrags muss der Betriebsrat angehört werden, sonst ist der Vertrag unwirksam.',
        'Mit einem Aufhebungsvertrag beenden Arbeitgeber und Arbeitnehmer das Arbeitsverhältnis einvernehmlich zu einem vereinbarten Zeitpunkt; Kündigungsfristen müssen nicht eingehalten werden, der Vertrag bedarf aber der Schriftform.',
        'Ein Aufhebungsvertrag kann vom Arbeitnehmer innerhalb von drei Monaten ohne Angabe von Gründen widerrufen werden.',
        'Nach einem Aufhebungsvertrag besteht immer ein gesetzlicher Anspruch auf eine Abfindung.'
      ],
      loesung: 3,
      erklaerung: 'Die Beendigung des Arbeitsverhältnisses durch Auflösungsvertrag bedarf der Schriftform; die elektronische Form ist ausgeschlossen (§ 623 BGB). Weil beide Seiten einvernehmlich handeln, gelten weder Kündigungsfristen noch der Kündigungsschutz; der Betriebsrat ist nicht anzuhören, da § 102 BetrVG nur für Kündigungen gilt. Ein gesetzliches Widerrufsrecht und einen gesetzlichen Abfindungsanspruch gibt es nicht. Wird der Arbeitnehmer danach arbeitslos, droht eine Sperrzeit beim Arbeitslosengeld (§ 159 SGB III).'
    },
    {
      nr: 8, thema: 'arbeitsvertrag', typ: 'datum',
      text: 'Der Projektleiter Dominik Stahlberg ist seit sechs Jahren bei der Mainblick Software AG beschäftigt. Am Freitag, dem 15.01.2027, geht ihm eine schriftliche ordentliche Kündigung zu, die er für sozial ungerechtfertigt hält.',
      kasten: {
        titel: '§ 4 Kündigungsschutzgesetz (Auszug)',
        absaetze: [
          'Will ein Arbeitnehmer geltend machen, dass eine Kündigung sozial ungerechtfertigt oder aus anderen Gründen rechtsunwirksam ist, so muss er innerhalb von drei Wochen nach Zugang der schriftlichen Kündigung Klage beim Arbeitsgericht auf Feststellung erheben, dass das Arbeitsverhältnis durch die Kündigung nicht aufgelöst ist.'
        ]
      },
      frage: 'Mit Ablauf welchen Tages endet die Frist für die Kündigungsschutzklage von Herrn Stahlberg?',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '05.02.2027',
      erklaerung: 'Die Klagefrist beträgt drei Wochen nach Zugang der Kündigung (§ 4 Satz 1 KSchG). Der Tag des Zugangs wird nicht mitgezählt (§ 187 Abs. 1 BGB); die Frist endet mit Ablauf des Tages der dritten Woche, der durch seine Benennung dem Tag des Zugangs entspricht (§ 188 Abs. 2 BGB): Freitag, 15.01.2027 → Freitag, 05.02.2027. Versäumt Herr Stahlberg die Frist, gilt die Kündigung als von Anfang an rechtswirksam (§ 7 KSchG); eine nachträgliche Zulassung der Klage ist nur ausnahmsweise möglich (§ 5 KSchG).'
    },
    {
      nr: 9, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Datenbankadministratorin Janine Vollmer arbeitet am Standort Frankfurt. In ihrem Arbeitsvertrag ist als Arbeitsort „Frankfurt am Main sowie andere Standorte des Unternehmens im Rhein-Main-Gebiet“ vereinbart. Ihr Teamleiter möchte sie ab dem nächsten Monat im Büro in Eschborn mit Aufgaben einsetzen, die ihrer Qualifikation entsprechen.',
      frage: 'Welche der folgenden Aussagen zum Weisungsrecht des Arbeitgebers trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Arbeitgeber darf Inhalt, Ort und Zeit der Arbeitsleistung nach billigem Ermessen näher bestimmen, soweit diese nicht durch Arbeitsvertrag, Betriebsvereinbarung, Tarifvertrag oder Gesetz festgelegt sind.',
        'Der Arbeitgeber darf jede beliebige Tätigkeit zuweisen, auch wenn sie geringer bezahlt wird als die vertraglich vereinbarte.',
        'Weisungen zum Arbeitsort sind grundsätzlich unzulässig; der Arbeitsort kann nur durch eine Änderungskündigung geändert werden.',
        'Weisungen sind nur wirksam, wenn sie schriftlich erteilt und vom Betriebsrat genehmigt wurden.',
        'Das Weisungsrecht gilt nur gegenüber Auszubildenden, nicht gegenüber Fachkräften.'
      ],
      loesung: 1,
      erklaerung: '§ 106 Satz 1 GewO: Der Arbeitgeber kann Inhalt, Ort und Zeit der Arbeitsleistung nach billigem Ermessen näher bestimmen, soweit diese Arbeitsbedingungen nicht durch den Arbeitsvertrag, eine Betriebsvereinbarung, einen Tarifvertrag oder gesetzliche Vorschriften festgelegt sind. Hier lässt der Arbeitsvertrag den Einsatz im Rhein-Main-Gebiet ausdrücklich zu. Handelt es sich um eine Versetzung im Sinne des § 95 Abs. 3 BetrVG, muss außerdem der Betriebsrat beteiligt werden (§ 99 BetrVG).'
    },
    {
      nr: 10, thema: 'arbeitsschutz', typ: 'reihenfolge',
      text: 'Im Serverraum ist ein Techniker von einer Leiter gestürzt und klagt über starke Schmerzen im Bein. Eine Kollegin wählt den Notruf 112.',
      frage: 'Bringen Sie die folgenden Angaben im Notruf in die empfohlene Reihenfolge.',
      anweisung: 'Tragen Sie für die erste Angabe die Ziffer 1, für die zweite Angabe die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Angaben im Notruf',
      items: [
        { text: 'Auf Rückfragen der Leitstelle warten', loesung: 5 },
        { text: 'Was ist geschehen? (Sturz von einer Leiter im Serverraum)', loesung: 2 },
        { text: 'Wo ist es geschehen? (Adresse, Gebäude, Stockwerk, Raum)', loesung: 1 },
        { text: 'Welche Verletzungen liegen vor?', loesung: 4 },
        { text: 'Wie viele Personen sind verletzt?', loesung: 3 }
      ],
      erklaerung: 'Die Unfallversicherungsträger empfehlen für den Notruf die „W-Fragen“ in dieser Reihenfolge: Wo ist es geschehen? Was ist geschehen? Wie viele Verletzte? Welche Verletzungen? Warten auf Rückfragen. Der Ort steht am Anfang, damit Rettungskräfte auch bei einem abgebrochenen Gespräch losfahren können; aufgelegt wird erst, wenn die Leitstelle das Gespräch beendet. Der Arbeitgeber muss sicherstellen, dass Erste Hilfe geleistet und ein Notruf abgesetzt werden kann (§ 10 Abs. 1 ArbSchG, DGUV Vorschrift 1).'
    },
    {
      nr: 11, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Der Softwaretester Marco Lindqvist war in den letzten zwölf Monaten wegen Rückenbeschwerden mehrfach arbeitsunfähig, insgesamt neun Wochen.',
      frage: 'Welche der folgenden Aussagen zum betrieblichen Eingliederungsmanagement (BEM) trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Lindqvist ist zur Teilnahme verpflichtet; lehnt er das BEM ab, kann ihm fristlos gekündigt werden.',
        'Ein BEM ist nur für schwerbehinderte Beschäftigte vorgesehen.',
        'Das BEM wird ausschließlich von der Krankenkasse durchgeführt.',
        'Die Mainblick Software AG muss Herrn Lindqvist ein BEM anbieten, um die Arbeitsunfähigkeit zu überwinden und erneuter Arbeitsunfähigkeit vorzubeugen; die Teilnahme ist für ihn freiwillig.',
        'Ein BEM ist erst nach einer ununterbrochenen Arbeitsunfähigkeit von einem Jahr vorgeschrieben.'
      ],
      loesung: 4,
      erklaerung: '§ 167 Abs. 2 SGB IX: Sind Beschäftigte innerhalb eines Jahres länger als sechs Wochen ununterbrochen oder wiederholt arbeitsunfähig, klärt der Arbeitgeber mit der Interessenvertretung (hier dem Betriebsrat) und mit Zustimmung und Beteiligung der betroffenen Person, wie die Arbeitsunfähigkeit überwunden und erneuter Arbeitsunfähigkeit vorgebeugt werden kann. Das gilt für alle Beschäftigten, nicht nur für schwerbehinderte. Ohne Zustimmung der betroffenen Person findet kein BEM statt; der Betriebsarzt kann hinzugezogen werden.'
    },
    {
      nr: 12, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Auf einer neu bezogenen Büroetage soll der Standort des Erste-Hilfe-Materials gekennzeichnet werden.',
      frage: 'Welches der folgenden Schilder ist dafür vorgesehen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Schild in das Kästchen ein.',
      optionenTitel: 'Schilder',
      optionen: [
        { bild: 'verbot-feuer' },
        { bild: 'warn-spannung' },
        { bild: 'brandschutz-feuerloescher' },
        { bild: 'gebot-gehoerschutz' },
        { bild: 'rettung-erste-hilfe' }
      ],
      loesung: 5,
      erklaerung: 'Nach der Technischen Regel für Arbeitsstätten ASR A1.3 sind Rettungszeichen quadratisch oder rechteckig mit grünem Grund und weißem Symbol; das weiße Kreuz kennzeichnet Erste-Hilfe-Einrichtungen. Ein rotes Quadrat mit weißem Symbol ist ein Brandschutzzeichen (hier: Feuerlöscher), ein blauer Kreis ein Gebotszeichen, ein gelbes Dreieck ein Warnzeichen und ein weißer Kreis mit rotem Rand und Querbalken ein Verbotszeichen.'
    },
    {
      nr: 13, thema: 'rechtsformen', typ: 'einfach',
      text: 'Die Mainblick Software AG gründet mit dem Fintech-Gründer Yannick Brosowski die Mainblick Payments GmbH; Herr Brosowski wird Geschäftsführer. Der Gesellschaftsvertrag wurde am 10.03.2027 notariell beurkundet, die Eintragung in das Handelsregister ist für Ende April vorgesehen. Bereits am 15.03.2027 bestellt Herr Brosowski im Namen der GmbH Server im Wert von 40.000,00 EUR.',
      frage: 'Welche der folgenden Aussagen zur Haftung für diese Bestellung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Vor der Eintragung kann im Namen der Gesellschaft überhaupt kein Vertrag geschlossen werden; die Bestellung ist nichtig.',
        'Für die Bestellung haftet nur das eingezahlte Stammkapital; eine persönliche Haftung ist ausgeschlossen.',
        'Herr Brosowski haftet persönlich, weil er vor der Eintragung im Namen der Gesellschaft gehandelt hat.',
        'Für alle Verträge vor der Eintragung haftet der Notar, der den Gesellschaftsvertrag beurkundet hat.',
        'Die Mainblick Software AG haftet als Gesellschafterin auch nach der Eintragung unbeschränkt für alle Schulden der GmbH.'
      ],
      loesung: 3,
      erklaerung: 'Vor der Eintragung in das Handelsregister besteht die GmbH als solche nicht (§ 11 Abs. 1 GmbHG). Wer vor der Eintragung im Namen der Gesellschaft handelt, haftet persönlich und gesamtschuldnerisch (Handelndenhaftung, § 11 Abs. 2 GmbHG). Mit der Eintragung gehen die Rechte und Pflichten der Vorgesellschaft auf die GmbH über, die Handelndenhaftung erlischt dann. Nach der Eintragung haftet den Gläubigern nur das Gesellschaftsvermögen (§ 13 Abs. 2 GmbHG).'
    },
    {
      nr: 14, thema: 'rechtsformen', typ: 'zuordnung',
      text: 'Der Vorstand der Mainblick Software AG regelt die Vertretungsbefugnisse neu und lässt die Prokuren in das Handelsregister eintragen.',
      frage: 'Welche der folgenden Vollmachten sind den nachstehenden Sachverhalten zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Vollmacht in das Kästchen ein.',
      optionenTitel: 'Vollmachten',
      optionen: [
        'Einzelprokura',
        'Gesamtprokura',
        'Filialprokura',
        'Allgemeine Handlungsvollmacht'
      ],
      itemsTitel: 'Sachverhalte',
      items: [
        { text: 'Kai Neubauer und Olga Petrenko dürfen die AG mit Prokura nur gemeinsam vertreten.', loesung: 2 },
        { text: 'Sabine Hertel darf die AG als Prokuristin allein vertreten.', loesung: 1 },
        { text: 'Ines Möbius darf ohne Eintragung in das Handelsregister alle Geschäfte vornehmen, die der Betrieb eines Softwarehauses gewöhnlich mit sich bringt.', loesung: 4 },
        { text: 'Ralf Oberdorf ist Prokurist ausschließlich für die Niederlassung in Berlin, die unter einer Firma mit dem Zusatz „Niederlassung Berlin“ betrieben wird.', loesung: 3 }
      ],
      erklaerung: 'Die Prokura wird vom Inhaber bzw. gesetzlichen Vertreter, bei der AG vom Vorstand, ausdrücklich erteilt und in das Handelsregister eingetragen (§§ 48, 53 HGB). Sie kann mehreren Personen gemeinschaftlich erteilt werden (Gesamtprokura, § 48 Abs. 2 HGB). Auf eine von mehreren Niederlassungen kann sie beschränkt werden, wenn diese unter verschiedener Firma betrieben werden; ein Zusatz genügt (Filialprokura, § 50 Abs. 3 HGB). Die allgemeine Handlungsvollmacht erstreckt sich auf alle gewöhnlichen Geschäfte des Betriebs und wird nicht eingetragen (§ 54 HGB).'
    },
    {
      nr: 15, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Natalia Wróbel ist gesetzlich krankenversichert. Ihr Ehemann kümmert sich als Hausmann um die dreijährige Tochter und hat kein eigenes Einkommen.',
      frage: 'Welche der folgenden Aussagen zur Krankenversicherung von Ehemann und Tochter trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ehemann und Tochter müssen sich jeweils freiwillig versichern und eigene Beiträge zahlen.',
        'Ehemann und Tochter sind über Frau Wróbel beitragsfrei familienversichert, solange sie kein eigenes Einkommen oberhalb der gesetzlichen Grenze haben.',
        'Nur die Tochter ist mitversichert; Ehepartner sind von der Familienversicherung ausgeschlossen.',
        'Für jedes mitversicherte Familienmitglied erhöht sich der Beitragssatz von Frau Wróbel um einen Prozentpunkt.',
        'Die Familienversicherung gilt nur in der Pflegeversicherung, nicht in der Krankenversicherung.'
      ],
      loesung: 2,
      erklaerung: '§ 10 SGB V: Ehegatten, Lebenspartner und Kinder von Mitgliedern sind familienversichert, wenn sie u. a. nicht selbst versicherungspflichtig sind und ihr regelmäßiges Gesamteinkommen eine gesetzliche Grenze nicht überschreitet. Kinder sind grundsätzlich bis 18 Jahre, in Schul- oder Berufsausbildung bis 25 Jahre familienversichert. Für Familienversicherte werden keine Beiträge erhoben (§ 3 Satz 3 SGB V). Dies folgt dem Solidarprinzip; in der Pflegeversicherung gilt dasselbe (§ 25 SGB XI).'
    },
    {
      nr: 16, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Der Sachbearbeiter Jens Kürten kündigt sein Arbeitsverhältnis selbst, ohne eine neue Stelle zu haben, weil ihm die Arbeit keinen Spaß mehr macht. Anschließend meldet er sich arbeitslos.',
      frage: 'Welche Folge hat die Eigenkündigung für seinen Anspruch auf Arbeitslosengeld?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Folge in das Kästchen ein.',
      optionen: [
        'Er erhält kein Arbeitslosengeld, weil es nur nach einer Kündigung durch den Arbeitgeber gezahlt wird.',
        'Er erhält sofort Arbeitslosengeld in voller Höhe.',
        'Er muss das Arbeitslosengeld später an die Agentur für Arbeit zurückzahlen.',
        'Er erhält Arbeitslosengeld erst nach einer Wartezeit von zwei Jahren.',
        'In der Regel tritt eine Sperrzeit von zwölf Wochen ein; in dieser Zeit ruht der Anspruch, und die Anspruchsdauer verkürzt sich.'
      ],
      loesung: 5,
      erklaerung: 'Löst ein Arbeitsloser sein Beschäftigungsverhältnis ohne wichtigen Grund selbst, tritt eine Sperrzeit wegen Arbeitsaufgabe ein (§ 159 Abs. 1 Satz 2 Nr. 1 SGB III); sie dauert in der Regel zwölf Wochen (§ 159 Abs. 3 SGB III). Während der Sperrzeit ruht der Anspruch auf Arbeitslosengeld. Die Anspruchsdauer mindert sich um die Tage der Sperrzeit, bei einer Sperrzeit von zwölf Wochen mindestens um ein Viertel der Anspruchsdauer (§ 148 Abs. 1 Nr. 4 SGB III).'
    },
    {
      nr: 17, thema: 'umweltschutz', typ: 'einfach',
      text: 'In der Mainblick Software AG haben sich alte Akkus aus kabellosen Mäusen, Tastaturen und Diensthandys sowie verbrauchte Knopfzellen angesammelt.',
      frage: 'Welche der folgenden Aussagen zur Entsorgung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Batterien und Akkus dürfen in kleinen Mengen über den Restmüll entsorgt werden.',
        'Altbatterien und Akkus sind getrennt vom Restmüll zu sammeln und an Rücknahmestellen zurückzugeben, z. B. im Handel, der Gerätebatterien unentgeltlich zurücknehmen muss.',
        'Nur Autobatterien unterliegen einer Rücknahmepflicht.',
        'Akkus müssen vor der Entsorgung geöffnet und entleert werden.',
        'Die Rückgabe von Altbatterien ist für Endnutzer kostenpflichtig.'
      ],
      loesung: 2,
      erklaerung: 'Batterien und Akkus enthalten Schadstoffe und wertvolle Rohstoffe; Lithium-Akkus können zudem Brände verursachen. Sie dürfen deshalb nicht in den Restmüll, worauf das Symbol der durchgestrichenen Mülltonne hinweist. Seit August 2025 gelten dafür die EU-Batterieverordnung und das Batterierecht-Durchführungsgesetz (BattDG), das das frühere Batteriegesetz abgelöst hat: Endnutzer müssen Altbatterien getrennt erfassen, Vertreiber müssen Gerätealtbatterien unentgeltlich zurücknehmen. Akkus dürfen nicht geöffnet werden.'
    },
    {
      nr: 18, thema: 'umweltschutz', typ: 'mehrfach',
      text: 'Die Mainblick Software AG veröffentlicht erstmals einen Nachhaltigkeitsbericht und ordnet ihre Maßnahmen den drei Dimensionen der Nachhaltigkeit zu.',
      frage: 'Welche der folgenden Maßnahmen sind vorrangig der **ökologischen** Dimension der Nachhaltigkeit zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Maßnahmen in die Kästchen ein.',
      optionen: [
        'Einführung eines betrieblichen Gesundheitsmanagements',
        'Umstellung der Rechenzentrumsverträge auf Strom aus erneuerbaren Energien',
        'Erhöhung der Eigenkapitalquote durch Einbehaltung von Gewinnen',
        'Flexible Arbeitszeitmodelle für Beschäftigte mit Kindern',
        'Längere Nutzung der Notebooks durch Reparatur statt Neukauf',
        'Erschließung neuer Kundengruppen im Versicherungsbereich'
      ],
      loesung: [2, 5],
      erklaerung: 'Nach dem Drei-Säulen-Modell umfasst Nachhaltigkeit eine ökologische (Schutz von Umwelt, Klima und Ressourcen), eine soziale (Gesundheit, Vereinbarkeit, Gerechtigkeit) und eine ökonomische Dimension (dauerhaft tragfähiges Wirtschaften). Ökostrom und die längere Nutzung von Geräten schonen Klima und Ressourcen. Gesundheitsmanagement und flexible Arbeitszeiten gehören zur sozialen, Eigenkapitalquote und neue Kundengruppen zur ökonomischen Dimension. Der Schutz der natürlichen Lebensgrundlagen ist Staatsziel (Art. 20a GG).'
    },
    {
      nr: 19, thema: 'tarifrecht', typ: 'einfach',
      text: 'In der Mainblick Software AG arbeiten Softwareentwicklerinnen, kaufmännische Angestellte, Reinigungskräfte und Kantinenpersonal. Ein Auszubildender fragt, ob für jede dieser Berufsgruppen eine andere Gewerkschaft zuständig ist.',
      frage: 'Welche der folgenden Aussagen zur Organisation der großen deutschen Gewerkschaften trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die DGB-Gewerkschaften sind nach dem Industrieverbandsprinzip organisiert: Eine Gewerkschaft vertritt grundsätzlich alle Beschäftigten einer Branche bzw. eines Betriebs, unabhängig von ihrem Beruf.',
        'Für jeden Beruf gibt es genau eine Gewerkschaft, die ausschließlich diesen Beruf vertritt.',
        'Der Deutsche Gewerkschaftsbund (DGB) schließt als Dachverband selbst alle Tarifverträge in Deutschland ab.',
        'Gewerkschaften sind staatliche Behörden, die vom Bundesministerium für Arbeit und Soziales geleitet werden.',
        'Jeder Arbeitnehmer muss Mitglied der für seinen Betrieb zuständigen Gewerkschaft werden.'
      ],
      loesung: 1,
      erklaerung: 'Die Gewerkschaften im Deutschen Gewerkschaftsbund folgen dem Industrieverbandsprinzip („ein Betrieb, eine Gewerkschaft“), z. B. ver.di für Dienstleistungen oder die IG Metall für die Metall- und Elektroindustrie. Daneben gibt es einzelne Berufsgewerkschaften, etwa für Lokführer oder Ärzte. Der DGB ist der Dachverband und vertritt die Interessen politisch; Tarifverträge schließen in der Regel die Einzelgewerkschaften. Gewerkschaften sind freie, vom Staat unabhängige Vereinigungen, die Mitgliedschaft ist freiwillig (Koalitionsfreiheit, Art. 9 Abs. 3 GG).'
    },
    {
      nr: 20, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Verhandlungen über einen neuen Entgelttarifvertrag zwischen der Gewerkschaft und dem Arbeitgeberverband sind nach mehreren Runden gescheitert. Beide Seiten rufen die in ihrer Schlichtungsvereinbarung vorgesehene Schlichtung an.',
      frage: 'Welche der folgenden Aussagen zur Schlichtung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Schlichter wird vom Bundesarbeitsgericht bestimmt und entscheidet durch Urteil.',
        'Während der Schlichtung soll gestreikt werden, um den Druck auf die Arbeitgeber zu erhöhen.',
        'Ein Schlichtungsergebnis gilt automatisch für alle Arbeitnehmer in Deutschland.',
        'Eine neutrale Schlichtungsperson erarbeitet einen Einigungsvorschlag; er wird nur verbindlich, wenn beide Tarifparteien ihn annehmen oder dies vorher vereinbart haben.',
        'Eine Schlichtung ist nur zulässig, wenn der Betriebsrat sie beantragt.'
      ],
      loesung: 4,
      erklaerung: 'Die Schlichtung beruht auf freiwilligen Schlichtungsvereinbarungen der Tarifparteien; eine staatliche Zwangsschlichtung gibt es wegen der Tarifautonomie (Art. 9 Abs. 3 GG) nicht. Ein unparteiischer Schlichter, oft gemeinsam mit Beisitzern beider Seiten, legt einen Einigungsvorschlag vor. Nehmen beide Seiten ihn an, wird er Grundlage des neuen Tarifvertrags. Während des Schlichtungsverfahrens gilt nach den üblichen Vereinbarungen Friedenspflicht; scheitert die Schlichtung, kann die Gewerkschaft eine Urabstimmung über einen Streik durchführen.'
    },
    {
      nr: 21, thema: 'wirtschaft-grundlagen', typ: 'mehrfach',
      text: 'Die Mainblick Software AG verkauft ihre Software inzwischen auch an Banken in Österreich, der Schweiz und Singapur. Der Vorstand diskutiert die Chancen und Risiken der Globalisierung.',
      frage: 'Welche der folgenden Entwicklungen sind typische **Vorteile** der Globalisierung für die Mainblick Software AG?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Entwicklungen in die Kästchen ein.',
      optionen: [
        'Zugang zu internationalen Absatzmärkten für die eigene Software',
        'Stärkerer Wettbewerbsdruck durch ausländische Softwareanbieter',
        'Abhängigkeit von internationalen Lieferketten bei Hardware und Cloud-Diensten',
        'Günstigerer Bezug von Hardware und Vorleistungen durch internationale Arbeitsteilung',
        'Verlagerung von Arbeitsplätzen in Länder mit niedrigeren Löhnen',
        'Höhere Anfälligkeit für weltweite Wirtschafts- und Finanzkrisen'
      ],
      loesung: [1, 4],
      erklaerung: 'Globalisierung bezeichnet die zunehmende weltweite Verflechtung von Märkten für Waren, Dienstleistungen, Kapital und Informationen; erleichtert wird sie u. a. durch den EU-Binnenmarkt (Art. 26 AEUV) und die Regeln der Welthandelsorganisation (WTO). Vorteile für Unternehmen sind größere Absatzmärkte sowie Kostenvorteile durch Spezialisierung und internationale Arbeitsteilung. Nachteile und Risiken sind stärkerer Wettbewerb, Abhängigkeit von Lieferketten, Arbeitsplatzverlagerungen und die schnelle Ausbreitung von Krisen.'
    },
    {
      nr: 22, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'Der Vorstand der Mainblick Software AG hat die „Charta der Vielfalt“ unterzeichnet und führt ein Diversity Management ein.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Charta der Vielfalt ist ein Gesetz, dessen Verletzung mit einem Bußgeld geahndet wird.',
        'Diversity Management bedeutet, dass Stellen nur noch an Bewerberinnen und Bewerber aus dem Ausland vergeben werden.',
        'Mit der Unterzeichnung entfallen für das Unternehmen die Pflichten aus dem Allgemeinen Gleichbehandlungsgesetz.',
        'Die Charta der Vielfalt richtet sich nur an Unternehmen mit mehr als 1.000 Beschäftigten.',
        'Mit der Unterzeichnung verpflichtet sich das Unternehmen freiwillig, ein wertschätzendes Arbeitsumfeld zu schaffen, in dem Vielfalt, z. B. nach Alter, Geschlecht, Herkunft, Religion, Behinderung oder sexueller Orientierung, anerkannt und gefördert wird.'
      ],
      loesung: 5,
      erklaerung: 'Die Charta der Vielfalt ist eine freiwillige Selbstverpflichtung von Unternehmen und Institutionen, getragen vom Verein Charta der Vielfalt e. V.; unterzeichnen können Organisationen jeder Größe. Diversity Management will die Vielfalt der Beschäftigten wertschätzen und als Chance nutzen. Die gesetzlichen Pflichten aus dem AGG, etwa das Benachteiligungsverbot (§ 7 AGG) und die Schutzpflichten des Arbeitgebers (§ 12 AGG), gelten unabhängig davon weiter.'
    },
    {
      nr: 23, thema: 'organisation', typ: 'einfach',
      text: 'Der Vorstand richtet eine Stabsstelle „IT-Recht und Compliance“ ein, die mit einer Juristin besetzt wird.',
      frage: 'Welches der folgenden Merkmale kennzeichnet eine Stabsstelle?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Merkmal in das Kästchen ein.',
      optionen: [
        'Sie hat gegenüber allen Abteilungen ein uneingeschränktes Weisungsrecht.',
        'Sie ersetzt den Vorstand bei allen Entscheidungen.',
        'Sie ist immer mehreren Vorgesetzten gleichzeitig unterstellt.',
        'Sie wird ausschließlich mit externen Beratern besetzt.',
        'Sie berät und unterstützt die Leitungsstelle, der sie zugeordnet ist, hat aber grundsätzlich keine Weisungsbefugnis gegenüber den Linienstellen.'
      ],
      loesung: 5,
      erklaerung: 'Im Stabliniensystem wird das Einliniensystem um Stabsstellen ergänzt. Stäbe bereiten Entscheidungen fachlich vor und beraten die Leitung, entscheiden aber nicht selbst und haben keine Weisungsbefugnis gegenüber der Linie. Vorteile sind die Entlastung der Leitung und Spezialwissen, Nachteile mögliche Konflikte zwischen Stab und Linie sowie Einfluss ohne Verantwortung. Es handelt sich um ein Modell der Organisationslehre ohne Rechtsgrundlage.'
    },
    {
      nr: 24, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Der Vorstand legt für das Jahr 2027 das Oberziel „Steigerung des Jahresüberschusses um 10 %“ fest. Daraus werden Ziele für die einzelnen Bereiche abgeleitet.',
      frage: 'Welche der folgenden Aussagen zur Zielhierarchie trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Unterziele werden aus dem Oberziel abgeleitet und sind Mittel zu dessen Erreichung, z. B. „Senkung der Kosten für Cloud-Server um 5 %“.',
        'Ober- und Unterziele stehen grundsätzlich in einem Zielkonflikt.',
        'Unterziele legen die Abteilungen unabhängig vom Oberziel fest.',
        'Das Oberziel eines Unternehmens ist immer ein soziales Ziel.',
        'Eine Zielhierarchie besteht immer nur aus einer einzigen Ebene.'
      ],
      loesung: 1,
      erklaerung: 'In einer Zielhierarchie werden aus dem Oberziel des Unternehmens Zwischen- und Unterziele für Bereiche, Abteilungen und Teams abgeleitet (Ziel-Mittel-Beziehung). Die Unterziele tragen zur Erreichung des übergeordneten Ziels bei und stehen deshalb in der Regel in Zielharmonie zu ihm. Es handelt sich um ein Modell der Betriebswirtschaftslehre ohne Rechtsgrundlage.'
    },
    {
      nr: 25, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Der 17-jährige Auszubildende Lukas Fendrich soll bei einer Kundenveranstaltung helfen. Geplant ist: Beginn um 9:00 Uhr, Ende um 20:00 Uhr, dazwischen acht Stunden Arbeit und insgesamt drei Stunden Pausen.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Jugendarbeitsschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Plan ist zulässig, weil die Arbeitszeit acht Stunden nicht überschreitet.',
        'Der Plan ist zulässig, weil Pausen bei Jugendlichen nicht berücksichtigt werden.',
        'Der Plan ist unzulässig, weil die Schichtzeit (Arbeitszeit einschließlich der Ruhepausen) bei Jugendlichen grundsätzlich zehn Stunden nicht überschreiten darf.',
        'Der Plan ist unzulässig, weil Jugendliche nur bis 18:00 Uhr beschäftigt werden dürfen.',
        'Der Plan ist zulässig, wenn die Eltern schriftlich zustimmen.'
      ],
      loesung: 3,
      erklaerung: 'Schichtzeit ist die tägliche Arbeitszeit unter Hinzurechnung der Ruhepausen (§ 4 Abs. 2 JArbSchG). Sie darf bei Jugendlichen grundsätzlich zehn Stunden nicht überschreiten (§ 12 JArbSchG); hier beträgt sie elf Stunden. Höhere Grenzen gelten nur für einzelne Branchen wie Gaststätten oder Landwirtschaft. Ein Arbeitsende um 20:00 Uhr wäre zulässig (§ 14 Abs. 1 JArbSchG), und acht Stunden Arbeit mit mindestens 60 Minuten Pause entsprechen den §§ 8 und 11 JArbSchG.'
    },
    {
      nr: 26, thema: 'rechtsquellen', typ: 'zuordnung',
      text: 'In einer Schulung ordnet Frau Krämer verschiedene Regelungen den Teilgebieten des Arbeitsrechts zu.',
      frage: 'Welche der folgenden Teilgebiete des Arbeitsrechts sind den nachstehenden Regelungen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Teilgebiet in das Kästchen ein.',
      optionenTitel: 'Teilgebiete',
      optionen: [
        'Individualarbeitsrecht',
        'Kollektivarbeitsrecht',
        'Arbeitsschutzrecht'
      ],
      itemsTitel: 'Regelungen',
      items: [
        { text: 'Kündigungsfristen nach § 622 BGB', loesung: 1 },
        { text: 'Abschluss eines Entgelttarifvertrags zwischen Gewerkschaft und Arbeitgeberverband', loesung: 2 },
        { text: 'Anspruch auf ein Arbeitszeugnis bei Beendigung des Arbeitsverhältnisses', loesung: 1 },
        { text: 'Mitbestimmung des Betriebsrats bei der Einführung von Gleitzeit', loesung: 2 },
        { text: 'Pflicht des Arbeitgebers zur Gefährdungsbeurteilung nach dem Arbeitsschutzgesetz', loesung: 3 }
      ],
      erklaerung: 'Das Individualarbeitsrecht regelt das Verhältnis zwischen einzelnem Arbeitnehmer und Arbeitgeber (z. B. Arbeitsvertrag nach §§ 611a ff. BGB, Kündigungsfristen nach § 622 BGB, Zeugnis nach § 109 GewO). Das Kollektivarbeitsrecht regelt das Verhältnis zwischen den Koalitionen (Tarifrecht nach dem TVG, Arbeitskampfrecht) sowie zwischen Betriebsrat und Arbeitgeber (BetrVG). Das Arbeitsschutzrecht verpflichtet den Arbeitgeber öffentlich-rechtlich zum Schutz der Beschäftigten (z. B. ArbSchG, ArbZG, JArbSchG, MuSchG); seine Einhaltung überwachen staatliche Behörden.'
    },
    {
      nr: 27, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Mainblick Software AG erzielte im Jahr 2025 Umsatzerlöse von 68.400.000,00 EUR und im Jahr 2026 Umsatzerlöse von 74.556.000,00 EUR.',
      frage: 'Berechnen Sie die Veränderung der Umsatzerlöse im Jahr 2026 gegenüber dem Vorjahr in Prozent.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf die erste Nachkommastelle.',
      loesung: 9, nachkommastellen: 1, einheit: '%',
      erklaerung: 'Veränderung in % = (Umsatz 2026 − Umsatz 2025) ÷ Umsatz 2025 × 100 = (74.556.000,00 EUR − 68.400.000,00 EUR) ÷ 68.400.000,00 EUR × 100 = 6.156.000,00 EUR ÷ 68.400.000,00 EUR × 100 = 9,0 %. Bezugsgröße ist immer der Wert des Vorjahres.'
    },
    {
      nr: 28, thema: 'konjunktur', typ: 'einfach',
      text: 'Die Controllerin Paula Graumann liest, dass in einem Land seit über einem Jahr die Preise für die meisten Waren und Dienstleistungen sinken.',
      frage: 'Welche der folgenden Folgen ist für eine anhaltende Deflation typisch?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Folge in das Kästchen ein.',
      optionen: [
        'Verbraucher und Unternehmen halten sich mit Käufen und Investitionen zurück, weil sie weiter sinkende Preise erwarten; Umsätze, Gewinne und Beschäftigung können sinken.',
        'Die Kaufkraft des Geldes sinkt.',
        'Die Nachfrage steigt stark an, weil alle Haushalte sofort kaufen wollen.',
        'Schuldner werden entlastet, weil der reale Wert ihrer Schulden sinkt.',
        'Die Europäische Zentralbank erhöht in einer Deflation typischerweise die Leitzinsen.'
      ],
      loesung: 1,
      erklaerung: 'Deflation ist ein anhaltender Rückgang des allgemeinen Preisniveaus; die Kaufkraft des Geldes steigt. Weil weitere Preissenkungen erwartet werden, verschieben Haushalte und Unternehmen Käufe und Investitionen; das kann eine Abwärtsspirale aus sinkenden Umsätzen, Gewinnen und Beschäftigung auslösen. Der reale Wert von Schulden steigt. Die EZB würde gegensteuern, etwa mit Zinssenkungen; ihr vorrangiges Ziel ist Preisstabilität (Art. 127 Abs. 1 AEUV), Preisniveaustabilität ist auch Ziel des § 1 StabG.'
    },
    {
      nr: 29, thema: 'unternehmensgruendung', typ: 'einfach',
      text: 'Zwei ehemalige Beschäftigte der Mainblick Software AG machen sich selbstständig: Elke Sommerfeld gibt als selbstständige Dozentin Programmierkurse für Unternehmen und Volkshochschulen. Patrick Lenz verkauft in einem Onlineshop gebrauchte Notebooks und Zubehör.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Beide müssen ein Gewerbe beim Gewerbeamt anmelden.',
        'Frau Sommerfeld muss ein Gewerbe anmelden, Herr Lenz nicht, weil er nur online verkauft.',
        'Keiner von beiden muss seine Tätigkeit bei einer Behörde anmelden.',
        'Herr Lenz muss ein Gewerbe beim Gewerbeamt anmelden; Frau Sommerfeld übt eine freiberufliche unterrichtende Tätigkeit aus, muss kein Gewerbe anmelden und teilt die Aufnahme ihrer Tätigkeit dem Finanzamt mit.',
        'Beide müssen sich ausschließlich bei der Berufsgenossenschaft anmelden.'
      ],
      loesung: 4,
      erklaerung: 'Wer ein Gewerbe beginnt, etwa einen Onlinehandel, muss dies beim Gewerbeamt anzeigen (§ 14 GewO); das Gewerbeamt informiert u. a. das Finanzamt, und Gewerbetreibende werden Mitglied der IHK. Freie Berufe sind kein Gewerbe; dazu gehört nach § 18 Abs. 1 Nr. 1 EStG u. a. die selbstständige unterrichtende Tätigkeit. Freiberufler melden kein Gewerbe an, sondern teilen die Aufnahme ihrer Tätigkeit dem Finanzamt mit (§ 138 Abs. 1 AO, Fragebogen zur steuerlichen Erfassung) und zahlen keine Gewerbesteuer. Selbstständige Lehrkräfte ohne versicherungspflichtige Arbeitnehmer sind außerdem rentenversicherungspflichtig und müssen sich innerhalb von drei Monaten beim Rentenversicherungsträger melden (§ 2 Satz 1 Nr. 1, § 190a SGB VI).'
    },
    {
      nr: 30, thema: 'entgelt', typ: 'mehrfach',
      text: 'Die Personalabteilung erstellt die monatliche Gehaltsabrechnung für den gesetzlich krankenversicherten Softwareentwickler Florian Becht.',
      frage: 'Welche der folgenden Beträge werden vom Bruttogehalt von Herrn Becht abgezogen?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Beträgen in die Kästchen ein.',
      optionen: [
        'Arbeitgeberanteil zur Krankenversicherung',
        'Lohnsteuer',
        'Beitrag zur gesetzlichen Unfallversicherung',
        'Umlage für das Insolvenzgeld',
        'Beitrag der Mainblick Software AG an die Industrie- und Handelskammer',
        'Arbeitnehmeranteil zur Rentenversicherung'
      ],
      loesung: [2, 6],
      erklaerung: 'Vom Bruttogehalt behält der Arbeitgeber die Lohnsteuer (§ 38 Abs. 3 EStG), gegebenenfalls Solidaritätszuschlag und Kirchensteuer sowie die Arbeitnehmeranteile zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung ein und führt sie ab (§ 28g SGB IV). Die Arbeitgeberanteile, den Beitrag zur Unfallversicherung (§ 150 SGB VII), die Insolvenzgeldumlage (§ 358 SGB III) und den IHK-Beitrag trägt der Arbeitgeber allein; sie mindern das Gehalt nicht.'
    }
  ]
});
