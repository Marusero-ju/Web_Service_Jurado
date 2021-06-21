const mongoose = require('mongoose');
const {Schema} = mongoose;
const EjercicioSchema = new Schema({
 id_ejercicio: {type: Int16Array, required: true},   
 nombre: {type: CharacterData, required: true},
 img: {type: CharacterData, required: true},
 video: {type:CharacterData, required: true}
 
})
module.exports = mongoose.models.Ejercicio || mongoose.model('Ejercicio', EjercicioSchema);
