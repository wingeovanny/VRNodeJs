'use strict'

var mongoose= require('mongoose');
var app = require('./app');
var port = 3900;


//desactivamos los metodos antiguos
//mongoose.set('useFindAndModify', false);
//promesa... es para un fucionamiento interno de mongoose
mongoose.Promise = global.Promise;

//mongoose.connect(url, opciones).then(()=>{});
mongoose.connect('mongodb://localhost:27017/apirestblog' )
                .then(()=>{
                    console.log('Conexion a base de datos correctamente');

                    //crear servidor
                    app.listen(port,()=>{
                        console.log('Servidor corriendo en localhost:' + port);
                    });

                });