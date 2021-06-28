//defino controlador para el manejo de CRUD
const diaCtrl = require('./../controllers/dia-rutina.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de Dia
router.get('/', diaCtrl.getDias);
router.post('/', diaCtrl.createDia);
router.get('/:id', diaCtrl.getDia);
router.put('/:id', diaCtrl.editDia);
router.delete('/:id', diaCtrl.deleteDia);
//exportamos el modulo de rutas
module.exports = router;