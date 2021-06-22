const mongoose = require('mongoose');
const {Schema} = mongoose;
const AlumnoSchema = new Schema({

 _id: {type: Number, required: true},
 apellido: {type: String, required: true},
 nombre: {type:String, required: true},
 telefono: {type:Number, required:true},
 dni: {type: Number, required: true},
 peso: {type:Number, required: true},
 fecha_nacimiento: {type:String, required: true},
 fecha_ingreso: {type:String, required: true},
 categoria: {type:String, required: true},
 domicilio: {type:String, required: true},
 plan: {type:String, required: true}

})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema);