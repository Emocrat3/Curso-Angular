'use strict'

var mongoose = require('mongoose');
var express = require('express');
var port = process.env.PORT || 3900;
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var router = require('./routes/article');

var cors = require('cors');
app.use(cors());


mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://arthuroali:Ali140116@ds113522.mlab.com:13522/heroku_dr1mdqnp', { useNewUrlParser: true})
        .then(()=> {
                console.log('La conexion a mongodb se realizo correctamente!');

                //Crear servidor y ponerme a escuchar peticiones HTTP

        app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
        });
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);


app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });




