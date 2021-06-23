const Rutina = require('../models/rutina');
const rutinaCtrl = {}

rutinaCtrl.getRutinas = async (req, res) => {
    var rutinas = await Sector.find().populate("alumno");
    res.json(rutinas);
}

rutinaCtrl.createRutina = async (req, res) => {
 var rutina = new Rutina(req.body);
 try {
 await rutina.save();
 res.json({
 'status': '1',
 'msg': 'Rutina guardada.'})
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando operacion.'})
 }
}

module.exports = rutinaCtrl;