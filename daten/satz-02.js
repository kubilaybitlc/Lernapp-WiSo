// Übungssatz 2 – eigene Aufgaben im Stil der BITLC-WiSo-Bögen (keine Originalaufgaben).
// Deckt u. a. die in Satz 1 fehlenden Themen ab: Gleichbehandlung (AGG), Organigramme, Rechtsquellen, Kennzahlen.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-02',
  titel: 'Übungssatz 2',
  untertitel: 'Nordlicht Software GmbH',
  ausgangssituation:
    'Die Nordlicht Software GmbH ist ein Softwarehaus mit Sitz in Lübeck. Sie entwickelt Warenwirtschaftssysteme für den Handel und betreibt für ihre Kunden Cloud-Dienste. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 5, bis: 7,
      text: 'Ausbildungsleiter der Nordlicht Software GmbH ist Henrik Paulsen. Er betreut die Auszubildenden und prüft die Ausbildungsverträge.'
    },
    {
      von: 9, bis: 11,
      text: 'Bei der Nordlicht Software GmbH besteht ein Betriebsrat. Die Beschäftigten interessieren sich für ihre Mitbestimmungsrechte.'
    },
    {
      von: 24, bis: 25,
      text: 'Die Nordlicht Software GmbH prüft im Controlling mehrere Kennzahlen des abgelaufenen Geschäftsjahres.',
      titel: 'Situation zur 24. und 25. Aufgabe'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'In Deutschland herrscht die soziale Marktwirtschaft.',
      frage: 'Welche der folgenden Maßnahmen ist typisch für die soziale Marktwirtschaft?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Zahlung von Wohngeld an Geringverdiener',
        'Festsetzung der Preise aller Güter durch den Staat',
        'Verbot von privatem Eigentum an Produktionsmitteln',
        'Zuteilung der Arbeitsplätze durch eine staatliche Behörde',
        'Vollständiger Verzicht des Staates auf jeden Eingriff in die Wirtschaft'
      ],
      loesung: 1,
      erklaerung: 'Die soziale Marktwirtschaft verbindet den freien Markt mit staatlichem Ausgleich zugunsten sozial Schwächerer, z. B. durch Wohngeld. Feste Staatspreise und die Zuteilung von Arbeitsplätzen gehören zur Zentralverwaltungswirtschaft, der völlige Verzicht auf Eingriffe zur freien Marktwirtschaft.'
    },
    {
      nr: 2, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Auf dem Markt für eine bestimmte Standardsoftware übersteigt das Angebot dauerhaft die Nachfrage.',
      frage: 'Welche Entwicklung des Preises ist bei diesem Angebotsüberschuss zu erwarten?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Preis sinkt.',
        'Der Preis steigt.',
        'Der Preis bleibt dauerhaft unverändert.',
        'Das Angebot steigt weiter an.',
        'Der Markt befindet sich im Gleichgewicht.'
      ],
      loesung: 1,
      erklaerung: 'Bei einem Angebotsüberschuss (Angebot größer als Nachfrage) entsteht Druck auf den Preis, er sinkt in Richtung Gleichgewichtspreis. Im Marktgleichgewicht wären Angebot und Nachfrage gleich groß.'
    },
    {
      nr: 3, thema: 'konjunktur', typ: 'einfach',
      text: 'Die Geschäftsleitung der Nordlicht Software GmbH beobachtet die gesamtwirtschaftliche Lage.',
      frage: 'Welches der folgenden Merkmale ist typisch für einen konjunkturellen Aufschwung?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Merkmal in das Kästchen ein.',
      einleitung: 'Zunahme …',
      optionen: [
        'der Investitionen',
        'der Arbeitslosigkeit',
        'der Lagerbestände',
        'der Unternehmensinsolvenzen',
        'der freien Produktionskapazitäten'
      ],
      loesung: 1,
      erklaerung: 'Im Aufschwung steigen Nachfrage und Investitionen, die Arbeitslosigkeit sinkt und die Kapazitäten werden besser ausgelastet. Steigende Lagerbestände, Insolvenzen und freie Kapazitäten kennzeichnen den Abschwung.'
    },
    {
      nr: 4, thema: 'unternehmensziele', typ: 'zuordnung',
      text: 'Die Nordlicht Software GmbH legt für das kommende Jahr mehrere Ziele fest.',
      frage: 'Welche der folgenden Zielarten sind den nachstehenden Zielen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Zielart in das Kästchen ein.',
      optionenTitel: 'Zielarten',
      optionen: [
        'Ökonomisches Ziel',
        'Ökologisches Ziel',
        'Soziales Ziel'
      ],
      itemsTitel: 'Ziele',
      items: [
        { text: 'Steigerung des Jahresüberschusses um 8 %', loesung: 1 },
        { text: 'Einführung eines betrieblichen Gesundheitsmanagements für die Beschäftigten', loesung: 3 },
        { text: 'Senkung des CO₂-Ausstoßes der Firmenfahrzeuge durch Umstellung auf E-Autos', loesung: 2 },
        { text: 'Erhöhung der Eigenkapitalquote', loesung: 1 }
      ],
      erklaerung: 'Ökonomische Ziele betreffen den wirtschaftlichen Erfolg (Gewinn, Eigenkapital), ökologische Ziele den Umweltschutz (CO₂-Senkung), soziale Ziele die Beschäftigten (Gesundheitsmanagement).'
    },
    {
      nr: 5, thema: 'ausbildung', typ: 'einfach',
      text: 'Herr Paulsen erläutert einer neuen Auszubildenden die Pflichten des Ausbildungsbetriebs.',
      frage: 'Welche der folgenden Pflichten trifft nach dem Berufsbildungsgesetz den Ausbildungsbetrieb?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Pflicht in das Kästchen ein.',
      optionen: [
        'Kostenlose Bereitstellung der Ausbildungsmittel, z. B. Werkzeuge und Fachliteratur',
        'Führen des schriftlichen oder elektronischen Ausbildungsnachweises',
        'Teilnahme am Berufsschulunterricht',
        'Wahrung von Betriebs- und Geschäftsgeheimnissen',
        'Sorgfältige Ausführung der übertragenen Aufgaben'
      ],
      loesung: 1,
      erklaerung: '§ 14 BBiG verpflichtet den Ausbildenden, die Ausbildungsmittel kostenlos zur Verfügung zu stellen. Die übrigen Punkte sind Pflichten der oder des Auszubildenden nach § 13 BBiG.'
    },
    {
      nr: 6, thema: 'ausbildung', typ: 'einfach',
      text: 'Herr Paulsen erklärt, welche Aufgaben die Industrie- und Handelskammer (BITLC) als zuständige Stelle hat.',
      frage: 'Welche der folgenden Aufgaben nimmt die BITLC wahr?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aufgabe in das Kästchen ein.',
      optionen: [
        'Erlass der Ausbildungsordnung',
        'Führung des Verzeichnisses der Berufsausbildungsverhältnisse',
        'Festlegung des Rahmenlehrplans für die Berufsschule',
        'Zahlung der Ausbildungsvergütung',
        'Erteilung des Berufsschulunterrichts'
      ],
      loesung: 2,
      erklaerung: 'Die BITLC führt als zuständige Stelle das Verzeichnis der Berufsausbildungsverhältnisse, überwacht die Ausbildung und nimmt die Prüfungen ab (§§ 34, 76 BBiG). Die Ausbildungsordnung erlässt der Bund, den Rahmenlehrplan die Länder, die Vergütung zahlt der Betrieb.'
    },
    {
      nr: 7, thema: 'ausbildung', typ: 'mehrfach',
      text: 'Herr Paulsen kontrolliert, ob ein Ausbildungsvertrag die vorgeschriebenen Inhalte enthält.',
      frage: 'Welche der folgenden Angaben müssen nach § 11 BBiG im Ausbildungsvertrag enthalten sein?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Angaben in die Kästchen ein.',
      optionen: [
        'Dauer der Probezeit',
        'Höhe der Ausbildungsvergütung',
        'Name der Klassenlehrkraft der Berufsschule',
        'Lieblingsprogrammiersprache der oder des Auszubildenden',
        'Religionszugehörigkeit der oder des Auszubildenden',
        'Bankverbindung des Ausbildungsbetriebs'
      ],
      loesung: [1, 2],
      erklaerung: '§ 11 BBiG schreibt u. a. die Dauer der Probezeit und die Höhe der Vergütung als Mindestinhalte der Vertragsniederschrift vor. Die übrigen Angaben gehören nicht dazu.'
    },
    {
      nr: 8, thema: 'jugendarbeitsschutz', typ: 'zahl',
      text: 'Der Auszubildende Finn Carstens ist zu Beginn des Kalenderjahres 16 Jahre alt (er wird in diesem Jahr 17).',
      kasten: {
        titel: '§ 19 JArbSchG Urlaub (Auszug)',
        absaetze: ['Der Urlaub beträgt jährlich'],
        liste: [
          'mindestens 30 Werktage, wenn der Jugendliche zu Beginn des Kalenderjahres noch nicht 16 Jahre alt ist,',
          'mindestens 27 Werktage, wenn der Jugendliche zu Beginn des Kalenderjahres noch nicht 17 Jahre alt ist,',
          'mindestens 25 Werktage, wenn der Jugendliche zu Beginn des Kalenderjahres noch nicht 18 Jahre alt ist.'
        ]
      },
      frage: 'Wie viele Werktage Urlaub stehen Herrn Carstens nach dem Jugendarbeitsschutzgesetz mindestens zu?',
      anweisung: 'Tragen Sie die Anzahl der Werktage in das Kästchen ein.',
      loesung: 27, nachkommastellen: 0, einheit: 'Werktage',
      erklaerung: 'Maßgeblich ist das Alter zu Beginn des Kalenderjahres. Herr Carstens ist noch nicht 17 Jahre alt, also stehen ihm mindestens 27 Werktage Urlaub zu.'
    },
    {
      nr: 9, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Die Softwareentwicklerin Nele Timm möchte sich in den Betriebsrat wählen lassen.',
      frage: 'Welche Voraussetzung muss Frau Timm erfüllen, um in den Betriebsrat gewählt werden zu können?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Voraussetzung in das Kästchen ein.',
      einleitung: 'Zur Wahl in den Betriebsrat …',
      optionen: [
        'muss sie das 16. Lebensjahr vollendet haben.',
        'muss sie das 18. Lebensjahr vollendet haben und seit mindestens sechs Monaten dem Betrieb angehören.',
        'muss sie ihre Ausbildung abgeschlossen haben.',
        'muss sie Mitglied einer Gewerkschaft sein.',
        'muss sie in Vollzeit beschäftigt sein.'
      ],
      loesung: 2,
      erklaerung: '§ 8 BetrVG: Wählbar ist, wer das 18. Lebensjahr vollendet hat und dem Betrieb seit mindestens sechs Monaten angehört. Das aktive Wahlrecht besteht dagegen schon ab 16 Jahren (§ 7 BetrVG).'
    },
    {
      nr: 10, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Der Betriebsrat lädt zur Betriebsversammlung ein.',
      frage: 'Welche Personengruppe ist berechtigt, an der Betriebsversammlung teilzunehmen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Personengruppe in das Kästchen ein.',
      optionen: [
        'Alle Arbeitnehmenden des Betriebs',
        'Nur die Mitglieder des Betriebsrats',
        'Nur die gewerkschaftlich organisierten Beschäftigten',
        'Nur die Vollzeitbeschäftigten',
        'Nur die Beschäftigten mit unbefristetem Vertrag'
      ],
      loesung: 1,
      erklaerung: '§ 42 BetrVG: Die Betriebsversammlung ist eine Versammlung aller Arbeitnehmenden des Betriebs, also einschließlich der Teilzeitkräfte und Auszubildenden.'
    },
    {
      nr: 11, thema: 'mitbestimmung', typ: 'mehrfach',
      text: 'Der Betriebsrat hat in bestimmten sozialen Angelegenheiten ein echtes Mitbestimmungsrecht.',
      frage: 'In welchen der folgenden Angelegenheiten hat der Betriebsrat nach § 87 BetrVG ein Mitbestimmungsrecht?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Angelegenheiten in die Kästchen ein.',
      optionen: [
        'Beginn und Ende der täglichen Arbeitszeit',
        'Höhe der Investitionen in das Rechenzentrum',
        'Aufstellung des Urlaubsplans',
        'Auswahl des Steuerberaters',
        'Festlegung der Verkaufspreise der Software',
        'Entscheidung über die Eröffnung einer neuen Niederlassung'
      ],
      loesung: [1, 3],
      erklaerung: '§ 87 BetrVG zählt die sozialen Angelegenheiten mit Mitbestimmung auf, darunter Beginn und Ende der Arbeitszeit sowie die Aufstellung des Urlaubsplans. Investitionen, Preise und Standortfragen sind mitbestimmungsfreie Unternehmerentscheidungen.'
    },
    {
      nr: 12, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Nordlicht Software GmbH ist tarifgebunden. Für den laufenden Tarifvertrag gilt die Friedenspflicht.',
      frage: 'Welche der folgenden Aussagen zur Friedenspflicht trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Während der Laufzeit eines Tarifvertrags …',
      optionen: [
        'sind Streiks um die bereits geregelten Inhalte unzulässig.',
        'darf jederzeit um höhere Löhne gestreikt werden.',
        'ist jede Neueinstellung verboten.',
        'dürfen keine Überstunden geleistet werden.',
        'ruhen alle Arbeitsverhältnisse.'
      ],
      loesung: 1,
      erklaerung: 'Die Friedenspflicht verbietet während der Laufzeit eines Tarifvertrags Arbeitskämpfe über die bereits geregelten Gegenstände. Erst nach Ablauf bzw. Kündigung des Tarifvertrags ist ein Streik wieder zulässig.'
    },
    {
      nr: 13, thema: 'tarifrecht', typ: 'einfach',
      frage: 'Welche Inhalte werden üblicherweise in einem Manteltarifvertrag (Rahmentarifvertrag) geregelt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.',
      optionen: [
        'Die Höhe der monatlichen Löhne und Gehälter',
        'Arbeitszeit, Urlaubsdauer und Kündigungsfristen',
        'Eine einmalige Sonderzahlung für das laufende Jahr',
        'Die Verkaufspreise der Produkte',
        'Die Höhe der Dividende für die Gesellschafter'
      ],
      loesung: 2,
      erklaerung: 'Der Manteltarifvertrag regelt die allgemeinen, langfristigen Arbeitsbedingungen wie Arbeitszeit, Urlaub und Kündigungsfristen. Die Entgelthöhe steht im Entgelt- oder Lohntarifvertrag, der kürzere Laufzeiten hat.'
    },
    {
      nr: 14, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Ein Beschäftigter der Nordlicht Software GmbH beruft sich auf den allgemeinen Kündigungsschutz.',
      frage: 'Unter welcher Voraussetzung gilt der allgemeine Kündigungsschutz nach dem Kündigungsschutzgesetz?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Voraussetzung in das Kästchen ein.',
      optionen: [
        'Er gilt ab dem ersten Arbeitstag.',
        'Er gilt nur für Beschäftigte über 50 Jahre.',
        'Er gilt, wenn das Arbeitsverhältnis länger als sechs Monate besteht und im Betrieb in der Regel mehr als zehn Arbeitnehmer beschäftigt sind.',
        'Er gilt erst nach fünf Jahren Betriebszugehörigkeit.',
        'Er gilt nur für Mitglieder des Betriebsrats.'
      ],
      loesung: 3,
      erklaerung: 'Das Kündigungsschutzgesetz greift, wenn das Arbeitsverhältnis länger als sechs Monate bestanden hat (§ 1 KSchG) und im Betrieb in der Regel mehr als zehn Arbeitnehmer beschäftigt sind (§ 23 KSchG).'
    },
    {
      nr: 15, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Ein Mitarbeiter wird gekündigt, weil er trotz mehrfacher Abmahnung wiederholt unentschuldigt zu spät zur Arbeit erscheint.',
      frage: 'Um welche Art der ordentlichen Kündigung handelt es sich?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Kündigungsart in das Kästchen ein.',
      optionen: [
        'Betriebsbedingte Kündigung',
        'Personenbedingte Kündigung',
        'Verhaltensbedingte Kündigung',
        'Änderungskündigung',
        'Aufhebungsvertrag'
      ],
      loesung: 3,
      erklaerung: 'Wiederholtes, vorwerfbares Fehlverhalten trotz Abmahnung begründet eine verhaltensbedingte Kündigung. Personenbedingt wäre z. B. dauernde Krankheit, betriebsbedingt der Wegfall des Arbeitsplatzes.'
    },
    {
      nr: 16, thema: 'arbeitsvertrag', typ: 'zuordnung',
      text: 'Die Personalabteilung ordnet mehrere Kündigungen den gesetzlichen Kündigungsgründen zu.',
      frage: 'Welche der folgenden Kündigungsgründe sind den nachstehenden Sachverhalten zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Kündigungsgrund in das Kästchen ein.',
      optionenTitel: 'Kündigungsgründe',
      optionen: [
        'Personenbedingte Kündigung',
        'Verhaltensbedingte Kündigung',
        'Betriebsbedingte Kündigung'
      ],
      itemsTitel: 'Sachverhalte',
      items: [
        { text: 'Wegen eines starken Auftragsrückgangs fällt ein Arbeitsplatz dauerhaft weg.', loesung: 3 },
        { text: 'Ein Mitarbeiter entwendet wiederholt Firmeneigentum.', loesung: 2 },
        { text: 'Ein Berufskraftfahrer verliert dauerhaft seine Fahrerlaubnis.', loesung: 1 },
        { text: 'Eine Mitarbeiterin missachtet trotz Abmahnung wiederholt Sicherheitsvorschriften.', loesung: 2 }
      ],
      erklaerung: 'Betriebsbedingt: Gründe aus dem Betrieb (Arbeitsplatz fällt weg). Verhaltensbedingt: steuerbares Fehlverhalten (Diebstahl, Missachtung von Vorschriften). Personenbedingt: in der Person liegende, nicht steuerbare Gründe (Verlust der nötigen Fahrerlaubnis).'
    },
    {
      nr: 17, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Eine Mitarbeiterin der Nordlicht Software GmbH erwartet ein Kind. Die Personalabteilung informiert über den Mutterschutz.',
      frage: 'Wie lange gilt grundsätzlich die Schutzfrist nach der Entbindung, in der die Mutter nicht beschäftigt werden darf?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Dauer in das Kästchen ein.',
      optionen: [
        'Vier Wochen',
        'Sechs Wochen',
        'Acht Wochen',
        'Zwölf Wochen',
        'Sechs Monate'
      ],
      loesung: 3,
      erklaerung: '§ 3 MuSchG: Die Schutzfrist nach der Entbindung beträgt grundsätzlich acht Wochen. Vor der Entbindung sind es sechs Wochen.'
    },
    {
      nr: 18, thema: 'arbeitsschutz', typ: 'zahl',
      text: 'Die Mitarbeiterin bringt Zwillinge zur Welt (Mehrlingsgeburt).',
      kasten: {
        titel: '§ 3 MuSchG Schutzfristen (Auszug)',
        absaetze: [
          '(2) Frauen dürfen bis zum Ablauf von acht Wochen nach der Entbindung nicht beschäftigt werden.',
          'Bei medizinischen Frühgeburten und bei Mehrlingsgeburten verlängert sich diese Frist auf zwölf Wochen.'
        ]
      },
      frage: 'Wie viele Wochen beträgt die Schutzfrist nach der Entbindung in diesem Fall?',
      anweisung: 'Tragen Sie die Anzahl der Wochen in das Kästchen ein.',
      loesung: 12, nachkommastellen: 0, einheit: 'Wochen',
      erklaerung: 'Bei Mehrlingsgeburten verlängert § 3 Abs. 2 MuSchG die Schutzfrist nach der Entbindung von acht auf zwölf Wochen.'
    },
    {
      nr: 19, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Die Fachkraft für Arbeitssicherheit plant die Unterweisung der Beschäftigten.',
      frage: 'Zu welchem Zeitpunkt müssen die Beschäftigten über die Gefahren am Arbeitsplatz unterwiesen werden?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Zeitpunkt in das Kästchen ein.',
      optionen: [
        'Nur einmalig bei der Einstellung',
        'Bei Aufnahme der Tätigkeit und danach regelmäßig, mindestens einmal jährlich',
        'Nur nach einem Arbeitsunfall',
        'Nur auf ausdrücklichen Wunsch der Beschäftigten',
        'Es besteht keine Unterweisungspflicht'
      ],
      loesung: 2,
      erklaerung: '§ 12 ArbSchG: Die Unterweisung muss bei Aufnahme der Tätigkeit und danach in regelmäßigen Abständen (üblicherweise mindestens jährlich) erfolgen.'
    },
    {
      nr: 20, thema: 'sozialversicherung', typ: 'einfach',
      text: 'Ein Auszubildender fragt nach der Bedeutung der Beitragsbemessungsgrenze in der Sozialversicherung.',
      frage: 'Was bedeutet die Beitragsbemessungsgrenze?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Bis zu diesem Einkommen werden Beiträge erhoben; für den darüber liegenden Einkommensteil fallen keine weiteren Beiträge an.',
        'Unterhalb dieser Grenze besteht keine Versicherungspflicht.',
        'Oberhalb dieser Grenze verdoppelt sich der Beitragssatz.',
        'Sie legt die Höhe der späteren Rente fest.',
        'Sie gilt ausschließlich für Auszubildende.'
      ],
      loesung: 1,
      erklaerung: 'Die Beitragsbemessungsgrenze ist der Höchstbetrag des Einkommens, bis zu dem Beiträge berechnet werden. Einkommensteile darüber bleiben beitragsfrei.'
    },
    {
      nr: 21, thema: 'sozialversicherung', typ: 'zahl',
      text: 'Die Softwareentwicklerin Nele Timm hat ein monatliches Bruttogehalt von 3.600,00 EUR. Der allgemeine Beitragssatz zur gesetzlichen Krankenversicherung beträgt 14,6 %, der kassenindividuelle Zusatzbeitrag 1,7 %. Beide Beiträge tragen Arbeitgeber und Arbeitnehmer je zur Hälfte.',
      frage: 'Berechnen Sie den monatlichen Arbeitnehmeranteil zur Krankenversicherung in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 293.40, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Gesamtbeitragssatz = 14,6 % + 1,7 % = 16,3 %. Arbeitnehmeranteil = 16,3 % ÷ 2 = 8,15 %. 3.600,00 EUR × 8,15 % = 293,40 EUR.'
    },
    {
      nr: 22, thema: 'rechtsformen', typ: 'einfach',
      frage: 'Welche der folgenden Aussagen zum Stammkapital der GmbH trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Es beträgt mindestens 25.000,00 EUR, davon müssen bei der Gründung mindestens 12.500,00 EUR eingezahlt sein.',
        'Es beträgt mindestens 50.000,00 EUR.',
        'Ein Mindestkapital ist nicht vorgeschrieben.',
        'Es muss stets vollständig und ausschließlich in bar eingezahlt werden.',
        'Zusätzlich haftet jeder Gesellschafter unbeschränkt mit seinem Privatvermögen.'
      ],
      loesung: 1,
      erklaerung: '§ 5 und § 7 GmbHG: Das Stammkapital beträgt mindestens 25.000,00 EUR, bei der Anmeldung muss mindestens die Hälfte (12.500,00 EUR) eingezahlt sein. Die Gesellschafter haften grundsätzlich nur mit ihrer Einlage.'
    },
    {
      nr: 23, thema: 'rechtsformen', typ: 'einfach',
      frage: 'Welche der folgenden Aussagen zur Unternehmergesellschaft (haftungsbeschränkt) – UG – trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Sie kann mit einem Stammkapital ab 1,00 EUR gegründet werden und muss einen Teil des Jahresgewinns als Rücklage ansparen.',
        'Sie haftet unbeschränkt mit dem Privatvermögen der Gesellschafter.',
        'Sie wird nicht in das Handelsregister eingetragen.',
        'Sie ist eine Personengesellschaft.',
        'Sie benötigt ein Mindeststammkapital von 25.000,00 EUR.'
      ],
      loesung: 1,
      erklaerung: '§ 5a GmbHG: Die UG ist eine Sonderform der GmbH mit einem Stammkapital ab 1,00 EUR. Sie muss jährlich ein Viertel des Gewinns als gesetzliche Rücklage bilden, bis das Stammkapital von 25.000,00 EUR erreicht ist. Die Haftung ist wie bei der GmbH beschränkt.'
    },
    {
      nr: 24, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Nordlicht Software GmbH hat im abgelaufenen Geschäftsjahr einen Gewinn von 54.000,00 EUR erzielt. Das eingesetzte Eigenkapital betrug 360.000,00 EUR.',
      frage: 'Berechnen Sie die Eigenkapitalrentabilität in Prozent.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 15, nachkommastellen: 1, einheit: '%',
      erklaerung: 'Eigenkapitalrentabilität = Gewinn ÷ Eigenkapital × 100 = 54.000,00 ÷ 360.000,00 × 100 = 15,0 %.'
    },
    {
      nr: 25, thema: 'kennzahlen', typ: 'einfach',
      text: 'Das Controlling vergleicht vier Kundenaufträge nach ihrer Wirtschaftlichkeit (Ertrag im Verhältnis zum Aufwand).',
      frage: 'Welcher der folgenden Aufträge ist am wirtschaftlichsten?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Auftrag in das Kästchen ein.',
      optionen: [
        'Auftrag 1',
        'Auftrag 2',
        'Auftrag 3',
        'Auftrag 4'
      ],
      loesung: 4,
      erklaerung: 'Wirtschaftlichkeit = Ertrag ÷ Aufwand. Auftrag 1: 46.000 ÷ 40.000 = 1,15; Auftrag 2: 30.000 ÷ 25.000 = 1,20; Auftrag 3: 66.000 ÷ 60.000 = 1,10; Auftrag 4: 22.500 ÷ 18.000 = 1,25. Auftrag 4 hat die höchste Wirtschaftlichkeit.'
    },
    {
      nr: 26, thema: 'gleichbehandlung', typ: 'mehrfach',
      text: 'Die Nordlicht Software GmbH muss als Arbeitgeber das Allgemeine Gleichbehandlungsgesetz (AGG) beachten.',
      frage: 'In welchen der folgenden Fälle wurde gegen das AGG **verstoßen**?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Fällen in die Kästchen ein.',
      optionen: [
        'In einer Stellenanzeige wird ein „junges, dynamisches Team“ beschrieben und ausdrücklich nur Bewerber unter 30 Jahren gesucht.',
        'Eine Bewerbung wird abgelehnt, weil der geforderte Berufsabschluss fehlt.',
        'Eine Bewerberin wird allein wegen ihres Kopftuchs und ihrer Religion abgelehnt.',
        'Im gesamten Bürogebäude gilt für alle Beschäftigten ein Rauchverbot.',
        'Einem schwerbehinderten Mitarbeiter wird ein barrierefreier Arbeitsplatz eingerichtet.',
        'Ein langjährig Beschäftigter erhält aufgrund der Betriebszugehörigkeit eine höhere Vergütung.'
      ],
      loesung: [1, 3],
      erklaerung: '§§ 1, 7 AGG verbieten Benachteiligungen wegen Alter oder Religion. Die Altersgrenze in der Stellenanzeige und die Ablehnung wegen der Religion sind Verstöße. Eine fehlende Qualifikation, ein allgemeines Rauchverbot, barrierefreie Arbeitsplätze und eine Vergütung nach Betriebszugehörigkeit verstoßen nicht gegen das AGG.'
    },
    {
      nr: 27, thema: 'rechtsquellen', typ: 'zuordnung',
      text: 'In der Nordlicht Software GmbH kommen zu verschiedenen Sachverhalten Rechtsfragen auf.',
      frage: 'Welche der folgenden Rechtsquellen sind den nachstehenden Sachverhalten zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Rechtsquelle in das Kästchen ein.',
      optionenTitel: 'Rechtsquellen',
      optionen: [
        'Berufsbildungsgesetz (BBiG)',
        'Betriebsverfassungsgesetz (BetrVG)',
        'Bürgerliches Gesetzbuch (BGB)',
        'Handelsgesetzbuch (HGB)',
        'Bundesurlaubsgesetz (BUrlG)'
      ],
      itemsTitel: 'Sachverhalte',
      items: [
        { text: 'Höhe des gesetzlichen Mindesturlaubs für erwachsene Beschäftigte', loesung: 5 },
        { text: 'Wahl und Aufgaben des Betriebsrats', loesung: 2 },
        { text: 'Eintragung eines Kaufmanns in das Handelsregister', loesung: 4 },
        { text: 'Inhalt und Beendigung des Berufsausbildungsvertrags', loesung: 1 }
      ],
      erklaerung: 'Der gesetzliche Mindesturlaub steht im BUrlG, die Betriebsratswahl im BetrVG, das Handelsregister im HGB und der Ausbildungsvertrag im BBiG. Das BGB regelt hier keinen der Sachverhalte unmittelbar.'
    },
    {
      nr: 28, thema: 'organisation', typ: 'zuordnung',
      text: 'In einer Schulung zur Aufbauorganisation werden verschiedene Leitungssysteme anhand von Organigrammen vorgestellt.',
      frage: 'Welche der folgenden Organigramme sind den nachstehenden Leitungssystemen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Organigramm in das Kästchen ein.',
      optionenTitel: 'Organigramme',
      optionen: [
        { bild: 'org-einlinien' },
        { bild: 'org-mehrlinien' },
        { bild: 'org-stab' },
        { bild: 'org-matrix' }
      ],
      itemsTitel: 'Leitungssysteme',
      items: [
        { text: 'Einliniensystem', loesung: 1 },
        { text: 'Mehrliniensystem', loesung: 2 },
        { text: 'Stab-Linien-System', loesung: 3 },
        { text: 'Matrixorganisation', loesung: 4 }
      ],
      erklaerung: 'Einliniensystem: jede Stelle hat genau einen Vorgesetzten (strenge Rangordnung). Mehrliniensystem: eine Stelle hat mehrere Fachvorgesetzte. Stab-Linien-System: Einliniensystem mit beratenden Stabsstellen ohne Weisungsbefugnis. Matrixorganisation: Gliederung nach zwei Dimensionen (z. B. Funktion und Projekt).'
    },
    {
      nr: 29, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Nordlicht Software GmbH entsorgt Altgeräte und Verpackungen nach dem Kreislaufwirtschaftsgesetz.',
      frage: 'Welche Maßnahme steht in der Abfallhierarchie des Kreislaufwirtschaftsgesetzes an **erster** Stelle?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Vermeidung von Abfällen',
        'Beseitigung der Abfälle auf einer Deponie',
        'Energetische Verwertung durch Verbrennung',
        'Stoffliche Verwertung (Recycling)',
        'Export der Abfälle ins Ausland'
      ],
      loesung: 1,
      erklaerung: '§ 6 KrWG legt die Abfallhierarchie fest: 1. Vermeidung, 2. Vorbereitung zur Wiederverwendung, 3. Recycling, 4. sonstige Verwertung (z. B. energetisch), 5. Beseitigung. An erster Stelle steht die Vermeidung.'
    },
    {
      nr: 30, thema: 'umweltschutz', typ: 'einfach',
      frage: 'Was besagt das Verursacherprinzip im Umweltschutz?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      einleitung: 'Das Verursacherprinzip bedeutet, dass …',
      optionen: [
        'die Kosten für die Vermeidung und Beseitigung von Umweltbelastungen derjenige trägt, der sie verursacht hat.',
        'der Staat sämtliche Umweltkosten übernimmt.',
        'die Allgemeinheit die Kosten für Umweltschäden trägt.',
        'Umweltschäden grundsätzlich nicht ersetzt werden müssen.',
        'ausschließlich Privatpersonen für Umweltschäden haften.'
      ],
      loesung: 1,
      erklaerung: 'Nach dem Verursacherprinzip trägt derjenige die Kosten für Vermeidung und Beseitigung von Umweltbelastungen, der sie verursacht hat. Gegenstück ist das Gemeinlastprinzip, bei dem die Allgemeinheit die Kosten trägt.'
    }
  ]
});
