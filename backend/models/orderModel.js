const mongoose = require('mongoose')

const Schema = mongoose.Schema
const orderSchema = new Schema({
    order_id: {
        type: Number,
        required: true
    },
    customer_id: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema, "Orders")