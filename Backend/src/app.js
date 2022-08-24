'use strict'

//Cargar modulos de node para el servidor
var express = require('express');
var bodyparser = require('body-parser');

//Ejecutar express (http)
var app = express();

//cargar las rutas 

//cargar middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


//cargarmos cors para permitir peticiones del front end

//anadir prefijos a rutas


//Ruta  o metodo de prueba para el apirest
app.post('/datos-curso',(req, res)=>{
   var param = req.body.hola;

    return res.status(200).send({
        "Nombre":"edwin",
        "Apellido": "Bucay",
        "parametro": param
    });
});


//exportar modulos 
module.exports = app;