//defino controlador para el manejo de CRUD
const planesCtrl = require('./../controllers/planes.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', planesCtrl.getPlanes);
router.post('/', planesCtrl.createPlan);
router.get('/:id', planesCtrl.getPlan);
router.put('/:id', planesCtrl.editPlan);
router.delete('/:id', planesCtrl.deletePlan);


//exportamos el modulo de rutas
module.exports = router;
