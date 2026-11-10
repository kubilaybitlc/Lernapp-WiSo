// Übungssatz 16 – eigene Aufgaben im Stil der IHK-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-16',
  titel: 'Übungssatz 16',
  untertitel: 'Harzer Bitwerk GmbH',
  ausgangssituation:
    'Die Harzer Bitwerk GmbH mit Sitz in Wernigerode entwickelt Software für Tourismusregionen und Verkehrsunternehmen, zum Beispiel Buchungsportale, Fahrplan-Apps und digitale Gästekarten. Sie beschäftigt in der Regel 140 Arbeitnehmerinnen und Arbeitnehmer. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 3,
      text: 'Die Harzer Bitwerk GmbH bildet Fachinformatikerinnen und Fachinformatiker für Anwendungsentwicklung und für Systemintegration aus. Ausbildungsleiterin ist Silke Ohlendorf. Im zweiten Ausbildungsjahr sind der 17-jährige Paul Gerlach (Systemintegration, geboren am 14.03.2009) und die 21-jährige Emily Sander (Anwendungsentwicklung).'
    },
    {
      von: 4, bis: 6,
      text: 'In der Harzer Bitwerk GmbH sind in der Regel 140 Arbeitnehmerinnen und Arbeitnehmer beschäftigt, darunter vier Bereichsleitungen mit Prokura, die selbstständig über Einstellungen und Entlassungen in ihren Bereichen entscheiden. Der Betriebsrat besteht aus sieben Mitgliedern, Vorsitzender ist Matthias Rennert.'
    },
    {
      von: 10, bis: 12,
      text: 'Die Harzer Bitwerk GmbH wird von der externen Fachkraft für Arbeitssicherheit Gerd Kühne und der Betriebsärztin Dr. Anja Thiel betreut.'
    },
    {
      von: 13, bis: 14,
      text: 'Gesellschafter der Harzer Bitwerk GmbH sind Katrin Wedekind und Jonas Brecht. Beide sind zu Geschäftsführern bestellt. Das Stammkapital beträgt 50.000,00 EUR.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'ausbildung', typ: 'einfach',
      text: 'Frau Ohlendorf plant den Urlaub der Auszubildenden für das Kalenderjahr 2027. Weder der Ausbildungsvertrag noch ein Tarifvertrag sehen mehr Urlaub vor als das Gesetz.',
      frage: 'Welche der folgenden Aussagen zum gesetzlichen Mindesturlaub von Herrn Gerlach und Frau Sander im Jahr 2027 trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Beide haben als Auszubildende Anspruch auf mindestens 30 Werktage Urlaub.',
        'Herr Gerlach hat Anspruch auf mindestens 25 Werktage nach dem Jugendarbeitsschutzgesetz, Frau Sander auf mindestens 24 Werktage nach dem Bundesurlaubsgesetz.',
        'Herr Gerlach hat nur Anspruch auf 24 Werktage, weil er im März 2027 volljährig wird.',
        'Frau Sander hat als Auszubildende keinen gesetzlichen Urlaubsanspruch, sondern nur den im Ausbildungsvertrag vereinbarten.',
        'Beide erwerben ihren Urlaubsanspruch erst nach einer Wartezeit von zwölf Monaten.'
      ],
      loesung: 2,
      erklaerung: 'Für Jugendliche richtet sich der Mindesturlaub nach dem Alter zu Beginn des Kalenderjahres (§ 19 Abs. 2 JArbSchG): Herr Gerlach ist am 01.01.2027 noch nicht 18 Jahre alt und hat daher mindestens 25 Werktage, auch wenn er im März volljährig wird. Für volljährige Auszubildende gilt das Bundesurlaubsgesetz mit mindestens 24 Werktagen (§ 3 Abs. 1 BUrlG); Auszubildende sind dort ausdrücklich einbezogen (§ 2 BUrlG). Die Wartezeit für den vollen Urlaubsanspruch beträgt sechs Monate (§ 4 BUrlG). Jugendlichen soll der Urlaub in den Berufsschulferien gegeben werden (§ 19 Abs. 3 JArbSchG).'
    },
    {
      nr: 2, thema: 'ausbildung', typ: 'einfach',
      text: 'Für einen wichtigen Kundentermin arbeitet die Auszubildende Emily Sander an drei Tagen jeweils zwei Stunden länger als die im Ausbildungsvertrag vereinbarte tägliche Ausbildungszeit.',
      frage: 'Welche der folgenden Aussagen zu diesen zusätzlichen Stunden trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die zusätzlichen Stunden sind mit der Ausbildungsvergütung bereits abgegolten.',
        'Mehrarbeit ist für volljährige Auszubildende generell verboten.',
        'Die zusätzlichen Stunden dürfen nur mit Zustimmung der IHK geleistet werden.',
        'Die zusätzlichen Stunden sind besonders zu vergüten oder durch entsprechende Freizeit auszugleichen.',
        'Die zusätzlichen Stunden werden erst nach dem Ende der Ausbildung mit dem ersten Gehalt ausgeglichen.'
      ],
      loesung: 4,
      erklaerung: '§ 17 Abs. 7 BBiG: Eine über die vereinbarte regelmäßige tägliche Ausbildungszeit hinausgehende Beschäftigung ist besonders zu vergüten oder durch die Gewährung entsprechender Freizeit auszugleichen. Für volljährige Auszubildende gelten die Grenzen des Arbeitszeitgesetzes (höchstens zehn Stunden werktäglich, § 3 ArbZG), für Jugendliche die strengeren Regeln des Jugendarbeitsschutzgesetzes. Auch bei Mehrarbeit dürfen nur Aufgaben übertragen werden, die dem Ausbildungszweck dienen (§ 14 Abs. 3 BBiG).'
    },
    {
      nr: 3, thema: 'ausbildung', typ: 'einfach',
      text: 'Neben den IT-Berufen bildet die Harzer Bitwerk GmbH in einem weiteren Beruf aus, dessen Ausbildungsordnung keine gestreckte Abschlussprüfung, sondern eine Zwischenprüfung vorsieht. Eine Auszubildende fragt Frau Ohlendorf, welche Bedeutung die Zwischenprüfung hat.',
      frage: 'Welche der folgenden Aussagen zur Zwischenprüfung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Zwischenprüfung dient der Ermittlung des Ausbildungsstandes; die Teilnahme ist Voraussetzung für die Zulassung zur Abschlussprüfung, ihr Ergebnis zählt aber nicht für das Abschlussergebnis.',
        'Wer die Zwischenprüfung nicht besteht, wird nicht zur Abschlussprüfung zugelassen.',
        'Das Ergebnis der Zwischenprüfung geht mit 20 % in das Gesamtergebnis der Abschlussprüfung ein.',
        'Die Teilnahme an der Zwischenprüfung ist freiwillig.',
        'Die Zwischenprüfung wird von der Berufsschule abgenommen und ersetzt dort das Abschlusszeugnis.'
      ],
      loesung: 1,
      erklaerung: '§ 48 Abs. 1 BBiG: Während der Berufsausbildung ist zur Ermittlung des Ausbildungsstandes eine Zwischenprüfung entsprechend der Ausbildungsordnung durchzuführen; abgenommen wird sie von der IHK. Zur Abschlussprüfung wird nur zugelassen, wer an den vorgeschriebenen Zwischenprüfungen teilgenommen hat (§ 43 Abs. 1 Nr. 2 BBiG). Bestanden werden muss sie nicht, und ihr Ergebnis fließt nicht in die Abschlussnote ein. Anders bei der gestreckten Abschlussprüfung der IT-Berufe: Dort ist Teil 1 bereits Bestandteil der Abschlussprüfung und zählt mit dem in der Ausbildungsordnung festgelegten Anteil (§ 5 Abs. 2 Nr. 2 BBiG).'
    },
    {
      nr: 4, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Der Wahlvorstand bereitet die nächste regelmäßige Betriebsratswahl vor. Ein Teamleiter schlägt vor, die Wahl auf der Betriebsversammlung per Handzeichen durchzuführen, damit es schneller geht.',
      frage: 'Welche der folgenden Aussagen zur Wahl des Betriebsrats trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Wahl darf auf der Betriebsversammlung per Handzeichen stattfinden, wenn die Mehrheit zustimmt.',
        'Die Teamleitungen dürfen die Stimmen ihrer Teams gesammelt abgeben.',
        'Der Betriebsrat wird in geheimer und unmittelbarer Wahl gewählt.',
        'Die Geschäftsführung legt fest, welche Beschäftigten kandidieren dürfen.',
        'Wählen dürfen nur Mitglieder einer Gewerkschaft.'
      ],
      loesung: 3,
      erklaerung: '§ 14 Abs. 1 BetrVG: Der Betriebsrat wird in geheimer und unmittelbarer Wahl gewählt. Jede wahlberechtigte Person gibt ihre Stimme selbst und unbeobachtet ab; eine Wahl per Handzeichen oder die Stimmabgabe durch Dritte ist unzulässig. Wahlberechtigt sind alle Arbeitnehmer ab 16 Jahren (§ 7 BetrVG), unabhängig von einer Gewerkschaftsmitgliedschaft. Wahlvorschläge machen die wahlberechtigten Arbeitnehmer und die im Betrieb vertretenen Gewerkschaften (§ 14 Abs. 3 BetrVG); der Arbeitgeber darf die Wahl nicht beeinflussen (§ 20 BetrVG).'
    },
    {
      nr: 5, thema: 'mitbestimmung', typ: 'mehrfach',
      text: 'Die Geschäftsführung plant für das kommende Jahr mehrere Maßnahmen. Herr Rennert prüft, bei welchen Maßnahmen der Betriebsrat mitbestimmen darf.',
      frage: 'Bei welchen der folgenden Maßnahmen hat der Betriebsrat ein Mitbestimmungsrecht nach § 87 Abs. 1 BetrVG?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Maßnahmen in die Kästchen ein.',
      optionen: [
        'Regelungen zum Schutz vor Gesundheitsgefahren an den Bildschirmarbeitsplätzen im Rahmen des Arbeitsschutzgesetzes',
        'Erhöhung der Preise für die Software-Lizenzen',
        'Grundsätze für die Durchführung von Gruppenarbeit, bei der Entwicklungsteams eine übertragene Gesamtaufgabe weitgehend eigenverantwortlich erledigen',
        'Kauf eines neuen Bürogebäudes in Halberstadt',
        'Auswahl der Bank für das Firmenkonto',
        'Höhe der Gewinnausschüttung an die Gesellschafter'
      ],
      loesung: [1, 3],
      erklaerung: '§ 87 Abs. 1 BetrVG nennt die sozialen Angelegenheiten mit echtem Mitbestimmungsrecht, u. a. Regelungen über den Gesundheitsschutz im Rahmen der gesetzlichen Vorschriften (Nr. 7) und Grundsätze über die Durchführung von Gruppenarbeit (Nr. 13). Kommt keine Einigung zustande, entscheidet die Einigungsstelle (§ 87 Abs. 2 BetrVG). Preise, Investitionen, Bankwahl und Gewinnverwendung sind unternehmerische Entscheidungen ohne Mitbestimmung.'
    },
    {
      nr: 6, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Bereichsleiter Tobias Kramm, einer der vier leitenden Angestellten, ist mit einer Regelung zu seiner Vergütung unzufrieden und möchte sich an den Betriebsrat wenden.',
      frage: 'Welche der folgenden Aussagen zur Vertretung der leitenden Angestellten trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Betriebsrat vertritt auch die leitenden Angestellten und muss sich um das Anliegen von Herrn Kramm kümmern.',
        'Leitende Angestellte wählen den Betriebsrat mit und können in ihn gewählt werden.',
        'Leitende Angestellte werden durch die Jugend- und Auszubildendenvertretung vertreten.',
        'Für leitende Angestellte ist allein die Gewerkschaft zuständig, ein eigenes Gremium ist gesetzlich ausgeschlossen.',
        'Das Betriebsverfassungsgesetz gilt für leitende Angestellte grundsätzlich nicht; ein Sprecherausschuss kann erst gewählt werden, wenn in der Regel mindestens zehn leitende Angestellte beschäftigt sind.'
      ],
      loesung: 5,
      erklaerung: '§ 5 Abs. 3 BetrVG: Das Gesetz findet, soweit nicht ausdrücklich etwas anderes bestimmt ist, keine Anwendung auf leitende Angestellte, z. B. Angestellte mit selbstständiger Einstellungs- und Entlassungsbefugnis oder mit Prokura. Sie wählen den Betriebsrat nicht und werden von ihm nicht vertreten. Ihre Interessen vertritt ein Sprecherausschuss, der in Betrieben mit in der Regel mindestens zehn leitenden Angestellten gewählt wird (§ 1 Abs. 1 SprAuG); bei vier leitenden Angestellten ist das hier nicht möglich. Die Einstellung eines leitenden Angestellten muss der Arbeitgeber dem Betriebsrat aber rechtzeitig mitteilen (§ 105 BetrVG).'
    },
    {
      nr: 7, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Harzer Bitwerk GmbH möchte verhindern, dass der Entwickler Malte Hiller nach seinem Ausscheiden sofort für einen Konkurrenten arbeitet. In einem Nachtrag zum Arbeitsvertrag soll ein Wettbewerbsverbot für drei Jahre nach dem Ende des Arbeitsverhältnisses vereinbart werden, ohne dass Herr Hiller dafür eine Zahlung erhält.',
      frage: 'Welche der folgenden Aussagen zum nachvertraglichen Wettbewerbsverbot trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Wettbewerbsverbot ist wirksam, weil Herr Hiller den Nachtrag freiwillig unterschreibt.',
        'Ein nachvertragliches Wettbewerbsverbot ist nur verbindlich, wenn es schriftlich vereinbart wird und der Arbeitgeber für seine Dauer eine Karenzentschädigung von mindestens der Hälfte der zuletzt bezogenen vertragsmäßigen Leistungen zahlt; es darf höchstens zwei Jahre dauern.',
        'Ein Wettbewerbsverbot nach dem Ende des Arbeitsverhältnisses gilt für alle Arbeitnehmer automatisch für drei Jahre.',
        'Die Karenzentschädigung für ein Wettbewerbsverbot zahlt die Agentur für Arbeit.',
        'Nachvertragliche Wettbewerbsverbote sind in Deutschland grundsätzlich verboten.'
      ],
      loesung: 2,
      erklaerung: 'Für nachvertragliche Wettbewerbsverbote gelten die §§ 74 ff. HGB für alle Arbeitnehmer (§ 110 GewO). Das Verbot bedarf der Schriftform und der Aushändigung einer unterzeichneten Urkunde an den Arbeitnehmer (§ 74 Abs. 1 HGB). Es ist nur verbindlich, wenn sich der Arbeitgeber verpflichtet, für die Dauer des Verbots eine Entschädigung von mindestens der Hälfte der zuletzt bezogenen vertragsmäßigen Leistungen zu zahlen (§ 74 Abs. 2 HGB), und es darf nicht länger als zwei Jahre dauern (§ 74a Abs. 1 HGB). Ein Verbot ganz ohne Entschädigung ist nach der Rechtsprechung des BAG nichtig. Während des laufenden Arbeitsverhältnisses gilt dagegen ein gesetzliches Wettbewerbsverbot ohne besondere Vereinbarung.'
    },
    {
      nr: 8, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Harzer Bitwerk GmbH hat in den Jahren 2023, 2024 und 2025 allen Beschäftigten im November ein Weihnachtsgeld in Höhe eines halben Monatsgehalts gezahlt, ohne dabei einen Vorbehalt zu erklären. Im Arbeitsvertrag ist dazu nichts geregelt. Wegen gestiegener Kosten möchte die Geschäftsführung die Zahlung im Jahr 2026 streichen.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Durch die dreimalige vorbehaltlose Zahlung ist eine betriebliche Übung entstanden; die Beschäftigten haben einen Anspruch, den die GmbH nicht einseitig streichen kann.',
        'Ein Anspruch besteht nicht, weil das Weihnachtsgeld nicht im Arbeitsvertrag steht.',
        'Ein Anspruch entsteht erst nach einer zehnjährigen vorbehaltlosen Zahlung.',
        'Das Weihnachtsgeld steht nur den Gewerkschaftsmitgliedern zu.',
        'Über die Zahlung entscheidet allein der Betriebsrat.'
      ],
      loesung: 1,
      erklaerung: 'Gewährt der Arbeitgeber eine Leistung regelmäßig und vorbehaltlos (nach der Rechtsprechung des BAG beim Weihnachtsgeld in der Regel dreimal hintereinander), dürfen die Beschäftigten darauf vertrauen, dass sie die Leistung auch künftig erhalten. Aus dieser betrieblichen Übung entsteht ein vertraglicher Anspruch: Das stillschweigende Angebot des Arbeitgebers nehmen die Beschäftigten an, ohne dass es einer Erklärung bedarf (§ 151 BGB). Will der Arbeitgeber das verhindern, muss er bei der Zahlung klar erklären, dass es sich um eine freiwillige Leistung ohne Rechtsanspruch für die Zukunft handelt (Freiwilligkeitsvorbehalt). Einen entstandenen Anspruch kann er nicht einseitig streichen, sondern nur durch eine Vereinbarung oder eine Änderungskündigung beseitigen.'
    },
    {
      nr: 9, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Entwicklerin Ronja Pfeiffer arbeitet seit drei Jahren in Vollzeit mit 40 Wochenstunden. Sie möchte sich neben dem Beruf weiterbilden und ihre Arbeitszeit deshalb für zwei Jahre auf 30 Wochenstunden verringern. Danach will sie wieder in Vollzeit arbeiten.',
      frage: 'Welche der folgenden Aussagen zur Brückenteilzeit nach § 9a TzBfG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Eine Rückkehr zur Vollzeit ist nach der Teilzeit nur möglich, wenn gerade eine Vollzeitstelle frei ist.',
        'Brückenteilzeit gibt es nur für Beschäftigte, die Kinder betreuen oder Angehörige pflegen.',
        'Die Verringerung darf höchstens sechs Monate dauern.',
        'Frau Pfeiffer kann die Verringerung für einen im Voraus bestimmten Zeitraum von mindestens einem und höchstens fünf Jahren verlangen; danach kehrt sie zu ihrer ursprünglichen Arbeitszeit zurück.',
        'Ein Anspruch besteht nicht, weil die Harzer Bitwerk GmbH weniger als 200 Arbeitnehmer beschäftigt.'
      ],
      loesung: 4,
      erklaerung: '§ 9a TzBfG: Arbeitnehmer, deren Arbeitsverhältnis länger als sechs Monate besteht, können verlangen, dass ihre Arbeitszeit für einen im Voraus bestimmten Zeitraum von mindestens einem und höchstens fünf Jahren verringert wird; ein besonderer Grund ist nicht erforderlich. Nach Ablauf kehren sie zur ursprünglichen Arbeitszeit zurück. Der Anspruch besteht bei Arbeitgebern mit in der Regel mehr als 45 Arbeitnehmern (§ 9a Abs. 1 TzBfG); bei 46 bis 200 Arbeitnehmern darf der Arbeitgeber ablehnen, wenn bereits eine bestimmte Zahl von Beschäftigten in Brückenteilzeit ist (§ 9a Abs. 2 TzBfG). Wie bei der dauerhaften Teilzeit nach § 8 TzBfG ist die Verringerung spätestens drei Monate vor Beginn in Textform zu verlangen und kann aus betrieblichen Gründen abgelehnt werden.'
    },
    {
      nr: 10, thema: 'arbeitsschutz', typ: 'zuordnung',
      text: 'Herr Kühne erläutert neuen Beschäftigten, wer im Unternehmen welche Aufgaben im Arbeits- und Gesundheitsschutz übernimmt.',
      frage: 'Welche der folgenden Personen sind den nachstehenden Aufgaben zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Person in das Kästchen ein.',
      optionenTitel: 'Personen',
      optionen: [
        'Betriebsärztin',
        'Fachkraft für Arbeitssicherheit',
        'Sicherheitsbeauftragter',
        'Ersthelferin',
        'Brandschutzhelfer'
      ],
      itemsTitel: 'Aufgaben',
      items: [
        { text: 'Achtet als Beschäftigter im eigenen Team ehrenamtlich darauf, dass Schutzeinrichtungen benutzt werden, und macht auf Unfallgefahren aufmerksam.', loesung: 3 },
        { text: 'Berät den Arbeitgeber in Fragen des Gesundheitsschutzes und führt die arbeitsmedizinische Vorsorge durch.', loesung: 1 },
        { text: 'Bekämpft Entstehungsbrände mit Feuerlöschern und unterstützt die Räumung des Gebäudes.', loesung: 5 },
        { text: 'Berät den Arbeitgeber bei der sicherheitstechnischen Gestaltung der Arbeitsplätze und überprüft Betriebsanlagen und Arbeitsverfahren.', loesung: 2 },
        { text: 'Leistet bei einem Unfall sofort Hilfe, bis der Rettungsdienst eintrifft.', loesung: 4 }
      ],
      erklaerung: 'Betriebsärzte unterstützen den Arbeitgeber beim Gesundheitsschutz und führen die arbeitsmedizinische Vorsorge durch (§ 3 ASiG); Fachkräfte für Arbeitssicherheit beraten zur Arbeitssicherheit und prüfen Anlagen und Arbeitsverfahren (§ 6 ASiG). Sicherheitsbeauftragte sind Beschäftigte, die den Unternehmer ehrenamtlich unterstützen (§ 22 SGB VII). Ersthelfer leisten Erste Hilfe (§ 26 DGUV Vorschrift 1), Brandschutzhelfer bekämpfen Entstehungsbrände und unterstützen die Evakuierung (ASR A2.2). Die Verantwortung für den Arbeitsschutz bleibt beim Arbeitgeber (§ 3 ArbSchG).'
    },
    {
      nr: 11, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'In der Harzer Bitwerk GmbH ist derzeit keine Mitarbeiterin schwanger. Herr Kühne empfiehlt der Geschäftsführung trotzdem, die Gefährdungsbeurteilung um den Mutterschutz zu ergänzen.',
      frage: 'Welche der folgenden Aussagen zur Gefährdungsbeurteilung nach dem Mutterschutzgesetz trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Beurteilung ist erst erforderlich, wenn eine Mitarbeiterin ihre Schwangerschaft mitteilt.',
        'Sobald eine Mitarbeiterin schwanger ist, muss sie in jedem Fall sofort von der Arbeit freigestellt werden.',
        'Der Arbeitgeber muss für jede Tätigkeit vorab beurteilen, welche Gefährdungen für schwangere oder stillende Frauen bestehen könnten, auch wenn derzeit keine Schwangere beschäftigt ist.',
        'Die Gefährdungsbeurteilung zum Mutterschutz erstellt ausschließlich die Frauenärztin der Beschäftigten.',
        'Eine Gefährdungsbeurteilung zum Mutterschutz ist nur in Produktionsbetrieben vorgeschrieben.'
      ],
      loesung: 3,
      erklaerung: '§ 10 Abs. 1 MuSchG: Im Rahmen der Gefährdungsbeurteilung nach § 5 ArbSchG muss der Arbeitgeber für jede Tätigkeit die Gefährdungen für schwangere oder stillende Frauen beurteilen und festlegen, welche Schutzmaßnahmen erforderlich wären (anlassunabhängige Gefährdungsbeurteilung). Teilt eine Frau ihre Schwangerschaft mit, muss er die festgelegten Maßnahmen unverzüglich umsetzen und ihr ein Gespräch über weitere Anpassungen anbieten (§ 10 Abs. 2 MuSchG). Dabei gilt eine Rangfolge: zuerst die Arbeitsbedingungen umgestalten, dann einen anderen geeigneten Arbeitsplatz anbieten, erst zuletzt ein betriebliches Beschäftigungsverbot aussprechen (§ 13 MuSchG).'
    },
    {
      nr: 12, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Herr Kühne kontrolliert, ob alle Feuerlöscher im Gebäude mit dem richtigen Sicherheitszeichen gekennzeichnet sind.',
      frage: 'Welches der folgenden Zeichen kennzeichnet den Standort eines Feuerlöschers?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Zeichen in das Kästchen ein.',
      optionen: [
        { bild: 'rettung-erste-hilfe' },
        { bild: 'verbot-feuer' },
        { bild: 'brandschutz-feuerloescher' },
        { bild: 'gebot-gehoerschutz' },
        { bild: 'warn-spannung' }
      ],
      loesung: 3,
      erklaerung: 'Nach der Technischen Regel für Arbeitsstätten ASR A1.3 sind Brandschutzzeichen quadratisch mit rotem Grund und weißem Symbol (Zeichen 3: Feuerlöscher). Zeichen 1 ist ein Rettungszeichen (Erste Hilfe, grün), Zeichen 2 ein Verbotszeichen (Feuer, offene Zündquelle und Rauchen verboten), Zeichen 4 ein Gebotszeichen (Gehörschutz benutzen, blau) und Zeichen 5 ein Warnzeichen (Warnung vor elektrischer Spannung, gelb). Feuerlöscher müssen gut sichtbar, leicht erreichbar und gekennzeichnet sein (ASR A2.2).'
    },
    {
      nr: 13, thema: 'rechtsformen', typ: 'einfach',
      text: 'Geschäftsführerin Katrin Wedekind unterschreibt allein einen Rahmenvertrag über 180.000,00 EUR mit einem Verkehrsverbund. Herr Brecht ist zu diesem Zeitpunkt im Urlaub. Der Gesellschaftsvertrag enthält keine Regelung zur Vertretung der Gesellschaft.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jeder Geschäftsführer einer GmbH ist nach dem Gesetz stets allein vertretungsberechtigt.',
        'Der Vertrag wird erst wirksam, wenn die Gesellschafterversammlung ihn genehmigt hat.',
        'Verträge einer GmbH muss immer zusätzlich ein Prokurist unterschreiben.',
        'Der Vertrag ist wirksam, wenn der Betriebsrat ihm zustimmt.',
        'Ohne abweichende Regelung im Gesellschaftsvertrag vertreten mehrere Geschäftsführer die GmbH nur gemeinschaftlich; Frau Wedekind kann den Vertrag nicht allein wirksam abschließen, Herr Brecht muss mitwirken oder zustimmen.'
      ],
      loesung: 5,
      erklaerung: '§ 35 Abs. 2 Satz 1 GmbHG: Sind mehrere Geschäftsführer bestellt, sind sie alle nur gemeinschaftlich zur Vertretung der Gesellschaft befugt, es sei denn, der Gesellschaftsvertrag bestimmt etwas anderes (Gesamtvertretung). Handelt ein Geschäftsführer allein, ist der Vertrag schwebend unwirksam und wird wirksam, wenn der andere Geschäftsführer ihn genehmigt (§ 177 BGB). Der Gesellschaftsvertrag kann Einzelvertretung vorsehen; sie wird dann im Handelsregister eingetragen. Prokuristen, Betriebsrat oder Gesellschafterversammlung müssen bei der Vertretung nach außen nicht mitwirken.'
    },
    {
      nr: 14, thema: 'rechtsformen', typ: 'mehrfach',
      text: 'Die Harzer Bitwerk GmbH will eine Tochtergesellschaft, die Harzer Bitwerk Mobility GmbH, gründen und lässt dafür den Gesellschaftsvertrag vorbereiten.',
      frage: 'Welche der folgenden Angaben muss der Gesellschaftsvertrag einer GmbH nach § 3 Abs. 1 GmbHG mindestens enthalten?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Angaben in die Kästchen ein.',
      optionen: [
        'Die Namen aller künftigen Mitarbeiterinnen und Mitarbeiter',
        'Die Firma und den Sitz der Gesellschaft',
        'Den Businessplan für die ersten drei Geschäftsjahre',
        'Die Höhe der Geschäftsführergehälter',
        'Den Betrag des Stammkapitals',
        'Die Bankverbindung der Gesellschaft'
      ],
      loesung: [2, 5],
      erklaerung: '§ 3 Abs. 1 GmbHG: Der Gesellschaftsvertrag muss die Firma und den Sitz der Gesellschaft, den Gegenstand des Unternehmens, den Betrag des Stammkapitals sowie die Zahl und die Nennbeträge der Geschäftsanteile enthalten, die jeder Gesellschafter übernimmt. Er bedarf der notariellen Form (§ 2 Abs. 1 GmbHG). Geschäftsführergehälter werden im Anstellungsvertrag geregelt; Businessplan, Bankverbindung und Mitarbeiterlisten sind keine Pflichtangaben.'
    },
    {
      nr: 15, thema: 'sozialversicherung', typ: 'zahl',
      text: 'Der Softwarearchitekt Lars Hennecke erhält ein monatliches Bruttogehalt von 9.200,00 EUR. Im Jahr 2026 gelten in der Renten- und Arbeitslosenversicherung eine Beitragsbemessungsgrenze von 8.450,00 EUR monatlich sowie Beitragssätze von 18,6 % (Rentenversicherung) und 2,6 % (Arbeitslosenversicherung). Arbeitgeber und Arbeitnehmer tragen die Beiträge jeweils zur Hälfte.',
      frage: 'Berechnen Sie den monatlichen Arbeitnehmeranteil von Herrn Hennecke zur Renten- und Arbeitslosenversicherung zusammen in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf zwei Nachkommastellen.',
      loesung: 895.7, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Beiträge werden nur bis zur Beitragsbemessungsgrenze erhoben (§ 157 SGB VI, § 341 Abs. 4 SGB III); maßgeblich sind also 8.450,00 EUR statt 9.200,00 EUR. Arbeitnehmeranteil: 18,6 % ÷ 2 + 2,6 % ÷ 2 = 9,3 % + 1,3 % = 10,6 %. 8.450,00 EUR × 10,6 % = 895,70 EUR (Rentenversicherung 785,85 EUR, Arbeitslosenversicherung 109,85 EUR). Die Beitragstragung je zur Hälfte regeln § 168 Abs. 1 Nr. 1 SGB VI und § 346 Abs. 1 SGB III.'
    },
    {
      nr: 16, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Der Vertriebsmitarbeiter Sven Hartung verliert seinen Arbeitsplatz durch eine betriebsbedingte Kündigung. Er ist verheiratet und hat eine sechsjährige Tochter. Die Voraussetzungen für den Bezug von Arbeitslosengeld erfüllt er.',
      frage: 'Welche der folgenden Aussagen zur Höhe seines Arbeitslosengeldes trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Er erhält 100 % seines letzten Bruttogehalts.',
        'Er erhält 67 % seines pauschalierten Nettoentgelts, weil er ein Kind hat; ohne Kind wären es 60 %.',
        'Er erhält unabhängig von seinem bisherigen Verdienst einen einheitlichen Festbetrag, der für alle Arbeitslosen gleich ist.',
        'Die Höhe legt die Harzer Bitwerk GmbH im Kündigungsschreiben fest.',
        'Er erhält 80 % seines letzten Bruttogehalts, weil er verheiratet ist.'
      ],
      loesung: 2,
      erklaerung: '§ 149 SGB III: Das Arbeitslosengeld beträgt 67 % (erhöhter Leistungssatz) für Arbeitslose mit mindestens einem Kind im Sinne des Einkommensteuerrechts und 60 % (allgemeiner Leistungssatz) für alle übrigen, jeweils bezogen auf das pauschalierte Nettoentgelt (Leistungsentgelt). Grundlage ist das beitragspflichtige Bruttoentgelt im Bemessungszeitraum, höchstens bis zur Beitragsbemessungsgrenze (§§ 150, 151 SGB III). Der Familienstand allein erhöht den Satz nicht. Gezahlt wird das Arbeitslosengeld von der Agentur für Arbeit.'
    },
    {
      nr: 17, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Harzer Bitwerk GmbH möchte klimaneutral werden und lässt zunächst ihren CO₂-Fußabdruck berechnen.',
      frage: 'Was gibt der CO₂-Fußabdruck (Carbon Footprint) eines Unternehmens an?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Der CO₂-Fußabdruck gibt …',
      optionen: [
        '… die Menge aller Treibhausgase an, die durch die Tätigkeit des Unternehmens direkt und indirekt entstehen, umgerechnet in CO₂-Äquivalente.',
        '… ausschließlich die Menge an Heizöl an, die im Bürogebäude verbraucht wird.',
        '… die Zahl der Bäume an, die das Unternehmen gepflanzt hat.',
        '… die Höhe der Steuern an, die das Unternehmen für Umweltschäden zahlt.',
        '… den Anteil der Beschäftigten an, die mit dem Fahrrad zur Arbeit kommen.'
      ],
      loesung: 1,
      erklaerung: 'Der CO₂-Fußabdruck fasst alle Treibhausgasemissionen zusammen, die ein Unternehmen direkt (z. B. eigene Heizung, Firmenfahrzeuge) und indirekt (z. B. eingekaufter Strom, Rechenzentren, Dienstreisen, gekaufte Geräte) verursacht. Andere Treibhausgase wie Methan werden in CO₂-Äquivalente umgerechnet. Grundlage sind internationale Standards wie das Greenhouse Gas Protocol oder DIN EN ISO 14064. Eine Ökobilanz (DIN EN ISO 14040) betrachtet darüber hinaus alle Umweltwirkungen eines Produkts über seinen gesamten Lebensweg. Erst wenn die Emissionen bekannt sind, lassen sich Maßnahmen zur Vermeidung und Verringerung gezielt planen.'
    },
    {
      nr: 18, thema: 'umweltschutz', typ: 'einfach',
      text: 'In einer Schulung zur Nachhaltigkeitsstrategie verweist die Geschäftsführung auf die Agenda 2030.',
      frage: 'Welche der folgenden Aussagen zur Agenda 2030 trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Agenda 2030 ist ein Gesetz der Europäischen Union, das Unternehmen bei Verstößen mit Bußgeldern belegt.',
        'Die Agenda 2030 richtet sich ausschließlich an Entwicklungsländer.',
        'Die Agenda 2030 enthält nur Ziele zum Klimaschutz.',
        'Die Vereinten Nationen haben 2015 mit der Agenda 2030 17 Ziele für nachhaltige Entwicklung beschlossen, die ökologische, soziale und wirtschaftliche Ziele verbinden und für alle Staaten gelten.',
        'Die Agenda 2030 wurde von der Bundesregierung allein für den öffentlichen Nahverkehr beschlossen.'
      ],
      loesung: 4,
      erklaerung: 'Mit der Agenda 2030 haben alle Mitgliedstaaten der Vereinten Nationen im September 2015 17 Ziele für nachhaltige Entwicklung (Sustainable Development Goals, SDGs) beschlossen, z. B. Armut beenden, hochwertige Bildung, menschenwürdige Arbeit und Maßnahmen zum Klimaschutz. Die Ziele verbinden die ökologische, soziale und wirtschaftliche Dimension der Nachhaltigkeit und gelten für Industrie- und Entwicklungsländer gleichermaßen. Sie sind ein politisches Programm und kein Gesetz mit Sanktionen; in Deutschland setzt die Deutsche Nachhaltigkeitsstrategie sie um. Viele Unternehmen richten ihre Nachhaltigkeitsziele an den SDGs aus.'
    },
    {
      nr: 19, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Harzer Bitwerk GmbH ist Mitglied im Arbeitgeberverband und an dessen Manteltarifvertrag gebunden. Der Systembetreuer Kai Ludwig ist Mitglied der tarifschließenden Gewerkschaft. Im November 2026 bemerkt er, dass ihm die tarifliche Rufbereitschaftszulage für März 2026 nicht gezahlt wurde. Der Manteltarifvertrag bestimmt, dass Ansprüche aus dem Arbeitsverhältnis verfallen, wenn sie nicht innerhalb von drei Monaten nach Fälligkeit schriftlich geltend gemacht werden.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Ludwig kann die Zulage noch drei Jahre lang verlangen, weil allein die gesetzliche Verjährung gilt.',
        'Ausschlussfristen in Tarifverträgen sind unzulässig.',
        'Die Ausschlussfrist gilt nur für Ansprüche des Arbeitgebers.',
        'Der Betriebsrat kann die Frist für Herrn Ludwig nachträglich verlängern.',
        'Der Anspruch ist verfallen, weil Herr Ludwig ihn nicht innerhalb der tariflichen Ausschlussfrist schriftlich geltend gemacht hat.'
      ],
      loesung: 5,
      erklaerung: 'Tarifverträge enthalten häufig Ausschlussfristen (Verfallfristen): Ansprüche, die nicht rechtzeitig und in der vorgeschriebenen Form geltend gemacht werden, erlöschen, auch wenn sie noch nicht verjährt wären (regelmäßige Verjährung drei Jahre, § 195 BGB). Tarifliche Ausschlussfristen sind zulässig und gelten bei beiderseitiger Tarifbindung unmittelbar und zwingend (§ 4 Abs. 1 und 4 TVG); meist erfassen sie Ansprüche beider Seiten. Die Zulage für März 2026 war spätestens mit der Abrechnung für März fällig, die dreimonatige Frist lief also im Sommer 2026 ab. Nicht erfasst wird der Anspruch auf den gesetzlichen Mindestlohn (§ 3 MiLoG).'
    },
    {
      nr: 20, thema: 'tarifrecht', typ: 'einfach',
      text: 'Einige Entwickler gründen den „Bitwerk-Belegschaftsverein“, der nur Beschäftigte der Harzer Bitwerk GmbH aufnimmt. Die Geschäftsführung stellt dem Verein Büroräume und einen jährlichen Zuschuss zur Verfügung. Der Verein möchte mit der GmbH einen Tarifvertrag abschließen.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Verein kann Tarifverträge abschließen, weil jede Vereinigung von Arbeitnehmern tariffähig ist.',
        'Der Verein ist keine tariffähige Gewerkschaft, weil eine Gewerkschaft u. a. vom Arbeitgeber unabhängig (gegnerfrei) und überbetrieblich organisiert sein muss.',
        'Der Verein wird tariffähig, sobald er im Vereinsregister eingetragen ist.',
        'Der Verein kann Tarifverträge abschließen, wenn der Betriebsrat zustimmt.',
        'Gewerkschaften müssen mindestens 100.000 Mitglieder haben, um Tarifverträge abschließen zu dürfen.'
      ],
      loesung: 2,
      erklaerung: 'Tarifverträge können auf Arbeitnehmerseite nur Gewerkschaften abschließen (§ 2 Abs. 1 TVG). Nach Art. 9 Abs. 3 GG und der Rechtsprechung des BAG muss eine Gewerkschaft ein freiwilliger, auf Dauer angelegter Zusammenschluss sein, der gegnerfrei und unabhängig vom Arbeitgeber, vom Staat und von Parteien ist, überbetrieblich organisiert ist, den Abschluss von Tarifverträgen anstrebt und genügend Durchsetzungskraft (soziale Mächtigkeit) besitzt. Ein vom Arbeitgeber finanzierter Verein nur für die Beschäftigten eines Unternehmens erfüllt diese Voraussetzungen nicht. Eine feste Mindestmitgliederzahl gibt es nicht.'
    },
    {
      nr: 21, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Für die Fahrplan-App mietet die Harzer Bitwerk GmbH Rechenleistung in einem Cloud-Rechenzentrum und bezahlt nach Verbrauch. In einer Schulung vergleicht Herr Brecht diese Rechenleistung mit der Luft zum Atmen, für die niemand bezahlen muss.',
      frage: 'Welche der folgenden Aussagen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Bedürfnisse der Menschen sind nahezu unbegrenzt, die Güter zu ihrer Befriedigung aber knapp; knappe Güter wie die Rechenleistung haben deshalb einen Preis und müssen bewirtschaftet werden.',
        'Rechenleistung ist ein freies Gut, weil sie digital bereitgestellt wird.',
        'Luft zum Atmen ist ein wirtschaftliches Gut, weil sie lebensnotwendig ist.',
        'Knappheit gibt es nur bei Rohstoffen, nicht bei Dienstleistungen.',
        'Freie Güter werden von Unternehmen hergestellt und am Markt verkauft.'
      ],
      loesung: 1,
      erklaerung: 'Das ökonomische Grundproblem ist die Knappheit: Den nahezu unbegrenzten Bedürfnissen stehen nur begrenzt verfügbare Güter gegenüber. Knappe (wirtschaftliche) Güter müssen hergestellt werden, verursachen Kosten und haben einen Preis; das gilt auch für Dienstleistungen wie Rechenleistung. Freie Güter wie die Atemluft stehen in ausreichender Menge kostenlos zur Verfügung; ob ein Gut lebensnotwendig ist, spielt dafür keine Rolle. Weil Güter knapp sind, muss nach dem ökonomischen Prinzip gewirtschaftet werden. Es handelt sich um Grundbegriffe der Volkswirtschaftslehre ohne Rechtsgrundlage.'
    },
    {
      nr: 22, thema: 'gleichbehandlung', typ: 'mehrfach',
      text: 'Die Personalabteilung lässt prüfen, welche Personen sich gegenüber der Harzer Bitwerk GmbH auf den Benachteiligungsschutz für Beschäftigte nach dem Allgemeinen Gleichbehandlungsgesetz (AGG) berufen können.',
      frage: 'Welche der folgenden Personen gelten gegenüber der Harzer Bitwerk GmbH als Beschäftigte im Sinne des § 6 AGG?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Personen in die Kästchen ein.',
      optionen: [
        'Ein Fahrgast, der die Fahrplan-App eines Verkehrsunternehmens nutzt',
        'Eine Bewerberin, deren Bewerbung abgelehnt wurde',
        'Der Geschäftsführer eines Lieferanten, mit dem ein Wartungsvertrag besteht',
        'Ein Leiharbeitnehmer, den ein Personaldienstleister an die Harzer Bitwerk GmbH überlassen hat',
        'Eine Journalistin, die über die neue App berichtet',
        'Ein Mitarbeiter eines Verkehrsbetriebs, der in der Bedienung der Software geschult wird'
      ],
      loesung: [2, 4],
      erklaerung: '§ 6 Abs. 1 AGG: Beschäftigte sind Arbeitnehmer, die zu ihrer Berufsbildung Beschäftigten und arbeitnehmerähnliche Personen; als Beschäftigte gelten auch Bewerberinnen und Bewerber sowie Personen, deren Beschäftigungsverhältnis beendet ist. Bei der Arbeitnehmerüberlassung gilt auch der Entleiher als Arbeitgeber (§ 6 Abs. 2 Satz 2 AGG). Kunden, Nutzer, Lieferanten, Journalisten oder Beschäftigte anderer Unternehmen sind keine Beschäftigten der GmbH; für sie kann allenfalls das zivilrechtliche Benachteiligungsverbot bei Massengeschäften gelten (§ 19 AGG).'
    },
    {
      nr: 23, thema: 'organisation', typ: 'einfach',
      text: 'Die Harzer Bitwerk GmbH führt einen kontinuierlichen Verbesserungsprozess (KVP) ein. Jedes Team soll regelmäßig seine Abläufe überprüfen und Verbesserungen umsetzen.',
      frage: 'Welche der folgenden Aussagen beschreibt den KVP zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der KVP ist eine einmalige, umfassende Umstrukturierung des Unternehmens durch externe Berater.',
        'Am KVP beteiligen sich nur die Geschäftsführung und die Bereichsleitungen.',
        'Beim KVP werden Abläufe in vielen kleinen Schritten unter Beteiligung aller Beschäftigten ständig verbessert, z. B. nach dem Plan-Do-Check-Act-Zyklus.',
        'Der KVP ist abgeschlossen, sobald das Unternehmen ein Qualitätszertifikat erhalten hat.',
        'Der KVP wird nur eingesetzt, wenn sich Kunden beschweren.'
      ],
      loesung: 3,
      erklaerung: 'Der kontinuierliche Verbesserungsprozess (japanisch Kaizen) zielt auf eine ständige Verbesserung von Produkten, Abläufen und Qualität in kleinen Schritten. Alle Beschäftigten bringen ihre Erfahrungen ein; ein typisches Vorgehen ist der PDCA-Zyklus (planen, umsetzen, überprüfen, verbessern). Den Gegensatz bildet die sprunghafte, grundlegende Neugestaltung (Innovation, Business Reengineering). Der KVP ist Bestandteil von Qualitätsmanagementsystemen nach DIN EN ISO 9001; eine gesetzliche Pflicht gibt es nicht. Beim betrieblichen Vorschlagswesen hat der Betriebsrat ein Mitbestimmungsrecht (§ 87 Abs. 1 Nr. 12 BetrVG).'
    },
    {
      nr: 24, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Die Geschäftsführung legt ihre Ziele für das Jahr 2027 fest. Neben finanziellen Zielen sollen auch nichtmonetäre Ziele verfolgt werden.',
      frage: 'Welches der folgenden Ziele ist ein nichtmonetäres Ziel?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Ziel in das Kästchen ein.',
      optionen: [
        'Steigerung des Umsatzes mit Fahrplan-Apps um 8 %',
        'Senkung der Kosten für Cloud-Dienste um 50.000,00 EUR',
        'Erhöhung des Jahresgewinns auf 1,2 Mio. EUR',
        'Sicherung der Zahlungsfähigkeit durch eine Liquiditätsreserve von 300.000,00 EUR',
        'Verbesserung der Kundenzufriedenheit und des Images als zuverlässiger Partner der Verkehrsunternehmen'
      ],
      loesung: 5,
      erklaerung: 'Monetäre Ziele lassen sich in Geldeinheiten ausdrücken, z. B. Umsatz, Kosten, Gewinn, Rentabilität oder Liquidität. Nichtmonetäre (qualitative) Ziele wie Kundenzufriedenheit, Image, Mitarbeiterzufriedenheit oder Umweltschutz sind nicht unmittelbar in Geld messbar; zur Überprüfung dienen Hilfsgrößen, z. B. Kundenbefragungen oder Beschwerdequoten. Langfristig wirken sie häufig auch auf die monetären Ziele. Es handelt sich um ein Modell der Betriebswirtschaftslehre ohne Rechtsgrundlage.'
    },
    {
      nr: 25, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Der 17-jährige Auszubildende Paul Gerlach soll im Serverraum bei Arbeiten an der unterbrechungsfreien Stromversorgung mithelfen. Diese Arbeiten sind mit Unfallgefahren durch elektrischen Strom verbunden.',
      frage: 'Unter welcher Voraussetzung darf Herr Gerlach nach dem Jugendarbeitsschutzgesetz mit diesen Arbeiten beschäftigt werden?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Voraussetzung in das Kästchen ein.',
      optionen: [
        'Überhaupt nicht, weil gefährliche Arbeiten für Jugendliche ausnahmslos verboten sind.',
        'Wenn seine Eltern schriftlich zustimmen.',
        'Wenn er schriftlich erklärt, dass er die Arbeiten auf eigene Gefahr ausführt.',
        'Wenn dies zur Erreichung seines Ausbildungsziels erforderlich ist und sein Schutz durch die Aufsicht eines Fachkundigen gewährleistet ist.',
        'Wenn er für diese Arbeiten eine Gefahrenzulage erhält.'
      ],
      loesung: 4,
      erklaerung: '§ 22 Abs. 1 Nr. 3 JArbSchG verbietet, Jugendliche mit Arbeiten zu beschäftigen, die mit Unfallgefahren verbunden sind, die sie wegen mangelnden Sicherheitsbewusstseins oder mangelnder Erfahrung nicht erkennen oder nicht abwenden können. Nach § 22 Abs. 2 JArbSchG gilt dieses Verbot nicht, soweit die Beschäftigung zur Erreichung des Ausbildungsziels erforderlich ist und der Schutz durch die Aufsicht eines Fachkundigen gewährleistet ist. Weder die Eltern noch der Jugendliche selbst können auf den Schutz verzichten. Vor Beginn ist der Jugendliche über die Unfall- und Gesundheitsgefahren zu unterweisen (§ 29 JArbSchG).'
    },
    {
      nr: 26, thema: 'rechtsquellen', typ: 'zuordnung',
      text: 'In der Personalabteilung der Harzer Bitwerk GmbH ist zu klären, in welchem Gesetz verschiedene Fragen geregelt sind.',
      frage: 'Welche der folgenden Gesetze sind den nachstehenden Sachverhalten zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Gesetz in das Kästchen ein.',
      optionenTitel: 'Gesetze',
      optionen: [
        'Arbeitszeitgesetz (ArbZG)',
        'Arbeitsschutzgesetz (ArbSchG)',
        'Tarifvertragsgesetz (TVG)',
        'Betriebsverfassungsgesetz (BetrVG)',
        'Kündigungsschutzgesetz (KSchG)'
      ],
      itemsTitel: 'Sachverhalte',
      items: [
        { text: 'Soziale Rechtfertigung einer ordentlichen Kündigung', loesung: 5 },
        { text: 'Höchstdauer der werktäglichen Arbeitszeit einer erwachsenen Entwicklerin', loesung: 1 },
        { text: 'Rechtswirkung eines Tarifvertrags zwischen tarifgebundenen Parteien', loesung: 3 },
        { text: 'Pflicht des Arbeitgebers, die Gefährdungen an den Arbeitsplätzen zu beurteilen', loesung: 2 },
        { text: 'Zahl der Mitglieder des Betriebsrats', loesung: 4 }
      ],
      erklaerung: 'Das KSchG regelt die soziale Rechtfertigung von Kündigungen (§ 1 KSchG), das ArbZG die Höchstarbeitszeit (§ 3 ArbZG), das TVG die Wirkung der Tarifnormen (§ 4 TVG), das ArbSchG die Gefährdungsbeurteilung (§ 5 ArbSchG) und das BetrVG die Größe des Betriebsrats (§ 9 BetrVG). ArbZG, ArbSchG und KSchG gehören zum Individualarbeitsrecht und Arbeitsschutzrecht, TVG und BetrVG zum kollektiven Arbeitsrecht.'
    },
    {
      nr: 27, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Harzer Bitwerk GmbH erzielte im Geschäftsjahr 2026 Erträge von 14.850.000,00 EUR. Die Aufwendungen betrugen 13.500.000,00 EUR.',
      frage: 'Berechnen Sie die Wirtschaftlichkeit der Harzer Bitwerk GmbH für das Geschäftsjahr 2026.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf zwei Nachkommastellen.',
      loesung: 1.1, nachkommastellen: 2,
      erklaerung: 'Wirtschaftlichkeit = Ertrag ÷ Aufwand = 14.850.000,00 EUR ÷ 13.500.000,00 EUR = 1,10. Ein Wert über 1 bedeutet, dass die Erträge die Aufwendungen übersteigen; die GmbH hat wirtschaftlich gearbeitet (Gewinn 1.350.000,00 EUR). Die Wirtschaftlichkeit ist eine wertmäßige Kennzahl, die Produktivität dagegen eine mengenmäßige.'
    },
    {
      nr: 28, thema: 'konjunktur', typ: 'reihenfolge',
      text: 'In einer Schulung erläutert Herr Brecht, wie sich die gesamtwirtschaftliche Lage im Konjunkturzyklus typischerweise verändert.',
      frage: 'Bringen Sie die folgenden Konjunkturphasen in die Reihenfolge, in der sie im Konjunkturzyklus aufeinanderfolgen. Beginnen Sie mit dem Tiefstand.',
      anweisung: 'Tragen Sie für die erste Phase die Ziffer 1, für die zweite Phase die Ziffer 2 usw. in die entsprechenden Kästchen ein.',
      itemsTitel: 'Konjunkturphasen',
      items: [
        { text: 'Die Kapazitäten sind voll ausgelastet, Preise und Löhne steigen stark, es herrscht nahezu Vollbeschäftigung.', loesung: 3 },
        { text: 'Produktion und Beschäftigung sind niedrig, die Preise stagnieren, Unternehmen und Verbraucher sind pessimistisch.', loesung: 1 },
        { text: 'Nachfrage und Investitionen gehen zurück, die Lagerbestände steigen, Unternehmen melden Kurzarbeit an.', loesung: 4 },
        { text: 'Die Nachfrage zieht wieder an, Unternehmen investieren und stellen allmählich wieder Personal ein.', loesung: 2 }
      ],
      erklaerung: 'Der Konjunkturzyklus besteht aus vier Phasen: Tiefstand (Depression) mit niedriger Produktion und hoher Arbeitslosigkeit, Aufschwung (Expansion) mit steigender Nachfrage und Investitionen, Hochkonjunktur (Boom) mit ausgelasteten Kapazitäten und steigenden Preisen sowie Abschwung (Rezession) mit rückläufiger Nachfrage. Danach beginnt der Zyklus von vorn. Die Wirtschaftspolitik versucht, die Schwankungen zu glätten und die Ziele des § 1 StabG zu erreichen.'
    },
    {
      nr: 29, thema: 'zusammenschluesse', typ: 'einfach',
      text: 'Die Harzer Bitwerk GmbH (Fahrplan-Apps) und die Ticketsoft GmbH aus Erfurt (Ticketing-Software) vereinbaren, ihre Produkte dauerhaft gemeinsam zu einer Mobilitäts-App weiterzuentwickeln und gemeinsam anzubieten. Beide Unternehmen bleiben rechtlich und wirtschaftlich selbstständig; gegenseitige Beteiligungen oder ein gemeinsames Unternehmen gibt es nicht.',
      frage: 'Um welche der folgenden Formen der Zusammenarbeit handelt es sich?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Form in das Kästchen ein.',
      optionen: [
        'Fusion',
        'Konzern',
        'Preiskartell',
        'Holding',
        'Strategische Allianz'
      ],
      loesung: 5,
      erklaerung: 'Bei einer strategischen Allianz arbeiten rechtlich und wirtschaftlich selbstständige Unternehmen auf Dauer in bestimmten Bereichen zusammen, z. B. bei Entwicklung, Vertrieb oder Einkauf, ohne Kapitalverflechtung. Bei einer Fusion verschmelzen Unternehmen zu einem einzigen Unternehmen (Umwandlungsgesetz), im Konzern stehen rechtlich selbstständige Unternehmen unter einheitlicher Leitung (§ 18 AktG), und eine Holding ist eine Dachgesellschaft, die Beteiligungen hält. Ein Preiskartell, also die Absprache von Preisen, ist verboten (§ 1 GWB); auch Kooperationen müssen mit dem Kartellrecht vereinbar sein.'
    },
    {
      nr: 30, thema: 'datenschutz', typ: 'einfach',
      text: 'Die Projektleiterin Hanna Vogt erhält einen Anruf. Der Anrufer gibt sich als Mitarbeiter des IT-Supports aus und erklärt, wegen eines dringenden Sicherheitsupdates benötige er sofort ihr Passwort und den Bestätigungscode, der gleich per Authentisierungs-App auf ihr Smartphone kommt.',
      frage: 'Welche der folgenden Aussagen beschreibt die Situation und das richtige Verhalten zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Es handelt sich um Social Engineering; Frau Vogt gibt weder Passwort noch Bestätigungscode heraus, beendet das Gespräch und meldet den Vorfall der IT-Sicherheit.',
        'Es handelt sich um einen normalen Supportanruf; Frau Vogt nennt ihr Passwort, behält den Bestätigungscode aber für sich.',
        'Es handelt sich um einen Brute-Force-Angriff; Frau Vogt muss nichts unternehmen, weil die Zwei-Faktor-Authentisierung sie in jedem Fall schützt.',
        'Es handelt sich um Ransomware; Frau Vogt schaltet ihren Rechner aus und zahlt das geforderte Lösegeld.',
        'Es handelt sich um eine DDoS-Attacke; Frau Vogt nennt den Code, damit der Server schneller wieder erreichbar ist.'
      ],
      loesung: 1,
      erklaerung: 'Beim Social Engineering nutzen Angreifer menschliche Eigenschaften wie Hilfsbereitschaft, Respekt vor Autorität oder Zeitdruck aus, um an vertrauliche Informationen zu gelangen. Seriöse IT-Abteilungen fragen niemals nach Passwörtern oder Bestätigungscodes. Die Zwei-Faktor-Authentisierung schützt nur, solange der zweite Faktor nicht weitergegeben wird. Richtig ist, keine Daten preiszugeben, die Identität des Anrufers über einen bekannten Kontaktweg zu prüfen und den Vorfall zu melden. Unternehmen müssen die Sicherheit der Verarbeitung durch technische und organisatorische Maßnahmen wie Schulungen gewährleisten (Art. 32 DSGVO).'
    }
  ]
});
