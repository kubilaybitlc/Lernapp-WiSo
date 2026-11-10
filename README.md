# WiSo-Trainer AP2

Lernapp für den Prüfungsbereich **Wirtschafts- und Sozialkunde** der Abschlussprüfung Teil 2 (IT-Berufe).
Ablauf wie bei den IHK-Bögen: 30 Aufgaben, 60 Minuten, 100 Punkte, Lösungskästchen und Auswertung nach IHK-Schema.

## Starten

- **Ohne alles:** `index.html` doppelklicken. Läuft im Browser, keine Installation nötig.
- **Mit lokalem Testserver** (nur dieser Rechner):
  ```
  powershell -ExecutionPolicy Bypass -File werkzeuge\server.ps1
  ```
  danach `http://localhost:8080` öffnen.

## Funktionen

- **Prüfungssimulation:** Deckblatt mit Bearbeitungshinweisen, Timer (Abgabe automatisch nach 60 Min.), Lösungsbogen-Übersicht, angefangene Prüfungen lassen sich fortsetzen.
- **Auswertung:** Punkte und Note nach IHK-Notenschlüssel, Lösungsbogen mit Teil-/Globalbewertung, Ergebnis je Thema, alle Aufgaben mit Lösung und Erklärung.
- **Üben:** Aufgabe für Aufgabe mit sofortiger Rückmeldung, nach Satz, nach Thema oder nur die nicht gelösten Aufgaben.
- Fortschritt und Ergebnisse werden nur im Browser gespeichert (localStorage).

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `index.html` | Einstieg, bindet alle Skripte ein |
| `js/bewertung.js` | Bewertung nach IHK-Schema, Notenschlüssel |
| `js/app.js` | Oberfläche (Start, Deckblatt, Prüfung, Auswertung, Üben) |
| `js/bilder.js` | Eigene Sicherheitszeichen als SVG für Bildaufgaben |
| `daten/themen.js` | Themenbereiche |
| `daten/satz-*.js` | Aufgabensätze |
| `docs/themenkatalog.md` | Auswertung der bisherigen IHK-Bögen (Themen, Aufgabentypen, Formulierungen) |

## Neuen Aufgabensatz hinzufügen

1. `daten/satz-01.js` kopieren, z. B. nach `daten/satz-02.js`, und `id`/`titel` ändern.
2. In `index.html` eine Zeile `<script src="daten/satz-02.js"></script>` ergänzen.

Aufgabentypen (`typ`):

| Typ | Kästchen | `loesung` | Bewertung |
| --- | --- | --- | --- |
| `einfach` | 1 Ziffer | `4` | global |
| `mehrfach` | je richtige Ziffer, Reihenfolge egal | `[2, 5]` | Teil |
| `zuordnung` | je Item a), b) … | in `items[].loesung` | Teil |
| `reihenfolge` | je Schritt a), b) … die Position | in `items[].loesung` | Teil |
| `zahl` | Betrag/Anzahl, `nachkommastellen`, `einheit` | `358.05` | global |
| `datum` | TT.MM.JJJJ | `'28.02.2027'` | global |

Mit `bewertung: 'teil'` oder `'global'` lässt sich die Bewertung je Aufgabe überschreiben.
Weitere Felder: `text`, `kasten` (z. B. Gesetzesauszug), `frage`, `anweisung`, `einleitung`, `optionen`, `optionenTitel`, `items`, `itemsTitel`, `erklaerung`. `**fett**` hebt Wörter wie „**nicht**“ hervor.

## Urheberrecht

Die IHK-Originalbögen dürfen nicht vervielfältigt oder verbreitet werden. Diese App enthält deshalb nur **selbst erstellte Aufgaben** im gleichen Stil. Die Originale dienen nur zur Analyse und gehören nicht ins Repository (`*.pdf` ist in `.gitignore`).
