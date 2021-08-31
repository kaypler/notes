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
    "revision": "443386ac8aa2c96e8d4fc1d2dd413812"
  },
  {
    "url": "algorithm/1-base/01-base-structure.html",
    "revision": "bd904544f6cf5bb818681015c2af7949"
  },
  {
    "url": "algorithm/1-base/02-bit.html",
    "revision": "c66cabb5c6ad1210b0ef93b041f0b422"
  },
  {
    "url": "algorithm/1-base/03-sort.html",
    "revision": "cfe889fd928f126b4be31daff40ff7ab"
  },
  {
    "url": "algorithm/1-base/04-search.html",
    "revision": "4647272234d2aa439dc80f099064a06e"
  },
  {
    "url": "algorithm/1-base/05-tree.html",
    "revision": "b892479e37cb9e0a297261b572fd7d49"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "7d50d714ab8136467dbc6feb7610a12d"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "380dab84bbd513022ed9d8559ff529d2"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "78612a70d61d6f8288071e2d15dd4aab"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "426590542064604b93fa0584aa6ff9d7"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "452f726bce1bf4632c23de4adad34a16"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "388ce7d5a98da0fc0b899cf060f3d66c"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "9cbab5e9389718432a9c8d999b4ffee4"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "fdd3198e719c4a32fb52abbe317d489d"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "c81a1823909a93bd240296ac66736f2a"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "6eb1689cd632ed0999f4acd24725a7de"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "0061f3dd6093ccfd0955a4055e6befb5"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "237a15af3f59efb0da321a83f3fb2237"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "f6d0f1e2f0d77062e46ce50f2e05663d"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "fc07614f0ae8f968bb55a2cf1b8bea30"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "119c123a888c042074241bb6cbe4ed64"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "49b6cc1a30a43c7c7aba2c4dcb4603ee"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "774a3d6d027b308213e472e45dbc5e96"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "c9b7f92246a0901a54aef5a645b2a502"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "3dd61acdf2556ec85aafb7bb0ab6f698"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "4c846f7629b7345803e068ce51cd783d"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "bcd40b1f82825924d59a084584a07db2"
  },
  {
    "url": "algorithm/index.html",
    "revision": "940b9a71dc6358b867abe889a407909d"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "2e810e4430204d4e2a95717c783da21d"
  },
  {
    "url": "animation/index.html",
    "revision": "6050a0e3f6da40116f57ef7c92b5224f"
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
    "url": "assets/js/13.45e70c67.js",
    "revision": "045223d328e5041e2a63cb9b09527676"
  },
  {
    "url": "assets/js/14.f5a2c8f1.js",
    "revision": "8ad5a442d776a6fdf6e3109753570d6b"
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
    "url": "assets/js/18.d82dd5f6.js",
    "revision": "50c90b7d03929c6d136b946486de5335"
  },
  {
    "url": "assets/js/19.cca1af56.js",
    "revision": "2128e9ee99c03e09d6c4a02c653bcb6e"
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
    "url": "assets/js/21.e824a697.js",
    "revision": "9677b348babd63f6f5ef6ec7b887f475"
  },
  {
    "url": "assets/js/22.eac2481a.js",
    "revision": "ddf0ee9d321bf4021a141058d7a749e9"
  },
  {
    "url": "assets/js/23.54e7bd82.js",
    "revision": "79f634d678f7ea74a999dda2ba0319c4"
  },
  {
    "url": "assets/js/24.e932a665.js",
    "revision": "19bb5285519a89c67dc3938d114a06d0"
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
    "url": "assets/js/28.ea008945.js",
    "revision": "445c873e0d39ee2c476feb7b31e00b82"
  },
  {
    "url": "assets/js/29.5c317aa6.js",
    "revision": "9df87fc3765f7fcdbded41ceadb7586e"
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
    "url": "assets/js/46.df31061b.js",
    "revision": "375ec5d402f4569d136bb14295ca27e4"
  },
  {
    "url": "assets/js/47.63e61fae.js",
    "revision": "c7493c80674fc2b63cc63999b8456197"
  },
  {
    "url": "assets/js/48.99f2a6ee.js",
    "revision": "bf8d2ca7c91999f269fb376e1a05c15f"
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
    "url": "assets/js/55.0db15969.js",
    "revision": "c9282eec1d68574f0dbf76ff5bc396bb"
  },
  {
    "url": "assets/js/56.f4266640.js",
    "revision": "35532e83f028d7d3ea489279b6d31547"
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
    "url": "assets/js/79.8136eae8.js",
    "revision": "74fdebc4c418fecf14c19423e15e7130"
  },
  {
    "url": "assets/js/8.f1a1380e.js",
    "revision": "62e369a5ea8c24f4fd7838acfd1340ad"
  },
  {
    "url": "assets/js/80.7d394e3e.js",
    "revision": "7786ecbced77e55f9e11684dfd1aa2b7"
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
    "url": "assets/js/app.898774f3.js",
    "revision": "987dd6a8ac00908e37bb8795a367d0b5"
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
    "revision": "4892f3556078406241ec3d19ada04c60"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "0c3477568b9871de8a0348583db5bfab"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "463b3e69e287fa8528c5d2e356c0f67f"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "c9d7d9ffcc936104bf92b424f0a6c4ae"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "fc7b06a624f08ddd63449d9aaf96194b"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "b4ebe579e8426e73371215aaad8fc5db"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "1787cc757ca3db81ea8420d29d3cf6e3"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "459f03da2c8b595c125eb6bcd9a6a90a"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "83a59bd395956600bbef91eab29ddd9d"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "4aa08396dfb0b885fac0de03a2b961b0"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "2ac916c1be497108530250a61a2eca0e"
  },
  {
    "url": "interview/experience/v8.html",
    "revision": "fe6b284d99e5bd6588aeb576d91d7bc2"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "6d9a9558f6b49e5ba262c5a052574d97"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "d4b8505f6123ae067312682cd4a95d56"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "b68f7882787a2de47fa4556d87c60c47"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "bd6c66c414046f08f837e2c3454c4c86"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "fcdd5e83565b48b8fa3370393d0d7afd"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "6acef27713debefecd56ba0d89c328db"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "aa13522888c570cd5ac3e8a704e37378"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "442f55bfe72f84f1489f2762e810c7c5"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "584cfaba82ba32b9ae7f81764b3982ac"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "87c6ce49af35769996f6b171cbbd5521"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "b41e882e107aeb63de8dfac2aec0b6c2"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "030945df78e74f496866fb1e17e51fbf"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "8a53881035871972ce002d2535ac6cab"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "7b2a17ceb0e7ba26be1f643bd3848bde"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "bf3c8a4a2c37da1872e7d92ffc163924"
  },
  {
    "url": "interview/index.html",
    "revision": "f02fe69e9193158f946da9557c9c0d93"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "3a3a0566b87dc7e9db94c4519ad3e921"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "940d9ce275dafd4a0ca2b739bfb5a0f4"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "1d12c0194e6c66bdc0adba85073aa658"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "f8a61c2e84fea8e6472481a80446db3a"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "2c6886b8f4c38acccc72dba6da50757d"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "3306941b4a9877fa256c966ace0093a9"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "ef9e96732b872fe3e9a577b6e42423f0"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "2f33b0b9d7bc6cc0764f2af593271f88"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "e8fa13cf06d3b4eea6bf241e3ba8e3b3"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "c7d2136bbf495c985985fb8b5eb727e2"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "c5c3df04bc61cb3b151779fddf854769"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "6d4d21bf04df5e2318ea61e6a0e6d1b5"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "6b82d91e22bb5adc7c6b1abd3f271ad2"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "65f86fd2b80be85cdf830083781259c1"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "ba6178b53066c72c83fd1f769398e588"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "61119d754a6434fb2a90ee74f5ed25fe"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "527a27a7f25ddafb53720edf7715e32d"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "7bbe34d3e9ef92db7184164ef44eaad4"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "0a137cc5b167337542e01b930770c0fb"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "1e1927f72fc1f7f50819f076905e330e"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "13b2550779a508227a5fea036cfd83fb"
  },
  {
    "url": "tool/5-other/css-trick.html",
    "revision": "63d8ce10cd3f7818f89097815a82ef57"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "441a9efb6e549262bb516edf240b6e4f"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "b65a731bed291d8e150d9a7e253a7caa"
  },
  {
    "url": "tool/index.html",
    "revision": "5ab73d184603bcdd0417e73db0c08860"
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
