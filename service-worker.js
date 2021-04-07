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
    "revision": "35478a7b9517fd23125e53eb7674d642"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "e83be8200c67780cd7932fbbbed7d8b6"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "d1b9c0de82ef08640179485d58594e32"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "9c6af5d8b8b4172da72d824673bfaec8"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "a1062c74536dec5cc9b513a782dad59e"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "959f521a0687b889cd304e39187505d7"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "03b5c78efc180f560413300771f8db74"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "2a30b5d1590caba061832116bd749db2"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "4e0473e8ef4fbc2c20f42fbf9f76e210"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "e5b925460a911902aad03000bb9fded5"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "bfb028c233c859290af9052bb646576d"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "9964b789e936ef93f352959695f99387"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "59a350e473cd9408039fae8e1d30df9b"
  },
  {
    "url": "algorithm/4-leecode/array.html",
    "revision": "24f559b2aa05b68125e504ddc4b89bbf"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "695e179d040b12c6e28b2472f99ffcde"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "30b547e427498d3e74093be71e8522c1"
  },
  {
    "url": "algorithm/4-leecode/greedy.html",
    "revision": "a8c79a04f2bfba2356bc6a95eb81ad44"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "281673afadb0d3a24ff3df09e912e878"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "750b69ed722c9d84606ac0c13d9455a2"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "f83243c4cd966863f19ddf804792fd8c"
  },
  {
    "url": "algorithm/4-leecode/palindrome.html",
    "revision": "8ea7550d6657edce4945915357333b3a"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "6d9ba5ffc5d71c19841f7cb1214a626d"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "55a8d0587f25992303f787b44c0a0e77"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f2ef4e4312d6c56d5017841f705806e0"
  },
  {
    "url": "animation/base/route-transition.html",
    "revision": "d3a1fcc105e4209e0732190ca347521d"
  },
  {
    "url": "animation/index.html",
    "revision": "3125d8cec88acf0cd805869e7884fb38"
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
    "url": "assets/js/10.0f78dba4.js",
    "revision": "0c9b2a0ce1111c3c8f1bd21da8036209"
  },
  {
    "url": "assets/js/11.5c2310a4.js",
    "revision": "ec115a5b68b0c08a2dc35958cc275961"
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
    "url": "assets/js/14.2d92a92a.js",
    "revision": "6a414a1e26d3022523c747a21b16e90b"
  },
  {
    "url": "assets/js/15.f1477dba.js",
    "revision": "ee7687a9d5667ce09fdbea6818698686"
  },
  {
    "url": "assets/js/16.e0ea8124.js",
    "revision": "1847001392cdc97537e586c3bf007b9e"
  },
  {
    "url": "assets/js/17.481cdffb.js",
    "revision": "bb902b2feee32aa4341abcbb2a0d327f"
  },
  {
    "url": "assets/js/18.88f805c9.js",
    "revision": "e120acbbfdc63816c9921a2a47d2c6d0"
  },
  {
    "url": "assets/js/19.5931e10a.js",
    "revision": "27576d2bce0919c28c5331b99916c7f4"
  },
  {
    "url": "assets/js/2.2f2324fe.js",
    "revision": "027a5f58c4a9ffc7e903e5df06ae6bd6"
  },
  {
    "url": "assets/js/20.21ef1632.js",
    "revision": "f2eb2afd38d726e9aaa7e5bb41886305"
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
    "url": "assets/js/26.12a808f6.js",
    "revision": "8b0608d5d0cd59324b40da1af6221663"
  },
  {
    "url": "assets/js/27.dacc5127.js",
    "revision": "e6843181d812dba9536237d0752db31b"
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
    "url": "assets/js/3.a7d05428.js",
    "revision": "f08830e44563ae6a2d43d83014eabaa6"
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
    "url": "assets/js/32.939ffa6c.js",
    "revision": "d38e1a0deb501f9376bd0abaad80012a"
  },
  {
    "url": "assets/js/33.38378a11.js",
    "revision": "e91bc4398eca6afe751f530c8ed9a57a"
  },
  {
    "url": "assets/js/34.6991b665.js",
    "revision": "0068fd04494948292629a5f06f3fe193"
  },
  {
    "url": "assets/js/35.25243eff.js",
    "revision": "3682a20121fac8e19dd9d9e53f2068ac"
  },
  {
    "url": "assets/js/36.1cf92ee8.js",
    "revision": "fb5119060c7555d238eaefc6d2d0af70"
  },
  {
    "url": "assets/js/37.ae5d5bc2.js",
    "revision": "a5a9f4d7bff8b252d722aee50fd556ea"
  },
  {
    "url": "assets/js/38.9f198221.js",
    "revision": "21af568337f3bdb1146e785cc59b1422"
  },
  {
    "url": "assets/js/39.3540a084.js",
    "revision": "5dd8f72834181a561adabd32d6a0918a"
  },
  {
    "url": "assets/js/4.cabd4306.js",
    "revision": "6d8e5626dca22871dff70a15b9911e7b"
  },
  {
    "url": "assets/js/40.c28b8525.js",
    "revision": "038c8fc89225850566568d1c0e9846c5"
  },
  {
    "url": "assets/js/41.ccebe863.js",
    "revision": "683791bfc713cae4a8c08c4727c609e0"
  },
  {
    "url": "assets/js/42.f9b90e11.js",
    "revision": "b017c2fa864c14cd6ebae77c347d5060"
  },
  {
    "url": "assets/js/43.3ba6d194.js",
    "revision": "edd9ea85106435902199a331c85541f5"
  },
  {
    "url": "assets/js/44.16b8e4a2.js",
    "revision": "8092b4b19a12ece727f4bd43df1615b8"
  },
  {
    "url": "assets/js/45.d222767f.js",
    "revision": "0cb893bc3f945c10857bd92f85622438"
  },
  {
    "url": "assets/js/46.5d2c76d9.js",
    "revision": "3682e87bd3eee78a970dbb3c855d4884"
  },
  {
    "url": "assets/js/47.aff26309.js",
    "revision": "6a9cdf20c7359e6cbb8de6baa720ab48"
  },
  {
    "url": "assets/js/48.76342314.js",
    "revision": "1c8acf0c56dec32e463e5897118eda22"
  },
  {
    "url": "assets/js/49.1151d680.js",
    "revision": "1e44f45b2dd2e7119f9ab880f0a054d9"
  },
  {
    "url": "assets/js/5.274b5c60.js",
    "revision": "4f8122fde451d55476cb18aa012d6736"
  },
  {
    "url": "assets/js/50.e5490ce9.js",
    "revision": "691f1934004e2fc18d38341685f95d63"
  },
  {
    "url": "assets/js/51.a5c23a0a.js",
    "revision": "71ad9287aaa08ca74e8dcf6bf67d33e0"
  },
  {
    "url": "assets/js/52.5d8d8a1f.js",
    "revision": "30df24687ab1762f590d35e86c0cd7c0"
  },
  {
    "url": "assets/js/53.1a2f6c61.js",
    "revision": "66043faba76cd8abdbd91861a1490521"
  },
  {
    "url": "assets/js/54.5f42081c.js",
    "revision": "f0bb1097bdbb582548d137d36a02ab15"
  },
  {
    "url": "assets/js/55.33f455b7.js",
    "revision": "abe82d590b9ca65bc9fdb9cfbc434425"
  },
  {
    "url": "assets/js/56.f7c17f19.js",
    "revision": "1882b58be22e5ab426ed69aeb1c684f0"
  },
  {
    "url": "assets/js/57.a1f6c54d.js",
    "revision": "fbfe48bfb9e3921397094acdd0ffe76a"
  },
  {
    "url": "assets/js/58.b8ca86de.js",
    "revision": "04c2f4c1187e03a85f0f8bbe36f45cc6"
  },
  {
    "url": "assets/js/59.4c936eaa.js",
    "revision": "e9dc5bcc7ceaa780b211c474a96088c4"
  },
  {
    "url": "assets/js/6.6f1ab499.js",
    "revision": "a9069a7d27549247e9d7d3285bdb8f3f"
  },
  {
    "url": "assets/js/60.47989e74.js",
    "revision": "a8191d38b66f7db7c89f38779433d014"
  },
  {
    "url": "assets/js/61.9e191165.js",
    "revision": "34e47ccbf47de3f2fb5fdd6b82446453"
  },
  {
    "url": "assets/js/62.1411ae24.js",
    "revision": "20ff77a187fcc954b2af5c641b842abe"
  },
  {
    "url": "assets/js/63.16e5433b.js",
    "revision": "438918ea55955cce1e579631dbab7571"
  },
  {
    "url": "assets/js/64.1ee8aa59.js",
    "revision": "609d2cd435b6ff51d86d25447ffc83c5"
  },
  {
    "url": "assets/js/65.09d6531a.js",
    "revision": "f9f0ec15b754cf21687b278eb488f427"
  },
  {
    "url": "assets/js/66.e143e632.js",
    "revision": "1689d9b1dc5142102d11f6710d65fb70"
  },
  {
    "url": "assets/js/67.48ccda57.js",
    "revision": "2e15e5e1119f3304a5046ccc7c69d5dd"
  },
  {
    "url": "assets/js/68.c0b79198.js",
    "revision": "29f0415239a5e22c237a4d9fb5c6efe8"
  },
  {
    "url": "assets/js/69.cad98a1d.js",
    "revision": "dbc751d4cb6ec4984840f32dd7478a41"
  },
  {
    "url": "assets/js/7.dd39fd11.js",
    "revision": "175c4a8a6b0fd074a9dc3bfc22e47ab0"
  },
  {
    "url": "assets/js/70.4e98a483.js",
    "revision": "dec9cd779b07040d679494ea5d51fbc6"
  },
  {
    "url": "assets/js/71.22b5a9c8.js",
    "revision": "cf30070f64cf2f30fb603f5468abeb0d"
  },
  {
    "url": "assets/js/72.91ed8794.js",
    "revision": "161a7d9058a7d716f2fc7e63a2a569b4"
  },
  {
    "url": "assets/js/73.27abaf20.js",
    "revision": "a19712fe8a887a6d19c129ce4caf9ebc"
  },
  {
    "url": "assets/js/74.31f8cead.js",
    "revision": "a78291b49eaad59f471949705bee6d05"
  },
  {
    "url": "assets/js/75.c1fbd5d9.js",
    "revision": "f28c129b86ece299f2d19d75d2c19cfd"
  },
  {
    "url": "assets/js/76.3c63b3b5.js",
    "revision": "6b2012f83fc42e3e96ad9b722c3fdc32"
  },
  {
    "url": "assets/js/77.abfcfa26.js",
    "revision": "0a49459fc35b193dbae983e3edfdb6c3"
  },
  {
    "url": "assets/js/78.e429be1e.js",
    "revision": "b1c99edcea27a3374cfbebc6e0709b6a"
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
    "url": "assets/js/app.a16b85b2.js",
    "revision": "9914a93de2a7f50eafa4b4006d50b689"
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
    "revision": "a8433bdf187aea5ddd9050c120518f32"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "a487a971336571c425bd89ca52c7111f"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "456328390ec30b7d0659c58479f522a8"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "29ace44fab4529391700b4238c826c5b"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "7cc4377d60943315647a07abfe1e1ce2"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "7ffb923456cefc845102812c60cdbd91"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "051984359e4f8333b777b759f5d6dab6"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "f7dce9f4cd7d0d9c54fe2cb3fb0953e5"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "51705396587f77a58416b5b4a8819117"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "e6f36d25ec7d6602f24687f03e8967a5"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "9b46fccc1c4a1261507bc10cc767dad3"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "1c95145c6433b2f37362191f65ec6b9b"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "f47f6c8e53649b48d772c9c5162d82dc"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "b71ca3b984ce32b7f9b68505b6230083"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "36624a58706f9e52adfd81a7c6f9ab33"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "34c7fe89eddee00dad2ccd63bff27489"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "d99230723779be38e055a2cca6848c4d"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "44a51faeebe955dc279b9a70a3753be5"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "bb8502bce2ad96c9456dfa910ab02e82"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "e3100c4e1bf2f45ebf051d0db05f0600"
  },
  {
    "url": "interview/handwrite/js-base.html",
    "revision": "ca876ddc7fbcb53b4a0b147038b14c70"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "05e8b602498ae95fe271419378f3f637"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "0d98880bf1d47ba348987d781a2dc9d7"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "68960650445c946cd3b69de91ef3d0f3"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "31c6bc929d4893a1c466a1c4fa7e1f70"
  },
  {
    "url": "interview/index.html",
    "revision": "c99c4f88e8ac49c50b1999b6c0638311"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "e8d639e683d1542dab479fe102ed04cc"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "1203de8a2c85938ecf5ac6940dc3479e"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "308f19fd93272104b76d58c7f59b3f52"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "2a9459114aa1a5bab58f8d8ff91816ef"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "0d6b753ac449ddc202855026004bee12"
  },
  {
    "url": "interview/subject/futu-2021.html",
    "revision": "e8394b29d763b42ab600485e0bb26f29"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "abecd08aa806e704e6cc5dfd5c6cf864"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/1-base/array.html",
    "revision": "1517ea773685d0c640eea1ec7b715ce7"
  },
  {
    "url": "tool/1-base/browse.html",
    "revision": "550afefaf626b7ec98531e152c4ee17f"
  },
  {
    "url": "tool/1-base/jsbridge.html",
    "revision": "1327b08a1eaa64b37cf33d70778804fe"
  },
  {
    "url": "tool/1-base/object.html",
    "revision": "4bd8123bdf92dabdd0448581698c3ec7"
  },
  {
    "url": "tool/1-base/regexp.html",
    "revision": "633a83277dbbcdd26ee2df23f7da2d1f"
  },
  {
    "url": "tool/1-base/string.html",
    "revision": "a72d2edd99b644df9dc007e843c5c49d"
  },
  {
    "url": "tool/1-base/time.html",
    "revision": "3a950f5a688985df0566f7531266052e"
  },
  {
    "url": "tool/2-picture/lazy-load.html",
    "revision": "c1bbd356269ee218e7144d7bb841d72e"
  },
  {
    "url": "tool/3-file/axios.html",
    "revision": "6eb9aca686efdc883806789b2bd1ce07"
  },
  {
    "url": "tool/3-file/wx2px.html",
    "revision": "672f1503de83ee9d84e695b0e0e28846"
  },
  {
    "url": "tool/3-file/xlsx.html",
    "revision": "7751382aa97e75b9287ba1283663162d"
  },
  {
    "url": "tool/4-advanced/virtual-list.html",
    "revision": "802048b6ad46acdbc897f4d1974e5041"
  },
  {
    "url": "tool/index.html",
    "revision": "c575f50e6ffce5691d9a566a36fa5646"
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
