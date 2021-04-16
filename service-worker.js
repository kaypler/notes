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
    "revision": "d28f09a5c7c3723d33ea50517d2b17e2"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "6787a8940599d093ad3521cf097aca64"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "f89036a343ddb3ccedf7efc8b1b82358"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "9fc55ba56ebe9f5895b8cdfd81b56f79"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "88e1703c7ef685a6c4b9d7062f4027db"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "22770853df8bf10c39f4d9fa07a44c9a"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "c28a1c0bd879705189610f4f0abe9f60"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "ee324447cdc94aa080a23181b026ca77"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "c11e080f11f7b685c74c78a15444c662"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "78e9f5886e3fedb3a04bae563f4a4f25"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "146883c676d609b7a0b57223b64f78b7"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "40fad9a053d0f974b5b08371c0549f2e"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "21202c826c4cbb7063b90d043cc094a1"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "befc777219f40d8c02be61fb0949b191"
  },
  {
    "url": "algorithm/4-leecode/binary-search.html",
    "revision": "525044939c9aea7d28c0417dc8ce6e6b"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "e061e6c87f223d19ad5d971cbf541996"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "10c253f4c3092c4885c686066747a20b"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "49bb790bc7ae2bb33f6629d43fa676e4"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "5a0c06e595062ac69a03e2b669c3e89c"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "0e0fb15eabc68a229d5d2c1a0e5bf236"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "327c71e301264911a160653589e3f8df"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "49e1eb3829e3cf956b614f55952c22f2"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "ccce456a98121da38e8891d334a388d5"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "4d24cc01e0fb4a8642e617f49ff5efeb"
  },
  {
    "url": "algorithm/4-leecode/tree.html",
    "revision": "010ec3802a2c479c280a5319797db256"
  },
  {
    "url": "algorithm/index.html",
    "revision": "33b8268f5001dbc292705073ca4ac5c5"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "485533e97a742eac8138ca3a2456b9d8"
  },
  {
    "url": "animation/index.html",
    "revision": "74d1ef2bbd3fd87f75938baa9bebb59d"
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
    "url": "assets/js/17.4c1daa4f.js",
    "revision": "2ed40c6245bd5bb54e9179b73ae609de"
  },
  {
    "url": "assets/js/18.6713902b.js",
    "revision": "47ad331ea37e29dc80dcdf717c15be54"
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
    "url": "assets/js/21.6a3bf5c8.js",
    "revision": "a65f1ad998dedbcfb538ad4ada4e2220"
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
    "url": "assets/js/28.54ef9a2a.js",
    "revision": "f58615458ad6ced5962dc71affbddfbb"
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
    "url": "assets/js/43.b8d2991b.js",
    "revision": "0b3d7f3cb040d59844adf0cf82663bb9"
  },
  {
    "url": "assets/js/44.34899aaa.js",
    "revision": "67e37c57928c39d404e41500a02b90ea"
  },
  {
    "url": "assets/js/45.34a05a31.js",
    "revision": "6531cddb1d9616070ad3dd805574bbd8"
  },
  {
    "url": "assets/js/46.91de5d01.js",
    "revision": "c2556cb29bb91c62df61d21a60457a47"
  },
  {
    "url": "assets/js/47.99610de4.js",
    "revision": "982ea8d0181aa49a0fe9ae42e5dcfe7f"
  },
  {
    "url": "assets/js/48.eb5ec556.js",
    "revision": "ea5c667cc8aa83a12e13b25869719f9d"
  },
  {
    "url": "assets/js/49.887b277e.js",
    "revision": "be5288be67eb6d545225b7b673d6a126"
  },
  {
    "url": "assets/js/5.515e7edc.js",
    "revision": "9df1fbb4ef3fb59b35a023906c89fdcc"
  },
  {
    "url": "assets/js/50.d00166b6.js",
    "revision": "4ab7591750c2bcf8f4c7db9567cdd3e7"
  },
  {
    "url": "assets/js/51.5af57c9d.js",
    "revision": "dad1fc254e414250f4ecb8342a8fd029"
  },
  {
    "url": "assets/js/52.f2e01305.js",
    "revision": "6698904ee120398a004562d4f1060845"
  },
  {
    "url": "assets/js/53.b94c6520.js",
    "revision": "636c442ec9923a985298e26c8c8392e8"
  },
  {
    "url": "assets/js/54.d5bd718b.js",
    "revision": "03f3d64cfba48c634550b97106f24e28"
  },
  {
    "url": "assets/js/55.0da320d7.js",
    "revision": "bb2f4cffa01c64283338e1232cebd748"
  },
  {
    "url": "assets/js/56.ad81d7a8.js",
    "revision": "402d1660ebe1069a279a1fd104cf8766"
  },
  {
    "url": "assets/js/57.4e252e99.js",
    "revision": "babc1d30bae77211fd01293392843bd2"
  },
  {
    "url": "assets/js/58.465f1c7c.js",
    "revision": "7a47b78007d828056953cf092e1e615e"
  },
  {
    "url": "assets/js/59.eb78891f.js",
    "revision": "653c4cd04b91d99a29c387550da9fcab"
  },
  {
    "url": "assets/js/6.e4d90a79.js",
    "revision": "cdfa54b32fbac80d54054fc496dc5c9a"
  },
  {
    "url": "assets/js/60.e3530795.js",
    "revision": "0dadf82746b4d8e5f510efb2074a4189"
  },
  {
    "url": "assets/js/61.bab15800.js",
    "revision": "86b32fbd4b75700ed6bd8fb8b012da6b"
  },
  {
    "url": "assets/js/62.f8f61f1a.js",
    "revision": "b11fdbb23aac1ad3fad39a03f457037a"
  },
  {
    "url": "assets/js/63.6218aad9.js",
    "revision": "e20e21795c636c3a8bb3061484bca2fa"
  },
  {
    "url": "assets/js/64.cef74c4c.js",
    "revision": "5c772310a7b368ab118af758ade46257"
  },
  {
    "url": "assets/js/65.76106943.js",
    "revision": "29bbd50caa500e666448c94b9694fea1"
  },
  {
    "url": "assets/js/66.377be822.js",
    "revision": "096acc9fa3f52cb98b1a545c58716b50"
  },
  {
    "url": "assets/js/67.2cfaa29a.js",
    "revision": "67ef37027a881f81b6b96a369b7c7304"
  },
  {
    "url": "assets/js/68.ebbca9b8.js",
    "revision": "35fbaad9ca39a1411fbe64fd7f5ac464"
  },
  {
    "url": "assets/js/69.6774be73.js",
    "revision": "602ffd9b7227824bb8e6e4d75f172650"
  },
  {
    "url": "assets/js/7.08000f87.js",
    "revision": "53a65a481deb3c58036cf53b91fcb18e"
  },
  {
    "url": "assets/js/70.8ff7e8d8.js",
    "revision": "af05d537fba29deeab5a9e9681d6a57a"
  },
  {
    "url": "assets/js/71.5614bc8b.js",
    "revision": "dbd1cc94840295859dd303a4e56e577d"
  },
  {
    "url": "assets/js/72.20ecc2ba.js",
    "revision": "2596bf1c467489ad597e534530215322"
  },
  {
    "url": "assets/js/73.52ec5ec1.js",
    "revision": "7d4aca8a79500a44b106e26944a4b6eb"
  },
  {
    "url": "assets/js/74.b576b74f.js",
    "revision": "3f2a9606f17e04d1cb75c17e5d59cc73"
  },
  {
    "url": "assets/js/75.24fd410f.js",
    "revision": "34ec0a1e902dfe8dc0c6b5948114b4fd"
  },
  {
    "url": "assets/js/76.8f4e1a2c.js",
    "revision": "d746db1e1615bfd86b74dbdd71c9e5a9"
  },
  {
    "url": "assets/js/77.559a6d82.js",
    "revision": "5f4da737992c645deb1bb732e2023f02"
  },
  {
    "url": "assets/js/78.3bc194c0.js",
    "revision": "5367c8b5f715994dc3af14864da1f855"
  },
  {
    "url": "assets/js/79.bb6ce8c2.js",
    "revision": "191e970d3ad7b7404ec2150644885892"
  },
  {
    "url": "assets/js/8.14f8a4c8.js",
    "revision": "86827b43f64660a1b6054e4fce867f36"
  },
  {
    "url": "assets/js/80.82ed8ff1.js",
    "revision": "edffd7c66fc0556d1d599560b9ca0bb2"
  },
  {
    "url": "assets/js/81.d9662757.js",
    "revision": "965ee6c17a5fd7f00ba62fddded6dba7"
  },
  {
    "url": "assets/js/82.bf835f2b.js",
    "revision": "3ca1eb38f9efe8f1bb5a564ae6c67cb3"
  },
  {
    "url": "assets/js/9.1e6ccf2c.js",
    "revision": "4518695ae1f4cd8cc5b24898428256c8"
  },
  {
    "url": "assets/js/app.09d3d4c5.js",
    "revision": "94737ffb8b2d2f2d131a7582d5470af3"
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
    "revision": "003899401ae207afa5a6ea39d0a23ec4"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "3e80b2ffeda7635320c75d2705065f7e"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "ee00825d620ea9619874426850096b67"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "b1befb6c3c779410a41ed9174dd2e82e"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "c9a0dd60e973534f10192ec9263905c2"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "321834ccc893ef46384b197522232a90"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "0bed99fcc74779deb583343d70dc94e9"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "d1464f89770aaba4b2e173f01361860a"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "f5673ffbcf844ec07e827eabf2f5fc50"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "c970dfe9adc94eeaae0038e93be96159"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "138b61896c2500529f443e7ee982e43e"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "bd83e1f8e98645fc9e0227c6e07a8660"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "9617a15328c6293578ba60d86c024273"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "63cd04446652021c9b1cbd641aa56cef"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "c5c065fae69a6cb90bf92dc3f7b9d542"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "8b1d5856f728bd991ae4139ee64c902c"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "b5054e93d5a95535771d30c64d541c6c"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "21e255cb64fd0eb07e195312ab8957eb"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "ab7cd2e531a0061263f175d46d7c0fd0"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "7112898507f5fa1481711aa32bbd9db4"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "e0f82226fdbfa278a651fab5f640f470"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "c102bb8621b32387d5669cf7747e176c"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "4e167a37753a6d5a1e90d72116d9fba8"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "2cc4e15959358f4bb488d2e7bc33390c"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "11f1e19f939a9a16f0387fbcd9e6d362"
  },
  {
    "url": "interview/index.html",
    "revision": "fac36223cc9ac6e5035837d6d4a96449"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "fd79d18bac6bba73fd51a2406418e790"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "dbe655d8e4fa6bce341a08323354ca9f"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "267a1487c67fc0e68141de279d25feee"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "92afce23e136a0f16c24fd276a89c47a"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "b1ec007a2174ceecb515f3aee5f12edf"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "fb014eacd6c834409f66bba74e6f9fa1"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "dc32265cc8bba20b411e5c691ff681f9"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "7631035b0a31cd5bc59d92b707a2e29e"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "1cc6d85d822d227c1a068c0e079ac623"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "e828dc7dea7656761ddce7de586dbcf0"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "731b2e03a4af110d8c4f1e345305b768"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "1e15d10b18df5607075be1684714d08c"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "8d88df8aff50d1bb53995e98dc4ceed1"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "04bf42da926584427330d8ad78054754"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "dbe44054bd0f4ed9efd1457d4fae3acd"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "3d70a71e82b35e6e91a485c6e7a009ce"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "2d1ed510a969ddd1db131090181a84a1"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "9563f4bf28e511a610204ee439103c8c"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "aaf39ac0f42e5d3779bcf7dbf84d3786"
  },
  {
    "url": "tool/5-other/open-source.html",
    "revision": "0282ccbdae4397c7a032b2fc2a889603"
  },
  {
    "url": "tool/5-other/vscode-plugin.html",
    "revision": "fe70ca44213b8b05f3845f58b2468adc"
  },
  {
    "url": "tool/index.html",
    "revision": "9e1583a97fe6395b31485e16c8d36054"
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
