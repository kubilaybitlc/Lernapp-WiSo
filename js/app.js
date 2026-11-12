// Oberfläche des WiSo-Trainers: Startseite, Deckblatt, Prüfung, Auswertung, Üben.
(function () {
  'use strict';

  const B = window.WISO_BEWERTUNG;
  const SAETZE = window.WISO_SAETZE || [];
  const EIGENE_IHK_SAETZE = window.WISO_IHK_SAETZE || [];
  const THEMEN = window.WISO_THEMEN || {};
  const BILDER = window.WISO_BILDER || {};
  const PRUEFUNGSDAUER_MIN = 60;
  const BUCHSTABEN = 'abcdefghij';

  const S_NAME = 'wiso.name';
  const S_LAUFEND = 'wiso.laufend';
  const S_ERGEBNISSE = 'wiso.ergebnisse';
  const S_STATISTIK = 'wiso.statistik';
  const S_BEREICH = 'wiso.bereich';
  const S_IHK = 'wiso.BITLC';
  const SCHWAECHEN_ID = 'schwaechen';
  const ZUFALL_ID = 'zufall';
  const VIRTUELL_ANZAHL = 30;
  const NEUE_MINDESTENS = 6;

  // localStorage kann gesperrt sein (privates Fenster, file://-Einschränkungen) – die App läuft dann ohne Speichern weiter
  const speicher = {
    lesen(schluessel, standard) {
      try {
        const wert = localStorage.getItem(schluessel);
        return wert ? JSON.parse(wert) : standard;
      } catch (e) {
        return standard;
      }
    },
    schreiben(schluessel, wert) {
      try {
        localStorage.setItem(schluessel, JSON.stringify(wert));
        return true;
      } catch (e) {
        return false;
      }
    },
    loeschen(schluessel) {
      try { localStorage.removeItem(schluessel); } catch (e) { /* ohne Speicher weiter */ }
    }
  };

  const app = document.getElementById('app');
  let zustand = { ansicht: 'start' };
  let timerId = null;
  let installAufforderung = null; // Android/Chrome: vom Browser angebotene Installation

  // Zwei Bereiche: 'ki' = KI-erstellte Sätze aus daten/satz-*.js; 'BITLC' = mit dem Dozenten erstellte Sätze aus
  // daten/BITLC-satz-*.js plus Originalaufgaben, die jemand privat aus einer eigenen Datei einliest
  let bereich = speicher.lesen(S_BEREICH, 'ki') === 'BITLC' ? 'BITLC' : 'ki';
  let IMPORT_SAETZE = [];
  let ihkInfo = null;
  let gewaehlteThemen = null; // zuletzt angehakte Themen für Zufallsfragen, null = alle

  // ---------- Hilfsfunktionen ----------

  function esc(text) {
    return String(text == null ? '' : text).replace(/[&<>"']/g, c => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  // **fett** für hervorgehobene Wörter wie „zwei" oder „nicht"
  function fmt(text) {
    return esc(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  function absaetze(text) {
    return [].concat(text || []).map(p => `<p>${fmt(p)}</p>`).join('');
  }

  function satzById(id) {
    return SAETZE.concat(EIGENE_IHK_SAETZE, IMPORT_SAETZE).find(s => s.id === id);
  }

  function saetzeImBereich() {
    return bereich === 'BITLC' ? EIGENE_IHK_SAETZE.concat(IMPORT_SAETZE) : SAETZE;
  }

  function themaName(k) {
    return THEMEN[k] || k;
  }

  // Bekannte Themen in der Reihenfolge von daten/themen.js, Themen aus eingelesenen Dateien alphabetisch dahinter
  function themenImBereich() {
    if (bereich === 'ki') return Object.keys(THEMEN);
    const bekannt = Object.keys(THEMEN);
    const rang = k => (bekannt.includes(k) ? bekannt.indexOf(k) : bekannt.length);
    const themen = new Set();
    saetzeImBereich().forEach(s => s.aufgaben.forEach(a => themen.add(a.thema)));
    return [...themen].sort((x, y) => rang(x) - rang(y) || x.localeCompare(y, 'de'));
  }

  function istIhkId(id) {
    return String(id || '').startsWith('BITLC-');
  }

  function ergebnisBereich(e) {
    return istIhkId(e.auswahl ? (e.auswahl[0] || {}).satzId : e.satzId) ? 'BITLC' : 'ki';
  }

  function aufgabeById(satz, nr) {
    return satz.aufgaben.find(a => a.nr === nr);
  }

  function situationFuer(satz, nr) {
    return (satz.situationen || []).find(s => nr >= s.von && nr <= s.bis);
  }

  // Ursprung einer Aufgabe: bei der Schwächen-Prüfung ist sie neu nummeriert und merkt sich Satz und Nummer
  function quelle(satz, a) {
    return a.herkunft || { satzId: satz.id, nr: a.nr };
  }

  function datumText(iso) {
    return new Date(iso).toLocaleString('de-DE', { dateStyle: 'short', timeStyle: 'short' });
  }

  function dauerText(sekunden) {
    return `${Math.floor(sekunden / 60)}:${String(sekunden % 60).padStart(2, '0')} Min.`;
  }

  function zeige(html) {
    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  function istInstalliert() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  // ---------- Lernstand je Aufgabe ----------
  // Je Aufgabe: v = Versuche, r = richtig, f = falsch, s = richtig in Folge, l = letzte Antwort richtig, z = Zeitpunkt

  function statSchluessel(q) {
    return q.satzId + '#' + q.nr;
  }

  function zaehle(stat, q, anteil, zeit) {
    const k = statSchluessel(q);
    const s = stat[k] || { v: 0, r: 0, f: 0, s: 0 };
    const richtig = anteil === 1;
    s.v++;
    if (richtig) { s.r++; s.s++; } else { s.f++; s.s = 0; }
    s.l = richtig;
    s.z = zeit || Date.now();
    stat[k] = s;
  }

  function ladeStatistik() {
    let stat = speicher.lesen(S_STATISTIK, null);
    if (!stat) {
      // Beim ersten Start mit Lernstand die bisherigen Prüfungen übernehmen, damit niemand bei null anfängt
      stat = {};
      speicher.lesen(S_ERGEBNISSE, []).slice().reverse().forEach(e => {
        const satz = satzAus(e);
        if (!satz) return;
        satz.aufgaben.forEach(a => {
          const antwort = (e.antworten || {})[a.nr];
          if (antwort && antwort.some(Boolean)) zaehle(stat, quelle(satz, a), B.pruefeAufgabe(a, antwort).anteil, Date.parse(e.datum));
        });
      });
      speicher.schreiben(S_STATISTIK, stat);
    }
    return stat;
  }

  function erfasse(eintraege) {
    if (!eintraege.length) return;
    const stat = ladeStatistik();
    eintraege.forEach(e => zaehle(stat, e.quelle, e.anteil));
    speicher.schreiben(S_STATISTIK, stat);
  }

  // Nach einem Fehler gilt eine Aufgabe erst nach zwei richtigen Antworten in Folge wieder als sicher
  function statusVon(s) {
    if (!s || !s.v) return 'offen';
    if (!s.l) return 'falsch';
    if (s.f > 0 && s.s < 2) return 'unsicher';
    return 'sicher';
  }

  function alleAufgaben() {
    const liste = [];
    saetzeImBereich().forEach(s => s.aufgaben.forEach(a => liste.push({ satzId: s.id, nr: a.nr, thema: a.thema })));
    return liste;
  }

  function neuerZaehler() {
    return { offen: 0, falsch: 0, unsicher: 0, sicher: 0, gesamt: 0 };
  }

  function lernstand(stat) {
    const summe = Object.assign(neuerZaehler(), { versuche: 0, richtig: 0 });
    const themen = {};
    const saetze = {};
    alleAufgaben().forEach(q => {
      const s = stat[statSchluessel(q)];
      const status = statusVon(s);
      const zaehler = [summe, themen[q.thema] || (themen[q.thema] = neuerZaehler()), saetze[q.satzId] || (saetze[q.satzId] = neuerZaehler())];
      zaehler.forEach(z => { z[status]++; z.gesamt++; });
      if (s) { summe.versuche += s.v; summe.richtig += s.r; }
    });
    return { summe, themen, saetze };
  }

  function mischen(liste) {
    return liste.map(x => [Math.random(), x]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
  }

  // Rangfolge: zuletzt falsch (häufigste Fehler zuerst) > unsicher > neu > sicher.
  // Ein paar Plätze bleiben für neue Aufgaben, damit der Stoff weiter abgedeckt wird;
  // sichere Aufgaben kommen nur dran, wenn sonst nichts mehr übrig ist.
  function waehleSchwaechen(anzahl) {
    const stat = ladeStatistik();
    const gruppen = { falsch: [], unsicher: [], offen: [], sicher: [] };
    mischen(alleAufgaben()).forEach(q => {
      const s = stat[statSchluessel(q)];
      gruppen[statusVon(s)].push({ q, s });
    });
    // sort ist stabil: Bei gleicher Fehlerzahl bleibt die zufällige Reihenfolge erhalten
    gruppen.falsch.sort((x, y) => y.s.f - x.s.f);
    gruppen.sicher.sort((x, y) => x.s.s - y.s.s || x.s.z - y.s.z);

    const schwach = gruppen.falsch.concat(gruppen.unsicher);
    const neuePlaetze = Math.min(gruppen.offen.length, Math.max(anzahl - schwach.length, NEUE_MINDESTENS));
    const vorrang = schwach.slice(0, anzahl - neuePlaetze).concat(gruppen.offen.slice(0, neuePlaetze));
    const reserve = schwach.slice(anzahl - neuePlaetze).concat(gruppen.offen.slice(neuePlaetze), gruppen.sicher);

    return nachSatzOrdnen(vorrang.concat(reserve).slice(0, anzahl).map(x => x.q));
  }

  // themen: Liste von Themenschlüsseln oder null für alle
  function waehleZufall(anzahl, themen) {
    return nachSatzOrdnen(mischen(alleAufgaben().filter(q => !themen || themen.includes(q.thema))).slice(0, anzahl));
  }

  // Aufgaben eines Satzes bleiben beisammen, damit die Ausgangssituation nur einmal davor steht
  function nachSatzOrdnen(liste) {
    const reihenfolge = saetzeImBereich().map(s => s.id);
    return liste
      .map(q => ({ satzId: q.satzId, nr: q.nr }))
      .sort((x, y) => reihenfolge.indexOf(x.satzId) - reihenfolge.indexOf(y.satzId) || x.nr - y.nr);
  }

  function baueVirtuellenSatz(id, auswahl, themen) {
    const aufgaben = auswahl
      .map(q => ({ q, a: satzById(q.satzId) && aufgabeById(satzById(q.satzId), q.nr) }))
      .filter(x => x.a)
      .map((x, i) => Object.assign({}, x.a, { nr: i + 1, herkunft: { satzId: x.q.satzId, nr: x.q.nr } }));
    const BITLC = istIhkId((auswahl[0] || {}).satzId);
    return {
      id,
      titel: (id === ZUFALL_ID ? 'Zufalls-Prüfung' : 'Schwächen-Prüfung') + (BITLC ? ' (BITLC-Fragen)' : ''),
      untertitel: BITLC ? 'Aufgaben aus deinen BITLC-Fragen' : 'Aufgaben aus allen Sätzen',
      virtuell: true,
      auswahl,
      themen: themen || null,
      aufgaben
    };
  }

  function satzAus(eintrag) {
    if (!eintrag.auswahl) return satzById(eintrag.satzId);
    return baueVirtuellenSatz(eintrag.satzId === ZUFALL_ID ? ZUFALL_ID : SCHWAECHEN_ID, eintrag.auswahl, eintrag.themen);
  }

  // ---------- BITLC-Fragen aus einer eigenen Datei ----------
  // Originalaufgaben der BITLC/ZPA sind urheberrechtlich geschützt und gehören weder ins Repository noch in die
  // öffentliche App. Wer sie für die eigene Prüfungsvorbereitung als Datei hat, liest sie hier ein; sie bleiben
  // nur im Browser dieses Geräts. Erwartet wird das Format von „WiSo-Trainer.html“ (const DATA / const IMG)
  // oder eine JSON-Datei mit derselben Liste.

  // Liest das JSON-Literal hinter einer Zuweisung wie „const DATA = [...]“ (Klammern zählen, Zeichenketten überspringen)
  function liesJsonNach(text, marker) {
    const start = text.indexOf(marker);
    if (start < 0) return null;
    let i = start + marker.length;
    while (i < text.length && text[i] !== '[' && text[i] !== '{') i++;
    let tiefe = 0;
    let inText = false;
    let maskiert = false;
    for (let j = i; j < text.length; j++) {
      const c = text[j];
      if (inText) {
        if (maskiert) maskiert = false;
        else if (c === '\\') maskiert = true;
        else if (c === '"') inText = false;
        continue;
      }
      if (c === '"') inText = true;
      else if (c === '[' || c === '{') tiefe++;
      else if (c === ']' || c === '}') {
        tiefe--;
        if (tiefe === 0) return JSON.parse(text.slice(i, j + 1));
      }
    }
    return null;
  }

  const ZAHLWORT = { 2: 'zwei', 3: 'drei', 4: 'vier' };
  const BILD_URL = /^data:image\/(png|jpe?g|gif|webp);base64,[A-Za-z0-9+/=]+$/;

  function nachkommastellenVon(wert) {
    const m = String(wert).match(/,(\d+)$/);
    return m ? m[1].length : 0;
  }

  function wandleIhkAufgabe(q, bilder) {
    const basis = { nr: Number(q.n), thema: q.t || 'Sonstiges', text: q.s || '', frage: q.q || '', erklaerung: q.e || '' };
    if (q.img && BILD_URL.test(bilder[q.img] || '')) basis.bildUrl = bilder[q.img];
    const loesungen = [].concat(q.a == null ? [] : q.a);

    switch (q.type) {
      case 'single':
        return Object.assign(basis, {
          typ: 'einfach', optionen: q.o, loesung: Number(loesungen[0]),
          anweisung: 'Tragen Sie die Ziffer vor der zutreffenden Antwort in das Kästchen ein.'
        });
      case 'multi':
        return Object.assign(basis, {
          typ: 'mehrfach', optionen: q.o, loesung: loesungen.map(Number),
          anweisung: `Tragen Sie die Ziffern vor den **${ZAHLWORT[loesungen.length] || loesungen.length}** zutreffenden Antworten in die Kästchen ein.`
        });
      case 'match': {
        const items = (q.items || []).map((text, i) => ({ text, loesung: Number(loesungen[i]) }));
        // Nur Ziffern als Antworten: Es geht um eine Reihenfolge, nicht um eine Zuordnung
        if ((q.o || []).every(o => /^\d+$/.test(String(o)))) {
          return Object.assign(basis, {
            typ: 'reihenfolge', items,
            anweisung: 'Tragen Sie für den ersten Schritt die Ziffer 1, für den zweiten Schritt die Ziffer 2 usw. in die Kästchen ein.'
          });
        }
        return Object.assign(basis, {
          typ: 'zuordnung', optionen: q.o, items,
          anweisung: 'Tragen Sie die Ziffer der jeweils zutreffenden Antwort in das Kästchen ein. Eine Antwort kann mehrfach passen.'
        });
      }
      case 'num': {
        if (loesungen.length === 1 && B.leseDatum(loesungen[0])) {
          return Object.assign(basis, { typ: 'datum', loesung: B.leseDatum(loesungen[0]), anweisung: 'Tragen Sie das Datum (TT.MM.JJJJ) in die Kästchen ein.' });
        }
        const uhr = loesungen.length === 1 && String(loesungen[0]).match(/^(\d{1,2}):00$/);
        if (uhr) {
          return Object.assign(basis, { typ: 'zahl', loesung: Number(uhr[1]), nachkommastellen: 0, einheit: 'Uhr', anweisung: 'Tragen Sie nur die volle Stunde ein, z. B. 7 für 7:00 Uhr.' });
        }
        const zahlen = loesungen.map(w => B.leseZahl(w));
        if (!zahlen.length || zahlen.some(z => z === null)) return null;
        const einheit = q.unit === 'Uhr' ? '' : (q.unit || '');
        return Object.assign(basis, {
          typ: 'zahl',
          frage: q.labels && !/(^|\s)a\)/.test(basis.frage) ? `${basis.frage} ${q.labels.join('; ')}` : basis.frage,
          loesung: zahlen.length > 1 ? zahlen : zahlen[0],
          nachkommastellen: Math.max(einheit === 'EUR' ? 2 : 0, ...loesungen.map(nachkommastellenVon)),
          einheit,
          anweisung: zahlen.length > 1 ? 'Tragen Sie die Ergebnisse in die Kästchen ein.' : 'Tragen Sie das Ergebnis in die Kästchen ein.'
        });
      }
      default:
        return null;
    }
  }

  function baueIhkSaetze(paket) {
    const bilder = paket.bilder || {};
    return (paket.daten || []).map(ex => {
      const zusatz = /^extra/i.test(ex.id || '') || /zusatz/i.test(ex.exam || '');
      const aufgaben = (ex.q || []).map(q => wandleIhkAufgabe(q, bilder)).filter(Boolean);
      return {
        id: 'BITLC-' + String(ex.id || ex.exam).replace(/[^A-Za-z0-9_-]/g, ''),
        titel: zusatz ? ex.exam : `BITLC ${ex.exam}`,
        untertitel: zusatz ? 'Zusatzfragen aus deiner Datei' : 'WiSo-Prüfung',
        ausgangssituation: ex.intro || '',
        aufgaben
      };
    }).filter(s => s.aufgaben.length);
  }

  function ladeIhk() {
    const paket = speicher.lesen(S_IHK, null);
    if (!paket) return;
    IMPORT_SAETZE = baueIhkSaetze(paket);
    ihkInfo = { quelle: paket.quelle, importiert: paket.importiert, nurSitzung: false };
  }

  function importiereIhk(datei) {
    const meldung = document.getElementById('import-meldung');
    const zeigeFehler = text => { if (meldung) meldung.textContent = text; };
    const leser = new FileReader();
    leser.onerror = () => zeigeFehler('Die Datei konnte nicht gelesen werden.');
    leser.onload = () => {
      let paket;
      try {
        const text = String(leser.result).trim();
        const reinesJson = text.startsWith('[');
        const daten = reinesJson ? JSON.parse(text) : liesJsonNach(text, 'const DATA');
        if (!Array.isArray(daten) || !daten.length || !daten.every(ex => ex && Array.isArray(ex.q))) throw new Error('keine Fragenliste gefunden');
        paket = { quelle: datei.name, importiert: new Date().toISOString(), daten, bilder: reinesJson ? {} : (liesJsonNach(text, 'const IMG') || {}) };
      } catch (e) {
        zeigeFehler(`Die Datei konnte nicht eingelesen werden (${e.message}). Erwartet wird „WiSo-Trainer.html“ oder eine JSON-Datei im selben Format.`);
        return;
      }
      const saetze = baueIhkSaetze(paket);
      if (!saetze.length) {
        zeigeFehler('In der Datei wurden keine verwendbaren Fragen gefunden.');
        return;
      }
      IMPORT_SAETZE = saetze;
      ihkInfo = { quelle: paket.quelle, importiert: paket.importiert, nurSitzung: !speicher.schreiben(S_IHK, paket) };
      ansichtStart();
    };
    leser.readAsText(datei, 'utf-8');
  }

  // ---------- Bausteine eines Aufgabenbogens ----------

  function situationsTitel(von, bis) {
    return von === bis ? `Situation zur ${von}. Aufgabe` : `Situation zur ${von}. ${bis - von === 1 ? 'und' : 'bis'} ${bis}. Aufgabe`;
  }

  // nummern: neue Aufgabennummern in der Schwächen-Prüfung, sonst gelten die Nummern des Satzes
  function renderSituation(sit, nummern) {
    const titel = nummern ? situationsTitel(nummern[0], nummern[nummern.length - 1]) : (sit.titel || situationsTitel(sit.von, sit.bis));
    return `<div class="situation"><h4>${esc(titel)}</h4>${absaetze(sit.text)}${sit.tabelle ? renderTabelle(sit.tabelle) : ''}</div>`;
  }

  function renderTabelle(t) {
    const kopf = t.kopf.map(z => `<th>${esc(z)}</th>`).join('');
    const zeilen = t.zeilen.map(r => `<tr>${r.map(z => `<td>${esc(z)}</td>`).join('')}</tr>`).join('');
    return `<div class="tabelle-rahmen"><table class="daten"><thead><tr>${kopf}</tr></thead><tbody>${zeilen}</tbody></table></div>`;
  }

  function renderKasten(k) {
    const liste = k.liste ? `<ol class="kasten-liste">${k.liste.map(p => `<li>${fmt(p)}</li>`).join('')}</ol>` : '';
    return `<div class="kasten-info"><h4>${esc(k.titel)}</h4>${absaetze(k.absaetze)}${liste}</div>`;
  }

  function istAuswahl(a) {
    return a.typ === 'einfach' || a.typ === 'mehrfach';
  }

  // Bei Auswahlaufgaben lässt sich jede Antwort anklicken; die Ziffer landet im Lösungskästchen.
  // Nach dem Prüfen werden richtige Antworten grün und falsch gewählte rot markiert.
  function renderOptionen(a, antwort, ergebnis) {
    const liste = a.optionen;
    if (!liste || !liste.length) return '';
    const mitBild = liste.some(o => typeof o === 'object' && o.bild);
    const auswahl = istAuswahl(a);
    const gewaehlt = (antwort || []).filter(Boolean).map(String);
    const richtige = auswahl ? [].concat(a.loesung).map(String) : [];
    const eintraege = liste.map((o, i) => {
      const ziffer = String(i + 1);
      const text = typeof o === 'string' ? o : (o.text || '');
      const bild = typeof o === 'object' && o.bild ? `<span class="bild">${BILDER[o.bild] || ''}</span>` : '';
      const inhalt = `<span class="ziffer">${ziffer}</span>${bild}${text ? `<span>${fmt(text)}</span>` : ''}`;
      if (!auswahl) return `<li>${inhalt}</li>`;
      const an = gewaehlt.includes(ziffer);
      if (ergebnis) {
        const markierung = richtige.includes(ziffer) ? ' loesung' : an ? ' daneben' : '';
        return `<li class="option${an ? ' gewaehlt' : ''}${markierung}">${inhalt}</li>`;
      }
      return `<li><button type="button" class="option${an ? ' gewaehlt' : ''}" data-aktion="option" data-nr="${a.nr}" data-ziffer="${ziffer}" aria-pressed="${an}">${inhalt}</button></li>`;
    }).join('');
    const klassen = `optionen${mitBild ? ' bilder' : ''}${auswahl ? ' auswahl' : ''}`;
    return `${a.optionenTitel ? `<p class="untertitel">${esc(a.optionenTitel)}</p>` : ''}<ol class="${klassen}">${eintraege}</ol>`;
  }

  function renderItems(a) {
    if (!a.items) return '';
    const eintraege = a.items.map((item, i) => `<li><span class="buchstabe">${BUCHSTABEN[i]})</span><span>${fmt(item.text)}</span></li>`).join('');
    return `${a.itemsTitel ? `<p class="untertitel">${esc(a.itemsTitel)}</p>` : ''}<ol class="items">${eintraege}</ol>`;
  }

  function renderKaestchen(a, antwort, ergebnis) {
    const werte = antwort || [];
    const mitBuchstaben = B.mitTeilen(a);
    const breit = a.typ === 'zahl' || a.typ === 'datum';
    const platzhalter = a.typ === 'datum' ? 'TT.MM.JJJJ' : (a.nachkommastellen ? '0,' + '0'.repeat(a.nachkommastellen) : '0');
    const felder = [];

    for (let i = 0; i < B.kaestchenAnzahl(a); i++) {
      const label = mitBuchstaben ? `${BUCHSTABEN[i]})` : '';
      const status = ergebnis ? (ergebnis.details[i] ? ' richtig' : ' falsch') : '';
      const attribute = breit
        ? `placeholder="${platzhalter}" inputmode="decimal" maxlength="16"`
        : 'inputmode="numeric" maxlength="1"';
      felder.push(
        `<label class="feld">${label ? `<span>${label}</span>` : ''}` +
        `<input class="kasten${breit ? ' breit' : ''}${status}" data-nr="${a.nr}" data-i="${i}" value="${esc(werte[i] || '')}" ` +
        `${attribute} autocomplete="off" aria-label="Lösung ${a.nr}. Aufgabe ${label}"${ergebnis ? ' readonly' : ''}></label>`
      );
    }
    const einheit = a.einheit ? `<span class="einheit">${esc(a.einheit)}</span>` : '';
    return `<div class="loesungsfeld"><span class="hinweis">Lösung</span>${felder.join('')}${einheit}</div>`;
  }

  function renderRueckmeldung(a, ergebnis) {
    const klasse = ergebnis.anteil === 1 ? 'ok' : ergebnis.anteil > 0 ? 'teil' : 'nok';
    const titel = ergebnis.anteil === 1 ? 'Richtig' : ergebnis.anteil > 0 ? `Teilweise richtig (${ergebnis.richtig} von ${ergebnis.gesamt})` : (ergebnis.leer ? 'Nicht bearbeitet' : 'Falsch');
    return `<div class="rueckmeldung ${klasse}"><p><strong>${titel}</strong> · Lösung: <span class="loesung">${esc(B.loesungText(a))}</span></p>${a.erklaerung ? absaetze(a.erklaerung) : ''}</div>`;
  }

  function renderAufgabe(satz, a, opt) {
    const o = opt || {};
    const sit = o.mitSituation ? situationFuer(satz, a.nr) : null;
    return `${sit ? renderSituation(sit) : ''}
      <section class="aufgabe" id="aufgabe-${a.nr}">
        <h3>${a.nr}. Aufgabe</h3>
        ${absaetze(a.text)}
        ${a.bildUrl ? `<figure class="aufgaben-bild"><img src="${esc(a.bildUrl)}" alt="Abbildung zur ${a.nr}. Aufgabe" loading="lazy"></figure>` : ''}
        ${a.kasten ? renderKasten(a.kasten) : ''}
        ${a.frage ? `<p class="frage">${fmt(a.frage)}</p>` : ''}
        ${a.anweisung ? `<p class="anweisung">${fmt(a.anweisung)}</p>` : ''}
        ${a.einleitung ? `<p class="einleitung">${fmt(a.einleitung)}</p>` : ''}
        ${renderOptionen(a, o.antwort, o.ergebnis)}
        ${renderItems(a)}
        ${renderKaestchen(a, o.antwort, o.ergebnis)}
        ${o.ergebnis ? renderRueckmeldung(a, o.ergebnis) : ''}
        ${o.pruefen ? `<div class="aktionen"><button class="btn primaer" data-aktion="pruefen">Antwort prüfen</button><span class="klein">oder Enter</span></div>` : ''}
      </section>`;
  }

  function renderAusgangssituation(satz) {
    return `<div class="situation ausgang"><h4>Ausgangssituation</h4>${absaetze(satz.ausgangssituation)}</div>`;
  }

  function renderHerkunft(satz) {
    return `<div class="situation ausgang"><h4>Ausgangssituation · ${esc(satz.titel)}, ${esc(satz.untertitel || '')}</h4>${absaetze(satz.ausgangssituation)}</div>`;
  }

  // Ganzer Aufgabenbogen, Situationen jeweils vor der ersten zugehörigen Aufgabe.
  // Bei der Schwächen-Prüfung steht vor jedem Herkunftssatz dessen Ausgangssituation.
  function renderBogen(satz, antworten, mitErgebnis) {
    let html = satz.virtuell ? '' : renderAusgangssituation(satz);
    let letzteSituation = null;
    let letzteHerkunft = null;
    for (const a of satz.aufgaben) {
      let sit;
      if (a.herkunft) {
        const herkunft = satzById(a.herkunft.satzId);
        if (herkunft !== letzteHerkunft) html += renderHerkunft(herkunft);
        letzteHerkunft = herkunft;
        sit = situationFuer(herkunft, a.herkunft.nr);
        if (sit && sit !== letzteSituation) {
          const nummern = satz.aufgaben
            .filter(x => x.herkunft.satzId === a.herkunft.satzId && x.herkunft.nr >= sit.von && x.herkunft.nr <= sit.bis)
            .map(x => x.nr);
          html += renderSituation(sit, nummern);
        }
      } else {
        sit = situationFuer(satz, a.nr);
        if (sit && sit !== letzteSituation) html += renderSituation(sit);
      }
      letzteSituation = sit;
      const antwort = antworten[a.nr];
      html += renderAufgabe(satz, a, { antwort, ergebnis: mitErgebnis ? B.pruefeAufgabe(a, antwort) : null });
    }
    return html;
  }

  // ---------- Startseite ----------

  function themenZaehler() {
    const zaehler = {};
    saetzeImBereich().forEach(s => s.aufgaben.forEach(a => { zaehler[a.thema] = (zaehler[a.thema] || 0) + 1; }));
    return zaehler;
  }

  // Gestapelter Balken: sicher, unsicher, falsch; der Rest (offen) bleibt grau
  function renderStapel(z) {
    const teile = ['sicher', 'unsicher', 'falsch']
      .filter(k => z[k])
      .map(k => `<span class="s-${k}" style="width:${(100 * z[k] / z.gesamt).toFixed(2)}%"></span>`)
      .join('');
    return `<span class="stapel" role="img" aria-label="${z.sicher} sicher, ${z.unsicher} unsicher, ${z.falsch} falsch, ${z.offen} offen">${teile}</span>`;
  }

  function renderLernstand(stand) {
    const su = stand.summe;
    const bearbeitet = su.gesamt - su.offen;
    const nachzuarbeiten = su.falsch + su.unsicher;
    const quote = su.versuche ? Math.round(100 * su.richtig / su.versuche) : null;

    const themen = themenImBereich().filter(k => stand.themen[k]).map(k => {
      const z = stand.themen[k];
      return `<li><span>${esc(themaName(k))}</span>${renderStapel(z)}<span class="klein">${z.falsch ? `<strong class="text-nok">${z.falsch} falsch</strong> · ` : ''}${z.gesamt - z.offen}/${z.gesamt}</span></li>`;
    }).join('');

    return `
      <section class="karte lernstand">
        <h2>Dein Lernstand</h2>
        <p class="lernstand-kopf"><span class="wert">${bearbeitet}<small> von ${su.gesamt}</small></span> Aufgaben bearbeitet</p>
        ${renderStapel(su)}
        <div class="kacheln">
          <div class="kachel k-offen"><span class="wert">${su.offen}</span>noch offen</div>
          <div class="kachel k-falsch"><span class="wert">${su.falsch}</span>zuletzt falsch</div>
          <div class="kachel k-unsicher"><span class="wert">${su.unsicher}</span>unsicher</div>
          <div class="kachel k-sicher"><span class="wert">${su.sicher}</span>sicher</div>
        </div>
        <p class="klein">${quote === null
          ? 'Noch keine Antworten. Sobald du übst oder eine Prüfung abgibst, siehst du hier deinen Stand.'
          : `${su.versuche} Antworten, davon ${quote} % vollständig richtig. <strong>Unsicher</strong>: zuletzt richtig, vorher aber falsch. <strong>Sicher</strong> wird eine Aufgabe nach einem Fehler erst mit zwei richtigen Antworten in Folge.`}</p>
        <div class="knoepfe">
          <button class="btn primaer" data-aktion="schwaechen-pruefung">Schwächen-Prüfung starten</button>
          ${nachzuarbeiten ? `<button class="btn" data-aktion="falsche-ueben">Falsche und unsichere üben (${nachzuarbeiten})</button>` : ''}
        </div>
        <p class="klein">Die Schwächen-Prüfung stellt ${VIRTUELL_ANZAHL} Aufgaben aus allen Sätzen zusammen: zuerst die, die du falsch hattest (häufigste Fehler zuerst), dann unsichere, dazu immer mindestens ${NEUE_MINDESTENS} neue. Sichere Aufgaben kommen nur, wenn sonst nichts übrig ist. ${PRUEFUNGSDAUER_MIN} Minuten, Bewertung wie bei der BITLC.</p>
        <details class="themen-details">
          <summary>Stand nach Themen</summary>
          <ul class="themen-stand">${themen}</ul>
        </details>
        ${bearbeitet ? '<p class="zuruecksetzen"><button class="link" data-aktion="statistik-loeschen">Lernstand zurücksetzen</button></p>' : ''}
      </section>`;
  }

  function renderKopf() {
    const knopf = (wert, text) =>
      `<button class="bereich${bereich === wert ? ' aktiv' : ''}" data-aktion="bereich" data-bereich="${wert}" aria-pressed="${bereich === wert}">${text}</button>`;
    return `
      <header class="kopf">
        <h1>WiSo-Trainer</h1>
        <p>Abschlussprüfung Teil 2 · IT-Berufe · Wirtschafts- und Sozialkunde</p>
        <nav class="bereiche" aria-label="Fragenbereich">${knopf('BITLC', 'BITLC-Fragen')}${knopf('ki', 'BITLC-KI-Fragen')}</nav>
      </header>`;
  }

  function renderDateiwahl(text) {
    return `<label class="btn datei-knopf">${text}<input type="file" id="BITLC-datei" class="unsichtbar" accept=".html,.htm,.json,text/html,application/json"></label>
      <p class="klein meldung" id="import-meldung" role="status"></p>`;
  }

  function renderIhkImport() {
    return `
      <section class="karte">
        <h2>BITLC-Datei einlesen (optional)</h2>
        <p class="klein">Hast du Aufgaben aus echten BITLC-Prüfungen als Datei, z. B. „WiSo-Trainer.html“, kannst du sie hier zusätzlich einlesen. Sie sind urheberrechtlich geschützt (ZPA Nord-West) und bleiben deshalb nur in diesem Browser auf diesem Gerät. Nichts wird hochgeladen.</p>
        ${renderDateiwahl('Datei auswählen')}
      </section>`;
  }

  function renderIhkDatei() {
    const anzahl = IMPORT_SAETZE.reduce((n, s) => n + s.aufgaben.length, 0);
    return `
      <section class="karte">
        <h2>Deine BITLC-Datei</h2>
        <p class="klein">${esc(ihkInfo && ihkInfo.quelle || 'Datei')} · ${IMPORT_SAETZE.length} Sätze · ${anzahl} Aufgaben${ihkInfo && ihkInfo.importiert ? ` · eingelesen am ${esc(datumText(ihkInfo.importiert))}` : ''}</p>
        ${ihkInfo && ihkInfo.nurSitzung ? '<p class="klein text-nok">Der Browser hat das dauerhafte Speichern abgelehnt (z. B. privates Fenster). Die Fragen sind nur bis zum Schließen der App geladen.</p>' : ''}
        ${renderDateiwahl('Neu einlesen')}
        <p class="zuruecksetzen"><button class="link" data-aktion="BITLC-entfernen">Eingelesene Datei von diesem Gerät entfernen</button></p>
      </section>`;
  }

  function ansichtStart() {
    stoppeTimer();
    zustand = { ansicht: 'start' };
    const name = speicher.lesen(S_NAME, '');
    const laufend = speicher.lesen(S_LAUFEND, null);
    const laufenderSatz = laufend && satzAus(laufend);

    const saetze = saetzeImBereich();
    const hatAufgaben = saetze.some(s => s.aufgaben.length);
    const ergebnisse = speicher.lesen(S_ERGEBNISSE, []).filter(e => ergebnisBereich(e) === bereich);
    const zaehler = themenZaehler();
    const stand = lernstand(ladeStatistik());

    const bestePunkte = {};
    ergebnisse.forEach(e => {
      if (!e.auswahl && (bestePunkte[e.satzId] === undefined || e.punkte > bestePunkte[e.satzId])) bestePunkte[e.satzId] = e.punkte;
    });

    const saetzeHtml = saetze.map(s => {
      const z = stand.saetze[s.id] || neuerZaehler();
      const bearbeitet = z.gesamt - z.offen;
      const beste = bestePunkte[s.id];
      const zeile = [
        `${bearbeitet}/${z.gesamt} bearbeitet`,
        z.falsch ? `<strong class="text-nok">${z.falsch} falsch</strong>` : '',
        beste !== undefined ? `beste Prüfung ${B.formatZahl(beste, 0)} P. (Note ${B.note(beste).note})` : ''
      ].filter(Boolean).join(' · ');
      return `
      <li class="satz-karte">
        <div class="satz-kopf"><strong>${esc(s.titel)}</strong><span class="klein">${esc(s.untertitel || '')}</span></div>
        <div class="knoepfe">
          <button class="btn primaer klein-btn" data-aktion="deckblatt" data-satz="${esc(s.id)}">Prüfung</button>
          <button class="btn klein-btn" data-aktion="satz-ueben" data-satz="${esc(s.id)}">Üben</button>
        </div>
        ${renderStapel(z)}
        <span class="klein satz-info">${zeile}</span>
      </li>`;
    }).join('');

    const themenHtml = themenImBereich().filter(k => zaehler[k]).map(k => {
      const falsch = (stand.themen[k] || {}).falsch;
      return `
      <li><button class="thema" data-aktion="thema" data-thema="${esc(k)}">${esc(themaName(k))}<span class="zaehler">${falsch ? `<span class="anzahl nok">${falsch} falsch</span>` : ''}<span class="anzahl">${zaehler[k]}</span></span></button></li>`;
    }).join('');

    const ergebnisseHtml = ergebnisse.length ? `
      <section class="karte">
        <h2>Deine Ergebnisse</h2>
        <div class="tabelle-rahmen"><table class="ergebnisse">
          <thead><tr><th>Datum</th><th>Aufgabensatz</th><th>Punkte</th><th>Note</th><th></th></tr></thead>
          <tbody>${ergebnisse.map(e => `
            <tr><td>${esc(datumText(e.datum))}</td><td>${esc(e.titel)}</td><td>${B.formatZahl(e.punkte, 2)}</td><td>${e.note}</td>
            <td><button class="btn klein-btn" data-aktion="ergebnis" data-id="${esc(e.id)}">Ansehen</button></td></tr>`).join('')}
          </tbody>
        </table></div>
      </section>` : '';

    const installHtml = istInstalliert() ? '' : `
      <section class="karte">
        <h2>Als App installieren</h2>
        <p id="install-knopf"${installAufforderung ? '' : ' hidden'}><button class="btn primaer" data-aktion="installieren">App installieren</button></p>
        <p class="klein"><strong>iPhone/iPad:</strong> In Safari auf „Teilen“ und dann „Zum Home-Bildschirm“ tippen.<br>
          <strong>Android:</strong> Im Chrome-Menü (⋮) „App installieren“ oder „Zum Startbildschirm hinzufügen“ wählen.</p>
        <p class="klein">Danach startet der WiSo-Trainer wie eine App und funktioniert auch ohne Internet.</p>
      </section>`;

    zeige(`
      ${renderKopf()}
      <main class="start">
        ${laufenderSatz ? `
          <div class="banner">
            <span>Angefangene Prüfung: <strong>${esc(laufenderSatz.titel)}</strong></span>
            <span class="knoepfe"><button class="btn primaer" data-aktion="fortsetzen">Fortsetzen</button><button class="btn" data-aktion="verwerfen">Verwerfen</button></span>
          </div>` : ''}
        ${hatAufgaben ? `
        ${renderLernstand(stand)}
        <section class="karte">
          <h2>Zufallsfragen</h2>
          <p class="klein">${VIRTUELL_ANZAHL} zufällig gezogene Aufgaben aus allen Sätzen als Prüfung (${PRUEFUNGSDAUER_MIN} Minuten, Bewertung wie bei der BITLC), oder nur aus den Themen, die du auswählst.</p>
          <div class="knoepfe">
            <button class="btn primaer" data-aktion="zufall-pruefung">Zufalls-Prüfung starten</button>
            <button class="btn" data-aktion="zufall-themen">Themen auswählen</button>
          </div>
        </section>
        <section class="karte">
          <h2>Aufgabensätze</h2>
          <p class="klein"><strong>Prüfung:</strong> alle Aufgaben des Satzes, 60 Minuten, Auswertung nach BITLC-Schema. <strong>Üben:</strong> Aufgabe für Aufgabe mit sofortiger Lösung.</p>
          <ul class="satz-liste">${saetzeHtml}</ul>
        </section>
        <section class="karte">
          <h2>Themen-Training</h2>
          <p class="klein">Alle Aufgaben eines Themas aus allen Sätzen nacheinander üben.</p>
          <ul class="themen">${themenHtml}</ul>
        </section>` : `
        <section class="karte">
          <h2>Aufgabensätze</h2>
          <p>${bereich === 'BITLC' ? 'Hier erscheinen die Aufgabensätze, die du mit deinem Dozenten erstellst. Noch ist keiner eingebaut.' : 'Keine Aufgabensätze gefunden.'}</p>
        </section>`}
        ${ergebnisseHtml}
        ${bereich === 'BITLC' ? (IMPORT_SAETZE.length ? renderIhkDatei() : renderIhkImport()) : ''}
        <section class="karte">
          <h2>Dein Name</h2>
          <input id="name" class="eingabe" value="${esc(name)}" placeholder="Spitzname" maxlength="30" autocomplete="nickname">
          <p class="klein">Erscheint in deinen Ergebnissen. Name, Ergebnisse und Lernstand werden nur auf diesem Gerät gespeichert.</p>
        </section>
        ${installHtml}
      </main>`);
  }

  // ---------- Deckblatt ----------

  function ansichtThemenauswahl() {
    zustand = { ansicht: 'themenauswahl' };
    const zaehler = themenZaehler();
    const liste = themenImBereich().filter(k => zaehler[k]).map(k => `
      <li><label class="thema thema-wahl"><span><input type="checkbox" value="${esc(k)}"${!gewaehlteThemen || gewaehlteThemen.includes(k) ? ' checked' : ''}><span>${esc(themaName(k))}</span></span><span class="zaehler"><span class="anzahl">${zaehler[k]}</span></span></label></li>`).join('');
    zeige(`
      ${renderKopf()}
      <main class="start">
        <section class="karte">
          <h2>Zufallsfragen nach Themen</h2>
          <p class="klein">Wähle die Themen aus. Daraus werden ${VIRTUELL_ANZAHL} Aufgaben zufällig gezogen. Gibt es zu den Themen weniger Aufgaben, kommen alle dran.</p>
          <div class="knoepfe themen-schalter">
            <button class="btn klein-btn" data-aktion="themen-alle" data-wert="1">Alle</button>
            <button class="btn klein-btn" data-aktion="themen-alle" data-wert="">Keine</button>
            <span class="klein" id="themen-summe" role="status"></span>
          </div>
          <ul class="themen" id="themen-liste">${liste}</ul>
          <div class="aktionen mitte">
            <button class="btn" data-aktion="start">Zurück</button>
            <button class="btn" data-aktion="zufall-themen-ueben">Üben</button>
            <button class="btn primaer" data-aktion="zufall-themen-pruefung">Prüfung</button>
          </div>
        </section>
      </main>`);
    zeigeThemenSumme();
  }

  function angehakteThemen() {
    return [...document.querySelectorAll('#themen-liste input:checked')].map(c => c.value);
  }

  function zeigeThemenSumme() {
    const ziel = document.getElementById('themen-summe');
    if (!ziel) return;
    const zaehler = themenZaehler();
    const themen = angehakteThemen();
    const anzahl = themen.reduce((n, k) => n + zaehler[k], 0);
    ziel.textContent = `${themen.length} ${themen.length === 1 ? 'Thema' : 'Themen'} · ${anzahl} Aufgaben verfügbar`;
  }

  // null, wenn alle Themen angehakt sind: Dann gilt die Auswahl auch für Themen, die später dazukommen
  function themenAusAuswahl() {
    const themen = angehakteThemen();
    if (!themen.length) {
      window.alert('Wähle mindestens ein Thema aus.');
      return undefined;
    }
    gewaehlteThemen = themen.length === document.querySelectorAll('#themen-liste input').length ? null : themen;
    return gewaehlteThemen;
  }

  function zusammensetzungText(satz) {
    if (satz.id === ZUFALL_ID) {
      return satz.themen
        ? `Zufällig gezogen aus ${satz.themen.length === 1 ? 'dem Thema' : `${satz.themen.length} Themen`}: ${satz.themen.map(themaName).join(', ')}.`
        : 'Zufällig gezogen aus allen Sätzen und Themen.';
    }
    const stat = ladeStatistik();
    const z = neuerZaehler();
    satz.auswahl.forEach(q => { z[statusVon(stat[statSchluessel(q)])]++; });
    const teile = [
      z.falsch && `${z.falsch} zuletzt falsch`,
      z.unsicher && `${z.unsicher} unsicher`,
      z.offen && `${z.offen} noch nie bearbeitet`,
      z.sicher && `${z.sicher} zur Wiederholung`
    ].filter(Boolean);
    return `Zusammengestellt aus deinem Lernstand: ${teile.join(', ')}.`;
  }

  function ansichtDeckblatt(satz) {
    zustand = { ansicht: 'deckblatt', satz };
    zeige(`
      <main class="papier deckblatt">
        <div class="deck-kopf">
          <div>
            <p class="termin">Übungsprüfung · ${esc(satz.titel)}</p>
            <h1>Abschlussprüfung</h1>
            <p class="beruf">IT-Berufe</p>
          </div>
          <div class="marke">WiSo</div>
        </div>
        <div class="deck-mitte">
          <div class="deck-links">
            <div class="bereich"><span class="grosse-zahl">3</span><span>Wirtschafts- und<br>Sozialkunde</span></div>
            <p class="teil"><strong>Teil 2 der Abschlussprüfung</strong></p>
            <ul class="eckdaten">
              <li><span>${satz.aufgaben.length}</span> Aufgaben</li>
              <li><span>${PRUEFUNGSDAUER_MIN}</span> Minuten Prüfungszeit</li>
              <li><span>100</span> Punkte</li>
            </ul>
            ${satz.virtuell ? `<p class="zusammensetzung">${esc(zusammensetzungText(satz))}</p>` : ''}
          </div>
          <div class="deck-rechts">
            <h2>Bearbeitungshinweise</h2>
            <ol>
              <li>Die Aufgaben können in beliebiger Reihenfolge gelöst werden. Bei Aufgaben mit gemeinsamer Situation hältst du dich am besten an die vorgegebene Reihenfolge.</li>
              <li>Trage in die Lösungskästchen die <strong>Kennziffern der richtigen Antworten</strong> ein, bei offenen Aufgaben das <strong>Ergebnis</strong>. Bei Auswahlaufgaben kannst du auch direkt auf die Antwort tippen; die Ziffer wird dann eingetragen.</li>
              <li>Die <strong>Anzahl der Kästchen</strong> zeigt, wie viele Ziffern verlangt sind. Bei Zuordnungs- und Reihenfolgeaufgaben gehört in jedes Kästchen genau eine Ziffer.</li>
              <li>Beträge gibst du mit zwei Nachkommastellen an (z. B. 1.250,00), Datumsangaben im Format TT.MM.JJJJ.</li>
              <li>Erlaubtes Hilfsmittel ist ein nicht programmierbarer Taschenrechner. Rechnest du mit einem gerundeten Ergebnis weiter, dann nur mit diesem.</li>
              <li>Die Zeit läuft ab dem Start. Nach ${PRUEFUNGSDAUER_MIN} Minuten wird automatisch abgegeben. Du kannst zwischendurch zur Startseite wechseln, die Zeit läuft weiter.</li>
              <li>Bewertet wird wie bei der BITLC: Jede Aufgabe zählt gleich viel. Mehrteilige Aufgaben werden anteilig bewertet, alle übrigen nur bei vollständig richtiger Lösung.</li>
            </ol>
          </div>
        </div>
        <div class="aktionen mitte">
          <button class="btn" data-aktion="start">Zurück</button>
          ${satz.virtuell ? `<button class="btn" data-aktion="${satz.id === ZUFALL_ID ? 'zufall-neu' : 'schwaechen-pruefung'}">Neu zusammenstellen</button>` : ''}
          <button class="btn primaer gross" data-aktion="beginnen">Prüfung beginnen</button>
        </div>
      </main>`);
  }

  // ---------- Prüfung ----------

  function beginnePruefung(satz) {
    zustand = { ansicht: 'pruefung', modus: 'pruefung', satz, antworten: {}, startZeit: Date.now() };
    sichereLaufend();
    ansichtPruefung();
  }

  function setzePruefungFort() {
    const laufend = speicher.lesen(S_LAUFEND, null);
    const satz = laufend && satzAus(laufend);
    if (!satz) return ansichtStart();
    zustand = { ansicht: 'pruefung', modus: 'pruefung', satz, antworten: laufend.antworten || {}, startZeit: laufend.startZeit };
    ansichtPruefung();
  }

  function sichereLaufend() {
    const { satz } = zustand;
    speicher.schreiben(S_LAUFEND, { satzId: satz.id, auswahl: satz.auswahl, themen: satz.themen, antworten: zustand.antworten, startZeit: zustand.startZeit });
  }

  function ansichtPruefung() {
    const { satz, antworten } = zustand;
    const bogen = satz.aufgaben.map(a => `<li><button data-aktion="springe" data-nr="${a.nr}" id="bogen-${a.nr}">${a.nr}</button></li>`).join('');
    zeige(`
      <div class="pruef-layout">
        <header class="pruef-kopf">
          <button class="btn" data-aktion="start" title="Die Zeit läuft weiter">← Start</button>
          <span class="titel">${esc(satz.titel)} · WiSo</span>
          <span id="timer" class="timer" aria-live="off"></span>
          <button class="btn primaer" data-aktion="abgeben">Abgeben</button>
        </header>
        <main class="papier aufgabenheft">
          ${renderBogen(satz, antworten, false)}
          <div class="aktionen mitte"><button class="btn primaer gross" data-aktion="abgeben">Prüfung abgeben</button></div>
        </main>
        <aside class="loesungsbogen" aria-label="Lösungsbogen">
          <h2>Lösungsbogen</h2>
          <ol class="bogen">${bogen}</ol>
          <p class="klein" id="bogen-stand"></p>
        </aside>
      </div>`);
    aktualisiereBogen();
    starteTimer();
  }

  function aktualisiereBogen() {
    const { satz, antworten } = zustand;
    let bearbeitet = 0;
    satz.aufgaben.forEach(a => {
      const werte = antworten[a.nr] || [];
      const gefuellt = werte.filter(Boolean).length;
      const voll = gefuellt >= B.kaestchenAnzahl(a);
      if (voll) bearbeitet++;
      const el = document.getElementById('bogen-' + a.nr);
      if (el) el.className = voll ? 'voll' : gefuellt ? 'teil' : '';
    });
    const stand = document.getElementById('bogen-stand');
    if (stand) stand.textContent = `${bearbeitet} von ${satz.aufgaben.length} vollständig bearbeitet`;
  }

  function starteTimer() {
    stoppeTimer();
    const ende = zustand.startZeit + PRUEFUNGSDAUER_MIN * 60000;
    const tick = () => {
      const rest = Math.max(0, ende - Date.now());
      const el = document.getElementById('timer');
      if (el) {
        const min = Math.floor(rest / 60000);
        const sek = Math.floor(rest / 1000) % 60;
        el.textContent = `${min}:${String(sek).padStart(2, '0')}`;
        el.classList.toggle('knapp', rest < 5 * 60000);
      }
      if (rest <= 0) abgeben(true);
    };
    tick();
    timerId = setInterval(tick, 1000);
  }

  function stoppeTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
  }

  function abgeben(automatisch) {
    const { satz, antworten, startZeit } = zustand;
    if (!automatisch) {
      const offen = satz.aufgaben.filter(a => (antworten[a.nr] || []).filter(Boolean).length < B.kaestchenAnzahl(a)).length;
      const frage = offen ? `${offen} Aufgabe(n) sind noch nicht vollständig bearbeitet. Trotzdem abgeben?` : 'Prüfung jetzt abgeben?';
      if (!window.confirm(frage)) return;
    }
    stoppeTimer();
    const auswertung = B.werteSatzAus(satz, antworten);
    // Leere Aufgaben zählen nicht für den Lernstand: Sie können auch an der Zeit gelegen haben
    erfasse(auswertung.proAufgabe
      .filter(p => !p.ergebnis.leer)
      .map(p => ({ quelle: quelle(satz, p.aufgabe), anteil: p.ergebnis.anteil })));
    const ende = Math.min(Date.now(), startZeit + PRUEFUNGSDAUER_MIN * 60000);
    const ergebnis = {
      id: Date.now().toString(36),
      satzId: satz.id,
      auswahl: satz.auswahl,
      themen: satz.themen,
      titel: satz.titel,
      name: speicher.lesen(S_NAME, ''),
      datum: new Date().toISOString(),
      dauerSek: Math.round((ende - startZeit) / 1000),
      punkte: auswertung.punkte,
      note: auswertung.note.note,
      antworten
    };
    const liste = speicher.lesen(S_ERGEBNISSE, []);
    liste.unshift(ergebnis);
    speicher.schreiben(S_ERGEBNISSE, liste.slice(0, 50));
    speicher.loeschen(S_LAUFEND);
    ansichtAuswertung(ergebnis);
  }

  // ---------- Auswertung ----------

  function ansichtAuswertung(ergebnis) {
    const satz = satzAus(ergebnis);
    if (!satz) return ansichtStart();
    zustand = { ansicht: 'auswertung', satz, ergebnis };
    const aw = B.werteSatzAus(satz, ergebnis.antworten);

    const zeilen = aw.proAufgabe.map(({ aufgabe, ergebnis: e, punkte }) => {
      const klasse = e.anteil === 1 ? 'ok' : e.anteil > 0 ? 'teil' : 'nok';
      return `<tr class="${klasse}">
        <td>${aufgabe.nr}.</td>
        <td class="mono">${esc(B.eingabeText(aufgabe, ergebnis.antworten[aufgabe.nr]))}</td>
        <td class="mono">${esc(B.loesungText(aufgabe))}</td>
        <td>${B.formatZahl(punkte, 2)}</td>
        <td>${e.art === 'teil' ? 'Teil' : 'Global'}</td>
        <td class="klein">${esc(THEMEN[aufgabe.thema] || aufgabe.thema)}${aufgabe.herkunft ? `<br>aus ${esc(satzById(aufgabe.herkunft.satzId).titel)}, Nr. ${aufgabe.herkunft.nr}` : ''}</td>
      </tr>`;
    }).join('');

    const themen = Object.keys(aw.themen).map(k => {
      const t = aw.themen[k];
      const prozent = Math.round(100 * t.anteil / t.anzahl);
      return `<li><span>${esc(THEMEN[k] || k)}</span><span class="balken" title="${prozent} %"><span style="width:${prozent}%"></span></span><span class="prozent">${prozent} %</span></li>`;
    }).join('');

    const fehler = aw.proAufgabe.filter(p => p.ergebnis.anteil < 1).length;

    zeige(`
      <header class="kopf"><h1>Auswertung</h1><p>${esc(satz.titel)}${ergebnis.name ? ' · ' + esc(ergebnis.name) : ''} · ${esc(datumText(ergebnis.datum))}</p></header>
      <main class="start">
        <section class="karte ergebnis-kopf">
          <div class="kennzahl"><span class="wert">${B.formatZahl(aw.punkte, 2)}</span><span>von 100 Punkten</span></div>
          <div class="kennzahl"><span class="wert">${aw.note.note}</span><span>${esc(aw.note.text)}</span></div>
          <div class="kennzahl"><span class="wert">${dauerText(ergebnis.dauerSek)}</span><span>Bearbeitungszeit</span></div>
        </section>
        <section class="karte">
          <h2>Ergebnis nach Themen</h2>
          <ul class="themen-auswertung">${themen}</ul>
        </section>
        <section class="karte">
          <h2>Lösungsbogen</h2>
          <div class="tabelle-rahmen"><table class="auswertung">
            <thead><tr><th>Aufgabe</th><th>Deine Eingabe</th><th>Lösung</th><th>Punkte</th><th>Bewertung</th><th>Thema</th></tr></thead>
            <tbody>${zeilen}</tbody>
          </table></div>
          <p class="klein">Je Aufgabe ${B.formatZahl(100 / satz.aufgaben.length, 5)} Punkte. Teilbewertung: anteilig je richtigem Kästchen. Globalbewertung: nur bei vollständig richtiger Lösung.</p>
        </section>
        <div class="aktionen mitte">
          <button class="btn" data-aktion="start">Startseite</button>
          <button class="btn" data-aktion="loesungsansicht">Aufgaben mit Lösungen ansehen</button>
          ${fehler ? `<button class="btn primaer" data-aktion="fehler-ueben">${fehler} nicht gelöste Aufgabe(n) üben</button>` : ''}
        </div>
      </main>`);
  }

  function ansichtLoesungen() {
    const { satz, ergebnis } = zustand;
    zustand.ansicht = 'loesungen';
    zeige(`
      <div class="pruef-layout ohne-bogen">
        <header class="pruef-kopf">
          <button class="btn" data-aktion="zur-auswertung">← Auswertung</button>
          <span class="titel">${esc(satz.titel)} · Lösungen und Erklärungen</span>
        </header>
        <main class="papier aufgabenheft">${renderBogen(satz, ergebnis.antworten, true)}</main>
      </div>`);
  }

  // ---------- Üben ----------

  function starteUebung(liste, titel) {
    if (!liste.length) return;
    zustand = { ansicht: 'uebung', modus: 'uebung', liste, titel, index: 0, antworten: {}, geprueft: false, anteile: [] };
    ansichtUebung();
  }

  function ansichtUebung() {
    const { liste, index } = zustand;
    if (index >= liste.length) return ansichtUebungEnde();
    const eintrag = liste[index];
    const satz = satzById(eintrag.satzId);
    const a = aufgabeById(satz, eintrag.nr);
    zustand.satz = satz;
    const ergebnis = zustand.geprueft ? B.pruefeAufgabe(a, zustand.antworten[a.nr]) : null;
    const fortschritt = Math.round(100 * index / liste.length);

    zeige(`
      <div class="pruef-layout ohne-bogen">
        <header class="pruef-kopf">
          <button class="btn" data-aktion="start">← Start</button>
          <span class="titel">${esc(zustand.titel)} · ${index + 1} von ${liste.length}</span>
          <span class="fortschritt" aria-hidden="true"><span style="width:${fortschritt}%"></span></span>
        </header>
        <main class="papier einzel">
          <details class="ausgang-klein"><summary>Ausgangssituation (${esc(satz.titel)})</summary>${absaetze(satz.ausgangssituation)}</details>
          ${renderAufgabe(satz, a, { antwort: zustand.antworten[a.nr], ergebnis, mitSituation: true, pruefen: !ergebnis })}
          ${ergebnis ? `<div class="aktionen"><button class="btn primaer" data-aktion="weiter" id="weiter">${index + 1 < liste.length ? 'Nächste Aufgabe' : 'Abschließen'}</button><span class="klein">oder Enter</span></div>` : ''}
        </main>
      </div>`);

    const ziel = ergebnis ? document.getElementById('weiter') : app.querySelector('input.kasten');
    if (ziel) ziel.focus({ preventScroll: true });
    if (ergebnis) {
      var rm = app.querySelector('.rueckmeldung');
      if (rm) rm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function pruefeUebung() {
    const eintrag = zustand.liste[zustand.index];
    const a = aufgabeById(zustand.satz, eintrag.nr);
    const anteil = B.pruefeAufgabe(a, zustand.antworten[a.nr]).anteil;
    zustand.anteile[zustand.index] = anteil;
    erfasse([{ quelle: { satzId: eintrag.satzId, nr: eintrag.nr }, anteil }]);
    zustand.geprueft = true;
    ansichtUebung();
  }

  function naechsteUebung() {
    zustand.index++;
    zustand.geprueft = false;
    zustand.antworten = {};
    ansichtUebung();
  }

  function ansichtUebungEnde() {
    const { liste, anteile, titel } = zustand;
    const summe = anteile.reduce((s, x) => s + (x || 0), 0);
    const prozent = Math.round(100 * summe / liste.length);
    const falsche = liste.filter((_, i) => (anteile[i] || 0) < 1);
    zustand.falsche = falsche;

    const zeilen = liste.map((e, i) => {
      const satz = satzById(e.satzId);
      const a = aufgabeById(satz, e.nr);
      const x = anteile[i] || 0;
      return `<li class="${x === 1 ? 'ok' : x > 0 ? 'teil' : 'nok'}"><span>${esc(satz.titel)}, ${a.nr}. Aufgabe</span><span class="klein">${esc(THEMEN[a.thema] || a.thema)}</span></li>`;
    }).join('');

    zeige(`
      <header class="kopf"><h1>Übung beendet</h1><p>${esc(titel)}</p></header>
      <main class="start">
        <section class="karte ergebnis-kopf">
          <div class="kennzahl"><span class="wert">${prozent} %</span><span>erreicht</span></div>
          <div class="kennzahl"><span class="wert">${liste.length - falsche.length} / ${liste.length}</span><span>vollständig richtig</span></div>
        </section>
        <section class="karte"><h2>Aufgaben</h2><ul class="uebersicht">${zeilen}</ul></section>
        <div class="aktionen mitte">
          <button class="btn" data-aktion="start">Startseite</button>
          ${falsche.length ? `<button class="btn primaer" data-aktion="falsche-wiederholen">${falsche.length} Aufgabe(n) wiederholen</button>` : ''}
        </div>
      </main>`);
  }

  function aufgabenZumThema(thema) {
    const liste = [];
    saetzeImBereich().forEach(s => s.aufgaben.forEach(a => { if (a.thema === thema) liste.push({ satzId: s.id, nr: a.nr }); }));
    return liste;
  }

  // ---------- Eingabe in die Lösungskästchen ----------

  function markiereOptionen(a) {
    const werte = (zustand.antworten[a.nr] || []).map(String);
    app.querySelectorAll(`button.option[data-nr="${a.nr}"]`).forEach(k => {
      const an = werte.includes(k.dataset.ziffer);
      k.classList.toggle('gewaehlt', an);
      k.setAttribute('aria-pressed', String(an));
    });
  }

  // Einfachauswahl: Klick setzt die Ziffer, erneuter Klick löscht sie.
  // Mehrfachauswahl: Klick schaltet um; sind alle Kästchen voll, fällt die zuerst gewählte Antwort heraus.
  function waehleOption(nr, ziffer) {
    const a = aufgabeById(zustand.satz, nr);
    if (!a || !istAuswahl(a) || (zustand.ansicht === 'uebung' && zustand.geprueft)) return;
    const n = B.kaestchenAnzahl(a);
    let gewaehlt = (zustand.antworten[nr] || []).filter(Boolean).map(String);
    if (gewaehlt.includes(ziffer)) {
      gewaehlt = gewaehlt.filter(z => z !== ziffer);
    } else if (a.typ === 'einfach') {
      gewaehlt = [ziffer];
    } else {
      if (gewaehlt.length >= n) gewaehlt.shift();
      gewaehlt.push(ziffer);
    }
    zustand.antworten[nr] = Array.from({ length: n }, (_, i) => gewaehlt[i] || '');
    app.querySelectorAll(`input.kasten[data-nr="${nr}"]`).forEach((f, i) => { f.value = zustand.antworten[nr][i]; });
    markiereOptionen(a);
    if (zustand.modus === 'pruefung') {
      sichereLaufend();
      aktualisiereBogen();
    }
  }

  function kaestchenDerAufgabe(el) {
    return Array.from(app.querySelectorAll(`input.kasten[data-nr="${el.dataset.nr}"]:not([readonly])`));
  }

  app.addEventListener('input', e => {
    const el = e.target;
    if (el.id === 'name') {
      speicher.schreiben(S_NAME, el.value.trim());
      return;
    }
    if (!el.classList.contains('kasten') || !zustand.satz) return;
    const nr = Number(el.dataset.nr);
    const i = Number(el.dataset.i);
    const a = aufgabeById(zustand.satz, nr);

    if (el.classList.contains('breit')) {
      el.value = el.value.replace(a.typ === 'datum' ? /[^\d.]/g : /[^\d.,-]/g, '');
    } else {
      // Ein Kästchen = eine Kennziffer; nach der Eingabe automatisch ins nächste Kästchen derselben Aufgabe
      el.value = el.value.replace(/[^1-9]/g, '').slice(-1);
      if (el.value) {
        const felder = kaestchenDerAufgabe(el);
        const naechstes = felder[felder.indexOf(el) + 1];
        if (naechstes) naechstes.focus();
      }
    }

    const werte = zustand.antworten[nr] || (zustand.antworten[nr] = []);
    werte[i] = el.value;
    if (istAuswahl(a)) markiereOptionen(a);
    if (zustand.modus === 'pruefung') {
      sichereLaufend();
      aktualisiereBogen();
    }
  });

  app.addEventListener('change', e => {
    if (e.target.id === 'BITLC-datei' && e.target.files && e.target.files[0]) importiereIhk(e.target.files[0]);
    if (e.target.closest('#themen-liste')) zeigeThemenSumme();
  });

  app.addEventListener('keydown', e => {
    const el = e.target;
    if (e.key === 'Backspace' && el.classList && el.classList.contains('kasten') && !el.classList.contains('breit') && !el.value) {
      const felder = kaestchenDerAufgabe(el);
      const vorheriges = felder[felder.indexOf(el) - 1];
      if (vorheriges) {
        vorheriges.focus();
        e.preventDefault();
      }
    }
    // Enter prüft auch dann, wenn gerade eine angeklickte Antwort den Fokus hat (Auswählen per Tastatur mit Leertaste)
    if (e.key === 'Enter' && zustand.ansicht === 'uebung' && (el.tagName !== 'BUTTON' || el.classList.contains('option'))) {
      e.preventDefault();
      if (zustand.geprueft) naechsteUebung();
      else pruefeUebung();
    }
  });

  // ---------- Aktionen ----------

  app.addEventListener('click', e => {
    const knopf = e.target.closest('[data-aktion]');
    if (!knopf) return;
    const d = knopf.dataset;

    switch (d.aktion) {
      case 'start':
        ansichtStart();
        break;
      case 'bereich':
        bereich = d.bereich === 'BITLC' ? 'BITLC' : 'ki';
        gewaehlteThemen = null;
        speicher.schreiben(S_BEREICH, bereich);
        ansichtStart();
        break;
      case 'BITLC-entfernen':
        if (window.confirm('Eingelesene BITLC-Datei von diesem Gerät entfernen? Die eingebauten Aufgabensätze bleiben, und dein Lernstand bleibt erhalten, falls du die Datei später wieder einliest.')) {
          speicher.loeschen(S_IHK);
          IMPORT_SAETZE = [];
          ihkInfo = null;
          ansichtStart();
        }
        break;
      case 'deckblatt':
        ansichtDeckblatt(satzById(d.satz));
        break;
      case 'beginnen':
        beginnePruefung(zustand.satz);
        break;
      case 'schwaechen-pruefung':
        ansichtDeckblatt(baueVirtuellenSatz(SCHWAECHEN_ID, waehleSchwaechen(VIRTUELL_ANZAHL)));
        break;
      case 'zufall-pruefung':
        ansichtDeckblatt(baueVirtuellenSatz(ZUFALL_ID, waehleZufall(VIRTUELL_ANZAHL, null), null));
        break;
      case 'zufall-neu':
        ansichtDeckblatt(baueVirtuellenSatz(ZUFALL_ID, waehleZufall(VIRTUELL_ANZAHL, zustand.satz.themen), zustand.satz.themen));
        break;
      case 'zufall-themen':
        ansichtThemenauswahl();
        break;
      case 'themen-alle':
        document.querySelectorAll('#themen-liste input').forEach(c => { c.checked = Boolean(d.wert); });
        zeigeThemenSumme();
        break;
      case 'zufall-themen-pruefung': {
        const themen = themenAusAuswahl();
        if (themen !== undefined) ansichtDeckblatt(baueVirtuellenSatz(ZUFALL_ID, waehleZufall(VIRTUELL_ANZAHL, themen), themen));
        break;
      }
      case 'zufall-themen-ueben': {
        const themen = themenAusAuswahl();
        if (themen !== undefined) starteUebung(mischen(waehleZufall(VIRTUELL_ANZAHL, themen)), 'Zufallsfragen');
        break;
      }
      case 'falsche-ueben': {
        const stat = ladeStatistik();
        const rang = { falsch: 0, unsicher: 1 };
        const liste = alleAufgaben()
          .map(q => ({ q, s: stat[statSchluessel(q)] }))
          .filter(x => statusVon(x.s) in rang)
          .sort((x, y) => rang[statusVon(x.s)] - rang[statusVon(y.s)] || y.s.f - x.s.f)
          .map(x => ({ satzId: x.q.satzId, nr: x.q.nr }));
        starteUebung(liste, 'Falsche und unsichere Aufgaben');
        break;
      }
      case 'statistik-loeschen':
        if (window.confirm('Lernstand wirklich zurücksetzen? Alle Aufgaben gelten dann wieder als offen. Deine Prüfungsergebnisse bleiben erhalten.')) {
          speicher.schreiben(S_STATISTIK, {});
          ansichtStart();
        }
        break;
      case 'fortsetzen':
        setzePruefungFort();
        break;
      case 'verwerfen':
        if (window.confirm('Angefangene Prüfung verwerfen?')) {
          speicher.loeschen(S_LAUFEND);
          ansichtStart();
        }
        break;
      case 'abgeben':
        abgeben(false);
        break;
      case 'springe': {
        const ziel = document.getElementById('aufgabe-' + d.nr);
        if (ziel) {
          ziel.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const feld = ziel.querySelector('input.kasten');
          if (feld) feld.focus({ preventScroll: true });
        }
        break;
      }
      case 'ergebnis': {
        const ergebnis = speicher.lesen(S_ERGEBNISSE, []).find(x => x.id === d.id);
        if (ergebnis) ansichtAuswertung(ergebnis);
        break;
      }
      case 'loesungsansicht':
        ansichtLoesungen();
        break;
      case 'zur-auswertung':
        ansichtAuswertung(zustand.ergebnis);
        break;
      case 'fehler-ueben': {
        const { satz, ergebnis } = zustand;
        const liste = satz.aufgaben
          .filter(a => B.pruefeAufgabe(a, ergebnis.antworten[a.nr]).anteil < 1)
          .map(a => quelle(satz, a));
        starteUebung(liste, `${satz.titel} · nicht gelöste Aufgaben`);
        break;
      }
      case 'satz-ueben': {
        const satz = satzById(d.satz);
        starteUebung(satz.aufgaben.map(a => ({ satzId: satz.id, nr: a.nr })), satz.titel);
        break;
      }
      case 'thema':
        starteUebung(aufgabenZumThema(d.thema), THEMEN[d.thema] || d.thema);
        break;
      case 'option':
        waehleOption(Number(d.nr), d.ziffer);
        break;
      case 'pruefen':
        pruefeUebung();
        break;
      case 'weiter':
        naechsteUebung();
        break;
      case 'falsche-wiederholen':
        starteUebung(zustand.falsche, zustand.titel);
        break;
      case 'installieren':
        if (installAufforderung) {
          installAufforderung.prompt();
          installAufforderung.userChoice.finally(() => {
            installAufforderung = null;
            if (zustand.ansicht === 'start') ansichtStart();
          });
        }
        break;
      default:
        break;
    }
  });

  // ---------- Installation als App ----------

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    installAufforderung = e;
    const knopf = document.getElementById('install-knopf');
    if (knopf) knopf.hidden = false;
  });

  window.addEventListener('appinstalled', () => {
    installAufforderung = null;
  });

  // Offline-Cache nur über http(s); beim Öffnen per Doppelklick (file://) läuft die App ohne
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => { /* App läuft auch ohne Offline-Cache */ });
  }

  ladeIhk();
  ansichtStart();
})();
