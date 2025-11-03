const Service = require('../models/service')

const getService = async (req,res) =>{
  try{
    const service = await Service.find();
    res.status(200).json(service)
  }
  catch(error){
    res.status(500).json({error: 'Error to fetching services'})
  }
}

const addService = async (req,res) => {
  try {
    const { title, desc, desc1, desc2, desc3, desc4 } = req.body;
    const image = req.file ? req.file.filename : null;

    if(!title || !desc || !image){
      return res.status(500).json({error: 'all fields are required'})
    }

    const newService = new Service({
      title,
      desc,
      desc1, 
      desc2, 
      desc3, 
      desc4,
      image
    });

    await newService.save();
    res.json({ message: "Post created successfully",service: newService});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {addService,getService}