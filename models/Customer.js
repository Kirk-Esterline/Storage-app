const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: false,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    deliveryAddress: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)