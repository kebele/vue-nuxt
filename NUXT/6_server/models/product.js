// user schema tamam şimdi product.js de product schemayı oluşturlalım
// yine models deyiz, zaten models in görevi schemalar
const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Category = new Schema({
    main : String,
    sub : String
})

const ProductSchema = new Schema({
    title : String,
    price : Number,
    stockNumber : Number,
    description : Array,
    photo : Array,
    // category : [Category]
    mainCategory : String,
    subCategory : String
})



module.exports = mongoose.model("Product", ProductSchema);

//product schema da hazır