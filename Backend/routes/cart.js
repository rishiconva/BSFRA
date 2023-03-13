const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')
const Cart = require('../models/cart')
const Product = require('../models/product')

const { decode } = require('jsonwebtoken');
const jwt = require('jsonwebtoken')

// router.post("/", async (req, res, next) => {
//     try{
//         Customer.findOneAndUpdate(
//             { email: req.body.owner },
//             { $push: { order: product } },
//           ).exec();;
//         res.send(response);
//     }catch(error){
//         console.log(error.message || error.code);
//     }
    
// });





//get all products
router.get("/", async (req, res, next) => {
    try{
        const response = await Cart.find({});
        if(!response) return res.status(200).json({msg: "No Product found!"});
        res.status(200).json(response);
    }catch(err){
        console.log(err)
            res.status(400).json({
                type: "Invalid",
                msg: "Something went wrong",
                err: err
            })
    }
  
}); 

router.post("/add", async (req, res, next) => { 

        const id = req.body._id;
        // console.log(did)
        
            const cart = await Cart.findOne().populate({
                path: "products.productId",
                select: "name price"
            });
            Product.findById(id).then(response => {
                if (!response) {
                    return res.status(500).json({
                        type: "Not Found",
                        msg: "Invalid request"
                    })
            }

            })
            //     console.log("here is the response");
            //    console.log(response);
                //--If Cart Exists ----
                // if(cart){
                //     product_toAdd = {
                //         _id:id,
                //         price: req.body.price,
                //         name:req.body.name
                //       };
                //       console.log("Product to be added");

                //       console.log(  cart.products);



                  
                //         cart.products.push(product_toAdd);
                        
                //         cart.subTotal = cart.products.map(item => item.price).reduce((acc, next) => acc + next);
                // }
                // else{
                
                    const cartData = new Cart({
                        products: [{
                            _id: id,
                            price: req.body.price,
                            name:req.body.name
                        }],
                        subTotal: parseInt(req.body.price)
                    });
                    cartData
                       .save()
                       .then(() => {
               
                        console.log(cartData);
                          res.status(201).json(cartData);
                        })
                        .catch((err) => {
                            console.log(err);
                            res.send(err.message);
                        });
                // } 
                console.log("end");
                console.log(cart);
                
                //------------ This creates a new cart and then adds the item to the cart that has been created------------
               
        //     if (!response) {
        //         return res.status(500).json({
        //             type: "Not Found",
        //             msg: "Invalid request"
        //         })
        //     }
        // //     console.log("here is the response");
        // //    console.log(response);
        //     //--If Cart Exists ----
            
        //     //------------ This creates a new cart and then adds the item to the cart that has been created------------
        //     const cartData = new Cart({
        //         products: [{
        //             _id: id,
        //             price: response.price
        //         }],
        //         subTotal: parseInt(response.price ? 0 : response.price)
        //     });
        //     cartData
        //        .save()
        //        .then(() => {
       
        //         console.log(cartData);
        //           res.status(201).json(cartData);
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //             res.send(err.message);
        //         });
            // cart = await cartRepository.addItem(cartData)
                // let data = await cart.save();

} )

    




module.exports = router