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
    "revision": "7edffafbf3fe7fe346b419198d6ef8f8"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "bc3f22d80286ac61cc49fed7456f5417"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "7c8ed23c73cd6fc1e13e340f23fed854"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "6796269fbf8673560f2c90efeb754d30"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "1ec1fa89a900e0cfaac833e97725b892"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "b7a3936abec2abb0a3cd01462c475152"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "03dfc8e87ad8ee4d6cbbdad05493aa30"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "8aca3f23d76a4f30f3d876e86bce1506"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "456b653f14f1f7db136118e35f502298"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "99d2299a4ed9fe99f39ae6848205e31f"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "df4ed5a8e298cf884fb7a744d43a4220"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "c0ee2f393f33156770b65333b5145e44"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "6ccd3b1dec69ac59d2a85e54b4035699"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "8340207c6ee15daccbcf24e882743507"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "450fb0e36b8ac52105528c3f59ccbfe1"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "87c03920edbf04f8c8b33c03545b72cc"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "484b7525f30697eee6aea113bb6fa6dd"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "032ea6f03111c5edb72e7c548ffe500a"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "e68219d65c8e4bcc241e46951c07d463"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "b1f5699672de61c2582039147e748f91"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "ff7cb67368fb720c59713dbabd6a77e1"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "96ac259994379c332c11042af7a75393"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "8b33ecd40d64813a10e79e23b82a7105"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "4c48abb30869e696c4cbb6990c2d9fc3"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "1f44de2fb9a2b16495511fbd60e1d94a"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "4ace9b60cae8562d16f120f4d141f8c2"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "dcb2f1dcdefe6f4f6f8fe934366f6d7d"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "72f1b417a2d36316510205a759325ce2"
  },
  {
    "url": "algorithm/index.html",
    "revision": "189152b8151dc1966c0148643b8805b6"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "1a7345e5876fe3b9c2426539bbd6d99a"
  },
  {
    "url": "animation/index.html",
    "revision": "81d6e2640ab9d4f215b54acb666e1f3d"
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
    "url": "assets/js/15.5bb7b695.js",
    "revision": "d3ef0dc5cfd168b6e3b3daf0fce3d25c"
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
    "url": "assets/js/4.d9d4dab0.js",
    "revision": "0b1f93cd782439f98b973391db24991e"
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
    "url": "assets/js/43.44695847.js",
    "revision": "73ca066418f2527417e6fcfb77bc9374"
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
    "url": "assets/js/48.06a2bed3.js",
    "revision": "b6abad18699e99c8792a312056fb4ade"
  },
  {
    "url": "assets/js/49.45af6ca3.js",
    "revision": "3e8f00a8f3f6dbced88d8a7fdb11e013"
  },
  {
    "url": "assets/js/5.b67a580a.js",
    "revision": "3e1570925881bc9b90ce523ecfcc147e"
  },
  {
    "url": "assets/js/50.502102ba.js",
    "revision": "766b49f8772cef81604715a69ce301ab"
  },
  {
    "url": "assets/js/51.dba36e6e.js",
    "revision": "29d0c442a85e55fd8ca19858cbcdbd26"
  },
  {
    "url": "assets/js/52.f0ec0368.js",
    "revision": "4569522ee7204bfdfb04998ea18abecd"
  },
  {
    "url": "assets/js/53.39e3bee1.js",
    "revision": "9c86ae5a2857e907ca6c73671ca4fde9"
  },
  {
    "url": "assets/js/54.ba7a2186.js",
    "revision": "0fb15021835200b21d2a887347fd8176"
  },
  {
    "url": "assets/js/55.338bf0a2.js",
    "revision": "46fbb778af08798b4edd3ecab4b7c2d6"
  },
  {
    "url": "assets/js/56.f4266640.js",
    "revision": "35532e83f028d7d3ea489279b6d31547"
  },
  {
    "url": "assets/js/57.914ff0e0.js",
    "revision": "b548327a4365cdbdc77ebecfcefd4eb7"
  },
  {
    "url": "assets/js/58.d8da66ec.js",
    "revision": "d1395bb4e853a989124f8bc032244e01"
  },
  {
    "url": "assets/js/59.5d02bc57.js",
    "revision": "69c95eda776b7885c3d58e72bf1fc3ef"
  },
  {
    "url": "assets/js/6.e6638581.js",
    "revision": "71df35ac1bfcb6c10bd77dc3379eb10b"
  },
  {
    "url": "assets/js/60.cbbcf8d9.js",
    "revision": "fc765ef7c999267482ecfc8da14bc169"
  },
  {
    "url": "assets/js/61.2d48fd82.js",
    "revision": "34043274d2044dd05258e167e6f7f035"
  },
  {
    "url": "assets/js/62.26d8a02b.js",
    "revision": "bf953d8c14f06382f5549928bebd94c3"
  },
  {
    "url": "assets/js/63.1995fd2e.js",
    "revision": "0fdc46057bc0b67d033dad83da403747"
  },
  {
    "url": "assets/js/64.5a721c39.js",
    "revision": "fd0a79a6a80ddef5c94ab1348a66fac3"
  },
  {
    "url": "assets/js/65.cded4143.js",
    "revision": "b65cbe02bc5af1cca65c32cce304a997"
  },
  {
    "url": "assets/js/66.fb4efdf1.js",
    "revision": "9f37ea97e37fcb3f6de9c5382abd74b8"
  },
  {
    "url": "assets/js/67.21c027ce.js",
    "revision": "2c3865267bde5c5e25fd20907aa89255"
  },
  {
    "url": "assets/js/68.a7b8713f.js",
    "revision": "96b0917d711ca26d99fe738c1e5cd7bc"
  },
  {
    "url": "assets/js/69.47107923.js",
    "revision": "1e1f5e680b573ad38fdfe04d17f896ce"
  },
  {
    "url": "assets/js/7.3b081cf7.js",
    "revision": "0860056b3b6f702ff563e204dbc0b92f"
  },
  {
    "url": "assets/js/70.3b5521bc.js",
    "revision": "8817da3f13211f5a5eeec31defd70e49"
  },
  {
    "url": "assets/js/71.0203f0f7.js",
    "revision": "61dc61297b317fbfb072669538101252"
  },
  {
    "url": "assets/js/72.22839b0a.js",
    "revision": "f989a3085633ada4777370b49bfe60d4"
  },
  {
    "url": "assets/js/73.15a7d6e8.js",
    "revision": "deacb5350c881274b4c4f21f58162feb"
  },
  {
    "url": "assets/js/74.9ea30393.js",
    "revision": "ffbee294955a97a553cdecf75b086f22"
  },
  {
    "url": "assets/js/75.ad36e57e.js",
    "revision": "abca5839b85d9d329c4a66c56fa63822"
  },
  {
    "url": "assets/js/76.a28fb3f7.js",
    "revision": "cbfa4dcdc04647359abcf71ed5ed25cb"
  },
  {
    "url": "assets/js/77.c478ca04.js",
    "revision": "538079ebe72064ddc27197d9e347181d"
  },
  {
    "url": "assets/js/78.bdb712e7.js",
    "revision": "7eb77b229ccbc55b7fcc6af8bff40814"
  },
  {
    "url": "assets/js/79.16e4f03a.js",
    "revision": "3da8fd9417adf7f1a08cc3ce1267d124"
  },
  {
    "url": "assets/js/8.f1a1380e.js",
    "revision": "62e369a5ea8c24f4fd7838acfd1340ad"
  },
  {
    "url": "assets/js/80.1e6e9d64.js",
    "revision": "ec23d997debd892c8b714fde124099b6"
  },
  {
    "url": "assets/js/81.d5cb0878.js",
    "revision": "41d0128471b0f3a1d9a4ea47837f3f34"
  },
  {
    "url": "assets/js/82.43ee6529.js",
    "revision": "47b5a26ada151c178c5da72695d06ebd"
  },
  {
    "url": "assets/js/83.2545a138.js",
    "revision": "cf7fc42e53958448356c2df9dc1f181f"
  },
  {
    "url": "assets/js/84.79fbc8d7.js",
    "revision": "82c69ebf1e124ae285d164b86f0e33e4"
  },
  {
    "url": "assets/js/85.bdd9d202.js",
    "revision": "7d79e103bd77524af3e1887ba781c568"
  },
  {
    "url": "assets/js/86.b82ff6b1.js",
    "revision": "04a099a37a1b1ee8671cbda1616bcceb"
  },
  {
    "url": "assets/js/87.04bc006a.js",
    "revision": "b322c76fb6a4b3a67f9e2c1947009456"
  },
  {
    "url": "assets/js/88.0e894d5e.js",
    "revision": "7f11bc2ff847e2718ce11b0be7b047fe"
  },
  {
    "url": "assets/js/9.d5f9e8fc.js",
    "revision": "c130458d8aa0632cb9e9e1ebd4f55368"
  },
  {
    "url": "assets/js/app.86dba177.js",
    "revision": "b4f6f62695da6dcf71e43b57f692999f"
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
    "revision": "30ba9f3616c05d83b35c3aadd78e9a90"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "5d4fb16124ac0ad388d101959c16572a"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "07502a27ca4d20d29265802512aea9f9"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "53c3357a6834ebecd291485f2d01bebe"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "64c32c68b794f6c51d999f57413d759e"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "8bb0f48be21ea3b03eb90b82f76aa986"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "4c88087a924210977adc9b3bc0fab17b"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "beebbd9313713cb00756ba53c8b580a4"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "ce2edc45b1fe3a5875ea28fc3e603311"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "33c244d4f1468bc6fb7f03de99319aa0"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "6eb3f00accab0b248733cb1844a1fddf"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "67fc609b719c3d5a6f58e6ba972c6778"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "836736c11015b71d65a67abe3e8dcff2"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "691f8197f1684065f587523c6ad7a769"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "b93748e410b0c8b4f3096142dee3bc71"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "995b39214a3dc9bc4c89da092fce4981"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "03f11fcfdc5b27fedcd41d24d8d05416"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "8d66bbce8b1060685f42761c8ad3f8f1"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "7889c394b1b1d0576b31ea7589a20d7b"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "c1eeaa1958d492f1cb0724d6ff1316cd"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "fe595ce62b5fab0fef883156217ae4e9"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "cd758f2f94f157bdba3cd67280bcf312"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "dcf02a59179fcaef27f9aafe4c2c5c41"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "459f7a0b361f619035f1e0baef0cf3f2"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "9322ea4ab6c80d200fb834f99f5d6e79"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "604f973409f08eb44c497bea34d2bd7c"
  },
  {
    "url": "interview/index.html",
    "revision": "014ada62b8472b46bf12abf4f4a9f0f9"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "938d2872a674e71a741d162f5f50d961"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "528e205af37d3aea35f8c7fa4c2079fa"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "363ba5ba15628621473282788b92f4fc"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "47f7ae9c6f00bd6c6613efe29c75b97f"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "252623591c77f647e1434c53eb9dce4c"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "8aed2e027e252506d73374adc9774512"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "52ebb21e90b9314cdebdc2bf4cf9bdee"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "8b50301c3da4c58e0e16e31487754162"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "bf947323ef71735a5c9e7a492217236d"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "f6c804ba02d49a56ff521abc69d9f70e"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "8c43fffd0ae86ec29364d63b0d15fb8b"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "e5c56d233c3bd6cd233338a902277d91"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "0ff0fd1d4d1c6eba58875022d91ee168"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "29585c88892dfaad7973f68d281ba0a3"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "5b4f79ffdf04f1bbbe3372658e9febea"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "85a80dcbbb0b924581effa09bbe35157"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "e1760b7a70fd314a4ff422bd7ef4ad4d"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "ab984220bd6551d5699ef7d2a010049b"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "83ad60bbb6f88a3c765916eb6b5ff1fc"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "68265e435dede9fa17b1801987cc4c2e"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "3bfdaa4ec3c4e8f1765a557a939c77fe"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "bded1ff3f5d717713614ae811fb6da0b"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "c15c491a99699dea2f20e2f4c50d1b7f"
  },
  {
    "url": "tool/index.html",
    "revision": "2062449c06d8eff33f93afe032daae6f"
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
