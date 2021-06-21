const mongoose = require('mongoose');
const {Schema} = mongoose;
const PagoSchema = new Schema({
   
    id_alumno: {type: Int16Array, required: true},
    id_pago: {type:Int16Array, required: true},
    fecha_pago:{type: Date, required:true},
    monto:{type:Int16Array,required:true},
    Fecha_vencimiento:{type:Date, required:true},
    forma_pago:{type:CharacterData, required:true},
    completo:{type:Boolean, required:true},
    
 
})
module.exports = mongoose.models.Pago || mongoose.model('Pago', PagoSchema);
