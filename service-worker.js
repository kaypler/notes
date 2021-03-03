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
    "revision": "523ee67e1afddd80eac822f1ac12b552"
  },
  {
    "url": "algorithm/base/1-base-structure.html",
    "revision": "1cd37e3407ccf731f0eeed8b60b680bb"
  },
  {
    "url": "algorithm/base/2-sort.html",
    "revision": "fbde9faadbf992c9befbe6175608fe3c"
  },
  {
    "url": "algorithm/base/3-bit.html",
    "revision": "191cb3019775058a7166611336f2dbb7"
  },
  {
    "url": "algorithm/base/bisect.html",
    "revision": "5610b153b76cba8d09400c635d3db947"
  },
  {
    "url": "algorithm/graph/1-base.html",
    "revision": "75f32267d9c4006540161374f5af1389"
  },
  {
    "url": "algorithm/graph/2-depth-first-search.html",
    "revision": "e6551f8dda0119cfe458784b0ab785e6"
  },
  {
    "url": "algorithm/graph/3-breadth-first-search.html",
    "revision": "571bb2934b5ebd8ce5626eaa344164ed"
  },
  {
    "url": "algorithm/graph/4-kosaraju.html",
    "revision": "4fec8d8541be4f994d929c5e125444bc"
  },
  {
    "url": "algorithm/graph/5-topological.html",
    "revision": "649af8571f8da590154c0dfec6c55a14"
  },
  {
    "url": "algorithm/index.html",
    "revision": "44a9d9b154178daacc2fc683f69eb2d8"
  },
  {
    "url": "algorithm/leecode/dp.html",
    "revision": "547edae3b7cda9aa181d280c9a54d199"
  },
  {
    "url": "algorithm/leecode/longest-common-string.html",
    "revision": "0e9f18cea113c972a2cce467274ad848"
  },
  {
    "url": "algorithm/leecode/matrix.html",
    "revision": "0e1a271381ef810fb4ac471e220b055f"
  },
  {
    "url": "algorithm/leecode/slide-window.html",
    "revision": "c485f57481e8669d62daad3a221c2a68"
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
    "url": "assets/js/12.40be336c.js",
    "revision": "13157669118df3f88875589914803af4"
  },
  {
    "url": "assets/js/13.4c5c8be7.js",
    "revision": "ffcf013b4330ac351cd83b27c84d823f"
  },
  {
    "url": "assets/js/14.49bc3632.js",
    "revision": "ff6d949e57ee8d76c54b0923545eb188"
  },
  {
    "url": "assets/js/15.66ce99a4.js",
    "revision": "c3c5251c9648e305876b869c060704ea"
  },
  {
    "url": "assets/js/16.af4bed2c.js",
    "revision": "581de88e05202177a3767eba257cbd36"
  },
  {
    "url": "assets/js/17.48a0bd6f.js",
    "revision": "b0b23a5bd23eebaa1ba2d9152e6685ba"
  },
  {
    "url": "assets/js/18.a65b178f.js",
    "revision": "10435319eb8382f56544462b70292a9f"
  },
  {
    "url": "assets/js/19.640cf58b.js",
    "revision": "b1f04485f5ffa1cc80229a3974504ce5"
  },
  {
    "url": "assets/js/2.6a3d6970.js",
    "revision": "67ccb461163432091a18f60b10775c57"
  },
  {
    "url": "assets/js/20.2d32fa4b.js",
    "revision": "5b11d7c613e804be5d40dadaeedcc6fe"
  },
  {
    "url": "assets/js/21.af335891.js",
    "revision": "ea07b40cb392b887b7d881dc6e2680c2"
  },
  {
    "url": "assets/js/22.8feac61a.js",
    "revision": "2e5f6504ad29a05ec8492da282c61e86"
  },
  {
    "url": "assets/js/23.d830d862.js",
    "revision": "7aa1c4f1060341fa7de04fb8b9123e64"
  },
  {
    "url": "assets/js/24.0809337a.js",
    "revision": "2f450df29ac934147c1eac67472f1075"
  },
  {
    "url": "assets/js/25.acba8d54.js",
    "revision": "b9ed1b9ddf9421ddb14a3ca9d873fcc9"
  },
  {
    "url": "assets/js/26.4942cc49.js",
    "revision": "a75fdbc2f5074923e0a1234c0f5e766b"
  },
  {
    "url": "assets/js/27.f8cb42a9.js",
    "revision": "784eee3a566a4b9d684988b8b747b3c9"
  },
  {
    "url": "assets/js/28.a8d4f507.js",
    "revision": "1e0a3ae8993c26bd8ab61d9173874b40"
  },
  {
    "url": "assets/js/29.15938c53.js",
    "revision": "0e211e0dad046a83da0fa38d358046f2"
  },
  {
    "url": "assets/js/3.93ecbb09.js",
    "revision": "72f09af17f0a6ba8c963d0c1edce0314"
  },
  {
    "url": "assets/js/4.c9fda954.js",
    "revision": "8a707e2b7998fdc3d3bfaa751e8c1e18"
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
    "url": "assets/js/7.5f3c1951.js",
    "revision": "9a6d0227ebf3109af6756150bf375bc5"
  },
  {
    "url": "assets/js/8.d7080a07.js",
    "revision": "ab9851a689d02211c5eb958eec90bb0e"
  },
  {
    "url": "assets/js/9.52fee7cc.js",
    "revision": "d178f7e14c5e6ce3cb6541715174b8c9"
  },
  {
    "url": "assets/js/app.429bcc7c.js",
    "revision": "9ee5f78c5d6d8f5fe43c5311cb84e8d8"
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
    "revision": "4aa38dcd058cee70d1fd2483d6e9c8b2"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "6b1ae61fe841640bb418ad8bea2d93cf"
  },
  {
    "url": "interview/index.html",
    "revision": "330fc720c9636eaeefd29cb4e7fd12b5"
  },
  {
    "url": "interview/subject/ali_2021_first_round.html",
    "revision": "b86305bf126d8b08114b1f5ea1c2a077"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/file/axios.html",
    "revision": "82fe313167c0de110b21fcfe05f4f1c5"
  },
  {
    "url": "tool/file/wx2px.html",
    "revision": "143d8b7c7d89c6bca312b9f1a6d12089"
  },
  {
    "url": "tool/index.html",
    "revision": "b3e24d77391e7cc9ac252b41c6931744"
  },
  {
    "url": "tool/picture/lazy-load.html",
    "revision": "5e8cd6c78f17e9ba8ec57df9ee1f056b"
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
