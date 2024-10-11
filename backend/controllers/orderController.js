const Order = require('../models/orderModel')
const mongoose = require('mongoose')

// get all orders
const getOrders = async (req, res) => {
    const order = await Order.find({}).sort({ createdAt: -1 })

    res.status(200).json(order)
}


// get a single order
const getOrder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such order' })
    }

    const order = await Order.findById(id)

    if (!order) {
        return res.status(404).json({ error: 'No such order' })
    }

    res.status(200).json(order)
}


//create new order
const createOrder = async (req, res) => {
    const { order_id, customer_id, date, price } = req.body

    // add a doc to db
    try {
        const order = await Order.create({ order_id, customer_id, date, price })
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete order
const deleteOrder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such order' })
    }

    const order = await Order.findOneAndDelete({ _id: id })

    if (!order) {
        return res.status(400).json({ error: 'No such order' })
    }

    res.status(200).json(order)
}


// update customer
const updateOrder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such order' })
    }

    const order = await Order.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!order) {
        return res.status(400).json({ error: 'No such order' })
    }

    res.status(200).json(order)
}


module.exports = {
    getOrders,
    getOrder,
    createOrder,
    deleteOrder,
    updateOrder
}