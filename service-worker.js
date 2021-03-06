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
    "revision": "65e869ef5423bee02a9911fe47ad7ecc"
  },
  {
    "url": "algorithm/base/1-base-structure.html",
    "revision": "a281c11c9a7af27f4cd45a203bd92dc4"
  },
  {
    "url": "algorithm/base/2-sort.html",
    "revision": "b75a00d26136083d5d81e23a46c01434"
  },
  {
    "url": "algorithm/base/3-bit.html",
    "revision": "6eb44bcd58a75bb547c9b63aa8b3deed"
  },
  {
    "url": "algorithm/base/bisect.html",
    "revision": "c8c3ff60e9ce1a6d3c649de06718942a"
  },
  {
    "url": "algorithm/graph/1-base.html",
    "revision": "01a38227f65e4941f7afc691d0430fb4"
  },
  {
    "url": "algorithm/graph/2-depth-first-search.html",
    "revision": "730973cc613080baba5484e5d5f3e4ce"
  },
  {
    "url": "algorithm/graph/3-breadth-first-search.html",
    "revision": "ae3868d99f791bd9b5b71ff409064366"
  },
  {
    "url": "algorithm/graph/4-kosaraju.html",
    "revision": "709b7b75d905f6f4add34466b7848c37"
  },
  {
    "url": "algorithm/graph/5-topological.html",
    "revision": "b1cd9732205ca35a28b4fefb3d593847"
  },
  {
    "url": "algorithm/index.html",
    "revision": "a5c67430ecaf53728b9e033090e71627"
  },
  {
    "url": "algorithm/leecode/double-pointer.html",
    "revision": "92af8024e11015df80ac98d731230869"
  },
  {
    "url": "algorithm/leecode/dp.html",
    "revision": "225271383f488ab3fc97c9c4f4537561"
  },
  {
    "url": "algorithm/leecode/longest-common-string.html",
    "revision": "2dbd798dfaa141bc2b1f2ba47fb179a8"
  },
  {
    "url": "algorithm/leecode/matrix.html",
    "revision": "20c9efa41e87c8362982e1a5f46bf004"
  },
  {
    "url": "algorithm/leecode/slide-window.html",
    "revision": "8dc348d5faa1ca62ff5be620d09cc3b0"
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
    "url": "assets/js/19.4ef77070.js",
    "revision": "27ef2c167cf93a1e28dc0373d007f904"
  },
  {
    "url": "assets/js/2.6a3d6970.js",
    "revision": "67ccb461163432091a18f60b10775c57"
  },
  {
    "url": "assets/js/20.9cad78a7.js",
    "revision": "0a207c0a02c4996ba5b0af5c11649307"
  },
  {
    "url": "assets/js/21.80bcb941.js",
    "revision": "c71ad1092948101d54bd344c94d26d4a"
  },
  {
    "url": "assets/js/22.27d990e6.js",
    "revision": "dc97f6c48d3a70e278584d97317c36a5"
  },
  {
    "url": "assets/js/23.c521231f.js",
    "revision": "aea32f9e43dedc5eacebca5bd1ec116f"
  },
  {
    "url": "assets/js/24.9ab6a7b8.js",
    "revision": "061ada4d118ab0c58b32db276bc01154"
  },
  {
    "url": "assets/js/25.de48d826.js",
    "revision": "3ba2bd18965f7091187185d41bba620c"
  },
  {
    "url": "assets/js/26.a67ffdab.js",
    "revision": "c05ac908210204307c3847809c8453f9"
  },
  {
    "url": "assets/js/27.4c84018c.js",
    "revision": "8a001bf167a1ce9bb939697a243823c0"
  },
  {
    "url": "assets/js/28.1adc1736.js",
    "revision": "6019970ad7e13cb20fa99d384dec83bc"
  },
  {
    "url": "assets/js/29.3242e964.js",
    "revision": "7435d449c0bc39848926a7b41dba3ab4"
  },
  {
    "url": "assets/js/3.8279160f.js",
    "revision": "b328bfe72851d08e9ca2494d204820b8"
  },
  {
    "url": "assets/js/30.d763c5f2.js",
    "revision": "b2a00dc27f5bfa41024d0a133b3938fb"
  },
  {
    "url": "assets/js/31.3db2dba7.js",
    "revision": "526a0a7e2d0d7926967ef491f4efe137"
  },
  {
    "url": "assets/js/32.00ab3875.js",
    "revision": "652b248a2e4720e9b44f93e96f9bad50"
  },
  {
    "url": "assets/js/33.aa94d2e6.js",
    "revision": "b568500c24f4f349963c67ba8c5ce9fa"
  },
  {
    "url": "assets/js/34.0cf1f61f.js",
    "revision": "e198c13224697a489932383f64b3ac6b"
  },
  {
    "url": "assets/js/35.a7f9dd53.js",
    "revision": "cf98ebc5b404596421a0796488cedf2a"
  },
  {
    "url": "assets/js/36.fc668b62.js",
    "revision": "3ab5cf6511485fb8b25be2f3a1c29e45"
  },
  {
    "url": "assets/js/37.2a7d6b84.js",
    "revision": "074d0a99f44adcb2952f26be7c267732"
  },
  {
    "url": "assets/js/38.520fa2c4.js",
    "revision": "ae37abebfe7de2dc2ac924f11d91d024"
  },
  {
    "url": "assets/js/39.cff35892.js",
    "revision": "6e0090b0bf71b769220b91cb31ea510c"
  },
  {
    "url": "assets/js/4.f95e4b80.js",
    "revision": "ad0cf7f2b6e71186f5f44200da16e8b4"
  },
  {
    "url": "assets/js/40.7570853f.js",
    "revision": "65f210083c4515a36bc42b33e68ee6f2"
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
    "url": "assets/js/app.92f34704.js",
    "revision": "bd6f4ccf54663b39ef25f2e4ee5dbef2"
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
    "revision": "dd0380d27b8a56de9ce2cd0de9e3087f"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "c67f0285780e5bec572e49a5baa941f3"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "4a71b3d37faa620a21ca3474ec6855e0"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "628a58e54604c81529c18cbe14c12ec8"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "8c2217bc02b01efe2a536392bb26cc24"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "31dc31667fe1a21de6f308f0444e48fb"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "c9dd20e661276c09fec106a6218007ae"
  },
  {
    "url": "interview/handwrite/apply-call-bind.html",
    "revision": "4b3abc4797037f8f684c7d3e261ed571"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "f8b7f4be0fb6ced3acaf509a85806d81"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "6c0476dd7b5256fc7cb1364bcc4fcd27"
  },
  {
    "url": "interview/index.html",
    "revision": "cb3af49e38f81fa69a321e90c0aa3cfd"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "91aba5319855ecbb743635b961617089"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "5f6e5a7bf864d6bba321325d618b8232"
  },
  {
    "url": "interview/subject/ali_2021.html",
    "revision": "b932563e6489306d901a8f56331b26a2"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/file/axios.html",
    "revision": "cb8312e037919176702a83b918c80918"
  },
  {
    "url": "tool/file/wx2px.html",
    "revision": "ff7c528e9fedfcdfb4bc724d4e48730b"
  },
  {
    "url": "tool/index.html",
    "revision": "74e4e7ca19f98a14d8d3597681d4ce0e"
  },
  {
    "url": "tool/picture/lazy-load.html",
    "revision": "077082f7f20f61f127251b0405632421"
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
