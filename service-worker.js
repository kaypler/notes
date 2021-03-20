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
    "revision": "b5a43b4f0af2e62fbacb50ecc74e1d9b"
  },
  {
    "url": "algorithm/base/1-base-structure.html",
    "revision": "427d40ed884006b9f38de30703447e76"
  },
  {
    "url": "algorithm/base/2-sort.html",
    "revision": "c1425d8254f0ff5bbc2bffc74fb2c580"
  },
  {
    "url": "algorithm/base/3-bit.html",
    "revision": "945d38e03e4c14ad117d6f5b6a95e4de"
  },
  {
    "url": "algorithm/base/4-bitwise-negation.html",
    "revision": "c810dbe0641030b2ca436e3115f3d1de"
  },
  {
    "url": "algorithm/base/bisect.html",
    "revision": "f507b74d939d303ab1255d24e92f18ac"
  },
  {
    "url": "algorithm/graph/1-base.html",
    "revision": "3562e0a589da5cc695416bde30cc50b3"
  },
  {
    "url": "algorithm/graph/2-depth-first-search.html",
    "revision": "1d790ed271e90ad7e3c1e605d457c4e0"
  },
  {
    "url": "algorithm/graph/3-breadth-first-search.html",
    "revision": "f007d550b594fb19984f95f3767255c8"
  },
  {
    "url": "algorithm/graph/4-kosaraju.html",
    "revision": "45993ffecbca57a5c9abf75659a3d272"
  },
  {
    "url": "algorithm/graph/5-topological.html",
    "revision": "ec820ba03378a3a402203113a8ae1649"
  },
  {
    "url": "algorithm/index.html",
    "revision": "eee578720b4b331132c55de15dcf0095"
  },
  {
    "url": "algorithm/leecode/double-pointer.html",
    "revision": "4bea0d1b91c0bf13c1e8324ea33110b8"
  },
  {
    "url": "algorithm/leecode/dp.html",
    "revision": "c5c313c26e077ed38a5877ba9e146485"
  },
  {
    "url": "algorithm/leecode/linked-list.html",
    "revision": "b8f7588e9312e9f269b131025b4dc9e4"
  },
  {
    "url": "algorithm/leecode/longest-common-string.html",
    "revision": "96336b5baf769ff91411c4b0a37d1ff8"
  },
  {
    "url": "algorithm/leecode/matrix.html",
    "revision": "25516ba793edffa16d87150a2c444001"
  },
  {
    "url": "algorithm/leecode/slide-window.html",
    "revision": "0b21411135e413a15706a06c13f08645"
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
    "url": "assets/js/10.88dde350.js",
    "revision": "bfd6b10f50158d2d1c314f56d67804ea"
  },
  {
    "url": "assets/js/11.c70c2934.js",
    "revision": "480f88cde74acf8ae0d49cf1d6aaa05d"
  },
  {
    "url": "assets/js/12.d5d92a58.js",
    "revision": "fcdfd132ea2901a20b140274c60a098a"
  },
  {
    "url": "assets/js/13.b97dcce0.js",
    "revision": "86bf23c8562c71188b3192e200addd97"
  },
  {
    "url": "assets/js/14.6cc25023.js",
    "revision": "3def69e90be6b90caa85a8179d1dc9d4"
  },
  {
    "url": "assets/js/15.80090ee7.js",
    "revision": "572fec6c12a2df88b1a89d442fd1ae90"
  },
  {
    "url": "assets/js/16.3048737d.js",
    "revision": "f696dc0265ae2491cc7e9ef9ea5f9b2d"
  },
  {
    "url": "assets/js/17.25f1449e.js",
    "revision": "638f2c5b8257e53cf51e9deba5d9cfb2"
  },
  {
    "url": "assets/js/18.34b3b5b1.js",
    "revision": "6804c176ce16b9941303827ba72854b1"
  },
  {
    "url": "assets/js/19.59d7a5ec.js",
    "revision": "146e577812a9dcd1f6e46f843b2a900c"
  },
  {
    "url": "assets/js/2.599a5783.js",
    "revision": "0d7f943524fa39631a2295f7b4f6ab74"
  },
  {
    "url": "assets/js/20.0338ccc5.js",
    "revision": "e2d5d4b5f5a45372b6c9e3feac30a5ab"
  },
  {
    "url": "assets/js/21.9ddb3592.js",
    "revision": "05244111255610f057c2b8c144edf443"
  },
  {
    "url": "assets/js/22.9d0cdda7.js",
    "revision": "b64412f62a7a4db42f7d6e43e5c762a2"
  },
  {
    "url": "assets/js/23.45ba7b3b.js",
    "revision": "7c4158b8413c099385d5b648eb68d08a"
  },
  {
    "url": "assets/js/24.481e01f2.js",
    "revision": "07054773c450bdb5cf2a2f51c6df1241"
  },
  {
    "url": "assets/js/25.405238ac.js",
    "revision": "edfb2776bdce1a76d9f5637f59aa1eec"
  },
  {
    "url": "assets/js/26.62ce7a63.js",
    "revision": "0add0057d441d910ce8ae1a3efddd046"
  },
  {
    "url": "assets/js/27.2d88bb7a.js",
    "revision": "9f4b9e822d0d3888bf5c9d3cf77343ec"
  },
  {
    "url": "assets/js/28.578e8c2d.js",
    "revision": "1e7818bec4f0f321ceedc2fd5831789d"
  },
  {
    "url": "assets/js/29.44b87224.js",
    "revision": "e5b28922879b7d793767d9a4c0b19cd9"
  },
  {
    "url": "assets/js/3.1b676697.js",
    "revision": "e47c44756e3d1e01a52af7f6a0ad518c"
  },
  {
    "url": "assets/js/30.467438db.js",
    "revision": "d845312ceb14a70ad523b087145d83b5"
  },
  {
    "url": "assets/js/31.69a30b6c.js",
    "revision": "7468994ed45611f3939b0b03a832709b"
  },
  {
    "url": "assets/js/32.c5107281.js",
    "revision": "93a50ebc15b95fe487e3ffc7f9330c1a"
  },
  {
    "url": "assets/js/33.78542308.js",
    "revision": "f48d8b7d18446234510498294eea94ae"
  },
  {
    "url": "assets/js/34.0a682f52.js",
    "revision": "dbcae069b6558742e07b42a200f293d1"
  },
  {
    "url": "assets/js/35.b0e5884d.js",
    "revision": "5d4d4c4a5f9171a7234e526ef4b09350"
  },
  {
    "url": "assets/js/36.001e8f35.js",
    "revision": "c0766003e8076660185843c6e20a5b96"
  },
  {
    "url": "assets/js/37.08f6910b.js",
    "revision": "68744d897455dfb3b92dbe6d466b4795"
  },
  {
    "url": "assets/js/38.fb06b672.js",
    "revision": "16f13b6791bd96fb5c62cff2b12023ef"
  },
  {
    "url": "assets/js/39.783cf4fd.js",
    "revision": "3e5729d74c58953200cedc668dffdd2c"
  },
  {
    "url": "assets/js/4.de042ab3.js",
    "revision": "04c6f6b253949d3361b5edfcb9876624"
  },
  {
    "url": "assets/js/40.b3214078.js",
    "revision": "83c5552a77f61ed5c65a1e9255aed5e4"
  },
  {
    "url": "assets/js/41.22a7e615.js",
    "revision": "2b6e840490d7750843056874ac8e850a"
  },
  {
    "url": "assets/js/42.418044b4.js",
    "revision": "65c1e81a18eff619e1be34dc62e67d3f"
  },
  {
    "url": "assets/js/43.2fb620fd.js",
    "revision": "b2c3afc0173c72516a1e7fda9c533b77"
  },
  {
    "url": "assets/js/44.a11b1b86.js",
    "revision": "b0e7708b2f6c2016e62e86f692c77e75"
  },
  {
    "url": "assets/js/45.5aadec98.js",
    "revision": "867c83937451d401ab7332626f7fc185"
  },
  {
    "url": "assets/js/46.eb6b1a1a.js",
    "revision": "9a205cc2f7cecbe2375dae7771e8335e"
  },
  {
    "url": "assets/js/47.9beee042.js",
    "revision": "c16acbb0948d9186d6ff0028ef495cdb"
  },
  {
    "url": "assets/js/48.4bab18ad.js",
    "revision": "733825e8f605342423e240f1b50e9ef5"
  },
  {
    "url": "assets/js/49.d5789c48.js",
    "revision": "0a3884f4ad95878170c9daaf8c75f774"
  },
  {
    "url": "assets/js/5.b37f9cd9.js",
    "revision": "8b2ed6248f75087385549db75203dec6"
  },
  {
    "url": "assets/js/50.06e642f8.js",
    "revision": "a25aec26853a697a5f75888ce24ce826"
  },
  {
    "url": "assets/js/51.337f8168.js",
    "revision": "4e7e5b8dfde859ff2a9cb962dc20c7a0"
  },
  {
    "url": "assets/js/52.0b214c98.js",
    "revision": "a40f92d583132d01198d9b8940c9119d"
  },
  {
    "url": "assets/js/53.e9215513.js",
    "revision": "6526a95f6dfa83f19b41a162de595c22"
  },
  {
    "url": "assets/js/54.f6000c70.js",
    "revision": "3758893e6f4b101aafb9853885655262"
  },
  {
    "url": "assets/js/55.e8c0f423.js",
    "revision": "d82ff99e05129852b6acce31863f93a0"
  },
  {
    "url": "assets/js/56.054dbd84.js",
    "revision": "cd0be20cb82a46b3ca5574a120d95b25"
  },
  {
    "url": "assets/js/57.5a0696b1.js",
    "revision": "d3fb71ff44afeb27a8afc2dc60733805"
  },
  {
    "url": "assets/js/58.883cac14.js",
    "revision": "b1d02faf3503512016a0d033b33856c5"
  },
  {
    "url": "assets/js/59.59242aa2.js",
    "revision": "32fbe750ad3b409cdade4af2f3034c40"
  },
  {
    "url": "assets/js/6.e3c9219f.js",
    "revision": "0fdef74c380940391b92b782bd713e5b"
  },
  {
    "url": "assets/js/60.bb0f74f9.js",
    "revision": "203f8b529ff4ed44dce0a32269fbf481"
  },
  {
    "url": "assets/js/61.dd0b4dc1.js",
    "revision": "391f0fae0e4bf724918d6c23a8c1ff52"
  },
  {
    "url": "assets/js/62.035bbabb.js",
    "revision": "2bd865da87be486134b5d62007da3c1c"
  },
  {
    "url": "assets/js/63.3f4b2892.js",
    "revision": "0286a5994497d96f13e3c1e29022ce54"
  },
  {
    "url": "assets/js/7.f38864d1.js",
    "revision": "ddc65c3c9f5e73a30b5aa10d670c3007"
  },
  {
    "url": "assets/js/8.15609d47.js",
    "revision": "dd0c5cf8a6a17e0d9cc75548108f9812"
  },
  {
    "url": "assets/js/9.8152c940.js",
    "revision": "c3186770df4c95efe77ab3f370a38534"
  },
  {
    "url": "assets/js/app.67a54fa6.js",
    "revision": "1b12d6a9b699d3be7be4b7b1e7ae5d18"
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
    "revision": "d350abef3c4ddbadbc01bfe49c3923c1"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "59d8da3f4edc549cc713490d46d2d68c"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "1a68495956867ce035d2283458917ac7"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "fff682cd7737beb7776a2fb7b100623b"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "1560ee1c190da84cce53329d42249988"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "f29a7150f757eaf1c297b83bf5a7e9e7"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "7534886359ad364b3c6494d29d4a7eaa"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "d6e23a7d4ca59de52a0fc58a40cd8560"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "73f5bad9c3d271b1d25a9492956479db"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "0e115e31adc3afff746e11a1a748829f"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "be1ecf00f1dac44783df3f2a4873b62c"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "90819e0f44d01cbc7b4fcee52b03c9cd"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "e8687ec5cfad4689ec989f164ef9aa44"
  },
  {
    "url": "interview/handwrite/apply-call-bind.html",
    "revision": "4261d9a12b1ec04a107aa6c757968472"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "35f539a2174c0d3ebd4e5ced04f108f6"
  },
  {
    "url": "interview/handwrite/concurrent-request.html",
    "revision": "e53f86d61fdf0b576fd62c1503ae4d32"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "ce933310e528a43b9b0e8d0ffff7f6b5"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "bccf14788a28d3bc311cd4207f8b0cd0"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "136710eaa45af2f77f301d234b9fe260"
  },
  {
    "url": "interview/handwrite/new.html",
    "revision": "725bdc8227699cbd87778b589a97b29f"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "e75f7f1f6c76218f421f6527de4c5d7b"
  },
  {
    "url": "interview/index.html",
    "revision": "ecb7d945c1db8f99916c3a27205f2237"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "290ce6aacac6599e1c1d0c36458bfbfd"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "813c576fb3d6bb9aab204445e499b48f"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "09196f662051bed5df9f10aafc6f846c"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "867d1328568e0aa832e8090e19581d82"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "2ccd8cbcc34b128a3d74f73d9da93395"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "7fe5de33afb081097107f62ed9cc6e07"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/base/array.html",
    "revision": "b6be7ac1a06aebd8c5cb73babe457b24"
  },
  {
    "url": "tool/base/browse.html",
    "revision": "d6614ecb617c5f29491ebbeeafb461ee"
  },
  {
    "url": "tool/base/jsbridge.html",
    "revision": "cea2fc0f17763253d13b347b9d6caff4"
  },
  {
    "url": "tool/base/regexp.html",
    "revision": "1f5eefef7ff39fe4176acc5097913544"
  },
  {
    "url": "tool/base/string.html",
    "revision": "29103e94eeeff02f823458bb6d6d5845"
  },
  {
    "url": "tool/base/time.html",
    "revision": "09366aa6e1e4deb7344e57d214ede3c5"
  },
  {
    "url": "tool/file/axios.html",
    "revision": "2eb019ff3cc72be35e0012bdbdb31db1"
  },
  {
    "url": "tool/file/wx2px.html",
    "revision": "5b27955b171c3997615ca25edf120382"
  },
  {
    "url": "tool/file/xlsx.html",
    "revision": "6e07b9f484cedf5c78460649daebf7ee"
  },
  {
    "url": "tool/index.html",
    "revision": "b141042524b87d8fe58155a462a2c855"
  },
  {
    "url": "tool/picture/lazy-load.html",
    "revision": "384e1f6c8049fd153496754dc91c4275"
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
