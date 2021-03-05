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
    "revision": "d1ea8116912426f6e1e98a9aeb351a2d"
  },
  {
    "url": "algorithm/base/1-base-structure.html",
    "revision": "e4e5d56807ec2a03dcf2741189ef843b"
  },
  {
    "url": "algorithm/base/2-sort.html",
    "revision": "e66718a16a8fe75a97f328aa6475c6ee"
  },
  {
    "url": "algorithm/base/3-bit.html",
    "revision": "5ffe9edc95169bd7cb3d6f0728d0b5de"
  },
  {
    "url": "algorithm/base/bisect.html",
    "revision": "69c41d2dfe62538ac7247880c3269649"
  },
  {
    "url": "algorithm/graph/1-base.html",
    "revision": "13135fcecfece7c82ab58c1ecc79380c"
  },
  {
    "url": "algorithm/graph/2-depth-first-search.html",
    "revision": "2e9762ccd8bbf83e00d1305d0546958e"
  },
  {
    "url": "algorithm/graph/3-breadth-first-search.html",
    "revision": "7dea4863432852ff03a15f9bc22ae1b0"
  },
  {
    "url": "algorithm/graph/4-kosaraju.html",
    "revision": "fbf7585e27c29ad4cebe074b8d1bfc13"
  },
  {
    "url": "algorithm/graph/5-topological.html",
    "revision": "d9bf2187dd67ec53cb0d1857d43b2349"
  },
  {
    "url": "algorithm/index.html",
    "revision": "cfb20c6d1b2fcf6107745b27c86d1493"
  },
  {
    "url": "algorithm/leecode/double-pointer.html",
    "revision": "20d368cac7b61273bed42f5abf5e60c6"
  },
  {
    "url": "algorithm/leecode/dp.html",
    "revision": "d778ec20fdec022b57ffbc4a1bec30ea"
  },
  {
    "url": "algorithm/leecode/longest-common-string.html",
    "revision": "848239a7ee4179e66e073fc1dbfd7f94"
  },
  {
    "url": "algorithm/leecode/matrix.html",
    "revision": "dad8e2ea7829a30f3bf849c070305b96"
  },
  {
    "url": "algorithm/leecode/slide-window.html",
    "revision": "f2dd20f0b157bae61ee56cceb78ee739"
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
    "url": "assets/js/26.b6d2d215.js",
    "revision": "e816b17c91e11a0358363068c1b49999"
  },
  {
    "url": "assets/js/27.898f40c6.js",
    "revision": "eccc1ab89d6aae2bbce0a63a0a16afb1"
  },
  {
    "url": "assets/js/28.4b8409b6.js",
    "revision": "0fa3d22fb34588122696af4dfcf4b779"
  },
  {
    "url": "assets/js/29.22c98e98.js",
    "revision": "82159d3c2bff255c01670249b697a52d"
  },
  {
    "url": "assets/js/3.46222fa2.js",
    "revision": "68ba52c519dd90629514c8a7cd2365db"
  },
  {
    "url": "assets/js/30.7780a932.js",
    "revision": "35a9bd33ba185d8a14e23791ceb234dd"
  },
  {
    "url": "assets/js/31.112b616e.js",
    "revision": "4e4353d2a020ca37dc504ddbf4e7d64d"
  },
  {
    "url": "assets/js/32.34671912.js",
    "revision": "01ff20dec9c5a1e13f0ae40db7930b51"
  },
  {
    "url": "assets/js/33.3e24fe07.js",
    "revision": "c3fa0832c02e659e49e9b1e2f03f2514"
  },
  {
    "url": "assets/js/34.31174cd8.js",
    "revision": "5186bd13f528a4be4413fe5affc2f4f5"
  },
  {
    "url": "assets/js/35.3493f98e.js",
    "revision": "df578075f0dd257984c517d21e157bf7"
  },
  {
    "url": "assets/js/36.d992e033.js",
    "revision": "4ce329643f13db1872b7d6cf4d6d0ad4"
  },
  {
    "url": "assets/js/4.207a8596.js",
    "revision": "a8e5f902137998411c3f0710dc4e3314"
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
    "url": "assets/js/app.996d7652.js",
    "revision": "50fbc2589ce60ab7b7c73b97eadece8e"
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
    "revision": "e1564a754c30c9b8d07bf53c71fb4037"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "cfe5ba20e83648f32b23bad15ebcc598"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "ef776f44ff92df4616ebeff27a4afbd1"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "747f9ed1e37dce3a00de2c512f6cfa6a"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "2be257f92e7956a42ac2e606c2c109f0"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "cbc17d7de19669170cfa5dac932028fd"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "1a9d2e85d4bb2e5ed9f4e92e7c3702a8"
  },
  {
    "url": "interview/index.html",
    "revision": "7a0aa415d1da58bdc07bfa1239514e0d"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "d9ba85972732602035844f61260cf097"
  },
  {
    "url": "interview/subject/ali_2021.html",
    "revision": "acf91293992751db1a08f8736127f1b9"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/file/axios.html",
    "revision": "0949d4fee646e31000d7f56504045180"
  },
  {
    "url": "tool/file/wx2px.html",
    "revision": "fd837ceada2b466ff91434cb1deb5abd"
  },
  {
    "url": "tool/index.html",
    "revision": "7c56d52ab754539420a28530f95eee4f"
  },
  {
    "url": "tool/picture/lazy-load.html",
    "revision": "d8cbb3d35c2926f28a6c5e1a6dfb1cf8"
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
