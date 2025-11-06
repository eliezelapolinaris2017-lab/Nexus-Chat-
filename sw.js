self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("nexus-v1").then(cache => cache.addAll(["./","./index.html"]))
  );
});
