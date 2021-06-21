const mongoose = require('mongoose');
const {Schema} = mongoose;
const PlanesSchema = new Schema({
 id_plan: {type: Int16Array, required: true},   
 nombre: {type: CharacterData, required: true},
 costo: {type: String, required: true},
 detalles: {type:CharacterData, required: true},
 frecuencia: {type:Int16Array, required: true}
 
})
module.exports = mongoose.models.Planes || mongoose.model('Planes', PlanesSchema);
