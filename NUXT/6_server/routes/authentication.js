//token hazılayalım, kullanıcı sisteme kaydetmek
//sıfırdan kullanıcı oluşturmak


const router = require("express").Router();
const User = require("../models/user");
const verifyToken = require("../middleware/verify-token");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

//post işlemimizi yapalım
//burada yeni kayıt
router.post("/authentication/signup", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    //email yada password yoksa
    //o zman bu mesajı verecek
    res.json({
      success: false,
      message: "check email or password",
    });
  } else {
    try {
      // hem email hemde passwoprd varsa o zaman yeni user oluşturacak
      let newUser = new User({
      name : req.body.name, //body den name olarak bir degişken gelecek bunu buna ata
      email : req.body.email,
      password : req.body.password,
      phone : req.body.phone,
      address : req.body.address,
      });
      
      //
      let result = await newUser.save();
      console.log("result : " + result )
      // await newUser.save();
      // buradan bize bir token dönecek, daha önce tokan işlemlerini hazırlamıştık bize tokan lazımdı, işte await ile newUser hazırlandı burada da bu newUser daki bilgileri jsona çevir ve token olarak ata dedik, içine de SECRET_KEY'i veriyoruz
      let token = jsonwebtoken.sign(newUser.toJSON(), process.env.SECRET_KEY, {
        expiresIn: 31536000, //saniye olarak 1 yıl, bu tokan ın geçerlilik süresi
      });
      //bu işlemden bize dönen response u alalım
      //birde bu işlemlerde hata varsa onu yakalayalım diye tyr-catch içine alalım
      res.json({
        success: true,
        token: token,
        message: "user is created succesfull",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
});


// zaten kayıtlı kullanıcı sisteme alma
// router.post("authentication/signin", async (req,res) => {
//     try {
//         let anyUser = await User.findOne({email : req.body.email}) // eğer bir kullanıcı varsa içine değer alacak
//         if(!anyUser){
//             res.status(403).json({
//                 success : false,
//                 message : "user not found..."
//             })
//         }else{
//             if(anyUser.comparePassword(req.body.password)){
//                 let token = jsonwebtoken.sign(anyUser.toJSON(), process.env.SECRET_KEY, {
//                     expiresIn: 31536000, //saniye olarak 1 yıl, bu tokan ın geçerlilik süresi
//                   });
//             }
//             res.json({
//                 success: true,
//                 token: token,
//                 message: "user is signed in succesfull",
//               });
//         }
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message,
//           });
//     }
// })

//SIGNIN için tamamen farklı bir yapı kuracağız
router.post("/authentication/signin", async (req,res) => {
  await User.findOne({email:req.body.email})
    .then(user=>{
      if(!user) return res.status(400).json({message:"user not found..."})

      let token = jsonwebtoken.sign(user.toJSON(), process.env.SECRET_KEY, {
        expiresIn: 31536000 //saniye olarak 1 yıl, bu tokan ın geçerlilik süresi
      });

      bcrypt.compare(req.body.password, user.password, (err, data)=>{
        if(err) throw err
        
        
        if(data){
          return res.status(200).json({message:"login success...", token:token, user:user})
        }else{
          return res.status(401).json({message:"gecersiz giris..."})
        }
      })
    })
})

module.exports = router;
