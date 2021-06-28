var express = require('express');
var app = express();
const {mongoose} = require('./database')

const cors = require('cors');
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/alumno', require('./routes/alumno.route.js'));
app.use('/api/plan', require('./routes/planes.route.js'));
app.use('/api/pago', require('./routes/pago.route.js'));
app.use('/api/usuarios', require('./routes/usuario.route'));
app.use('/api/asistencia', require('./routes/asistencia.route.js'));
app.use('/api/card', require('./routes/cardEntrenamiento.route.js'));


//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
 console.log(`Server started on port`, app.get('port'));
});


/*
app.listen(3000, function() {
    console.log('listening on 3000')
  })

  app.get('/', function(req, res) {
    res.send('Hello World')
  })

  app.('/', function(req, res) {
    res.send('Hello World')
  })*/