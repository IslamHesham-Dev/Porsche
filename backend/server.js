require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/Products')
const customerRoutes = require('./routes/Customers')
const orderRoutes = require('./routes/Orders')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/Products', productRoutes)
app.use('/api/Customers', customerRoutes)
app.use('/api/Orders', orderRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listeneing on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

