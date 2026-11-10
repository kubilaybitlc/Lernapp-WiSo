// Bewertung nach IHK-Schema: 100 Punkte verteilt auf alle Aufgaben.
// Teilbewertung: anteilige Punkte je richtigem Kästchen. Globalbewertung: Punkte nur bei vollständig richtiger Lösung.
(function () {
  'use strict';

  const GESAMTPUNKTE = 100;

  // IHK-Notenschlüssel (Punkte ab ... -> Note)
  const NOTEN = [
    { ab: 92, note: 1, text: 'sehr gut' },
    { ab: 81, note: 2, text: 'gut' },
    { ab: 67, note: 3, text: 'befriedigend' },
    { ab: 50, note: 4, text: 'ausreichend' },
    { ab: 30, note: 5, text: 'mangelhaft' },
    { ab: 0, note: 6, text: 'ungenügend' }
  ];

  function kaestchenAnzahl(aufgabe) {
    switch (aufgabe.typ) {
      case 'mehrfach': return aufgabe.loesung.length;
      case 'zuordnung':
      case 'reihenfolge': return aufgabe.items.length;
      case 'zahl': return Array.isArray(aufgabe.loesung) ? aufgabe.loesung.length : 1;
      default: return 1;
    }
  }

  // Rechenaufgaben mit mehreren Teilergebnissen (a, b, …) haben ein Lösungsarray
  function mitTeilen(aufgabe) {
    return aufgabe.typ === 'zuordnung' || aufgabe.typ === 'reihenfolge' || (aufgabe.typ === 'zahl' && Array.isArray(aufgabe.loesung));
  }

  function bewertungsart(aufgabe) {
    return aufgabe.bewertung || (kaestchenAnzahl(aufgabe) > 1 ? 'teil' : 'global');
  }

  // Akzeptiert "20.000,00", "20000", "20000,5", "20 000,00 EUR"
  function leseZahl(eingabe) {
    let s = String(eingabe == null ? '' : eingabe).replace(/\s|EUR|€|%/gi, '');
    if (!s) return null;
    if (s.includes(',')) s = s.replace(/\./g, '').replace(',', '.');
    else if (/^-?\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
  }

  // Akzeptiert "1.6.2027" und "01.06.2027", liefert immer TT.MM.JJJJ
  function leseDatum(eingabe) {
    const m = String(eingabe == null ? '' : eingabe).trim().match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
    return m ? m[1].padStart(2, '0') + '.' + m[2].padStart(2, '0') + '.' + m[3] : null;
  }

  function formatZahl(n, nachkommastellen) {
    return Number(n).toLocaleString('de-DE', {
      minimumFractionDigits: nachkommastellen,
      maximumFractionDigits: nachkommastellen
    });
  }

  function istLeer(antwort) {
    return !antwort || antwort.every(w => !w);
  }

  // Liefert je Kästchen richtig/falsch und den erreichten Anteil (0 bis 1).
  function pruefeAufgabe(aufgabe, antwort) {
    const werte = antwort || [];
    const n = kaestchenAnzahl(aufgabe);
    let details;

    switch (aufgabe.typ) {
      case 'einfach':
        details = [Number(werte[0]) === aufgabe.loesung];
        break;
      case 'mehrfach': {
        // Reihenfolge beliebig, jede richtige Ziffer zählt nur einmal
        const gesehen = new Set();
        details = [];
        for (let i = 0; i < n; i++) {
          const z = Number(werte[i]);
          const ok = aufgabe.loesung.includes(z) && !gesehen.has(z);
          if (ok) gesehen.add(z);
          details.push(ok);
        }
        break;
      }
      case 'zuordnung':
      case 'reihenfolge':
        details = aufgabe.items.map((item, i) => Number(werte[i]) === item.loesung);
        break;
      case 'zahl':
        details = [].concat(aufgabe.loesung).map((soll, i) => {
          const z = leseZahl(werte[i]);
          return z !== null && Math.abs(z - soll) < 0.005;
        });
        break;
      case 'datum':
        details = [leseDatum(werte[0]) === aufgabe.loesung];
        break;
      default:
        throw new Error('Unbekannter Aufgabentyp: ' + aufgabe.typ);
    }

    const richtig = details.filter(Boolean).length;
    const art = bewertungsart(aufgabe);
    const anteil = art === 'teil' ? richtig / n : (richtig === n ? 1 : 0);
    return { details, richtig, gesamt: n, anteil, art, leer: istLeer(werte) };
  }

  function note(punkte) {
    return NOTEN.find(stufe => punkte >= stufe.ab);
  }

  function werteSatzAus(satz, antworten) {
    const anzahl = satz.aufgaben.length;
    const themen = {};
    let summeAnteile = 0;

    const proAufgabe = satz.aufgaben.map(aufgabe => {
      const ergebnis = pruefeAufgabe(aufgabe, antworten[aufgabe.nr]);
      summeAnteile += ergebnis.anteil;
      const t = themen[aufgabe.thema] || (themen[aufgabe.thema] = { anteil: 0, anzahl: 0 });
      t.anteil += ergebnis.anteil;
      t.anzahl += 1;
      return { aufgabe, ergebnis, punkte: GESAMTPUNKTE * ergebnis.anteil / anzahl };
    });

    // Über die Anteile rechnen statt 3,33333-Punkte aufzusummieren, damit keine Rundungsfehler an Notengrenzen entstehen
    const punkte = Math.round(GESAMTPUNKTE * summeAnteile / anzahl * 100) / 100;
    return { proAufgabe, punkte, note: note(punkte), themen };
  }

  function loesungText(aufgabe) {
    switch (aufgabe.typ) {
      case 'einfach': return String(aufgabe.loesung);
      case 'mehrfach': return '[' + aufgabe.loesung.join(';') + ']';
      case 'zuordnung':
      case 'reihenfolge': return aufgabe.items.map((item, i) => 'abcdefghij'[i] + ') ' + item.loesung).join('  ');
      case 'zahl': {
        const einheit = aufgabe.einheit ? ' ' + aufgabe.einheit : '';
        const werte = [].concat(aufgabe.loesung).map(l => formatZahl(l, aufgabe.nachkommastellen || 0) + einheit);
        return werte.length > 1 ? werte.map((w, i) => 'abcdefghij'[i] + ') ' + w).join('  ') : werte[0];
      }
      case 'datum': return aufgabe.loesung;
      default: return '';
    }
  }

  function eingabeText(aufgabe, antwort) {
    if (istLeer(antwort)) return '–';
    if (mitTeilen(aufgabe)) {
      return antwort.map((w, i) => 'abcdefghij'[i] + ') ' + (w || '–')).join('  ');
    }
    return antwort.map(w => w || '–').join(' ');
  }

  window.WISO_BEWERTUNG = {
    GESAMTPUNKTE,
    NOTEN,
    kaestchenAnzahl,
    mitTeilen,
    bewertungsart,
    leseZahl,
    leseDatum,
    formatZahl,
    istLeer,
    pruefeAufgabe,
    werteSatzAus,
    note,
    loesungText,
    eingabeText
  };
})();
