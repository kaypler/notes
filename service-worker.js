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
    "revision": "5efc196123ae1d8d5343e35e1b821945"
  },
  {
    "url": "algorithm/1-base/01-base-structure.html",
    "revision": "da572ee974e1513397dd6637ef56e013"
  },
  {
    "url": "algorithm/1-base/02-bit.html",
    "revision": "89e4d0991cb613b2445837db591a6a48"
  },
  {
    "url": "algorithm/1-base/03-sort.html",
    "revision": "f5296b7b9cd3c6face9a243651adbd04"
  },
  {
    "url": "algorithm/1-base/04-search.html",
    "revision": "442cc414c01f41bfc17fdfedcc70aead"
  },
  {
    "url": "algorithm/1-base/05-tree.html",
    "revision": "4167ccac355e18966361617a0cbb7a5c"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "a2150ec4ea41f51c3aa05575f338033f"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "69ba56ba6a7da43f2356a83068c12480"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "37c933f5d852057e41e63ae7cc7a526c"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "febb167eefa1ad7b8861fd3ef28dd42b"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "6525b0b9b7ef5178ea621b0d69c7b773"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "31d3f0e29227c993f476ad516ae59b59"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "8b909521d7bca1094d505fcd10687a82"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "36289972b5092398a38ba4fe09d0b9f5"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "965c00634d09c94505112afbc269c2ec"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "364ac8ad388783b0ecf1d3a9bd30b38f"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "d0de3fb5820d772e5f0c9b143a862811"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "e5f4f659938dab3040512bde5d311d84"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "462b0bd8c644ee810f9e2552d1ebe3d2"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "863965092c6b63ecee6f1a58dfdc87c3"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "5f1d412db2b4b514ede846aedc82b2fc"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "7ec37ca1dd49da9f3dfc3bed5f3a891d"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "4e5f7ae0323a37397cd317bddf84eb45"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "ed6970983c1446f831cf445e0709ac10"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "84380928030c858de6a4f7f5b06e9f43"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "f079b08cc9ace278beafd2e8dd70de71"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "f04c6a3d2983db55da0fe710c1453bef"
  },
  {
    "url": "algorithm/index.html",
    "revision": "924f61ac9f8be1037b07857f576f9536"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "536dd4a37f58c7bc77b3ec752a850928"
  },
  {
    "url": "animation/index.html",
    "revision": "dd6a8eef52888fc72ecfd878391db1fb"
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
    "url": "assets/js/10.17c5d238.js",
    "revision": "0bf57caa753a57ea63e72265dcb367ae"
  },
  {
    "url": "assets/js/11.4cfafd53.js",
    "revision": "4cf0eaa50a99a2061ef3ffe48485eb09"
  },
  {
    "url": "assets/js/12.7c254fb8.js",
    "revision": "a21ea859fff67258728ae09ad80a528c"
  },
  {
    "url": "assets/js/13.45e70c67.js",
    "revision": "045223d328e5041e2a63cb9b09527676"
  },
  {
    "url": "assets/js/14.b15765c5.js",
    "revision": "95c777fbf0475cb809b0da4fc91231b7"
  },
  {
    "url": "assets/js/15.19d01e38.js",
    "revision": "c15b3638518d8ea8c91ea04e3a33f783"
  },
  {
    "url": "assets/js/16.f477abb5.js",
    "revision": "01e448bc1eeb9cd2a2aa0a7654e143fa"
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
    "url": "assets/js/19.3b080531.js",
    "revision": "f5d66bd8e54b8b44662bab3a40a9c491"
  },
  {
    "url": "assets/js/2.646223b7.js",
    "revision": "ef6f4904f4e0a5a46fa5f6ab42106822"
  },
  {
    "url": "assets/js/20.8adbb404.js",
    "revision": "eaaedfb8777fa0e90a695fb08e1a6c48"
  },
  {
    "url": "assets/js/21.ecc04d84.js",
    "revision": "97262d01878be55c1eee056c184e2d3f"
  },
  {
    "url": "assets/js/22.28e7a0c4.js",
    "revision": "3bef7551573923f3891f0f383f809a9a"
  },
  {
    "url": "assets/js/23.566722c4.js",
    "revision": "649a1f3fa8aaebf2a12571f3303139a6"
  },
  {
    "url": "assets/js/24.f8205a98.js",
    "revision": "84f86baa7aec583a5f106373c4b4cd8f"
  },
  {
    "url": "assets/js/25.a5d678e9.js",
    "revision": "cc036f97d3cc2e6a0de9fd696e9d5419"
  },
  {
    "url": "assets/js/26.7a41a7ea.js",
    "revision": "6ad0f0dd8252d69b8e243dfaffe30eb7"
  },
  {
    "url": "assets/js/27.09f93cd4.js",
    "revision": "7882bba977e519267b975b3493b5541c"
  },
  {
    "url": "assets/js/28.0d3be3e5.js",
    "revision": "c5413c5a742c76c5cc7dbdf64aa59b94"
  },
  {
    "url": "assets/js/29.a479f946.js",
    "revision": "0048f45daab3740ef45c2fd1d9e24974"
  },
  {
    "url": "assets/js/3.0860fcd4.js",
    "revision": "9f352bc3200dba384a9285ff6292c3e5"
  },
  {
    "url": "assets/js/30.d01c420c.js",
    "revision": "19621c6e3d2c1a8d1a7ab72bdd4ab158"
  },
  {
    "url": "assets/js/31.88b28aed.js",
    "revision": "6911c09e46b8d785cad509b211fa6ddf"
  },
  {
    "url": "assets/js/32.972762ba.js",
    "revision": "d48e913326bc015193ac4ab77158319e"
  },
  {
    "url": "assets/js/33.f4cb553b.js",
    "revision": "fbb6688ccda8d8c22ff01a1c251e6428"
  },
  {
    "url": "assets/js/34.a41b90b0.js",
    "revision": "77162c225ffd09e454fe2a3748705480"
  },
  {
    "url": "assets/js/35.892f199b.js",
    "revision": "2052ba460ac1d43974fe74d0b4bfa7ab"
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
    "url": "assets/js/4.c3522ec0.js",
    "revision": "05703c6e565efd094be9b788ad068861"
  },
  {
    "url": "assets/js/40.506c9ef2.js",
    "revision": "20d3ae1eebe9e4a5cfc7371eec1b1927"
  },
  {
    "url": "assets/js/41.05018001.js",
    "revision": "4da1d3b0de8bfcabb825faf1419254ad"
  },
  {
    "url": "assets/js/42.eba50816.js",
    "revision": "8ffcf992fcc9eb3bfcbfbeb0f6319b9a"
  },
  {
    "url": "assets/js/43.f7a3ce0d.js",
    "revision": "1e427c11f99de7a8d9badd009e8b2e47"
  },
  {
    "url": "assets/js/44.5b1e0ac2.js",
    "revision": "2b6f0f1dcc819e94743aec28ae016e2f"
  },
  {
    "url": "assets/js/45.b70f704a.js",
    "revision": "59cdf86bde6fa070a398d2673bd6231d"
  },
  {
    "url": "assets/js/46.df31061b.js",
    "revision": "375ec5d402f4569d136bb14295ca27e4"
  },
  {
    "url": "assets/js/47.63e61fae.js",
    "revision": "c7493c80674fc2b63cc63999b8456197"
  },
  {
    "url": "assets/js/48.a0c0291b.js",
    "revision": "74fd3301e63e5b080eca56fc7738e96f"
  },
  {
    "url": "assets/js/49.6c21a3e3.js",
    "revision": "6088ec74a63a8b0fd4a64d8d17eee88a"
  },
  {
    "url": "assets/js/5.bd7a9d46.js",
    "revision": "d2284b95a180de07f6cf50e5e1a17a6b"
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
    "url": "assets/js/55.19255e2b.js",
    "revision": "c87e4db4e6c3fba9229488da8efc9339"
  },
  {
    "url": "assets/js/56.a500a02a.js",
    "revision": "cd4b4625f5ac95b6bb01a7d8719ebb5b"
  },
  {
    "url": "assets/js/57.da3d0c46.js",
    "revision": "33d4ae9cc2e227a16ea4d892ca88a881"
  },
  {
    "url": "assets/js/58.d8da66ec.js",
    "revision": "d1395bb4e853a989124f8bc032244e01"
  },
  {
    "url": "assets/js/59.a275ff13.js",
    "revision": "0067f046b61947e282c02b10f889865a"
  },
  {
    "url": "assets/js/6.3671f41d.js",
    "revision": "116cd01d71cfe518de8b85e40917f00d"
  },
  {
    "url": "assets/js/60.a2c0f910.js",
    "revision": "1518b005d7aeaee46b6e76572759c95c"
  },
  {
    "url": "assets/js/61.2d48fd82.js",
    "revision": "34043274d2044dd05258e167e6f7f035"
  },
  {
    "url": "assets/js/62.d812fba3.js",
    "revision": "9eb10a164bda85b674a37a2e3cda4f12"
  },
  {
    "url": "assets/js/63.cc2f7993.js",
    "revision": "233f98e2a103a678697e66c71793d7ef"
  },
  {
    "url": "assets/js/64.a4cbc9c7.js",
    "revision": "42ee1e7395893c8e691fae225516e58e"
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
    "url": "assets/js/7.7204ea41.js",
    "revision": "61e7a4e10697289b51b326bf0f7636f4"
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
    "url": "assets/js/73.a55fa33a.js",
    "revision": "c8ea5fb8b8ef80ad97770b706efdf0a9"
  },
  {
    "url": "assets/js/74.fd8ea0e8.js",
    "revision": "c45630789347393338bb01744c00e58d"
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
    "url": "assets/js/85.44ca60d2.js",
    "revision": "c79e98fa98f11b17a6832e762d8e0dc9"
  },
  {
    "url": "assets/js/86.ad309f67.js",
    "revision": "4d056a0a5613776c100e2b0a11689c29"
  },
  {
    "url": "assets/js/87.2a96c2bf.js",
    "revision": "607fde547eca6d9f06819e199f121426"
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
    "url": "assets/js/app.af1aa1c1.js",
    "revision": "74c069dace9e47052a5cac20c3f9624e"
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
    "revision": "67c2dde00c15c1fcb0121a0dc7f985d1"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "4220fa8571fc655633a05ca4ecaa2583"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "f4ca3cd34bde929321ef675d91a00444"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "c695a1bd9c72b70c225439281d790853"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "badd5d9e1aadb085a3c394b8b584569d"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "3cb4aa0d540a2c83453ff9ebaa2c5200"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "1b18e0966001ac3f91ebc95c44b83a08"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "d01737c55bdff975064072250b2682ad"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "08b9323212f963253f11b5beb0fad84a"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "949f9a4b963569e3e78c204f3821f9a3"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "ac96aa2c59fe6929d7251b8cc8474348"
  },
  {
    "url": "interview/experience/v8.html",
    "revision": "d4db41ff6c4d9ec1cb13ecd8f0acf5e2"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "6231e6f04b22adb433c3efbb1f5323c7"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "069edee91f48ec73667be5c99eab021e"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "c84be75e7a1aafefbb845925cfa6841b"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "fc0631dce2e996163a0332de8fffa196"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "e556ba7ff6ed4872591794f000e73e02"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "80ac6b98f5bee66395de6001a5fab679"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "4f859ee11d59d70ad4cad78c983bcd5f"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "6a4ef84aec51ee50591c19afd7156bfc"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "baf6a01c120b4d62dfde060348e7370d"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "e43ee4c2f55590132e451f37f529a783"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "87df2b853882528431e826bd24f83f4e"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "dc3dd1ebf43807713f43820318c6a440"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "3f7bedcb4c4822edfc591a4bcdf2044c"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "9ef8ccdcba9a3bf60bb4202ddfc9997a"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "297a652297ce5b97cef2f2415511a5ac"
  },
  {
    "url": "interview/index.html",
    "revision": "76883ac2b72a0d5dd81cb28b65718ac6"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "3a0d1e1f69b2e5ba2b1df623c9d10e60"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "4b592886641403489db6ed0c2e2c50c7"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "175e89b8dae75a7580b66c43caa74ea0"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "ba4ff0c509364757743deafd1803d36b"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "5998d2f8aa66bb0ef8a00155a93343f9"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "dd9a2b54c273bf65e79f10e3c751dc14"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "4281b4937cf417c13f6395e6da035dce"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "f265294347852942235d2bcfdbdfd244"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "497a7440dce3de74c366d6d0ef7af3f8"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "ed09fca8526201bca56bfa03aa09a882"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "698c136d428963f167ea1f2971626959"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "a9d61e715662bf0405012524bd7eede0"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "adc0f54160d21b0ad40e96aece7b3f9f"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "00ba82a60826b27a3a0c8965c11dabc6"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "66b5b8e81b8ca531181e5aea72322c8a"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "96d8e2933d2f6127089157a75f6a62d8"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "1b6bf1d5692c9f9c2dc392aaa16e020c"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "8560c1b9dfe149848664661762bc5b13"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "707f19fa25fdd8f4dc6bf076dbb97bb0"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "84677ebfd018685151b965ecf1cbc8b5"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "d3a433d02ef264657ab53fa3b27760f9"
  },
  {
    "url": "tool/5-other/css-trick.html",
    "revision": "47c21f26c275f014cb8002fbc6aa80e7"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "571aa547704b147542e97a731f9902e9"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "8308282c594fc2c9fc8cafe1c693b6f6"
  },
  {
    "url": "tool/index.html",
    "revision": "394efaa9d9d1f1d78620174396e1c1f9"
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
