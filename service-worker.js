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
    "revision": "92d39303725666174e6bdbd83981ce21"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "49486b5b0e9e28bd7c6d8c9ca7d04c6b"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "16e1ffb7a4270421438c040d6e5770bc"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "7379918eea9abf7b41f40b7041d4ff52"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "fcbb0f5856ef478c4aa04fc980b4e6ea"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "d1fe466d258782f165789e937049d964"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "4cb8beb5be7f195f46f0a2d982500943"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "3861e8cf69a5acaabda4d45b9517824a"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "a19ebc1c789da52eff89d05660bb0980"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "17fd5113e38393a7794d2aeb994fe43d"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "b1359fc6b88a374a804fe61bc23b071b"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "4dc77a8b81237e9c971a6bd56386ac7e"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "df2a81c526079830f2d3085bdcc4dd76"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "c7fc4dbe22550bcadb2b8c387b1d224e"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "380a44ec3bd1e9446b96cf35ea098eef"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "e65625c8c57c73c8850eefae54cfbeec"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "b8addc5752d43270bafbb11a38604f5c"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "91f8068d6ce82bcf4357101179f8f4ea"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "e32a3758c813553f913b30aebc869fe6"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "879207f9e9088955ef3fc2b4bb8ac94e"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "72a0ef3768f5d08af3d9a7e807a2b67c"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "ea827147a03d3eff165459da5a30a9d2"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "cd6f0920b555835024645f0ca188322e"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "627b245a1f422c2d8e576d72e1886984"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "b75cbd403b7181a7122aede0727fc9c2"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "e61554ea3effae884057db0df7e4b413"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "7d206d1df2a4cc01cb27d18c37328114"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "d8d8415bf235019af8d401a005ef829f"
  },
  {
    "url": "algorithm/index.html",
    "revision": "198116eb37803cf963befa32df06a9c6"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "4f85fa44c903313299513eec10d62b37"
  },
  {
    "url": "animation/index.html",
    "revision": "689d46fe5cdcdd969da1a7c778f89187"
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
    "url": "assets/js/10.2fd375d2.js",
    "revision": "14a36597119d81cf497e669cd09760c4"
  },
  {
    "url": "assets/js/11.f3099967.js",
    "revision": "93c51e600e839006aa9a8c6c584b2e22"
  },
  {
    "url": "assets/js/12.afbbc02b.js",
    "revision": "d02c3ded365093ab72f7e92644dc39ae"
  },
  {
    "url": "assets/js/13.9529505c.js",
    "revision": "df175a71665de6b8e84f777ccf2e987d"
  },
  {
    "url": "assets/js/14.1004d257.js",
    "revision": "4f63e8cc9f14874fe8a1214266349e11"
  },
  {
    "url": "assets/js/15.b723e463.js",
    "revision": "74ed972e7f93a071129425bc4fc4933a"
  },
  {
    "url": "assets/js/16.e0ea8124.js",
    "revision": "1847001392cdc97537e586c3bf007b9e"
  },
  {
    "url": "assets/js/17.30182a8b.js",
    "revision": "c252edd57c52074ab69305a1d9e1ac90"
  },
  {
    "url": "assets/js/18.88f805c9.js",
    "revision": "e120acbbfdc63816c9921a2a47d2c6d0"
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
    "url": "assets/js/28.f22540b6.js",
    "revision": "382e38a664ddf1bc25f386c96c8d88f2"
  },
  {
    "url": "assets/js/29.3a2d318c.js",
    "revision": "176e3fb6b86cb07a08a1a66017977b6b"
  },
  {
    "url": "assets/js/3.a7d05428.js",
    "revision": "f08830e44563ae6a2d43d83014eabaa6"
  },
  {
    "url": "assets/js/30.e7a8327d.js",
    "revision": "68f753b11d9f89b713d0cb45f05d74bc"
  },
  {
    "url": "assets/js/31.570a0b45.js",
    "revision": "c0f953bdb8a78b75cc50aa1ed6f61ec1"
  },
  {
    "url": "assets/js/32.d74d6c47.js",
    "revision": "4979c25764869297c49679191302838f"
  },
  {
    "url": "assets/js/33.e252e6ca.js",
    "revision": "f08256016fb273c0cf98277d5ff309c0"
  },
  {
    "url": "assets/js/34.fc1c5196.js",
    "revision": "d9ce40b3185a80cb1fc03d8fb326b854"
  },
  {
    "url": "assets/js/35.19194d57.js",
    "revision": "c87942631b8116224fcebe6cf990075f"
  },
  {
    "url": "assets/js/36.f75841cb.js",
    "revision": "65fee144ad61763c3fa487d6968134cf"
  },
  {
    "url": "assets/js/37.48846442.js",
    "revision": "a1fa81ae282f484975a2e343fe7c515e"
  },
  {
    "url": "assets/js/38.db82f0f2.js",
    "revision": "37c30fa7e39640ce3dbfe0a891cfa0df"
  },
  {
    "url": "assets/js/39.025e45e6.js",
    "revision": "e55f9da316d83321e2f67a79c8617ee5"
  },
  {
    "url": "assets/js/4.721bbb89.js",
    "revision": "e54621af644911f7b51e897439f339db"
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
    "url": "assets/js/45.266538e5.js",
    "revision": "d34f40b2c7b9e79f14a35a4bb4995149"
  },
  {
    "url": "assets/js/46.eb141b2d.js",
    "revision": "0798dbee42538b5ec890ebce5a1f71bb"
  },
  {
    "url": "assets/js/47.d8b12af3.js",
    "revision": "7b7bdf8b05d5d58a6f34cbac31b5ebcc"
  },
  {
    "url": "assets/js/48.74fce3a9.js",
    "revision": "39eb006aae14b6aa717c6c4759365c70"
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
    "url": "assets/js/55.2c810dfd.js",
    "revision": "1e680bac2dfa27f159456b9669f43ce5"
  },
  {
    "url": "assets/js/56.fe26974c.js",
    "revision": "bb54b68cfb4c0df0f48f3f5577c5599e"
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
    "url": "assets/js/6.3ad056b8.js",
    "revision": "fd6558747a65efb30857a70b17afe226"
  },
  {
    "url": "assets/js/60.885e4443.js",
    "revision": "b13e347ecec5d0f5b4f016a2bb4c8dec"
  },
  {
    "url": "assets/js/61.0586db2d.js",
    "revision": "31d9e4401713409e5fd977b4dd26ac9f"
  },
  {
    "url": "assets/js/62.559ff1d0.js",
    "revision": "5e22cbf29980dfd386a5b3cdebf64571"
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
    "url": "assets/js/67.f256f045.js",
    "revision": "871c75506d790810c6e40fb3a8e52c89"
  },
  {
    "url": "assets/js/68.02881b06.js",
    "revision": "74efd6e60997f809a48391003cc53809"
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
    "url": "assets/js/81.2613b30f.js",
    "revision": "772b2ea9f8ad3f3546d962edfedd9d9f"
  },
  {
    "url": "assets/js/82.cb55b65d.js",
    "revision": "c138ecbe78cfbd17e34c9842870c94e8"
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
    "url": "assets/js/85.3fc12198.js",
    "revision": "7eaae25ad3ce37385b40ec2ed371c639"
  },
  {
    "url": "assets/js/86.d1f8d35e.js",
    "revision": "b465139761261e21d12fa5ab89829ccc"
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
    "url": "assets/js/app.49b1b8ba.js",
    "revision": "d2ac8d1a5f7b2843de7a52bf6d6f0a58"
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
    "revision": "372da8ec4e49330fe049367a75403326"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "98e40849d373c2c74b16394b76e0d64d"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "e42edc87fb193bd4a4fe242f7a00805e"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "d26db134cd2792d626618004cb309148"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "6f01d72867771e7a194af5bcd2037ced"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "d6a044a44001b5272b3a03f83fc4160f"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "f9e3ffb8af9c12d4f1edc1d50053971c"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "8046b5c6a68cc9efa6c450d855ff84e1"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "325e429018c8baac31a32252345613d1"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "6d7721262cccd46ef6556f0727961718"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "62f3e132005e648566821bd07b90538b"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "894bce4d70d3695a344a4444538866a4"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "f9d724042d43418278eff794cc082c93"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "1453dfc0492645c9f50440aa5fab0e28"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "672966f5a82eab1fc0d523925de46b1b"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "d5ee40593a03945ac76ba726719ea2d1"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "febcd1472eb35b9b281c8867327909e5"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "7e1f42860ef3ec79873910635b70b6b5"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "842645ac334a71df7556e31b0cfa517b"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "8ef03aaf2c0ad10feddcd3d1a9e650ee"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "e98e405779a605e5a5dbac3cd0f2bc62"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "ab3ad2cdf71a6883916fa9b0fae77096"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "61e00bb3f40d5e6f3c71f8ca0e5b6378"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "79a13528b68006b545ec550b766699e7"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "e36d1357e057d6abca87ae7bd4102bca"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "e3fc1d327e9ae19ff0d6aa5740962534"
  },
  {
    "url": "interview/index.html",
    "revision": "04764cfee163d0ce33d8556857504f76"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "13c80e766ea1c4458d526ba66019a14d"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "4e2278e274a1541fb48a5f013526f04f"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "3f876120de9de182ace3932fe086f6a8"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "6b11fe1f8d24ff7d0e21d1d0559c3306"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "441d1d17ea71ad26c3d330ba76eea06a"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "bf6d0f367935066f6c339902d1d1a7a0"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "48e94cdd762c95afd7c12fe7c3886a84"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "8c6b5974b1475cc65fda7b63b4890dd5"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "9bc80219ff73a5d5f398139d8f11b2b0"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "3dbe2374e3d974285ced9bddc36b05a0"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "55cbe5c62cd28fc927dc9e4d117794c2"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "1cf0ec4fb8db4fc653989843138fcc0f"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "037d3585855a3b59ea482f92f83ad99b"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "c1ce9c945d13b4fb302f173c942ea38b"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "b68fa188784dd21c8646291f5c6dc58a"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "c534e2b75d6e2ee2d169cbcd3547bafe"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "ab57587fdab61eeee1ee6bacd1bb2d4e"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "f4441587175f182a63cccf06342af1e5"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "295e2c930eeb7d8620d594a152fd461d"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "a6426e3d66295b699da95d908b7436f5"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "bdee9349017f09ec0212318d3f228c90"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "8aaf0efe1aeb5b3ab9f4a2e167701d0f"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "e18c71dbd84390ff53358f86798e7091"
  },
  {
    "url": "tool/index.html",
    "revision": "ddecb7757752cf8be0eed709c717a2e3"
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
