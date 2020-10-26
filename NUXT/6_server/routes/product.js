const router = require('express').Router();
const Product = require("../models/product") //models deki product ı çağırıyoruz

//post u hazırlayalım

router.post("/product", async (req,res) => {
    try {
        // çoklu data yollamak için yapacağımız şey farklı bir data türü tanımlamak ve bu data türü varsa ona göre işlem yapmak mesela buna multiData diyelim ve if hazırlayalım bu if in else ise aşağıdaji let kısmını bunun içine taşıyacağız, yani muştiData varsa xxx yapacak yoksa normal eski posttan tekil ürün kaydetme devam edecek
        if(req.body.multiData){
            Product.insertMany(req.body.multiData, (err)=>{
                if(err){
                    res.send(err)
                }else{
                    res.json({
                        success: true,
                        message: "products ARE saved succesfull",
                        products : req.body.multiData
                      });    
                }
            })
        }else{
            let product = new Product()
            product.title = req.body.title
            product.price = req.body.price
            product.stockNumber = req.body.stockNumber
            product.description = req.body.description
            product.photo = req.body.photo
            // product.category = req.body.category
            //admin sayfasındaki düzenleme sonrası buradaki yapıyı değiştirdik, hem models den hemde buradan
            product.mainCategory = req.body.mainCategory
            product.subCategory = req.body.subCategory
            //elemanları oluşturduk, kaydedelim

            await product.save()
            res.json({
                success: true,
                message: "product is saved succesfull",
                product : product
              });        
        }        
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
        let product = await Product.findOne({_id:req.params.id});
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

//update için gerekli olan put methodunu oluşturalım, 
router.put("/product/:id", async (req,res) => {
   
    try {
        let product = await Product.findOneAndUpdate({_id:req.params.id},{
            $set : {
                title : req.body.title,
            price : req.body.price,
            stockNumber : req.body.stockNumber,
            description : req.body.description,
            photo : req.body.photo,
            mainCategory : req.body.mainCategory,
            subCategory : req.body.subCategory,
            }
        }, {
            upsert : true
        });
        res.json({
            success: true,
            updatedProduct : product
          });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
})

//delete i hazırlayalım
router.delete("/product/:id", async (req,res) => {
   
    try {
        let product = await Product.findOneAndDelete({_id:req.params.id});
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