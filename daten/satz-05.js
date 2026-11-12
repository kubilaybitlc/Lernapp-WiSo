// Übungssatz 5 – eigene Aufgaben im Stil der BITLC-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-05',
  titel: 'Übungssatz 5',
  untertitel: 'Weserbyte Solutions AG',
  ausgangssituation:
    'Die Weserbyte Solutions AG ist ein Softwarehaus mit Sitz in Bremen. Sie entwickelt Logistik-Software für Speditionen, Häfen und Handelsunternehmen und beschäftigt in der Regel 180 Arbeitnehmerinnen und Arbeitnehmer. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 5, bis: 8,
      text: 'Die Weserbyte Solutions AG bildet Fachinformatikerinnen und Fachinformatiker der Fachrichtung Anwendungsentwicklung aus. Die Ausbildungsdauer beträgt laut Ausbildungsordnung drei Jahre. Ausbildungsleiter ist Malte Brinkmann.'
    },
    {
      von: 9, bis: 11,
      text: 'Bei der Weserbyte Solutions AG werden im Frühjahr ein neuer Betriebsrat und eine neue Jugend- und Auszubildendenvertretung (JAV) gewählt. Im Betrieb sind in der Regel 180 Arbeitnehmerinnen und Arbeitnehmer beschäftigt, darunter 14 Auszubildende.'
    },
    {
      von: 14, bis: 15,
      text: 'Der Softwaretester Kevin Albers (34 Jahre) ist seit 2019 bei der Weserbyte Solutions AG beschäftigt. In den letzten Wochen ist er mehrfach unentschuldigt der Arbeit ferngeblieben. Das Kündigungsschutzgesetz ist anzuwenden.'
    },
    {
      von: 17, bis: 19,
      text: 'Die Weserbyte Solutions AG hat ein Grundkapital von 2.000.000,00 EUR. Ihre Aktien werden nicht an der Börse gehandelt. Vorstandsvorsitzende ist Dr. Henrike Lüders.'
    },
    {
      von: 20, bis: 21,
      text: 'Der Teamleiter Hauke Rademacher (29 Jahre, keine Kinder) ist gesetzlich kranken- und pflegeversichert. Er erhält ein monatliches Bruttogehalt von 6.400,00 EUR.'
    },
    {
      von: 27, bis: 28,
      text: 'Die Projektleiterin Svenja Harms ist bei der Weserbyte Solutions AG beschäftigt und erwartet ihr erstes Kind. Sie hat ihren Arbeitgeber über die Schwangerschaft informiert.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Die Weserbyte Solutions AG lässt Teile ihrer Softwareentwicklung von einem Partnerunternehmen in Polen erledigen. Projektsteuerung und Kundenservice bleiben in Bremen.',
      frage: 'Welche Form der Arbeitsteilung liegt hier vor?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Form der Arbeitsteilung in das Kästchen ein.',
      optionen: [
        'Berufsspaltung',
        'Innerbetriebliche Arbeitsteilung durch Abteilungsbildung',
        'Internationale Arbeitsteilung',
        'Arbeitszerlegung innerhalb einer Abteilung',
        'Gesellschaftliche Arbeitsteilung durch Berufsbildung'
      ],
      loesung: 3,
      erklaerung: 'Bei der internationalen Arbeitsteilung spezialisieren sich Unternehmen verschiedener Staaten und tauschen ihre Leistungen grenzüberschreitend aus, hier durch Verlagerung von Entwicklungsarbeit in ein nahes EU-Land (Nearshoring). Innerhalb der EU erleichtert die Dienstleistungsfreiheit (Art. 56 AEUV) solche Verlagerungen. Berufsbildung und Berufsspaltung gehören zur gesellschaftlichen, Abteilungsbildung und Arbeitszerlegung zur innerbetrieblichen Arbeitsteilung.'
    },
    {
      nr: 2, thema: 'wirtschaft-grundlagen', typ: 'zuordnung',
      text: 'Die Weserbyte Solutions AG untersucht verschiedene Märkte.',
      frage: 'Welche der folgenden Marktformen sind den nachstehenden Marktsituationen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Marktform in das Kästchen ein.',
      optionenTitel: 'Marktformen',
      optionen: [
        'Polypol',
        'Angebotsoligopol',
        'Angebotsmonopol',
        'Nachfragemonopol',
        'Nachfrageoligopol'
      ],
      itemsTitel: 'Marktsituationen',
      items: [
        { text: 'Steuerungssoftware für Containerterminals wird weltweit nur von drei Unternehmen angeboten. Käufer sind zahlreiche Hafenbetreiber.', loesung: 2 },
        { text: 'In Bremen bieten sehr viele kleine IT-Dienstleister PC-Reparaturen für eine große Zahl von Privatkunden an.', loesung: 1 },
        { text: 'Für die Software eines landeseigenen Funknetzes gibt es nur einen Auftraggeber, das Land. Zahlreiche Softwarehäuser bewerben sich um den Auftrag.', loesung: 4 },
        { text: 'Ein einziger kommunaler Versorger liefert das Trinkwasser an alle Haushalte und Unternehmen der Stadt.', loesung: 3 }
      ],
      erklaerung: 'Marktformen nach der Zahl der Marktteilnehmer: Viele Anbieter und viele Nachfrager bilden ein Polypol, wenige Anbieter und viele Nachfrager ein Angebotsoligopol, ein Anbieter und viele Nachfrager ein Angebotsmonopol, viele Anbieter und ein Nachfrager ein Nachfragemonopol. Marktmacht von Oligopolen und Monopolen wird durch das Kartellrecht (GWB) begrenzt.'
    },
    {
      nr: 3, thema: 'konjunktur', typ: 'einfach',
      text: 'Der Controller Lars Wiegmann liest im Wirtschaftsteil einer Zeitung, dass die Bundesregierung die Ziele des magischen Vierecks gleichzeitig verfolgen soll.',
      frage: 'Welche der folgenden Aussagen zum magischen Viereck trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die vier Ziele lassen sich jederzeit gleichzeitig und vollständig erreichen, weil sie sich nicht gegenseitig beeinflussen.',
        'Zu den vier Zielen gehören eine gerechte Einkommens- und Vermögensverteilung und der Schutz der Umwelt.',
        'Eine Politik, die die Arbeitslosigkeit senkt, kann die Stabilität des Preisniveaus gefährden, weil die steigende Nachfrage die Preise erhöhen kann.',
        'Die Ziele sind im Grundgesetz abschließend festgelegt und für jedes Unternehmen verbindlich.',
        'Ein Ziel ist ein möglichst hoher Überschuss im Außenhandel, also deutlich mehr Exporte als Importe.'
      ],
      loesung: 3,
      erklaerung: '§ 1 StabG verpflichtet Bund und Länder, gleichzeitig zur Stabilität des Preisniveaus, zu einem hohen Beschäftigungsstand und zum außenwirtschaftlichen Gleichgewicht bei stetigem und angemessenem Wirtschaftswachstum beizutragen. „Magisch“ heißt das Viereck, weil die Ziele wegen Zielkonflikten (z. B. Beschäftigung und Preisniveaustabilität) kaum gleichzeitig erreichbar sind. Gerechte Einkommensverteilung und Umweltschutz erweitern es zum magischen Sechseck.'
    },
    {
      nr: 4, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Die Weserbyte Solutions AG hat eine Compliance-Beauftragte eingestellt und für alle Beschäftigten einen Verhaltenskodex eingeführt.',
      frage: 'Welche der folgenden Aussagen beschreibt Compliance zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Compliance bedeutet, dass …',
      optionen: [
        'das Unternehmen ausschließlich das Ziel der Gewinnmaximierung verfolgt.',
        'das Unternehmen und seine Beschäftigten Gesetze, Vorschriften und selbst gesetzte Regeln wie einen Verhaltenskodex einhalten.',
        'alle Kunden den Allgemeinen Geschäftsbedingungen schriftlich zustimmen müssen.',
        'der Betriebsrat allen unternehmerischen Entscheidungen zustimmen muss.',
        'das Unternehmen freiwillig auf jede Form von Werbung verzichtet.'
      ],
      loesung: 2,
      erklaerung: 'Compliance (Regeltreue) bedeutet die Einhaltung von Gesetzen, Richtlinien und internen Regeln, etwa gegen Korruption, Kartellabsprachen oder Datenschutzverstöße. Der Vorstand einer AG muss dafür im Rahmen seiner Sorgfaltspflicht sorgen (§§ 91 Abs. 2, 93 Abs. 1 AktG). Verletzt die Leitung ihre Aufsichtspflicht, drohen Bußgelder nach § 130 OWiG.'
    },
    {
      nr: 5, thema: 'ausbildung', typ: 'einfach',
      text: 'Die neue Auszubildende Jana Kowalczyk hat das Abitur und bereits zwei Semester Informatik studiert. Sie möchte ihre Ausbildungszeit verkürzen.',
      frage: 'Welche der folgenden Aussagen zur Verkürzung der Ausbildungszeit trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die BITLC kürzt die Ausbildungsdauer auf gemeinsamen Antrag von Auszubildender und Ausbildendem, wenn zu erwarten ist, dass das Ausbildungsziel in der gekürzten Zeit erreicht wird.',
        'Der Ausbildungsbetrieb kann die Ausbildungszeit allein durch eine Mitteilung an die Berufsschule verkürzen.',
        'Eine Verkürzung ist nur möglich, wenn die Auszubildende das 25. Lebensjahr vollendet hat.',
        'Mit dem Abitur verkürzt sich die Ausbildungszeit automatisch um ein Jahr, ein Antrag ist nicht nötig.',
        'Über die Verkürzung entscheidet die Berufsschule anhand der Noten des ersten Halbjahres.'
      ],
      loesung: 1,
      erklaerung: '§ 8 Abs. 1 BBiG: Auf gemeinsamen Antrag von Auszubildenden und Ausbildenden hat die zuständige Stelle (BITLC) die Ausbildungsdauer zu kürzen, wenn zu erwarten ist, dass das Ausbildungsziel in der gekürzten Dauer erreicht wird. Das Abitur ist ein typischer Grund, wirkt aber nicht automatisch. Davon zu unterscheiden ist die vorzeitige Zulassung zur Abschlussprüfung bei guten Leistungen (§ 45 Abs. 1 BBiG).'
    },
    {
      nr: 6, thema: 'ausbildung', typ: 'einfach',
      text: 'Die Auszubildende Nele Brüning betreut ihr kleines Kind und möchte ihre Ausbildung deshalb in Teilzeit absolvieren.',
      frage: 'Welche der folgenden Aussagen zur Teilzeitberufsausbildung nach § 7a BBiG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Eine Teilzeitberufsausbildung ist nur möglich, wenn die Auszubildende ein Kind unter drei Jahren betreut.',
        'Die tägliche oder wöchentliche Ausbildungszeit darf um höchstens 50 Prozent gekürzt werden; die Ausbildungsdauer verlängert sich entsprechend, höchstens auf das Eineinhalbfache der regulären Dauer.',
        'Die Ausbildungsdauer bleibt bei einer Teilzeitberufsausbildung immer unverändert bei drei Jahren.',
        'Die Teilzeit muss nicht im Ausbildungsvertrag vereinbart werden, eine mündliche Absprache mit der Berufsschule genügt.',
        'Bei einer Teilzeitberufsausbildung entfällt der Anspruch auf Ausbildungsvergütung.'
      ],
      loesung: 2,
      erklaerung: '§ 7a BBiG: Die Teilzeit wird im Berufsausbildungsvertrag vereinbart, die tägliche oder wöchentliche Ausbildungszeit darf um höchstens 50 Prozent gekürzt werden (Abs. 1). Die Ausbildungsdauer verlängert sich entsprechend, höchstens auf das Eineinhalbfache, hier also auf höchstens viereinhalb Jahre (Abs. 2). Ein besonderer Grund wie Kinderbetreuung ist nicht vorgeschrieben. Die Vergütung kann nach § 17 Abs. 5 BBiG angemessen gekürzt werden, entfällt aber nicht.'
    },
    {
      nr: 7, thema: 'ausbildung', typ: 'mehrfach',
      text: 'Herr Brinkmann informiert die neuen Auszubildenden über ihre Ausbildungsvergütung.',
      frage: 'Welche der folgenden Aussagen zur Ausbildungsvergütung entsprechen dem Berufsbildungsgesetz?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Die Vergütung wird nur für Tage gezahlt, an denen die Auszubildenden im Betrieb anwesend sind; Berufsschultage werden nicht bezahlt.',
        'Die Vergütung muss mit fortschreitender Berufsausbildung, mindestens jährlich, ansteigen.',
        'Die Vergütung darf gekürzt werden, wenn die Noten in der Berufsschule schlecht sind.',
        'Die Vergütung für den laufenden Kalendermonat ist spätestens am letzten Arbeitstag des Monats zu zahlen.',
        'Eine Beschäftigung über die vereinbarte regelmäßige tägliche Ausbildungszeit hinaus ist mit der Vergütung bereits abgegolten.',
        'Die Vergütung wird erst nach dem Ende der Probezeit gezahlt.'
      ],
      loesung: [2, 4],
      erklaerung: '§ 17 Abs. 1 Satz 2 BBiG: Die Vergütung steigt mit fortschreitender Berufsausbildung, mindestens jährlich, an. § 18 Abs. 2 BBiG: Sie ist für den laufenden Kalendermonat spätestens am letzten Arbeitstag des Monats zu zahlen. Für die Freistellung zum Berufsschulunterricht ist sie fortzuzahlen (§ 19 Abs. 1 Nr. 1 BBiG), Mehrarbeit ist besonders zu vergüten oder durch Freizeit auszugleichen (§ 17 Abs. 7 BBiG). Die Vergütung ist ab Beginn der Ausbildung zu zahlen.'
    },
    {
      nr: 8, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Der 17-jährige Auszubildende Tobias Engelke hat in der kommenden Woche keinen Berufsschulunterricht. Für die Einführung einer neuen Software beim Kunden plant Herr Brinkmann für ihn folgende Arbeitszeiten: Montag bis Donnerstag jeweils 8,5 Stunden, Freitag 6 Stunden.',
      frage: 'Welche der folgenden Aussagen zu diesem Arbeitszeitplan trifft nach dem Jugendarbeitsschutzgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Plan ist unzulässig, weil Jugendliche an keinem Tag länger als acht Stunden beschäftigt werden dürfen.',
        'Der Plan ist zulässig, weil die Arbeitszeit am Freitag verkürzt ist und Herr Engelke an den übrigen Werktagen höchstens 8,5 Stunden und insgesamt 40 Stunden in der Woche arbeitet.',
        'Herr Engelke dürfte an einzelnen Tagen sogar bis zu zehn Stunden arbeiten, wenn die Woche insgesamt 40 Stunden nicht überschreitet.',
        'Der Plan ist zulässig, Herr Engelke dürfte aber auch montags bis freitags jeweils neun Stunden arbeiten, also 45 Stunden in der Woche.',
        'Der Plan ist nur zulässig, wenn die Eltern von Herrn Engelke schriftlich zustimmen.'
      ],
      loesung: 2,
      erklaerung: '§ 8 Abs. 1 JArbSchG: Jugendliche dürfen nicht mehr als acht Stunden täglich und nicht mehr als 40 Stunden wöchentlich beschäftigt werden. § 8 Abs. 2a JArbSchG: Ist die Arbeitszeit an einzelnen Werktagen auf weniger als acht Stunden verkürzt, dürfen Jugendliche an den übrigen Werktagen derselben Woche achteinhalb Stunden beschäftigt werden. Hier: 4 × 8,5 Stunden + 6 Stunden = 40 Stunden. Zehn Stunden täglich und mehr als 40 Wochenstunden sind für Jugendliche nicht zulässig; eine Zustimmung der Eltern ändert daran nichts.'
    },
    {
      nr: 9, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die 27-jährige Auszubildende Lea Hinrichs hat nach einem abgebrochenen Studium eine Ausbildung begonnen und möchte für die JAV kandidieren. Sie ist seit vier Monaten im Betrieb und nicht Mitglied des Betriebsrats.',
      frage: 'Welche der folgenden Aussagen zur Wählbarkeit von Frau Hinrichs trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Frau Hinrichs ist …',
      optionen: [
        'nicht wählbar, weil sie das 25. Lebensjahr bereits vollendet hat.',
        'wählbar, weil Auszubildende unabhängig von ihrem Alter in die JAV gewählt werden können.',
        'nicht wählbar, weil sie noch keine sechs Monate im Betrieb beschäftigt ist.',
        'nicht wählbar, weil nur Auszubildende im ersten Ausbildungsjahr kandidieren dürfen.',
        'wählbar, weil in die JAV alle Beschäftigten unabhängig von Alter und Ausbildung gewählt werden können.'
      ],
      loesung: 2,
      erklaerung: '§ 61 Abs. 2 BetrVG: In die JAV wählbar sind Arbeitnehmer des Betriebs, die das 25. Lebensjahr noch nicht vollendet haben, sowie alle zu ihrer Berufsausbildung Beschäftigten; die Altersgrenze für Auszubildende ist 2021 entfallen. Eine Mindestbeschäftigungsdauer wie bei der Betriebsratswahl (sechs Monate, § 8 BetrVG) gibt es für die JAV nicht. Mitglieder des Betriebsrats können nicht zugleich in die JAV gewählt werden.'
    },
    {
      nr: 10, thema: 'mitbestimmung', typ: 'mehrfach',
      text: 'Der Wahlvorstand erstellt die Wählerliste für die Betriebsratswahl.',
      frage: 'Welche der folgenden Personen sind bei der Betriebsratswahl wahlberechtigt?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Personen in die Kästchen ein.',
      optionen: [
        'Der 16-jährige Auszubildende Jonas Petersen',
        'Die Vorstandsvorsitzende Dr. Henrike Lüders',
        'Der 15-jährige Schülerpraktikant Ben Schröder',
        'Der Leiharbeitnehmer Marek Nowicki, der seit vier Monaten im Betrieb eingesetzt ist und bis zum Jahresende bleiben soll',
        'Der Prokurist Frank Meinders, der als leitender Angestellter selbstständig über Einstellungen und Entlassungen entscheidet',
        'Ein freiberuflicher Grafikdesigner, der gelegentlich Aufträge auf Honorarbasis erledigt'
      ],
      loesung: [1, 4],
      erklaerung: '§ 7 BetrVG: Wahlberechtigt sind alle Arbeitnehmer des Betriebs ab Vollendung des 16. Lebensjahres, also auch Auszubildende, sowie Leiharbeitnehmer, die länger als drei Monate im Betrieb eingesetzt werden. Vorstandsmitglieder einer AG gelten nicht als Arbeitnehmer (§ 5 Abs. 2 Nr. 1 BetrVG), leitende Angestellte sind ausgenommen (§ 5 Abs. 3 BetrVG). Der Praktikant ist jünger als 16, der Freiberufler ist kein Arbeitnehmer.'
    },
    {
      nr: 11, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Vorstand und Betriebsrat wollen die Regeln zur Gleitzeit und zum mobilen Arbeiten in einer Betriebsvereinbarung festlegen.',
      frage: 'Welche der folgenden Aussagen zur Betriebsvereinbarung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Eine Betriebsvereinbarung …',
      optionen: [
        'wird zwischen der Gewerkschaft und dem Arbeitgeberverband abgeschlossen.',
        'wird von Arbeitgeber und Betriebsrat gemeinsam beschlossen, schriftlich niedergelegt und von beiden unterzeichnet; sie gilt unmittelbar und zwingend für die Arbeitnehmer des Betriebs.',
        'gilt nur für die Arbeitnehmer, die sie einzeln unterschrieben haben.',
        'darf Arbeitsentgelte regeln, die üblicherweise durch Tarifvertrag geregelt werden, auch wenn der Tarifvertrag dies nicht zulässt.',
        'kann vom Arbeitgeber jederzeit fristlos und einseitig aufgehoben werden.'
      ],
      loesung: 2,
      erklaerung: '§ 77 Abs. 2 und 4 BetrVG: Betriebsvereinbarungen werden von Betriebsrat und Arbeitgeber gemeinsam beschlossen, schriftlich niedergelegt und unterzeichnet; sie gelten unmittelbar und zwingend. Arbeitsentgelte, die durch Tarifvertrag geregelt sind oder üblicherweise geregelt werden, sind ohne Öffnungsklausel tabu (Tarifvorbehalt, § 77 Abs. 3 BetrVG). Gekündigt werden kann mit einer Frist von drei Monaten (§ 77 Abs. 5 BetrVG). Gleitzeit und mobile Arbeit sind mitbestimmungspflichtig (§ 87 Abs. 1 Nr. 2 und 14 BetrVG).'
    },
    {
      nr: 12, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Weserbyte Solutions AG ist Mitglied im Arbeitgeberverband, der mit der zuständigen Gewerkschaft einen Entgelttarifvertrag abgeschlossen hat. Der Programmierer Nils Jansen ist kein Gewerkschaftsmitglied.',
      frage: 'Welche der folgenden Aussagen zur Tarifbindung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Jansen hat einen unmittelbaren Anspruch aus dem Tarifvertrag, weil sein Arbeitgeber tarifgebunden ist.',
        'Tarifgebunden sind die Mitglieder der Tarifvertragsparteien; ohne Gewerkschaftsmitgliedschaft kann Herr Jansen das Tarifentgelt nur verlangen, wenn sein Arbeitsvertrag auf den Tarifvertrag verweist oder dieser für allgemeinverbindlich erklärt wurde.',
        'Ein Tarifvertrag gilt für alle Arbeitnehmer in Deutschland, sobald er unterschrieben ist.',
        'Tritt die Weserbyte Solutions AG aus dem Arbeitgeberverband aus, endet ihre Tarifbindung am Tag des Austritts.',
        'Gewerkschaftsmitglieder dürfen im Arbeitsvertrag keine günstigeren Bedingungen als im Tarifvertrag vereinbaren.'
      ],
      loesung: 2,
      erklaerung: '§ 3 Abs. 1 TVG: Tarifgebunden sind die Mitglieder der Tarifvertragsparteien. Die Tarifnormen gelten unmittelbar und zwingend nur zwischen beiderseits Tarifgebundenen (§ 4 Abs. 1 TVG). Nach einem Verbandsaustritt bleibt die Tarifbindung bestehen, bis der Tarifvertrag endet (§ 3 Abs. 3 TVG). Günstigere Abmachungen sind erlaubt (Günstigkeitsprinzip, § 4 Abs. 3 TVG). In der Praxis verweisen viele Arbeitsverträge auf den Tarifvertrag.'
    },
    {
      nr: 13, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Weserbyte Solutions AG beauftragt eine Reinigungsfirma, die keinem Arbeitgeberverband angehört. Für die Gebäudereinigung gilt ein Tarifvertrag, der für allgemeinverbindlich erklärt wurde.',
      frage: 'Welche der folgenden Aussagen zur Allgemeinverbindlicherklärung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Allgemeinverbindlicherklärung spricht die Gewerkschaft allein aus.',
        'Durch die Allgemeinverbindlicherklärung gilt der Tarifvertrag in seinem Geltungsbereich auch für bisher nicht tarifgebundene Arbeitgeber und Arbeitnehmer; die Reinigungsfirma muss ihn daher anwenden.',
        'Ein allgemeinverbindlicher Tarifvertrag gilt für alle Branchen, also auch für die Beschäftigten der Weserbyte Solutions AG.',
        'Über die Allgemeinverbindlicherklärung entscheidet das Bundesarbeitsgericht auf Antrag eines einzelnen Arbeitnehmers.',
        'Nach der Allgemeinverbindlicherklärung müssen alle Beschäftigten der Branche in die Gewerkschaft eintreten.'
      ],
      loesung: 2,
      erklaerung: '§ 5 Abs. 1 TVG: Das Bundesministerium für Arbeit und Soziales kann einen Tarifvertrag auf gemeinsamen Antrag der Tarifvertragsparteien im Einvernehmen mit dem Tarifausschuss für allgemeinverbindlich erklären, wenn dies im öffentlichen Interesse geboten erscheint. Nach § 5 Abs. 4 TVG erfasst er dann in seinem Geltungsbereich auch die bisher nicht tarifgebundenen Arbeitgeber und Arbeitnehmer. Andere Branchen sind nicht betroffen; eine Pflicht zum Gewerkschaftsbeitritt verstieße gegen die Koalitionsfreiheit (Art. 9 Abs. 3 GG).'
    },
    {
      nr: 14, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Personalleiterin Birte Kloppenburg will auf das Fehlverhalten von Herrn Albers zunächst mit einer Abmahnung reagieren.',
      frage: 'Welche der folgenden Aussagen zur Abmahnung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Mit der Abmahnung …',
      optionen: [
        'endet das Arbeitsverhältnis mit sofortiger Wirkung.',
        'beanstandet der Arbeitgeber ein konkret bezeichnetes Fehlverhalten und droht für den Wiederholungsfall arbeitsrechtliche Folgen bis zur Kündigung an.',
        'darf der Arbeitgeber das Gehalt für die nächsten drei Monate kürzen.',
        'muss der Betriebsrat vorher zustimmen, sonst ist sie unwirksam.',
        'ist eine spätere Kündigung wegen gleichartiger Pflichtverletzungen ausgeschlossen.'
      ],
      loesung: 2,
      erklaerung: 'Die Abmahnung hat eine Rüge- und eine Warnfunktion: Sie benennt den Pflichtverstoß genau und kündigt für den Wiederholungsfall Konsequenzen an. Vor einer verhaltensbedingten Kündigung ist sie in der Regel erforderlich, weil die Kündigung nach § 1 Abs. 2 KSchG verhältnismäßig sein muss (vgl. auch § 314 Abs. 2 BGB). Ein Mitbestimmungsrecht des Betriebsrats besteht nicht; die Schriftform ist nicht vorgeschrieben, aber zum Nachweis üblich.'
    },
    {
      nr: 15, thema: 'arbeitsvertrag', typ: 'reihenfolge',
      text: 'Frau Kloppenburg erklärt den Auszubildenden am Beispiel von Herrn Albers den Ablauf bis zu einer verhaltensbedingten Kündigung und deren gerichtlicher Überprüfung.',
      frage: 'Bringen Sie die folgenden Schritte in die richtige Reihenfolge.',
      anweisung: 'Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Schritte',
      items: [
        { text: 'Der Betriebsrat wird zur beabsichtigten Kündigung angehört.', loesung: 4 },
        { text: 'Herr Albers bleibt der Arbeit unentschuldigt fern.', loesung: 1 },
        { text: 'Herr Albers erhält das unterschriebene Kündigungsschreiben.', loesung: 5 },
        { text: 'Die Personalabteilung erteilt Herrn Albers eine Abmahnung.', loesung: 2 },
        { text: 'Herr Albers erhebt Kündigungsschutzklage beim Arbeitsgericht.', loesung: 6 },
        { text: 'Herr Albers fehlt erneut unentschuldigt.', loesung: 3 }
      ],
      erklaerung: 'Ablauf: Pflichtverletzung → Abmahnung → erneute gleichartige Pflichtverletzung → Anhörung des Betriebsrats (vor jeder Kündigung, sonst ist sie unwirksam, § 102 Abs. 1 BetrVG) → Zugang der schriftlichen Kündigung (§ 623 BGB) → Kündigungsschutzklage innerhalb von drei Wochen nach Zugang (§ 4 KSchG).'
    },
    {
      nr: 16, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Datenbankentwicklerin Frauke Meyerdierks konnte wegen eines dringenden Kundenprojekts, das bis Mitte Dezember 2026 abgeschlossen werden musste, acht Tage ihres Jahresurlaubs 2026 nicht nehmen. Die Personalabteilung hatte sie im Laufe des Jahres rechtzeitig aufgefordert, ihren Urlaub zu nehmen, und auf einen möglichen Verfall hingewiesen. Arbeits- und Tarifvertrag enthalten keine besonderen Regelungen.',
      frage: 'Welche der folgenden Aussagen zum Resturlaub von Frau Meyerdierks trifft nach dem Bundesurlaubsgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Resturlaub verfällt am 31.12.2026 ersatzlos, weil Urlaub immer im laufenden Kalenderjahr genommen werden muss.',
        'Frau Meyerdierks kann den Resturlaub beliebig lange ansparen und in einem späteren Jahr am Stück nehmen.',
        'Die Weserbyte Solutions AG muss die acht Urlaubstage mit dem Dezembergehalt auszahlen.',
        'Der Resturlaub wird auf das Jahr 2027 übertragen und muss in den ersten drei Kalendermonaten, also bis zum 31.03.2027, gewährt und genommen werden.',
        'Über die Übertragung des Resturlaubs entscheidet allein der Betriebsrat.'
      ],
      loesung: 4,
      erklaerung: '§ 7 Abs. 3 BUrlG: Der Urlaub muss im laufenden Kalenderjahr gewährt und genommen werden. Eine Übertragung auf das nächste Kalenderjahr ist zulässig, wenn dringende betriebliche oder in der Person des Arbeitnehmers liegende Gründe dies rechtfertigen; dann muss der Urlaub in den ersten drei Monaten des Folgejahres gewährt und genommen werden. Nach der Rechtsprechung des BAG verfällt Urlaub nur, wenn der Arbeitgeber den Arbeitnehmer rechtzeitig zur Urlaubsnahme aufgefordert und auf den drohenden Verfall hingewiesen hat. Eine Auszahlung (Abgeltung) ist nur bei Beendigung des Arbeitsverhältnisses vorgesehen (§ 7 Abs. 4 BUrlG).'
    },
    {
      nr: 17, thema: 'rechtsformen', typ: 'zuordnung',
      text: 'Die Auszubildenden sollen die Organe der Weserbyte Solutions AG kennenlernen.',
      frage: 'Welche der folgenden Organe der Aktiengesellschaft sind den nachstehenden Aufgaben zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Organ in das Kästchen ein. Ein Organ kann mehreren Aufgaben zugeordnet werden.',
      optionenTitel: 'Organe',
      optionen: [
        'Vorstand',
        'Aufsichtsrat',
        'Hauptversammlung'
      ],
      itemsTitel: 'Aufgaben',
      items: [
        { text: 'Leitet die Gesellschaft in eigener Verantwortung und vertritt sie gerichtlich und außergerichtlich', loesung: 1 },
        { text: 'Bestellt die Mitglieder des Vorstands und überwacht deren Geschäftsführung', loesung: 2 },
        { text: 'Beschließt über die Verwendung des Bilanzgewinns', loesung: 3 },
        { text: 'Wählt die Vertreter der Aktionäre in den Aufsichtsrat', loesung: 3 },
        { text: 'Prüft den Jahresabschluss und berichtet der Hauptversammlung darüber', loesung: 2 }
      ],
      erklaerung: 'Der Vorstand leitet die AG und vertritt sie (§§ 76, 78 AktG). Der Aufsichtsrat bestellt und überwacht den Vorstand (§§ 84, 111 AktG) und prüft den Jahresabschluss (§ 171 AktG). Die Hauptversammlung der Aktionäre wählt die Anteilseignervertreter im Aufsichtsrat und beschließt über die Verwendung des Bilanzgewinns (§ 119 Abs. 1 AktG).'
    },
    {
      nr: 18, thema: 'rechtsformen', typ: 'einfach',
      text: 'Herr Brinkmann erklärt den Auszubildenden die Rechtsform ihres Ausbildungsbetriebs.',
      frage: 'Welche der folgenden Aussagen zur Aktiengesellschaft trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Aktionäre haften für die Schulden der AG unbeschränkt mit ihrem Privatvermögen.',
        'Das Mindestgrundkapital beträgt 50.000,00 EUR; den Gläubigern haftet nur das Gesellschaftsvermögen.',
        'Die AG wird in Abteilung A des Handelsregisters eingetragen.',
        'Eine AG kann nur von mindestens fünf Gründern errichtet werden.',
        'Die Aktien einer AG müssen an der Börse gehandelt werden.'
      ],
      loesung: 2,
      erklaerung: 'Das Mindestgrundkapital der AG beträgt 50.000,00 EUR (§ 7 AktG). Für Verbindlichkeiten haftet den Gläubigern nur das Gesellschaftsvermögen (§ 1 Abs. 1 Satz 2 AktG). Die AG kann von einer oder mehreren Personen gegründet werden (§ 2 AktG) und wird als Kapitalgesellschaft in Abteilung B des Handelsregisters eingetragen. Eine Börsennotierung ist nicht vorgeschrieben.'
    },
    {
      nr: 19, thema: 'zusammenschluesse', typ: 'einfach',
      text: 'Die Weserbyte Solutions AG soll künftig unter dem Dach der neu gegründeten Weser Digital Holding AG geführt werden. Die Holding hält auch die Mehrheit an zwei weiteren Softwarehäusern und plant die Übernahme eines großen Wettbewerbers.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Durch die Eingliederung unter die Holding verlieren alle Tochtergesellschaften ihre rechtliche Selbstständigkeit.',
        'Die Holding und die von ihr einheitlich geleiteten Tochtergesellschaften bilden einen Konzern; die Übernahme des Wettbewerbers muss beim Bundeskartellamt angemeldet werden, wenn die gesetzlichen Umsatzschwellen überschritten sind.',
        'Eine Holding ist ein Zusammenschluss, bei dem die beteiligten Unternehmen lediglich ihre Preise absprechen.',
        'Unternehmensübernahmen sind in Deutschland grundsätzlich verboten.',
        'Für die Fusionskontrolle ist die Industrie- und Handelskammer zuständig.'
      ],
      loesung: 2,
      erklaerung: 'Rechtlich selbstständige Unternehmen unter einheitlicher Leitung bilden einen Konzern (§ 18 Abs. 1 AktG); die Holding ist die Dachgesellschaft, die Beteiligungen hält und die Töchter steuert. Übernahmen unterliegen der Fusionskontrolle: Werden die Umsatzschwellen des § 35 GWB überschritten, ist der Zusammenschluss vor dem Vollzug beim Bundeskartellamt anzumelden (§ 39 GWB), das ihn bei erheblicher Behinderung des Wettbewerbs untersagen kann (§ 36 GWB). Preisabsprachen kennzeichnen das verbotene Kartell.'
    },
    {
      nr: 20, thema: 'sozialversicherung', typ: 'zahl',
      text: 'Für die Krankenversicherung von Herrn Rademacher gelten folgende Werte: Beitragsbemessungsgrenze 5.812,50 EUR monatlich, allgemeiner Beitragssatz 14,6 %, Zusatzbeitragssatz seiner Krankenkasse 2,9 %. Arbeitgeber und Arbeitnehmer tragen den allgemeinen Beitrag und den Zusatzbeitrag jeweils zur Hälfte.',
      frage: 'Berechnen Sie den monatlichen Arbeitnehmeranteil von Herrn Rademacher zur Krankenversicherung in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf die zweite Nachkommastelle.',
      loesung: 508.59, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Beiträge werden nur bis zur Beitragsbemessungsgrenze erhoben (§ 223 Abs. 3 SGB V), hier also auf 5.812,50 EUR statt auf 6.400,00 EUR. Arbeitnehmer und Arbeitgeber tragen den Beitrag je zur Hälfte (§ 249 Abs. 1 SGB V): 14,6 % ÷ 2 + 2,9 % ÷ 2 = 7,3 % + 1,45 % = 8,75 %. 5.812,50 EUR × 8,75 % = 508,59375 EUR ≈ 508,59 EUR.'
    },
    {
      nr: 21, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Auf seiner Gehaltsabrechnung findet Herr Rademacher bei der Pflegeversicherung einen „Beitragszuschlag für Kinderlose“. Der allgemeine Beitragssatz zur Pflegeversicherung beträgt 3,6 %, der Beitragszuschlag für Kinderlose 0,6 Beitragssatzpunkte.',
      frage: 'Welche der folgenden Aussagen zum Beitragszuschlag für Kinderlose trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Den Zuschlag tragen Arbeitgeber und Arbeitnehmer je zur Hälfte.',
        'Den Zuschlag trägt Herr Rademacher allein; er wird von kinderlosen Mitgliedern ab Vollendung des 23. Lebensjahres erhoben.',
        'Der Zuschlag wird nur von Rentnerinnen und Rentnern erhoben.',
        'Den Zuschlag trägt allein der Arbeitgeber.',
        'Der Zuschlag fällt erst ab Vollendung des 40. Lebensjahres an.'
      ],
      loesung: 2,
      erklaerung: '§ 55 Abs. 3 SGB XI: Kinderlose Mitglieder zahlen nach Ablauf des Monats, in dem sie das 23. Lebensjahr vollendet haben, einen Zuschlag von 0,6 Beitragssatzpunkten. Diesen Zuschlag tragen die Beschäftigten allein (§ 58 Abs. 1 SGB XI). Herr Rademacher zahlt also 1,8 % + 0,6 % = 2,4 %, der Arbeitgeber 1,8 %.'
    },
    {
      nr: 22, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Weserbyte Solutions AG hat das Kundenprojekt „Hafenportal“ abgeschlossen. Dem Projekt sind Erträge von 243.000,00 EUR und Aufwendungen von 180.000,00 EUR zuzurechnen.',
      frage: 'Berechnen Sie die Wirtschaftlichkeit des Projekts.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf die zweite Nachkommastelle.',
      loesung: 1.35, nachkommastellen: 2,
      erklaerung: 'Wirtschaftlichkeit = Ertrag ÷ Aufwand = 243.000,00 EUR ÷ 180.000,00 EUR = 1,35. Ein Wert über 1 bedeutet, dass die Erträge die Aufwendungen übersteigen; je höher der Wert, desto wirtschaftlicher das Projekt.'
    },
    {
      nr: 23, thema: 'organisation', typ: 'einfach',
      text: 'Für die Entwicklung einer neuen Tracking-App arbeitet ein Team der Weserbyte Solutions AG nach dem agilen Vorgehensmodell Scrum.',
      frage: 'Welches der folgenden Merkmale kennzeichnet agiles Projektmanagement?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Merkmal in das Kästchen ein.',
      optionen: [
        'Alle Anforderungen werden zu Projektbeginn vollständig festgelegt und danach nicht mehr verändert.',
        'Das Produkt wird in kurzen, sich wiederholenden Zeitabschnitten (Sprints) schrittweise entwickelt; Rückmeldungen des Kunden fließen laufend ein.',
        'Jede Entscheidung im Projekt trifft ausschließlich der Vorstand.',
        'Das Ergebnis wird erst am Projektende einmalig an den Kunden ausgeliefert.',
        'Das Team arbeitet ohne Abstimmung; regelmäßige Besprechungen sind nicht vorgesehen.'
      ],
      loesung: 2,
      erklaerung: 'Agiles Projektmanagement (z. B. Scrum) arbeitet iterativ: In kurzen Sprints entstehen nutzbare Teilergebnisse, Anforderungen werden laufend mit dem Kunden angepasst, das Team stimmt sich täglich ab (Daily Scrum). Eine gesetzliche Regelung gibt es dafür nicht; Grundlage sind das Agile Manifest und der Scrum Guide. Vollständige Planung zu Beginn und Auslieferung erst am Ende kennzeichnen das klassische Wasserfallmodell.'
    },
    {
      nr: 24, thema: 'datenschutz', typ: 'mehrfach',
      text: 'Ein ehemaliger Kunde schreibt der Weserbyte Solutions AG, er wolle wissen, welche Daten über ihn gespeichert sind, und verlangt anschließend deren Löschung. Der Vertrag ist seit Jahren beendet, gesetzliche Aufbewahrungsfristen sind abgelaufen.',
      frage: 'Welche der folgenden Aussagen zu den Rechten des Kunden nach der DSGVO treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Der Kunde hat ein Recht auf Auskunft, ob und welche personenbezogenen Daten über ihn verarbeitet werden.',
        'Die Auskunft darf erst nach Zahlung einer Bearbeitungsgebühr von 50,00 EUR erteilt werden.',
        'Die Weserbyte Solutions AG muss die Daten unverzüglich löschen, weil sie für den ursprünglichen Zweck nicht mehr notwendig sind und keine Aufbewahrungspflicht entgegensteht.',
        'Ein Recht auf Löschung besteht nur, wenn der Kunde einen Rechtsanwalt beauftragt.',
        'Die Weserbyte Solutions AG muss auf das Auskunftsersuchen erst innerhalb eines Jahres reagieren.',
        'Die Rechte aus der DSGVO gelten nur für Kunden mit einem laufenden Vertrag.'
      ],
      loesung: [1, 3],
      erklaerung: 'Art. 15 DSGVO gibt ein Recht auf Auskunft über die verarbeiteten Daten. Nach Art. 17 Abs. 1 Buchst. a DSGVO sind Daten unverzüglich zu löschen, wenn sie für ihren Zweck nicht mehr notwendig sind; gesetzliche Aufbewahrungspflichten gehen vor (Art. 17 Abs. 3 Buchst. b DSGVO). Die Auskunft ist grundsätzlich unentgeltlich und unverzüglich, spätestens innerhalb eines Monats zu erteilen (Art. 12 Abs. 3 und 5 DSGVO).'
    },
    {
      nr: 25, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'Die 52-jährige Bewerberin Gesa Thielking wurde für eine Stelle als Datenbankadministratorin abgelehnt. Im Absageschreiben steht, man suche „jemanden für unser junges Team“. Auch bei benachteiligungsfreier Auswahl wäre jedoch eine besser qualifizierte Bewerberin eingestellt worden.',
      frage: 'Welche der folgenden Aussagen zu den Ansprüchen von Frau Thielking nach dem AGG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Thielking hat einen Anspruch darauf, eingestellt zu werden.',
        'Frau Thielking kann eine angemessene Entschädigung von höchstens drei Monatsgehältern verlangen; sie muss den Anspruch innerhalb von zwei Monaten nach Zugang der Ablehnung schriftlich geltend machen.',
        'Ansprüche nach dem AGG können nur innerhalb einer Woche mündlich geltend gemacht werden.',
        'Eine Entschädigung ist ausgeschlossen, weil eine Benachteiligung wegen des Alters im AGG nicht geregelt ist.',
        'Frau Thielking muss beweisen, dass der Arbeitgeber sie absichtlich benachteiligen wollte; Indizien reichen nicht aus.'
      ],
      loesung: 2,
      erklaerung: 'Das Alter ist ein geschütztes Merkmal (§ 1 AGG). § 15 Abs. 2 AGG: Bei einer Nichteinstellung darf die Entschädigung drei Monatsgehälter nicht übersteigen, wenn die Person auch bei benachteiligungsfreier Auswahl nicht eingestellt worden wäre. § 15 Abs. 4 AGG: schriftliche Geltendmachung innerhalb von zwei Monaten ab Zugang der Ablehnung; die Klage muss innerhalb von drei Monaten danach erhoben werden (§ 61b ArbGG). Ein Einstellungsanspruch besteht nicht (§ 15 Abs. 6 AGG). Indizien genügen, dann muss der Arbeitgeber das Gegenteil beweisen (§ 22 AGG).'
    },
    {
      nr: 26, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die Fachkraft für Arbeitssicherheit Rolf Dreyer erläutert in einer Unterweisung die Pflichten der Beschäftigten nach dem Arbeitsschutzgesetz.',
      frage: 'In welchem der folgenden Fälle **verstößt** eine beschäftigte Person gegen ihre Pflichten nach dem Arbeitsschutzgesetz?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Fall in das Kästchen ein.',
      optionen: [
        'Ein Systemadministrator meldet seinem Vorgesetzten sofort ein beschädigtes Stromkabel im Serverraum.',
        'Eine Auszubildende folgt bei einem Probealarm den gekennzeichneten Fluchtwegen zum Sammelplatz.',
        'Eine Mitarbeiterin weist die Fachkraft für Arbeitssicherheit auf eine defekte Notbeleuchtung im Treppenhaus hin.',
        'Ein Techniker trägt beim Transport schwerer Serverhardware im Lager entgegen der Unterweisung nicht die ihm zur Verfügung gestellten Sicherheitsschuhe.',
        'Ein Mitarbeiter nimmt an der jährlichen Unterweisung teil und befolgt die Hinweise.'
      ],
      loesung: 4,
      erklaerung: '§ 15 ArbSchG: Beschäftigte müssen nach ihren Möglichkeiten und gemäß der Unterweisung für Sicherheit und Gesundheit sorgen und insbesondere Arbeitsmittel, Schutzvorrichtungen und die zur Verfügung gestellte persönliche Schutzausrüstung bestimmungsgemäß verwenden. § 16 ArbSchG: Festgestellte erhebliche Gefahren und Defekte an Schutzsystemen sind unverzüglich zu melden; Beschäftigte unterstützen Arbeitgeber, Fachkraft für Arbeitssicherheit und Betriebsarzt.'
    },
    {
      nr: 27, thema: 'arbeitsschutz', typ: 'datum',
      text: 'Frau Harms bringt ihr Kind am Montag, dem 14.02.2028, zur Welt. Es handelt sich weder um eine Früh- noch um eine Mehrlingsgeburt, beim Kind wurde keine Behinderung festgestellt.',
      kasten: {
        titel: '§ 3 Mutterschutzgesetz (MuSchG) – Schutzfristen (Auszug)',
        absaetze: [
          '(2) Der Arbeitgeber darf eine Frau bis zum Ablauf von acht Wochen nach der Entbindung nicht beschäftigen (Schutzfrist nach der Entbindung). Die Schutzfrist nach der Entbindung verlängert sich auf zwölf Wochen'
        ],
        liste: [
          'bei Frühgeburten,',
          'bei Mehrlingsgeburten und,',
          'wenn vor Ablauf von acht Wochen nach der Entbindung bei dem Kind eine Behinderung im Sinne von § 2 Absatz 1 Satz 1 des Neunten Buches Sozialgesetzbuch ärztlich festgestellt wird.'
        ]
      },
      frage: 'Mit Ablauf welchen Tages endet die Schutzfrist nach der Entbindung von Frau Harms?',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '10.04.2028',
      erklaerung: 'Es gilt die Schutzfrist von acht Wochen (§ 3 Abs. 2 MuSchG). Der Tag der Entbindung zählt nicht mit; eine Wochenfrist endet mit dem Tag, der durch seine Benennung dem Tag der Entbindung entspricht (§§ 187 Abs. 1, 188 Abs. 2 BGB), hier also an einem Montag. 14.02.2028 + 56 Tage: 2028 ist ein Schaltjahr, der Februar hat 29 Tage (15 Tage bis 29.02., 31 Tage im März, 10 Tage im April) = 10.04.2028.'
    },
    {
      nr: 28, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Frau Harms möchte im Anschluss an die Schutzfrist Elternzeit nehmen.',
      frage: 'Welche der folgenden Aussagen zur Elternzeit nach dem Bundeselterngeld- und Elternzeitgesetz (BEEG) trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Elternzeit können nur Mütter nehmen.',
        'Die Elternzeit muss vom Arbeitgeber genehmigt werden, der sie ohne Angabe von Gründen ablehnen kann.',
        'Ab dem Verlangen der Elternzeit, frühestens acht Wochen vor ihrem Beginn, und während der Elternzeit darf der Arbeitgeber grundsätzlich nicht kündigen.',
        'Während der Elternzeit ist jede Teilzeitarbeit verboten.',
        'Der Anspruch auf Elternzeit besteht nur bis zum ersten Geburtstag des Kindes.'
      ],
      loesung: 3,
      erklaerung: '§ 18 Abs. 1 BEEG: Kündigungsschutz ab dem Verlangen der Elternzeit, frühestens acht Wochen vor Beginn einer Elternzeit bis zum dritten Geburtstag, und während der Elternzeit; Ausnahmen nur mit Zulassung der zuständigen Behörde. Elternzeit können Mütter und Väter beanspruchen, bis zur Vollendung des dritten Lebensjahres des Kindes (§ 15 Abs. 1 und 2 BEEG). Sie ist spätestens sieben Wochen vor Beginn zu verlangen (§ 16 Abs. 1 BEEG). Teilzeit ist bis zu 32 Wochenstunden zulässig (§ 15 Abs. 4 BEEG).'
    },
    {
      nr: 29, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Weserbyte Solutions AG tauscht 120 alte Notebooks und Monitore aus. Ein Auszubildender schlägt vor, die Geräte über den Restmüll zu entsorgen.',
      frage: 'Welche der folgenden Aussagen zur Entsorgung der Altgeräte trifft nach dem Elektro- und Elektronikgerätegesetz (ElektroG) zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Altgeräte dürfen über den Restmüll entsorgt werden, wenn sie vorher zerlegt werden.',
        'Altgeräte sind getrennt vom unsortierten Siedlungsabfall zu erfassen; darauf weist das Symbol der durchgestrichenen Mülltonne auf den Geräten hin.',
        'Für gewerblich genutzte Geräte gilt das ElektroG nicht.',
        'Die Geräte müssen an den Hersteller zurückgeschickt werden, jede andere Entsorgung ist verboten.',
        'Akkus und Batterien müssen bei der Entsorgung in den Geräten verbleiben.'
      ],
      loesung: 2,
      erklaerung: '§ 10 Abs. 1 ElektroG: Besitzer von Altgeräten müssen diese getrennt vom unsortierten Siedlungsabfall erfassen lassen und Altbatterien und Altakkus, die nicht vom Gerät umschlossen sind, vorher entnehmen. Die Geräte tragen das Symbol der durchgestrichenen Mülltonne (§ 9 ElektroG). Das Gesetz gilt auch für gewerblich genutzte Geräte; Rückgabe ist beim Hersteller oder über zertifizierte Entsorger möglich. Personenbezogene Daten auf den Geräten muss der Besitzer vorher löschen.'
    },
    {
      nr: 30, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Weserbyte Solutions AG kauft 120 neue Monitore. Der Einkäufer Jörn Tiedemann vergleicht die Angebote und achtet dabei auf das EU-Energielabel.',
      frage: 'Welche der folgenden Aussagen zum EU-Energielabel trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Das EU-Energielabel …',
      optionen: [
        'ist ein freiwilliges Umweltzeichen, das vom Umweltbundesamt unter dem Namen „Blauer Engel“ vergeben wird.',
        'bestätigt, dass der Monitor die Sicherheitsanforderungen der EU erfüllt.',
        'ordnet die Geräte in Energieeffizienzklassen von A (sehr effizient) bis G ein und gibt u. a. den Energieverbrauch an; für Bildschirme ist es vorgeschrieben.',
        'zeigt an, dass die Rohstoffe des Monitors aus fairem Handel stammen.',
        'gibt ausschließlich den Anteil recycelter Kunststoffe im Gehäuse an.'
      ],
      loesung: 3,
      erklaerung: 'Die EU-Verordnung 2017/1369 legt den Rahmen für die Energieverbrauchskennzeichnung fest; in Deutschland ergänzt das Energieverbrauchskennzeichnungsgesetz (EnVKG) die Regelungen. Für bestimmte Produktgruppen wie Bildschirme, Kühlgeräte oder Waschmaschinen ist das Label Pflicht. Es zeigt die Effizienzklasse von A bis G und den Energieverbrauch, damit Käufer sparsame Geräte erkennen. Der Blaue Engel ist ein freiwilliges Umweltzeichen, das CE-Zeichen bestätigt die Einhaltung von EU-Sicherheitsanforderungen, das Fairtrade-Siegel steht für fairen Handel.'
    }
  ]
});
