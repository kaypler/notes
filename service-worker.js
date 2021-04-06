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
    "revision": "6e4204caa038622328004ed7d7ed9f4b"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "ef2927c18225ac9509107eaffd638744"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "d77adb6835883cf3d5c2ae10b6beb48e"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "83bfc972ff1110185b479b27122cdd51"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "11493a2a29c3c60a5ff862827280726b"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "3cf942829daf69c2c8af6c07f7a8085b"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "04d9877baf784e1cc9d6015c45c15bf5"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "aca60ed41d163140acdbec5fa338d272"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "cfccb389dc4e7c1a1cbcfb38b44b43d6"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "bb654b5c31e798eaed78aaa889da3dd4"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "4f60e337a9b8a3a4bc04c87f2f51accd"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "1754305b534d8f7c9adc0a9c8ad852ce"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "ea4da9852678d0dbc274e46267473d18"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "19ff8a26a4cfca0faf394d0e51e2be01"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "9347316b4f4fea38a5973390cf4e3404"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "2b418182c0e3e2855ff4e2952f9ff9a4"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "9878d99c71c190f002a6b99ae8555eaa"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "64a46949700b63675a99d38d9132ae60"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "b8807afaeb5ea95f75673fc5a4383982"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "f850f43d0b35ff9d8e579f584631f3d5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "09186dea9170ec559c7116a8041352e1"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "d53be9fe5e7cd3b37f10e90f31622c5d"
  },
  {
    "url": "animation/index.html",
    "revision": "3e62ce0fa32a8c6f5864135f78294d06"
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
    "url": "assets/js/10.91c6270f.js",
    "revision": "c9c96e17224b15a5e1e84fa9ab6e7ccc"
  },
  {
    "url": "assets/js/11.b3dd501e.js",
    "revision": "04cdcc4cb019878be465519b395b5d99"
  },
  {
    "url": "assets/js/12.27662eda.js",
    "revision": "63dcb66ed5c34dada4edc402e82ff4a4"
  },
  {
    "url": "assets/js/13.2b64d18c.js",
    "revision": "0f183d0638269304c7b598158cae9d11"
  },
  {
    "url": "assets/js/14.de55919f.js",
    "revision": "6a41c6e4dc6341a46fec7927164c7cd0"
  },
  {
    "url": "assets/js/15.c7d360d1.js",
    "revision": "3702031d728e7f42cbc46ad67476711b"
  },
  {
    "url": "assets/js/16.241d4c90.js",
    "revision": "482dc5037ee7a1448b9a610f2596709a"
  },
  {
    "url": "assets/js/17.0b09a6dd.js",
    "revision": "cf55b48b9668f82ce785ecb36222f4a6"
  },
  {
    "url": "assets/js/18.88f805c9.js",
    "revision": "e120acbbfdc63816c9921a2a47d2c6d0"
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
    "url": "assets/js/20.8d812d11.js",
    "revision": "79d1f74fa5d294b275240ba3d7fe989b"
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
    "url": "assets/js/27.e596d82b.js",
    "revision": "4fd16f769ba54d3a0f676fef2429b884"
  },
  {
    "url": "assets/js/28.4fbf5c47.js",
    "revision": "be3eb99569d701b8adff7109c8b0944c"
  },
  {
    "url": "assets/js/29.8025b3da.js",
    "revision": "9675e0867b11afb52208d6ef3e7ea31d"
  },
  {
    "url": "assets/js/3.1042fe29.js",
    "revision": "df1da14bfc5b290c6e3d7108c387a2f7"
  },
  {
    "url": "assets/js/30.06c33aa8.js",
    "revision": "5406d5d5e3535f962d3bffc63a764183"
  },
  {
    "url": "assets/js/31.22a0cc02.js",
    "revision": "06f024f4b4b521aaaae489d6629daad7"
  },
  {
    "url": "assets/js/32.f2f6ba8c.js",
    "revision": "ff22f5fa054b3992210852ae04d8d692"
  },
  {
    "url": "assets/js/33.788306c1.js",
    "revision": "946751200b52c8aba3159fabf846862d"
  },
  {
    "url": "assets/js/34.edc3f339.js",
    "revision": "9c2a48b804a1d731d99d11a4b5bbabf7"
  },
  {
    "url": "assets/js/35.95dbca78.js",
    "revision": "c4c3d0843fba1871bbc2ba6c2c506c8e"
  },
  {
    "url": "assets/js/36.c3ce8d9f.js",
    "revision": "36f399fa2269937ed49d18b1ed0c2e64"
  },
  {
    "url": "assets/js/37.86b6352c.js",
    "revision": "1d8574ba75668f486bf4c42ef317a316"
  },
  {
    "url": "assets/js/38.9b0de5d6.js",
    "revision": "6ac06d787eae788a86661ebdd3646134"
  },
  {
    "url": "assets/js/39.5cafd890.js",
    "revision": "a30bb480ff0752907fd0d7d82de85010"
  },
  {
    "url": "assets/js/4.83940e75.js",
    "revision": "7b7849876f0b2b84dffb551f5fa94f3b"
  },
  {
    "url": "assets/js/40.cc9bfa28.js",
    "revision": "7e5f5d077a9c554c9dc744d9de44cb55"
  },
  {
    "url": "assets/js/41.9c23fb47.js",
    "revision": "d37efc3ff72702272a61ac63230f1f85"
  },
  {
    "url": "assets/js/42.93ddb8ef.js",
    "revision": "ee8812aa9505948fdb151d9e2fb5c818"
  },
  {
    "url": "assets/js/43.82f1c5e1.js",
    "revision": "5c9c2748b00ba9b232d77f78e5b6d105"
  },
  {
    "url": "assets/js/44.3ba1bd16.js",
    "revision": "cf10909a7188d11f54f49168986af4c8"
  },
  {
    "url": "assets/js/45.55e87c7b.js",
    "revision": "993727c2abf717f391d2cda71214e6a3"
  },
  {
    "url": "assets/js/46.041e94f2.js",
    "revision": "caabc5b4b9ac57b44a9228a1b472cb2a"
  },
  {
    "url": "assets/js/47.7dbd0908.js",
    "revision": "8db1e2296553799d5096bb5be3efbee8"
  },
  {
    "url": "assets/js/48.20f77bfa.js",
    "revision": "56e21508317ba78f83d32f2e2edcad7e"
  },
  {
    "url": "assets/js/49.06575760.js",
    "revision": "0e76924a092cdde4cc3e4c6c915fc3a0"
  },
  {
    "url": "assets/js/5.c5a170f0.js",
    "revision": "02ab4c78c16f9b6e79e08e23d8c2878e"
  },
  {
    "url": "assets/js/50.47d29e52.js",
    "revision": "fe24b4af5548f89ddbe5e90130d47496"
  },
  {
    "url": "assets/js/51.2b2dac61.js",
    "revision": "096c72277ba7b9377108ae42023f3e2c"
  },
  {
    "url": "assets/js/52.8a39b81e.js",
    "revision": "3cdd9c0c09bdbe1a7b9e5152f8e0018a"
  },
  {
    "url": "assets/js/53.f0f85fe3.js",
    "revision": "89a4608c0f6239c9bc8989e3a457fd1b"
  },
  {
    "url": "assets/js/54.21efd88f.js",
    "revision": "59a8e4f9094251ff1f49158260e02424"
  },
  {
    "url": "assets/js/55.dfc0e7ab.js",
    "revision": "f8aeec5957c04b093d34fbd4fa5e2da7"
  },
  {
    "url": "assets/js/56.6f8b942c.js",
    "revision": "8a50feb481d4b018ad75cc547a4db7f2"
  },
  {
    "url": "assets/js/57.2731899c.js",
    "revision": "a8986027f01eddec75574cce23cf9ee7"
  },
  {
    "url": "assets/js/58.3611e0d3.js",
    "revision": "42a260435cb22c3e280c1ce80080971b"
  },
  {
    "url": "assets/js/59.3925f95d.js",
    "revision": "121bce2a5d228ddeb17f1af61cdbca1b"
  },
  {
    "url": "assets/js/6.8ecd5852.js",
    "revision": "ea6ada78b798ef485082dc0c4a277aa6"
  },
  {
    "url": "assets/js/60.ddf3946a.js",
    "revision": "58b97fba08a9a21a218953a0c8cccd34"
  },
  {
    "url": "assets/js/61.992ebe47.js",
    "revision": "597e6e11f9ee093be264ed24d96dc609"
  },
  {
    "url": "assets/js/62.7e693006.js",
    "revision": "2ad912db91bc18a9c8243fed2baaf610"
  },
  {
    "url": "assets/js/63.273abe60.js",
    "revision": "61f30a817100651608a1a84ec249da1a"
  },
  {
    "url": "assets/js/64.c51d0b12.js",
    "revision": "fdd2b5fa6f47184c67d302093007f3bf"
  },
  {
    "url": "assets/js/65.8ca2f99e.js",
    "revision": "c7e0d2f6ba4d8a066b66e098594eeb48"
  },
  {
    "url": "assets/js/66.8d7206e3.js",
    "revision": "d1a0660e2462831f82319ead5365946c"
  },
  {
    "url": "assets/js/67.1da563fa.js",
    "revision": "c456c02ac17207a585cac1ecfe9d37b5"
  },
  {
    "url": "assets/js/68.5bb04ad0.js",
    "revision": "2ab22c62c1027e6e8e387c1f1e2a62d0"
  },
  {
    "url": "assets/js/69.57b8cec9.js",
    "revision": "99671f36451c9e20846905208e2497f4"
  },
  {
    "url": "assets/js/7.7d3b3b87.js",
    "revision": "5d28c439d744b648230bfb0ddda1f604"
  },
  {
    "url": "assets/js/70.267af288.js",
    "revision": "29f1da50377dd4b47d2160466fa90d20"
  },
  {
    "url": "assets/js/71.18abc0b1.js",
    "revision": "c1fa30150555bbf00feaf9d571d15159"
  },
  {
    "url": "assets/js/72.1a47043e.js",
    "revision": "232a6133a2cef92945f9669c7ef60b62"
  },
  {
    "url": "assets/js/73.584ebf47.js",
    "revision": "92092155d722d30b90ec4051dec364dd"
  },
  {
    "url": "assets/js/74.f18524ea.js",
    "revision": "0df1aad601db9eaf3626d5c6ce817a39"
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
    "url": "assets/js/app.359a8469.js",
    "revision": "120f8273bf9284abaabc0bc3513ef70d"
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
    "revision": "dc8cabb3f5cce14f600ab6ae878402cd"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "7f8c00956b31b1a8ead2758137b1301b"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "dbc521547927f0b2fc472695a3c63846"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "4e85ff28c6539455707895b5e6d39d1f"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "45a38a0e71ca34a54545850014f1af07"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "fab8aa90f9e34ad2ec10c9c5257327fa"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "d521b6bd1a4e954d81e0fabfef551ac1"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "ee2dfa4f6364a2696542194948f2a14c"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "b2fd92abdb7831f5328463164721f8a9"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "4d81f278a929915ab60731a891d69838"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "25e19371a24b68259a2790cf43d69e9a"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "9230f9b7d20abf8a5a28a2601175e082"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "b63d22f0f5519832134d5d6466a4b894"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "3b2bb80938227c30bdd7be2f2b8b4031"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "48c96eff6f2879781cbc4be62df8162d"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "502bb3550c33edd0b3da4b06b0909359"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "e022d005b5f5e6637a2a96e4f3dbcdb7"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "0e2d559e52e917e640a035b0b100032b"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "e1a02b29674d5291da4b6166257f906b"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "995df2822e3918aef63451a6f2da06d5"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "3feaa9bca5b17119fdc60454ad6b0abf"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "c5cdebe4b8462fef29ade33420948693"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "a9f905b6fbd4cf53f1f6e14dc16b61d3"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "4d43b5b63d28892418c6ca69fc25ce87"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "0c26d326971b7146d217207dbeebab89"
  },
  {
    "url": "interview/index.html",
    "revision": "b7d731d4ab8e32bf0ace1180e46ff24a"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "0deb799fb5e44a10bea3423083f73367"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "dc0b42710e38cf947e7c5f13a71e4a63"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "dad720b6a8536533730be059081b50db"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "a0ce140d335d4b8c1ec34e06e1ee34a4"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "6769fca6e0c864c634c361f09606f303"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "4359290d9135e87986ec996063b74061"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "e6b079b62a5b03dc03149f1efc08530d"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "28c79b543a750869d366fb6d8515f712"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "b21f051900a25eb28cf92616ab3e9ccc"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "5cdc965feeacd0546d49ccf9f81765bd"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "d99e2b19d2afdee78f4fe9bb41931fde"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "cf526451592592c31035aa4170a7d57b"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "55489de5fa2844b775bcf50f377edbb0"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "55307416f26a5358e076ddaa8c335a80"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "98696bad1428ea5dfd9c74ef219d7d37"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "0c717245da9a38c72d07af9b873112d5"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "a6e8e415b83a2499a2073045bb8b4db6"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "53313f205029d2ffcc54e93011280690"
  },
  {
    "url": "tool/index.html",
    "revision": "0abb311689f4aacdcd656a6466eaffbf"
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
