//defino controlador para el manejo de CRUD
const cardCtrl = require('./../controllers/cardEntrenamiento.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de card
router.get('/', cardCtrl.getCards);
router.post('/', cardCtrl.createCard);
router.get('/:id', cardCtrl.getCard);
router.put('/:id', cardCtrl.editCard);
router.delete('/:id', cardCtrl.deleteCard);
//ruta para el almacenamiento de imagen
// router.post('/upload')
//exportamos el modulo de rutas
module.exports = router;