// Bump this version string any time you want to force installed clients to fetch fresh files.
const CACHE_NAME = "carnexus-ops-v2";
const ASSETS_TO_CACHE = ["carnexus-ops.html", "manifest.json", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first: this app changes often during setup, so always try to fetch the
// latest version from the network first, and only fall back to the cached copy
// if the network request fails (e.g. the phone is offline).
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
