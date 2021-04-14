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
    "revision": "a69f8bddde934db0ff7a340061178fab"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "36a3a71fdc328243938e390b42913df5"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "88d6f98326e0b46b7094cf3ef8009e8f"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "5f3dd75194133afb85a11331cfe226e4"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "3623ef9e5ea92009cdf0bc2a7a182db8"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "a2c026adb755db599254f37261fbf170"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "0844e2d1559854de3993bed6d2a15876"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "14f5839626458ca4f9a36f7a0a5fde6f"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "67e2093443ed4496585b2ca0ebf63ef7"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "8da69bcebf516a87b08e4202392b06ff"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "b5f3a3a414ac97968d79cc83b4fdfcca"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "2e61d97a823e1028e33e5d3797723566"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "b0b8676d7d728b70d935810e94b6d28e"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "9a9b4fd4579dc5e32a1f779ebc399fce"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "e485afea7ae1cfa347cf3c62c7601e57"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "a7640ce94e8be2fb85ff1a4810641ac9"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "8d4b6561e99a527dcd378a0f07033e1a"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "9a261f743e9bcd82b84a8b154f666f75"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "575b4569b408ceff97ee336f4c1c64da"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "a4a55a827b80ad57f29509ca300d81ce"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "99fc0a251a99416d5a29f443b60473de"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "27a0678e7e073c870434eaa4c7a36bbf"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "7f205aca6c8470df5edd099b73e6f2e9"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "eae45a100192ea2e08957f3c5e4e7dec"
  },
  {
    "url": "algorithm/4-leecode/tree.html",
    "revision": "fd10e1c00e6753054bee2f297b1288d0"
  },
  {
    "url": "algorithm/index.html",
    "revision": "3c3f39e68299b27a8d879fc05e146876"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "80215c1cd45c56cf6826aff0d7ca72c0"
  },
  {
    "url": "animation/index.html",
    "revision": "6ed7bbabd51bcbe381a4aa63e1625f8f"
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
    "url": "assets/js/10.e9d3b7b6.js",
    "revision": "13ffccee1a257943d5db6aaf00e8a815"
  },
  {
    "url": "assets/js/11.c9404928.js",
    "revision": "f94367db3a1181ffe9d4d086375cc287"
  },
  {
    "url": "assets/js/12.27662eda.js",
    "revision": "63dcb66ed5c34dada4edc402e82ff4a4"
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
    "url": "assets/js/20.782261a5.js",
    "revision": "aca325cfc38fa5c07d28773a5cb432ec"
  },
  {
    "url": "assets/js/21.6a3bf5c8.js",
    "revision": "a65f1ad998dedbcfb538ad4ada4e2220"
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
    "url": "assets/js/24.39ba6c4b.js",
    "revision": "0c6756c530e4fd6bf739907b440f17eb"
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
    "url": "assets/js/28.54ef9a2a.js",
    "revision": "f58615458ad6ced5962dc71affbddfbb"
  },
  {
    "url": "assets/js/29.22b1e5a6.js",
    "revision": "b30f99fd29f65aaa42151669d9a7ac9b"
  },
  {
    "url": "assets/js/3.6624dfe4.js",
    "revision": "3c2dba3713cbd8768c864476391ca5da"
  },
  {
    "url": "assets/js/30.63462758.js",
    "revision": "aab4bee007d3f59489cb8457302a5e03"
  },
  {
    "url": "assets/js/31.2d1164b8.js",
    "revision": "e742de0c9cfed5a32c882cb4d09872ee"
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
    "url": "assets/js/55.75f00eaf.js",
    "revision": "7d42a6241f394815e08742f43885fd1d"
  },
  {
    "url": "assets/js/56.874587ee.js",
    "revision": "8a2de2a673275898b4295339b4203c00"
  },
  {
    "url": "assets/js/57.b09d65a2.js",
    "revision": "32bc111f6e1785e05b0fa4d611cebb6f"
  },
  {
    "url": "assets/js/58.465f1c7c.js",
    "revision": "7a47b78007d828056953cf092e1e615e"
  },
  {
    "url": "assets/js/59.9244c063.js",
    "revision": "1640856f6708ace622c44f64464069ef"
  },
  {
    "url": "assets/js/6.62c12147.js",
    "revision": "8599cc5b0805cc363a997de637acfd76"
  },
  {
    "url": "assets/js/60.a6436bb7.js",
    "revision": "7e303fdf9e64cb8ffdd747f9e29e0b10"
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
    "url": "assets/js/app.bf6b80aa.js",
    "revision": "8a39e2d5eb83148979876a44b43b5776"
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
    "revision": "3a3510f46c4193844e0d716182498c1e"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "06e34d2d6c18cceadfbc40fcd4e45c55"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "ac85955481fb110a3683cf35cd1b99d4"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "099f0d94eae02d88a63dca0a8dffcc05"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "4ab7d72f5558333067513c42a4b1b2f1"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "76057fd0d49dbb7cb4479f0646da05c7"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "95f3a8a94c6a0e3458487655d2f921c8"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "005d0f555041342331f7bcfd0516e083"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "7f675f5a03ab5c564b341f6da911cc34"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "8c207edaa034945218c1dbb7bb6060e4"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "3bdfaa01075d391621e93a925cc8cc88"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "aae6df60105b0fa2e9c6847f2d261b45"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "264086f10f8b0ab4314f142ed6de778f"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "2fdda4e0a569e877fe080b863d80b22f"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "2e014e95a94c2d299bec93679a8c5280"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "b3f1f8234e6bafed107a7100dc70aa06"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "99a7b418c78bb2536f5c63849013b7a6"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "df665fe1a547a7fa4681a408f84cfda3"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "b8a03dc947a48c385ccf368a2579a30a"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "57ba7d346ea3d97d653669c657e0e7fe"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "340f34aaac82ebea1b67e148e34a5cca"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "1bd842c6a1a3f507c82416a756e726c4"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "bced7bed38db9aaa48c85d7349484819"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "34316b45ed6fc9388beb10f88e6e32dc"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "a41479a33e337a8d0b29a1aa6a10738e"
  },
  {
    "url": "interview/index.html",
    "revision": "58e5b3111adc695c689e5d6c482ca1f7"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "217cb685d2870955c71e4519da0a9024"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "8545c5979110c4572b4bfee10f93c96c"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "51f97a366f74afa3aaaec88a3a13e522"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "9f0dc1940ca1dc17d57f0665b543aee4"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "de08e29a5ecd01a1f6b7dffcaa8f1364"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "922d6884b5f912690007c74aa25e4ac3"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "13f00859a0f70f1d386bb53bb427af35"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "0f6bc874c126348ce3acd6c625786fe0"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "3d04228cc401947b0bf5d468eb209964"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "08303296114dc25cc49d8edce434d492"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "c4b191f6b19fde1feac3a728c1324daf"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "add7dac061aafa7289989f1c5db03be2"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "cdbfa4ddf4bed0f163b2e58bba9f6f45"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "5a972ca2d982658ec0bebced4d874170"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "63fe68fd92e51dadb63bb7e47249f56f"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "a79e9e3ab9d2130d4e8b684191bebde1"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "217d5d0db73454886b76235cd4bf4c10"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "c472b94433013064a929ba7247ea2670"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "6bce8769ba4f98c08ef52baec9be678b"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "70413b1194e15b482a6cde973ac8a022"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "0a72c31bf3f72c774d78ac57ac3c4c65"
  },
  {
    "url": "tool/index.html",
    "revision": "5198d9cd2961a0be5905397d8e350f11"
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
