const cacheName = "EngEssen_v0.1";

const paths = [
  "",
  "/",
  "index.html",
  "units.html",
  "card.html",
  "test.html",
  "must.html",
  "config.html",

  "database.js",
  "theme.js",
  "pwa.js",

  "book-icon.png",

  "pong.mp3",

  "lib/bootstrap.min.css",
  "lib/bootstrap.min.js",
  "lib/jquery-3.3.1.slim.min.js",
  "lib/popper.min.js",

  "lib/toggle-bootstrap.min.css",
  "lib/toggle-bootstrap-dark.min.css",
  "lib/toggle-bootstrap-print.min.css"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(paths)));
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);

  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
