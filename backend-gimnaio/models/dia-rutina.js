const mongoose = require('mongoose');
const {Schema} = mongoose;

const DiaSchema = new Schema({
    dia: {type: Number, required: true}
       
})
module.exports = mongoose.models.Dia || mongoose.model('Dia', DiaSchema);