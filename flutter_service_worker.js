'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f61cc0801962aecdf6e33ef008527aaf",
".git/config": "464d613742f43912497998bdf2987dc3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eba06ad8e0a54bd1fd09ff9f79834793",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9c8e1fd4ffa9630face35dd0312baf7b",
".git/logs/refs/heads/main": "9c8e1fd4ffa9630face35dd0312baf7b",
".git/logs/refs/remotes/origin/main": "d1342a3a1343bccc94f2703d4f0d24f3",
".git/objects/0c/f1acb22b6deb0097d47ec15e38022a9a6a1704": "fcf7cfc8e3bd908bc3f39a0116305c51",
".git/objects/0d/1e4dc48810ba69d23b2de01a60dd85673cfab0": "2adbd988dac073720e7243aac610aac5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/13/7c4e474d23978c2fd7827f8a8a5e555dffa8a0": "3499ee64fba8881dac1d7fbf1361a386",
".git/objects/16/1bdbd44c2ac73b932ca0f6f1cce36e7b6e19aa": "131cadcad82acd4100e61a0e67f63c36",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/f96be471b2a8e4e71eeddc2e2e1299595053ef": "cac6413f4e0411b2971bd59f2c9634dd",
".git/objects/1a/715e8b030003e13e8f157f000feeacc7144142": "c216df89d76ee886ab98e72848f5fd0e",
".git/objects/1d/3c599c3bc22e9449b1be8b3f344bf707e7d8b8": "31581d4175df5ef2afb03cbc34dc9bdb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/8891fecd63940ebba0fdd56d2bbf89006411d7": "60fc5dd3ff56df64293565df9ad16606",
".git/objects/28/99f452e829b13d9c0c5ed72b1e2f578dad3f65": "0a6c172d45f0699d72bd00e532b70a8d",
".git/objects/2b/c904ea969bc039ddc7d86b9e3f151bc2ba9eaa": "44443f54e4efd9a0911074e804a1f6d8",
".git/objects/2c/4de4a6d7846ec7294b7a20c2f2e0da7961f088": "84a25b31bcd85dcf319c789b96a18353",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/41/1b6c8d0e0013edd543f52ea3d94c301a47ba46": "2ece113e6d4a99f326c694c2db644683",
".git/objects/43/09f9e9e2d3dffe0fcd23f6963d8c20c8a04af9": "2bc4c5acb1bea2f65d38712fccb6e71d",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/3d3d8f2950c47df50f2d9e51334d00927e6f7f": "6fd2569d5298ea970607804c02124543",
".git/objects/4b/a92615b2f407674ec2644512870f3006d1bcf0": "8fc62ee8d3fc3c28af8da956b80dc287",
".git/objects/52/ee7f899a8213b4622c4cf1a428f9adea379850": "ecf6ff8967b0723bf37f17e35f83f757",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/55/f28493c2adc1bb75addd6cfa7ec3934982b221": "c18b826e3c98f469ab8088b1fc7afd95",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/3a19e60ec323462831eabe15bea84bcf706cb1": "5999a377746f6930f1747eb8db6abf0f",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/fbf1550e5f7ead924776245b5234cc18651258": "f31fb3c150081bc9c99dc3e47f9f68a0",
".git/objects/5b/63e882b115eb79ccc8c05ef07ebfe9007af732": "e9192919c987390798c0ad3779dec654",
".git/objects/5e/a43b748fef4df904db520f60e00dfc2b481c72": "e3f229bb906153f88304b85574d8a500",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/3d71c0bd53190f2bf1eb500478bcdd001c52fd": "c7036bfb692cab8f96cd36eb49468cab",
".git/objects/6c/373279a499aff1f62851ed1f7664b253c523fd": "a81f14157363b4ebacc138c46ff0e513",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/ff5700f72f03b5632dac1203e2a5dcf198a70c": "3076e4a7ce9e0c0fe47be2a495b51a5c",
".git/objects/78/86fab946ba1bc1af68a66a82e998a7ef4e951a": "851cf10a6ec600b6df998b094ac961fb",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7d/74b064f6f8fb9691b8e4dcb861fa5488a84c0c": "ca972a4cafa768dbb1db0a053e86f154",
".git/objects/7e/d334f076712f2744e26eb3f4d7e7664705d64e": "ed976d8e92dd12cc7c7015a2546dce4c",
".git/objects/7f/b4793a2a722d337d2704fc57fba79a92757e3b": "ad86690c81bcceadcf68f06264d0aaa7",
".git/objects/83/afcf29bc5bccecd33ead16ef61b2139cd24fd1": "015bf319783b3cd9c2e40f4774dceddf",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/ed2070345ab92f376411d2f62595bd542cd9be": "78de4c3b4a0b29c8e55e46e68b222e61",
".git/objects/90/c9d63952f8e4399daed0859a48122598a0512c": "35e51269d577e3dad60ebb253c19ce23",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/16a7a662dccadbaed17a016dca0b3cb80f783a": "c62d2593174a7cb4099715d6cdd816fe",
".git/objects/99/370e8c572a6d1bec04aa0eff12bdfb34c000cc": "deb43d51acd3b648d620100e222f396d",
".git/objects/a2/408b55d9b820082b007bd992532d0806c21c72": "c768e76086c4c67b896575c4f1ad1209",
".git/objects/a5/2ee9dfe5ada3e0c11221999cec2365cb455f9c": "a5e8f27468aa5944bfdc345518b583f2",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/ab/7b3ef2c2fbbb60214bc79371a3cea6e95f154c": "cb76a83ed8f2215728fc86a271d1f768",
".git/objects/af/cdcbecfc40c4653af8b6f41b45b4227150459e": "6e34f58b421ff77d8f79c50a7f297cc5",
".git/objects/b3/c4227092a5b3f7f0ca9be1b5513c4f58b14531": "05b010775ca05a1f0fadc0aa7ab70b89",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/cd5999603ecb7e071ef10c73e171a5394d6987": "7d8b320498e18f80dbc60ed68ede6c83",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cf/ecf185219198129656a42519f6f974e5d428c1": "ea0209e82a865de9f3a535b051aae984",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/e9c7c0c9b64561349983d8db614a67bb1d2e0e": "d282220538f16d5b9d2fd7fe1873c33c",
".git/objects/e1/01f38e295e32fe2a53d48b37b7fe49422937f3": "a06b0e8c4f0e7a916ae5c3b40a5dc5f3",
".git/objects/e1/d537555928858a0d01cc65485b1cb91af69199": "04f91eb16db1821256bc2fa26eb6edd2",
".git/objects/e5/dadf60a83273d38bed46fde267f5ec1a343b83": "e131587dfd4e9f8abba2f970a1ee33bd",
".git/objects/e8/6faafea74b301d428e47622b0f828d50bba40d": "e2888d77caf42d96cd9994dd3f4043ca",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/6309ab678ae18854d115c75953130be894cb69": "978dff2e9a612d79cf0efe577e1db621",
".git/objects/f6/19d6ae166926f1b7348756b059d1705566e9f1": "4dec03838342703c12098ed22b2b092d",
".git/objects/fa/dc6c83ee032034311d4be46f10acf2614071b2": "7521eb73bae25536189584a163d2ff68",
".git/objects/fb/d9f22a0e59fae3b28da67240e9710d45aca3c2": "96749c10ee9ab0ca59480d06ac0af926",
".git/objects/fd/92e347598845567a6df472bae34b3a699d6912": "4399f6c59daabf31d55d8bfdc6bf2bf6",
".git/objects/fe/20f6ff52be6f9e09978edf8b8106944e5a4e96": "a105a1e23a73a200550deb33acb5d9cc",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/ff/c713883491fb15870d8a8c6e5c1d242a112f1d": "80fab4bd1bfc67b19999ebcbc1c3490c",
".git/refs/heads/main": "32e3d5c4d6e7ab060253434a5ba6135b",
".git/refs/remotes/origin/main": "32e3d5c4d6e7ab060253434a5ba6135b",
"assets/AssetManifest.bin": "729694898d454ace62e025b5184817e3",
"assets/AssetManifest.bin.json": "630ee54c57a43d8bf7ee6b216074b559",
"assets/AssetManifest.json": "539cb824e5382fdb04208db68ca9a13b",
"assets/assets/1.png": "6c56cb99c5b6b8d396d1d7c5effc8095",
"assets/assets/2.png": "0a24b5223f08299df1b91aa217adadd4",
"assets/assets/banner.png": "5e061667d9591c613f1685daa284586d",
"assets/assets/facebook.png": "14955f77faa7dcc492daf87b97d17755",
"assets/assets/github.png": "b1dd376647549c8aa32f18564466eb99",
"assets/assets/hackerrank.png": "f588b5970e45ab1f5baf7afb9cb1e49c",
"assets/assets/icon.png": "563d116714d2400da2d3469158a7ebdc",
"assets/assets/instagram.png": "d319a463c5937f200b92ee9233f27e4f",
"assets/assets/linkedin.png": "a8c88457d36dda46bef819853f70f6df",
"assets/assets/me.png": "e96b55de7f8d4386189bba57244ea84d",
"assets/assets/p1.jpg": "1f07a66fba2b5ad489aee70f35ae1b3d",
"assets/assets/p2.jpg": "f13829e51ac5e94c94f797d1fbf05d9c",
"assets/assets/p3.jpg": "db114426f0c76552a6822a4a2cd55de0",
"assets/assets/p4.jpg": "98576aa5e688b01c52450fdc9fcd6e4e",
"assets/assets/p5.jpg": "9b6d9258bca565e7d8aaeb2704eeef2d",
"assets/assets/project.png": "e0b01823ccecc0c1624ab5832ee263a3",
"assets/assets/project13.jpg": "7625043333f1df2bb2de71a11ed297cb",
"assets/assets/project14.jpg": "766809bff7242e8deba315bc0c81a688",
"assets/assets/project2.png": "6aafecd7b8219bae568989b9f83f2a96",
"assets/assets/project3.png": "c940e51b34947ee20153517adb7dd10c",
"assets/assets/recipe.jpg": "dad8784a99bd562cb33c547b5c0bed11",
"assets/assets/recipe1.png": "e02a7077dbbe4c62ef0868784e55da8b",
"assets/assets/skills.png": "78a365ef7b77e2f12f515a362d6cc6d5",
"assets/assets/Some_my_work.png": "f745256708308be321af86a8a90c6053",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "7f72457f311dce009229ce1d8ff57d31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e91652fe05cc75b2ee90831a6b398b50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "36e02d9a865ae3a724fa2e6ac3928029",
"/": "36e02d9a865ae3a724fa2e6ac3928029",
"main.dart.js": "6e8a8e24ca0d9e454bf506cab7a76ecf",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
