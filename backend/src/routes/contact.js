const express  = require('express');
const contactRouter = express.Router();
const { addMessage, addConsult, getConsult, getMessage, deleteMessage, deleteConsult } = require('../controllers/contact'); // Importing the addMessage function from the controller

contactRouter.post('/addQuiry',addMessage)
contactRouter.post('/addConsult',addConsult)
contactRouter.get('/getQuiry',getMessage)
contactRouter.get('/getConsult',getConsult)
contactRouter.delete('/deleteQuiry/:id',deleteMessage)
contactRouter.delete('/deleteConsult/:id',deleteConsult)


module.exports = contactRouter