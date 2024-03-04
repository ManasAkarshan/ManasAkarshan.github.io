'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "5b124873e9af63d06cfbe86376d06e4f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dbc1216c650b240d11e4ab0f0bd60b83",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2b2d0188895d859fbacda34e7a77dba6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ccab4e6e1b08d7d96636010f7427dc86",
".git/logs/refs/heads/master": "ccab4e6e1b08d7d96636010f7427dc86",
".git/logs/refs/remotes/origin/master": "b6cbf852dfe63852397aa977225af794",
".git/objects/00/0b2b2868b1c492fffbfc2d8cde5056065c78ae": "90704232e1351d553a08ef45e08cc3d5",
".git/objects/02/7bb4ce9e8db691008610c921e8ef01af6d75e4": "47f8de3be1ecd1b176c7fac1df6c1976",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/099365f33f11645cbca77fa351374cdec682bd": "b2c7b18b342c5f05dbbe8c83ead9e68b",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/0c/64f1764617613b49dd610e1381152701c47909": "35eaf638d7a184b22016025cd8b2c266",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/91b3a7056e0958574a71f81ffb52dce02c1b0a": "9ed90bc06195fb7d2db10ec1f6fc0e88",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/48200dd8619e951152bc1526e6b52e2e9375be": "689207b5124e2b52d5ae966e6a43e0f1",
".git/objects/0f/bde152bb7e8ddec5a5a01a8d987d0b4d797db6": "c1421bdab35ee9a5903ef4cd987d6839",
".git/objects/14/7b9bc8512e091b79cc112e799c5944dbdc6c63": "79e1735165258d71959f5762837bcff9",
".git/objects/17/ae422a1146ac83562cfc44b0a0bdc64ebbf3a0": "3bec3f5678269644206bbba737df8788",
".git/objects/18/1ff1d855bae699ae4150c2e5bd60ea77fb9017": "adc9ae78fce011d8ddb0345d82598f3e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/718f1bcf4af0e40c980bf0f3b1511f5ede49fa": "9e709cb142a8dfb36f922be32cc009cc",
".git/objects/29/71356c86272025303f44a704f581ba47c04972": "ee5d9ae1317a4ca672d0f09794076f7d",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/33/ad16116d75787c7d0ee632acd34e0a5c44b2a2": "5e723e7aebe342540304399ef24e8e2d",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/41/441834680b2a84d9b93df09394852b9cea8960": "ad10c20b66ef30690bdfb6bf71cc80bd",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/544ba125341b0fcf36c7d67533021737d54cb0": "faba682ae1a812c0a8df83f73ab97985",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/41ebf32daaefe63d412a79700b9125984a4649": "abf5f422fb0b8c4dbde4a96cf09c4fcc",
".git/objects/4a/9626d9d7bad332900cbcc54308efd73ceb96a1": "bcea1fcddf03c6a04fab1164c43ea808",
".git/objects/4b/cc27f077f9f7c5b2ce38b49a73d418293e303a": "d0e23e7261c4dd9d2b08403a36b50406",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/6d275d2a60b14c053f3c6f357e6371e67d8b3f": "e0123e3e1ee3dbf431fb2ab5f59a0a68",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/ab7fbcefcd205f0c36a285c1ece459afcf3269": "d4fe76fd24542cc43d81fc7434d10a58",
".git/objects/58/f7c6e6e098a1598a89b94a1aae321ec855e3a0": "b527b4ade3b444741e493308c5bca9e2",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/e7c2c7728f05a9ce4bbbc88d38d9b0146c171b": "1ecb5cf5889d64525bb4133ff5fe71ae",
".git/objects/65/222123417e3aedca074aaee8585266e4dedebc": "4f1bb2b86d9f9545f4f00403f38f37a2",
".git/objects/84/29daf41acf00a1b83363852930840a18ea9b5d": "b86008f46a32a011164850a254550608",
".git/objects/8b/09d2e2ac1cb36e2e1bd49c28c3df078f0d4b18": "7a232ba6546ae341d03b9c7dd2f1b89a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9a/f16f4d06ae41ed54f3be932796169c2b9a4b26": "b2c1b3dfd60030798137d545a3238ae7",
".git/objects/a3/59ef735147a26f7582fd70db3c509cc6a32b91": "9aad891449574e9f1941648df2db81ec",
".git/objects/ac/53061000290260cd465f691bf8208aa1346f92": "6304949c97781ae27a1f016be0bb283d",
".git/objects/ad/af7eccb1e948125530b91d853a29d21a7c81db": "49a9e2ae9a754fb113fec7005bb65298",
".git/objects/af/69f3bdcd1216106e404f6f13188a7c5ec11afa": "a4857585e689ccb4d728d04ee727af91",
".git/objects/af/abfd020699d9510a9e695275878be382df4de6": "475d2b11cd97ffae0004c98a4840cb6b",
".git/objects/b1/deaf8ca19e2f023ea86c0dfee3e7b932f001b8": "524937c6c4319afb13e2690eb0317185",
".git/objects/b4/52d2692462fd0f3eb2fc7527ff67171f884b4d": "3f00067191901ea791c757715de401fb",
".git/objects/b7/317b0933fbd6b1f61cc4af252b15d39850537b": "0e5ab0bf5c441342305fc54aa431386c",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/f75e53a1d7f3086e74049548d110cff48869de": "c608e99920522402d2d7d9adfacbc19d",
".git/objects/c6/883cd9a2980c6ebe6241df485185e75b74aa6b": "33ac83aac642b322da13ee42c14a713a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ef8766094b43a911183319e5660876beae23d4": "032f8e59bb94468622b12ae6694e0a38",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/c8da2f0ef8a62c7df77449d48b8ad3ce376ade": "4fd45138aa9bfbe43f1f0eaee60d180f",
".git/objects/dd/62d5d2a9456d4dc7ea43abab1e756d33ecf675": "8a7a2715fe44b5e90100b238a3e02936",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/4ad99d3314d750d97683e2ef9c744d2d1e7aef": "715486c6ebac357bdd21243362656de9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/c2febd90480b590bdbbf952cbb6c8aac3023cb": "1ce29b0f91199d392743e54a84e9dd30",
".git/objects/fb/7266b9dab1600b313ccd70602ed0342eaf64e3": "6ee68b39e52288c5f175a51c87383fde",
".git/refs/heads/master": "b0154eb20e2ce8c3aeb0184008e19bef",
".git/refs/remotes/origin/master": "b0154eb20e2ce8c3aeb0184008e19bef",
"assets/AssetManifest.bin": "11e9ff1e05f91aae4339e0b0c5c28df0",
"assets/AssetManifest.bin.json": "0c9219e30a01c64e80067dde197c02c7",
"assets/AssetManifest.json": "fa8048b10f726f92d99a9ba0efea20f6",
"assets/assets/coding.json": "8bf44f3c241488c71059eeec52d4cae5",
"assets/assets/image/android.png": "ecde7511334594f63cd32ba952acff99",
"assets/assets/image/bg.png": "ba3b984e70090ac8ac7379aa7e4853a7",
"assets/assets/image/cpp.png": "e4f46516b8d0d4b45f958b7e404f2d55",
"assets/assets/image/dart.png": "c43efab451a1511dcb627e453cd58d49",
"assets/assets/image/desktop.png": "bc01bb55df6ad680c8c52240747eb745",
"assets/assets/image/firebase.png": "d51d8b2ff28db324ed1be2766f793c43",
"assets/assets/image/flutter.png": "30fdc4df2202417c34646c7d429b8fec",
"assets/assets/image/git.png": "bef8eca1168bd7039d8d519e43015705",
"assets/assets/image/ios.png": "9df56a35624c43c3eb63bb753389cd61",
"assets/assets/image/java.png": "2e67ec6cd1d6da0f2e3f85e476a45c74",
"assets/assets/image/web.png": "cdf95b427f17016536cb57f5b727ddde",
"assets/assets/project/coffee.png": "886b39d17247ffa0f47c3ade75830252",
"assets/assets/project/grocery.png": "d9e01eb0fe936451f7d788aa74829c5f",
"assets/assets/project/news.png": "5c54e0466ca7c0f367446458d831e59e",
"assets/assets/project/sneaker.png": "f836c6550beccb2c00f37ebf33b7e7c8",
"assets/assets/project/todo.png": "a8dbd6d283245a539a7f89ca29b0fb9f",
"assets/assets/sns/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/sns/instagram.png": "4f7cb5fbb28d0f9ddc97641f8b288735",
"assets/assets/sns/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/assets/sns/twitter.png": "a0dde15362829a17a42588d91ead6ea8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "08c93576456b99bfe0dbfb762960a80c",
"assets/NOTICES": "403fdff1a0225d32d19e02da3b92923d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "50249863d20abeda2784c3c14278afdd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f102c41178e397cc25b67b25cea24f1c",
"/": "f102c41178e397cc25b67b25cea24f1c",
"main.dart.js": "80cd5ac401abfd988b89d41461cdfe55",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
