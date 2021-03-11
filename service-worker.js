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
    "revision": "f57ad9fb134b0047c4c94817c09559ee"
  },
  {
    "url": "algorithm/base/1-base-structure.html",
    "revision": "fe6215cd4805007866f1fb05422e8e2f"
  },
  {
    "url": "algorithm/base/2-sort.html",
    "revision": "93899c5d7107137ee73ec94362fa14a9"
  },
  {
    "url": "algorithm/base/3-bit.html",
    "revision": "03193fb0c5951da249bd7992ac6c4946"
  },
  {
    "url": "algorithm/base/4-bitwise-negation.html",
    "revision": "c7b7659d470d83c3768eb48bdb02c4f4"
  },
  {
    "url": "algorithm/base/bisect.html",
    "revision": "bdb2793da6851f132aea4d0724ee856e"
  },
  {
    "url": "algorithm/graph/1-base.html",
    "revision": "4a3977d5763093b0d73793eba4568f5c"
  },
  {
    "url": "algorithm/graph/2-depth-first-search.html",
    "revision": "5abd705f9a33f6d6f92c27b8a6ce7ada"
  },
  {
    "url": "algorithm/graph/3-breadth-first-search.html",
    "revision": "f1b582af42f85b5da452c0cc3671c2d0"
  },
  {
    "url": "algorithm/graph/4-kosaraju.html",
    "revision": "e1df244a458401e6fde00dbe03aab4d0"
  },
  {
    "url": "algorithm/graph/5-topological.html",
    "revision": "e5d741096f2ab57c1d8aeceb23f9a9a2"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ea8dba263ed0cc65f1feebe1a0fbab84"
  },
  {
    "url": "algorithm/leecode/double-pointer.html",
    "revision": "dd8fdd9fc871d8bdf3e298c23ce3a516"
  },
  {
    "url": "algorithm/leecode/dp.html",
    "revision": "2f8911c153c7ee384f8c0cd90a7d4f18"
  },
  {
    "url": "algorithm/leecode/longest-common-string.html",
    "revision": "87f910a4d3613955d1951339fc8a708f"
  },
  {
    "url": "algorithm/leecode/matrix.html",
    "revision": "2312f45a06a0f1ac716f965f864a5ec8"
  },
  {
    "url": "algorithm/leecode/slide-window.html",
    "revision": "8274290c6e54fad31d8f94ad61695125"
  },
  {
    "url": "assets/css/0.styles.aa6162e3.css",
    "revision": "22d58140feb724f54739f43a0647dd25"
  },
  {
    "url": "assets/img/async-defer.6dae3337.png",
    "revision": "6dae3337f10cf4d7184e87a7f2859340"
  },
  {
    "url": "assets/img/box-model.eea9f77e.png",
    "revision": "eea9f77e15f5a1ef4301e5c67aea4b51"
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
    "url": "assets/js/10.f349a2c3.js",
    "revision": "1f7b01b6a68e6e3c1e878aec7878e668"
  },
  {
    "url": "assets/js/11.efa75d0e.js",
    "revision": "7c4ba20c04a36597859993dc42779bae"
  },
  {
    "url": "assets/js/12.9764e120.js",
    "revision": "26d7adb3a8e2b180f0f631ed6c3e9b11"
  },
  {
    "url": "assets/js/13.9e95bf57.js",
    "revision": "794631a6ab1b334d07857a7cb61de2ff"
  },
  {
    "url": "assets/js/14.e6f4c17f.js",
    "revision": "57dad9af4f7e50c12b99850c7c670c61"
  },
  {
    "url": "assets/js/15.74cc90fb.js",
    "revision": "de3eeb326cf227a04d30d5d6befcb4cf"
  },
  {
    "url": "assets/js/16.69854d8b.js",
    "revision": "c118a599ebb6668ceaf2be3f14fc5869"
  },
  {
    "url": "assets/js/17.b08df0e2.js",
    "revision": "caa2a4eb7b33745121fc4ffbf17cf095"
  },
  {
    "url": "assets/js/18.70fcdfab.js",
    "revision": "8fff5f3bde488b5f23bd5cb50dd9d132"
  },
  {
    "url": "assets/js/19.6d83b199.js",
    "revision": "afeac6cff051eb002b1c93148db2e40c"
  },
  {
    "url": "assets/js/2.865003c4.js",
    "revision": "f78f7e063fe27eeba5d48f9439a09ffc"
  },
  {
    "url": "assets/js/20.003d7962.js",
    "revision": "5edc39250397720a354da0c881a682cc"
  },
  {
    "url": "assets/js/21.4e9824e8.js",
    "revision": "950caf8bcf264e393600aaa3f88bb83f"
  },
  {
    "url": "assets/js/22.a0690017.js",
    "revision": "5049a3be0175cdca2ed1615558aaf637"
  },
  {
    "url": "assets/js/23.1366da9e.js",
    "revision": "c15215b0f873ed4e80c663d83c83e263"
  },
  {
    "url": "assets/js/24.6e02bdf0.js",
    "revision": "f5ec380469367ce31d4158d24cd4981a"
  },
  {
    "url": "assets/js/25.84191a43.js",
    "revision": "7791c015e283df2c38af648a7c15b4fb"
  },
  {
    "url": "assets/js/26.e58ee92e.js",
    "revision": "2d4a8ef684bf5d4300133fd1dff012e7"
  },
  {
    "url": "assets/js/27.33b243b6.js",
    "revision": "d13cca78680bfceb8542f6cc339db1f9"
  },
  {
    "url": "assets/js/28.f7d59986.js",
    "revision": "64f8182bb1811f3408cede643e2891ba"
  },
  {
    "url": "assets/js/29.46bf8aeb.js",
    "revision": "b217327f88f787ab04bc45b1029d4277"
  },
  {
    "url": "assets/js/3.adbd0a83.js",
    "revision": "a3d0d6947e1409939c6e452e2976be33"
  },
  {
    "url": "assets/js/30.3e42a797.js",
    "revision": "160115b8e44f015206f2e71aee4a444b"
  },
  {
    "url": "assets/js/31.813ad74c.js",
    "revision": "83cd0aa5effe63b8678e4e53a4beb654"
  },
  {
    "url": "assets/js/32.bdca85ef.js",
    "revision": "8194bf8daf7d3d2bd13726599ceb3b1c"
  },
  {
    "url": "assets/js/33.acff38e2.js",
    "revision": "a61be8d616e1ac6103c69bfc72bc6e99"
  },
  {
    "url": "assets/js/34.d471ed85.js",
    "revision": "17741848d848a1970f46da0f77562a2c"
  },
  {
    "url": "assets/js/35.c40f06d7.js",
    "revision": "0701d5f43e94f4f3bc951dd786b5d6b3"
  },
  {
    "url": "assets/js/36.50fdc9b9.js",
    "revision": "775ebfdd6e4125eae1a46312ad29884d"
  },
  {
    "url": "assets/js/37.2bd7cf0c.js",
    "revision": "607a4c0843d0f099270ddf4b2fbcd684"
  },
  {
    "url": "assets/js/38.f33d6609.js",
    "revision": "3297b3b769c1b2d12259f842f70e44df"
  },
  {
    "url": "assets/js/39.2b823d7f.js",
    "revision": "bc83cefe86a9c50b2b38ece2a49236bc"
  },
  {
    "url": "assets/js/4.575b6643.js",
    "revision": "c0f8f2d8e523fbb3e1e49dcf52b8a30b"
  },
  {
    "url": "assets/js/40.ce48634e.js",
    "revision": "11032b750bd05ca77f74b31ae29cd7b5"
  },
  {
    "url": "assets/js/41.cbc2cb5b.js",
    "revision": "7102907caf683ba45d2bafa3e7e3ca57"
  },
  {
    "url": "assets/js/42.0f4c0150.js",
    "revision": "ebafa3dbf968b94e6aef56e8bd821b1b"
  },
  {
    "url": "assets/js/43.8de1aa6e.js",
    "revision": "efd69e3ddfc64602648f7c8876f2e541"
  },
  {
    "url": "assets/js/44.998da665.js",
    "revision": "6dcb11c34ebd4ce2a408612d8dfc8f3a"
  },
  {
    "url": "assets/js/5.c4b9fa11.js",
    "revision": "6460e02aa024856537baf17d67e49827"
  },
  {
    "url": "assets/js/6.4d49e1e1.js",
    "revision": "4466e0a69bea476762f74a5844ef10ce"
  },
  {
    "url": "assets/js/7.52f684c4.js",
    "revision": "098d9784e3f3f73a92555f5ba7070f22"
  },
  {
    "url": "assets/js/8.e45bcb40.js",
    "revision": "58aad1f8b6032f2f1a1fed9df5e843a5"
  },
  {
    "url": "assets/js/9.0aa3abf7.js",
    "revision": "8b888a8fd826cf43efda0fa4941b091a"
  },
  {
    "url": "assets/js/app.413da877.js",
    "revision": "641b5d45370083585227bed494c31864"
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
    "revision": "29ce6cdcc930f6436667d7c47c2ce182"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "6ea5749c2dd0ff1d670c4d4643c00747"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "9b1884d0bb1947a1572c5c4e4d535c03"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "66a360ac301589e4874e6718ea348938"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "b4f19bb416637be076aa50a67466cfd1"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "badb937ddc5b9838cd5cd76ff413b758"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "948b3f05f3cc96b1c627857ebe8db665"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "834e436ccbc43c60eb1ffcfc3e4b9dce"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "707ca26a30c049f7cfd709620b086d8a"
  },
  {
    "url": "interview/handwrite/apply-call-bind.html",
    "revision": "738c3f2643d37981c46f21be606bb5b4"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "7da038aa8803577c927b36bc61536228"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "4edb4ea6cd8e28be2cf65c85febd911a"
  },
  {
    "url": "interview/index.html",
    "revision": "88ce9d32eec1aa1ff856deb51813b718"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "703e5cd510a80ddfc4e43bb478a1bc5e"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "da383f7de3fa3a5824d21fcbb81c37b8"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "368523330fbf60ce5f92aec7bf92394f"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "c9a4f54d90a60ae80bb506b36451da17"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/file/axios.html",
    "revision": "7a92849f734f0d17e67eb7a51e23c408"
  },
  {
    "url": "tool/file/wx2px.html",
    "revision": "6c3a0d247934eff8a50135c10174d70e"
  },
  {
    "url": "tool/index.html",
    "revision": "10644e026f35f674f2749e200408776c"
  },
  {
    "url": "tool/picture/lazy-load.html",
    "revision": "667985875155edb06c3a4addf99de211"
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
