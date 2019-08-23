const mongoose=require('mongoose');

var ProductSchema = mongoose.Schema({
    sellerName:{type:String},
    name:{type:String},
    description:{type:String},
    actualprice:{type:Number},
    discountprice:{type:Number},
    imagePath:{type:String}
});

const Product = module.exports= mongoose.model('Product',ProductSchema);