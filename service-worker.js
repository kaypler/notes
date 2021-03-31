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
    "revision": "f41508e62f567712c32db4c5e8c34ae8"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "5465fea890b9958cb62d4c058eee1093"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "9250fd2f42128bca6ea8d3b78e91e885"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "db3cbd0cece1b13736bb1933d96076f3"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "d08254516556b08c9a18e4ac2188620d"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "654f1f463d8e299185d2c8dd60a27ce1"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "edced012c6beba9305e26abd6175e62e"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "9c81378938196cd1d070e2ad31e6f68f"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "16a2357525d26f80b16a4685327f78bd"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "995e5efca8f86fa18c62897c3d539847"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "876b508e50fbdceef5a6df81dac508a5"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "090993babb55ed4d365de388187fd8f9"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "66606e473a5b92b7734cd36577a568cb"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "904c0bc391674a12f3d3f7a3f00ecf3f"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "84d47c452b5846d27fb450169050c3da"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "52e2e15df87723e135aa52864da26582"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "2adfd0760bf6b2c0a52e00a159ad9fe0"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "67f20641a47c49df9e496501861adf0c"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "8641cff690c1c41fa898465d76845344"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "276d8a80157fd047fa73596ad42979ff"
  },
  {
    "url": "algorithm/index.html",
    "revision": "4e4ff1ee10985c3fa432859238900e17"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "1f9d011a4c90af20039814dce2f044c5"
  },
  {
    "url": "animation/index.html",
    "revision": "0d1b424d101b2f54414f8e0a908b3a2e"
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
    "url": "assets/js/10.8f97d582.js",
    "revision": "bdc226d86d7c95017d30b3d8d9941501"
  },
  {
    "url": "assets/js/11.5128d8fa.js",
    "revision": "5b076356c6215b03d78a506e83a28f30"
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
    "url": "assets/js/15.61ec4472.js",
    "revision": "0da485bba2e0f34ec3efe19d494da787"
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
    "url": "assets/js/3.6624dfe4.js",
    "revision": "3c2dba3713cbd8768c864476391ca5da"
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
    "url": "assets/js/37.bfcf9f0d.js",
    "revision": "6562e336aed27a592490df273d0f731a"
  },
  {
    "url": "assets/js/38.9b0de5d6.js",
    "revision": "6ac06d787eae788a86661ebdd3646134"
  },
  {
    "url": "assets/js/39.5e2eaa96.js",
    "revision": "4afd08bfbfe4e10ff82a4796290aea70"
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
    "url": "assets/js/5.f72b17e5.js",
    "revision": "683d79fd7b009e38d05c23a848454b06"
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
    "url": "assets/js/55.949a219a.js",
    "revision": "dc551a466325840d61d70eec0a977155"
  },
  {
    "url": "assets/js/56.1fc903df.js",
    "revision": "465a78219ddd0418b73047dd64a6cd8d"
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
    "url": "assets/js/59.30b5d2f2.js",
    "revision": "0e3c78c0b352de0f9a244a96c78d1706"
  },
  {
    "url": "assets/js/6.8ecd5852.js",
    "revision": "ea6ada78b798ef485082dc0c4a277aa6"
  },
  {
    "url": "assets/js/60.79c4ba47.js",
    "revision": "ab3d6fa253d10d6cc436ea40939c1557"
  },
  {
    "url": "assets/js/61.6032b870.js",
    "revision": "5864a78cc09feaea0ef8830b0af51598"
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
    "url": "assets/js/68.ad069010.js",
    "revision": "f970a8d315db62395f996b3309ec792a"
  },
  {
    "url": "assets/js/69.2873dadd.js",
    "revision": "6f1bca1ad31907fb3c88d305ad3fda50"
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
    "url": "assets/js/72.cbf2f05d.js",
    "revision": "b8167d0be4e41cc9c37ee80143079698"
  },
  {
    "url": "assets/js/73.5b19e0e2.js",
    "revision": "5d718ad6d8c252c82484517066f1052c"
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
    "url": "assets/js/app.2b48848f.js",
    "revision": "613394c35471a0c9036e28e9151f2bb9"
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
    "revision": "7fcac5059bc618556d1325388c369e58"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "cb7171bcae4a238d3357562a7b956403"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "24832ef770010816fb80a0cfc40352e4"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "52dd645f97cb8f567112e349fb10bff2"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "2fa33645a30c5fb8d055f9084562368f"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "1e7e6037fcfd262c8c5ba1c62c95258e"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "344d2b9f99770877bb3f17431411892a"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "016556c1be177dd98aa81a13df33cd97"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "89ea154864b1ee0acf0bd48f91989cf4"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "90055c27105e55c51d677dd9ff63d076"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "8cf707fc6bd8a99d6d28bdc58be9f9bb"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "679aaec90c08c2c1cb459b100d843619"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "8ad3404fdd406c83ed6843ab579b1edd"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "aafd0c809e63db873de864f841cf4442"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "a437407c67cb839b87e6e9f2bf8cd7d6"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "9dd864f8b37280dfc23505109ab5a51e"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "867da4e71df7d656e5bbac9c77a4fb42"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "761972b8466f4d8cb1827a59c59c170e"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "705cb5c410aa9a45d147b0e5153b0f58"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "994b29100f3cb0b1732c96005473c721"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "993c78a5125771ce97302bc29dd6b549"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "9848d3abfabdec1ee153d771c87f6e4c"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "248d6a7f751b99ab52fdd9196cbaa701"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "2192b355c43ce1e89a009c01d5a8f95b"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "4a267b4a5b1523041564ee5527f74a0c"
  },
  {
    "url": "interview/index.html",
    "revision": "31f0a490445928172bcf4c20c7edf364"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "6d547af9903fd027aa0f1dc214934b62"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "6d5080fd5babd8db265a760cffaaa342"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "3d43919809b38f091c66d71935783cc5"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "c1cb7d15b418171b72e1e3104cd874f7"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "93205d2ab018bbce22ec15d1a3b59bfe"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "b7c12c915f8ad41a1602a9734ce843be"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "2f6a887a3922c62a7a16c949a72148ec"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "5575ede766c164410ba1c9978d0336a6"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "be0007354829ff734203f00119cb7e3e"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "1bea1d05b5a78e006c39937c5e6685e3"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "ec8dfa61e2d102ebe1043cf814dd30f1"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "73a68df30bcf050bafa8a55a2e0c2280"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "53e7649424ce7d274210b6ec7238a55f"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "cebc1fa909091b3416bf60276649db01"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "ea2bce2d3e249ebf8f06f675ca3cce72"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "21643a3de340273b3b02fdafba640513"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "8d61918009178c2f6f8fcfc6a10552fb"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "78c13846a8479f391817f3540997155d"
  },
  {
    "url": "tool/index.html",
    "revision": "96183cb1baa3adab4281a9abe0e79d11"
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
