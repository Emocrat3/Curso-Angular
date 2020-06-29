(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/styles.css":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/assets/css/styles.css ***!
    \********************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcAssetsCssStylesCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../../../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "body {\n    text-align: center;\n    margin: 0px;\n    padding: 0px;\n\n    /*FUENTES*/\n    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: antialiased;\n}\n\n#header {\n    height: 120px;\n    width: 100%;\n    background: white;\n    border-bottom: 1px solid #ccc;\n    border-top: 5px solid #f13e3e;\n}\n\n.center{\n    width: 75%;\n    margin: 0px auto;\n}\n\n.clearfix{\n    clear:both;\n    float:none;\n}\n\n#logo {\n    width: 30%;\n    font-size: 30px;\n    float: left;\n    margin-top: 35px;\n}\n\n#logo img {\n    display: block;\n    float: left;\n    height: 60px;\n    margin-top: -9px;\n    margin-right: 10px;\n    -webkit-animation: latir infinite 5s linear;\n            animation: latir infinite 5s linear;\n}\n\n@-webkit-keyframes latir {\n    0% {\n        transform: scale(1, 1);\n    }\n\n    50% {\n        transform: scale(1.02, 1.02);\n    }\n\n    55%{\n        transform: scale(0.95, 0.95);\n    }\n\n    100% {\n        transform: scale(1, 1);\n    }\n}\n\n@keyframes latir {\n    0% {\n        transform: scale(1, 1);\n    }\n\n    50% {\n        transform: scale(1.02, 1.02);\n    }\n\n    55%{\n        transform: scale(0.95, 0.95);\n    }\n\n    100% {\n        transform: scale(1, 1);\n    }\n}\n\n#brand {\n    display: block;\n    margin: 0px;\n    float: left;\n}\n\n#menu{\n    width: 70%;\n    float:right;\n    font-size: 18px;\n}\n\n#menu ul{\n    line-height: 85px;\n    width: 60%;\n    float:right;\n}\n\n#menu ul li{\n    display: inline-block;\n    list-style: none;\n    height: 46px;\n    margin-left: 15px;\n    margin-right: 15px;\n}\n\n#menu a{\n    text-decoration: none;\n    color: #444;\n    transition: 300ms all;\n}\n\n#menu a:hover, .active{\n    color: #f13e3e !important;\n}\n\n.year-green{\n    display: block;\n    background: green;\n    color: white;\n    padding: 5px;\n    width: 121px;\n    text-align: center;\n}\n\n.year-red{\n    display: block;\n    background: red;\n    color: white;\n    padding: 5px;\n    width: 121px;\n    text-align: center;\n}\n\n#slider{\n    width: 100%;\n    height: 350px;\n    /*line-height: 320px;*/\n    color: white;\n    text-shadow: 0px 0px 5px #444;\n\n    /*DEGRADADO CSS*/\n    background: rgba(248,80,50,1);\n    background: radial-gradient(ellipse at center, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(230,31,5,1) 71%, rgba(231,56,39,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827', GradientType=1 );\n\n}\n\n#slider h1{\n    margin-top: 0.2px;\n    padding: 0px;\n    padding-top: 130px;\n    text-align: center;\n}\n\n.btn-white{\n    display: block;\n    background: white;\n    color:rgb(88, 88, 88);\n    padding: 10px;\n    width: 100px;\n    height: 35px;\n    margin: 0px auto;\n    font-size: 18px;\n    text-transform: uppercase;\n    text-shadow: none;\n    text-decoration: none;\n    line-height: 35px;\n    box-shadow: 0px 0px 5px rgb(88, 88, 88);\n    margin-top: 40px;\n    border-radius: 4px;\n    transition: 300ms all;\n}\n\n.btn-white:hover{\n    background: #444;\n    color:white;\n}\n\n#slider.slider-small{\n    height: 150px;\n}\n\n#slider.slider-small h1{\n    margin-top: 0.2px;\n    padding: 0px;\n    padding-top: 53px;\n}\n\n#content{\n    width: 70%;\n    float:left;\n    min-height: 650px;\n    margin-right: 20px;\n}\n\n#sidebar{\n    width: 25%;\n    float:left;\n}\n\n.sidebar-item{\n    background: #f7f7f7;\n    padding: 20px;\n    margin-top: 30px;\n}\n\n.sidebar-item .fa-linkedin-square{\n    font-size: 4em;\n    border-radius:5px;\n    color: #0085AE;\n    margin-left: 20px;\n    text-decoration: none;\n}\n\n.sidebar-item .fa-github{\n    font-size: 4em;\n    color: black;\n\n}\n\n.sidebar-item h3{\n    text-transform: uppercase;\n    font-size: 18px;\n    margin:0px;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    border-bottom: 3px solid #eee;\n}\n\n.sidebar-item .btn{\n    margin: 0px auto;\n    margin-top: 10px;\n}\n\n.btn{\n   display: block;\n   background: black;\n   color: white;\n   padding: 15px; \n   font-weight: bold;\n   text-transform: uppercase;\n   font-size: 14px;\n   text-decoration: none;\n   max-width: 120px;\n   transition: 300ms all;\n   border: none;\n   cursor:pointer;\n   text-align: center;\n}\n\n.btn-success{\n    background: rgb(23, 150, 19);\n}\n\n.btn-success:hover{\n    background:black;\n}\n\n.btn-warning{\n    background: rgb(255, 154, 1);\n    color: white !important;\n    text-decoration: none;\n    \n}\n\n.btn-danger{\n    background: rgb(236, 0, 0);\n    color: white !important;\n    text-decoration: none;\n}\n\n.btn-warning:hover, \n.btn-danger:hover {\n    transition: all 300ms;\n    opacity: 0.8;\n}\n\n.buttons{\n    margin-top: 30px;\n}\n\n.mid-form{\n    width: 50%;\n    margin: 0px auto;\n}\n\n.mid-form label{\n    display: block;\n    float:left;\n    text-align: left;\n    margin-top: 10px;\n    margin-bottom: 5px;\n    font-size: 17px;\n}\n\ninput[type=\"text\"],\ninput[type=\"file\"],\ntextarea{\n    width: 100%;\n    min-height: 30px;\n    border: 1px solid #ccc;\n    padding: 3px;\n    margin-bottom: 5px;\n    transition: 300ms all;\n}\n\n.btn.up_btn.afu-attach-pin{\n    display: block !important;\n    width: 100% !important;\n    max-width: 90% !important;\n    margin-top: 15px;\n}\n\n.image-thumb img{\n    width: 150px;\n}\n\ninput[type=\"text\"]:focus,\ntextarea:focus{\n    box-shadow: 0px 0px 5px #eee inset;\n}\n\ntextarea{\n    width: 100%;\n    height: 150px;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 150px;\n    max-height: 300px;\n}\n\n.radibuttons{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    float:left;\n}\n\n#footer{\n    background: #f7f7f7;\n    width: 100%;\n    height: 70px;\n    line-height: 70px;\n    color: #444;\n}\n\n#footer p {\n    margin: 0px;\n    padding: 0px;\n}\n\n.article-item{\n    width: 100%;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 20px;\n    padding-top: 20px;\n    text-align: left;\n}\n\n.article-item .image-wrap {\n    width: 130px;\n    height: 130px;\n    overflow:hidden;\n    float:left;\n    margin-right: 15px;\n    border: 1px solid #ccc;\n}\n\n.article-item .image-wrap img{\n    height: 100%;\n    text-align: center;\n}\n\n.article-item h2{\n    display: block;\n    width:100%;\n    padding: 0px;\n    margin: 0px;\n    margin-bottom: 7px;\n}\n\n.article-item .date{\n    display: block;\n    width: 100%;\n    color: rgb(122, 122, 122);\n}\n\n.article-item a{\n    display: block;\n    color: #444;\n    text-decoration: none;\n    margin-top: 10px;\n}\n\n.article-item a:hover{\n    text-decoration: underline;\n}\n\n.subheader{\n    font-size: 38px;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 10px;\n}\n\n.article-detail .image-wrap{\n    float:none;\n    width:100%;\n    height: 300px;\n}\n\n.article-detail .image-wrap img{\n    width: 100%;\n    height: auto;\n}\n\n.article-detail .subheader{\n    margin-top: 15px;\n    margin-bottom: 0px;\n    border:none;\n}\n\n/*RESPONSIVE*/\n\n/*Desde la anchura 963px hasta la anchura 1488px de pantalla*/\n\n@media (max-width: 1488px){\n    /*Se ejecutarán estos estilos*/\n    .center{\n        width: 85%;\n    }\n}\n\n/*Desde la anchura 0px hasta la anchura 963px de pantalla*/\n\n@media (max-width: 1314px){\n    .center{\n        width: 95%;\n    }\n\n    #menu ul{\n        width: auto;\n    }\n}\n\n@media (max-width: 881px){\n    #logo{\n        width: 265px;\n    }\n\n    #menu{\n        width: auto;\n    }\n}\n\n@media (max-width: 813px){\n    #logo{\n        float:none;\n        /*width: 240px;*/\n        margin: 0px auto;\n        margin-top: 20px;\n    }\n\n    #menu,\n    #menu ul{\n       clear:both;\n       float:none;\n       width: 100%;\n       margin: 0px;\n       padding: 0px;\n       line-height: 43px;\n    }\n\n    #content{\n        float:none;\n        width: 100%;\n    }\n\n    #sidebar{\n        float:none;\n        width: 60%;\n        margin: 0px auto;\n        margin-bottom: 50px;\n    }\n\n    #slider h1{\n        padding-top: 115px;\n        font-size: 25px;\n    }\n\n    .mid-form{\n        width: 70%;\n    }\n}\n\n@media (max-width: 497px){\n    #header{\n        min-height: 130px;\n        overflow:hidden;\n    }\n\n    #menu,\n    #menu ul{\n        line-height: 50px;\n    }\n\n    #menu ul li{\n        margin-left: 7px;\n        margin-right: 7px;\n    }\n\n    #slider{\n        height: 180px;\n    }\n\n    #slider h1{\n        font-size: 19px;\n        padding-top: 30px;\n    }\n\n    #slider .btn-white{\n        margin-top: 20px;\n    }\n\n    #slider.slider-small{\n        height: 100px;\n    }\n\n    #slider.slider-small h1{\n       padding-top: 35px;\n    }\n\n\n}", "", {
      "version": 3,
      "sources": ["styles.css"],
      "names": [],
      "mappings": "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",
      "file": "styles.css",
      "sourcesContent": ["body {\n    text-align: center;\n    margin: 0px;\n    padding: 0px;\n\n    /*FUENTES*/\n    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: antialiased;\n}\n\n#header {\n    height: 120px;\n    width: 100%;\n    background: white;\n    border-bottom: 1px solid #ccc;\n    border-top: 5px solid #f13e3e;\n}\n\n.center{\n    width: 75%;\n    margin: 0px auto;\n}\n\n.clearfix{\n    clear:both;\n    float:none;\n}\n\n#logo {\n    width: 30%;\n    font-size: 30px;\n    float: left;\n    margin-top: 35px;\n}\n\n#logo img {\n    display: block;\n    float: left;\n    height: 60px;\n    margin-top: -9px;\n    margin-right: 10px;\n    animation: latir infinite 5s linear;\n}\n\n@keyframes latir {\n    0% {\n        transform: scale(1, 1);\n    }\n\n    50% {\n        transform: scale(1.02, 1.02);\n    }\n\n    55%{\n        transform: scale(0.95, 0.95);\n    }\n\n    100% {\n        transform: scale(1, 1);\n    }\n}\n\n#brand {\n    display: block;\n    margin: 0px;\n    float: left;\n}\n\n#menu{\n    width: 70%;\n    float:right;\n    font-size: 18px;\n}\n\n#menu ul{\n    line-height: 85px;\n    width: 60%;\n    float:right;\n}\n\n#menu ul li{\n    display: inline-block;\n    list-style: none;\n    height: 46px;\n    margin-left: 15px;\n    margin-right: 15px;\n}\n\n#menu a{\n    text-decoration: none;\n    color: #444;\n    transition: 300ms all;\n}\n\n\n#menu a:hover, .active{\n    color: #f13e3e !important;\n}\n\n.year-green{\n    display: block;\n    background: green;\n    color: white;\n    padding: 5px;\n    width: 121px;\n    text-align: center;\n}\n.year-red{\n    display: block;\n    background: red;\n    color: white;\n    padding: 5px;\n    width: 121px;\n    text-align: center;\n}\n\n#slider{\n    width: 100%;\n    height: 350px;\n    /*line-height: 320px;*/\n    color: white;\n    text-shadow: 0px 0px 5px #444;\n\n    /*DEGRADADO CSS*/\n    background: rgba(248,80,50,1);\n    background: -moz-radial-gradient(center, ellipse cover, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(230,31,5,1) 71%, rgba(231,56,39,1) 100%);\n    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(248,80,50,1)), color-stop(0%, rgba(241,111,92,1)), color-stop(71%, rgba(230,31,5,1)), color-stop(100%, rgba(231,56,39,1)));\n    background: -webkit-radial-gradient(center, ellipse cover, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(230,31,5,1) 71%, rgba(231,56,39,1) 100%);\n    background: -o-radial-gradient(center, ellipse cover, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(230,31,5,1) 71%, rgba(231,56,39,1) 100%);\n    background: -ms-radial-gradient(center, ellipse cover, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(230,31,5,1) 71%, rgba(231,56,39,1) 100%);\n    background: radial-gradient(ellipse at center, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(230,31,5,1) 71%, rgba(231,56,39,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827', GradientType=1 );\n\n}\n\n#slider h1{\n    margin-top: 0.2px;\n    padding: 0px;\n    padding-top: 130px;\n    text-align: center;\n}\n\n.btn-white{\n    display: block;\n    background: white;\n    color:rgb(88, 88, 88);\n    padding: 10px;\n    width: 100px;\n    height: 35px;\n    margin: 0px auto;\n    font-size: 18px;\n    text-transform: uppercase;\n    text-shadow: none;\n    text-decoration: none;\n    line-height: 35px;\n    box-shadow: 0px 0px 5px rgb(88, 88, 88);\n    margin-top: 40px;\n    border-radius: 4px;\n    transition: 300ms all;\n}\n\n.btn-white:hover{\n    background: #444;\n    color:white;\n}\n\n#slider.slider-small{\n    height: 150px;\n}\n\n#slider.slider-small h1{\n    margin-top: 0.2px;\n    padding: 0px;\n    padding-top: 53px;\n}\n\n#content{\n    width: 70%;\n    float:left;\n    min-height: 650px;\n    margin-right: 20px;\n}\n\n#sidebar{\n    width: 25%;\n    float:left;\n}\n\n.sidebar-item{\n    background: #f7f7f7;\n    padding: 20px;\n    margin-top: 30px;\n}\n\n.sidebar-item .fa-linkedin-square{\n    font-size: 4em;\n    border-radius:5px;\n    color: #0085AE;\n    margin-left: 20px;\n    text-decoration: none;\n}\n\n.sidebar-item .fa-github{\n    font-size: 4em;\n    color: black;\n\n}\n\n\n.sidebar-item h3{\n    text-transform: uppercase;\n    font-size: 18px;\n    margin:0px;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    border-bottom: 3px solid #eee;\n}\n\n.sidebar-item .btn{\n    margin: 0px auto;\n    margin-top: 10px;\n}\n\n.btn{\n   display: block;\n   background: black;\n   color: white;\n   padding: 15px; \n   font-weight: bold;\n   text-transform: uppercase;\n   font-size: 14px;\n   text-decoration: none;\n   max-width: 120px;\n   transition: 300ms all;\n   border: none;\n   cursor:pointer;\n   text-align: center;\n}\n\n.btn-success{\n    background: rgb(23, 150, 19);\n}\n\n.btn-success:hover{\n    background:black;\n}\n\n.btn-warning{\n    background: rgb(255, 154, 1);\n    color: white !important;\n    text-decoration: none;\n    \n}\n\n.btn-danger{\n    background: rgb(236, 0, 0);\n    color: white !important;\n    text-decoration: none;\n}\n\n.btn-warning:hover, \n.btn-danger:hover {\n    transition: all 300ms;\n    opacity: 0.8;\n}\n\n.buttons{\n    margin-top: 30px;\n}\n\n.mid-form{\n    width: 50%;\n    margin: 0px auto;\n}\n\n.mid-form label{\n    display: block;\n    float:left;\n    text-align: left;\n    margin-top: 10px;\n    margin-bottom: 5px;\n    font-size: 17px;\n}\n\ninput[type=\"text\"],\ninput[type=\"file\"],\ntextarea{\n    width: 100%;\n    min-height: 30px;\n    border: 1px solid #ccc;\n    padding: 3px;\n    margin-bottom: 5px;\n    transition: 300ms all;\n}\n\n.btn.up_btn.afu-attach-pin{\n    display: block !important;\n    width: 100% !important;\n    max-width: 90% !important;\n    margin-top: 15px;\n}\n\n.image-thumb img{\n    width: 150px;\n}\n\ninput[type=\"text\"]:focus,\ntextarea:focus{\n    box-shadow: 0px 0px 5px #eee inset;\n}\n\ntextarea{\n    width: 100%;\n    height: 150px;\n    min-width: 100%;\n    max-width: 100%;\n    min-height: 150px;\n    max-height: 300px;\n}\n\n.radibuttons{\n    margin-top: 10px;\n    margin-bottom: 10px;\n    float:left;\n}\n\n\n#footer{\n    background: #f7f7f7;\n    width: 100%;\n    height: 70px;\n    line-height: 70px;\n    color: #444;\n}\n\n#footer p {\n    margin: 0px;\n    padding: 0px;\n}\n\n.article-item{\n    width: 100%;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 20px;\n    padding-top: 20px;\n    text-align: left;\n}\n\n.article-item .image-wrap {\n    width: 130px;\n    height: 130px;\n    overflow:hidden;\n    float:left;\n    margin-right: 15px;\n    border: 1px solid #ccc;\n}\n\n.article-item .image-wrap img{\n    height: 100%;\n    text-align: center;\n}\n\n.article-item h2{\n    display: block;\n    width:100%;\n    padding: 0px;\n    margin: 0px;\n    margin-bottom: 7px;\n}\n\n.article-item .date{\n    display: block;\n    width: 100%;\n    color: rgb(122, 122, 122);\n}\n\n.article-item a{\n    display: block;\n    color: #444;\n    text-decoration: none;\n    margin-top: 10px;\n}\n\n.article-item a:hover{\n    text-decoration: underline;\n}\n\n.subheader{\n    font-size: 38px;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 10px;\n}\n\n.article-detail .image-wrap{\n    float:none;\n    width:100%;\n    height: 300px;\n}\n\n.article-detail .image-wrap img{\n    width: 100%;\n    height: auto;\n}\n\n.article-detail .subheader{\n    margin-top: 15px;\n    margin-bottom: 0px;\n    border:none;\n}\n\n/*RESPONSIVE*/\n\n/*Desde la anchura 963px hasta la anchura 1488px de pantalla*/\n@media (max-width: 1488px){\n    /*Se ejecutarán estos estilos*/\n    .center{\n        width: 85%;\n    }\n}\n\n/*Desde la anchura 0px hasta la anchura 963px de pantalla*/\n@media (max-width: 1314px){\n    .center{\n        width: 95%;\n    }\n\n    #menu ul{\n        width: auto;\n    }\n}\n\n@media (max-width: 881px){\n    #logo{\n        width: 265px;\n    }\n\n    #menu{\n        width: auto;\n    }\n}\n\n@media (max-width: 813px){\n    #logo{\n        float:none;\n        /*width: 240px;*/\n        margin: 0px auto;\n        margin-top: 20px;\n    }\n\n    #menu,\n    #menu ul{\n       clear:both;\n       float:none;\n       width: 100%;\n       margin: 0px;\n       padding: 0px;\n       line-height: 43px;\n    }\n\n    #content{\n        float:none;\n        width: 100%;\n    }\n\n    #sidebar{\n        float:none;\n        width: 60%;\n        margin: 0px auto;\n        margin-bottom: 50px;\n    }\n\n    #slider h1{\n        padding-top: 115px;\n        font-size: 25px;\n    }\n\n    .mid-form{\n        width: 70%;\n    }\n}\n\n@media (max-width: 497px){\n    #header{\n        min-height: 130px;\n        overflow:hidden;\n    }\n\n    #menu,\n    #menu ul{\n        line-height: 50px;\n    }\n\n    #menu ul li{\n        margin-left: 7px;\n        margin-right: 7px;\n    }\n\n    #slider{\n        height: 180px;\n    }\n\n    #slider h1{\n        font-size: 19px;\n        padding-top: 30px;\n    }\n\n    #slider .btn-white{\n        margin-top: 20px;\n    }\n\n    #slider.slider-small{\n        height: 100px;\n    }\n\n    #slider.slider-small h1{\n       padding-top: 35px;\n    }\n\n\n}"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n", "", {
      "version": 3,
      "sources": ["styles.css"],
      "names": [],
      "mappings": "AAAA,8EAA8E",
      "file": "styles.css",
      "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\n"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/assets/css/styles.css":
  /*!***********************************!*\
    !*** ./src/assets/css/styles.css ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function srcAssetsCssStylesCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../../../node_modules/css-loader/dist/cjs.js??ref--12-1!../../../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/assets/css/styles.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!**********************************************************!*\
    !*** multi ./src/styles.css ./src/assets/css/styles.css ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! C:\Users\Usuario\Desktop\Curso\angularProyecto\src\styles.css */
    "./src/styles.css");

    module.exports = __webpack_require__(
    /*! C:\Users\Usuario\Desktop\Curso\angularProyecto\src\assets\css\styles.css */
    "./src/assets/css/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map