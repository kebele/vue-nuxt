// token ı verify etmek için gerekli midlleware yapısını kuracağız, middleware klasörü > verify-token.js

//burada bir token oluşturmuyoruz token kontrol yapısını kuruyoruz
// importumuzu yapalım
const jsonwebtoken = require("jsonwebtoken");

// modulumuzu doğrudan export edelim
module.exports = function( req, res, next){
    let token = req.headers['x-access-token'] || req.headers["authorization"];
    //token ı tanımladık
    let checkBearer = "Bearer "; //bazı tarayıcılarda tokanın başına böyle bir ibare koyuyor

    if(token){
        //eğer tokan varsa Bearer ile mi başlıyor, bundan arındırmayı yapalım, eğer yoksa normal yola devam, kontrol ede3cek, bu kontrolude .env ya yazdığımız SECRET_KEY ile yapacak, hata varsa... yoksa decode edecek, eğer tokan yoksa token yok diyecek
        //daha token yok buna dikkat
        //token routes > authentication.js içinde oluşturulacak
        
        if(token.startWith(checkBearer)){
            token = token.slice(checkBearer.length, token.length);
        }
        jsonwebtoken.verify(token), process.env.SECRET_KEY,(err,decoded) => {
            if(err){
                res.json({
                    success : false,
                    message : "token verify error..."
                })
            }else{
                req.decoded = decoded
            }
        }
    }else{
        res.json({
            success : false,
            message : "token not found..."
        })
    }
}