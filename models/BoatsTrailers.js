const mongoose = require('mongoose')

const BoatsTrailersSchema = new mongoose.Schema({
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
    boatType: {
        type: String,
        required: true,
    },
    trailer: {
        type: Boolean,
        required: true,
    },
    straps: {
        type: Boolean,
        required: true,
    },
    spars: {
        type: Boolean,
        required: true,
    },
    sailAndCover: {
        type: Boolean,
        required: true,
    },
    rudder: {
        type: Boolean,
        required: true,
    },
    tiller: {
        type: Boolean,
        required: true,
    },
    painter: {
        type: Boolean,
        required: true,
    },
    mainsheet: {
        type: Boolean,
        required: true,
    },
    coverbar: {
        type: Boolean,
        required: true,
    },
    boomCrutch: {
        type: Boolean,
        required: true,
    },
    pump: {
        type: Boolean,
        required: true,
    },
    paddle: {
        type: Boolean,
        required: true,
    },
    cushions: {
        type: number,
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

module.exports = mongoose.model('BoatsTrailers', BoatsTrailersSchema)