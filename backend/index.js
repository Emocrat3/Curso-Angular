'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/api_rest_blog', { useNewUrlParser: true})
        .then(()=> {
                console.log('La conexion a mongodb se realizo correctamente!');

                //Crear servidor y ponerme a escuchar peticiones HTTP

        app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
        });
});