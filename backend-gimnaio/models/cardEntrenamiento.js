const mongoose = require("mongoose");
const path = require('path');
const {Schema} = mongoose;

const CardSchema = new Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true},
    img: {type: String, required: true},
});

//Methods 

CardSchema.methods.setImgUrl = function setImgUrl(filename){
    this.img = `http://localhost:3000/image/${filename}`;
    // this.img = path.join(__dirname, 'storage/images/'+ `${filename}`)
}


//exporto objeto para que pueda ser usado en otros lugares
module.exports = mongoose.model('Card', CardSchema);