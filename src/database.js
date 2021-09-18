const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado a la base de datos");
}, err => {
    console.log("Error al conectar con la base de datos");
})

module.exports = mongoose;