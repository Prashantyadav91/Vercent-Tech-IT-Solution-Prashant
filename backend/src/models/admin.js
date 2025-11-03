const mongoose = require('mongoose')

//Schema for admin collection

const adminSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Admin', adminSchema) //Message is the name of collection
