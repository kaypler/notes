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
    "revision": "cb94b96fbb56f9593587721e7aa1158e"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "42f5f781fec169ae72109d0f83e21544"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "45b379800f541a929f774d108001d544"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "f01e09f355492aba75ce0ca2321e7986"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "f7c2c2f4ba0a11068ecd9718adef5cc5"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "a8f74bfff8cdbf29acd1a7c2ed8871ab"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "8a22ae5d613de9bdc70b2afc421dee21"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "2f1191aa580c88f92a530cb57f3dc26e"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "a85306aae6209159fe8341aa4651401f"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "63204039a31bde4d7f3aedda5924e2df"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "32d153e085b44f8bf0d3c6b89c7d3e71"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "cfe33168331a94b032c54a4e97ac4c51"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "bc55eb4daf9f532fff141ca868d17b8a"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "ac8df5cdd46f6008fdc463d9a284b0ca"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "b21b24ed11f91a5969d56f0454146cdc"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "d5a55c73ccb7d48a87f60769a334f7fa"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "a658bdec3928e6320a174e05783e47ee"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "2baea47d29bbefc9fbe15642d9bec177"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "3f743a607e3effe1902a3d0b61af6a39"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "42b31bd24ea3d8374dcfd985df17921d"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "c3630a3da1fd6b350ef01c15e45cb4e7"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "8fd0839612422fb73b8e3d034ce3196d"
  },
  {
    "url": "algorithm/index.html",
    "revision": "8941eb8a0d7a30523ebf9456d176a049"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "1c5c3f6ba57587d351a40aba5c4f2c2c"
  },
  {
    "url": "animation/index.html",
    "revision": "8767edf2f7dae272832953cd62ebd309"
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
    "url": "assets/js/10.0fca25dc.js",
    "revision": "ae2e5fce646b770540bc962f0fd5aade"
  },
  {
    "url": "assets/js/11.c7ca0915.js",
    "revision": "38d1fe93c6011bc1c1e74d7a0dcb27de"
  },
  {
    "url": "assets/js/12.27662eda.js",
    "revision": "63dcb66ed5c34dada4edc402e82ff4a4"
  },
  {
    "url": "assets/js/13.05110f75.js",
    "revision": "c3eba74e9414b90fa919d62ba7c16d98"
  },
  {
    "url": "assets/js/14.8c6fb364.js",
    "revision": "482f05b7d140029516d337c728ae339d"
  },
  {
    "url": "assets/js/15.b10a2f5e.js",
    "revision": "e6ef6f77cfbbd1b09f6e78155a2d297f"
  },
  {
    "url": "assets/js/16.241d4c90.js",
    "revision": "482dc5037ee7a1448b9a610f2596709a"
  },
  {
    "url": "assets/js/17.4c1daa4f.js",
    "revision": "2ed40c6245bd5bb54e9179b73ae609de"
  },
  {
    "url": "assets/js/18.910625d2.js",
    "revision": "05aff41d2de3304787875aaf032149f9"
  },
  {
    "url": "assets/js/19.5931e10a.js",
    "revision": "27576d2bce0919c28c5331b99916c7f4"
  },
  {
    "url": "assets/js/2.6a2f5ef8.js",
    "revision": "1395c4869e1af97da1bae65dd8e9427b"
  },
  {
    "url": "assets/js/20.21ef1632.js",
    "revision": "f2eb2afd38d726e9aaa7e5bb41886305"
  },
  {
    "url": "assets/js/21.0425a945.js",
    "revision": "a981f419d89d64eee9097ce2cc8ddfda"
  },
  {
    "url": "assets/js/22.2ab928a7.js",
    "revision": "5ab29e42073bb39af214f79bea00fbf0"
  },
  {
    "url": "assets/js/23.a7739dc1.js",
    "revision": "00aec05110620a26403900f9d5208f83"
  },
  {
    "url": "assets/js/24.9eeb86e9.js",
    "revision": "33be939c2f82094739c281876fd57398"
  },
  {
    "url": "assets/js/25.38e068fb.js",
    "revision": "ddfc689b2fa3c41737b7f972984b41e9"
  },
  {
    "url": "assets/js/26.12a808f6.js",
    "revision": "8b0608d5d0cd59324b40da1af6221663"
  },
  {
    "url": "assets/js/27.dacc5127.js",
    "revision": "e6843181d812dba9536237d0752db31b"
  },
  {
    "url": "assets/js/28.06c4e38c.js",
    "revision": "115b5eeb7b8c31b7cab5d9b9642ee4bd"
  },
  {
    "url": "assets/js/29.bee47698.js",
    "revision": "453bfbcbf5a353adbf1740e194f7568c"
  },
  {
    "url": "assets/js/3.6624dfe4.js",
    "revision": "3c2dba3713cbd8768c864476391ca5da"
  },
  {
    "url": "assets/js/30.ce1890d1.js",
    "revision": "deae8da565cd0dc257471124c3101d3d"
  },
  {
    "url": "assets/js/31.4c90d389.js",
    "revision": "d8673886e4be87046ba618dbe9a0e608"
  },
  {
    "url": "assets/js/32.5217b18f.js",
    "revision": "f6fc020b1b804d648953b000d174315b"
  },
  {
    "url": "assets/js/33.af782fa4.js",
    "revision": "350a9778e09a061ac5fb70f7fefc8159"
  },
  {
    "url": "assets/js/34.95c19290.js",
    "revision": "33251ff2b9c2d232690b1b31148d76ec"
  },
  {
    "url": "assets/js/35.f4855fd1.js",
    "revision": "6d3bd68616bcebee9eeb96b7d19508cb"
  },
  {
    "url": "assets/js/36.6395b7f1.js",
    "revision": "4ac36a79c351eb01a0ace4b45e8040ec"
  },
  {
    "url": "assets/js/37.2dbf8e2f.js",
    "revision": "b351e038a630b3b30567e188f1a19e32"
  },
  {
    "url": "assets/js/38.6ffe72a4.js",
    "revision": "565adcafd8bd7952823d65cf7f19d55a"
  },
  {
    "url": "assets/js/39.b5f042ca.js",
    "revision": "433d6877902cbe9bbe5d84c3e1b9e590"
  },
  {
    "url": "assets/js/4.4cb547e0.js",
    "revision": "b517aed811eefbbe50c75ad6ac15779c"
  },
  {
    "url": "assets/js/40.c2c1e036.js",
    "revision": "6479f989170cde56766978b274e3cb55"
  },
  {
    "url": "assets/js/41.3129dcbf.js",
    "revision": "470d47b8d8f0c66d4fe2a297b44fae3b"
  },
  {
    "url": "assets/js/42.2d623073.js",
    "revision": "299ae34a75ab595d7ff186d561dc2939"
  },
  {
    "url": "assets/js/43.d237610f.js",
    "revision": "1481b00512eb3fb4a1fe8ac0e7c8191e"
  },
  {
    "url": "assets/js/44.ad06bc5f.js",
    "revision": "8aa3b6b8c2e8e4bd96aa35aed5b86572"
  },
  {
    "url": "assets/js/45.b1f33142.js",
    "revision": "5c2efbd97cfe484ef5c135fceff38ca1"
  },
  {
    "url": "assets/js/46.a7cbb936.js",
    "revision": "34bffc3f1723078d95e66bbf8fc4333d"
  },
  {
    "url": "assets/js/47.f4a008a2.js",
    "revision": "883e2dcaa1ce5588f0b31c7af1a390d6"
  },
  {
    "url": "assets/js/48.19e7aa95.js",
    "revision": "ded667186a3089a995dffca6c0f0d500"
  },
  {
    "url": "assets/js/49.79581b79.js",
    "revision": "965eed79594d999bfbaa3da8fb7f96ec"
  },
  {
    "url": "assets/js/5.4441a4d5.js",
    "revision": "40ae1113e96685b0e7dc47787e959a9f"
  },
  {
    "url": "assets/js/50.53249475.js",
    "revision": "090d70bb7521cd668c71c9ba5b1b8745"
  },
  {
    "url": "assets/js/51.856802c4.js",
    "revision": "1c42efab47cef32b92a35e4cd1220d4b"
  },
  {
    "url": "assets/js/52.1a3b4fae.js",
    "revision": "882a391a46ece33394bce34e57b70ecf"
  },
  {
    "url": "assets/js/53.429b65b9.js",
    "revision": "a2775130c8561cb80ef84d3940e795c9"
  },
  {
    "url": "assets/js/54.04740550.js",
    "revision": "22855389770f47636756a689bfde78a7"
  },
  {
    "url": "assets/js/55.27ef0f71.js",
    "revision": "6d20ce93f1179f911b0e668180825a96"
  },
  {
    "url": "assets/js/56.39aaf16a.js",
    "revision": "5f6775adaf4b37ac14f50d43a1cfc24f"
  },
  {
    "url": "assets/js/57.6b5434c7.js",
    "revision": "39347a19a34fbb5e60d27f6334ec1f8d"
  },
  {
    "url": "assets/js/58.e6cf4dca.js",
    "revision": "58c893f50f41051564457de0ddcada05"
  },
  {
    "url": "assets/js/59.617278e5.js",
    "revision": "bfb1020225912659ccd1d20f64e1bb15"
  },
  {
    "url": "assets/js/6.5668c089.js",
    "revision": "96cc0e1f2b237516e66780b589bf0b81"
  },
  {
    "url": "assets/js/60.c3f231b0.js",
    "revision": "66c07c20447c88edd4e3b91ed4b7ae67"
  },
  {
    "url": "assets/js/61.6c70b1f6.js",
    "revision": "7e4dea4347c46f81ae9a5d486bc13b31"
  },
  {
    "url": "assets/js/62.086dedd7.js",
    "revision": "795f996a32251ca84b877df25dfa5cef"
  },
  {
    "url": "assets/js/63.18fed42c.js",
    "revision": "36b6bee2ef2519db769e2a790189fab1"
  },
  {
    "url": "assets/js/64.eb1d598b.js",
    "revision": "904429612e9212a9a286cb93b01a12b5"
  },
  {
    "url": "assets/js/65.548d965e.js",
    "revision": "375211c8ea33b7a9cb157c504f1e1a8d"
  },
  {
    "url": "assets/js/66.729fffd6.js",
    "revision": "7f7cf203b48565392d1fe89813429daa"
  },
  {
    "url": "assets/js/67.2164433a.js",
    "revision": "946499118d14696840cbb282f8eef26e"
  },
  {
    "url": "assets/js/68.8a3e5a23.js",
    "revision": "8d78ce95b1cc8844de2209393279a4b6"
  },
  {
    "url": "assets/js/69.a66bfe4e.js",
    "revision": "70b4c5f244e584447afe9b05d4611f57"
  },
  {
    "url": "assets/js/7.7d3b3b87.js",
    "revision": "5d28c439d744b648230bfb0ddda1f604"
  },
  {
    "url": "assets/js/70.377ee066.js",
    "revision": "e71db15ab2cbb75747fc99c031ddd9a5"
  },
  {
    "url": "assets/js/71.8c0b8fd8.js",
    "revision": "a7dbca20fa9a9575f9fa7318e610117c"
  },
  {
    "url": "assets/js/72.b7ff6137.js",
    "revision": "26a6eb29b8b7f9df87029c502bf7d2b4"
  },
  {
    "url": "assets/js/73.9a43e7cd.js",
    "revision": "086f9f73d78c003b501167f5c8e878ac"
  },
  {
    "url": "assets/js/74.b285ccb6.js",
    "revision": "d8684447576d7c411b5e97a53d733c92"
  },
  {
    "url": "assets/js/75.a4f539bb.js",
    "revision": "5e2722ef7d8863b913e792af1312f141"
  },
  {
    "url": "assets/js/76.07864112.js",
    "revision": "b8540cbe8352b288304da1b8aadfa279"
  },
  {
    "url": "assets/js/8.717894e8.js",
    "revision": "0b5d70f56099ada643b261bb71bd405f"
  },
  {
    "url": "assets/js/9.6e1c9e77.js",
    "revision": "e157ac636dbdfcb11722aea54429181e"
  },
  {
    "url": "assets/js/app.87a9e78d.js",
    "revision": "a43a35d6ca6c42f532359b2f2e48a94d"
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
    "revision": "22829240bcd1881d693eeaac71d194fd"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "2ed4f4c766f35b730454c2b8471ae937"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "efb4785c8dec1180180a08059563460a"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "c17e17b5d5dba01e9eb34d41315a1c43"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "1c0331861a2fde8865c0434a77917597"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "b999cd12afd808078212f67c89c6fb47"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "d7ad984212d5a83f4dfe857992a12a9d"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "7aa84dd2cd8791b0fbe56aec6fca59cf"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "0e23bac52906e71dd1feccda910bdd9e"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "4fbff2aaf86a1f18a7fb86be12b47a5e"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "185de963df76ddf95bfbd35a0c9b6a60"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "8714ff5a2ec2d1bece4cc569e4584bfb"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "a46bce1e948625fc32d9727aebda8c6d"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "a07aa1fd0d3c2636a70ad6343ffb7eab"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "156416b31a39077f9ca50359eac200bd"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "b74f1e74924ffc23284e0bc3b3c9f170"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "11f0528ce40a3541643e1440b1d9fb4f"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "ecd1826e9c833649fe47309ed037b791"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "ce7268e240b07b84f36548373aecadbd"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "4454563a34712746e499ca507d980010"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "f8d023b987577dafeaa7b3c205c3b979"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "04be33b4875cebfa8b4bf77bfc43e726"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "85e24cd178e8d6fba40641f776c3faee"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "9ab8d310a80fe7516719450909aeeee4"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "a68b0e9634587a28fe8578ebc46851b4"
  },
  {
    "url": "interview/index.html",
    "revision": "021186383c0d025b2b6ab2bff9c4e29d"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "5678f3664c0fa1f29fbd68bbffab9cfe"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "bbafad23e11df73a67b9d28670bad7eb"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "e8994e821de962e736def9f128a55946"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "c08d0b6f09dc9c8fe55403b74946a4a3"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "3d362fec3b4b2e88ec8914fc12635c00"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "6acb2109fd8a1b03a70ea478289b5ef1"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "dd26fb274fc342965bb9f3484b0f881d"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "fb5e4104e5aa3de55720477425c46478"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "c699cc1ee8823b3d47bc055f851cb13a"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "40488c9a8042f887ad170b705651dcd7"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "4ec4afe74c7ddf82245ee232e676d30a"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "0e9fc7ee4a3e41cf95db9c620442cae1"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "04fb57d5186e549e9ee2472a0cbe853b"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "21fd8472807f1ad1fd2c2fa564fc39a8"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "66905ded6f4bbf91318e08f12eaf65e1"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "c0347cbc66f563b03a2f4008f54ab2a5"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "190c118b6e22d5f7f516584cd6a822bd"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "c7a38ebea67155465cf9f64f21cf1c81"
  },
  {
    "url": "tool/index.html",
    "revision": "1b5ab33446f8a0ee0b91348a777a2732"
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
