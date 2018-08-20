//Service worker variables
var cacheName = 'cache';
var cacheURLS= [
    '/',
    '/css/styles.css',
    '/data/restaurants.json',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/index.html',
    '/restaurant.html',
];

//Installs the site assets
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('cacheName').then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(cacheURLS);
    })
   );
});

//Get request and pull the request from the cache
self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
