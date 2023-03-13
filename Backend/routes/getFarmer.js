const express = require('express')
const router = express.Router()
const Farmer = require('../models/farmer')

//get all farmers 
router.post("/", async (req, res, next) => {
    try{
        const response = await Farmer.find({});
        res.send(response);
    }catch(error){
        console.log(error.message || error.code);
    }
    
});

module.exports = router