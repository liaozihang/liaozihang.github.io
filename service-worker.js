if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/01/04/writeDemo/index.html",revision:"a3011baf289f2bad84135953d2c769f9"},{url:"2020/01/07/SLAM十四讲-第4讲/index.html",revision:"fe76c5993d48bffcd9645941be3a1098"},{url:"2021/03/24/rosdep-update遇到的奇葩问题/2021-3-24-1616566537676.png",revision:"df28c8b3cb67439bbae2cdf18caa832c"},{url:"2021/03/24/rosdep-update遇到的奇葩问题/2021-3-24-1616569842987.png",revision:"3884835cff1d06c86987c8ca04adc3c1"},{url:"2021/03/24/rosdep-update遇到的奇葩问题/2021-3-24-1616572205910.png",revision:"5e7bbf68078d45b7b0a6e4e496fe1840"},{url:"2021/03/24/rosdep-update遇到的奇葩问题/index.html",revision:"5bc8d1d13406f39b5415ad0c49cbcae7"},{url:"2021/03/26/test-gallery/1.jpg",revision:"af201a2922b662b87ea16f81aa5f2bbf"},{url:"2021/03/26/test-gallery/2.jpg",revision:"573a4009bb0f02afd4f4bb4d6b158ba9"},{url:"2021/03/26/test-gallery/index.html",revision:"de3209d195cc476da7ca0efc9bd5b7da"},{url:"404.html",revision:"10ebeef85969c4c9e23574301558fed6"},{url:"about/index.html",revision:"483bc2e9a070748e239ce50a2d46318a"},{url:"archives/2020/01/index.html",revision:"cda30f1aa38404ced5ff1286a0ff1377"},{url:"archives/2020/index.html",revision:"2a3937beba1ce34fbfdd5f95b6725e3b"},{url:"archives/2021/03/index.html",revision:"1953aa1b94a55da4b81821508419da5c"},{url:"archives/2021/index.html",revision:"33f44f19c6d1682bf80724e27b984c98"},{url:"archives/index.html",revision:"28a8832e884020f0fd9428fe15257d55"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"books/index.html",revision:"cf177bcbee3d1c9341419f56cf8ea440"},{url:"categories/index.html",revision:"8574105d1ff646634f9630a44b247b3d"},{url:"categories/学习/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/学习写bug/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/工具/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/index.css",revision:"036674facd891fad992124e849eea0b1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/girls/1.jpg",revision:"af201a2922b662b87ea16f81aa5f2bbf"},{url:"Gallery/girls/2.jpg",revision:"573a4009bb0f02afd4f4bb4d6b158ba9"},{url:"Gallery/girls/index.html",revision:"e587d9b6fb47fedfb750483946e67d44"},{url:"Gallery/index.html",revision:"a8a09c7ce9c331dbc201b4396eb36b7b"},{url:"Gallery/wallpaper/index.html",revision:"b39de0fd3fdc49b4524d6cb7fd270829"},{url:"games/index.html",revision:"5efe22c36d641aea941940e11999becb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.jpg",revision:"dd78c52fd0840d81818cbdc15ac4f8ec"},{url:"img/avatar.jpg",revision:"104aefd0588b0cd919738d81cbf965b1"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/wechat.jpg",revision:"6e203a1f87710fb33adfdab10ffef575"},{url:"index.html",revision:"18965057a1918b8f85f095050cf1c8ac"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"0bfc119e14f202c2f904e36dff1007d7"},{url:"movies/index.html",revision:"d4ae824e6a8c24f21ae84039fdd440c9"},{url:"music/index.html",revision:"4ded52924b95b507442910fc6da5048a"},{url:"tags/hexo/index.html",revision:"43ab67ff3035b72b2eac67d2868962d4"},{url:"tags/index.html",revision:"e6fcadf102328721e4bbc730a49ecb0b"},{url:"tags/kinetic/index.html",revision:"b72250e0302eee08ec0a270c4d8512d5"},{url:"tags/OpenSSL/index.html",revision:"6b3d79802768d3dfa854fd2fd0e96687"},{url:"tags/ros/index.html",revision:"7904603916a1c56d0290960e7e166725"},{url:"tags/rosdep/index.html",revision:"3eec1a2f20f8a9c2f826dcc806375a66"},{url:"tags/SLAM/index.html",revision:"1296c6ffbdf95fe9fe94de414613ca89"},{url:"tags/李代数/index.html",revision:"c23bd7bd7390ee1d0d3a25d847af7747"},{url:"tags/李群/index.html",revision:"9591d3dc568c46efa1176691a938f008"}],{})}));
//# sourceMappingURL=service-worker.js.map
