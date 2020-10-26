import JWTDecode from "jwt-decode"
import cookieparser from "cookieparser"


export const state = () => ({
    name : null,
    email : null
})

export const actions = {
    //burası sistemimizden çıkıldığında sistemimize kaydedilen cookie i alacağımız alan, sistemden çıkıldı daa onra geri gelindi, nuxtServerInıt yeniden sisteme dönüldüğünde ilk kontrol edeceği kısımdır, burada bazı kontroller yapacağız
    nuxtServerInit({commit},{req}){
        if(process.server && process.static) return
        if(!req.headers.cookie) return //eğer sistemde herhangibir cookie yoksa buradan çık

        //cookie var olma durumu
        const parsedCookie = cookieparser.parse(req.headers.cookie) //burası req.headers ı parçalayıp cookie arayacak orada
        //şimdi token ı alıp karşılşatırmamız lazım
        const parsedToken = parsedCookie.access_token //parse edilmiş token ı da bir değişkene atadık
//hata var mı kontrol edelim
        if(!parsedToken) return //parsed token yoksa return et yani uradan çık
        //parsed token var
        const decoded = JWTDecode(parsedToken)
        //artık elimizde decode edilmiş bir token ımız var
        //tekrar bir kontrol yapalım
        if(decoded){
            commit("setUser", {
                name: decoded.name,
                email: decoded.email
              });
        }

    }
}

export const mutations = {
    setUser(state, user){
        state.name = user.name;
        state.email = user.email
    },
    deleteUser(state){
        state.name = null;
        state.email = null
    }
}