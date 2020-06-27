'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.port || 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://heroku_263185wz:heroku_263185wz@ds155903.mlab.com:55903/heroku_263185wz', { useNewUrlParser: true})
        .then(()=> {
                console.log('La conexion a mongodb se realizo correctamente!');

                //Crear servidor y ponerme a escuchar peticiones HTTP

        app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
        });
});