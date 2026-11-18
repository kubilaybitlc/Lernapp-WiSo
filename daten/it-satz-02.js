// IT-Theorie-Übungssatz 2 – Verschlüsselung, Netzwerk, Zahlensysteme, IT-Systeme (eigene Aufgaben, keine Originalaufgaben).
(window.WISO_IT_SAETZE = window.WISO_IT_SAETZE || []).push({
  id: 'it-02',
  titel: 'IT-Theorie-Übungssatz 2',
  untertitel: 'Verschlüsselung, Netzwerk, Zahlensysteme und IT-Systeme',
  ausgangssituation:
    'Die NetSecure IT-Dienstleistungen GmbH in Hannover betreut mittelständische Unternehmen in den Bereichen Netzwerktechnik und IT-Sicherheit. Sie arbeiten als Fachinformatiker/-in Systemintegration in der Abteilung Technik.',

  situationen: [
    {
      von: 1, bis: 7,
      text: 'Ein Kunde möchte seine E-Mail-Kommunikation und die Datenübertragung zu seinen Außenstellen absichern. Sie sollen ein Konzept für Verschlüsselung und digitale Signaturen erstellen.'
    },
    {
      von: 8, bis: 14,
      text: 'Beim Kunden BüroTech KG soll das Netzwerk erweitert und neu strukturiert werden. Sie sollen die Netzwerkplanung unterstützen und dabei Fragen zu Protokollen, dem OSI-Modell und der IP-Adressierung beantworten.'
    },
    {
      von: 15, bis: 20,
      text: 'In einer internen Schulung werden die Grundlagen der Zahlensysteme und der Datendarstellung in IT-Systemen wiederholt.'
    },
    {
      von: 21, bis: 25,
      text: 'Die NetSecure GmbH plant die Modernisierung ihrer eigenen Serverinfrastruktur. Dabei werden verschiedene RAID-Level, Virtualisierungstechniken und Cloud-Modelle verglichen.'
    }
  ],

  aufgaben: [
    // --- Verschlüsselung (1–7) ---
    {
      nr: 1, thema: 'verschluesselung', typ: 'einfach',
      text: 'Der Kunde möchte vertrauliche Daten verschlüsseln. Dabei soll ein Verfahren verwendet werden, bei dem Sender und Empfänger denselben Schlüssel verwenden.',
      frage: 'Welches Verschlüsselungsverfahren wird beschrieben?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Verfahren in das Kästchen ein.',
      optionen: [
        'Asymmetrische Verschlüsselung – es werden zwei verschiedene Schlüssel verwendet.',
        'Symmetrische Verschlüsselung – Sender und Empfänger verwenden denselben Schlüssel.',
        'Hashing – die Daten werden in einen Hashwert fester Länge umgewandelt.',
        'Digitale Signatur – der Sender signiert die Nachricht mit seinem privaten Schlüssel.',
        'Steganografie – die Daten werden in einem Bild versteckt.'
      ],
      loesung: 2,
      erklaerung: 'Bei der symmetrischen Verschlüsselung verwenden Sender und Empfänger denselben geheimen Schlüssel zum Ver- und Entschlüsseln. Bekannte Verfahren: AES (Advanced Encryption Standard), DES, 3DES. Vorteil: hohe Geschwindigkeit. Nachteil: Der Schlüssel muss sicher übertragen werden (Schlüsselverteilungsproblem).'
    },
    {
      nr: 2, thema: 'verschluesselung', typ: 'einfach',
      text: 'Für die sichere Übertragung von E-Mails soll ein Verfahren eingesetzt werden, bei dem jeder Teilnehmer ein Schlüsselpaar bestehend aus einem öffentlichen und einem privaten Schlüssel besitzt.',
      frage: 'Welches Verschlüsselungsverfahren verwendet ein solches Schlüsselpaar?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Verfahren in das Kästchen ein.',
      optionen: [
        'AES (Advanced Encryption Standard)',
        'RSA (Rivest-Shamir-Adleman)',
        'SHA-256 (Secure Hash Algorithm)',
        'Caesar-Chiffre',
        'Base64-Kodierung'
      ],
      loesung: 2,
      erklaerung: 'RSA ist ein asymmetrisches Verschlüsselungsverfahren, das ein Schlüsselpaar aus öffentlichem und privatem Schlüssel verwendet. Der öffentliche Schlüssel verschlüsselt, der private entschlüsselt. AES ist symmetrisch, SHA-256 ist eine Hashfunktion (keine Verschlüsselung), Caesar ist ein historisches Verfahren, Base64 ist eine Kodierung (keine Verschlüsselung).'
    },
    {
      nr: 3, thema: 'verschluesselung', typ: 'zuordnung',
      text: 'Sie erklären dem Kunden die Unterschiede zwischen verschiedenen kryptografischen Verfahren.',
      frage: 'Welches Verfahren passt zur jeweiligen Beschreibung?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Verfahren in das Kästchen ein.',
      optionenTitel: 'Verfahren',
      optionen: [
        'Symmetrische Verschlüsselung',
        'Asymmetrische Verschlüsselung',
        'Hashfunktion',
        'Digitale Signatur'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Ein Einweg-Verfahren, das aus beliebig langen Eingabedaten einen Wert fester Länge berechnet. Dient zur Integritätsprüfung, z. B. bei Passwörtern.', loesung: 3 },
        { text: 'Der Sender verschlüsselt einen Hashwert der Nachricht mit seinem privaten Schlüssel. Der Empfänger kann mit dem öffentlichen Schlüssel des Senders prüfen, ob die Nachricht unverändert ist und tatsächlich vom Sender stammt.', loesung: 4 },
        { text: 'Beide Kommunikationspartner verwenden denselben geheimen Schlüssel. Das Verfahren ist schnell, erfordert aber einen sicheren Schlüsselaustausch.', loesung: 1 },
        { text: 'Jeder Teilnehmer besitzt ein Schlüsselpaar. Was mit dem einen Schlüssel verschlüsselt wird, kann nur mit dem anderen entschlüsselt werden.', loesung: 2 }
      ],
      erklaerung: 'Hashfunktionen (z. B. SHA-256) sind Einwegfunktionen zur Integritätsprüfung. Digitale Signaturen kombinieren Hashing und asymmetrische Verschlüsselung für Authentizität und Integrität. Symmetrische Verfahren (z. B. AES) sind schnell, aber der Schlüsselaustausch ist problematisch. Asymmetrische Verfahren (z. B. RSA) lösen das Schlüsselverteilungsproblem.'
    },
    {
      nr: 4, thema: 'verschluesselung', typ: 'einfach',
      text: 'Beim Aufruf der Firmenwebsite des Kunden soll eine sichere Verbindung hergestellt werden. Der Browser zeigt ein Schlosssymbol und die URL beginnt mit „https://".',
      frage: 'Welches Protokoll sorgt für die verschlüsselte Übertragung?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Protokoll in das Kästchen ein.',
      optionen: [
        'FTP – File Transfer Protocol',
        'TLS – Transport Layer Security',
        'DNS – Domain Name System',
        'SMTP – Simple Mail Transfer Protocol',
        'SNMP – Simple Network Management Protocol'
      ],
      loesung: 2,
      erklaerung: 'TLS (Transport Layer Security), der Nachfolger von SSL, verschlüsselt die Kommunikation zwischen Browser und Webserver. HTTPS verwendet TLS auf Port 443. TLS stellt durch Zertifikate die Identität des Servers sicher und verschlüsselt den Datenverkehr, sodass Dritte die Kommunikation nicht mitlesen können.'
    },
    {
      nr: 5, thema: 'verschluesselung', typ: 'mehrfach',
      text: 'Der IT-Sicherheitsbeauftragte des Kunden möchte die Sicherheitsmaßnahmen für Passwörter verbessern.',
      frage: 'Welche der folgenden Maßnahmen erhöhen die Sicherheit bei der Speicherung von Passwörtern?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Maßnahmen in die Kästchen ein.',
      optionen: [
        'Passwörter im Klartext in der Datenbank speichern',
        'Passwörter vor dem Speichern mit einer Hashfunktion (z. B. bcrypt) hashen',
        'Passwörter mit Base64 kodieren und in einer Textdatei ablegen',
        'Jedem Passwort vor dem Hashen einen zufälligen Salt-Wert hinzufügen',
        'Alle Passwörter mit demselben AES-Schlüssel verschlüsseln und den Schlüssel in der Datenbank speichern'
      ],
      loesung: [2, 4],
      erklaerung: 'Passwörter werden vor dem Speichern gehasht (z. B. mit bcrypt, scrypt oder Argon2). Ein zufälliger Salt-Wert wird jedem Passwort vor dem Hashen hinzugefügt, damit gleiche Passwörter unterschiedliche Hashwerte erzeugen und Rainbow-Table-Angriffe verhindert werden. Klartext-Speicherung ist unsicher, Base64 ist keine Verschlüsselung, und den Schlüssel neben den verschlüsselten Daten zu speichern macht die Verschlüsselung wertlos.'
    },
    {
      nr: 6, thema: 'verschluesselung', typ: 'einfach',
      text: 'Der Kunde möchte E-Mails digital signieren, damit der Empfänger sicher sein kann, dass die E-Mail tatsächlich vom Kunden stammt und nicht verändert wurde.',
      frage: 'Mit welchem Schlüssel signiert der Sender die E-Mail?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Mit dem öffentlichen Schlüssel des Empfängers',
        'Mit dem privaten Schlüssel des Empfängers',
        'Mit dem öffentlichen Schlüssel des Senders',
        'Mit dem privaten Schlüssel des Senders',
        'Mit einem gemeinsamen symmetrischen Schlüssel'
      ],
      loesung: 4,
      erklaerung: 'Bei einer digitalen Signatur signiert der Sender mit seinem privaten Schlüssel. Der Empfänger überprüft die Signatur mit dem öffentlichen Schlüssel des Senders. So wird sichergestellt, dass die Nachricht tatsächlich vom Sender stammt (Authentizität) und nicht verändert wurde (Integrität). Dies ist das umgekehrte Prinzip zur Verschlüsselung.'
    },
    {
      nr: 7, thema: 'verschluesselung', typ: 'einfach',
      text: 'Bei der Einrichtung der VPN-Verbindung zwischen Hauptstandort und Außenstelle wird ein hybrides Verschlüsselungsverfahren eingesetzt.',
      frage: 'Welche Aussage beschreibt ein hybrides Verschlüsselungsverfahren korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Es wird ausschließlich symmetrische Verschlüsselung verwendet, aber mit zwei verschiedenen Schlüsseln.',
        'Der symmetrische Sitzungsschlüssel wird asymmetrisch verschlüsselt übertragen; die eigentlichen Daten werden symmetrisch verschlüsselt.',
        'Es wird ausschließlich asymmetrische Verschlüsselung für alle Daten verwendet.',
        'Die Daten werden zuerst gehasht und dann mit dem Hash als Schlüssel verschlüsselt.',
        'Sender und Empfänger tauschen ihre privaten Schlüssel aus.'
      ],
      loesung: 2,
      erklaerung: 'Hybride Verschlüsselung kombiniert die Vorteile beider Verfahren: Der symmetrische Sitzungsschlüssel (Session Key) wird per asymmetrischer Verschlüsselung sicher ausgetauscht. Die eigentlichen Nutzdaten werden dann mit dem schnelleren symmetrischen Verfahren verschlüsselt. So wird das Schlüsselverteilungsproblem gelöst und gleichzeitig eine hohe Geschwindigkeit erreicht. TLS/HTTPS nutzt dieses Prinzip.'
    },

    // --- Netzwerk / OSI (8–14) ---
    {
      nr: 8, thema: 'netzwerk', typ: 'zuordnung',
      text: 'Sie erklären den Auszubildenden das OSI-Referenzmodell mit seinen sieben Schichten.',
      frage: 'Welche OSI-Schicht passt zur jeweiligen Beschreibung?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Schicht in das Kästchen ein.',
      optionenTitel: 'OSI-Schichten',
      optionen: [
        'Schicht 1 – Bitübertragung (Physical)',
        'Schicht 2 – Sicherung (Data Link)',
        'Schicht 3 – Vermittlung (Network)',
        'Schicht 4 – Transport'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Zuständig für die logische Adressierung (IP-Adressen) und das Routing von Datenpaketen zwischen verschiedenen Netzwerken.', loesung: 3 },
        { text: 'Stellt die physische Verbindung her und definiert die elektrischen, mechanischen und funktionalen Eigenschaften der Übertragung (z. B. Kabel, Stecker, Spannungspegel).', loesung: 1 },
        { text: 'Steuert den zuverlässigen Datenfluss zwischen zwei Endpunkten, z. B. durch Segmentierung, Flusskontrolle und Fehlerkorrektur (TCP/UDP).', loesung: 4 },
        { text: 'Regelt den Zugriff auf das Übertragungsmedium und verwendet physische Adressen (MAC-Adressen) zur Adressierung im lokalen Netz.', loesung: 2 }
      ],
      erklaerung: 'Das OSI-Modell gliedert die Netzwerkkommunikation in 7 Schichten. Schicht 1 (Physical) definiert die physische Übertragung. Schicht 2 (Data Link) regelt den Medienzugriff über MAC-Adressen. Schicht 3 (Network) ist für IP-Adressierung und Routing zuständig. Schicht 4 (Transport) stellt mit TCP eine zuverlässige oder mit UDP eine verbindungslose Übertragung bereit.'
    },
    {
      nr: 9, thema: 'netzwerk', typ: 'einfach',
      text: 'Ein Client im Netzwerk der BüroTech KG ruft eine Website auf. Der Browser muss den Domainnamen in eine IP-Adresse auflösen.',
      frage: 'Welches Protokoll ist für die Namensauflösung zuständig?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Protokoll in das Kästchen ein.',
      optionen: [
        'DHCP – Dynamic Host Configuration Protocol',
        'DNS – Domain Name System',
        'ARP – Address Resolution Protocol',
        'NAT – Network Address Translation',
        'HTTP – Hypertext Transfer Protocol'
      ],
      loesung: 2,
      erklaerung: 'DNS (Domain Name System) löst Domainnamen (z. B. www.beispiel.de) in IP-Adressen auf. DHCP verteilt IP-Adressen automatisch an Clients. ARP löst IP-Adressen in MAC-Adressen auf (Schicht 2/3). NAT übersetzt private in öffentliche IP-Adressen. HTTP überträgt Webseiten.'
    },
    {
      nr: 10, thema: 'netzwerk', typ: 'einfach',
      text: 'Im Netzwerk der BüroTech KG erhalten alle Clients ihre IP-Adresse automatisch beim Verbinden mit dem Netzwerk.',
      frage: 'Welches Protokoll vergibt die IP-Adressen automatisch?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Protokoll in das Kästchen ein.',
      optionen: [
        'DNS – Domain Name System',
        'FTP – File Transfer Protocol',
        'DHCP – Dynamic Host Configuration Protocol',
        'ICMP – Internet Control Message Protocol',
        'SNMP – Simple Network Management Protocol'
      ],
      loesung: 3,
      erklaerung: 'DHCP (Dynamic Host Configuration Protocol) verteilt automatisch IP-Adressen, Subnetzmasken, Standard-Gateway und DNS-Server an Clients (DORA-Prozess: Discover, Offer, Request, Acknowledge). Ohne DHCP müssten IP-Adressen manuell (statisch) konfiguriert werden.'
    },
    {
      nr: 11, thema: 'netzwerk', typ: 'einfach',
      text: 'Bei der Netzwerkplanung soll zwischen TCP und UDP gewählt werden. Eine Anwendung überträgt Videodaten in Echtzeit und toleriert den Verlust einzelner Pakete.',
      frage: 'Welches Transportprotokoll ist für diese Anwendung geeigneter?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'TCP – es ist zuverlässig und stellt sicher, dass alle Pakete ankommen.',
        'UDP – es überträgt Daten ohne Verbindungsaufbau und mit weniger Overhead, verlorene Pakete werden nicht erneut gesendet.',
        'ICMP – es überträgt Steuernachrichten zwischen Netzwerkgeräten.',
        'FTP – es ist speziell für Dateiübertragungen konzipiert.',
        'HTTP – es überträgt Webinhalte zwischen Client und Server.'
      ],
      loesung: 2,
      erklaerung: 'UDP (User Datagram Protocol) ist verbindungslos, hat weniger Overhead als TCP und ist für Echtzeitanwendungen (Video, VoIP, Gaming) geeignet. Verlorene Pakete werden nicht erneut gesendet, was bei Echtzeitdaten akzeptabel ist (ein fehlendes Videobild ist besser als eine Verzögerung). TCP garantiert Reihenfolge und Vollständigkeit, was bei Dateien und Webseiten wichtig ist.'
    },
    {
      nr: 12, thema: 'netzwerk', typ: 'zahl',
      text: 'Das Netzwerk der BüroTech KG verwendet die IP-Adresse 192.168.10.0 mit der Subnetzmaske 255.255.255.0 (/24).',
      frage: 'Wie viele nutzbare Host-Adressen stehen in diesem Subnetz zur Verfügung?',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 254,
      erklaerung: 'Bei einer /24-Subnetzmaske (255.255.255.0) stehen 8 Bit für den Hostanteil zur Verfügung: 2⁸ = 256 Adressen. Davon sind zwei reserviert: die Netzadresse (192.168.10.0, alle Hostbits 0) und die Broadcastadresse (192.168.10.255, alle Hostbits 1). Es bleiben 256 - 2 = 254 nutzbare Host-Adressen (192.168.10.1 bis 192.168.10.254).'
    },
    {
      nr: 13, thema: 'netzwerk', typ: 'zahl',
      text: 'Das Netzwerk soll in vier gleich große Subnetze aufgeteilt werden. Die Ausgangsadresse ist 192.168.10.0/24.',
      frage: 'Wie viele nutzbare Host-Adressen stehen in jedem der vier Subnetze zur Verfügung?',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 62,
      erklaerung: 'Um 4 Subnetze zu bilden, werden 2 zusätzliche Bits für den Netzanteil benötigt (2² = 4). Die neue Subnetzmaske ist /26 (255.255.255.192). Pro Subnetz bleiben 6 Hostbits: 2⁶ = 64 Adressen, abzüglich Netz- und Broadcastadresse = 62 nutzbare Host-Adressen pro Subnetz.'
    },
    {
      nr: 14, thema: 'netzwerk', typ: 'mehrfach',
      text: 'Beim Einrichten eines neuen Servers im Netzwerk muss zwischen privaten und öffentlichen IP-Adressen unterschieden werden.',
      frage: 'Welche der folgenden IP-Adressbereiche sind private Adressbereiche nach RFC 1918?',
      anweisung: 'Tragen Sie die Ziffern vor den **zwei** zutreffenden Adressbereichen in die Kästchen ein.',
      optionen: [
        '8.8.8.0 bis 8.8.8.255',
        '10.0.0.0 bis 10.255.255.255',
        '172.32.0.0 bis 172.47.255.255',
        '192.168.0.0 bis 192.168.255.255',
        '100.64.0.0 bis 100.127.255.255'
      ],
      loesung: [2, 4],
      erklaerung: 'RFC 1918 definiert drei private Adressbereiche: Klasse A: 10.0.0.0/8 (10.0.0.0 bis 10.255.255.255), Klasse B: 172.16.0.0/12 (172.16.0.0 bis 172.31.255.255), Klasse C: 192.168.0.0/16 (192.168.0.0 bis 192.168.255.255). 8.8.8.8 ist der öffentliche DNS-Server von Google. 100.64.0.0/10 ist der Carrier-Grade-NAT-Bereich (RFC 6598). 172.32.x.x liegt außerhalb des privaten Bereichs.'
    },

    // --- Zahlensysteme (15–20) ---
    {
      nr: 15, thema: 'zahlensysteme', typ: 'zahl',
      text: 'In der Schulung wird die Umrechnung zwischen Zahlensystemen geübt.',
      frage: 'Rechnen Sie die Binärzahl 1101 0011 in das Dezimalsystem um.',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 211,
      erklaerung: '1101 0011₂ = 1×128 + 1×64 + 0×32 + 1×16 + 0×8 + 0×4 + 1×2 + 1×1 = 128 + 64 + 16 + 2 + 1 = 211₁₀. Die Stellenwerte im Binärsystem sind Zweierpotenzen: 128, 64, 32, 16, 8, 4, 2, 1.'
    },
    {
      nr: 16, thema: 'zahlensysteme', typ: 'einfach',
      text: 'Die Hexadezimalzahl 2A soll in das Dezimalsystem umgerechnet werden.',
      frage: 'Welchen Dezimalwert hat die Hexadezimalzahl 2A?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Wert in das Kästchen ein.',
      optionen: [
        '22',
        '32',
        '42',
        '52',
        '210'
      ],
      loesung: 3,
      erklaerung: '2A₁₆ = 2 × 16¹ + A × 16⁰ = 2 × 16 + 10 × 1 = 32 + 10 = 42₁₀. Im Hexadezimalsystem steht A für 10, B für 11, C für 12, D für 13, E für 14 und F für 15.'
    },
    {
      nr: 17, thema: 'zahlensysteme', typ: 'zahl',
      text: 'Die Dezimalzahl 200 soll in das Binärsystem umgerechnet werden. Die führende 1 und die Anzahl der folgenden Stellen ergeben zusammen das Ergebnis.',
      frage: 'Wie lautet die Dezimalzahl 200 im Binärsystem? Geben Sie das Ergebnis als Dezimalzahl ohne Leerzeichen ein (z. B. 11001000).',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 11001000,
      erklaerung: '200 ÷ 2 = 100 R 0, 100 ÷ 2 = 50 R 0, 50 ÷ 2 = 25 R 0, 25 ÷ 2 = 12 R 1, 12 ÷ 2 = 6 R 0, 6 ÷ 2 = 3 R 0, 3 ÷ 2 = 1 R 1, 1 ÷ 2 = 0 R 1. Von unten gelesen: 1100 1000₂. Probe: 128 + 64 + 8 = 200.'
    },
    {
      nr: 18, thema: 'zahlensysteme', typ: 'einfach',
      text: 'Bei der Darstellung von Farben in Webseiten wird das Hexadezimalsystem verwendet. Die Farbe Weiß wird als #FFFFFF dargestellt.',
      frage: 'Welchen Dezimalwert hat jede der drei Farbkomponenten (Rot, Grün, Blau) bei der Farbe Weiß (#FFFFFF)?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Wert in das Kästchen ein.',
      optionen: [
        '15',
        '16',
        '128',
        '255',
        '256'
      ],
      loesung: 4,
      erklaerung: 'FF₁₆ = 15 × 16 + 15 × 1 = 240 + 15 = 255₁₀. Jede Farbkomponente wird durch ein Byte (8 Bit) dargestellt und hat einen Wertebereich von 0 (00₁₆) bis 255 (FF₁₆). Weiß (#FFFFFF) bedeutet: Rot = 255, Grün = 255, Blau = 255 (maximale Helligkeit aller Kanäle).'
    },
    {
      nr: 19, thema: 'zahlensysteme', typ: 'einfach',
      text: 'In der Schulung wird besprochen, wie viele verschiedene Werte mit einer bestimmten Anzahl von Bits dargestellt werden können.',
      frage: 'Wie viele verschiedene Werte können mit 1 Byte (8 Bit) dargestellt werden?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Anzahl in das Kästchen ein.',
      optionen: [
        '8',
        '16',
        '128',
        '255',
        '256'
      ],
      loesung: 5,
      erklaerung: 'Mit n Bits können 2ⁿ verschiedene Werte dargestellt werden. Bei 8 Bit (1 Byte): 2⁸ = 256 verschiedene Werte (0 bis 255). Wichtig: 256 verschiedene Werte, aber der höchste Wert ist 255 (da bei 0 begonnen wird). 1 Kilobyte = 1.024 Byte, 1 Megabyte = 1.024 KB.'
    },
    {
      nr: 20, thema: 'zahlensysteme', typ: 'zuordnung',
      text: 'Verschiedene Einheiten der Datenmenge werden in der IT verwendet.',
      frage: 'Welche Umrechnung ist korrekt?',
      anweisung: 'Tragen Sie die Ziffer vor der jeweils zutreffenden Umrechnung in das Kästchen ein.',
      optionenTitel: 'Umrechnungen',
      optionen: [
        '1 Byte = 8 Bit',
        '1 KiB = 1.024 Byte',
        '1 MiB = 1.048.576 Byte',
        '1 GiB = 1.073.741.824 Byte'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Die kleinste adressierbare Speichereinheit in den meisten Computern besteht aus 8 Bit.', loesung: 1 },
        { text: 'Diese Einheit entspricht 2¹⁰ Byte und wird häufig für Dateigrößen auf Betriebssystemebene verwendet.', loesung: 2 },
        { text: 'Diese Einheit entspricht 2²⁰ Byte, also 1.024 × 1.024 Byte.', loesung: 3 },
        { text: 'Diese Einheit entspricht 2³⁰ Byte und wird für RAM-Kapazitäten verwendet.', loesung: 4 }
      ],
      erklaerung: '1 Byte = 8 Bit. Die IEC-Präfixe (KiB, MiB, GiB) verwenden Zweierpotenzen: 1 KiB = 2¹⁰ = 1.024 Byte, 1 MiB = 2²⁰ = 1.048.576 Byte, 1 GiB = 2³⁰ = 1.073.741.824 Byte. Die SI-Präfixe (KB, MB, GB) verwenden dagegen Zehnerpotenzen: 1 KB = 1.000 Byte. Festplattenhersteller verwenden oft SI-Einheiten, Betriebssysteme oft IEC-Einheiten.'
    },

    // --- IT-Systeme (21–25) ---
    {
      nr: 21, thema: 'it-systeme', typ: 'einfach',
      text: 'Für den neuen Fileserver der NetSecure GmbH soll ein RAID-Level gewählt werden, das sowohl Ausfallsicherheit als auch eine gute Schreibleistung bietet. Es sollen mindestens vier Festplatten verwendet werden.',
      frage: 'Welches RAID-Level bietet Spiegelung in Kombination mit Striping und benötigt mindestens vier Festplatten?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden RAID-Level in das Kästchen ein.',
      optionen: [
        'RAID 0 – Striping ohne Redundanz',
        'RAID 1 – Spiegelung (Mirroring)',
        'RAID 5 – Striping mit verteilter Parität',
        'RAID 10 – Kombination aus Spiegelung und Striping',
        'RAID 6 – Striping mit doppelter Parität'
      ],
      loesung: 4,
      erklaerung: 'RAID 10 (auch RAID 1+0) kombiniert die Spiegelung (RAID 1) mit dem Striping (RAID 0). Mindestens 4 Festplatten sind erforderlich; die Nutzkapazität beträgt 50 %. RAID 10 bietet eine sehr gute Lese- und Schreibleistung sowie Ausfallsicherheit, da je ein Laufwerk pro Spiegelgruppe ausfallen darf.'
    },
    {
      nr: 22, thema: 'it-systeme', typ: 'zahl',
      text: 'Der Fileserver soll mit RAID 5 und vier Festplatten à 2 TB eingerichtet werden.',
      frage: 'Wie groß ist die nutzbare Speicherkapazität des RAID-5-Verbunds in TB?',
      anweisung: 'Tragen Sie das Ergebnis in die Kästchen ein.',
      loesung: 6,
      erklaerung: 'Bei RAID 5 wird die Kapazität einer Festplatte für die verteilte Parität verwendet. Nutzbare Kapazität = (Anzahl Festplatten - 1) × Kapazität einer Platte = (4 - 1) × 2 TB = 6 TB. RAID 5 benötigt mindestens 3 Festplatten und verkraftet den Ausfall einer einzelnen Platte.'
    },
    {
      nr: 23, thema: 'it-systeme', typ: 'einfach',
      text: 'Die NetSecure GmbH setzt Virtualisierung ein, um mehrere Betriebssysteme auf einem physischen Server zu betreiben.',
      frage: 'Welche Aussage zur Virtualisierung ist zutreffend?',
      anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Aussage in das Kästchen ein.',
      optionen: [
        'Ein Hypervisor Typ 1 (Bare Metal) läuft direkt auf der Hardware ohne darunterliegendes Betriebssystem.',
        'Ein Hypervisor Typ 1 benötigt immer ein vollständiges Betriebssystem als Grundlage.',
        'Virtuelle Maschinen teilen sich immer denselben Kernel des Hostsystems.',
        'Containerisierung und Virtualisierung sind identische Technologien.',
        'Virtuelle Maschinen können nur auf Linux-Systemen betrieben werden.'
      ],
      loesung: 1,
      erklaerung: 'Ein Hypervisor Typ 1 (Bare Metal, z. B. VMware ESXi, Microsoft Hyper-V, Proxmox/KVM) läuft direkt auf der Hardware und benötigt kein darunterliegendes Betriebssystem. Ein Hypervisor Typ 2 (z. B. VirtualBox, VMware Workstation) läuft als Anwendung auf einem Host-Betriebssystem. Container (z. B. Docker) teilen sich den Kernel des Hosts, VMs haben jeweils einen eigenen Kernel.'
    },
    {
      nr: 24, thema: 'it-systeme', typ: 'zuordnung',
      text: 'Der Kunde möchte Cloud-Dienste nutzen und lässt sich die verschiedenen Service-Modelle erklären.',
      frage: 'Welches Cloud-Service-Modell passt zur jeweiligen Beschreibung?',
      anweisung: 'Tragen Sie die Ziffer vor dem jeweils zutreffenden Modell in das Kästchen ein.',
      optionenTitel: 'Service-Modelle',
      optionen: [
        'IaaS – Infrastructure as a Service',
        'PaaS – Platform as a Service',
        'SaaS – Software as a Service'
      ],
      itemsTitel: 'Beschreibungen',
      items: [
        { text: 'Der Kunde nutzt eine fertige Anwendung über den Browser, z. B. Microsoft 365 oder Google Workspace. Der Anbieter kümmert sich um alles von der Hardware bis zur Software.', loesung: 3 },
        { text: 'Der Kunde erhält virtuelle Server, Speicher und Netzwerk und installiert darauf sein eigenes Betriebssystem und seine Anwendungen, z. B. bei AWS EC2 oder Azure Virtual Machines.', loesung: 1 },
        { text: 'Der Kunde nutzt eine Entwicklungsumgebung in der Cloud und kümmert sich nur um seinen Programmcode, z. B. bei Heroku oder Google App Engine.', loesung: 2 }
      ],
      erklaerung: 'Die drei Cloud-Service-Modelle unterscheiden sich im Grad der Verantwortung: IaaS: Kunde verwaltet OS, Middleware, Anwendungen; Anbieter stellt Infrastruktur bereit. PaaS: Kunde verwaltet nur seine Anwendung und Daten; Anbieter stellt Plattform bereit. SaaS: Alles wird vom Anbieter verwaltet; Kunde nutzt die fertige Software.'
    },
    {
      nr: 25, thema: 'it-systeme', typ: 'einfach',
      text: 'Auf einem Windows-Server der NetSecure GmbH soll geprüft werden, welcher Dienst den TCP-Port 443 belegt.',
      frage: 'Welcher Dienst verwendet standardmäßig den TCP-Port 443?',
      anweisung: 'Tragen Sie die Ziffer vor dem zutreffenden Dienst in das Kästchen ein.',
      optionen: [
        'HTTP – unverschlüsselte Webseiten (Port 80)',
        'HTTPS – verschlüsselte Webseiten (Port 443)',
        'FTP – Dateiübertragung (Port 21)',
        'SSH – sichere Fernwartung (Port 22)',
        'DNS – Namensauflösung (Port 53)'
      ],
      loesung: 2,
      erklaerung: 'HTTPS (HTTP Secure) verwendet standardmäßig den TCP-Port 443 und überträgt Webseiten verschlüsselt über TLS. Weitere wichtige Standardports: HTTP = 80, FTP = 20/21, SSH = 22, Telnet = 23, SMTP = 25/587, DNS = 53, DHCP = 67/68, POP3 = 110, IMAP = 143, LDAP = 389, RDP = 3389.'
    }
  ]
});
