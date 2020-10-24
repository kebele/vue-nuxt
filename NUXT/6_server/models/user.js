// bu dosyada hazırlayacağımız schema ile mongoya veri yollayacağız ayrıca buradaki bcrypt ile kullanıcının adını şifresi falan işin içine dahil edeceğiz, 

const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

//schema yı hazırlayalım, isim, email, password, kısımları olacak
const UserSchema = new Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    phone : Number,
    address : String
});

// schema tamam
// datamış değişmiş mi kontrolu, değişmediyse veya yeni ise bcrypt ile 10 lu olarak şifreliyoruz, şifrelenmişi hash liyoruz ve db ye kaydediyoruz (bunu daha eklemedik aşağıya, ekleyeceğiz)
UserSchema.pre('save', function(next){
    let user = this;
    if(this.isModified('password') || this.isNew){
        bcrypt.genSalt(10,function(err,salt){
            if(err){
                return next(err);
            }
        })
        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err){
                return next(err);
            }
            user.password = hash;
            next();
        })
    }else{
        return next()
    }
})

// burad da paswordları bizdekiyle karşılaştırıyoruz, aynı mı değil mi diye
UserSchema.methods.comparePassword = function(password, next){
    let user = this;
    return bcrypt.compareSync(password,user.password)
}

module.exports = mongoose.model("User", UserSchema);

// user schema tamam şimdi product.js de product schemayı oluşturlalım