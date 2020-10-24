const router = require('express').Router();
const Product = require("../models/product") //models deki product ı çağırıyoruz

//post u hazırlayalım

router.post("/product", async (req,res) => {
    try {
        let product = new Product()
            product.title = req.body.title
            product.price = req.body.price
            product.stockNumber = req.body.stockNumber
            product.description = req.body.description
            product.photo = req.body.photo
            product.category = req.body.category
            //elemanları oluşturduk, kaydedelim

            await product.save()
            res.json({
                success: true,
                message: "product is saved succesfull",
              });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
})

//var olan bir ürünü getirmek
// /:id dedik bu id bilgisini dinamik olarak vereceğimiz için

router.get("/product/:id", async (req,res) => {
    //biz bir id eklemesek bile mongo biz db ye kayıt yaparken bir id ekleyecek, bide arama yaptırırken bu id ya göre aratacağız, 
    try {
        let product = await Product.findOne({_id:req.params.id}).exec();
        res.json({
            success: true,
            product : product
          });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
})

module.exports = router;