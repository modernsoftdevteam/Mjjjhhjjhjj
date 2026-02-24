const cacheName = 'kalu-game-v1';
const assets = [
  'index.html',
  'manifest.json',
  // আপনি যদি অন্য কোনো ছবি বা অডিও ফাইল ব্যবহার করেন, সেগুলোও এখানে যোগ করবেন
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('Service Worker: Caching game assets');
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request);
        })
    );
});
