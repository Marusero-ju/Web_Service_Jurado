//defino controlador para el manejo de CRUD
const alumnoCtrl = require('./../controllers/alumno.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de alumno
router.get('/', alumnoCtrl.getAlumno);
router.post('/', alumnoCtrl.createAlumno);
router.get('/:id', alumnoCtrl.getAlumno);
router.put('/:id', alumnoCtrl.editAlumno);
router.delete('/:id', alumnoCtrl.deleteAlumno);
//exportamos el modulo de rutas
module.exports = router;