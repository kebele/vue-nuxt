/* 
middleware yaparak yetkilendirme yapabiliriz, belli ara katmanlar oluşturabiliriz. Bununla mesela kullanıcı sisiteme girmemişse belli sayfaları görüntülenmesini engelleyebiliriz,
midlleware > authenticated.js oluşturalım, 
 */
//bir function yapıp bunu dışarıdan çağıracağız, 
//state e ulaşmamız lazım, bunun için bütün context i almak yerine store u alalım, state için, route alalım yönlendirme için, yeniden yönlendirme içinde redirect alalım,
// ve bunu kullanıma alım, bunun için nuxt.config.js ye gidip, 
// router ı yeni açıyoruz, her router yönlendirmesinde nuxt aşağıya yazdığımız middleware leri kontrol edecek
//   router:{
//     middleware : ["authenticated"]
//   },
// denemesini yapalım, sisteme yei bir kullanıcı kaydedelim sonra sayfayı yenileyip signup sayfasına gitmeyi deneyelim, izin vermeyip bizi anasayfaya gönderiyor direkt

 export default function({store, route, redirect}){
    //kullanıcı girişl yaptı mı diye kontrol
    const isUserAuth = store.state.users.user;
    //isUserAuth varsa state içinde bir user var yani kullanıcı giriş yapmış demek
    //kullanıcı kayıt yaptıysa yani içerideyse signup sayfasına gitmesin
    if(isUserAuth && route.path == "/signup"){
        redirect("/")
        //kulanıcı sisteme kayıt yapmış ve path i signup ise bunu ana sayfaya yönlendir
    }
 }

