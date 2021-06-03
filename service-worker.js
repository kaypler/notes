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
    "revision": "375e5f785df52768fb7ba1b714de6440"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "8a7b77bd945750ab93a9b996918e305c"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "e2452da5d35ce220a804ada686b52ce0"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "a23f5282551d35d59faa27a2e9e8dd6b"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "79cbf606db393add3ffb0dcd75f05f38"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "47033f0ca9f6cc8b0e68dfe8c8d8fc32"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "337362feca43a76158e9e21a00d16af9"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "c1e01ce47d8e9624b2c710fff03e04a6"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "7c4cf96bdc510c360be4beb9a8e8ae99"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "a95714bf140bd82bb9989fc5f769f384"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "38e23c0a7d43eb06017510f7e9d6d2e8"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "865835cefd4e0e63cfc65679a5171d59"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "a35f2ba679015a6581c425150ac8a55b"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "f8392ec24b833a53f518d4a18316b23a"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "cbc57806ddd14de870d81b9da5133338"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "a97479626e484af547e0a8f8ff61eac6"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "a8217d659078adb6624a01fbdd9fd983"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "38f820ccd94316b66082670a8d7ec470"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "b025d9d4b9c7d842769aca32656d4a6b"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "06ae2a58f1782dec9ecde92c67249554"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "bc697956faa303bd87dcb538b7ab8f99"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "7937bda4e2aeb6f909530f2b18b3811b"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "3d67116a5397f1687a691f9a35319e4a"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "8cb51c333c13488c4a14c0ab5fc80770"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "3450bd5a36cd8d591e6370e9b1411af3"
  },
  {
    "url": "algorithm/4-leecode/stack.html",
    "revision": "7f269c1a723bd0b406cddfaf8dc6070a"
  },
  {
    "url": "algorithm/4-leecode/tree.html",
    "revision": "50bc8de75f3fed02b16cbbe9640b0c5a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "917f8b2e9796aeaf3548c2a23efb6394"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "901d38889a53f189b9e19b35a47555b3"
  },
  {
    "url": "animation/index.html",
    "revision": "925c1d4343bd4c67278a53345f91afd1"
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
    "url": "assets/js/10.5d7042fe.js",
    "revision": "7eb3c1f14be5eed018b935304eb8083c"
  },
  {
    "url": "assets/js/11.1841a736.js",
    "revision": "5c99be66ef3eadf6189385c7b7f02f0e"
  },
  {
    "url": "assets/js/12.01ce7f4c.js",
    "revision": "b1449367708c1ec98d86db27c92ae87b"
  },
  {
    "url": "assets/js/13.da763fe1.js",
    "revision": "8370b5bd0b84dd05c3a2caa5dc3d5bbf"
  },
  {
    "url": "assets/js/14.85cd5338.js",
    "revision": "44b7beba5aca213fd318fbaaa52b8137"
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
    "url": "assets/js/21.139843ec.js",
    "revision": "951349b4e38b4d6632a8ea74eae29c26"
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
    "url": "assets/js/24.d03f7cca.js",
    "revision": "dab2401d4e254f4f3580a4b6191d2bff"
  },
  {
    "url": "assets/js/25.4e2839e1.js",
    "revision": "71e2ce710b19ee9811dd0af398eead76"
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
    "url": "assets/js/28.47b4071e.js",
    "revision": "1b131078d41835d3a5957f9b4d107ffb"
  },
  {
    "url": "assets/js/29.32f5fee1.js",
    "revision": "9d2332371aa918b26d210bef87cf1df4"
  },
  {
    "url": "assets/js/3.232b4e43.js",
    "revision": "fb47a4c7657a5191aa69e60b01aeefcf"
  },
  {
    "url": "assets/js/30.6abb2a42.js",
    "revision": "ff42d5add4bf87bad5aba2a1d45bd32c"
  },
  {
    "url": "assets/js/31.6e6b668d.js",
    "revision": "d226d1c971fe5842244bc3341597b291"
  },
  {
    "url": "assets/js/32.75960029.js",
    "revision": "e934a4c5750ef834818380ba5831c3c1"
  },
  {
    "url": "assets/js/33.e92e4965.js",
    "revision": "2444be7830a13ff8edcfd83db053cccf"
  },
  {
    "url": "assets/js/34.e979e435.js",
    "revision": "cc55152fc88d15d6fda95af062a36dc8"
  },
  {
    "url": "assets/js/35.8df70758.js",
    "revision": "f6c0ae24a44718a0305124a58e6f4069"
  },
  {
    "url": "assets/js/36.bd3c37cd.js",
    "revision": "61c73129aaa46336ecd81f8f16418120"
  },
  {
    "url": "assets/js/37.47e8b255.js",
    "revision": "f3664745efea86f230cb23ef15a6194a"
  },
  {
    "url": "assets/js/38.044411ff.js",
    "revision": "a2a5a88f180af94538611249073dd76a"
  },
  {
    "url": "assets/js/39.d2a1c017.js",
    "revision": "836a9c6985ecec6fd95f8f9153670f26"
  },
  {
    "url": "assets/js/4.75f4d922.js",
    "revision": "6ab374ef613cbfe93b0968013c6633e3"
  },
  {
    "url": "assets/js/40.be1f3994.js",
    "revision": "8c6f542c47e328ed5fec3e6bd269fb36"
  },
  {
    "url": "assets/js/41.a25c50a6.js",
    "revision": "7d826518ca6bfd3751ea04f5518b6d7a"
  },
  {
    "url": "assets/js/42.3de6ed44.js",
    "revision": "e32b7d72d4cb34bf4a97dd39dfc81c22"
  },
  {
    "url": "assets/js/43.35448ab3.js",
    "revision": "c80bc82f54dae7bc91402f81aaacc209"
  },
  {
    "url": "assets/js/44.41515846.js",
    "revision": "a94e81ca084a634a0c654108ffbea83d"
  },
  {
    "url": "assets/js/45.9debb209.js",
    "revision": "bc63cf079b216f33a10c6aefee543e54"
  },
  {
    "url": "assets/js/46.d8c48295.js",
    "revision": "da379a4fa8159d86fd735d2b7eeabb4e"
  },
  {
    "url": "assets/js/47.2df1f282.js",
    "revision": "3082be7736c61eabd14a590b8f5d7d1e"
  },
  {
    "url": "assets/js/48.c16a1e53.js",
    "revision": "f5a743d40dad49749c09575834d4afe0"
  },
  {
    "url": "assets/js/49.dbe7e030.js",
    "revision": "36c650aa0f10f18b7582fdb3ac9e4ecf"
  },
  {
    "url": "assets/js/5.b37c116b.js",
    "revision": "c2c001484a1fe7a9f8bd14ee7d1bedbd"
  },
  {
    "url": "assets/js/50.9d6965c1.js",
    "revision": "4f5a777c2c85ab4f8e9cdc5beff1fbb4"
  },
  {
    "url": "assets/js/51.e03a075e.js",
    "revision": "4a87effa9bf8c09538f02f0c23271e5a"
  },
  {
    "url": "assets/js/52.689a839d.js",
    "revision": "6b2dbd862f4f14097b0e8f8349fd3b27"
  },
  {
    "url": "assets/js/53.3044b538.js",
    "revision": "ed1af3372b6815040c419d93043d4076"
  },
  {
    "url": "assets/js/54.699f0a83.js",
    "revision": "2aec48c441977aed1bf5b3e95dd3ac19"
  },
  {
    "url": "assets/js/55.c442139f.js",
    "revision": "2140084cad77bd3f437f6d8afa670505"
  },
  {
    "url": "assets/js/56.454dc04a.js",
    "revision": "907461cb8b1b0a20ef3a3bcb4f650b47"
  },
  {
    "url": "assets/js/57.9c72a8eb.js",
    "revision": "1611be159b49083eedf135f505d5e1c7"
  },
  {
    "url": "assets/js/58.213ff623.js",
    "revision": "32307f75ddcabd931d86e1e9fbe2f6ea"
  },
  {
    "url": "assets/js/59.62255858.js",
    "revision": "8e71ed0921f5a7708f9519160f207026"
  },
  {
    "url": "assets/js/6.b2f21d91.js",
    "revision": "f0fca572408d9b18d4945c53c359e85a"
  },
  {
    "url": "assets/js/60.aee2303f.js",
    "revision": "18d0d197e42b5cff488f2000a649318c"
  },
  {
    "url": "assets/js/61.599518ac.js",
    "revision": "1654be1f07ef82129e086269d0a843e8"
  },
  {
    "url": "assets/js/62.47d23efb.js",
    "revision": "3909839542e5212eb87c495047f95c1f"
  },
  {
    "url": "assets/js/63.3fa4f7be.js",
    "revision": "ad1d5bd344e5e8f39a41fa85ac04b76d"
  },
  {
    "url": "assets/js/64.5cfe2fb9.js",
    "revision": "b1c2e407beeb7f4d8ffdd267400ed0ff"
  },
  {
    "url": "assets/js/65.7c228b4c.js",
    "revision": "496f8505a6a5f52c1c92786a1e1c9efb"
  },
  {
    "url": "assets/js/66.c6e2c82b.js",
    "revision": "d1d7b757bc0e2c2426775f70a0e7bbe7"
  },
  {
    "url": "assets/js/67.3aba7229.js",
    "revision": "105f851ab048662b10d77e0021f8b6ae"
  },
  {
    "url": "assets/js/68.20dac209.js",
    "revision": "d7c5da48e922805c5ed8e6dd54ce381b"
  },
  {
    "url": "assets/js/69.e19950ac.js",
    "revision": "7cf305d0b4853215703b3c16f62ea310"
  },
  {
    "url": "assets/js/7.bea8cd98.js",
    "revision": "f15e2c8651b5a085c6cae93e3e8db20b"
  },
  {
    "url": "assets/js/70.fc0e7e90.js",
    "revision": "fecd1c28b04fd83ca55ea7bbeaaca346"
  },
  {
    "url": "assets/js/71.149abbca.js",
    "revision": "f903ce4cd5d035236dd89cf1207c1534"
  },
  {
    "url": "assets/js/72.45e10354.js",
    "revision": "b51eb13794ea6b1e15c322fd9ae8c420"
  },
  {
    "url": "assets/js/73.e0cf9bca.js",
    "revision": "667a67f2736e5d6f560d7c456f90361b"
  },
  {
    "url": "assets/js/74.bf5a7f05.js",
    "revision": "5dbe2c971b47c0f7a2649801a5c7829d"
  },
  {
    "url": "assets/js/75.33ec0b05.js",
    "revision": "33873c7a4636003093943d306dcf92b9"
  },
  {
    "url": "assets/js/76.79b0bfc5.js",
    "revision": "dc3061130efda20f17caa7025d745c7d"
  },
  {
    "url": "assets/js/77.878ac7f9.js",
    "revision": "467c12ede4fa9dddda18e61cc22d2d93"
  },
  {
    "url": "assets/js/78.42f3ba60.js",
    "revision": "e2ccaba1babb53f3ecf75491dffb055d"
  },
  {
    "url": "assets/js/79.c9b50231.js",
    "revision": "8a7321597c6cf5e67f35b7d5aa1adc66"
  },
  {
    "url": "assets/js/8.14f8a4c8.js",
    "revision": "86827b43f64660a1b6054e4fce867f36"
  },
  {
    "url": "assets/js/80.f41b4cbc.js",
    "revision": "fbb9acae13cf817db1a107d6fbea6cb9"
  },
  {
    "url": "assets/js/81.5c2f5131.js",
    "revision": "ab7610d20676d9eca237558dc90b9836"
  },
  {
    "url": "assets/js/82.b4664c70.js",
    "revision": "b6ab0f1868310c6c70cc1495f4524822"
  },
  {
    "url": "assets/js/83.baa16c35.js",
    "revision": "6246bd4a3f0bfd1a2db9737f21705249"
  },
  {
    "url": "assets/js/84.61748c0f.js",
    "revision": "5e080fc8c3aca7cea11fffdafead7712"
  },
  {
    "url": "assets/js/85.f603d6b6.js",
    "revision": "157863d3db4a4726c9af86e8e1266048"
  },
  {
    "url": "assets/js/86.c646284a.js",
    "revision": "32b39d29946b5d54e610bf64c2fbe016"
  },
  {
    "url": "assets/js/9.1e6ccf2c.js",
    "revision": "4518695ae1f4cd8cc5b24898428256c8"
  },
  {
    "url": "assets/js/app.41d7de06.js",
    "revision": "04b47f765d7fc6e1bb13e702990829bf"
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
    "revision": "a8014e79c31b7d6eb19958f655936510"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "034bab1074f654877565603b434b894e"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "495cb92d40b5d486212a54d593ac658f"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "433015c4073b308028a3f23e64f2566b"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "5a0637a6ef89e3bf7695fe47f58db822"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "afd4ae4ef84fac58b28a2f9038ea3650"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "bc6f2905110114b9e5bdd7d8d1fefe35"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "d2c121e66d23d5e2b17e291565d543bc"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "6a6bdad2b55edea304895e6c034c9a3c"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "8d39a6f6c4285bc3640a9e3ef4ea7f90"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "ab5d31119800cfbd6f3b52507537024b"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "aa04e9a910a4a63b5f7abba94933a568"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "3bd1732af12d50a8492606be9e181b93"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "31565233abf173d71faef5955280d355"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "f608fde1b9ca0accb215bf83b51a3366"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "e2131974c5d01bbb281ee7c5bf2b82ee"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "25705d1305b923a7b1a850feda3567ae"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "6aeb1d53ee1aee7a94791d815c5d9999"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "8336520eac0eea2b5e6d96412b8d47c5"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "f8af1cb5990761c962d8583280c0a0b5"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "4ac505ec7a1d91c449b5c45f4b4effc7"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "4f24f1e3a3d1c25eeeec5f7f8eeb13ae"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "89a5a631c5e72dfd32c39205ab49a261"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "5ebcae89d48133480b678bc3cd55837e"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "067dd47a9cf52902d20e3c3f752ca84d"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "003f6e03cfef50db15341bb04b37d4c2"
  },
  {
    "url": "interview/index.html",
    "revision": "360da9550a63ef626843c2f9d41cb28c"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "be50c1d350db70f4ca427936e9e795e1"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "313da636857269a6559d2edd8c3af1b4"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "918d49c1234ece1e983e56b9c96c129f"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "3e7128ab1d283abe5d7ad7a9043fb123"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "0cb235be8de32d423181c86a681a71c4"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "ccca72a510f37b15e677c142e529bc39"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "fff3b5b2053415ba7c462a030b44d3ca"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "606522ef21dd99fe7e5b82d76d23078c"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "6a8795e7e88c67b636902f07b5f9df86"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "051be2333e30b44a20c2bda5a2c3e370"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "09f3726d6bf9c8fb65f6a5b40a3ffc20"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "aab326d3864b8e95f7d268d486afe703"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "17fc1ecdd1b221644d722958453f9c93"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "1e7ab895e18895713885a6ff2f259ba1"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "56955b441e3850e803ccebaee61169ee"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "1400cbd6856ee7f7329f3927c2e98fe1"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "d6e1b7f8c526c55881bd5f73c4c2a9cc"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "26d08fb40514922615c9255a38f7ed97"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "bca394e8ae0a0c5c7b4e5102a972ad75"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "df8cb394fe5a9f43eeab9d804676f0a2"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "9d495719036715ca153783164bbce6c1"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "5541e4efe72601f33f75c86fab6cf4a0"
  },
  {
    "url": "tool/index.html",
    "revision": "fb59142d091278a282d1d542aa87d129"
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
