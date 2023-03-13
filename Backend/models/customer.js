const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = require('./product')


const CustomerSchema = new Schema({

    name:{
        type:String,
    },
    email:{
        type:String,
        required: true
    },
    contactNumber:{
        type:String,
    },
    address:{
        type:String,
    },
    password:{
        type:String,
    },
    order:{
        type:[{ type: Schema.Types.ObjectId, ref: 'Product' }],
    }
})

const Customer = mongoose.model('customer', CustomerSchema);

module.exports = Customer;
