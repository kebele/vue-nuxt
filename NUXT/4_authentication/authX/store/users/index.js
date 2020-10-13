import {auth} from "@/services/firebase"
import Cookie from "js-cookie" 


//ilk iş state i oluşturmak
export const state = () => ({
    user : null
})

// ikinci olarak mutation, bunun görevi state i değiştirmek
export const mutations = {
    saveUser(state,userData){
        this.state.users.user = userData
    }
}

// üçüncü olarak bu mutation ı çağıran şey action, action oluşturacağız

export const actions = {
    //kullanıcı oluşturma
    async createUser({commit}, userData){
        //sistem şöyle çalışacak bize gelen userData yı firebase e kaydedeceğiz, sonra commit ile bu userData yı yollayacağız mutation a yollayacğız, mutationda da userDatayı kaydedecek
        // bunun nasıl yapılacağına firebase doc da bakacağız, firebase in web için dokumanlarında authentication a bakacağız, password authentication da createUserWithEmailAndPassword methodunu kullanacağız, ayrıca bu dosyaya firebase i import etmeliyiz, ayrıca cookie yide import etmeliyiz, bir diğer konu try catch blokları içinde ve async olarak yapacağız, çünkü bu authentication işlemleri çok hata çıkabilen yerler
        try {
            await auth.createUserWithEmailAndPassword(userData.email, userData.password);

            //token alacağız
            const { email, uid} = auth.currentUser;
            const token = await auth.currentUser.getIdToken();

            //cookie olarak kaydetmek istiyoruz
            Cookie.set("access_token", token);

            //artık mutations ı çalışıtracağız
            commit("saveUser", {email, uid})
            console.log(auth)
        } catch (error) {
            throw error
        }
    },
    //var olan kullanıcıyı sisteme alma, sign in
    // methodu hazırlayalım, bunun içinde firebase doc a bakacağız, yine authentication kısmında kullanacağımız methodu buraya aldık, yukarıda create kısmında yaptığımızı aynı mantığı, sonrasında sign in sayfasını yapacağız
    async singin({commit}, userData){
        try {
            await auth.signInWithEmailAndPassword(userData.email, userData.password);

            //token alacağız
            const { email, uid} = auth.currentUser;
            const token = await auth.currentUser.getIdToken();

            //cookie olarak kaydetmek istiyoruz
            Cookie.set("access_token", token);

            //artık mutations ı çalışıtracağız
            commit("saveUser", {email, uid})
            // console.log(auth)
        } catch (error) {
            throw error
        }
    }
}