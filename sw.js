// Guarda a aplicação no telemóvel para abrir sem internet.
const V = "pov-v4";
const CORE = ["./", "index.html", "config.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
const CDN = [
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap"
];
const HOSTS = ["www.gstatic.com", "fonts.googleapis.com", "fonts.gstatic.com"];
self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(V);
    await Promise.all(CORE.map(u => c.add(u).catch(() => {})));
    await Promise.all(CDN.map(u => fetch(u, { mode: "no-cors" }).then(r => c.put(u, r)).catch(() => {})));
    self.skipWaiting();
  })());
});
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== V) await caches.delete(k);
    await self.clients.claim();
  })());
});
async function networkFirst(req) {
  const c = await caches.open(V);
  try {
    const r = await Promise.race([fetch(req), new Promise((_, rej) => setTimeout(rej, 4000))]);
    if (r && r.ok) c.put(req, r.clone());
    return r;
  } catch (err) {
    return (await c.match(req, { ignoreSearch: true })) || (req.mode === "navigate" ? await c.match("index.html") : Response.error());
  }
}
async function cacheFirst(req) {
  const c = await caches.open(V);
  const hit = await c.match(req);
  if (hit) return hit;
  try { const r = await fetch(req); c.put(req, r.clone()); return r; } catch (err) { return Response.error(); }
}
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) e.respondWith(networkFirst(req));
  else if (HOSTS.indexOf(url.host) >= 0) e.respondWith(cacheFirst(req));
});
