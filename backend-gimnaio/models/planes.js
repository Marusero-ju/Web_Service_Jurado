const mongoose = require('mongoose');
const {Schema} = mongoose;
const PlanesSchema = new Schema({  
    nombre: {type: String, required: true},
    costo: {type: Number, required: true},
    detalles: {type:String, required: true},
    frecuencia: {type:Number, required: true}
 
})
module.exports = mongoose.models.Planes || mongoose.model('Planes', PlanesSchema);
