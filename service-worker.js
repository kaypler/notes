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
    "revision": "430a8339b6c2a317885bca3be3df65b9"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "5e417f8476eb460ec514b18bde095ff3"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "20badea118d31790a3b9ad8016e8e2f1"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "b2280fe666fdeedc29a143c4d8a326f6"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "02ca3ffdadaf65713808c7a676608614"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "875e86116f716e259afaab32d1e51ac8"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "ed21f3f08db86f045bf42438837d6a89"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "116a23359b06ec63ec180ec82c347e9e"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "70d973bc6b5e4359a174bfdf1af620dc"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "31d8aeb3495dc18a6099e482cedcf9d0"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "52971e4a001c8270d92cb60251ba7b4f"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "904abe6556a56e00903693bb8a93390d"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "155f3e6246611849e0b38c2df0b7a41f"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "5b9a57639e6126a13cdd1a6404af7112"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "b499f7767746c742ae0883ecbdf57518"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "578deb501aecfc3db39ef9b458cc0e5d"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "08dcfd0645dc8bf0d7d31672bfcacc29"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "dfa409f839a1a65e83a7a38fa4b4604d"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "bd3c5ed9bbc67cecf5f8fcd5991fd01d"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "088ffd59b9dc47579c4ca8cebaac2d52"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "c68344904a093ed9e7fc851f093f38c4"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "a6f864f6bc5efff82110e8c390ea4ff4"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "59b03c614c8d648f2f30a0efb45668f9"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "4d28aae45f8631776023ca8e120f0823"
  },
  {
    "url": "algorithm/4-leecode/tree.html",
    "revision": "5a013282768a38169fe681db30c13f89"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bfd2b23d94d999c118600ed66989cbfd"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "c08647ce4b4b6b910d565ad0141a6e14"
  },
  {
    "url": "animation/index.html",
    "revision": "69e08ce3cb8b368adfaf4a05d72b83d8"
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
    "url": "assets/js/11.c9404928.js",
    "revision": "f94367db3a1181ffe9d4d086375cc287"
  },
  {
    "url": "assets/js/12.afbbc02b.js",
    "revision": "d02c3ded365093ab72f7e92644dc39ae"
  },
  {
    "url": "assets/js/13.5e2a0efe.js",
    "revision": "19cb9098628d88ad762c684bf4f95945"
  },
  {
    "url": "assets/js/14.ef6cfa22.js",
    "revision": "1c510c66e5817981851c590b3582edf0"
  },
  {
    "url": "assets/js/15.305e12c3.js",
    "revision": "cea66356d768c4f59b3ee8a3ea43ca6e"
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
    "url": "assets/js/24.ba10f6bd.js",
    "revision": "cf4baacb35e35082919370efd8c8f0b8"
  },
  {
    "url": "assets/js/25.6d3bcb6b.js",
    "revision": "52d62a522f57bbd6c02fecfb5930c930"
  },
  {
    "url": "assets/js/26.377edaad.js",
    "revision": "6e9aa710141b01cb32f3721676db5aed"
  },
  {
    "url": "assets/js/27.85be083f.js",
    "revision": "aae91720538a7f66a3a20a83c2ca31f9"
  },
  {
    "url": "assets/js/28.54ef9a2a.js",
    "revision": "f58615458ad6ced5962dc71affbddfbb"
  },
  {
    "url": "assets/js/29.22b1e5a6.js",
    "revision": "b30f99fd29f65aaa42151669d9a7ac9b"
  },
  {
    "url": "assets/js/3.a7d05428.js",
    "revision": "f08830e44563ae6a2d43d83014eabaa6"
  },
  {
    "url": "assets/js/30.63462758.js",
    "revision": "aab4bee007d3f59489cb8457302a5e03"
  },
  {
    "url": "assets/js/31.583debac.js",
    "revision": "dc9ef1adf7792aa7e11a7a90152fb45d"
  },
  {
    "url": "assets/js/32.a4db0f15.js",
    "revision": "c80b515655a15cf809fd9d41fac7d8b6"
  },
  {
    "url": "assets/js/33.4bf3801f.js",
    "revision": "c943b7de105656f388667234a20ad1d3"
  },
  {
    "url": "assets/js/34.577dbc76.js",
    "revision": "c7ddda686cf0da3583c1aa43d4674c02"
  },
  {
    "url": "assets/js/35.ad84e228.js",
    "revision": "3e5151352ea9ed895576c2444b1e36cc"
  },
  {
    "url": "assets/js/36.4f8a01b8.js",
    "revision": "f63bc28ed017df9dd04b4d4db6081755"
  },
  {
    "url": "assets/js/37.6295a9ca.js",
    "revision": "71debc90a0ee91021b9407c54178f2a5"
  },
  {
    "url": "assets/js/38.bce7e627.js",
    "revision": "39f2da656cce3567a1be02d833930723"
  },
  {
    "url": "assets/js/39.0eff06f5.js",
    "revision": "1940afd704bf19da8c7c2db6f2703c31"
  },
  {
    "url": "assets/js/4.cabd4306.js",
    "revision": "6d8e5626dca22871dff70a15b9911e7b"
  },
  {
    "url": "assets/js/40.3cf675b5.js",
    "revision": "427f83c0252f7e1e8839ce5efe19492e"
  },
  {
    "url": "assets/js/41.938ffa5c.js",
    "revision": "65a2d33186a4b46646e71a777f8724ea"
  },
  {
    "url": "assets/js/42.e60ca2c4.js",
    "revision": "fd66cd3ec3896b3d49af4fd9a5e523ba"
  },
  {
    "url": "assets/js/43.b8d2991b.js",
    "revision": "0b3d7f3cb040d59844adf0cf82663bb9"
  },
  {
    "url": "assets/js/44.34899aaa.js",
    "revision": "67e37c57928c39d404e41500a02b90ea"
  },
  {
    "url": "assets/js/45.34a05a31.js",
    "revision": "6531cddb1d9616070ad3dd805574bbd8"
  },
  {
    "url": "assets/js/46.91de5d01.js",
    "revision": "c2556cb29bb91c62df61d21a60457a47"
  },
  {
    "url": "assets/js/47.99610de4.js",
    "revision": "982ea8d0181aa49a0fe9ae42e5dcfe7f"
  },
  {
    "url": "assets/js/48.eb5ec556.js",
    "revision": "ea5c667cc8aa83a12e13b25869719f9d"
  },
  {
    "url": "assets/js/49.7316b3a8.js",
    "revision": "4820c5d587e41b0831c89b2c575bd09c"
  },
  {
    "url": "assets/js/5.515e7edc.js",
    "revision": "9df1fbb4ef3fb59b35a023906c89fdcc"
  },
  {
    "url": "assets/js/50.a3ffbb15.js",
    "revision": "379bf73bf5dffc07eee057cae1bd4fff"
  },
  {
    "url": "assets/js/51.5af57c9d.js",
    "revision": "dad1fc254e414250f4ecb8342a8fd029"
  },
  {
    "url": "assets/js/52.f2e01305.js",
    "revision": "6698904ee120398a004562d4f1060845"
  },
  {
    "url": "assets/js/53.b94c6520.js",
    "revision": "636c442ec9923a985298e26c8c8392e8"
  },
  {
    "url": "assets/js/54.d5bd718b.js",
    "revision": "03f3d64cfba48c634550b97106f24e28"
  },
  {
    "url": "assets/js/55.0da320d7.js",
    "revision": "bb2f4cffa01c64283338e1232cebd748"
  },
  {
    "url": "assets/js/56.a7ff5b23.js",
    "revision": "0aef4e89b8bbbbd372226e0c5d4485f0"
  },
  {
    "url": "assets/js/57.23246571.js",
    "revision": "ddd283f051665b376535ca8cb71646c1"
  },
  {
    "url": "assets/js/58.465f1c7c.js",
    "revision": "7a47b78007d828056953cf092e1e615e"
  },
  {
    "url": "assets/js/59.eb78891f.js",
    "revision": "653c4cd04b91d99a29c387550da9fcab"
  },
  {
    "url": "assets/js/6.e4d90a79.js",
    "revision": "cdfa54b32fbac80d54054fc496dc5c9a"
  },
  {
    "url": "assets/js/60.e3530795.js",
    "revision": "0dadf82746b4d8e5f510efb2074a4189"
  },
  {
    "url": "assets/js/61.475c7605.js",
    "revision": "af04e171b80b4b60d3ddcd0cebaa2b49"
  },
  {
    "url": "assets/js/62.723232ed.js",
    "revision": "eab29fafbdf275861ff885a0c6f46cfe"
  },
  {
    "url": "assets/js/63.a79ccb64.js",
    "revision": "1a05bdbd4737a079eff55c4e050ea379"
  },
  {
    "url": "assets/js/64.d0f53e79.js",
    "revision": "de3ffbed898746783aee11a9b325e7df"
  },
  {
    "url": "assets/js/65.c5b6613c.js",
    "revision": "1bc0199848bc757eb63fecec5be7ddf2"
  },
  {
    "url": "assets/js/66.2e601fca.js",
    "revision": "0e491a813efb18d4c4a03196b352ee50"
  },
  {
    "url": "assets/js/67.f41f4117.js",
    "revision": "0dd76436e891c9ff7fa10f6dc0d73de4"
  },
  {
    "url": "assets/js/68.1a36757f.js",
    "revision": "1a58a0175d5fa15801dbb3535c9eb406"
  },
  {
    "url": "assets/js/69.d63d302e.js",
    "revision": "beb3b33af50168d26280cbad301428a7"
  },
  {
    "url": "assets/js/7.08000f87.js",
    "revision": "53a65a481deb3c58036cf53b91fcb18e"
  },
  {
    "url": "assets/js/70.e5add71d.js",
    "revision": "eb6ef3b35361eab8710e477ed3ae0d23"
  },
  {
    "url": "assets/js/71.41550fa6.js",
    "revision": "6fe9c71bfc0c0ed4241d6c608792a9cc"
  },
  {
    "url": "assets/js/72.7b2cf182.js",
    "revision": "e7223a39e9e2c907692f3a94ea84c388"
  },
  {
    "url": "assets/js/73.0dc2f858.js",
    "revision": "95dcc1dc401673e96c2fb540858e056f"
  },
  {
    "url": "assets/js/74.9dbc6c3d.js",
    "revision": "0b7e7ca30836c8ec517045c8da2707ae"
  },
  {
    "url": "assets/js/75.8b3063bd.js",
    "revision": "54143bc4e0b4bf0443bff48ba06d9778"
  },
  {
    "url": "assets/js/76.eda6d8b4.js",
    "revision": "574c05e0725cf56a63c91e0f1685eb76"
  },
  {
    "url": "assets/js/77.588aff39.js",
    "revision": "f047ead731b36058f67cb384f86b5e6f"
  },
  {
    "url": "assets/js/78.77c4d1cd.js",
    "revision": "721b2345f6c24e22e727b3802758d983"
  },
  {
    "url": "assets/js/79.460d67fd.js",
    "revision": "eed4b48b5adbe6465a69388320329405"
  },
  {
    "url": "assets/js/8.14f8a4c8.js",
    "revision": "86827b43f64660a1b6054e4fce867f36"
  },
  {
    "url": "assets/js/80.b39696d0.js",
    "revision": "7cc8191a5be45e29ce0ae61b9c54492f"
  },
  {
    "url": "assets/js/81.b728a18e.js",
    "revision": "5fdba0014fea96576dacf92269b47744"
  },
  {
    "url": "assets/js/82.bf835f2b.js",
    "revision": "3ca1eb38f9efe8f1bb5a564ae6c67cb3"
  },
  {
    "url": "assets/js/9.1e6ccf2c.js",
    "revision": "4518695ae1f4cd8cc5b24898428256c8"
  },
  {
    "url": "assets/js/app.452b2d1e.js",
    "revision": "a82bc39731215650c72c099ec1edfa0a"
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
    "revision": "e29248e0d70cfed135e0899e3280f12c"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "d7f0954e707b90663d133f86bd614817"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "69d918e2cdbfb5bc61f052ca601ea352"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "831d56d2e477fd11dd60fd75dc9c1445"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "a41eab3d40d9c72ff4fd71ee2f572dcd"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "8511fd3da0685e6ab3f934bc374cb7b1"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "864e1be3f3d0a8f4f8d014afd82439d1"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "5afb1ebd4ee44f4eb9bab3b121028e97"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "613401d52d77b4c74cd44ae5d87302d7"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "472d21fdb2b88e7a4e88f7a819ca628f"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "bd2da1bfcb8d82c4def1a4a6d2f04428"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "25b515f7682c83c12d793c179d28885e"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "f2e4d4f040f483d74ca6ad505dbb0721"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "848fbc7f549031186ac7571bec9e0fd6"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "3123a3a14c6c25f0292c144044ca7902"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "304903fecd0ea99847ae65ef247940b9"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "49a0dcaa50e63782bb4765cf3c29b8b8"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "6f11cc3894e6c9f9b2f12f3f205ba504"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "ee1be3782c64222ce180622123aebef7"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "0ab85df13f62b4f5eb844e64aa0389b1"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "0d53a97aa8ab3a47472d7ef9ecc02a5e"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "5d23ae8eb8e06077df43b66256aa5e65"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "f46330579f597689e0115ea8f7a3788d"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "070ab8651b2e9a7da2b7c267fe11fcf4"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "4442a8cc44bc09a3bfdabf2d4f4986be"
  },
  {
    "url": "interview/index.html",
    "revision": "fbe18702ba6c6f56872bdb7d7b0e1a64"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "f5f6f2fedd79b1cfb0be9efd24f4590e"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "3ff0584246df4f63c9cfbc6eee0414c2"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "3e8f169da49fa06f8c7fa89d59917d6a"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "0bc8f1bae72efe029ea769813bf50f2a"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "7c4bb9263f09de1a75c2c2201d01452b"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "5e4e4f894af83c7817d9b7e3b9b92b8d"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "f25e85f781b2f16dc8269a423858df03"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "6c29f09bbc03d16f0732e507ad0cbf5e"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "067b96e28b45ab217feecce2040ac29e"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "e8624136b3bd4ef50043dd0ef5c8e5b0"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "4310be0d97733a76ced8db124a47ce31"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "0b438a2bdc8e45a7162cdc576631933d"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "3ec751330757c80bcec143fdccdb0c5c"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "89a16af2017c9e21b95fff6314f66725"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "78b214abbf09a5ac414791e0f10d0ed0"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "24a2a43847d324aa90c75e143f653e73"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "175b0f9ea218fc14d2b01cff1b413741"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "9407c777e45254148324181e57724146"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "6d06d9bc1422fea8c7942f6557babdd9"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "161635ea1ac5b2cac0f8f4d2352f7ca1"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "3574a7079b5be7564273291d7f082a30"
  },
  {
    "url": "tool/index.html",
    "revision": "8ff23be2eeb5ee0139ba44e0de706aef"
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
