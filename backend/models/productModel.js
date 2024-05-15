const mongoose = require('mongoose')

const Schema = mongoose.Schema
const prodcutSchema = new Schema({
    VIN: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
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