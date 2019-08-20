const mongoose=require('mongoose');

var ProductSchema = mongoose.Schema({
    name:{type:String},
    description:{type:String},
    actualprice:{type:Number},
    discountprice:{type:Number}
});

const Product = module.exports= mongoose.model('Product',ProductSchema);