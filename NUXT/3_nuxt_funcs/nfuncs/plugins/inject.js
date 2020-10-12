//  bazen plugin imizi her yerden kullanılabilir olmasını isteyebiliriz,
// bunu aşağıdaki şekilde $ işaretli olarak hazırlarız,
// bunu index.vue içinde kullanalım, gidip mounted içine this.$myInjectFunc('deneme') şeklinde

// ayrıca bu plugin lere context içinden de ulaşabiliriz
// bunun için import ve prototype ları yoruma alıp context hazırlayalım
// index.vue ya gidip asyncData

// import Vue from 'vue'

// Vue.prototype.$myInjectFunc = String => console.log('this is', String)

export default ({ app }, inject) => {
//   app.myInjectFunc = String => console.log('denemeContext gibi', String)
  inject('myInjectFunc', string => console.log('', string))
  // bu şekilde hem context içinden hemde this ile erişilebilir hale geldi,
}
