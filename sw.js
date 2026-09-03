// Offline cache – při každé změně aplikace zvedni číslo verze.
const VERSION = 'recepty-v6';
const CORE = ['./', './index.html', './manifest.json', './icon.svg', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // API volání nikdy necachovat
  if (url.hostname.endsWith('googleapis.com') && url.pathname.includes('/models')) return;
  // fonty: cache s doplněním ze sítě
  if (url.hostname.includes('fonts.g')) {
    e.respondWith(caches.open(VERSION).then(async c => {
      const hit = await c.match(e.request); if (hit) return hit;
      try { const r = await fetch(e.request); c.put(e.request, r.clone()); return r; } catch { return new Response('', {status: 503}); }
    }));
    return;
  }
  // vlastní soubory: síť napřed (aby se projevily aktualizace), jinak cache
  if (url.origin === location.origin) {
    e.respondWith(fetch(e.request).then(r => { caches.open(VERSION).then(c => c.put(e.request, r.clone())); return r; }).catch(() => caches.match(e.request)));
  }
});
