if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const f={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return f;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a2c8bc69"],(function(e){"use strict";e.setCacheNameDetails({prefix:"HDA-v1.0.2"}),self.skipWaiting(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"a0b1494849b761b4985e01770185407e"},{url:"android-chrome-512x512.png",revision:"9184882e95c0fc7a7e4bcc16d3efc796"},{url:"apple-touch-icon.png",revision:"4bdd9b4548a7946977b0380a038b8855"},{url:"calculate.html",revision:"6db7630a54d28394af647313ed32d1dd"},{url:"calculator.html",revision:"f1517edac03d909a5416b99118354f76"},{url:"contact.html",revision:"cd8f887c46a5d5fdf4808fe9bd8caf91"},{url:"css/materialize.min.css",revision:"df8ee5622d9d736da06a6b0e7afdef55"},{url:"css/normalize.css",revision:"8c6eee6b2107ef25dc486020ced13898"},{url:"css/select2.min.css",revision:"264bcf0d117a05d527c0ad234b9d290e"},{url:"css/style.css",revision:"e731322e9ef8ad05723ddcf33ad1dbd9"},{url:"css/style.scss",revision:"28d66d084a9c67535a8a2949e33421ab"},{url:"disease_information.html",revision:"44c4b8de83281fef03801742b48d3371"},{url:"diseases.html",revision:"c8b39e9ca07505b4c71f1a20f9651e51"},{url:"drug_information.html",revision:"d9d4fa32f3e0173c73caf8eb5644364e"},{url:"drugs.html",revision:"59c6e1e1236458de395ef7a4e6ec2cac"},{url:"favicon-16x16.png",revision:"3944d2f92ac403b6a6155ff4204fa15c"},{url:"favicon-32x32.png",revision:"6963584cce951fef22fc9644ba5c5d4b"},{url:"fonts/roboto/Dupixent.jpeg",revision:"d1ad5bdae858eae780d0243f12ee18c9"},{url:"fonts/roboto/LICENSE.txt",revision:"d273d63619c9aeaf15cdaf76422c4f87"},{url:"fonts/roboto/Roboto-Black.ttf",revision:"301fe70f8f0f41c236317504ec05f820"},{url:"fonts/roboto/Roboto-BlackItalic.ttf",revision:"c470ca2b5b4f4437a3fe71b113a289a2"},{url:"fonts/roboto/Roboto-Bold.ttf",revision:"9ece5b48963bbc96309220952cda38aa"},{url:"fonts/roboto/Roboto-BoldItalic.ttf",revision:"0be9fa8f2863998d1e52c84165976880"},{url:"fonts/roboto/Roboto-Italic.ttf",revision:"465d1affcd03e9c6096f3313a47e0bf5"},{url:"fonts/roboto/Roboto-Light.ttf",revision:"6090d256d88dcd7f0244eaa4a3eafbba"},{url:"fonts/roboto/Roboto-LightItalic.ttf",revision:"2ffc058ddedacfeaa23542026c8108e2"},{url:"fonts/roboto/Roboto-Medium.ttf",revision:"b2d307df606f23cb14e6483039e2b7fa"},{url:"fonts/roboto/Roboto-MediumItalic.ttf",revision:"cabdb4a12e5de710afde298809306937"},{url:"fonts/roboto/Roboto-Regular.ttf",revision:"f36638c2135b71e5a623dca52b611173"},{url:"fonts/roboto/Roboto-Thin.ttf",revision:"4f0b85f5b601a405bdc7b23aad6d2a47"},{url:"fonts/roboto/Roboto-ThinItalic.ttf",revision:"7384da64612787e3662872e9d19cbc2d"},{url:"home.html",revision:"b8d17bf73d9265ce9bbda3a7c885e779"},{url:"icons/logo_128x128.png",revision:"41c2cea8aaf53ff2c03436e1deb7f7c7"},{url:"icons/logo_144x144.png",revision:"e21ec13a3fc99444352bf4290b6c5bad"},{url:"icons/logo_152x152.png",revision:"b21147dd7ee3b5b45a9bd286ac7befad"},{url:"icons/logo_192x192.png",revision:"57b0b1ae77c6684f2debf5837a2934d0"},{url:"icons/logo_384x384.png",revision:"88f1a5b287ae2c704f2b7f1b8e8995c8"},{url:"icons/logo_512x512.png",revision:"a84ffd202eb7c4bd0bb8b346c9fcf339"},{url:"icons/logo_72x72.png",revision:"b315444d8055a22132df998c43e40b4e"},{url:"icons/logo_96x96.png",revision:"cb641419b884a99b34ff1c4759cafc46"},{url:"img/acetaminophen.jpg",revision:"91afe2031d914845375babab47d48001"},{url:"img/background2.png",revision:"72de96588235adf97eae653c5808669b"},{url:"img/bg-profile.jpg",revision:"10bcdd537208b744b7c7f68e877de91d"},{url:"img/calculator.png",revision:"8a88f1404e5a995a2b49e709cc6bc450"},{url:"img/chat-with-dr.jpg",revision:"08cb47ba10310497112da9721f9745cc"},{url:"img/conditions-diseases.png",revision:"37188ddf6461f7c9dfa906483a3abcc1"},{url:"img/covid-news.jpg",revision:"66d76a531afb646608548a3da4468bb9"},{url:"img/covid-symptoms.jpg",revision:"8f2497741d485ab6b9a13924c893741c"},{url:"img/Cymbalta.jpg",revision:"77a129d646bffca7419474becfbd1854"},{url:"img/doctor.jpg",revision:"5bdf35c46963b86812317022f8f4bb37"},{url:"img/drugs-az.png",revision:"f6ef4189ae3cf47717d791265ea7e261"},{url:"img/Dupixent.jpeg",revision:"d1ad5bdae858eae780d0243f12ee18c9"},{url:"img/gallery.jpg",revision:"6c1e8da8d103fa82de48dafdb3e1f0e4"},{url:"img/health-professionals.png",revision:"c8a233fa847cd777cc16654b09960f8b"},{url:"img/health-protocols.png",revision:"3d50365c3a5cbe3c6f6335ea1be77761"},{url:"img/icon.png",revision:"1c75d9e58d9e303ffaa2ea9716a7cb94"},{url:"img/image.jpg",revision:"6bc9a04df2067957fb06e6b4f2b05e8c"},{url:"img/interactions-checker.png",revision:"53fe86241fe6b48e270a68e9c1800d52"},{url:"img/logo.png",revision:"2b8144547585969dd90424561575dbba"},{url:"img/Lyrica.jpeg",revision:"d5a91dce3a9413f7fe0976b4cbaf7ea2"},{url:"img/mobilepreview.png",revision:"480431ee718efd7affd8d928895f0a9d"},{url:"img/news.jpg",revision:"4fafe1055b68ea575eabfc5e84941c8e"},{url:"img/pill-identifier.png",revision:"2f66b2b3ccec18428ec880c86cf0fa12"},{url:"img/product-page.jpg",revision:"25f933d3f9a81cac85fc8606262fd3b1"},{url:"img/product.jpg",revision:"c8bb49e2c2df2df96a9f944847cc81a1"},{url:"img/profile4.jpg",revision:"5bdf35c46963b86812317022f8f4bb37"},{url:"img/prom.png",revision:"2a621d814603220922b4e079a43346a5"},{url:"img/promo.jpg",revision:"d70ff126a6506640e3272181e061f573"},{url:"img/slide.jpg",revision:"a40377019eeb71cda01cc19ae7d35e66"},{url:"img/Standard Treatment Protocol of emergency Health Service Package DRAFT Report.png",revision:"e01a4d827746347b4d0e122b8fda1f45"},{url:"index.html",revision:"dc169f20aa64e8aa0f541c45d663e3e0"},{url:"interaction_checker.html",revision:"3e54a09df2f484753f74433723f2b826"},{url:"interaction_result.html",revision:"73bc0123e81aa309d456cf95b3a0710e"},{url:"js/custom.js",revision:"b204ef378fa0004482ec77b30caa2f3b"},{url:"js/jquery.min.js",revision:"a09e13ee94d51c524b7e2a728c7d4039"},{url:"js/materialize.min.js",revision:"e98efeec88f756629f42e58b1e11acaa"},{url:"js/select2.min.js",revision:"193140675517a1de2973f7224e64fb9b"},{url:"lib/font-awesome/web-fonts-with-css/css/fa-brands.css",revision:"23d06db19728e6464dd77303f9cc2da0"},{url:"lib/font-awesome/web-fonts-with-css/css/fa-brands.min.css",revision:"0bdbd1e7a403d06fa73596650166af80"},{url:"lib/font-awesome/web-fonts-with-css/css/fa-regular.css",revision:"419d5f83a6cccfa9af406539548fb64a"},{url:"lib/font-awesome/web-fonts-with-css/css/fa-regular.min.css",revision:"d53af697964533a494148a7af484507f"},{url:"lib/font-awesome/web-fonts-with-css/css/fa-solid.css",revision:"236cc1abb3648a90596cad1e97e4989b"},{url:"lib/font-awesome/web-fonts-with-css/css/fa-solid.min.css",revision:"def7d6a8f9200824aa33fd16a9679439"},{url:"lib/font-awesome/web-fonts-with-css/css/fontawesome-all.css",revision:"747e0762c5d82939332a5d273459c6e4"},{url:"lib/font-awesome/web-fonts-with-css/css/fontawesome-all.min.css",revision:"42eaa52604673b64d6b356c2fd7f87e3"},{url:"lib/font-awesome/web-fonts-with-css/css/fontawesome.css",revision:"36f95dc07d3f0fae093b7ff577184ab1"},{url:"lib/font-awesome/web-fonts-with-css/css/fontawesome.min.css",revision:"709f3c663defcb7b9ae6c78ff1e061da"},{url:"lib/font-awesome/web-fonts-with-css/less/_animated.less",revision:"b045fe8800c8f96593cac5227dc70262"},{url:"lib/font-awesome/web-fonts-with-css/less/_bordered-pulled.less",revision:"d7ea7f8a7cdd50096d33e87e1ffa72e7"},{url:"lib/font-awesome/web-fonts-with-css/less/_core.less",revision:"afc2d21306033cb43d322aad01824bcf"},{url:"lib/font-awesome/web-fonts-with-css/less/_fixed-width.less",revision:"66841bce86bf73e79d8f0bff3d9cf7e5"},{url:"lib/font-awesome/web-fonts-with-css/less/_icons.less",revision:"1c5dec3b59a7c14fd7bedef3da470324"},{url:"lib/font-awesome/web-fonts-with-css/less/_larger.less",revision:"8fe52d3bf9e4dbb2000a108ca4e19a46"},{url:"lib/font-awesome/web-fonts-with-css/less/_list.less",revision:"1d65d467e8bbae507fcd0a80945965b7"},{url:"lib/font-awesome/web-fonts-with-css/less/_mixins.less",revision:"a7fa063476ba6db5346f7330ac3f0b41"},{url:"lib/font-awesome/web-fonts-with-css/less/_rotated-flipped.less",revision:"96a02c0efee0dcc6e2b331ea69f5cc27"},{url:"lib/font-awesome/web-fonts-with-css/less/_screen-reader.less",revision:"0f881617264587bef0df6ce92253ecea"},{url:"lib/font-awesome/web-fonts-with-css/less/_stacked.less",revision:"deda57b8b5e6122615676d99e1115cb9"},{url:"lib/font-awesome/web-fonts-with-css/less/_variables.less",revision:"b6ea30ba59a20b4c450d05feaf2274f7"},{url:"lib/font-awesome/web-fonts-with-css/less/fa-brands.less",revision:"a4f7e5e6a4ea2cdf5c8bc0480a906afd"},{url:"lib/font-awesome/web-fonts-with-css/less/fa-regular.less",revision:"2f9e34a2e7848572dfdb0cf265956af3"},{url:"lib/font-awesome/web-fonts-with-css/less/fa-solid.less",revision:"4ec52468b282ddaf290801600fad4d61"},{url:"lib/font-awesome/web-fonts-with-css/less/fontawesome.less",revision:"2160ddece4233b1bfda210f17f07a8c9"},{url:"lib/font-awesome/web-fonts-with-css/scss/_animated.scss",revision:"992453b341bee5e9d63562bdf68bf5da"},{url:"lib/font-awesome/web-fonts-with-css/scss/_bordered-pulled.scss",revision:"7437104ba89f8110cf86ce53b8957f71"},{url:"lib/font-awesome/web-fonts-with-css/scss/_core.scss",revision:"fe21fd26336da7258a399d4fdff54c1c"},{url:"lib/font-awesome/web-fonts-with-css/scss/_fixed-width.scss",revision:"e52b0377dc3347ac4db3adf75485ad52"},{url:"lib/font-awesome/web-fonts-with-css/scss/_icons.scss",revision:"09614a7bb210e0aa489a7a26e8373302"},{url:"lib/font-awesome/web-fonts-with-css/scss/_larger.scss",revision:"dd70b195f23b6aa62debdbaab018a75b"},{url:"lib/font-awesome/web-fonts-with-css/scss/_list.scss",revision:"07930141d534140cea5527018bdc726c"},{url:"lib/font-awesome/web-fonts-with-css/scss/_mixins.scss",revision:"df40bc4d64a720dcb611b911b740b1f9"},{url:"lib/font-awesome/web-fonts-with-css/scss/_rotated-flipped.scss",revision:"a74bcad45d849b2682f1778dfa11713f"},{url:"lib/font-awesome/web-fonts-with-css/scss/_screen-reader.scss",revision:"fa45b2d8ef7113ee7893ea60d7976e6c"},{url:"lib/font-awesome/web-fonts-with-css/scss/_stacked.scss",revision:"b4f1bb74796804022df72c8acd80797d"},{url:"lib/font-awesome/web-fonts-with-css/scss/_variables.scss",revision:"1c2139e556c6dc8150dc4ed6b19035f7"},{url:"lib/font-awesome/web-fonts-with-css/scss/fa-brands.scss",revision:"52d480f587dc59d02d551884eb4291bc"},{url:"lib/font-awesome/web-fonts-with-css/scss/fa-regular.scss",revision:"09119f2b9693491488b723ba29e46e4a"},{url:"lib/font-awesome/web-fonts-with-css/scss/fa-solid.scss",revision:"c9226d471e312ba976093fa48e4c3d79"},{url:"lib/font-awesome/web-fonts-with-css/scss/fontawesome.scss",revision:"d9b490e8758c18833852f443d24f4755"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-brands-400.eot",revision:"ae37590ab05e9c625bcabf1759ab9dc2"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-brands-400.svg",revision:"fb0cbe85f42e49383ac4764fd3211e66"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-brands-400.ttf",revision:"c09b5960237e462582aa7b66411e57d5"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-brands-400.woff",revision:"b5f5ef6112d693b968ad9d1646eea529"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-brands-400.woff2",revision:"c971847be1cd6c17abca74025b4f36ae"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-regular-400.eot",revision:"d7de79cae74b02f2d377786656f1d816"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-regular-400.svg",revision:"c15c758e798dd295b471b69ac409ef02"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-regular-400.ttf",revision:"6bad016cd4efb36aa82618f55f0f660d"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-regular-400.woff",revision:"562010a46ef5216ac76a08c2ceb99985"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-regular-400.woff2",revision:"032ba2e0f134a35ed87df1564936d352"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-solid-900.eot",revision:"10c304f14cd2f6b6bed2ae7f574f03af"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-solid-900.svg",revision:"9948e588ad4ca0db716da1c4d57f900e"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-solid-900.ttf",revision:"3f07fd745b951055c656cf27db9a31d5"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-solid-900.woff",revision:"c9a328cc89d13b8959e710d82b4b40d1"},{url:"lib/font-awesome/web-fonts-with-css/webfonts/fa-solid-900.woff2",revision:"f9b85c9463af7103b9b24bbbf09a06ed"},{url:"lib/Magnific-Popup-master/bower.json",revision:"5f0a49e05c8575eccf5f9f8f3591359e"},{url:"lib/Magnific-Popup-master/composer.json",revision:"e6adf45bfa3e0b7a768a67b0ba92ef4b"},{url:"lib/Magnific-Popup-master/dist/jquery.magnific-popup.js",revision:"5b23ded83b6a631b06040ed574e43dd6"},{url:"lib/Magnific-Popup-master/dist/jquery.magnific-popup.min.js",revision:"ba6cf724c8bb1cf5b084e79ff230626e"},{url:"lib/Magnific-Popup-master/dist/magnific-popup.css",revision:"30b593b71d7672658f89bfea0ab360c9"},{url:"lib/Magnific-Popup-master/Gruntfile.js",revision:"9273227fe4db08191aaa05b42e6cadc1"},{url:"lib/Magnific-Popup-master/libs/jquery-loader.js",revision:"cc86997e59352e5899d85aad84e19a29"},{url:"lib/Magnific-Popup-master/libs/jquery/jquery.js",revision:"2e7e62431f8e5b1f3eaca60016ab0acc"},{url:"lib/Magnific-Popup-master/libs/qunit/qunit.css",revision:"37687050b4af752017145c24bfd9c2f4"},{url:"lib/Magnific-Popup-master/libs/qunit/qunit.js",revision:"cc5d9424079d8ef1812ec8a4419c7bfe"},{url:"lib/Magnific-Popup-master/magnific-popup.jquery.json",revision:"25178c57b63e280f7126bc68e83e147b"},{url:"lib/Magnific-Popup-master/package.json",revision:"09df4ec4da5fe1cca6585de7376d985e"},{url:"lib/Magnific-Popup-master/README.md",revision:"2fef1072751f16f6e31276ed76d1fc9a"},{url:"lib/Magnific-Popup-master/src/css/_settings.scss",revision:"b3373cc1578752082d062e70f35e44da"},{url:"lib/Magnific-Popup-master/src/css/main.scss",revision:"db68a7839186fc9caa0feb87ce05880c"},{url:"lib/Magnific-Popup-master/src/js/ajax.js",revision:"328e5e22452010aec8dcc9018ec672c3"},{url:"lib/Magnific-Popup-master/src/js/core.js",revision:"87be59b1aef188587b0de146902ec46f"},{url:"lib/Magnific-Popup-master/src/js/gallery.js",revision:"9a65b23600ab849a2fa913d3f37ad6fd"},{url:"lib/Magnific-Popup-master/src/js/iframe.js",revision:"d839c2c627055146a2cf5f3d06f02016"},{url:"lib/Magnific-Popup-master/src/js/image.js",revision:"b3c8d45e3bf871ca061f53ea511c0f3b"},{url:"lib/Magnific-Popup-master/src/js/inline.js",revision:"f4b432899cf6527eaf2a9cadc7abab4a"},{url:"lib/Magnific-Popup-master/src/js/retina.js",revision:"91aeb3349266f4528677a94a92c618e7"},{url:"lib/Magnific-Popup-master/src/js/zoom.js",revision:"137d4d137553ba0440c9cfaa0252a871"},{url:"lib/Magnific-Popup-master/website/_includes/analytics.html",revision:"1703bf43d6fbede23e83cabca62a35ef"},{url:"lib/Magnific-Popup-master/website/_includes/build-tool.html",revision:"7c070c24ecbb603f4dc07f782ec0a69a"},{url:"lib/Magnific-Popup-master/website/_includes/examples.html",revision:"9de01d89d99fbdf5f8699806ffd0e0b1"},{url:"lib/Magnific-Popup-master/website/_includes/logo.html",revision:"a6034483c006d27e971b352d9578cf37"},{url:"lib/Magnific-Popup-master/website/_includes/signup.html",revision:"c1839522f77eea695b1e24e430a60780"},{url:"lib/Magnific-Popup-master/website/_layouts/default.html",revision:"f15e019fbcc0b14f10cb17142deaeb50"},{url:"lib/Magnific-Popup-master/website/documentation.md",revision:"36e24d4afce6b9c03d475ab4d360cf43"},{url:"lib/Magnific-Popup-master/website/index.html",revision:"202836b7afa075dfd34a801e9fa1ae32"},{url:"lib/Magnific-Popup-master/website/site-assets/ajax/test-ajax-2.html",revision:"4f248fd3d0aac7985f58e25bccdd8858"},{url:"lib/Magnific-Popup-master/website/site-assets/ajax/test-ajax.html",revision:"4c49a36729bec2869ace4e6a9c249934"},{url:"lib/Magnific-Popup-master/website/site-assets/site.css",revision:"61e44fba73f4359f91eefd8223483220"},{url:"lib/Magnific-Popup-master/website/third-party-libs/jquery.js",revision:"40164d689a1f1be8f4b5142ac055c572"},{url:"lib/Magnific-Popup-master/website/third-party-libs/jquery.min.js",revision:"0652da382b6fceb033dfe2b6c06d4d11"},{url:"lib/Magnific-Popup-master/website/third-party-libs/uglify.js",revision:"ae8ae3e6904f7fcc9d5a0e31547b3ccf"},{url:"lib/Magnific-Popup-master/website/third-party-libs/zepto.js",revision:"6cc6d6efc83c0f8652ad8f0cfc29f61d"},{url:"lib/Magnific-Popup-master/website/third-party-libs/zepto.min.js",revision:"22213098770d4610a49280919429fe70"},{url:"lib/Magnific-Popup-master/website/wordpress.html",revision:"3afe7ff5d56c829281e02ce82d7a8f2f"},{url:"lib/owlcarousel/assets/ajax-loader.gif",revision:"01000918725acebd286de3787fca4ee0"},{url:"lib/owlcarousel/assets/owl.carousel.css",revision:"0c44b1327d7299a41c854b09bce96f83"},{url:"lib/owlcarousel/assets/owl.carousel.min.css",revision:"e0422f812aba45254cf47f9a3c96504c"},{url:"lib/owlcarousel/assets/owl.theme.default.css",revision:"cfd1223d6dd40e43dcc60555c6f2ae8b"},{url:"lib/owlcarousel/assets/owl.theme.default.min.css",revision:"03d666e0fa14a395029971d586e3a785"},{url:"lib/owlcarousel/assets/owl.theme.green.css",revision:"6202392612d6fe0142d3a00949dd16e7"},{url:"lib/owlcarousel/assets/owl.theme.green.min.css",revision:"ff66b7cb0fbfb0c2f8431eb83de2235c"},{url:"lib/owlcarousel/assets/owl.video.play.png",revision:"4a37f8008959c75f619bf0a3a4e2d7a2"},{url:"lib/owlcarousel/owl.carousel.js",revision:"54428880ec8df798ac3d666f5113c7ff"},{url:"lib/owlcarousel/owl.carousel.min.js",revision:"6473747d818f47587036ccde48050d82"},{url:"lib/owlcarousel/README.md",revision:"9b632753857be139c0eae285ac15929e"},{url:"lib/slick/bower.json",revision:"52fae2979b031cad2e260c64ce792bab"},{url:"lib/slick/component.json",revision:"d3eace8ff402e569767165e2f2f5df86"},{url:"lib/slick/CONTRIBUTING.markdown",revision:"6246e12e3d4c26809621f6b4bd986fed"},{url:"lib/slick/index.html",revision:"e357b5ba79cabf8dd49fce44febec9ad"},{url:"lib/slick/ISSUE_TEMPLATE.md",revision:"a0a023d91b1e6c547f7e27d316948b8f"},{url:"lib/slick/package.json",revision:"5958b0f5fee14f61d0f6b1dd141b6e09"},{url:"lib/slick/README.markdown",revision:"e328ff6bd2a9a2e26089d6232750fe2a"},{url:"lib/slick/slick.jquery.json",revision:"2c7debc1f54d5868d81109fc4fc72b94"},{url:"lib/slick/slick/ajax-loader.gif",revision:"c5cd7f5300576ab4c88202b42f6ded62"},{url:"lib/slick/slick/config.rb",revision:"c47857bcaf2a4cf98b1bce99c48d4cd9"},{url:"lib/slick/slick/fonts/slick.eot",revision:"ced611daf7709cc778da928fec876475"},{url:"lib/slick/slick/fonts/slick.svg",revision:"f97e3bbf73254b0112091d0192f17aec"},{url:"lib/slick/slick/fonts/slick.ttf",revision:"d41f55a78e6f49a5512878df1737e58a"},{url:"lib/slick/slick/fonts/slick.woff",revision:"b7c9e1e479de3b53f1e4e30ebac2403a"},{url:"lib/slick/slick/slick-theme.css",revision:"f9faba678c4d6dcfdde69e5b11b37a2e"},{url:"lib/slick/slick/slick-theme.less",revision:"c7c46d5960843c56fdfc63a789349434"},{url:"lib/slick/slick/slick-theme.scss",revision:"e97dc549d5450ebd34fe128eefc69cd6"},{url:"lib/slick/slick/slick.css",revision:"f38b2db10e01b1572732a3191d538707"},{url:"lib/slick/slick/slick.js",revision:"da910267cd968a7d269efaed738025bd"},{url:"lib/slick/slick/slick.less",revision:"f5309cf6905194850b44fb78b8028b95"},{url:"lib/slick/slick/slick.min.js",revision:"d5a61c749e44e47159af8a6579dda121"},{url:"lib/slick/slick/slick.scss",revision:"f5309cf6905194850b44fb78b8028b95"},{url:"manifest.json",revision:"0ab29f7dfcfff779d2df95bc92955192"},{url:"offline.html",revision:"950ba29e01c53d2c53f6afaa7ce7a96b"},{url:"pill_identifier_result.html",revision:"1fc47793ededfa786344bc4f6764df69"},{url:"pill_identifier.html",revision:"3113ec309e7733415893c3fa4be254aa"},{url:"protocols.html",revision:"c022ec928026a91c86bb749f4ef13972"},{url:"setting.html",revision:"d01a03a7f9757b468af4107ac2a0f74d"},{url:"signup.html",revision:"00d1af1f6dcb5ee1919c353b708ded0a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/offline.html")))}));
//# sourceMappingURL=service-worker.js.map
