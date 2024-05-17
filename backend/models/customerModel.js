const mongoose = require('mongoose')

const Schema = mongoose.Schema
const customerSchema = new Schema({

    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Customer', customerSchema, "Customers")

/*customer_id: {
    type: String,
    required: true,
},*/

/*
email: {
        type: String,
        required: true
    },
    birth_date: {
        type: String,
        required: true
    },
    */