const Product = require("../models/product.model")

module.exports.apiTest = (req, res)=>{
    res.json({message: "It is working"})
}

module.exports.allProducts = (req, res)=>{
    Product.find()
        .then(productList=> res.json(productList))
        .catch(err=>res.json(err))
}

module.exports.oneProduct = (req, res)=>{
    
    Product.findOne({_id: req.params.id})
    .then(oneProduct=> res.json(oneProduct))
    .catch(err=>res.json(err))
}

module.exports.createProduct = (req, res)=>{
    newItem = req.body
    Product.create(newItem)
    .then(addedProduct=>res.json(addedProduct))
    .catch(err=>res.json(err))
}

module.exports.updateProduct = (req, res)=>{
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators:true}
    )
    .then(updatedProduct=> res.json(updatedProduct))
    .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req, res)=>{
    Product.deleteOne({_id:req.params.id})
    .then(message=>res.json(message))
    .catch(err=>res.json(err))
}