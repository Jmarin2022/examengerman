const { response } = require('express')
const Encuesta = require('../models/encuesta')

const getEncuesta = async(req, res = response) => {
   
    const encuesta = await Encuesta.find()
    res.json({
        msg: 'GET API Encuesta',
       encuesta
    })
}

const postEncuesta = async (req, res) => {
    
    const { titulo,nombre, documento,fecha,  edad, genero, empleado, almacena } = req.body

    
    const encuesta = new Encuesta({ titulo,nombre, documento,fecha,  edad, genero, empleado, almacena })


    await encuesta.save()

    res.json({
        msg: 'POST API ENCUESTA',
        encuesta
    })
}

const deleteEncuesta = async( req, res) => {
    const { documento} = req.query

    const encuesta = await Encuesta.findOneAndDelete({documento : documento})

    res.json({
        msg: 'DELETE API ENCUESTA',
        encuesta
    })
}

const putEncuesta = async ( req, res) => {
    const { nombreAnterior, nombreNuevo,titulo,documento,fecha,  edad, genero, empleado, almacena } = req.body

    const encuesta = await Encuesta.findOneAndUpdate({nombre: nombreAnterior},{nombre:nombreNuevo, titulo:titulo, documento:documento, fecha:fecha,  edad:edad, genero:genero, empleado:empleado, almacena:almacena})

    res.json({
        msg: 'PUT API ENCUESTA',
        encuesta
    })
}

const patchEncuesta = async (req, res) => {
const { titulo, almacena} = req.query 
const encuesta = Encuesta.findByIdAndUpdate({titulo: titulo}, {almacena: almacena})

    
}
module.exports = {
    getEncuesta,
    postEncuesta,
    putEncuesta,
    deleteEncuesta,
    patchEncuesta
}