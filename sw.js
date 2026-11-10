// Offline-Cache für die installierte App.
// Zuerst aus dem Netz laden, damit neue Aufgabensätze sofort ankommen; ohne Verbindung aus dem Cache.
const CACHE = 'wiso-trainer-v6';
const NETZ_TIMEOUT_MS = 4000;

// Beim Installieren vorab speichern. Neue Aufgabensätze hier ergänzen, damit sie auch ohne vorherigen Online-Start offline da sind.
const DATEIEN = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/app.css',
  'js/bewertung.js',
  'js/bilder.js',
  'js/app.js',
  'daten/themen.js',
  'daten/satz-01.js',
  'daten/satz-02.js',
  'daten/satz-03.js',
  'daten/satz-04.js',
  'daten/satz-05.js',
  'daten/satz-06.js',
  'daten/satz-07.js',
  'daten/satz-08.js',
  'daten/satz-09.js',
  'daten/satz-10.js',
  'daten/satz-11.js',
  'daten/satz-12.js',
  'daten/satz-13.js',
  'daten/satz-14.js',
  'daten/satz-15.js',
  'daten/satz-16.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(namen => Promise.all(namen.filter(name => name !== CACHE).map(name => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

// Schlechtes Schul-WLAN soll den Start nicht blockieren: nach kurzer Wartezeit auf den Cache ausweichen
function mitTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Zeitüberschreitung')), ms);
    promise.then(
      wert => { clearTimeout(timer); resolve(wert); },
      fehler => { clearTimeout(timer); reject(fehler); }
    );
  });
}

self.addEventListener('fetch', event => {
  const anfrage = event.request;
  if (anfrage.method !== 'GET' || new URL(anfrage.url).origin !== self.location.origin) return;

  event.respondWith(
    mitTimeout(fetch(anfrage), NETZ_TIMEOUT_MS)
      .then(antwort => {
        if (antwort.ok) {
          const kopie = antwort.clone();
          caches.open(CACHE).then(cache => cache.put(anfrage, kopie));
        }
        return antwort;
      })
      .catch(() => caches.match(anfrage, { ignoreSearch: true }).then(treffer => {
        if (treffer) return treffer;
        return anfrage.mode === 'navigate' ? caches.match('index.html') : Response.error();
      }))
  );
});
