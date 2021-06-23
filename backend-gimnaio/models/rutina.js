const mongoose = require('mongoose');
const {Schema} = mongoose;
const Alumno = require('./alumno');


const RutinaSchema = new Schema({
    tipo_rutina: {type: String, required: true},
    descripcion: {type: String, required: true},
    alumno: {type: Schema.Types.ObjectId, ref:Alumno, required:true}
})
module.exports = mongoose.models.Rutina || mongoose.model('Rutina', RutinaSchema);