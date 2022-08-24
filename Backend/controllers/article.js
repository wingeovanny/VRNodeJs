'use strict'

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
    }

};// end controller

module.exports = controller;