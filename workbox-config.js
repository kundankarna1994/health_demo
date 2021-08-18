module.exports = {
  cacheId: "EHS-v1.0.9",
  globDirectory: "build/",
  globPatterns: [
    "**/*.{css,scss,html,jpeg,txt,ttf,png,jpg,js,less,eot,svg,woff,woff2,json,md,gif,markdown,rb,css.map}",
  ],
  navigateFallback: "/offline.html",
  swDest: "build/service-worker.js",
  cleanupOutdatedCaches: true,
  mode: "production",
  skipWaiting:false,
};