'use strict'

var controller = {

   datosCurso: (req, res) => {
       var hola = req.body.hola;

       return res.status(200).send({
           curso: 'Maste en Frameworks JS',
           autor: 'Arthuro Gomez',
           url: 'youtube.com',
           hola
       });
   },

   test: (req, res) => {
       return res.status(200).send({
           message: 'Soy la accion test de mi controlador de articulos'
       });
   }

}; // End controller 

module.exports = controller;