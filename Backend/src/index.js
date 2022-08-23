'use strict'

var express = require('express');
var mongoose= require('mongoose');

//mongoose.connect(url, opciones).then(()=>{});
mongoose.connect('mongodb://localhost:27017/apirestblog',{userNewUrlParser:true})
                .then(()=>{
                    console.log('Conexcion a base de datos correctamente');
                });