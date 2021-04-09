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
    "revision": "8c31a42378ebb702da025f3380ac3eff"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "3fd79dddf6213abdb9efe24fe78b9a87"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "efecd737f5a5f3ca745ae564b5de8bbb"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "8f7a3d1422e9a0a4b20493743be0a20b"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "152ed9f81c13eff1f19686d76ae75b80"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "1c745027c96ffece7fc43b0b3aa4b6e3"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "42085467eee6834f4f4cb91b7bf2c5ba"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "76b43055c59b548af64977976d7932ab"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "69ec92b30dc8303c8bcee2350209ffb1"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "d9379fba476d51b8935aa66d234999f8"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "ef133c47e5e7f1b0a0bc2041218b1d40"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "03c52602bf5be763253872e9b8fe842b"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "de53d566870717776e547df2ea34b42e"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "3be05487dfc01a8aaea563a3bfd746cb"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "cee6f96793195a44f7d679c03c96e601"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "b02abf31e0dd483701d8860f343612e4"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "264049130425cd927e5234e091b3c718"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "62a55df3a7c6bc72a6e4f663925e5ac4"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "838288d45a63a1a21161a89e98b21401"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "6ef242b33cd08bb09684ac7419d0330a"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "6e111bbb6fdf81daca06884dc1370bdd"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "5ba796e8fb92e3914428ab11ee768c34"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "eaf51b65a527ae34943965932fea176f"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "c9149b390715b3b839ecc5df761ec884"
  },
  {
    "url": "algorithm/4-leecode/tree.html",
    "revision": "60b04f3aff9d5ac492cf349928ee123c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2f24243d0842e2aeacb24d5f30c49398"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "a6a71cf8b2ceb14f4ca9d13b77b58627"
  },
  {
    "url": "animation/index.html",
    "revision": "018e47be1dda4ef0f5f2d1c30c8df1ca"
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
    "url": "assets/js/21.25e34449.js",
    "revision": "3f504cf8c14a6de59469492070b585fc"
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
    "url": "assets/js/28.8d0cea5d.js",
    "revision": "9784aac07868b69be8643c48e284da3a"
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
    "url": "assets/js/30.7fab270b.js",
    "revision": "ed27d6c48787213125a9483dc25f6136"
  },
  {
    "url": "assets/js/31.6e23c4d8.js",
    "revision": "d6c5de7a08599fa31e3e2d11347be742"
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
    "url": "assets/js/4.7b576185.js",
    "revision": "0d0d6abb58897fa67160578c2d8bdff4"
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
    "url": "assets/js/57.227d29ae.js",
    "revision": "342efdbf8f0a0bffff511ffc97c1b5df"
  },
  {
    "url": "assets/js/58.a972f7c8.js",
    "revision": "aa4cc2c5b13ffbb6b46f4305660957b3"
  },
  {
    "url": "assets/js/59.f99ed34b.js",
    "revision": "bc9a26cc820e1b4d4baf57d2950dbc8e"
  },
  {
    "url": "assets/js/6.954f1da4.js",
    "revision": "a4df78f3c6cad6cfadd1810649c3df5d"
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
    "url": "assets/js/67.60925082.js",
    "revision": "f85bb249ff4e2674686838206582aef1"
  },
  {
    "url": "assets/js/68.ebbca9b8.js",
    "revision": "35fbaad9ca39a1411fbe64fd7f5ac464"
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
    "url": "assets/js/app.43ff64d6.js",
    "revision": "d01707acd086b4a089a5f0ba3bbda161"
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
    "revision": "8e77d064598c1754a296bec4d02ba952"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "0bdec308d135aa54b2ec416e21f392eb"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "560821e2069f301a22059321d4950140"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "35ab0e57979ff8d6fdcf954ac147c44b"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "2243d85543485c7b3425b07def81c038"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "d3344d37c5a88723f36b0e1891af284c"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "4c80ef32a0c3143238937d2cc80938e6"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "d4b02412fdcaa94a3e05b0b6958c80e9"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "ff061581749562835983debc098b4fae"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "eb706ec04b1d69b77cb3fcf334a1e8ed"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "f1e6f4384443b2d1ec6f1d3f4f4dbec9"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "e037604e3d6e5561392576f3185dd615"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "628bd5b3ea7f514a94a1b107ebef851b"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "8fc2d2325fd2b1f9fef4f9da8d18d75f"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "3808317536ce1a0c60364d7a62327e37"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "1d8dcaf780efdadbd95e0d320eb269b7"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "d773038a6be680731eb0d34f7e4fada1"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "34734edf13cbc9695d70549205c03b47"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "d47764c9306a26e5cd2339eee36f1751"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "4ba8565f23d8941b7bc4d0fe7b41950a"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "7c63dcf4fa5cc22175ce6faa14d349ef"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "3ba2c9ddfb042881d778c8cb3b4f3cf5"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "ff0a6964ffafa4adf41103e0a32f6916"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "c4078c40a98d428e6fd8f7be79b7277f"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "999e809642c47a95858933ccd586e621"
  },
  {
    "url": "interview/index.html",
    "revision": "c805be09c29ce007666c9ae5d3c31898"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "233bb7a4b38949005b65e181cf90ed86"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "25869405eecbdf9efaac8102f8997c68"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "e9bf2928d9a7f780893dcd6bdc831763"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "a2342acdff51ff72c96e29a9282742ac"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "726c8475c94d7a8259d0e97596828bc4"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "182c023d5e576644378887a246a1e8ce"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "ffc97b5a5d49e54ce1be94536e89dca8"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "da0c36e18ebdfb22e7a4063312a8bc51"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "4180edb0d020e151b8447b27ef92a565"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "3b31a179a8d5cf2b870eaaf517d9bb2c"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "74840ecf9051852a87d47f7512b3de28"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "6d6a09cf00e8ba3fc0eaaab176c56bed"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "78aa4ab20acf1278a27ebf5e468bf5f0"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "4de258f88084e51f28284e1b19b18332"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "78bdfa3fab5538423e2563a5b4881b5b"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "d262d516ee2f0f4232981edadf72019c"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "445a65eaa7f749dabcb8a58d1e613630"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "72e827867e205bf81a9d3ca9879281ae"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "6d85d1e7e3a4dfecc3a041a824d13f99"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "63088523a512d3054406a50423b273d9"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "34b331163cd45a2eb858b7a1f0aef535"
  },
  {
    "url": "tool/index.html",
    "revision": "e2e2d84f4728d2d01fd89e2b78b8d083"
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
