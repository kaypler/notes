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
    "revision": "a76a22b90fe419bbfb8561fa1eb9a391"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "f8875bb2dba197e2b9baaf04318769ae"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "7722f088aa764dd5d5ffcefe563c2a36"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "ddd1dcb84dbe90ec676f7d1e13985cf1"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "318cb66d36a2f9c2e42f4c44dde06d00"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "85cdf393f884b29cf36ae38b3867eadb"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "b8da3acdc08b4420e50be90aaf11e82a"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "24c87f226600a1d3b1040b59be273967"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "62085c0fae3cfe05a0336806285e1ea7"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "ea553276382672bcf935987020fd7588"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "81d1985f21f8c05927340a29c380ca35"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "cbabfedf546d1890e00ca4908f2394ee"
  },
  {
    "url": "algorithm/2-graph/6-minimum-spanning-tree.html",
    "revision": "423115daa58e0909135f2c9a02605c5c"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "e6a46b698040aec0dce5045fc09fc9d9"
  },
  {
    "url": "algorithm/4-leecode/01-array.html",
    "revision": "b72f664f20bda7348401a1542215e211"
  },
  {
    "url": "algorithm/4-leecode/02-stack.html",
    "revision": "37749dd94ed02bc5a03907ea31ede3ee"
  },
  {
    "url": "algorithm/4-leecode/03-linked-list.html",
    "revision": "0023f23848f8dc6c7d2c3579afa7334c"
  },
  {
    "url": "algorithm/4-leecode/04-tree.html",
    "revision": "f7f040cf76271fcd7cb02459dd69d5cf"
  },
  {
    "url": "algorithm/4-leecode/05-sort.html",
    "revision": "688c650babd57a79e1d87e1c96c58556"
  },
  {
    "url": "algorithm/4-leecode/06-binary-search.html",
    "revision": "968e8d236fd8cddc1d8c2774a700e891"
  },
  {
    "url": "algorithm/4-leecode/07-longest-common-string.html",
    "revision": "07d84fc2a961099ac069d0478daf7f24"
  },
  {
    "url": "algorithm/4-leecode/08-palindrome.html",
    "revision": "1f21d0625900dd77b4aa50cedf54b9b9"
  },
  {
    "url": "algorithm/4-leecode/09-double-pointer.html",
    "revision": "084ed2a27f0b47458a22276654d0417e"
  },
  {
    "url": "algorithm/4-leecode/10-slide-window.html",
    "revision": "d6af68a981e1e8b7cc00d19fe9266ccb"
  },
  {
    "url": "algorithm/4-leecode/11-matrix.html",
    "revision": "907fd1048173fa62842624b817455992"
  },
  {
    "url": "algorithm/4-leecode/12-dp.html",
    "revision": "9ad51c4f5b4da31cc8f835e97c246353"
  },
  {
    "url": "algorithm/4-leecode/13-greedy.html",
    "revision": "c794bba4d1ea32fb89fca959564cb500"
  },
  {
    "url": "algorithm/4-leecode/14-backtrack.html",
    "revision": "9cd6c9fb8600b620b765ab80ffe892e3"
  },
  {
    "url": "algorithm/index.html",
    "revision": "108b3625a53d2642e98af4bb9f39a088"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "863bc740463b851820a37038d87994bd"
  },
  {
    "url": "animation/index.html",
    "revision": "ced21fc903f58c9a21b3b105e08da59e"
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
    "url": "assets/img/kosaraju.443bf2a1.png",
    "revision": "443bf2a1f588e59a15715ae1fe5c6597"
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
    "url": "assets/img/topological.ac9682e1.png",
    "revision": "ac9682e1b25879338b6540c6650ebdf7"
  },
  {
    "url": "assets/js/10.52d51979.js",
    "revision": "64486d257a3aacfc5afec8e01cb5fcab"
  },
  {
    "url": "assets/js/11.2bea3d4c.js",
    "revision": "954284f7134708092536d2cc431c8576"
  },
  {
    "url": "assets/js/12.122488bb.js",
    "revision": "93372770950d75a3267083cd98e04d04"
  },
  {
    "url": "assets/js/13.f9b97c53.js",
    "revision": "6f256819771534e422f2bc5fdabdcce4"
  },
  {
    "url": "assets/js/14.27d0c959.js",
    "revision": "83760fe2d5daf176de513e9f8312ebe8"
  },
  {
    "url": "assets/js/15.95f84eb4.js",
    "revision": "9a836efbbd37a952ae9c37cc7d607aff"
  },
  {
    "url": "assets/js/16.0c067bc6.js",
    "revision": "852c00090dc032c5fbd356ad77f40ca3"
  },
  {
    "url": "assets/js/17.e1bee789.js",
    "revision": "c0ee099decd063daa2d53c81c3300b10"
  },
  {
    "url": "assets/js/18.6713902b.js",
    "revision": "47ad331ea37e29dc80dcdf717c15be54"
  },
  {
    "url": "assets/js/19.a6eab905.js",
    "revision": "504f3e103f2165e62e53a39600ee4f37"
  },
  {
    "url": "assets/js/2.2d7be829.js",
    "revision": "7474937e706b2125ee5fa499cc2c7a6a"
  },
  {
    "url": "assets/js/20.782261a5.js",
    "revision": "aca325cfc38fa5c07d28773a5cb432ec"
  },
  {
    "url": "assets/js/21.3887de87.js",
    "revision": "2814d483a2edf75040cdcf903237821b"
  },
  {
    "url": "assets/js/22.208ab5d5.js",
    "revision": "986bcf203c3749550576f9c0434537f0"
  },
  {
    "url": "assets/js/23.10bfc6d0.js",
    "revision": "624075115ebfca5e849b3586311c7429"
  },
  {
    "url": "assets/js/24.c98e4c3d.js",
    "revision": "997da78f568969c28f718e9a72caaef4"
  },
  {
    "url": "assets/js/25.4e207323.js",
    "revision": "ba4a437cf83ad1e630c16626af72c580"
  },
  {
    "url": "assets/js/26.6ca333cb.js",
    "revision": "7d82b6fb46cef66edce7f383ea8bfc33"
  },
  {
    "url": "assets/js/27.6ce030a8.js",
    "revision": "584b14e0db1b33c8a8e54cdfc2edd8a7"
  },
  {
    "url": "assets/js/28.3bc3c166.js",
    "revision": "499b60a2873afb683d70f9c63bcb4e3c"
  },
  {
    "url": "assets/js/29.fcff253d.js",
    "revision": "5dfd62b9b2b2db1d9de93dce89d5bf68"
  },
  {
    "url": "assets/js/3.67ebcf6f.js",
    "revision": "f61fa5a385d8c5c6c4b65de4acf84b61"
  },
  {
    "url": "assets/js/30.3cc95655.js",
    "revision": "fbbedce987c638e16c578e61838127bd"
  },
  {
    "url": "assets/js/31.f3948e2d.js",
    "revision": "0eee444afe4a02c94f3112e5e2ec0719"
  },
  {
    "url": "assets/js/32.12a413e1.js",
    "revision": "4c5f84587412effc7c0532ed7f5b2cd3"
  },
  {
    "url": "assets/js/33.c9d8259c.js",
    "revision": "3df9bde65f19e0521ab9396020e38d41"
  },
  {
    "url": "assets/js/34.766e0125.js",
    "revision": "cc55152fc88d15d6fda95af062a36dc8"
  },
  {
    "url": "assets/js/35.d5c314aa.js",
    "revision": "f800b2ed9cad599a8fa9c9c984500315"
  },
  {
    "url": "assets/js/36.0f3b9df1.js",
    "revision": "37ca73ff126ab96cbccc6c561a99a4d8"
  },
  {
    "url": "assets/js/37.b389d916.js",
    "revision": "81cd742df474a95a1e38dc25a69eddb4"
  },
  {
    "url": "assets/js/38.c82029fd.js",
    "revision": "325166285e75ae4a73203829b995d101"
  },
  {
    "url": "assets/js/39.63bb61dd.js",
    "revision": "7c03bf662fa7b88108d55a128426fd2c"
  },
  {
    "url": "assets/js/4.deae2375.js",
    "revision": "2c2f3e9b3cbfc452ad08da44e4ad02e4"
  },
  {
    "url": "assets/js/40.4e7257a5.js",
    "revision": "12e0cba580ab51a96e160ef3b32c6b05"
  },
  {
    "url": "assets/js/41.b5cfce86.js",
    "revision": "cbb5e1647a50750c7307222472fbc80d"
  },
  {
    "url": "assets/js/42.58b9aacc.js",
    "revision": "dfe4484fe6891385a4c39cf184990629"
  },
  {
    "url": "assets/js/43.616c0af8.js",
    "revision": "2beb1de09ba868a3e9c1c2dada900d16"
  },
  {
    "url": "assets/js/44.2653bed1.js",
    "revision": "5875297b1cff54b3f135c20c943e5261"
  },
  {
    "url": "assets/js/45.443106a1.js",
    "revision": "aea7dbca86fe10e83d012293ce1a7037"
  },
  {
    "url": "assets/js/46.eb141b2d.js",
    "revision": "0798dbee42538b5ec890ebce5a1f71bb"
  },
  {
    "url": "assets/js/47.588ae44b.js",
    "revision": "d5bb44d6efefe18ef33117e5a9797304"
  },
  {
    "url": "assets/js/48.43a516e5.js",
    "revision": "fff885d59669a95207139ed25ce4380c"
  },
  {
    "url": "assets/js/49.db6116cc.js",
    "revision": "bbb8b8dd6d8c74547895912a37980cf7"
  },
  {
    "url": "assets/js/5.e0bad3ca.js",
    "revision": "71d810e2c3034f8602239083c50da40b"
  },
  {
    "url": "assets/js/50.44f685d6.js",
    "revision": "b5a97b852c3fd3e2de4c77532a7b634e"
  },
  {
    "url": "assets/js/51.e8b24abe.js",
    "revision": "0566f781d0ec214f86ab05658dc71507"
  },
  {
    "url": "assets/js/52.6ac0eeba.js",
    "revision": "fd1fff7cb398b61b349a42f38b30a879"
  },
  {
    "url": "assets/js/53.cdd294f3.js",
    "revision": "b53d556387430103d90eb66e958cf5c7"
  },
  {
    "url": "assets/js/54.c92bb0aa.js",
    "revision": "cd169be283c3b4b467fb3326e68ba3a7"
  },
  {
    "url": "assets/js/55.682343ce.js",
    "revision": "9511c3482509f5a2f058de9daee4feff"
  },
  {
    "url": "assets/js/56.02dc5d7f.js",
    "revision": "2b67dbff7b866ca16a8ca89497d20944"
  },
  {
    "url": "assets/js/57.43f489d7.js",
    "revision": "324f040b09aa0bbf3503894e38506fa0"
  },
  {
    "url": "assets/js/58.6f07ab4a.js",
    "revision": "7fdec46a3064c919dce99b0d265278e4"
  },
  {
    "url": "assets/js/59.921dc8bc.js",
    "revision": "f187c8f3ec7cfc941aa7bd5c37f69e9c"
  },
  {
    "url": "assets/js/6.d8eb6cc1.js",
    "revision": "ad2e3d5a099267d57d7b64f53403bb26"
  },
  {
    "url": "assets/js/60.83d3ca84.js",
    "revision": "0024fd122a7a86c09167f4ee133899d9"
  },
  {
    "url": "assets/js/61.09d88a48.js",
    "revision": "d53bdce8dff0405767a246a628448823"
  },
  {
    "url": "assets/js/62.460f86ae.js",
    "revision": "307ab6bdea2f04095ee10a38a154a16c"
  },
  {
    "url": "assets/js/63.b527bdbc.js",
    "revision": "92445f6fac0284117b71106665bbcbbc"
  },
  {
    "url": "assets/js/64.88663507.js",
    "revision": "e2b871190a1da3153a5700b428843214"
  },
  {
    "url": "assets/js/65.4231c407.js",
    "revision": "0fe96243c05bd99820fb6f7d8bad8b38"
  },
  {
    "url": "assets/js/66.f2cd419b.js",
    "revision": "ef9a3a743b665cc15b0dd5d18f9dd8f1"
  },
  {
    "url": "assets/js/67.f256f045.js",
    "revision": "871c75506d790810c6e40fb3a8e52c89"
  },
  {
    "url": "assets/js/68.e0d918a9.js",
    "revision": "0889481c63074d5b8f0985ab82552791"
  },
  {
    "url": "assets/js/69.9fb881b6.js",
    "revision": "d7846c02e618cac7405e7d9cda2f84bc"
  },
  {
    "url": "assets/js/7.ce22f631.js",
    "revision": "745b5047baa1cbb3cfbb839af1fdf1a6"
  },
  {
    "url": "assets/js/70.ee3edba3.js",
    "revision": "2d671342e141b7ff7baf359c3e09bcac"
  },
  {
    "url": "assets/js/71.4e3bdd19.js",
    "revision": "373a56c44a3d00bd00c13266968ad261"
  },
  {
    "url": "assets/js/72.9fa5251e.js",
    "revision": "29f87e37cafc04e07f96efabee53b0a7"
  },
  {
    "url": "assets/js/73.ffddbead.js",
    "revision": "c20311f153d2b0783e7b67df6af4278f"
  },
  {
    "url": "assets/js/74.eeae13cf.js",
    "revision": "be95af7c4f9bca430167ae47c553d10a"
  },
  {
    "url": "assets/js/75.8737400f.js",
    "revision": "3c7a0a7248762ce31e8f00aa13809e42"
  },
  {
    "url": "assets/js/76.fd6d3963.js",
    "revision": "dca91bbc72ad0ffe1f1dbdb60f6b4789"
  },
  {
    "url": "assets/js/77.caf9d51b.js",
    "revision": "880b1524c742761021924e32c3c78862"
  },
  {
    "url": "assets/js/78.ed24e20c.js",
    "revision": "ace77e8acacb0030ce43fc5d64b3c751"
  },
  {
    "url": "assets/js/79.b6750921.js",
    "revision": "4cb956cde10abf439453b4b1d5d27f58"
  },
  {
    "url": "assets/js/8.cbc0d883.js",
    "revision": "8fd4a38be23e6f658f112c24011296b4"
  },
  {
    "url": "assets/js/80.3e9bc2b3.js",
    "revision": "6997243f47d615a632cb201a4da6e2ca"
  },
  {
    "url": "assets/js/81.b7a2a0dc.js",
    "revision": "15c97a8d09571ee54d62034448bd1748"
  },
  {
    "url": "assets/js/82.2861f469.js",
    "revision": "5bc5f7c0009fa67c3c4e118b33e1e997"
  },
  {
    "url": "assets/js/83.f9ce8797.js",
    "revision": "64073e1bdb1fb7d24097406a93679caf"
  },
  {
    "url": "assets/js/84.b4153195.js",
    "revision": "4cba3f2986646fbbee22b8688a8a9ce4"
  },
  {
    "url": "assets/js/85.3fc12198.js",
    "revision": "7eaae25ad3ce37385b40ec2ed371c639"
  },
  {
    "url": "assets/js/86.318b36c9.js",
    "revision": "5789f808471a1e1aece236d0b202b63b"
  },
  {
    "url": "assets/js/87.b56acb22.js",
    "revision": "12c37329a702959bcba489dd30c30753"
  },
  {
    "url": "assets/js/88.13f026d9.js",
    "revision": "2f312aa9cf8ec567e0c041e44bc024d3"
  },
  {
    "url": "assets/js/9.27516e9c.js",
    "revision": "839a1ab4153da9e4b9d4f2040dadab85"
  },
  {
    "url": "assets/js/app.ce0cea03.js",
    "revision": "75bfbe760618a77ddc9118b015129bc1"
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
    "revision": "ea5226fd84be74b70c2b5700250529b2"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "a52e73b4033a0f595da9318bbdf18da6"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "5332de34a32c26d6a764ca5d760f4aa8"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "98de50e7045374fa85742d0a5d46d399"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "7e46e24eeb6edfb3411baceb0ebaaa09"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "4b8b83fbfdd02de145e2fddb92f24a21"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "1201bbbb3764ac7dae843b8b86087e04"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "c2ac85c28085ea9675abf1b276d2f0a0"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "f3a8dcd360773af3c650d533fa45b9c8"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "16f7d0c11429f6058b3fe4b4131eff84"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "77849656348dd8d8a9a0d61b6fd52c94"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "c5176133b48579ada9be40e8a28a4555"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "f9a23b052b19bea714c9c23462812f30"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "23d0bc726804820379eb7da95c811e18"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "df5311bbfaf519aace6937a82cef0cb2"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "6fea9dfb519856782d3ad095c27b0e00"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "cff71ec5272b809a525dad016114f17f"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "c1722b6e44c41c45b05827fa0caa7507"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "542a5540c618d30032fc93b915ae1389"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "723539f17166f2b6705f523a2b02cc21"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "54eb28816ba703104110ea8d8d04cd8c"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "b99714b33cffc3fd322dabb815e2d8f6"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "d0d7ea89f89d2d71df3fe4d8f94fb198"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "73982296b6936d1b639ee05f56431c42"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "54da378c766fa9cfcbdacc93de7059c2"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "27a400e314702868c4b5be76191ce1c0"
  },
  {
    "url": "interview/index.html",
    "revision": "5df0389d989dbf98ea7cd721b279d5a4"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "6ec8fadac7c02e8c260f8dcb830297f9"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "8ae4b35ff31c6aae88a032e36c2d60dd"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "d30248bd9b3dc5bbe87ac4b1185fa995"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "95d9150c6da7255170552a461a0d0934"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "25a35190ac6019548b977bb38ab4aac7"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "e24072d6a1d5e8ab8bb1c737ddc83761"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "6515969ce1793e33d2dc3924297762b0"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "b8406721775659b1f7a314d7d07336f7"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "eab5c8931db977d52974af763eb80d39"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "7e97780f477caf37c8646fa3969e8ffa"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "05100d1da4637a94be4fc42d92bdcf8e"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "948af3224ca12a59255c2dd2c28dfe89"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "92a144294d16fb2010e2d5436db74f54"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "7fe97d6fe22fe448c82789fe9eae2293"
  },
  {
    "url": "tool/2-picture/img-download.html",
    "revision": "37514de46ea205b2ea8c9bf02e8165b7"
  },
  {
    "url": "tool/2-picture/img-hook.html",
    "revision": "e86f13a270a4aa2ffc953b7365e1998f"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "5418b0289b64c53a588b8ddaee03511a"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "012b1025d2a7c8f21dcd5744953d884a"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "c2e44f26516f4bd251b1687fbfee7dda"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "e742decf7471648d8d6dee133eecb8d5"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "5c6a33535255dce7db7b2f4d00229e98"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "11544df3e7fcf738181214556bc810c3"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "9964b1e63bdb51b5ae56e9bddae037e5"
  },
  {
    "url": "tool/index.html",
    "revision": "8cb1e8e406ed3187e38d191a6b35c298"
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
