const mongoose = require('mongoose')

const Schema = mongoose.Schema
const prodcutSchema = new Schema({
    VIN: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    engine_type: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Product', prodcutSchema, "Products")