# AGENTS.md

Hinweise für KI-Agenten und Mitwirkende am WiSo-Trainer. Bedienung und Datenformat stehen in der [README.md](README.md).

## Projekt

- Lernapp für den Prüfungsbereich Wirtschafts- und Sozialkunde der Abschlussprüfung Teil 2 (IT-Berufe).
- Ablauf exakt wie die IHK-WiSo-Bögen: 30 Aufgaben, 60 Minuten, 100 Punkte, Lösungskästchen, Teil- und Globalbewertung, IHK-Notenschlüssel.
- Reine Browser-App ohne Build-Schritt und ohne Abhängigkeiten: HTML, CSS, klassisches JavaScript (keine ES-Module, damit `index.html` auch per Doppelklick über `file://` läuft).
- Sprache der Oberfläche, Inhalte und Code-Bezeichner: Deutsch.

## Aufgaben erstellen

- **Nur eigene Aufgaben.** IHK-Originalbögen sind urheberrechtlich geschützt: keine Aufgaben, Antwortlisten oder Situationstexte übernehmen oder nur leicht umformulieren. PDFs gehören nie ins Repository (`*.pdf` steht in `.gitignore`).
- **Bereich „IHK-KI-Fragen“:** die KI-erstellten Sätze `daten/satz-XX.js` (`window.WISO_SAETZE`, `id` wie `uebung-01`).
- **Bereich „IHK-Fragen“:** die Sätze, die der Nutzer mit seinem Dozenten erstellt und zum Einbauen schickt. Dateien `daten/ihk-satz-XX.js`, eingetragen über `(window.WISO_IHK_SAETZE = window.WISO_IHK_SAETZE || []).push({...})`, `id` mit Präfix `ihk-eigen-` (z. B. `ihk-eigen-01`), sonst gleiches Format wie die KI-Sätze. Nur Fragen übernehmen, die Nutzer oder Dozent selbst formuliert haben; erkennbar aus IHK-Bögen abgeschriebene Aufgaben nicht einbauen, sondern nachfragen. Fehlende `thema`-Schlüssel und `erklaerung` ergänzen, Lösungen prüfen.
- **IHK-Originale** kommen ausschließlich über den Import im Browser in die App (`importiereIhk` in `js/app.js`, gespeichert unter `wiso.ihk` im localStorage, erscheinen im Bereich „IHK-Fragen“). Importdateien wie `WiSo-Trainer.html` oder daraus erzeugte Daten niemals ins Repository legen, nicht in `daten/` umwandeln und nicht in `sw.js` cachen.
- Themenauswahl und Gewichtung nach [docs/themenkatalog.md](docs/themenkatalog.md) (Spalte „Ø/Bogen“). Themenschlüssel stehen in `daten/themen.js`.
- Typen-Verteilung je Satz ungefähr wie bei der IHK: etwa 22 Einfachauswahl, 3 „zwei zutreffende“, 2 Zuordnungen, 1–2 Rechenaufgaben, höchstens 1 Datum, gelegentlich 1 Reihenfolge. Keine Kontierung.
- Feste Anweisungsformeln aus Abschnitt 3.1 des Themenkatalogs verwenden, Verneinungen und „**zwei**“ fett (`**…**`).
- Jede Aufgabe bekommt eine `erklaerung` mit Rechtsgrundlage. Werte, die sich jährlich ändern (Beitragssätze, Grenzen), immer im Aufgabentext angeben.
- Neuer Satz: Datei `daten/satz-XX.js` bzw. `daten/ihk-satz-XX.js`, Skript-Zeile in `index.html` und Pfad in der Liste `DATEIEN` in `sw.js` ergänzen.

## Testen

- Lokaler Testserver (nur localhost): `powershell -ExecutionPolicy Bypass -File werkzeuge\server.ps1`, Konfiguration für die Browser-Vorschau in `.claude/launch.json`.
- Nach Änderungen an Aufgaben prüfen: Jede Lösung liegt im gültigen Ziffernbereich, alle richtigen Eingaben ergeben 100 Punkte, jedes `thema` existiert in `daten/themen.js`.

## Bereitstellung auf iOS und Android

Die App ist eine PWA (`manifest.webmanifest`, `sw.js`, `icons/`). Installation und Offline-Betrieb funktionieren nur über **HTTPS**, nicht über `file://` oder `http://<lokale IP>`.

1. Commits auf GitHub pushen.
2. Repository öffentlich stellen (GitHub Pages ist im kostenlosen Konto nur für öffentliche Repos verfügbar).
3. **Settings → Pages:** „Deploy from a branch“, `main`, `/ (root)`. `.nojekyll` verhindert die Jekyll-Verarbeitung.
4. Die App läuft dann unter `https://kubilaybitlc.github.io/Lernapp-WiSo/`.

**iPhone/iPad:**
- Kein Mac, kein Apple-Entwicklerkonto, kein App Store nötig.
- Link in Safari öffnen (ab iOS 16.4 auch Chrome/Edge) → Teilen → **Zum Home-Bildschirm** → Hinzufügen (je nach iOS-Version unter „Mehr“).
- Einmal mit Internet über das Icon starten, danach funktioniert die App offline.

**Android:** Link in Chrome öffnen → **App installieren** (oder der Knopf auf der Startseite der App).

**Zu beachten:**
- Fortschritt und Ergebnisse liegen nur im localStorage des jeweiligen Geräts. Wer die App löscht, verliert sie.
- Der Service Worker lädt zuerst aus dem Netz (Timeout 4 s) und fällt dann auf den Cache zurück. Neue Versionen kommen beim nächsten Start mit Internet an, ohne Neuinstallation.

## Git

- Commit-Nachrichten auf **Englisch**, nur eine Betreffzeile, **keine Beschreibung** und **kein `Co-Authored-By`**.
- Auf diesem Rechner gibt es kein git im PATH. Nutzbar ist das git von GitHub Desktop unter `%LOCALAPPDATA%\GitHubDesktop\app-*\resources\app\git\cmd\git.exe`. Es hat keine GitHub-Anmeldung, gepusht wird deshalb über GitHub Desktop („Push origin“).
