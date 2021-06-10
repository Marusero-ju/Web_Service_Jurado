const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/proyectodb';
const URI = 'mongodb://localhost/dbpractica';
mongoose.connect(URI)
.then(db=>console.log('DadaBase is connected'))
.catch(err=>console.error(err + "No se conecto a la base de datos"))

module.exports = mongoose;