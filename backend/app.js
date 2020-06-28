'use strict'

// Cargar modulos de node para crear servidor

var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)

var app = express();

// Cargar ficheros rutas
var article_routes = require('./routes/article');


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

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './upload/articles'});
var ArticleController = require('controllers/article');

app.get('/', function(req, res){
    return res.send('Hola Arthuro');

});
app.post('/save', ArticleController.save);
app.get('/articles/:last?', ArticleController.getArticles);
app.get('/article/:id', ArticleController.getArticle);
app.put('/article/:id', ArticleController.update);
app.delete('/article/:id', ArticleController.delete);
app.post('/upload-image/:id?', md_upload , ArticleController.upload);
app.get('/get-image/:image', ArticleController.getImage);
app.get('/search/:search', ArticleController.search);

// Añadir prefijos a rutas / Cargar rutas

app.use('/api', article_routes);



// Exportar modulo (fichero  actual)
module.exports = app;

