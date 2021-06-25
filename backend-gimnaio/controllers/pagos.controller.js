const Pago = require('../models/pago');
const pagoCtrl = {}

pagoCtrl.getPagos = async (req, res) => {
 var pagos = await Pago.find().populate("alumno");
 res.json(pagos);
}

pagoCtrl.createPago = async (req, res) => {
    var pago = new Pago(req.body);
    console.log(pago)
    try {
        await pago.save();
        res.json({
            'status': '1',
            'msg': 'Pago guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
        console.log('Error ', error);
    }
}

pagoCtrl.getPago = async (req, res) => {
    const pago = await Pago.findById(req.params.id).populate("alumno");
    res.json(pago);
}

pagoCtrl.editPago = async (req, res) => {
    const vpago= new Pago(req.body);
    try {
        await Pago.updateOne({_id: req.body._id}, vpago);
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

pagoCtrl.deletePago = async (req, res)=>{
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
