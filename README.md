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

## Auf dem Handy (iOS und Android)

Die App ist eine installierbare Web-App (PWA): Icon auf dem Startbildschirm, Vollbild, funktioniert nach dem ersten Öffnen auch offline.
Dafür muss sie über **HTTPS** erreichbar sein, z. B. über GitHub Pages:

1. Repository auf GitHub pushen. Bei einem kostenlosen GitHub-Konto muss es dafür öffentlich sein.
2. Auf GitHub unter **Settings → Pages** als Quelle „Deploy from a branch“ mit `main` und `/ (root)` wählen.
3. Nach ein bis zwei Minuten läuft die App unter `https://<benutzername>.github.io/<repository>/`.
4. Den Link öffnen und installieren:
   - iPhone/iPad: in Safari auf **Teilen → Zum Home-Bildschirm** tippen.
   - Android: in Chrome auf **App installieren** tippen.

Neue Versionen lädt die App beim nächsten Start mit Internet automatisch.
Neue Aufgabensätze zusätzlich in die Liste `DATEIEN` in `sw.js` eintragen, damit sie sicher offline verfügbar sind.

## Funktionen

- **16 Übungssätze** mit je 30 selbst erstellten Aufgaben (480 insgesamt), jeweils zu einem fiktiven IT-Unternehmen, Themen gewichtet nach `docs/themenkatalog.md`.
- **Prüfungssimulation:** Deckblatt mit Bearbeitungshinweisen, Timer (Abgabe automatisch nach 60 Min.), Lösungsbogen-Übersicht, angefangene Prüfungen lassen sich fortsetzen.
- **Auswertung:** Punkte und Note nach IHK-Notenschlüssel, Lösungsbogen mit Teil-/Globalbewertung, Ergebnis je Thema, alle Aufgaben mit Lösung und Erklärung.
- **Üben:** Aufgabe für Aufgabe mit sofortiger Rückmeldung, nach Satz, nach Thema oder nur die nicht gelösten Aufgaben.
- **Lernstand:** Jede Antwort aus Üben und Prüfung wird je Aufgabe gezählt. Die Startseite zeigt bearbeitet, offen, zuletzt falsch, unsicher (zuletzt richtig, vorher falsch) und sicher, auch je Thema und je Satz.
- **Schwächen-Prüfung:** 30 Aufgaben aus allen Sätzen, 60 Minuten, IHK-Bewertung. Reihenfolge der Auswahl: zuletzt falsch (häufigste Fehler zuerst), unsicher, mindestens 6 neue; sichere Aufgaben nur, wenn sonst nichts übrig ist.
- Fortschritt, Lernstand und Ergebnisse werden nur im Browser gespeichert (localStorage).

## Aufbau

| Pfad | Inhalt |
| --- | --- |
| `index.html` | Einstieg, bindet alle Skripte ein |
| `js/bewertung.js` | Bewertung nach IHK-Schema, Notenschlüssel |
| `js/app.js` | Oberfläche (Start, Deckblatt, Prüfung, Auswertung, Üben) |
| `js/bilder.js` | Eigene Sicherheitszeichen als SVG für Bildaufgaben |
| `manifest.webmanifest`, `sw.js`, `icons/` | Installation als App und Offline-Cache |
| `werkzeuge/` | lokaler Testserver, Icon-Erzeugung |
| `daten/themen.js` | Themenbereiche |
| `daten/satz-*.js` | Aufgabensätze |
| `docs/themenkatalog.md` | Auswertung der bisherigen IHK-Bögen (Themen, Aufgabentypen, Formulierungen) |

## Neuen Aufgabensatz hinzufügen

1. `daten/satz-01.js` kopieren, z. B. nach `daten/satz-02.js`, und `id`/`titel` ändern.
2. In `index.html` eine Zeile `<script src="daten/satz-02.js"></script>` ergänzen.
3. In `sw.js` den Pfad `daten/satz-02.js` in die Liste `DATEIEN` aufnehmen.

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
