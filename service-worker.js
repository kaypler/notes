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
    "revision": "f68ea29890cfa69fa4493e252a20e684"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "7b28c34dfcf796cc8a965f7ae2969f94"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "fabe6cf8ade8fe958ee45a67eb2bfad3"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "88c27d947fa68104c5354f9b680376ab"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "40fe8fff306f5fecd09175854aa0172d"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "364b923f285a95ab408788b78605505f"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "e92ec26891c58824db30a2159b96ae1d"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "fae570ab503f5efcb0760d6411a3156e"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "379494f374f8d1ec13ed3f355ae0786d"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "1a522993cb8d072ce184a4976079aca5"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "1c831811294b48cbd841e214042508a3"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "d51b8d827c33b1a47879bed8ad268499"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "20b4bd916c901f05d961af2cd1a188f6"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "2424ec0837463f58e5051ac3a4f76936"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "5b1b70cc1124bc31267330573b54d944"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "9867b74524059c2d3c604a3098417bfd"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "cff69ea42708145caa250f774f987151"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "dcc78cea928adec3da2d779f4746fd76"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "fb73586cc646e10c0d41568d7b2ad17a"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "881d5b40da876c61862810a158d5da2d"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "bd7f36f2525ce5cc013e51601ed7dec3"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "168807486c200e3d9655488e30e72ca0"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "75ef690722944319d1a6399541854c93"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "93600e8cbc019e5815dc4d682cb403fd"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "f08bd959ea13d6bc8bd6ad216dede1d9"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "800ec7a27f0bc2b68861b43e39a76334"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "cd66ee22f8473fd0d2b0464113ffd523"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "aaca5011e70f45e6a5fe09b4ddb35ae5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "0b3d2f888588e0bb303c2879508510e9"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "8d6309ce5ef7addd016e28a57d9db813"
  },
  {
    "url": "animation/index.html",
    "revision": "869aac324e2c6d50273e8cf5b5196d52"
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
    "url": "assets/js/54.79788d47.js",
    "revision": "41bbcb7e19e5627b86eb0e4721fbb250"
  },
  {
    "url": "assets/js/55.02c227bb.js",
    "revision": "a7d06146badbcd5b3535dc5fdbf7d6c4"
  },
  {
    "url": "assets/js/56.b02e2dc6.js",
    "revision": "9af74daf5138afd0d3a2f96a33c6cb46"
  },
  {
    "url": "assets/js/57.44fa7099.js",
    "revision": "e74ccd3cdc22f2d3ec0a1ef6db34d764"
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
    "url": "assets/js/6.8835f479.js",
    "revision": "def9868016a0d66d6155ae58bf29d811"
  },
  {
    "url": "assets/js/60.4f3beb21.js",
    "revision": "2ff65c1e02b5b415f20f4034a64791f8"
  },
  {
    "url": "assets/js/61.2631684a.js",
    "revision": "fd40d06786f4defb08e7854a1c247e87"
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
    "url": "assets/js/66.fb0370d3.js",
    "revision": "aa7707d8326eb1500274bc0c7f04bbec"
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
    "url": "assets/js/app.d8c5f9a3.js",
    "revision": "08383d9a3560b500ecddf774911ef442"
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
    "revision": "08b892f6e6cb74fe7a9d6a54641eb74b"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "59316c0430e5ab7d42f7e07be041d620"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "1768c8658839af1d74ab2e6aef98945d"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "6d593d94e5c0a060da1e2c29ec4e459c"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "16f52ce3a64ce716fd9f5af82b568dce"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "aaafe031db42a90884fa093f66fb2658"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "35248639573bc8b2c2aae45ef0a8bc90"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "ae5b2a3c09214197d32f00343d61b67e"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "6837b65ebb8093ab8a1baedc991558e8"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "15b749998e24c8a7614fddbf875609f7"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "307fad0109c9d1359df97f7966b42351"
  },
  {
    "url": "interview/experience/v8.html",
    "revision": "cf9c8eebd8b7affdce36f64848b5f3fd"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "829166e13433c3e69785caaced890b58"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "b8e73e15d62626afa53d75b8dcbca021"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "b542655365c6c58dd4fe9a4be8374add"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "7f97786d3743d3d22b95c6b7ea09482f"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "ced5f75dff8672f491f467fa0f526605"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "b77e986a579639c1eb4afb0511d7f4c7"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "2a3aa09917fcb266e673beb96a1eaccd"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "e079ecb5034e87f50759abc4e678f2fb"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "3829353a02bb07164a2aa2eb643db09e"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "2740c37950c77e93a3b1b5a3ae6ac3dd"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "ad8cd77b088a6f5de1b1ef90bc7be4f7"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "8b626ba60ca2ff87f2e1b2020ef7e96b"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "7af1dd734db83eea1eafd2010b960176"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "fd17b5c68359119e903cf1f713776cfe"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "fa0de5dfad03b0e0a9da6fd7c2244a96"
  },
  {
    "url": "interview/index.html",
    "revision": "28213ebf08268edb90e6175779dfcb79"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "40ab64110e879427498c56e8126dc191"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "8004706eef500f7605392ffb8ea8b536"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "74c66a00f5a525dc5ddd611ced0fc27f"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "0d462f5f55fea4e6343d85f3ffaec10e"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "06fe8fc6671778a90e14f0fb01441ee4"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "e72948cba9163efa001c173b62c03b11"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "216c46a8a16695e7993b891c0fb77ddd"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "33b42f24c6ac5c5d8ddbf83d9a2d447f"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "18bb27092f9f088ce62c96013c6052f4"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "08cdb02ca5395ca84a82519e9298cb8b"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "31be11971b5bce74f88e76d1701cae43"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "4e8af0c1f2b82bcb5c0552e7c30f18d3"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "78eb215c1103e93064b04606d4f3ff0c"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "eb5bbb32835b60c9863676e883bcd375"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "89fc899704eb5381bd083fb79af7335d"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "0e3395cf694cd5353e830ec284ee1421"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "9b26bf0b353c2d7ff98f8ae41df7bdea"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "0696d7b19b589b0d2e39fe3e0c95e1e4"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "c2d7ade991546e97b472693f8ff43d98"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "8b1134d02e0f60b0f4609f1372d8988b"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "5e3010c41796e326932ab980d13d9e64"
  },
  {
    "url": "tool/5-other/css-trick.html",
    "revision": "bd6561fdb89af47c04d1877ca16cba63"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "72ecf7fef7e20a031d8619aa4d396966"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "2f52d938517973705106f64cfba01ae1"
  },
  {
    "url": "tool/index.html",
    "revision": "b3e25a78b045f355093a662298026165"
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
