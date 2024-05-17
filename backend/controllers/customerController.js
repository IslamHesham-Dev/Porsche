const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Customer = require('../models/customerModel')
const mongoose = require('mongoose')

// get all customers
const getCustomers = async (req, res) => {
    const customer = await Customer.find({}).sort({ createdAt: -1 })

    res.status(200).json(customer)
}


// get a single customer
const getCustomer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such customer' })
    }

    const customer = await Customer.findById(id)

    if (!customer) {
        return res.status(404).json({ error: 'No such customer' })
    }

    res.status(200).json(customer)
}


//create new customer
const createCustomer = async (req, res) => {
    //const { customer_id, username, password, email, birth_date } = req.body
    const { username, password } = req.body

    let emptyFields = []

    if (!username) {
        emptyFields.push('username')
    }
    if (!password) {
        emptyFields.push('password')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add a doc to db
    try {
        //const customer = await Customer.create({ customer_id, username, password, email, birth_date })
        const customer = await Customer.create({ username, password })
        res.status(200).json(customer)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a customer
const deleteCustomer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such customer' })
    }

    const customer = await Customer.findOneAndDelete({ _id: id })

    if (!customer) {
        return res.status(400).json({ error: 'No such customer' })
    }

    res.status(200).json(customer)
}


// update customer
const updateCustomer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such customer' })
    }

    const customer = await Customer.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!customer) {
        return res.status(400).json({ error: 'No such customer' })
    }

    res.status(200).json(customer)
}






// ---------------------------------------------------------------------------------


const register = async (req, res) => {
    try {
        //const { birth_date, email, username, password, customer_id } = req.body;
        const { username, password } = req.body;
        const existingCustomer = await Customer.findOne({ username });

        if (existingCustomer) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newCustomer = new Customer({
            /*customer_id,*/
            /*birth_date,*/
            /*email,*/
            username,
            password: hashedPassword,
        });
        await newCustomer.save();

        res.status(201).json({ message: "Customer registered successfully" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log("Login attempt for username:", username);

        const existingCustomer = await Customer.findOne({ username });

        if (!existingCustomer) {
            console.log("User not found");
            return res.status(401).json({ message: "Invalid username or password" });
        }

        console.log("Hashed password from database:", existingCustomer.password);
        console.log("Password provided:", password);

        // Test bcrypt functionality independently
        const testHash = await bcrypt.hash("test", 10);
        const testComparison = await bcrypt.compare("test", testHash);
        console.log("Test bcrypt hash and comparison:", testHash, testComparison);

        const isPasswordValid = await bcrypt.compare(
            password,
            existingCustomer.password
        );

        if (!isPasswordValid) {
            console.log("Invalid password");
            return res.status(401).json({ message: "Invalid username or password" });
        }

        console.log("Login successful");
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



// ---------------------------------------------------------------------------------



module.exports = {
    getCustomers,
    getCustomer,
    createCustomer,
    deleteCustomer,
    updateCustomer,
    register,
    login
}