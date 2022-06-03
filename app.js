const express = require ('express')
const cors = require ('cors')
const app = express()
const PayRollRoute = require ('./routes/PayRollRoute')

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.use('/v1', PayRollRoute)


module.exports = app