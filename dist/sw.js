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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

importScripts(
  "precache-manifest.a3e6b9190656c173d3b182f8013e2f2f.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/AnimatedSkeleton.svg",
    "revision": "523947b14f00c3eca0dfd8072be50cff"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "3c85e2cf65b61a2ff0aafdde9f909e9a"
  },
  {
    "url": "assets/icons/browserconfig.xml",
    "revision": "86b01d21ffbe1fbc7ed6f70dd1c2d11e"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "da490707f89badcb677528f81bb2a01d"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "15f15453a7d68d404b02a319cfd9e6b1"
  },
  {
    "url": "assets/icons/polymer-skeleton-192x192.png",
    "revision": "1a4091319f83de18a8093e9b37e47875"
  },
  {
    "url": "assets/icons/polymer-skeleton-384x384.png",
    "revision": "b06c7fa69524acb9784753237a82ae99"
  },
  {
    "url": "assets/icons/polymer-skeleton-48x48.png",
    "revision": "57c78e0130446eb06e495edb54e85f6b"
  },
  {
    "url": "assets/icons/polymer-skeleton-96x96.png",
    "revision": "587a80ff170239b1754de3a3ae399c03"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "8fa975f4477f238d81b18d928c8fafae"
  },
  {
    "url": "assets/logo.svg",
    "revision": "54d8358fb31ab5b83dab3df6098e9f35"
  },
  {
    "url": "index.html",
    "revision": "02161ac001ef3bdf8b5831bb336202f4"
  },
  {
    "url": "manifest.json",
    "revision": "39c9e1530a8c7826972ee24181fd5e58"
  },
  {
    "url": "module.bundle.js",
    "revision": "0a66f81f10a4012ecf0eecc4d7585efe"
  },
  {
    "url": "precache-manifest.4a27c1b22b577781b5bc2633d54408f0.js",
    "revision": "4a27c1b22b577781b5bc2633d54408f0"
  },
  {
    "url": "vendor/custom-elements-es5-adapter.js",
    "revision": "a5043c1d0dd16d84558ee6cc2276212e"
  },
  {
    "url": "vendor/webcomponents-hi-sd-ce.js",
    "revision": "c53b10e1469a4d6b1108cd5ec995875b"
  },
  {
    "url": "vendor/webcomponents-lite.js",
    "revision": "fc5fd8d2c8b27139307536abb8aecda7"
  },
  {
    "url": "vendor/webcomponents-loader.js",
    "revision": "f13bbbbf647b7922575a7894367ddaaf"
  },
  {
    "url": "vendor/webcomponents-sd-ce.js",
    "revision": "b4daa8feea009da29844c0ceffde61dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
