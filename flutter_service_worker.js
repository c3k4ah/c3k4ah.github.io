'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"index.html": "adca8a7c9da18195eb47da8dfa98eb9c",
"/": "adca8a7c9da18195eb47da8dfa98eb9c",
"version.json": "bd341ba74d38c530da636604a427deda",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "ba6b185a9fbb2cfbd7b1e6a8a9cdf43f",
"main.dart.js": "6944fa69fbe82d4212407c072b9ce957",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"lemur.png": "ac05dff961361d70b90be0553df3fc75",
"photo.png": "3931a1bf468fa44bb6a39880ed15d074",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "d8091124f8d55028b8239f840a487d62",
"assets/fonts/MaterialIcons-Regular.otf": "0c4a456ef1becca7bba3d195197670a8",
"assets/AssetManifest.bin": "e71c6d72cfb8c1dfe38684ebff0c9609",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/mobkit_dashed_border/images/type2.png": "17a23dec244c3d1bb5b4ae67d7bd48b3",
"assets/packages/mobkit_dashed_border/images/type3.png": "2d50ab9d78a15b2f20012c3b9ea56c46",
"assets/packages/mobkit_dashed_border/images/type1.png": "9f8e612a54622229bd4b97e5357a473c",
"assets/packages/mobkit_dashed_border/images/type4.png": "9250b4ccf17768b5c7d6afcaebadf3f9",
"assets/NOTICES": "e6cd6624203609849e840efae72884ae",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/logo/iteams.png": "2a87e9117194cb48ea20fb89123a4188",
"assets/assets/logo/google.png": "e85a8081e60a305b4bca43b329f0cbd4",
"assets/assets/logo/mybn.png": "000bce4971bd02fa96ca0e5939573466",
"assets/assets/logo/mvola.png": "253c71a33ae26fd71e253286cd596453",
"assets/assets/logo/esti.png": "90fcf614f738a6c0d55f6a4ac72fa541",
"assets/assets/logo/zahageek.png": "a90bea886bb0987c0256120522d04ca7",
"assets/assets/images/hackathon_devfest_2022_1er_place.jpg": "e3d369a48378b5158cda04046d651e62",
"assets/assets/images/default_image.webp": "9ecce70921f2cbac827b69a089a5bc2e",
"assets/assets/images/hackathon_MYBN.jpg": "042161c6335a6406beb41fc63b8e016b",
"assets/assets/images/hackathon_mvola_2nd_place.jpg": "eb1e3e8657bc3493f977b4842d3ecb6f",
"assets/assets/images/hackathon_zahageek_2023.jpg": "733dfaa471e9774d4878a28901f584ed",
"assets/assets/images/photo.png": "3931a1bf468fa44bb6a39880ed15d074",
"assets/assets/images/piscine_integration_ESTI_1er_place.jpg": "9275d85742052d76797e36a7845dc537",
"assets/assets/images/hackathon_devfest_2021_3em_place.jpg": "ea581f34a22e1ebbc2970ff6b0f0304c",
"assets/assets/images/bg_pattern.svg": "68a56f8e1f5c90fe6e577cd26c2f6ef2",
"assets/assets/images/hackathon_MYBN_1er_place.jpg": "f619dea55094d241aa2d0f51d86dd6bd",
"assets/assets/icons/photoshop.svg": "f7410f42a32268ddf8c08f7fe00e8fb7",
"assets/assets/icons/html5.svg": "168b8884be49d14d299b7205f84be05d",
"assets/assets/icons/behance.svg": "e5acf275a42889749e4b1548af6313b0",
"assets/assets/icons/go.svg": "d0bac8bba2bc2d6420b3f36197dfc8ee",
"assets/assets/icons/PocketBase.svg": "0e2b752c54fdd5d42ed9700bec4b99f5",
"assets/assets/icons/line.svg": "1c81668697edf3dfc591aaef70787f5a",
"assets/assets/icons/flutter.svg": "42d883ab539ee09c781d3e91818ce712",
"assets/assets/icons/android.svg": "18f98a9157b453d084acf2dec1becbf0",
"assets/assets/icons/dart.svg": "7496010a72cbe7d6c02dc60b8362bd81",
"assets/assets/icons/github.svg": "e0efb614f8946988fa85fbbbf429d370",
"assets/assets/icons/figma.svg": "5ea5fa1ca299f8835b857ac04f982192",
"assets/assets/icons/osint.svg": "bab2489a68eca98f23a556370edeb453",
"assets/assets/icons/firebase.svg": "ca478b88f589bc8715b6d27d311bcfaa",
"assets/assets/icons/css3.svg": "ba6e41f8e7b5814918ffd5636892ef3e",
"assets/AssetManifest.bin.json": "f22fca5cd8234dca2263cef37c03403b",
"bg_pattern.svg": "68a56f8e1f5c90fe6e577cd26c2f6ef2",
"manifest.json": "7153a3b60445056c3f7f317a17a33434"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
