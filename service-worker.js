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
    "revision": "8d513f1baf8375cced08ff324d5d0bde"
  },
  {
    "url": "algorithm/1-base/1-base-structure.html",
    "revision": "5f7931ff24ffa2925321dbaff65ebbde"
  },
  {
    "url": "algorithm/1-base/2-sort.html",
    "revision": "9e385747915038a0a2d446bb46ca1608"
  },
  {
    "url": "algorithm/1-base/3-bit.html",
    "revision": "a748c18f16ed98392f9467d063ccd49b"
  },
  {
    "url": "algorithm/1-base/4-bitwise-negation.html",
    "revision": "3099fcfee7cc6030970316b18b29f530"
  },
  {
    "url": "algorithm/1-base/5-tree.html",
    "revision": "6bd03f698c4aa7a5617782456e99b474"
  },
  {
    "url": "algorithm/1-base/bisect.html",
    "revision": "504a3fbaa92ef843f9d0ad1937ae9eed"
  },
  {
    "url": "algorithm/2-graph/1-base.html",
    "revision": "f5e2a0d0fc38a320326bbbe1e74edb1d"
  },
  {
    "url": "algorithm/2-graph/2-depth-first-search.html",
    "revision": "1801a75a4a0f1be38cb49f46d820687f"
  },
  {
    "url": "algorithm/2-graph/3-breadth-first-search.html",
    "revision": "6207a00db94e2092f43fbeda766113ce"
  },
  {
    "url": "algorithm/2-graph/4-kosaraju.html",
    "revision": "f36eef7eaf4e546c419d8a84e7ab9388"
  },
  {
    "url": "algorithm/2-graph/5-topological.html",
    "revision": "02cd87a6e59bf563988a2152a2a9745d"
  },
  {
    "url": "algorithm/3-string/1-sort.html",
    "revision": "92088a7850defe1710e5cefedecb07b4"
  },
  {
    "url": "algorithm/4-leecode/double-pointer.html",
    "revision": "2ee7d8f25cf495ea460c0f3a1ff0c988"
  },
  {
    "url": "algorithm/4-leecode/dp.html",
    "revision": "419009e5611cccf9b45977926f8dc65c"
  },
  {
    "url": "algorithm/4-leecode/linked-list.html",
    "revision": "225560ca04934467da24bac97a7be007"
  },
  {
    "url": "algorithm/4-leecode/longest-common-string.html",
    "revision": "56e9b0ac3c2f80c348f9f907826d3d94"
  },
  {
    "url": "algorithm/4-leecode/matrix.html",
    "revision": "13a80ce136e32754654422987cdd6ce3"
  },
  {
    "url": "algorithm/4-leecode/slide-window.html",
    "revision": "0ec007ae54cb7fa3b3a92d5d1cae23ca"
  },
  {
    "url": "algorithm/4-leecode/sort.html",
    "revision": "db52f8b5e8b50e0965cd33869769c74c"
  },
  {
    "url": "algorithm/index.html",
    "revision": "00c8c9810671433331a95d8ce7738ed7"
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
    "url": "assets/js/10.7664c1c8.js",
    "revision": "6e56df8302d317ff162bd582929f1454"
  },
  {
    "url": "assets/js/11.f23a2bdc.js",
    "revision": "d90bbf59fd4c516547717c9d1afb2975"
  },
  {
    "url": "assets/js/12.69e17b6d.js",
    "revision": "6defafc022cd7e9cfcc0a2f0f9e381d0"
  },
  {
    "url": "assets/js/13.61ff725a.js",
    "revision": "ee68f9a7285e398bde4a6c6940a56b7d"
  },
  {
    "url": "assets/js/14.5392db50.js",
    "revision": "fd2e46afcb414915e4364ebd1bf1f615"
  },
  {
    "url": "assets/js/15.73ca9547.js",
    "revision": "78c00470d2ea3ad199d18b4d6b44499c"
  },
  {
    "url": "assets/js/16.65beaf6b.js",
    "revision": "b902c835dc00ea48caa4938876a89769"
  },
  {
    "url": "assets/js/17.31d2da28.js",
    "revision": "1d3d0be951dbd7bea6305cd6bb315cfc"
  },
  {
    "url": "assets/js/18.910625d2.js",
    "revision": "05aff41d2de3304787875aaf032149f9"
  },
  {
    "url": "assets/js/19.a05aa168.js",
    "revision": "5e2ec0d2b2cc3f645ad72e861fb5bca9"
  },
  {
    "url": "assets/js/2.5479912c.js",
    "revision": "8e9c97d203419afd720f3ba31f48bc6e"
  },
  {
    "url": "assets/js/20.499248a9.js",
    "revision": "3fc3aa5b9d8095e0deac2a5bd087ab2b"
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
    "url": "assets/js/28.4fbf5c47.js",
    "revision": "be3eb99569d701b8adff7109c8b0944c"
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
    "url": "assets/js/31.37a4fa0a.js",
    "revision": "9eed14f1c7a844b2685876360b17dcc4"
  },
  {
    "url": "assets/js/32.4138ba64.js",
    "revision": "75260a5c83b2bdc0cd108f5cda49104e"
  },
  {
    "url": "assets/js/33.21ea9277.js",
    "revision": "2453caab418d8600ba7f3100d2e23424"
  },
  {
    "url": "assets/js/34.b782215f.js",
    "revision": "701cd7058805fe66a210a3931998da86"
  },
  {
    "url": "assets/js/35.c3a9e060.js",
    "revision": "79bae93f19dc29cf825e1f573a90848e"
  },
  {
    "url": "assets/js/36.cabccede.js",
    "revision": "ead085a519a2021c07ec7d5db4940723"
  },
  {
    "url": "assets/js/37.b2c572e7.js",
    "revision": "7857f9a9a89a5865971be6e15e65f4b8"
  },
  {
    "url": "assets/js/38.e37294ba.js",
    "revision": "1cdb464dbb10929f517bac865516c03e"
  },
  {
    "url": "assets/js/39.ca44e01c.js",
    "revision": "28773a34adbc23bfed98faedf0023605"
  },
  {
    "url": "assets/js/4.e730f5dd.js",
    "revision": "a724b882616dc27de138dac4320ff62a"
  },
  {
    "url": "assets/js/40.ed7cddbd.js",
    "revision": "57c16842aca68f32b4f0ef713d47ad6b"
  },
  {
    "url": "assets/js/41.4fd1bf1e.js",
    "revision": "919787a4bb89cf4c85f665bcbf6954ba"
  },
  {
    "url": "assets/js/42.db219091.js",
    "revision": "568af49284d79198beea6a09b6342c46"
  },
  {
    "url": "assets/js/43.f047f08d.js",
    "revision": "0a517a39593d0c257bfef297fdbc4205"
  },
  {
    "url": "assets/js/44.4a8b81ad.js",
    "revision": "ee31fb9af192ca2780a5089c727d8833"
  },
  {
    "url": "assets/js/45.8c92adee.js",
    "revision": "521f79fb822a35a9f66b4091e947dc80"
  },
  {
    "url": "assets/js/46.c678cbf3.js",
    "revision": "709c282fb0c03f5942a3b76d5a0c07ce"
  },
  {
    "url": "assets/js/47.7f04dad9.js",
    "revision": "a6b4f820b2b18fcd17548c6dac15ba56"
  },
  {
    "url": "assets/js/48.98bf0fa6.js",
    "revision": "e09f9e6a51d6982531031a725c854f60"
  },
  {
    "url": "assets/js/49.4b4cb594.js",
    "revision": "835e1ba384ba67f8cd5a072f03182438"
  },
  {
    "url": "assets/js/5.fd1c0f49.js",
    "revision": "2349d7c3b48d93fed92b08957215b28b"
  },
  {
    "url": "assets/js/50.d856fbf6.js",
    "revision": "93105f275cbcb9b54b4327fa20e59574"
  },
  {
    "url": "assets/js/51.17c61d16.js",
    "revision": "b20a7f23cf0a70cf7a8b2c80ba06cf27"
  },
  {
    "url": "assets/js/52.f1a073de.js",
    "revision": "8168cf0e07f7ead45123d6f8d142298c"
  },
  {
    "url": "assets/js/53.8cb670dc.js",
    "revision": "7ffb85f08341a2c89cfdaf29abb4efb8"
  },
  {
    "url": "assets/js/54.ef0b4d86.js",
    "revision": "eb500debbbe51e3f3837caff9325a5db"
  },
  {
    "url": "assets/js/55.b31aee32.js",
    "revision": "33d0792fe129e243a607482516acb725"
  },
  {
    "url": "assets/js/56.8556ce38.js",
    "revision": "b2550a4e0aed55098844a9591fa75baf"
  },
  {
    "url": "assets/js/57.45735fd0.js",
    "revision": "9a080a5125bee7e04b040d0b00d1a03b"
  },
  {
    "url": "assets/js/58.6170d036.js",
    "revision": "5c9dbba4a48cac5b228c7a917b4de346"
  },
  {
    "url": "assets/js/59.35ac91cf.js",
    "revision": "c63aa92d0d39ddc51f78043e5eb91df1"
  },
  {
    "url": "assets/js/6.9ce3c59f.js",
    "revision": "881736bf69b3a822077282cefd992be9"
  },
  {
    "url": "assets/js/60.c80d1164.js",
    "revision": "382f843249f4df063756692d6d019f3f"
  },
  {
    "url": "assets/js/61.8aa75a45.js",
    "revision": "597e6e11f9ee093be264ed24d96dc609"
  },
  {
    "url": "assets/js/62.029139cb.js",
    "revision": "2ad912db91bc18a9c8243fed2baaf610"
  },
  {
    "url": "assets/js/63.bbc26c86.js",
    "revision": "b18e1e7e1a3185cbf56b546a8830ed7d"
  },
  {
    "url": "assets/js/64.a1a6c354.js",
    "revision": "b7de343b43a4f4dd5f8e9b13d77371f3"
  },
  {
    "url": "assets/js/65.594199fc.js",
    "revision": "9a4b09ef9bfa5e62110bdbae0ddbe4de"
  },
  {
    "url": "assets/js/66.7f765aaa.js",
    "revision": "e761cb8e95bb830a43270a6c7fb940a1"
  },
  {
    "url": "assets/js/67.8924faed.js",
    "revision": "8ad1a276064a684a06c5b3d12e8458d2"
  },
  {
    "url": "assets/js/68.57e9d8e1.js",
    "revision": "ef32a2661aa791df2a8ceeb382743694"
  },
  {
    "url": "assets/js/69.8e761e4c.js",
    "revision": "50d398be1afa5d232fbf979c6a3fb03c"
  },
  {
    "url": "assets/js/7.a9eea215.js",
    "revision": "a6bc689b8076df6e3d270ec0ba965e4e"
  },
  {
    "url": "assets/js/70.0334e24e.js",
    "revision": "9757d6254dc96bfc96b1b2575e512a71"
  },
  {
    "url": "assets/js/71.3a5528ac.js",
    "revision": "6578839ab2eef239b0aed0a974fcbd02"
  },
  {
    "url": "assets/js/8.7433ed68.js",
    "revision": "53643e9b81214ec13ab8b9742b39a6d5"
  },
  {
    "url": "assets/js/9.7607cf3c.js",
    "revision": "10db43d6185881626f641282e29bfdae"
  },
  {
    "url": "assets/js/app.75fd7859.js",
    "revision": "21d7cf9e06083b17e26e1f878e698ab6"
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
    "revision": "e70089e965dc5c8fadbf342a31a299dd"
  },
  {
    "url": "interview/experience/browse-cache.html",
    "revision": "e58f0ad75b7871d2b0a0feed522658f9"
  },
  {
    "url": "interview/experience/browse.html",
    "revision": "cee51fdf565561d481ea89ee87998d14"
  },
  {
    "url": "interview/experience/cross-platform.html",
    "revision": "d50ddd5d65842dcb0e36b7b8a40d780c"
  },
  {
    "url": "interview/experience/css.html",
    "revision": "d012a66e4aba1caacda6fd628c410c9d"
  },
  {
    "url": "interview/experience/event-loop.html",
    "revision": "dec6f79242cab69ca3ac59a1f02191e7"
  },
  {
    "url": "interview/experience/js.html",
    "revision": "54cfa25828c2438cb448b6a06d1b6359"
  },
  {
    "url": "interview/experience/network.html",
    "revision": "861d25176d11dea31e129e777ff8bdcc"
  },
  {
    "url": "interview/experience/react.html",
    "revision": "6ad11cfe610103b8a81978bc226adf60"
  },
  {
    "url": "interview/experience/safety.html",
    "revision": "2f222524b9d6ca09958935616dc2c99c"
  },
  {
    "url": "interview/experience/vite.html",
    "revision": "1870864a70acde53cb538215dd96367c"
  },
  {
    "url": "interview/experience/vue.html",
    "revision": "f554adcf1f3359ae634e10a26222ab40"
  },
  {
    "url": "interview/experience/webpack.html",
    "revision": "6df15cf58b93c4e26ae05c51cd1ae3c9"
  },
  {
    "url": "interview/handwrite/ajax.html",
    "revision": "404b5d6eadea64c4ebae40ecee5719d9"
  },
  {
    "url": "interview/handwrite/apply-call-bind.html",
    "revision": "0017df3051661529e7a5c0c833318b02"
  },
  {
    "url": "interview/handwrite/async.html",
    "revision": "9a25d364056b30dd265d351066ea9a2b"
  },
  {
    "url": "interview/handwrite/clone.html",
    "revision": "f2aa2fe067e3c7a39efb26028e0e4fa8"
  },
  {
    "url": "interview/handwrite/debounce-and-throttle.html",
    "revision": "81fa0386699fed52f2598e66df73f762"
  },
  {
    "url": "interview/handwrite/design-pattern.html",
    "revision": "3af86d986342508b5acf2ccf1309af9f"
  },
  {
    "url": "interview/handwrite/event.html",
    "revision": "2d53387716f7180c3593f984c5b75d45"
  },
  {
    "url": "interview/handwrite/extend.html",
    "revision": "2d58cb75de4a915a1c16ae5e348137e7"
  },
  {
    "url": "interview/handwrite/jsonp.html",
    "revision": "3495ba7bfc57fbf0453fe45330a3bf74"
  },
  {
    "url": "interview/handwrite/lru-cache.html",
    "revision": "1d5e3a6f69b104ba1027bd651d7c7fa2"
  },
  {
    "url": "interview/handwrite/new.html",
    "revision": "209daaeffea82d410e3cbf490fce3db9"
  },
  {
    "url": "interview/handwrite/promise.html",
    "revision": "8a5c0b2f8fb7b24a297f635044540508"
  },
  {
    "url": "interview/handwrite/serial-and-concurrent.html",
    "revision": "daf547db0a41530e4f9b7819da07bd30"
  },
  {
    "url": "interview/index.html",
    "revision": "235edd4914a32c2350b11d3f7d9c750f"
  },
  {
    "url": "interview/optimize/browse.html",
    "revision": "d2fdb1d3d32f418c80cce49ee3b4726d"
  },
  {
    "url": "interview/optimize/react.html",
    "revision": "664166af5b1f20cbefc414f3512f50c0"
  },
  {
    "url": "interview/optimize/weex.html",
    "revision": "4799205f126e392ff740f517da502098"
  },
  {
    "url": "interview/subject/ali-2021.html",
    "revision": "c881cf81ebd55c433283d9251b21cf61"
  },
  {
    "url": "interview/subject/css.html",
    "revision": "212e2489cfba485a1c9e6e1a2c0d0689"
  },
  {
    "url": "interview/subject/js-advance.html",
    "revision": "a9e3c84e31a7e790f278442e3c22b504"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "tool/base/array.html",
    "revision": "8fc7167bb5b1767e3fab316e4968be38"
  },
  {
    "url": "tool/base/browse.html",
    "revision": "248f27565eb4b1955e46bd89413a3164"
  },
  {
    "url": "tool/base/jsbridge.html",
    "revision": "dd6f5f3c508d9f71d99f9cb36919e7b5"
  },
  {
    "url": "tool/base/regexp.html",
    "revision": "6d5f17088c39948add6c4e2addea1df1"
  },
  {
    "url": "tool/base/string.html",
    "revision": "a88894a36451355b090ee0857571a41c"
  },
  {
    "url": "tool/base/time.html",
    "revision": "3954a393d80c123283308cc1b3f280eb"
  },
  {
    "url": "tool/file/axios.html",
    "revision": "f778493470e79ee8ae6d7052fbd3589c"
  },
  {
    "url": "tool/file/wx2px.html",
    "revision": "fef08c9e56bad02d88b8879ec1b449e4"
  },
  {
    "url": "tool/file/xlsx.html",
    "revision": "fb2dedf83d5433c4a4959a794a777511"
  },
  {
    "url": "tool/index.html",
    "revision": "30e7b4dc1530227bdf8a44eb3cf68f20"
  },
  {
    "url": "tool/picture/lazy-load.html",
    "revision": "4bb9594b25333560f9ea2c8a49998bfc"
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
