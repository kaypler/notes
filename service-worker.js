/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6d2b70cd5ae685867003df72a9f143a9"
  },
  {
    "url": "algorithm/graph/base.html",
    "revision": "6beee438271805b59231afff38aeef1e"
  },
  {
    "url": "algorithm/graph/depth-first-search.html",
    "revision": "49c8d4d62f4d13943af2b7b1bb82d941"
  },
  {
    "url": "algorithm/graph/kosaraju.html",
    "revision": "88af0c689276ff82024cb45af7a378c0"
  },
  {
    "url": "algorithm/graph/topological.html",
    "revision": "7070f8abcb457d9b2c18e441eebbf785"
  },
  {
    "url": "algorithm/index.html",
    "revision": "62462776bec0fac0173f12df4cc4033d"
  },
  {
    "url": "algorithm/leecode/longest-common-string.html",
    "revision": "e2ccf1b71a5b02df12d7a2ceff1816f7"
  },
  {
    "url": "algorithm/leecode/slide-window.html",
    "revision": "45a90f61536621b96fc1163519b832f6"
  },
  {
    "url": "algorithm/sort-and-search/bisect.html",
    "revision": "367b07f39d984a1e5c6682d52e37ba9f"
  },
  {
    "url": "algorithm/sort-and-search/sort.html",
    "revision": "080393febbfaf2db18b9728bb95b97c5"
  },
  {
    "url": "assets/css/0.styles.aa6162e3.css",
    "revision": "22d58140feb724f54739f43a0647dd25"
  },
  {
    "url": "assets/img/depth-first-order.c526e57f.png",
    "revision": "c526e57f9348f15d8fb0677089436534"
  },
  {
    "url": "assets/img/kosaraju.443bf2a1.png",
    "revision": "443bf2a1f588e59a15715ae1fe5c6597"
  },
  {
    "url": "assets/img/longest-common-subsequence.ff764687.png",
    "revision": "ff76468712a5a357d66dc1543154bfd8"
  },
  {
    "url": "assets/img/longest-common-subsequence2.da97a247.png",
    "revision": "da97a247b60da073e09f402bc7f65497"
  },
  {
    "url": "assets/img/longest-common-substring.f83a7433.png",
    "revision": "f83a74339f270a5e02a4bb1c69d4911d"
  },
  {
    "url": "assets/img/longest-common-substring2.dbea9df4.png",
    "revision": "dbea9df492541a208d945c9cbe6a5d4a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/topological.ac9682e1.png",
    "revision": "ac9682e1b25879338b6540c6650ebdf7"
  },
  {
    "url": "assets/js/10.a447b651.js",
    "revision": "b302394c9588f00c237f1c04918d10bb"
  },
  {
    "url": "assets/js/11.27800d89.js",
    "revision": "8100cf1e62fee3f7e361bf5977e80ed4"
  },
  {
    "url": "assets/js/12.3700e3b7.js",
    "revision": "660947046243033ef3e342addc5324ee"
  },
  {
    "url": "assets/js/13.1862ac7f.js",
    "revision": "ddf3e1968eb482569202f57429a2b1eb"
  },
  {
    "url": "assets/js/14.346136a9.js",
    "revision": "9c4c895ce0ddf13af089ff5ebd480209"
  },
  {
    "url": "assets/js/15.1530c148.js",
    "revision": "f067f86c3275850f41618484bdc88d6b"
  },
  {
    "url": "assets/js/16.4d1540d2.js",
    "revision": "4d9a6d97eea57c93f50d7ef93010f20a"
  },
  {
    "url": "assets/js/17.9ece38e2.js",
    "revision": "c407ab5aec5f2ae726fc901dee6596c3"
  },
  {
    "url": "assets/js/18.9171322d.js",
    "revision": "b019f894b8221db1ca0577431491ffa1"
  },
  {
    "url": "assets/js/19.710c8d45.js",
    "revision": "ccf310c6ec7e01e246b4905b5cbc3453"
  },
  {
    "url": "assets/js/2.6a3d6970.js",
    "revision": "67ccb461163432091a18f60b10775c57"
  },
  {
    "url": "assets/js/20.67b7dcc3.js",
    "revision": "249838fee75ead0eab180bd38f4647d2"
  },
  {
    "url": "assets/js/21.91c33761.js",
    "revision": "454c0ed88705b77f228a65e49e29b56a"
  },
  {
    "url": "assets/js/22.1ba695ce.js",
    "revision": "b2140c159a3a579ef3e20630d0bd72b6"
  },
  {
    "url": "assets/js/3.0fe4ae5a.js",
    "revision": "80496d1270e7f59b8d9cbfd14cfa81a4"
  },
  {
    "url": "assets/js/4.70e1493a.js",
    "revision": "ab1342f9cdac609f13e3561a685fdc61"
  },
  {
    "url": "assets/js/5.1150d666.js",
    "revision": "1dd925ce819d86d03c8b2bf4dee1861b"
  },
  {
    "url": "assets/js/6.4db18ae2.js",
    "revision": "7d8f4656f0072e1c418d6857a3e2b506"
  },
  {
    "url": "assets/js/7.ceac84a7.js",
    "revision": "d1281acb461d4c43d6669e42d011f4fe"
  },
  {
    "url": "assets/js/8.c22f56c6.js",
    "revision": "1ccc9eb40759762a74cd7c7737dfd3a4"
  },
  {
    "url": "assets/js/9.52fee7cc.js",
    "revision": "d178f7e14c5e6ce3cb6541715174b8c9"
  },
  {
    "url": "assets/js/app.88c6df80.js",
    "revision": "2367b4d1ab22ffc91e96d5111a0fda81"
  },
  {
    "url": "icons/192x192.png",
    "revision": "e9d8b00136b434694ae5c7d9070dcab5"
  },
  {
    "url": "icons/512x512.png",
    "revision": "6ed3c7b4f468d61bfa61fea1e1df9903"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f321938c658ac33f3ac1bb4213870434"
  },
  {
    "url": "index.html",
    "revision": "342469146346289a43989629fac24c89"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "242e9e9468e2a4d97f3857130b3fc710"
  },
  {
    "url": "interview/index.html",
    "revision": "b2aefa394cfa7aa03f385b10954941b8"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/file/axios.html",
    "revision": "72e32ed538feb04c8a943c4e0ceacd73"
  },
  {
    "url": "tool/file/wx2px.html",
    "revision": "c6e4f0831d7c811d2d4e92e78e4d6899"
  },
  {
    "url": "tool/index.html",
    "revision": "7c549b8f553254119e97f16172fef402"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
