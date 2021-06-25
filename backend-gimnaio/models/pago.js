const mongoose = require('mongoose');
const {Schema} = mongoose;
const Alumno = require('./alumno')

const PagoSchema = new Schema({
   
    
    monto:{type:Number,required:true},
    fecha_pago:{type: Date, required:true},
    fecha_vencimiento:{type:Date, required:true},
    forma_pago:{type:String, required:true},
    completo:{type:Boolean, required:true},
    alumno: {type: Schema.Types.ObjectId, ref: Alumno, required: true}
 
})
module.exports = mongoose.models.Pago || mongoose.model('Pago', PagoSchema);
