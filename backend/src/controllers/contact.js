const {Contact,Consultation} = require('../models/contact') //importing user collection for accessing the collection


const getMessage = async (req,res) =>{
    try{
        const message = await Contact.find()
        res.status(200).json(message)
    }
    catch(err){
        res.status(500).json({message :err.message})
    }
}

const getConsult = async (req,res) =>{
    try{
        let consult = await Consultation.find()
        res.status(200).json(consult)
    }
    catch(err){
        res.status(500).json({message :err.message})
    }
}

const addMessage = async (req, res) => {
    const { name, email, number, enquiryType, message } = req.body //storing data in these variables from frontend

    if (!name || !email || !number || !enquiryType || !message) { //checking whether the user entered all the fields or not
        return res.json({ message: "All fields are required" })
    }
    if (number.length !== 10) { //checking whether the user entered a valid phone number or not
        return res.json({ message: "Please enter a valid phone number" })
    }
    const messages = new Contact({ name, email, number, enquiryType, message }) // passing all the data to the Message model as an object
    await messages.save() //saving the user's data in the database
    res.json({ message: "Message sent successfully" }) //sending a response to frontend

}

const addConsult = async (req, res) => {
    try 
    {
        const { name, email, number, service, visaStatus, technology } = req.body //storing data in these variables from frontend

        if (!name || !email || !number || !service || !visaStatus || !technology) { //checking whether the user entered all the fields or not
            return res.json({ message: "All fields are required" })
        }
        if (number.length !== 10) { //checking whether the user entered a valid phone number or not
            return res.json({ message: "Please enter a valid phone number" })
        }
        const consult = new Consultation({ name, email, number, service, visaStatus, technology }) // passing all the data to the Message model as an object
        await consult.save() //saving the user's data in the database
        res.json({ message: "Message sent successfully" }) //sending a response to frontend
    }
    catch (err) {
        res.status(500).json({message :err.message})
    }

}

const deleteMessage = async (req,res) =>{
    try{
        const {id} = req.params
        const message = await Contact.findByIdAndDelete(id)
        if(!message){
            res.status(404).json({message: "Not found"})
        }
        res.status(200).json({message: "Deleted successfully"})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

const deleteConsult = async (req,res) =>{
    try{
        const {id} = req.params
        const consult = await Consultation.findByIdAndDelete(id)
        if(!consult){
            res.status(404).json({message: "Not found"})
        }
        res.status(200).json({message: "Deleted successfully"})
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = { addMessage, addConsult, getMessage, getConsult, deleteMessage,deleteConsult }