const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.SERVER_PORT;
var cors = require('cors')
const { connect } = require('mongoose')
const path = require('path')

const clientPath = path.join(__dirname, './dist')


//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use('/', express.static(clientPath))


//API ROUTES
app.use('/api', require('./router/users'))
app.use('/api', require('./router/orders'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
})


connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB Connected Successfully")
        app.listen(port, () => console.log(`App listening on http://localhost:${port}`))
    })
    .catch((err) => console.log(err))


