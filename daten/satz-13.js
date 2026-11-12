// Übungssatz 13 – eigene Aufgaben im Stil der BITLC-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-13',
  titel: 'Übungssatz 13',
  untertitel: 'Feldberg Datentechnik GmbH',
  ausgangssituation:
    'Die Feldberg Datentechnik GmbH mit Sitz in Freiburg im Breisgau ist ein IT-Dienstleister für IT-Sicherheit und Managed Security. Sie überwacht die Netzwerke mittelständischer Kunden rund um die Uhr in einem Security Operations Center, führt Penetrationstests durch und berät bei Datenschutz und IT-Sicherheit. Das Unternehmen beschäftigt 230 Arbeitnehmerinnen und Arbeitnehmer in zwei Betrieben, in Freiburg und in Karlsruhe. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 3,
      text: 'Die Feldberg Datentechnik GmbH bildet Fachinformatikerinnen und Fachinformatiker für Systemintegration sowie Kaufleute für Digitalisierungsmanagement aus. Ausbildungsleiterin ist Ricarda Hummel. Zu den Auszubildenden gehören der 17-jährige Leon Bühler und die 19-jährige Elena Sutter.'
    },
    {
      von: 4, bis: 6,
      text: 'Im Betrieb Freiburg sind 180, im Betrieb Karlsruhe 50 Arbeitnehmerinnen und Arbeitnehmer beschäftigt. In Freiburg besteht ein Betriebsrat mit sieben Mitgliedern, Vorsitzender ist Matthias Kirner. In Karlsruhe besteht ein Betriebsrat mit drei Mitgliedern.'
    },
    {
      von: 7, bis: 9,
      text: 'Die Personalabteilung der Feldberg Datentechnik GmbH wird von Dagmar Ortlieb geleitet. Sie beantwortet regelmäßig Fragen der Beschäftigten zum Arbeitsrecht.'
    },
    {
      von: 10, bis: 12,
      text: 'Gregor Wehrle ist Fachkraft für Arbeitssicherheit der Feldberg Datentechnik GmbH. Er bereitet den jährlichen Arbeitsschutzbericht für die Geschäftsführung vor.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'ausbildung', typ: 'zuordnung',
      text: 'Frau Hummel erklärt den neuen Auszubildenden, welche Pläne und Vorschriften den Inhalt ihrer Ausbildung festlegen.',
      frage: 'Welche der folgenden Grundlagen der Berufsausbildung sind den nachstehenden Beschreibungen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Grundlage in das Kästchen ein.',
      optionenTitel: 'Grundlagen der Berufsausbildung',
      optionen: [
        'Ausbildungsordnung',
        'Ausbildungsrahmenplan',
        'Rahmenlehrplan',
        'Betrieblicher Ausbildungsplan'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Rechtsverordnung des Bundes, die unter anderem die Bezeichnung des Berufs, die Ausbildungsdauer und die Prüfungsanforderungen festlegt', loesung: 1 },
        { text: 'Von der Kultusministerkonferenz beschlossene Lernfelder für den Unterricht in der Berufsschule', loesung: 3 },
        { text: 'Anlage zur Ausbildungsordnung mit der sachlichen und zeitlichen Gliederung der Fertigkeiten, Kenntnisse und Fähigkeiten, die im Betrieb zu vermitteln sind', loesung: 2 },
        { text: 'Plan der Feldberg Datentechnik GmbH, der festlegt, in welcher Abteilung Leon Bühler wann welche Inhalte lernt', loesung: 4 }
      ],
      erklaerung: 'Die Ausbildungsordnung ist eine Rechtsverordnung des Bundes; sie legt mindestens Bezeichnung, Ausbildungsdauer, Ausbildungsberufsbild, Ausbildungsrahmenplan und Prüfungsanforderungen fest (§ 5 Abs. 1 BBiG). Der Ausbildungsrahmenplan ist ihre Anlage und gliedert die im Betrieb zu vermittelnden Inhalte sachlich und zeitlich. Der Ausbildungsbetrieb setzt ihn in einen betrieblichen Ausbildungsplan um, der Teil der Vertragsniederschrift ist (§ 11 Abs. 1 Satz 2 Nr. 1 BBiG). Für die Berufsschule gilt der Rahmenlehrplan der Kultusministerkonferenz, der mit der Ausbildungsordnung abgestimmt ist (duales System).'
    },
    {
      nr: 2, thema: 'ausbildung', typ: 'einfach',
      text: 'Der Ausbildungsberater der Industrie- und Handelskammer kündigt bei Frau Hummel einen Besuch im Betrieb Freiburg an. Er möchte sich die Ausbildungsplätze ansehen und mit den Auszubildenden sprechen.',
      frage: 'Welche der folgenden Aussagen zur Tätigkeit des Ausbildungsberaters trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Ausbildungsberater ist ein Beschäftigter der Agentur für Arbeit und vermittelt freie Ausbildungsplätze.',
        'Der Besuch ist nur mit vorheriger Zustimmung des Betriebsrats zulässig.',
        'Der Ausbildungsberater berät Ausbildungsbetriebe und Auszubildende und überwacht für die BITLC die Durchführung der Ausbildung; der Betrieb muss ihm die erforderlichen Auskünfte erteilen und die Besichtigung der Ausbildungsstätte gestatten.',
        'Der Ausbildungsberater darf den Ausbildungsvertrag eigenmächtig kündigen, wenn er Mängel feststellt.',
        'Der Ausbildungsberater ist Mitglied des Prüfungsausschusses und nimmt bei seinem Besuch die Zwischenprüfung ab.'
      ],
      loesung: 3,
      erklaerung: 'Die zuständige Stelle, für IT-Berufe die BITLC, überwacht die Durchführung der Berufsausbildung und fördert sie durch Beratung der Ausbildenden und der Auszubildenden; dazu bestellt sie Ausbildungsberaterinnen und -berater (§ 76 Abs. 1 BBiG). Ausbildende müssen die für die Überwachung notwendigen Auskünfte erteilen, Unterlagen vorlegen und die Besichtigung der Ausbildungsstätten gestatten (§ 76 Abs. 2 BBiG). Kündigen können nur die Vertragsparteien (§ 22 BBiG). Berufsberatung und Vermittlung von Ausbildungsplätzen sind Aufgaben der Agentur für Arbeit.'
    },
    {
      nr: 3, thema: 'ausbildung', typ: 'einfach',
      text: 'Die Auszubildende Elena Sutter ist seit acht Monaten in der Ausbildung und hat in den letzten Wochen trotz Abmahnungen mehrfach unentschuldigt gefehlt. Ein Teamleiter schickt ihr abends über einen Messenger-Dienst die Nachricht: „Hiermit kündigen wir Ihr Ausbildungsverhältnis fristlos.“ Gründe nennt er nicht.',
      frage: 'Welche der folgenden Aussagen zu dieser Kündigung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Kündigung ist wirksam, weil Messenger-Nachrichten heute der Schriftform gleichgestellt sind.',
        'Die Kündigung ist wirksam, weil nach der Probezeit jederzeit ohne Angabe von Gründen gekündigt werden kann.',
        'Die Kündigung ist wirksam, sobald Frau Sutter die Nachricht gelesen hat.',
        'Die Kündigung ist unwirksam: Sie muss schriftlich mit eigenhändiger Unterschrift erfolgen und nach der Probezeit die Kündigungsgründe angeben.',
        'Die Kündigung ist unwirksam, weil Auszubildenden nach der Probezeit überhaupt nicht mehr gekündigt werden kann.'
      ],
      loesung: 4,
      erklaerung: '§ 22 Abs. 3 BBiG: Die Kündigung muss schriftlich und nach der Probezeit unter Angabe der Kündigungsgründe erfolgen. Schriftlich heißt mit eigenhändiger Unterschrift (§ 126 BGB); eine Messenger-Nachricht wahrt diese Form nicht, die Kündigung ist nichtig (§ 125 BGB). Nach der Probezeit kann der Ausbildungsbetrieb nur aus wichtigem Grund ohne Einhalten einer Frist kündigen (§ 22 Abs. 2 Nr. 1 BBiG); wiederholtes unentschuldigtes Fehlen trotz Abmahnung kann ein solcher Grund sein. Die Kündigung muss dann innerhalb von zwei Wochen nach Bekanntwerden der Gründe zugehen (§ 22 Abs. 4 BBiG).'
    },
    {
      nr: 4, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Personalabteilung möchte für alle Bewerbungen einen einheitlichen Bewerberfragebogen einführen. Darin soll unter anderem nach Zertifizierungen, Sprachkenntnissen und einschlägigen Vorstrafen gefragt werden. Der Betriebsratsvorsitzende Matthias Kirner hat Bedenken gegen einzelne Fragen.',
      frage: 'Welche der folgenden Aussagen zur Beteiligung des Betriebsrats trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Betriebsrat muss über den Fragebogen nur informiert werden; die Personalabteilung entscheidet allein über den Inhalt.',
        'Personalfragebogen bedürfen der Zustimmung des Betriebsrats; kommt keine Einigung zustande, entscheidet die Einigungsstelle.',
        'Der Betriebsrat darf den Fragebogen allein entwerfen und allen Bewerbern verbindlich vorschreiben.',
        'Über den Inhalt des Fragebogens entscheidet die Industrie- und Handelskammer.',
        'Ein Bewerberfragebogen ist in Betrieben mit Betriebsrat grundsätzlich verboten.'
      ],
      loesung: 2,
      erklaerung: '§ 94 Abs. 1 BetrVG: Personalfragebogen bedürfen der Zustimmung des Betriebsrats. Kommt eine Einigung über ihren Inhalt nicht zustande, entscheidet die Einigungsstelle; ihr Spruch ersetzt die Einigung zwischen Arbeitgeber und Betriebsrat. Dasselbe gilt für allgemeine Beurteilungsgrundsätze (§ 94 Abs. 2 BetrVG). Unabhängig davon dürfen nur Fragen gestellt werden, an deren Beantwortung der Arbeitgeber ein berechtigtes Interesse hat; nach Vorstrafen darf nur gefragt werden, soweit sie für die Tätigkeit von Bedeutung sind.'
    },
    {
      nr: 5, thema: 'mitbestimmung', typ: 'mehrfach',
      text: 'Die Geschäftsführung beabsichtigt, dem Systemadministrator Marco Dold aus dem Betrieb Freiburg aus betriebsbedingten Gründen ordentlich zu kündigen, und hört den Betriebsrat an. Herr Kirner prüft, ob der Betriebsrat der Kündigung widersprechen kann.',
      frage: 'Aus welchen der folgenden Gründe kann der Betriebsrat der ordentlichen Kündigung nach dem Betriebsverfassungsgesetz widersprechen?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Gründen in die Kästchen ein.',
      optionen: [
        'Herr Dold ist Mitglied einer Gewerkschaft.',
        'Bei der Auswahl des zu kündigenden Arbeitnehmers wurden soziale Gesichtspunkte nicht ausreichend berücksichtigt.',
        'Der Betriebsrat hält Herrn Dold für einen besonders hilfsbereiten Kollegen.',
        'Die Kündigung soll im Dezember ausgesprochen werden.',
        'Herr Dold kann an einem freien Arbeitsplatz im Betrieb Karlsruhe weiterbeschäftigt werden.',
        'Herr Dold ist erst seit drei Jahren im Unternehmen beschäftigt.'
      ],
      loesung: [2, 5],
      erklaerung: '§ 102 Abs. 3 BetrVG nennt die Widerspruchsgründe abschließend: soziale Gesichtspunkte bei der Auswahl nicht oder nicht ausreichend berücksichtigt (Nr. 1), Verstoß gegen eine Auswahlrichtlinie (Nr. 2), Weiterbeschäftigung an einem anderen Arbeitsplatz im selben Betrieb oder in einem anderen Betrieb des Unternehmens möglich (Nr. 3), Weiterbeschäftigung nach zumutbaren Umschulungs- oder Fortbildungsmaßnahmen (Nr. 4) oder unter geänderten Vertragsbedingungen mit Einverständnis des Arbeitnehmers (Nr. 5). Der Widerspruch ist innerhalb einer Woche schriftlich mit Gründen einzulegen (§ 102 Abs. 2 BetrVG). Er verhindert die Kündigung nicht; erhebt Herr Dold aber Kündigungsschutzklage, muss er auf sein Verlangen bis zum rechtskräftigen Abschluss des Rechtsstreits weiterbeschäftigt werden (§ 102 Abs. 5 BetrVG).'
    },
    {
      nr: 6, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Weil in beiden Betrieben der Feldberg Datentechnik GmbH ein Betriebsrat besteht, wird über die Bildung eines Gesamtbetriebsrats gesprochen.',
      frage: 'Welche der folgenden Aussagen zum Gesamtbetriebsrat trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Gesamtbetriebsrat wird nur gebildet, wenn die Geschäftsführung zustimmt.',
        'Der Gesamtbetriebsrat wird von allen Beschäftigten des Unternehmens in einer gemeinsamen Wahl gewählt.',
        'Der Gesamtbetriebsrat ist den einzelnen Betriebsräten übergeordnet und kann ihnen Weisungen erteilen.',
        'Der Gesamtbetriebsrat ersetzt die Betriebsräte in Freiburg und Karlsruhe, die danach aufgelöst werden.',
        'Ein Gesamtbetriebsrat ist zu errichten; der Betriebsrat Freiburg entsendet zwei, der Betriebsrat Karlsruhe ein Mitglied. Er ist für Angelegenheiten zuständig, die das ganze Unternehmen betreffen und nicht innerhalb der einzelnen Betriebe geregelt werden können.'
      ],
      loesung: 5,
      erklaerung: '§ 47 Abs. 1 BetrVG: Bestehen in einem Unternehmen mehrere Betriebsräte, ist ein Gesamtbetriebsrat zu errichten. Jeder Betriebsrat mit bis zu drei Mitgliedern entsendet eines, jeder Betriebsrat mit mehr als drei Mitgliedern zwei seiner Mitglieder (§ 47 Abs. 2 BetrVG). Der Gesamtbetriebsrat ist zuständig für Angelegenheiten, die das Gesamtunternehmen oder mehrere Betriebe betreffen und nicht durch die einzelnen Betriebsräte innerhalb ihrer Betriebe geregelt werden können; er ist den Betriebsräten nicht übergeordnet (§ 50 Abs. 1 BetrVG).'
    },
    {
      nr: 7, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Der Netzwerktechniker Tim Ketterer hat am 01.03.2027 bei der Feldberg Datentechnik GmbH angefangen. In seiner zweiten Arbeitswoche erkrankt er an einer Grippe und ist zehn Tage arbeitsunfähig. Er ist gesetzlich krankenversichert.',
      frage: 'Welche der folgenden Aussagen zur Fortzahlung seines Arbeitsentgelts trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Einen Anspruch auf Entgeltfortzahlung gegen den Arbeitgeber hat Herr Ketterer erst nach vierwöchiger ununterbrochener Dauer des Arbeitsverhältnisses; für die Zeit davor kann er Krankengeld von seiner Krankenkasse erhalten.',
        'Die Feldberg Datentechnik GmbH muss das Entgelt vom ersten Tag des Arbeitsverhältnisses an für bis zu sechs Wochen fortzahlen.',
        'Herr Ketterer erhält für die zehn Tage weder Entgelt noch Krankengeld.',
        'Die Feldberg Datentechnik GmbH darf das Arbeitsverhältnis wegen der Erkrankung fristlos kündigen.',
        'Die Berufsgenossenschaft zahlt für die zehn Tage Verletztengeld.'
      ],
      loesung: 1,
      erklaerung: '§ 3 Abs. 3 EFZG: Der Anspruch auf Entgeltfortzahlung im Krankheitsfall entsteht erst nach vierwöchiger ununterbrochener Dauer des Arbeitsverhältnisses (Wartezeit). Für Krankheitszeiten in den ersten vier Wochen zahlt der Arbeitgeber nichts; gesetzlich Versicherte erhalten dann Krankengeld von der Krankenkasse (§§ 44, 46 SGB V). Dauert die Arbeitsunfähigkeit über die Wartezeit hinaus, zahlt der Arbeitgeber ab dann bis zu sechs Wochen. Eine Erkrankung ist kein Grund für eine fristlose Kündigung; die Berufsgenossenschaft ist nur bei Arbeits- und Wegeunfällen sowie Berufskrankheiten zuständig.'
    },
    {
      nr: 8, thema: 'arbeitsvertrag', typ: 'zahl',
      text: 'Der Projektleiter Benjamin Rombach ist seit dem 01.02.2019 bei der Feldberg Datentechnik GmbH beschäftigt und verdient monatlich 4.200,00 EUR brutto. Wegen der Schließung seiner Abteilung kündigt ihm die Geschäftsführung betriebsbedingt zum 31.08.2027. Im Kündigungsschreiben weist sie darauf hin, dass die Kündigung auf dringende betriebliche Erfordernisse gestützt ist und er bei Verstreichenlassen der Klagefrist eine Abfindung beanspruchen kann. Herr Rombach erhebt keine Kündigungsschutzklage.',
      kasten: {
        titel: '§ 1a KSchG Abfindungsanspruch bei betriebsbedingter Kündigung (Auszug)',
        absaetze: [
          '(1) Kündigt der Arbeitgeber wegen dringender betrieblicher Erfordernisse nach § 1 Abs. 2 Satz 1 und erhebt der Arbeitnehmer bis zum Ablauf der Frist des § 4 Satz 1 keine Klage auf Feststellung, dass das Arbeitsverhältnis durch die Kündigung nicht aufgelöst ist, hat der Arbeitnehmer mit dem Ablauf der Kündigungsfrist Anspruch auf eine Abfindung. …',
          '(2) Die Höhe der Abfindung beträgt 0,5 Monatsverdienste für jedes Jahr des Bestehens des Arbeitsverhältnisses. … Bei der Ermittlung der Dauer des Arbeitsverhältnisses ist ein Zeitraum von mehr als sechs Monaten auf ein volles Jahr aufzurunden.'
        ]
      },
      frage: 'Berechnen Sie die Abfindung, die Herr Rombach beanspruchen kann, in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 18900, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Das Arbeitsverhältnis besteht vom 01.02.2019 bis zum 31.08.2027, also 8 Jahre und 7 Monate. Der Zeitraum von mehr als sechs Monaten wird auf ein volles Jahr aufgerundet, es zählen 9 Jahre (§ 1a Abs. 2 KSchG). Abfindung = 0,5 × 4.200,00 EUR × 9 = 18.900,00 EUR. Voraussetzung sind der Hinweis im Kündigungsschreiben und dass Herr Rombach die dreiwöchige Klagefrist verstreichen lässt (§ 1a Abs. 1 KSchG); der Anspruch entsteht mit Ablauf der Kündigungsfrist.'
    },
    {
      nr: 9, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Mutter der Softwaretesterin Lara Vögele erleidet einen Schlaganfall und ist plötzlich auf Pflege angewiesen. Frau Vögele muss kurzfristig die Pflege organisieren und teilt dies Frau Ortlieb am Morgen telefonisch mit.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Pflegezeitgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Vögele muss für die Organisation der Pflege ihren Jahresurlaub einsetzen.',
        'Frau Vögele darf der Arbeit nur fernbleiben, wenn das Unternehmen mehr als 250 Beschäftigte hat und der Betriebsrat zustimmt.',
        'Frau Vögele darf bis zu zehn Arbeitstage der Arbeit fernbleiben, um die Pflege zu organisieren oder sicherzustellen; als Lohnersatz kann sie Pflegeunterstützungsgeld bei der Pflegekasse beantragen.',
        'Frau Vögele hat sofort Anspruch auf eine bezahlte Freistellung von sechs Monaten.',
        'Die Feldberg Datentechnik GmbH darf ihr wegen der Pflegesituation fristlos kündigen.'
      ],
      loesung: 3,
      erklaerung: '§ 2 Abs. 1 PflegeZG: Beschäftigte haben das Recht, bis zu zehn Arbeitstage der Arbeit fernzubleiben, wenn dies erforderlich ist, um für einen pflegebedürftigen nahen Angehörigen in einer akut aufgetretenen Pflegesituation eine bedarfsgerechte Pflege zu organisieren oder die pflegerische Versorgung sicherzustellen; das gilt unabhängig von der Betriebsgröße. Die Verhinderung und ihre voraussichtliche Dauer sind unverzüglich mitzuteilen, auf Verlangen ist eine ärztliche Bescheinigung vorzulegen (§ 2 Abs. 2 PflegeZG). Besteht kein Entgeltanspruch gegen den Arbeitgeber, zahlt die Pflegekasse Pflegeunterstützungsgeld (§ 44a Abs. 3 SGB XI). Die längere Pflegezeit von bis zu sechs Monaten ist unbezahlt und gilt nur bei Arbeitgebern mit mehr als 15 Beschäftigten (§ 3 PflegeZG). Ab der Ankündigung besteht Kündigungsschutz (§ 5 PflegeZG).'
    },
    {
      nr: 10, thema: 'arbeitsschutz', typ: 'zuordnung',
      text: 'Herr Wehrle erklärt den Auszubildenden, dass der Arbeitsschutz in Deutschland auf zwei Säulen beruht.',
      frage: 'Welche der folgenden Träger des Arbeitsschutzes sind den nachstehenden Aussagen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Träger in das Kästchen ein.',
      optionenTitel: 'Träger des Arbeitsschutzes',
      optionen: [
        'Staatliche Arbeitsschutzbehörde des Landes (z. B. Gewerbeaufsicht)',
        'Unfallversicherungsträger (Berufsgenossenschaft)'
      ],
      itemsTitel: 'Aussagen',
      items: [
        { text: 'Überwacht als staatliche Aufgabe die Einhaltung des Arbeitsschutzgesetzes und kann bei Verstößen gegen die Arbeitsstättenverordnung Anordnungen treffen.', loesung: 1 },
        { text: 'Erlässt Unfallverhütungsvorschriften, z. B. die DGUV Vorschrift 1 „Grundsätze der Prävention“.', loesung: 2 },
        { text: 'Erbringt nach einem Arbeitsunfall Leistungen zur Heilbehandlung und Rehabilitation.', loesung: 2 },
        { text: 'Wird von den Ländern getragen und setzt Gesetze und Verordnungen des Staates durch.', loesung: 1 }
      ],
      erklaerung: 'Der Arbeitsschutz in Deutschland ist dual organisiert. Die Überwachung des Arbeitsschutzes nach dem Arbeitsschutzgesetz ist staatliche Aufgabe der Länder (§ 21 Abs. 1 ArbSchG); die zuständige Behörde kann die erforderlichen Maßnahmen anordnen (§ 22 Abs. 3 ArbSchG). Die Unfallversicherungsträger, für Unternehmen die Berufsgenossenschaften, erlassen Unfallverhütungsvorschriften (§ 15 SGB VII), überwachen und beraten durch Aufsichtspersonen (§ 17 SGB VII) und erbringen nach Arbeitsunfällen Heilbehandlung, Rehabilitation und Geldleistungen (§ 26 SGB VII). Sie werden allein durch Beiträge der Arbeitgeber finanziert.'
    },
    {
      nr: 11, thema: 'arbeitsschutz', typ: 'zahl',
      text: 'Für den Arbeitsschutzbericht wertet Herr Wehrle die Unfallzahlen aus. Im Jahr 2026 ereigneten sich in der Feldberg Datentechnik GmbH 5 meldepflichtige Arbeitsunfälle (ohne Wegeunfälle). Die 230 Beschäftigten entsprechen umgerechnet 200 Vollarbeitern.',
      frage: 'Berechnen Sie die Unfallquote (meldepflichtige Arbeitsunfälle je 1.000 Vollarbeiter).',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie auf eine Nachkommastelle.',
      loesung: 25, nachkommastellen: 1, einheit: 'je 1.000 Vollarbeiter',
      erklaerung: 'Unfallquote = meldepflichtige Arbeitsunfälle × 1.000 ÷ Vollarbeiter = 5 × 1.000 ÷ 200 = 25,0. Meldepflichtig sind Arbeitsunfälle, die zum Tod oder zu mehr als drei Tagen Arbeitsunfähigkeit führen (§ 193 Abs. 1 SGB VII). Mit dieser Quote lassen sich Betriebe unterschiedlicher Größe und verschiedene Jahre vergleichen; die Umrechnung auf Vollarbeiter berücksichtigt Teilzeitbeschäftigte.'
    },
    {
      nr: 12, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Der Servicetechniker Julian Faller kommt nach einer privaten Feier am Morgen erkennbar alkoholisiert zur Arbeit. Er soll an diesem Tag bei einem Kunden Server in ein Rack einbauen und dafür auf einer Leiter arbeiten.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Faller darf arbeiten, solange er selbst erklärt, dass er sich fit fühlt.',
        'Der Vorgesetzte darf Herrn Faller mit dieser Arbeit nicht beschäftigen, weil er erkennbar nicht in der Lage ist, sie ohne Gefahr für sich oder andere auszuführen.',
        'Alkohol am Arbeitsplatz ist erst ab einem Blutalkoholwert von 1,1 Promille verboten.',
        'Der Vorgesetzte muss sofort die Polizei rufen, die über den Arbeitseinsatz entscheidet.',
        'Herr Faller darf weiterarbeiten, weil er den Alkohol in seiner Freizeit getrunken hat.'
      ],
      loesung: 2,
      erklaerung: 'Versicherte dürfen sich durch Alkohol, Drogen oder andere berauschende Mittel nicht in einen Zustand versetzen, durch den sie sich selbst oder andere gefährden können (§ 15 Abs. 2 DGUV Vorschrift 1). Der Unternehmer darf Versicherte, die erkennbar nicht in der Lage sind, eine Arbeit ohne Gefahr für sich oder andere auszuführen, mit dieser Arbeit nicht beschäftigen (§ 7 Abs. 2 DGUV Vorschrift 1). Eine allgemeine Promillegrenze für die Arbeit gibt es nicht; viele Betriebe regeln den Umgang mit Alkohol in einer Betriebsvereinbarung (§ 87 Abs. 1 Nr. 1 BetrVG). Ein Unfall, der wesentlich auf Alkohol beruht, kann den Schutz der gesetzlichen Unfallversicherung gefährden.'
    },
    {
      nr: 13, thema: 'rechtsformen', typ: 'einfach',
      text: 'Die Security-Analysten Patrick Gutmann und Ines Hug wollen sich mit einem Unternehmen für Penetrationstests selbstständig machen. Sie verfügen zusammen über 6.000,00 EUR Eigenkapital und möchten nicht mit ihrem Privatvermögen für die Schulden des Unternehmens haften.',
      frage: 'Welche der folgenden Rechtsformen erfüllt ihre Anforderungen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Rechtsform in das Kästchen ein.',
      optionen: [
        'Offene Handelsgesellschaft (OHG)',
        'Gesellschaft bürgerlichen Rechts (GbR)',
        'Gesellschaft mit beschränkter Haftung (GmbH) mit dem gesetzlichen Mindeststammkapital',
        'Aktiengesellschaft (AG)',
        'Unternehmergesellschaft (haftungsbeschränkt)'
      ],
      loesung: 5,
      erklaerung: 'Bei OHG und GbR haften die Gesellschafter persönlich und unbeschränkt (§ 126 HGB, § 721 BGB). GmbH und AG haften nur mit dem Gesellschaftsvermögen, verlangen aber ein Mindestkapital von 25.000,00 EUR (§ 5 Abs. 1 GmbHG) bzw. 50.000,00 EUR (§ 7 AktG), das die Gründer nicht aufbringen können. Die Unternehmergesellschaft (haftungsbeschränkt) ist eine Variante der GmbH, die mit einem Stammkapital ab 1 EUR gegründet werden kann; das Stammkapital muss vor der Anmeldung voll eingezahlt sein, und ein Viertel des Jahresüberschusses ist in eine gesetzliche Rücklage einzustellen (§ 5a GmbHG).'
    },
    {
      nr: 14, thema: 'rechtsformen', typ: 'einfach',
      text: 'Die Feldberg Datentechnik GmbH gründet zusammen mit der Rheintal Hosting AG die Feldberg Cloud GmbH. Das Stammkapital beträgt 40.000,00 EUR. Jede Gesellschafterin übernimmt einen Geschäftsanteil von 20.000,00 EUR und leistet ihn als Geldeinlage. Vor der Anmeldung zum Handelsregister soll nur das gesetzliche Minimum eingezahlt werden.',
      frage: 'Welcher Betrag muss vor der Anmeldung zum Handelsregister insgesamt mindestens eingezahlt sein?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Betrag in das Kästchen ein.',
      optionen: [
        '10.000,00 EUR',
        '12.500,00 EUR',
        '20.000,00 EUR',
        '25.000,00 EUR',
        '40.000,00 EUR'
      ],
      loesung: 2,
      erklaerung: '§ 7 Abs. 2 GmbHG: Die Anmeldung darf erst erfolgen, wenn auf jeden Geschäftsanteil mindestens ein Viertel des Nennbetrags eingezahlt ist; insgesamt müssen die eingezahlten Geldeinlagen mindestens die Hälfte des Mindeststammkapitals von 25.000,00 EUR erreichen, also 12.500,00 EUR. Ein Viertel je Anteil ergibt hier nur 2 × 5.000,00 EUR = 10.000,00 EUR; deshalb sind insgesamt mindestens 12.500,00 EUR einzuzahlen, z. B. je 6.250,00 EUR. Den Rest ihrer Einlage schulden die Gesellschafterinnen weiter, bis er eingefordert und eingezahlt ist.'
    },
    {
      nr: 15, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Die Teamassistentin Sabine Riesterer, geboren am 14.03.1966, möchte wissen, wann sie Altersrente aus der gesetzlichen Rentenversicherung beziehen kann.',
      frage: 'Welche der folgenden Aussagen zur gesetzlichen Rentenversicherung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Rente zahlt die Feldberg Datentechnik GmbH aus den Arbeitgeberbeiträgen.',
        'Alle Versicherten können ab dem 60. Geburtstag ohne Abschläge in Rente gehen.',
        'Eine Altersrente erhalten nur Versicherte, die zusätzlich privat vorgesorgt haben.',
        'Frau Riesterer erreicht die Regelaltersgrenze mit Vollendung des 67. Lebensjahres; daneben zahlt die Rentenversicherung u. a. Renten wegen Erwerbsminderung und Hinterbliebenenrenten.',
        'Renten wegen Erwerbsminderung zahlt die Berufsgenossenschaft.'
      ],
      loesung: 4,
      erklaerung: 'Für Versicherte, die 1964 oder später geboren sind, liegt die Regelaltersgrenze bei 67 Jahren (§ 35 SGB VI, Übergangsregelung § 235 SGB VI). Voraussetzung der Regelaltersrente ist die allgemeine Wartezeit von fünf Jahren (§ 50 SGB VI). Die gesetzliche Rentenversicherung zahlt Renten wegen Alters, wegen verminderter Erwerbsfähigkeit und wegen Todes, z. B. Witwen- und Waisenrenten (§ 33 SGB VI). Träger ist die Deutsche Rentenversicherung; vorzeitige Altersrenten gibt es nur unter besonderen Voraussetzungen und meist mit Abschlägen.'
    },
    {
      nr: 16, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Die neue Mitarbeiterin der Lohnbuchhaltung Kerstin Heitzmann fragt, an wen die Feldberg Datentechnik GmbH die Sozialversicherungsbeiträge ihrer Beschäftigten überweist.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jede Arbeitnehmerin überweist ihre Beiträge selbst an die einzelnen Versicherungsträger.',
        'Alle Beiträge einschließlich der Unfallversicherung gehen an das Finanzamt.',
        'Der Arbeitgeber zahlt die Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung als Gesamtsozialversicherungsbeitrag an die Krankenkasse der Beschäftigten; den Beitrag zur Unfallversicherung zahlt er an die Berufsgenossenschaft.',
        'Die Deutsche Rentenversicherung zieht alle Sozialversicherungsbeiträge ein und verteilt sie.',
        'Die Beiträge werden nur einmal im Jahr nach Abschluss des Geschäftsjahres gezahlt.'
      ],
      loesung: 3,
      erklaerung: 'Der Arbeitgeber zahlt den Gesamtsozialversicherungsbeitrag, also Arbeitnehmer- und Arbeitgeberanteile zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung (§§ 28d, 28e SGB IV). Er behält die Arbeitnehmeranteile vom Lohn ein und zahlt alles an die zuständige Krankenkasse als Einzugsstelle, die die Beiträge an die übrigen Träger weiterleitet (§ 28h SGB IV). Fällig sind die Beiträge spätestens am drittletzten Bankarbeitstag des laufenden Monats (§ 23 Abs. 1 SGB IV). Den Beitrag zur Unfallversicherung trägt der Arbeitgeber allein; er wird von der Berufsgenossenschaft per Beitragsbescheid erhoben.'
    },
    {
      nr: 17, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Feldberg Datentechnik GmbH will die CO2-Emissionen verringern, die durch die Arbeitswege ihrer Beschäftigten und durch Dienstreisen entstehen.',
      frage: 'Welche der folgenden Maßnahmen ist dafür **nicht** geeignet?',
      anweisung: 'Tragen Sie die Ziffer vor der **nicht** geeigneten Maßnahme in das Kästchen ein.',
      optionen: [
        'Zuschuss zum Deutschlandticket für alle Beschäftigten',
        'Leasing von Diensträdern und E-Bikes über eine Gehaltsumwandlung',
        'Fahrgemeinschaftsbörse im Intranet für Beschäftigte mit ähnlichem Arbeitsweg',
        'Zusätzliche kostenlose Parkplätze für Privatautos anstelle des bisherigen Fahrtkostenzuschusses für Bus und Bahn',
        'Bahnfahrt statt Inlandsflug für Kundentermine zwischen Freiburg und Hamburg'
      ],
      loesung: 4,
      erklaerung: 'Klimafreundliche betriebliche Mobilität setzt auf öffentliche Verkehrsmittel, Fahrrad, Fahrgemeinschaften und die Vermeidung von Flügen. Kostenlose zusätzliche Parkplätze bei gleichzeitigem Wegfall des Zuschusses für Bus und Bahn machen das eigene Auto attraktiver und erhöhen die Emissionen. Unternehmen tragen so zum Ziel der Netto-Treibhausgasneutralität bei, die das Bundes-Klimaschutzgesetz bis 2045 vorgibt (§ 3 Abs. 2 KSG).'
    },
    {
      nr: 18, thema: 'umweltschutz', typ: 'reihenfolge',
      text: 'Die Feldberg Datentechnik GmbH führt ein Umweltmanagementsystem nach der Norm ISO 14001 ein. Es folgt dem Kreislauf „Plan – Do – Check – Act“ (Planen, Umsetzen, Prüfen, Handeln).',
      frage: 'Bringen Sie die folgenden Schritte des ersten Durchlaufs in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Schritte',
      items: [
        { text: 'Die geplanten Maßnahmen werden umgesetzt, z. B. stromsparende Server angeschafft und die Beschäftigten geschult.', loesung: 3 },
        { text: 'Die Geschäftsführung legt eine Umweltpolitik mit der Verpflichtung zur fortlaufenden Verbesserung fest.', loesung: 1 },
        { text: 'In einem internen Audit wird geprüft, ob die Umweltziele erreicht wurden.', loesung: 4 },
        { text: 'Die Geschäftsführung bewertet die Ergebnisse und legt Verbesserungen für den nächsten Durchlauf fest.', loesung: 5 },
        { text: 'Die wesentlichen Umweltaspekte, z. B. der Stromverbrauch des Security Operations Centers, werden ermittelt und messbare Umweltziele geplant.', loesung: 2 }
      ],
      erklaerung: 'ISO 14001 beruht auf dem PDCA-Zyklus. Plan: Umweltpolitik festlegen, wesentliche Umweltaspekte und rechtliche Verpflichtungen ermitteln, Ziele und Maßnahmen planen. Do: Maßnahmen umsetzen, Zuständigkeiten festlegen, Beschäftigte schulen. Check: Umweltleistung messen, interne Audits durchführen. Act: Managementbewertung und fortlaufende Verbesserung. Danach beginnt der Kreislauf von vorn. Die Zertifizierung ist freiwillig; das europäische Umweltmanagementsystem EMAS baut auf ISO 14001 auf.'
    },
    {
      nr: 19, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Feldberg Datentechnik GmbH ist Mitglied im Arbeitgeberverband. Der Auszubildende Leon Bühler möchte nachlesen, welche Regelungen der Manteltarifvertrag zu Arbeitszeit und Urlaub enthält.',
      frage: 'Welche der folgenden Aussagen zum Tarifvertrag trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Tarifverträge bedürfen der Schriftform; der Arbeitgeber muss die im Betrieb anwendbaren Tarifverträge im Betrieb bekannt machen, z. B. im Intranet oder durch Auslegen.',
        'Ein Tarifvertrag kann mündlich zwischen Gewerkschaft und Arbeitgeberverband vereinbart werden.',
        'Tarifverträge sind vertraulich und dürfen den Beschäftigten nicht zugänglich gemacht werden.',
        'Einsicht in den Tarifvertrag erhalten nur Beschäftigte, die länger als zehn Jahre im Betrieb sind.',
        'Tarifverträge werden vom Betriebsrat mit der Geschäftsführung abgeschlossen.'
      ],
      loesung: 1,
      erklaerung: 'Tarifverträge bedürfen der Schriftform (§ 1 Abs. 2 TVG). Der Arbeitgeber ist verpflichtet, die im Betrieb anwendbaren Tarifverträge im Betrieb bekannt zu machen (§ 8 TVG), z. B. durch Auslegen an geeigneter Stelle oder im Intranet. Abschluss, Änderung und Aufhebung von Tarifverträgen werden in das Tarifregister beim Bundesministerium für Arbeit und Soziales eingetragen (§ 6 TVG). Tarifvertragsparteien sind Gewerkschaften und Arbeitgeberverbände oder einzelne Arbeitgeber (§ 2 Abs. 1 TVG), nicht der Betriebsrat; Betriebsrat und Arbeitgeber schließen Betriebsvereinbarungen (§ 77 BetrVG).'
    },
    {
      nr: 20, thema: 'tarifrecht', typ: 'einfach',
      text: 'In der Tarifrunde der Branche ruft die Gewerkschaft in einzelnen Unternehmen zu Schwerpunktstreiks auf. Der Arbeitgeberverband erwägt als Reaktion eine Aussperrung.',
      frage: 'Welche der folgenden Aussagen zur Aussperrung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Aussperrung ist ein Kampfmittel der Gewerkschaft.',
        'Durch die Aussperrung werden die Arbeitsverhältnisse der Ausgesperrten automatisch beendet.',
        'Die Ausgesperrten erhalten während der Aussperrung ihr volles Gehalt vom Arbeitgeber.',
        'Eine Aussperrung darf sich ausschließlich gegen Gewerkschaftsmitglieder richten.',
        'Während einer rechtmäßigen Aussperrung ruhen die Arbeitsverhältnisse und die Ausgesperrten erhalten kein Entgelt; als Abwehrmaßnahme muss die Aussperrung verhältnismäßig sein.'
      ],
      loesung: 5,
      erklaerung: 'Die Aussperrung ist das Kampfmittel der Arbeitgeberseite; sie ist durch die Koalitionsfreiheit geschützt (Art. 9 Abs. 3 GG). Nach der Rechtsprechung des Bundesarbeitsgerichts ist sie als Abwehraussperrung gegen Teil- oder Schwerpunktstreiks zulässig, muss aber verhältnismäßig sein. Sie beendet die Arbeitsverhältnisse nicht, sondern lässt sie ruhen: Arbeitspflicht und Entgeltanspruch entfallen, nach dem Arbeitskampf wird die Arbeit fortgesetzt. Eine Aussperrung, die gezielt nur Gewerkschaftsmitglieder trifft, ist unzulässig, weil sie die Koalitionsfreiheit verletzt.'
    },
    {
      nr: 21, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Die Feldberg Datentechnik GmbH überträgt ihre Lohn- und Gehaltsabrechnung, die bisher die eigene Personalabteilung erledigt hat, dauerhaft an ein Steuerberatungsbüro in Freiburg.',
      frage: 'Welcher Begriff beschreibt diese Maßnahme zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Begriff in das Kästchen ein.',
      optionen: [
        'Offshoring',
        'Insourcing',
        'Outsourcing',
        'Nearshoring',
        'Fusion'
      ],
      loesung: 3,
      erklaerung: 'Outsourcing ist die dauerhafte Auslagerung bisher selbst erbrachter Leistungen an ein anderes Unternehmen. Offshoring bezeichnet die Verlagerung von Tätigkeiten in ein weiter entferntes Ausland, Nearshoring in ein nahes Ausland; dabei kann auch eine eigene Tochtergesellschaft tätig werden. Insourcing ist das Zurückholen ausgelagerter Leistungen in das eigene Unternehmen, bei einer Fusion verschmelzen Unternehmen. Gründe für Outsourcing sind Kostenvorteile, Spezialwissen und die Konzentration auf das Kerngeschäft; Nachteile sind Abhängigkeit vom Dienstleister und Datenschutzfragen (Auftragsverarbeitung nach Art. 28 DSGVO).'
    },
    {
      nr: 22, thema: 'gleichbehandlung', typ: 'mehrfach',
      text: 'Für eine Stelle als Penetrationstesterin führt Frau Ortlieb Vorstellungsgespräche. Die Stelle verschafft Zugriff auf hochsensible Kundensysteme.',
      frage: 'Welche der folgenden Fragen darf Frau Ortlieb im Vorstellungsgespräch zulässigerweise stellen?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zulässigen Fragen in die Kästchen ein.',
      optionen: [
        '„Welche Erfahrungen haben Sie mit Penetrationstests und welche Zertifizierungen besitzen Sie?“',
        '„Sind Sie schwanger oder planen Sie in den nächsten Jahren Kinder?“',
        '„Welcher Religionsgemeinschaft gehören Sie an?“',
        '„Sind Sie wegen Computerstraftaten, z. B. Ausspähens von Daten oder Computerbetrugs, vorbestraft?“',
        '„Sind Sie Mitglied einer Gewerkschaft?“',
        '„Wollen Sie demnächst heiraten?“'
      ],
      loesung: [1, 4],
      erklaerung: 'Zulässig sind Fragen, an deren Beantwortung der Arbeitgeber im Hinblick auf die Stelle ein berechtigtes Interesse hat, z. B. nach Qualifikation und Berufserfahrung. Nach Vorstrafen darf nur gefragt werden, soweit sie für die Tätigkeit von Bedeutung sind, hier Computerdelikte bei Zugriff auf sensible Kundensysteme. Fragen nach Schwangerschaft oder Kinderwunsch, Religion und Heiratsplänen sind unzulässig; sie können zu einer Benachteiligung wegen des Geschlechts oder der Religion führen (§§ 1, 7 AGG) oder betreffen allein das Privatleben. Die Frage nach der Gewerkschaftszugehörigkeit verletzt die Koalitionsfreiheit (Art. 9 Abs. 3 GG). Auf unzulässige Fragen darf die Bewerberin wahrheitswidrig antworten („Recht zur Lüge“).'
    },
    {
      nr: 23, thema: 'organisation', typ: 'einfach',
      text: 'Die Feldberg Datentechnik GmbH soll für einen Großkunden innerhalb von neun Monaten ein eigenes Security Operations Center aufbauen. Dafür wird ein Team aus Mitarbeitenden verschiedener Abteilungen unter einer Projektleitung gebildet.',
      frage: 'Welche der folgenden Aussagen zu diesem Vorhaben trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Es handelt sich um eine Daueraufgabe ohne festen Endtermin, die eine Abteilung allein erledigt.',
        'Es handelt sich um ein Projekt: ein einmaliges Vorhaben mit klarem Ziel, festgelegtem Anfangs- und Endtermin, begrenzten Mitteln und einer eigenen Projektorganisation.',
        'Projekte werden ausschließlich im Einliniensystem geführt; eine Projektleitung gibt es nicht.',
        'Die Planung eines Projekts beginnt erst nach Abschluss der Umsetzung.',
        'Für Projekte gelten die Vorschriften der Ausbildungsordnung.'
      ],
      loesung: 2,
      erklaerung: 'Ein Projekt ist ein Vorhaben, das im Wesentlichen durch die Einmaligkeit seiner Bedingungen gekennzeichnet ist, z. B. Zielvorgabe, zeitliche, finanzielle und personelle Begrenzung und eine projektspezifische Organisation (DIN 69901). Typische Projektphasen sind Initialisierung mit Projektauftrag, Planung, Durchführung mit Steuerung und Abschluss. Die Projektleitung steuert das Team, das oft aus mehreren Abteilungen kommt; je nach Umfang wird eine reine Projektorganisation, eine Stabs- oder eine Matrix-Projektorganisation gewählt. Eine gesetzliche Regelung gibt es nicht.'
    },
    {
      nr: 24, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Die Geschäftsführung der Feldberg Datentechnik GmbH beschließt, den Marktanteil bei Managed-Security-Dienstleistungen in Baden-Württemberg innerhalb von drei Jahren von 6 % auf 9 % zu steigern.',
      frage: 'Welche der folgenden Aussagen zu diesem Ziel trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Es handelt sich um ein ökonomisches Marktziel; der Marktanteil gibt an, welchen Anteil am Umsatz aller Anbieter eines Marktes die Feldberg Datentechnik GmbH erzielt.',
        'Es handelt sich um ein soziales Ziel, weil es die Beschäftigten betrifft.',
        'Der Marktanteil ergibt sich aus dem Gewinn geteilt durch das Eigenkapital.',
        'Das Ziel ist nicht operational, weil Zielausmaß und Zeitraum fehlen.',
        'Ein Marktanteilsziel ist für Kapitalgesellschaften gesetzlich vorgeschrieben.'
      ],
      loesung: 1,
      erklaerung: 'Marktanteil = Umsatz des Unternehmens ÷ Umsatz aller Anbieter des Marktes (Marktvolumen) × 100. Ein höherer Marktanteil ist ein ökonomisches Markt- bzw. Wachstumsziel; er stärkt die Stellung gegenüber Wettbewerbern und kann Umsatz und Gewinn langfristig sichern. Das Ziel ist operational formuliert, weil Inhalt (Marktanteil), Ausmaß (von 6 % auf 9 %) und Zeitbezug (drei Jahre) festgelegt sind. Gewinn ÷ Eigenkapital ergibt die Eigenkapitalrentabilität. Eine gesetzliche Vorgabe für solche Unternehmensziele gibt es nicht.'
    },
    {
      nr: 25, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Der 17-jährige Auszubildende Leon Bühler hat mittwochs ab 8:00 Uhr Berufsschulunterricht. Sein Teamleiter möchte, dass er am Mittwoch vorher von 6:30 Uhr bis 7:30 Uhr im Betrieb die Datensicherungen kontrolliert.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das ist zulässig, weil Jugendliche ab 6:00 Uhr beschäftigt werden dürfen.',
        'Das ist zulässig, wenn Herr Bühler dafür am Freitag eine Stunde früher gehen darf.',
        'Das ist zulässig, weil die Beschäftigung vor der Schule nur eine Stunde dauert.',
        'Das ist unzulässig, weil Herr Bühler vor einem vor 9:00 Uhr beginnenden Unterricht nicht beschäftigt werden darf.',
        'Das ist nur zulässig, wenn die Berufsschule zustimmt.'
      ],
      loesung: 4,
      erklaerung: '§ 9 Abs. 1 Satz 2 Nr. 1 JArbSchG: Jugendliche dürfen vor einem vor 9 Uhr beginnenden Unterricht nicht beschäftigt werden. Seit 2020 gilt das nach § 15 Abs. 1 Satz 2 Nr. 1 BBiG für alle Auszubildenden, auch volljährige. Die allgemeine Regel, dass Jugendliche ab 6 Uhr beschäftigt werden dürfen (§ 14 Abs. 1 JArbSchG), tritt dahinter zurück. Die Unterrichtszeit einschließlich der Pausen wird auf die Arbeitszeit angerechnet (§ 9 Abs. 2 Nr. 3 JArbSchG).'
    },
    {
      nr: 26, thema: 'rechtsquellen', typ: 'einfach',
      text: 'Herr Dold hat gegen seine Kündigung Klage beim Arbeitsgericht Freiburg erhoben. Er fragt den Betriebsratsvorsitzenden, wie das Verfahren abläuft.',
      frage: 'Welche der folgenden Aussagen zum Verfahren vor dem Arbeitsgericht trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Vor dem Arbeitsgericht muss sich Herr Dold zwingend durch einen Rechtsanwalt vertreten lassen.',
        'Das Arbeitsgericht entscheidet ohne mündliche Verhandlung allein nach Aktenlage.',
        'Über die Klage entscheidet in erster Instanz der Betriebsrat.',
        'Die Kammer des Arbeitsgerichts besteht aus drei Berufsrichtern.',
        'Das Verfahren beginnt mit einer Güteverhandlung vor der oder dem Vorsitzenden; scheitert eine Einigung, entscheidet die Kammer aus einer Berufsrichterin oder einem Berufsrichter und je einer ehrenamtlichen Person aus Arbeitnehmer- und Arbeitgeberkreisen.'
      ],
      loesung: 5,
      erklaerung: 'Die mündliche Verhandlung beginnt mit einer Güteverhandlung vor der oder dem Vorsitzenden mit dem Ziel einer gütlichen Einigung, z. B. durch einen Vergleich (§ 54 ArbGG). Scheitert sie, verhandelt die Kammer, die mit einem Berufsrichter als Vorsitzendem und je einem ehrenamtlichen Richter aus Kreisen der Arbeitnehmer und der Arbeitgeber besetzt ist (§ 16 Abs. 2 ArbGG). Vor dem Arbeitsgericht können die Parteien den Rechtsstreit selbst führen oder sich z. B. durch ihre Gewerkschaft vertreten lassen (§ 11 Abs. 1, 2 ArbGG); vor dem Landesarbeitsgericht und dem Bundesarbeitsgericht müssen sie sich vertreten lassen (§ 11 Abs. 4 ArbGG).'
    },
    {
      nr: 27, thema: 'kennzahlen', typ: 'einfach',
      text: 'Für den Monatsbericht des Security Operations Centers soll eine Produktivitätskennzahl ermittelt werden.',
      frage: 'Welche der folgenden Kennzahlen ist eine Produktivitätskennzahl?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Kennzahl in das Kästchen ein.',
      optionen: [
        'Abschließend bearbeitete Sicherheitsvorfälle je Analystenstunde',
        'Erträge ÷ Aufwendungen',
        'Gewinn ÷ Eigenkapital × 100',
        'Gewinn ÷ Umsatzerlöse × 100',
        'Eigenkapital ÷ Gesamtkapital × 100'
      ],
      loesung: 1,
      erklaerung: 'Die Produktivität setzt Mengen ins Verhältnis: Ausbringungsmenge ÷ Einsatzmenge, z. B. bearbeitete Vorfälle je Arbeitsstunde. Die Wirtschaftlichkeit vergleicht Werte: Ertrag ÷ Aufwand. Rentabilitätskennzahlen setzen den Gewinn ins Verhältnis zum Kapital (Eigenkapitalrentabilität) oder zum Umsatz (Umsatzrentabilität). Eigenkapital ÷ Gesamtkapital ist die Eigenkapitalquote, eine Kennzahl der Finanzierung.'
    },
    {
      nr: 28, thema: 'konjunktur', typ: 'einfach',
      text: 'Frau Ortlieb liest in der Zeitung, die Inflationsrate habe im Oktober 2,4 % betragen.',
      frage: 'Welche der folgenden Aussagen zur Messung der Inflationsrate trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Inflationsrate wird von der Europäischen Zentralbank anhand der Aktienkurse berechnet.',
        'Das Statistische Bundesamt misst die Preisentwicklung eines Warenkorbs aus Waren und Dienstleistungen, die private Haushalte typischerweise kaufen; die Veränderung des Verbraucherpreisindex gegenüber dem Vorjahresmonat ist die Inflationsrate.',
        'Die Inflationsrate gibt an, um wie viel Prozent die Löhne gestiegen sind.',
        'In den Warenkorb gehen nur Lebensmittel ein.',
        'Eine Inflationsrate von 2,4 % bedeutet, dass die Kaufkraft des Geldes um 2,4 % gestiegen ist.'
      ],
      loesung: 2,
      erklaerung: 'Das Statistische Bundesamt berechnet monatlich den Verbraucherpreisindex (VPI). Grundlage ist ein Warenkorb mit rund 650 Güterarten, z. B. Nahrungsmittel, Mieten, Energie, Kleidung und Dienstleistungen, gewichtet nach ihrem Anteil an den Ausgaben der privaten Haushalte (Wägungsschema). Die prozentuale Veränderung gegenüber dem Vorjahresmonat ist die Inflationsrate; steigen die Preise, sinkt die Kaufkraft des Geldes. Preisniveaustabilität ist ein Ziel nach § 1 StabG; die EZB strebt mittelfristig eine Inflationsrate von 2 % an.'
    },
    {
      nr: 29, thema: 'datenschutz', typ: 'mehrfach',
      text: 'Die Personalabteilung speichert verschiedene Angaben über die Beschäftigten. Die Datenschutzbeauftragte prüft, welche davon zu den besonderen Kategorien personenbezogener Daten gehören.',
      frage: 'Welche der folgenden Angaben gehören zu den besonderen Kategorien personenbezogener Daten nach Art. 9 DSGVO?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Angaben in die Kästchen ein.',
      optionen: [
        'Bankverbindung (IBAN) für die Gehaltszahlung',
        'Private Mobilfunknummer',
        'Angaben über eine Schwerbehinderung',
        'Geburtsdatum',
        'Personalnummer',
        'Mitgliedschaft in einer Gewerkschaft'
      ],
      loesung: [3, 6],
      erklaerung: 'Besondere Kategorien personenbezogener Daten sind nach Art. 9 Abs. 1 DSGVO Daten über ethnische Herkunft, politische Meinungen, religiöse oder weltanschauliche Überzeugungen und Gewerkschaftszugehörigkeit, genetische und biometrische Daten zur eindeutigen Identifizierung, Gesundheitsdaten sowie Daten zum Sexualleben oder zur sexuellen Orientierung. Angaben über eine Behinderung sind Gesundheitsdaten (Art. 4 Nr. 15 DSGVO). Ihre Verarbeitung ist grundsätzlich untersagt und nur ausnahmsweise erlaubt, z. B. zur Erfüllung arbeits- und sozialrechtlicher Pflichten (Art. 9 Abs. 2 Buchst. b DSGVO). IBAN, Telefonnummer, Geburtsdatum und Personalnummer sind ebenfalls personenbezogen, gehören aber nicht zu den besonderen Kategorien.'
    },
    {
      nr: 30, thema: 'unternehmensgruendung', typ: 'einfach',
      text: 'Patrick Gutmann und Ines Hug benötigen für die Gründung ihres Unternehmens rund 80.000,00 EUR, unter anderem für Laptops, Software-Lizenzen und die Büromiete der ersten Monate. Sie informieren sich über Finanzierungsmöglichkeiten.',
      frage: 'Welche der folgenden Aussagen zur Gründungsfinanzierung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die KfW zahlt jedem Gründer auf Antrag einen Zuschuss, der nicht zurückgezahlt werden muss.',
        'Den Gründungszuschuss der Agentur für Arbeit erhält jeder Gründer, auch ohne Anspruch auf Arbeitslosengeld.',
        'Banken vergeben Gründungskredite grundsätzlich ohne Businessplan und ohne Sicherheiten.',
        'Förderkredite der KfW werden in der Regel über die Hausbank beantragt; ein eigener Kapitalanteil und ein schlüssiger Businessplan verbessern die Aussichten auf eine Finanzierung.',
        'Kredite müssen nicht zurückgezahlt werden, wenn die Gründung scheitert.'
      ],
      loesung: 4,
      erklaerung: 'Gründungen werden meist aus Eigenkapital und Fremdkapital finanziert. Förderkredite der KfW werden nach dem Hausbankprinzip über die eigene Bank beantragt; sie bieten oft günstige Zinsen und tilgungsfreie Anlaufjahre, müssen aber zurückgezahlt werden. Den Gründungszuschuss der Agentur für Arbeit können nur Arbeitslose mit einem Restanspruch auf Arbeitslosengeld erhalten; die Tragfähigkeit der Gründung muss eine fachkundige Stelle bestätigen (§ 93 SGB III). Banken prüfen Businessplan, Eigenkapitalanteil und Sicherheiten. Kredite sind auch bei einem Scheitern zurückzuzahlen.'
    }
  ]
});
