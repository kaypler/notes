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
    "revision": "98fc99849cf28767519a4b6aafad480c"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "52374714b5725cd13af3285398216cd3"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "8c3e0aa9ca8e7876e6d8619709e86848"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "e4d3b19bc449d81493cff53480a9a128"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "1b19388fe20f8215d79436d49ad015eb"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "c9ae1f63bbe433993869c731657fa397"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "fd897e55962246ac95e2eee5972705a7"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "8b961073ce29fd5c60c5bd6605215571"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "d25152e7e3f5b6cbb9259ac2e884f599"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "66bfae39a544949e1e311c19aae89e5b"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "6f8c1472db090bb60ff4a8cd5c4defce"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "b6dd025e26ad246054cfe8c580fb2242"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "361d86eb499ac16dce44767998021857"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "9c2b14c46a99a6f924a856e8fd97ccd1"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "25ed16a2dc9e813b3387ed74532d75ed"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "422d21154f4a1c992876d2c312651e3b"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "72f310b69faa49ee9818e2ed0b32a82c"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "34592e43f9f4f34221ef8832169eabb5"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "8b60563e86e9af2d15446aa0235646c8"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "c59d0167e8373d7080476cd98ddb3d89"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "3d672680518d194fd6925c7e20328bd8"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "c9175308f598792543440d8122cde784"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ea596a7cfeca68dd307447a4f0b10f1b"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "a34830a6ee87946b955d2cbf260463b2"
  },
  {
    "url": "animation/index.html",
    "revision": "a641b1de2576476624c53ffa3565c01d"
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
    "url": "assets/js/11.34209b51.js",
    "revision": "995db1cff2afd182c47f5b28c9d4f66b"
  },
  {
    "url": "assets/js/12.afbbc02b.js",
    "revision": "d02c3ded365093ab72f7e92644dc39ae"
  },
  {
    "url": "assets/js/13.05e4cdb6.js",
    "revision": "65dc219953fe712dc7a6326f237b30df"
  },
  {
    "url": "assets/js/14.0482206e.js",
    "revision": "5a3940cb4797438a29e72414bbe5ac50"
  },
  {
    "url": "assets/js/15.fb946686.js",
    "revision": "8713d380cedce25a0811ef658aa635a5"
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
    "url": "assets/js/21.25e34449.js",
    "revision": "3f504cf8c14a6de59469492070b585fc"
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
    "url": "assets/js/28.c16fb71d.js",
    "revision": "e5f59d1a5e527c3c8b1034d67fb1a953"
  },
  {
    "url": "assets/js/29.3f1277da.js",
    "revision": "1c81ad4feba6ec8b5148ce7c8d08f796"
  },
  {
    "url": "assets/js/3.6624dfe4.js",
    "revision": "3c2dba3713cbd8768c864476391ca5da"
  },
  {
    "url": "assets/js/30.31f99593.js",
    "revision": "3252fd992110fb35e40bc25f1539e61a"
  },
  {
    "url": "assets/js/31.21e3243f.js",
    "revision": "0001dc7f51674c187d067a885d1fa440"
  },
  {
    "url": "assets/js/32.c985c375.js",
    "revision": "b93bddd7d0d61b749ce0e244bd39c758"
  },
  {
    "url": "assets/js/33.d5dfddf9.js",
    "revision": "ec59cc10d87b8eac86f2eaee6265f2ab"
  },
  {
    "url": "assets/js/34.02ff5be9.js",
    "revision": "83e38bb345ea428e384c2c018706042c"
  },
  {
    "url": "assets/js/35.a4f63460.js",
    "revision": "d8ebfd63cf49a6870244f30a0006c213"
  },
  {
    "url": "assets/js/36.f4bbd461.js",
    "revision": "a13d2f8c8f670e97fbd47a64ac15d123"
  },
  {
    "url": "assets/js/37.c0a88e0b.js",
    "revision": "352d3da1cafcd4f295ab556cd8e85b29"
  },
  {
    "url": "assets/js/38.916299fd.js",
    "revision": "dffa93443c36a797f846211f7aad7189"
  },
  {
    "url": "assets/js/39.15400f2e.js",
    "revision": "cc554262cffaeb5e8281a24753a3b4b0"
  },
  {
    "url": "assets/js/4.cabd4306.js",
    "revision": "6d8e5626dca22871dff70a15b9911e7b"
  },
  {
    "url": "assets/js/40.91f6ded3.js",
    "revision": "ffb91c9f282e39ad7f0fde30a1950097"
  },
  {
    "url": "assets/js/41.cd81d341.js",
    "revision": "7b2d799f73411db55f7a098d9db9726b"
  },
  {
    "url": "assets/js/42.85d8ace1.js",
    "revision": "bba2a2395642975e08638f3dbde68519"
  },
  {
    "url": "assets/js/43.9e274d89.js",
    "revision": "45d00081c96ea77c535e58da5795a674"
  },
  {
    "url": "assets/js/44.95d55ba2.js",
    "revision": "e19825888f1f7c9870ff5df5b6d7203c"
  },
  {
    "url": "assets/js/45.54614958.js",
    "revision": "bd3a477fc0a6a5c0ff02e6534657faae"
  },
  {
    "url": "assets/js/46.22f10588.js",
    "revision": "7b6a85b1689b6d37ef3e7ad55e9c3232"
  },
  {
    "url": "assets/js/47.d1fb5d17.js",
    "revision": "6c3148df76248e1cfcf27b310f06bdee"
  },
  {
    "url": "assets/js/48.da2064c1.js",
    "revision": "771d696af881655b24b9faa39d350ecd"
  },
  {
    "url": "assets/js/49.12dac0cd.js",
    "revision": "0316a92d5fc3b685ac470a409be8b903"
  },
  {
    "url": "assets/js/5.d8baf88d.js",
    "revision": "98c06ddea9f0a8b373734112657931e3"
  },
  {
    "url": "assets/js/50.f796ea23.js",
    "revision": "3e8bad96648f473ae711dbd1f5a5ed15"
  },
  {
    "url": "assets/js/51.c1c996be.js",
    "revision": "912f16a63afd529096a700948582667f"
  },
  {
    "url": "assets/js/52.be2b844f.js",
    "revision": "450335408b6053342a4bb3f34f31ea10"
  },
  {
    "url": "assets/js/53.2f0c9577.js",
    "revision": "92e1ad12154f490a37bac91c3cf313e1"
  },
  {
    "url": "assets/js/54.162d5232.js",
    "revision": "f0c1d6cd2d0e271ed3aaa0f6aeecc9af"
  },
  {
    "url": "assets/js/55.27ef0f71.js",
    "revision": "6d20ce93f1179f911b0e668180825a96"
  },
  {
    "url": "assets/js/56.ef5af784.js",
    "revision": "389e5b2aa2c974ee05bccd925ed61ad5"
  },
  {
    "url": "assets/js/57.0a6e4865.js",
    "revision": "2fde41f33d6ce44f394a09c5b4f51df9"
  },
  {
    "url": "assets/js/58.e6cf4dca.js",
    "revision": "58c893f50f41051564457de0ddcada05"
  },
  {
    "url": "assets/js/59.b560a0e9.js",
    "revision": "aa337847f9bf3aa65a6eb2fbe5f6fa66"
  },
  {
    "url": "assets/js/6.a85a54e8.js",
    "revision": "1f527c8442ddcfd433d6a547b3f1b860"
  },
  {
    "url": "assets/js/60.e9c548cc.js",
    "revision": "6334418deca75980478e89a0d793d890"
  },
  {
    "url": "assets/js/61.5aa89c62.js",
    "revision": "6a91c4c92e98e2e214124d184e7ac876"
  },
  {
    "url": "assets/js/62.5cc3f4a7.js",
    "revision": "a9fafab891c0a95bb3d6f94aa4d1f838"
  },
  {
    "url": "assets/js/63.18fed42c.js",
    "revision": "36b6bee2ef2519db769e2a790189fab1"
  },
  {
    "url": "assets/js/64.4cb541b1.js",
    "revision": "4ebddfb81abbce97e343cecd84a6180b"
  },
  {
    "url": "assets/js/65.548d965e.js",
    "revision": "375211c8ea33b7a9cb157c504f1e1a8d"
  },
  {
    "url": "assets/js/66.2399ebb6.js",
    "revision": "f43eace773f4cdd31e6df7b37255d465"
  },
  {
    "url": "assets/js/67.dd487742.js",
    "revision": "6db876736551b9bd4984dd8ad23c7db6"
  },
  {
    "url": "assets/js/68.f8cab515.js",
    "revision": "f9b5092952b84fddae3277c2904fb385"
  },
  {
    "url": "assets/js/69.21b47750.js",
    "revision": "4762bb2aa8179f7b83033f3aa248c807"
  },
  {
    "url": "assets/js/7.a2afca57.js",
    "revision": "db9cc7cf1d56c4a45fce56dd3bb70ba7"
  },
  {
    "url": "assets/js/70.d5b9e703.js",
    "revision": "347f219ebcad9a76bbb15d039c594049"
  },
  {
    "url": "assets/js/71.b19813e1.js",
    "revision": "415eea39b2180a77724dbe9db19d7979"
  },
  {
    "url": "assets/js/72.921b6f29.js",
    "revision": "71e41141baa5efbd99f19ea872e36b3f"
  },
  {
    "url": "assets/js/73.ff1b112b.js",
    "revision": "372ed2610c2cb3408cfc31ed0493957e"
  },
  {
    "url": "assets/js/74.e1194f4f.js",
    "revision": "98301028668d691402183891ae23b89d"
  },
  {
    "url": "assets/js/75.b4f47b2b.js",
    "revision": "da5300db958199d40f6232a7aebdc122"
  },
  {
    "url": "assets/js/76.bfcc5639.js",
    "revision": "2047de3a5d8672e11109b82aa4acf796"
  },
  {
    "url": "assets/js/8.14f8a4c8.js",
    "revision": "86827b43f64660a1b6054e4fce867f36"
  },
  {
    "url": "assets/js/9.1e6ccf2c.js",
    "revision": "4518695ae1f4cd8cc5b24898428256c8"
  },
  {
    "url": "assets/js/app.85521de8.js",
    "revision": "973a56786f8877827ea847cf036d73fc"
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
    "revision": "33c2710bc6eb918242706027e8716990"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "d0ce1dd368b70c7bb269908bef178938"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "73e0d887c132daf1a71c8eb5bfcc73c2"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "5c188fc6be552aa451162520c63d9780"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "fe867c380e555675361251f06fa87126"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "271be192df2e9670beff36c0cefa3983"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "a236716cde9a23715c35615c658290f4"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "6121de25086dd0630fcce6fe9d51122c"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "5be99dd360cc3e9144e06b17b213b2c2"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "bc04b8b77b5e7af6b5cab3ef8546b9f5"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "888c4e86df0de49eac1075f1a76f4f95"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "34eddbe6459a34659c2326e5bcc0099e"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "51301eae926d696478557ca119423a6c"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "06ba20eaebae5a70f0941b59c656e700"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "5f2516034ec5e6508240104d5da46982"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "89cf4592fbe32c050ee7e7505697d0f0"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "cbce1bfb67e2b6dc2512720110e0d32d"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "0aed01dc8f0cb1cc79e2527e5600d6af"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "357a3a2d8607898ce3414bc969a1dbf3"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "e3d3c866eec182f21912425b73d7b94b"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "a2cada48cf69ea39fc13840e6ec709cf"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "86f54a4cf237c9295675e53e6ae9d8dd"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "d2e11f9c176f0cc3d44bd4d56a39155e"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "bd3f4c74d7679d2db98cbfd835397db4"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "d4d6b6fbf8037b80f8b91dfd2b499e99"
  },
  {
    "url": "interview/index.html",
    "revision": "9a882642e2913805319c731491312851"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "ac46f46b74f00690f3317712f3127459"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "b8d4edd2bd0c8c3a369cc05487793099"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "2de8d7ca5bd5c352d32fada85615830c"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "a6338c52a858933234aec7854bd350d8"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "e827ae644f0d34073fb4b0ff9999d15a"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "fc4dc607ef695c82f9c311d8715389cf"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "20d1b1a24deff1de0d4075e12ef40226"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "bbd7fa80ac83f92670bb462bdaa64e9f"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "035b5c84c3444a1d4d7b518db7afc2aa"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "af4d11064f951ed90abab6eb75feb420"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "470bb4b80586e688811e291ac2c413d6"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "a03690414b7e2f222bc620d2ed60ae11"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "771e270384a5c91ddf13927f413108c2"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "e91db5c34dde09e09741feeb7de171a4"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "e77c8d4b41e6bb45fa83faf45e22db0c"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "3e4afaf27562314b69844af024ccbb96"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "c75b79dacf94dca04b2073fb1106b783"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "1ce571db4a4bc3f5854223ed1f81ab51"
  },
  {
    "url": "tool/index.html",
    "revision": "9b11718244e7a8303420440cb0d40573"
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
