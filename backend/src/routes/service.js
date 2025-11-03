const express  = require('express');
const serviceRouter = express.Router();
const { addService, getService } = require('../controllers/service'); // Importing the addMessage function from the controller
const upload = require('../middleware/multer')

serviceRouter.post('/addService',upload.single("image"),addService)
serviceRouter.get('/getService',getService)



module.exports = serviceRouter