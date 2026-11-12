// Übungssatz 8 – eigene Aufgaben im Stil der BITLC-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-08',
  titel: 'Übungssatz 8',
  untertitel: 'Bodensee DataCare GmbH & Co. KG',
  ausgangssituation:
    'Die Bodensee DataCare GmbH & Co. KG mit Sitz in Konstanz betreibt zwei Rechenzentren und bietet mittelständischen Unternehmen Colocation, Managed Services und Cloud-Lösungen an. Einzige persönlich haftende Gesellschafterin (Komplementärin) ist die Bodensee DataCare Verwaltungs-GmbH, deren Geschäftsführer Stefan Hollerbach ist. Kommanditisten sind Dr. Miriam Falkenstein und Lukas Brenner. Das Unternehmen beschäftigt 140 Mitarbeiterinnen und Mitarbeiter. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 7, bis: 12,
      text: 'Ausbildungsleiterin der Bodensee DataCare GmbH & Co. KG ist Annika Seifert. Das Unternehmen bildet Fachinformatikerinnen und Fachinformatiker für Systemintegration aus. Am 01.08.2027 beginnt der 16-jährige Jonas Wendler seine Ausbildung. Leonie Kaya befindet sich im letzten Ausbildungsjahr.'
    },
    {
      von: 13, bis: 16,
      text: 'Bei der Bodensee DataCare GmbH & Co. KG besteht ein Betriebsrat, Vorsitzender ist Markus Ehrlich. Das Unternehmen ist Mitglied im Arbeitgeberverband und an die Tarifverträge der Branche gebunden.'
    },
    {
      von: 17, bis: 19,
      text: 'Zum 01.03.2027 stellt die Bodensee DataCare GmbH & Co. KG den Systemingenieur Daniel Kessler unbefristet ein.'
    },
    {
      von: 21, bis: 23,
      text: 'Die Fachkraft für Arbeitssicherheit Petra Lindner betreut die Bodensee DataCare GmbH & Co. KG in allen Fragen des Arbeitsschutzes.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Ein mittelständischer Online-Händler möchte seine Server nicht mehr im eigenen Keller betreiben. Er wünscht sich eine sichere Unterbringung, hat dafür ein Budget von 1.500,00 EUR monatlich eingeplant und fragt bei der Bodensee DataCare GmbH & Co. KG schließlich ein konkretes Angebot an.',
      frage: 'Welche der folgenden Aussagen beschreibt den Begriff „Bedarf“ zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Bedarf ist …',
      optionen: [
        'jedes Gefühl eines Mangels, unabhängig davon, ob Geld zu seiner Beseitigung vorhanden ist.',
        'die Menge an Gütern, die Anbieter zu einem bestimmten Preis auf dem Markt anbieten.',
        'der Teil der Bedürfnisse, der mit Kaufkraft ausgestattet ist.',
        'der am Markt tatsächlich geäußerte Kaufwunsch, z. B. durch eine Anfrage oder Bestellung.',
        'ausschließlich auf lebensnotwendige Güter wie Nahrung und Kleidung beschränkt.'
      ],
      loesung: 3,
      erklaerung: 'Bedürfnis: Gefühl eines Mangels mit dem Wunsch, ihn zu beseitigen. Bedarf: der Teil der Bedürfnisse, für den Kaufkraft vorhanden ist (hier das eingeplante Budget). Nachfrage: der am Markt tatsächlich wirksam werdende Bedarf (hier die konkrete Anfrage). Die Menge, die Anbieter bereitstellen, ist das Angebot.'
    },
    {
      nr: 2, thema: 'konjunktur', typ: 'einfach',
      text: 'In der Wirtschaftspresse liest Geschäftsführer Stefan Hollerbach: „Das nominale Bruttoinlandsprodukt (BIP) ist gegenüber dem Vorjahr um 4 % gestiegen. Das Preisniveau stieg im gleichen Zeitraum ebenfalls um 4 %.“',
      frage: 'Welche der folgenden Aussagen zur Entwicklung des BIP trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Wirtschaft ist real um 8 % gewachsen, weil nominales Wachstum und Preissteigerung addiert werden.',
        'Das nominale BIP ist bereits um die Preissteigerungen bereinigt.',
        'Die Wirtschaft ist real um 4 % gewachsen.',
        'Das reale BIP ist etwa gleich geblieben, weil der Anstieg allein auf höheren Preisen beruht.',
        'Das reale BIP wird stets in den Preisen des laufenden Jahres berechnet.'
      ],
      loesung: 4,
      erklaerung: 'Das BIP misst den Wert aller im Inland in einem Jahr hergestellten Waren und Dienstleistungen. Das nominale BIP wird in jeweiligen (aktuellen) Preisen berechnet, das reale BIP ist preisbereinigt. Steigen nominales BIP und Preisniveau gleich stark, hat sich die real erzeugte Gütermenge nicht verändert. Stetiges und angemessenes reales Wachstum ist ein Ziel des Stabilitätsgesetzes (§ 1 StabG).'
    },
    {
      nr: 3, thema: 'konjunktur', typ: 'einfach',
      text: 'In der Region Konstanz fallen durch KI-gestützte Sprachassistenten viele Arbeitsplätze in Callcentern dauerhaft weg. Gleichzeitig finden IT-Unternehmen wie die Bodensee DataCare GmbH & Co. KG kaum Fachkräfte, weil die Qualifikationen der Arbeitsuchenden nicht zu den offenen Stellen passen.',
      frage: 'Welche Art der Arbeitslosigkeit liegt vor?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Art der Arbeitslosigkeit in das Kästchen ein.',
      optionen: [
        'Saisonale Arbeitslosigkeit',
        'Friktionelle Arbeitslosigkeit (Such- oder Fluktuationsarbeitslosigkeit)',
        'Konjunkturelle Arbeitslosigkeit',
        'Verdeckte Arbeitslosigkeit',
        'Strukturelle Arbeitslosigkeit'
      ],
      loesung: 5,
      erklaerung: 'Strukturelle Arbeitslosigkeit entsteht durch dauerhafte Veränderungen der Wirtschaftsstruktur, z. B. technischen Fortschritt oder den Niedergang einzelner Branchen; typisch ist, dass die Qualifikationen der Arbeitsuchenden und die Anforderungen der offenen Stellen nicht zusammenpassen. Saisonale Arbeitslosigkeit hängt von der Jahreszeit ab, friktionelle entsteht kurzfristig beim Stellenwechsel, konjunkturelle durch einen allgemeinen Nachfragerückgang im Abschwung. Ein hoher Beschäftigungsstand ist Ziel nach § 1 StabG.'
    },
    {
      nr: 4, thema: 'rechtsformen', typ: 'einfach',
      text: 'Ein Kunde möchte vor Vertragsabschluss wissen, wer für die Verbindlichkeiten der Bodensee DataCare GmbH & Co. KG haftet.',
      frage: 'Welche der folgenden Aussagen zur Haftung bei der GmbH & Co. KG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Kommanditisten Dr. Falkenstein und Herr Brenner haften unbeschränkt mit ihrem Privatvermögen.',
        'Herr Hollerbach haftet als Geschäftsführer der Komplementär-GmbH persönlich und unbeschränkt für alle Schulden der KG.',
        'Die GmbH & Co. KG ist eine Kapitalgesellschaft, deren Gesellschafter grundsätzlich nicht haften.',
        'Die Verwaltungs-GmbH haftet als Komplementärin unbeschränkt, aber nur mit ihrem Gesellschaftsvermögen; keine natürliche Person haftet unbeschränkt.',
        'Die Haftung der Kommanditisten ist auch dann ausgeschlossen, wenn sie ihre Einlage noch nicht geleistet haben.'
      ],
      loesung: 4,
      erklaerung: 'Die GmbH & Co. KG ist eine Kommanditgesellschaft und damit eine Personengesellschaft (§ 161 Abs. 1 HGB). Ihre einzige Komplementärin ist eine GmbH, die zwar unbeschränkt haftet, als Kapitalgesellschaft aber nur mit ihrem Gesellschaftsvermögen (§ 13 Abs. 2 GmbHG). Die Kommanditisten haften bis zur Höhe ihrer Einlage; soweit die Einlage geleistet ist, ist die Haftung ausgeschlossen (§ 171 Abs. 1 HGB). Der Geschäftsführer der GmbH haftet nicht persönlich für die Schulden der Gesellschaft. Die Firma muss die Haftungsbeschränkung erkennen lassen (§ 19 Abs. 2 HGB).'
    },
    {
      nr: 5, thema: 'rechtsformen', typ: 'einfach',
      text: 'Die Kommanditistin Dr. Miriam Falkenstein möchte im Namen der Bodensee DataCare GmbH & Co. KG einen mehrjährigen Rahmenvertrag mit einem Stromlieferanten unterschreiben. Geschäftsführer Stefan Hollerbach weist sie darauf hin, dass sie dazu nicht befugt ist.',
      frage: 'Welche der folgenden Aussagen zu Geschäftsführung und Vertretung der GmbH & Co. KG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jeder Kommanditist ist allein zur Vertretung der KG berechtigt.',
        'Die Kommanditisten führen die Geschäfte gemeinsam, die Verwaltungs-GmbH übernimmt nur die Haftung.',
        'Die Verwaltungs-GmbH führt als Komplementärin die Geschäfte und vertritt die KG, handelnd durch ihren Geschäftsführer Herrn Hollerbach; die Kommanditisten sind davon ausgeschlossen.',
        'Herr Hollerbach darf die KG nur vertreten, wenn alle Kommanditisten jedem einzelnen Vertrag schriftlich zustimmen.',
        'Die KG wird nach außen durch die Gesellschafterversammlung vertreten, an der alle Gesellschafter teilnehmen.'
      ],
      loesung: 3,
      erklaerung: 'Zur Geschäftsführung und Vertretung der KG ist der persönlich haftende Gesellschafter berufen (§§ 116, 124 HGB i. V. m. § 161 Abs. 2 HGB), bei der GmbH & Co. KG also die Komplementär-GmbH, die ihrerseits durch ihren Geschäftsführer handelt (§ 35 Abs. 1 GmbHG). Die Kommanditisten sind von der Geschäftsführung ausgeschlossen; außergewöhnlichen Geschäften können sie widersprechen (§ 164 HGB). Zur Vertretung der Gesellschaft sind sie nicht ermächtigt (§ 170 HGB); Vertretungsmacht können sie nur durch Prokura oder Vollmacht erhalten.'
    },
    {
      nr: 6, thema: 'organisation', typ: 'einfach',
      text: 'Unterhalb der Geschäftsführung gliedert sich die Bodensee DataCare GmbH & Co. KG in die Bereiche „Colocation“, „Managed Services“ und „Cloud“. Jeder Bereich hat eigene Teams für Vertrieb, Technik und Support und wird als eigener Erfolgsbereich mit eigenem Ergebnis geführt.',
      frage: 'Welche der folgenden Organisationsformen liegt vor?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Organisationsform in das Kästchen ein.',
      optionen: [
        'Spartenorganisation (divisionale Organisation)',
        'Funktionale Organisation',
        'Matrixorganisation',
        'Stablinienorganisation',
        'Projektorganisation'
      ],
      loesung: 1,
      erklaerung: 'Bei der Spartenorganisation wird das Unternehmen unterhalb der Leitung nach Objekten (Produkten, Leistungen, Kundengruppen oder Regionen) gegliedert. Jede Sparte hat eigene Funktionsbereiche und wird oft als Profitcenter mit eigener Ergebnisverantwortung geführt. Vorteile sind Marktnähe und klare Verantwortung, Nachteile Doppelarbeit und höherer Personalbedarf. Bei der funktionalen Organisation wird dagegen nach Tätigkeiten wie Einkauf, Vertrieb oder Technik gegliedert.'
    },
    {
      nr: 7, thema: 'ausbildung', typ: 'einfach',
      text: 'Der Auszubildende Jonas Wendler ist im Oktober 2027 wegen einer Grippe zwei Wochen arbeitsunfähig erkrankt. Er hat rechtzeitig eine ärztliche Bescheinigung vorgelegt und fragt Frau Seifert, ob er für diese Zeit seine Ausbildungsvergütung erhält.',
      frage: 'Welche der folgenden Aussagen zur Fortzahlung der Ausbildungsvergütung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Für die Zeit der Krankheit erhält er keine Vergütung, weil er in dieser Zeit nicht ausgebildet wird.',
        'Die Vergütung wird nur für die ersten drei Krankheitstage fortgezahlt.',
        'Statt der Vergütung erhält er vom ersten Krankheitstag an Krankengeld von seiner Krankenkasse.',
        'Er erhält seine Vergütung bis zur Dauer von sechs Wochen weiter; auch für die Freistellung zur Berufsschule und zu Prüfungen ist sie fortzuzahlen.',
        'Die Vergütung wird fortgezahlt, für die Krankheitstage aber um die Hälfte gekürzt.'
      ],
      loesung: 4,
      erklaerung: 'Auszubildende gelten als Arbeitnehmer im Sinne des Entgeltfortzahlungsgesetzes (§ 1 Abs. 2 EFZG). Bei unverschuldeter Arbeitsunfähigkeit infolge Krankheit wird die Vergütung daher bis zur Dauer von sechs Wochen fortgezahlt (§ 3 Abs. 1 EFZG); erst danach zahlt die Krankenkasse Krankengeld. Nach § 19 Abs. 1 BBiG ist die Vergütung außerdem für die Zeit der Freistellung zur Berufsschule und zu Prüfungen zu zahlen (Nr. 1) sowie bis zu sechs Wochen, wenn die Ausbildung ausfällt oder Auszubildende aus einem sonstigen in ihrer Person liegenden Grund unverschuldet verhindert sind (Nr. 2).'
    },
    {
      nr: 8, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Bevor Jonas Wendler seine Ausbildung beginnt, fragt Frau Seifert nach der Bescheinigung über die ärztliche Erstuntersuchung.',
      frage: 'Welche der folgenden Aussagen zur Erstuntersuchung nach § 32 JArbSchG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Erstuntersuchung ist nur bei körperlich schweren Tätigkeiten vorgeschrieben.',
        'Herr Wendler darf nur beschäftigt werden, wenn er innerhalb der letzten 14 Monate ärztlich untersucht wurde und dem Arbeitgeber eine Bescheinigung darüber vorliegt.',
        'Die Erstuntersuchung kann bis zum Ende der Probezeit nachgeholt werden.',
        'Die Kosten der Untersuchung muss der Jugendliche selbst tragen.',
        'Die Untersuchung entfällt, wenn die Eltern den Ausbildungsvertrag unterschrieben haben.'
      ],
      loesung: 2,
      erklaerung: '§ 32 Abs. 1 JArbSchG: Jugendliche, die in das Berufsleben eintreten, dürfen nur beschäftigt werden, wenn sie innerhalb der letzten 14 Monate von einem Arzt untersucht worden sind (Erstuntersuchung) und dem Arbeitgeber eine ärztliche Bescheinigung darüber vorliegt. Ein Jahr nach Beschäftigungsbeginn ist eine erste Nachuntersuchung vorgeschrieben (§ 33 JArbSchG). Die Kosten der Untersuchungen trägt das Land (§ 44 JArbSchG).'
    },
    {
      nr: 9, thema: 'jugendarbeitsschutz', typ: 'mehrfach',
      text: 'Frau Seifert plant, welche Tätigkeiten Herr Wendler im ersten Ausbildungsjahr übernehmen soll.',
      frage: 'Welche der folgenden Tätigkeiten dürfen Herrn Wendler nach dem Jugendarbeitsschutzgesetz **nicht** übertragen werden?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Tätigkeiten in die Kästchen ein.',
      optionen: [
        'Einrichten neuer Arbeitsplatzrechner unter Anleitung eines Ausbilders',
        'Einbau von Servern im Akkord, also mit einer Vergütung je eingebautem Server',
        'Dokumentation von Netzwerkänderungen im Ticketsystem',
        'Teilnahme an einer internen Schulung zur Netzwerktechnik',
        'Regelmäßiges Tragen von 40 kg schweren USV-Batterien, das seine körperliche Leistungsfähigkeit übersteigt',
        'Telefonische Unterstützung im Kundensupport während der regulären Arbeitszeit'
      ],
      loesung: [2, 5],
      erklaerung: '§ 23 Abs. 1 Nr. 1 JArbSchG verbietet für Jugendliche Akkordarbeit und sonstige Arbeiten, bei denen durch ein gesteigertes Arbeitstempo ein höheres Entgelt erzielt werden kann. Nach § 22 Abs. 1 Nr. 1 JArbSchG dürfen Jugendliche nicht mit Arbeiten beschäftigt werden, die ihre physische oder psychische Leistungsfähigkeit übersteigen. Die übrigen Tätigkeiten sind übliche Ausbildungsinhalte.'
    },
    {
      nr: 10, thema: 'ausbildung', typ: 'einfach',
      text: 'Leonie Kaya steht kurz vor dem Ende ihrer Ausbildung und fragt Frau Seifert nach ihrem Ausbildungszeugnis.',
      frage: 'Welche der folgenden Aussagen zum Ausbildungszeugnis nach § 16 BBiG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Ausbildungszeugnis wird von der BITLC zusammen mit dem Prüfungszeugnis ausgestellt.',
        'Ein Ausbildungszeugnis erhalten nur Auszubildende, die die Abschlussprüfung nicht bestanden haben.',
        'Das Ausbildungszeugnis muss Angaben über die Krankheitstage während der Ausbildung enthalten.',
        'Der Ausbildungsbetrieb muss ein Zeugnis über Art, Dauer und Ziel der Ausbildung sowie die erworbenen Fertigkeiten ausstellen; auf Verlangen sind auch Angaben über Verhalten und Leistung aufzunehmen.',
        'Der Ausbildungsbetrieb muss ein Zeugnis nur ausstellen, wenn die Auszubildende dafür eine Gebühr zahlt.'
      ],
      loesung: 4,
      erklaerung: '§ 16 BBiG: Der Ausbildende muss bei Beendigung des Berufsausbildungsverhältnisses ein schriftliches Zeugnis ausstellen. Es enthält Art, Dauer und Ziel der Berufsausbildung sowie die erworbenen beruflichen Fertigkeiten, Kenntnisse und Fähigkeiten (einfaches Zeugnis); auf Verlangen der Auszubildenden auch Angaben über Verhalten und Leistung (qualifiziertes Zeugnis). Davon zu unterscheiden ist das Prüfungszeugnis, das die BITLC ausstellt (§ 37 Abs. 2 BBiG).'
    },
    {
      nr: 11, thema: 'ausbildung', typ: 'einfach',
      text: 'Frau Kaya hat ihre Abschlussprüfung bestanden, das Ergebnis wurde ihr bekannt gegeben. Über eine Weiterbeschäftigung wurde nichts vereinbart. Mit Wissen von Frau Seifert arbeitet sie am nächsten Tag wie gewohnt im Unternehmen weiter.',
      frage: 'Welche der folgenden Rechtsfolgen tritt nach § 24 BBiG ein?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Rechtsfolge in das Kästchen ein.',
      optionen: [
        'Es gilt ein Arbeitsverhältnis auf unbestimmte Zeit als begründet.',
        'Es entsteht ein befristetes Arbeitsverhältnis für die Dauer von sechs Monaten.',
        'Das Berufsausbildungsverhältnis verlängert sich automatisch bis zum Ende des Kalenderjahres.',
        'Frau Kaya gilt als Praktikantin und hat keinen Anspruch auf Vergütung.',
        'Ein Arbeitsverhältnis entsteht erst, wenn ein schriftlicher Arbeitsvertrag unterschrieben ist.'
      ],
      loesung: 1,
      erklaerung: '§ 24 BBiG: Werden Auszubildende im Anschluss an das Berufsausbildungsverhältnis beschäftigt, ohne dass hierüber ausdrücklich etwas vereinbart worden ist, so gilt ein Arbeitsverhältnis auf unbestimmte Zeit als begründet. Das Ausbildungsverhältnis endete bereits mit der Bekanntgabe des Prüfungsergebnisses (§ 21 Abs. 2 BBiG). Ein Arbeitsvertrag kann auch mündlich oder durch schlüssiges Verhalten zustande kommen.'
    },
    {
      nr: 12, thema: 'rechtsquellen', typ: 'einfach',
      text: 'Ein Auszubildender der Bodensee DataCare GmbH & Co. KG hält die ihm nach der Probezeit ausgesprochene Kündigung seines Ausbildungsverhältnisses für unwirksam. Bei der zuständigen BITLC ist ein Ausschuss zur Beilegung von Streitigkeiten aus Berufsausbildungsverhältnissen gebildet.',
      frage: 'Welche der folgenden Aussagen zum weiteren Vorgehen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Er muss sofort Klage beim Sozialgericht erheben.',
        'Über die Kündigung entscheidet der Betriebsrat verbindlich.',
        'Vor einer Klage beim Arbeitsgericht muss er zunächst den Schlichtungsausschuss der BITLC anrufen.',
        'Zuständig ist ausschließlich das Amtsgericht am Sitz des Unternehmens.',
        'Er kann nur noch eine Beschwerde bei der Berufsschule einlegen.'
      ],
      loesung: 3,
      erklaerung: '§ 111 Abs. 2 ArbGG: Besteht bei der zuständigen Stelle (hier der BITLC) ein Ausschuss für Streitigkeiten aus Berufsausbildungsverhältnissen, muss vor einer Klage die Verhandlung vor diesem Ausschuss stattfinden. Erkennen nicht beide Parteien seinen Spruch innerhalb einer Woche an, kann binnen zwei Wochen Klage beim Arbeitsgericht erhoben werden. Die Arbeitsgerichte sind für Streitigkeiten aus Arbeits- und Ausbildungsverhältnissen zuständig (§ 2 ArbGG).'
    },
    {
      nr: 13, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Der Systemingenieur Daniel Kessler möchte wissen, welche Unterlagen die Personalabteilung über ihn aufbewahrt, und seine Personalakte einsehen. Er bittet den Betriebsratsvorsitzenden Markus Ehrlich, ihn dabei zu begleiten.',
      frage: 'Welche der folgenden Aussagen zur Einsicht in die Personalakte trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Kessler darf seine Personalakte nur mit vorheriger Zustimmung der Geschäftsführung einsehen.',
        'Herr Kessler hat das Recht, seine Personalakte einzusehen; er kann dabei ein Mitglied des Betriebsrats hinzuziehen und verlangen, dass seine Erklärungen zum Inhalt der Akte beigefügt werden.',
        'Die Einsicht in die Personalakte ist nur über einen Rechtsanwalt möglich.',
        'Die Personalakte darf höchstens einmal im Kalenderjahr eingesehen werden.',
        'Ein Recht auf Einsicht besteht erst nach dem Ausscheiden aus dem Unternehmen.'
      ],
      loesung: 2,
      erklaerung: '§ 83 Abs. 1 BetrVG: Der Arbeitnehmer hat das Recht, in die über ihn geführten Personalakten Einsicht zu nehmen; er kann hierzu ein Mitglied des Betriebsrats hinzuziehen, das über den Inhalt der Akte Stillschweigen zu bewahren hat. § 83 Abs. 2 BetrVG: Erklärungen des Arbeitnehmers zum Inhalt der Personalakte sind dieser auf sein Verlangen beizufügen. Daneben besteht nach Art. 15 DSGVO ein Auskunftsrecht über die gespeicherten personenbezogenen Daten.'
    },
    {
      nr: 14, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Für den 24-Stunden-Betrieb der Rechenzentren will die Geschäftsleitung einen neuen Schichtplan einführen. Geschäftsleitung und Betriebsrat können sich trotz mehrerer Gespräche nicht einigen.',
      frage: 'Welche der folgenden Aussagen zur Einigungsstelle trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Einigungsstelle ist eine Kammer des Arbeitsgerichts, die durch Urteil entscheidet.',
        'Die Einigungsstelle besteht ausschließlich aus Vertretern der Gewerkschaft.',
        'Den Vorsitzenden der Einigungsstelle bestimmt allein der Arbeitgeber.',
        'Der Spruch der Einigungsstelle ist auch in Fragen der Arbeitszeit nur eine unverbindliche Empfehlung.',
        'Sie besteht aus gleich vielen Beisitzern von Arbeitgeber und Betriebsrat sowie einem unparteiischen Vorsitzenden; ihr Spruch ersetzt hier die fehlende Einigung.'
      ],
      loesung: 5,
      erklaerung: '§ 76 BetrVG: Die Einigungsstelle besteht aus der gleichen Anzahl von Beisitzern, die Arbeitgeber und Betriebsrat bestellen, und einem unparteiischen Vorsitzenden, auf den sich beide Seiten einigen müssen; kommt keine Einigung zustande, bestellt ihn das Arbeitsgericht. Die Lage der Arbeitszeit und damit Schichtpläne unterliegen der Mitbestimmung (§ 87 Abs. 1 Nr. 2 BetrVG). Einigen sich die Betriebsparteien nicht, entscheidet die Einigungsstelle verbindlich (§ 87 Abs. 2 BetrVG).'
    },
    {
      nr: 15, thema: 'mitbestimmung', typ: 'zuordnung',
      text: 'Herr Ehrlich erklärt den Auszubildenden den Unterschied zwischen der betrieblichen Mitbestimmung und der Mitbestimmung im Aufsichtsrat. Als Beispiele nennt er Kunden der Bodensee DataCare GmbH & Co. KG aus der IT-Branche mit der jeweils in der Regel beschäftigten Zahl von Arbeitnehmern.',
      frage: 'Welche der folgenden Formen der Unternehmensmitbestimmung sind den nachstehenden Unternehmen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Form in das Kästchen ein.',
      optionenTitel: 'Unternehmensmitbestimmung',
      optionen: [
        'Aufsichtsrat zu einem Drittel mit Arbeitnehmervertretern besetzt (Drittelbeteiligungsgesetz)',
        'Aufsichtsrat zur Hälfte mit Arbeitnehmervertretern besetzt (Mitbestimmungsgesetz)',
        'Keine Arbeitnehmervertretung im Aufsichtsrat vorgeschrieben'
      ],
      itemsTitel: 'Unternehmen',
      items: [
        { text: 'Software-GmbH mit 350 Arbeitnehmern', loesung: 3 },
        { text: 'IT-Beratungs-AG mit 1.200 Arbeitnehmern', loesung: 1 },
        { text: 'Telekommunikations-GmbH mit 4.500 Arbeitnehmern', loesung: 2 },
        { text: 'Systemhaus-GmbH mit 800 Arbeitnehmern', loesung: 1 }
      ],
      erklaerung: 'Nach dem Drittelbeteiligungsgesetz muss der Aufsichtsrat einer GmbH oder AG mit in der Regel mehr als 500 Arbeitnehmern zu einem Drittel aus Arbeitnehmervertretern bestehen (§ 1 DrittelbG, § 4 DrittelbG). Bei in der Regel mehr als 2.000 Arbeitnehmern gilt das Mitbestimmungsgesetz mit einer je zur Hälfte besetzten Anteilseigner- und Arbeitnehmerbank (§§ 1, 7 MitbestG); bei Stimmengleichheit entscheidet die zweite Stimme des Aufsichtsratsvorsitzenden (§ 29 Abs. 2 MitbestG). Eine GmbH mit bis zu 500 Arbeitnehmern braucht keinen mitbestimmten Aufsichtsrat. Davon zu unterscheiden ist die betriebliche Mitbestimmung durch den Betriebsrat nach dem BetrVG.'
    },
    {
      nr: 16, thema: 'tarifrecht', typ: 'einfach',
      text: 'Der Arbeitgeberverband hat den Manteltarifvertrag fristgerecht gekündigt; der Vertrag ist am 31.12.2026 abgelaufen. Ein neuer Manteltarifvertrag ist noch nicht abgeschlossen. Der Rechenzentrumstechniker Tobias Engel, Mitglied der tarifschließenden Gewerkschaft, fragt, ob seine 30 tariflichen Urlaubstage weiterhin gelten.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Mit dem Ablauf des Tarifvertrags entfallen alle tariflichen Ansprüche sofort; es gelten nur noch die gesetzlichen Mindestregelungen.',
        'Die Rechtsnormen des abgelaufenen Tarifvertrags gelten weiter, bis sie durch eine andere Abmachung ersetzt werden.',
        'Der abgelaufene Tarifvertrag gilt automatisch noch genau zwölf Monate weiter und endet dann ersatzlos.',
        'Bis zum Abschluss eines neuen Tarifvertrags legt der Betriebsrat die Arbeitsbedingungen allein fest.',
        'Die tariflichen Urlaubstage gelten nur noch für Beschäftigte, die nach dem Ablauf erneut in die Gewerkschaft eintreten.'
      ],
      loesung: 2,
      erklaerung: '§ 4 Abs. 5 TVG: Nach Ablauf des Tarifvertrags gelten seine Rechtsnormen weiter, bis sie durch eine andere Abmachung ersetzt werden (Nachwirkung). Sie wirken dann zwar unmittelbar, aber nicht mehr zwingend: Durch einen neuen Tarifvertrag oder eine einzelvertragliche Vereinbarung können sie auch zum Nachteil des Arbeitnehmers geändert werden. So entsteht nach dem Ablauf eines Tarifvertrags kein regelungsloser Zustand.'
    },
    {
      nr: 17, thema: 'arbeitsvertrag', typ: 'mehrfach',
      text: 'Die Personalabteilung fasst die wesentlichen Vertragsbedingungen für Herrn Kessler nach dem Nachweisgesetz zusammen.',
      frage: 'Welche der folgenden Angaben müssen nach § 2 NachwG in diesem Nachweis enthalten sein?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Angaben in die Kästchen ein.',
      optionen: [
        'Religionszugehörigkeit von Herrn Kessler',
        'Noten seines Studienabschlusses',
        'Zusammensetzung und Höhe des Arbeitsentgelts',
        'Familienstand und Anzahl der Kinder',
        'Vereinbarte Arbeitszeit und Ruhepausen',
        'Name seines bisherigen Arbeitgebers'
      ],
      loesung: [3, 5],
      erklaerung: '§ 2 Abs. 1 NachwG verpflichtet den Arbeitgeber, die wesentlichen Vertragsbedingungen niederzulegen und dem Arbeitnehmer auszuhändigen. Dazu gehören u. a. Namen und Anschriften der Vertragsparteien, Beginn des Arbeitsverhältnisses, Arbeitsort, Beschreibung der Tätigkeit, Zusammensetzung und Höhe des Arbeitsentgelts, vereinbarte Arbeitszeit und Ruhepausen, Dauer des Urlaubs sowie das bei einer Kündigung einzuhaltende Verfahren. Persönliche Angaben wie Religion, Familienstand oder Noten gehören nicht dazu.'
    },
    {
      nr: 18, thema: 'arbeitsvertrag', typ: 'zuordnung',
      text: 'Herr Kessler möchte wissen, welche Pflichten sich aus seinem Arbeitsvertrag für beide Seiten ergeben.',
      frage: 'Welche der folgenden Pflichten sind den nachstehenden Sachverhalten zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Pflicht in das Kästchen ein.',
      optionenTitel: 'Pflichten',
      optionen: [
        'Hauptpflicht des Arbeitnehmers',
        'Nebenpflicht des Arbeitnehmers',
        'Hauptpflicht des Arbeitgebers',
        'Nebenpflicht des Arbeitgebers'
      ],
      itemsTitel: 'Sachverhalte',
      items: [
        { text: 'Die übertragenen Administrationsaufgaben nach Weisung ausführen', loesung: 1 },
        { text: 'Über Kundendaten und Geschäftsgeheimnisse Stillschweigen bewahren', loesung: 2 },
        { text: 'Das vereinbarte Gehalt pünktlich zahlen', loesung: 3 },
        { text: 'Den Arbeitsplatz so einrichten, dass Leben und Gesundheit geschützt sind', loesung: 4 },
        { text: 'Bei Beendigung des Arbeitsverhältnisses ein Zeugnis erteilen', loesung: 4 }
      ],
      erklaerung: 'Hauptpflichten aus dem Arbeitsvertrag sind die Arbeitspflicht des Arbeitnehmers und die Vergütungspflicht des Arbeitgebers (§ 611a BGB). Nebenpflichten des Arbeitnehmers ergeben sich aus der Treuepflicht, z. B. Verschwiegenheit und Wettbewerbsverbot (§ 241 Abs. 2 BGB). Nebenpflichten des Arbeitgebers ergeben sich aus der Fürsorgepflicht, z. B. Schutz von Leben und Gesundheit (§ 618 BGB) und Erteilung eines Zeugnisses (§ 109 GewO).'
    },
    {
      nr: 19, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Herr Kessler möchte neben seiner Tätigkeit auf eigene Rechnung Server für Unternehmen aus der Region betreuen, darunter auch Kunden der Bodensee DataCare GmbH & Co. KG. Eine Erlaubnis des Arbeitgebers hat er nicht.',
      frage: 'Welche der folgenden Aussagen zur geplanten Nebentätigkeit von Herrn Kessler trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jede Nebentätigkeit ist Arbeitnehmern grundsätzlich verboten.',
        'Die Tätigkeit ist erlaubt, solange er sie nur in seiner Freizeit ausübt.',
        'Ein Wettbewerbsverbot gilt nur für Auszubildende, nicht für Angestellte.',
        'Während des Arbeitsverhältnisses darf er ohne Einwilligung des Arbeitgebers keine Konkurrenztätigkeit im Geschäftszweig des Arbeitgebers ausüben.',
        'Ohne besondere Vereinbarung gilt das Wettbewerbsverbot automatisch noch zwei Jahre nach dem Ende des Arbeitsverhältnisses.'
      ],
      loesung: 4,
      erklaerung: '§ 60 Abs. 1 HGB: Der kaufmännische Angestellte darf ohne Einwilligung des Arbeitgebers im Handelszweig des Arbeitgebers keine Geschäfte für eigene oder fremde Rechnung machen. Die Rechtsprechung wendet dieses Wettbewerbsverbot über die Treuepflicht (§ 241 Abs. 2 BGB) auf alle Arbeitnehmer an. Verstöße können Schadensersatz (§ 61 HGB), Abmahnung oder Kündigung nach sich ziehen. Andere Nebentätigkeiten sind grundsätzlich erlaubt. Ein Wettbewerbsverbot für die Zeit nach dem Arbeitsverhältnis muss gesondert schriftlich vereinbart werden und setzt eine Karenzentschädigung voraus (§§ 74 ff. HGB).'
    },
    {
      nr: 20, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'Die Netzwerktechnikerin Selin Arslan wird von einem Kollegen wiederholt wegen ihrer Herkunft herabwürdigend behandelt. Sie hat sich bei der zuständigen Beschwerdestelle des Betriebs beschwert. Die Geschäftsleitung unternimmt seit Wochen nichts, und die Belästigungen gehen weiter.',
      frage: 'Welche der folgenden Aussagen zu den Rechten von Frau Arslan nach dem Allgemeinen Gleichbehandlungsgesetz (AGG) trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Sie muss die Belästigungen hinnehmen, bis das Arbeitsgericht über ihre Beschwerde entschieden hat.',
        'Sie darf den Kollegen selbst abmahnen.',
        'Sie darf ihre Tätigkeit ohne Verlust des Arbeitsentgelts einstellen, soweit dies zu ihrem Schutz erforderlich ist.',
        'Sie darf ihre Tätigkeit zwar einstellen, verliert für diese Zeit aber ihren Anspruch auf Arbeitsentgelt.',
        'Das AGG schützt nur vor Benachteiligungen durch den Arbeitgeber, nicht durch Kollegen.'
      ],
      loesung: 3,
      erklaerung: 'Belästigungen wegen der ethnischen Herkunft sind Benachteiligungen im Sinne des AGG (§§ 1, 3 Abs. 3 AGG). Der Arbeitgeber muss bei Benachteiligungen durch Beschäftigte geeignete Maßnahmen ergreifen, z. B. Abmahnung, Umsetzung, Versetzung oder Kündigung (§ 12 Abs. 3 AGG). Ergreift er keine oder offensichtlich ungeeignete Maßnahmen, sind die betroffenen Beschäftigten berechtigt, ihre Tätigkeit ohne Verlust des Arbeitsentgelts einzustellen, soweit dies zu ihrem Schutz erforderlich ist (Leistungsverweigerungsrecht, § 14 AGG). Wegen der Wahrnehmung ihrer Rechte darf sie nicht benachteiligt werden (Maßregelungsverbot, § 16 AGG).'
    },
    {
      nr: 21, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Der Rechenzentrumstechniker Benedikt Haas wurde unter Beteiligung des Betriebsrats zum Sicherheitsbeauftragten bestellt.',
      frage: 'Welche der folgenden Aussagen zu den Aufgaben von Herrn Haas trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Er trägt anstelle des Arbeitgebers die alleinige Verantwortung für den Arbeitsschutz.',
        'Er ist gegenüber allen Beschäftigten weisungsbefugt und darf Abmahnungen aussprechen.',
        'Er unterstützt den Arbeitgeber bei der Unfallverhütung, z. B. indem er auf Gefahren aufmerksam macht und auf die Benutzung von Schutzausrüstungen achtet.',
        'Er wird von der Berufsgenossenschaft angestellt und bezahlt.',
        'Ein Sicherheitsbeauftragter muss erst in Unternehmen mit mehr als 500 Beschäftigten bestellt werden.'
      ],
      loesung: 3,
      erklaerung: '§ 22 SGB VII: In Unternehmen mit regelmäßig mehr als 20 Beschäftigten muss der Unternehmer unter Beteiligung des Betriebsrats Sicherheitsbeauftragte bestellen. Sie unterstützen den Unternehmer bei der Verhütung von Arbeitsunfällen und Berufskrankheiten, überzeugen sich von der ordnungsgemäßen Benutzung der Schutzeinrichtungen und machen auf Gefahren aufmerksam. Sie haben keine Weisungsbefugnis und dürfen wegen ihrer Aufgabe nicht benachteiligt werden. Die Verantwortung für den Arbeitsschutz bleibt beim Arbeitgeber (§ 3 ArbSchG).'
    },
    {
      nr: 22, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Frau Lindner lädt zur nächsten Sitzung des Arbeitsschutzausschusses ein.',
      frage: 'Welche der folgenden Aussagen zum Arbeitsschutzausschuss nach § 11 ASiG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Er besteht ausschließlich aus Mitgliedern des Betriebsrats.',
        'Er tritt mindestens einmal vierteljährlich zusammen und berät Anliegen des Arbeitsschutzes und der Unfallverhütung.',
        'Er muss erst in Betrieben mit mehr als 500 Beschäftigten gebildet werden.',
        'Er verhängt Bußgelder gegen Beschäftigte, die Sicherheitsvorschriften missachten.',
        'Er wird von der Gewerkschaft einberufen und tagt einmal jährlich.'
      ],
      loesung: 2,
      erklaerung: '§ 11 ASiG: In Betrieben mit mehr als 20 Beschäftigten muss der Arbeitgeber einen Arbeitsschutzausschuss bilden. Ihm gehören der Arbeitgeber oder ein Beauftragter, zwei vom Betriebsrat bestimmte Betriebsratsmitglieder, Betriebsärzte, Fachkräfte für Arbeitssicherheit und Sicherheitsbeauftragte an. Er berät Anliegen des Arbeitsschutzes und der Unfallverhütung und tritt mindestens einmal vierteljährlich zusammen.'
    },
    {
      nr: 23, thema: 'arbeitsschutz', typ: 'reihenfolge',
      text: 'In einer Unterweisung erklärt Frau Lindner, wie sich die Beschäftigten nach dem Aushang „Verhalten im Brandfall“ der Brandschutzordnung verhalten sollen, wenn sie in einem Technikraum einen Brand entdecken.',
      frage: 'Bringen Sie die folgenden Schritte in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Schritte',
      items: [
        { text: 'Löschversuch mit dem nächsten Feuerlöscher unternehmen, sofern dies ohne Eigengefährdung möglich ist', loesung: 4 },
        { text: 'Brand über den Notruf 112 oder den nächsten Brandmelder melden', loesung: 2 },
        { text: 'Ruhe bewahren', loesung: 1 },
        { text: 'Gefährdete Personen warnen und in Sicherheit bringen, Türen schließen', loesung: 3 }
      ],
      erklaerung: 'Der Aushang „Verhalten im Brandfall“ (Brandschutzordnung Teil A nach DIN 14096) gibt die Reihenfolge vor: Ruhe bewahren, Brand melden, in Sicherheit bringen, Löschversuch unternehmen. Der Arbeitgeber muss Maßnahmen zur Brandbekämpfung und Evakuierung treffen und die Beschäftigten darüber unterweisen (§§ 10, 12 ArbSchG, ASR A2.2).'
    },
    {
      nr: 24, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Ein Auszubildender fragt in der Personalabteilung, wie die gesetzliche Rentenversicherung finanziert wird.',
      frage: 'Welche der folgenden Aussagen beschreibt das Umlageverfahren (Generationenvertrag) zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jeder Versicherte spart auf ein persönliches Konto, aus dem später seine eigene Rente gezahlt wird.',
        'Die Renten werden ausschließlich aus der Gewerbesteuer der Gemeinden bezahlt.',
        'Die Beiträge zur Rentenversicherung trägt allein der Arbeitgeber.',
        'Alle Rentnerinnen und Rentner erhalten unabhängig von ihren Beiträgen eine Rente in gleicher Höhe.',
        'Die Beiträge der heute Beschäftigten werden unmittelbar für die Renten der heutigen Rentnerinnen und Rentner verwendet.'
      ],
      loesung: 5,
      erklaerung: 'Die gesetzliche Rentenversicherung wird im Umlageverfahren finanziert: Die Ausgaben eines Kalenderjahres werden durch die Einnahmen desselben Jahres gedeckt (§ 153 Abs. 1 SGB VI), ergänzt durch Bundeszuschüsse. Die heutige Erwerbsgeneration finanziert die Renten der älteren Generation und wird später selbst von der nachfolgenden Generation versorgt (Generationenvertrag). Beim Kapitaldeckungsverfahren, z. B. einer privaten Rentenversicherung, wird dagegen für jeden Versicherten Kapital angespart. Die Beiträge tragen Arbeitgeber und Arbeitnehmer je zur Hälfte (§ 168 Abs. 1 Nr. 1 SGB VI), die Rentenhöhe richtet sich nach den gezahlten Beiträgen.'
    },
    {
      nr: 25, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Die neue Mitarbeiterin Carina Albrecht ist versicherungspflichtig beschäftigt. Bei der Einstellung empfiehlt ihr die Personalabteilung die Krankenkasse, mit der die Bodensee DataCare GmbH & Co. KG am häufigsten zusammenarbeitet. Frau Albrecht möchte jedoch Mitglied einer Krankenkasse mit niedrigerem Zusatzbeitrag werden.',
      frage: 'Welche der folgenden Aussagen zur Wahl der Krankenkasse trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Albrecht muss die Krankenkasse wählen, die ihr Arbeitgeber vorgibt.',
        'Die zuständige Krankenkasse wird nach dem Wohnort bestimmt; eine Wahl ist nicht möglich.',
        'Frau Albrecht kann ihre Krankenkasse grundsätzlich frei wählen; an die gewählte Krankenkasse ist sie in der Regel mindestens zwölf Monate gebunden.',
        'Ein Wechsel der Krankenkasse ist nur beim Wechsel des Arbeitgebers erlaubt.',
        'Über die Wahl der Krankenkasse entscheidet der Betriebsrat einheitlich für alle Beschäftigten.'
      ],
      loesung: 3,
      erklaerung: 'Versicherungspflichtige und Versicherungsberechtigte können ihre Krankenkasse grundsätzlich frei wählen, z. B. eine Ortskrankenkasse, eine Ersatzkasse oder eine für sie geöffnete Betriebs- oder Innungskrankenkasse (§ 173 Abs. 1 und 2 SGB V). Der Arbeitgeber darf keine Krankenkasse vorschreiben. An die Wahl sind Mitglieder in der Regel mindestens zwölf Monate gebunden (§ 175 Abs. 4 SGB V); erhebt oder erhöht die Krankenkasse einen Zusatzbeitrag, besteht ein Sonderkündigungsrecht. Die Krankenkasse zieht als Einzugsstelle auch die übrigen Sozialversicherungsbeiträge ein (§ 28h SGB IV).'
    },
    {
      nr: 26, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Bodensee DataCare GmbH & Co. KG weist für das abgelaufene Geschäftsjahr folgende Werte aus: Gewinn 171.000,00 EUR, Fremdkapitalzinsen 54.000,00 EUR, Eigenkapital 960.000,00 EUR, Fremdkapital 1.440.000,00 EUR.',
      frage: 'Berechnen Sie die Gesamtkapitalrentabilität in Prozent.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf die erste Nachkommastelle.',
      loesung: 9.4, nachkommastellen: 1, einheit: '%',
      erklaerung: 'Gesamtkapitalrentabilität = (Gewinn + Fremdkapitalzinsen) ÷ Gesamtkapital × 100. Gesamtkapital = 960.000,00 EUR + 1.440.000,00 EUR = 2.400.000,00 EUR. (171.000,00 EUR + 54.000,00 EUR) ÷ 2.400.000,00 EUR × 100 = 225.000,00 ÷ 2.400.000,00 × 100 = 9,375 % ≈ 9,4 %. Die Fremdkapitalzinsen werden addiert, weil sie die Verzinsung des Fremdkapitals darstellen und das Gesamtkapital beide Kapitalarten umfasst.'
    },
    {
      nr: 27, thema: 'zusammenschluesse', typ: 'einfach',
      text: 'Die Bodensee DataCare GmbH & Co. KG und ein Schweizer Softwareunternehmen gründen gemeinsam die Lakeside Cloud AG, an der beide je zur Hälfte beteiligt sind. Die neue Gesellschaft soll dauerhaft ein Rechenzentrum in Zürich betreiben. Beide Partnerunternehmen bleiben rechtlich und wirtschaftlich selbstständig.',
      frage: 'Um welche der folgenden Formen der Unternehmensverbindung handelt es sich?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Form in das Kästchen ein.',
      optionen: [
        'Arbeitsgemeinschaft (ARGE)',
        'Joint Venture (Gemeinschaftsunternehmen)',
        'Kartell',
        'Fusion',
        'Franchising'
      ],
      loesung: 2,
      erklaerung: 'Bei einem Joint Venture gründen zwei oder mehr selbstständig bleibende Unternehmen ein gemeinsames Unternehmen, an dem sie beteiligt sind und das sie gemeinsam führen. Eine Arbeitsgemeinschaft (ARGE) ist dagegen ein zeitlich befristeter Zusammenschluss zur gemeinsamen Durchführung eines bestimmten Auftrags, meist als Gesellschaft bürgerlichen Rechts (§ 705 BGB), die nach Abschluss des Auftrags wieder aufgelöst wird. Beim Kartell stimmen Unternehmen ihr Marktverhalten ab (grundsätzlich verboten, § 1 GWB), bei der Fusion verschmelzen sie zu einem Unternehmen (Umwandlungsgesetz).'
    },
    {
      nr: 28, thema: 'datenschutz', typ: 'mehrfach',
      text: 'Die Bodensee DataCare GmbH & Co. KG verarbeitet im Auftrag ihrer Kunden große Mengen personenbezogener Daten und muss nach Art. 32 DSGVO geeignete technische und organisatorische Maßnahmen (TOM) treffen. Ein Schwerpunkt ist die Verfügbarkeit der Daten.',
      frage: 'Welche der folgenden Maßnahmen dienen in erster Linie der Verfügbarkeit der Daten?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Maßnahmen in die Kästchen ein.',
      optionen: [
        'Tägliche Datensicherung (Backup) mit einer Kopie in einem räumlich getrennten zweiten Rechenzentrum',
        'Verschlüsselung der E-Mails an Kunden',
        'Pseudonymisierung der Kundendaten in Testsystemen',
        'Unterbrechungsfreie Stromversorgung (USV) und Notstromaggregat für die Serverräume',
        'Einführung einer Clean-Desk-Richtlinie für alle Büroarbeitsplätze',
        'Protokollierung, wer wann welche Daten geändert hat'
      ],
      loesung: [1, 4],
      erklaerung: 'Art. 32 DSGVO verlangt technische und organisatorische Maßnahmen, die Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit der Systeme sicherstellen und nach einem Zwischenfall die rasche Wiederherstellung der Daten ermöglichen. Backups an einem getrennten Standort und eine abgesicherte Stromversorgung schützen vor Datenverlust und Ausfällen (Verfügbarkeit). Verschlüsselung, Pseudonymisierung und Clean-Desk-Richtlinie dienen vor allem der Vertraulichkeit, die Protokollierung von Änderungen der Integrität und Nachvollziehbarkeit.'
    },
    {
      nr: 29, thema: 'datenschutz', typ: 'einfach',
      text: 'Die Bodensee DataCare GmbH & Co. KG möchte Interessenten regelmäßig einen E-Mail-Newsletter senden und holt dafür deren Einwilligung ein.',
      frage: 'Welche der folgenden Aussagen zur Einwilligung nach Art. 7 DSGVO trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein bereits vorab angekreuztes Kästchen auf der Website genügt als Einwilligung.',
        'Eine einmal erteilte Einwilligung kann nicht mehr zurückgenommen werden.',
        'Ein Widerruf macht auch alle bisherigen Newsletter-Versendungen rückwirkend rechtswidrig.',
        'Die Einwilligung kann jederzeit widerrufen werden; der Widerruf muss so einfach sein wie die Erteilung.',
        'Das Unternehmen muss nicht nachweisen können, dass eine Einwilligung vorliegt.'
      ],
      loesung: 4,
      erklaerung: 'Art. 7 DSGVO: Der Verantwortliche muss die Einwilligung nachweisen können (Abs. 1). Die betroffene Person kann ihre Einwilligung jederzeit widerrufen; die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung bleibt unberührt, und der Widerruf muss so einfach wie die Erteilung sein (Abs. 3). Eine Einwilligung erfordert eine eindeutige bestätigende Handlung (Art. 4 Nr. 11 DSGVO); Stillschweigen oder vorangekreuzte Kästchen genügen nicht.'
    },
    {
      nr: 30, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Bodensee DataCare GmbH & Co. KG will den Energieverbrauch und die Umweltbelastung ihrer Rechenzentren senken.',
      frage: 'Welche der folgenden Maßnahmen trägt **nicht** zu diesem Ziel bei?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Nutzung der Abwärme der Server zur Beheizung benachbarter Gebäude',
        'Kühlen der Serverräume auf 16 °C, obwohl die Hardware für deutlich höhere Zulufttemperaturen ausgelegt ist',
        'Zusammenfassen vieler schwach ausgelasteter Server durch Virtualisierung',
        'Bezug von Strom aus erneuerbaren Energien',
        'Trennung von Kalt- und Warmgang (Einhausung) für eine effizientere Kühlung'
      ],
      loesung: 2,
      erklaerung: 'Eine unnötig niedrige Raumtemperatur erhöht den Energiebedarf der Kühlung, ohne die Betriebssicherheit zu verbessern. Abwärmenutzung, Virtualisierung, Ökostrom und die Trennung von Kalt- und Warmgang senken den Energieverbrauch bzw. die CO₂-Emissionen. Das Energieeffizienzgesetz (EnEfG) verpflichtet Betreiber größerer Rechenzentren u. a. zu Energieeffizienz und zum Bezug von Strom aus erneuerbaren Energien; neue Rechenzentren müssen außerdem einen Teil ihrer Abwärme nutzbar machen.'
    }
  ]
});
