const Card = require('../models/cardEntrenamiento');
const cardCtrl = {}

cardCtrl.getCards = async (req, res) => {
    var cards = await Card.find();
    res.json(cards);
}

cardCtrl.createCard = async (req, res) => {
    var card = new Card(req.body);
    try {
        await card.save();
        res.json({
        'status': '1',
        'msg': 'Card guardada.'})
    } catch (error) {
        res.json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}
cardCtrl.getCard = async (req, res) => {
    const card = await Card.findById(req.params.id);
    res.json(card);
}

cardCtrl.editCard = async (req, res) => {
    const vcard = new Card(req.body);
    try {
        await Card.updateOne({_id: req.body._id}, vcard);
        res.json({
            'status': '1',
            'msg': 'Card actualizado'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

cardCtrl.deleteCard = async (req, res)=>{
    try {
        await Card.deleteOne({_id: req.params.id});
            res.json({
            status: '1',
            msg: 'Card borrado'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

module.exports = cardCtrl;