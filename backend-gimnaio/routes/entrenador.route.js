//defino controlador para el manejo de CRUD
const entrenadorCtrl = require('./../controllers/entrenador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de entrenador
router.get('/', entrenadorCtrl.getEntrenador);
router.post('/', entrenadorCtrl.createEntrenador);
router.get('/:id', entrenadorCtrl.getEntrenador);
router.put('/:id', entrenadorCtrl.editEntrenador);
router.delete('/:id', entrenadorCtrl.deleteEntrenador);
//exportamos el modulo de rutas
module.exports = router;