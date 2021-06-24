const mongoose = require('mongoose');
const {Schema} = mongoose;
const Planes = require('./planes')

const AlumnoSchema = new Schema({
    apellido: {type: String, required: true},
    nombre: {type:String, required: true},
    dni: {type: String, required: true},
    fecha_nacimiento: {type:Date, required: true},
    celular: {type:String, required:true},
    domicilio: {type:String, required: true},
    email: {type:String, required: true},
    fecha_inicio: {type:Date, required: true},
    plan: {type: Schema.Types.ObjectId, ref: Planes, required: true}
})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema);