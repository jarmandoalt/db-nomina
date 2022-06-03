const express = require ('express')
const { addPayRoll, getPayRoll, deletePayRoll } = require ('../mongo/PayRollControll')
const api = express.Router()


api.delete('/new', deletePayRoll)
api.post('/new', addPayRoll)
api.get('/new', getPayRoll)

module.exports = api

