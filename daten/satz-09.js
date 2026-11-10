// Übungssatz 9 – eigene Aufgaben im Stil der IHK-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-09',
  titel: 'Übungssatz 9',
  untertitel: 'Elbsand Netzwerke GmbH',
  ausgangssituation:
    'Die Elbsand Netzwerke GmbH mit Sitz in Dresden plant und baut Glasfaser- und Netzwerkinfrastruktur für Kommunen, Wohnungsunternehmen und Gewerbekunden und betreut deren Netze. Sie beschäftigt 160 Arbeitnehmerinnen und Arbeitnehmer und ist Mitglied im Arbeitgeberverband. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 3,
      text: 'Die Elbsand Netzwerke GmbH bildet IT-System-Elektronikerinnen und -Elektroniker sowie Fachinformatikerinnen und Fachinformatiker für Systemintegration aus. Ausbildungsleiter ist Sven Gräfe.'
    },
    {
      von: 4, bis: 6,
      text: 'Bei der Elbsand Netzwerke GmbH besteht ein Betriebsrat, Vorsitzende ist Ines Wunderlich. In diesem Jahr hat das Unternehmen in Pirna die Tochtergesellschaft Elbsand Montage GmbH gegründet, die keinem Arbeitgeberverband angehört.'
    },
    {
      von: 10, bis: 12,
      text: 'Die Fachkraft für Arbeitssicherheit Mirko Lindemann berät die Geschäftsführung der Elbsand Netzwerke GmbH und unterweist die Beschäftigten regelmäßig.'
    },
    {
      von: 28, bis: 28,
      titel: 'Situation zur 28. Aufgabe',
      text: 'Die Geschäftsführung der Elbsand Netzwerke GmbH wertet für ihre Investitionsplanung folgende gesamtwirtschaftliche Daten aus:',
      tabelle: {
        kopf: ['Indikator', 'Vorjahr', 'Aktuelles Jahr'],
        zeilen: [
          ['Veränderung des realen Bruttoinlandsprodukts', '−2,1 %', '−0,3 %'],
          ['Arbeitslosenquote', '8,1 %', '8,6 %'],
          ['Inflationsrate', '0,9 %', '0,3 %'],
          ['Auslastung der Produktionskapazitäten', '70 %', '68 %'],
          ['Geschäftserwartungen der Unternehmen', 'sehr pessimistisch', 'pessimistisch'],
          ['Zinsniveau', 'sinkend', 'sehr niedrig']
        ]
      }
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'ausbildung', typ: 'einfach',
      text: 'Der 16-jährige Paul Hentschel soll am 01.08.2027 seine Ausbildung zum IT-System-Elektroniker beginnen. Herr Gräfe bereitet den Abschluss des Berufsausbildungsvertrags vor.',
      frage: 'Welche der folgenden Aussagen zum Abschluss des Berufsausbildungsvertrags trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Hentschel kann den Vertrag ohne Zustimmung seiner Eltern abschließen, weil er bereits 16 Jahre alt ist.',
        'Für den Vertrag ist die Zustimmung seiner gesetzlichen Vertreter erforderlich; der wesentliche Vertragsinhalt ist unverzüglich nach Vertragsschluss, spätestens vor Beginn der Ausbildung in Textform niederzulegen und Herrn Hentschel und seinen Eltern auszuhändigen oder zu übermitteln.',
        'Ein mündlich geschlossener Berufsausbildungsvertrag ist in jedem Fall unwirksam.',
        'Die Vertragsniederschrift muss erst nach dem Ende der Probezeit erstellt werden.',
        'Den Berufsausbildungsvertrag schließt die Industrie- und Handelskammer mit dem Auszubildenden ab.'
      ],
      loesung: 2,
      erklaerung: 'Minderjährige sind beschränkt geschäftsfähig und brauchen für den Berufsausbildungsvertrag die Zustimmung ihrer gesetzlichen Vertreter (§§ 106 ff. BGB). Vertragspartner sind der Ausbildende und der Auszubildende; die IHK trägt den Vertrag nur in das Verzeichnis ein. Der Vertrag selbst ist formfrei, der Ausbildende muss aber den wesentlichen Inhalt unverzüglich nach Abschluss, spätestens vor Beginn der Berufsausbildung in Textform niederlegen (§ 11 Abs. 1 BBiG) und die Niederschrift den Auszubildenden und ihren gesetzlichen Vertretern aushändigen oder übermitteln (§ 11 Abs. 2 BBiG). Seit 2025 genügt dafür die Textform, z. B. eine E-Mail mit dem Vertragsinhalt.'
    },
    {
      nr: 2, thema: 'ausbildung', typ: 'einfach',
      text: 'Die Auszubildende Jana Ullrich schreibt am Dienstag, dem 27.04.2027, den schriftlichen Teil ihrer Abschlussprüfung. Der Montag davor ist für sie ein regulärer Arbeitstag im Betrieb.',
      frage: 'Welche der folgenden Aussagen zum Montag trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Ullrich muss für den Montag einen Tag Urlaub nehmen, wenn sie sich vorbereiten möchte.',
        'Eine Freistellung am Montag steht nur Auszubildenden zu, die noch nicht 18 Jahre alt sind.',
        'Frau Ullrich ist am Montag nur bis 12:00 Uhr freizustellen.',
        'Frau Ullrich ist am Montag von der Arbeit freizustellen; ihre Ausbildungsvergütung wird für diesen Tag fortgezahlt.',
        'Frau Ullrich ist in der gesamten Woche vor der Prüfung freizustellen.'
      ],
      loesung: 4,
      erklaerung: 'Ausbildende müssen Auszubildende an dem Arbeitstag freistellen, der der schriftlichen Abschlussprüfung unmittelbar vorangeht (§ 15 Abs. 1 Satz 2 Nr. 5 BBiG). Die Regelung gilt seit 2020 für alle Auszubildenden, unabhängig vom Alter. Die Vergütung ist für die Zeit der Freistellung fortzuzahlen (§ 19 Abs. 1 Nr. 1 BBiG).'
    },
    {
      nr: 3, thema: 'ausbildung', typ: 'mehrfach',
      text: 'Herr Gräfe wurde von der IHK als Prüfer in einen Prüfungsausschuss für IT-Berufe berufen. Die Auszubildenden fragen ihn, wer in dem Ausschuss sitzt.',
      frage: 'Welche der folgenden Aussagen zur Zusammensetzung des Prüfungsausschusses treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Den Vorsitz führt immer der Ausbildungsleiter des jeweiligen Prüflings.',
        'Der Prüfungsausschuss besteht aus mindestens drei Mitgliedern.',
        'Dem Prüfungsausschuss gehören ausschließlich Beschäftigte der IHK an.',
        'Die Ausbilderin oder der Ausbilder des Prüflings muss dem Ausschuss angehören.',
        'Dem Prüfungsausschuss gehören Beauftragte der Arbeitgeber und der Arbeitnehmer in gleicher Zahl sowie mindestens eine Lehrkraft einer berufsbildenden Schule an.',
        'Die Mitglieder des Prüfungsausschusses werden vom Betriebsrat des Ausbildungsbetriebs gewählt.'
      ],
      loesung: [2, 5],
      erklaerung: '§ 40 Abs. 1 und 2 BBiG: Der Prüfungsausschuss besteht aus mindestens drei Mitgliedern. Ihm müssen Beauftragte der Arbeitgeber und der Arbeitnehmer in gleicher Zahl sowie mindestens eine Lehrkraft einer berufsbildenden Schule angehören; mindestens zwei Drittel der Mitglieder müssen Beauftragte der Arbeitgeber und der Arbeitnehmer sein. Die Mitglieder werden von der zuständigen Stelle (IHK) berufen und sind ehrenamtlich tätig (§ 40 Abs. 3 und 6 BBiG).'
    },
    {
      nr: 4, thema: 'mitbestimmung', typ: 'einfach',
      text: 'In der Elbsand Montage GmbH sind acht Arbeitnehmerinnen und Arbeitnehmer ständig beschäftigt. Alle sind volljährig und seit mehr als sechs Monaten im Unternehmen. Einige von ihnen möchten einen Betriebsrat gründen.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Betriebsrat kann gewählt werden, weil in der Regel mindestens fünf ständige wahlberechtigte Arbeitnehmer beschäftigt sind, von denen drei wählbar sind; die Wahl leitet ein Wahlvorstand.',
        'Ein Betriebsrat kann erst ab 20 Arbeitnehmern gewählt werden.',
        'Ein Betriebsrat darf nur gewählt werden, wenn die Geschäftsführung der Wahl zustimmt.',
        'Ein Betriebsrat ist nur zulässig, wenn mindestens ein Beschäftigter Mitglied einer Gewerkschaft ist.',
        'Betriebsräte gibt es nur in Aktiengesellschaften.'
      ],
      loesung: 1,
      erklaerung: '§ 1 Abs. 1 BetrVG: In Betrieben mit in der Regel mindestens fünf ständigen wahlberechtigten Arbeitnehmern, von denen drei wählbar sind, werden Betriebsräte gewählt. Die Wahl wird von einem Wahlvorstand vorbereitet und durchgeführt (§§ 16 bis 18 BetrVG); in Betrieben mit fünf bis 100 wahlberechtigten Arbeitnehmern gilt das vereinfachte Wahlverfahren (§ 14a BetrVG). Bei fünf bis 20 wahlberechtigten Arbeitnehmern besteht der Betriebsrat aus einer Person (§ 9 BetrVG). Eine Zustimmung des Arbeitgebers ist nicht nötig.'
    },
    {
      nr: 5, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Geschäftsführung möchte, dass alle Servicetechnikerinnen und -techniker bei Kundeneinsätzen künftig einheitliche Dienstkleidung mit Firmenlogo tragen. Frau Wunderlich prüft die Rechte des Betriebsrats.',
      frage: 'Welche der folgenden Aussagen zur Beteiligung des Betriebsrats trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Betriebsrat muss nur nachträglich über die Einführung informiert werden.',
        'Der Betriebsrat ist lediglich anzuhören; seine Meinung ist für die Geschäftsführung nicht bindend.',
        'Der Betriebsrat hat ein Mitbestimmungsrecht, weil eine Kleiderordnung die Ordnung des Betriebs und das Verhalten der Arbeitnehmer im Betrieb betrifft.',
        'Der Betriebsrat hat kein Beteiligungsrecht, weil die Geschäftsführung über das Erscheinungsbild des Unternehmens allein entscheidet.',
        'Der Betriebsrat entscheidet allein über die Einführung der Dienstkleidung.'
      ],
      loesung: 3,
      erklaerung: '§ 87 Abs. 1 Nr. 1 BetrVG: Der Betriebsrat hat bei Fragen der Ordnung des Betriebs und des Verhaltens der Arbeitnehmer im Betrieb mitzubestimmen. Dazu gehören z. B. Kleiderordnungen, Rauchverbote oder Regeln für Taschenkontrollen. Kommt keine Einigung zustande, entscheidet die Einigungsstelle (§ 87 Abs. 2 BetrVG). Nicht mitbestimmt sind Anweisungen, die nur die Arbeitsleistung selbst betreffen (Arbeitsverhalten).'
    },
    {
      nr: 6, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Auszubildende Lisa Kaden ist Mitglied der Jugend- und Auszubildendenvertretung. Ihre Ausbildung endet in zwei Monaten. Die Geschäftsführung hat ihr mitgeteilt, dass sie nicht übernommen werden soll. Frau Kaden möchte jedoch weiterbeschäftigt werden.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Betriebsverfassungsgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Kaden hat keinen Anspruch auf Weiterbeschäftigung, weil kein Auszubildender übernommen werden muss.',
        'Frau Kaden wird automatisch für sechs Monate befristet weiterbeschäftigt.',
        'Frau Kaden kann nur weiterbeschäftigt werden, wenn die IHK zustimmt.',
        'Frau Kaden hat nur dann einen Anspruch, wenn sie die Abschlussprüfung mit der Note „gut“ besteht.',
        'Verlangt Frau Kaden innerhalb der letzten drei Monate vor dem Ende der Ausbildung schriftlich ihre Weiterbeschäftigung, gilt ein unbefristetes Arbeitsverhältnis als begründet.'
      ],
      loesung: 5,
      erklaerung: '§ 78a BetrVG schützt Auszubildende, die Mitglied der JAV oder des Betriebsrats sind. Will der Arbeitgeber sie nicht übernehmen, muss er dies drei Monate vor Ende der Ausbildung schriftlich mitteilen (Abs. 1). Verlangt die oder der Auszubildende innerhalb der letzten drei Monate vor Beendigung schriftlich die Weiterbeschäftigung, gilt ein unbefristetes Arbeitsverhältnis als begründet (Abs. 2). Der Arbeitgeber kann sich davon nur durch eine Entscheidung des Arbeitsgerichts lösen, wenn ihm die Weiterbeschäftigung nicht zugemutet werden kann (Abs. 4).'
    },
    {
      nr: 7, thema: 'arbeitsvertrag', typ: 'datum',
      text: 'Die kündigungsberechtigte Personalleiterin Doreen Hähnel erfährt am Montag, dem 08.03.2027, nach Abschluss interner Ermittlungen, dass der Vertriebsmitarbeiter Rico Fiedler Kundendaten an einen Wettbewerber verkauft hat. Die Elbsand Netzwerke GmbH will ihm deshalb fristlos kündigen.',
      kasten: {
        titel: '§ 626 BGB Fristlose Kündigung aus wichtigem Grund (Auszug)',
        absaetze: [
          '(1) Das Dienstverhältnis kann von jedem Vertragsteil aus wichtigem Grund ohne Einhaltung einer Kündigungsfrist gekündigt werden, wenn Tatsachen vorliegen, auf Grund derer dem Kündigenden unter Berücksichtigung aller Umstände des Einzelfalles und unter Abwägung der Interessen beider Vertragsteile die Fortsetzung des Dienstverhältnisses bis zum Ablauf der Kündigungsfrist oder bis zu der vereinbarten Beendigung des Dienstverhältnisses nicht zugemutet werden kann.',
          '(2) Die Kündigung kann nur innerhalb von zwei Wochen erfolgen. Die Frist beginnt mit dem Zeitpunkt, in dem der Kündigungsberechtigte von den für die Kündigung maßgebenden Tatsachen Kenntnis erlangt.'
        ]
      },
      frage: 'An welchem Tag muss die fristlose Kündigung Herrn Fiedler spätestens zugehen?',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '22.03.2027',
      erklaerung: 'Die Zwei-Wochen-Frist des § 626 Abs. 2 BGB beginnt mit der Kenntnis am Montag, 08.03.2027. Dieser Tag wird nicht mitgezählt (§ 187 Abs. 1 BGB); die Frist endet mit Ablauf des Tages der zweiten Woche, der durch seine Benennung dem Tag der Kenntnis entspricht (§ 188 Abs. 2 BGB): Montag, 22.03.2027. Bis dahin muss die schriftliche Kündigung (§ 623 BGB) zugegangen sein. Vorher ist der Betriebsrat anzuhören; Bedenken gegen eine außerordentliche Kündigung muss er unverzüglich, spätestens innerhalb von drei Tagen mitteilen (§ 102 Abs. 1 und 2 BetrVG).'
    },
    {
      nr: 8, thema: 'arbeitsvertrag', typ: 'mehrfach',
      text: 'Der gesetzlich krankenversicherte Netzwerktechniker Tom Seifert wacht am Montag mit hohem Fieber auf und kann nicht zur Arbeit kommen. Im Arbeitsvertrag ist zur Krankmeldung nichts Besonderes geregelt.',
      frage: 'Welche der folgenden Aussagen zu den Pflichten von Herrn Seifert treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Er muss dem Arbeitgeber die Arbeitsunfähigkeit und deren voraussichtliche Dauer unverzüglich mitteilen.',
        'Er muss die Arbeitsunfähigkeit erst nach seiner Genesung mitteilen.',
        'Er muss dem Arbeitgeber die ärztliche Diagnose nennen.',
        'Dauert die Arbeitsunfähigkeit länger als drei Kalendertage, muss er sie spätestens am darauffolgenden Arbeitstag ärztlich feststellen lassen; der Arbeitgeber ruft die elektronische Arbeitsunfähigkeitsbescheinigung bei der Krankenkasse ab.',
        'Er muss die Krankmeldung erst am Ende der Woche abgeben, wenn feststeht, wie lange er fehlt.',
        'Während der Arbeitsunfähigkeit darf er seine Wohnung grundsätzlich nicht verlassen.'
      ],
      loesung: [1, 4],
      erklaerung: '§ 5 Abs. 1 EFZG: Arbeitnehmer müssen die Arbeitsunfähigkeit und deren voraussichtliche Dauer unverzüglich mitteilen. Dauert sie länger als drei Kalendertage, ist spätestens am darauffolgenden Arbeitstag ein ärztlicher Nachweis nötig; der Arbeitgeber kann ihn auch früher verlangen. Für gesetzlich Versicherte gilt seit 2023 die elektronische Arbeitsunfähigkeitsbescheinigung: Sie lassen die Arbeitsunfähigkeit ärztlich feststellen, der Arbeitgeber ruft die Daten bei der Krankenkasse ab (§ 5 Abs. 1a EFZG). Die Diagnose muss nicht genannt werden. Erlaubt ist alles, was die Genesung nicht gefährdet.'
    },
    {
      nr: 9, thema: 'arbeitsvertrag', typ: 'zahl',
      text: 'Die Teilzeitkraft Anja Pohl arbeitet in der Auftragsbearbeitung regelmäßig an drei Tagen pro Woche (Montag, Mittwoch und Freitag). Ihr Arbeitsvertrag verweist beim Urlaub nur auf das Bundesurlaubsgesetz.',
      kasten: {
        titel: '§ 3 Bundesurlaubsgesetz (BUrlG) Dauer des Urlaubs',
        absaetze: [
          '(1) Der Urlaub beträgt jährlich mindestens 24 Werktage.',
          '(2) Als Werktage gelten alle Kalendertage, die nicht Sonn- oder gesetzliche Feiertage sind.'
        ]
      },
      frage: 'Berechnen Sie, wie viele Arbeitstage gesetzlichen Mindesturlaub Frau Pohl im Kalenderjahr zustehen.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 12, nachkommastellen: 0, einheit: 'Arbeitstage',
      erklaerung: 'Die 24 Werktage nach § 3 BUrlG beziehen sich auf eine Sechstagewoche von Montag bis Samstag. Bei einer anderen Verteilung der Arbeitszeit wird umgerechnet: 24 Werktage ÷ 6 × 3 Arbeitstage = 12 Arbeitstage. Das entspricht wie bei Vollzeitkräften vier Wochen Urlaub; bei einer Fünftagewoche wären es 20 Arbeitstage.'
    },
    {
      nr: 10, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Herr Lindemann übt mit den Beschäftigten des Rechenzentrums das Verhalten bei einem Entstehungsbrand. Als Beispiel nennt er einen kleinen Brand an einem Netzteil im Serverschrank.',
      frage: 'Welches der folgenden Löschmittel ist für diesen Brand an einer elektrischen Anlage geeignet?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Löschmittel in das Kästchen ein.',
      optionen: [
        'Wasser im Vollstrahl aus dem Wandhydranten',
        'Kohlendioxidlöscher (CO₂-Löscher)',
        'Fettbrandlöscher der Brandklasse F',
        'Metallbrandlöscher der Brandklasse D',
        'Kein Löschmittel, weil Brände im Serverraum nur von der Feuerwehr gelöscht werden dürfen'
      ],
      loesung: 2,
      erklaerung: 'Brände werden nach DIN EN 2 in Brandklassen eingeteilt: A (feste Stoffe), B (flüssige Stoffe), C (Gase), D (Metalle) und F (Speiseöle und -fette). Für Brände an elektrischen Anlagen eignen sich CO₂-Löscher, weil Kohlendioxid den elektrischen Strom nicht leitet und rückstandsfrei löscht. Wasser im Vollstrahl ist wegen der Stromschlaggefahr ungeeignet. Entstehungsbrände dürfen und sollen Beschäftigte ohne Eigengefährdung bekämpfen; der Arbeitgeber muss dafür geeignete Feuerlöscher bereitstellen (§ 10 ArbSchG, ASR A2.2).'
    },
    {
      nr: 11, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Ein Auszubildender schneidet sich beim Abisolieren eines Kabels leicht in den Finger. Ein Ersthelfer versorgt die Wunde mit einem Pflaster, danach arbeitet der Auszubildende weiter.',
      frage: 'Welche der folgenden Aussagen zu dieser Erste-Hilfe-Leistung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Vorfall muss innerhalb von drei Tagen als Unfallanzeige an die Berufsgenossenschaft gemeldet werden.',
        'Kleine Verletzungen müssen nicht dokumentiert werden.',
        'Der Vorfall muss der Polizei gemeldet werden.',
        'Die Erste-Hilfe-Leistung ist zu dokumentieren, z. B. im Verbandbuch; die Aufzeichnungen sind fünf Jahre aufzubewahren.',
        'Eine Dokumentation ist nur erforderlich, wenn der Auszubildende anschließend arbeitsunfähig ist.'
      ],
      loesung: 4,
      erklaerung: 'Nach § 24 Abs. 6 DGUV Vorschrift 1 muss jede Erste-Hilfe-Leistung dokumentiert werden, z. B. im Verbandbuch, und die Aufzeichnungen sind fünf Jahre aufzubewahren. So lässt sich später nachweisen, dass eine Verletzung bei der Arbeit entstanden ist, falls Folgen auftreten. Eine Unfallanzeige an die Berufsgenossenschaft ist erst nötig, wenn die verletzte Person mehr als drei Tage arbeitsunfähig ist (§ 193 Abs. 1 SGB VII).'
    },
    {
      nr: 12, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die schwangere Netzwerktechnikerin Sarah Böhme soll nach dem Dienstplan an einem Wartungsfenster von 22:00 bis 02:00 Uhr teilnehmen.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Mutterschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Einsatz ist unzulässig, weil Schwangere grundsätzlich nicht zwischen 20 und 6 Uhr beschäftigt werden dürfen.',
        'Der Einsatz ist zulässig, wenn Frau Böhme ausdrücklich zustimmt.',
        'Der Einsatz ist zulässig, wenn Frau Böhme einen Nachtzuschlag erhält.',
        'Nachtarbeit ist bis zum Ende des sechsten Schwangerschaftsmonats ohne Einschränkung erlaubt.',
        'Lehnt Frau Böhme den Einsatz ab, darf der Arbeitgeber ihr kündigen.'
      ],
      loesung: 1,
      erklaerung: '§ 5 Abs. 1 MuSchG: Der Arbeitgeber darf eine schwangere Frau nicht zwischen 20 Uhr und 6 Uhr beschäftigen. Eine Beschäftigung bis 22 Uhr ist nur ausnahmsweise möglich, wenn die Frau sich ausdrücklich bereit erklärt, nach ärztlichem Zeugnis nichts dagegen spricht und die Aufsichtsbehörde den Antrag genehmigt (§ 28 MuSchG). Eine Beschäftigung nach 22 Uhr kann die Aufsichtsbehörde nur in besonders begründeten Einzelfällen bewilligen (§ 29 Abs. 3 Satz 2 Nr. 1 MuSchG); ein Einsatz bis 2 Uhr ist daher grundsätzlich ausgeschlossen. Während der Schwangerschaft besteht zudem ein Kündigungsverbot (§ 17 MuSchG).'
    },
    {
      nr: 13, thema: 'rechtsformen', typ: 'einfach',
      text: 'Für Tiefbauarbeiten beauftragt die Elbsand Netzwerke GmbH zwei selbstständige Elektromeister, die sich zu einer Gesellschaft bürgerlichen Rechts (GbR) zusammengeschlossen haben. Die GbR ist in keinem Register eingetragen.',
      frage: 'Welche der folgenden Aussagen zur Gesellschaft bürgerlichen Rechts trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Für die Gründung einer GbR ist ein Mindestkapital von 25.000,00 EUR erforderlich.',
        'Die Gesellschafter haften nur bis zur Höhe ihrer Einlage.',
        'Die GbR muss in das Handelsregister eingetragen werden, sonst ist sie unwirksam.',
        'Die GbR ist eine Kapitalgesellschaft.',
        'Für Verbindlichkeiten der GbR haften die Gesellschafter persönlich als Gesamtschuldner; die Eintragung in das Gesellschaftsregister ist freiwillig.'
      ],
      loesung: 5,
      erklaerung: 'Seit dem Gesetz zur Modernisierung des Personengesellschaftsrechts (MoPeG, 2024) haften die Gesellschafter einer GbR für deren Verbindlichkeiten den Gläubigern als Gesamtschuldner persönlich und unbeschränkt (§ 721 BGB). Die Gesellschafter können die GbR in das Gesellschaftsregister eintragen lassen (§ 707 BGB); sie heißt dann eingetragene GbR (eGbR). Nötig ist die Eintragung z. B., wenn die GbR ein Grundstück erwerben will. Ein Mindestkapital gibt es nicht; die GbR ist eine Personengesellschaft.'
    },
    {
      nr: 14, thema: 'rechtsformen', typ: 'zuordnung',
      text: 'Die Geschäftsführung der Elbsand Netzwerke GmbH erteilt mehreren Beschäftigten Vollmachten.',
      frage: 'Welche der folgenden Vollmachten sind den nachstehenden Sachverhalten zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Vollmacht in das Kästchen ein.',
      optionenTitel: 'Vollmachten',
      optionen: [
        'Allgemeine Handlungsvollmacht',
        'Artvollmacht',
        'Einzelvollmacht',
        'Prokura'
      ],
      itemsTitel: 'Sachverhalte',
      items: [
        { text: 'Die Leiterin Finanzen darf alle gerichtlichen und außergerichtlichen Geschäfte vornehmen, die der Betrieb irgendeines Handelsgewerbes mit sich bringt; ihre Vollmacht ist im Handelsregister eingetragen.', loesung: 4 },
        { text: 'Ein Sachbearbeiter im Einkauf darf regelmäßig Kabel und Verbrauchsmaterial bei Lieferanten bestellen.', loesung: 2 },
        { text: 'Ein Auszubildender soll einmalig einen Vertrag über die Anmietung eines Baucontainers bei einem Vermieter unterschreiben.', loesung: 3 },
        { text: 'Der Niederlassungsleiter darf alle Geschäfte und Rechtshandlungen vornehmen, die der Betrieb eines Netzwerkdienstleisters gewöhnlich mit sich bringt.', loesung: 1 }
      ],
      erklaerung: 'Die Prokura berechtigt zu allen Geschäften, die der Betrieb irgendeines Handelsgewerbes mit sich bringt, und wird im Handelsregister eingetragen (§§ 49, 53 HGB). Die Handlungsvollmacht (§ 54 HGB) erstreckt sich auf Geschäfte, die der Betrieb eines derartigen Handelsgewerbes gewöhnlich mit sich bringt: als allgemeine Handlungsvollmacht für alle gewöhnlichen Geschäfte, als Artvollmacht für eine bestimmte Art von Geschäften, die regelmäßig anfallen, und als Einzelvollmacht für ein einzelnes Geschäft.'
    },
    {
      nr: 15, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Die Netzwerkplanerin Katrin Fischer verdient 2.600,00 EUR brutto im Monat, der Projektleiter Uwe Krause 5.400,00 EUR. Beide sind in derselben gesetzlichen Krankenkasse versichert. Herr Krause zahlt deshalb einen deutlich höheren Beitrag, beide erhalten bei der gleichen Erkrankung aber die gleiche Behandlung.',
      frage: 'Welches Prinzip der gesetzlichen Krankenversicherung wird hier deutlich?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Prinzip in das Kästchen ein.',
      optionen: [
        'Äquivalenzprinzip',
        'Verursacherprinzip',
        'Solidarprinzip',
        'Kapitaldeckungsprinzip',
        'Subsidiaritätsprinzip'
      ],
      loesung: 3,
      erklaerung: 'Die gesetzliche Krankenversicherung beruht auf dem Solidarprinzip (§ 1 und § 3 SGB V): Die Beiträge richten sich nach dem Einkommen bis zur Beitragsbemessungsgrenze, die Leistungen nach dem medizinischen Bedarf. Beim Äquivalenzprinzip der privaten Krankenversicherung hängt der Beitrag dagegen vom versicherten Risiko ab, z. B. von Alter und Gesundheitszustand.'
    },
    {
      nr: 16, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Beim Verlegen von Glasfaserkabeln stößt ein Kollege aus Unachtsamkeit eine Leiter um. Der Netzwerktechniker Marco Tietze stürzt und bricht sich den Arm. Er möchte von seinem Kollegen und von der Elbsand Netzwerke GmbH Schmerzensgeld.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Kollege muss Herrn Tietze den gesamten Personenschaden einschließlich Schmerzensgeld aus eigener Tasche ersetzen.',
        'Die gesetzliche Unfallversicherung erbringt die Leistungen; der Kollege und der Arbeitgeber haften für den Personenschaden grundsätzlich nicht, es sei denn, sie haben ihn vorsätzlich verursacht.',
        'Da ein Kollege den Unfall verursacht hat, besteht kein Schutz durch die gesetzliche Unfallversicherung.',
        'Der Arbeitgeber muss in jedem Fall Schmerzensgeld zahlen, weil der Unfall im Betrieb geschehen ist.',
        'Die Kosten trägt allein die private Haftpflichtversicherung von Herrn Tietze.'
      ],
      loesung: 2,
      erklaerung: 'Bei einem Arbeitsunfall leistet die gesetzliche Unfallversicherung (Berufsgenossenschaft) Heilbehandlung, Verletztengeld und gegebenenfalls Renten (§§ 26 ff. SGB VII). Im Gegenzug ist die Haftung des Unternehmers (§ 104 SGB VII) und von Kolleginnen und Kollegen desselben Betriebs (§ 105 SGB VII) für Personenschäden ausgeschlossen, außer bei Vorsatz oder bei Wegeunfällen. Dadurch bleibt der Betriebsfrieden gewahrt; ein Schmerzensgeld gibt es dann nicht. Die Beiträge zahlt allein der Arbeitgeber.'
    },
    {
      nr: 17, thema: 'umweltschutz', typ: 'einfach',
      text: 'Beim Kauf von 80 neuen Monitoren achtet die Einkäuferin Franziska Mehnert auf das Zeichen „TCO Certified“.',
      frage: 'Welche der folgenden Aussagen zum Zeichen „TCO Certified“ trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Das Zeichen „TCO Certified“ …',
      optionen: [
        'ist ein gesetzlich vorgeschriebenes Kennzeichen für alle in der EU verkauften Bildschirme.',
        'bestätigt nur, dass der Monitor die elektrischen Sicherheitsvorschriften der EU einhält.',
        'kennzeichnet Lebensmittel aus ökologischem Landbau.',
        'zeigt an, dass der Monitor ausschließlich aus recyceltem Kunststoff besteht.',
        'ist ein freiwilliges Nachhaltigkeitszertifikat für IT-Produkte, das u. a. Anforderungen an Energieeffizienz, Schadstoffe, Ergonomie und Arbeitsbedingungen in der Herstellung stellt.'
      ],
      loesung: 5,
      erklaerung: '„TCO Certified“ ist ein internationales, freiwilliges Nachhaltigkeitszertifikat für IT-Produkte wie Monitore, Notebooks und Smartphones. Geprüft werden Umweltaspekte (z. B. Energieverbrauch, gefährliche Stoffe, Lebensdauer), Ergonomie und soziale Verantwortung in der Lieferkette. Das CE-Zeichen bestätigt dagegen die Einhaltung von EU-Anforderungen, z. B. an die Produktsicherheit; verpflichtend ist für Bildschirme auch das EU-Energielabel. Nachhaltige Beschaffung unterstützt die Ziele des Kreislaufwirtschaftsgesetzes (§ 1 KrWG).'
    },
    {
      nr: 18, thema: 'umweltschutz', typ: 'einfach',
      text: 'Auf dem Dach des Rechenzentrums der Elbsand Netzwerke GmbH laufen große Rückkühler der Klimaanlage. Anwohner beschweren sich, dass das Brummen nachts in ihren Schlafzimmern zu hören ist.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Bundes-Immissionsschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die von den Rückkühlern ausgehenden Geräusche sind Emissionen, die bei den Anwohnern ankommenden Geräusche sind Immissionen.',
        'Die von den Rückkühlern ausgehenden Geräusche sind Immissionen, die bei den Anwohnern ankommenden Geräusche sind Emissionen.',
        'Geräusche sind keine Umwelteinwirkungen im Sinne des Bundes-Immissionsschutzgesetzes.',
        'Das Bundes-Immissionsschutzgesetz gilt nur für Industrieanlagen, nicht für Klimaanlagen von Bürogebäuden.',
        'Emissionen und Immissionen bezeichnen dasselbe.'
      ],
      loesung: 1,
      erklaerung: 'Emissionen sind die von einer Anlage ausgehenden Luftverunreinigungen, Geräusche, Erschütterungen, Licht, Wärme oder Strahlen (§ 3 Abs. 3 BImSchG). Immissionen sind die auf Menschen, Tiere, Pflanzen und Sachen einwirkenden Umwelteinwirkungen (§ 3 Abs. 2 BImSchG). Auch nicht genehmigungsbedürftige Anlagen müssen so betrieben werden, dass schädliche Umwelteinwirkungen verhindert bzw. auf ein Mindestmaß beschränkt werden (§ 22 BImSchG); Richtwerte für Lärm enthält die TA Lärm.'
    },
    {
      nr: 19, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Gewerkschaft fordert für die Beschäftigten der Elbsand Montage GmbH einen Tarifvertrag. Die Geschäftsführung der Tochtergesellschaft ist zu Verhandlungen bereit, will aber keinem Arbeitgeberverband beitreten.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Tarifvertrag kann nur zwischen einer Gewerkschaft und einem Arbeitgeberverband abgeschlossen werden.',
        'Statt eines Tarifvertrags kann nur der Betriebsrat mit der Geschäftsführung die Löhne verbindlich festlegen.',
        'Die Löhne der Elbsand Montage GmbH legt die zuständige IHK fest.',
        'Die Elbsand Montage GmbH kann als einzelner Arbeitgeber selbst Tarifvertragspartei sein und mit der Gewerkschaft einen Firmentarifvertrag (Haustarifvertrag) abschließen.',
        'Ohne Mitgliedschaft im Arbeitgeberverband darf die Gewerkschaft keine Tarifverhandlungen führen.'
      ],
      loesung: 4,
      erklaerung: 'Tarifvertragsparteien sind Gewerkschaften, einzelne Arbeitgeber sowie Vereinigungen von Arbeitgebern (§ 2 Abs. 1 TVG). Schließt ein einzelner Arbeitgeber einen Tarifvertrag, spricht man von einem Firmen- oder Haustarifvertrag; der Flächentarifvertrag wird dagegen mit einem Arbeitgeberverband geschlossen. Der Betriebsrat kann Arbeitsentgelte, die üblicherweise tariflich geregelt werden, nicht durch Betriebsvereinbarung regeln (§ 77 Abs. 3 BetrVG).'
    },
    {
      nr: 20, thema: 'tarifrecht', typ: 'einfach',
      text: 'Der Entgelttarifvertrag ist am 31.03. ausgelaufen. Die Verhandlungen über einen neuen Tarifvertrag laufen seit drei Wochen. Die Gewerkschaft ruft die Beschäftigten der Elbsand Netzwerke GmbH zu einem zweistündigen Warnstreik auf, ohne vorher eine Urabstimmung durchzuführen.',
      frage: 'Welche der folgenden Aussagen zu diesem Warnstreik trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Warnstreik ist rechtswidrig, weil während laufender Verhandlungen nicht gestreikt werden darf.',
        'Der Warnstreik ist erst nach einer gescheiterten Schlichtung zulässig.',
        'Der Warnstreik ist zulässig, weil die Friedenspflicht mit dem Ablauf des Tarifvertrags geendet hat; eine Urabstimmung ist dafür nicht vorgeschrieben.',
        'Für die Dauer des Warnstreiks muss der Arbeitgeber das Entgelt weiterzahlen.',
        'An einem Warnstreik dürfen nur Beschäftigte teilnehmen, die nicht Gewerkschaftsmitglied sind.'
      ],
      loesung: 3,
      erklaerung: 'Warnstreiks sind kurze, befristete Arbeitsniederlegungen, mit denen die Gewerkschaft während laufender Verhandlungen Druck aufbaut. Sie sind zulässig, sobald die Friedenspflicht des abgelaufenen Tarifvertrags endet. Das Streikrecht folgt aus der Koalitionsfreiheit (Art. 9 Abs. 3 GG); eine Urabstimmung ist gesetzlich nicht vorgeschrieben und wird nach den Satzungen der Gewerkschaften meist erst vor unbefristeten Streiks durchgeführt. Für die Streikzeit entfällt der Entgeltanspruch der Streikenden.'
    },
    {
      nr: 21, thema: 'wirtschaft-grundlagen', typ: 'zuordnung',
      text: 'Die Elbsand Netzwerke GmbH baut Glasfasernetze für sehr unterschiedliche Auftraggeber. In einer Schulung ordnen die Auszubildenden diese Betriebe nach ihrem wirtschaftlichen Ziel ein.',
      frage: 'Welche der folgenden Betriebsarten sind den nachstehenden Betrieben zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Betriebsart in das Kästchen ein. Eine Betriebsart kann mehreren Betrieben zugeordnet werden.',
      optionenTitel: 'Betriebsarten',
      optionen: [
        'Erwerbswirtschaftlicher Betrieb (Ziel: Gewinnerzielung)',
        'Gemeinwirtschaftlicher Betrieb (Ziel: Deckung eines öffentlichen Bedarfs, meist kostendeckend oder bezuschusst)',
        'Genossenschaftlicher Betrieb (Ziel: Förderung der Mitglieder)'
      ],
      itemsTitel: 'Betriebe',
      items: [
        { text: 'Die Elbsand Netzwerke GmbH', loesung: 1 },
        { text: 'Das städtische Hallenbad, dessen Eintrittspreise von der Stadt bezuschusst werden', loesung: 2 },
        { text: 'Eine Einkaufsgenossenschaft, über die Elektrohandwerker gemeinsam Material zu günstigeren Preisen beziehen', loesung: 3 },
        { text: 'Die Stadtbibliothek Dresden', loesung: 2 }
      ],
      erklaerung: 'Erwerbswirtschaftliche Betriebe streben nach Gewinn (meist private Unternehmen). Gemeinwirtschaftliche Betriebe sollen einen öffentlichen Bedarf decken; sie arbeiten kostendeckend oder werden bezuschusst (z. B. öffentliche Bäder, Bibliotheken). Genossenschaftliche Betriebe fördern den Erwerb oder die Wirtschaft ihrer Mitglieder durch gemeinschaftlichen Geschäftsbetrieb (§ 1 Abs. 1 GenG).'
    },
    {
      nr: 22, thema: 'gleichbehandlung', typ: 'mehrfach',
      text: 'Die Personalabteilung entwirft eine Stellenanzeige für den Kundendienst und prüft verschiedene Formulierungen.',
      frage: 'Welche der folgenden Formulierungen sind mit dem Allgemeinen Gleichbehandlungsgesetz (AGG) vereinbar?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Formulierungen in die Kästchen ein.',
      optionen: [
        'Servicetechniker (m/w/d) mit abgeschlossener Berufsausbildung als IT-System-Elektroniker oder Elektroniker',
        'Wir suchen einen jungen, dynamischen Servicetechniker bis 30 Jahre.',
        'Für die Kundeneinsätze ist ein Führerschein der Klasse B erforderlich.',
        'Bewerberinnen und Bewerber mit Deutsch als Muttersprache werden bevorzugt.',
        'Wir suchen eine Bürokauffrau für unser Sekretariat.',
        'Bewerbungen schwerbehinderter Menschen sind wegen der Außeneinsätze nicht erwünscht.'
      ],
      loesung: [1, 3],
      erklaerung: 'Ein Arbeitsplatz darf nicht unter Verstoß gegen das Benachteiligungsverbot ausgeschrieben werden (§ 11 i. V. m. § 7 Abs. 1 AGG). Geschützt sind u. a. Geschlecht, Alter, ethnische Herkunft und Behinderung (§ 1 AGG). „Bis 30 Jahre“, „Muttersprache Deutsch“, eine nur weibliche Stellenbezeichnung und der Ausschluss schwerbehinderter Menschen benachteiligen. Anforderungen, die sich aus der Tätigkeit ergeben, wie eine Berufsausbildung oder ein Führerschein für Kundeneinsätze, knüpfen an kein Merkmal nach § 1 AGG an oder sind durch die Tätigkeit sachlich gerechtfertigt (§ 3 Abs. 2 AGG) und daher zulässig. Ein Verstoß kann Entschädigungsansprüche auslösen (§ 15 AGG).'
    },
    {
      nr: 23, thema: 'organisation', typ: 'einfach',
      text: 'Die Geschäftsführung der Elbsand Netzwerke GmbH möchte sich künftig von einer Rechtsabteilung beraten lassen. Diese soll Entscheidungen vorbereiten, den Fachabteilungen aber keine Weisungen erteilen dürfen.',
      frage: 'Welches der folgenden Organigramme zeigt diese Form der Aufbauorganisation?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Organigramm in das Kästchen ein.',
      optionen: [
        { bild: 'org-matrix' },
        { bild: 'org-einlinien' },
        { bild: 'org-stab' },
        { bild: 'org-mehrlinien' }
      ],
      loesung: 3,
      erklaerung: 'Gesucht ist ein Stab-Linien-System: Es beruht auf dem Einliniensystem, ergänzt um Stabsstellen, die seitlich an einer Leitungsstelle angeordnet sind. Stabsstellen beraten und bereiten Entscheidungen vor, haben aber keine Weisungsbefugnis gegenüber den Linienstellen. Beim reinen Einliniensystem fehlt die Stabsstelle, beim Mehrliniensystem hat eine Stelle mehrere Vorgesetzte, die Matrixorganisation gliedert nach zwei Dimensionen. Es handelt sich um Modelle der Organisationslehre ohne gesetzliche Grundlage.'
    },
    {
      nr: 24, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Die Elbsand Netzwerke GmbH hat ein Unternehmensleitbild veröffentlicht. Darin heißt es u. a.: „Wir verbinden Sachsen zuverlässig mit schnellem Internet. Wir gehen fair mit unseren Kunden und Beschäftigten um und bauen umweltschonend.“',
      frage: 'Welche der folgenden Aussagen beschreibt ein Unternehmensleitbild zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Ein Unternehmensleitbild …',
      optionen: [
        'ist die grafische Darstellung der Abteilungen und Weisungswege.',
        'beschreibt Selbstverständnis, Werte und langfristige Ausrichtung des Unternehmens und gibt Beschäftigten und Kunden Orientierung.',
        'legt die Umsatzziele der einzelnen Vertriebsmitarbeiter für das nächste Quartal fest.',
        'ist ein gesetzlich vorgeschriebener Teil jedes Arbeitsvertrags.',
        'ist die Auflistung aller Kosten des Unternehmens für das kommende Jahr.'
      ],
      loesung: 2,
      erklaerung: 'Ein Leitbild fasst das Selbstverständnis eines Unternehmens zusammen: Zweck (Mission), Zukunftsbild (Vision) und Werte. Es ist meist allgemein formuliert und dient als Orientierungsrahmen, aus dem konkrete, messbare Ziele abgeleitet werden. Das Organigramm zeigt dagegen die Aufbauorganisation, Budgets und Umsatzvorgaben sind operative Planungen. Eine gesetzliche Pflicht zu einem Leitbild gibt es nicht.'
    },
    {
      nr: 25, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'In den Sommerferien möchten mehrere Schülerinnen und Schüler im Lager der Elbsand Netzwerke GmbH aushelfen. Die Personalabteilung prüft, wer nach dem Jugendarbeitsschutzgesetz als Kind und wer als Jugendlicher gilt.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Jugendarbeitsschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jugendlicher ist, wer 14, aber noch nicht 21 Jahre alt ist.',
        'Das Jugendarbeitsschutzgesetz gilt nur für Auszubildende, nicht für Ferienjobs.',
        'Für 17-Jährige gelten dieselben Regeln wie für Erwachsene.',
        'Kind ist, wer noch nicht 12 Jahre alt ist.',
        'Kind ist, wer noch nicht 15 Jahre alt ist; Jugendlicher ist, wer 15, aber noch nicht 18 Jahre alt ist. Für Jugendliche, die noch vollzeitschulpflichtig sind, gelten die Vorschriften für Kinder.'
      ],
      loesung: 5,
      erklaerung: '§ 2 JArbSchG: Kind ist, wer noch nicht 15 Jahre alt ist (Abs. 1), Jugendlicher, wer 15, aber noch nicht 18 Jahre alt ist (Abs. 2). Auf Jugendliche, die der Vollzeitschulpflicht unterliegen, finden die für Kinder geltenden Vorschriften Anwendung (Abs. 3). Das Gesetz gilt für alle Beschäftigungen von Personen unter 18 Jahren, also auch für Ferienjobs (§ 1 JArbSchG). Die Beschäftigung von Kindern ist grundsätzlich verboten (§ 5 JArbSchG).'
    },
    {
      nr: 26, thema: 'rechtsquellen', typ: 'einfach',
      text: 'Der Netzwerktechniker Marco Tietze ist auf dem Weg zu einem Kunden mit dem Firmenwagen verunglückt. Die Berufsgenossenschaft lehnt es ab, den Unfall als Arbeitsunfall anzuerkennen. Auch sein Widerspruch wurde zurückgewiesen. Herr Tietze möchte klagen.',
      frage: 'Welches Gericht ist für seine Klage zuständig?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Gericht in das Kästchen ein.',
      optionen: [
        'Das Arbeitsgericht',
        'Das Amtsgericht',
        'Das Verwaltungsgericht',
        'Das Sozialgericht',
        'Das Landgericht'
      ],
      loesung: 4,
      erklaerung: 'Die Sozialgerichte entscheiden über Streitigkeiten in Angelegenheiten der Sozialversicherung, also auch der gesetzlichen Unfallversicherung (§ 51 Abs. 1 SGG). Vor der Klage muss in der Regel ein Widerspruchsverfahren durchgeführt werden (§ 78 SGG). Die Arbeitsgerichte sind dagegen für Streitigkeiten zwischen Arbeitnehmern und Arbeitgebern aus dem Arbeitsverhältnis zuständig (§ 2 ArbGG).'
    },
    {
      nr: 27, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Elbsand Netzwerke GmbH erzielte im Geschäftsjahr 2026 Umsatzerlöse von 24.800.000,00 EUR. Im Jahresdurchschnitt waren 160 Mitarbeiterinnen und Mitarbeiter beschäftigt.',
      frage: 'Berechnen Sie den Umsatz je Mitarbeiter in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 155000, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Umsatz je Mitarbeiter = Umsatzerlöse ÷ Zahl der Beschäftigten = 24.800.000,00 EUR ÷ 160 = 155.000,00 EUR. Die Kennzahl misst die Leistungskraft des Personals und eignet sich für Vergleiche mit Vorjahren oder anderen Unternehmen der Branche.'
    },
    {
      nr: 28, thema: 'konjunktur', typ: 'einfach',
      text: 'Die Geschäftsführung will wissen, in welcher Konjunkturphase sich die Wirtschaft befindet.',
      frage: 'In welcher der folgenden Konjunkturphasen befindet sich die Wirtschaft anhand der Angaben in der Spalte „Aktuelles Jahr“?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Konjunkturphase in das Kästchen ein.',
      optionen: [
        'Aufschwung (Expansion)',
        'Hochkonjunktur (Boom)',
        'Abschwung',
        'Tiefstand (Depression)',
        'Überhitzung mit stark steigenden Preisen'
      ],
      loesung: 4,
      erklaerung: 'Die Wirtschaftsleistung schrumpft nur noch leicht, Arbeitslosigkeit und Unterauslastung sind hoch, Preise und Zinsen sehr niedrig: Die Wirtschaft befindet sich in der Talsohle. Merkmale des Tiefstands (Depression): kaum noch schrumpfende oder stagnierende Wirtschaftsleistung, hohe Arbeitslosigkeit, stark unterausgelastete Kapazitäten, kaum noch steigende Preise, sehr niedrige Zinsen und pessimistische Erwartungen. Im Abschwung lassen Wachstum und Auslastung erst nach, die Preise steigen meist noch. Die Konjunkturentwicklung ist Grundlage der Wirtschaftspolitik nach dem Stabilitäts- und Wachstumsgesetz (§ 1 StabG).'
    },
    {
      nr: 29, thema: 'datenschutz', typ: 'einfach',
      text: 'Ein Angreifer verschafft sich Zugang zum Buchhaltungssystem der Elbsand Netzwerke GmbH und ändert unbemerkt die Bankverbindung in einer gespeicherten Lieferantenrechnung.',
      frage: 'Welches Schutzziel der Informationssicherheit ist durch die Manipulation in erster Linie verletzt?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Schutzziel in das Kästchen ein.',
      optionen: [
        'Vertraulichkeit',
        'Verfügbarkeit',
        'Integrität',
        'Datenminimierung',
        'Zweckbindung'
      ],
      loesung: 3,
      erklaerung: 'Die klassischen Schutzziele der Informationssicherheit sind Vertraulichkeit (nur Befugte haben Zugriff), Integrität (Daten sind vollständig und unverfälscht) und Verfügbarkeit (Daten und Systeme stehen bei Bedarf zur Verfügung). Die unbemerkte Änderung der Bankverbindung verletzt vor allem die Integrität. Art. 32 Abs. 1 Buchst. b DSGVO verlangt Maßnahmen zur Sicherstellung dieser Schutzziele. Datenminimierung und Zweckbindung sind Grundsätze der Datenverarbeitung nach Art. 5 DSGVO.'
    },
    {
      nr: 30, thema: 'weiterbildung', typ: 'einfach',
      text: 'Die IT-System-Elektronikerin Melanie Kunze möchte sich nach ihrer Ausbildung bei einem Netzbetreiber in Österreich bewerben. Ihr Ausbilder empfiehlt ihr den Europass.',
      frage: 'Welche der folgenden Aussagen zum Europass trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Mit dem Europass kann Frau Kunze ihre Qualifikationen und Kompetenzen europaweit verständlich darstellen, z. B. mit dem Europass-Lebenslauf und einer Zeugniserläuterung zu ihrem Berufsabschluss.',
        'Der Europass ersetzt den Reisepass bei Reisen innerhalb der EU.',
        'Der Europass ist eine Arbeitserlaubnis, ohne die Frau Kunze in Österreich nicht arbeiten darf.',
        'Mit dem Europass werden alle ausländischen Abschlüsse automatisch als gleichwertig anerkannt.',
        'Den Europass erhalten nur Studierende an Hochschulen.'
      ],
      loesung: 1,
      erklaerung: 'Der Europass ist ein Angebot der EU, um Qualifikationen und Kompetenzen in Europa transparent und vergleichbar darzustellen (Beschluss (EU) 2018/646). Dazu gehören u. a. der Europass-Lebenslauf, Zeugniserläuterungen zu beruflichen Abschlüssen, der Diplomzusatz für Hochschulabschlüsse und der Europass Mobilität für Lern- und Arbeitsaufenthalte im Ausland. Eine Arbeitserlaubnis ist für EU-Bürger wegen der Arbeitnehmerfreizügigkeit nicht nötig (Art. 45 AEUV). Eine automatische Anerkennung von Abschlüssen bewirkt der Europass nicht.'
    }
  ]
});
