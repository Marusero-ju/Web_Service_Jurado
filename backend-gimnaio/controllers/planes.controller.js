const Planes = require('../models/planes');
const planesCtrl = {}
planesCtrl.getPlanes = async (req, res) => {
 var planes = await Planes.find();
 res.json(planes);
}
planesCtrl.createPlanes = async (req, res) => {
 var planes = new Planes(req.body);
 try {
 await planes.save();
 res.json({
 'status': '1',
 'msg': 'Planes guardado.'})
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando operacion.'})
 }
}
PlanesCtrl.getPlanes = async (req, res) => {
 const planes = await Planes.findById(req.params.id);
 res.json(planes);
}
planesCtrl.editPlanes = async (req, res) => {
 const vplanes = new Planes(req.body);
 try {
 await Planes.updateOne({_id: req.body._id}, vplanes);
 res.json({
 'status': '1',
 'msg': 'Planes updated'
 })
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando la operacion'
 })
 }
}
planesCtrl.deletePlanes = async (req, res)=>{
 try {
 await Planes.deleteOne({_id: req.params.id});
 res.json({
 status: '1',
 msg: 'Planes removed'
 })
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando la operacion'
 })
 }
}
module.exports = planesCtrl;
