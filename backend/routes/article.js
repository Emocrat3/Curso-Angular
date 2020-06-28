'use strict'
var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/articles'});
// Rutas de prueba

router.get('/test-de-controlador', ArticleController.test);
router.post('/datos-curso', ArticleController.datosCurso);

// Rutas utiles

router.post('/',require('/save'), ArticleController.save);
router.get('/',require('/articles/:last?'), ArticleController.getArticles);
router.get('/',require('/article/:id'), ArticleController.getArticle);
router.put('/',require('/article/:id'), ArticleController.update);
router.delete('/',require('/article/:id'), ArticleController.delete);
router.post('/',require('/upload-image/:id?'), md_upload , ArticleController.upload);
router.get('/',require('/get-image/:image'), ArticleController.getImage);
router.get('/',require('/search/:search'), ArticleController.search);
module.exports = router;