// Übungssatz 12 – eigene Aufgaben im Stil der BITLC-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-12',
  titel: 'Übungssatz 12',
  untertitel: 'Hanseklick Webdesign KG',
  ausgangssituation:
    'Die Hanseklick Webdesign KG mit Sitz in Lübeck entwickelt Websites, Onlineshops und Web-Apps für Unternehmen aus Tourismus, Handel und Kultur an der Ostsee. Persönlich haftende Gesellschafterin (Komplementärin) ist Merle Jacobsen, Kommanditist ist Arne Thießen. Die KG beschäftigt in der Regel 70 Arbeitnehmerinnen und Arbeitnehmer. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 3,
      text: 'Die Hanseklick Webdesign KG bildet Fachinformatikerinnen und Fachinformatiker für Anwendungsentwicklung sowie Mediengestalterinnen und Mediengestalter Digital und Print aus. Derzeit sind neun Auszubildende beschäftigt. Ausbildungsleiter ist Kai Brodersen, der auch Beschäftigte ohne Berufsabschluss bei ihrer beruflichen Entwicklung berät.'
    },
    {
      von: 4, bis: 6,
      text: 'Bei der Hanseklick Webdesign KG besteht ein Betriebsrat mit fünf Mitgliedern, Vorsitzende ist Swantje Möller. Die Jugend- und Auszubildendenvertretung (JAV) besteht aus einer Person, der Auszubildenden Jule Ahrens.'
    },
    {
      von: 13, bis: 14,
      text: 'Die Hanseklick Webdesign KG will enger mit anderen Agenturen zusammenarbeiten. Merle Jacobsen und Arne Thießen informieren sich deshalb über weitere Rechtsformen und über die Wirkung von Eintragungen im Handelsregister.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'ausbildung', typ: 'einfach',
      text: 'Der Auszubildende Lasse Wendt stammt aus Stralsund und wohnt in einem möblierten Zimmer, das ihm die Hanseklick Webdesign KG zur Verfügung stellt. Im Ausbildungsvertrag ist vereinbart, dass die Unterkunft auf die Ausbildungsvergütung angerechnet wird.',
      frage: 'Welche der folgenden Aussagen zur Anrechnung der Unterkunft trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Unterkunft darf vollständig angerechnet werden, auch wenn Herrn Wendt danach keine Vergütung mehr ausgezahlt wird.',
        'Die Unterkunft darf höchstens mit dem amtlichen Sachbezugswert und insgesamt nur bis zu 75 % der Bruttovergütung angerechnet werden.',
        'Sachleistungen dürfen auf die Ausbildungsvergütung grundsätzlich nicht angerechnet werden.',
        'Die Anrechnung ist nur mit Zustimmung der Industrie- und Handelskammer zulässig.',
        'Die Unterkunft darf höchstens bis zu 25 % der Bruttovergütung angerechnet werden.'
      ],
      loesung: 2,
      erklaerung: '§ 17 Abs. 6 BBiG: Sachleistungen können in Höhe der nach § 17 Abs. 1 Satz 1 Nr. 4 SGB IV festgesetzten Sachbezugswerte (Sozialversicherungsentgeltverordnung) angerechnet werden, jedoch nicht über 75 % der Bruttovergütung hinaus. Mindestens ein Viertel der Bruttovergütung muss also in Geld gezahlt werden. Die Zusammensetzung der Vergütung gehört in die Vertragsniederschrift (§ 11 Abs. 1 Satz 2 Nr. 6 BBiG).'
    },
    {
      nr: 2, thema: 'ausbildung', typ: 'einfach',
      text: 'Der Webentwickler Tjark Hansen hat keinen Berufsabschluss. Er arbeitet seit fünf Jahren bei der Hanseklick Webdesign KG und ist dort die ganze Zeit in der Anwendungsentwicklung tätig. Er möchte die Abschlussprüfung als Fachinformatiker für Anwendungsentwicklung ablegen, ohne eine Ausbildung zu absolvieren. Die Ausbildungsdauer in diesem Beruf beträgt drei Jahre.',
      frage: 'Welche der folgenden Aussagen zur Zulassung von Herrn Hansen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ohne Berufsausbildungsvertrag ist eine Zulassung zur Abschlussprüfung grundsätzlich ausgeschlossen.',
        'Er muss mindestens die doppelte Ausbildungsdauer, also sechs Jahre, in dem Beruf tätig gewesen sein.',
        'Über seine Zulassung entscheidet allein die Hanseklick Webdesign KG als Arbeitgeberin.',
        'Er kann zugelassen werden, wenn er nachweist, dass er mindestens das Eineinhalbfache der vorgeschriebenen Ausbildungsdauer, hier viereinhalb Jahre, in dem Beruf tätig gewesen ist.',
        'Er muss vor der Prüfung zunächst die Zwischenprüfung bei der Berufsschule bestehen.'
      ],
      loesung: 4,
      erklaerung: '§ 45 Abs. 2 BBiG: Zur Abschlussprüfung ist auch zuzulassen, wer nachweist, dass er mindestens das Eineinhalbfache der Zeit, die als Ausbildungsdauer vorgeschrieben ist, in dem Beruf tätig gewesen ist, in dem die Prüfung abgelegt werden soll (Externenprüfung). Vom Nachweis der Mindestzeit kann abgesehen werden, wenn glaubhaft gemacht wird, dass die berufliche Handlungsfähigkeit erworben wurde. Über die Zulassung entscheidet die zuständige Stelle, hier die BITLC (§ 46 Abs. 1 BBiG).'
    },
    {
      nr: 3, thema: 'ausbildung', typ: 'einfach',
      text: 'Der Auszubildende Mats Petersen soll nach dem Wunsch der Komplementärin Merle Jacobsen während der Arbeitszeit beim Umzug ihrer Privatwohnung helfen und jeden Freitag ihren privaten Pkw waschen.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Auszubildenden dürfen nur Aufgaben übertragen werden, die dem Ausbildungszweck dienen; zu diesen privaten Diensten ist Herr Petersen nicht verpflichtet.',
        'Herr Petersen muss alle Weisungen der Komplementärin befolgen, weil sie persönlich haftende Gesellschafterin ist.',
        'Private Hilfstätigkeiten sind zulässig, solange sie höchstens zehn Prozent der Ausbildungszeit ausmachen.',
        'Die Aufgaben sind zulässig, wenn Herr Petersen dafür eine zusätzliche Vergütung erhält.',
        'Ob die Aufgaben zulässig sind, entscheidet die Berufsschule.'
      ],
      loesung: 1,
      erklaerung: '§ 14 Abs. 3 BBiG: Auszubildenden dürfen nur Aufgaben übertragen werden, die dem Ausbildungszweck dienen und ihren körperlichen Kräften angemessen sind. Auszubildende müssen nur Weisungen befolgen, die ihnen im Rahmen der Berufsausbildung erteilt werden (§ 13 Satz 2 Nr. 3 BBiG). Private Dienste für die Inhaberin dienen nicht der Ausbildung zum Fachinformatiker; daran ändern auch eine Zusatzvergütung oder ein geringer Zeitanteil nichts.'
    },
    {
      nr: 4, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Webdesignerin Lene Carstens soll für die nächsten sechs Monate vom Team Webdesign in das Team Onlinemarketing wechseln und dort Kampagnen betreuen. Ihr Arbeitsort bleibt unverändert.',
      frage: 'Welche der folgenden Aussagen zur Beteiligung des Betriebsrats trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Es liegt keine Versetzung vor, weil Frau Carstens weiterhin am selben Ort arbeitet.',
        'Der Betriebsrat muss erst nach dem Wechsel informiert werden.',
        'Es liegt eine Versetzung vor, weil ihr ein anderer Arbeitsbereich voraussichtlich länger als einen Monat zugewiesen wird; der Betriebsrat muss vorher zustimmen und kann die Zustimmung nur aus den gesetzlich genannten Gründen verweigern.',
        'Eine Versetzung liegt nur vor, wenn sich das Gehalt von Frau Carstens ändert.',
        'Stimmt Frau Carstens dem Wechsel zu, ist die Zustimmung des Betriebsrats nicht mehr erforderlich.'
      ],
      loesung: 3,
      erklaerung: '§ 95 Abs. 3 BetrVG: Versetzung ist die Zuweisung eines anderen Arbeitsbereichs, die voraussichtlich die Dauer von einem Monat überschreitet oder mit einer erheblichen Änderung der Umstände der Arbeit verbunden ist. In Unternehmen mit in der Regel mehr als 20 wahlberechtigten Arbeitnehmern ist der Betriebsrat vor jeder Versetzung zu unterrichten; seine Zustimmung ist einzuholen, verweigern kann er sie nur aus den Gründen des § 99 Abs. 2 BetrVG (§ 99 Abs. 1 BetrVG). Das Einverständnis der Arbeitnehmerin ersetzt die Beteiligung des Betriebsrats nicht.'
    },
    {
      nr: 5, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Geschäftsleitung möchte festlegen, dass zwischen Weihnachten und Neujahr Betriebsferien sind und in den Sommerferien niemand länger als zwei Wochen am Stück Urlaub nimmt. Frau Möller kündigt an, dass der Betriebsrat mitreden will.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Urlaubsplanung ist allein Sache der Geschäftsleitung, der Betriebsrat hat kein Beteiligungsrecht.',
        'Der Betriebsrat darf im Rahmen der Mitbestimmung die Dauer des gesetzlichen Mindesturlaubs verkürzen.',
        'Alle Beschäftigten müssen ihren Urlaub künftig beim Betriebsrat beantragen.',
        'Der Betriebsrat hat nur ein Mitbestimmungsrecht, wenn ein Tarifvertrag dies ausdrücklich vorsieht.',
        'Allgemeine Urlaubsgrundsätze wie Betriebsferien und der Urlaubsplan unterliegen der Mitbestimmung des Betriebsrats; kommt keine Einigung zustande, entscheidet die Einigungsstelle.'
      ],
      loesung: 5,
      erklaerung: '§ 87 Abs. 1 Nr. 5 BetrVG: Der Betriebsrat hat mitzubestimmen bei der Aufstellung allgemeiner Urlaubsgrundsätze und des Urlaubsplans sowie bei der Festsetzung der zeitlichen Lage des Urlaubs für einzelne Arbeitnehmer, wenn kein Einverständnis erzielt wird. Dazu gehört auch die Einführung von Betriebsferien. Ohne Einigung entscheidet die Einigungsstelle (§ 87 Abs. 2 BetrVG). Die Dauer des gesetzlichen Mindesturlaubs (§ 3 BUrlG) können Arbeitgeber und Betriebsrat nicht verkürzen.'
    },
    {
      nr: 6, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Der Betriebsrat berät über eine Betriebsvereinbarung, die die Lernzeiten und die Prüfungsvorbereitung der Auszubildenden regelt. Die Regelung betrifft überwiegend die Auszubildenden.',
      frage: 'Welche der folgenden Aussagen zur Beteiligung von Frau Ahrens an dieser Betriebsratssitzung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Ahrens darf an der Sitzung nur als Zuhörerin teilnehmen; ein Stimmrecht hat die JAV nie.',
        'Frau Ahrens darf an der Sitzung teilnehmen und hat bei diesem Beschluss Stimmrecht, weil er überwiegend die Auszubildenden betrifft.',
        'Frau Ahrens darf nur teilnehmen, wenn die Geschäftsleitung zustimmt.',
        'Über Regelungen für Auszubildende entscheidet die JAV allein anstelle des Betriebsrats.',
        'Frau Ahrens darf an Betriebsratssitzungen nur außerhalb ihrer Ausbildungszeit teilnehmen.'
      ],
      loesung: 2,
      erklaerung: '§ 67 Abs. 1 BetrVG: Die JAV kann zu allen Betriebsratssitzungen einen Vertreter entsenden; werden Angelegenheiten behandelt, die besonders die jugendlichen Arbeitnehmer und Auszubildenden betreffen, hat zu diesen Tagesordnungspunkten die gesamte JAV ein Teilnahmerecht. § 67 Abs. 2 BetrVG: Die Jugend- und Auszubildendenvertreter haben Stimmrecht, soweit die Beschlüsse überwiegend diese Arbeitnehmer betreffen. Die JAV handelt nicht anstelle des Betriebsrats, sondern über ihn (§ 60 Abs. 2 BetrVG).'
    },
    {
      nr: 7, thema: 'arbeitsvertrag', typ: 'mehrfach',
      text: 'Der Webentwickler Jannik Thormählen erhält am Abend eine Nachricht über einen Messenger-Dienst: „Hiermit kündigen wir Ihr Arbeitsverhältnis fristgerecht.“ Ein Kollege erzählt ihm, er selbst habe seinen Arbeitsvertrag damals nur mündlich abgeschlossen.',
      frage: 'Welche der folgenden Aussagen zur Form von Arbeitsvertrag und Kündigung treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Ein Arbeitsvertrag kann auch mündlich wirksam abgeschlossen werden.',
        'Eine Kündigung über einen Messenger-Dienst ist wirksam, sobald der Empfänger die Nachricht gelesen hat.',
        'Eine Kündigung per E-Mail mit eingescannter Unterschrift erfüllt die gesetzliche Schriftform.',
        'Die Kündigung eines Arbeitsverhältnisses muss schriftlich mit eigenhändiger Unterschrift erklärt werden; die elektronische Form ist ausgeschlossen.',
        'Ein Arbeitsvertrag ist nur wirksam, wenn er notariell beurkundet wird.',
        'Eine mündliche Kündigung ist wirksam, wenn dabei Zeugen anwesend sind.'
      ],
      loesung: [1, 4],
      erklaerung: 'Der Arbeitsvertrag ist grundsätzlich formfrei und kann mündlich oder durch schlüssiges Verhalten zustande kommen. Der Arbeitgeber muss die wesentlichen Vertragsbedingungen zwar nach dem Nachweisgesetz nachweisen, das ist aber keine Voraussetzung für die Wirksamkeit. Die Kündigung bedarf dagegen zu ihrer Wirksamkeit der Schriftform; die elektronische Form ist ausgeschlossen (§ 623 BGB). Schriftform heißt eigenhändige Unterschrift auf der Urkunde (§ 126 Abs. 1 BGB). Messenger-Nachricht, E-Mail mit Scan und mündliche Kündigung sind deshalb unwirksam.'
    },
    {
      nr: 8, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Hanseklick Webdesign KG verkauft ihren Geschäftsbereich Hosting mit acht Beschäftigten an die Baltic Server GmbH. Die Server, die Kundenverträge und das Team gehen vollständig auf die Käuferin über.',
      frage: 'Welche der folgenden Aussagen zu den Arbeitsverhältnissen der acht Beschäftigten trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Arbeitsverhältnisse enden mit dem Verkauf automatisch.',
        'Die Baltic Server GmbH darf die Gehälter der übernommenen Beschäftigten sofort einseitig kürzen.',
        'Die Beschäftigten müssen mit der Baltic Server GmbH neue Arbeitsverträge mit einer neuen Probezeit abschließen.',
        'Die Baltic Server GmbH tritt in die Rechte und Pflichten aus den bestehenden Arbeitsverhältnissen ein; eine Kündigung wegen des Betriebsübergangs ist unwirksam.',
        'Die Beschäftigten können dem Übergang ihres Arbeitsverhältnisses zeitlich unbegrenzt widersprechen.'
      ],
      loesung: 4,
      erklaerung: '§ 613a Abs. 1 BGB: Geht ein Betrieb oder Betriebsteil durch Rechtsgeschäft auf einen anderen Inhaber über, tritt dieser in die Rechte und Pflichten aus den bestehenden Arbeitsverhältnissen ein. Eine Kündigung wegen des Übergangs ist unwirksam (§ 613a Abs. 4 BGB). Die Beschäftigten sind vorher zu unterrichten und können dem Übergang innerhalb eines Monats nach Zugang der Unterrichtung schriftlich widersprechen (§ 613a Abs. 5, 6 BGB). Die bisherigen Ansprüche bleiben bestehen, eine neue Probezeit gibt es nicht.'
    },
    {
      nr: 9, thema: 'arbeitsvertrag', typ: 'datum',
      text: 'Der Mediengestalter Fiete Brandt ist seit dem 01.04.2014 bei der Hanseklick Webdesign KG beschäftigt. Weil sein Arbeitsplatz wegfällt, kündigt die KG nach ordnungsgemäßer Anhörung des Betriebsrats das Arbeitsverhältnis ordentlich. Die Kündigung geht Herrn Brandt am Mittwoch, dem 17.02.2027, zu. Es gilt die gesetzliche Kündigungsfrist.',
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
      frage: 'Mit Ablauf welchen Tages endet das Arbeitsverhältnis von Herrn Brandt?',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '31.07.2027',
      erklaerung: 'Beim Zugang der Kündigung am 17.02.2027 besteht das Arbeitsverhältnis seit dem 01.04.2014, also mehr als zwölf, aber noch keine 15 Jahre. Nach § 622 Abs. 2 BGB gilt daher eine Frist von fünf Monaten zum Ende eines Kalendermonats. Vom 17.02.2027 aus ergeben fünf Monate den 17.07.2027; das nächste Monatsende ist der 31.07.2027. Für diesen Termin hätte die Kündigung spätestens am 28.02.2027 zugehen müssen.'
    },
    {
      nr: 10, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Nach dem Austausch der Monitore stehen im Flur vor dem Notausgang mehrere Kartons mit Altgeräten. Außerdem wird der Notausgang auch tagsüber abgeschlossen, damit niemand unbemerkt das Gebäude betritt; den Schlüssel hat die Empfangskraft.',
      frage: 'Welche der folgenden Aussagen zu Flucht- und Rettungswegen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Fluchtwege müssen ständig freigehalten werden, und Notausgänge müssen sich, solange Beschäftigte im Gebäude sind, von innen jederzeit ohne besondere Hilfsmittel öffnen lassen.',
        'Kartons dürfen im Fluchtweg stehen, wenn ein Durchgang von etwa 40 Zentimetern frei bleibt.',
        'Der Notausgang darf tagsüber abgeschlossen bleiben, wenn bekannt ist, wer den Schlüssel hat.',
        'Fluchtwege müssen nur bei angekündigten Kontrollen der Aufsichtsbehörde frei sein.',
        'Notausgänge müssen nicht gekennzeichnet werden, wenn alle Beschäftigten sie kennen.'
      ],
      loesung: 1,
      erklaerung: 'Nach § 4 Abs. 4 Arbeitsstättenverordnung (ArbStättV) sind Verkehrswege, Fluchtwege und Notausgänge ständig freizuhalten, damit sie jederzeit benutzt werden können. Die Technische Regel ASR A2.3 konkretisiert dies: Türen von Notausgängen müssen sich von innen ohne besondere Hilfsmittel jederzeit leicht öffnen lassen, solange sich Beschäftigte in der Arbeitsstätte befinden, und Fluchtwege und Notausgänge sind mit Rettungszeichen zu kennzeichnen. Lagerungen im Fluchtweg sind unzulässig, weil sie die Mindestbreite einschränken und Brandlast bilden.'
    },
    {
      nr: 11, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die Hanseklick Webdesign KG beschäftigt 70 Personen in Büroräumen ohne erhöhte Brandgefährdung. Die Fachkraft für Arbeitssicherheit rät, Brandschutzhelfer zu benennen und ausbilden zu lassen.',
      frage: 'Wie viele Beschäftigte müssen in der Regel mindestens als Brandschutzhelfer benannt werden?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anzahl in das Kästchen ein.',
      optionen: [
        '1 Beschäftigter',
        '2 Beschäftigte',
        '4 Beschäftigte',
        '7 Beschäftigte',
        '14 Beschäftigte'
      ],
      loesung: 3,
      erklaerung: 'Der Arbeitgeber muss eine ausreichende Anzahl von Beschäftigten mit Aufgaben der Brandbekämpfung betrauen (§ 10 Abs. 2 ArbSchG). Nach der Technischen Regel ASR A2.2 ist ein Anteil von 5 % der Beschäftigten in der Regel ausreichend; bei erhöhter Brandgefährdung können mehr nötig sein. 5 % von 70 sind 3,5, also sind mindestens vier Brandschutzhelfer zu benennen. Sie werden theoretisch und praktisch im Umgang mit Feuerlöschern unterwiesen.'
    },
    {
      nr: 12, thema: 'arbeitsschutz', typ: 'zuordnung',
      text: 'Die Personalabteilung lässt sich vom Betriebsarzt erklären, welche Arten der arbeitsmedizinischen Vorsorge es gibt. Einige Beschäftigte betreuen auch Netzwerktechnik in der Fertigungshalle eines Kunden.',
      frage: 'Welche der folgenden Arten der arbeitsmedizinischen Vorsorge sind den nachstehenden Fällen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Vorsorgeart in das Kästchen ein. Eine Vorsorgeart kann mehreren Fällen zugeordnet werden.',
      optionenTitel: 'Arten der arbeitsmedizinischen Vorsorge',
      optionen: [
        'Pflichtvorsorge',
        'Angebotsvorsorge',
        'Wunschvorsorge'
      ],
      itemsTitel: 'Fälle',
      items: [
        { text: 'Eine Webdesignerin arbeitet täglich mehrere Stunden am Bildschirm. Der Arbeitgeber muss ihr eine Untersuchung der Augen und des Sehvermögens anbieten.', loesung: 2 },
        { text: 'Ein Mitarbeiter vermutet, dass seine Rückenschmerzen mit seiner Tätigkeit zusammenhängen, und möchte sich arbeitsmedizinisch beraten lassen. Der Arbeitgeber muss ihm dies ermöglichen.', loesung: 3 },
        { text: 'Ein Netzwerktechniker ist in der Fertigungshalle regelmäßig Lärm ausgesetzt, der den oberen Auslösewert von 85 dB(A) erreicht. Er darf die Tätigkeit nur ausüben, wenn er an der Vorsorge teilgenommen hat.', loesung: 1 },
        { text: 'Eine Kollegin ist bei Kundeneinsätzen Lärm ausgesetzt, der den unteren Auslösewert von 80 dB(A) überschreitet, aber unter 85 dB(A) bleibt.', loesung: 2 }
      ],
      erklaerung: 'Verordnung zur arbeitsmedizinischen Vorsorge (ArbMedVV): Die Pflichtvorsorge muss der Arbeitgeber bei besonders gefährdenden Tätigkeiten veranlassen; ohne Teilnahme darf die Tätigkeit nicht ausgeübt werden (§ 4 ArbMedVV), z. B. bei Lärm ab 85 dB(A). Die Angebotsvorsorge muss er anbieten, die Teilnahme ist freiwillig (§ 5 ArbMedVV), z. B. bei Bildschirmarbeit oder Lärm über 80 dB(A). Die Wunschvorsorge muss er auf Wunsch der Beschäftigten ermöglichen, es sei denn, ein Gesundheitsschaden durch die Arbeit ist nicht zu erwarten (§ 5a ArbMedVV). Die Anlässe stehen im Anhang der ArbMedVV.'
    },
    {
      nr: 13, thema: 'rechtsformen', typ: 'einfach',
      text: 'Die Hanseklick Webdesign KG überlegt, der „Agenturverbund Nord eG“ beizutreten. Die Genossenschaft kauft für ihre Mitglieder Softwarelizenzen und Serverleistungen gemeinsam und damit günstiger ein.',
      frage: 'Welche der folgenden Aussagen zur eingetragenen Genossenschaft (eG) trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Stimmrecht in der Generalversammlung richtet sich wie bei der Aktiengesellschaft nach der Höhe der Kapitalbeteiligung.',
        'Für die Gründung einer eG ist ein Mindestkapital von 50.000,00 EUR vorgeschrieben.',
        'Die Mitglieder haften für die Schulden der eG stets unbeschränkt mit ihrem Privatvermögen.',
        'Die eG wird in Abteilung A des Handelsregisters eingetragen.',
        'Zweck der eG ist die Förderung des Erwerbs oder der Wirtschaft ihrer Mitglieder; in der Generalversammlung hat grundsätzlich jedes Mitglied eine Stimme.'
      ],
      loesung: 5,
      erklaerung: '§ 1 Abs. 1 GenG: Genossenschaften bezwecken, den Erwerb oder die Wirtschaft ihrer Mitglieder durch gemeinschaftlichen Geschäftsbetrieb zu fördern. Jedes Mitglied hat grundsätzlich eine Stimme, unabhängig von seinen Geschäftsanteilen (§ 43 Abs. 3 GenG). Für die Gründung sind mindestens drei Mitglieder nötig (§ 4 GenG), ein Mindestkapital gibt es nicht. Den Gläubigern haftet nur das Vermögen der Genossenschaft (§ 2 GenG); ob Mitglieder Nachschüsse leisten müssen, regelt die Satzung. Eingetragen wird die eG im Genossenschaftsregister.'
    },
    {
      nr: 14, thema: 'rechtsformen', typ: 'zuordnung',
      text: 'Arne Thießen erklärt den Auszubildenden, dass Eintragungen im Handelsregister unterschiedlich wirken.',
      frage: 'Welche der folgenden Wirkungen sind den nachstehenden Eintragungen in das Handelsregister zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Wirkung in das Kästchen ein.',
      optionenTitel: 'Wirkungen der Eintragung',
      optionen: [
        'Konstitutive (rechtsbegründende) Wirkung',
        'Deklaratorische (rechtsbekundende) Wirkung'
      ],
      itemsTitel: 'Eintragungen',
      items: [
        { text: 'Eintragung einer neu gegründeten GmbH', loesung: 1 },
        { text: 'Eintragung der Prokura, die Frau Jacobsen ihrem Vertriebsleiter bereits erteilt hat', loesung: 2 },
        { text: 'Eintragung eines Einzelunternehmers, dessen Gewerbebetrieb nach Art und Umfang einen kaufmännisch eingerichteten Geschäftsbetrieb erfordert', loesung: 2 },
        { text: 'Eintragung eines Kleingewerbetreibenden, der sich freiwillig eintragen lässt, um Kaufmann zu werden', loesung: 1 }
      ],
      erklaerung: 'Konstitutiv wirkt eine Eintragung, wenn die Rechtsfolge erst mit ihr entsteht: Die GmbH besteht als solche erst mit der Eintragung (§ 11 Abs. 1 GmbHG), der Kleingewerbetreibende wird erst durch die Eintragung Kaufmann (Kannkaufmann, § 2 HGB). Deklaratorisch wirkt sie, wenn sie eine bereits bestehende Rechtslage nur bekannt macht: Der Istkaufmann ist schon wegen seines Handelsgewerbes Kaufmann (§ 1 HGB), die Prokura entsteht bereits mit der Erteilung (§§ 48, 53 HGB). Auf eingetragene und bekannt gemachte Tatsachen müssen sich Dritte verweisen lassen (§ 15 HGB).'
    },
    {
      nr: 15, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Ein Großkunde aus der Kreuzfahrtbranche hat mehrere Projekte für die nächsten Monate storniert. Für die Hälfte der Beschäftigten gibt es vorübergehend deutlich weniger Arbeit. Die Geschäftsleitung prüft, ob Kurzarbeit eingeführt werden kann.',
      frage: 'Welche der folgenden Aussagen zum Kurzarbeitergeld trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Kurzarbeitergeld zahlt die Krankenkasse der Beschäftigten.',
        'Bei einem erheblichen, vorübergehenden Arbeitsausfall zahlt die Agentur für Arbeit Kurzarbeitergeld; es beträgt 60 % bzw. mit Kind 67 % der Nettoentgeltdifferenz.',
        'Kurzarbeitergeld ersetzt den ausgefallenen Bruttolohn vollständig.',
        'Kurzarbeitergeld wird nur gezahlt, wenn der Arbeitgeber bereits Insolvenz angemeldet hat.',
        'Die Beschäftigten müssen das Kurzarbeitergeld später an die Agentur für Arbeit zurückzahlen.'
      ],
      loesung: 2,
      erklaerung: 'Kurzarbeitergeld ist eine Leistung der Arbeitslosenversicherung. Anspruch besteht bei einem erheblichen Arbeitsausfall mit Entgeltausfall, der auf wirtschaftlichen Gründen oder einem unabwendbaren Ereignis beruht und vorübergehend ist (§§ 95, 96 SGB III). Der Arbeitgeber oder der Betriebsrat muss den Arbeitsausfall bei der Agentur für Arbeit anzeigen (§ 99 SGB III). Das Kurzarbeitergeld beträgt 67 % der Nettoentgeltdifferenz für Beschäftigte mit mindestens einem Kind, sonst 60 % (§ 105 SGB III). Es muss nicht zurückgezahlt werden.'
    },
    {
      nr: 16, thema: 'sozialversicherung', typ: 'mehrfach',
      text: 'Die Personalabteilung erklärt, wer in der gesetzlichen Unfallversicherung versichert ist.',
      frage: 'Welche der folgenden Personen sind kraft Gesetzes in der gesetzlichen Unfallversicherung versichert?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Personen in die Kästchen ein.',
      optionen: [
        'Die Komplementärin Merle Jacobsen als Unternehmerin',
        'Die Auszubildenden der Hanseklick Webdesign KG während ihrer betrieblichen Ausbildung',
        'Ein freiberuflicher Grafiker, der gelegentlich Aufträge für die KG übernimmt und sich nicht freiwillig versichert hat',
        'Eine Bekannte der Komplementärin, die sie privat in der Agentur besucht und auf der Treppe stürzt',
        'Eine Studentin während einer Lehrveranstaltung an ihrer Hochschule',
        'Der Kommanditist Arne Thießen, der nicht im Unternehmen mitarbeitet'
      ],
      loesung: [2, 5],
      erklaerung: '§ 2 Abs. 1 SGB VII: Kraft Gesetzes versichert sind u. a. Beschäftigte einschließlich der Auszubildenden (Nr. 1, 2) sowie Studierende während der Aus- und Fortbildung an Hochschulen (Nr. 8 Buchst. c). Unternehmer und Selbstständige sind nur versichert, wenn die Satzung des Unfallversicherungsträgers dies vorsieht oder sie sich freiwillig versichern (§§ 3, 6 SGB VII). Ein Kommanditist, der nicht mitarbeitet, ist kein Beschäftigter. Private Besucherinnen und Besucher sind nicht gesetzlich unfallversichert.'
    },
    {
      nr: 17, thema: 'umweltschutz', typ: 'einfach',
      text: 'Beim Einkauf von Kopierpapier und Reinigungsmitteln achtet die Hanseklick Webdesign KG auf ein Zeichen, das eine Blume zeigt, deren Blütenblätter aus Sternen bestehen und in deren Mitte ein „E“ steht.',
      frage: 'Wofür steht dieses Zeichen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Das Zeichen …',
      optionen: [
        'ist das EU-Bio-Logo für Lebensmittel aus ökologischem Landbau.',
        'bestätigt als CE-Kennzeichnung, dass ein Produkt die Sicherheitsanforderungen der EU erfüllt.',
        'ist das Umweltzeichen der EU („EU Ecolabel“) für Produkte und Dienstleistungen, die über ihren gesamten Lebensweg geringere Umweltauswirkungen haben als vergleichbare Produkte.',
        'zeigt die Energieeffizienzklasse eines Produkts an.',
        'weist darauf hin, dass die Verpackung über ein duales System entsorgt wird.'
      ],
      loesung: 3,
      erklaerung: 'Das EU Ecolabel („Euroblume“) ist das freiwillige Umweltzeichen der Europäischen Union nach der Verordnung (EG) Nr. 66/2010. Es wird für Produkte und Dienstleistungen vergeben, die strenge Umweltkriterien über den gesamten Lebensweg erfüllen, z. B. für Papier, Reinigungsmittel oder Farben. Das EU-Bio-Logo kennzeichnet Bio-Lebensmittel, das CE-Zeichen die Einhaltung von EU-Produktanforderungen, das EU-Energielabel die Energieeffizienz.'
    },
    {
      nr: 18, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Hanseklick Webdesign KG will klimafreundlicher werden. Ein Mitarbeiter schlägt vor, einfach Zertifikate für Klimaschutzprojekte zu kaufen, damit sich sonst nichts ändern muss.',
      frage: 'Welche der folgenden Vorgehensweisen entspricht dem Grundsatz „Vermeiden vor Verringern vor Kompensieren“?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Vorgehensweise in das Kästchen ein.',
      optionen: [
        'Zuerst Emissionen vermeiden, z. B. Bahn statt Inlandsflug zu Kundenterminen, dann unvermeidbare Emissionen verringern, z. B. durch Ökostrom und sparsame Geräte, und nur den Rest durch Klimaschutzprojekte ausgleichen.',
        'Zuerst kompensieren, weil der Kauf von Zertifikaten am schnellsten wirkt.',
        'Kompensation ersetzt die Vermeidung vollständig; wer genug Zertifikate kauft, muss nichts ändern.',
        'Nur Emissionen verringern; der Ausgleich über Klimaschutzprojekte ist in Deutschland verboten.',
        'Klimaschutz ist ausschließlich Aufgabe des Staates; Unternehmen müssen nichts tun.'
      ],
      loesung: 1,
      erklaerung: 'Nach dem Grundsatz „Vermeiden vor Verringern vor Kompensieren“ werden Treibhausgasemissionen zuerst vermieden, dann verbleibende Emissionen verringert, und erst unvermeidbare Restemissionen werden durch Klimaschutzprojekte ausgeglichen. Kompensation allein ändert am eigenen Ausstoß nichts. Das Bundes-Klimaschutzgesetz verfolgt das Ziel der Netto-Treibhausgasneutralität bis 2045 (§ 3 Abs. 2 KSG).'
    },
    {
      nr: 19, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Hanseklick Webdesign KG ist Mitglied im Arbeitgeberverband und an dessen Tarifverträge gebunden. Der Entgelttarifvertrag erlaubt ausdrücklich, die jährliche Sonderzahlung in wirtschaftlich schwierigen Zeiten durch Betriebsvereinbarung um bis zu 30 % zu kürzen.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Eine Betriebsvereinbarung darf tarifliche Entgelte jederzeit unterschreiten, auch ohne Regelung im Tarifvertrag.',
        'Klauseln, die Abweichungen vom Tarifvertrag erlauben, sind nach dem Tarifvertragsgesetz verboten.',
        'Die Kürzung kann nur einzeln mit jedem Beschäftigten im Arbeitsvertrag vereinbart werden.',
        'Es handelt sich um eine Öffnungsklausel; nur weil der Tarifvertrag sie ausdrücklich enthält, darf eine Betriebsvereinbarung hier zum Nachteil der Beschäftigten vom Tarifvertrag abweichen.',
        'Durch die Klausel darf die Geschäftsleitung die Sonderzahlung ohne Beteiligung des Betriebsrats beliebig kürzen.'
      ],
      loesung: 4,
      erklaerung: '§ 4 Abs. 3 TVG: Abweichende Abmachungen sind nur zulässig, soweit sie durch den Tarifvertrag gestattet sind (Öffnungsklausel) oder eine Änderung zugunsten des Arbeitnehmers enthalten (Günstigkeitsprinzip). Arbeitsentgelte, die durch Tarifvertrag geregelt sind, können nicht Gegenstand einer Betriebsvereinbarung sein, es sei denn, der Tarifvertrag lässt ergänzende Betriebsvereinbarungen ausdrücklich zu (§ 77 Abs. 3 BetrVG). Die Öffnungsklausel erlaubt hier nur eine Kürzung durch Betriebsvereinbarung, also gemeinsam mit dem Betriebsrat, und nur bis zur festgelegten Grenze.'
    },
    {
      nr: 20, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Verhandlungen über einen neuen Entgelttarifvertrag sind gescheitert, eine Schlichtung blieb ohne Ergebnis. Die Gewerkschaft kündigt eine Urabstimmung an.',
      frage: 'Welche der folgenden Aussagen zur Urabstimmung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'An der Urabstimmung dürfen alle Beschäftigten der Branche teilnehmen, auch Nichtmitglieder.',
        'Die Urabstimmung ist im Tarifvertragsgesetz zwingend vorgeschrieben.',
        'Die Urabstimmung wird vom Arbeitgeberverband durchgeführt.',
        'Ein unbefristeter Streik darf bereits beginnen, wenn 25 % der Mitglieder zustimmen.',
        'In der Urabstimmung entscheiden die Gewerkschaftsmitglieder geheim über einen unbefristeten Streik; nach den Satzungen vieler Gewerkschaften ist dafür eine qualifizierte Mehrheit, häufig 75 %, erforderlich.'
      ],
      loesung: 5,
      erklaerung: 'Die Urabstimmung ist nicht gesetzlich geregelt, sondern in den Satzungen der Gewerkschaften. Stimmberechtigt sind die Mitglieder im betroffenen Tarifgebiet. Für einen unbefristeten Streik verlangen viele Satzungen eine Zustimmung von 75 %; für die Annahme eines Verhandlungsergebnisses und damit das Ende des Streiks genügen häufig 25 %. Grundlage des Streikrechts ist die Koalitionsfreiheit (Art. 9 Abs. 3 GG).'
    },
    {
      nr: 21, thema: 'wirtschaft-grundlagen', typ: 'mehrfach',
      text: 'Die Hanseklick Webdesign KG gestaltet die Website für eine Ausstellung über die Wirtschaftsordnungen im geteilten Deutschland. Die Texte sollen die Zentralverwaltungswirtschaft beschreiben.',
      frage: 'Welche der folgenden Merkmale kennzeichnen eine Zentralverwaltungswirtschaft?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Merkmalen in die Kästchen ein.',
      optionen: [
        'Die Preise bilden sich frei durch Angebot und Nachfrage.',
        'Die Unternehmen entscheiden selbstständig über Produktion und Investitionen.',
        'Eine zentrale staatliche Planungsbehörde legt fest, was in welcher Menge produziert wird.',
        'Es herrschen Gewerbe- und Vertragsfreiheit.',
        'Der Wettbewerb zwischen den Unternehmen steuert die Produktion.',
        'Die Produktionsmittel befinden sich überwiegend in Staats- oder Kollektiveigentum.'
      ],
      loesung: [3, 6],
      erklaerung: 'In der Zentralverwaltungswirtschaft (Planwirtschaft) plant eine zentrale Behörde Produktion, Verteilung und Preise; die Produktionsmittel gehören überwiegend dem Staat oder Kollektiven. In der freien Marktwirtschaft steuern dagegen Angebot, Nachfrage und Wettbewerb die Wirtschaft, Unternehmen entscheiden selbst, und es gelten Privateigentum, Gewerbe- und Vertragsfreiheit. Die soziale Marktwirtschaft der Bundesrepublik baut auf den Grundrechten auf, z. B. Berufsfreiheit (Art. 12 GG) und Eigentum (Art. 14 GG), ergänzt durch sozialen Ausgleich.'
    },
    {
      nr: 22, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'In der Webentwicklung der Hanseklick Webdesign KG sind nur 3 von 28 Beschäftigten Frauen. Die Geschäftsleitung startet deshalb ein Mentoringprogramm und Programmier-Workshops, die sich ausschließlich an Frauen richten.',
      frage: 'Welche der folgenden Aussagen zu diesem Programm trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Programm ist eine unzulässige Benachteiligung der Männer und deshalb verboten.',
        'Das Programm ist nur zulässig, wenn alle männlichen Beschäftigten schriftlich zustimmen.',
        'Das Programm ist zulässig, weil geeignete und angemessene Maßnahmen erlaubt sind, um bestehende Nachteile wegen des Geschlechts zu verhindern oder auszugleichen.',
        'Fördermaßnahmen für bestimmte Gruppen sind nur in Behörden zulässig.',
        'Das AGG verbietet ausnahmslos jede Unterscheidung nach dem Geschlecht.'
      ],
      loesung: 3,
      erklaerung: '§ 5 AGG (positive Maßnahmen): Eine unterschiedliche Behandlung ist zulässig, wenn durch geeignete und angemessene Maßnahmen bestehende Nachteile wegen eines in § 1 AGG genannten Grundes verhindert oder ausgeglichen werden sollen. Ein Förderprogramm für Frauen in einem Bereich, in dem sie stark unterrepräsentiert sind, ist eine solche Maßnahme. Es darf aber nicht zu einem automatischen und absoluten Vorrang bei Einstellungen führen.'
    },
    {
      nr: 23, thema: 'organisation', typ: 'einfach',
      text: 'Dem Teamleiter Webentwicklung, Bjarne Holm, sind 18 Beschäftigte direkt unterstellt. Er klagt über zu viele Rückfragen. Die Geschäftsleitung überlegt, zwei Gruppenleitungen zwischen Herrn Holm und den Beschäftigten einzurichten.',
      frage: 'Welche der folgenden Aussagen zur Leitungsspanne trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Leitungsspanne gibt die Zahl aller Beschäftigten eines Unternehmens an.',
        'Die Leitungsspanne gibt an, wie viele Stellen einer Instanz direkt unterstellt sind; werden zusätzliche Gruppenleitungen eingerichtet, sinkt sie, und die Zahl der Hierarchieebenen steigt.',
        'Je größer die Leitungsspanne, desto mehr Hierarchieebenen hat ein Unternehmen.',
        'Die Leitungsspanne ist gesetzlich auf höchstens zehn Personen begrenzt.',
        'Die Leitungsspanne bezeichnet die Zeit, die eine Führungskraft für Leitungsaufgaben aufwendet.'
      ],
      loesung: 2,
      erklaerung: 'Die Leitungsspanne (Kontrollspanne) ist die Zahl der Stellen, die einer Instanz unmittelbar unterstellt sind. Ist sie zu groß, wird die Führungskraft überlastet; ist sie klein, braucht das Unternehmen bei gleicher Beschäftigtenzahl mehr Hierarchieebenen (größere Leitungstiefe) und längere Dienstwege. Mit zwei Gruppenleitungen sinkt die Leitungsspanne von Herrn Holm auf zwei, und es entsteht eine zusätzliche Ebene. Gesetzliche Vorgaben gibt es nicht; es handelt sich um ein Modell der Organisationslehre.'
    },
    {
      nr: 24, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Die Hanseklick Webdesign KG hat im letzten Jahr einen guten Gewinn erzielt. Weil mehrere Kunden ihre Rechnungen erst nach Monaten bezahlen, reicht das Geld auf dem Geschäftskonto Ende des Monats aber kaum für die Gehälter. Die Buchhalterin Wiebke Lüthje schlägt Alarm.',
      frage: 'Welche der folgenden Aussagen zur Liquidität trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Liquidität bedeutet, jederzeit die fälligen Zahlungsverpflichtungen erfüllen zu können; sie ist ein Formalziel, dessen Verfehlung zur Zahlungsunfähigkeit und damit zur Insolvenz führen kann.',
        'Liquidität ist das Verhältnis des Gewinns zum Eigenkapital.',
        'Ein Unternehmen mit hohem Gewinn ist immer zahlungsfähig.',
        'Liquidität ist ein Sachziel, weil sie die Leistungen des Unternehmens beschreibt.',
        'Je mehr Bargeld ein Unternehmen hält, desto höher ist immer auch seine Rentabilität.'
      ],
      loesung: 1,
      erklaerung: 'Liquidität ist die Fähigkeit, fällige Zahlungsverpflichtungen jederzeit fristgerecht zu erfüllen. Sie zählt wie Gewinn und Rentabilität zu den Formalzielen. Auch ein Unternehmen mit Gewinn kann zahlungsunfähig werden, wenn Einzahlungen zu spät eingehen. Zahlungsunfähigkeit ist ein Insolvenzgrund (§ 17 InsO). Zwischen Liquidität und Rentabilität besteht oft ein Zielkonflikt, weil hohe Geldbestände kaum Ertrag bringen. Das Verhältnis von Gewinn zu Eigenkapital ist die Eigenkapitalrentabilität.'
    },
    {
      nr: 25, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Der 15-jährige Schüler Finn Lorenzen besucht die 10. Klasse eines Gymnasiums und ist noch vollzeitschulpflichtig. Er möchte in den sechswöchigen Sommerferien bei der Hanseklick Webdesign KG jobben.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Jugendarbeitsschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Er darf alle sechs Ferienwochen arbeiten, wenn seine Eltern schriftlich zustimmen.',
        'Schülerinnen und Schüler unter 18 Jahren dürfen in den Ferien grundsätzlich nicht beschäftigt werden.',
        'Für Ferienjobs gilt das Jugendarbeitsschutzgesetz nicht.',
        'Er darf in den Schulferien höchstens vier Wochen im Kalenderjahr beschäftigt werden; dabei gelten die Schutzvorschriften für Jugendliche, z. B. höchstens acht Stunden täglich.',
        'Er darf unbegrenzt beschäftigt werden, solange er nicht mehr als 40 Stunden in der Woche arbeitet.'
      ],
      loesung: 4,
      erklaerung: 'Jugendliche, die der Vollzeitschulpflicht unterliegen, werden wie Kinder behandelt (§ 2 Abs. 3 JArbSchG); ihre Beschäftigung ist grundsätzlich verboten (§ 5 Abs. 1 JArbSchG). Das Verbot gilt nicht für vollzeitschulpflichtige Jugendliche, also Schülerinnen und Schüler ab 15 Jahren (§ 2 Abs. 2, 3 JArbSchG), während der Schulferien für höchstens vier Wochen im Kalenderjahr (§ 5 Abs. 4 JArbSchG). Dabei gelten die Schutzvorschriften für Jugendliche, z. B. höchstens acht Stunden täglich und 40 Stunden wöchentlich (§ 8 JArbSchG). Die Zustimmung der Eltern erweitert die Grenze nicht.'
    },
    {
      nr: 26, thema: 'rechtsquellen', typ: 'reihenfolge',
      text: 'In der Berufsschule sollen die Auszubildenden die Rechtsquellen des Arbeitsrechts nach ihrem Rang ordnen.',
      frage: 'Bringen Sie die folgenden Rechtsquellen in die Rangfolge vom höchsten zum niedrigsten Rang.',
      anweisung: 'Tragen Sie für die ranghöchste Rechtsquelle die Ziffer 1, für die nächstniedrigere die Ziffer 2 usw. in die Kästchen ein.',
      itemsTitel: 'Rechtsquellen',
      items: [
        { text: 'Betriebsvereinbarung über die Gleitzeit', loesung: 5 },
        { text: 'Grundgesetz', loesung: 1 },
        { text: 'Arbeitsvertrag', loesung: 6 },
        { text: 'Rechtsverordnung, z. B. die Ausbildungsordnung für Fachinformatiker', loesung: 3 },
        { text: 'Tarifvertrag', loesung: 4 },
        { text: 'Bundesgesetz, z. B. das Bundesurlaubsgesetz', loesung: 2 }
      ],
      erklaerung: 'Rangfolge im Arbeitsrecht: Grundgesetz vor Bundesgesetzen (z. B. BUrlG, BBiG), diese vor Rechtsverordnungen (z. B. Ausbildungsordnungen nach § 4 BBiG), dann Tarifvertrag, Betriebsvereinbarung und Arbeitsvertrag. Die rangniedrigere Regelung darf der ranghöheren grundsätzlich nicht widersprechen. Ausnahme ist das Günstigkeitsprinzip: Eine rangniedrigere Regelung gilt, wenn sie für den Arbeitnehmer günstiger ist (§ 4 Abs. 3 TVG). Das Recht der Europäischen Union hat Anwendungsvorrang vor nationalem Recht.'
    },
    {
      nr: 27, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Hanseklick Webdesign KG weist für das abgelaufene Geschäftsjahr einen Jahresüberschuss (Gewinn) von 129.600,00 EUR aus. Das Eigenkapital beträgt 960.000,00 EUR.',
      frage: 'Berechnen Sie die Eigenkapitalrentabilität in Prozent.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf die erste Nachkommastelle.',
      loesung: 13.5, nachkommastellen: 1, einheit: '%',
      erklaerung: 'Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100 = 129.600,00 EUR ÷ 960.000,00 EUR × 100 = 13,5 %. Die Kennzahl zeigt, wie sich das eingesetzte Eigenkapital im Geschäftsjahr verzinst hat.'
    },
    {
      nr: 28, thema: 'konjunktur', typ: 'einfach',
      text: 'Bei einer Präsentation für ein Logistikunternehmen aus dem Lübecker Hafen zitiert die Kundin eine Schlagzeile: „Deutschland erzielt erneut einen hohen Exportüberschuss.“',
      frage: 'Welche der folgenden Aussagen zum Ziel des außenwirtschaftlichen Gleichgewichts trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Ziel ist umso besser erreicht, je höher der Exportüberschuss ausfällt.',
        'Außenwirtschaftliches Gleichgewicht bedeutet, dass Importe verboten werden.',
        'Das Ziel betrifft ausschließlich den Wechselkurs zwischen Euro und US-Dollar.',
        'Das außenwirtschaftliche Gleichgewicht gehört nicht zu den Zielen des Stabilitäts- und Wachstumsgesetzes.',
        'Außenwirtschaftliches Gleichgewicht ist ein Ziel des Stabilitäts- und Wachstumsgesetzes; dauerhaft hohe Exportüberschüsse gelten als Ungleichgewicht, weil ihnen Defizite anderer Länder gegenüberstehen und die Abhängigkeit von der Auslandsnachfrage steigt.'
      ],
      loesung: 5,
      erklaerung: '§ 1 StabG verpflichtet Bund und Länder, gleichzeitig zur Stabilität des Preisniveaus, zu einem hohen Beschäftigungsstand und zum außenwirtschaftlichen Gleichgewicht bei stetigem und angemessenem Wirtschaftswachstum beizutragen (magisches Viereck). Außenwirtschaftliches Gleichgewicht bedeutet einen weitgehend ausgeglichenen Austausch mit dem Ausland. Dauerhafte Überschüsse machen eine Volkswirtschaft anfällig für Einbrüche der Auslandsnachfrage und führen zu Ungleichgewichten bei den Handelspartnern.'
    },
    {
      nr: 29, thema: 'zusammenschluesse', typ: 'einfach',
      text: 'Die Hanseklick Webdesign KG kauft die Mehrheit der Anteile an der Kieler Fotostudio GmbH, von der sie bisher Produktfotos für die Onlineshops ihrer Kunden bezogen hat. Das Fotostudio bleibt eine eigene GmbH, wird aber künftig von der KG gesteuert.',
      frage: 'Um welche Art des Zusammenschlusses handelt es sich?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Art in das Kästchen ein.',
      optionen: [
        'Horizontaler Zusammenschluss, weil Unternehmen derselben Wirtschaftsstufe verbunden werden',
        'Vertikaler Zusammenschluss, weil ein Unternehmen einer vorgelagerten Wirtschaftsstufe eingebunden wird',
        'Diagonaler (konglomerater) Zusammenschluss, weil branchenfremde Unternehmen verbunden werden',
        'Kartell, weil beide Unternehmen ihre Preise absprechen',
        'Arbeitsgemeinschaft, weil die Zusammenarbeit auf ein einzelnes Projekt befristet ist'
      ],
      loesung: 2,
      erklaerung: 'Beim vertikalen Zusammenschluss werden Unternehmen aufeinanderfolgender Wirtschaftsstufen verbunden, hier ein Zulieferer (Fotostudio) mit seinem Abnehmer (Agentur). Horizontal verbinden sich Unternehmen derselben Stufe (z. B. zwei Webagenturen), diagonal oder konglomerat branchenfremde Unternehmen. Weil das Fotostudio rechtlich selbstständig bleibt, aber einheitlich geleitet wird, entsteht ein Konzern (§ 18 AktG). Der Erwerb einer Mehrheitsbeteiligung kann der Fusionskontrolle unterliegen (§ 37 GWB).'
    },
    {
      nr: 30, thema: 'entgelt', typ: 'einfach',
      text: 'Die Projektmanagerin Imke Rasmussen hat einen Bausparvertrag abgeschlossen. Laut Arbeitsvertrag zahlt die Hanseklick Webdesign KG monatlich vermögenswirksame Leistungen.',
      frage: 'Welche der folgenden Aussagen zu vermögenswirksamen Leistungen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Vermögenswirksame Leistungen werden bar mit dem Gehalt ausgezahlt und sind frei verfügbar.',
        'Vermögenswirksame Leistungen sind immer steuer- und sozialversicherungsfrei.',
        'Der Arbeitgeber überweist die vermögenswirksamen Leistungen direkt auf einen Anlagevertrag, z. B. einen Bausparvertrag; hält Frau Rasmussen die Einkommensgrenzen ein, fördert der Staat die Anlage mit der Arbeitnehmer-Sparzulage.',
        'Jeder Arbeitgeber ist gesetzlich verpflichtet, vermögenswirksame Leistungen zu zahlen.',
        'Die Arbeitnehmer-Sparzulage zahlt der Arbeitgeber zusätzlich zum Gehalt.'
      ],
      loesung: 3,
      erklaerung: 'Vermögenswirksame Leistungen sind Geldleistungen, die der Arbeitgeber für den Arbeitnehmer direkt in begünstigte Anlageformen einzahlt, z. B. Bausparverträge oder Fondssparpläne (§§ 2, 3 5. VermBG). Eine Pflicht zur Zahlung besteht nur, wenn Tarifvertrag, Betriebsvereinbarung oder Arbeitsvertrag sie vorsehen. Die Leistungen sind steuer- und beitragspflichtiger Arbeitslohn. Liegt das zu versteuernde Einkommen unter den Grenzen des Gesetzes, zahlt das Finanzamt auf Antrag die Arbeitnehmer-Sparzulage (§ 13 5. VermBG).'
    }
  ]
});
