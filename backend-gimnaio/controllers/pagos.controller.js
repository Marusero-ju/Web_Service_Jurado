const Pago = require('../models/pago');

pagoCtrl.getPagos = async (req, res) => {
 var pagos = await Pago.find();
 res.json(pagos);
}

pagoCtrl.createpago = async (req, res) => {
 var Pago = new Pago(req.body);
 try {
 await pago.save();
 res.json({
 'status': '1',
 'msg': 'Pago guardado.'})
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando operacion.'})
 }
}

pagooCtrl.getPagos = async (req, res) => {
 const pago = await pago.findById(req.params.id);
 res.json(ejercicio);
}

pagoCtrl.editPago = async (req, res) => {
 const vpago= new Pago(req.body);
 try {
 await Ejercicio.updateOne({_id: req.body._id}, vpago);
 res.json({
 'status': '1',
 'msg': 'Pago updated'
 })
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando la operacion'
 })
 }
}

pagooCtrl.deletePago = async (req, res)=>{
 try {
 await Pago.deleteOne({_id: req.params.id});
 res.json({
 status: '1',
 msg: 'Pago removed'
 })
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando la operacion'
 })
 }
}
module.exports = pagoCtrl;
