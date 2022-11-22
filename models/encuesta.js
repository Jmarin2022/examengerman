const {Schema, model} = require('mongoose')

const EncuestaSchema = Schema({
    titulo:{
        type: String
    },
    nombre:{
        type: String
    },
    documento:{
        type: Number
    },
    fecha:{
        type: String
    },
    edad:{
        type: Number
    },
    genero:{
        type: String
    },
    empleado:{
        type: String
    },
    almacena:{
        type: String
    }
})


module.exports = model('Encuesta',EncuestaSchema)