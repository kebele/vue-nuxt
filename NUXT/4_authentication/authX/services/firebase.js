// firebase ile ilgili işlemleri burada yapacağız, firebase in sadece app kısmını kullanacağız

import firebase from "firebase/app"
import "firebase/auth"

//firebase ayarlarımızı tutacağımız config nesnesini hazırlayalım, firebase bize bazı değerler veriyor apikey, domain vb, bunları firebase sitesinden alalım, genel ayarlardan web uygulaması ekleyeceğiz, uygulamamıza bir isim verip kaydedelim,bize verdiği kod içinde firebaseconfig in karşısındaki nesneyi tamamen alalım ve bizim config e atayalım, 
const config = {
    apiKey: "AIzaSyBCmimQ0nMdTXMBdQmcyYBtEf3WxWkU8R4",
    authDomain: "nuxt-auth-8a830.firebaseapp.com",
    databaseURL: "https://nuxt-auth-8a830.firebaseio.com",
    projectId: "nuxt-auth-8a830",
    storageBucket: "nuxt-auth-8a830.appspot.com",
    messagingSenderId: "984430755159",
    appId: "1:984430755159:web:666a6f0a047f6c6ad89212"
  }
