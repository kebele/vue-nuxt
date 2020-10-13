// firebase ile ilgili işlemleri burada yapacağız, firebase in sadece app kısmını kullanacağız

import firebase from "firebase/app"
import "firebase/auth"

//firebase ayarlarımızı tutacağımız config nesnesini hazırlayalım, firebase bize bazı değerler veriyor apikey, domain vb, bunları firebase sitesinden alalım, genel ayarlardan web uygulaması ekleyeceğiz, uygulamamıza bir isim verip kaydedelim,bize verdiği kod içinde firebaseconfig in karşısındaki nesneyi tamamen alalım ve bizim config e atayalım, bunları daha sonra .env dosyasına alıp göz önünden kaldıracağız, 
const config = {
    apiKey: "AIzaSyBCmimQ0nMdTXMBdQmcyYBtEf3WxWkU8R4",
    authDomain: "nuxt-auth-8a830.firebaseapp.com",
    databaseURL: "https://nuxt-auth-8a830.firebaseio.com",
    projectId: "nuxt-auth-8a830",
    storageBucket: "nuxt-auth-8a830.appspot.com",
    messagingSenderId: "984430755159",
    appId: "1:984430755159:web:666a6f0a047f6c6ad89212"
  }

  // eğer firebase.apps yoksa app i başlat ve içine bu config i yolla eğer varsa bir şey yapma
  !firebase.apps.length ? firebase.initializeApp(config) : ""

  //şimdi bu dosyayı dışarıya, firebase.auth olarak açalım, 
export const auth = firebase.auth()

//artık sıra pages içine projedeki kullanacağımız sayfaları yapmada

