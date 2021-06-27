const mongoose = require("mongoose");
const {Schema} = mongoose;

const CardSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    img: {type: String, required: true},
});
//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.model('Card', CardSchema);