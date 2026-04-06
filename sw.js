self.addEventListener('install', (e) => {
    console.log('SW Installed');
});

self.addEventListener('fetch', (e) => {
    // Biar bisa dibuka offline (Basic)
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

self.addEventListener('push', (e) => {
    const data = e.data ? e.data.text() : 'Ada info baru nih!';
    e.waitUntil(
        self.registration.showNotification('SNPMB Update', {
            body: data,
            icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968923.png'
        })
    );
});
