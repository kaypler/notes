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
    "revision": "71fdd75c7ba2d1f3a008f058602177e7"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "7f4f7cec76e19753b88fc06551754e51"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "97cb8b0ddd72e52dfac64c6205e0969d"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "89eb21f5b30f3a9b865c8ca360543d7c"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "fa40b72fd6621cbc23bd6f863720afbb"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "e5dc50f69ebe0a2296ecda663d21ce11"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "fe68ec7213893d94a23ad2b49aae942d"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "1d570ce0f801c4112239d76840243c3a"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "ebd991436a17b2c5d5388ccc0efe907d"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "314f9959b09e7cb7e18e4ae5fe9990c1"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "5babae5fe993c4c0ac61b958b885b656"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "6644210a65fa0edbf8c6a7512bd3ca0b"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "bd6a3b40ff5eb36c3b125cac25bd0911"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "1135f32b59cf2ebfb171dd2f8fae2b7e"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "683bd0124d8fcdbafa28aa5a4af887bc"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "d6c7e42f7ceda23d12ebcc490b54e0e0"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "a90d22801c626439e1fe4ce7801d2f67"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "e220441eb33ed3c481ad81598d03710c"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "304d17f61c98a1cdaf8e900e448b9716"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "fdcf03b25a74168a0332c96349ba2992"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "4274abc7a4c37c04354ccdc7d761bcae"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "d8112647df874619b9d3d893687432ae"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "fd652959b049d2127bf08f0cf645b76a"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "b5e15671b4c5f4ea3f777a0980baf1e6"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "acc73d6e396d0e510790b39084b2dc04"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "d0bae3a469f2a266fed550d554f169db"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "84f95eb98a414044841521fb2cf6f9db"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "ee9950397fc978b71ebdd890e990d9db"
  },
  {
    "url": "algorithm/index.html",
    "revision": "cf2596df3c13c67f25541efdc0b59125"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "dbc3c5dad3c2da6a7c7df235ea3b67e5"
  },
  {
    "url": "animation/index.html",
    "revision": "1ebfd288085a018b364e75056fe70ead"
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
    "url": "assets/js/13.1cbaaf5d.js",
    "revision": "5f224fb36e090cf512a631839f4ab728"
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
    "url": "assets/js/17.7440dea1.js",
    "revision": "d7d622b2a6fb0ae8700026021ac0f235"
  },
  {
    "url": "assets/js/18.ccb2e5c7.js",
    "revision": "9084347974327d89f22a613550326851"
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
    "url": "assets/js/24.05abc0e9.js",
    "revision": "3df655f805b7d15e2ed1754747560f46"
  },
  {
    "url": "assets/js/25.33f1a7f3.js",
    "revision": "f9cdddb2c8475d2487f427e3cc321b3c"
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
    "url": "assets/js/32.d2b67595.js",
    "revision": "f1b89bded56607d599d2137747f7cb2a"
  },
  {
    "url": "assets/js/33.f4cb553b.js",
    "revision": "fbb6688ccda8d8c22ff01a1c251e6428"
  },
  {
    "url": "assets/js/34.29acf9bb.js",
    "revision": "aaca553911dc089b7c33671209c7eacd"
  },
  {
    "url": "assets/js/35.31aa7672.js",
    "revision": "853843e13d282cc8824c0d699727cda5"
  },
  {
    "url": "assets/js/36.35f4ac48.js",
    "revision": "92ed8583b916722601177fb80e32310b"
  },
  {
    "url": "assets/js/37.064312c6.js",
    "revision": "d96a1758539f6d0b0142e7f7d456b863"
  },
  {
    "url": "assets/js/38.70996865.js",
    "revision": "0d1a2ee6c89b48692ba868e163ab7639"
  },
  {
    "url": "assets/js/39.ea3c3151.js",
    "revision": "5eca663e17eb82b8e36362f969f1d605"
  },
  {
    "url": "assets/js/4.46cc96f1.js",
    "revision": "bd94c2cc1f90e911189f0d4b7b3e94bc"
  },
  {
    "url": "assets/js/40.506c9ef2.js",
    "revision": "20d3ae1eebe9e4a5cfc7371eec1b1927"
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
    "url": "assets/js/48.cae77be0.js",
    "revision": "dd840e3bb4b582c9542deedd7358c8a1"
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
    "url": "assets/js/51.2bd68bf2.js",
    "revision": "129f4602295f8f8c1616c08aecf89d95"
  },
  {
    "url": "assets/js/52.6027b897.js",
    "revision": "33d5d2905e581a58faa2ee4fb1432beb"
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
    "url": "assets/js/55.19395556.js",
    "revision": "9213a2d9666da0bfdd2b859ec4891695"
  },
  {
    "url": "assets/js/56.3ae7f912.js",
    "revision": "8484e4e0916bfe36ccb0096c434f26f1"
  },
  {
    "url": "assets/js/57.e18b586f.js",
    "revision": "5dfe8e8a963010104db861a5908e6e92"
  },
  {
    "url": "assets/js/58.6f882fd8.js",
    "revision": "75a4499b6b6735c0e9a843fb8c0acf5a"
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
    "url": "assets/js/7.4ef2488a.js",
    "revision": "d37220eadf74f1d80d9cdeb676245d18"
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
    "url": "assets/js/79.5c3a5295.js",
    "revision": "f701b6ac3069f9e293747858cef6b915"
  },
  {
    "url": "assets/js/8.f1a1380e.js",
    "revision": "62e369a5ea8c24f4fd7838acfd1340ad"
  },
  {
    "url": "assets/js/80.ab0f54b3.js",
    "revision": "cccb7b8492c56d89dab8b5055b9632a2"
  },
  {
    "url": "assets/js/81.5ae9eebe.js",
    "revision": "ffc82d1d6d5305141c3a78ca637a2bfc"
  },
  {
    "url": "assets/js/82.9e9706ea.js",
    "revision": "0bf678131d1db34ebf538694f7708b9f"
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
    "url": "assets/js/86.cb05a455.js",
    "revision": "607a4b6de581634b0d67a8ee140489ab"
  },
  {
    "url": "assets/js/87.9ab22153.js",
    "revision": "a7ea751848e5b27e7461985cf6cec802"
  },
  {
    "url": "assets/js/88.333b94cd.js",
    "revision": "295ba9f5ebcc2bfc46c83109e5891607"
  },
  {
    "url": "assets/js/89.b0018120.js",
    "revision": "f629ed0b044b5723966cf61fd1238cdf"
  },
  {
    "url": "assets/js/9.d5f9e8fc.js",
    "revision": "c130458d8aa0632cb9e9e1ebd4f55368"
  },
  {
    "url": "assets/js/90.04d3ca55.js",
    "revision": "4b3eeb65ca708737cf2f97585fec50a9"
  },
  {
    "url": "assets/js/app.35cd67ed.js",
    "revision": "ef8f26ad72443c9e3a883576a401f7d6"
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
    "revision": "0632dd5c6af25059c1ecdf5f8067c73d"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "07241e1eda1c25ad1f672ec45da17d3c"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "031360cd74047928c708ee22b0c7a9d6"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "23efef4675611971d9a7b0483474978e"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "2db74adc4ce5dbb509c250ef799cd233"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "12f952f603981fca1481f16aa596d396"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "b0ec6cf99c5a6c827f81abd39699e6c6"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "29df887364a576ffaf5c2b6d846432ac"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "a0691cf0257e39309b2e846797563055"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "d4570c572e385531141939d7fac2aec5"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "1451ba281ea70f370fe7cc0b5dedec14"
  },
  {
    "url": "interview/experience/v8.html",
    "revision": "bd09e106d65a593587be93a652467cc0"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "3632528f60c00f1e690031e6e6fb1ccd"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "e18a4aaf86c528a57363bfa2637f4c1b"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "ff9368b5a81e7c266eaa7a7863842c6b"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "cad050b389dd90e74b71c57d5d195f05"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "e949e1a13c495d3281c104bb400e139c"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "3fca426384717d375876a14aef6d4a31"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "3c5a71312bf11153fed602e0b898501d"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "2d7ddb816df4ae044e6cf240bcc511ca"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "09d051ad34ca2cc8fd7afd46f20b3f22"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "45394a7941344e0469a170e88a62dd54"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "bbb9f9e97bec9523ebefc8b157cfbd68"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "476776db70d336f9ddac41a18033faca"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "663b337b777b9d98a259bed326d63279"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "d53dfd7baeb8bd8eb2fcbe1da6215360"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "81ad7064796b8b680081098376025f56"
  },
  {
    "url": "interview/index.html",
    "revision": "89c68bba69c52a238c85318e50ce0b87"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "88f66e4a65cc1df39d85d0fd0cb7ee81"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "dee1a3a54f98157038f78fe3f21bbbf4"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "dcfb99c1901dfc37906777cfe75dc67f"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "89c231ae385a292fd23d1a35059b781e"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "e8b0c542f978a0ab4b2fc96d9a2705d6"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "85d53127002681a0fc751c679471aa33"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "1e02e0e0aa4c361a8c1ab4c5e43a6ebf"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "3a47d88f76bba5ce9dc8cba747f5edae"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "b4486609984a44ac423f7cbd851546dc"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "04c2a229f11784ec497e9c49a2411a70"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "e506944f4e836eb316cae85fdc279c68"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "364927dfb908d6490c962255d0ad2dfd"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "ea2a06c109786172bc4f57974a569325"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "6633fe2f658b580f1d5615a0ce2beb2d"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "ab76ea5f64ae6af808320ad58da3f97f"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "6a70bd186d2ffb08ff8770fe0f681908"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "874b3636ff78dd06a303b14f3f47c482"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "9993b96cc3f3d68d3a56e53e5b882ad7"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "11be3a82359cb7672c7fb643e00eb5d3"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "40cf721a57b6212fe42bd424e77e58af"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "07c6fb506681d72486ce2639b9f2928a"
  },
  {
    "url": "tool/5-other/css-trick.html",
    "revision": "f1b76493c511363bdc85f3d0a2729819"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "6587332648c1f9365d101516f0f36639"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "66f129d1d9e63f2897b185c040c22796"
  },
  {
    "url": "tool/index.html",
    "revision": "4b974a92501ea98ab720b3e67abdd65d"
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
