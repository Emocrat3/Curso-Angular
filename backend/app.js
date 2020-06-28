'use strict'

// Cargar modulos de node para crear servidor

var express = require('express');
var bodyParser = require('body-parser');
var ArticleController = require('../controllers/article');
// Ejecutar express (http)

var app = express();

// Cargar ficheros rutas
var article_routes = require('./routes/article');
var router = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/articles'});

// Middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', function(req, res){
    return res.send('Hola Arthuro');

});
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
router.post('/upload-image/:id?', md_upload , ArticleController.upload);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search);
module.exports = router;

// Añadir prefijos a rutas / Cargar rutas

app.use('/api', article_routes);



// Exportar modulo (fichero  actual)
module.exports = app;

