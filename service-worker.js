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
    "revision": "f1a47122d91d802dd22f06ae5754d892"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "73c79539870ad3777ee4b2921be2531e"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "0cb5fa3ab360c53fd59ce720341a4492"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "dea31337b99e14714b7ab892e2ce3364"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "d394c4d86490db246f644007fbf4db8a"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "7751b94e8c1a2984392b1690ca78c971"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "35e0e00abed005f94460e28d51093cad"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "ad895d8c847a3d72f489f10d85a8780f"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "46bf2c0dfd874167f44af5eb18061f60"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "47ea6acfed1575fdeb11f082b35f621f"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "e44c5550294e032aa4458eea8c8ffd8d"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "d226def653623021c0a082648e6d2fbd"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "a258677b4fe266925163edd586b1d4b6"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "3745421d6669e7b18fabc0fbf1660ee0"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "c9a683396c4b6e52ef140ee3d7475f2b"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "8e2354692bb64d31932b7c59a569e3eb"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "6f66763fbc5046d095fad3c782a2dea5"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "5be1f3ae16ce0bf8a8e7a0a209055c8d"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "a31cb6bd97541503d2f8afe527347b19"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "41a5cbaca25cd146378056408696f8f1"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "2bea8270f7bb4ae79bcc1d68937a81ec"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "aef0641e5c7c58739b81298f41e0c0ea"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "e7c734f722efe8aff11266a966e6091e"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "efbf0029b62debe02f4325f70741485d"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "34c91ada0440c4c7a05cb3fc76b656bb"
  },
  {
    "url": "algorithm/4-leecode/stack.html",
    "revision": "4afd81777d899ec471fbde5c6fa6e177"
  },
  {
    "url": "algorithm/4-leecode/tree.html",
    "revision": "1642b5b0d4cbc1c20ae7b01ccefcb67a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "eb7ef059922c05586ba4b6696d842014"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "d687c8da432c608aff5c0af04c850462"
  },
  {
    "url": "animation/index.html",
    "revision": "c1566ac54e9918ea1a198a370896effa"
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
    "url": "assets/js/14.8ee5c244.js",
    "revision": "af345413c98ddeb5af5e18dc42dfcc39"
  },
  {
    "url": "assets/js/15.9267fc00.js",
    "revision": "8bf6773de993e4dcc337acf5df1cd76d"
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
    "url": "assets/js/19.a6eab905.js",
    "revision": "504f3e103f2165e62e53a39600ee4f37"
  },
  {
    "url": "assets/js/2.2f2324fe.js",
    "revision": "027a5f58c4a9ffc7e903e5df06ae6bd6"
  },
  {
    "url": "assets/js/20.21ef1632.js",
    "revision": "f2eb2afd38d726e9aaa7e5bb41886305"
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
    "url": "assets/js/28.47b4071e.js",
    "revision": "1b131078d41835d3a5957f9b4d107ffb"
  },
  {
    "url": "assets/js/29.32f5fee1.js",
    "revision": "9d2332371aa918b26d210bef87cf1df4"
  },
  {
    "url": "assets/js/3.a7d05428.js",
    "revision": "f08830e44563ae6a2d43d83014eabaa6"
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
    "url": "assets/js/41.28a2a650.js",
    "revision": "d2a8037c4718aac072604fb9f2237a53"
  },
  {
    "url": "assets/js/42.30f8c764.js",
    "revision": "538c8294ad31cc5fecb56acb25676e49"
  },
  {
    "url": "assets/js/43.25a6a6a7.js",
    "revision": "d32d0e6c827ad49fa18463c5a6330ab8"
  },
  {
    "url": "assets/js/44.b382462c.js",
    "revision": "9abe44d45614db581a8d1c3b9c3aa9d5"
  },
  {
    "url": "assets/js/45.98f93169.js",
    "revision": "93e7759e1470652774de27dd31677ad3"
  },
  {
    "url": "assets/js/46.d8c48295.js",
    "revision": "da379a4fa8159d86fd735d2b7eeabb4e"
  },
  {
    "url": "assets/js/47.f9e9d49a.js",
    "revision": "ba5796f473e9e81735ab6630357b52a8"
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
    "url": "assets/js/5.ebadf3da.js",
    "revision": "fbf476495cdb243a239b6704491200c7"
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
    "url": "assets/js/52.60e225e2.js",
    "revision": "d648493ff711fce2735bb61665993197"
  },
  {
    "url": "assets/js/53.4399f0d2.js",
    "revision": "9055be235a7265e7ea698ec9657dfbe1"
  },
  {
    "url": "assets/js/54.c5f4b889.js",
    "revision": "619f5f229759e78e93751e2e47fe515e"
  },
  {
    "url": "assets/js/55.0805789a.js",
    "revision": "171632e876512674a16ba393813651f3"
  },
  {
    "url": "assets/js/56.092e93a1.js",
    "revision": "ebbf72dc3fb2ffa24f754e2def555bb6"
  },
  {
    "url": "assets/js/57.7def10d8.js",
    "revision": "fb565fbb3c4bbad968a95ca0a4fa675d"
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
    "url": "assets/js/60.95d1e8f2.js",
    "revision": "e6186d4b8d149f447d7ab98abf9cc309"
  },
  {
    "url": "assets/js/61.64424896.js",
    "revision": "073fcf4336aa283582ddd912c7e6e715"
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
    "url": "assets/js/68.e7a7cee5.js",
    "revision": "3bd4cbbe333236f3bbec4eff99f78d30"
  },
  {
    "url": "assets/js/69.5441b1e7.js",
    "revision": "d1ea5645c73905b791d9f1407dd5d0d2"
  },
  {
    "url": "assets/js/7.a65bac55.js",
    "revision": "c122cc86f3c1979396f0dd1a39e5e010"
  },
  {
    "url": "assets/js/70.7d836433.js",
    "revision": "90817ac2366d2bd75821e370ef150b28"
  },
  {
    "url": "assets/js/71.34c57923.js",
    "revision": "87db44a868edc55cb28f72fd8df87db8"
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
    "url": "assets/js/77.2c255248.js",
    "revision": "67c4083d33eb41ab59334c15e7721780"
  },
  {
    "url": "assets/js/78.43ad3f8f.js",
    "revision": "2f6836f30d277d4e989f24cabfc4c1a7"
  },
  {
    "url": "assets/js/79.a08609f4.js",
    "revision": "7b367969cc202b924fc87325a301863b"
  },
  {
    "url": "assets/js/8.14f8a4c8.js",
    "revision": "86827b43f64660a1b6054e4fce867f36"
  },
  {
    "url": "assets/js/80.81c48230.js",
    "revision": "37002568858c79d89f7500efec5e0cb1"
  },
  {
    "url": "assets/js/81.1688a9e0.js",
    "revision": "1238f2a8a1f35555898144b8fe15a719"
  },
  {
    "url": "assets/js/82.68200cc6.js",
    "revision": "e5a51c6ee90f37c52a6e50dc615d84d1"
  },
  {
    "url": "assets/js/83.f3f44ca5.js",
    "revision": "8454d5d715a3b09c02178d17335b5662"
  },
  {
    "url": "assets/js/84.790cace1.js",
    "revision": "fcef4728ff5c4b57f69939cabd4c7eba"
  },
  {
    "url": "assets/js/85.6662adc5.js",
    "revision": "bfb20a2e7ed430a91f4f27c79099ddc8"
  },
  {
    "url": "assets/js/86.442a8bbe.js",
    "revision": "30cca617c92782423c5ee136c4569d21"
  },
  {
    "url": "assets/js/87.4e7612cf.js",
    "revision": "ec9211bcd9e5afbf736d9f9f7bdc1cda"
  },
  {
    "url": "assets/js/9.1e6ccf2c.js",
    "revision": "4518695ae1f4cd8cc5b24898428256c8"
  },
  {
    "url": "assets/js/app.a800f656.js",
    "revision": "2e58b48174d6a97579947c543bec2c45"
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
    "revision": "59ca959f8db3a7aa1cc1e38cc7e5c10e"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "e2cb79765037decc8d2da0afc19e8beb"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "7b84c4c367582e924ea7bcae9ad8b3cf"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "ee6dbba9e3cc3026fca0b664c2d9bdab"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "ba18199e0295bdf101ea3b6f201998c9"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "e7d67eea6f37f900663b5cedca2b1315"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "6e27e73bbcbe4ac335236f3ac488c627"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "2b709d6de75f9145f955261f4ccaf254"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "aea7e581f4fd66bc48ff2c9ea2855f82"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "fbf3c0511116d088fc7b9f81e18c1244"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "143ea0f6fc54a85ab7439b8412471564"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "e0da958fe130754b845e2d1295f14fd2"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "7192b15815295f5f8f9e162cf6fb06e8"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "ecab1a37158305ca0b43db11823079a4"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "4709f6fc307f92ea4f5c3ca96b872625"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "50d127a4a1e81ee1d8cb13d6461187ec"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "925fb2941a80d6b215487144ab90547f"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "faa411e7fda5558bdf40d5c97366cd37"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "cc40fdb3bd15ac838606afdcc1bbcb43"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "50482cd9b80dcc1235ed86681135bb80"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "2585ca796c462160d12455fed88d09a2"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "786dc7d43db808673dc911d2b4c62e66"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "4976d07373155a0ea21cd7620f9190c9"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "0e4dbb953535f1398e286234652f4a09"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "fce95081c765ec705bb278da77ccd1a4"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "524db6b1edfd8f6fa7c8494ba020f5f2"
  },
  {
    "url": "interview/index.html",
    "revision": "ccf5f9cdc88d5899625bc939b3620fcb"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "8f08d623b62ef45e0addeb913583ece1"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "f257181e94da77ac9ec82fd63ca9631c"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "a0a2d0cb3c4012f4841a62d322f41a1c"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "e62586398dbe148f9ff12f04919d96ba"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "2896cf3550533c725bcf2847a144e474"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "9c9ec17c92a46c86dcde3cc3a9f7e119"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "2f653ea425d14ed4e006365d192f78a8"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "d7a26592b376b960068286539d506096"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "27c3dfc7458e4332fd3c6e3020ec3b7f"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "cdfb2ddd6734b66f23d15f7b133cce8f"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "0df8bf99d4c58cafd714420c93c57907"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "895e25c951e5c61cde5a2eea35b70b05"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "6ae0102f9b961ca4afb9cb9e3272730a"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "c4554187e22bf1ae8268476ea8215bae"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "fc98b7ec13e580abe8cae14558bc6bb1"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "44203766e3961210afd8f9521f8da65d"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "30f512edc152da79ed75b93e16669dd6"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "8dbe44f1462cf079935714a64bd877ec"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "f7f6ace0b998e1377bf15fbb5696ecf3"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "aea6c388b3b094ff56cb6ead91d26247"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "1ffeb0b4fc537c37a31644d2ce76cba6"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "f1005ae6923941da8c513e12d2b00f48"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "6e3f954d152df63075b0d3a1392d8db4"
  },
  {
    "url": "tool/index.html",
    "revision": "eb8c355b789e8be5f1dd6e9273240b5c"
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
