const mongoose = require('mongoose')

const skillSchema = mongoose.Schema({
    name: String
})

 module.exports = mongoose.model('Skills', skillSchema)