// Übungssatz 15 – eigene Aufgaben im Stil der BITLC-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-15',
  titel: 'Übungssatz 15',
  untertitel: 'Mosel Digital OHG',
  ausgangssituation:
    'Die Mosel Digital OHG mit Sitz in Trier und einer Niederlassung in Koblenz ist eine Digitalagentur. Sie entwickelt Websites, Onlineshops und Buchungssysteme für Weingüter, Hotels und Tourismusbetriebe und betreut deren IT. Gesellschafter sind Johanna Kirsten und Benedikt Lehnen. Das Unternehmen beschäftigt 55 Arbeitnehmerinnen und Arbeitnehmer. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 3,
      text: 'Die Mosel Digital OHG bildet Fachinformatikerinnen und Fachinformatiker für Anwendungsentwicklung aus. Ausbilderin ist Nicole Reuland. Zurzeit lernen im Betrieb unter anderem der 17-jährige Luca Feltes, die 20-jährige Emily Junk und der 19-jährige Jan Molitor.'
    },
    {
      von: 4, bis: 6,
      text: 'Bei der Mosel Digital OHG besteht ein Betriebsrat mit fünf Mitgliedern. Vorsitzende ist die Webentwicklerin Ute Klasen.'
    },
    {
      von: 10, bis: 12,
      text: 'Die Mosel Digital OHG wird von der externen Fachkraft für Arbeitssicherheit Stefan Mohr betreut. Er überprüft regelmäßig die Arbeitsplätze in Trier und Koblenz.'
    },
    {
      von: 19, bis: 20,
      text: 'Die Mosel Digital OHG ist Mitglied in einem Arbeitgeberverband, der mit der zuständigen Gewerkschaft Tarifverträge abgeschlossen hat.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'ausbildung', typ: 'einfach',
      text: 'Herr Feltes hat bei der Einrichtung eines Onlineshops Einblick in die Umsatzzahlen und Kundendaten eines großen Weinguts erhalten. Am Abend berichtet er darüber ausführlich in einem Online-Forum.',
      frage: 'Welche der folgenden Aussagen zum Verhalten von Herrn Feltes trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Wegen der alleinigen Bindung an die Weisungen der Ausbilderin ist das Verhalten zulässig.',
        'Herr Feltes verletzt seine Pflicht zur Verschwiegenheit über Betriebs- und Geschäftsgeheimnisse.',
        'Die Pflicht zur Verschwiegenheit gilt erst nach bestandener Abschlussprüfung.',
        'Zur Verschwiegenheit sind nur die Gesellschafter der OHG verpflichtet, nicht die Beschäftigten.',
        'In einem nur von Privatpersonen genutzten Forum ist das Verhalten zulässig.'
      ],
      loesung: 2,
      erklaerung: 'Auszubildende sind verpflichtet, über Betriebs- und Geschäftsgeheimnisse Stillschweigen zu wahren (§ 13 Satz 2 Nr. 6 BBiG). Die Pflicht gilt vom ersten Tag der Ausbildung an und auch für Geheimnisse von Kunden, die der Betrieb anvertraut bekommt. Verstöße können eine Abmahnung und in schweren Fällen eine Kündigung aus wichtigem Grund rechtfertigen (§ 22 Abs. 2 Nr. 1 BBiG). Bei Kundendaten ist zusätzlich der Datenschutz nach der DSGVO verletzt.'
    },
    {
      nr: 2, thema: 'ausbildung', typ: 'einfach',
      text: 'Für ihre betriebliche Ausbildung und ihr Prüfungsprojekt gibt Frau Reuland der Auszubildenden Frau Junk ein Fachbuch zur Datenbankprogrammierung vor; außerdem braucht Frau Junk eine Lizenz für die Entwicklungsumgebung, die sie im Prüfungsprojekt einsetzt. Frau Reuland überlegt, wer die Kosten trägt.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Berufsbildungsgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Junk muss Fachbuch und Lizenz als Prüfungsteilnehmerin selbst bezahlen.',
        'Die Kosten werden zwischen Frau Junk und der Mosel Digital OHG je zur Hälfte geteilt.',
        'Die OHG muss Fachbuch und Lizenz nur bei minderjährigen Auszubildenden bezahlen.',
        'Die OHG muss Ausbildungsmittel wie Fachliteratur und Software kostenlos zur Verfügung stellen.',
        'Die Kosten trägt die Industrie- und Handelskammer als zuständige Stelle.'
      ],
      loesung: 4,
      erklaerung: 'Ausbildende müssen den Auszubildenden kostenlos die Ausbildungsmittel, insbesondere Werkzeuge, Werkstoffe und Fachliteratur, zur Verfügung stellen, die zur Berufsausbildung und zum Ablegen von Zwischen- und Abschlussprüfungen erforderlich sind (§ 14 Abs. 1 Nr. 3 BBiG). Dazu gehören auch die vom Betrieb vorgegebene Fachliteratur und die im Prüfungsprojekt benötigte Software. Schulbücher für den Berufsschulunterricht fallen nach der Rechtsprechung nicht darunter. Eine Vereinbarung, nach der Auszubildende für die Ausbildung bezahlen müssen, wäre nichtig (§ 12 Abs. 2 Nr. 1 BBiG).'
    },
    {
      nr: 3, thema: 'ausbildung', typ: 'einfach',
      text: 'Herr Molitor ist seit acht Monaten in der Ausbildung. In den letzten Wochen kam er dreimal ohne Entschuldigung zu spät. Eine Abmahnung hat er bisher nicht erhalten. Herr Lehnen möchte ihm deshalb sofort fristlos kündigen.',
      frage: 'Welche der folgenden Aussagen zu einer Kündigung des Berufsausbildungsverhältnisses trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Nach der Probezeit kann nur aus wichtigem Grund und nach vorheriger Abmahnung fristlos gekündigt werden.',
        'Nach der Probezeit kann die OHG jederzeit ordentlich mit einer Frist von vier Wochen kündigen.',
        'Nach der Probezeit ist eine Kündigung durch den Ausbildungsbetrieb in jedem Fall ausgeschlossen.',
        'Die Kündigung ist bereits mit einer mündlichen Mitteilung an Herrn Molitor wirksam.',
        'Die Kündigung bedarf der Zustimmung der Berufsschule.'
      ],
      loesung: 1,
      erklaerung: 'Nach der Probezeit kann der Ausbildende nur aus einem wichtigen Grund ohne Einhalten einer Kündigungsfrist kündigen (§ 22 Abs. 2 Nr. 1 BBiG), schriftlich und unter Angabe der Gründe (§ 22 Abs. 3 BBiG). Ein wichtiger Grund liegt nur vor, wenn die Fortsetzung bis zum Ende der Ausbildung unzumutbar ist; wegen des Ausbildungszwecks wird ein strenger Maßstab angelegt. Bei Pflichtverletzungen wie Unpünktlichkeit ist deshalb in der Regel zuerst eine Abmahnung nötig (Verhältnismäßigkeit, vgl. § 314 Abs. 2 BGB). Der Betriebsrat ist vor der Kündigung anzuhören (§ 102 BetrVG).'
    },
    {
      nr: 4, thema: 'mitbestimmung', typ: 'mehrfach',
      text: 'Die Mosel Digital OHG plant eine interne Schulungsreihe zum Einsatz künstlicher Intelligenz in der Webentwicklung. Frau Klasen möchte wissen, welche Rechte der Betriebsrat dabei hat.',
      frage: 'Welche der folgenden Rechte hat der Betriebsrat bei der betrieblichen Berufsbildung?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Rechten in die Kästchen ein.',
      optionen: [
        'Er kann vom Arbeitgeber die Ermittlung des Berufsbildungsbedarfs und die Beratung von Fragen der Berufsbildung verlangen.',
        'Er entscheidet allein über die Teilnahme der Beschäftigten an der Schulung.',
        'Er hat bei der Durchführung von Maßnahmen der betrieblichen Berufsbildung mitzubestimmen.',
        'Er legt die Inhalte der Abschlussprüfungen der Auszubildenden fest.',
        'Er muss die Kosten der Schulungen aus eigenen Mitteln tragen.',
        'Er hat bei Schulungen als rein unternehmerischer Entscheidung kein Beteiligungsrecht.'
      ],
      loesung: [1, 3],
      erklaerung: 'Auf Verlangen des Betriebsrats hat der Arbeitgeber den Berufsbildungsbedarf zu ermitteln und mit ihm Fragen der Berufsbildung zu beraten (§ 96 Abs. 1 BetrVG). Bei der Durchführung betrieblicher Bildungsmaßnahmen hat der Betriebsrat mitzubestimmen (§ 98 Abs. 1 BetrVG). Er kann Vorschläge für die Teilnahme machen; einigen sich Arbeitgeber und Betriebsrat nicht, entscheidet die Einigungsstelle (§ 98 Abs. 3 und 4 BetrVG). Ob eine Schulung stattfindet und wer sie bezahlt, entscheidet der Arbeitgeber. Die Abschlussprüfungen nimmt die BITLC ab.'
    },
    {
      nr: 5, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Ein neuer Kollege fragt, ob er als Zuhörer an der nächsten Betriebsratssitzung teilnehmen darf. Außerdem möchte er mit dem Betriebsrat über ein persönliches Anliegen sprechen.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Betriebsverfassungsgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Betriebsratssitzungen sind öffentlich und stehen allen Beschäftigten als Zuhörern offen.',
        'Betriebsratssitzungen finden zur Vermeidung von Störungen der Arbeit grundsätzlich nach Feierabend statt.',
        'Betriebsratssitzungen sind nicht öffentlich und finden während der Arbeitszeit statt.',
        'Für den Besuch der Sprechstunde des Betriebsrats muss der Kollege Urlaub nehmen.',
        'Über die Teilnahme von Zuhörern an einer Betriebsratssitzung entscheiden die Gesellschafter.'
      ],
      loesung: 3,
      erklaerung: 'Die Sitzungen des Betriebsrats finden in der Regel während der Arbeitszeit statt; der Arbeitgeber ist vorher zu verständigen, die Sitzungen sind nicht öffentlich (§ 30 BetrVG). Der Betriebsrat kann Sprechstunden während der Arbeitszeit einrichten (§ 39 Abs. 1 BetrVG). Versäumte Arbeitszeit für den Besuch der Sprechstunde oder eine sonstige Inanspruchnahme des Betriebsrats berechtigt nicht zur Minderung des Arbeitsentgelts (§ 39 Abs. 3 BetrVG).'
    },
    {
      nr: 6, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Gesellschafter wollen in den nächsten zwei Jahren zehn zusätzliche Stellen im Onlinemarketing schaffen und dafür auch eigene Auszubildende gewinnen.',
      frage: 'Welche der folgenden Aussagen zur Beteiligung des Betriebsrats an dieser Personalplanung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jede einzelne Planungsentscheidung ist nur mit Zustimmung des Betriebsrats wirksam.',
        'Der Betriebsrat erfährt von der Personalplanung der Gesellschafter erst bei den Einstellungen.',
        'Der Betriebsrat legt die Zahl der neuen Stellen fest.',
        'Eine Unterrichtung des Betriebsrats ist erst in Unternehmen mit mehr als 500 Arbeitnehmern vorgeschrieben.',
        'Der Arbeitgeber muss den Betriebsrat rechtzeitig über die Personalplanung unterrichten und mit ihm beraten.'
      ],
      loesung: 5,
      erklaerung: 'Der Arbeitgeber hat den Betriebsrat über die Personalplanung, insbesondere über den gegenwärtigen und künftigen Personalbedarf sowie die sich daraus ergebenden personellen Maßnahmen und Maßnahmen der Berufsbildung, anhand von Unterlagen rechtzeitig und umfassend zu unterrichten und mit ihm über Art und Umfang der Maßnahmen zu beraten (§ 92 Abs. 1 BetrVG). Der Betriebsrat kann Vorschläge machen (§ 92 Abs. 2 BetrVG). Ein Zustimmungsverweigerungsrecht hat er erst bei der einzelnen Einstellung (§ 99 BetrVG).'
    },
    {
      nr: 7, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Kundenbetreuerin Sarah Ludwig ist seit drei Wochen krankgeschrieben. Kollegen erzählen ihr, der Arbeitgeber dürfe ihr während einer Krankheit ohnehin nicht kündigen.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Während einer Arbeitsunfähigkeit ist jede Kündigung unwirksam.',
        'Eine Kündigung ist frühestens nach sechs Wochen Arbeitsunfähigkeit erlaubt.',
        'Eine Kündigung während der Krankheit ist nur mit Zustimmung der Krankenkasse zulässig.',
        'Mit dem Zugang einer Kündigung während der Krankheit endet die Entgeltfortzahlung sofort.',
        'Auch während einer Arbeitsunfähigkeit kann nach den üblichen Regeln zu Fristen und Kündigungsschutz gekündigt werden.'
      ],
      loesung: 5,
      erklaerung: 'Ein gesetzliches Kündigungsverbot während einer Krankheit gibt es nicht. Es gelten die Kündigungsfristen (§ 622 BGB) und, bei mehr als zehn Arbeitnehmern und einem Arbeitsverhältnis von mehr als sechs Monaten, der Kündigungsschutz: Die Kündigung muss sozial gerechtfertigt sein (§§ 1, 23 KSchG). Eine krankheitsbedingte Kündigung setzt unter anderem eine negative Gesundheitsprognose voraus. Kündigt der Arbeitgeber aus Anlass der Arbeitsunfähigkeit, bleibt der Anspruch auf Entgeltfortzahlung bestehen (§ 8 Abs. 1 EFZG).'
    },
    {
      nr: 8, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Der Systemadministrator Florian Kees soll auf Kosten der OHG eine sechsmonatige berufsbegleitende Zertifizierung zum Cloud-Architekten für 6.000,00 EUR absolvieren. Die OHG möchte vereinbaren, dass er die Kosten zurückzahlt, wenn er kurz danach selbst kündigt.',
      frage: 'Welche der folgenden Aussagen zu einer solchen Rückzahlungsvereinbarung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Rückzahlungsvereinbarungen für Fortbildungskosten sind in Arbeitsverhältnissen grundsätzlich verboten.',
        'Eine Rückzahlungsklausel ist bei angemessener Bindungsdauer und zeitanteiliger Verringerung des Betrags zulässig.',
        'Die OHG darf die Rückzahlung für jeden Fall der Beendigung vereinbaren, auch für ihre eigene betriebsbedingte Kündigung.',
        'Herr Kees muss die Kosten unabhängig vom Zeitpunkt seiner Kündigung immer vollständig zurückzahlen.',
        'Eine Rückzahlungspflicht entsteht kraft Gesetzes auch ohne Vereinbarung.'
      ],
      loesung: 2,
      erklaerung: 'Nach der Rechtsprechung des Bundesarbeitsgerichts sind Rückzahlungsklauseln in Arbeitsverträgen nur wirksam, wenn sie Arbeitnehmer nicht unangemessen benachteiligen (§ 307 BGB): Die Fortbildung muss ihnen einen geldwerten Vorteil bringen, die Bindungsdauer muss im Verhältnis zur Dauer der Fortbildung angemessen sein (z. B. bei bis zu einem Jahr Fortbildung eine Bindung von bis zu drei Jahren), der Betrag muss sich zeitanteilig mindern, und bei einer vom Arbeitgeber veranlassten Beendigung darf keine Rückzahlung verlangt werden. Ohne Vereinbarung besteht keine Rückzahlungspflicht. In Ausbildungsverhältnissen sind solche Klauseln nichtig (§ 12 BBiG).'
    },
    {
      nr: 9, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Der Webentwickler Daniel Fuchs heiratet an einem Freitag und arbeitet an diesem Tag nicht. Arbeitsvertrag und Tarifvertrag enthalten dazu keine Regelung.',
      frage: 'Welche der folgenden Aussagen zur Vergütung für diesen Tag trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Fuchs erhält ohne Arbeitsleistung keine Vergütung und muss für diesen Tag Urlaub nehmen.',
        'Herr Fuchs behält wegen der kurzen, unverschuldeten Verhinderung seinen Vergütungsanspruch.',
        'Herr Fuchs erhält die Vergütung nur bei Erstattung durch seine Krankenkasse.',
        'Herr Fuchs muss den Tag in der folgenden Woche unbezahlt nacharbeiten.',
        'Eine bezahlte Freistellung gibt es ausschließlich bei Krankheit.'
      ],
      loesung: 2,
      erklaerung: 'Der Arbeitnehmer verliert seinen Vergütungsanspruch nicht, wenn er für eine verhältnismäßig nicht erhebliche Zeit durch einen in seiner Person liegenden Grund ohne sein Verschulden an der Arbeit verhindert ist (§ 616 Satz 1 BGB). Anerkannte Fälle sind z. B. die eigene Hochzeit, die Geburt des eigenen Kindes, die Beerdigung naher Angehöriger, ein unaufschiebbarer Arzttermin oder eine gerichtliche Ladung. Die Regelung kann durch Arbeits- oder Tarifvertrag eingeschränkt oder ausgeschlossen werden; das ist hier nicht geschehen.'
    },
    {
      nr: 10, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die 32-jährige Projektmanagerin Laura Bauer ist schwanger. Wegen des Starts eines großen Onlineshops möchte die Projektleitung, dass sie in den nächsten zwei Wochen täglich zehn Stunden arbeitet.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Mutterschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Mit ihrer schriftlichen Zustimmung darf Frau Bauer zehn Stunden täglich arbeiten.',
        'Ein Verbot der Mehrarbeit gilt nur für Schwangere unter 18 Jahren.',
        'Frau Bauer darf nicht mehr als achteinhalb Stunden täglich oder 90 Stunden in der Doppelwoche beschäftigt werden.',
        'Das Mutterschutzgesetz gilt erst ab dem sechsten Schwangerschaftsmonat.',
        'Mehrarbeit ist bei späterem Ausgleich durch Freizeit zulässig.'
      ],
      loesung: 3,
      erklaerung: 'Eine schwangere oder stillende Frau, die 18 Jahre oder älter ist, darf nicht mit einer Arbeit beschäftigt werden, die über achteinhalb Stunden täglich oder über 90 Stunden in der Doppelwoche hinausgeht; bei unter 18-Jährigen gelten acht Stunden täglich und 80 Stunden in der Doppelwoche (§ 4 Abs. 1 MuSchG). Nach Beendigung der täglichen Arbeitszeit ist eine ununterbrochene Ruhezeit von mindestens elf Stunden zu gewähren (§ 4 Abs. 2 MuSchG). Das Gesetz gilt ab Beginn der Schwangerschaft; eine Zustimmung der Frau hebt das Mehrarbeitsverbot nicht auf.'
    },
    {
      nr: 11, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die Netzwerktechnikerin Katja Wirtz wurde vor zwei Jahren zur Ersthelferin ausgebildet. Herr Mohr prüft die Liste der Ersthelferinnen und Ersthelfer.',
      frage: 'Welche der folgenden Aussagen zu Frau Wirtz als Ersthelferin trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die einmalige Ausbildung gilt ohne Fortbildung für das gesamte Arbeitsleben.',
        'Frau Wirtz muss die Fortbildung in ihrer Freizeit und auf eigene Kosten besuchen.',
        'Eine Fortbildung ist nur alle zehn Jahre vorgeschrieben.',
        'Frau Wirtz soll alle zwei Jahre auf Kosten des Unfallversicherungsträgers fortgebildet werden.',
        'Ersthelfer müssen erst in Betrieben mit mehr als 500 Beschäftigten bestellt werden.'
      ],
      loesung: 4,
      erklaerung: 'Der Unternehmer hat dafür zu sorgen, dass Ersthelferinnen und Ersthelfer in der Regel in Zeitabständen von zwei Jahren fortgebildet werden (§ 26 Abs. 3 DGUV Vorschrift 1). Ersthelfer sind schon ab zwei anwesenden Versicherten zu stellen; bei mehr als 20 sind es in Verwaltungs- und Handelsbetrieben 5 %, sonst 10 % (§ 26 Abs. 1 DGUV Vorschrift 1). Die Kosten der Aus- und Fortbildung, insbesondere die Lehrgangsgebühren, tragen die Unfallversicherungsträger (§ 23 Abs. 2 SGB VII).'
    },
    {
      nr: 12, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Herr Mohr möchte an der Tür des Serverraums in Koblenz ein Schild anbringen lassen, das vor gefährlicher elektrischer Spannung warnt.',
      frage: 'Welches der folgenden Schilder ist dafür geeignet?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Schild in das Kästchen ein.',
      optionen: [
        { bild: 'gebot-gehoerschutz' },
        { bild: 'verbot-feuer' },
        { bild: 'warn-spannung' },
        { bild: 'rettung-erste-hilfe' },
        { bild: 'brandschutz-feuerloescher' }
      ],
      loesung: 3,
      erklaerung: 'Warnzeichen sind nach ASR A1.3 dreieckig mit gelbem Grund und schwarzem Rand und Symbol, hier das Zeichen „Warnung vor elektrischer Spannung“. Gebotszeichen sind rund und blau (z. B. Gehörschutz benutzen), Verbotszeichen rund mit rotem Rand und Querbalken, Rettungszeichen quadratisch und grün (z. B. Erste Hilfe), Brandschutzzeichen quadratisch und rot (z. B. Feuerlöscher).'
    },
    {
      nr: 13, thema: 'rechtsformen', typ: 'einfach',
      text: 'Herr Lehnen scheidet zum 30.06.2027 aus der Mosel Digital OHG aus; zum selben Tag tritt Theresa Bungert als neue Gesellschafterin ein, sodass die OHG mit Frau Kirsten und Frau Bungert fortbesteht. Das Ausscheiden wird im Handelsregister eingetragen. Die OHG hat im Jahr 2025 einen Leasingvertrag für Server abgeschlossen, dessen Raten noch bis 2029 fällig werden.',
      frage: 'Welche der folgenden Aussagen zur Haftung von Herrn Lehnen für die Leasingraten trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Mit dem Ausscheiden endet seine Haftung für alle Verbindlichkeiten der OHG sofort.',
        'Er haftet nach dem Ausscheiden auch für alle späteren neuen Verträge der OHG.',
        'Er haftet nur noch bis zur Höhe seiner früheren Kapitaleinlage.',
        'Für die bis zu seinem Ausscheiden begründeten Verbindlichkeiten haftet er noch fünf Jahre weiter.',
        'Für die Leasingraten haften ausschließlich Frau Kirsten und Frau Bungert als Gesellschafterinnen.'
      ],
      loesung: 4,
      erklaerung: 'Ein ausgeschiedener Gesellschafter haftet für die bis zu seinem Ausscheiden begründeten Verbindlichkeiten der OHG weiter, wenn sie vor Ablauf von fünf Jahren nach dem Ausscheiden fällig werden und die Ansprüche gegen ihn gerichtlich festgestellt oder vollstreckt werden (Nachhaftung, § 137 HGB in der seit 2024 geltenden Fassung); ein schriftliches Anerkenntnis genügt ebenfalls. Die Frist beginnt, sobald der Gläubiger vom Ausscheiden Kenntnis erlangt, spätestens mit der Eintragung im Handelsregister. Für Verbindlichkeiten, die erst nach seinem Ausscheiden begründet werden, haftet er nicht; deshalb ist das Ausscheiden in das Handelsregister einzutragen (§ 15 HGB). Bis zum Ausscheiden haftet jeder Gesellschafter unbeschränkt und persönlich (§ 126 HGB).'
    },
    {
      nr: 14, thema: 'rechtsformen', typ: 'einfach',
      text: 'Ein Kunde der Mosel Digital OHG, die Saarwein Vertriebs-GmbH, ist zahlungsunfähig. Ihr Geschäftsführer hofft, dass sich die Lage in einigen Monaten bessert, und stellt deshalb vorerst keinen Insolvenzantrag.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Geschäftsführer muss ohne schuldhaftes Zögern, spätestens drei Wochen nach Eintritt der Zahlungsunfähigkeit, einen Insolvenzantrag stellen.',
        'Der Geschäftsführer darf mit dem freiwilligen Insolvenzantrag beliebig lange abwarten.',
        'Den Insolvenzantrag muss die Industrie- und Handelskammer stellen.',
        'Wegen der Haftung der GmbH-Gesellschafter mit ihrem Privatvermögen ist ein Insolvenzantrag nicht nötig.',
        'Die Pflicht zum Insolvenzantrag entsteht erst mit der Zustimmung aller Gläubiger.'
      ],
      loesung: 1,
      erklaerung: 'Wird eine juristische Person wie die GmbH zahlungsunfähig oder überschuldet, müssen die Mitglieder des Vertretungsorgans ohne schuldhaftes Zögern einen Insolvenzantrag stellen, spätestens drei Wochen nach Eintritt der Zahlungsunfähigkeit und sechs Wochen nach Eintritt der Überschuldung (§ 15a Abs. 1 InsO). Wer den Antrag nicht oder nicht rechtzeitig stellt, macht sich strafbar (Insolvenzverschleppung, § 15a Abs. 4 InsO). Auch Gläubiger können einen Antrag stellen (§ 14 InsO). Die Gesellschafter einer GmbH haften nicht mit ihrem Privatvermögen (§ 13 Abs. 2 GmbHG).'
    },
    {
      nr: 15, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Die Mosel Digital OHG stellt zum 01.08.2027 die Grafikerin Nina Haubrich ein. Sie ist versicherungspflichtig beschäftigt.',
      frage: 'Welche der folgenden Aussagen zur Meldung an die Sozialversicherung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Haubrich muss sich selbst bei allen Sozialversicherungsträgern anmelden.',
        'Eine Anmeldung ist erst nach Ablauf der Probezeit erforderlich.',
        'Die Anmeldung erfolgt schriftlich beim Finanzamt.',
        'Die OHG muss nur die Rentenversicherung informieren, nicht die übrigen Träger.',
        'Die OHG meldet Frau Haubrich elektronisch bei ihrer Krankenkasse an, spätestens sechs Wochen nach Beschäftigungsbeginn.'
      ],
      loesung: 5,
      erklaerung: 'Der Arbeitgeber hat versicherungspflichtig Beschäftigte der Einzugsstelle, also der Krankenkasse, durch elektronische Datenübertragung zu melden (§ 28a Abs. 1 SGB IV). Die Anmeldung erfolgt mit der ersten folgenden Entgeltabrechnung, spätestens innerhalb von sechs Wochen nach Beginn der Beschäftigung (§ 6 DEÜV). Die Krankenkasse leitet die Daten an die übrigen Versicherungszweige weiter. In einigen Branchen, z. B. im Baugewerbe und in der Gastronomie, ist zusätzlich eine Sofortmeldung bei Arbeitsbeginn vorgeschrieben (§ 28a Abs. 4 SGB IV).'
    },
    {
      nr: 16, thema: 'sozialversicherung', typ: 'mehrfach',
      text: 'Die Mutter der Mitarbeiterin Sandra Pick ist nach einem Schlaganfall auf Hilfe angewiesen und soll zu Hause von der Familie gepflegt werden. Frau Pick informiert sich über die Leistungen der sozialen Pflegeversicherung.',
      frage: 'Welche der folgenden Aussagen zur sozialen Pflegeversicherung treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Pflegebedürftige werden nach der Schwere der Beeinträchtigung ihrer Selbstständigkeit in fünf Pflegegrade eingestuft.',
        'Leistungen gibt es nur bei vollstationärer Pflege in einem Pflegeheim.',
        'Bei häuslicher Pflege, z. B. durch Angehörige, gibt es ab Pflegegrad 2 Pflegegeld.',
        'Die Pflegeversicherung übernimmt immer sämtliche Pflegekosten in voller Höhe.',
        'Den Antrag auf Leistungen stellt der Arbeitgeber bei der Berufsgenossenschaft.',
        'Träger der Pflegeversicherung ist die Deutsche Rentenversicherung.'
      ],
      loesung: [1, 3],
      erklaerung: 'Pflegebedürftige erhalten nach der Schwere der Beeinträchtigung der Selbstständigkeit einen von fünf Pflegegraden (§ 15 SGB XI); die Begutachtung übernimmt der Medizinische Dienst (§ 18 SGB XI). Bei häuslicher Pflege durch Angehörige gibt es ab Pflegegrad 2 Pflegegeld (§ 37 SGB XI), daneben Pflegesachleistungen und Leistungen bei stationärer Pflege. Die Pflegeversicherung deckt die Kosten nur teilweise. Den Antrag stellt die versicherte Person bei ihrer Pflegekasse (§ 33 SGB XI); Träger sind die Pflegekassen bei den Krankenkassen (§ 46 SGB XI).'
    },
    {
      nr: 17, thema: 'umweltschutz', typ: 'mehrfach',
      text: 'Die Mosel Digital OHG schafft 30 neue Notebooks an. Der Einkäufer Marco Thielen soll die Angebote nach den Kosten und Umweltwirkungen über den gesamten Lebenszyklus vergleichen.',
      frage: 'Welche der folgenden Kriterien gehören zu einer nachhaltigen Beschaffung, die die Lebenszykluskosten berücksichtigt?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Kriterien in die Kästchen ein.',
      optionen: [
        'Ausschließlich der niedrigste Kaufpreis',
        'Stromverbrauch während der gesamten Nutzungsdauer',
        'Eine möglichst kurze Garantiezeit für einen schnelleren Neukauf von Geräten',
        'Reparierbarkeit, Verfügbarkeit von Ersatzteilen und Rücknahme der Geräte am Ende der Nutzung',
        'Eine möglichst kurze Lieferzeit',
        'Lieferung in möglichst großen Einwegverpackungen'
      ],
      loesung: [2, 4],
      erklaerung: 'Die Lebenszykluskosten umfassen neben dem Kaufpreis die Kosten der Nutzung (z. B. Energie, Wartung, Reparatur) und der Entsorgung. Nachhaltige Beschaffung berücksichtigt außerdem die Umweltwirkungen: Ein geringer Stromverbrauch, eine lange Nutzungsdauer durch Reparierbarkeit und Ersatzteile sowie die Rücknahme und Verwertung der Altgeräte schonen Ressourcen. Das entspricht der Abfallhierarchie des Kreislaufwirtschaftsgesetzes, nach der Vermeidung und Wiederverwendung Vorrang haben (§ 6 KrWG). Die Lieferzeit ist zwar ein übliches Beschaffungskriterium, sagt aber nichts über Lebenszykluskosten oder Umweltwirkungen aus.'
    },
    {
      nr: 18, thema: 'umweltschutz', typ: 'einfach',
      text: 'Für die monatlichen Abstimmungen mit einem Kunden in Hamburg fuhren bisher zwei Beschäftigte jeweils mit dem Auto von Trier nach Hamburg und zurück. Künftig finden die Termine als Videokonferenz statt.',
      frage: 'Welche der folgenden Aussagen zu dieser Maßnahme trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Maßnahme ist ökologisch sinnvoll, aber wegen höherer Kosten von Videokonferenzen wirtschaftlich nachteilig.',
        'Die Maßnahme senkt CO2-Emissionen, Reisekosten und Reisezeit und dient so ökologischen und ökonomischen Zielen zugleich.',
        'Die Maßnahme hat wegen des Stromverbrauchs von Videokonferenzen keine Umweltwirkung.',
        'Die Maßnahme ist ausschließlich aus sozialen Gründen sinnvoll.',
        'Zwischen Umweltschutz und Kostensenkung besteht hier ein Zielkonflikt.'
      ],
      loesung: 2,
      erklaerung: 'Eine Autofahrt über mehrere hundert Kilometer verursacht deutlich mehr CO2-Emissionen als der Stromverbrauch einer Videokonferenz. Gleichzeitig entfallen Fahrt- und Übernachtungskosten sowie unproduktive Reisezeit. Das ökologische Ziel (Klimaschutz) und das ökonomische Ziel (Kostensenkung) stehen hier in Zielharmonie. Das Bundes-Klimaschutzgesetz strebt Treibhausgasneutralität bis 2045 an (§ 3 Abs. 2 KSG); auch Unternehmen tragen durch solche Maßnahmen dazu bei.'
    },
    {
      nr: 19, thema: 'tarifrecht', typ: 'zuordnung',
      text: 'Die Personalreferentin Katrin Rauen liest den Manteltarifvertrag, der für die Mosel Digital OHG gilt. Er beginnt mit Regelungen zu seinem Geltungsbereich.',
      frage: 'Welche der folgenden Arten des Geltungsbereichs sind den nachstehenden Regelungen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Art des Geltungsbereichs in das Kästchen ein.',
      optionenTitel: 'Geltungsbereich',
      optionen: [
        'Räumlicher Geltungsbereich',
        'Fachlicher Geltungsbereich',
        'Persönlicher Geltungsbereich',
        'Zeitlicher Geltungsbereich'
      ],
      itemsTitel: 'Regelungen im Tarifvertrag',
      items: [
        { text: 'Der Tarifvertrag gilt für Betriebe der Informations- und Kommunikationstechnik einschließlich Digitalagenturen.', loesung: 2 },
        { text: 'Der Tarifvertrag gilt für die Länder Rheinland-Pfalz und Saarland.', loesung: 1 },
        { text: 'Der Tarifvertrag tritt am 01.01.2027 in Kraft und kann frühestens zum 31.12.2029 gekündigt werden.', loesung: 4 },
        { text: 'Der Tarifvertrag gilt für alle Arbeitnehmerinnen und Arbeitnehmer einschließlich der Auszubildenden, nicht jedoch für leitende Angestellte.', loesung: 3 }
      ],
      erklaerung: 'Die Rechtsnormen eines Tarifvertrags gelten unmittelbar und zwingend zwischen beiderseits Tarifgebundenen, die unter seinen Geltungsbereich fallen (§ 4 Abs. 1 TVG). Der räumliche Geltungsbereich legt das Gebiet fest, der fachliche bzw. betriebliche die Branche, der persönliche die erfassten Beschäftigtengruppen und der zeitliche Beginn und Laufzeit. Nach Ablauf gelten die Regelungen weiter, bis sie durch eine andere Abmachung ersetzt werden (§ 4 Abs. 5 TVG).'
    },
    {
      nr: 20, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Gewerkschaft ruft im Tarifgebiet zu einem mehrtägigen Streik auf. Die Mosel Digital OHG betreibt für mehrere Hotels Server für die Online-Buchung, auf denen ohne Wartung Daten dauerhaft verloren gehen könnten.',
      frage: 'Welche der folgenden Aussagen zu Notdienst- und Erhaltungsarbeiten während des Streiks trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Während eines Streiks darf im Betrieb überhaupt nicht gearbeitet werden, auch keine Sicherungsarbeiten.',
        'Der Arbeitgeber darf alle Streikenden zwingen, ihre normale Arbeit fortzusetzen.',
        'Erhaltungsarbeiten zum Schutz von Anlagen und Daten sind auch während des Streiks zu leisten.',
        'Erhaltungsarbeiten dürfen ausschließlich die Gesellschafter selbst ausführen.',
        'Während eines Streiks teilt das Arbeitsgericht die Beschäftigten für die Erhaltungsarbeiten ein.'
      ],
      loesung: 3,
      erklaerung: 'Das Streikrecht folgt aus der Koalitionsfreiheit (Art. 9 Abs. 3 GG); Einzelheiten hat das Bundesarbeitsgericht entwickelt. Danach muss die streikende Gewerkschaft Erhaltungsarbeiten ermöglichen, die nötig sind, um Anlagen und Betriebsmittel vor dauerhafter Schädigung zu bewahren, sowie Notdienste zur Versorgung der Bevölkerung, z. B. in Krankenhäusern. Umfang und Besetzung werden meist in einer Notdienstvereinbarung zwischen Gewerkschaft und Arbeitgeber geregelt. Für die übrige Arbeit gilt: Wer streikt, muss nicht arbeiten und erhält kein Entgelt.'
    },
    {
      nr: 21, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Durch neue Baukastensysteme können Webagenturen einfache Firmenwebsites deutlich günstiger erstellen. Auf dem Markt für einfache Firmenwebsites werden daher bei jedem Preis mehr Websites angeboten als bisher. Die Nachfrage bleibt unverändert.',
      frage: 'Welche der folgenden Wirkungen ist auf diesem Markt zu erwarten?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Wirkung in das Kästchen ein.',
      optionen: [
        'Rechtsverschiebung der Angebotskurve mit sinkendem Gleichgewichtspreis und steigender Absatzmenge',
        'Rechtsverschiebung der Nachfragekurve mit steigendem Gleichgewichtspreis und steigender Absatzmenge',
        'Linksverschiebung der Angebotskurve mit steigendem Gleichgewichtspreis',
        'Steigender Gleichgewichtspreis bei sinkender Absatzmenge',
        'Unveränderter Gleichgewichtspreis und unveränderte Absatzmenge wegen der gleichbleibenden Nachfrage'
      ],
      loesung: 1,
      erklaerung: 'Sinkende Kosten führen dazu, dass die Anbieter bei jedem Preis mehr anbieten: Die Angebotskurve verschiebt sich nach rechts. Bei unveränderter Nachfrage stellt sich ein neues Gleichgewicht mit einem niedrigeren Preis und einer höheren abgesetzten Menge ein (Preisbildung im Marktmodell). Eine Verschiebung der Nachfragekurve würde z. B. durch höhere Einkommen oder geänderte Wünsche der Kunden ausgelöst.'
    },
    {
      nr: 22, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'Die Mosel Digital OHG suchte per Anzeige „Berufseinsteiger mit höchstens zwei Jahren Berufserfahrung“ für die Systemadministration. Der 58-jährige Bewerber Werner Thewes erhielt eine Absage. Er macht fristgerecht eine Entschädigung wegen Altersdiskriminierung geltend; die OHG bestreitet eine Benachteiligung.',
      frage: 'Welche der folgenden Aussagen zur Beweislast trifft nach dem Allgemeinen Gleichbehandlungsgesetz (AGG) zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Thewes muss die Benachteiligung über bloße Indizien hinaus vollständig beweisen.',
        'Ohne Beweis der fehlenden Eignung von Herrn Thewes muss die OHG ihn einstellen.',
        'Bei Streitigkeiten nach dem AGG gibt es keine Regeln zur Beweislast.',
        'Bei Indizien für eine Altersdiskriminierung muss die OHG das Fehlen einer Benachteiligung beweisen.',
        'Die Beweislast trägt immer das Arbeitsgericht.'
      ],
      loesung: 4,
      erklaerung: 'Beweist eine Partei Indizien, die eine Benachteiligung wegen eines in § 1 AGG genannten Grundes vermuten lassen, trägt die andere Partei die Beweislast dafür, dass kein Verstoß gegen die Bestimmungen zum Schutz vor Benachteiligung vorliegt (§ 22 AGG). Eine Anzeige, die nur Bewerber mit wenig Berufserfahrung anspricht, benachteiligt ältere Bewerber mittelbar (§ 3 Abs. 2 AGG) und ist ein solches Indiz. Ein Anspruch auf Einstellung besteht nicht (§ 15 Abs. 6 AGG); Ansprüche müssen innerhalb von zwei Monaten schriftlich geltend gemacht werden (§ 15 Abs. 4 AGG).'
    },
    {
      nr: 23, thema: 'organisation', typ: 'zuordnung',
      text: 'Die OHG wächst. Die Gesellschafter überlegen, wie Aufgaben und Entscheidungen zwischen dem Standort Trier und der Niederlassung Koblenz verteilt werden sollen.',
      frage: 'Welche der folgenden Organisationsprinzipien sind den nachstehenden Maßnahmen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Prinzip in das Kästchen ein.',
      optionenTitel: 'Organisationsprinzipien',
      optionen: [
        'Zentralisation',
        'Dezentralisation'
      ],
      itemsTitel: 'Maßnahmen',
      items: [
        { text: 'Der gesamte Einkauf von Hard- und Software wird in einer Einkaufsabteilung in Trier gebündelt.', loesung: 1 },
        { text: 'Die Teamleitungen dürfen über Projektbudgets bis 20.000,00 EUR selbst entscheiden.', loesung: 2 },
        { text: 'Alle Rechnungen werden nur noch von der Buchhaltung in Trier geprüft und freigegeben.', loesung: 1 },
        { text: 'Die Niederlassung in Koblenz stellt ihre Aushilfen künftig selbst ein.', loesung: 2 }
      ],
      erklaerung: 'Bei der Zentralisation werden gleichartige Aufgaben oder Entscheidungen bei einer Stelle zusammengefasst; Vorteile sind einheitliches Vorgehen, Mengenrabatte und bessere Kontrolle, Nachteile lange Entscheidungswege und Überlastung der Zentrale. Bei der Dezentralisation werden Aufgaben und Entscheidungsbefugnisse auf mehrere Stellen verteilt; das ermöglicht schnelle, sachnahe Entscheidungen und motiviert, erfordert aber mehr Abstimmung. Es handelt sich um Grundsätze der Organisationslehre ohne gesetzliche Grundlage.'
    },
    {
      nr: 24, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Die Gesellschafter haben für das kommende Geschäftsjahr mehrere Ziele formuliert und prüfen, wie diese zusammenhängen.',
      frage: 'Bei welchem der folgenden Zielpaare liegt Zielneutralität (Zielindifferenz) vor?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Zielpaar in das Kästchen ein.',
      optionen: [
        'Steigerung des Umsatzes mit Onlineshops – Erhöhung des Gewinns',
        'Senkung der Personalkosten – Einstellung von drei zusätzlichen Webentwicklern',
        'Senkung des Papierverbrauchs im Büro – mehr Follower auf dem Instagram-Kanal der Agentur',
        'Senkung des Stromverbrauchs der Server – Senkung der Energiekosten',
        'Kürzere Bearbeitungszeiten im Support – höhere Kundenzufriedenheit'
      ],
      loesung: 3,
      erklaerung: 'Zielneutralität liegt vor, wenn die Erreichung des einen Ziels das andere weder fördert noch behindert: Weniger Papierverbrauch hat keinen Einfluss auf die Zahl der Follower. Mehr Umsatz und mehr Gewinn, weniger Stromverbrauch und niedrigere Energiekosten sowie schnellerer Support und höhere Kundenzufriedenheit fördern sich gegenseitig (Zielharmonie). Mehr Personal bei sinkenden Personalkosten ist ein Zielkonflikt. Es handelt sich um Begriffe der Betriebswirtschaftslehre ohne gesetzliche Grundlage.'
    },
    {
      nr: 25, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Der 16-jährige Auszubildende Jonas Kremer hat bei einem Kundenprojekt einen Fehler gemacht. Ein Kollege gibt ihm deshalb „zur Erziehung“ einen Klaps auf den Hinterkopf und beschimpft ihn vor anderen.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Jugendarbeitsschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Leichte körperliche Strafen sind bei Auszubildenden zu Erziehungszwecken erlaubt.',
        'Für den Schutz von Herrn Kremer sind allein seine Eltern zuständig.',
        'Der Arbeitgeber muss erst nach einer Strafanzeige von Herrn Kremer eingreifen.',
        'Der Arbeitgeber darf Jugendliche nicht körperlich züchtigen und muss sie vor Misshandlung schützen.',
        'Das Jugendarbeitsschutzgesetz schützt Jugendliche nur während des Berufsschulunterrichts.'
      ],
      loesung: 4,
      erklaerung: 'Wer Jugendliche beschäftigt, darf sie nicht körperlich züchtigen (§ 31 Abs. 1 JArbSchG) und muss sie vor körperlicher Züchtigung und Misshandlung sowie vor sittlicher Gefährdung durch andere bei ihm Beschäftigte schützen (§ 31 Abs. 2 Satz 1 JArbSchG). Die Mosel Digital OHG muss daher gegen den Kollegen vorgehen, z. B. durch eine Abmahnung. Außerdem darf der Arbeitgeber Jugendlichen Alkohol, Tabakwaren und ähnliche Erzeugnisse nicht geben, soweit deren Abgabe nach §§ 9, 10 des Jugendschutzgesetzes verboten ist (§ 31 Abs. 2 Satz 2 JArbSchG).'
    },
    {
      nr: 26, thema: 'rechtsquellen', typ: 'einfach',
      text: 'Der Webdesigner Kai Rausch hat gegen seine Kündigung vor dem Arbeitsgericht Trier geklagt und sich dabei von einer Rechtsanwältin vertreten lassen. Er gewinnt den Prozess in der ersten Instanz.',
      frage: 'Wer trägt die Kosten seiner Rechtsanwältin?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Die Mosel Digital OHG',
        'Die Staatskasse',
        'Die Industrie- und Handelskammer',
        'Herr Rausch und die Mosel Digital OHG je zur Hälfte',
        'Herr Rausch selbst'
      ],
      loesung: 5,
      erklaerung: 'Im Urteilsverfahren des ersten Rechtszugs vor dem Arbeitsgericht hat die obsiegende Partei keinen Anspruch auf Erstattung der Kosten für die Zuziehung eines Prozessbevollmächtigten (§ 12a Abs. 1 Satz 1 ArbGG). Jede Partei trägt ihre Anwaltskosten also selbst; darauf muss die Anwältin vor Abschluss der Vereinbarung hinweisen. Die Gerichtskosten trägt dagegen grundsätzlich die unterlegene Partei. Die Staatskasse übernimmt Anwaltskosten nur bei bewilligter Prozesskostenhilfe (§ 11a ArbGG). Viele Beschäftigte nutzen den Rechtsschutz ihrer Gewerkschaft oder eine Rechtsschutzversicherung.'
    },
    {
      nr: 27, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Mosel Digital OHG hat im abgelaufenen Geschäftsjahr Umsatzerlöse von 3.640.000,00 EUR und einen Gewinn von 283.920,00 EUR erzielt.',
      frage: 'Berechnen Sie die Umsatzrentabilität in Prozent.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf die erste Nachkommastelle.',
      loesung: 7.8, nachkommastellen: 1, einheit: '%',
      erklaerung: 'Umsatzrentabilität = Gewinn ÷ Umsatzerlöse × 100 = 283.920,00 EUR ÷ 3.640.000,00 EUR × 100 = 7,8 %. Je 100,00 EUR Umsatz hat die OHG also 7,80 EUR Gewinn erzielt.'
    },
    {
      nr: 28, thema: 'konjunktur', typ: 'einfach',
      text: 'In einer Fernsehdiskussion fordert ein Politiker, die Europäische Zentralbank (EZB) solle auf Wunsch der Regierungen die Leitzinsen senken, damit neue Straßen günstiger finanziert werden können.',
      frage: 'Welche der folgenden Aussagen zur EZB trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die EZB muss Weisungen der Bundesregierung befolgen.',
        'Die EZB verfolgt unabhängig von Weisungen der Regierungen vorrangig das Ziel der Preisstabilität.',
        'Die EZB legt die Höhe der Einkommensteuer fest.',
        'Hauptziel der EZB ist ein möglichst hoher Wechselkurs des Euro.',
        'Die EZB darf den Mitgliedstaaten direkt Kredite für Straßenbauprojekte gewähren.'
      ],
      loesung: 2,
      erklaerung: 'Vorrangiges Ziel des Europäischen Systems der Zentralbanken ist die Gewährleistung der Preisstabilität (Art. 127 Abs. 1 AEUV); die EZB versteht darunter mittelfristig eine Inflationsrate von 2 %. Bei ihren Entscheidungen darf sie keine Weisungen von Regierungen einholen oder entgegennehmen (Art. 130 AEUV). Kredite an Staaten und der unmittelbare Kauf von Staatsanleihen sind ihr verboten (Art. 123 AEUV). Steuern legt der Gesetzgeber fest.'
    },
    {
      nr: 29, thema: 'datenschutz', typ: 'einfach',
      text: 'Bei einer Prüfung durch die Datenschutzaufsicht kann die Mosel Digital OHG nicht belegen, auf welcher Rechtsgrundlage sie die Daten aus dem Kontaktformular ihrer Website verarbeitet. Ein Gesellschafter meint, ohne Beschwerde eines Betroffenen könne nichts passieren.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die OHG muss die Einhaltung der Datenschutzgrundsätze nachweisen können und riskiert bei Verstößen hohe Geldbußen.',
        'Bußgelder nach der DSGVO dürfen nur gegen Konzerne mit mehr als 1.000 Beschäftigten verhängt werden.',
        'Die Aufsichtsbehörde darf nur auf Beschwerde einer betroffenen Person tätig werden.',
        'Die DSGVO sieht für Unternehmen keine Bußgelder vor, sondern nur Verwarnungen.',
        'Die OHG muss wegen der Beweislast der Aufsichtsbehörde nichts dokumentieren.'
      ],
      loesung: 1,
      erklaerung: 'Der Verantwortliche ist für die Einhaltung der Grundsätze der Datenverarbeitung verantwortlich und muss sie nachweisen können (Rechenschaftspflicht, Art. 5 Abs. 2 DSGVO). Die Aufsichtsbehörde kann auch ohne Beschwerde Untersuchungen durchführen (Art. 58 Abs. 1 DSGVO). Bei Verstößen gegen die Grundsätze und die Rechtmäßigkeit der Verarbeitung (Art. 5, 6 DSGVO) drohen Geldbußen von bis zu 20 Mio. EUR oder bis zu 4 % des weltweiten Jahresumsatzes, je nachdem, welcher Betrag höher ist (Art. 83 Abs. 5 DSGVO).'
    },
    {
      nr: 30, thema: 'weiterbildung', typ: 'einfach',
      text: 'Herr Kees möchte nach seiner Ausbildung zum Fachinformatiker die BITLC-Fortbildungsprüfung zum Bachelor Professional ablegen. Er fragt, wie dieser Abschluss im Deutschen Qualifikationsrahmen (DQR) eingeordnet ist.',
      frage: 'Welche der folgenden Aussagen zum DQR trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Bachelor Professional steht im achtstufigen DQR auf Niveau 6 wie der Hochschul-Bachelor.',
        'Der DQR gilt nur für Hochschulabschlüsse.',
        'Der Bachelor Professional ist im DQR niedriger eingeordnet als eine dreijährige Berufsausbildung.',
        'Der DQR ist ein Notensystem der BITLC für Abschlussprüfungen.',
        'Eine Einordnung in den DQR gibt es nur für im Ausland erworbene Abschlüsse.'
      ],
      loesung: 1,
      erklaerung: 'Der Deutsche Qualifikationsrahmen ordnet Qualifikationen aus allen Bildungsbereichen acht Niveaus zu und ist mit dem Europäischen Qualifikationsrahmen (EQR) verknüpft. Eine dreijährige duale Berufsausbildung steht auf Niveau 4. Die drei Stufen der höherqualifizierenden Berufsbildung nach § 53a BBiG sind eingeordnet als Geprüfter Berufsspezialist (Niveau 5), Bachelor Professional (Niveau 6, gleichwertig mit dem Hochschul-Bachelor) und Master Professional (Niveau 7). So werden Abschlüsse national und europäisch vergleichbar.'
    }
  ]
});
