const { Schema, model } = require('mongoose')

const OrderSchema = new Schema(
    {
        user: {
            name: { type: String, required: true },
            address: { type: String, required: true },
            email: { type: String, required: true },
        },
        total: { type: Number, required: true },
        products: [
            {
                id: { type: String, required: true },
                title: { type: String, required: true },
                quantity: { type: Number, required: true },
                price: { type: Number, required: true },
            }
        ],
        status : {type : String , default : "Pending"}

    }
)

const Orders = model('orders', OrderSchema);
module.exports = Orders