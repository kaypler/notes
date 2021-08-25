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
    "revision": "cd57b900e2bec3849b9858cbddc29add"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "c5c480d0837e119b2df8c263109a6ab1"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "54e152fe92e4789b0fdfa1d0cd648a96"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "b98f3c8447ed4bded8658ffddebd7c2e"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "9820fd63f9c324094b5dd03853ed21ab"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "d2b49a0217bec6fe7439394df2538ff9"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "45e410df05aea3fccc1e7eea4c686864"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "81289bf040acb125ab3c3bf703a8db07"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "1c8cd59a369060172e7e5f16f939a543"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "567e688662d4703045269dffc7a46a9d"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "0004f9df8b05ec826106e20e9048966f"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "a58ae23184ede400eeef972cdc77bc30"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "fe4809d3148cb4f30a9a84f63769ac6c"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "0231ea5bb79ec64562af4e60524202c9"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "38aa9ded22ef51b1f16dc385e05d8edb"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "0de7e33793a14e36483db2d94954471e"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "231c880864b91a248fbd75b190095401"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "4d401310d5e495daf12455a36b3fc3f5"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "9a9efcead19d4a2cef01b5a933151721"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "778485ce31d113918a2ee805364306a3"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "a0fe244dfa7add0a4ea5b990d8fbff1e"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "26f3c6c8cc56c333931ece66d948e7a4"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "31d9b536b8b21cf19feba616973798ce"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "3cd73e58173375336d551d9de4e6b917"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "b976b026eab7b73fef0ac3ac7d4e12e3"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "8ea6b302762ad8d009dbbedb20e369ed"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "7ef904b64ee7fe5d580518f79319c8d6"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "e0f2658d9b27c56bec48d571fa278684"
  },
  {
    "url": "algorithm/index.html",
    "revision": "852208daa3eccc2229bac617c1ed253b"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "830c480dd12e1c7a731e751352865935"
  },
  {
    "url": "animation/index.html",
    "revision": "40e875ba7502b0700aa9f7c9abca3a48"
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
    "url": "assets/js/11.b7367004.js",
    "revision": "0dc09ad0b8d9f8bc8b2e4c0fb9cdc257"
  },
  {
    "url": "assets/js/12.acae44d9.js",
    "revision": "a0cf854c00f6c946e034257ff0ae358f"
  },
  {
    "url": "assets/js/13.91372166.js",
    "revision": "38e03eacfcd1f99b856b357b63c0cc52"
  },
  {
    "url": "assets/js/14.98b80959.js",
    "revision": "3e3a6a2b5e4577c15790e81f725602a3"
  },
  {
    "url": "assets/js/15.1ceb4505.js",
    "revision": "1564bed25ed1b301fe7efcb2d0cddc31"
  },
  {
    "url": "assets/js/16.b1d5d459.js",
    "revision": "0d111b3a8b782fd7117eb56a548116be"
  },
  {
    "url": "assets/js/17.02df8ce1.js",
    "revision": "7be65fffcf1a150c242cc966e7b7b3f6"
  },
  {
    "url": "assets/js/18.96aca52e.js",
    "revision": "b9a847efcc629ca457a26cb4b6963561"
  },
  {
    "url": "assets/js/19.20f60970.js",
    "revision": "f5d66bd8e54b8b44662bab3a40a9c491"
  },
  {
    "url": "assets/js/2.646223b7.js",
    "revision": "ef6f4904f4e0a5a46fa5f6ab42106822"
  },
  {
    "url": "assets/js/20.baf60149.js",
    "revision": "eaaedfb8777fa0e90a695fb08e1a6c48"
  },
  {
    "url": "assets/js/21.ae78cbd5.js",
    "revision": "205de3a4b316be2b490245ec6f7c9b77"
  },
  {
    "url": "assets/js/22.a894dd71.js",
    "revision": "3bef7551573923f3891f0f383f809a9a"
  },
  {
    "url": "assets/js/23.06838280.js",
    "revision": "fd2584f2da66356e407de8204900bf85"
  },
  {
    "url": "assets/js/24.addfa627.js",
    "revision": "a07f8cd5bc99c271f7f9c1302f1a97b1"
  },
  {
    "url": "assets/js/25.e898fa98.js",
    "revision": "0f36a487815233c6fa334324793bb0ba"
  },
  {
    "url": "assets/js/26.5e7143e5.js",
    "revision": "e4c24109ae55c9e89af551751e55a4cd"
  },
  {
    "url": "assets/js/27.0ddb0e9d.js",
    "revision": "5470d3edc55470debcf32a2fa9911f15"
  },
  {
    "url": "assets/js/28.3fa8851d.js",
    "revision": "987eec9b4d4a2d05309ffbf656e23e09"
  },
  {
    "url": "assets/js/29.57981551.js",
    "revision": "3849fdd7fcc2ad28ac8c81ee8072999b"
  },
  {
    "url": "assets/js/3.c67ddac3.js",
    "revision": "f11c2a86c22af194c1c5048a449dcbc8"
  },
  {
    "url": "assets/js/30.b163b39a.js",
    "revision": "b48494b2c4b4a71984c994acb7ff0516"
  },
  {
    "url": "assets/js/31.1bf51c8c.js",
    "revision": "a774845d862be9a666767c7d6db192ae"
  },
  {
    "url": "assets/js/32.27d5724b.js",
    "revision": "c861507cd6bbc235deda0c4da0a6e6f8"
  },
  {
    "url": "assets/js/33.ee797b9d.js",
    "revision": "af23049f34f11c9f516e0e728dec9dd6"
  },
  {
    "url": "assets/js/34.ba7db30d.js",
    "revision": "e4cdb2572df24590b48b00244fd9c925"
  },
  {
    "url": "assets/js/35.1ac68442.js",
    "revision": "406d6614c753928f1eea34b656b54ce0"
  },
  {
    "url": "assets/js/36.dad1e22e.js",
    "revision": "7b282a83892314e949972b96477a0144"
  },
  {
    "url": "assets/js/37.0779b856.js",
    "revision": "92e29c3c97bc95cb9cf8cdac6108d24d"
  },
  {
    "url": "assets/js/38.5881bebf.js",
    "revision": "ac8a5013925c4502147f129d0fbaa0be"
  },
  {
    "url": "assets/js/39.5001b663.js",
    "revision": "f9e84b9774e36e7fdde2046ea4863746"
  },
  {
    "url": "assets/js/4.46cc96f1.js",
    "revision": "bd94c2cc1f90e911189f0d4b7b3e94bc"
  },
  {
    "url": "assets/js/40.4656e930.js",
    "revision": "cfb489749659cb558f4cd47d96d2e16d"
  },
  {
    "url": "assets/js/41.1d14605f.js",
    "revision": "db2be15a08a930ec7b6c4589f27708f5"
  },
  {
    "url": "assets/js/42.6dcaf9f8.js",
    "revision": "ec561012b3f1d689e3c006d2fb429887"
  },
  {
    "url": "assets/js/43.4e9fdb04.js",
    "revision": "ee07b35515f5d1e530f7f6423cfae921"
  },
  {
    "url": "assets/js/44.1fb6bfd2.js",
    "revision": "81a9781cbe0219dd9c64bd43b71daf7c"
  },
  {
    "url": "assets/js/45.cea8d3c1.js",
    "revision": "c92b642db18718c888fb2b3f662aba79"
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
    "url": "assets/js/48.ee122f69.js",
    "revision": "15219d9f377f46f2f62b6de3b29d8454"
  },
  {
    "url": "assets/js/49.f4b2b77e.js",
    "revision": "e0a154853d4fa59e3dc9bead32f5b9fc"
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
    "url": "assets/js/56.b00dba37.js",
    "revision": "ba393dd2b9dfb524aa4820a5900cc176"
  },
  {
    "url": "assets/js/57.197c8343.js",
    "revision": "7e42bc22557bbe9f677b3e2c26438d47"
  },
  {
    "url": "assets/js/58.b4039a10.js",
    "revision": "1f9a34ad5fb16fe2631a4498d06d5dff"
  },
  {
    "url": "assets/js/59.36632e5d.js",
    "revision": "1764128102d2cded29b80589f8791465"
  },
  {
    "url": "assets/js/6.e6638581.js",
    "revision": "71df35ac1bfcb6c10bd77dc3379eb10b"
  },
  {
    "url": "assets/js/60.c12bd431.js",
    "revision": "e3122f2e0b99cb5e61cfd5ec3ab9e375"
  },
  {
    "url": "assets/js/61.2631684a.js",
    "revision": "fd40d06786f4defb08e7854a1c247e87"
  },
  {
    "url": "assets/js/62.905b54fa.js",
    "revision": "c5947281cec22e7b97d76d03cfa58851"
  },
  {
    "url": "assets/js/63.38362558.js",
    "revision": "b3a4d0b7f8aa1da8cf1e1e2de4697450"
  },
  {
    "url": "assets/js/64.96d6a088.js",
    "revision": "a7826f5ecfb61fcdc3addf9de495ea89"
  },
  {
    "url": "assets/js/65.343efdd9.js",
    "revision": "c39357b46040be25b1ec4f6605120206"
  },
  {
    "url": "assets/js/66.fb0370d3.js",
    "revision": "aa7707d8326eb1500274bc0c7f04bbec"
  },
  {
    "url": "assets/js/67.a977a8e3.js",
    "revision": "17ff568ee44567ab1ba065c2ce2d37b5"
  },
  {
    "url": "assets/js/68.b0b7344b.js",
    "revision": "f4dcf0ccd341e9de7dc495e45e8274bf"
  },
  {
    "url": "assets/js/69.565f2022.js",
    "revision": "b47b14fabfa7cb6c882b25923afd174d"
  },
  {
    "url": "assets/js/7.4ef2488a.js",
    "revision": "d37220eadf74f1d80d9cdeb676245d18"
  },
  {
    "url": "assets/js/70.f956520f.js",
    "revision": "7306f260e3b443e0f4dc5cb014e7297a"
  },
  {
    "url": "assets/js/71.d7e9ea81.js",
    "revision": "5d5dd7dba264d5094bd5cdc4dabc5816"
  },
  {
    "url": "assets/js/72.63c04db8.js",
    "revision": "dc5734c54db6ebba15d8646e9c8eaf9d"
  },
  {
    "url": "assets/js/73.54e3a15a.js",
    "revision": "4b951da8d1e19ee17a7705b60412d493"
  },
  {
    "url": "assets/js/74.25f76595.js",
    "revision": "1077fe8c2d0072cb76d5c681c5c64886"
  },
  {
    "url": "assets/js/75.725ef0d0.js",
    "revision": "7e4017feeb8e0ba7285b2289b1f11fcf"
  },
  {
    "url": "assets/js/76.855a4ff3.js",
    "revision": "6bb2d9e1833f48ba0d3c788b9b4f88c2"
  },
  {
    "url": "assets/js/77.13c9e1dd.js",
    "revision": "35aac0ee7f63bb6a07676fcc53ac7845"
  },
  {
    "url": "assets/js/78.af2d2e83.js",
    "revision": "a7e3b8f9c38c8e814c808483d45b9142"
  },
  {
    "url": "assets/js/79.07af8223.js",
    "revision": "ad50569856b3cf8db3d93df1a29169f4"
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
    "url": "assets/js/81.f978d7e7.js",
    "revision": "ad14a9446c21e37c4cd78c77faaf078a"
  },
  {
    "url": "assets/js/82.b745a8ac.js",
    "revision": "9975be5f3b3f3f1f9859a64c3de31a9a"
  },
  {
    "url": "assets/js/83.a160d484.js",
    "revision": "97e48a5f32906a89ab809b58d5a634f4"
  },
  {
    "url": "assets/js/84.8f29ca24.js",
    "revision": "5468ce243f2456a75ace3136ac92adc8"
  },
  {
    "url": "assets/js/85.c07d0794.js",
    "revision": "b044d1f9e5528fd831fbba8f4aa31ed1"
  },
  {
    "url": "assets/js/86.135874ee.js",
    "revision": "56f2b945c769bd8fa6728fe202408bf4"
  },
  {
    "url": "assets/js/87.7564bfad.js",
    "revision": "727492691e961be1b9b5a3ad6d0ab981"
  },
  {
    "url": "assets/js/88.d70c0ab6.js",
    "revision": "ccc89bff6efc1f06608b88ba3190a9ad"
  },
  {
    "url": "assets/js/89.553d4687.js",
    "revision": "aa3a82a4ed04553030ed841d20ff10b0"
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
    "url": "assets/js/app.6f5d8aa0.js",
    "revision": "afd8384f722af75bae4ecfdfde4cd6cd"
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
    "revision": "99548ca89eac0ba04a189c821cf583f6"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "763e3bd51afbfda551063d0ab5e7dccf"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "d7a449041bf1aebcf0e3d10de857d663"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "eaf9e4a743d8292bfe56d37dbe317143"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "1b2eee89218d054bcabdf2a12142a0e7"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "291054d12b27f4184f78f0db7d935f09"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "13b2dadb30f4d0bc3ef54679b5ca2870"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "a9c04e112ebdc1c10a8b3815d255c049"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "c76b1bd6770ebbb007c0ad4ca0590cce"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "c9fe991ec9a8d5df82df1f13134468aa"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "7acd7b2c91e353fec28fe4cea44a5063"
  },
  {
    "url": "interview/experience/v8.html",
    "revision": "e05dfc083facac5fc3b5025c994a1721"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "9dec51fa991607b221d8e8c1deeb1011"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "0b34e629d44236cc00c7ad06df707c4c"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "fe6ba855e04940e581f89b9ec82a8502"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "b3ba09a21f92d01f6a97f4500f222b37"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "2f38c35a52c11b346eed6bc70365c551"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "aba262d445837f37c1b9900ca54f334f"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "0cadc8722685eee6646f24e9ae301ec2"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "2eda88fbe7ef344016a27783b717e679"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "e35f6e6c22e5f72aa23b3e4bfe167694"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "f8deb100ed920fe257a9a3f9ec945185"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "4b2b69166ba2bf828e7536e7ef22b3e5"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "8731600477ea0b2dae5e2f8f20c11f96"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "5b15f82a7520dc71b370fdf4ec5f7e06"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "e1e9d4483018cf187a8eb9aee254b7e0"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "fc6ac83cd856c7e9552f4e965abefcaf"
  },
  {
    "url": "interview/index.html",
    "revision": "a205da9558223844290514aa6e8c5f38"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "e3e315a4e8597252280801090646526b"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "a23aec1d07217f2cf5ff0a1d05b70c82"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "6836f80609e8866bdfb9533184a57195"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "5d76dd1be2f95a8737d8253c875feac2"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "f54055ce8a13a1825cebcffb7788d0c8"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "59cd9f03d9c43632059a2ceef46111aa"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "6e663fd7eba18432ad4c1195fcbaf9b6"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "b7e7d158486514137fcbf785608e919e"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "d50bfdad6d92d75ff2515f648194ff44"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "1e35218c9d264ecc21089a20288c67af"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "4270d604c13386c34f9432d809bca9b2"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "c1ac9d60a52cd02d23c561e06e5a574d"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "abb180dc7267bbcf7c326ddfc60a7387"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "b1a326e7d9f5bbcdf4a7970df0d64331"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "2d1e331b23ec14ffbc1fe95161f067c1"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "e0ff04a92bce3b8cb440ae527e5a8044"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "0580f0e40e36df4a23e3b247f9cb82cb"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "6fe2cde7a68742f4e75fe59cad17d4bb"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "b6b840f5224c7431f504dc78bf181a2a"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "c5e84e4787341dcfd0b190988c2b0681"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "3221c98d2d4a1f6776e1f62e149309b9"
  },
  {
    "url": "tool/5-other/css-trick.html",
    "revision": "1f9a7444e2b7d24bf230422507b07425"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "e55c39c1e7130a02c06d90a62698792b"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "b7b65453aafe551d7e4cf925bf5c930f"
  },
  {
    "url": "tool/index.html",
    "revision": "313a7e5613e8c1da5b09d6fce0a8b781"
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
