// bu dosyada yapaağımızı işlem eğer gelen kullanıcı kayırlı değilse onu login sayfasına yönlendirmek
// store ile kullanıcı kayıtlı mı değil mi, redirect ile de yönlendirme yapacak
// store oluşturalım, store > index.js olarak
// eğer store daki state authenticated false ise yani authenticate değilse o zaman login e gidecek
// login sayfası oluşturalım pages > login
// middleware i nerede kullanacağımızı belirlemek için bir sayfa daha pages > midburada yapıyoruz

export default function ({ store, redirect }) {
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
