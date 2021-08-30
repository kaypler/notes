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
    "revision": "151765162534154fdc9f91e020664593"
  },
  {
    "url": "algorithm/1-base/01-base-structure.html",
    "revision": "c7362d961fef50499d253ee1e2951c7b"
  },
  {
    "url": "algorithm/1-base/02-bit.html",
    "revision": "7131c3420c430e4a68ae5565b27e3974"
  },
  {
    "url": "algorithm/1-base/03-sort.html",
    "revision": "39419c4890351ed965af4f674a803515"
  },
  {
    "url": "algorithm/1-base/04-search.html",
    "revision": "896397c1584dc45ec5bf4f6a36eb42d1"
  },
  {
    "url": "algorithm/1-base/05-tree.html",
    "revision": "fab185298cb693223a4f3344c5c43893"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "1de279117660cd6e54efd917106fc0a3"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "f2313108abb97506d8e6312c86b3729e"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "8734b515adc47f1a8216e39addcfe7ab"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "570815ce9ef13e1d4089efee77483de6"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "629fe34a6b7e46fce69abc7fdcf5564f"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "90ca22846fa722b1e9f6822039ab4a87"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "6bf7e70be16db3efb5c21dae01f935b7"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "bd8e303a3b03942224572b2f792e9c61"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "3a29a24746a4a71fe5916f93bff25986"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "a31d6aaf3268f502048af1eb2f22475e"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "8fe35e59cf1fed4ff33356100fb093ad"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "0a23fc42f6e12bbdc8a9cafa644e15a4"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "e17485e622176490fb457ecd688d70e7"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "a7ae49875d4cd2a2a69fb326d54fc65b"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "7d929e8c449d614c048b539bba23dee9"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "db8b88773a2d8baebac559730dbb60ce"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "6521bc334792f3634815428b56943d98"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "b0aba2adfc35fb431ba8dc79d734645f"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "e228aa5c214f07afe82340adf5409fe8"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "f1d9b5f5638f0310365945728e1de9c5"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "7e6c3b74a7079846cd3d8b78e8749817"
  },
  {
    "url": "algorithm/index.html",
    "revision": "32d7d8dfe3ac85109b7ece4cb28c4520"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "3d2ff602d27338b6c7ef56172c92fb46"
  },
  {
    "url": "animation/index.html",
    "revision": "cdde3d6ae6520f51b6c609a6a50fe145"
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
    "url": "assets/js/28.5c217da0.js",
    "revision": "b74a6cb7a4d06171c1e5f4ad40331628"
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
    "url": "assets/js/57.2c868e5c.js",
    "revision": "53abae7d38853e532a0aa565bacab206"
  },
  {
    "url": "assets/js/58.237705f8.js",
    "revision": "5d8f359f46f963705e4d4779c6cb266f"
  },
  {
    "url": "assets/js/59.5d02bc57.js",
    "revision": "69c95eda776b7885c3d58e72bf1fc3ef"
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
    "url": "assets/js/61.33f1e1f3.js",
    "revision": "f16da1e029026244d1e51a2349bb5ed3"
  },
  {
    "url": "assets/js/62.d812fba3.js",
    "revision": "9eb10a164bda85b674a37a2e3cda4f12"
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
    "url": "assets/js/87.93966c66.js",
    "revision": "0a1e592002a37b5ab96c29faac4a0d7f"
  },
  {
    "url": "assets/js/88.b6dbe259.js",
    "revision": "5bb56d9d78065b140b947b5a16ddae63"
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
    "url": "assets/js/app.99a4d748.js",
    "revision": "2dcec48f9b202187fe1ee542bc42522c"
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
    "revision": "d3a36a7987846e739e0536383aec30bd"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "3e45154c60e24d3b6184edc3b47ffad8"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "6dedefdfdcea0ec3c638db8ce43ba2b7"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "868d90059d455c2dde9ab12265644aa4"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "f3a4165049b53a6143bc888ea64724dc"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "52ab41f322011248f30d789d8bc2e278"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "379655b53ea92cd2d1df8cee08c69172"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "fc42968b010e5f6ce92e6c96e2527074"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "735e64a6ce3e70b4a79da67566c4a7fa"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "6ec88c69646157ef0248564d667e4046"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "085a5b62983b1420aef04c438ba0797f"
  },
  {
    "url": "interview/experience/v8.html",
    "revision": "e523aa1ab81cae51b844a6dcf74578cf"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "8a9055eee2be562952ccf0320d6d2a75"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "3d67199c2cc1a0000f78d5d6eee0a84b"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "9365ffe544c7b51f356372a55a45885d"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "a108b933bb63892b728c3ea067b10378"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "26db9a44a521471d005832ed6e25fe5e"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "0ad5912be2afbafee507a6b4327d1dba"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "cca4aeaed8a4acc19a9e70d03b1397b6"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "9a35ade570a50393ddb20d2d1fd87bc1"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "861d7a6432819d3af3af094cec849475"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "e45a88e6f9ebe2257cd870ab40284181"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "a9d568b12c23973f0de9d4796c98eeb4"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "a5b70d46de28a758dd424830c85e6025"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "767d3996a4ece381ff8c4130466f7755"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "9fec7fdb50db412371a4183bc3b3fc9b"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "ebb024ed7ee0cba09fb1ba48174ea7cb"
  },
  {
    "url": "interview/index.html",
    "revision": "d8ceddeb4f9f32332051df03d1a28b22"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "9ed3917269a4c91f720e45ac2dd6508d"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "d27a8d0b2c67c8dd37378c553dfd4601"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "69f8163bd4e45bd72b5ba6799a2daa48"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "3384ccccbb6963b3ee0f0746b1559807"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "4efc615789a6f624e27b152d1ecfaa7f"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "0701b7d4860f60a26d678b5a6000a7bd"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "4ae6a465cf8e4fdfd66fa423674021e0"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "0cb120da7393010b9f25e8e70fe24410"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "c4104eb90d2d8efdefd3b0eec8457aa1"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "6fbc1dc420e2ab1fa1bfe169da099e08"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "f675a998200d6cb6a171c8c0e2bba16d"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "63a34066a8636b048677c3d4e411c8f3"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "0b8b188078b801d85fd9c67b54a49553"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "1475605ead2b966e2126b3271f02328f"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "879205692905c6f2f9e0fd2eb1aa5db8"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "e88b81f926392cca14beab9cac983016"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "391ef0325716b26d8d481d00c7fca690"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "7e1eada30682c5837c83755d97056666"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "16d4cd8f68ef6d2bd04d9f796c469c88"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "c566ca9a2ef69512e474aa2bb1052ca8"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "a0196039df0043b1d3ce707ae7356aad"
  },
  {
    "url": "tool/5-other/css-trick.html",
    "revision": "bda4cdb0ec88e021072ba1a35289f250"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "2815e07ab160fd404ddaf2c738b55aed"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "7f972aaf6f223c2f1656ff35acd4bc7e"
  },
  {
    "url": "tool/index.html",
    "revision": "bb55be19b685b96830dae90ae34287e9"
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
