const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "title is required"],
        minlength: [2, "title must be at least 2 characters"]
    },
    price:{
        type: Number,
        reqired: [true, "price is required"]
    },
    description:{
        type: String,
        required: [true, "description is required"],
        minlength: [5, "description must be at least 5 characters long"]
    }
},{timestamps: true})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product