const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const Farmer = require('../models/farmer');
const jwt = require('jsonwebtoken')




//get all products
router.get("/", async (req, res, next) => {
 
    Product.find({})
        .then(response => {
            if (!response) {
                return res.status(400).json({
                    type: "Not Found",
                    msg: "Invalid request"
                })
            }
            res.status(200).json({response});
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
  
}); 

router.get("/:id", (req, res, next) => {
    
    const id = req.params.id;
    Product.findById(id).then(response => {
            if (!response) {
                return res.status(500).json({
                    type: "Not Found",
                    msg: "Invalid request"
                })
            }else{
                res.status(200).json({
                    response
                })
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(501).send(err.message);
        });
});
router.get("/farmerProducts", (req, res, next) => {
    jwt.verify(req.cookies['token'], 'SECRET_KEY', (err, decoded) => {
        if(err){
            console.log(err)
            res.status(500).json(err)
        }else{
            console.log(decoded)
            Product.find({owner : decoded.email})
                .then(response => {
                    if(!response) return res.status(200).json({msg: "No Product found!"});
                    res.status(200).json({response});
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        }
})


// router.delete("/:id", (req, res, next) => {
//     // const id= req.body.id;
//     Product.findByIdAndRemove(id)
//     .then()
//     .catch()
// })

        
    // console.log(req.cookies['token'])

            
    
    // try{

    //     const response = await Product.find({
    //     c    "owner":decoded.email
    //     });
    //     if(!response) return res.status(200).json({msg: "No Product found!"});
    //     res.status(200).json(response);
    //     res.send(response);
    // }catch(error){
    //     console.log(error.message || error.code);
    // }
  
});



module.exports = router// // // // // // // // // //             