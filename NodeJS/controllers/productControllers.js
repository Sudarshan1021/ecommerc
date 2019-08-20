const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const Product = require('../models/product');

router.get('/',(req,res)=>{
    Product.find((err,docs)=>{
        if(!err){
            res.send(docs);
            console.log("Retreived");
        }
        else{
            console.log('Error in retriving details' + JSON.stringify(err,undefined,2));
        }
    });
});

router.post('/',(req,res)=>{
    let prod = new Product({
        name:req.body.prodName,
        description:req.body.descb,
        actualprice:req.body.actprice,
        discountprice:req.body.disprice,
    });
    prod.save((err,prod)=>{
if(!err){res.json({msg:'Product added'});}
else{ console.log('Error in save product'+JSON.stringify(err,undefined,2));}
    });

});


router.get('/:id',(req,res)=>{

    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}');

    Product.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log("Error in retriving employees:"+JSON.stringify(err,undefined,2));}
    });
    
    // Product.findById(req.params.id).then(post=>{
    //     if(post){
    //         console.log("Success");
    //         res.status(200).json(post);}
    //     else{ 
    //         console.log("Failed");
    //         res.status(404).json({message:'Post not found!'});
    // }
    // });

});

router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}');

    const prod = new Product({
        _id:req.body.id,
        name:req.body.name,
        description:req.body.description,
        actualprice:req.body.actualprice,
        discountprice:req.body.discountprice,
    });
    // Product.findById(req.params.id,(err,product)=>{
    //     if(err){console.log("Error in Updating employees:"+JSON.stringify(err,undefined,2));}
    //     else{
    //         product.name=req.body.prodName;
    //         product.description=req.body.descb;
    //         product.actualprice=req.body.actprice;
    //         product.discountprice=req.body.disprice;
    //         product.save((err,prod)=>{
    //             if(!err){res.json({msg:'Product Updated'});}
    //             else{ console.log('Error in product update'+JSON.stringify(err,undefined,2));}
    //                 });
    //     }
    // });

    // Product.findByIdAndUpdate(req.params.id,{$set:prod},{new:true},(err,doc)=>{
    //     if(!err){res.send(doc);
    //     console.log("Updated successfully");}
    //     else{console.log('Error in update product'+JSON.stringify(err,undefined,2));}
    // });
    Product.updateOne({_id:req.params.id},prod).then(result=>{
        console.log(result);
        res.status(200).json({message:"Updated successfully"});
    });
    });


router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}');

    Product.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{ console.log('Error in Product Delete'+JSON.stringify(err,undefined,2));}
});

});


module.exports=router;