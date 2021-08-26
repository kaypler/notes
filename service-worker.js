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
    "revision": "7117f99d6ec7c4d5f8cb793e63c53757"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "0fc2b9be4b118b72c241f8457f7e40ad"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "41cc5b3a3a95f4de3e0a1b182ec6fd47"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "31e8ad076b750f2d0664bada05f784e5"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "b34e7f606504b004ec63a7c51189b425"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "9632a25104bb9435868dbf851e4e8266"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "58f15c8d95b13a8224e2f498d873eb36"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "614596e6396f9194dbf17457f46e482a"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "20d5c7e223242d05e56481c89d81886d"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "406165a49b31814beab5625ac7b9f89e"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "ee898c9e2b7a11a4c4f495694f5b88a7"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "b539ecc4e081e55502e9b7fba45f7aff"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "b28f288870363cb323ebadb4f01a9129"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "7810d373d85241121ea0ee74d9c8fea2"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "e2cd73fd11e8b846b7b40c13a28f256d"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "9df653ad565948f274346b2a9dbf5ba6"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "d640611371ed08ce81607a285243680d"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "bdb878ca8aed2bae589f2e6500fe372e"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "07e10b9216a1c91761cb9fab339405ef"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "010555c8fbb0e3096d5f8aa685a9986d"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "8d4501a7ef7ec4fdb478d4fee72c5a15"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "0814bb506b5ed285fc26200dd0ae0316"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "f466a22410e4a657a8f4be29660242b4"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "ced101f050fc182d229e7c8349183f02"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "3fce63e26c38f4ddf8149710261f9915"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "38fddb7a36f91438e8ac8556f24cd6e0"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "17da7ecc3289ab153fcd5c49f8342891"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "8a1b14fe71644d427e4430308a75cf3f"
  },
  {
    "url": "algorithm/index.html",
    "revision": "50c718ffcbf76fd695630c268e8f522c"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "2f36e6064cfd4142d7e6066b28ad16a2"
  },
  {
    "url": "animation/index.html",
    "revision": "9fbad7e43c66fe38d4101593121b199f"
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
    "url": "assets/js/12.7c254fb8.js",
    "revision": "a21ea859fff67258728ae09ad80a528c"
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
    "url": "assets/js/38.00da71fa.js",
    "revision": "1621013f8f34158acaea1e347873e8b9"
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
    "url": "assets/js/47.067efcd3.js",
    "revision": "f7fac50ced91e8b797849964343f2109"
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
    "url": "assets/js/56.3ae7f912.js",
    "revision": "8484e4e0916bfe36ccb0096c434f26f1"
  },
  {
    "url": "assets/js/57.a5aaacf3.js",
    "revision": "a49abee347d3ad1ed08bff2d86b81971"
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
    "url": "assets/js/6.684ba2cd.js",
    "revision": "69a1742f90019810c93dd1446881b72e"
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
    "url": "assets/js/72.e7651c97.js",
    "revision": "8712a9b6e75437c4116411767100e58d"
  },
  {
    "url": "assets/js/73.54e3a15a.js",
    "revision": "4b951da8d1e19ee17a7705b60412d493"
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
    "url": "assets/js/app.217de840.js",
    "revision": "f69ebf11e8530c35c39d742fffbbb29b"
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
    "revision": "b861b14c515341db57eda25f498e4300"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "1d15748d2c66e5476f2871dde5467024"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "a5c9b37a06b8157a729092163e73a72d"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "6c21cfafc94da48fc66bd7ba32de2971"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "2a0c6c1d4ba0db9b995b3113b81c9fd2"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "1129da7a3919310e03d2addd059efb55"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "474a389a36629f8d7347f9bcaa83e28b"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "447d869339433c99d70a0d43bc1a36f1"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "89adfe5164004b6022e6a0992a841c88"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "c20c640f1f02ef82d2c0bad95078caf1"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "30105810a43f362109cd2df6167a7d5e"
  },
  {
    "url": "interview/experience/v8.html",
    "revision": "0515625e94293e9530e167889c095515"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "09d23134e437840da2e1a4f441f01585"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "bc945a6797a7b09531ee00f84dad1b6e"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "362b32e30d5b53c4dc8ad386da4efcd9"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "30e410f2a82794d1c104c759a24f6f37"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "2e5bcd9f9452bdc5e2d7650f4d992e99"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "51ed3f341a7732cf78eb022ffa40dc0b"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "78f992d8d2982935df91cb3d60e72350"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "6b89ab32c65151c50c61e646290f6bab"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "4d9cb2b15d8c5a5d221480579fe4a5fa"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "d0f72da834ff54069d0a862294ebfb28"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "a646d5db4d2d7b4a430df2dfc15d9640"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "aa77631e48339c1a5c0c7c5bbaad2698"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "0f5ed3b267e494778591184d0646a4e9"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "54a160e0f80258bc81af48feefc81d76"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "34545cea762816802d9ad33506ae7e01"
  },
  {
    "url": "interview/index.html",
    "revision": "e58ec558ccf4be1827aa9d54f740172d"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "74e1f8ce518223e7540cbb22d27f0cf9"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "4fbcbebbf8b8f2e773e3f25a9934ff92"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "56da62bc3cf5d9d6eec8ca1036227b25"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "409b9d0029432ae879b8e2a5662e183a"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "8488a319de618ef0c567bf6ff94e24a0"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "2fd867969350f649ca1db9b10c12b098"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "42560bde43c8bd7c0dbd9416e5eadc59"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "2ca3e9d86294c9ef41613a5e8ec77f0d"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "bc94a1744094451ffae7d2da2a48b8f0"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "2bb4f4f688794657092af3e22b0864e9"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "1244e612bfeb8fa35649fdbcb67e4d90"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "fa5f0fe35426f5f47c42200b298f6415"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "6ad6eea18e097b82a9b82ac10f862e77"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "52599f7974150ef06a936a31c5014913"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "095065109eeea093ae1f3fc11fd7df07"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "e1349010947e8fc21103341e19660636"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "18744c9ddcdd9d810576e3050fb2821a"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "1f9a402e69c766606f0308dcecb0bd14"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "169ee098ab5ae72bc5fd4319b38e1936"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "5766a0d438a0ee9e8b86e7bbe126bdee"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "5c8822a6e6972158130797dc5b4041dd"
  },
  {
    "url": "tool/5-other/css-trick.html",
    "revision": "18e7e9fe38001a020ed57c69211ea03b"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "dbb5a0d1a14985536f4a8a278e31178f"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "cec8aab3e056e9a297050d1e1976f10a"
  },
  {
    "url": "tool/index.html",
    "revision": "cba456166efd08832d2ab5e07a97b7cb"
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
