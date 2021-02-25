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
    "revision": "c939eb1ddb6eea46e7a00ca7a7c0d897"
  },
  {
    "url": "algorithm/graph/base.html",
    "revision": "cea8ec1b109e67f15c127fcf4b493beb"
  },
  {
    "url": "algorithm/graph/depth-first-search.html",
    "revision": "6358fc61afe3e3ecd72279834ece4cf6"
  },
  {
    "url": "algorithm/graph/kosaraju.html",
    "revision": "6078fcfa941b3f1136f18b58704fc610"
  },
  {
    "url": "algorithm/graph/topological.html",
    "revision": "631608a29535ee3de1673cf5e15d1a07"
  },
  {
    "url": "algorithm/index.html",
    "revision": "4f73948db85c5ee47bb4c0d1f53ddfa0"
  },
  {
    "url": "algorithm/leecode/longest-common-string.html",
    "revision": "6f96bac3e4280e53027a6cfc4b9a3326"
  },
  {
    "url": "algorithm/leecode/matrix.html",
    "revision": "b39ee03b227680a6bda8fc566e456d7a"
  },
  {
    "url": "algorithm/leecode/slide-window.html",
    "revision": "ad9c391e3ba28528a9690995d243ce11"
  },
  {
    "url": "algorithm/sort-and-search/bisect.html",
    "revision": "a6302fb5a06bfb898cc2a977de2430c9"
  },
  {
    "url": "algorithm/sort-and-search/sort.html",
    "revision": "15fb908ee638a4af8e3b2cbffa7f2911"
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
    "url": "assets/js/14.44067473.js",
    "revision": "f2bf616d6fc2f49c3c6f7585680235b3"
  },
  {
    "url": "assets/js/15.c83ede9c.js",
    "revision": "b9fc8f2c5096ce77bd4a0f9bd6db9176"
  },
  {
    "url": "assets/js/16.21e9583d.js",
    "revision": "7d066602394b13acd43645c91f1cd5e0"
  },
  {
    "url": "assets/js/17.4598b139.js",
    "revision": "ff8d1c5d655cd142996672a571e3aca1"
  },
  {
    "url": "assets/js/18.b9e23ea1.js",
    "revision": "b855605bff39884f953ca6926f7627ac"
  },
  {
    "url": "assets/js/19.e33f4dca.js",
    "revision": "4f3aa9ca4dddd6b67eb815fbdea90424"
  },
  {
    "url": "assets/js/2.6a3d6970.js",
    "revision": "67ccb461163432091a18f60b10775c57"
  },
  {
    "url": "assets/js/20.f0667e64.js",
    "revision": "686c024d0bf8d04d408efccefa97ec4e"
  },
  {
    "url": "assets/js/21.510aacfc.js",
    "revision": "75ed4e2725bd25fcc96bacff18c7802c"
  },
  {
    "url": "assets/js/22.48585129.js",
    "revision": "880980f39cc8b8da670e9ae44c778b07"
  },
  {
    "url": "assets/js/23.ec1ed9b4.js",
    "revision": "38f4da636ae2e3b8f4c96c041ae27f1e"
  },
  {
    "url": "assets/js/24.a50d62f7.js",
    "revision": "11ea886ff208397e4060568e4709079c"
  },
  {
    "url": "assets/js/3.0fe4ae5a.js",
    "revision": "80496d1270e7f59b8d9cbfd14cfa81a4"
  },
  {
    "url": "assets/js/4.71d6761e.js",
    "revision": "b4887f7b9e2d8191583b4dc46568a486"
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
    "url": "assets/js/app.8fc984d5.js",
    "revision": "e20745c85cf0028c9ffb559b0ab18e69"
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
    "revision": "1a1ff27834ee9a420e73d4fefc0b03bc"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "5c274e26b6e080ddd1a6e18160c414f4"
  },
  {
    "url": "interview/index.html",
    "revision": "d81100a1c6d4536c48cc156b78cf0fef"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/file/axios.html",
    "revision": "2072544b0232ba35f48dd95784c9f160"
  },
  {
    "url": "tool/file/wx2px.html",
    "revision": "6b8316b9417057a159dc848385b1f0d3"
  },
  {
    "url": "tool/index.html",
    "revision": "ed4d756d1b2e73b519cd0cf2b4fd3c23"
  },
  {
    "url": "tool/picture/lazy-load.html",
    "revision": "a53041ad46f2ed856eacb4ec57c4105d"
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
