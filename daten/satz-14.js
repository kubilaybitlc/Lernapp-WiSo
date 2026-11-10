// Übungssatz 14 – eigene Aufgaben im Stil der IHK-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-14',
  titel: 'Übungssatz 14',
  untertitel: 'Isarfunk Systems GmbH',
  ausgangssituation:
    'Die Isarfunk Systems GmbH mit Sitz in München entwickelt Funkmodule, Sensoren und Embedded-Software für das Internet der Dinge, unter anderem für Verkehrstechnik und Gebäudeautomation. Das Unternehmen beschäftigt 310 Arbeitnehmerinnen und Arbeitnehmer und ist Mitglied im Arbeitgeberverband der Metall- und Elektroindustrie. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 1, bis: 3,
      text: 'Die Isarfunk Systems GmbH bildet Fachinformatikerinnen und Fachinformatiker für Systemintegration sowie Elektronikerinnen und Elektroniker für Geräte und Systeme aus. Ausbildungsleiter ist Korbinian Huber. Derzeit sind 18 Auszubildende beschäftigt, darunter Leonie Pichler (21 Jahre) im dritten und Maximilian Brandl (19 Jahre) im zweiten Ausbildungsjahr.'
    },
    {
      von: 4, bis: 6,
      text: 'Bei der Isarfunk Systems GmbH besteht ein Betriebsrat, Vorsitzende ist Sabine Rottmann. Außerdem ist eine Jugend- und Auszubildendenvertretung (JAV) gewählt.'
    },
    {
      von: 10, bis: 12,
      text: 'Die Fachkraft für Arbeitssicherheit Michael Obermaier berät die Geschäftsführung in allen Fragen des Arbeitsschutzes. Zur Isarfunk Systems GmbH gehören Büros für die Softwareentwicklung und eine Prüfhalle, in der Funkmodule und Steuergeräte im Dauerbetrieb getestet werden.'
    },
    {
      von: 13, bis: 14,
      text: 'Die Geschäftsführerin Dr. Veronika Lechner hat das Unternehmen 2015 als Einzelunternehmen gegründet und 2019 in eine GmbH umgewandelt. Wichtigster Fertigungspartner ist die Würmtal Elektronik OHG in Gauting.'
    },
    {
      von: 27, bis: 27,
      titel: 'Situation zur 27. Aufgabe',
      text: 'In der Prüfhalle prüfen zwei Teams fertige Funkmodule. Für das vergangene Quartal liegen folgende Zahlen vor:',
      tabelle: {
        kopf: ['Team', 'Beschäftigte', 'Arbeitsstunden', 'geprüfte Funkmodule'],
        zeilen: [
          ['Team Nord', '4', '640', '1.920'],
          ['Team Süd', '5', '800', '2.240']
        ]
      }
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'ausbildung', typ: 'einfach',
      text: 'Ein Bewerber fragt Herrn Huber, wie hoch seine Ausbildungsvergütung sein wird und ob es dafür gesetzliche Vorgaben gibt. Die Isarfunk Systems GmbH ist an den Tarifvertrag ihres Arbeitgeberverbands gebunden, der auch die Ausbildungsvergütungen regelt.',
      frage: 'Welche der folgenden Aussagen zur Ausbildungsvergütung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Höhe der Ausbildungsvergütung kann der Ausbildungsbetrieb frei festlegen; eine gesetzliche Untergrenze gibt es nicht.',
        'Gilt für das Ausbildungsverhältnis ein Tarifvertrag, ist die tarifliche Vergütung zu zahlen; ohne Tarifbindung darf die gesetzliche Mindestvergütung nicht unterschritten werden.',
        'Auszubildende haben Anspruch auf den gesetzlichen Mindestlohn je Arbeitsstunde.',
        'Die Ausbildungsvergütung bleibt während der gesamten Ausbildungszeit gleich hoch.',
        'Die Ausbildungsvergütung zahlt die IHK, der Ausbildungsbetrieb erstattet ihr den Betrag.'
      ],
      loesung: 2,
      erklaerung: '§ 17 Abs. 1 BBiG: Ausbildende haben eine angemessene Vergütung zu zahlen, die mit fortschreitender Ausbildung, mindestens jährlich, ansteigt. § 17 Abs. 2 BBiG legt eine Mindestvergütung fest, die jährlich angepasst wird. Gilt ein Tarifvertrag für das Ausbildungsverhältnis (beiderseitige Tarifbindung oder Verweis im Vertrag), ist die tarifliche Vergütung zu zahlen; sie gilt als angemessen, selbst wenn sie die Mindestvergütung unterschreitet (§ 17 Abs. 3 BBiG). Ohne Tarifbindung darf die Mindestvergütung nicht unterschritten werden, und die in der Branche übliche tarifliche Vergütung darf in der Regel um höchstens 20 % unterschritten werden (§ 17 Abs. 4 BBiG). Den gesetzlichen Mindestlohn erhalten Auszubildende nicht (§ 22 Abs. 3 MiLoG).'
    },
    {
      nr: 2, thema: 'ausbildung', typ: 'einfach',
      text: 'Herr Brandl war nach einem Motorradunfall fünf Monate arbeitsunfähig. Er befürchtet, das Ausbildungsziel bis zum regulären Ende seiner Ausbildungszeit nicht mehr zu erreichen.',
      frage: 'Welche der folgenden Aussagen zur Ausbildungszeit von Herrn Brandl trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Ausbildungszeit verlängert sich automatisch um die Dauer der Arbeitsunfähigkeit.',
        'Eine Verlängerung ist ausgeschlossen; Herr Brandl muss die Abschlussprüfung zum regulären Termin ablegen.',
        'Auf Antrag von Herrn Brandl kann die IHK die Ausbildungszeit in Ausnahmefällen verlängern, wenn dies erforderlich ist, um das Ausbildungsziel zu erreichen.',
        'Über eine Verlängerung entscheidet allein die Isarfunk Systems GmbH.',
        'Die Ausbildungszeit kann nur verlängert werden, wenn Herr Brandl die Abschlussprüfung bereits einmal nicht bestanden hat.'
      ],
      loesung: 3,
      erklaerung: '§ 8 Abs. 2 BBiG: In Ausnahmefällen kann die zuständige Stelle (IHK) auf Antrag der Auszubildenden die Ausbildungszeit verlängern, wenn die Verlängerung erforderlich ist, um das Ausbildungsziel zu erreichen; der Ausbildende ist vorher zu hören. Ein typischer Grund ist eine längere Krankheit. Davon zu unterscheiden ist die Verlängerung nach nicht bestandener Abschlussprüfung bis zur nächsten Wiederholungsprüfung (§ 21 Abs. 3 BBiG).'
    },
    {
      nr: 3, thema: 'ausbildung', typ: 'einfach',
      text: 'Frau Pichler hat ihre Abschlussprüfung bestanden. Sie möchte sich später auch bei Unternehmen in Irland und in Frankreich bewerben.',
      frage: 'Welche der folgenden Aussagen zum Prüfungszeugnis trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Prüfungszeugnis stellt die Isarfunk Systems GmbH als Ausbildungsbetrieb aus.',
        'Das Prüfungszeugnis enthält stets eine Beurteilung von Frau Pichlers Verhalten im Betrieb.',
        'Ein Prüfungszeugnis erhält nur, wer die Abschlussprüfung mindestens mit der Note „gut“ bestanden hat.',
        'Auf Antrag von Frau Pichler wird dem Prüfungszeugnis eine englischsprachige und eine französischsprachige Übersetzung beigefügt.',
        'Die Noten der Berufsschule müssen in jedem Fall auf dem Prüfungszeugnis ausgewiesen werden.'
      ],
      loesung: 4,
      erklaerung: '§ 37 Abs. 2 BBiG: Dem Prüfling ist von der zuständigen Stelle (IHK) ein Zeugnis auszustellen. § 37 Abs. 3 BBiG: Auf Antrag der Auszubildenden ist eine englischsprachige und eine französischsprachige Übersetzung beizufügen; das Ergebnis berufsschulischer Leistungsfeststellungen kann auf Antrag ausgewiesen werden. Eine Beurteilung von Verhalten und Leistung enthält nur das Ausbildungszeugnis des Betriebs auf Verlangen (§ 16 BBiG).'
    },
    {
      nr: 4, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Geschäftsführung möchte ein Ideenmanagement einführen: Beschäftigte sollen Verbesserungsvorschläge einreichen und dafür Prämien erhalten. Frau Rottmann verlangt, an den Regeln dafür beteiligt zu werden.',
      frage: 'Welche der folgenden Aussagen zur Beteiligung des Betriebsrats trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Betriebsrat hat bei den Grundsätzen über das betriebliche Vorschlagswesen ein Mitbestimmungsrecht.',
        'Der Betriebsrat muss nur informiert werden, wenn eine Prämie über 1.000,00 EUR gezahlt wird.',
        'Das Vorschlagswesen ist eine freiwillige Leistung des Arbeitgebers, bei der der Betriebsrat keine Rechte hat.',
        'Über jeden einzelnen Verbesserungsvorschlag entscheidet allein der Betriebsrat.',
        'Das Vorschlagswesen muss mit der Gewerkschaft in einem Tarifvertrag geregelt werden.'
      ],
      loesung: 1,
      erklaerung: '§ 87 Abs. 1 Nr. 12 BetrVG: Der Betriebsrat hat bei den Grundsätzen über das betriebliche Vorschlagswesen mitzubestimmen, z. B. bei Verfahren, Bewertungsmaßstäben und Verteilung der Prämien. Ob und in welcher Gesamthöhe der Arbeitgeber Mittel für Prämien bereitstellt, entscheidet er dagegen allein. Kommt keine Einigung zustande, entscheidet die Einigungsstelle (§ 87 Abs. 2 BetrVG). Üblich ist eine Betriebsvereinbarung (§ 77 BetrVG).'
    },
    {
      nr: 5, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die neue Testingenieurin Hanna Riedl beginnt in der Prüfhalle. Ihr Vorgesetzter möchte sie erst nach einigen Wochen über ihre Aufgaben und die Gefahren an ihrem Arbeitsplatz informieren, weil gerade viel zu tun ist.',
      frage: 'Welche der folgenden Aussagen zur Unterrichtungspflicht des Arbeitgebers nach § 81 BetrVG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Frau Riedl muss sich selbst über ihre Aufgaben und die Gefahren an ihrem Arbeitsplatz informieren.',
        'Die Unterrichtung der Beschäftigten übernimmt ausschließlich der Betriebsrat.',
        'Eine Unterrichtung ist nur in Betrieben mit mehr als 500 Beschäftigten vorgeschrieben.',
        'Der Arbeitgeber muss Frau Riedl über ihre Aufgaben, ihre Verantwortung und die Einordnung ihrer Tätigkeit in den Arbeitsablauf unterrichten und sie vor Beginn der Beschäftigung über Unfall- und Gesundheitsgefahren belehren.',
        'Über spätere Veränderungen in ihrem Arbeitsbereich muss Frau Riedl nicht informiert werden.'
      ],
      loesung: 4,
      erklaerung: '§ 81 Abs. 1 BetrVG: Der Arbeitgeber hat den Arbeitnehmer über dessen Aufgabe und Verantwortung, die Art seiner Tätigkeit und ihre Einordnung in den Arbeitsablauf zu unterrichten und ihn vor Beginn der Beschäftigung über Unfall- und Gesundheitsgefahren sowie die Maßnahmen zu ihrer Abwendung zu belehren. Über Veränderungen in seinem Arbeitsbereich ist er rechtzeitig zu unterrichten (§ 81 Abs. 2 BetrVG). Zusätzlich verlangt § 12 ArbSchG eine Unterweisung vor Aufnahme der Tätigkeit.'
    },
    {
      nr: 6, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die JAV möchte alle Auszubildenden und jugendlichen Beschäftigten der Isarfunk Systems GmbH zu einer eigenen Versammlung einladen, um über die Ausbildungsbedingungen zu sprechen.',
      frage: 'Welche der folgenden Aussagen zur Jugend- und Auszubildendenversammlung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die JAV kann die Versammlung im Einvernehmen mit dem Betriebsrat vor oder nach jeder Betriebsversammlung einberufen; sie findet grundsätzlich während der Arbeitszeit statt, die Zeit wird vergütet.',
        'Die Versammlung darf nur außerhalb der Arbeitszeit und ohne Vergütung stattfinden.',
        'An der Versammlung dürfen nur Auszubildende teilnehmen, die das 18. Lebensjahr vollendet haben.',
        'Die Versammlung kann verbindliche Weisungen an die Geschäftsführung beschließen.',
        'Die Versammlung wird von der Geschäftsführung einberufen und geleitet.'
      ],
      loesung: 1,
      erklaerung: '§ 71 BetrVG: Die JAV kann vor oder nach jeder Betriebsversammlung im Einvernehmen mit dem Betriebsrat eine betriebliche Jugend- und Auszubildendenversammlung einberufen; im Einvernehmen mit Betriebsrat und Arbeitgeber auch zu einem anderen Zeitpunkt. Der Arbeitgeber ist einzuladen. Für Arbeitszeit und Vergütung gilt § 44 BetrVG entsprechend. Teilnehmen können die jugendlichen Arbeitnehmer und die Auszubildenden (§ 60 BetrVG). Die Versammlung kann Anregungen geben, aber keine Weisungen erteilen.'
    },
    {
      nr: 7, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Für ein dringendes Software-Update bei einem Kunden aus der Verkehrstechnik soll der Entwickler Andreas Moser an einem Sonntag arbeiten. Die Sonntagsarbeit ist in diesem Fall nach § 10 Arbeitszeitgesetz (ArbZG) ausnahmsweise zulässig.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Arbeitszeitgesetz zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Für die Sonntagsarbeit muss ein gesetzlicher Zuschlag von 100 % gezahlt werden; einen Ersatzruhetag gibt es nicht.',
        'An Sonntagen dürfen Arbeitnehmer höchstens vier Stunden beschäftigt werden.',
        'Sonntagsarbeit ist ohne jede Ausnahme verboten.',
        'Sonntagsarbeit ist in allen Unternehmen erlaubt, wenn der Arbeitnehmer zustimmt.',
        'Herr Moser muss einen Ersatzruhetag erhalten, der innerhalb von zwei Wochen zu gewähren ist; mindestens 15 Sonntage im Jahr müssen für ihn beschäftigungsfrei bleiben.'
      ],
      loesung: 5,
      erklaerung: '§ 9 ArbZG: An Sonn- und Feiertagen dürfen Arbeitnehmer grundsätzlich nicht beschäftigt werden; § 10 ArbZG lässt Ausnahmen zu. § 11 ArbZG: Mindestens 15 Sonntage im Jahr müssen beschäftigungsfrei bleiben (Abs. 1), die Höchstarbeitszeiten gelten auch sonntags (Abs. 2), und für einen Sonntag ist ein Ersatzruhetag innerhalb von zwei Wochen zu gewähren, für einen Feiertag innerhalb von acht Wochen (Abs. 3). Einen gesetzlichen Sonntagszuschlag gibt es nicht; Zuschläge regeln Tarifverträge.'
    },
    {
      nr: 8, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Die Hardware-Entwicklerin Katharina Wagner wird zum 01.03.2027 eingestellt. Im Arbeitsvertrag soll eine Probezeit vereinbart werden.',
      frage: 'Welche der folgenden Aussagen zur Probezeit trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Eine Probezeit ist gesetzlich vorgeschrieben und dauert immer sechs Monate.',
        'Während einer vereinbarten Probezeit von längstens sechs Monaten kann mit einer Frist von zwei Wochen gekündigt werden; den allgemeinen Kündigungsschutz erwirbt Frau Wagner erst nach sechs Monaten Beschäftigung.',
        'In der Probezeit kann das Arbeitsverhältnis von beiden Seiten fristlos und ohne Grund gekündigt werden.',
        'Die verkürzte Kündigungsfrist von zwei Wochen gilt auch für eine vereinbarte Probezeit von zwölf Monaten.',
        'Während der Probezeit hat Frau Wagner keinen Anspruch auf Entgeltfortzahlung im Krankheitsfall.'
      ],
      loesung: 2,
      erklaerung: '§ 622 Abs. 3 BGB: Während einer vereinbarten Probezeit, längstens für die Dauer von sechs Monaten, kann mit einer Frist von zwei Wochen gekündigt werden. Der allgemeine Kündigungsschutz gilt erst, wenn das Arbeitsverhältnis länger als sechs Monate besteht (§ 1 Abs. 1 KSchG). Auch in der Probezeit muss schriftlich gekündigt (§ 623 BGB) und der Betriebsrat angehört werden (§ 102 BetrVG). Entgeltfortzahlung gibt es nach einer Wartezeit von vier Wochen (§ 3 Abs. 3 EFZG).'
    },
    {
      nr: 9, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Der Servicetechniker Tobias Gruber wird im Stundenlohn bezahlt. An Fronleichnam, einem gesetzlichen Feiertag in Bayern, ruht bei der Isarfunk Systems GmbH die Arbeit. Ohne den Feiertag hätte Herr Gruber an diesem Donnerstag acht Stunden gearbeitet. An den Arbeitstagen vor und nach dem Feiertag hat er wie gewohnt gearbeitet.',
      frage: 'Welche der folgenden Aussagen zur Bezahlung des Feiertags trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Weil Herr Gruber im Stundenlohn bezahlt wird, erhält er für den Feiertag kein Entgelt.',
        'Herr Gruber muss die ausgefallenen Stunden an einem anderen Tag unbezahlt nacharbeiten.',
        'Herr Gruber erhält für den Feiertag nur die Hälfte seines üblichen Entgelts.',
        'Herr Gruber erhält für die acht ausgefallenen Stunden das Arbeitsentgelt, das er ohne den Feiertag erhalten hätte.',
        'Feiertagsentgelt erhalten nur Beschäftigte, die am Feiertag arbeiten.'
      ],
      loesung: 4,
      erklaerung: '§ 2 Abs. 1 EFZG: Für Arbeitszeit, die infolge eines gesetzlichen Feiertags ausfällt, hat der Arbeitgeber das Arbeitsentgelt zu zahlen, das der Arbeitnehmer ohne den Arbeitsausfall erhalten hätte (Entgeltausfallprinzip); das gilt auch bei Stundenlohn. Kein Anspruch besteht, wenn der Arbeitnehmer am letzten Arbeitstag vor oder am ersten Arbeitstag nach dem Feiertag unentschuldigt fehlt (§ 2 Abs. 3 EFZG).'
    },
    {
      nr: 10, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'In der Prüfhalle findet ein Kollege den Techniker Stefan Weber am Boden liegend. Herr Weber reagiert weder auf Ansprache noch auf Berührung, atmet aber normal. Der Notruf ist bereits abgesetzt.',
      frage: 'Welche der folgenden Erste-Hilfe-Maßnahmen ist jetzt richtig?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Herrn Weber in die stabile Seitenlage bringen, zudecken und seine Atmung bis zum Eintreffen des Rettungsdienstes regelmäßig kontrollieren',
        'Sofort mit der Herzdruckmassage beginnen',
        'Herrn Weber etwas zu trinken geben, damit sein Kreislauf stabil bleibt',
        'Herrn Weber auf dem Rücken liegen lassen und die Prüfhalle verlassen, um weitere Hilfe zu holen',
        'Herrn Weber aufsetzen und in einen ruhigen Raum führen'
      ],
      loesung: 1,
      erklaerung: 'Bewusstlose mit normaler Atmung werden in die stabile Seitenlage gebracht, damit die Atemwege frei bleiben; Atmung und Bewusstsein sind bis zum Eintreffen des Rettungsdienstes ständig zu kontrollieren. Erst wenn keine normale Atmung vorhanden ist, beginnt man mit der Herz-Lungen-Wiederbelebung. Bewusstlosen nie etwas zu trinken geben. Der Arbeitgeber muss die Erste Hilfe organisieren (§ 10 ArbSchG, DGUV Vorschrift 1); jeder ist zur Hilfeleistung verpflichtet (§ 323c StGB).'
    },
    {
      nr: 11, thema: 'arbeitsschutz', typ: 'mehrfach',
      text: 'Eine Mitarbeiterbefragung zeigt, dass viele Entwicklerinnen und Entwickler unter hohem Termindruck, ständigen Unterbrechungen und der Erwartung leiden, auch abends erreichbar zu sein. Die Geschäftsführung sucht geeignete Gegenmaßnahmen.',
      frage: 'Welche der folgenden Maßnahmen sind geeignet, die psychischen Belastungen zu verringern?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Maßnahmen in die Kästchen ein.',
      optionen: [
        'Regelung, dass dienstliche E-Mails und Chatnachrichten nach Feierabend nicht beantwortet werden müssen',
        'Kostenlose Energydrinks, damit das Team länger konzentriert arbeiten kann',
        'Realistische Projektplanung mit Pufferzeiten und klaren Prioritäten',
        'Streichung von Pausen, damit Liefertermine schneller erreicht werden',
        'Pflicht, das Diensthandy rund um die Uhr eingeschaltet zu lassen',
        'Abschaffung der Mitarbeiterbefragung, weil sie Unruhe erzeugt'
      ],
      loesung: [1, 3],
      erklaerung: 'Psychische Belastungen sind Teil der Gefährdungsbeurteilung (§ 5 Abs. 3 Nr. 6 ArbSchG). Nach § 4 ArbSchG sind Gefahren an der Quelle zu bekämpfen, z. B. durch bessere Arbeitsorganisation, realistische Planung und klare Regeln zur Erreichbarkeit. Ruhepausen und die Ruhezeit von elf Stunden schreibt das Arbeitszeitgesetz vor (§§ 4, 5 ArbZG). Krankenkassen unterstützen betriebliche Gesundheitsförderung (§ 20b SGB V).'
    },
    {
      nr: 12, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'In der Prüfhalle laufen Lüfter und Netzteile im Dauertest. Messungen ergeben an einigen Arbeitsplätzen einen Tages-Lärmexpositionspegel von 87 dB(A). Der Bereich soll mit dem passenden Sicherheitszeichen gekennzeichnet werden.',
      frage: 'Welches der folgenden Zeichen ist am Zugang zu diesem Lärmbereich anzubringen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Zeichen in das Kästchen ein.',
      optionen: [
        { bild: 'verbot-feuer' },
        { bild: 'warn-spannung' },
        { bild: 'rettung-erste-hilfe' },
        { bild: 'brandschutz-feuerloescher' },
        { bild: 'gebot-gehoerschutz' }
      ],
      loesung: 5,
      erklaerung: 'Nach der Lärm- und Vibrations-Arbeitsschutzverordnung (§§ 6–8 LärmVibrationsArbSchV) liegen die Auslösewerte bei 80 dB(A) (unterer) und 85 dB(A) (oberer). Ab 80 dB(A) muss der Arbeitgeber Gehörschutz zur Verfügung stellen; ab 85 dB(A) müssen die Beschäftigten ihn tragen, und der Lärmbereich ist zu kennzeichnen. Dafür dient das Gebotszeichen „Gehörschutz benutzen“: rund, blau, mit weißem Symbol (ASR A1.3).'
    },
    {
      nr: 13, thema: 'rechtsformen', typ: 'mehrfach',
      text: 'Auszubildende fragen Frau Dr. Lechner, warum sie ihr Unternehmen nicht als Einzelunternehmen weitergeführt hat.',
      frage: 'Welche der folgenden Aussagen zum Einzelunternehmen treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Für die Gründung ist ein Mindestkapital von 25.000,00 EUR erforderlich.',
        'Die Inhaberin entscheidet allein und kann deshalb schnell handeln, ohne sich mit Gesellschaftern abstimmen zu müssen.',
        'Die Inhaberin haftet nur mit dem Betriebsvermögen; ihr Privatvermögen ist geschützt.',
        'Der Gewinn muss mit Mitgesellschaftern geteilt werden.',
        'Die Kapitalbeschaffung ist begrenzt, weil nur das Vermögen und die Kreditwürdigkeit der Inhaberin zur Verfügung stehen.',
        'Ein Einzelunternehmen muss einen Aufsichtsrat bilden.'
      ],
      loesung: [2, 5],
      erklaerung: 'Beim Einzelunternehmen leitet der Inhaber allein, trägt das Risiko allein und erhält den Gewinn allein. Ein Mindestkapital ist nicht vorgeschrieben, die Kapitalbasis ist aber auf sein Vermögen und seine Kreditwürdigkeit begrenzt. Er haftet unbeschränkt auch mit dem Privatvermögen. Betreibt er ein Handelsgewerbe, ist er Kaufmann (§ 1 HGB) und wird in Abteilung A des Handelsregisters eingetragen (Zusatz „e. K.“, § 19 Abs. 1 Nr. 1 HGB). Mit der GmbH lassen sich Haftung begrenzen und weitere Kapitalgeber aufnehmen.'
    },
    {
      nr: 14, thema: 'rechtsformen', typ: 'einfach',
      text: 'Zum 01.04.2027 tritt der Ingenieur Jonas Seidl als neuer Gesellschafter in die Würmtal Elektronik OHG ein. Die OHG hat noch eine offene Verbindlichkeit von 40.000,00 EUR gegenüber einem Bauteillieferanten aus dem Jahr 2026. Im Gesellschaftsvertrag ist vereinbart, dass Herr Seidl für ältere Schulden nicht haften soll.',
      frage: 'Welche der folgenden Aussagen zur Haftung von Herrn Seidl trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Seidl haftet nur für Verbindlichkeiten, die nach seinem Eintritt entstehen.',
        'Herr Seidl haftet auch für die vor seinem Eintritt begründete Verbindlichkeit persönlich und unbeschränkt; die abweichende Vereinbarung im Gesellschaftsvertrag ist dem Lieferanten gegenüber unwirksam.',
        'Herr Seidl haftet nur bis zur Höhe seiner Einlage.',
        'Die Vereinbarung im Gesellschaftsvertrag schließt die Haftung gegenüber allen Gläubigern wirksam aus.',
        'Für die Verbindlichkeit haftet allein der Gesellschafter, der den Vertrag mit dem Lieferanten unterschrieben hat.'
      ],
      loesung: 2,
      erklaerung: '§ 127 HGB (in der Fassung des MoPeG seit 2024): Wer in eine bestehende OHG eintritt, haftet gleich den anderen Gesellschaftern auch für die vor seinem Eintritt begründeten Verbindlichkeiten; eine entgegenstehende Vereinbarung ist Dritten gegenüber unwirksam. Die Haftung ist nach § 126 HGB persönlich, unbeschränkt, unmittelbar und gesamtschuldnerisch. Im Innenverhältnis kann Herr Seidl von den anderen Gesellschaftern einen Ausgleich verlangen, wenn dies vereinbart ist.'
    },
    {
      nr: 15, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Die Ammersee Leiterplatten GmbH, ein Zulieferer der Isarfunk Systems GmbH, ist zahlungsunfähig. Das Insolvenzverfahren wurde am 01.06.2027 eröffnet. Die Beschäftigten haben seit März 2027 keinen Lohn mehr erhalten. Eine Bekannte, die dort arbeitet, fragt Herrn Huber um Rat.',
      frage: 'Welche der folgenden Aussagen zum Insolvenzgeld trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Insolvenzgeld zahlt die Krankenkasse für höchstens sechs Wochen.',
        'Insolvenzgeld erhalten nur Beschäftigte, die mindestens zwölf Monate Beiträge zur Arbeitslosenversicherung gezahlt haben.',
        'Das Insolvenzgeld wird aus Steuermitteln des Landes finanziert und vom Insolvenzverwalter ausgezahlt.',
        'Die Agentur für Arbeit zahlt auf Antrag Insolvenzgeld für das ausgefallene Nettoarbeitsentgelt der letzten drei Monate vor dem Insolvenzereignis; der Antrag ist innerhalb von zwei Monaten nach dem Insolvenzereignis zu stellen.',
        'Ein Anspruch auf Insolvenzgeld besteht nur, wenn das Arbeitsverhältnis bereits gekündigt ist.'
      ],
      loesung: 4,
      erklaerung: '§ 165 Abs. 1 SGB III: Arbeitnehmer haben Anspruch auf Insolvenzgeld, wenn sie bei einem Insolvenzereignis (z. B. Eröffnung des Insolvenzverfahrens) für die vorausgehenden drei Monate des Arbeitsverhältnisses noch Ansprüche auf Arbeitsentgelt haben. Es wird in Höhe des Nettoarbeitsentgelts gezahlt (§ 167 SGB III), begrenzt durch die Beitragsbemessungsgrenze. Der Antrag muss innerhalb von zwei Monaten nach dem Insolvenzereignis gestellt werden (§ 324 Abs. 3 SGB III). Finanziert wird es durch eine Umlage der Arbeitgeber (§ 358 SGB III).'
    },
    {
      nr: 16, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Ein langjähriger Mitarbeiter, der früher in der lauten Fertigungshalle eines anderen Unternehmens gearbeitet hat, leidet an einer Lärmschwerhörigkeit. Sein Arzt meldet den Verdacht auf eine Berufskrankheit.',
      frage: 'Welche der folgenden Aussagen zur Berufskrankheit trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Berufskrankheiten sind alle Krankheiten, die während der Arbeitszeit auftreten, z. B. eine Grippe.',
        'Für Berufskrankheiten ist allein die Krankenkasse zuständig; die Unfallversicherung leistet nur bei Arbeitsunfällen.',
        'Berufskrankheiten sind die in der Berufskrankheiten-Verordnung bezeichneten Krankheiten, die Versicherte infolge ihrer versicherten Tätigkeit erleiden; zuständig ist die gesetzliche Unfallversicherung.',
        'Ärzte dürfen den Verdacht auf eine Berufskrankheit nur mit Zustimmung des Arbeitgebers melden.',
        'Leistungen wegen einer Berufskrankheit gibt es erst nach Beginn der Altersrente.'
      ],
      loesung: 3,
      erklaerung: '§ 9 Abs. 1 SGB VII: Berufskrankheiten sind Krankheiten, die die Bundesregierung durch Rechtsverordnung (Berufskrankheiten-Verordnung mit der Liste der Berufskrankheiten) bezeichnet und die Versicherte infolge ihrer versicherten Tätigkeit erleiden; die Lärmschwerhörigkeit gehört dazu. Träger ist die gesetzliche Unfallversicherung (Berufsgenossenschaft), die Leistungen wie bei einem Arbeitsunfall erbringt. Ärzte müssen den begründeten Verdacht dem Unfallversicherungsträger anzeigen (§ 202 SGB VII).'
    },
    {
      nr: 17, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Isarfunk Systems GmbH heizt ihre Büro- und Laborgebäude mit Erdgas. Auf der Gasrechnung findet die Geschäftsführung einen Posten für die CO₂-Bepreisung.',
      frage: 'Welche der folgenden Aussagen zur CO₂-Bepreisung durch Emissionshandel trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die CO₂-Bepreisung ist eine freiwillige Spende der Unternehmen für den Klimaschutz.',
        'Die CO₂-Bepreisung gilt nur für Privathaushalte, nicht für Unternehmen.',
        'Wer CO₂-Zertifikate erwirbt, darf unbegrenzt Schadstoffe in Gewässer einleiten.',
        'Die CO₂-Bepreisung ersetzt alle anderen Umweltschutzvorschriften.',
        'Für jede Tonne CO₂ muss ein Zertifikat vorgelegt werden; der dadurch entstehende Preis soll Anreize setzen, Energie zu sparen und Emissionen zu verringern.'
      ],
      loesung: 5,
      erklaerung: 'Im europäischen Emissionshandel müssen Betreiber großer Anlagen in Energiewirtschaft und Industrie für jede ausgestoßene Tonne CO₂ ein Zertifikat abgeben. Für Brennstoffe wie Erdgas, Heizöl, Benzin und Diesel gilt in Deutschland seit 2021 der nationale Emissionshandel nach dem Brennstoffemissionshandelsgesetz (BEHG): Die Inverkehrbringer, z. B. Gaslieferanten, erwerben Zertifikate und geben die Kosten über den Preis weiter. Die Bepreisung setzt das Verursacherprinzip um und macht klimafreundliches Verhalten wirtschaftlich attraktiver.'
    },
    {
      nr: 18, thema: 'umweltschutz', typ: 'mehrfach',
      text: 'Beim Aufräumen der Werkstatt und der Büros fallen verschiedene Abfälle an.',
      frage: 'Welche der folgenden Abfälle dürfen **nicht** über den Hausmüll oder die üblichen Wertstoffbehälter entsorgt werden?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Abfällen in die Kästchen ein.',
      optionen: [
        'Altpapier aus dem Druckerraum',
        'Ausgediente Leuchtstoffröhren aus der Deckenbeleuchtung',
        'Leere Kartons von Bauteillieferungen',
        'Lithium-Ionen-Akkus aus ausgemusterten Testgeräten',
        'Kaffeesatz aus der Teeküche',
        'Leere Glasflaschen'
      ],
      loesung: [2, 4],
      erklaerung: 'Leuchtstoffröhren enthalten Quecksilber; sie gelten als Elektroaltgeräte und sind getrennt bei Sammel- oder Rücknahmestellen abzugeben (ElektroG). Altbatterien und Akkus dürfen nicht in den Hausmüll und müssen zurückgegeben werden (Batterierecht, seit 2025 Batterierecht-Durchführungsgesetz); beschädigte Lithium-Ionen-Akkus können Brände verursachen. Abfälle sind nach dem Kreislaufwirtschaftsgesetz getrennt zu halten (§ 9 KrWG). Papier, Pappe, Glas und Bioabfälle gehören in die jeweiligen Wertstoffbehälter.'
    },
    {
      nr: 19, thema: 'tarifrecht', typ: 'einfach',
      text: 'Nach einem Streit über die Schichtplanung legen 25 Beschäftigte der Prüfhalle spontan die Arbeit nieder, um einen höheren Lohn durchzusetzen. Die Gewerkschaft hat nicht zum Streik aufgerufen und übernimmt ihn auch nicht.',
      frage: 'Wie ist diese Arbeitsniederlegung rechtlich zu beurteilen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Beurteilung in das Kästchen ein.',
      optionen: [
        'Sie ist rechtmäßig, weil das Streikrecht jedem Arbeitnehmer einzeln zusteht.',
        'Sie ist rechtmäßig, sofern der Betriebsrat zustimmt.',
        'Sie ist rechtswidrig, weil ein Streik nur zulässig ist, wenn er von einer Gewerkschaft getragen wird und ein tariflich regelbares Ziel verfolgt; den Beteiligten drohen Abmahnung oder Kündigung.',
        'Sie ist rechtmäßig, weil während der Laufzeit eines Tarifvertrags jederzeit gestreikt werden darf.',
        'Sie ist rechtmäßig, wenn die Beschäftigten die Arbeit nach höchstens einem Tag wieder aufnehmen.'
      ],
      loesung: 3,
      erklaerung: 'Das Streikrecht folgt aus Art. 9 Abs. 3 GG. Nach der Rechtsprechung des Bundesarbeitsgerichts ist ein Streik nur rechtmäßig, wenn er von einer tariffähigen Gewerkschaft getragen wird, ein tariflich regelbares Ziel verfolgt, die Friedenspflicht beachtet und das letzte Mittel ist. Ein „wilder“ Streik ist eine Verletzung der Arbeitspflicht: Es besteht kein Entgeltanspruch, und Abmahnung oder Kündigung sind möglich. Der Betriebsrat darf keine Arbeitskämpfe führen (§ 74 Abs. 2 BetrVG).'
    },
    {
      nr: 20, thema: 'tarifrecht', typ: 'einfach',
      text: 'Der Auszubildende Emre Aksoy überlegt, in die Gewerkschaft einzutreten, die den für die Isarfunk Systems GmbH geltenden Tarifvertrag abgeschlossen hat.',
      frage: 'Welche der folgenden Aussagen beschreibt einen Vorteil der Gewerkschaftsmitgliedschaft zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Als Mitglied hat Herr Aksoy einen unmittelbaren und zwingenden Anspruch auf die tariflichen Leistungen; außerdem erhält er Beratung und Rechtsschutz in arbeitsrechtlichen Streitigkeiten.',
        'Gewerkschaftsmitglieder können nicht gekündigt werden.',
        'Gewerkschaftsmitglieder müssen keine Beiträge zur Sozialversicherung zahlen.',
        'Mit dem Eintritt wird Herr Aksoy automatisch Mitglied des Betriebsrats.',
        'Die Gewerkschaft zahlt ihren Mitgliedern dauerhaft einen Zuschlag zur Ausbildungsvergütung.'
      ],
      loesung: 1,
      erklaerung: 'Tarifgebunden sind die Mitglieder der Tarifvertragsparteien (§ 3 Abs. 1 TVG); zwischen beiderseits Tarifgebundenen gelten die Tarifnormen unmittelbar und zwingend (§ 4 Abs. 1 TVG). Gewerkschaften bieten ihren Mitgliedern außerdem Beratung, Rechtsschutz vor dem Arbeitsgericht, Streikunterstützung und Bildungsangebote; dafür zahlen die Mitglieder einen Beitrag. Die Mitgliedschaft ist freiwillig (Koalitionsfreiheit, Art. 9 Abs. 3 GG).'
    },
    {
      nr: 21, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'In der Fertigung der Isarfunk Systems GmbH ist die Montage der Funkmodule in viele kleine Arbeitsschritte zerlegt. Jede Mitarbeiterin und jeder Mitarbeiter führt den ganzen Tag nur einen Arbeitsschritt aus.',
      frage: 'Welche der folgenden Aussagen beschreibt einen **Nachteil** dieser Arbeitszerlegung?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Beschäftigten werden durch die ständige Wiederholung schneller und machen weniger Fehler.',
        'Die Einarbeitungszeit neuer Beschäftigter wird kürzer.',
        'Für einzelne Arbeitsschritte können Spezialmaschinen eingesetzt werden.',
        'Die Arbeitsproduktivität steigt durch die Spezialisierung.',
        'Die eintönige Tätigkeit kann zu Monotonie, sinkender Motivation und einseitiger Belastung führen; fällt ein Arbeitsschritt aus, steht die ganze Montage still.'
      ],
      loesung: 5,
      erklaerung: 'Arbeitszerlegung ist eine Form der innerbetrieblichen Arbeitsteilung. Vorteile sind Übung und Routine, kürzere Einarbeitung, Einsatz von Spezialmaschinen und höhere Produktivität. Nachteile sind Monotonie, einseitige körperliche und psychische Belastung, geringere Motivation und Abhängigkeit des Gesamtablaufs von jedem einzelnen Schritt. Gegenmaßnahmen sind z. B. Jobrotation, Job-Enlargement und Job-Enrichment.'
    },
    {
      nr: 22, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'Die Entwicklerin Laura Kern erhält von einem Kollegen wiederholt anzügliche Nachrichten im Firmenchat und unerwünschte Bemerkungen über ihr Aussehen. Der Kollege meint, das sei doch nur Spaß.',
      frage: 'Welche der folgenden Aussagen trifft nach dem Allgemeinen Gleichbehandlungsgesetz (AGG) zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Eine sexuelle Belästigung liegt nur bei körperlichen Berührungen vor.',
        'Weil der Kollege es als Spaß gemeint hat, liegt keine Belästigung vor.',
        'Unerwünschte sexuell bestimmte Bemerkungen und Nachrichten, die die Würde von Frau Kern verletzen, sind eine sexuelle Belästigung und damit eine verbotene Benachteiligung; der Arbeitgeber muss dagegen einschreiten.',
        'Das AGG schützt nur vor Belästigungen durch Vorgesetzte, nicht durch Kollegen.',
        'Frau Kern muss die Belästigung zuerst bei der Polizei anzeigen, bevor der Arbeitgeber handeln darf.'
      ],
      loesung: 3,
      erklaerung: '§ 3 Abs. 4 AGG: Eine sexuelle Belästigung ist ein unerwünschtes, sexuell bestimmtes Verhalten, wozu auch Bemerkungen sexuellen Inhalts und das unerwünschte Zeigen pornografischer Darstellungen gehören, wenn es bezweckt oder bewirkt, dass die Würde der Person verletzt wird. Auf die Absicht kommt es also nicht an. Der Arbeitgeber muss geeignete Maßnahmen ergreifen, z. B. Abmahnung, Versetzung oder Kündigung (§ 12 Abs. 3 AGG). Frau Kern kann sich beschweren (§ 13 AGG).'
    },
    {
      nr: 23, thema: 'organisation', typ: 'zuordnung',
      text: 'Die Isarfunk Systems GmbH überlegt, die Organisation der Entwicklungsabteilung zu ändern. Die Personalleiterin vergleicht dazu verschiedene Leitungssysteme.',
      frage: 'Welche der folgenden Leitungssysteme sind den nachstehenden Merkmalen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Leitungssystem in das Kästchen ein. Ein Leitungssystem kann mehreren Merkmalen zugeordnet werden.',
      optionenTitel: 'Leitungssysteme',
      optionen: [
        'Einliniensystem',
        'Stabliniensystem',
        'Mehrliniensystem'
      ],
      itemsTitel: 'Merkmale',
      items: [
        { text: 'Jede Stelle erhält Anweisungen von mehreren spezialisierten Vorgesetzten.', loesung: 3 },
        { text: 'Jede Stelle hat genau einen Vorgesetzten; beratende Stabsstellen gibt es nicht.', loesung: 1 },
        { text: 'Gefahr von Kompetenzkonflikten, wenn sich Anweisungen verschiedener Vorgesetzter widersprechen.', loesung: 3 },
        { text: 'Spezialisierte Stellen ohne Weisungsbefugnis beraten und entlasten die Leitung.', loesung: 2 }
      ],
      erklaerung: 'Im Einliniensystem hat jede Stelle genau einen Vorgesetzten (Einheit der Auftragserteilung): klare Zuständigkeiten, aber lange Dienstwege. Im Mehrliniensystem (Funktionsmeistersystem nach Taylor) erhält eine Stelle Anweisungen von mehreren Fachvorgesetzten: kurze Wege und Spezialisierung, aber Gefahr von Kompetenzkonflikten. Das Stabliniensystem ergänzt das Einliniensystem um Stabsstellen, die beraten, aber keine Weisungsbefugnis haben.'
    },
    {
      nr: 24, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Ein Investor möchte sich an der Isarfunk Systems GmbH beteiligen. In seinem Konzept steht, das Unternehmen solle konsequent nach dem Shareholder-Value-Ansatz geführt werden.',
      frage: 'Was bedeutet der Shareholder-Value-Ansatz?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Alle Anspruchsgruppen wie Beschäftigte, Kunden, Lieferanten und Gemeinde werden gleichrangig berücksichtigt.',
        'Unternehmensentscheidungen werden vorrangig daran ausgerichtet, den Wert des Unternehmens für die Eigentümer (Anteilseigner) zu steigern.',
        'Das Unternehmen verzichtet auf Gewinne, um möglichst viele Arbeitsplätze zu sichern.',
        'Die Gewinne werden vollständig an die Beschäftigten ausgeschüttet.',
        'Das Unternehmen richtet seine Ziele ausschließlich am Umweltschutz aus.'
      ],
      loesung: 2,
      erklaerung: 'Der Shareholder-Value-Ansatz stellt die Interessen der Eigentümer (Shareholder) in den Mittelpunkt: Ziel ist die Steigerung des Unternehmenswerts, z. B. durch hohe Rentabilität und steigende Anteilswerte. Der Stakeholder-Ansatz berücksichtigt dagegen die Interessen aller Anspruchsgruppen, etwa Beschäftigte, Kunden, Lieferanten, Kreditgeber und Staat. Es handelt sich um Modelle der Betriebswirtschaftslehre ohne Rechtsgrundlage.'
    },
    {
      nr: 25, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Der 16-jährige Auszubildende Lukas Wimmer soll ab der nächsten Woche in der Prüfhalle an Messplätzen mit Netzteilen arbeiten.',
      frage: 'Welche der folgenden Aussagen zur Unterweisung nach dem Jugendarbeitsschutzgesetz trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Herr Wimmer muss vor Beginn der Beschäftigung über die Unfall- und Gesundheitsgefahren unterwiesen werden; die Unterweisung ist mindestens halbjährlich zu wiederholen.',
        'Eine Unterweisung ist erst nach dem ersten Arbeitsunfall vorgeschrieben.',
        'Eine einmalige Unterweisung zu Beginn der Ausbildung genügt; Wiederholungen sind nicht nötig.',
        'Die Unterweisung über betriebliche Gefahren übernimmt die Berufsschule.',
        'Die Unterweisung ist wie bei Erwachsenen nur einmal im Jahr zu wiederholen.'
      ],
      loesung: 1,
      erklaerung: '§ 29 Abs. 1 JArbSchG: Der Arbeitgeber hat Jugendliche vor Beginn der Beschäftigung und bei wesentlicher Änderung der Arbeitsbedingungen über die Unfall- und Gesundheitsgefahren sowie über die Einrichtungen und Maßnahmen zu ihrer Abwendung zu unterweisen. Die Unterweisungen sind in angemessenen Zeitabständen, mindestens aber halbjährlich, zu wiederholen (§ 29 Abs. 2 JArbSchG). Für Erwachsene verlangt die DGUV Vorschrift 1 eine Unterweisung mindestens einmal jährlich.'
    },
    {
      nr: 26, thema: 'rechtsquellen', typ: 'zuordnung',
      text: 'In einer Schulung zu den Rechtsgrundlagen der Ausbildung ordnen die Auszubildenden verschiedene Regelungen den Arten von Rechtsnormen zu.',
      frage: 'Welche der folgenden Arten von Rechtsnormen sind den nachstehenden Regelungen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Art in das Kästchen ein. Eine Art kann mehreren Regelungen zugeordnet werden.',
      optionenTitel: 'Arten von Rechtsnormen',
      optionen: [
        'Gesetz (vom Parlament beschlossen)',
        'Rechtsverordnung (von der Regierung oder einem Ministerium aufgrund einer gesetzlichen Ermächtigung erlassen)',
        'Satzung (von einer Selbstverwaltungskörperschaft für ihren Bereich erlassen)'
      ],
      itemsTitel: 'Regelungen',
      items: [
        { text: 'Berufsbildungsgesetz (BBiG)', loesung: 1 },
        { text: 'Verordnung über die Berufsausbildung zum Fachinformatiker und zur Fachinformatikerin (Ausbildungsordnung)', loesung: 2 },
        { text: 'Beitragsordnung der Industrie- und Handelskammer', loesung: 3 },
        { text: 'Jugendarbeitsschutzgesetz (JArbSchG)', loesung: 1 },
        { text: 'Arbeitsstättenverordnung (ArbStättV)', loesung: 2 }
      ],
      erklaerung: 'Gesetze werden vom Parlament (Bundestag unter Mitwirkung des Bundesrats) beschlossen, z. B. BBiG und JArbSchG. Rechtsverordnungen erlässt die Regierung oder ein Ministerium aufgrund einer gesetzlichen Ermächtigung (Art. 80 GG): Ausbildungsordnungen werden nach § 4 Abs. 1 BBiG vom zuständigen Fachministerium erlassen, die ArbStättV beruht auf dem Arbeitsschutzgesetz. Satzungen erlassen Selbstverwaltungskörperschaften wie die IHK für ihre Mitglieder, z. B. die Beitragsordnung.'
    },
    {
      nr: 27, thema: 'kennzahlen', typ: 'einfach',
      text: 'Die Geschäftsführung vergleicht die Arbeitsproduktivität der beiden Prüfteams anhand der Tabelle.',
      frage: 'Welche der folgenden Aussagen zur Arbeitsproduktivität der beiden Teams trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Team Süd ist produktiver, weil es insgesamt mehr Funkmodule geprüft hat.',
        'Team Nord ist produktiver: Es hat 3,0 Funkmodule je Arbeitsstunde geprüft, Team Süd nur 2,8.',
        'Beide Teams sind gleich produktiv.',
        'Die Arbeitsproduktivität lässt sich nur mit Geldwerten (Ertrag ÷ Aufwand) berechnen.',
        'Team Süd ist produktiver, weil es mehr Beschäftigte hat.'
      ],
      loesung: 2,
      erklaerung: 'Arbeitsproduktivität = Ausbringungsmenge ÷ Arbeitseinsatz. Team Nord: 1.920 ÷ 640 Stunden = 3,0 Funkmodule je Stunde. Team Süd: 2.240 ÷ 800 Stunden = 2,8 Funkmodule je Stunde. Die größere Gesamtmenge von Team Süd beruht nur auf dem höheren Arbeitseinsatz. Die Produktivität ist eine Mengenkennzahl; die Wirtschaftlichkeit setzt dagegen Werte ins Verhältnis (Ertrag ÷ Aufwand).'
    },
    {
      nr: 28, thema: 'konjunktur', typ: 'einfach',
      text: 'Die deutsche Wirtschaft befindet sich in einer Hochkonjunktur: Die Kapazitäten sind voll ausgelastet, es herrscht Fachkräftemangel und die Preise steigen stark.',
      frage: 'Welche der folgenden Maßnahmen entspricht einer antizyklischen Fiskalpolitik des Staates in dieser Lage?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Der Staat erhöht seine Ausgaben für neue Bauprojekte deutlich.',
        'Der Staat senkt die Einkommensteuer.',
        'Der Staat zahlt allen Unternehmen zusätzliche Investitionszuschüsse.',
        'Der Staat verschiebt geplante öffentliche Investitionen und bildet eine Konjunkturausgleichsrücklage.',
        'Der Staat nimmt zusätzliche Kredite auf, um mehr öffentliche Aufträge zu vergeben.'
      ],
      loesung: 4,
      erklaerung: 'Antizyklische Fiskalpolitik nach dem Stabilitäts- und Wachstumsgesetz (§ 1 StabG): In der Hochkonjunktur soll der Staat die Nachfrage dämpfen, z. B. durch Kürzen oder zeitliches Strecken von Ausgaben, Steuererhöhungen und das Bilden einer Konjunkturausgleichsrücklage (§§ 5, 15 StabG). Mehr Ausgaben, Steuersenkungen, Zuschüsse und neue Kredite würden die Nachfrage und den Preisanstieg zusätzlich verstärken; sie gehören in die Rezession.'
    },
    {
      nr: 29, thema: 'zusammenschluesse', typ: 'einfach',
      text: 'Bei einem Branchentreffen schlägt der Vertriebsleiter eines Wettbewerbers vor, dass die drei großen Anbieter von Funkmodulen in Süddeutschland ihre Preise künftig gemeinsam um 8 % anheben und die Kunden nach Regionen untereinander aufteilen.',
      frage: 'Welche der folgenden Aussagen zu dieser Absprache trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Absprache ist zulässig, solange die Unternehmen rechtlich selbstständig bleiben.',
        'Preisabsprachen sind erlaubt, wenn sie vorher der IHK gemeldet werden.',
        'Die Absprache ist zulässig, weil die Kunden weiterhin zwischen den Produkten wählen können.',
        'Kartelle werden nur verfolgt, wenn ein Kunde Strafanzeige erstattet.',
        'Die Absprache ist ein grundsätzlich verbotenes Kartell; das Bundeskartellamt kann gegen die beteiligten Unternehmen hohe Bußgelder verhängen.'
      ],
      loesung: 5,
      erklaerung: '§ 1 GWB verbietet Vereinbarungen zwischen Unternehmen, die eine Verhinderung, Einschränkung oder Verfälschung des Wettbewerbs bezwecken oder bewirken, insbesondere Preis- und Gebietsabsprachen; bei grenzüberschreitender Wirkung gilt zusätzlich Art. 101 AEUV. Das Bundeskartellamt verfolgt Kartelle von Amts wegen und kann Bußgelder bis zu 10 % des Gesamtumsatzes eines Unternehmens verhängen. Ein Unternehmen, das ein Kartell als Erstes aufdeckt, kann über das Kronzeugenprogramm einen Erlass der Geldbuße erhalten (§§ 81h ff. GWB).'
    },
    {
      nr: 30, thema: 'entgelt', typ: 'zahl',
      text: 'Herr Gruber erhält einen Stundenlohn von 24,00 EUR. Im Juli hat er insgesamt 168 Stunden gearbeitet, davon 12 Überstunden; auf seine Arbeitstage fiel in diesem Monat kein gesetzlicher Feiertag. Laut Tarifvertrag wird für jede Überstunde zusätzlich ein Zuschlag von 25 % auf den Stundenlohn gezahlt. Außerdem erhält er eine monatliche Schichtzulage von 120,00 EUR.',
      frage: 'Berechnen Sie das Bruttoentgelt von Herrn Gruber für den Monat Juli in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 4224, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Grundvergütung: 168 Stunden × 24,00 EUR = 4.032,00 EUR. Überstundenzuschlag: 12 Stunden × 24,00 EUR × 25 % = 72,00 EUR. Schichtzulage: 120,00 EUR. Bruttoentgelt = 4.032,00 + 72,00 + 120,00 = 4.224,00 EUR. Einen gesetzlichen Überstundenzuschlag gibt es nicht; er ergibt sich hier aus dem Tarifvertrag.'
    }
  ]
});
