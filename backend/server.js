const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
const { connectDB } = require('./src/config/connectDB')


const app = express();
app.use(express.json())
app.use(cors()) // helps to communicate between frontend and backend
app.use('/uploads', express.static('uploads'));


//port
const port = process.env.PORT || 3000;

//mongodb
connectDB()

//routes
app.use('/api/contact',require('./src/routes/contact'))
app.use('/api/service',require('./src/routes/service'))
app.use('/api/admin',require('./src/routes/admin'))

//server
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})