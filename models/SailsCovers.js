const mongoose = require('mongoose')

const SailsCoversSchema = new mongoose.Schema({
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
    mainsail: {
        type: Boolean,
        required: true,
    },
    jib: {
        type: Boolean,
        required: true,
    },
    spinaker: {
        type: Boolean,
        required: true,
    },
    cockpitCover: {
        type: Boolean,
        required: true,
    },
    mainSailCover: {
        type: Boolean,
        required: true,
    },
    jibCover: {
        type: Boolean,
        required: true,
    },
    comboCover: {
        type: Boolean,
        required: true,
    },
    workStatus: {
        type: Boolean,
        required: true,
    },
    curLocation: {
        type: String,
        required: true,
    },
    workOrder: {
        type: String,
        required: true,
    }
})