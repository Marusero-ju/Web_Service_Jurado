const mongoose = require('mongoose');
const {Schema} = mongoose;
const Agente = require('./agente');

const SectorSchema = new Schema({

    nombre: {type: String, required: true},
    funcion: {type: String, required: true},
    email: {type:String, required: true},
    responsable: {type: Schema.Types.ObjectId, ref: Agente, required: true}
})
module.exports = mongoose.models.Sector || mongoose.model('Sector', SectorSchema);