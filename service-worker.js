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
    "revision": "53da27b198e7807060356fdc864af3c5"
  },
  {
    "url": "algorithm/base/1-base-structure.html",
    "revision": "d5ffc82fab665d05fa30d920b723e902"
  },
  {
    "url": "algorithm/base/2-sort.html",
    "revision": "c8a18e1d05ef51998818356a3cd254e7"
  },
  {
    "url": "algorithm/base/3-bit.html",
    "revision": "3ad262e380becb5da240056e34dad309"
  },
  {
    "url": "algorithm/base/4-bitwise-negation.html",
    "revision": "1823233b12d58cdfc292af04d1f9e105"
  },
  {
    "url": "algorithm/base/bisect.html",
    "revision": "fb5889be377380bb8112a58aa7a8aa3a"
  },
  {
    "url": "algorithm/graph/1-base.html",
    "revision": "39b70b59f1fe496d0a083ea0e5263b71"
  },
  {
    "url": "algorithm/graph/2-depth-first-search.html",
    "revision": "a9e29d3ab2732c0f17d05bebd43cdd4c"
  },
  {
    "url": "algorithm/graph/3-breadth-first-search.html",
    "revision": "f6b0afd5a5b25808b0016a0110d4adbc"
  },
  {
    "url": "algorithm/graph/4-kosaraju.html",
    "revision": "ded61b6113d6713091ad56495841a7ed"
  },
  {
    "url": "algorithm/graph/5-topological.html",
    "revision": "87879dce98a4ee055f742bd745a56b8e"
  },
  {
    "url": "algorithm/index.html",
    "revision": "117ea9a89773a881cd048bdc8d8f44a1"
  },
  {
    "url": "algorithm/leecode/double-pointer.html",
    "revision": "b8debcc78a00ebf5d9c705e9539d7e24"
  },
  {
    "url": "algorithm/leecode/dp.html",
    "revision": "c489384f5e7602d5904557cd50313b0f"
  },
  {
    "url": "algorithm/leecode/longest-common-string.html",
    "revision": "051fa4dd099b924102657379ec65c887"
  },
  {
    "url": "algorithm/leecode/matrix.html",
    "revision": "246265cb0b661d378dcb9107e6fee049"
  },
  {
    "url": "algorithm/leecode/slide-window.html",
    "revision": "0d3d6ad51487a64a06faa500f2f0bfae"
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
    "url": "assets/js/10.f50443d0.js",
    "revision": "0eddab38b1f3755c726372c30be6d87f"
  },
  {
    "url": "assets/js/11.e7b37e49.js",
    "revision": "b8640f7e0291fc147ca9f2f96eb223b4"
  },
  {
    "url": "assets/js/12.fbffb36a.js",
    "revision": "1388a1bb29ce5d6b73cf3c46c58d5450"
  },
  {
    "url": "assets/js/13.420a70bd.js",
    "revision": "087afa0745e82a44ae12f08391a7ad1d"
  },
  {
    "url": "assets/js/14.4a00dc14.js",
    "revision": "70072dd5ff0ac5bf64728566255ee58b"
  },
  {
    "url": "assets/js/15.159de124.js",
    "revision": "4e52249ae0cd766be69af6e01258d8de"
  },
  {
    "url": "assets/js/16.2dc9f057.js",
    "revision": "3738f8dc753d39dcf02f30a7cc6551c5"
  },
  {
    "url": "assets/js/17.b7c82749.js",
    "revision": "5541b1bfd9fdc8f4b359f40072d9c687"
  },
  {
    "url": "assets/js/18.78d3c622.js",
    "revision": "f4f29f60f706e87b99d7ca55a84f337a"
  },
  {
    "url": "assets/js/19.e11eb36e.js",
    "revision": "410ef965794677805fd878f00c943f82"
  },
  {
    "url": "assets/js/2.de05c83e.js",
    "revision": "ecbd582e2fa5046878dbba9f97fa2793"
  },
  {
    "url": "assets/js/20.9363052e.js",
    "revision": "f1991153c66917c93682b6ec4a415e69"
  },
  {
    "url": "assets/js/21.ce5f38b5.js",
    "revision": "d1e9566a82f7e5bfe4b567a23d51927c"
  },
  {
    "url": "assets/js/22.30a0f739.js",
    "revision": "e8cb1c990e7a9235d3d2e58fcf4d38b3"
  },
  {
    "url": "assets/js/23.0e5de1ad.js",
    "revision": "35f98f5fc3fc1766c072fe0b275d8495"
  },
  {
    "url": "assets/js/24.afdd78b7.js",
    "revision": "6e8e496846b7cb0ca3e535b6c8ab0655"
  },
  {
    "url": "assets/js/25.6fd30dd8.js",
    "revision": "24135b1cf92bd93d730b40d9801dbb79"
  },
  {
    "url": "assets/js/26.a12c058f.js",
    "revision": "8f3bd14620488eb1e9cba72e40426cba"
  },
  {
    "url": "assets/js/27.07e81f72.js",
    "revision": "8d8c0704a20aeccbe78951a8486b423c"
  },
  {
    "url": "assets/js/28.b8155a30.js",
    "revision": "21c81b3e0f3e9ac6674e3e1beee85399"
  },
  {
    "url": "assets/js/29.57dec3a9.js",
    "revision": "7e2236afa3c36b1f9df22ce25d0962b8"
  },
  {
    "url": "assets/js/3.779e1b90.js",
    "revision": "1345b45963a6c500baf1888d57aa49af"
  },
  {
    "url": "assets/js/30.f36c0d78.js",
    "revision": "a7a03762cdd68f8fdb7702ef7525fe00"
  },
  {
    "url": "assets/js/31.7bb57d22.js",
    "revision": "70d7ea58d5a6dcdcb6b960d1c5709cb1"
  },
  {
    "url": "assets/js/32.c375a253.js",
    "revision": "6947ac991b706567bcad9505ac08d15c"
  },
  {
    "url": "assets/js/33.7baa5c8b.js",
    "revision": "8c4e6cbf177ff155db40b505bb10f298"
  },
  {
    "url": "assets/js/34.873c0be8.js",
    "revision": "3f21157931de41c1db4efd520ef6609b"
  },
  {
    "url": "assets/js/35.a1708901.js",
    "revision": "6cabc7338829effaa92351384ecd2cdc"
  },
  {
    "url": "assets/js/36.1a1a5523.js",
    "revision": "fa77177ea77cc59278f1929482369605"
  },
  {
    "url": "assets/js/37.e5ec82f6.js",
    "revision": "ebe70433eac08e12dc4e3a5e17a0cd8c"
  },
  {
    "url": "assets/js/38.66f96ad0.js",
    "revision": "0f842add7d38764a78e6e2c01fe00d78"
  },
  {
    "url": "assets/js/39.09da943f.js",
    "revision": "2a1a6662924096f791228803338df8b6"
  },
  {
    "url": "assets/js/4.73d3e315.js",
    "revision": "93d73ec7c88ab69e03f8d6c17a5ffd3d"
  },
  {
    "url": "assets/js/40.19622a62.js",
    "revision": "086bdabc2002d25cb4e2f865c8df682a"
  },
  {
    "url": "assets/js/41.fc14702c.js",
    "revision": "b40d348f9076378d658af62347079162"
  },
  {
    "url": "assets/js/42.89c3b585.js",
    "revision": "5d9bc5215c3e97def425caa42abbd28f"
  },
  {
    "url": "assets/js/43.2cd37374.js",
    "revision": "0551839f3180a98978b7cac40884d77e"
  },
  {
    "url": "assets/js/44.8e47a79d.js",
    "revision": "195dc3f74f2e392e26888c13cdb1f690"
  },
  {
    "url": "assets/js/5.27e0f7e0.js",
    "revision": "2b141756062bbe9a15c4ee1bde96edfd"
  },
  {
    "url": "assets/js/6.73523eed.js",
    "revision": "c3f774c7320271edbda696c6266b5d3d"
  },
  {
    "url": "assets/js/7.975c4a44.js",
    "revision": "ccd285f00deac2d861efca7183f91887"
  },
  {
    "url": "assets/js/8.5043fda2.js",
    "revision": "1f4aab6524caf3437fb062dc61f61df0"
  },
  {
    "url": "assets/js/9.4fc95bfb.js",
    "revision": "e6c4c4049dc2b37fe2f457820858d0ed"
  },
  {
    "url": "assets/js/app.a5e37998.js",
    "revision": "982c6780fd91eb8ba16411f366965f31"
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
    "revision": "c68c6566566a156dd6899631cdbe7529"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "d94c1efd031305b63532ea4892a77fc1"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "3141cab24a4fad2f65467f77e1129273"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "e472583ec3d2b6d78239fbd78640494e"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "95a7cc878694755e7b99117174461774"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "a8c8f6f56d16ac719ff7044d1898c0e7"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "633078cfe780243ce15c3d66ac4331db"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "80714be6c3b17a29718c9e37b3ac6912"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "03dc8d931a68e7ac9808a8a16809e7ad"
  },
  {
    "url": "interview/handwrite/apply-call-bind.html",
    "revision": "cd9da5d400d58b8739e5403ec21c54ce"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "7bbd29c87bf30da4d71f35fd91012c3f"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "fbea795484c5ce606584cb0f5a762f87"
  },
  {
    "url": "interview/index.html",
    "revision": "96cb225644f83a28cc5a19a486e62c6b"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "1bb4c273582da9908e104ea8b40017f2"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "b21ef6b76b8ac8b0f4766d887ff277a7"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "69c36ccac5d3d549b44094c70b5c50b9"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "0259af1c942a15ecfb4649a1d20b08c5"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/file/axios.html",
    "revision": "81a8841f4d36da3b4ed0428cdabbebaa"
  },
  {
    "url": "tool/file/wx2px.html",
    "revision": "9f0e79578ec57542ab9df1430aa37bea"
  },
  {
    "url": "tool/index.html",
    "revision": "b91b65e3f58d5edc6ba78ec23c902629"
  },
  {
    "url": "tool/picture/lazy-load.html",
    "revision": "39049906a0dc0b38c3005f8a0affd27e"
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
