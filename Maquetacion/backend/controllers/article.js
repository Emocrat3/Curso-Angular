'use strict'
var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Article = require('../models/article');
const { exists } = require('../models/article');

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
   },

   save: (req,res) => {
       // Recoger parametro por post
        var params = req.body;


       // validar datos con el validator

       try{
           var validate_title = !validator.isEmpty(params.title);
           var validate_content = !validator.isEmpty(params.content);


       }catch(err){
            return res.status(200).send({
                message: 'Faltan datos por enviar!!!'
            });
       }

       if(validate_title && validate_content){

       
       // Crear el objeto a guardar
        var article = new Article();

       // Asignar valores
       article.title = params.title;
       article.content = params.content;

       if(article.image){
        article.image = params.image;
       } else {
        article.image = null;
       }

       // Guardar el articulo
        article.save((err, articleStored) =>{
            if(err || !articleStored){
                return res.status(404).send({
                    status: 'error',
                    message: 'El articulo no se ha guardado'
                });

            }

            // Devolver una respuesta 

            return res.status(200).send({
                status: 'success',
                article: articleStored
            });
            
        });

   }else{
       return res.status(200).send({
        status: 'error',
        message: 'Los datos no son validos!!!'
       });
    }
}, 

    getArticles: (req,res) => {

        var query = Article.find({});

        var last = req.params.last;
        if(last || last != undefined){
            query.limit(5);
        }

        // find 
        query.sort('-_id').exec((err,articles) => {
        
        if(err){
            return res.status(500).send({
                status: 'error',
                message: 'Error al devolver los articulos'
            });
        }
        if(!articles){
            return res.status(404).send({
                status: 'error',
                message: 'No hay articulo para mostrar'
            });
        }
        
        return res.status(200).send({
            status: 'sucess',
            articles
        });

    });
},

getArticle: (req, res) => {
    //Recoger el id de la URL
    var articleId= req.params.id;

    //Comprobar que existe
    if(!articleId || articleId == null){
        return res.status(404).send({
            status: 'error',
            message: 'No existe el articulo!!!'
        });
    }

    // Buscar el articulo
    Article.findById(articleId, (err,article)=>{
        if(err){
            return res.status(500).send({
                status: 'error',
                message: 'Error al devolver los datos!!'
            });
        }

        if(!article){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo!!!'
            });
        }
            // Devorverlo en JSON
            return res.status(200).send({
                status: 'success',
                article
            });
        });
    }, 

    update: (req,res) => {
        //Recoger el ID del articulo por la URL
        var articleId = req.params.id;
        //Recoger los datos que llegan por put
        var params = req.body;
        //Validar datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        }catch(err){    
            return res.status(404).send({
                status: 'error',
                message: 'Faltan datos por enviar!!!'
            });

        }
        if(validate_title && validate_content){
        //Find and update
            Article.findOneAndUpdate({_id: articleId}, params, {new: true}, (err, articleUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar!!'
                    });
                }
                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'Error',
                        message: 'No existe el articulo!!!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });
        }else{
        //Devolver respuesta

        return res.status(200).send({
            status: 'error',
            message: 'La validacion no es correcta'
        });
    }
},

delete: (req, res) => {
    // Recoger el id de la url
    var articleId = req.params.id;
    // find and delete 
    Article.findOneAndDelete({_id: articleId}, (err, articleRemoved)=>{
        if(err){
            return res.status(500).send({
                status: 'error',
                message: 'Error al borrar!!!'
            });
        }
        if(!articleRemoved){
            return res.status(404).send({
                status: 'error',
                message: 'No se ha borrado el articulo, posiblemente no exista'
            });
        }

        return res.status(200).send({
            status: 'success',
            article: articleRemoved
        });

    });


},

upload: (req,res) => {
    // Configurar el modulo del connect multiparty router/article.js

    // Recoger el fichero de la peticion
    var fileName = 'Imagen no subida...';

    if(!req.files){
        return res.status(404).send({
            status: 'error',
            message: fileName
        });
    }
    // Conseguir el nombre y la extension del archivo
    var filePath = req.files.file0.path;
    var fileSplit = filePath.split('\\');

    // Advertencia en linux o mac
    //var fileSplit = filePath.split('/');

    // Sacar nombre del archivo

    var fileName = fileSplit[2];

    // Sacar extension del fichero

    var extensionSplit = fileName.split('\.');
    var fileExt = extensionSplit[1];

    // Comprobar la extension, solo imagenes, si no es valido, borrar el fichero
    if(!fileExt != 'png' && !fileExt != 'jpg' && !fileExt != 'jpeg' && !fileExt != 'gif'){
        //Borrar el archivo subido

        fs.unlink(filePath, (err) => {
            return res.status(200).send({
            status: 'error',
            message: 'La extension de la imagen no es valida'
            });
        });

    }else{
          // Si todo es valido, sacamos la id de la url
          var articleId = req.params.id;

          if(articleId){
       // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
       Article.findOneAndUpdate({_id: articleId }, {image: fileName}, {new:true}, (err, articleUpdated) => {
        if(err || !articleUpdated){
            return res.status(200).send({
                    status: 'error',
                    message: 'Error al guardar la imagen del articulo'
                });
        }    
            return res.status(200).send({
                status: 'success',
                article: articleUpdated
            });
        });
        } else {
            return res.status(200).send({
                status: 'success',
                image: file_name
            });
        }

    }

  
}, // End upload file

    getImage: (req, res) => {

        var file = req.params.image;
        var pathFile = './upload/articles/'+file;

        fs.exists(pathFile, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(pathFile));
            }else{
                return res.status(200).send({
                    status: 'error',
                    message: 'Error al guardar la imagen del articulo'
                });  
            }
        });

    },

    search: (req, res) => {

        // Sacar el string a buscar 
        var searchString = req.params.search;
    
        // find or 
        Article.find({ "$or": [
            { "title": {"$regex": searchString, "$options": "i"}},
            { "content": {"$regex": searchString, "$options": "i"}}

        ]})
        .sort([['date', 'descending']])
        .exec((err, articles) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error en la peticion!!'
                });
            }
            if(!articles || articles.length <= 0){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos que coincidan con tu busqueda'
                });
            }

        });
        return res.status(200).send({
            status: 'success',
            articles
        });
    }

}; // End controller 

module.exports = controller;