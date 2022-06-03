const mongoose = require ('mongoose')
const { Schema } = mongoose
const { appConfig } = require ('../config')

const schemaPayRoll = new Schema ({
    name: String,
    lastname: String,
    nomina: Number,
    ingreso: String,
    baja: String,
    puesto: String
},{
    timestamps: true
})

module.exports = mongoose.model('PayRoll', schemaPayRoll)