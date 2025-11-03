const mongoose = require('mongoose')

//Schema for message collection

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    enquiryType:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

const consultSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    service:{
        type: String,
        required: true
    },
    visaStatus:{
        type: String,
        required: true
    },
    technology:{
        type: String,
        required: true
    }
})

const Contact = mongoose.model('Contact', contactSchema) //Message is the name of collection

const Consultation = mongoose.model('Consultation', consultSchema)

module.exports = {Contact,Consultation}