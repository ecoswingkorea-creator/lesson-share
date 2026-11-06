// 레슨노트를 "앱처럼 설치"할 수 있게 하는 최소 서비스워커 (항상 최신 내용을 인터넷에서 받아옴)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
