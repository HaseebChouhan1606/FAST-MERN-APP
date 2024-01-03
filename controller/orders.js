const Orders = require('../schema/orders')

const allorders = async (req, res) => {
    try {

        const orders = await Orders.find()
        res.json({ orders })

    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}


const orderbyID = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

const addOrder = async (req, res) => {
    try {

        const { user, products, total } = req.body

        const order = await Orders.create({ user, products, total })
        res.status(201).json({ message: "Order Placed Successfully", id: order._id })

    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

const updateStatus = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json({ message: error.message })

    }
}

module.exports = { allorders, orderbyID, addOrder, updateStatus }