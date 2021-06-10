const Sector = require('../models/sector');
const sectorCtrl = {}

sectorCtrl.getSectores = async (req, res) => {
    var sectores = await Sector.find().populate("responsable");
    res.json(sectores);
}

sectorCtrl.createSector = async (req, res) => {
    var sector = new Sector(req.body);
    try {
        await sector.save();
        res.json({
            'status': '1',
            'msg': 'Sector guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

sectorCtrl.getSector = async (req, res) => {
    const sector = await Sector.findById(req.params.id);
    res.json(sector);
}

sectorCtrl.editSector = async (req, res) => {
    const vsector = new Sector(req.body);
    try {
        await Sector.updateOne({_id: req.body._id}, vsector);
        res.json({
            'status': '1',
            'msg': 'Sector updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}
sectorCtrl.deleteSector = async (req, res)=>{
 try {
    await Sector.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'Sector removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}

module.exports = sectorCtrl;