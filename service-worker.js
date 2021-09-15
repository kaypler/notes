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
    "revision": "8cf4b14ce9853bd692ecdefde96f770f"
  },
  {
    "url": "algorithm/1-base/01-base-structure.html",
    "revision": "b21926fccd7ecab3c16e44489740af9a"
  },
  {
    "url": "algorithm/1-base/02-bit.html",
    "revision": "a552221eafd46ede35516e96827ad400"
  },
  {
    "url": "algorithm/1-base/03-sort.html",
    "revision": "6ba8642e01fa0d43259950faacae163e"
  },
  {
    "url": "algorithm/1-base/04-search.html",
    "revision": "584590544899636894de94296a6769c1"
  },
  {
    "url": "algorithm/1-base/05-tree.html",
    "revision": "edd00a3c5d1e145141471db41dc71bf2"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "39b7f75f5783701099149cc382b3c156"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "54156098b86ff8b284f53728802834c1"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "ac168c783df4ac682d1a0577bb3e1e3b"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "eb3eab84ee2facf4a0bb3abb42b92d2b"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "d4955506058daf9345df1284e9d005a7"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "d20140396835173f944e5d28ccd23846"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "3174ff0380d9e5d5a741134820bbe4fa"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "932b5efcbb37b456e62553fbb267b97f"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "978c749e489e65e901b925fb934252b8"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "52eef5df9ef738a8ad032bdbf644111a"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "63b260267d38e73a022e8dc15d61cd13"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "bd53b4644552fdacde81d4cf04c4abe0"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "304cd8902b03fa689b4fa4f576dc1ab5"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "96008dcb7df0dd8bf5d51ee7384017da"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "f2215fa25e0aeeb35c6916edf6e5144c"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "e012408ecdca8351d6cf4759cc47e8ba"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "7fe2d1b5d74e2239116d55dbd6e56cdf"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "a87a57dfcebf842036eb14b78fc96202"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "ae536c10fa314f7792fa4eb82c703dcd"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "bf529b3bc80b491b9689ce7b56cc5d88"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "c36e86009800740fb54931c892204035"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bff8afefe6f3ce8b8d0f8c193611585a"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "4ed30df97d4968f70d9be1e22bc4c20a"
  },
  {
    "url": "animation/index.html",
    "revision": "59fbdf67ffeb112c79487d041a88e7aa"
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
    "url": "assets/js/12.acae44d9.js",
    "revision": "a0cf854c00f6c946e034257ff0ae358f"
  },
  {
    "url": "assets/js/13.1f20d2e3.js",
    "revision": "931fc2fdd47da92fe6bc95caa29d0c4a"
  },
  {
    "url": "assets/js/14.e0bf2afd.js",
    "revision": "37ef2d7deb5094632b2a4118db798eb7"
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
    "url": "assets/js/20.28194f0c.js",
    "revision": "856c5a5338a229e60269e11de21f2709"
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
    "url": "assets/js/3.a82bf659.js",
    "revision": "c123cb1c2de186bee771e0a7da88cc12"
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
    "url": "assets/js/33.75206b83.js",
    "revision": "0cfe47172d4deb01dfa198f743c06876"
  },
  {
    "url": "assets/js/34.29acf9bb.js",
    "revision": "aaca553911dc089b7c33671209c7eacd"
  },
  {
    "url": "assets/js/35.ff585c28.js",
    "revision": "6f6a216d1cf0d2d24c7b7ebaed23a6a4"
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
    "url": "assets/js/38.736f2b92.js",
    "revision": "be0849c21e82aeb8201b4be082213686"
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
    "url": "assets/js/46.c428ed81.js",
    "revision": "f51c3f333be32c833160459c765fd14c"
  },
  {
    "url": "assets/js/47.cfd3d5fb.js",
    "revision": "024d6d49c5204a430c35a69809c8daac"
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
    "url": "assets/js/5.c8e4b86c.js",
    "revision": "afd5016c7a0e2b3a3cef051d4dc8dfb6"
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
    "url": "assets/js/57.b28057a2.js",
    "revision": "b7613348d90ee841962c6eadb1899af4"
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
    "url": "assets/js/6.47c9070f.js",
    "revision": "ea25f887fecbdfb15d8a1843074a313b"
  },
  {
    "url": "assets/js/60.5eeb36e1.js",
    "revision": "317bac07fadbc2f115ad83f0c7d3db9b"
  },
  {
    "url": "assets/js/61.a4942201.js",
    "revision": "62bb96d67a93e2d0532b5fc24529b0e2"
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
    "url": "assets/js/7.7204ea41.js",
    "revision": "61e7a4e10697289b51b326bf0f7636f4"
  },
  {
    "url": "assets/js/70.3b5521bc.js",
    "revision": "8817da3f13211f5a5eeec31defd70e49"
  },
  {
    "url": "assets/js/71.3c257f83.js",
    "revision": "07ef5f0dbfdf92018b2c4a8ff73c01aa"
  },
  {
    "url": "assets/js/72.03dcc5c2.js",
    "revision": "cbf90abfe4600975398393ff8cd02dba"
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
    "url": "assets/js/86.9abc7ce3.js",
    "revision": "0aab6885a944cada2b17da4c2ede45f2"
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
    "url": "assets/js/app.4a33b835.js",
    "revision": "9d14a6e9856176c022aee3dcb761537d"
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
    "revision": "c5417acb90b9a4570fbd495ddddc397d"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "ffa6f07df804ec0eacbe4ff4fde07cd9"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "f51c230b7838089611f3352334a3d34c"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "22ab3df3e7f576dea2cc9a8206911850"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "69b8e8fd898cb7a20c4c49de7fe25df4"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "e529a27c8de76187e17d934610be253d"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "63b773797db454f5ccd90bcefe4b9a20"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "493e5f62ac824006401c3a5fd2a0d6c8"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "98768dfd7b0e7127e6b3fb79e18f786e"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "d0435e54ade325fd7dddf89437b0c2c0"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "13774aceac564aaca62c505fced2e61d"
  },
  {
    "url": "interview/experience/v8.html",
    "revision": "2889d5887d597bfe967d3b997ccc9969"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "15d0d40b719f6224eafe69ed240bf4e2"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "6b6d2692fd0571e31e77872dc359256e"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "49c4617af55cb2283e3a03f310ab822b"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "67879f18da1a99e9fca5e1b3c037eb02"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "26440f15ee1cfee20bcb308fdff46483"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "1d7cb493cc936c935082a00fd2e3e2fd"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "9e5c4085f302326a4ddde9b0a2ac19e7"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "5930dd6bbabe78693bfbedf9ec2457ee"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "ef04fe81034b0c027190558e57d8716e"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "1111ec9e6b1e1436d8a1763ec02e9fca"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "1507e9c54e6e57a8566c49c12ce1b8b2"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "fd15243f401c48e480422f69160c7e66"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "50a79f87f522df9dc4fd6c40ba8f7587"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "afa7fedf4303ac9d70b1e673071fcf19"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "f48aab3245d63f6babc656975f0a6ab1"
  },
  {
    "url": "interview/index.html",
    "revision": "40fa65b51a61431127525f677b1c5ff7"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "fe3fab263efdf61824a1e89711afade2"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "d004b28922a6063f8aa2278e23be9bd3"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "fd3b32f96f0a5620f6cdf29c0a7c8c79"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "f75a4ff934ebec355ab0cbd5b1e1045b"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "347c87e94f715be298ee64d61ef2c1f2"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "ef943c64c6feaa8225c9b9c5288e1aa0"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "d0c414719f42d37d196dba327b05555f"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "ae576bdd637db66ab60075743b8b1840"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "07cf20891f6a31acc7114dab90150cf2"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "683d8eac7008ee2f60ecb997f8db7cd5"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "3ad0dff20f662343a2dcf482d6104bbf"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "1576254fde741083cbbb1cbc642b235a"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "cde98f7dacdb1f4f33342f27bbb947c4"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "ebfa99a76773283d470aa1423e6fb764"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "0eaeae89bc621b6210818e1cd721caa4"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "475b1534d0d40f8fb80fbf0ef04d0b3a"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "55a669114fd24af37b0cdb3b1b6ef64f"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "647f75e4ae78c22e2445fc7e3fd10932"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "c8cf24f8a099e27bc47d0933fdabae19"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "0ee47213a75ce92589202412ea59a2c0"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "bac14864fd4132b80fd2c0faac128144"
  },
  {
    "url": "tool/5-other/css-trick.html",
    "revision": "f26262079006f00de289e92960bc4f8e"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "cf9f7f9b770063b1fe394e0c2ac3e74b"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "683f58684d4d3f5c709e4ee0089ce59c"
  },
  {
    "url": "tool/index.html",
    "revision": "50170edff71409c1bfd13c54bed44bc1"
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
