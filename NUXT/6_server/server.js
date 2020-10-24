// server ımızı oluşturalım, importlarımızı alalım, midlleware leri hazılayalım
const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const app = express();

app.use(cors());
app.use(morgan("dev")) // http istekleri için 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends:false}))

dotenv.config()

//mongoya bağlanabilmek için gerekli kısım
//burada mongoya bağlanamamam olablir bu durumda mongoya gidip eksik bir şey var mı diye kontrol, ip adresi eklenmemiş olabilir, network access ten 0.00.0 gibi bir şey veririsek her yerden data kabul eder biz burada sonuçta deneme yapıyoruz, eğitim amaçlı

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}, err=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected to MONGO_DB")
    }
})

app.listen(8080, err=>{
    if(err){
        console.log(err)
    }else{
        console.log("8080 port listens...")
    }
})

//terminalden çalıştıralım node server komutu ile hangi dosyayı çalıştıracaksak onun adını yazarak
//problem yok