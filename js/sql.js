// Kleine SQL-Engine für den SQL-Trainer: führt Musterlösung und Eingabe auf den Beispieltabellen aus und vergleicht,
// ob beide dasselbe bewirken (Ergebnismenge, Tabelleninhalt bzw. Tabellenstruktur).
(function () {
  'use strict';

  class SqlFehler extends Error {
    constructor(meldung, art) {
      super(meldung);
      this.art = art || 'fehler'; // 'fehler' = Fehler in der Anweisung, 'unbekannt' = vom Trainer nicht unterstützt
    }
  }

  // ---------- Zerlegen in Tokens ----------

  const RESERVIERT = new Set(('select from where group by having order join inner left right full outer cross natural on using as ' +
    'and or not null is in like between exists case when then else end union intersect except minus all distinct insert into ' +
    'values update set delete create table view alter add drop limit offset top asc desc primary key foreign references default ' +
    'unique check constraint true false any some index truncate column modify fetch escape').split(' '));

  // Bewertet wird nach Standard-SQL, wie es die IHK-Prüfung verwendet; herstellerspezifische Schreibweisen gelten als falsch
  const STD = 'Kein Standard-SQL (IHK): ';

  const STANDARD_TYPEN = new Set(['int', 'integer', 'smallint', 'bigint', 'decimal', 'numeric', 'dec', 'float', 'real', 'double',
    'varchar', 'char', 'character', 'clob', 'date', 'time', 'timestamp', 'boolean']);
  const TYP_ERSATZ = {
    text: 'VARCHAR(n)', longtext: 'VARCHAR(n)', mediumtext: 'VARCHAR(n)', nvarchar: 'VARCHAR(n)', varchar2: 'VARCHAR(n)', nvarchar2: 'VARCHAR(n)',
    datetime: 'TIMESTAMP', tinyint: 'SMALLINT oder INTEGER', mediumint: 'INTEGER', bit: 'BOOLEAN', bool: 'BOOLEAN',
    number: 'INTEGER oder DECIMAL(p,s)', money: 'DECIMAL(p,s)'
  };

  // Herstellerspezifische Funktionen und ihre Entsprechung in Standard-SQL
  const FUNKTION_ERSATZ = {
    ifnull: 'COALESCE(Wert, Ersatz)', isnull: 'COALESCE(Wert, Ersatz) bzw. IS NULL', nvl: 'COALESCE(Wert, Ersatz)',
    iif: 'CASE WHEN … THEN … ELSE … END', if: 'CASE WHEN … THEN … ELSE … END', decode: 'CASE WHEN … THEN … ELSE … END',
    now: 'CURRENT_DATE', getdate: 'CURRENT_DATE', curdate: 'CURRENT_DATE', sysdate: 'CURRENT_DATE',
    len: 'CHAR_LENGTH(Text)', length: 'CHAR_LENGTH(Text)', ucase: 'UPPER(Text)', lcase: 'LOWER(Text)',
    mid: 'SUBSTRING(Text FROM Start FOR Länge)', substr: 'SUBSTRING(Text FROM Start FOR Länge)',
    left: 'SUBSTRING(Text FROM 1 FOR n)', right: 'SUBSTRING(…)',
    concat: 'Text1 || Text2', concat_ws: 'Text1 || Text2', ltrim: 'TRIM(LEADING FROM Text)', rtrim: 'TRIM(TRAILING FROM Text)',
    datediff: 'eine Rechnung mit Datumswerten (herstellerspezifisch, in der Prüfung nur mit vorgegebener Funktion)'
  };

  function zerlege(text) {
    // Typografische Anführungszeichen (z. B. von der Handy-Tastatur) wie normale behandeln
    const s = String(text).replace(/[‘’‚‛]/g, "'").replace(/[“”„‟]/g, '"');
    const tokens = [];
    let i = 0;
    const bisZeichen = (zu, meldung) => {
      let wert = '';
      let j = i + 1;
      for (;;) {
        if (j >= s.length) throw new SqlFehler(meldung);
        if (s[j] === zu) { if (s[j + 1] === zu) { wert += zu; j += 2; continue; } break; }
        wert += s[j++];
      }
      i = j + 1;
      return wert;
    };
    while (i < s.length) {
      const c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      if (c === '-' && s[i + 1] === '-') { while (i < s.length && s[i] !== '\n') i++; continue; }
      if (c === '/' && s[i + 1] === '*') { const e = s.indexOf('*/', i + 2); i = e < 0 ? s.length : e + 2; continue; }
      if (c === "'") {
        tokens.push({ t: 'text', v: bisZeichen("'", 'Eine Zeichenkette ist nicht geschlossen – es fehlt ein Anführungszeichen.') });
        continue;
      }
      if (c === '"') {
        // In Standard-SQL bezeichnen doppelte Anführungszeichen Namen, keine Texte
        const v = bisZeichen('"', 'Ein Name in doppelten Anführungszeichen ist nicht geschlossen.');
        tokens.push({ t: 'name', v, k: v.toLowerCase(), quotiert: true, doppelt: true });
        continue;
      }
      if (c === '`' || c === '[') {
        throw new SqlFehler(STD + c + '…' + (c === '[' ? ']' : '`') + ' um Namen gibt es nur in ' + (c === '[' ? 'SQL Server' : 'MySQL') + ' – schreibe Tabellen- und Spaltennamen ohne Zeichen drumherum.');
      }
      const zahl = /^(\d+(\.\d+)?|\.\d+)/.exec(s.slice(i));
      if (zahl) { tokens.push({ t: 'zahl', v: Number(zahl[0]), roh: zahl[0] }); i += zahl[0].length; continue; }
      const wort = /^[A-Za-zÄÖÜäöüß_][\wÄÖÜäöüß$]*/.exec(s.slice(i));
      if (wort) { tokens.push({ t: 'name', v: wort[0], k: wort[0].toLowerCase() }); i += wort[0].length; continue; }
      const zwei = s.slice(i, i + 2);
      if (zwei === '!=') throw new SqlFehler(STD + 'Ungleich heißt in SQL <>, nicht !=.');
      if (zwei === '==') throw new SqlFehler('== gibt es in SQL nicht – verglichen wird mit einem einfachen =.');
      if (['<=', '>=', '<>', '||'].includes(zwei)) { tokens.push({ t: 'op', v: zwei }); i += 2; continue; }
      if (c === '%') throw new SqlFehler(STD + '% als Rechenzeichen gibt es nicht – verwende MOD(a, b). Als Platzhalter steht % nur innerhalb eines LIKE-Musters in Anführungszeichen.');
      if ('=<>+-*/(),.;'.includes(c)) { tokens.push({ t: 'op', v: c }); i++; continue; }
      throw new SqlFehler('Unerwartetes Zeichen „' + c + '“.');
    }
    tokens.push({ t: 'ende' });
    return tokens;
  }

  // ---------- Parser ----------

  function parse(text) {
    const tk = zerlege(text);
    let p = 0;

    const jetzt = () => tk[p];
    const danach = (n) => tk[p + (n || 1)] || tk[tk.length - 1];
    const istWort = (...w) => jetzt().t === 'name' && !jetzt().quotiert && w.includes(jetzt().k);
    const istOp = (v) => jetzt().t === 'op' && jetzt().v === v;
    function zeige(t) {
      if (t.t === 'ende') return 'dem Ende der Anweisung';
      if (t.t === 'text') return "„'" + t.v + "'“";
      return '„' + (t.roh || t.v) + '“';
    }
    function fehler(erwartet) {
      throw new SqlFehler('Syntaxfehler bei ' + zeige(jetzt()) + (erwartet ? ' – erwartet wird ' + erwartet + '.' : '.'));
    }
    function nimm(w) { if (!istWort(w)) fehler(w.toUpperCase()); p++; }
    function vielleicht(w) { if (istWort(w)) { p++; return true; } return false; }
    function op(v) { if (!istOp(v)) fehler('„' + v + '“'); p++; }
    function vielleichtOp(v) { if (istOp(v)) { p++; return true; } return false; }
    function name(was) {
      const t = jetzt();
      if (t.t === 'name' && (t.quotiert || !RESERVIERT.has(t.k))) { p++; return t.v; }
      fehler(was || 'ein Name');
    }
    function istName() { const t = jetzt(); return t.t === 'name' && (t.quotiert || !RESERVIERT.has(t.k)); }
    function ganzzahl() {
      const t = jetzt();
      if (t.t !== 'zahl') fehler('eine Zahl');
      p++;
      return t.v;
    }

    function anweisung() {
      let a;
      if (istWort('select') || istOp('(')) a = abfrage();
      else if (istWort('insert')) a = einfuegen();
      else if (istWort('update')) a = aendern();
      else if (istWort('delete')) a = loeschen();
      else if (istWort('create')) a = erstellen();
      else if (istWort('alter')) a = alterTable();
      else if (istWort('drop')) a = entfernen();
      else if (istWort('truncate')) { p++; vielleicht('table'); a = { art: 'truncate', tabelle: name('einen Tabellennamen') }; }
      else fehler('SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER oder DROP');
      while (vielleichtOp(';'));
      if (jetzt().t !== 'ende') {
        if (istWort('select', 'insert', 'update', 'delete', 'create', 'alter', 'drop')) throw new SqlFehler('Bitte nur eine einzige SQL-Anweisung eingeben.');
        fehler();
      }
      return a;
    }

    // SELECT … [ORDER BY …] [OFFSET …] [FETCH …]
    function abfrage() {
      const koerper = kern();
      // Mengenoperationen kommen in den IHK-Prüfungen nicht vor
      if (istWort('union', 'intersect', 'except', 'minus')) {
        throw new SqlFehler('Nicht im IHK-SQL: ' + jetzt().k.toUpperCase() + ' wird in der Prüfung nicht verwendet. Formuliere die Abfrage mit JOIN, IN/EXISTS oder OR.');
      }
      let sortierung = null;
      if (vielleicht('order')) {
        nimm('by');
        sortierung = [];
        do {
          const ausdruck = ausdr();
          let ab = false;
          if (vielleicht('desc')) ab = true; else vielleicht('asc');
          sortierung.push({ ausdruck, ab });
        } while (vielleichtOp(','));
      }
      let limit = null, offset = null;
      if (istWort('limit')) throw new SqlFehler(STD + 'LIMIT gibt es nur in einzelnen Datenbanksystemen (z. B. MySQL). Standard-SQL: FETCH FIRST n ROWS ONLY.');
      if (vielleicht('offset')) {
        offset = ganzzahl();
        if (jetzt().t === 'name' && ['rows', 'row'].includes(jetzt().k)) p++;
      }
      if (vielleicht('fetch')) {
        p++; // FIRST / NEXT
        limit = ganzzahl();
        p++; // ROWS
        if (jetzt().t === 'name' && jetzt().k === 'only') p++;
      }
      return { art: 'abfrage', koerper, sortierung, limit, offset };
    }

    function kern() {
      if (vielleichtOp('(')) {
        const a = abfrage();
        op(')');
        return { art: 'klammer', abfrage: a };
      }
      nimm('select');
      let distinct = false;
      if (vielleicht('distinct')) distinct = true; else vielleicht('all');
      if (istWort('top')) throw new SqlFehler(STD + 'TOP gibt es nur in SQL Server. Standard-SQL: … ORDER BY … FETCH FIRST n ROWS ONLY.');
      const top = null;
      const spalten = [];
      do spalten.push(auswahlSpalte()); while (vielleichtOp(','));
      let von = [];
      if (vielleicht('from')) { do von.push(tabellenRef()); while (vielleichtOp(',')); }
      const wo = vielleicht('where') ? ausdr() : null;
      let gruppe = [];
      if (vielleicht('group')) { nimm('by'); do gruppe.push(ausdr()); while (vielleichtOp(',')); }
      const having = vielleicht('having') ? ausdr() : null;
      return { art: 'select', distinct, top, spalten, von, wo, gruppe, having };
    }

    function alias() {
      const textAlias = () => { throw new SqlFehler(STD + 'Ein Alias steht nicht in einfachen Anführungszeichen – schreibe AS Name (mit Leer- oder Sonderzeichen: AS "Name").'); };
      if (vielleicht('as')) {
        if (jetzt().t === 'text') textAlias();
        return name('einen Alias-Namen');
      }
      if (jetzt().t === 'text') textAlias();
      if (istName()) return name();
      return null;
    }

    function auswahlSpalte() {
      if (istOp('*')) { p++; return { stern: true }; }
      if (jetzt().t === 'name' && danach().t === 'op' && danach().v === '.' && danach(2).t === 'op' && danach(2).v === '*') {
        const t = jetzt().v;
        p += 3;
        return { stern: true, tabelle: t };
      }
      const ausdruck = ausdr();
      const a = alias();
      return { ausdruck, alias: a };
    }

    function tabellenRef() {
      let links = tabellenPrimaer();
      for (;;) {
        let typ = null, natuerlich = false;
        if (vielleicht('natural')) natuerlich = true;
        if (istWort('join')) typ = 'inner';
        else if (istWort('inner')) { p++; typ = 'inner'; }
        else if (istWort('left', 'right', 'full')) { typ = jetzt().k; p++; vielleicht('outer'); }
        else if (istWort('cross')) { p++; typ = 'cross'; }
        if (!typ) { if (natuerlich) fehler('JOIN'); break; }
        nimm('join');
        const rechts = tabellenPrimaer();
        let bedingung = null, using = null;
        if (vielleicht('on')) bedingung = ausdr();
        else if (vielleicht('using')) {
          op('(');
          using = [];
          do using.push(name('einen Spaltennamen')); while (vielleichtOp(','));
          op(')');
        } else if (typ !== 'cross' && !natuerlich) fehler('ON mit der Verknüpfungsbedingung');
        links = { art: 'join', typ, natuerlich, links, rechts, bedingung, using };
      }
      return links;
    }

    function tabellenPrimaer() {
      if (vielleichtOp('(')) {
        if (istWort('select') || istOp('(')) {
          const a = abfrage();
          op(')');
          const al = alias();
          if (!al) throw new SqlFehler('Eine Unterabfrage im FROM-Teil braucht einen Namen (Alias), z. B. (SELECT …) AS sub.');
          return { art: 'unterabfrage', abfrage: a, alias: al };
        }
        const r = tabellenRef();
        op(')');
        return r;
      }
      const t = name('einen Tabellennamen');
      return { art: 'tabelle', name: t, alias: alias() };
    }

    // ---------- Ausdrücke ----------

    function ausdr() { return oder(); }
    function oder() {
      let l = und();
      while (vielleicht('or')) l = { art: 'oder', l, r: und() };
      return l;
    }
    function und() {
      let l = nicht();
      while (vielleicht('and')) l = { art: 'und', l, r: nicht() };
      return l;
    }
    function nicht() {
      if (vielleicht('not')) return { art: 'nicht', a: nicht() };
      return vergleich();
    }
    function vergleich() {
      let l = addition();
      for (;;) {
        if (jetzt().t === 'op' && ['=', '<>', '!=', '<', '>', '<=', '>='].includes(jetzt().v)) {
          const o = jetzt().v === '!=' ? '<>' : jetzt().v;
          p++;
          if (istWort('any', 'some', 'all')) {
            const quant = jetzt().k === 'all' ? 'all' : 'any';
            p++;
            op('(');
            const a = abfrage();
            op(')');
            l = { art: 'quant', op: o, quant, l, abfrage: a };
          } else {
            l = { art: 'vgl', op: o, l, r: addition() };
          }
          continue;
        }
        if (istWort('is')) {
          p++;
          const neg = vielleicht('not');
          if (vielleicht('null')) { l = { art: 'istnull', neg, a: l }; continue; }
          fehler('NULL');
        }
        let neg = false;
        if (istWort('not') && danach().t === 'name' && ['in', 'like', 'between'].includes(danach().k)) { p++; neg = true; }
        if (vielleicht('in')) {
          op('(');
          if (istWort('select')) { const a = abfrage(); op(')'); l = { art: 'in', neg, a: l, abfrage: a }; continue; }
          const liste = [];
          do liste.push(ausdr()); while (vielleichtOp(','));
          op(')');
          l = { art: 'in', neg, a: l, liste };
          continue;
        }
        if (vielleicht('like')) {
          const muster = addition();
          let esc = null;
          if (vielleicht('escape')) esc = addition();
          l = { art: 'like', neg, a: l, muster, esc };
          continue;
        }
        if (vielleicht('between')) {
          const von = addition();
          nimm('and');
          l = { art: 'between', neg, a: l, von, bis: addition() };
          continue;
        }
        if (neg) fehler('IN, LIKE oder BETWEEN');
        return l;
      }
    }
    function addition() {
      let l = multiplikation();
      while (jetzt().t === 'op' && ['+', '-', '||'].includes(jetzt().v)) {
        const o = jetzt().v;
        p++;
        l = { art: 'rechnen', op: o, l, r: multiplikation() };
      }
      return l;
    }
    function multiplikation() {
      let l = unaer();
      while (jetzt().t === 'op' && ['*', '/', '%'].includes(jetzt().v)) {
        const o = jetzt().v;
        p++;
        l = { art: 'rechnen', op: o, l, r: unaer() };
      }
      return l;
    }
    function unaer() {
      if (vielleichtOp('-')) return { art: 'neg', a: unaer() };
      if (vielleichtOp('+')) return unaer();
      return primaer();
    }
    function primaer() {
      const t = jetzt();
      if (t.t === 'zahl') { p++; return { art: 'wert', v: t.v }; }
      if (t.t === 'text') { p++; return { art: 'wert', v: t.v }; }
      if (t.t === 'op' && t.v === '(') {
        p++;
        if (istWort('select')) { const a = abfrage(); op(')'); return { art: 'skalar', abfrage: a }; }
        const a = ausdr();
        op(')');
        return a;
      }
      if (t.t !== 'name') fehler('einen Wert, eine Spalte oder eine Funktion');
      if (!t.quotiert) {
        if (t.k === 'null') { p++; return { art: 'wert', v: null }; }
        if (t.k === 'true' || t.k === 'false') { p++; return { art: 'wert', v: t.k === 'true' ? 1 : 0 }; }
        if (t.k === 'case') return fall();
        if (t.k === 'exists') { p++; op('('); const a = abfrage(); op(')'); return { art: 'exists', abfrage: a }; }
        if (t.k === 'date' && danach().t === 'text') { p += 2; return { art: 'wert', v: tk[p - 1].v }; }
        if (t.k === 'cast' && danach().t === 'op' && danach().v === '(') {
          p += 2;
          const a = ausdr();
          nimm('as');
          const typ = datentyp();
          op(')');
          return { art: 'cast', a, typ };
        }
        if (['current_date', 'current_timestamp', 'sysdate'].includes(t.k) && !(danach().t === 'op' && danach().v === '(')) {
          p++;
          return { art: 'funktion', name: t.k, argumente: [] };
        }
      }
      if (!t.quotiert && t.k === 'extract' && danach().t === 'op' && danach().v === '(') {
        p += 2;
        const feld = jetzt();
        if (feld.t !== 'name' || !['year', 'month', 'day'].includes(feld.k)) fehler('YEAR, MONTH oder DAY');
        p++;
        nimm('from');
        const a = ausdr();
        op(')');
        return { art: 'funktion', name: feld.k, anzeige: 'EXTRACT', argumente: [a], distinct: false, stern: false };
      }
      if (!t.quotiert && t.k === 'substring' && danach().t === 'op' && danach().v === '(') {
        p += 2;
        const args = [ausdr()];
        if (vielleicht('from')) {
          args.push(ausdr());
          if (jetzt().t === 'name' && jetzt().k === 'for') { p++; args.push(ausdr()); }
        } else {
          while (vielleichtOp(',')) args.push(ausdr());
        }
        op(')');
        return { art: 'funktion', name: 'substring', anzeige: 'SUBSTRING', argumente: args, distinct: false, stern: false };
      }
      if (danach().t === 'op' && danach().v === '(' && (t.quotiert || !RESERVIERT.has(t.k) || ['left', 'right', 'replace'].includes(t.k))) {
        p += 2;
        const f = { art: 'funktion', name: t.k, anzeige: t.v, argumente: [], distinct: false, stern: false };
        if (vielleichtOp(')')) return f;
        if (istOp('*')) { p++; f.stern = true; op(')'); return f; }
        if (vielleicht('distinct')) f.distinct = true; else vielleicht('all');
        do f.argumente.push(ausdr()); while (vielleichtOp(','));
        op(')');
        return f;
      }
      if (!t.quotiert && RESERVIERT.has(t.k)) fehler('einen Wert, eine Spalte oder eine Funktion');
      p++;
      if (istOp('.')) {
        p++;
        const sp = jetzt();
        if (sp.t !== 'name') fehler('einen Spaltennamen nach dem Punkt');
        p++;
        return { art: 'spalte', tabelle: t.v, name: sp.v, doppelt: !!(t.doppelt || sp.doppelt) };
      }
      return { art: 'spalte', tabelle: null, name: t.v, doppelt: !!t.doppelt };
    }
    function fall() {
      nimm('case');
      const basis = istWort('when') ? null : ausdr();
      const zweige = [];
      while (vielleicht('when')) {
        const wenn = ausdr();
        nimm('then');
        zweige.push({ wenn, dann: ausdr() });
      }
      if (!zweige.length) fehler('WHEN');
      const sonst = vielleicht('else') ? ausdr() : null;
      nimm('end');
      return { art: 'fall', basis, zweige, sonst };
    }

    // ---------- Datenänderung ----------

    function einfuegen() {
      nimm('insert');
      if (!vielleicht('into')) throw new SqlFehler(STD + 'Es heißt INSERT INTO Tabelle … – das INTO darf nicht fehlen.');
      const tabelle = name('einen Tabellennamen');
      let spalten = null;
      if (istOp('(') && !(danach().t === 'name' && danach().k === 'select')) {
        p++;
        spalten = [];
        do spalten.push(name('einen Spaltennamen')); while (vielleichtOp(','));
        op(')');
      }
      if (vielleicht('values')) {
        const zeilen = [];
        do {
          op('(');
          const z = [];
          do z.push(ausdr()); while (vielleichtOp(','));
          op(')');
          zeilen.push(z);
        } while (vielleichtOp(','));
        return { art: 'insert', tabelle, spalten, zeilen };
      }
      if (istWort('select') || istOp('(')) return { art: 'insert', tabelle, spalten, abfrage: abfrage() };
      return fehler('VALUES oder SELECT');
    }

    function aendern() {
      nimm('update');
      const tabelle = name('einen Tabellennamen');
      const al = istWort('set') ? null : alias();
      nimm('set');
      const zuweisungen = [];
      do {
        const sp = name('einen Spaltennamen');
        if (istOp('.')) throw new SqlFehler(STD + 'Hinter SET steht nur der Spaltenname, ohne Tabelle oder Alias davor (SET Spalte = Wert).');
        op('=');
        zuweisungen.push({ spalte: sp, ausdruck: ausdr() });
      } while (vielleichtOp(','));
      const wo = vielleicht('where') ? ausdr() : null;
      return { art: 'update', tabelle, alias: al, zuweisungen, wo };
    }

    function loeschen() {
      nimm('delete');
      if (!vielleicht('from')) throw new SqlFehler(STD + 'Es heißt DELETE FROM Tabelle … – das FROM darf nicht fehlen.');
      const tabelle = name('einen Tabellennamen');
      const al = istWort('where') ? null : alias();
      const wo = vielleicht('where') ? ausdr() : null;
      return { art: 'delete', tabelle, alias: al, wo };
    }

    // ---------- Datendefinition ----------

    function datentyp() {
      const t = jetzt();
      if (t.t !== 'name') fehler('einen Datentyp');
      if (TYP_ERSATZ[t.k]) throw new SqlFehler(STD + t.v.toUpperCase() + ' ist kein Standard-Datentyp – verwende ' + TYP_ERSATZ[t.k] + '.');
      if (!STANDARD_TYPEN.has(t.k)) fehler('einen Datentyp wie INTEGER, DECIMAL(p,s), VARCHAR(n), CHAR(n), DATE oder BOOLEAN');
      p++;
      let typ = t.k;
      if (typ === 'double' && jetzt().t === 'name' && jetzt().k === 'precision') p++;
      if (typ === 'character' && jetzt().t === 'name' && jetzt().k === 'varying') { p++; typ = 'varchar'; }
      const parameter = [];
      if (vielleichtOp('(')) {
        do parameter.push(ganzzahl()); while (vielleichtOp(','));
        op(')');
      }
      while (jetzt().t === 'name' && ['unsigned', 'signed'].includes(jetzt().k)) p++;
      return { typ, parameter };
    }

    function namensListe() {
      op('(');
      const l = [];
      do {
        l.push(name('einen Spaltennamen'));
        if (!vielleicht('asc')) vielleicht('desc');
      } while (vielleichtOp(','));
      op(')');
      return l;
    }

    function referenzAktionen() {
      while (istWort('on') && danach().t === 'name' && ['delete', 'update'].includes(danach().k)) {
        p += 2;
        if (vielleicht('set')) { if (!vielleicht('null')) nimm('default'); }
        else if (jetzt().t === 'name' && ['cascade', 'restrict'].includes(jetzt().k)) p++;
        else if (jetzt().t === 'name' && jetzt().k === 'no') { p++; p++; }
        else fehler('CASCADE, SET NULL, RESTRICT oder NO ACTION');
      }
    }

    function tabellenBedingung() {
      vielleicht('constraint') && istName() && !istWort('primary', 'foreign', 'unique', 'check') && name();
      if (vielleicht('primary')) { nimm('key'); return { art: 'pk', spalten: namensListe() }; }
      if (vielleicht('unique')) { vielleicht('key'); return { art: 'unique', spalten: namensListe() }; }
      if (vielleicht('foreign')) {
        nimm('key');
        const spalten = namensListe();
        nimm('references');
        const ziel = name('einen Tabellennamen');
        const zielSpalten = istOp('(') ? namensListe() : null;
        referenzAktionen();
        return { art: 'fk', spalten, ziel, zielSpalten };
      }
      if (vielleicht('check')) { op('('); const a = ausdr(); op(')'); return { art: 'check', ausdruck: a }; }
      return fehler('PRIMARY KEY, FOREIGN KEY, UNIQUE oder CHECK');
    }

    function istTabellenBedingung() {
      return istWort('constraint', 'primary', 'foreign', 'check') || (istWort('unique') && danach().t === 'op' && danach().v === '(');
    }

    function spaltenDefinition() {
      const def = { name: name('einen Spaltennamen'), typ: datentyp(), pk: false, nn: false, unique: false, standard: undefined, fk: null, check: null };
      for (;;) {
        if (vielleicht('constraint')) { name(); continue; }
        if (vielleicht('primary')) { nimm('key'); def.pk = true; continue; }
        if (istWort('not') && danach().t === 'name' && danach().k === 'null') { p += 2; def.nn = true; continue; }
        if (vielleicht('null')) continue;
        if (vielleicht('unique')) { vielleicht('key'); def.unique = true; continue; }
        if (vielleicht('default')) { def.standard = unaer(); continue; }
        if (vielleicht('references')) {
          const ziel = name('einen Tabellennamen');
          const zielSpalten = istOp('(') ? namensListe() : null;
          referenzAktionen();
          def.fk = { spalten: [def.name], ziel, zielSpalten };
          continue;
        }
        if (vielleicht('check')) { op('('); def.check = ausdr(); op(')'); continue; }
        if (jetzt().t === 'name' && ['auto_increment', 'autoincrement', 'identity'].includes(jetzt().k)) {
          throw new SqlFehler(STD + jetzt().v.toUpperCase() + ' ist herstellerspezifisch (MySQL bzw. SQL Server) und gehört nicht in die Lösung.');
        }
        break;
      }
      return def;
    }

    function erstellen() {
      nimm('create');
      if (istWort('or')) throw new SqlFehler(STD + 'CREATE OR REPLACE gibt es nur in einzelnen Datenbanksystemen.');
      if (vielleicht('table')) {
        if (jetzt().t === 'name' && jetzt().k === 'if') { p++; nimm('not'); nimm('exists'); }
        const tabelle = name('einen Tabellennamen');
        op('(');
        const spalten = [], bedingungen = [];
        do {
          if (istTabellenBedingung()) bedingungen.push(tabellenBedingung());
          else spalten.push(spaltenDefinition());
        } while (vielleichtOp(','));
        op(')');
        return { art: 'createTable', tabelle, spalten, bedingungen };
      }
      if (vielleicht('view')) {
        const view = name('einen View-Namen');
        const spalten = istOp('(') ? namensListe() : null;
        nimm('as');
        return { art: 'createView', view, spalten, abfrage: abfrage() };
      }
      const eindeutig = vielleicht('unique');
      if (vielleicht('index')) {
        const index = name('einen Indexnamen');
        nimm('on');
        const tabelle = name('einen Tabellennamen');
        return { art: 'createIndex', index, tabelle, spalten: namensListe(), eindeutig };
      }
      return fehler('TABLE, VIEW oder INDEX');
    }

    function alterTable() {
      nimm('alter');
      nimm('table');
      const tabelle = name('einen Tabellennamen');
      const aktionen = [];
      do {
        if (vielleicht('add')) {
          vielleicht('column');
          if (istTabellenBedingung()) aktionen.push({ art: 'bedingung', bedingung: tabellenBedingung() });
          else aktionen.push({ art: 'addSpalte', def: spaltenDefinition() });
        } else if (vielleicht('drop')) {
          if (vielleicht('primary')) { nimm('key'); aktionen.push({ art: 'dropPk' }); }
          else if (istWort('constraint', 'foreign', 'index')) throw new SqlFehler('Das Entfernen benannter Constraints unterstützt der Trainer nicht.', 'unbekannt');
          else { vielleicht('column'); aktionen.push({ art: 'dropSpalte', spalte: name('einen Spaltennamen') }); }
        } else if (istWort('modify') || (jetzt().t === 'name' && jetzt().k === 'change')) {
          throw new SqlFehler(STD + jetzt().v.toUpperCase() + ' gibt es nur in MySQL bzw. Oracle. Standard-SQL: ALTER TABLE … ALTER COLUMN Spalte SET DATA TYPE Typ.');
        } else if (vielleicht('alter')) {
          vielleicht('column');
          const sp = name('einen Spaltennamen');
          if (vielleicht('set')) {
            if (vielleicht('default')) aktionen.push({ art: 'setDefault', spalte: sp, standard: unaer() });
            else if (vielleicht('not')) { nimm('null'); aktionen.push({ art: 'setNn', spalte: sp, nn: true }); }
            else { if (jetzt().t === 'name' && jetzt().k === 'data') { p++; p++; } aktionen.push({ art: 'typ', spalte: sp, typ: datentyp() }); }
          } else if (vielleicht('drop')) {
            if (vielleicht('default')) aktionen.push({ art: 'setDefault', spalte: sp, standard: undefined });
            else { nimm('not'); nimm('null'); aktionen.push({ art: 'setNn', spalte: sp, nn: false }); }
          } else {
            if (jetzt().t === 'name' && jetzt().k === 'type') p++;
            const typ = datentyp();
            let nn = null;
            if (istWort('not')) { p++; nimm('null'); nn = true; } else if (vielleicht('null')) nn = false;
            aktionen.push({ art: 'typ', spalte: sp, typ, nn });
          }
        } else if (jetzt().t === 'name' && jetzt().k === 'rename') {
          p++;
          if (vielleicht('column')) {
            const alt = name('einen Spaltennamen');
            if (!(jetzt().t === 'name' && jetzt().k === 'to')) fehler('TO');
            p++;
            aktionen.push({ art: 'renameSpalte', alt, neu: name('einen Spaltennamen') });
          } else {
            if (jetzt().t === 'name' && ['to', 'as'].includes(jetzt().k)) p++;
            aktionen.push({ art: 'renameTabelle', neu: name('einen Tabellennamen') });
          }
        } else fehler('ADD, DROP, ALTER oder RENAME');
      } while (vielleichtOp(','));
      return { art: 'alter', tabelle, aktionen };
    }

    function entfernen() {
      nimm('drop');
      let was;
      if (vielleicht('table')) was = 'table';
      else if (vielleicht('view')) was = 'view';
      else if (vielleicht('index')) was = 'index';
      else fehler('TABLE, VIEW oder INDEX');
      let wennVorhanden = false;
      if (jetzt().t === 'name' && jetzt().k === 'if') { p++; nimm('exists'); wennVorhanden = true; }
      const namen = [];
      do namen.push(name('einen Namen')); while (vielleichtOp(','));
      if (vielleicht('on')) name();
      if (jetzt().t === 'name' && ['cascade', 'restrict'].includes(jetzt().k)) p++;
      return { art: 'drop', was, namen, wennVorhanden };
    }

    return anweisung();
  }

  // ---------- Werte ----------

  // Texte werden wie in Standard-SQL unter Beachtung der Groß-/Kleinschreibung verglichen ('Berlin' <> 'berlin')
  const SORTIERER = new Intl.Collator('de', { sensitivity: 'variant', numeric: false });

  function alsZahl(v) {
    if (typeof v === 'number') return v;
    if (typeof v === 'boolean') return v ? 1 : 0;
    if (typeof v === 'string' && /^\s*-?(\d+(\.\d+)?|\.\d+)\s*$/.test(v)) return Number(v);
    return null;
  }

  function vergleicheWerte(a, b) {
    if (a === null || b === null) return null;
    const na = alsZahl(a), nb = alsZahl(b);
    if (na !== null && nb !== null) return na < nb ? -1 : na > nb ? 1 : 0;
    const sa = String(a), sb = String(b);
    if (sa === sb) return 0;
    const c = SORTIERER.compare(sa, sb) || (sa < sb ? -1 : 1);
    return c < 0 ? -1 : 1;
  }

  function sortierVergleich(a, b) {
    if (a === null && b === null) return 0;
    if (a === null) return -1;
    if (b === null) return 1;
    const na = alsZahl(a), nb = alsZahl(b);
    if (na !== null && nb === null) return -1;
    if (na === null && nb !== null) return 1;
    return vergleicheWerte(a, b);
  }

  function istWahr(v) {
    if (v === null || v === undefined) return null;
    if (typeof v === 'boolean') return v;
    const n = alsZahl(v);
    return n !== null && n !== 0;
  }

  function kanon(v) {
    if (v === null || v === undefined) return '∅';
    const n = alsZahl(v);
    if (n !== null) return 'n:' + String(Math.round(n * 1e6) / 1e6);
    return 's:' + String(v);
  }

  function zeilenSchluessel(werte) { return werte.map(kanon).join('\u0001'); }

  function datumTeile(v) {
    const m = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(String(v));
    if (!m) throw new SqlFehler('„' + v + '“ ist kein Datum im Format JJJJ-MM-TT.');
    return [Number(m[1]), Number(m[2]), Number(m[3])];
  }

  function heute() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  // ---------- Datenbank ----------

  function leseZellwert(z) {
    if (z === null || z === undefined) return null;
    const s = String(z);
    if (s.toUpperCase() === 'NULL') return null;
    if (/^-?(0|[1-9]\d*)(\.\d+)?$/.test(s)) return Number(s);
    return s;
  }

  function neueSpalte(name) {
    return { name, typ: null, pk: false, nn: false, unique: false, standard: undefined, check: null };
  }

  function datenbankAus(tabellen) {
    const db = { tabellen: new Map(), views: new Map(), indizes: new Map() };
    for (const t of tabellen) {
      db.tabellen.set(t.name.toLowerCase(), {
        name: t.name,
        spalten: t.kopf.map(neueSpalte),
        fks: [],
        checks: [],
        zeilen: t.zeilen.map(z => z.map(leseZellwert))
      });
    }
    return db;
  }

  function kopiere(db) {
    const neu = { tabellen: new Map(), views: new Map(db.views), indizes: new Map(db.indizes) };
    for (const [k, t] of db.tabellen) {
      neu.tabellen.set(k, {
        name: t.name,
        spalten: t.spalten.map(s => Object.assign({}, s)),
        fks: t.fks.map(f => Object.assign({}, f)),
        checks: t.checks.slice(),
        zeilen: t.zeilen.map(z => z.slice())
      });
    }
    return neu;
  }

  function tabelle(db, name) {
    const t = db.tabellen.get(String(name).toLowerCase());
    if (!t) {
      if (db.views.has(String(name).toLowerCase())) throw new SqlFehler('„' + name + '“ ist ein View – Daten ändern geht nur in Tabellen.');
      throw new SqlFehler('Die Tabelle „' + name + '“ gibt es nicht.');
    }
    return t;
  }

  function spaltenIndex(t, name) {
    const i = t.spalten.findIndex(s => s.name.toLowerCase() === String(name).toLowerCase());
    if (i < 0) throw new SqlFehler('Die Spalte „' + name + '“ gibt es in der Tabelle „' + t.name + '“ nicht.');
    return i;
  }

  // ---------- Ausführung von Abfragen ----------

  const AGGREGATE = new Set(['count', 'sum', 'avg', 'min', 'max']);

  function enthaeltAggregat(a) {
    if (!a || typeof a !== 'object') return false;
    if (a.art === 'funktion' && AGGREGATE.has(a.name)) return true;
    // Aggregate innerhalb einer Unterabfrage gehören zur Unterabfrage
    if (a.art === 'skalar' || a.art === 'exists') return false;
    if (a.art === 'in' && a.abfrage) return enthaeltAggregat(a.a);
    if (a.art === 'quant') return enthaeltAggregat(a.l);
    for (const k of ['l', 'r', 'a', 'von', 'bis', 'muster', 'basis', 'sonst']) if (enthaeltAggregat(a[k])) return true;
    if (a.argumente && a.argumente.some(enthaeltAggregat)) return true;
    if (a.liste && a.liste.some(enthaeltAggregat)) return true;
    if (a.zweige && a.zweige.some(z => enthaeltAggregat(z.wenn) || enthaeltAggregat(z.dann))) return true;
    return false;
  }

  function textVon(a) {
    switch (a.art) {
      case 'spalte': return a.name;
      case 'wert': return a.v === null ? 'NULL' : String(a.v);
      case 'funktion': return (a.anzeige || a.name).toUpperCase() + '(' + (a.stern ? '*' : a.argumente.map(textVon).join(', ')) + ')';
      default: return '';
    }
  }

  function spaltenWert(ktx, tabellenName, name) {
    const n = String(name).toLowerCase();
    const q = tabellenName ? String(tabellenName).toLowerCase() : null;
    for (let c = ktx; c; c = c.aussen) {
      if (q) {
        const bi = c.bindungen.findIndex(b => b.name === q);
        if (bi >= 0) {
          const si = c.bindungen[bi].spalten.indexOf(n);
          if (si < 0) throw new SqlFehler('Die Spalte „' + tabellenName + '.' + name + '“ gibt es nicht.');
          const zeile = c.tupel ? c.tupel[bi] : null;
          return zeile ? zeile[si] : null;
        }
      } else {
        let treffer = null;
        for (let bi = 0; bi < c.bindungen.length; bi++) {
          const si = c.bindungen[bi].spalten.indexOf(n);
          if (si < 0) continue;
          if (treffer && !(c.using && c.using.has(n))) {
            throw new SqlFehler('Die Spalte „' + name + '“ ist mehrdeutig, weil sie in mehreren Tabellen vorkommt – schreibe Tabelle oder Alias davor (z. B. ' + c.bindungen[treffer[0]].anzeige + '.' + name + ').');
          }
          if (!treffer) treffer = [bi, si];
        }
        if (treffer) { const zeile = c.tupel ? c.tupel[treffer[0]] : null; return zeile ? zeile[treffer[1]] : null; }
      }
    }
    if (!q && ktx && ktx.aliasNamen && ktx.aliasNamen.has(n)) {
      throw new SqlFehler('„' + name + '“ ist ein Alias aus der SELECT-Liste – den darf man in WHERE, GROUP BY und HAVING nicht verwenden (nur in ORDER BY). Schreibe dort den Ausdruck selbst, z. B. COUNT(*).');
    }
    if (q) {
      const echteTabelle = ktx && ktx.bindungen.find(b => b.tabelle === q && b.name !== q);
      throw new SqlFehler('„' + tabellenName + '“ ist in dieser Abfrage nicht bekannt' +
        (echteTabelle ? ' – du hast der Tabelle den Alias „' + echteTabelle.anzeige + '“ gegeben, dann musst du auch den Alias verwenden.' : '.'));
    }
    throw new SqlFehler('Die Spalte „' + name + '“ gibt es nicht.');
  }

  function likeRegex(muster, esc) {
    let r = '';
    const s = String(muster);
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (esc && c === esc && i + 1 < s.length) { r += s[++i].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); continue; }
      if (c === '%') r += '[\\s\\S]*';
      else if (c === '_') r += '[\\s\\S]';
      else r += c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    return new RegExp('^' + r + '$');
  }

  function und3(a, b) { if (a === false || b === false) return false; if (a === null || b === null) return null; return true; }
  function oder3(a, b) { if (a === true || b === true) return true; if (a === null || b === null) return null; return false; }
  function nicht3(a) { return a === null ? null : !a; }

  function vglOp(op, c) {
    if (c === null) return null;
    switch (op) {
      case '=': return c === 0;
      case '<>': return c !== 0;
      case '<': return c < 0;
      case '>': return c > 0;
      case '<=': return c <= 0;
      case '>=': return c >= 0;
    }
    return null;
  }

  function inListe(wert, liste) {
    if (wert === null) return null;
    let unbekannt = false;
    for (const x of liste) {
      const c = vergleicheWerte(wert, x);
      if (c === 0) return true;
      if (c === null) unbekannt = true;
    }
    return unbekannt ? null : false;
  }

  function einSpaltig(erg, wo) {
    if (erg.spalten.length !== 1) throw new SqlFehler('Die Unterabfrage ' + wo + ' muss genau eine Spalte liefern, sie liefert ' + erg.spalten.length + '.');
    return erg.zeilen.map(z => z[0]);
  }

  function werte(a, ktx) {
    switch (a.art) {
      case 'wert': return a.v;
      case 'spalte':
        try {
          return spaltenWert(ktx, a.tabelle, a.name);
        } catch (e) {
          if (a.doppelt && e instanceof SqlFehler) throw new SqlFehler(e.message + ' Hinweis: Texte stehen in SQL in einfachen Anführungszeichen (\'…\'), doppelte Anführungszeichen bezeichnen Namen.');
          throw e;
        }
      case 'neg': { const v = werte(a.a, ktx); if (v === null) return null; const n = alsZahl(v); if (n === null) throw new SqlFehler('Mit Text kann nicht gerechnet werden.'); return -n; }
      case 'rechnen': {
        const l = werte(a.l, ktx), r = werte(a.r, ktx);
        if (l === null || r === null) return null;
        if (a.op === '||') return String(l) + String(r);
        const nl = alsZahl(l), nr = alsZahl(r);
        if (nl === null || nr === null) {
          if (a.op === '+') return String(l) + String(r);
          throw new SqlFehler('Mit Text kann nicht gerechnet werden („' + (nl === null ? l : r) + '“).');
        }
        switch (a.op) {
          case '+': return nl + nr;
          case '-': return nl - nr;
          case '*': return nl * nr;
          case '/': return nr === 0 ? null : nl / nr;
          case '%': return nr === 0 ? null : nl % nr;
        }
        return null;
      }
      case 'vgl': return vglOp(a.op, vergleicheWerte(werte(a.l, ktx), werte(a.r, ktx)));
      case 'und': { const l = istWahr(werte(a.l, ktx)); if (l === false) return false; return und3(l, istWahr(werte(a.r, ktx))); }
      case 'oder': { const l = istWahr(werte(a.l, ktx)); if (l === true) return true; return oder3(l, istWahr(werte(a.r, ktx))); }
      case 'nicht': return nicht3(istWahr(werte(a.a, ktx)));
      case 'istnull': { const v = werte(a.a, ktx) === null; return a.neg ? !v : v; }
      case 'in': {
        const v = werte(a.a, ktx);
        const liste = a.abfrage ? einSpaltig(werteAbfrage(a.abfrage, ktx.db, ktx), 'bei IN') : a.liste.map(x => werte(x, ktx));
        const e = inListe(v, liste);
        return a.neg ? nicht3(e) : e;
      }
      case 'between': {
        const v = werte(a.a, ktx);
        const e = und3(vglOp('>=', vergleicheWerte(v, werte(a.von, ktx))), vglOp('<=', vergleicheWerte(v, werte(a.bis, ktx))));
        return a.neg ? nicht3(e) : e;
      }
      case 'like': {
        const v = werte(a.a, ktx), m = werte(a.muster, ktx);
        if (v === null || m === null) return null;
        const e = likeRegex(m, a.esc ? werte(a.esc, ktx) : null).test(String(v));
        return a.neg ? !e : e;
      }
      case 'exists': return werteAbfrage(a.abfrage, ktx.db, ktx).zeilen.length > 0;
      case 'skalar': {
        const erg = werteAbfrage(a.abfrage, ktx.db, ktx);
        const sp = einSpaltig(erg, 'als Einzelwert');
        if (sp.length > 1) throw new SqlFehler('Die Unterabfrage liefert ' + sp.length + ' Zeilen, an dieser Stelle ist aber nur ein einzelner Wert erlaubt (z. B. IN statt = verwenden).');
        return sp.length ? sp[0] : null;
      }
      case 'quant': {
        const v = werte(a.l, ktx);
        const liste = einSpaltig(werteAbfrage(a.abfrage, ktx.db, ktx), 'bei ' + a.quant.toUpperCase());
        let e = a.quant === 'all' ? true : false;
        for (const x of liste) {
          const r = vglOp(a.op, vergleicheWerte(v, x));
          e = a.quant === 'all' ? und3(e, r) : oder3(e, r);
        }
        return e;
      }
      case 'fall': {
        if (a.basis) {
          const b = werte(a.basis, ktx);
          for (const z of a.zweige) if (vergleicheWerte(b, werte(z.wenn, ktx)) === 0) return werte(z.dann, ktx);
        } else {
          for (const z of a.zweige) if (istWahr(werte(z.wenn, ktx)) === true) return werte(z.dann, ktx);
        }
        return a.sonst ? werte(a.sonst, ktx) : null;
      }
      case 'cast': {
        const v = werte(a.a, ktx);
        if (v === null) return null;
        const t = normTyp(a.typ);
        if (t === 'int') { const n = alsZahl(v); if (n === null) throw new SqlFehler('„' + v + '“ lässt sich nicht in eine Zahl umwandeln.'); return Math.trunc(n); }
        if (t.startsWith('decimal') || t === 'float') { const n = alsZahl(v); if (n === null) throw new SqlFehler('„' + v + '“ lässt sich nicht in eine Zahl umwandeln.'); return n; }
        return String(v);
      }
      case 'funktion': return funktion(a, ktx);
    }
    throw new SqlFehler('Diesen Ausdruck kann der Trainer nicht auswerten.', 'unbekannt');
  }

  function aggregat(a, ktx) {
    if (!ktx.gruppe) throw new SqlFehler('Die Aggregatfunktion ' + a.name.toUpperCase() + '() ist hier nicht erlaubt – Bedingungen mit Aggregaten gehören in HAVING, nicht in WHERE.');
    if (a.name === 'count' && a.stern) return ktx.gruppe.length;
    if (a.argumente.length !== 1) throw new SqlFehler(a.name.toUpperCase() + '() erwartet genau einen Wert.');
    let liste = ktx.gruppe.map(t => werte(a.argumente[0], { bindungen: ktx.bindungen, tupel: t, aussen: ktx.aussen, db: ktx.db, using: ktx.using })).filter(v => v !== null);
    if (a.distinct) {
      const gesehen = new Set();
      liste = liste.filter(v => { const k = kanon(v); if (gesehen.has(k)) return false; gesehen.add(k); return true; });
    }
    switch (a.name) {
      case 'count': return liste.length;
      case 'sum':
      case 'avg': {
        if (!liste.length) return null;
        let s = 0;
        for (const v of liste) { const n = alsZahl(v); if (n === null) throw new SqlFehler(a.name.toUpperCase() + '() geht nur mit Zahlen.'); s += n; }
        return a.name === 'sum' ? s : s / liste.length;
      }
      case 'min':
      case 'max': {
        if (!liste.length) return null;
        let b = liste[0];
        for (const v of liste) { const c = sortierVergleich(v, b); if (a.name === 'min' ? c < 0 : c > 0) b = v; }
        return b;
      }
    }
    return null;
  }

  function funktion(a, ktx) {
    if (AGGREGATE.has(a.name)) return aggregat(a, ktx);
    const args = a.argumente.map(x => werte(x, ktx));
    const n = args.length;
    const zahl = (i) => { const v = args[i]; if (v === null) return null; const z = alsZahl(v); if (z === null) throw new SqlFehler((a.anzeige || a.name).toUpperCase() + '() erwartet eine Zahl, nicht „' + v + '“.'); return z; };
    const anzahl = (min, max) => { if (n < min || n > max) throw new SqlFehler((a.anzeige || a.name).toUpperCase() + '() mit ' + n + ' Argument(en) ist so nicht möglich.'); };
    switch (a.name) {
      // YEAR/MONTH/DAY sind kein Standard, werden in IHK-Aufgaben aber als vorgegebene Funktionen verwendet (sonst EXTRACT)
      case 'year': case 'month': case 'day': anzahl(1, 1); if (args[0] === null) return null; return datumTeile(args[0])[{ year: 0, month: 1, day: 2 }[a.name]];
      case 'upper': anzahl(1, 1); return args[0] === null ? null : String(args[0]).toUpperCase();
      case 'lower': anzahl(1, 1); return args[0] === null ? null : String(args[0]).toLowerCase();
      case 'char_length': case 'character_length': anzahl(1, 1); return args[0] === null ? null : String(args[0]).length;
      case 'trim': anzahl(1, 1); return args[0] === null ? null : String(args[0]).trim();
      case 'round': { anzahl(1, 2); const x = zahl(0); if (x === null) return null; const f = Math.pow(10, n > 1 ? zahl(1) : 0); return Math.round(x * f) / f; }
      case 'abs': anzahl(1, 1); return zahl(0) === null ? null : Math.abs(zahl(0));
      case 'ceil': case 'ceiling': anzahl(1, 1); return zahl(0) === null ? null : Math.ceil(zahl(0));
      case 'floor': anzahl(1, 1); return zahl(0) === null ? null : Math.floor(zahl(0));
      case 'mod': anzahl(2, 2); return zahl(0) === null || zahl(1) === null || zahl(1) === 0 ? null : zahl(0) % zahl(1);
      case 'coalesce': anzahl(1, 99); for (const v of args) if (v !== null) return v; return null;
      case 'nullif': anzahl(2, 2); return vergleicheWerte(args[0], args[1]) === 0 ? null : args[0];
      case 'substring': {
        anzahl(2, 3);
        if (args[0] === null) return null;
        const s = String(args[0]);
        const ab = Math.max(0, zahl(1) - 1);
        return n > 2 ? s.substr(ab, zahl(2)) : s.substr(ab);
      }
      case 'current_date': case 'current_timestamp': return heute();
    }
    if (FUNKTION_ERSATZ[a.name] || a.name === 'replace') {
      throw new SqlFehler(STD + (a.anzeige || a.name).toUpperCase() + '() ist herstellerspezifisch' + (FUNKTION_ERSATZ[a.name] ? ' – verwende ' + FUNKTION_ERSATZ[a.name] : '') + '.');
    }
    throw new SqlFehler('Eine Funktion ' + (a.anzeige || a.name).toUpperCase() + '() gibt es in SQL nicht (oder der Trainer kennt sie nicht).', 'unbekannt');
  }

  // FROM-Teil: liefert Bindungen (Tabellen/Aliase mit Spalten) und alle Zeilenkombinationen
  function quelle(r, db, aussen) {
    if (r.art === 'tabelle') {
      const k = r.name.toLowerCase();
      let spalten, zeilen;
      if (db.tabellen.has(k)) {
        const t = db.tabellen.get(k);
        spalten = t.spalten.map(s => s.name);
        zeilen = t.zeilen;
      } else if (db.views.has(k)) {
        const v = db.views.get(k);
        const erg = werteAbfrage(v.abfrage, db, null);
        spalten = v.spalten || erg.spalten;
        zeilen = erg.zeilen;
      } else {
        throw new SqlFehler('Die Tabelle „' + r.name + '“ gibt es nicht.');
      }
      const anzeige = r.alias || r.name;
      return {
        bindungen: [{ name: anzeige.toLowerCase(), anzeige, tabelle: k, spalten: spalten.map(s => s.toLowerCase()), spaltenAnzeige: spalten }],
        tupel: zeilen.map(z => [z])
      };
    }
    if (r.art === 'unterabfrage') {
      const erg = werteAbfrage(r.abfrage, db, null);
      const anzeige = r.alias || '';
      return {
        bindungen: [{ name: anzeige.toLowerCase(), anzeige, tabelle: null, spalten: erg.spalten.map(s => String(s).toLowerCase()), spaltenAnzeige: erg.spalten }],
        tupel: erg.zeilen.map(z => [z])
      };
    }
    // JOIN
    const l = quelle(r.links, db, aussen), rr = quelle(r.rechts, db, aussen);
    const bindungen = verbindeBindungen(l.bindungen, rr.bindungen);
    let using = r.using ? r.using.map(s => s.toLowerCase()) : null;
    if (r.natuerlich) {
      const links = new Set([].concat(...l.bindungen.map(b => b.spalten)));
      using = [...new Set([].concat(...rr.bindungen.map(b => b.spalten)))].filter(s => links.has(s));
    }
    const passt = (lt, rt) => {
      if (using) {
        return using.every(sp => {
          const lw = spaltenWert({ bindungen: l.bindungen, tupel: lt }, null, sp);
          const rw = spaltenWert({ bindungen: rr.bindungen, tupel: rt }, null, sp);
          return vergleicheWerte(lw, rw) === 0;
        });
      }
      if (!r.bedingung) return true;
      return istWahr(werte(r.bedingung, { bindungen, tupel: lt.concat(rt), aussen, db })) === true;
    };
    const tupel = [];
    const rechtsGetroffen = new Set();
    const leerL = l.bindungen.map(() => null), leerR = rr.bindungen.map(() => null);
    for (const lt of l.tupel) {
      let getroffen = false;
      rr.tupel.forEach((rt, i) => {
        if (passt(lt, rt)) { tupel.push(lt.concat(rt)); getroffen = true; rechtsGetroffen.add(i); }
      });
      if (!getroffen && (r.typ === 'left' || r.typ === 'full')) tupel.push(lt.concat(leerR));
    }
    if (r.typ === 'right' || r.typ === 'full') rr.tupel.forEach((rt, i) => { if (!rechtsGetroffen.has(i)) tupel.push(leerL.concat(rt)); });
    return { bindungen, tupel, using };
  }

  function verbindeBindungen(a, b) {
    for (const x of b) {
      if (x.name && a.some(y => y.name === x.name)) {
        throw new SqlFehler('„' + x.anzeige + '“ kommt in der Abfrage zweimal vor – gib den Tabellen unterschiedliche Aliase (z. B. ' + x.anzeige + ' a1 und ' + x.anzeige + ' a2).');
      }
    }
    return a.concat(b);
  }

  function werteSelect(s, db, aussen) {
    let bindungen = [], tupel = [[]], using = null;
    for (const r of s.von) {
      const q = quelle(r, db, aussen);
      bindungen = verbindeBindungen(bindungen, q.bindungen);
      if (q.using) using = new Set(q.using);
      const neu = [];
      for (const a of tupel) for (const b of q.tupel) neu.push(a.concat(b));
      tupel = neu;
    }
    // Aliase der SELECT-Liste gelten in Standard-SQL nur in ORDER BY; hier nur für eine verständliche Fehlermeldung
    const aliasNamen = new Set(s.spalten.filter(sp => sp.alias).map(sp => sp.alias.toLowerCase()));
    const basis = { bindungen, aussen, db, using, aliasNamen };

    if (s.wo) {
      if (enthaeltAggregat(s.wo)) throw new SqlFehler('Aggregatfunktionen wie COUNT oder SUM sind in WHERE nicht erlaubt – verwende HAVING.');
      tupel = tupel.filter(t => istWahr(werte(s.wo, Object.assign({}, basis, { tupel: t }))) === true);
    }

    const gruppiert = s.gruppe.length > 0 || s.having || s.spalten.some(sp => sp.ausdruck && enthaeltAggregat(sp.ausdruck));
    let kontexte;
    if (gruppiert) {
      if (s.gruppe.some(g => g.art === 'wert')) throw new SqlFehler(STD + 'In GROUP BY stehen Spaltennamen, keine Spaltennummern oder Werte.');
      if (s.gruppe.some(enthaeltAggregat)) throw new SqlFehler('Aggregatfunktionen sind in GROUP BY nicht erlaubt.');
      const gruppen = new Map();
      if (!s.gruppe.length) gruppen.set('', tupel);
      else {
        for (const t of tupel) {
          const ktx = Object.assign({}, basis, { tupel: t });
          const schluessel = s.gruppe.map(g => kanon(werte(g, ktx))).join('\u0001');
          if (!gruppen.has(schluessel)) gruppen.set(schluessel, []);
          gruppen.get(schluessel).push(t);
        }
      }
      kontexte = [];
      for (const liste of gruppen.values()) {
        const ktx = Object.assign({}, basis, { tupel: liste[0] || null, gruppe: liste });
        if (s.having && istWahr(werte(s.having, ktx)) !== true) continue;
        kontexte.push(ktx);
      }
    } else {
      kontexte = tupel.map(t => Object.assign({}, basis, { tupel: t }));
    }

    const spalten = [], explizit = [];
    for (const sp of s.spalten) {
      if (sp.stern) {
        const q = sp.tabelle ? sp.tabelle.toLowerCase() : null;
        const liste = q ? bindungen.filter(b => b.name === q) : bindungen;
        if (q && !liste.length) throw new SqlFehler('„' + sp.tabelle + '“ ist in dieser Abfrage nicht bekannt.');
        if (!bindungen.length) throw new SqlFehler('SELECT * braucht eine Tabelle im FROM-Teil.');
        for (const b of liste) for (const n of b.spaltenAnzeige) { spalten.push(n); explizit.push(false); }
      } else {
        spalten.push(sp.alias || textVon(sp.ausdruck));
        explizit.push(!!sp.alias);
      }
    }

    let eintraege = kontexte.map(ktx => {
      const w = [];
      for (const sp of s.spalten) {
        if (sp.stern) {
          const q = sp.tabelle ? sp.tabelle.toLowerCase() : null;
          bindungen.forEach((b, bi) => {
            if (q && b.name !== q) return;
            const zeile = ktx.tupel ? ktx.tupel[bi] : null;
            b.spalten.forEach((_, si) => w.push(zeile ? zeile[si] : null));
          });
        } else {
          w.push(werte(sp.ausdruck, ktx));
        }
      }
      return { werte: w, ktx };
    });

    if (s.distinct) {
      const gesehen = new Set();
      eintraege = eintraege.filter(e => { const k = zeilenSchluessel(e.werte); if (gesehen.has(k)) return false; gesehen.add(k); return true; });
    }
    return { spalten, explizit, eintraege };
  }

  function werteKoerper(k, db, aussen) {
    if (k.art === 'select') return werteSelect(k, db, aussen);
    // Geklammerte Abfrage
    const e = werteAbfrage(k.abfrage, db, aussen);
    return { spalten: e.spalten, explizit: e.explizit, eintraege: e.zeilen.map(w => ({ werte: w, ktx: null })) };
  }

  function werteAbfrage(q, db, aussen) {
    const k = werteKoerper(q.koerper, db, aussen);
    let eintraege = k.eintraege;
    // Erst nach allen Werten ordnen, damit gleichwertige Abfragen auch bei Gleichstand dieselbe Reihenfolge liefern
    eintraege = eintraege.map(e => ({ e, s: e.werte })).sort((a, b) => {
      for (let i = 0; i < a.s.length; i++) { const c = sortierVergleich(a.s[i], b.s[i]); if (c) return c; }
      return 0;
    }).map(x => x.e);
    if (q.sortierung) {
      const labels = k.spalten.map(s => String(s).toLowerCase());
      const schluessel = eintraege.map(e => q.sortierung.map(o => {
        const a = o.ausdruck;
        if (a.art === 'wert' && typeof a.v === 'number') {
          if (a.v < 1 || a.v > e.werte.length) throw new SqlFehler('ORDER BY ' + a.v + ': Eine Spalte mit dieser Nummer gibt es nicht.');
          return e.werte[a.v - 1];
        }
        if (a.art === 'spalte' && !a.tabelle) {
          const i = labels.indexOf(a.name.toLowerCase());
          if (i >= 0 && labels.lastIndexOf(a.name.toLowerCase()) === i && (!e.ktx || k.explizit[i] || !e.ktx.bindungen.some(b => b.spalten.includes(a.name.toLowerCase())))) return e.werte[i];
        }
        if (!e.ktx) throw new SqlFehler('Nach einer geklammerten Abfrage kann nur über die Namen oder Nummern der Ergebnisspalten sortiert werden.');
        return werte(a, e.ktx);
      }));
      const index = eintraege.map((_, i) => i);
      index.sort((x, y) => {
        for (let j = 0; j < q.sortierung.length; j++) {
          const c = sortierVergleich(schluessel[x][j], schluessel[y][j]);
          if (c) return q.sortierung[j].ab ? -c : c;
        }
        return x - y;
      });
      eintraege = index.map(i => eintraege[i]);
    }
    let zeilen = eintraege.map(e => e.werte);
    const top = q.koerper.art === 'select' ? q.koerper.top : null;
    let limit = q.limit;
    if (top !== null && (limit === null || top < limit)) limit = top;
    if (q.offset) zeilen = zeilen.slice(q.offset);
    if (limit !== null) zeilen = zeilen.slice(0, limit);
    return { spalten: k.spalten, explizit: k.explizit, zeilen, sortiert: !!q.sortierung, begrenzt: limit !== null };
  }

  // ---------- Ausführung von Änderungen und Definitionen ----------

  function leererKontext(db) { return { bindungen: [], tupel: [], aussen: null, db }; }

  function standardWert(t, si) {
    const s = t.spalten[si];
    return s.standard !== undefined ? werte(s.standard, leererKontext(null)) : null;
  }

  function spalteAusDefinition(def) {
    return { name: def.name, typ: normTyp(def.typ), pk: def.pk, nn: def.nn || def.pk, unique: def.unique, standard: def.standard, check: def.check ? schreibe(def.check) : null };
  }

  function fuehreAus(a, db) {
    switch (a.art) {
      case 'abfrage': return Object.assign({ art: 'abfrage' }, werteAbfrage(a, db, null));
      case 'insert': {
        const t = tabelle(db, a.tabelle);
        const ziel = a.spalten ? a.spalten.map(n => spaltenIndex(t, n)) : t.spalten.map((_, i) => i);
        let quellen;
        if (a.zeilen) quellen = a.zeilen.map(z => z.map(x => werte(x, leererKontext(db))));
        else quellen = werteAbfrage(a.abfrage, db, null).zeilen;
        for (const z of quellen) {
          if (z.length !== ziel.length) throw new SqlFehler('Die Anzahl der Werte (' + z.length + ') passt nicht zur Anzahl der Spalten (' + ziel.length + ').');
          const neu = t.spalten.map((_, i) => standardWert(t, i));
          ziel.forEach((si, i) => { neu[si] = z[i]; });
          t.zeilen.push(neu);
        }
        return { art: 'zustand', db };
      }
      case 'update': {
        const t = tabelle(db, a.tabelle);
        const bindung = { name: (a.alias || a.tabelle).toLowerCase(), anzeige: a.alias || a.tabelle, tabelle: a.tabelle.toLowerCase(), spalten: t.spalten.map(s => s.name.toLowerCase()), spaltenAnzeige: t.spalten.map(s => s.name) };
        const ziele = a.zuweisungen.map(z => spaltenIndex(t, z.spalte));
        const neu = t.zeilen.map(z => {
          const ktx = { bindungen: [bindung], tupel: [z], aussen: null, db };
          if (a.wo && istWahr(werte(a.wo, ktx)) !== true) return z;
          const w = a.zuweisungen.map(x => werte(x.ausdruck, ktx));
          const kopie = z.slice();
          ziele.forEach((si, i) => { kopie[si] = w[i]; });
          return kopie;
        });
        t.zeilen = neu;
        return { art: 'zustand', db };
      }
      case 'delete': {
        const t = tabelle(db, a.tabelle);
        const bindung = { name: (a.alias || a.tabelle).toLowerCase(), anzeige: a.alias || a.tabelle, tabelle: a.tabelle.toLowerCase(), spalten: t.spalten.map(s => s.name.toLowerCase()), spaltenAnzeige: t.spalten.map(s => s.name) };
        t.zeilen = t.zeilen.filter(z => a.wo && istWahr(werte(a.wo, { bindungen: [bindung], tupel: [z], aussen: null, db })) !== true);
        return { art: 'zustand', db };
      }
      case 'truncate': tabelle(db, a.tabelle).zeilen = []; return { art: 'zustand', db };
      case 'createTable': {
        const k = a.tabelle.toLowerCase();
        if (db.tabellen.has(k) || db.views.has(k)) throw new SqlFehler('Die Tabelle „' + a.tabelle + '“ gibt es bereits.');
        const t = { name: a.tabelle, spalten: [], fks: [], checks: [], zeilen: [] };
        for (const def of a.spalten) {
          if (t.spalten.some(s => s.name.toLowerCase() === def.name.toLowerCase())) throw new SqlFehler('Die Spalte „' + def.name + '“ ist doppelt angegeben.');
          t.spalten.push(spalteAusDefinition(def));
          if (def.fk) t.fks.push(def.fk);
        }
        for (const b of a.bedingungen) wendeBedingungAn(t, b);
        db.tabellen.set(k, t);
        return { art: 'zustand', db };
      }
      case 'createView': {
        const k = a.view.toLowerCase();
        if (db.tabellen.has(k) || db.views.has(k)) throw new SqlFehler('„' + a.view + '“ gibt es bereits.');
        const erg = werteAbfrage(a.abfrage, db, null);
        if (a.spalten && a.spalten.length !== erg.spalten.length) throw new SqlFehler('Die Spaltenliste des Views passt nicht zur Abfrage.');
        db.views.set(k, { name: a.view, abfrage: a.abfrage, spalten: a.spalten });
        return { art: 'zustand', db };
      }
      case 'createIndex': {
        const t = tabelle(db, a.tabelle);
        a.spalten.forEach(n => spaltenIndex(t, n));
        db.indizes.set(a.index.toLowerCase(), { tabelle: t.name.toLowerCase(), spalten: a.spalten.map(n => n.toLowerCase()), eindeutig: a.eindeutig });
        return { art: 'zustand', db };
      }
      case 'alter': {
        const t = tabelle(db, a.tabelle);
        for (const x of a.aktionen) aendereTabelle(db, t, x);
        return { art: 'zustand', db };
      }
      case 'drop': {
        for (const n of a.namen) {
          const k = n.toLowerCase();
          const ziel = a.was === 'table' ? db.tabellen : a.was === 'view' ? db.views : db.indizes;
          if (!ziel.has(k)) {
            if (a.wennVorhanden) continue;
            throw new SqlFehler((a.was === 'table' ? 'Die Tabelle' : a.was === 'view' ? 'Den View' : 'Den Index') + ' „' + n + '“ gibt es nicht.');
          }
          ziel.delete(k);
        }
        return { art: 'zustand', db };
      }
    }
    throw new SqlFehler('Diese Anweisung kann der Trainer nicht ausführen.', 'unbekannt');
  }

  function wendeBedingungAn(t, b) {
    const idx = (n) => spaltenIndex(t, n);
    if (b.art === 'pk') b.spalten.forEach(n => { const s = t.spalten[idx(n)]; s.pk = true; s.nn = true; });
    else if (b.art === 'unique') { if (b.spalten.length === 1) t.spalten[idx(b.spalten[0])].unique = true; else t.checks.push('unique(' + b.spalten.map(n => n.toLowerCase()).sort().join(',') + ')'); }
    else if (b.art === 'fk') { b.spalten.forEach(idx); t.fks.push({ spalten: b.spalten, ziel: b.ziel, zielSpalten: b.zielSpalten }); }
    else if (b.art === 'check') t.checks.push(schreibe(b.ausdruck));
  }

  function aendereTabelle(db, t, x) {
    switch (x.art) {
      case 'addSpalte': {
        if (t.spalten.some(s => s.name.toLowerCase() === x.def.name.toLowerCase())) throw new SqlFehler('Die Spalte „' + x.def.name + '“ gibt es in „' + t.name + '“ bereits.');
        t.spalten.push(spalteAusDefinition(x.def));
        if (x.def.fk) t.fks.push(x.def.fk);
        const si = t.spalten.length - 1;
        t.zeilen = t.zeilen.map(z => z.concat([standardWert(t, si)]));
        return;
      }
      case 'dropSpalte': {
        const si = spaltenIndex(t, x.spalte);
        t.spalten.splice(si, 1);
        t.zeilen = t.zeilen.map(z => z.filter((_, i) => i !== si));
        t.fks = t.fks.filter(f => !f.spalten.some(n => n.toLowerCase() === x.spalte.toLowerCase()));
        return;
      }
      case 'typ': { const s = t.spalten[spaltenIndex(t, x.spalte)]; s.typ = normTyp(x.typ); if (x.nn !== null && x.nn !== undefined) s.nn = x.nn || s.pk; return; }
      case 'setNn': { const s = t.spalten[spaltenIndex(t, x.spalte)]; s.nn = x.nn || s.pk; return; }
      case 'setDefault': t.spalten[spaltenIndex(t, x.spalte)].standard = x.standard; return;
      case 'renameSpalte': t.spalten[spaltenIndex(t, x.alt)].name = x.neu; return;
      case 'renameTabelle': {
        const k = x.neu.toLowerCase();
        if (db.tabellen.has(k)) throw new SqlFehler('Die Tabelle „' + x.neu + '“ gibt es bereits.');
        db.tabellen.delete(t.name.toLowerCase());
        t.name = x.neu;
        db.tabellen.set(k, t);
        return;
      }
      case 'bedingung': wendeBedingungAn(t, x.bedingung); return;
      case 'dropPk': t.spalten.forEach(s => { s.pk = false; }); return;
    }
  }

  // ---------- Datentypen und Ausdrücke als Text (für den Strukturvergleich) ----------

  function normTyp(t) {
    if (!t) return null;
    const p = t.parameter;
    switch (t.typ) {
      case 'int': case 'integer': case 'smallint': case 'bigint': case 'mediumint': case 'number':
        return t.typ === 'number' && p.length > 1 && p[1] > 0 ? 'decimal(' + p.join(',') + ')' : 'int';
      case 'tinyint': return p[0] === 1 ? 'bool' : 'int';
      case 'bool': case 'boolean': case 'bit': return 'bool';
      case 'varchar': case 'nvarchar': case 'varchar2': case 'nvarchar2': return 'varchar(' + (p[0] || '') + ')';
      case 'char': case 'nchar': case 'character': return 'char(' + (p[0] || 1) + ')';
      case 'text': case 'clob': case 'longtext': case 'mediumtext': return 'text';
      case 'decimal': case 'numeric': case 'dec': return 'decimal(' + (p[0] || 10) + ',' + (p[1] || 0) + ')';
      case 'float': case 'real': case 'double': return 'float';
      case 'date': return 'date';
      case 'datetime': case 'timestamp': return 'datetime';
      case 'time': return 'time';
    }
    return t.typ + (p.length ? '(' + p.join(',') + ')' : '');
  }

  function schreibe(a) {
    if (!a) return '';
    switch (a.art) {
      case 'wert': return a.v === null ? 'null' : kanon(a.v);
      case 'spalte': return (a.tabelle ? a.tabelle.toLowerCase() + '.' : '') + a.name.toLowerCase();
      case 'neg': return '-(' + schreibe(a.a) + ')';
      case 'rechnen': case 'vgl': return '(' + schreibe(a.l) + a.op + schreibe(a.r) + ')';
      case 'und': return '(' + schreibe(a.l) + ' and ' + schreibe(a.r) + ')';
      case 'oder': return '(' + schreibe(a.l) + ' or ' + schreibe(a.r) + ')';
      case 'nicht': return 'not(' + schreibe(a.a) + ')';
      case 'istnull': return schreibe(a.a) + (a.neg ? ' is not null' : ' is null');
      case 'in': return schreibe(a.a) + (a.neg ? ' not' : '') + ' in(' + (a.liste ? a.liste.map(schreibe).sort().join(',') : '…') + ')';
      case 'between': return schreibe(a.a) + (a.neg ? ' not' : '') + ' between ' + schreibe(a.von) + ' and ' + schreibe(a.bis);
      case 'like': return schreibe(a.a) + (a.neg ? ' not' : '') + ' like ' + schreibe(a.muster);
      case 'funktion': return a.name + '(' + (a.stern ? '*' : a.argumente.map(schreibe).join(',')) + ')';
    }
    return a.art;
  }

  // ---------- Vergleich zweier Ergebnisse ----------

  function zeilenGleich(soll, ist, abbildung, geordnet) {
    if (soll.length !== ist.length) return false;
    const umgestellt = ist.map(z => abbildung.map(i => z[i]));
    if (geordnet) return soll.every((z, i) => zeilenSchluessel(z) === zeilenSchluessel(umgestellt[i]));
    const a = soll.map(zeilenSchluessel).sort(), b = umgestellt.map(zeilenSchluessel).sort();
    return a.every((x, i) => x === b[i]);
  }

  // Sucht eine Zuordnung der Ergebnisspalten (Reihenfolge der Spalten ist egal), bei der alle Zeilen passen
  function findeAbbildung(soll, ist, geordnet) {
    const n = soll.spalten.length;
    const profil = (zeilen, i) => zeilen.map(z => kanon(z[i])).sort().join('\u0002');
    const sollProfil = soll.spalten.map((_, i) => profil(soll.zeilen, i));
    const istProfil = ist.spalten.map((_, i) => profil(ist.zeilen, i));
    const kandidaten = sollProfil.map((p, j) => {
      const liste = istProfil.map((q, i) => (q === p ? i : -1)).filter(i => i >= 0);
      return liste.sort((x, y) => (x === j ? -1 : y === j ? 1 : x - y));
    });
    const belegt = new Set();
    const abbildung = [];
    let versuche = 0;
    function suche(j) {
      if (++versuche > 5000) return false;
      if (j === n) return zeilenGleich(soll.zeilen, ist.zeilen, abbildung, geordnet);
      for (const i of kandidaten[j]) {
        if (belegt.has(i)) continue;
        belegt.add(i);
        abbildung.push(i);
        if (suche(j + 1)) return true;
        abbildung.pop();
        belegt.delete(i);
      }
      return false;
    }
    return suche(0) ? abbildung.slice() : null;
  }

  function ergebnisUnterschied(soll, ist) {
    if (ist.spalten.length !== soll.spalten.length) {
      return 'Deine Abfrage liefert ' + ist.spalten.length + ' Spalte(n), gefragt sind ' + soll.spalten.length + '.';
    }
    if (soll.sortiert && !ist.sortiert) return 'Die Zeilen sollen sortiert ausgegeben werden – es fehlt ORDER BY.';
    const abbildung = findeAbbildung(soll, ist, soll.sortiert);
    if (!abbildung) {
      if (ist.zeilen.length !== soll.zeilen.length) return 'Deine Abfrage liefert ' + ist.zeilen.length + ' Zeile(n), erwartet werden ' + soll.zeilen.length + '.';
      if (soll.sortiert && findeAbbildung(soll, ist, false)) return 'Die Werte stimmen, aber die Reihenfolge der Zeilen nicht – prüfe ORDER BY (ASC/DESC).';
      return 'Die Werte im Ergebnis stimmen nicht mit dem überein, was gefragt ist.';
    }
    for (let j = 0; j < soll.spalten.length; j++) {
      if (soll.explizit[j] && String(ist.spalten[abbildung[j]]).trim().toLowerCase() !== String(soll.spalten[j]).trim().toLowerCase()) {
        return 'Die Ergebnisspalte soll „' + soll.spalten[j] + '“ heißen (Alias mit AS).';
      }
    }
    return null;
  }

  function fkText(f, db) {
    let ziel = f.zielSpalten;
    if (!ziel) {
      const t = db.tabellen.get(f.ziel.toLowerCase());
      const pk = t ? t.spalten.filter(s => s.pk).map(s => s.name) : [];
      ziel = pk.length ? pk : f.spalten;
    }
    return f.spalten.map(s => s.toLowerCase()).join(',') + '->' + f.ziel.toLowerCase() + '(' + ziel.map(s => s.toLowerCase()).join(',') + ')';
  }

  function strukturUnterschied(name, s, i, sollDb, istDb) {
    const istSpalten = new Map(i.spalten.map(x => [x.name.toLowerCase(), x]));
    const sollSpalten = new Map(s.spalten.map(x => [x.name.toLowerCase(), x]));
    for (const [k, sp] of sollSpalten) if (!istSpalten.has(k)) return 'In „' + name + '“ fehlt die Spalte „' + sp.name + '“.';
    for (const [k, sp] of istSpalten) if (!sollSpalten.has(k)) return '„' + name + '“ hat die Spalte „' + sp.name + '“, die nicht gefragt ist.';
    for (const [k, a] of sollSpalten) {
      const b = istSpalten.get(k);
      if (a.typ !== b.typ) return 'Der Datentyp der Spalte „' + a.name + '“ passt nicht (' + (b.typ || '?').toUpperCase() + ' statt ' + (a.typ || '?').toUpperCase() + ').';
      if (a.pk !== b.pk) return a.pk ? '„' + a.name + '“ soll Primärschlüssel sein.' : '„' + a.name + '“ soll kein Primärschlüssel sein.';
      if (a.nn && !b.nn) return 'Die Spalte „' + a.name + '“ soll NOT NULL sein.';
      if (a.unique && !b.unique && !b.pk) return 'Die Spalte „' + a.name + '“ soll UNIQUE sein.';
      if (a.standard !== undefined && (b.standard === undefined || schreibe(a.standard) !== schreibe(b.standard))) return 'Der Standardwert (DEFAULT) der Spalte „' + a.name + '“ passt nicht.';
      if (a.check && a.check !== b.check) return 'Die CHECK-Bedingung der Spalte „' + a.name + '“ passt nicht.';
    }
    const fkS = s.fks.map(f => fkText(f, sollDb)).sort(), fkI = i.fks.map(f => fkText(f, istDb)).sort();
    if (fkS.join('|') !== fkI.join('|')) return fkS.length > fkI.length ? 'In „' + name + '“ fehlt ein Fremdschlüssel (REFERENCES).' : 'Der Fremdschlüssel in „' + name + '“ passt nicht.';
    for (const c of s.checks) if (!i.checks.includes(c)) return 'In „' + name + '“ fehlt eine Bedingung (CHECK/UNIQUE).';
    return null;
  }

  function zustandUnterschied(soll, ist) {
    for (const [k, t] of soll.tabellen) if (!ist.tabellen.has(k)) return 'Danach sollte es die Tabelle „' + t.name + '“ geben.';
    for (const [k, t] of ist.tabellen) if (!soll.tabellen.has(k)) return 'Danach sollte es die Tabelle „' + t.name + '“ nicht (mehr) geben.';
    for (const [k, s] of soll.tabellen) {
      const i = ist.tabellen.get(k);
      const u = strukturUnterschied(s.name, s, i, soll, ist);
      if (u) return u;
      const ordnung = s.spalten.map(sp => spaltenIndex(i, sp.name));
      const a = s.zeilen.map(zeilenSchluessel).sort();
      const b = i.zeilen.map(z => zeilenSchluessel(ordnung.map(x => z[x]))).sort();
      if (a.length !== b.length) return 'Danach hat die Tabelle „' + s.name + '“ ' + b.length + ' Datensätze, erwartet sind ' + a.length + '.';
      if (a.some((x, j) => x !== b[j])) return 'Danach stimmen die Werte in der Tabelle „' + s.name + '“ nicht mit dem überein, was gefragt ist.';
    }
    for (const [k, v] of soll.views) if (!ist.views.has(k)) return 'Danach sollte es den View „' + v.name + '“ geben.';
    for (const [k, v] of ist.views) if (!soll.views.has(k)) return 'Den View „' + v.name + '“ sollte es nicht geben.';
    for (const [k, v] of soll.views) {
      const a = werteAbfrage(v.abfrage, soll, null), b = werteAbfrage(ist.views.get(k).abfrage, ist, null);
      if (v.spalten) { a.spalten = v.spalten; a.explizit = v.spalten.map(() => true); }
      const iv = ist.views.get(k);
      if (iv.spalten) b.spalten = iv.spalten;
      const u = ergebnisUnterschied(a, b);
      if (u) return 'View „' + v.name + '“: ' + u;
    }
    const idx = (db) => [...db.indizes.values()].map(x => x.tabelle + '(' + x.spalten.join(',') + ')' + (x.eindeutig ? '!' : '')).sort().join('|');
    if (idx(soll) !== idx(ist)) return 'Der Index passt nicht (Tabelle, Spalten oder UNIQUE prüfen).';
    return null;
  }

  // ---------- Testdaten-Varianten ----------
  // Neben den angezeigten Tabellen werden abgewandelte Kopien geprüft, damit eine falsche Abfrage nicht nur
  // zufällig auf den wenigen Beispielzeilen dasselbe liefert.

  function istSchluesselSpalte(name, i) {
    return i === 0 || /(nr|id|nummer)$/i.test(name);
  }

  function sammleLiterale(a, zahlen, daten) {
    if (!a || typeof a !== 'object') return;
    if (Array.isArray(a)) { a.forEach(x => sammleLiterale(x, zahlen, daten)); return; }
    if (a.art === 'wert') {
      if (typeof a.v === 'number') zahlen.add(a.v);
      else if (typeof a.v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(a.v)) daten.add(a.v);
    }
    for (const k in a) if (a[k] && typeof a[k] === 'object') sammleLiterale(a[k], zahlen, daten);
  }

  function verschiebeDatum(d, tage) {
    const t = datumTeile(d);
    const x = new Date(Date.UTC(t[0], t[1] - 1, t[2] + tage));
    return x.getUTCFullYear() + '-' + String(x.getUTCMonth() + 1).padStart(2, '0') + '-' + String(x.getUTCDate()).padStart(2, '0');
  }

  function spaltenArt(t, si) {
    const w = t.zeilen.map(z => z[si]).filter(v => v !== null);
    if (!w.length) return null;
    if (w.every(v => typeof v === 'number')) return 'zahl';
    if (w.every(v => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v))) return 'datum';
    return 'text';
  }

  function varianten(basis, loesung) {
    const zahlen = new Set(), daten = new Set();
    sammleLiterale(loesung, zahlen, daten);

    // Kopie eines Datensatzes mit neuem Schlüssel; nur bei Tabellen, deren erste Spalte eindeutig ist
    const ersteEindeutig = (t) => new Set(t.zeilen.map(z => kanon(z[0]))).size === t.zeilen.length;
    const kopien = (t, anzahl) => {
      const maxZahl = Math.max(0, ...t.zeilen.map(z => alsZahl(z[0])).filter(v => v !== null));
      const neu = [];
      for (let r = 0; r < anzahl; r++) {
        const z = t.zeilen[r % t.zeilen.length];
        neu.push(z.map((v, i) => {
          if (i === 0) return typeof v === 'number' ? maxZahl + 1000 + r : String(v) + '-K' + r;
          if (istSchluesselSpalte(t.spalten[i].name, i) || v === null || typeof v !== 'string' || /^\d{4}-\d{2}-\d{2}$/.test(v)) return v;
          return v + ' (' + (r + 2) + ')';
        }));
      }
      return neu;
    };

    // 1) Zusätzliche Datensätze mit neuem Schlüssel (deckt fehlendes DISTINCT / doppelte JOIN-Treffer auf)
    const mehr = kopiere(basis);
    for (const t of mehr.tabellen.values()) {
      if (t.zeilen.length && ersteEindeutig(t)) t.zeilen = t.zeilen.concat(kopien(t, t.zeilen.length));
    }

    // 2) Je Grenzwert aus der Musterlösung (und ±1) eine Datenbank, in der alle Zahlen- bzw. Datumsspalten genau
    //    diesen Wert haben – so trifft der Grenzwert jede Zeile, egal welche weiteren Bedingungen gelten (> statt >= usw.)
    const setzeAlle = (art, wert) => {
      const db = kopiere(basis);
      for (const [k, t] of db.tabellen) {
        const original = basis.tabellen.get(k);
        t.spalten.forEach((sp, si) => {
          if (istSchluesselSpalte(sp.name, si) || spaltenArt(original, si) !== art) return;
          t.zeilen.forEach(z => { z[si] = wert; });
        });
      }
      return db;
    };
    const grenzen = [];
    new Set([...zahlen].flatMap(z => [z, z - 1, z + 1])).forEach(z => grenzen.push(setzeAlle('zahl', z)));
    new Set([...daten].flatMap(d => [d, verschiebeDatum(d, -1), verschiebeDatum(d, 1)])).forEach(d => grenzen.push(setzeAlle('datum', d)));

    // 3) NULL-Werte in Zahlen- und Datumsspalten (deckt = NULL statt IS NULL, COUNT(Spalte) statt COUNT(*) usw. auf)
    const leer = kopiere(basis);
    for (const t of leer.tabellen.values()) {
      t.spalten.forEach((sp, si) => {
        if (istSchluesselSpalte(sp.name, si)) return;
        const art = spaltenArt(t, si);
        if (art !== 'zahl' && art !== 'datum') return;
        t.zeilen.forEach((z, r) => { if ((r + si) % 3 === 1) z[si] = null; });
      });
    }
    return [basis, mehr, leer].concat(grenzen);
  }

  // ---------- Öffentliche Schnittstelle ----------

  const ANWEISUNGSART = {
    abfrage: 'eine SELECT-Abfrage', insert: 'eine INSERT-Anweisung', update: 'eine UPDATE-Anweisung', delete: 'eine DELETE-Anweisung',
    truncate: 'eine TRUNCATE-Anweisung', createTable: 'eine CREATE-TABLE-Anweisung', createView: 'eine CREATE-VIEW-Anweisung',
    createIndex: 'eine CREATE-INDEX-Anweisung', alter: 'eine ALTER-TABLE-Anweisung', drop: 'eine DROP-Anweisung'
  };

  const datenbanken = new WeakMap();
  const ergebnisse = new Map();

  function basisFuer(tabellen) {
    if (!datenbanken.has(tabellen)) datenbanken.set(tabellen, { db: datenbankAus(tabellen), varianten: new Map() });
    return datenbanken.get(tabellen);
  }

  function ausfuehrenAuf(anweisung, db) {
    const kopie = kopiere(db);
    return fuehreAus(anweisung, kopie);
  }

  // Liefert { gleich: true|false|null, hinweis } oder null, wenn die Musterlösung selbst nicht ausführbar ist
  function vergleiche(loesung, eingabe, tabellen) {
    const schluessel = loesung + '\u0000' + eingabe;
    const cache = ergebnisse.get(tabellen) || new Map();
    ergebnisse.set(tabellen, cache);
    if (cache.has(schluessel)) return cache.get(schluessel);
    let ergebnis;
    try {
      ergebnis = vergleicheOhneCache(loesung, eingabe, tabellen);
    } catch (e) {
      if (window.console) console.warn('SQL-Vergleich fehlgeschlagen', e);
      ergebnis = null;
    }
    cache.set(schluessel, ergebnis);
    return ergebnis;
  }

  function vergleicheOhneCache(loesung, eingabe, tabellen) {
    let soll, ist;
    try { soll = parse(loesung); } catch (e) { return null; }
    try { ist = parse(eingabe); } catch (e) {
      if (e instanceof SqlFehler) return { gleich: e.art === 'unbekannt' ? null : false, hinweis: e.message };
      throw e;
    }
    if (soll.art !== ist.art) return { gleich: false, hinweis: 'Gefragt ist ' + ANWEISUNGSART[soll.art] + ', du hast ' + ANWEISUNGSART[ist.art] + ' geschrieben.' };
    const b = basisFuer(tabellen);
    if (!b.varianten.has(loesung)) b.varianten.set(loesung, varianten(b.db, soll));
    const dbs = b.varianten.get(loesung);
    for (let i = 0; i < dbs.length; i++) {
      let s, e;
      try { s = ausfuehrenAuf(soll, dbs[i]); } catch (x) { if (i === 0) return null; continue; }
      try { e = ausfuehrenAuf(ist, dbs[i]); } catch (x) {
        if (!(x instanceof SqlFehler)) throw x;
        if (x.art === 'unbekannt') return { gleich: null, hinweis: x.message };
        if (i === 0) return { gleich: false, hinweis: x.message };
        continue;
      }
      const u = s.art === 'abfrage' ? ergebnisUnterschied(s, e) : zustandUnterschied(s.db, e.db);
      if (u) {
        return {
          gleich: false,
          hinweis: i === 0 ? u : 'Auf den Beispieldaten passt das Ergebnis zufällig, aber nicht allgemein: Mit anderen Daten (z. B. Grenzwerten, NULL-Werten oder weiteren Datensätzen) liefert deine Anweisung etwas anderes als gefragt.'
        };
      }
    }
    return { gleich: true, hinweis: null };
  }

  // Für Tests und Fehlersuche: führt eine Anweisung auf den Tabellen aus
  function ausfuehren(text, tabellen) {
    return ausfuehrenAuf(parse(text), basisFuer(tabellen).db);
  }

  window.WISO_SQL = { vergleiche, ausfuehren, parse, SqlFehler };
})();
