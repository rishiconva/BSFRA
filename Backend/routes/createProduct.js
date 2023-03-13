const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const Farmer = require('../models/farmer')



// router.post('/', (req, res, next) => {
//   console.log(req.body)
//     new product({
//       name: req.body.name,
//       category: req.body.category,
//       price: req.body.price,
//       quantity: req.body.quantity,
//       owner: req.body.owners
//     }).save()
//       .then(() => {
//         // console.log(product);
//         res.send("product Added Successfully");
//       })
//       .catch((err) => {
//         console.log(err);
//         res.send(err.message);
//       });
//   });


router.post("/", (req, res, next) => {
  const own = "";
    const product = new Product({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      owner: req.body.owner
    });
  
    product
      .save()
      .then(() => {
       
      console.log(product);
        res.send("product Added Successfully");
      })
      .catch((err) => {
        console.log(err);
        res.send(err.message);
      });
      Farmer.findOneAndUpdate(
        { email: req.body.owner },
        { $push: { products: product } },
      ).exec();
});  
module.exports = router