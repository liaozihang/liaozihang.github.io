if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,s)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=s(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-08e0b74e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/01/04/writeDemo/index.html",revision:"dc8c148d35072429c7552a77e8a4f834"},{url:"2020/01/07/SLAM十四讲-第4讲/index.html",revision:"f72a7cac979d253900e900054886ab22"},{url:"2021/03/24/rosdep-update遇到的奇葩问题/2021-3-24-1616566537676.png",revision:"df28c8b3cb67439bbae2cdf18caa832c"},{url:"2021/03/24/rosdep-update遇到的奇葩问题/2021-3-24-1616569842987.png",revision:"3884835cff1d06c86987c8ca04adc3c1"},{url:"2021/03/24/rosdep-update遇到的奇葩问题/2021-3-24-1616572205910.png",revision:"5e7bbf68078d45b7b0a6e4e496fe1840"},{url:"2021/03/24/rosdep-update遇到的奇葩问题/index.html",revision:"1c4862c544558949043741c716d2c914"},{url:"2021/03/26/test-gallery/1.jpg",revision:"af201a2922b662b87ea16f81aa5f2bbf"},{url:"2021/03/26/test-gallery/2.jpg",revision:"573a4009bb0f02afd4f4bb4d6b158ba9"},{url:"2021/03/26/test-gallery/index.html",revision:"a9f72e0a91bca3cd13688d9581f304e0"},{url:"404.html",revision:"b6926adf0b0b71da2ce668b59090a1f3"},{url:"about/index.html",revision:"767952137a1efae136b567976425233a"},{url:"archives/2020/01/index.html",revision:"bbf0ae0b9312a77f2eedb5f99b20fb58"},{url:"archives/2020/index.html",revision:"668d5149f002281c4a44a8d07be4a4ca"},{url:"archives/2021/03/index.html",revision:"281eed63abc4ff385041eec3b8f8c1b7"},{url:"archives/2021/index.html",revision:"8f0b21f698eb43fcd34f0938ac0b96c6"},{url:"archives/index.html",revision:"cc54829118a9a9bb40a9172606b54c06"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"books/index.html",revision:"e36d7ea239f95118d0bc0c05a427c745"},{url:"categories/index.html",revision:"7768c0a68fa119db1803e945b8b865dc"},{url:"categories/学习/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/学习写bug/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"categories/工具/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/index.css",revision:"036674facd891fad992124e849eea0b1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/girls/1.jpg",revision:"af201a2922b662b87ea16f81aa5f2bbf"},{url:"Gallery/girls/2.jpg",revision:"573a4009bb0f02afd4f4bb4d6b158ba9"},{url:"Gallery/girls/index.html",revision:"c4def92171b605718801f899e7329ed3"},{url:"Gallery/index.html",revision:"309a39f5e57846753c6447e3070950fe"},{url:"Gallery/wallpaper/index.html",revision:"f930cac944cc2b5619560da7454633a7"},{url:"games/index.html",revision:"2b66885e749312d59148761b2cf5dcba"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.jpg",revision:"dd78c52fd0840d81818cbdc15ac4f8ec"},{url:"img/avatar.jpg",revision:"104aefd0588b0cd919738d81cbf965b1"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/wechat.jpg",revision:"6e203a1f87710fb33adfdab10ffef575"},{url:"index.html",revision:"10c43d48f476d33c329eb6f875082a8b"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"c078a052934f8072503765a2aa33a409"},{url:"movies/index.html",revision:"f14fe3f98f3fe8ab313337ee31fb3dac"},{url:"music/index.html",revision:"c3f957bcbc0fedaf6a7425cb28e1e8a2"},{url:"tags/hexo/index.html",revision:"34d667cd959c4aa9c165e303fa39b840"},{url:"tags/index.html",revision:"7b2a6d42c0244bbd5242b7ef6a1fa116"},{url:"tags/kinetic/index.html",revision:"15cde0ed12e631a96cd74beb6ee25026"},{url:"tags/OpenSSL/index.html",revision:"42dbabfd60c63955fbf8a1e5d79d19d8"},{url:"tags/ros/index.html",revision:"5b31a79412950c6ee55a25c3029abbd2"},{url:"tags/rosdep/index.html",revision:"b2a8a01781f2c722e419fb10fe19631f"},{url:"tags/SLAM/index.html",revision:"f942269b24c45fb2d4a2933e6be4b24d"},{url:"tags/李代数/index.html",revision:"ccc29af9ade68798d2ca2c3191c59371"},{url:"tags/李群/index.html",revision:"a89dea3bfcd377302da30306b8c3c8fd"}],{})}));
//# sourceMappingURL=service-worker.js.map
