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
    "revision": "35f4f89c6fd9b220299c3b856ac37636"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "39e7965652ea2c02a7c4b066ffdfb89e"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "0ecc4ddfc62acb765a5e2ca4a24558a3"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "918e3478e87cb0603196db88f7eca98d"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "cfa0bba5465e2a58bd011ba9a5e63b5a"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "367750441c34265005b57c63856196db"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "9a5060f35d4ae534d8aaa9c4af3cc2ef"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "06c20f14fee532ed06b155c62943934c"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "72526aaced7704df7b09be47083cee0f"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "745d6de30d6b27a25c99649904764e07"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "181fd4312908ad4c01d976098af7c7cb"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "815cd1538ba897cf1a134ae4ff5544c9"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "b06cac739947362dfeb37db17a780124"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "2729abe87530b18e8c390fd41db672ba"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "60643168fce6225d24e76dc06809f084"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "423c30831dab7ee2b0bbc3a1bcfd8c95"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "01e0b41632e32380a0204af24cad491a"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "2de87cbcde0a239cb92c18d64af3b5f5"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "26a9fc83b1f6373af88d05ae802d8a7d"
  },
  {
    "url": "algorithm/index.html",
    "revision": "f185a14d2fbc864f8298787f77d5d1ed"
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
    "url": "assets/js/10.c90fe1d2.js",
    "revision": "8516fb0a9305f2c12d3c2e25e0ad7291"
  },
  {
    "url": "assets/js/11.63c5fe43.js",
    "revision": "cdbfd0bc947375c0046dbb06bb334419"
  },
  {
    "url": "assets/js/12.69e17b6d.js",
    "revision": "6defafc022cd7e9cfcc0a2f0f9e381d0"
  },
  {
    "url": "assets/js/13.653a67b1.js",
    "revision": "d30366d09c4afef4aaef41a8173add14"
  },
  {
    "url": "assets/js/14.1cc42ccf.js",
    "revision": "dfeef1131191934d9247ee014bdd80e5"
  },
  {
    "url": "assets/js/15.b44282cf.js",
    "revision": "b298f9d09310185f71f11f14382ded2a"
  },
  {
    "url": "assets/js/16.65beaf6b.js",
    "revision": "b902c835dc00ea48caa4938876a89769"
  },
  {
    "url": "assets/js/17.0b09a6dd.js",
    "revision": "cf55b48b9668f82ce785ecb36222f4a6"
  },
  {
    "url": "assets/js/18.86bde78a.js",
    "revision": "6804c176ce16b9941303827ba72854b1"
  },
  {
    "url": "assets/js/19.716baaf8.js",
    "revision": "62c8cddadc18c61a3d9fbabcd0ef917e"
  },
  {
    "url": "assets/js/2.5479912c.js",
    "revision": "8e9c97d203419afd720f3ba31f48bc6e"
  },
  {
    "url": "assets/js/20.88551a9d.js",
    "revision": "733fe5fd6b66d88fafb02c7feb783fe7"
  },
  {
    "url": "assets/js/21.b3730ee0.js",
    "revision": "3f719d9f9aabc243dd6c8f63ff480906"
  },
  {
    "url": "assets/js/22.589ceeaf.js",
    "revision": "bcf7771053df18f1a12fc27a3aff2ce9"
  },
  {
    "url": "assets/js/23.648fbc53.js",
    "revision": "537e6e512d1c144fe76cccc741556f74"
  },
  {
    "url": "assets/js/24.fd1aaf64.js",
    "revision": "842ecdc39b8afe717a44ddd2b0025fc4"
  },
  {
    "url": "assets/js/25.dfdeda9b.js",
    "revision": "749d2a6b5ed23d9d0918733952e0c6ce"
  },
  {
    "url": "assets/js/26.468c6ad9.js",
    "revision": "664132bcbee772fa12738fc7b2a7e6a3"
  },
  {
    "url": "assets/js/27.e8b8d7a5.js",
    "revision": "9710e351d58bb2350067013221f18eea"
  },
  {
    "url": "assets/js/28.c8edc307.js",
    "revision": "0d5f9dd21be26a0139d6496b7201090b"
  },
  {
    "url": "assets/js/29.c114ff8d.js",
    "revision": "5784ca462a806c8419c8d99592fd5270"
  },
  {
    "url": "assets/js/3.1042fe29.js",
    "revision": "df1da14bfc5b290c6e3d7108c387a2f7"
  },
  {
    "url": "assets/js/30.824ac9b6.js",
    "revision": "55673b86e084d989ef0c0350a4c45c38"
  },
  {
    "url": "assets/js/31.8a3f2052.js",
    "revision": "81624e66efdc4abe8ee5d47b3d60241c"
  },
  {
    "url": "assets/js/32.7146ddd1.js",
    "revision": "b026ec23007a53517f4ba21dab9fff77"
  },
  {
    "url": "assets/js/33.a6a6ec24.js",
    "revision": "0d8a7caa1e193980e0d342e59879551a"
  },
  {
    "url": "assets/js/34.b23c4ad4.js",
    "revision": "0547786454b267bcbbcbd9482065e9a1"
  },
  {
    "url": "assets/js/35.762f6d31.js",
    "revision": "b97c1efa8c971b751477b848000b2560"
  },
  {
    "url": "assets/js/36.7b119c6d.js",
    "revision": "96200eee108395f4f58f98a4f302d0db"
  },
  {
    "url": "assets/js/37.580b684d.js",
    "revision": "eb29cca2f29b0b330d4057f7dfe41eb6"
  },
  {
    "url": "assets/js/38.7d96f191.js",
    "revision": "6961c89efeda477aae046330fb9a2112"
  },
  {
    "url": "assets/js/39.af653ec4.js",
    "revision": "fdb1545489998686816976166ff74bae"
  },
  {
    "url": "assets/js/4.a93308ba.js",
    "revision": "f6f6ace0ccee46806ad94122613ed80c"
  },
  {
    "url": "assets/js/40.a4e41e81.js",
    "revision": "d31539c15652d0b1e0ab342fa788ea7a"
  },
  {
    "url": "assets/js/41.11e0178f.js",
    "revision": "3cbf68f5e9a498bc0e4f6e87c878e73c"
  },
  {
    "url": "assets/js/42.82abfd90.js",
    "revision": "fee785efe6eb2439f15143464b925b87"
  },
  {
    "url": "assets/js/43.087e95c9.js",
    "revision": "23131de41311cfc38ee9b05bc24ee607"
  },
  {
    "url": "assets/js/44.05e5f860.js",
    "revision": "1407f458461d7ff245734a3d0e89e033"
  },
  {
    "url": "assets/js/45.5f27100c.js",
    "revision": "8b5899d46b23174bb26d92f55db45f20"
  },
  {
    "url": "assets/js/46.3bf36411.js",
    "revision": "df9dab062c18749705d4e7171e5fa5f7"
  },
  {
    "url": "assets/js/47.e04ff94c.js",
    "revision": "e6e316d47406a541bdd62225f869a090"
  },
  {
    "url": "assets/js/48.30a7ac3f.js",
    "revision": "5f32162192e3970e9928eae45281728d"
  },
  {
    "url": "assets/js/49.6c688753.js",
    "revision": "08cf491dd150e7e2b6e5e349965f3f35"
  },
  {
    "url": "assets/js/5.d3a51e10.js",
    "revision": "90c43cb5dd09cde43a32278ab5bfae1f"
  },
  {
    "url": "assets/js/50.83f6e022.js",
    "revision": "d5c29018fefb21f02bf28f7e76ca685d"
  },
  {
    "url": "assets/js/51.1f654cc9.js",
    "revision": "65f8ddf824044f12636d6f7b7e909cab"
  },
  {
    "url": "assets/js/52.e7af1b79.js",
    "revision": "bdfa5e27fe16a876ea4225a35cd7991f"
  },
  {
    "url": "assets/js/53.a2eebb55.js",
    "revision": "cc8de0033e358ad133febef9f43757c5"
  },
  {
    "url": "assets/js/54.adf1aeb6.js",
    "revision": "686b4feb769e48d76ba1d856ab43ac5b"
  },
  {
    "url": "assets/js/55.cfe1f9a5.js",
    "revision": "9fdeaa13cbc1c60b3f444b9ec39955dc"
  },
  {
    "url": "assets/js/56.c5887fb8.js",
    "revision": "fe1e772db47faa89680a63b6932f85da"
  },
  {
    "url": "assets/js/57.3122414d.js",
    "revision": "2a43a0acfbe63e67688196473f809a9e"
  },
  {
    "url": "assets/js/58.df52dc8b.js",
    "revision": "9922cb8e3f14e715b3cf2f000a2b0f1b"
  },
  {
    "url": "assets/js/59.7b9fe2a8.js",
    "revision": "5ea58ba40285b4f5055afd8cb0090b89"
  },
  {
    "url": "assets/js/6.9ce3c59f.js",
    "revision": "881736bf69b3a822077282cefd992be9"
  },
  {
    "url": "assets/js/60.4ab24f76.js",
    "revision": "4cba5c921cc8552df98015e0d082bf24"
  },
  {
    "url": "assets/js/61.9b0fee16.js",
    "revision": "456152eaaa883de65f016b1eaccd814c"
  },
  {
    "url": "assets/js/62.96f49377.js",
    "revision": "1cd241ae81b5ed76911a290d2d25b29b"
  },
  {
    "url": "assets/js/63.3a5f5dc6.js",
    "revision": "fbf9a7671939d370a480073736289acd"
  },
  {
    "url": "assets/js/64.1a6a49f7.js",
    "revision": "a71c6cbdce09e691c2474eebf277bdc9"
  },
  {
    "url": "assets/js/65.03bf1179.js",
    "revision": "208c904e3ccce0f7036365272ee4e71e"
  },
  {
    "url": "assets/js/66.514e75e7.js",
    "revision": "09a7f36029b4aa761de5f5d39034c1c4"
  },
  {
    "url": "assets/js/67.43553857.js",
    "revision": "30960f28b4e0c302ab61dd20f50fe963"
  },
  {
    "url": "assets/js/68.2d86a9e0.js",
    "revision": "760c1d8d59dae194be950535bf6af5fb"
  },
  {
    "url": "assets/js/69.17eb4413.js",
    "revision": "9be92fb0e362f17813e9f21c481f4b41"
  },
  {
    "url": "assets/js/7.a9eea215.js",
    "revision": "a6bc689b8076df6e3d270ec0ba965e4e"
  },
  {
    "url": "assets/js/8.7433ed68.js",
    "revision": "53643e9b81214ec13ab8b9742b39a6d5"
  },
  {
    "url": "assets/js/9.9c534eb7.js",
    "revision": "4d9b9f228c2852308c5cd1ca84aa7b80"
  },
  {
    "url": "assets/js/app.79be065c.js",
    "revision": "16d6f81a965107f939de2deb20e0e600"
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
    "revision": "b37b485ea79189d6c68d5d51ea3586d1"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "7448413cb73305cbefe849fa1a435a23"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "0c5aca8031a4750b7fc82a621a32e2b0"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "c9e072bc84e3e033cec9475f40179f46"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "e8918992541103f0ac31aace1eaa6235"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "13c2637c6ec2a4a25e9d88ce6ee54946"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "f6cfd6afa0a74f9e877edea29f155031"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "4a8463821afe6efd85db10cf04c41ddc"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "5fbba3cfa76db52813ac12435becb85e"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "8f0c15e36e706c2d72852c087efa1062"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "2798a9b09866ad85b8dc418518b321ed"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "57455b44f683de20a04ba09a30115dd0"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "5defd6740f5486ec35353a7d8d57d73a"
  },
  {
    "url": "interview/handwrite/apply-call-bind.html",
    "revision": "788bb7efe54536493287fd89afcdfcdc"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "37dd7e1d6b41b5b3038ee42c6f4edf2a"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "1906d25b221197f339dd7cd371f9decd"
  },
  {
    "url": "interview/handwrite/concurrent-request.html",
    "revision": "7edba7cd21e6d2f7f257cc8d5c5224d2"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "e109da5afba54f19c6393f20eac9d7ea"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "cd2c82d5c0937005483466cd017e414e"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "82728fa0d566d588abd986720af75c21"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "074f36c2ecfa8b0ab5492da2d0e4deb9"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "2a34d2ae525a1ae1e854e8d8adab00a8"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "7cc8e37c23e3975cebc6d4fd6327d749"
  },
  {
    "url": "interview/handwrite/new.html",
    "revision": "6571f42fd4095c12fd394220bdd5e527"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "297a3cbf69dc3e622887993f8382b2b7"
  },
  {
    "url": "interview/index.html",
    "revision": "479c305673a8244b092f4cc9b52799cc"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "c9b0174574502c704a27f8d65f1a93c2"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "8dbb60670f6d70a23d68480cedd55dc3"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "5c8db3709f1262b0fa6b8f4fa5441e12"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "e00387d794b72f875caa2773a2864573"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "c234e66c3a2e9e7cd29e8ec78b991a29"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "57be1fb34c63ac909accf925a60f5926"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/base/array.html",
    "revision": "ea72b0b2face8feb3fefc3a59377a40a"
  },
  {
    "url": "tool/base/browse.html",
    "revision": "f865d31b6d44809b8161f67df67eee6e"
  },
  {
    "url": "tool/base/jsbridge.html",
    "revision": "da8d87645ed681e5e45f9857002bcf4d"
  },
  {
    "url": "tool/base/regexp.html",
    "revision": "5e391bc617a194dcd966ed9708ff7bf7"
  },
  {
    "url": "tool/base/string.html",
    "revision": "0ee9bffa5ccbd3d589b997e15f8b34c2"
  },
  {
    "url": "tool/base/time.html",
    "revision": "0f15a9eb589ad959a3fb177e4503c469"
  },
  {
    "url": "tool/file/axios.html",
    "revision": "7353afb9924d4ce98fdfbcbc16f98026"
  },
  {
    "url": "tool/file/wx2px.html",
    "revision": "486fde4fcfbd41cd59e66b4731afc2a6"
  },
  {
    "url": "tool/file/xlsx.html",
    "revision": "e69e0a799ca866e66b7dc946c0a16af8"
  },
  {
    "url": "tool/index.html",
    "revision": "8d4eb8944f8962b5acaad373aa21a14e"
  },
  {
    "url": "tool/picture/lazy-load.html",
    "revision": "22b07639cc2e50dd006491915403ecc7"
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
