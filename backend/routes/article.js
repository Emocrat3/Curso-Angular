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
app.get('/', ArticleController.probar);
app.post('/save', ArticleController.save);
app.get('/articles/:last?', ArticleController.getArticles);
app.get('/article/:id', ArticleController.getArticle);
app.put('/article/:id', ArticleController.update);
app.delete('/article/:id', ArticleController.delete);
app.post('/upload-image/:id?', md_upload , ArticleController.upload);
app.get('/get-image/:image', ArticleController.getImage);
app.get('/search/:search', ArticleController.search);
// Rutas utiles

module.exports = router;