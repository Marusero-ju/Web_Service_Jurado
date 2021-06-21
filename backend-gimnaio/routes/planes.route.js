//defino controlador para el manejo de CRUD
const planesCtrl = require('./../controllers/planes.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', planesCtrl.getPlanes);
router.post('/', planesCtrl.createPlanes);
router.get('/:id', planesCtrl.getPlanes);
router.put('/:id', planesCtrl.editPlanes);
router.delete('/:id', planesCtrl.deletePlanes);


//exportamos el modulo de rutas
module.exports = router;
