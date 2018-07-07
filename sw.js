// CACHE 네임스페이스
const CACHE_NAME = "contact-app";

// CACHE할 파일목록

const cache_urls = [
  '/',
  '/index.html',
  '/styles/contact.css',
  '/scripts/contact.js'
]

self.addEventListener('install', function(event) {
  // 설치가 시작되면 동작한다.
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
         console.log('캐시가 열렸습니다');
         return cache.addAll(cache_urls);
      })
  );
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
