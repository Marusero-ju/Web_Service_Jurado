const mongoose = require('mongoose');
const {Schema} = mongoose;
const AlumnoSchema = new Schema({

 _id: {type: Number, required: true},
 apellido: {type: String, required: true},
 nombre: {type:String, required: true},
 dni: {type: Number, required: true},
 fecha_nacimiento: {type:String, required: true},
 celular: {type:Number, required:true},
 domicilio: {type:String, required: true},
 email: {type:String, required: true},
 fecha_inicio: {type:String, required: true},
 plan: {type:String, required: true}

})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema);