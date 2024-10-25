self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('app-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/styles.css',
      '/scripts.js'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});