const express = require('express')
const connectDB = require('./models/db.js')
require('dotenv').config()
require('./models/db')

const port = process.env.PORT
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/alumni', require('./routes/alumniRoutes.js'))

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})