const mongoose = require('mongoose')

const connectDB = async () =>{ // function to connect Express.js to MongoDB
    await mongoose.connect(process.env.CONNECTION_STRING) 
    .then(()=>console.log('mongodb connected...')) //if connected then print this
    .catch((error)=>console.log(error)) //if something goes wrong, print the error
}

module.exports = {connectDB}