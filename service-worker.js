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
    "revision": "b3283e0236fdfffe2162b3460d814a41"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "d11c0249825479ffa5c84febe6325e70"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "6b54ae1bf94b31cf67092bb1cf5e124e"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "baa9189ac41095860f63901987238d3e"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "85cbf8608a93291a9266467acefd54a9"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "edb5cde30a0d98caa4a963a87e407a95"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "25f4eec815b13ab0210e3239e2c449fd"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "ceb19466d3764f17498d809e09edcffb"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "95322412961926c45344c38b5366ae03"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "f2b600ca6693782aa5fc4b9a23d57532"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "eec33c2e5ba14b45a594749088f7e3bd"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "619b69474fdbe13d084345d90a34fa86"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "f97a39d468e078fdca0098c6755674d0"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "6830a01ca60fc052ab44f5e11fae650b"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "4ced0a7456b19b8aae8ff4f287dcb52d"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "ad66a187b5fcbd5a33dcb083d2fbdc85"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "8e1c97ce523e843b62fd9d52d53acdc5"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "2c365e6f2f25b401d7fa6a87948e6e79"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "8bafc4fea59f8e29f0092320bf7fb866"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "069dbabaef018ca3e141f06c7d0c9f06"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "acf6df3049011e78049f200d4de857bf"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "e6805fd946ce4b3f0bef19e99f289ee7"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "b52a8e15c2e691caf364000939a6a372"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "253d1422a2d9f04a9da5a8582e1bb9c0"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ec44cca87b716612ca5f97e21183dce7"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "a313215cde8a27cdf2bc597e553e4b09"
  },
  {
    "url": "animation/index.html",
    "revision": "cde4ea385dfa911de26233c1122d06f9"
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
    "url": "assets/js/11.6626a0b1.js",
    "revision": "a5f5fa714c044ec85c7251aa41e93123"
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
    "url": "assets/js/14.03185c82.js",
    "revision": "f929ed8856df27caca1c4f4db9f3ab46"
  },
  {
    "url": "assets/js/15.4dc3e781.js",
    "revision": "1965b98da015478f9b17148fe275a9a9"
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
    "url": "assets/js/28.8d0cea5d.js",
    "revision": "9784aac07868b69be8643c48e284da3a"
  },
  {
    "url": "assets/js/29.22b1e5a6.js",
    "revision": "b30f99fd29f65aaa42151669d9a7ac9b"
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
    "url": "assets/js/36.be727e10.js",
    "revision": "34ca805424d4caf0c693656fa780640c"
  },
  {
    "url": "assets/js/37.d4f124a1.js",
    "revision": "d561cb0611fc8b04a086cfa596a721b9"
  },
  {
    "url": "assets/js/38.e3e9bbed.js",
    "revision": "6478162d2fc998ea2ea87eac17dacff3"
  },
  {
    "url": "assets/js/39.837eb285.js",
    "revision": "36648050d2d6e126650b8b333fd57821"
  },
  {
    "url": "assets/js/4.7b576185.js",
    "revision": "0d0d6abb58897fa67160578c2d8bdff4"
  },
  {
    "url": "assets/js/40.817a7c64.js",
    "revision": "f4030da2b1344aa8842f66a7f775fcd5"
  },
  {
    "url": "assets/js/41.8621bcf7.js",
    "revision": "96b3781299b7d046304724f53d925a99"
  },
  {
    "url": "assets/js/42.c645412b.js",
    "revision": "1c91831bc353292d571de877938726af"
  },
  {
    "url": "assets/js/43.b640c9ce.js",
    "revision": "08f00da554225c3b255a80338f857668"
  },
  {
    "url": "assets/js/44.a2234e60.js",
    "revision": "a46e938b48dd178e124f7f9fa8b88181"
  },
  {
    "url": "assets/js/45.67dffeab.js",
    "revision": "c1d522836d6eb8561f4d9d8dc6aeb90c"
  },
  {
    "url": "assets/js/46.34b4fecf.js",
    "revision": "f841dbe83f3fe0ef8af7dafa756bdfa9"
  },
  {
    "url": "assets/js/47.b6ff95e5.js",
    "revision": "8e8a9036b48b51f9a000e696783f9fc9"
  },
  {
    "url": "assets/js/48.7e848d52.js",
    "revision": "72ff4afaf9ec8cad19bcf2ce3b469ad1"
  },
  {
    "url": "assets/js/49.5ceb1d36.js",
    "revision": "4e94939061bce67c6540dc36c42410d4"
  },
  {
    "url": "assets/js/5.2206d28e.js",
    "revision": "fa862a929daf8d59681d32b6e4a203ca"
  },
  {
    "url": "assets/js/50.65dc4d2c.js",
    "revision": "5943483325ba2f38aceb7589a859bebe"
  },
  {
    "url": "assets/js/51.998b5961.js",
    "revision": "dd2916482be8deb89e89ff1b6535c84a"
  },
  {
    "url": "assets/js/52.5cb932de.js",
    "revision": "51085ecd38c578f372f17a771058ada9"
  },
  {
    "url": "assets/js/53.f710625a.js",
    "revision": "1e407a6dd469be0cad93972395b6b367"
  },
  {
    "url": "assets/js/54.b3f87d06.js",
    "revision": "e672a1a4b49bb38c4db3a2c6e20a2ee1"
  },
  {
    "url": "assets/js/55.e704e252.js",
    "revision": "8a97a2c29fac7439c0cd61ed3490d525"
  },
  {
    "url": "assets/js/56.8e7ebf22.js",
    "revision": "9bb4e0f85189e68697ba9487845afee7"
  },
  {
    "url": "assets/js/57.ba02d828.js",
    "revision": "e35fb856bf3265752741733151b3d98f"
  },
  {
    "url": "assets/js/58.a2815847.js",
    "revision": "beb858c1f260df44e5fa1decdd8a52d7"
  },
  {
    "url": "assets/js/59.0bd69b29.js",
    "revision": "689330ff2c853d5c9083c9bcac325072"
  },
  {
    "url": "assets/js/6.954f1da4.js",
    "revision": "a4df78f3c6cad6cfadd1810649c3df5d"
  },
  {
    "url": "assets/js/60.d7bbf177.js",
    "revision": "8bc50ca518266d82830f70333ab9a91d"
  },
  {
    "url": "assets/js/61.83e104fa.js",
    "revision": "12ff3eef7896837b1b50d308206c15c4"
  },
  {
    "url": "assets/js/62.d8bb6299.js",
    "revision": "c7e9a3c8dfa81b8f1b0327a74c25370d"
  },
  {
    "url": "assets/js/63.517e08d6.js",
    "revision": "2ae6ad48ea16ea5d106546d531e29f7b"
  },
  {
    "url": "assets/js/64.9f607d99.js",
    "revision": "b3f646eeb6b394940550ed5f78d70dc7"
  },
  {
    "url": "assets/js/65.f13ec9a3.js",
    "revision": "e45137426e87636cd7f91bf095343845"
  },
  {
    "url": "assets/js/66.e11c63c6.js",
    "revision": "e5c7f2e95979dab93ec995f17460e2e9"
  },
  {
    "url": "assets/js/67.19f9a965.js",
    "revision": "6ac759b1a4a35e4cf7e2a0b5599667bf"
  },
  {
    "url": "assets/js/68.8fa8d78f.js",
    "revision": "91c734a83a9c0128f39ee9c5b9cd8b78"
  },
  {
    "url": "assets/js/69.689bdef0.js",
    "revision": "172c40e46235302c5a221ad42e524976"
  },
  {
    "url": "assets/js/7.e7a42ae7.js",
    "revision": "9648441d3a28cea81f35da3ba7e97a48"
  },
  {
    "url": "assets/js/70.fae73f78.js",
    "revision": "4975a35ac3511f107e408fde63c92293"
  },
  {
    "url": "assets/js/71.ac46196b.js",
    "revision": "4fb5002e83c219a6fc6ffdfa80043835"
  },
  {
    "url": "assets/js/72.5d051f1c.js",
    "revision": "c08aba9ac73b01b5dc38192c63d2bcec"
  },
  {
    "url": "assets/js/73.fad5d369.js",
    "revision": "01b65ea35d8fd4a8cea99d955be6eaf5"
  },
  {
    "url": "assets/js/74.0475d55c.js",
    "revision": "2dcb7defe553773d65fb7ab02c234a86"
  },
  {
    "url": "assets/js/75.b14f138a.js",
    "revision": "1397fef788f0c9fb3111c83d9b6799a8"
  },
  {
    "url": "assets/js/76.1986ee51.js",
    "revision": "b111134f3aa47adbede85883d4ff654f"
  },
  {
    "url": "assets/js/77.9d4aa33b.js",
    "revision": "0d556105706cbb903e161afbfc5804cf"
  },
  {
    "url": "assets/js/78.aac66318.js",
    "revision": "d8726a34cbb3279cc296a53df00f6d7c"
  },
  {
    "url": "assets/js/79.ff8508f0.js",
    "revision": "2bffbedab559c7e39bd2f589f16ab775"
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
    "url": "assets/js/app.d124adbc.js",
    "revision": "cf330ba8d870735bedb39fa159b6ce5a"
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
    "revision": "27f9092ad6e849ff34373de6bde2db3d"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "597b74ef5dc49511e79d321f82c310f7"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "f90467666fcf2057b1ea5b98b4dda567"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "4eb24fda4fd56179c420f154b88163cb"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "f70e59514a24df70ac323e7f845d4058"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "57d3ad58e0948fff3e9a75818ad64c77"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "a9f706bae189650844610c0d77f4ac2e"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "17ef86c1c0b53154d69f22601536cca7"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "3465d6022d54451a15e07e22b1431835"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "57d3a6e4746a3d515a8f598fce6f2978"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "46137bcd6f4b9996a4437f1f9e8373b8"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "e735bdd079bb0373a7af4adab1e09cbb"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "df1e830284a7648accae3a1ba8402582"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "90cab54e6756bb32f3e8b042389f1d98"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "75eebf161651bdd058a9d3f9f2130e32"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "59b58683b22e3bd577720f563c3d70e4"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "e496275187dca95189c1534adbaf59a2"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "75956fdc4983efb715143b2fe734fdfa"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "a38e5088b13cb513e5a0c0e216ffab5f"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "6d56a3e6827f7328e0b9d9099c4677ab"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "55c5f974daccf6c747a2305b3ea50667"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "ec5a5d18858bc791060a56e3d73d1e93"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "11f69663d6eb0598621652277af9a37b"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "81e6bf9ad658f59929b3a260db859596"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "060bea5959b8c78e82bda302922158bc"
  },
  {
    "url": "interview/index.html",
    "revision": "cbf914a833f36e79cc979b73d4d0fe05"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "fcb960d3aca0a650597d70dfca2bf844"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "c0001876a7e480befaa40e56a12a87e1"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "4cca2ae8d45d0b3faecbff1d2b2a36a4"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "724f7ef995fa1794118dec10ca31cd1b"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "0fc87787c71609c7b4311d0af8c0b5cb"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "40121a77017c94885ad391501430f063"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "c14f0229e2d110fabdc67a002477fe06"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "acda1dd586eefd50c181a011e42feaa1"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "a6228e88c85bc2b60f8f1c83fe8ccb39"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "ab81fc115c3b01df0708632abba747b4"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "3f33074e0625df20383a3a8ba6b5c520"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "a30b0fb4e08404463e690000cfbe8b7a"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "64bd534eedd669666045b68c69fe8308"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "51cd40a1412b7a2b5f90545dd311f6a4"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "bf8277c01a72da3c14cd8daae568b3a5"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "2960d00e20012a034cd88a8bd2ea1ca9"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "52c7a737e96d1bee1c5e6c4cf99309ee"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "dee0c2c512b2b787c98e0a98baa9ba6b"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "8ad7ece30ad884392893a3c9e0db3041"
  },
  {
    "url": "tool/index.html",
    "revision": "f0f10ec9960b6bd0ff494bbdbf0a6740"
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
