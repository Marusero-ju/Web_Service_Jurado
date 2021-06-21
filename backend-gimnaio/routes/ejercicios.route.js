//defino controlador para el manejo de CRUD
const ejerciciosCtrl = require('./../controllers/ejercicios.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', ejerciciosCtrl.getEjercicios);
router.post('/', ejerciciosCtrl.createEjercicios);
router.get('/:id', ejerciciosCtrl.getEjercicios);
router.put('/:id', ejerciciosCtrl.editEjercicios);
router.delete('/:id', ejercicioCtrl.deleteEjercicios);


//exportamos el modulo de rutas
module.exports = router;
