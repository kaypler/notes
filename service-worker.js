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
    "revision": "456280f7bd691e311d7ccefcbfdb1b3b"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "2c5dd516a5402ce0d77ab84a33f8bd44"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "80c166de3c6f6d357ed13a07d3efa346"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "f36636971e12c62396fd0c25d9db69a1"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "698cb9dce7dad6537880cd44c6cb4542"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "9856f395f01839284f7f5777506286c6"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "520a79c32e0b46a236a442b9c2e780d3"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "d70f38fc336278913951210fa7afdc2d"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "089f8fc5be39f6ec9d0315267f675836"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "67df22b64d9c42afe11a9dafb02ca905"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "44dffd5cab89bd83b0656fa105f8d266"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "6cd21e990abf11faa2fbf78b26a0a849"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "bec68e26ca77b4d7e60e805f644ab23a"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "2851f2568a320ecdf0957009d8bcdaf6"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "3f8154a9a644342f118728dbb5223269"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "e3247924fe537bcc55334dd4fe405246"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "3eaa59f2ba42f63b6efa91500b5ea2ab"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "1feee306787c4fd3e66981d8be5ecf1b"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "26a4eacaa088230e715df0962c5a6c43"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "1e61f5970dd7e57e307bd50cbcc3815d"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "2d26e62496c25fa5267cb9b45b4d2db3"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "f2c72e96c9a81a41d8aa6decaec2e833"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "235f5409c64c82bf7a156d333428e21e"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "ca42a2b1dd6e940d88a92df44493c71e"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "40edb279ede3a3a863daa8b2120b4722"
  },
  {
    "url": "algorithm/4-leecode/stack.html",
    "revision": "e0b289b9606be56514199755e387cdfc"
  },
  {
    "url": "algorithm/4-leecode/tree.html",
    "revision": "25bf4e1c219e8779d0035f6bef900bbf"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b9e8be29bc6809acefb49c6dfdfce715"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "d04d3e3ae3cff99e74279d74734f0e09"
  },
  {
    "url": "animation/index.html",
    "revision": "6923e3959bb05f94a933be3dd69d9c29"
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
    "url": "assets/js/13.be9b0450.js",
    "revision": "ec4a2a84662dd74c04d9cff15d2e6d6f"
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
    "url": "assets/js/45.4a30507f.js",
    "revision": "4d08a86679028356ad29d611c7f7cc23"
  },
  {
    "url": "assets/js/46.a153ddf9.js",
    "revision": "6b845ee96bf557e6a2b1035e531a43c0"
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
    "url": "assets/js/5.911c8c20.js",
    "revision": "28349496423777fa8cfa5759cb915c6b"
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
    "url": "assets/js/55.971d3fb5.js",
    "revision": "27fe30aaa24f175625efac50cda60c6a"
  },
  {
    "url": "assets/js/56.092e93a1.js",
    "revision": "ebbf72dc3fb2ffa24f754e2def555bb6"
  },
  {
    "url": "assets/js/57.9c72a8eb.js",
    "revision": "1611be159b49083eedf135f505d5e1c7"
  },
  {
    "url": "assets/js/58.1b21d92a.js",
    "revision": "ad22d2ad68f1ead50cc3b5caa446c56d"
  },
  {
    "url": "assets/js/59.8d1a7aa7.js",
    "revision": "9cc358c54f010c5de7f085b00fd3ff26"
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
    "url": "assets/js/65.ff2a68fe.js",
    "revision": "e033abf19306d3ea8e2e436f01b66b1c"
  },
  {
    "url": "assets/js/66.eba2892f.js",
    "revision": "c415144c5e0fbfb7de12e8707364f0c3"
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
    "url": "assets/js/7.a65bac55.js",
    "revision": "c122cc86f3c1979396f0dd1a39e5e010"
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
    "url": "assets/js/73.23cf9f42.js",
    "revision": "3b0c58ea8292cc6f6b048c862423430c"
  },
  {
    "url": "assets/js/74.738e9365.js",
    "revision": "8e28fdfe427bbf4a687649ed0237891e"
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
    "url": "assets/js/app.14dcadb5.js",
    "revision": "4c57155e4e4d5ec691346504e978b41c"
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
    "revision": "c207fe42c43b45a5e7cb782edd0cb1bb"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "99f7b6ac5dc8fe5478601edb0e4fcb7b"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "508a7aa6949bfb02a293851edd332aa5"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "e6d3b7d6b9bbfbcc2b3af54ff67ee75e"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "4db9fc1bb1054d99d010376976379839"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "0e4d5260f0ab837a67adf3457c4dcb90"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "4767818c32eacff6b5da6d755a94cc0c"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "a01f1b99c3a8d6b6cfacbdfda4f4d69a"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "edd4874a273e305cf92e3b9ecc7103b0"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "615c7b27100f067a5de3cde3e5280ce1"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "1574f7ce2542ff22fd7d3d493cd5ed3f"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "4b606d8609b4c59b5c009b9befe2f801"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "391af133c1ecf8940d1c51a5cccf2e44"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "0fa92fc51e8c9a1bdf43d0e027b06744"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "cf129f6f4daf5fdc5a50180b5389d109"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "7e44c0ad6e1b3dee6f45dc75c082bf0e"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "364d2b781f4b12d5f06ea01d8a5e7f79"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "050c972547ee95e8b649d3c129c1cea7"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "87a2c08ff53729a5756d8c10160f595a"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "802053f5391b60598be699bc4e35c6c4"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "7b58ca48f5e380d8f563e70fc5b7d2e3"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "1ff5883e790581f219720afa788eef7a"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "dd823eea65350fc0dad8091d9f3fe7cd"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "9f2cfaedd1efcb8aa223e11bf0b35b8f"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "c5ddaf3e5e81f30d92386ec8ea31ab15"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "204d9dbd1eb6562b7ad9b715ac2ff1fc"
  },
  {
    "url": "interview/index.html",
    "revision": "767af5ffa48f8909a9340c392c030f2a"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "8191538577e9eff1abd3f3c550134968"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "2f22a0417c7665d2441cfd64ee34caff"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "cd0e511fa20b5900682747e5019833e8"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "c38c0c34193772fa5728ae0dc45753aa"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "4da389329654764f8e161cd150747197"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "36fc7640be8e366fd510d03cfee5e3ae"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "34f19c73891e6a7f5b66240438d63866"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "e472b5c482b64aa000dba68e22e21e23"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "a6542c5c1774a896934ea0f08feb4b01"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "77d831b269f94f6e323a58faeaedf271"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "e88029ac456d29d2f44859bb0effcd0f"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "748fb4c45c4c1d16a48f0368f7e341c0"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "442296da33d877b5b2b941739e564bd2"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "050970931166dea8e0910b8f4019a820"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "7dff59157fd70d2a8398372b8b7f3432"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "9f2d25377a2c19c9fb8581dce859ed03"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "5ef98b03f46295039e046bb1f47c3f18"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "566bf3b8340c3e7b4b6c2b93843d53ac"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "28801245b7fac96a3a7c9148ab27315f"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "b6208823c05cddc05690331f28818ba0"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "d41a6a85b00aff31e5ae7bc86a00a785"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "97c5ef6bf5e08bb889d37022143ffbd3"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "0a267b8d9f4c4182abc60ace22e21154"
  },
  {
    "url": "tool/index.html",
    "revision": "a7b9d8a782adedd93043fdefa81a1e52"
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
