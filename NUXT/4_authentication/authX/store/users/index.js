import {auth} from "@/services/firebase"
import Cookie from "js-cookie" 


//ilk iş state i oluşturmak
export const state = () => ({
    user : null
})

// ikinci olarak mutation, bunun görevi state i değiştirmek
export const mutations = {
    saveUser : (state,userData) => {
        state.user = userData
    }
}

// üçüncü olarak bu mutation ı çağıran şey action, action oluşturacağız

export const actions = {
    async createUser({commit, userData}){
        //sistem şöyle çalışacak bize gelen userData yı firebase e kaydedeceğiz, sonra commit ile bu userData yı yollayacağız mutation a yollayacğız, mutationda da userDatayı kaydedecek
        // bunun nasıl yapılacağına firebase doc da bakacağız, firebase in web için dokumanlarında authentication a bakacağız, password authentication da createUserWithEmailAndPassword methodunu kullanacağız, ayrıca bu dosyaya firebase i import etmeliyiz, ayrıca cookie yide import etmeliyiz, bir diğer konu try catch blokları içinde ve async olarak yapacağız, çünkü bu authentication işlemleri çok hata çıkabilen yerler
        try {
            await auth.createUserWithEmailAndPassword(userData.email, userData.password);

            //token alacağız
            const { email, uid, getIdToken} = auth.currentUser;

            //cookie olarak kaydetmek istiyoruz
            Cookie.set("access-token", getIdToken);

            //artık mutations ı çalışıtracağız
            commit("saveUser", {email, uid})
        } catch (error) {
            throw error
        }
    }
}