'use strict'
const md_auth = require('md_auth_path');
var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();
var crypto = require('crypto')

var multer = require('multer');

const storage = multer.diskStorage({

  destination(req, file, cb) {

    cb(null, './uploads/albums');

  },

  filename(req, file = {}, cb) {

    const { originalname } = file;

   

    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];

    // cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);

    crypto.pseudoRandomBytes(16, function (err, raw) {

      cb(null, raw.toString('hex') + Date.now() + fileExtension);

    });

  },

});

var mul_upload = multer({dest: './uploads/albums',storage});
// Rutas de prueba

router.get('/test-de-controlador', ArticleController.test);
router.post('/datos-curso', ArticleController.datosCurso);

// Rutas utiles

router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
router.post('/upload-image-album/:id', [md_auth.ensureAuth, mul_upload.single('image')], AlbumController.uploadImage);
router.get('/get-image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search);
module.exports = router;