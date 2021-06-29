const mongoose = require('mongoose');
const {Schema} = mongoose;
const Alumno = require('./alumno')

const AsistenciaSchema = new Schema({
 fecha: {type: Date, required: true},
 alumno: {type: Schema.Types.ObjectId, ref: Alumno, required: true}
})
module.exports = mongoose.models.Asistencia || mongoose.model('Asistencia', AsistenciaSchema);