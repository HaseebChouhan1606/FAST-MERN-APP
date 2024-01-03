const express = require('express')
const router = express.Router();
const { allorders, orderbyID, addOrder, updateStatus } = require('../controller/orders')
router.get('/all-orders', allorders)
router.get('/order/:id', orderbyID)
router.post('/add-order', addOrder)
router.put('/update-status', updateStatus)


module.exports = router;