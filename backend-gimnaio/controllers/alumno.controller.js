const Alumno = require('../models/alumno');
const alumnoCtrl = {}

alumnoCtrl.getAlumno = async (req, res) => {
    var alumnos = await Alumno.find();
    res.json(alumnos);
}

alumnoCtrl.createAlumno = async (req, res) => {
 var alumno = new Alumno(req.body);
 try {
 await alumno.save();
 res.json({
 'status': '1',
 'msg': 'Alumno guardado.'})
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando operacion.'})
 }
}

alumnoCtrl.getAlumno = async (req, res) => {
 const alumno = await Alumno.findById(req.params.id);
 res.json(alumno);
}

alumnoCtrl.editAlumno = async (req, res) => {
 const valumno = new Alumno(req.body);
 try {
 await Alumno.updateOne({_id: req.body._id}, valumno);
 res.json({
 'status': '1',
 'msg': 'Alumno actualizado'
 })
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando la operacion'
 })
 }
}

alumnoCtrl.deleteAlumno = async (req, res)=>{
 try {
 await Alumno.deleteOne({_id: req.params.id});
 res.json({
 status: '1',
 msg: 'Alumno borrado'
 })
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando la operacion'
 })
 }
}
module.exports = alumnoCtrl;