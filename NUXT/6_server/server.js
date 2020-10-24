// server ımızı oluşturalım, importlarımızı alalım, midlleware leri hazılayalım
const express = require("express") // server oluşturmak için
const morgan = require("morgan") //http istekleri için
const dotenv = require("dotenv") // çevresel değişkenler için
const cors = require("cors") // dış bağlantılar için 
const bodyParser = require("body-parser") // gelen datayı kontrol ve dönüştürmek için
const mongoose = require("mongoose") // mongo db ye bağlanmak için
// bütün diğer dosyaları, öodels içini routers içindekileri hazırladık artık route ları buraya getirelim
const productRoutes = require("./routes/product")
const userMethods = require("./routes/authentication")


const app = express();

app.use(cors());
app.use(morgan("dev")) // http istekleri için, dev dışında başka farklı ayarlarda var, şu anda dev ortamında old. için bu ayarı verdik 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends:false}))

//routes ları kullanalım
app.use("/api", productRoutes)
app.use("/api", userMethods)
//server yapısını tamamladık,

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