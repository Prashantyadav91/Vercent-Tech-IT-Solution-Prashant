const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    desc1:{
        type: String
    },
    desc2:{
        type: String
    },
    desc3:{
        type: String
    },
    desc4:{
        type: String
    },
    image:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Service', serviceSchema)