'use strict'

// Cargar modulos de node para crear servidor

var express = require('express');
var app = express();


// Ejecutar express (http)



// Cargar ficheros rutas


// Middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS




// Añadir prefijos a rutas / Cargar rutas





// Exportar modulo (fichero  actual)
module.exports = app;
