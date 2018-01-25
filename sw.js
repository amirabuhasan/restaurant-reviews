var CACHE_NAME = 'my-site-cache-v17';
var urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/main.js',
  '/js/restaurant_info.js',
  './restaurant.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) return response;
      return fetch(event.request);
    })
  )
})
