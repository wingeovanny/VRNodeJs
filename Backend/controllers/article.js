'use strict'

var validator = require('validator');
var Article = require('../models/article');

var controller = {

    datoscurso: (req, res)=>{
        
            var param = req.body.hola;
         
             return res.status(200).send({
                 "Nombre":"edwin",
                 "Apellido": "Bucay",
                 "parametro": param
             });

    },

    test:(req, res)=>{
        return res.status(200).send({
                message: 'Soy la accion test de mi controlador'
        });
    },

    save:(req, res)=>{
        //Recojer  parametros del post
        var params = req.body;

        //validar datos (validator)
        try {
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);            
            
        } catch (error) {
            return res.status(200).send({
                status:"error",
                message: "Faltan datos por enviar"
            });
        }

        if(validate_title && validate_content){
            //Crear el objeto a guardar
            var article = new Article();

            //Guardar el articulo
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            article.save((err, articleStored) => { 

                if(err || !articleStored){
                    return res.status(404).send({
                        status:'error',
                        message: 'El articulo no se ha guardado'
                    });
                }

                 //devolver una respuesta
                return res.status(200).send({
                    status:'succes',
                article: articleStored
                });

            });
            
           
        }else{
            return res.status(200).send({
                status:"error",
                message:"Los datos no son validos"
            });
        }
        
       
    }

};// end controller

module.exports = controller;