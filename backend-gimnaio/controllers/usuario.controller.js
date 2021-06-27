const Usuario = require ('./../models/usuario')
const usuarioCtrl = {}

usuarioCtrl.getUsuarios = async (req, res) => {
    var usuarios = await Usuario.find();
    res.json(usuarios);
}


usuarioCtrl.createUsuario = async (req, res)=>{
 //en req.body se espera que vengan los datos de usuario a crear
 const usuario = new Usuario (req.body);
    try {
        await usuario.save();
        res.json({
            'status': '1',
            'msg': 'Usuario guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
        console.log(error)
    }
}


usuarioCtrl.loginUsuario = async (req, res)=>{
    //en req.body se espera que vengan las credenciales de login
    //defino los criterios de busqueda en base al username y password recibidos
    const criteria = {
        username: req.body.username,
        password: req.body.password,
    }
    console.log("Criteria",criteria);
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    Usuario.findOne(criteria, function(err, user) {
        //el método findOne retorna un objeto que cumpla con los criterios de busqueda
        if (err) {
            res.json({
                status: 0,
                msg: 'error'
            })
            console.log(err);
        };
        if (!user) {
            res.json({
                status: 0,
                msg: "Usuario no encontrado!" 
            })
            console.log("Usuario no encontrado!");
        } else {
            console.log("User", user)
            res.json({
                status: 1,
                msg: "Correcto!",
                username: user.username,
                perfil: user.perfil,
                userId: user._id
            });
        }
    })
}
//exportacion del modulo controlador
module.exports= usuarioCtrl;
