'use strict'
var express = require('express');

var ArticleController = require('../controllers/article');
var router = express.Router();
var app = express();
var path = require('path');
var multipart = require('connect-multiparty');

var md_upload = multipart({uploadDir: '../upload/articles'});

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.use('/api', router );
// Rutas de prueba

router.get('/test-de-controlador', ArticleController.test);
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/', ArticleController.probar);
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
router.post('/upload-image/:id?', md_upload , ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search);
// Rutas utiles

module.exports = router;