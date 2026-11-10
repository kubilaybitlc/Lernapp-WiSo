// Übungssatz 6 – eigene Aufgaben im Stil der IHK-WiSo-Bögen (keine Originalaufgaben).
// Aufgabentypen: einfach (1 Ziffer), mehrfach (mehrere Ziffern, Reihenfolge egal), zuordnung, reihenfolge, zahl, datum.
(window.WISO_SAETZE = window.WISO_SAETZE || []).push({
  id: 'uebung-06',
  titel: 'Übungssatz 6',
  untertitel: 'Hartmann & Söhne Netzwerktechnik OHG',
  ausgangssituation:
    'Die Hartmann & Söhne Netzwerktechnik OHG ist ein Handwerks- und Dienstleistungsbetrieb mit Sitz in Halle (Saale). Sie plant und verlegt Netzwerkverkabelungen für Unternehmen und Behörden und übernimmt den IT-Service für ihre Kunden. Gesellschafter sind Rainer Hartmann und seine Söhne Tobias und Felix Hartmann. Die folgenden Aufgaben beziehen sich auf dieses Unternehmen.',

  situationen: [
    {
      von: 5, bis: 9,
      text: 'Die Hartmann & Söhne Netzwerktechnik OHG bildet Fachinformatikerinnen und Fachinformatiker für Systemintegration sowie IT-System-Elektronikerinnen und -Elektroniker aus. Ausbilder ist Uwe Brückner. Im aktuellen Ausbildungsjahr haben die 20-jährige Lena Schubert und der 16-jährige Jonas Petzold ihre Ausbildung begonnen.'
    },
    {
      von: 10, bis: 11,
      text: 'Bei der Hartmann & Söhne Netzwerktechnik OHG sind 38 Arbeitnehmerinnen und Arbeitnehmer einschließlich der Auszubildenden beschäftigt. Es besteht ein dreiköpfiger Betriebsrat, Vorsitzende ist Sandra Kluge.'
    },
    {
      von: 14, bis: 16,
      text: 'Wegen eines dauerhaften Auftragsrückgangs plant die Geschäftsleitung Personalmaßnahmen. Im Betrieb sind 30 Vollzeitkräfte, vier Teilzeitkräfte mit je 15 Wochenstunden und vier Auszubildende beschäftigt.'
    },
    {
      von: 17, bis: 18,
      text: 'Der Netzwerktechniker Paul Weidner stürzt bei einem Kunden beim Verlegen von Netzwerkkabeln von einer Leiter und bricht sich das Handgelenk. Er ist voraussichtlich sechs Wochen arbeitsunfähig.'
    }
  ],

  aufgaben: [
    {
      nr: 1, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Herr Hartmann erläutert den Auszubildenden in einer Schulung den Wirtschaftskreislauf mit den Sektoren private Haushalte, Unternehmen und Staat.',
      frage: 'Welcher der folgenden Geldströme fließt im erweiterten Wirtschaftskreislauf vom Staat zu den Unternehmen?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Geldstrom in das Kästchen ein.',
      optionen: [
        'Transferzahlungen wie Kindergeld oder Wohngeld',
        'Steuern und Abgaben',
        'Subventionen',
        'Konsumausgaben',
        'Löhne und Gehälter'
      ],
      loesung: 3,
      erklaerung: 'Im erweiterten Wirtschaftskreislauf (mit Staat) fließen Subventionen vom Staat an die Unternehmen und Transferzahlungen (z. B. Kindergeld, Wohngeld) an die privaten Haushalte. Steuern und Abgaben fließen von Haushalten und Unternehmen an den Staat, Konsumausgaben von den Haushalten an die Unternehmen, Löhne und Gehälter von den Unternehmen (und vom Staat) an die Haushalte.'
    },
    {
      nr: 2, thema: 'wirtschaft-grundlagen', typ: 'einfach',
      text: 'Die Hartmann & Söhne Netzwerktechnik OHG schafft für die Abnahme neu verlegter Netzwerke ein Kabelmessgerät an. In einer Schulung unterscheidet Herr Hartmann verschiedene Güterarten.',
      frage: 'Welches der folgenden Güter ist ein Investitionsgut (Produktionsgut)?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Gut in das Kästchen ein.',
      optionen: [
        'Der Fernseher, den eine Familie für ihr Wohnzimmer kauft',
        'Die Lebensmittel, die ein Privathaushalt im Supermarkt einkauft',
        'Das Sonnenlicht, das durch die Fenster in die Werkstatt fällt',
        'Das Kabelmessgerät, das die OHG für die Prüfung der verlegten Netzwerke anschafft',
        'Die Beratung durch einen Steuerberater bei der privaten Einkommensteuererklärung'
      ],
      loesung: 4,
      erklaerung: 'Investitionsgüter (Produktionsgüter) setzen Unternehmen zur Herstellung anderer Güter oder zur Erbringung von Leistungen ein, hier das Kabelmessgerät. Konsumgüter dienen dem unmittelbaren Bedarf privater Haushalte, entweder als Gebrauchsgüter, die längere Zeit genutzt werden (Fernseher), oder als Verbrauchsgüter, die beim Gebrauch untergehen (Lebensmittel). Die Steuerberatung für eine Privatperson ist eine Dienstleistung für den privaten Konsum. Sonnenlicht ist ein freies Gut, das unbegrenzt und kostenlos zur Verfügung steht. Es handelt sich um Grundbegriffe der Volkswirtschaftslehre ohne Rechtsgrundlage.'
    },
    {
      nr: 3, thema: 'konjunktur', typ: 'einfach',
      text: 'Die Inflationsrate im Euroraum liegt seit mehreren Monaten deutlich über dem Ziel der Europäischen Zentralbank (EZB) von 2 %. Herr Hartmann befürchtet weiter steigende Einkaufspreise für Netzwerkkomponenten.',
      frage: 'Welche der folgenden geldpolitischen Maßnahmen der EZB ist geeignet, die Inflation zu dämpfen?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Maßnahme in das Kästchen ein.',
      optionen: [
        'Senkung der Leitzinsen',
        'Erhöhung der Leitzinsen',
        'Ausweitung der Käufe von Staatsanleihen',
        'Erhöhung der staatlichen Investitionen in Schulen',
        'Senkung der Einkommensteuer'
      ],
      loesung: 2,
      erklaerung: 'Vorrangiges Ziel der EZB ist die Preisstabilität (Art. 127 Abs. 1 AEUV). Erhöht die EZB die Leitzinsen, verteuern sich Kredite; Investitionen und Konsum gehen zurück, die Nachfrage sinkt und der Preisauftrieb lässt nach. Leitzinssenkungen und Anleihekäufe wirken expansiv und würden die Inflation eher verstärken. Staatsausgaben und Steuern sind Mittel der Fiskalpolitik, nicht der EZB.'
    },
    {
      nr: 4, thema: 'unternehmensziele', typ: 'einfach',
      text: 'Bei der Strategieplanung möchten die Gesellschafter nicht nur ihre eigenen Gewinninteressen verfolgen, sondern auch die Erwartungen von Beschäftigten, Kunden, Lieferanten, Kreditgebern und der Stadt Halle berücksichtigen.',
      frage: 'Welcher Ansatz der Unternehmensführung liegt hier vor?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Ansatz in das Kästchen ein.',
      optionen: [
        'Shareholder-Value-Ansatz',
        'Ökonomisches Maximalprinzip',
        'Management by Exception',
        'Just-in-time-Prinzip',
        'Stakeholder-Ansatz'
      ],
      loesung: 5,
      erklaerung: 'Beim Stakeholder-Ansatz richtet das Unternehmen seine Ziele an den Interessen aller Anspruchsgruppen aus, z. B. Beschäftigte (sichere Arbeitsplätze), Kunden (Qualität, Preis), Lieferanten (pünktliche Zahlung), Kreditgeber (Zins und Tilgung) und Staat bzw. Gemeinde (Steuern, Arbeitsplätze). Der Shareholder-Value-Ansatz stellt dagegen die Steigerung des Unternehmenswerts für die Eigentümer in den Vordergrund.'
    },
    {
      nr: 5, thema: 'ausbildung', typ: 'einfach',
      text: 'Herr Brückner bespricht mit den Auszubildenden, was geschieht, wenn jemand die Abschlussprüfung nicht besteht.',
      frage: 'Welche der folgenden Aussagen zum Nichtbestehen der Abschlussprüfung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Auf Verlangen der oder des Auszubildenden verlängert sich das Berufsausbildungsverhältnis bis zur nächstmöglichen Wiederholungsprüfung, höchstens um ein Jahr; die Abschlussprüfung kann zweimal wiederholt werden.',
        'Die Abschlussprüfung kann nur ein einziges Mal wiederholt werden.',
        'Das Berufsausbildungsverhältnis endet trotz Nichtbestehens immer mit dem vereinbarten Ende der Ausbildungszeit; eine Verlängerung ist ausgeschlossen.',
        'Über eine Verlängerung entscheidet allein der Ausbildungsbetrieb nach eigenem Ermessen.',
        'Wer die Abschlussprüfung nicht besteht, muss die gesamte Ausbildung von Beginn an wiederholen.'
      ],
      loesung: 1,
      erklaerung: '§ 21 Abs. 3 BBiG: Bestehen Auszubildende die Abschlussprüfung nicht, verlängert sich das Berufsausbildungsverhältnis auf ihr Verlangen bis zur nächstmöglichen Wiederholungsprüfung, höchstens um ein Jahr. Das Verlangen ist eine einseitige Erklärung der Auszubildenden; der Ausbildungsbetrieb kann die Verlängerung nicht ablehnen. Die Abschlussprüfung kann im Fall des Nichtbestehens zweimal wiederholt werden (§ 37 Abs. 1 Satz 2 BBiG).'
    },
    {
      nr: 6, thema: 'ausbildung', typ: 'einfach',
      text: 'Herr Brückner erklärt den neuen Auszubildenden, dass ihre Abschlussprüfung als gestreckte Abschlussprüfung in zwei zeitlich auseinanderfallenden Teilen durchgeführt wird.',
      frage: 'Welche der folgenden Aussagen zur gestreckten Abschlussprüfung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Teil 1 ist eine Zwischenprüfung, deren Ergebnis nicht in die Gesamtnote eingeht.',
        'Teil 1 kann bei einem schlechten Ergebnis vor Teil 2 eigenständig wiederholt werden.',
        'Das Ergebnis von Teil 1 geht mit dem in der Ausbildungsordnung festgelegten Anteil in das Gesamtergebnis der Abschlussprüfung ein.',
        'Nach dem Bestehen von Teil 1 endet das Berufsausbildungsverhältnis.',
        'Wer in Teil 1 ein mangelhaftes Ergebnis erzielt, darf an Teil 2 nicht teilnehmen.'
      ],
      loesung: 3,
      erklaerung: 'Die Ausbildungsordnung kann vorsehen, dass die Abschlussprüfung in zwei zeitlich auseinanderfallenden Teilen durchgeführt wird (§ 5 Abs. 2 Nr. 2 BBiG). Teil 1 ist keine Zwischenprüfung: Sein Ergebnis geht mit dem festgelegten Anteil in das Gesamtergebnis ein (bei den IT-Berufen 20 %). Teil 1 ist nicht eigenständig wiederholbar (§ 37 Abs. 1 Satz 3 BBiG); auch nach einem schlechten Ergebnis in Teil 1 wird Teil 2 abgelegt.'
    },
    {
      nr: 7, thema: 'ausbildung', typ: 'einfach',
      text: 'Frau Schubert (20 Jahre) hat montags von 07:45 Uhr bis 13:00 Uhr Berufsschulunterricht mit sechs Unterrichtsstunden zu je 45 Minuten. Mittwochs hat sie von 08:00 Uhr bis 11:15 Uhr vier Unterrichtsstunden. Die durchschnittliche tägliche Ausbildungszeit im Betrieb beträgt acht Stunden.',
      frage: 'Welche der folgenden Aussagen zum Montag trifft nach § 15 BBiG zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Da Frau Schubert volljährig ist, muss sie nach dem Unterricht am Montag in den Betrieb zurückkehren.',
        'Der Montag wird nur mit der reinen Unterrichtszeit von 4,5 Stunden auf die Ausbildungszeit angerechnet.',
        'Die Berufsschulzeit am Montag muss Frau Schubert im Betrieb nacharbeiten.',
        'Frau Schubert ist am Montag für den gesamten Tag freizustellen; der Tag wird mit der durchschnittlichen täglichen Ausbildungszeit von acht Stunden angerechnet.',
        'Frau Schubert ist am Montag und am Mittwoch jeweils für den gesamten Tag freizustellen.'
      ],
      loesung: 4,
      erklaerung: '§ 15 Abs. 1 Satz 2 Nr. 2 BBiG: An einem Berufsschultag mit mehr als fünf Unterrichtsstunden von mindestens je 45 Minuten sind Auszubildende einmal in der Woche für den ganzen Tag freizustellen, und zwar unabhängig vom Alter. Dieser Tag wird mit der durchschnittlichen täglichen Ausbildungszeit angerechnet (§ 15 Abs. 2 Nr. 2 BBiG). Am Mittwoch mit nur vier Unterrichtsstunden wird die Unterrichtszeit einschließlich der Pausen angerechnet (§ 15 Abs. 2 Nr. 1 BBiG); danach kann Frau Schubert im Betrieb ausgebildet werden.'
    },
    {
      nr: 8, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Herr Petzold (16 Jahre) hat im März eine Blockwoche an der Berufsschule. Der planmäßige Unterricht umfasst 27 Stunden an fünf Tagen.',
      frage: 'Welche der folgenden Aussagen zur Beschäftigung von Herrn Petzold in dieser Woche trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Er darf nach dem Unterricht täglich noch so lange im Betrieb beschäftigt werden, bis 40 Wochenstunden erreicht sind.',
        'Die Berufsschulwoche wird nur mit den tatsächlichen 27 Unterrichtsstunden angerechnet.',
        'Er muss am Samstag dieser Woche im Betrieb arbeiten, um die Ausbildungszeit auszugleichen.',
        'Blockunterricht wird nicht auf die Arbeitszeit angerechnet.',
        'Die Berufsschulwoche wird mit der durchschnittlichen wöchentlichen Arbeitszeit auf die Arbeitszeit angerechnet; zulässig sind lediglich zusätzliche betriebliche Ausbildungsveranstaltungen von bis zu zwei Stunden wöchentlich.'
      ],
      loesung: 5,
      erklaerung: '§ 9 Abs. 1 Satz 2 Nr. 3 JArbSchG: In Berufsschulwochen mit planmäßigem Blockunterricht von mindestens 25 Stunden an mindestens fünf Tagen dürfen Jugendliche nicht beschäftigt werden; zusätzliche betriebliche Ausbildungsveranstaltungen bis zu zwei Stunden wöchentlich sind zulässig. Die Woche wird mit der durchschnittlichen wöchentlichen Arbeitszeit auf die Arbeitszeit angerechnet (§ 9 Abs. 2 Nr. 2 JArbSchG), bei einer 40-Stunden-Woche also mit 40 Stunden.'
    },
    {
      nr: 9, thema: 'jugendarbeitsschutz', typ: 'einfach',
      text: 'Herr Petzold hat vor Beginn seiner Ausbildung die Bescheinigung über die ärztliche Erstuntersuchung vorgelegt. Ein Jahr nach Ausbildungsbeginn wird er noch nicht 18 Jahre alt sein.',
      frage: 'Welche der folgenden Aussagen zur ersten Nachuntersuchung nach dem Jugendarbeitsschutzgesetz trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Eine Nachuntersuchung ist nur erforderlich, wenn Herr Petzold im ersten Jahr häufig krank war.',
        'Ein Jahr nach Aufnahme der Beschäftigung muss sich der Arbeitgeber eine Bescheinigung über die erste Nachuntersuchung vorlegen lassen; liegt sie 14 Monate nach Beschäftigungsbeginn nicht vor, darf Herr Petzold bis zur Vorlage nicht weiterbeschäftigt werden.',
        'Die Kosten der Nachuntersuchung muss der Ausbildungsbetrieb tragen.',
        'Die Nachuntersuchung findet erst bei der Anmeldung zur Abschlussprüfung statt.',
        'Nach der Erstuntersuchung sind keine weiteren ärztlichen Untersuchungen vorgesehen.'
      ],
      loesung: 2,
      erklaerung: '§ 33 Abs. 1 JArbSchG: Ein Jahr nach Aufnahme der ersten Beschäftigung muss sich der Arbeitgeber die ärztliche Bescheinigung über die erste Nachuntersuchung vorlegen lassen; die Untersuchung darf nicht länger als drei Monate zurückliegen. Der Arbeitgeber soll den Jugendlichen rechtzeitig auf den Termin hinweisen. Nach Ablauf von 14 Monaten nach Aufnahme der Beschäftigung darf der Jugendliche nicht weiterbeschäftigt werden, solange er die Bescheinigung nicht vorgelegt hat (§ 33 JArbSchG). Die Kosten der Untersuchungen trägt das Land (§ 44 JArbSchG).'
    },
    {
      nr: 10, thema: 'mitbestimmung', typ: 'zuordnung',
      text: 'Die Geschäftsleitung plant mehrere Maßnahmen. Frau Kluge prüft, welche Beteiligungsrechte der Betriebsrat jeweils hat.',
      frage: 'Welche der folgenden Beteiligungsrechte sind den nachstehenden Maßnahmen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Beteiligungsrecht in das Kästchen ein.',
      optionenTitel: 'Beteiligungsrechte',
      optionen: [
        'Informationsrecht',
        'Beratungsrecht',
        'Anhörungs- und Widerspruchsrecht',
        'Zustimmungsverweigerungsrecht',
        'Echtes Mitbestimmungsrecht'
      ],
      itemsTitel: 'Maßnahmen',
      items: [
        { text: 'Einem Servicetechniker soll ordentlich gekündigt werden.', loesung: 3 },
        { text: 'Für alle Beschäftigten sollen Beginn und Ende der täglichen Arbeitszeit neu festgelegt werden.', loesung: 5 },
        { text: 'Ein Betriebsleiter mit Generalvollmacht, der leitender Angestellter ist, soll eingestellt werden.', loesung: 1 },
        { text: 'Eine Netzwerktechnikerin soll unbefristet eingestellt werden.', loesung: 4 },
        { text: 'Die Werkstatt soll umgebaut und mit neuen Arbeitsplätzen für die Kabelkonfektion ausgestattet werden.', loesung: 2 }
      ],
      erklaerung: 'Informationsrecht: Die Einstellung eines leitenden Angestellten ist dem Betriebsrat nur rechtzeitig mitzuteilen (§ 105 BetrVG). Beratungsrecht: Über die Planung von Umbauten und Arbeitsplätzen muss der Arbeitgeber den Betriebsrat unterrichten und mit ihm beraten (§ 90 BetrVG). Anhörungs- und Widerspruchsrecht: Vor jeder Kündigung ist der Betriebsrat anzuhören, einer ordentlichen Kündigung kann er widersprechen (§ 102 BetrVG). Zustimmungsverweigerungsrecht: Bei Einstellungen in Unternehmen mit mehr als 20 wahlberechtigten Arbeitnehmern kann er die Zustimmung aus den Gründen des § 99 Abs. 2 BetrVG verweigern. Echtes Mitbestimmungsrecht: Über Beginn und Ende der täglichen Arbeitszeit entscheiden Arbeitgeber und Betriebsrat gemeinsam (§ 87 Abs. 1 Nr. 2 BetrVG).'
    },
    {
      nr: 11, thema: 'mitbestimmung', typ: 'einfach',
      text: 'Frau Kluge erklärt den neuen Auszubildenden, wann der Betriebsrat das nächste Mal gewählt wird. Der dreiköpfige Betriebsrat wurde bei den regelmäßigen Betriebsratswahlen im Frühjahr 2026 gewählt.',
      frage: 'Welche der folgenden Aussagen zur Amtszeit und zur Wahl des Betriebsrats trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die regelmäßige Amtszeit des Betriebsrats beträgt vier Jahre; die nächsten regelmäßigen Betriebsratswahlen finden in der Zeit vom 1. März bis 31. Mai 2030 statt.',
        'Der Betriebsrat wird jedes Jahr neu gewählt.',
        'Die Amtszeit des Betriebsrats beträgt wie die der Jugend- und Auszubildendenvertretung zwei Jahre.',
        'Die Geschäftsleitung bestimmt den Zeitpunkt der nächsten Betriebsratswahl.',
        'Der Betriebsrat bleibt im Amt, bis alle seine Mitglieder aus dem Betrieb ausgeschieden sind.'
      ],
      loesung: 1,
      erklaerung: '§ 21 BetrVG: Die regelmäßige Amtszeit des Betriebsrats beträgt vier Jahre. Die regelmäßigen Betriebsratswahlen finden alle vier Jahre in der Zeit vom 1. März bis 31. Mai statt (§ 13 Abs. 1 BetrVG), nach 2026 also wieder 2030. Die Jugend- und Auszubildendenvertretung wird dagegen für zwei Jahre gewählt (§ 64 BetrVG). In Betrieben mit in der Regel fünf bis 100 wahlberechtigten Arbeitnehmern, wie hier mit 38, wird der Betriebsrat im vereinfachten Wahlverfahren gewählt (§ 14a BetrVG).'
    },
    {
      nr: 12, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die OHG möchte den Netzwerktechniker Erik Sommer einstellen. Herr Hartmann verlangt, dass Herr Sommer vor der Einstellung schriftlich erklärt, keiner Gewerkschaft beizutreten; andernfalls werde er nicht eingestellt.',
      frage: 'Welche der folgenden Aussagen zu dieser Forderung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Forderung ist zulässig, weil die OHG über ihre Innung tarifgebunden ist.',
        'Die Forderung ist zulässig, wenn Herr Sommer dafür ein höheres Gehalt erhält.',
        'Die Erklärung ist wirksam, weil Herr Sommer sie freiwillig unterschreibt.',
        'Die Abrede ist nichtig, weil sie die durch das Grundgesetz geschützte Koalitionsfreiheit einschränkt; Herr Sommer darf frei entscheiden, ob er einer Gewerkschaft beitritt.',
        'Beschäftigte von Handwerksbetrieben dürfen grundsätzlich keiner Gewerkschaft angehören.'
      ],
      loesung: 4,
      erklaerung: 'Art. 9 Abs. 3 Satz 1 GG gewährleistet für jedermann und für alle Berufe das Recht, zur Wahrung und Förderung der Arbeits- und Wirtschaftsbedingungen Vereinigungen zu bilden (Koalitionsfreiheit). Abreden, die dieses Recht einschränken oder zu behindern suchen, sind nichtig, hierauf gerichtete Maßnahmen sind rechtswidrig (Art. 9 Abs. 3 Satz 2 GG). Ebenso darf niemand zum Beitritt gezwungen werden (negative Koalitionsfreiheit). Die Koalitionsfreiheit ist die Grundlage der Tarifautonomie.'
    },
    {
      nr: 13, thema: 'tarifrecht', typ: 'einfach',
      text: 'Die Hartmann & Söhne Netzwerktechnik OHG ist über ihre Innung an einen Tarifvertrag gebunden. Der Servicetechniker Martin Eckardt ist Mitglied der tarifschließenden Gewerkschaft. Der Tarifvertrag sieht für seine Tätigkeit ein Monatsentgelt von 3.480,00 EUR und 30 Urlaubstage vor. In seinem Arbeitsvertrag sind 3.650,00 EUR und 28 Urlaubstage vereinbart.',
      frage: 'Welche Regelung gilt für Herrn Eckardt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Regelung in das Kästchen ein.',
      optionen: [
        'Es gelten ausschließlich die Regelungen des Tarifvertrags, also 3.480,00 EUR und 30 Urlaubstage.',
        'Es gelten ausschließlich die Regelungen des Arbeitsvertrags, also 3.650,00 EUR und 28 Urlaubstage.',
        'Es gelten 3.650,00 EUR aus dem Arbeitsvertrag und 30 Urlaubstage aus dem Tarifvertrag.',
        'Es gelten 3.480,00 EUR aus dem Tarifvertrag und 28 Urlaubstage aus dem Arbeitsvertrag.',
        'Der Arbeitsvertrag ist insgesamt nichtig, weil er vom Tarifvertrag abweicht.'
      ],
      loesung: 3,
      erklaerung: 'Bei beiderseitiger Tarifbindung gelten die Tarifnormen unmittelbar und zwingend (§ 4 Abs. 1 TVG). Abweichende Vereinbarungen sind nur zulässig, wenn sie den Arbeitnehmer begünstigen (Günstigkeitsprinzip, § 4 Abs. 3 TVG). Entgelt und Urlaub werden getrennt verglichen: Das höhere vertragliche Entgelt bleibt bestehen, beim Urlaub gilt der günstigere Tarifanspruch von 30 Tagen. Der Arbeitsvertrag bleibt im Übrigen wirksam.'
    },
    {
      nr: 14, thema: 'arbeitsvertrag', typ: 'einfach',
      text: 'Einem von zwei vergleichbaren Netzwerktechnikern soll betriebsbedingt gekündigt werden. Beide sind seit mehr als drei Jahren im Betrieb beschäftigt.',
      frage: 'Welche der folgenden Aussagen zur geplanten Kündigung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Das Kündigungsschutzgesetz ist nicht anzuwenden, weil im Betrieb nicht mehr als 50 Arbeitnehmer beschäftigt sind.',
        'Eine betriebsbedingte Kündigung ist nach dem Kündigungsschutzgesetz grundsätzlich ausgeschlossen.',
        'Der Arbeitgeber darf frei wählen, welchem der beiden er kündigt, wenn er eine Abfindung zahlt.',
        'Das Kündigungsschutzgesetz ist anzuwenden; die Kündigung ist nur sozial gerechtfertigt, wenn bei der Auswahl Betriebszugehörigkeit, Lebensalter, Unterhaltspflichten und eine Schwerbehinderung ausreichend berücksichtigt werden.',
        'Bei der Auswahl ist vorrangig dem Netzwerktechniker mit der längeren Betriebszugehörigkeit zu kündigen.'
      ],
      loesung: 4,
      erklaerung: 'Das KSchG gilt in Betrieben mit in der Regel mehr als zehn Arbeitnehmern; Auszubildende zählen nicht mit, Teilzeitkräfte mit bis zu 20 Wochenstunden zählen mit 0,5 (§ 23 Abs. 1 KSchG). Hier: 30 + 4 × 0,5 = 32. Das Arbeitsverhältnis muss zudem länger als sechs Monate bestehen (§ 1 Abs. 1 KSchG). Eine Kündigung ist sozial gerechtfertigt, wenn sie durch Gründe in der Person, im Verhalten oder durch dringende betriebliche Erfordernisse bedingt ist (§ 1 Abs. 2 KSchG). Bei betriebsbedingten Kündigungen ist unter vergleichbaren Arbeitnehmern eine Sozialauswahl nach Betriebszugehörigkeit, Lebensalter, Unterhaltspflichten und Schwerbehinderung zu treffen (§ 1 Abs. 3 KSchG); sozial schutzwürdigere Beschäftigte werden zuletzt gekündigt.'
    },
    {
      nr: 15, thema: 'arbeitsvertrag', typ: 'mehrfach',
      text: 'Einem Servicetechniker wurde wegen des Auftragsrückgangs ordentlich gekündigt. Acht Urlaubstage kann er bis zum Ende des Arbeitsverhältnisses wegen dringender Aufträge nicht mehr nehmen. Während der Kündigungsfrist möchte er sich bei anderen Unternehmen vorstellen.',
      frage: 'Welche der folgenden Ansprüche hat der Servicetechniker?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Ansprüchen in die Kästchen ein.',
      optionen: [
        'Anspruch auf eine Abfindung von einem Monatsgehalt je Beschäftigungsjahr, der bei jeder Kündigung automatisch entsteht',
        'Anspruch auf Abgeltung der acht Urlaubstage in Geld',
        'Anspruch auf das doppelte Gehalt im letzten Monat der Kündigungsfrist',
        'Anspruch auf angemessene Freistellung von der Arbeit, um sich bei anderen Arbeitgebern vorzustellen',
        'Anspruch auf Weiterbeschäftigung bis zum Rentenbeginn',
        'Anspruch auf Fortzahlung des Gehalts für drei Monate nach dem Ende des Arbeitsverhältnisses'
      ],
      loesung: [2, 4],
      erklaerung: '§ 7 Abs. 4 BUrlG: Kann der Urlaub wegen der Beendigung des Arbeitsverhältnisses ganz oder teilweise nicht mehr gewährt werden, ist er abzugelten. § 629 BGB: Nach der Kündigung eines dauernden Dienstverhältnisses muss der Arbeitgeber auf Verlangen angemessene Zeit zum Aufsuchen eines anderen Arbeitsverhältnisses gewähren; das Entgelt wird dafür in der Regel fortgezahlt (§ 616 BGB). Einen automatischen Abfindungsanspruch gibt es nicht; bei einer betriebsbedingten Kündigung kann der Arbeitgeber nach § 1a KSchG eine Abfindung von 0,5 Monatsverdiensten je Beschäftigungsjahr anbieten, wenn der Arbeitnehmer keine Klage erhebt. Nach dem Ende des Arbeitsverhältnisses besteht kein Gehaltsanspruch mehr.'
    },
    {
      nr: 16, thema: 'arbeitsvertrag', typ: 'datum',
      text: 'Der Servicetechniker Kevin Lorenz ist seit sechs Jahren im Betrieb beschäftigt. Er hat eine neue Stelle gefunden und kündigt sein Arbeitsverhältnis ordentlich. Die Kündigung geht der Geschäftsleitung am 10.03.2027 zu. Es gilt die gesetzliche Kündigungsfrist.',
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
      frage: 'Mit Ablauf welchen Tages endet das Arbeitsverhältnis von Herrn Lorenz?',
      anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.',
      loesung: '15.04.2027',
      erklaerung: 'Die verlängerten Fristen nach § 622 Abs. 2 BGB gelten nur für Kündigungen durch den Arbeitgeber. Kündigt der Arbeitnehmer, gilt die Grundkündigungsfrist von vier Wochen zum Fünfzehnten oder zum Ende eines Kalendermonats (§ 622 Abs. 1 BGB). Die Frist beginnt am Tag nach dem Zugang (§ 187 Abs. 1 BGB): Vom 11.03.2027 bis zum 07.04.2027 sind vier Wochen (28 Tage) vergangen. Der nächste zulässige Termin danach ist der 15.04.2027.'
    },
    {
      nr: 17, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Herr Hartmann fragt, welche Pflichten der Betrieb nach dem Unfall von Herrn Weidner hat.',
      frage: 'Welche der folgenden Aussagen zur Unfallanzeige trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Der Unfall muss nur angezeigt werden, wenn Herr Weidner länger als sechs Wochen arbeitsunfähig ist.',
        'Der Betrieb muss den Unfall innerhalb von drei Tagen, nachdem er davon Kenntnis erlangt hat, der Berufsgenossenschaft anzeigen, weil Herr Weidner mehr als drei Tage arbeitsunfähig ist.',
        'Die Unfallanzeige erstattet Herr Weidner selbst bei seiner Krankenkasse.',
        'Der Unfall ist der Polizei zu melden, die dann die Berufsgenossenschaft informiert.',
        'Eine Unfallanzeige ist nicht nötig, weil sich der Unfall beim Kunden und nicht im eigenen Betrieb ereignet hat.'
      ],
      loesung: 2,
      erklaerung: '§ 193 Abs. 1 SGB VII: Unternehmer haben Unfälle von Versicherten dem Unfallversicherungsträger (hier der Berufsgenossenschaft) anzuzeigen, wenn Versicherte getötet oder so verletzt sind, dass sie mehr als drei Tage arbeitsunfähig werden. Die Anzeige ist binnen drei Tagen zu erstatten, nachdem der Unternehmer vom Unfall Kenntnis erlangt hat (§ 193 Abs. 4 SGB VII); der Betriebsrat unterzeichnet sie mit (§ 193 Abs. 5 SGB VII). Auch ein Unfall beim Kunden ist ein Arbeitsunfall, weil er bei der versicherten Tätigkeit geschieht (§ 8 Abs. 1 SGB VII).'
    },
    {
      nr: 18, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Herr Weidner möchte wissen, in welchen Fällen er durch die gesetzliche Unfallversicherung geschützt ist.',
      frage: 'Bei welchem der folgenden Unfälle besteht **kein** Schutz durch die gesetzliche Unfallversicherung?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Unfall in das Kästchen ein.',
      optionen: [
        'Herr Weidner stürzt auf dem direkten Weg von seiner Wohnung zur Arbeit mit dem Fahrrad.',
        'Herr Weidner verletzt sich bei der von der Geschäftsleitung veranstalteten Weihnachtsfeier, zu der alle Beschäftigten eingeladen sind.',
        'Herr Weidner verletzt sich am Samstag beim privaten Umzug eines Freundes.',
        'Herr Weidner knickt beim Tragen einer Kabeltrommel im Lager um.',
        'Ein Auszubildender stürzt auf dem direkten Weg von der Berufsschule in den Betrieb.'
      ],
      loesung: 3,
      erklaerung: 'Versichert sind Arbeitsunfälle bei der versicherten Tätigkeit (§ 8 Abs. 1 SGB VII) und Wegeunfälle auf dem unmittelbaren Weg zum und vom Ort der Tätigkeit (§ 8 Abs. 2 Nr. 1 SGB VII). Auch betriebliche Gemeinschaftsveranstaltungen wie eine Weihnachtsfeier, die von der Unternehmensleitung getragen wird und allen Beschäftigten offensteht, sind versichert. Der Besuch der Berufsschule und der Weg zwischen Berufsschule und Betrieb sind ebenfalls geschützt. Private Tätigkeiten wie die Umzugshilfe für einen Freund am Wochenende sind nicht versichert.'
    },
    {
      nr: 19, thema: 'arbeitsschutz', typ: 'einfach',
      text: 'Beim Ziehen von Kabeln in Kabelschächten und auf Baustellen sollen die Netzwerktechniker künftig Sicherheitsschuhe und Schutzhandschuhe tragen. Felix Hartmann überlegt, die Kosten dafür vom Gehalt der Beschäftigten abzuziehen.',
      frage: 'Welche der folgenden Aussagen zur persönlichen Schutzausrüstung trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Beschäftigten müssen die Schutzausrüstung selbst kaufen, weil sie sie auch privat nutzen könnten.',
        'Die Kosten dürfen je zur Hälfte auf den Arbeitgeber und die Beschäftigten verteilt werden.',
        'Das Tragen der Schutzausrüstung ist freiwillig, auch wenn der Arbeitgeber es anordnet.',
        'Die Berufsgenossenschaft stellt allen Beschäftigten die Schutzausrüstung kostenlos zur Verfügung.',
        'Der Arbeitgeber muss die erforderliche Schutzausrüstung kostenlos bereitstellen; die Kosten darf er den Beschäftigten nicht auferlegen.'
      ],
      loesung: 5,
      erklaerung: 'Kosten für Maßnahmen des Arbeitsschutzes darf der Arbeitgeber nicht den Beschäftigten auferlegen (§ 3 Abs. 3 ArbSchG). Ergibt die Gefährdungsbeurteilung, dass persönliche Schutzausrüstung nötig ist, muss er geeignete Schutzausrüstung auswählen und in ordnungsgemäßem Zustand bereitstellen (§ 2 PSA-Benutzungsverordnung). Die Beschäftigten sind verpflichtet, die bereitgestellte Schutzausrüstung bestimmungsgemäß zu verwenden (§ 15 Abs. 2 ArbSchG).'
    },
    {
      nr: 20, thema: 'sozialversicherung', typ: 'mehrfach',
      text: 'Der Lagerist Dennis Wolf ist seit vier Jahren im Betrieb beschäftigt und erhält eine betriebsbedingte Kündigung. Er möchte nach dem Ende des Arbeitsverhältnisses Arbeitslosengeld beantragen.',
      frage: 'Welche der folgenden Voraussetzungen muss Herr Wolf für den Anspruch auf Arbeitslosengeld erfüllen?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Voraussetzungen in die Kästchen ein.',
      optionen: [
        'Er muss mindestens fünf Jahre Beiträge zur Rentenversicherung gezahlt haben.',
        'Er darf kein Vermögen über 15.000,00 EUR besitzen.',
        'Er muss sich bei der Agentur für Arbeit arbeitslos melden.',
        'Er muss mindestens 24 Monate bei demselben Arbeitgeber beschäftigt gewesen sein.',
        'Er muss innerhalb der letzten 30 Monate mindestens zwölf Monate versicherungspflichtig beschäftigt gewesen sein (Anwartschaftszeit).',
        'Er muss eine Bescheinigung seiner Krankenkasse über seine Arbeitsfähigkeit vorlegen.'
      ],
      loesung: [3, 5],
      erklaerung: '§ 137 Abs. 1 SGB III: Anspruch auf Arbeitslosengeld hat, wer arbeitslos ist, sich bei der Agentur für Arbeit arbeitslos gemeldet (§ 141 SGB III) und die Anwartschaftszeit erfüllt hat. Die Anwartschaftszeit erfüllt, wer in der Rahmenfrist von 30 Monaten mindestens zwölf Monate in einem Versicherungspflichtverhältnis gestanden hat (§§ 142, 143 SGB III). Eine Vermögensprüfung gibt es beim Arbeitslosengeld, anders als bei der Grundsicherung, nicht. Arbeitsuchend melden muss man sich spätestens drei Monate vor dem Ende des Arbeitsverhältnisses (§ 38 Abs. 1 SGB III).'
    },
    {
      nr: 21, thema: 'sozialversicherung', typ: 'zahl',
      text: 'Die Netzwerktechnikerin Franziska Wagner (28 Jahre, ein Kind) erhält ein monatliches Bruttogehalt von 3.600,00 EUR. Für sie gelten folgende Arbeitnehmeranteile am Bruttogehalt: Krankenversicherung einschließlich Zusatzbeitrag 8,75 %, Pflegeversicherung 1,80 %, Rentenversicherung 9,30 % und Arbeitslosenversicherung 1,30 %. Die Berufsgenossenschaft erhebt einen Beitrag von 1,20 % der Lohnsumme.',
      frage: 'Berechnen Sie die Summe der monatlichen Arbeitnehmeranteile zur Sozialversicherung in EUR.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 761.4, nachkommastellen: 2, einheit: 'EUR',
      erklaerung: 'Die Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung tragen Arbeitgeber und Arbeitnehmer grundsätzlich je zur Hälfte (§ 249 SGB V, § 58 SGB XI, § 168 SGB VI, § 346 SGB III); den Beitrag zur Unfallversicherung trägt allein der Arbeitgeber (§ 150 SGB VII), er zählt also nicht mit. Arbeitnehmeranteile: 8,75 % + 1,80 % + 9,30 % + 1,30 % = 21,15 %. 3.600,00 EUR × 21,15 % = 761,40 EUR (KV 315,00 + PV 64,80 + RV 334,80 + AV 46,80).'
    },
    {
      nr: 22, thema: 'rechtsformen', typ: 'einfach',
      text: 'Im Gesellschaftsvertrag der Hartmann & Söhne Netzwerktechnik OHG sind keine besonderen Regelungen zu Haftung und Geschäftsführung getroffen. Ein Lieferant wartet seit Wochen auf die Bezahlung einer Rechnung.',
      frage: 'Welche der folgenden Aussagen zu den Gesellschaftern der OHG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Jeder Gesellschafter haftet unbeschränkt, unmittelbar und gesamtschuldnerisch; zur Geschäftsführung sind alle Gesellschafter berechtigt und verpflichtet.',
        'Die Gesellschafter haften nur bis zur Höhe ihrer Einlage.',
        'Der Lieferant muss zuerst die OHG verklagen, bevor er sich an einen Gesellschafter wenden darf.',
        'Die Geschäftsführung liegt bei einem von den Gesellschaftern bestellten Geschäftsführer, der selbst kein Gesellschafter sein darf.',
        'Die OHG benötigt ein Mindestkapital von 25.000,00 EUR.'
      ],
      loesung: 1,
      erklaerung: '§ 126 HGB (in der Fassung des MoPeG seit 2024): Die Gesellschafter haften für die Verbindlichkeiten der Gesellschaft den Gläubigern als Gesamtschuldner persönlich; eine abweichende Vereinbarung ist Dritten gegenüber unwirksam. Die Haftung ist unbeschränkt (auch mit dem Privatvermögen) und unmittelbar, der Gläubiger kann sich sofort an jeden Gesellschafter wenden. Zur Geschäftsführung sind nach § 116 HGB alle Gesellschafter berechtigt und verpflichtet. Ein Mindestkapital gibt es bei der OHG nicht.'
    },
    {
      nr: 23, thema: 'rechtsformen', typ: 'mehrfach',
      text: 'Die Gesellschafter überlegen, den Namen ihres Unternehmens zu ändern, und informieren sich über die Vorschriften des Handelsgesetzbuchs (HGB) zur Firma.',
      frage: 'Welche der folgenden Aussagen zur Firma treffen zu?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Aussagen in die Kästchen ein.',
      optionen: [
        'Die Firma ist der Name, unter dem ein Kaufmann seine Geschäfte betreibt und die Unterschrift abgibt.',
        'Die Firma darf frei erfunden sein, auch wenn sie über die Art des Geschäfts irreführt.',
        'Mit „Firma“ ist nach dem HGB das Betriebsgebäude des Unternehmens gemeint.',
        'Die Firma einer OHG muss die Vor- und Nachnamen aller Gesellschafter enthalten.',
        'Die Firma muss einen Rechtsformzusatz enthalten, bei der OHG z. B. „offene Handelsgesellschaft“ oder „OHG“.',
        'Eine neue Firma darf auch dann eingetragen werden, wenn am selben Ort bereits ein Unternehmen mit genau dieser Firma eingetragen ist.'
      ],
      loesung: [1, 5],
      erklaerung: '§ 17 Abs. 1 HGB: Die Firma eines Kaufmanns ist der Name, unter dem er seine Geschäfte betreibt und die Unterschrift abgibt. Sie muss zur Kennzeichnung geeignet sein, Unterscheidungskraft besitzen und darf nicht irreführen (§ 18 HGB). Bei einer OHG muss sie die Bezeichnung „offene Handelsgesellschaft“ oder eine allgemein verständliche Abkürzung wie „OHG“ enthalten (§ 19 Abs. 1 Nr. 2 HGB). Personen-, Sach- und Fantasiefirmen sind zulässig, die Namen aller Gesellschafter müssen nicht enthalten sein. Jede neue Firma muss sich von den am selben Ort bereits eingetragenen Firmen deutlich unterscheiden (§ 30 Abs. 1 HGB).'
    },
    {
      nr: 24, thema: 'kennzahlen', typ: 'zahl',
      text: 'Die Hartmann & Söhne Netzwerktechnik OHG hat im abgelaufenen Geschäftsjahr Umsatzerlöse von 2.350.000,00 EUR und einen Gewinn von 101.500,00 EUR erzielt.',
      frage: 'Berechnen Sie die Umsatzrentabilität in Prozent.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein. Runden Sie das Ergebnis auf die zweite Nachkommastelle.',
      loesung: 4.32, nachkommastellen: 2, einheit: '%',
      erklaerung: 'Umsatzrentabilität = Gewinn ÷ Umsatzerlöse × 100 = 101.500,00 EUR ÷ 2.350.000,00 EUR × 100 = 4,3191… % ≈ 4,32 %. Die Kennzahl zeigt, wie viel Gewinn je 100 EUR Umsatz erzielt wurde (hier rund 4,32 EUR).'
    },
    {
      nr: 25, thema: 'gleichbehandlung', typ: 'einfach',
      text: 'Ein Kunde der OHG lehnt es wiederholt ab, sich von der Servicetechnikerin Zeynep Doğan betreuen zu lassen, weil sie ein Kopftuch trägt, und äußert sich ihr gegenüber abwertend.',
      frage: 'Welche der folgenden Aussagen zu den Pflichten der Hartmann & Söhne Netzwerktechnik OHG trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die OHG muss nichts unternehmen, weil das AGG nur vor Benachteiligungen durch den Arbeitgeber schützt.',
        'Die OHG muss dem Wunsch des Kunden folgen und Frau Doğan dauerhaft von allen Kundeneinsätzen abziehen.',
        'Frau Doğan muss das Kopftuch bei Kundeneinsätzen ablegen, weil der Kunde dies verlangt.',
        'Die OHG muss geeignete, erforderliche und angemessene Maßnahmen ergreifen, um Frau Doğan vor der Benachteiligung durch den Kunden zu schützen.',
        'Frau Doğan kann sich nur an die Polizei wenden, weil der Kunde kein Beschäftigter der OHG ist.'
      ],
      loesung: 4,
      erklaerung: 'Das AGG schützt vor Benachteiligungen wegen der Religion (§ 1 AGG); abwertende Äußerungen können eine Belästigung sein (§ 3 Abs. 3 AGG). Werden Beschäftigte bei der Ausübung ihrer Tätigkeit durch Dritte, z. B. Kunden, benachteiligt, muss der Arbeitgeber im Einzelfall geeignete, erforderliche und angemessene Maßnahmen zum Schutz der Beschäftigten ergreifen (§ 12 Abs. 4 AGG), etwa ein klärendes Gespräch mit dem Kunden oder notfalls die Beendigung der Geschäftsbeziehung. Den Kundenwunsch einfach umzusetzen, wäre selbst eine verbotene Benachteiligung (§ 7 AGG).'
    },
    {
      nr: 26, thema: 'rechtsquellen', typ: 'einfach',
      text: 'Herr Wolf hat gegen seine Kündigung vor dem Arbeitsgericht geklagt und den Prozess verloren. Er möchte gegen das Urteil Berufung einlegen.',
      frage: 'Welches Gericht ist für die Berufung gegen das Urteil des Arbeitsgerichts zuständig?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Gericht in das Kästchen ein.',
      optionen: [
        'Das Landgericht',
        'Das Landesarbeitsgericht',
        'Das Bundesarbeitsgericht',
        'Das Oberlandesgericht',
        'Das Landessozialgericht'
      ],
      loesung: 2,
      erklaerung: 'Die Arbeitsgerichtsbarkeit ist dreistufig: Arbeitsgericht (erste Instanz), Landesarbeitsgericht (Berufung, §§ 8 Abs. 2, 64 ArbGG) und Bundesarbeitsgericht in Erfurt (Revision, § 72 ArbGG). Landgericht und Oberlandesgericht gehören zur ordentlichen Gerichtsbarkeit, das Landessozialgericht zur Sozialgerichtsbarkeit.'
    },
    {
      nr: 27, thema: 'organisation', typ: 'einfach',
      text: 'Die Hartmann & Söhne Netzwerktechnik OHG wächst. Felix Hartmann soll die Organisation neu strukturieren und für jede Stelle eine Stellenbeschreibung erstellen.',
      frage: 'Welche der folgenden Aussagen zur Organisation trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Die Ablauforganisation legt fest, welche Stellen und Abteilungen es im Betrieb gibt.',
        'Ein Organigramm stellt den zeitlichen Ablauf eines Arbeitsprozesses dar.',
        'Die Stellenbeschreibung ist ein Instrument der Aufbauorganisation und enthält u. a. Ziel, Aufgaben, Befugnisse sowie die Über- und Unterstellung einer Stelle.',
        'Stellenbeschreibungen sind für alle Betriebe gesetzlich vorgeschrieben.',
        'Die Aufbauorganisation regelt Reihenfolge und Dauer der einzelnen Arbeitsschritte.'
      ],
      loesung: 3,
      erklaerung: 'Die Aufbauorganisation gliedert das Unternehmen in Stellen und Abteilungen und legt die Weisungsbeziehungen fest (Darstellung im Organigramm). Die Stellenbeschreibung gehört zur Aufbauorganisation; sie beschreibt Stellenbezeichnung, Ziel, Aufgaben, Kompetenzen, Verantwortung sowie Über- und Unterstellung. Die Ablauforganisation regelt Reihenfolge, Zeit und Ort der Arbeitsschritte (z. B. im Ablaufdiagramm). Eine gesetzliche Pflicht zur Stellenbeschreibung besteht nicht.'
    },
    {
      nr: 28, thema: 'entgelt', typ: 'zuordnung',
      text: 'In der Hartmann & Söhne Netzwerktechnik OHG werden unterschiedliche Lohnformen eingesetzt.',
      frage: 'Welche der folgenden Lohnformen sind den nachstehenden Beschreibungen zuzuordnen?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Lohnform in das Kästchen ein. Eine Lohnform kann mehreren Beschreibungen zugeordnet werden.',
      optionenTitel: 'Lohnformen',
      optionen: [
        'Zeitlohn',
        'Akkordlohn',
        'Prämienlohn'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Ein Mitarbeiter in der Kabelkonfektion erhält für jedes fertige Patchkabel einen festen Geldbetrag.', loesung: 2 },
        { text: 'Eine Servicetechnikerin erhält 21,80 EUR für jede geleistete Arbeitsstunde, unabhängig von der Zahl der erledigten Aufträge.', loesung: 1 },
        { text: 'Ein Mitarbeiter erhält einen festen Grundlohn und zusätzlich einen Bonus, wenn die Fehlerquote bei der Kabelmessung unter 1 % liegt.', loesung: 3 },
        { text: 'Diese Lohnform eignet sich besonders für Tätigkeiten, bei denen Sorgfalt wichtiger ist als Schnelligkeit, z. B. bei der Fehlersuche im Netzwerk.', loesung: 1 }
      ],
      erklaerung: 'Zeitlohn: Bezahlung nach der Arbeitszeit, unabhängig von der Leistungsmenge; geeignet, wenn Qualität und Sorgfalt im Vordergrund stehen oder die Menge nicht messbar ist. Akkordlohn: Bezahlung nach der erbrachten Menge (Stück- oder Zeitakkord); setzt gleichartige, messbare Tätigkeiten voraus. Für Jugendliche ist Akkordarbeit grundsätzlich verboten (§ 23 JArbSchG). Prämienlohn: Grundlohn plus Prämie für eine besondere Leistung, z. B. Qualität, Materialersparnis oder Termintreue.'
    },
    {
      nr: 29, thema: 'umweltschutz', typ: 'einfach',
      text: 'In der Werkstatt der Hartmann & Söhne Netzwerktechnik OHG fallen bei der Kabelkonfektion regelmäßig Kartonagen, Kunststofffolien und Metallreste an.',
      frage: 'Welche der folgenden Aussagen zum Umgang mit diesen gewerblichen Abfällen trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Gewerbliche Abfälle dürfen grundsätzlich gemeinsam im Restmüllcontainer entsorgt werden.',
        'Metallreste dürfen auf dem Betriebsgelände vergraben werden, weil sie ungefährlich sind.',
        'Für die Entsorgung ist ausschließlich der Hersteller der Kabel verantwortlich.',
        'Die getrennte Sammlung ist freiwillig und wird mit einer Steuerermäßigung belohnt.',
        'Die Abfälle müssen grundsätzlich nach Fraktionen wie Papier und Pappe, Kunststoffe und Metalle getrennt gesammelt werden; die Getrennthaltung ist zu dokumentieren.'
      ],
      loesung: 5,
      erklaerung: 'Nach § 3 Abs. 1 der Gewerbeabfallverordnung (GewAbfV) müssen Erzeuger und Besitzer gewerblicher Siedlungsabfälle u. a. Papier, Pappe und Karton, Glas, Kunststoffe, Metalle, Holz, Textilien und Bioabfälle getrennt sammeln und vorrangig der Vorbereitung zur Wiederverwendung oder dem Recycling zuführen. Die Erfüllung dieser Pflichten ist zu dokumentieren (§ 3 Abs. 3 GewAbfV). Grundlage ist das Kreislaufwirtschaftsgesetz (KrWG).'
    },
    {
      nr: 30, thema: 'umweltschutz', typ: 'einfach',
      text: 'Die Hartmann & Söhne Netzwerktechnik OHG möchte ihren Umweltschutz systematisch organisieren und überlegt, sich nach EMAS (Eco-Management and Audit Scheme) registrieren zu lassen.',
      frage: 'Welche der folgenden Aussagen zu EMAS trifft zu?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'EMAS ist ein freiwilliges Umweltmanagementsystem der EU; das Unternehmen veröffentlicht eine Umwelterklärung, die von einem unabhängigen Umweltgutachter geprüft wird.',
        'EMAS ist ein gesetzlich vorgeschriebenes Umweltzeichen für alle Elektrogeräte.',
        'Mit der EMAS-Registrierung entfallen alle gesetzlichen Umweltvorschriften für das Unternehmen.',
        'EMAS kennzeichnet Produkte aus fairem Handel.',
        'An EMAS dürfen nur Unternehmen mit mehr als 500 Beschäftigten teilnehmen.'
      ],
      loesung: 1,
      erklaerung: 'EMAS beruht auf der EU-Verordnung Nr. 1221/2009. Die Teilnahme ist freiwillig und steht Organisationen jeder Größe offen. Das Unternehmen führt ein Umweltmanagementsystem ein (Anforderungen wie DIN EN ISO 14001), verbessert seine Umweltleistung kontinuierlich und veröffentlicht eine Umwelterklärung, die ein zugelassener Umweltgutachter prüft. In Deutschland registrieren die IHKs und Handwerkskammern (Umweltauditgesetz). Die Einhaltung der Umweltvorschriften ist Voraussetzung der Registrierung.'
    }
  ]
});
