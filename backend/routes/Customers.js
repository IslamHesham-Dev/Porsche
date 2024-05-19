const express = require('express')
const {
    getCustomers,
    getCustomer,
    createCustomer,
    deleteCustomer,
    updateCustomer,
    login,
    register
} = require('../controllers/customerController')


const router = express.Router()

const customerController = require('../controllers/customerController')


// GET all customers
router.get('/', getCustomers)

// GET a single customer
router.get('/:id', getCustomer)

// POST a new customer
router.post('/', createCustomer)

// DELETE a customer
router.delete('/:id', deleteCustomer)

// UPDATE a customer
router.patch('/:id', updateCustomer)



router.post("/register", customerController.register);
router.post("/login", customerController.login);


module.exports = router