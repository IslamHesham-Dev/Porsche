const Product = require('../models/productModel')
const mongoose = require('mongoose')

// get all products
const getProducts = async (req, res) => {
    const product = await Product.find({}).sort({ createdAt: -1 })

    res.status(200).json(product)
}


// get a single product
const getProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such product' })
    }

    const product = await Product.findById(id)

    if (!product) {
        return res.status(404).json({ error: 'No such product' })
    }

    res.status(200).json(product)
}


//create new product
const createProduct = async (req, res) => {
    const { VIN, price, year, engine_type, transmission, model, color } = req.body

    // add a doc to db
    try {
        const product = await Product.create({ VIN, price, year, engine_type, transmission, model, color })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such product' })
    }

    const product = await Product.findOneAndDelete({ _id: id })

    if (!product) {
        return res.status(400).json({ error: 'No such product' })
    }

    res.status(200).json(product)
}


// update a product
const updateProduct = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such product' })
    }

    const product = await Product.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!product) {
        return res.status(400).json({ error: 'No such product' })
    }

    res.status(200).json(product)
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}