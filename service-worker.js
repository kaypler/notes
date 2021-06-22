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
    "revision": "59aa45837893bc93d31097d82e74ebb6"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "8d3621bd692b9c9ffa56634f60a4f4a1"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "f47f35bb515f3a5a5d4c111387f360eb"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "bec353823582c9d9d27a8cd27495a012"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "fb086e20f0a07bd5d4c51967dd637e10"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "d7f9ef0810865db42a1033a4bb05fedc"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "ad831fb2c42b6135d62a01d97e51726f"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "ce587c23d26aebf24e064c48385bff0b"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "5d284208b814298a9410bf66f5578766"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "cbca055606f51b02c80c9a22f929364c"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "bf34cb264357d7990aef4edf5b231b58"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "634199900179b805cf423867b7e95115"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "5778df2989a97879cb5626de1ef989b8"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "04c6e7de12a4d7ea159997c50d6efe2f"
  },
  {
    "url": "algorithm/4-leecode/1-array.html",
    "revision": "b1a0b934999f4ea65d32f45095147655"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "5d8ad18ca07e956150a3f2a8e81393ed"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "7d46e4a00afbd4192bbe9652a2a0059c"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "35d72f0b4232c3f474ab94d9648ebbfa"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "85e4b02a107c9f30b27b561bf1350888"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "52668ce673aff2649a16f18e67db2284"
  },
  {
    "url": "algorithm/4-leecode/2-stack.html",
    "revision": "254a14103a8ec24f69ab1a0012215229"
  },
  {
    "url": "algorithm/4-leecode/3-linked-list.html",
    "revision": "49bd1418fe9fb66f1ae38201ecde0a76"
  },
  {
    "url": "algorithm/4-leecode/4-tree.html",
    "revision": "532054af5c2710f69b6c7f1e4d992979"
  },
  {
    "url": "algorithm/4-leecode/5-sort.html",
    "revision": "1f12bbfcd1a25a5536d055bb27cf4240"
  },
  {
    "url": "algorithm/4-leecode/6-binary-search.html",
    "revision": "bb452455d1340b5df0bf8a0b7b3579bf"
  },
  {
    "url": "algorithm/4-leecode/7-longest-common-string.html",
    "revision": "add158759e5e730b1468ab04a9a468e9"
  },
  {
    "url": "algorithm/4-leecode/8-palindrome.html",
    "revision": "487e34316cc9d9ec7cbffdbd2633ee53"
  },
  {
    "url": "algorithm/4-leecode/9-double-pointer.html",
    "revision": "03f3cfd925209b13556470d0a5a5bba9"
  },
  {
    "url": "algorithm/index.html",
    "revision": "658b01cb17a1f2e700bf8f8da3e6a517"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "c4c9c02f2041d8747b9cef3723028629"
  },
  {
    "url": "animation/index.html",
    "revision": "15570d61b84d15e54585655867e6e709"
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
    "url": "assets/img/browse-1.a1728f08.png",
    "revision": "a1728f08001fa0e8e2ba653e286972dc"
  },
  {
    "url": "assets/img/browse-2.6b722f5c.png",
    "revision": "6b722f5ce0e4a8161cda22d95036d8ec"
  },
  {
    "url": "assets/img/browse-3.4f7ebd2b.png",
    "revision": "4f7ebd2bae107a309e5aa4a171858976"
  },
  {
    "url": "assets/img/browse-cache-1.1f62052c.png",
    "revision": "1f62052c9e8b5b5d19ff6e462a908fee"
  },
  {
    "url": "assets/img/depth-first-order.c526e57f.png",
    "revision": "c526e57f9348f15d8fb0677089436534"
  },
  {
    "url": "assets/img/dp-knapsack.62b3b6e5.png",
    "revision": "62b3b6e525ade7574a70005c3a099115"
  },
  {
    "url": "assets/img/event-loop-1.bdd0fac7.png",
    "revision": "bdd0fac7920c4c4be595918965f3c357"
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
    "url": "assets/img/prototype-all.7a43bd87.png",
    "revision": "7a43bd87647c26105654c9f6da1f1b97"
  },
  {
    "url": "assets/img/prototype-chain.83202e60.png",
    "revision": "83202e60d1820badc7d6db64b359d5be"
  },
  {
    "url": "assets/img/prototype.fa12b767.png",
    "revision": "fa12b76797e2caa250c044bee6613059"
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
    "url": "assets/js/10.6dc6e671.js",
    "revision": "1012e5b88abfa6d76c78670e90901276"
  },
  {
    "url": "assets/js/11.fe396d5d.js",
    "revision": "a0e968e2450b3333a48e3fb866b8b263"
  },
  {
    "url": "assets/js/12.b3db1759.js",
    "revision": "3bb6974b69a89e821780b92070d1db56"
  },
  {
    "url": "assets/js/13.70d667f1.js",
    "revision": "ec4a2a84662dd74c04d9cff15d2e6d6f"
  },
  {
    "url": "assets/js/14.8bae0f2a.js",
    "revision": "7e5b6cb0aec6d8e5a73473843ea03ba0"
  },
  {
    "url": "assets/js/15.b16ad9a4.js",
    "revision": "e0149816b84ac24541ff6e86cbe9f35c"
  },
  {
    "url": "assets/js/16.e0ea8124.js",
    "revision": "1847001392cdc97537e586c3bf007b9e"
  },
  {
    "url": "assets/js/17.4c1daa4f.js",
    "revision": "2ed40c6245bd5bb54e9179b73ae609de"
  },
  {
    "url": "assets/js/18.6713902b.js",
    "revision": "47ad331ea37e29dc80dcdf717c15be54"
  },
  {
    "url": "assets/js/19.494f2130.js",
    "revision": "4fd50f48b99788fe1798c20a20b5ab4b"
  },
  {
    "url": "assets/js/2.2f2324fe.js",
    "revision": "027a5f58c4a9ffc7e903e5df06ae6bd6"
  },
  {
    "url": "assets/js/20.8d812d11.js",
    "revision": "79d1f74fa5d294b275240ba3d7fe989b"
  },
  {
    "url": "assets/js/21.6c8309bb.js",
    "revision": "c2103ebff1e0bdf68549e9eb2e1061da"
  },
  {
    "url": "assets/js/22.72a77a36.js",
    "revision": "39b70a437d88e23826f1523421d41765"
  },
  {
    "url": "assets/js/23.820b0f5f.js",
    "revision": "7c14612ccd04b4f8ed8995cc8560cd7e"
  },
  {
    "url": "assets/js/24.80cb2cad.js",
    "revision": "2c492687b003bff2224249b1be84d882"
  },
  {
    "url": "assets/js/25.fccf6247.js",
    "revision": "afae486cacb5d6ca9add0b36c6c5efa2"
  },
  {
    "url": "assets/js/26.620a6a11.js",
    "revision": "499bed6433b0ce9b49af8a5975f0ebbf"
  },
  {
    "url": "assets/js/27.5dac51b1.js",
    "revision": "7119a8a37b52be898061d2210bd6c7bb"
  },
  {
    "url": "assets/js/28.32c8c2fe.js",
    "revision": "1b131078d41835d3a5957f9b4d107ffb"
  },
  {
    "url": "assets/js/29.bd59dc14.js",
    "revision": "d11e7df5f7efbeca6a972032b4fc1bc5"
  },
  {
    "url": "assets/js/3.a7d05428.js",
    "revision": "f08830e44563ae6a2d43d83014eabaa6"
  },
  {
    "url": "assets/js/30.9b49bae8.js",
    "revision": "383a21b50f00eea8cb9a5b91272352bf"
  },
  {
    "url": "assets/js/31.c870f243.js",
    "revision": "d226d1c971fe5842244bc3341597b291"
  },
  {
    "url": "assets/js/32.93f461a1.js",
    "revision": "8dd6c9aefaadd095284eddc61ebb9cb1"
  },
  {
    "url": "assets/js/33.7fbb6ac5.js",
    "revision": "ef1b3578a63310b73a69469fd26d52cf"
  },
  {
    "url": "assets/js/34.602cf033.js",
    "revision": "f387759907b17bbb04aa46119ac2fd57"
  },
  {
    "url": "assets/js/35.37ad9f8a.js",
    "revision": "8aca719f90922ee4c30bf78c742df042"
  },
  {
    "url": "assets/js/36.30ba3c3a.js",
    "revision": "02d7e1ac6e2b5fa0a38a17e9b8c948ec"
  },
  {
    "url": "assets/js/37.10160616.js",
    "revision": "6d067052a32609908287336af408edc0"
  },
  {
    "url": "assets/js/38.d0cf5c65.js",
    "revision": "82818fb01b99c810afb4d5073cd4d1b8"
  },
  {
    "url": "assets/js/39.f79f51a5.js",
    "revision": "09d64f7b73c69c509a5fbacab0253f9e"
  },
  {
    "url": "assets/js/4.4a3007b4.js",
    "revision": "8e5ca4d96992cda0ee55ea37e1ff3fb5"
  },
  {
    "url": "assets/js/40.df9aec77.js",
    "revision": "81ade65037effa5e31f9aeb6ccf913e6"
  },
  {
    "url": "assets/js/41.4f8d27b8.js",
    "revision": "79e667d3b13a5b81edb453f97b422731"
  },
  {
    "url": "assets/js/42.e870329d.js",
    "revision": "5604fe8e0a7721e4f276a082c8f2f8db"
  },
  {
    "url": "assets/js/43.2054f6da.js",
    "revision": "7b9435580083d5c465ad48acfc92073f"
  },
  {
    "url": "assets/js/44.c642ac9d.js",
    "revision": "36b0b625fe301f88f62e83da5605f1d3"
  },
  {
    "url": "assets/js/45.443106a1.js",
    "revision": "aea7dbca86fe10e83d012293ce1a7037"
  },
  {
    "url": "assets/js/46.b9882963.js",
    "revision": "43a0e0ffdac2116a009d8c0e151fda48"
  },
  {
    "url": "assets/js/47.eb8b2611.js",
    "revision": "c255d41596608e9fda2287b309134b66"
  },
  {
    "url": "assets/js/48.9d16624b.js",
    "revision": "c4c624dfdc8664490f83c06b3d0e2330"
  },
  {
    "url": "assets/js/49.9f6984ca.js",
    "revision": "f3b09d04ebe7273138eb0c9f334310d0"
  },
  {
    "url": "assets/js/5.676a6ae6.js",
    "revision": "9bbbc4691e1e7a996ba1269228a051ae"
  },
  {
    "url": "assets/js/50.f652464b.js",
    "revision": "a7decd8718fcbf1c6415c288b8f1f587"
  },
  {
    "url": "assets/js/51.d753ec74.js",
    "revision": "3ad1c52c189656f845906eb252c21f09"
  },
  {
    "url": "assets/js/52.8615b0d5.js",
    "revision": "9f96ecccb47ad1405f41d1e795eede00"
  },
  {
    "url": "assets/js/53.acce5e0f.js",
    "revision": "0baaae92aaed79fec56cd850df43918c"
  },
  {
    "url": "assets/js/54.ec0a1deb.js",
    "revision": "678f349184dd19679a878fe13155adb7"
  },
  {
    "url": "assets/js/55.682343ce.js",
    "revision": "9511c3482509f5a2f058de9daee4feff"
  },
  {
    "url": "assets/js/56.5774eb2d.js",
    "revision": "da17d466d9784af2eda21013bb8040bc"
  },
  {
    "url": "assets/js/57.e0824839.js",
    "revision": "a04876892f5937df49bf0d140e03bb65"
  },
  {
    "url": "assets/js/58.f8dd3e43.js",
    "revision": "9fc8b461f0d351abd54e8a10aaf455ba"
  },
  {
    "url": "assets/js/59.8db52167.js",
    "revision": "67d492324e7db68784a775f77e71d0e4"
  },
  {
    "url": "assets/js/6.d95f3165.js",
    "revision": "59d07ea7da86d40a0e90dec16aa633a1"
  },
  {
    "url": "assets/js/60.885e4443.js",
    "revision": "b13e347ecec5d0f5b4f016a2bb4c8dec"
  },
  {
    "url": "assets/js/61.09d88a48.js",
    "revision": "d53bdce8dff0405767a246a628448823"
  },
  {
    "url": "assets/js/62.2823cac5.js",
    "revision": "2b7a3d6cbe09d3694161158396c20f74"
  },
  {
    "url": "assets/js/63.a6f6e4ef.js",
    "revision": "e86a3936ffa123b77a5e4ed0a6f68650"
  },
  {
    "url": "assets/js/64.c4ec0abd.js",
    "revision": "a96fe505d4e2aaf95a30d0d6c27fa51b"
  },
  {
    "url": "assets/js/65.1f820128.js",
    "revision": "fcf2a93b058d53c6b40fef6378a503f2"
  },
  {
    "url": "assets/js/66.df982ff1.js",
    "revision": "00a475ada56f1a95df1af66af2404fc2"
  },
  {
    "url": "assets/js/67.9803b6d2.js",
    "revision": "10e662ae99eaf60615eae452c4b702c9"
  },
  {
    "url": "assets/js/68.dcba05dd.js",
    "revision": "ae82a90127ca6fa1ab9045b3b78c565a"
  },
  {
    "url": "assets/js/69.c0329549.js",
    "revision": "14966697e44d1d0f5b2600be61fffb42"
  },
  {
    "url": "assets/js/7.a65a81f8.js",
    "revision": "7c6a01ecf659200f3de36b6157c55c99"
  },
  {
    "url": "assets/js/70.472c0868.js",
    "revision": "d34e4a11f53e1e862466fdddc7370bfe"
  },
  {
    "url": "assets/js/71.f7fb7a60.js",
    "revision": "33fc8b757fb0ac621ac732e1954518b3"
  },
  {
    "url": "assets/js/72.65c958ed.js",
    "revision": "fdd7992bcc3bfa406328ed41fdda3ee3"
  },
  {
    "url": "assets/js/73.2aace71b.js",
    "revision": "5c2c15940613b93f78c85017b4875d85"
  },
  {
    "url": "assets/js/74.3ccfaef6.js",
    "revision": "cba0be1c9a7c265c7efd271a868b1138"
  },
  {
    "url": "assets/js/75.95bc742b.js",
    "revision": "de24f3f7d9d2058d1edea2a469190ae7"
  },
  {
    "url": "assets/js/76.2f85ec76.js",
    "revision": "e2547a6cae4328acf9307ead121abb0c"
  },
  {
    "url": "assets/js/77.5446cbf6.js",
    "revision": "be74e0930520875cb2c25f49f2b866c9"
  },
  {
    "url": "assets/js/78.d3de7663.js",
    "revision": "13ac6626cfe59541c63351e72665a40b"
  },
  {
    "url": "assets/js/79.314b972b.js",
    "revision": "4a6248a96b35fa457391d31d14a891ff"
  },
  {
    "url": "assets/js/8.14f8a4c8.js",
    "revision": "86827b43f64660a1b6054e4fce867f36"
  },
  {
    "url": "assets/js/80.231a6d5f.js",
    "revision": "1be4f24154d30d27a7b5a7e28cebaf2c"
  },
  {
    "url": "assets/js/81.b7a2a0dc.js",
    "revision": "15c97a8d09571ee54d62034448bd1748"
  },
  {
    "url": "assets/js/82.ff7da1b1.js",
    "revision": "edee675fc029dbff51ab78565743589e"
  },
  {
    "url": "assets/js/83.517ffac2.js",
    "revision": "2a298899f673d120fcf91a561b5d6b5f"
  },
  {
    "url": "assets/js/84.70cff43b.js",
    "revision": "88aaf1b278d0e3faf4c7263bb412e9c3"
  },
  {
    "url": "assets/js/85.cdd8e7eb.js",
    "revision": "823e9b269799654208c89cd2dec309cb"
  },
  {
    "url": "assets/js/86.5382ead6.js",
    "revision": "cf97f602e8c0e84ec3dbb8319cd9aac4"
  },
  {
    "url": "assets/js/87.35d1532b.js",
    "revision": "5c2042fd9671ad5525cc40fc23301849"
  },
  {
    "url": "assets/js/88.e5106dc7.js",
    "revision": "fce7fcf8205d6fb46d9cc406145923f3"
  },
  {
    "url": "assets/js/9.1e6ccf2c.js",
    "revision": "4518695ae1f4cd8cc5b24898428256c8"
  },
  {
    "url": "assets/js/app.9449c160.js",
    "revision": "d43cad0d8ea3f68a1f91dc335a6b63a8"
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
    "revision": "c2b7bd735a221b05c4e2285126502021"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "272f42a69523214cbad16e40fc35440c"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "0d5225b9d82f665d40da34d3aa77bf4a"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "1033815210bcfe815927afb0f831d477"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "2d289eb5207c6f08b93ab258003336e1"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "6160a424126d33ea358bbbf2ce0b6ff0"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "054df939c3d7a473e4bc3de8498d8734"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "42cadb4ecbd40ee61fea1e77079f998c"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "d7309c9a9c51ec3039da667dd7e16019"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "fe4f06ecd2e67dd14158019612edc0a3"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "c091c4702d3e5eac1c71898e1c10fa79"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "713fea08ffadf7c15265b183447ce70d"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "f9c87a07913a0ab0294a6c8641b21d56"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "a99fb3ec2e38faf55a097b9514ee8493"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "cea90724079a60157f3d138690000d26"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "9e94d8acea1dbac86ea19197afdfbea3"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "0d5057a32d4ece88d24d270723dbe722"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "9ed78ac07461a2fe7623e595605a867d"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "8ba8e8b3c0350a8f62e7c2ee1bfbf164"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "bd79d332882f3b28624ffabb4fc4c2f4"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "39de373af330d50dfabadffc8f57613e"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "019803abd61ead5e5ea0fc2402bf6392"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "293d619fa790bffc873b2c93a06536c5"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "d34c6d444183c5e2c482c85c996e6fe0"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "83b9f466dac73501d340b34bda0551ab"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "74fbe5cfbbf323b50412295fb29ebd1d"
  },
  {
    "url": "interview/index.html",
    "revision": "ea84cca87206ebfde5e73e451ef413b5"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "98145cb121413a87ceb3c5b9e24bb2ba"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "590cae11847f9e541b0af3996615a0a2"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "fe575ffcf1d20fae5aded260d2cd9311"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "7e7a21e8d0f2784dcd20530a2b76948f"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "9ac733da96568b8948bc1dbf33d4db9b"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "7c0bf296f72bd26bee944e8178848b10"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "3c0e61c2b51d36414e3953f2be81af5b"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "8405eb61c6bd891f6f41811057fcd1d7"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "b98f17886ffc3320fd05c4cbc045b3fd"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "234266196dcdb46ef293dd7ee38d0631"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "1ea47c199a70e0fa6e19131a5b7e9ea0"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "1f470a652a9e738174fdfe8833c0426a"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "3c237429a061fd03e4348353ebdc481d"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "ff59583896054ba8aa3c37b906525260"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "9a58b37dc5dc01a79b57c4e0a8b2b788"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "b78f942be6e9daf8f571e105535e9f4c"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "cdb12ab3c5ec5223fdbab8e57d019d87"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "173148fc662b897e0e615c20cb4a0b38"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "be5ebb19f9c366e6db6ff39cb2d2f71b"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "781241336446df1a5bf7b494c76c095e"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "86c0dc32b28f31ad9910f84750d92477"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "06d8eb17373a392699a2fcb1ffee7417"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "64bdace35b7e32710e5c27d87c895d7b"
  },
  {
    "url": "tool/index.html",
    "revision": "ecb102aa14c7ccd02cbdf95cfe51681e"
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
