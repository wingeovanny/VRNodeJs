'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

//routes de pruebas
router.get('/test-de-controlador',ArticleController.test);
router.post('/datos-curso',ArticleController.datoscurso);

//rutas utiles
router.post('/save',ArticleController.save);
router.get('/getArticles',ArticleController.getArticles)
module.exports = router;