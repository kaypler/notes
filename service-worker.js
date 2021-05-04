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
    "revision": "f164c4cf32183b566d72e06c3e048b1b"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "2d863cb377b662d274e21d7bfc4af63b"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "90b4ca8e8bd7200395ab5ad2d62a6d1b"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "ae917804d83d733580e7f2c15ea799b6"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "3f67ba6bd82055abd524f2cd997313bd"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "703cc99e4e6e1787a2ca160239019dbd"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "b53a844b92b8ab24d1c51af1acc8a072"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "5ac207f4d005d3b32c9ba0538e48ff4d"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "fe043924ea4388afbacceda61dd7803e"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "ef5b92b5938a95c5460c1eddc9c4eccd"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "105a83227cbc0d37acebba89619a0a88"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "337cec985b6c7512980a82b166b4eb16"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "168843837db34db94780b548f99ae434"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "90349463707d86c7a7e4e4d826ae991d"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "252e79091c7450ab9b1056aa8a4d5730"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "be17f80ca22748b4e4def125afbf5b44"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "9b6a2b9a32a5556787b1fcde0c899c2b"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "b8fbff7d98721965cf00eb2e42627b6d"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "2173fb30340d5b30f78b6172bec73114"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "d4bfb44546a90365ce7a3546c6e5f0b2"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "585f4132a7ebfb5d2e39aa39ef4b88d0"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "c5234aceddb805699c905c6158231576"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "49bbe1840d5d02ddf262e8787c22dd54"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "3953dd6040ad54a1a09fd30dae370c1f"
  },
  {
    "url": "algorithm/4-leecode/tree.html",
    "revision": "c5d62f072aa1a6719585a9706721023a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ed72ea87179eca961468d63be1c79659"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "7226beea911ef7ad1bdcc7fb5ed8a1ee"
  },
  {
    "url": "animation/index.html",
    "revision": "4d1ba8fe6055a6712d31295473493c97"
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
    "url": "assets/img/browse-1.a1728f08.png",
    "revision": "a1728f08001fa0e8e2ba653e286972dc"
  },
  {
    "url": "assets/img/browse-2.6b722f5c.png",
    "revision": "6b722f5ce0e4a8161cda22d95036d8ec"
  },
  {
    "url": "assets/img/browse-3.4f7ebd2b.png",
    "revision": "4f7ebd2bae107a309e5aa4a171858976"
  },
  {
    "url": "assets/img/browse-cache-1.1f62052c.png",
    "revision": "1f62052c9e8b5b5d19ff6e462a908fee"
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
    "url": "assets/js/10.2fd375d2.js",
    "revision": "14a36597119d81cf497e669cd09760c4"
  },
  {
    "url": "assets/js/11.c9404928.js",
    "revision": "f94367db3a1181ffe9d4d086375cc287"
  },
  {
    "url": "assets/js/12.afbbc02b.js",
    "revision": "d02c3ded365093ab72f7e92644dc39ae"
  },
  {
    "url": "assets/js/13.5e2a0efe.js",
    "revision": "19cb9098628d88ad762c684bf4f95945"
  },
  {
    "url": "assets/js/14.ef6cfa22.js",
    "revision": "1c510c66e5817981851c590b3582edf0"
  },
  {
    "url": "assets/js/15.305e12c3.js",
    "revision": "cea66356d768c4f59b3ee8a3ea43ca6e"
  },
  {
    "url": "assets/js/16.e0ea8124.js",
    "revision": "1847001392cdc97537e586c3bf007b9e"
  },
  {
    "url": "assets/js/17.30182a8b.js",
    "revision": "c252edd57c52074ab69305a1d9e1ac90"
  },
  {
    "url": "assets/js/18.88f805c9.js",
    "revision": "e120acbbfdc63816c9921a2a47d2c6d0"
  },
  {
    "url": "assets/js/19.494f2130.js",
    "revision": "4fd50f48b99788fe1798c20a20b5ab4b"
  },
  {
    "url": "assets/js/2.2f2324fe.js",
    "revision": "027a5f58c4a9ffc7e903e5df06ae6bd6"
  },
  {
    "url": "assets/js/20.8d812d11.js",
    "revision": "79d1f74fa5d294b275240ba3d7fe989b"
  },
  {
    "url": "assets/js/21.6c8309bb.js",
    "revision": "c2103ebff1e0bdf68549e9eb2e1061da"
  },
  {
    "url": "assets/js/22.72a77a36.js",
    "revision": "39b70a437d88e23826f1523421d41765"
  },
  {
    "url": "assets/js/23.820b0f5f.js",
    "revision": "7c14612ccd04b4f8ed8995cc8560cd7e"
  },
  {
    "url": "assets/js/24.ba10f6bd.js",
    "revision": "cf4baacb35e35082919370efd8c8f0b8"
  },
  {
    "url": "assets/js/25.6d3bcb6b.js",
    "revision": "52d62a522f57bbd6c02fecfb5930c930"
  },
  {
    "url": "assets/js/26.377edaad.js",
    "revision": "6e9aa710141b01cb32f3721676db5aed"
  },
  {
    "url": "assets/js/27.85be083f.js",
    "revision": "aae91720538a7f66a3a20a83c2ca31f9"
  },
  {
    "url": "assets/js/28.177422b2.js",
    "revision": "e56aedecb2d4288c6242d93370eaa64c"
  },
  {
    "url": "assets/js/29.1da12be7.js",
    "revision": "29976519ac8e09abd22c4aafea701478"
  },
  {
    "url": "assets/js/3.a7d05428.js",
    "revision": "f08830e44563ae6a2d43d83014eabaa6"
  },
  {
    "url": "assets/js/30.63462758.js",
    "revision": "aab4bee007d3f59489cb8457302a5e03"
  },
  {
    "url": "assets/js/31.2d1164b8.js",
    "revision": "e742de0c9cfed5a32c882cb4d09872ee"
  },
  {
    "url": "assets/js/32.a4db0f15.js",
    "revision": "c80b515655a15cf809fd9d41fac7d8b6"
  },
  {
    "url": "assets/js/33.4bf3801f.js",
    "revision": "c943b7de105656f388667234a20ad1d3"
  },
  {
    "url": "assets/js/34.577dbc76.js",
    "revision": "c7ddda686cf0da3583c1aa43d4674c02"
  },
  {
    "url": "assets/js/35.ad84e228.js",
    "revision": "3e5151352ea9ed895576c2444b1e36cc"
  },
  {
    "url": "assets/js/36.4f8a01b8.js",
    "revision": "f63bc28ed017df9dd04b4d4db6081755"
  },
  {
    "url": "assets/js/37.6295a9ca.js",
    "revision": "71debc90a0ee91021b9407c54178f2a5"
  },
  {
    "url": "assets/js/38.bce7e627.js",
    "revision": "39f2da656cce3567a1be02d833930723"
  },
  {
    "url": "assets/js/39.0eff06f5.js",
    "revision": "1940afd704bf19da8c7c2db6f2703c31"
  },
  {
    "url": "assets/js/4.7b576185.js",
    "revision": "0d0d6abb58897fa67160578c2d8bdff4"
  },
  {
    "url": "assets/js/40.3cf675b5.js",
    "revision": "427f83c0252f7e1e8839ce5efe19492e"
  },
  {
    "url": "assets/js/41.938ffa5c.js",
    "revision": "65a2d33186a4b46646e71a777f8724ea"
  },
  {
    "url": "assets/js/42.e60ca2c4.js",
    "revision": "fd66cd3ec3896b3d49af4fd9a5e523ba"
  },
  {
    "url": "assets/js/43.055ca502.js",
    "revision": "1572740f4391f1b1b6bccd0411e2195b"
  },
  {
    "url": "assets/js/44.31ea7851.js",
    "revision": "0a75f1c9ca8bb857b45e1575ea0ef012"
  },
  {
    "url": "assets/js/45.cac40add.js",
    "revision": "cc0860d9d104b2f0d242875c549e582c"
  },
  {
    "url": "assets/js/46.f4e01d37.js",
    "revision": "0894c7eba70f3bb72e89411e6e9b40e2"
  },
  {
    "url": "assets/js/47.1b07d5d9.js",
    "revision": "da0fc941cf01b64a2b593be28f0b8261"
  },
  {
    "url": "assets/js/48.b1a87663.js",
    "revision": "199d65d9c273a10d802f4f3cdcb56fc9"
  },
  {
    "url": "assets/js/49.34fd2414.js",
    "revision": "17e2e8aae0b3b90acfcd0726c85ff641"
  },
  {
    "url": "assets/js/5.515e7edc.js",
    "revision": "9df1fbb4ef3fb59b35a023906c89fdcc"
  },
  {
    "url": "assets/js/50.9d30c6fb.js",
    "revision": "f88b54e9604cfbe532ed0594d295fd7e"
  },
  {
    "url": "assets/js/51.09da5983.js",
    "revision": "2463ec2bb75c863f4bc79f2d2224d765"
  },
  {
    "url": "assets/js/52.760928f0.js",
    "revision": "e1c750842a465e412684ff70ce41acad"
  },
  {
    "url": "assets/js/53.c2e6a65d.js",
    "revision": "34b6e06d2bae15f9015f29f261107b03"
  },
  {
    "url": "assets/js/54.11b46a0c.js",
    "revision": "7d0b9ac85dacc8bf44ef58eba5e7ff6a"
  },
  {
    "url": "assets/js/55.bb80fdfc.js",
    "revision": "46ef5ec1decb9fc9595d7da76cfffe9e"
  },
  {
    "url": "assets/js/56.4a9167c7.js",
    "revision": "0501770b910798727c64d078f11400c1"
  },
  {
    "url": "assets/js/57.6c30fb4d.js",
    "revision": "12d84b0ce82c2e12f77f27a2f711c5d1"
  },
  {
    "url": "assets/js/58.2bc94151.js",
    "revision": "a304f053350f7d097bae6e6d665b1711"
  },
  {
    "url": "assets/js/59.1dabd9f6.js",
    "revision": "60cf673df9265b1077882f9a5ba929cc"
  },
  {
    "url": "assets/js/6.86483119.js",
    "revision": "e879e60bbb4b06e86671cbe1dee30952"
  },
  {
    "url": "assets/js/60.5af1ac3d.js",
    "revision": "264d8838f776a05d706531ee1c63b11d"
  },
  {
    "url": "assets/js/61.cce2797f.js",
    "revision": "87f39cc949a95aa589b12908fe4916a5"
  },
  {
    "url": "assets/js/62.4a6256eb.js",
    "revision": "8ff6a8afe4c410da9f758230c7c0efcb"
  },
  {
    "url": "assets/js/63.2fc2c092.js",
    "revision": "6b042b5bbc76215bdb7e61ebcfc5a358"
  },
  {
    "url": "assets/js/64.3eb82040.js",
    "revision": "44eb5b98ee284812b2ad60bd0474cbe6"
  },
  {
    "url": "assets/js/65.fb36e9fc.js",
    "revision": "ace33baa702881058916f076848061ac"
  },
  {
    "url": "assets/js/66.a47390b9.js",
    "revision": "dc31e7aa8d7c970f5e757e082febcf49"
  },
  {
    "url": "assets/js/67.cf4055ac.js",
    "revision": "c027e0b3a4ba5a5a5e8100568c3556b7"
  },
  {
    "url": "assets/js/68.be4800f9.js",
    "revision": "abc948e363c362f2d75044ac726d6eee"
  },
  {
    "url": "assets/js/69.87d2555a.js",
    "revision": "ff13142a9a6aed6dc88183e9e3dd6d7e"
  },
  {
    "url": "assets/js/7.5320a917.js",
    "revision": "d97f153d684170a612859fce4dfcc322"
  },
  {
    "url": "assets/js/70.8d61f7a2.js",
    "revision": "f71df88f1a3d0a99054193a2b164283a"
  },
  {
    "url": "assets/js/71.4a7b1085.js",
    "revision": "8851da7ea2f2cd145b2af6cea90e2e29"
  },
  {
    "url": "assets/js/72.9ecfcef4.js",
    "revision": "82144bce1928ccfd28ef7ae3f2919caf"
  },
  {
    "url": "assets/js/73.307ec97e.js",
    "revision": "9048521dee2a58fd4cb7c588762491e1"
  },
  {
    "url": "assets/js/74.cde7b62c.js",
    "revision": "c1df6ff4f929dfe0afee61c7136de1f6"
  },
  {
    "url": "assets/js/75.cad5cbe6.js",
    "revision": "8b5a701dcc26bf35d1e43bde2d6b162a"
  },
  {
    "url": "assets/js/76.9e5fd634.js",
    "revision": "ee0cbb911769b0e062d8c33318dc1e57"
  },
  {
    "url": "assets/js/77.f99f653f.js",
    "revision": "81562fe30eae0487562394b287242ab7"
  },
  {
    "url": "assets/js/78.c2e4c5f6.js",
    "revision": "ac655faed93048a989c7e8f2f6f00e3c"
  },
  {
    "url": "assets/js/79.2b578d73.js",
    "revision": "055c1f37dd03ee152513ba5ad77b5044"
  },
  {
    "url": "assets/js/8.14f8a4c8.js",
    "revision": "86827b43f64660a1b6054e4fce867f36"
  },
  {
    "url": "assets/js/80.276d7d15.js",
    "revision": "9f111af31cdbe7b182e9429a2cfbb653"
  },
  {
    "url": "assets/js/81.b6fa1e3e.js",
    "revision": "f5b1a3ca4ecb6b6da6f157fba7036fae"
  },
  {
    "url": "assets/js/82.e511814c.js",
    "revision": "9ef011bc44124a125a76cb0f82f76ba6"
  },
  {
    "url": "assets/js/83.da6099c2.js",
    "revision": "37d8120150f5251875307cee2382c7a7"
  },
  {
    "url": "assets/js/9.1e6ccf2c.js",
    "revision": "4518695ae1f4cd8cc5b24898428256c8"
  },
  {
    "url": "assets/js/app.d78b680c.js",
    "revision": "22a241418ea7cc0f8bd58d314c9750e5"
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
    "revision": "e554d5ae0abe00a5fb0fe56a507f18b8"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "b10670e63d1977b97556f0457e49f722"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "42243d6a56539bbfde19c4b1e653b8da"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "b366bc472935b9362a86df66a8961a67"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "f751b29ae5343eb4ecca057c09949845"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "78c75def8ea4836d21ad47cc22d7c22d"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "72b598c2bfec3013252e7ea2088ee71f"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "e7825adcc15280dc79777a251dea91c1"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "e31b64d8cad3beb88bce8cce56196446"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "dbac9ee3242fd15cdee0feffeb550575"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "73acfea20a3930b78077dd903a0ceae7"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "a2a8a8450b0325c3b4fe805f72003ccc"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "81c78f38158184ab76cc187962a3dfad"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "bb1ab54c65af144e0557d731a28974c4"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "183d7aeb8845d46c0eb1effa3fa9702c"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "829be7eccbcbc09832dc1078ff597ab8"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "8f9d6c527b1eaab6e90e40bbdab92af1"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "399c63369477272fb4e6ca0876cf0bd1"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "a5c7c3e355ab3b9b122f04dde8dad8c1"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "a9c8cb9d16be2cad76c3432b5ace1c70"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "69942ed3122c99062959a9a5d9a7baf4"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "5c6494206fe0ea972815488508b74ba6"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "6c2c5b9ff2c5d5e0b6d8b19c5a398612"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "4057c89d8ccae3e7b67694755c13aa9d"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "34b7e9dc124b1ff4b88aa3746238adf6"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "3bd16ad285d1dc7d0d7945890a5af8ab"
  },
  {
    "url": "interview/index.html",
    "revision": "5f1b097c033bba354c44a9a8ae9bb867"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "0628f4cbf1591dc6b98cea22da892045"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "8ad25b59eaf6d4fd33c2cbc108510e51"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "dd833e527d7e39c7391278ed27831dad"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "4fd5e67c668c9d1ab129a58b3acb283a"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "ffb6453b511f05cf3c1a6f618fcfabc4"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "0215d232337b67a2e7e9868634803c5e"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "099b4e11630e967afe4967744cab820a"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "102f385abc2fbd6020295a349f857cbf"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "ad3b74d06f57fb336128e3e85f99b841"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "8d068e1c3c24ffcbcaab0e3a7d314936"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "a613f01b03bea288803e6213a983c677"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "74590b316b84566fe021aee170ec52e8"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "e8dac0156da07589bc4d33d888473fb1"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "00fe3efb282d928de63f3ec330d4e806"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "405ba72358f62694ebcc51b410ff262e"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "8fc5d6124613a4d62d3ee81b97c542f3"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "a079550c210cc47086a7bfe37476f41f"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "d31d1db34ca90986965eb5b8e554e58c"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "6250d74bcdbdf2125edc811d90e79eef"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "523177037234f92fb0f5c0e801817831"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "386fc8fb804f53e1993b67e320589931"
  },
  {
    "url": "tool/index.html",
    "revision": "850fefd60173e2d8ccd79c4d4fd17654"
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
