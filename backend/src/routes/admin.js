const express = require('express')
const adminRouter = express.Router()
const {adminSignup, adminLogin, adminLogout} = require('../controllers/admin')

adminRouter.post('/login',adminLogin)
adminRouter.post('/signup',adminSignup)
adminRouter.post('/logout', adminLogout); 

module.exports = adminRouter