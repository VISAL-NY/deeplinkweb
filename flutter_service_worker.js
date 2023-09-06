'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ff9de05425d643ea2149ba787d83114b",
"index.html": "9e9f42f794d071a1855f39ef0c908972",
"/": "9e9f42f794d071a1855f39ef0c908972",
"main.dart.js": "e779caa8703ece5df2c68f1c60c73f69",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e76b29b8873aaf6717aed9fec5d95fa",
".git/ORIG_HEAD": "c3976976f9336031d270eceabc0773d6",
".git/config": "249c53064d7218832cb0330d655af04e",
".git/objects/61/47ad488945d284dc9ca8ff5af68d4ada158a8a": "21198d871a76f53ae4aaa5835834c981",
".git/objects/3e/92bcc25d192e9a459db1bcbd235782709da7c1": "8b728eb3b8cc2ba51b0905b63c99a023",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ac/0f908b9c9c73da558b45d65cc5c6094874d3e8": "36f70284c45d845ee774c46e7288afe5",
".git/objects/ad/c7e268b78275a726518c7fe6bd48e827ac121d": "0788f1620e84806c064a3d89072db09e",
".git/objects/bb/611fd5251f20d7fa4eb674efc6414f008883db": "dc567dba4098fd14f6c34a7a87404096",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/ee4f66e944cf13df1850b064112f905f4d07b0": "831ac69126c835da64c5be912aec27f6",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/641757a31488c652a5e253103cd70830842bbb": "69e3990f4dc75aeb22c8972647779a98",
".git/objects/ab/57dac50ca8dfc74428ad362772c8a63b57f6e3": "56d85a07a2d704500e0c794f7dd92e6a",
".git/objects/f4/96bade81d7be85ffb7a3db5dc93d858839cb88": "e69f87ae0a9c16e389c96312c4fbd6a0",
".git/objects/f3/4ea8bc848168f3345fd89980116cb874502cad": "95487ec65e3905f8aeed67ca3998f615",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/753413741ae74c960fd4763db331492d88d482": "bf8722d8d59e4c2b590475be1f63032b",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/28/bc96d5ae7399d2884f59fe66f7a63b1b3eb060": "98eec2382c9fdd61c09847aa39fdb67d",
".git/objects/7b/0079afaa45bb8882a7462b7eb1585ba8c8b71a": "23ea9f5d6cac3b9b569204de17f21cdb",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/4d/57b7d004a6369a71512a467e16dcc2a45fd211": "3066dec9dce4b05ccb976f9fc730bcfe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/492596114c7aafce4d8e6202eb2cbdf19da3c1": "e3082b39d3212330fb7c31010d3ab8bb",
".git/objects/5d/eb1437253ac48d6a16605ab9e014e41b122b05": "2a8c441a9860d5e7e95fa07639ee5dd3",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/54/43fa90ebfbef36374bc4bf9641293d51845841": "54d31a84d8a880087617b37042297492",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6d/22c1c9f3054e605e7263d22f5fe69d5c9a6834": "2f7e9c1ccc35536ee1bd3adc39b8ef27",
".git/objects/39/cf9022beca18e89d389e7e4e723f351817dabd": "36f4d827292c8a7bdc230b23f52c0e1e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/f48beb8a19433c53b2e183084c79523e3d688a": "c3048fe30bde8473e53cbaa65d656ac1",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/1177b082f8d352ef55a1c87ef2bbdfdf22944d": "74cb1da5fdfd237960213a2165565021",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f4175012324f1d86a03276c83df51d636e9887": "ab5a320a1a7a7a87fd05c3fd2cbe3e87",
".git/objects/ea/2118be58e55eaf167c9b08112ed4cd90728e91": "272793a4721f344f7fa8aa4db7d51c30",
".git/objects/ea/dba3d3eb6fda061362dac92db75dd7c6d661cd": "e92aa80d74ec6d6b9f9153e3906b64c9",
".git/objects/cd/ffe918db18bd95384b7cd330c134e629ea08c5": "a3f0a46b78839e3fecedd1d616587d36",
".git/objects/f0/6dfda7ff388385c91b8eab4bae41b6bdb921f5": "0f9db94680186f4aeeb933ad4d2523cd",
".git/objects/e8/d7ac4da35d715639e1667c97216f70d8a1e72b": "629da413f952d31de56a24b13daa3887",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/23f2b237cef00818d6956d3fe4499879c42bd9": "53e4b1dd55cf62d6aa0cee0441d4f29b",
".git/objects/f8/b7e9cc4990e61aeae52869162dc8048007d1f6": "10987daf4bcb7bbec9a611bf5a935065",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4f/dfd5142f41eac0ae7ee9e1947336759b6b9358": "faf8ab65d631f5e5f31d0fdbb986f4a4",
".git/objects/4f/1d996085834a7342a9141b8a9bf662d28da4e9": "95df90a8db1abe31dc6c10fe534e9f03",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/76/25325a43327bbaf0f9cf0e414ae024ee79c220": "88be7ea5c6914d450ec7647aab8aad11",
".git/objects/1c/78f3b1229ac76255ddd6763db576e1403b0d1d": "ba50936ca5cf8f820b3decd2580eaf6b",
".git/objects/1c/5aeee4dd18cf10d191f86874a9799ce355dd89": "db25913913e2ced82a566ebcdb58e727",
".git/objects/49/830d93ebb79f147a633001db85eae298761807": "af5339baa685a9ffcd5f54a42e5abaa0",
".git/objects/47/f6c2408d26987e402ff9aaa9caeec4057b2783": "31c7f72ee41a65619623ebdefa7e7ca3",
".git/objects/14/ea3abefe9a1fea9277959fe4fc0ef30050ff70": "efff0861b97e3d4f185a9bcd386572a5",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c2725b221e3cd6e2e030d3a6b926be03",
".git/logs/refs/heads/master": "2193f5eb966eea16adca307e8f115f11",
".git/logs/refs/remotes/origin/master": "2ed61370d5be36ef78a1879ac6a703f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "13b2f71ce9dcb1d15afe5f91a5231752",
".git/refs/remotes/origin/master": "13b2f71ce9dcb1d15afe5f91a5231752",
".git/index": "54ba1ca56fa26d4672c2c7844b857b5a",
".git/COMMIT_EDITMSG": "023798de144bc02afda3aad8e4e7b882",
".git/FETCH_HEAD": "cf813badc1ae672222ba1a79952c569b",
"assets/asset/check.png": "c87ba8c858cdcf41583800e00f1a62bc",
"assets/asset/shop.png": "c87cb7df0f8e468dcf8bf127462adb8a",
"assets/asset/font/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/asset/font/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/AssetManifest.json": "530ccb41c31eb427a9cf946f01631eb8",
"assets/NOTICES": "2cad18584dfd7188da7e4a4b37419d08",
"assets/FontManifest.json": "f2ac81091753dc185407e83eac0a004f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2acc376a16cde6ec822de6a37098e695",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
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
