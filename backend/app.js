const express = require('express')
const mongoose = require('mongoose')
const { MONGOURI } = require('./Keys')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

//userschema
require('./user')
require('./Product')
//  middleware
app.use(express.json())
app.use(cors())
app.use(require('./auth'))
app.use(require('./productRoutes'))

mongoose.connect(MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
    console.log('connected to mongoose')
})
mongoose.connection.on('error', (err) => {
    console.log('error to mongoose', err)
})


app.listen(PORT, () => {
    console.log("server is running")
})