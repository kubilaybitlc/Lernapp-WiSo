// Eigene, vereinfachte Sicherheitszeichen als SVG für Bildaufgaben. Schlüssel werden in den Aufgaben unter `bild` verwendet.
window.WISO_BILDER = {
  'gebot-gehoerschutz':
    '<svg viewBox="0 0 100 100" role="img" aria-label="Blauer Kreis mit weißem Kopfhörer">' +
    '<circle cx="50" cy="50" r="46" fill="#1f5fae"/>' +
    '<path d="M28 60 v-8 a22 22 0 0 1 44 0 v8" fill="none" stroke="#fff" stroke-width="6"/>' +
    '<rect x="22" y="54" width="13" height="22" rx="4" fill="#fff"/>' +
    '<rect x="65" y="54" width="13" height="22" rx="4" fill="#fff"/></svg>',

  'verbot-feuer':
    '<svg viewBox="0 0 100 100" role="img" aria-label="Weißer Kreis mit rotem Rand, schwarzer Flamme und rotem Querbalken">' +
    '<circle cx="50" cy="50" r="42" fill="#fff" stroke="#c8102e" stroke-width="9"/>' +
    '<path d="M50 22 C58 36 67 44 65 60 C64 72 57 78 50 78 C42 78 35 72 36 60 C37 50 44 46 46 36 C50 44 53 46 50 22Z" fill="#111"/>' +
    '<line x1="21" y1="21" x2="79" y2="79" stroke="#c8102e" stroke-width="9"/></svg>',

  'warn-spannung':
    '<svg viewBox="0 0 100 100" role="img" aria-label="Gelbes Dreieck mit schwarzem Rand und schwarzem Blitz">' +
    '<path d="M50 8 L94 88 H6 Z" fill="#f9c80e" stroke="#111" stroke-width="6" stroke-linejoin="round"/>' +
    '<path d="M55 32 L40 60 H52 L45 80 L62 50 H50 Z" fill="#111"/></svg>',

  'rettung-erste-hilfe':
    '<svg viewBox="0 0 100 100" role="img" aria-label="Grünes Quadrat mit weißem Kreuz">' +
    '<rect x="4" y="4" width="92" height="92" fill="#00843d"/>' +
    '<path d="M40 22 H60 V40 H78 V60 H60 V78 H40 V60 H22 V40 H40 Z" fill="#fff"/></svg>',

  'brandschutz-feuerloescher':
    '<svg viewBox="0 0 100 100" role="img" aria-label="Rotes Quadrat mit weißem Feuerlöscher">' +
    '<rect x="4" y="4" width="92" height="92" fill="#c8102e"/>' +
    '<rect x="36" y="36" width="24" height="48" rx="9" fill="#fff"/>' +
    '<rect x="43" y="25" width="10" height="13" fill="#fff"/>' +
    '<path d="M53 29 H68 L74 44" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>',

  // Organigramme für Aufgaben zu Leitungssystemen (schwarze Kästen, rein schematisch)
  'org-einlinien':
    '<svg viewBox="0 0 120 100" role="img" aria-label="Organigramm: eine Spitze, darunter drei gleichrangige Stellen in strenger Rangordnung">' +
    '<g fill="#fff" stroke="#1d1d1f" stroke-width="2.5"><rect x="45" y="8" width="30" height="16"/>' +
    '<rect x="6" y="70" width="30" height="16"/><rect x="45" y="70" width="30" height="16"/><rect x="84" y="70" width="30" height="16"/></g>' +
    '<path d="M60 24 V52 M21 52 H99 M21 52 V70 M60 52 V70 M99 52 V70" fill="none" stroke="#1d1d1f" stroke-width="2"/></svg>',

  'org-stab':
    '<svg viewBox="0 0 120 100" role="img" aria-label="Organigramm mit einer Stabsstelle seitlich an der Linie">' +
    '<g fill="#fff" stroke="#1d1d1f" stroke-width="2.5"><rect x="45" y="8" width="30" height="16"/><rect x="84" y="30" width="30" height="12"/>' +
    '<rect x="6" y="70" width="30" height="16"/><rect x="45" y="70" width="30" height="16"/><rect x="84" y="70" width="30" height="16"/></g>' +
    '<path d="M60 24 V52 M60 36 H84 M21 52 H99 M21 52 V70 M60 52 V70 M99 52 V70" fill="none" stroke="#1d1d1f" stroke-width="2"/></svg>',

  'org-mehrlinien':
    '<svg viewBox="0 0 120 100" role="img" aria-label="Organigramm: zwei übergeordnete Stellen, jede mit beiden unteren Stellen verbunden">' +
    '<g fill="#fff" stroke="#1d1d1f" stroke-width="2.5"><rect x="18" y="8" width="32" height="16"/><rect x="70" y="8" width="32" height="16"/>' +
    '<rect x="18" y="70" width="32" height="16"/><rect x="70" y="70" width="32" height="16"/></g>' +
    '<path d="M34 24 V70 M86 24 V70 M34 24 L86 70 M86 24 L34 70" fill="none" stroke="#1d1d1f" stroke-width="2"/></svg>',

  'org-matrix':
    '<svg viewBox="0 0 120 100" role="img" aria-label="Matrixorganisation: Raster aus Zeilen und Spalten">' +
    '<g stroke="#1d1d1f" stroke-width="2">' +
    '<g fill="#e6eef8"><rect x="36" y="6" width="24" height="14"/><rect x="66" y="6" width="24" height="14"/><rect x="96" y="6" width="22" height="14"/>' +
    '<rect x="4" y="34" width="24" height="16"/><rect x="4" y="60" width="24" height="16"/></g>' +
    '<g fill="#fff"><rect x="36" y="34" width="24" height="16"/><rect x="66" y="34" width="24" height="16"/><rect x="96" y="34" width="22" height="16"/>' +
    '<rect x="36" y="60" width="24" height="16"/><rect x="66" y="60" width="24" height="16"/><rect x="96" y="60" width="22" height="16"/></g></g></svg>'
};
