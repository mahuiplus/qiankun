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
    "revision": "36852277180490190842ef82bfe15806"
  },
  {
    "url": "api/index.html",
    "revision": "943e2eee338af32f9f2fd15bbd2fb6c2"
  },
  {
    "url": "assets/css/0.styles.561b124d.css",
    "revision": "f0e2ef567acd5c71f8861490db9bb772"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35260cc8.js",
    "revision": "c5402d48d37c3acf681982d26096f2cd"
  },
  {
    "url": "assets/js/11.c4ae871d.js",
    "revision": "57e21216917f6759cbcfbd57ab6609f3"
  },
  {
    "url": "assets/js/12.58bc725d.js",
    "revision": "cb9a64bb4b1319de80d71a46886b0aca"
  },
  {
    "url": "assets/js/13.7b31d599.js",
    "revision": "3689f7faa5a67f05a706be2427500538"
  },
  {
    "url": "assets/js/14.c6be3c4e.js",
    "revision": "d3f24384b34066950e6e737c8e9d3e84"
  },
  {
    "url": "assets/js/15.d46b7b2f.js",
    "revision": "0be66769c3c772ad3fa8e49f03a848d4"
  },
  {
    "url": "assets/js/16.b62491af.js",
    "revision": "955f6c66d71bb3296d459ee623e8965d"
  },
  {
    "url": "assets/js/17.dc2c4e78.js",
    "revision": "00e72849355852dcbe068c7135e6dd95"
  },
  {
    "url": "assets/js/2.7fd8a689.js",
    "revision": "35f4ca32a4f4f66ce35cfa17d1bf972d"
  },
  {
    "url": "assets/js/3.60a0c2c7.js",
    "revision": "c1a1cf48d8380d7fe869aa7ae807460d"
  },
  {
    "url": "assets/js/4.2f51514e.js",
    "revision": "b6b99ecb1a9dccd7782786f1e923acde"
  },
  {
    "url": "assets/js/5.2cac2106.js",
    "revision": "4038d31880965200b2a84e12a58baace"
  },
  {
    "url": "assets/js/6.4e76b181.js",
    "revision": "249a6eaf5ae059b4349ec6d4012c4105"
  },
  {
    "url": "assets/js/7.011f689c.js",
    "revision": "7bfdf4a246d200612f200c12ce9d5114"
  },
  {
    "url": "assets/js/8.fc5f63b2.js",
    "revision": "9e4b16f5267175fdb45510932739dcf5"
  },
  {
    "url": "assets/js/9.20370be3.js",
    "revision": "a4125b667fdb0f1b95dd2c0eafae9fe5"
  },
  {
    "url": "assets/js/app.eab96530.js",
    "revision": "609a04d559ddaa3be10785d63daf4dfe"
  },
  {
    "url": "faq/index.html",
    "revision": "592ae937b30412b298e52ad8abee4cb2"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9aa2c48a22d102399b27e8a0249b1c26"
  },
  {
    "url": "guide/index.html",
    "revision": "59306344d3d543fdbed5559a0a0515a2"
  },
  {
    "url": "index.html",
    "revision": "6724f89bc97b36e5aeb0955adfd4627f"
  },
  {
    "url": "zh/api/index.html",
    "revision": "6c9d620f4b952215f6b3e57c630ca3ac"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "3460f87bdb7abece2b68ba3873c53191"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "ea62d5778259481a435117f9433064aa"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "3178589d2cabb2881c4ced1afb9a8278"
  },
  {
    "url": "zh/index.html",
    "revision": "b677d51ef74d71110e9c2172c709f605"
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