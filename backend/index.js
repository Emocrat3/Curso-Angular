'use strict'
var express = require('express');
var mongoose = require('mongoose');
var appy = require('./app');
var port = process.env.PORT || 3900;
var app = express();



mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://arthuroali:Ali140116@ds113522.mlab.com:13522/heroku_dr1mdqnp', { useNewUrlParser: true})
        .then(()=> {
                console.log('La conexion a mongodb se realizo correctamente!');

                //Crear servidor y ponerme a escuchar peticiones HTTP

        appy.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
        });
});
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
})