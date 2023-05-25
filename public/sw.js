const staticCacheName = 'site-static'
const dynamicCacheName = 'site-dynamic'

const assets = [
    '/',
    '/index.html',
    '/src/main.js',
    '/qrcode.js',
    '/check_mobile.js',
    '/src/App.vue',
    '/src/views/HomeView.vue',
    '/src/router/index.js',
    '/src/components/ChooseLocation.vue',
    '/src/components/CirclePay.vue',
    '/src/components/Header.vue',
    '/src/components/Footer.vue',
    '/src/components/icons/IconClose.vue',
    '/src/components/icons/IconMenu.vue',
    '/src/components/icons/IconDown.vue',
    '/src/assets/main.css',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap'
]

// install service worker
self.addEventListener('install', event => {
    // console.log('service worker has been installed')
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets')
            cache.addAll(assets)
        })
    )
    
})

// activate service worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.filter(key => {
                key !== staticCacheName
            }).map(key => caches.delete(key)))
        })
    )
})

// fetch event
self.addEventListener('fetch', event => {
    // console.log('fetch event', event)
    event.respondWith(
        caches.match(event.request).then(cache => {
            return cache || fetch(event.request).then(res => {
                return caches.open(dynamicCacheName).then(cache => {
                    if (event.request.url.startsWith('http')) {
                        cache.put(event.request.url, res.clone())
                    }
                    
                    return res
                })
            })
        })
    )
})