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
    "revision": "6be74d53ee3f04dd4543fb6d9e5d3d9f"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "070fc16844f363816c68bc11af79c453"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "431cff5d110fbcfdec7203a73f66e9e6"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "f7bffd0f478dd1f8290b89f5450971a3"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "ea7bec2268451618a43711ed7c28d872"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "8074fe284052119fef1d5a907dc86e65"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "28f8dd7fab878b63aee7277d40e048c8"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "e7aa5ca4fd2858c2aa6542c7239621c4"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "d25e0ec5c8455626a58c956a6575be67"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "ec5dcc0e1c818a4bac18ef2cd8f8d814"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "3887cad901a24629cde9a0e3f0b5003e"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "bd005e52c1a2174fd69875b133d321d7"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "cf78af323b4a54ae9b171c8ab2e3ccc1"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "cf95e892a4a53e85113f80fbdcb74d58"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "57139d0ac4dc3b13b3320f7b28196f34"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "21d15c2ed20b53c0035037c23c3bc483"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "aec5cd5fc6efdf30c3e847f97b8b89c5"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "e133add466e4ebd2320f4f03b4d56a3f"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "813a989f88e37a1e08af5c2a4bddfe0c"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "ddfe5a5ccff91d10997fa7d578445741"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "87bc0b994b12730996ab18c189407c2a"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "717a94673c6a77446e6a0b43107be692"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "e24c7e753ea0862687ee7c51866f754b"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "3d52012c5d8100f3349972cabd81f4d9"
  },
  {
    "url": "algorithm/4-leecode/tree.html",
    "revision": "def446d739578f29ba8e571edab360ac"
  },
  {
    "url": "algorithm/index.html",
    "revision": "b8a5299eb46d9240c40b4895eb682557"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "0b91ff71871ed78062524c113e6acdf3"
  },
  {
    "url": "animation/index.html",
    "revision": "4bac0f6fc9cbe7988e6da49ad19b058c"
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
    "url": "assets/js/10.52d51979.js",
    "revision": "64486d257a3aacfc5afec8e01cb5fcab"
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
    "url": "assets/js/15.0b0a6843.js",
    "revision": "48e2cdf1b3b649dc3cc91569fbff1576"
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
    "url": "assets/js/20.782261a5.js",
    "revision": "aca325cfc38fa5c07d28773a5cb432ec"
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
    "url": "assets/js/26.12a808f6.js",
    "revision": "8b0608d5d0cd59324b40da1af6221663"
  },
  {
    "url": "assets/js/27.85be083f.js",
    "revision": "aae91720538a7f66a3a20a83c2ca31f9"
  },
  {
    "url": "assets/js/28.54ef9a2a.js",
    "revision": "f58615458ad6ced5962dc71affbddfbb"
  },
  {
    "url": "assets/js/29.22b1e5a6.js",
    "revision": "b30f99fd29f65aaa42151669d9a7ac9b"
  },
  {
    "url": "assets/js/3.6624dfe4.js",
    "revision": "3c2dba3713cbd8768c864476391ca5da"
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
    "url": "assets/js/41.f0aff3a6.js",
    "revision": "861034ec8d28991f9691c8c5fb671796"
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
    "url": "assets/js/5.c212af89.js",
    "revision": "f76cd36dc1cea3efb7661c6fbbbb794e"
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
    "url": "assets/js/55.547a68dc.js",
    "revision": "fe85db3f76a6ffd5eb9f7a9335c9f050"
  },
  {
    "url": "assets/js/56.4a9167c7.js",
    "revision": "0501770b910798727c64d078f11400c1"
  },
  {
    "url": "assets/js/57.efc1f29d.js",
    "revision": "f67b65aa354ff023886a24c2ff1a3916"
  },
  {
    "url": "assets/js/58.1c20e6b2.js",
    "revision": "218ad5736c8066cc00d2d367f2a2e8b3"
  },
  {
    "url": "assets/js/59.493e057f.js",
    "revision": "e60621796304d7afbdcd26961fc92aea"
  },
  {
    "url": "assets/js/6.86483119.js",
    "revision": "e879e60bbb4b06e86671cbe1dee30952"
  },
  {
    "url": "assets/js/60.dba2bdba.js",
    "revision": "2fa79c2bb8df11acb19c6519de1b0f0e"
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
    "url": "assets/js/65.c0dbea55.js",
    "revision": "4d323ea492756da3eed4d198a3abb65f"
  },
  {
    "url": "assets/js/66.451d6d71.js",
    "revision": "616acaaf841baafd08b733b3e828f8e1"
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
    "url": "assets/js/81.6a18cbda.js",
    "revision": "f9f28dc5311217598bd580e002978887"
  },
  {
    "url": "assets/js/82.0623ea64.js",
    "revision": "f1132c0e3c303c7b278d35aa53c24008"
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
    "url": "assets/js/app.c32b9301.js",
    "revision": "c4083928b3a7394a14a8d5e4abf20d92"
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
    "revision": "6e58d167a5c89640294faa57429e9a68"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "46ebf86eb8b9e08c455e4d3103ee86e1"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "33d00fa809c63e36fb6ace5afbba3e74"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "449d88a6bb44014655b3692877b192f4"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "177117611ae98903e32c40572685203a"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "29d1d3f8b6373b84c170ec8d39c267df"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "9c2c632b3486c0bf1dd6d209b563cf2b"
  },
  {
    "url": "interview/experience/miniprogram.html",
    "revision": "2b8c34894e90189158d16c41245d6eda"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "d0c4033f6e85fcfc6fddb561b26c476c"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "9917be9d6ddc26d0b944e980679fad5d"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "c4d63da64eaac034a2704d5bd2a68af5"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "f5987c110791c08e06d5790d17f43101"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "316c47e971ba7663195fbdbd5933b2cc"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "36b61ab0ef6a8c3f175932f2b581f1bb"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "8050241d9a4d9aa249a230b6f57429ec"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "735246565e2d485f53209ef07d37393c"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "a4e7f35fb20df1a05d56cd1a3a1064be"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "f2dd5c2878e65eecd924f454383c06a1"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "daaae49b37e305061a6978f6f9ed8df1"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "47f67d20082b7648aa50b050273b6b6f"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "f8d6c224f1b2741047b6f1ec43de6dbc"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "5b0e03e9e44394661e61bd8240e181df"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "7400ef08308cc571be320e33bac19489"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "4e9790b09f57bc21f78aec5e677daf5e"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "e79449eff9c5c867a1aeb301f0de0da3"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "7b69efe836785771d7b74150a716ca17"
  },
  {
    "url": "interview/index.html",
    "revision": "97bfb80bd75aceb8226dfa2db7197b11"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "103deac746065878d6bb4b30d5e58b9d"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "8d223135484736c958687854666d2a37"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "f9e3d1f11a2779f1df541e77a3090356"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "eef7895406b1ade78d69c3ea4e91d2f1"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "bf6e368d2c156d9a046993d8ba230f2c"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "c329e1d8afb62fd3d918dc1498b1f2fe"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "b117caf283a36ea3612fcb3f6e86ce30"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "08ab3ab632b8f7dfdd0478045f79d17f"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "bd56440cf4376b9954da64cc4dc77718"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "7999d300464aac23e854e20180c7144b"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "b3cc091f25d5a12f18962bc0b1c9e3d4"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "7769ea5775f495d749d4f18822321ce4"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "e4a452390584676422e64c8c2f107d27"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "8120eb68a395b4b449df1a5a33f9fb3c"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "c8c9b6723e39ff2bba2b94e58b89f2fb"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "bd997c4162a438a70b841f3a1a2a75bd"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "2d39ac77eb5205d26b552e6bb850a025"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "536e705024dec3c1304142677e99f8e8"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "1186f8772a1f1ecab7116bdf8681e560"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "66e9828943a163221e5bda399a51b915"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "44db6984fb3a0f47e15653fa04d67067"
  },
  {
    "url": "tool/index.html",
    "revision": "a9606d26e9bef6136773ad8ecdbcf53c"
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
