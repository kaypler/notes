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
    "revision": "304d5b92609b1a42d39ee85069d3eb8e"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "66b54b63cc5869399acdd6e1440384cd"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "1a3b17a86092d626ed9c4e08e3ddd834"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "b5aa6fe60391edc6f9cc1f02b39cd38a"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "0a46afee77971cfb8381384bbcb3d3a0"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "2344190cf3fbae2f2e56d6bdcf4261ba"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "105b87352436483afcea801e77bb4359"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "f3ae15ee9413947a6e55c1251e827e70"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "dcab2e557c4780ea2a2682345397a151"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "cb53d4ac65aa4773a85bffc557091ad0"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "ba0cd14137aa069044b57ee5432d4bf1"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "7180bd8fc7dc9fec9a64ed47eeb10cb9"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "4d0d34038ceb6d2040b07ba27453aaeb"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "7f8081f1dacff5a369f41887c01786e3"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "9b55d226e9604ab8a8432a6b4431727b"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "82fb61da514067d29beae953471d17e6"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "d250039208bfcece599340226e31eaff"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "a4576c7c91e628974992ca47acfa681a"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "91bc8e9ef21fe619e1be76beba63504a"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "5e0ceeb5cc1295ad3a7a10adf8f47aea"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "7ebec3d2cdf39c86ce2bb7d4795da59c"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "43cdfba30c67dbddc9580e37d12e084d"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "1697dcd7a568e214c975db98766ae9d8"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "c9ef8bcb42b0f54644ff7ec28418583e"
  },
  {
    "url": "algorithm/4-leecode/stack.html",
    "revision": "18bf9fa4e80da2a6b3685f9776675a11"
  },
  {
    "url": "algorithm/4-leecode/tree.html",
    "revision": "c970c4537f96c0bfb324556f98e6656d"
  },
  {
    "url": "algorithm/index.html",
    "revision": "1bc82163fe21b009d7ccf9349d71a701"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "512c71d06c31498892084323a8210f5c"
  },
  {
    "url": "animation/index.html",
    "revision": "54b96e2106617b0ab4ddd39331898dfa"
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
    "url": "assets/js/11.923ae079.js",
    "revision": "ef47e38f96fc93b9a7109156be32f93b"
  },
  {
    "url": "assets/js/12.afbbc02b.js",
    "revision": "d02c3ded365093ab72f7e92644dc39ae"
  },
  {
    "url": "assets/js/13.da763fe1.js",
    "revision": "8370b5bd0b84dd05c3a2caa5dc3d5bbf"
  },
  {
    "url": "assets/js/14.ef6cfa22.js",
    "revision": "1c510c66e5817981851c590b3582edf0"
  },
  {
    "url": "assets/js/15.90d014a2.js",
    "revision": "ec14127329d8b85e3b471f28fca4bc62"
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
    "url": "assets/js/22.208ab5d5.js",
    "revision": "986bcf203c3749550576f9c0434537f0"
  },
  {
    "url": "assets/js/23.a7739dc1.js",
    "revision": "00aec05110620a26403900f9d5208f83"
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
    "url": "assets/js/30.0e7152ce.js",
    "revision": "0c6e93df586f4817503ec7cc4c815712"
  },
  {
    "url": "assets/js/31.2d1164b8.js",
    "revision": "e742de0c9cfed5a32c882cb4d09872ee"
  },
  {
    "url": "assets/js/32.85fdc457.js",
    "revision": "ae20f0409c61f65ea60dcb38cf97be9b"
  },
  {
    "url": "assets/js/33.902f7d8d.js",
    "revision": "febcd12fe646f38db87c7147213655be"
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
    "url": "assets/js/36.0d7ac2c8.js",
    "revision": "0f3851838a204797887300cbfaf29ddb"
  },
  {
    "url": "assets/js/37.6f32d6f1.js",
    "revision": "f03e5cb383446d186d12ade6a3854a15"
  },
  {
    "url": "assets/js/38.5300771f.js",
    "revision": "a2776d2a5722c349c40914c7cdc0ce3a"
  },
  {
    "url": "assets/js/39.160591b6.js",
    "revision": "1c4fcd02a05f10538baab72ace451b12"
  },
  {
    "url": "assets/js/4.7b576185.js",
    "revision": "0d0d6abb58897fa67160578c2d8bdff4"
  },
  {
    "url": "assets/js/40.7b4ff3ba.js",
    "revision": "d01fca663d72cf8860d8752e806f1188"
  },
  {
    "url": "assets/js/41.fccf99a6.js",
    "revision": "efa6e179e0161b7fc6cb58462d37edfc"
  },
  {
    "url": "assets/js/42.a7b829fd.js",
    "revision": "63d708b81bc234d43dbcdd422721aec9"
  },
  {
    "url": "assets/js/43.4d17bec6.js",
    "revision": "a324d79515a5bc511fc6bd8e03637940"
  },
  {
    "url": "assets/js/44.a0982ef4.js",
    "revision": "7a4acec2b1d4d7b5b099e79d973952b9"
  },
  {
    "url": "assets/js/45.d151df62.js",
    "revision": "0d13f3d06ef0cd562e9b8b83cfebdae0"
  },
  {
    "url": "assets/js/46.d8f039d6.js",
    "revision": "f82bf35e0fe6f0023e05a769e7546180"
  },
  {
    "url": "assets/js/47.6c51f39e.js",
    "revision": "eacadc9e845685d520456914eeb21519"
  },
  {
    "url": "assets/js/48.48be497f.js",
    "revision": "c67f13943f717d0711468bb90a5fd9f0"
  },
  {
    "url": "assets/js/49.f4b1dbe5.js",
    "revision": "318de66b26504667657813acf474cd90"
  },
  {
    "url": "assets/js/5.b2003098.js",
    "revision": "c98231de796f1ecf3878b0885d75cc7e"
  },
  {
    "url": "assets/js/50.7ed8e896.js",
    "revision": "bc85923a51477c74f7c5753ea413e8cd"
  },
  {
    "url": "assets/js/51.58d396bc.js",
    "revision": "9f420f1e3784b047cf05370d62904cdd"
  },
  {
    "url": "assets/js/52.0afd8771.js",
    "revision": "3397737821872582512a4a0185608730"
  },
  {
    "url": "assets/js/53.5927faa1.js",
    "revision": "cf93a83784ab1d0ca984f2a1f718998d"
  },
  {
    "url": "assets/js/54.f33019b4.js",
    "revision": "4fd3cd4f17409c6433138cd51a3a7b3a"
  },
  {
    "url": "assets/js/55.99b664f2.js",
    "revision": "45b40784a4154544bf56fbc8e3ec63c2"
  },
  {
    "url": "assets/js/56.9b1eb7a9.js",
    "revision": "25b9b0982f74373a860aa2fd0e52d538"
  },
  {
    "url": "assets/js/57.65e77964.js",
    "revision": "2905486925600d4844624d35a5c3e1fc"
  },
  {
    "url": "assets/js/58.aff8ca79.js",
    "revision": "1c25e403c92ad0dbca4afc707c56be09"
  },
  {
    "url": "assets/js/59.1b4836fb.js",
    "revision": "6e6223f67cfdbba8b6518fc15b6e9cb1"
  },
  {
    "url": "assets/js/6.96b3346e.js",
    "revision": "9c11c6bfdf7b0576cef331ea86e39eb8"
  },
  {
    "url": "assets/js/60.66156a51.js",
    "revision": "fee5c1d8cfdb66d951afcdeb4d9aaffb"
  },
  {
    "url": "assets/js/61.01dc19c8.js",
    "revision": "df34d9351034edd627cd21c8fde74d28"
  },
  {
    "url": "assets/js/62.79d2a830.js",
    "revision": "bc082bab5c8c10d79f5ca9bb1e42b915"
  },
  {
    "url": "assets/js/63.ea876ac3.js",
    "revision": "6e8c6346e55a32705b26e1c2e0a6cca2"
  },
  {
    "url": "assets/js/64.2d31f4b1.js",
    "revision": "594fe6737553a0578d101dc58a6a12c1"
  },
  {
    "url": "assets/js/65.33138ef2.js",
    "revision": "07ce09c2e7542400c7252ce046872c61"
  },
  {
    "url": "assets/js/66.06f59679.js",
    "revision": "50beed4b252f353afb942c99cef21d62"
  },
  {
    "url": "assets/js/67.c5d92ad7.js",
    "revision": "9abe4fdd2bcdec1f47e8f4c1efa7d48d"
  },
  {
    "url": "assets/js/68.76dd217e.js",
    "revision": "62ccaed5b108d072991c0bebec8f02c2"
  },
  {
    "url": "assets/js/69.c9a9301f.js",
    "revision": "74c7933a9c857984fec7d0b081853f4e"
  },
  {
    "url": "assets/js/7.6299db80.js",
    "revision": "d3fa98b002b0fe9566e90ffc562c449a"
  },
  {
    "url": "assets/js/70.3d428887.js",
    "revision": "d959f96b24bf1d39439df14ccfceb92c"
  },
  {
    "url": "assets/js/71.0e4dbf03.js",
    "revision": "208cadbb93be3cb3c0362b1239fc0fe8"
  },
  {
    "url": "assets/js/72.7cf26d19.js",
    "revision": "ecf940116705b6070250bb8b62eae07e"
  },
  {
    "url": "assets/js/73.36bc031d.js",
    "revision": "5817a5f99d8c68e9d04fa7a0bae55e0c"
  },
  {
    "url": "assets/js/74.93b786e8.js",
    "revision": "9aa5381975e2f943c7add1ccb90901ce"
  },
  {
    "url": "assets/js/75.a26e185b.js",
    "revision": "5afcff1aae133f4910c3b02cce04f53e"
  },
  {
    "url": "assets/js/76.934507d2.js",
    "revision": "b0f3049644bd59cbc7e16008a12bf702"
  },
  {
    "url": "assets/js/77.299bc763.js",
    "revision": "ef30cfd353ade75d11fce8b213c8711f"
  },
  {
    "url": "assets/js/78.054e7c1f.js",
    "revision": "b1b902cdf820863b48233400bcd3752b"
  },
  {
    "url": "assets/js/79.584b28b7.js",
    "revision": "4cf58eaae2fc7871f2123b2e96073f88"
  },
  {
    "url": "assets/js/8.14f8a4c8.js",
    "revision": "86827b43f64660a1b6054e4fce867f36"
  },
  {
    "url": "assets/js/80.0f1bffaa.js",
    "revision": "a53333d6c58712e295913894e71e15c1"
  },
  {
    "url": "assets/js/81.e3d42dc5.js",
    "revision": "a1758b11400e243eda6edff3f8adbdba"
  },
  {
    "url": "assets/js/82.76c91657.js",
    "revision": "95d2410902927d556cd9f0e029ed6349"
  },
  {
    "url": "assets/js/83.cc622f53.js",
    "revision": "530e359db885d6e7c01b5cca423b5855"
  },
  {
    "url": "assets/js/84.59fc486c.js",
    "revision": "8050771d7cdbbf4eec105676233d1cee"
  },
  {
    "url": "assets/js/9.1e6ccf2c.js",
    "revision": "4518695ae1f4cd8cc5b24898428256c8"
  },
  {
    "url": "assets/js/app.e7aa23e0.js",
    "revision": "31e05b1d18c06a7b563a48f183c1fa32"
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
    "revision": "ae145c3d349daf5342121aba62eca8a6"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "fba618c919a3219b6da73b079f17c177"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "0faeaf1fd10c60fe9a4e06f228a9fea3"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "256d64f7552e87945218f5a337d4763b"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "1d56f99ec58ef0d3285a31c157345f13"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "47625c49e44fb44b271e527ea345b69d"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "b12d8bbe3d496aeb58f49c30c18fbc8e"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "2eb54b0bef5033c4e3600d1c21eed85e"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "daed059eb2a4b1e67aa5e656fffbece8"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "f8b309f9780957f1dc4113cd29917660"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "63c93c3499c9013ad4bcf3e9b2c6a3aa"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "cdc7ea1b8d7b9c137692ca707a5537e6"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "1f6290a7eb648573196daf3272ae7385"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "9aeefc9a55e75d703f8f58edd5508a9c"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "cb2597aa1006f318143b7e1212dd6620"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "61d235dd3bcb907708cd2e6becdf78a7"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "8af4d7189b201429382c7bce14405487"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "859f636eb482c0d515cbcf15500d55c2"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "bb021ab0024ba577c244cb3971c186f5"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "bb33f3778d589343f823980b3c43293f"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "5213abdf45071845b7c6c307050b7cd5"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "b95dcecedcdeac02e4f694703b475561"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "769c055e4ee7f82d9fad19cd7824192b"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "78dae3fe270c2e3508545b57495f1bf2"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "0186866cf473fdd460f9b22ee742c9a6"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "b4fad16f3155c72699d45d06cb99d96d"
  },
  {
    "url": "interview/index.html",
    "revision": "696641a317323c987abcfc0acdae84f9"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "cf3856b83ba0ef3945ff6b22508c3c13"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "d146d5fe9e5a8ed682b96c0d47f8a8cc"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "3b9edd8f4f236272d83c53f148c1aea7"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "a6378e55cad7781c5168428a23257699"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "12eafdae8b30838002826061df1d7a96"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "97c0d4a34c5a4bb61b56b50ccbdfbfe8"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "49e1de96dbe4f1b50e23789f045b3dc3"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "61eb6f1ed641b07a0866bfc4c65bc996"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "3c017fbf020a4a1be1b0423f1832fee3"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "6287a3f01d5397edb71c92c77f6cf548"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "db719430e28dbe1bec0cf4da40db6fa9"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "0c56c12f1d884ee311fd4c9c197f2360"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "4534aafe101076a426cdf80b5c7a74d9"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "aec58476511d409823d5c8b687833848"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "77d3deb1c5a4fe788a35570d5ec2bad8"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "ad0157df19fe032e07e119cabd1429cc"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "37b438c217deb824a7c8d6bbaef76cd6"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "29a343e17c4fa4e264f6211cc0df0bd3"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "5f078acc382fdd9ba364223ab403c51e"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "310f968acf47e6f8ef41862552034793"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "a8d5e500ccdcd489d2ab39f3d1013e66"
  },
  {
    "url": "tool/index.html",
    "revision": "a32214a952232bf036ce69cb5d0d83ad"
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
