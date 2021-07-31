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
    "revision": "9e7e0c50400d80c90fd19296856e7190"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "06e4f8ab7ee3a1cc82b2422867dc4c97"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "98549d08c4409ba708e825e4046db173"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "50835fce4d8231eaca2ff27129515141"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "a15fa67787451bb6ecccf5b57f05e37c"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "85468a9a0b1d066b2cb3ef64b27db813"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "a80216b90a6af4f700c275903338f995"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "6b091b2f70962868bef8053c02f6d06f"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "4e4dee485fc44fb9266312016863928d"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "8e888c2b9b5f2f9f5530d63ab9959911"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "a85fdf7eb0bde048bc5072a26f304926"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "dbe5d7908eeaac0baa11cf3393aa17b6"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "fcd26fddf2530c38f57e3c6e19c4ba90"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "a9559ed361250a3a07b077aec88375bc"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "97794bf3415fedd277b18b34a3f05009"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "13627615f7b649d4a684032ebfc65f29"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "4e2bf7853743436da6832e123e40687d"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "35f02ee09bc6ccf78b46c5b1179ed6c4"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "dc2cf776f46745957c85e8155652c9b6"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "c01e5f4f0eef486d552ceedf2ab81873"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "76030d898a1cfb71ddb65d194a77ee44"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "31b483fb122a30a9ba168224dbf39865"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "ec6cb075991bdff284b955db9890e104"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "36179e08db1891a387e29e583702012c"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "805e0081c07b7c567afe9914252c0d74"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "41d15148452948f767b6afdef4ceaac0"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "23b0eb8b26f8f6fcd4ffad2c614e7b93"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "85f047ed6e4b4b0303c6d610030539c8"
  },
  {
    "url": "algorithm/index.html",
    "revision": "c1d66ee1868aaa81bb4ee03246518905"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "b6882bd6d86438b4b5c4bedd41fd1613"
  },
  {
    "url": "animation/index.html",
    "revision": "1a90f7d0948dc2b2229ff9335f3c47b1"
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
    "url": "assets/img/browse-cache-1.1f62052c.png",
    "revision": "1f62052c9e8b5b5d19ff6e462a908fee"
  },
  {
    "url": "assets/img/browse-performance.4f7ebd2b.png",
    "revision": "4f7ebd2bae107a309e5aa4a171858976"
  },
  {
    "url": "assets/img/browse-render.6b722f5c.png",
    "revision": "6b722f5ce0e4a8161cda22d95036d8ec"
  },
  {
    "url": "assets/img/browse-request.63c08fe3.png",
    "revision": "63c08fe38a22df7f5f4816dd204e0f96"
  },
  {
    "url": "assets/img/browse-thread.a1728f08.png",
    "revision": "a1728f08001fa0e8e2ba653e286972dc"
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
    "url": "assets/img/function-call-procedure.52c96067.png",
    "revision": "52c96067aafed576402fae33998f7628"
  },
  {
    "url": "assets/img/kosaraju.443bf2a1.png",
    "revision": "443bf2a1f588e59a15715ae1fe5c6597"
  },
  {
    "url": "assets/img/let-scope.f21a6945.png",
    "revision": "f21a6945b18c59e5e0648415034ff7ba"
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
    "url": "assets/img/this.70c3b8d1.png",
    "revision": "70c3b8d1f6f58517dd6bebb7b2afaaac"
  },
  {
    "url": "assets/img/topological.ac9682e1.png",
    "revision": "ac9682e1b25879338b6540c6650ebdf7"
  },
  {
    "url": "assets/js/10.73c86683.js",
    "revision": "b63eb18b183da3e34d7f736f82bd8987"
  },
  {
    "url": "assets/js/11.f0725330.js",
    "revision": "b6e4b1d809ce08e7a006a66e287d76a4"
  },
  {
    "url": "assets/js/12.a5ef4833.js",
    "revision": "d82c2a106b14ab4941846ab936c9b0ac"
  },
  {
    "url": "assets/js/13.cb8ad397.js",
    "revision": "890021893d42134775fd4b500249d7bd"
  },
  {
    "url": "assets/js/14.882b6556.js",
    "revision": "fe0d6d4547d2b0ca12a91136b57d7a40"
  },
  {
    "url": "assets/js/15.eaedf3b8.js",
    "revision": "f10d38df587af6c53eeae112284e5555"
  },
  {
    "url": "assets/js/16.ca786146.js",
    "revision": "cfa0e770f5ef7c8c50d4eb86472f73db"
  },
  {
    "url": "assets/js/17.29300852.js",
    "revision": "918f74cb3bb8ee7a3b0d336ca2f1ac81"
  },
  {
    "url": "assets/js/18.fca1d06d.js",
    "revision": "bc932ac6df748e7836a5bd19f7de3556"
  },
  {
    "url": "assets/js/19.e46c3f46.js",
    "revision": "41d5e2064531986a014b426c00023824"
  },
  {
    "url": "assets/js/2.646223b7.js",
    "revision": "ef6f4904f4e0a5a46fa5f6ab42106822"
  },
  {
    "url": "assets/js/20.f47bb038.js",
    "revision": "ee7363d783fab2a7196029b21f29afd9"
  },
  {
    "url": "assets/js/21.c1c9d0b8.js",
    "revision": "25fa538d0a620b0714aadf33972be685"
  },
  {
    "url": "assets/js/22.590969fb.js",
    "revision": "7361d88ad8299480620054856c830e61"
  },
  {
    "url": "assets/js/23.54e7bd82.js",
    "revision": "79f634d678f7ea74a999dda2ba0319c4"
  },
  {
    "url": "assets/js/24.f6f7eeb0.js",
    "revision": "eec6e742c219c745ee62678943838497"
  },
  {
    "url": "assets/js/25.a5d678e9.js",
    "revision": "cc036f97d3cc2e6a0de9fd696e9d5419"
  },
  {
    "url": "assets/js/26.18607420.js",
    "revision": "112eb0520b3358c0a5877b1422d8edd7"
  },
  {
    "url": "assets/js/27.18be5582.js",
    "revision": "bab93cb59dc502e9f514576bed1483aa"
  },
  {
    "url": "assets/js/28.33b273b1.js",
    "revision": "04229fca999f661b09b3910078207e51"
  },
  {
    "url": "assets/js/29.3151bf45.js",
    "revision": "ad512a08e3871dce520a5a49fdb74c87"
  },
  {
    "url": "assets/js/3.c67ddac3.js",
    "revision": "f11c2a86c22af194c1c5048a449dcbc8"
  },
  {
    "url": "assets/js/30.d4bcf00b.js",
    "revision": "1dfed67f549fdae8f68207ccd169b0b5"
  },
  {
    "url": "assets/js/31.85339a11.js",
    "revision": "7bafb4573bf3a074dbd9060876c0a722"
  },
  {
    "url": "assets/js/32.6ea2e874.js",
    "revision": "cb9909920252b3b26d4ed270d0aeb8fa"
  },
  {
    "url": "assets/js/33.75206b83.js",
    "revision": "0cfe47172d4deb01dfa198f743c06876"
  },
  {
    "url": "assets/js/34.29acf9bb.js",
    "revision": "aaca553911dc089b7c33671209c7eacd"
  },
  {
    "url": "assets/js/35.c00651eb.js",
    "revision": "8e6613c4768829224d1c5ee779122456"
  },
  {
    "url": "assets/js/36.d3f88f14.js",
    "revision": "f9f35097a8d30118c9d53e51966d327f"
  },
  {
    "url": "assets/js/37.87c2beb4.js",
    "revision": "49af7de63e13b080066ed5b529ca3dee"
  },
  {
    "url": "assets/js/38.ce917c10.js",
    "revision": "c1510cfe100107d0bcc18c127d70662c"
  },
  {
    "url": "assets/js/39.ec3217da.js",
    "revision": "ce79f3a5b80aa9aa193eef30fa9bdfae"
  },
  {
    "url": "assets/js/4.46cc96f1.js",
    "revision": "bd94c2cc1f90e911189f0d4b7b3e94bc"
  },
  {
    "url": "assets/js/40.09503ead.js",
    "revision": "c4eaaadaa56304b27b316ac5f921abdd"
  },
  {
    "url": "assets/js/41.c6c90433.js",
    "revision": "ec08fdca8a4dfe432a965be189e38ef5"
  },
  {
    "url": "assets/js/42.19779039.js",
    "revision": "cf5ca8a9df095083ef3fdc99ca4f9fea"
  },
  {
    "url": "assets/js/43.8dc705fb.js",
    "revision": "9a07e2404e3f523ee89bfa80e8a55392"
  },
  {
    "url": "assets/js/44.5f42b495.js",
    "revision": "781c57f9543612cf75f1f69cd6396d0f"
  },
  {
    "url": "assets/js/45.0361a007.js",
    "revision": "7720060971eaaf33a25f9374a490f9a5"
  },
  {
    "url": "assets/js/46.95cd4eb4.js",
    "revision": "404139a8231feaf94acf0b2594cefb02"
  },
  {
    "url": "assets/js/47.de5dd2c3.js",
    "revision": "3e2453544c34bf5fbe092e06e675eef1"
  },
  {
    "url": "assets/js/48.5bcabde7.js",
    "revision": "9e757eb218b4110589ff9788724b670e"
  },
  {
    "url": "assets/js/49.8aee9798.js",
    "revision": "2a7c3257ffa696c5e911fde3ccd205cf"
  },
  {
    "url": "assets/js/5.b67a580a.js",
    "revision": "3e1570925881bc9b90ce523ecfcc147e"
  },
  {
    "url": "assets/js/50.8e8cde9f.js",
    "revision": "f39e960bbff8a148f7887f5ed2b55fc6"
  },
  {
    "url": "assets/js/51.e0d83499.js",
    "revision": "66fc1778fd101662cd24bb16580fc3e3"
  },
  {
    "url": "assets/js/52.78e4b790.js",
    "revision": "e30c7f436dde0442974c16883cf5ee2f"
  },
  {
    "url": "assets/js/53.5dee87bb.js",
    "revision": "230dfa3d857fe2b780f1d7c8a79f1bb9"
  },
  {
    "url": "assets/js/54.3fb07afe.js",
    "revision": "4601e5652102578585b624bc01c07a52"
  },
  {
    "url": "assets/js/55.e1f1f655.js",
    "revision": "fc1103f0d85e5059158c5054e33d6084"
  },
  {
    "url": "assets/js/56.b02e2dc6.js",
    "revision": "9af74daf5138afd0d3a2f96a33c6cb46"
  },
  {
    "url": "assets/js/57.306ad1a0.js",
    "revision": "89fc26063f9e120eedb8607d6a5bdc55"
  },
  {
    "url": "assets/js/58.b4039a10.js",
    "revision": "1f9a34ad5fb16fe2631a4498d06d5dff"
  },
  {
    "url": "assets/js/59.d64f2be1.js",
    "revision": "d0155e27a405b9648b7b5b43622f0f05"
  },
  {
    "url": "assets/js/6.d2b3e2c5.js",
    "revision": "2592b91f545d9ecce2f3bc732857651c"
  },
  {
    "url": "assets/js/60.8f881fbe.js",
    "revision": "d128e26500f55311e6d10b526e449a85"
  },
  {
    "url": "assets/js/61.447a0b4b.js",
    "revision": "f9b50f6ab4669ddbbfd07bd514f7837d"
  },
  {
    "url": "assets/js/62.e80f55a7.js",
    "revision": "59683806c2044016fba5cc1deff998aa"
  },
  {
    "url": "assets/js/63.bc1056d1.js",
    "revision": "97a045c3d3d1885a2dca7320edde6a22"
  },
  {
    "url": "assets/js/64.fb57dcc8.js",
    "revision": "d916f80124807ac38797c3ba61bc9010"
  },
  {
    "url": "assets/js/65.82126116.js",
    "revision": "ce07d4de8678d9534e9a7127d4686fbf"
  },
  {
    "url": "assets/js/66.d886b45c.js",
    "revision": "6071bc0e9d45f4e89399e28dadb2b1de"
  },
  {
    "url": "assets/js/67.6081d9c9.js",
    "revision": "9fee73c233d541759f9a967f4bbaed85"
  },
  {
    "url": "assets/js/68.848ae9c9.js",
    "revision": "a90857d33f77792e05c592fd95f73a4e"
  },
  {
    "url": "assets/js/69.e5308b46.js",
    "revision": "1cb22805bbe4faa64befb70ad6b0ce5e"
  },
  {
    "url": "assets/js/7.7204ea41.js",
    "revision": "61e7a4e10697289b51b326bf0f7636f4"
  },
  {
    "url": "assets/js/70.9be3cdd5.js",
    "revision": "394374612148a9ee0484945608e89348"
  },
  {
    "url": "assets/js/71.54be9440.js",
    "revision": "b92c4682309f0f0cb17b0f95e027b10e"
  },
  {
    "url": "assets/js/72.7105457f.js",
    "revision": "91f181ba0c88184b937a1ca51df6581f"
  },
  {
    "url": "assets/js/73.ce75618d.js",
    "revision": "c768f46347d6eb8fe9a05b431df4bb28"
  },
  {
    "url": "assets/js/74.cd14d449.js",
    "revision": "dab2d7f68b455f6af5b964823de07d74"
  },
  {
    "url": "assets/js/75.85b84969.js",
    "revision": "5811de9a3bd6c009fa60b49c70fb8a7a"
  },
  {
    "url": "assets/js/76.8eb41586.js",
    "revision": "3981cb29bcbb9f3b94e43e1560b9258e"
  },
  {
    "url": "assets/js/77.e04e53f5.js",
    "revision": "10b38a621a3cd788e2bb51361577ee4e"
  },
  {
    "url": "assets/js/78.e5063bd6.js",
    "revision": "5c2148bc35dabd348afeb18a9cff6bff"
  },
  {
    "url": "assets/js/79.f2beb748.js",
    "revision": "9981c75d4e16f5d125dc77562cd1f518"
  },
  {
    "url": "assets/js/8.f1a1380e.js",
    "revision": "62e369a5ea8c24f4fd7838acfd1340ad"
  },
  {
    "url": "assets/js/80.6f5eb045.js",
    "revision": "c4261294228eaa80a345fe8ce7aa5eb1"
  },
  {
    "url": "assets/js/81.5d899753.js",
    "revision": "e3be272f569a4148b837c424c41fc140"
  },
  {
    "url": "assets/js/82.b745a8ac.js",
    "revision": "9975be5f3b3f3f1f9859a64c3de31a9a"
  },
  {
    "url": "assets/js/83.9f99474b.js",
    "revision": "d9d73b92aacd0a4e85153e4f4082d996"
  },
  {
    "url": "assets/js/84.39ecf122.js",
    "revision": "7b627adeabf2bafcb85b37d95319d4be"
  },
  {
    "url": "assets/js/85.36e00b21.js",
    "revision": "3575db67a4867a91bad907a0facaf275"
  },
  {
    "url": "assets/js/86.d8dac904.js",
    "revision": "37e342c043805b47128911a021c80a86"
  },
  {
    "url": "assets/js/87.f400212a.js",
    "revision": "b7debf7f1d3c5ad7a5ccb57076ffbc2b"
  },
  {
    "url": "assets/js/88.9139d6d8.js",
    "revision": "8e93ab5ab321a499a43ab9176060cff9"
  },
  {
    "url": "assets/js/89.901d00e5.js",
    "revision": "f3bbc13adec41c7eb6fe8dc4e4ab1c51"
  },
  {
    "url": "assets/js/9.d5f9e8fc.js",
    "revision": "c130458d8aa0632cb9e9e1ebd4f55368"
  },
  {
    "url": "assets/js/app.5a064802.js",
    "revision": "c25b8110f450542819bb96fca743dcff"
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
    "revision": "116a7b50a687cc86cd064f9573e57b40"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "6edfd351dc34a5392c3b7ba6e4031105"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "eacc35b276c9a0fb3795f625042289de"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "eef1a7106cc76b5f3eb49f562bb7cc03"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "e3267d327eb4762b8af66251f20da748"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "b3e8eedfbc495202d0c3c339bd590c0e"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "13ec3c81a8a5db4cba290d78cbce8e25"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "dac80639c1b285616715f478fd0b9bda"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "5669562b790c1344690e0e81ca30fc30"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "9406548981d2e808c71554d993115f9c"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "e56f0b1b8d14ae0e83cd392b20be97f8"
  },
  {
    "url": "interview/experience/v8.html",
    "revision": "c0bdbca1cd89dc6f5bd7c161390b73e4"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "cf81b98b0a2a2203ceffc035afc82b87"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "d77951c953999b614d3874997eb5cbc6"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "6bf9a0b5805ffcad29e2d36b93ba214a"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "cc1cff930c49f6bbaed3e50e42b68bad"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "875d42bf6575c8d56d3e0005957293f5"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "0ba7fa5ce5007d926ce78dc968732e71"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "3b1c77520c31a3fbebb0f1a0abf88203"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "77e8720e12c9c2282a1907b3862fea8e"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "2da400100eedd356e31fea4de57378c4"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "d15b6399f4e8cb39d594544f5e835d45"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "8bf5b0ce257b106c8edb12ec6ab5126d"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "2c44a0d4a4e5444bd6c6ed360ef35b0c"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "922303631b7b9eeca436eb0e82a5b5d9"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "8d894ec39f14255c6632ad407f7021ad"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "5215c5d767f47ab1fd0e256f1d13d4c9"
  },
  {
    "url": "interview/index.html",
    "revision": "03143d454203ed0a20105f4cefa19d3a"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "36d79af01dc687d2433c19a2cd2907e6"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "2a9c51608c103ec2bebe49d6ce1caa57"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "c7042eb882173ccc714051d62779892b"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "802b34f81d22bfb90803379e9572c7b1"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "fa70e4f2dd23903d19c75a67dde19b21"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "92e203acaf5aceccc6a98422b38ad1fa"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "59cfe813eac41699b1bc9c0c07876788"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "38eba306ad4c4aa3b51d0e47a9f6cee2"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "ad01dda29712d4fc761854b26d660db5"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "95e729fe0631fcb565a507fd352283b5"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "331fd958027e0d3ce6720c4a4a75fef9"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "1e5e51248e2ab2cdf4366390b9a500ff"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "0eeb4ec04651eefc359e03ce33992f60"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "27ce8468a39e5abec67250439a7e8bd4"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "05f1042ab679e51eef0dbcd4f623481f"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "82f1486eeea44142c900fa53b86eabea"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "eb524fc6ac3825d2ce0f35d4db3f4ec4"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "767f02f1fa121a8a5f500f84d2b02d2c"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "4bfd663a062dc2866dd5c70450763c23"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "50fb11b9948f0230a191a36b1d5312e7"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "d5950a9cc25db7fc58c8ca0bdc0f2837"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "530225ef38567af7904f9558abd1498a"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "f5e90a1f76be8cf93af968ab4f6f57a3"
  },
  {
    "url": "tool/index.html",
    "revision": "f954bede7045a9d7005e95eb5ea5df8a"
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
