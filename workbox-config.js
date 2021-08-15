module.exports = {
  globDirectory: "build/",
  globPatterns: [
    "**/*.{css,scss,html,jpeg,txt,ttf,png,jpg,js,less,eot,svg,woff,woff2,json,md,gif,markdown,rb,css.map}",
  ],
  navigateFallback:"/offline.html",
  swDest: 'build/service-worker.js',
//   swDest: 'build/sw.js',
//   swSrc: "sw.js",
};