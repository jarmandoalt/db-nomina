const mongoose = require ('mongoose')

mongoose.connection.on('open', () => console.log('db connect'))

async function connectDb ({host, port, name}){
    const uri = `mongodb://${host}:${port}/${name}`
    await mongoose.connect(uri, {useNewUrlParser: true})
}

module.exports = connectDb