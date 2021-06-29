const Dia = require('../models/dia-rutina');
const diaCtrl = {}

diaCtrl.getDias = async (req, res) => {
    var dias = await Dia.find();
    res.json(dias);
}

diaCtrl.createDia = async (req, res) => {
    var dia = new Dia(req.body);
    try {
        await dia.save();
        res.json({
        'status': '1',
        'msg': 'Dia guardado.'})
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
        console.log('Error ', error);
    }
}

diaCtrl.getDia = async (req, res) => {
    const dia = await Dia.findById(req.params.id);
    res.json(dia);
}

diaCtrl.editDia = async (req, res) => {
    const vdia = new Dia(req.body);
    console.log("update",vdia);
    try {
        await Dia.updateOne({_id: req.body._id}, vdia);
        console.log("ingreso al try",req.body._id);
        res.json({
            'status': '1',
            'msg': 'Dia actualizado'
        })
    } catch (error) {
        console.log("ingreso al catch");
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

diaCtrl.deleteDia = async (req, res)=>{
    try {
        await Dia.deleteOne({_id: req.params.id});
            res.json({
            status: '1',
            msg: 'Dia borrado'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = diaCtrl;