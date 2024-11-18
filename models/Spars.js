const mongoose = require('mongoose')

const SparsSchema = new mongoose.Schema({
    bizName: {
        type: String,
        required: true,
    },
    customer: {
        type: String,
        required: true,
    },
    pickUp: {
        type: String,
        required: true,
    },
    mast: {
        type: Boolean,
        required: true,
    },
    gaff: {
        type: Boolean,
        required: true,
    },
    boom: {
        type: Boolean,
        required: true,
    },
    club: {
        type: Boolean,
        required: true,
    },
    workStatus: {
        type: String,
        required: true,
    },
    curLocation: {
        type: String,
        required: true,
    },
    workOrder: {
        type: String,
        required: false,
    } 
})

module.exports = mongoose.model('Spars', SparsSchema)