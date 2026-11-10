// Oberfläche des WiSo-Trainers: Startseite, Deckblatt, Prüfung, Auswertung, Üben.
(function () {
  'use strict';

  const B = window.WISO_BEWERTUNG;
  const SAETZE = window.WISO_SAETZE || [];
  const THEMEN = window.WISO_THEMEN || {};
  const BILDER = window.WISO_BILDER || {};
  const PRUEFUNGSDAUER_MIN = 60;
  const BUCHSTABEN = 'abcdefghij';

  const S_NAME = 'wiso.name';
  const S_LAUFEND = 'wiso.laufend';
  const S_ERGEBNISSE = 'wiso.ergebnisse';

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
      try { localStorage.setItem(schluessel, JSON.stringify(wert)); } catch (e) { /* ohne Speicher weiter */ }
    },
    loeschen(schluessel) {
      try { localStorage.removeItem(schluessel); } catch (e) { /* ohne Speicher weiter */ }
    }
  };

  const app = document.getElementById('app');
  let zustand = { ansicht: 'start' };
  let timerId = null;

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
    return SAETZE.find(s => s.id === id);
  }

  function aufgabeById(satz, nr) {
    return satz.aufgaben.find(a => a.nr === nr);
  }

  function situationFuer(satz, nr) {
    return (satz.situationen || []).find(s => nr >= s.von && nr <= s.bis);
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

  // ---------- Bausteine eines Aufgabenbogens ----------

  function renderSituation(sit) {
    const titel = sit.titel || `Situation zur ${sit.von}. ${sit.bis - sit.von === 1 ? 'und' : 'bis'} ${sit.bis}. Aufgabe`;
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

  function renderOptionen(liste, titel) {
    if (!liste || !liste.length) return '';
    const mitBild = liste.some(o => typeof o === 'object' && o.bild);
    const eintraege = liste.map((o, i) => {
      const text = typeof o === 'string' ? o : (o.text || '');
      const bild = typeof o === 'object' && o.bild ? `<span class="bild">${BILDER[o.bild] || ''}</span>` : '';
      return `<li><span class="ziffer">${i + 1}</span>${bild}${text ? `<span>${fmt(text)}</span>` : ''}</li>`;
    }).join('');
    return `${titel ? `<p class="untertitel">${esc(titel)}</p>` : ''}<ol class="optionen${mitBild ? ' bilder' : ''}">${eintraege}</ol>`;
  }

  function renderItems(a) {
    if (!a.items) return '';
    const eintraege = a.items.map((item, i) => `<li><span class="buchstabe">${BUCHSTABEN[i]})</span><span>${fmt(item.text)}</span></li>`).join('');
    return `${a.itemsTitel ? `<p class="untertitel">${esc(a.itemsTitel)}</p>` : ''}<ol class="items">${eintraege}</ol>`;
  }

  function renderKaestchen(a, antwort, ergebnis) {
    const werte = antwort || [];
    const mitBuchstaben = a.typ === 'zuordnung' || a.typ === 'reihenfolge';
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
        ${a.kasten ? renderKasten(a.kasten) : ''}
        ${a.frage ? `<p class="frage">${fmt(a.frage)}</p>` : ''}
        ${a.anweisung ? `<p class="anweisung">${fmt(a.anweisung)}</p>` : ''}
        ${a.einleitung ? `<p class="einleitung">${fmt(a.einleitung)}</p>` : ''}
        ${renderOptionen(a.optionen, a.optionenTitel)}
        ${renderItems(a)}
        ${renderKaestchen(a, o.antwort, o.ergebnis)}
        ${o.ergebnis ? renderRueckmeldung(a, o.ergebnis) : ''}
        ${o.pruefen ? `<div class="aktionen"><button class="btn primaer" data-aktion="pruefen">Antwort prüfen</button><span class="klein">oder Enter</span></div>` : ''}
      </section>`;
  }

  function renderAusgangssituation(satz) {
    return `<div class="situation ausgang"><h4>Ausgangssituation</h4>${absaetze(satz.ausgangssituation)}</div>`;
  }

  // Ganzer Aufgabenbogen, Situationen jeweils vor der ersten zugehörigen Aufgabe
  function renderBogen(satz, antworten, mitErgebnis) {
    let html = renderAusgangssituation(satz);
    let letzteSituation = null;
    for (const a of satz.aufgaben) {
      const sit = situationFuer(satz, a.nr);
      if (sit && sit !== letzteSituation) html += renderSituation(sit);
      letzteSituation = sit;
      const antwort = antworten[a.nr];
      html += renderAufgabe(satz, a, { antwort, ergebnis: mitErgebnis ? B.pruefeAufgabe(a, antwort) : null });
    }
    return html;
  }

  // ---------- Startseite ----------

  function themenZaehler() {
    const zaehler = {};
    SAETZE.forEach(s => s.aufgaben.forEach(a => { zaehler[a.thema] = (zaehler[a.thema] || 0) + 1; }));
    return zaehler;
  }

  function ansichtStart() {
    stoppeTimer();
    zustand = { ansicht: 'start' };
    const name = speicher.lesen(S_NAME, '');
    const laufend = speicher.lesen(S_LAUFEND, null);
    const laufenderSatz = laufend && satzById(laufend.satzId);
    const ergebnisse = speicher.lesen(S_ERGEBNISSE, []);
    const zaehler = themenZaehler();

    const saetzeHtml = SAETZE.map(s => `
      <li>
        <div><strong>${esc(s.titel)}</strong><span class="klein">${esc(s.untertitel || '')} · ${s.aufgaben.length} Aufgaben</span></div>
        <div class="knoepfe">
          <button class="btn primaer" data-aktion="deckblatt" data-satz="${esc(s.id)}">Prüfung starten</button>
          <button class="btn" data-aktion="satz-ueben" data-satz="${esc(s.id)}">Üben</button>
        </div>
      </li>`).join('');

    const themenHtml = Object.keys(THEMEN).filter(k => zaehler[k]).map(k => `
      <li><button class="thema" data-aktion="thema" data-thema="${esc(k)}">${esc(THEMEN[k])}<span class="anzahl">${zaehler[k]}</span></button></li>`).join('');

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

    zeige(`
      <header class="kopf"><h1>WiSo-Trainer</h1><p>Abschlussprüfung Teil 2 · IT-Berufe · Wirtschafts- und Sozialkunde</p></header>
      <main class="start">
        ${laufenderSatz ? `
          <div class="banner">
            <span>Angefangene Prüfung: <strong>${esc(laufenderSatz.titel)}</strong></span>
            <span class="knoepfe"><button class="btn primaer" data-aktion="fortsetzen">Fortsetzen</button><button class="btn" data-aktion="verwerfen">Verwerfen</button></span>
          </div>` : ''}
        <section class="karte">
          <h2>Dein Name</h2>
          <input id="name" class="eingabe" value="${esc(name)}" placeholder="Spitzname" maxlength="30" autocomplete="nickname">
          <p class="klein">Wird nur in diesem Browser gespeichert.</p>
        </section>
        <section class="karte">
          <h2>Aufgabensätze</h2>
          <p class="klein"><strong>Prüfung starten:</strong> 30 Aufgaben, 60 Minuten, Auswertung nach IHK-Schema. <strong>Üben:</strong> Aufgabe für Aufgabe mit sofortiger Lösung.</p>
          ${SAETZE.length ? `<ul class="liste">${saetzeHtml}</ul>` : '<p>Keine Aufgabensätze gefunden.</p>'}
        </section>
        <section class="karte">
          <h2>Themen-Training</h2>
          <p class="klein">Alle Aufgaben eines Themas aus allen Sätzen nacheinander üben.</p>
          <ul class="themen">${themenHtml}</ul>
        </section>
        ${ergebnisseHtml}
      </main>`);
  }

  // ---------- Deckblatt ----------

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
          </div>
          <div class="deck-rechts">
            <h2>Bearbeitungshinweise</h2>
            <ol>
              <li>Die Aufgaben können in beliebiger Reihenfolge gelöst werden. Bei Aufgaben mit gemeinsamer Situation hältst du dich am besten an die vorgegebene Reihenfolge.</li>
              <li>Trage in die Lösungskästchen die <strong>Kennziffern der richtigen Antworten</strong> ein, bei offenen Aufgaben das <strong>Ergebnis</strong>.</li>
              <li>Die <strong>Anzahl der Kästchen</strong> zeigt, wie viele Ziffern verlangt sind. Bei Zuordnungs- und Reihenfolgeaufgaben gehört in jedes Kästchen genau eine Ziffer.</li>
              <li>Beträge gibst du mit zwei Nachkommastellen an (z. B. 1.250,00), Datumsangaben im Format TT.MM.JJJJ.</li>
              <li>Erlaubtes Hilfsmittel ist ein nicht programmierbarer Taschenrechner. Rechnest du mit einem gerundeten Ergebnis weiter, dann nur mit diesem.</li>
              <li>Die Zeit läuft ab dem Start. Nach ${PRUEFUNGSDAUER_MIN} Minuten wird automatisch abgegeben. Du kannst zwischendurch zur Startseite wechseln, die Zeit läuft weiter.</li>
              <li>Bewertet wird wie bei der IHK: Jede Aufgabe zählt gleich viel. Mehrteilige Aufgaben werden anteilig bewertet, alle übrigen nur bei vollständig richtiger Lösung.</li>
            </ol>
          </div>
        </div>
        <div class="aktionen mitte">
          <button class="btn" data-aktion="start">Zurück</button>
          <button class="btn primaer gross" data-aktion="beginnen" data-satz="${esc(satz.id)}">Prüfung beginnen</button>
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
    const satz = laufend && satzById(laufend.satzId);
    if (!satz) return ansichtStart();
    zustand = { ansicht: 'pruefung', modus: 'pruefung', satz, antworten: laufend.antworten || {}, startZeit: laufend.startZeit };
    ansichtPruefung();
  }

  function sichereLaufend() {
    speicher.schreiben(S_LAUFEND, { satzId: zustand.satz.id, antworten: zustand.antworten, startZeit: zustand.startZeit });
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
    const ende = Math.min(Date.now(), startZeit + PRUEFUNGSDAUER_MIN * 60000);
    const ergebnis = {
      id: Date.now().toString(36),
      satzId: satz.id,
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
    const satz = satzById(ergebnis.satzId);
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
        <td class="klein">${esc(THEMEN[aufgabe.thema] || aufgabe.thema)}</td>
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
  }

  function pruefeUebung() {
    const eintrag = zustand.liste[zustand.index];
    const a = aufgabeById(zustand.satz, eintrag.nr);
    zustand.anteile[zustand.index] = B.pruefeAufgabe(a, zustand.antworten[a.nr]).anteil;
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
    SAETZE.forEach(s => s.aufgaben.forEach(a => { if (a.thema === thema) liste.push({ satzId: s.id, nr: a.nr }); }));
    return liste;
  }

  // ---------- Eingabe in die Lösungskästchen ----------

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
    if (zustand.modus === 'pruefung') {
      sichereLaufend();
      aktualisiereBogen();
    }
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
    if (e.key === 'Enter' && zustand.ansicht === 'uebung' && !(el.tagName === 'BUTTON')) {
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
      case 'deckblatt':
        ansichtDeckblatt(satzById(d.satz));
        break;
      case 'beginnen':
        beginnePruefung(satzById(d.satz));
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
          .map(a => ({ satzId: satz.id, nr: a.nr }));
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
      case 'pruefen':
        pruefeUebung();
        break;
      case 'weiter':
        naechsteUebung();
        break;
      case 'falsche-wiederholen':
        starteUebung(zustand.falsche, zustand.titel);
        break;
      default:
        break;
    }
  });

  ansichtStart();
})();
