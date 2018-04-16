var CACHE_STATIC_NAME = 'static-v2';
var STATIC_FILES = [
  '/',
  '/cv',
  '/style/style.css',
  '/built/bundle.js',
  '/built/bundle.js.map',
  '/webjars/bootstrap/4.0.0/css/bootstrap.min.css',
  '/webjars/font-awesome/5.0.6/web-fonts-with-css/css/fontawesome-all.min.css'
];

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
      caches.open(CACHE_STATIC_NAME)
        .then(function (cache) {
          console.log('[Service Worker] Precaching App Shell');
          cache.addAll(STATIC_FILES);
        })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  event.waitUntil(
      caches.keys()
        .then(function (keyList) {
          return Promise.all(keyList.map(function (key) {
            if (key !== CACHE_STATIC_NAME) {
              console.log('[Service Worker] Removing old cache.', key);
              return caches.delete(key);
            }
          }));
        })
    );
  return self.clients.claim();
});

function isInArray(string, array) {
  var cachePath;
  if (string.indexOf(self.origin) === 0) { // request targets domain where we serve the page from (i.e. NOT a CDN)
    console.log('matched ', string);
    cachePath = string.substring(self.origin.length); // take the part of the URL AFTER the domain (e.g. after localhost:8080)
  } else {
    cachePath = string; // store the full request (for CDNs)
  }
  return array.indexOf(cachePath) > -1;
}

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching something ....', event);
  if (isInArray(event.request.url, STATIC_FILES)) {
      event.respondWith(
        caches.match(event.request)
      );
  } else {
    event.respondWith(fetch(event.request));
  }
});