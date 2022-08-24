'use strict'

//Cargar modulos de node para el servidor
var express = require('express');
var bodyparser = require('body-parser');

//Ejecutar express (http)
var app = express();

//cargar fichero de  rutas 
var articleroutes = require('../routes/article');

//cargar middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


//cargarmos cors para permitir peticiones del front end

//anadir prefijos a rutas y cargar las rutas
app.use('/api',articleroutes);

//exportar modulos 
module.exports = app;