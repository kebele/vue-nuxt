//nuxt server başlatılırken sistem kullanıcı var mı yok mu?

import JWTDecode from "jwt-decode";
// var olan cookie yi kontrol etmek
import cookieparser from "cookieparser";

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    //nuxt server ın işi server başladığından erver side daki datayı client da kullanabilmek için
    //önce side ımızı kontrol edelim
    if (process.server && process.static) return;
    // eğer static halde isek ve server daysak buradan çok return yap yani

    if (!req.headers.cookie) return;
    //eğer requestte bir cookie yoksa buradan çık

    // şimdi sistemde bir cookie var buraya kadar çıkmadığına göre, bu cookie yi işlememiz lazım
    const parsedCookie = cookieparser.parse(req.headers.cookie);

    //eğer bu parse edilmiş cookie de access_token yoksa çık
    if (!parsedCookie.access_token) return;

    //burada kullandığımız access_token JWT ile şifreli halde bunu çözmemiz lazım
    const decoded = JWTDecode(parsedCookie.access_token);
    // cookide ki bilgilerei decoded e atadık şimdi bunları users > index.js ye gönderelim
    if (decoded) {
      commit("saveUser", {
        email: decoded.email,
        uid: decoded.user_id
        //buradaki email ve user_id response ile dönen veride bulunanlar yani consolden çıktı alsaydık firebase den bize bu isimlerle dönecek,
      });
    }
  }
};
//commit i gönderdik, artık sıkıntısız çalışır, kullanıcı oluşturma işlemleri tamamlandı, 
// artık firebase işlemleri için services > firebase.js klasörünü hazırlayabiliriz 