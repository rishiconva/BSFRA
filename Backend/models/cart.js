const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = require('./product')
const customer = require('./product')


const CartSchema = new Schema({
    
    subTotal:{
        type:Number,
        default: 0
    },
    name:{
        type:String,
    },
    products:{
        type:[{ 
            type: Schema.Types.ObjectId, 
            productId: String, 
            name:{
                type:String,
            },
            price:{
                type:Number,
            },
            ref: 'product' 
        }],
    },
    // customer:{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'customer'
    // }
})

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;
