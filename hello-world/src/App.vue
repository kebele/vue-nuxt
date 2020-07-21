<template>
  <div id="app">
    <div>
      <h4 style="color:red">v-bind / v-on</h4>
      <p>v-bind : datadaki bir değere bağlamak için</p>

      <p>
        v-on : bir function çalıştırmak için mesela aşağıda inputta bir
        değişiklik olup bittiğinde changeInput func. çalıştırır, maxLength
        olarak MaxValue değerini bağladık, 5 taneden fazla karakter girilmesine
        izin vermez $event ile değeride alırız, koda bak
      </p>
      <br />
      <input
        v-bind:placeholder="inputHolder"
        v-on:change="changeInput($event)"
      />
      <br />
      <input placeholder="max length" v-bind:maxLength="maxValue" />
      <br />
    </div>
    <div>
      <h4 style="color:red">v-if / v-else / v-show</h4>
      <p>
        v-if : data da see tanımladık, true değerini verdik, değeri false a
        çevirirsek buton görünmez
      </p>
      <p>
        v-else : bir yere v-if koyduysak v-if false old. v-else koyduğumuz
        çalışır, terside aynı şekilde, v-else-if de kullanılabilir
      </p>
      <p>
        v-show : v-if ile aynı şekilde çalışır, tryOne computed de, kodları
        inceleme computed e bak
      </p>
      <p>
        v-show da elementler her zaman dom un üzerindedir, display : none gibi
        calışır, v-if de ise her seferinde dom a eklenir ve kaldırılır, bir
        bilgi olaral v-for ve v-if beraber kullanılmaz, beraber kullanılacaksa
        v-for v-if in dışına yazılır
      </p>
      <button v-on:click="buttonClick" v-if="see">TIKLA</button>
      <br />
      <input type="text" placeholder="v-show inputu" v-show="see" />
      <br />
      <div v-if="value === 1">burası 1</div>
      <div v-else-if="value === 2">burası 2</div>
      <div v-else-if="value === 3">burası 3</div>
      <div v-else>burası 4</div>
      <br />
      <div v-if="tryOne">
        bigger
        <label for></label>
      </div>
      <div v-else>
        smaller
        <label for>
          <input type="text" placeholder="1" />
        </label>
      </div>
      <br />
    </div>
    <div>
      <h4 style="color:red">v-for</h4>
      <p>v-for : döngü açıklama kodun içinde</p>
      <br />
      <p v-for="i in 4" v-bind:key="i.id">{{ i }}</p>
      <!--1,2,3,4 içeren p yazdırır -->
      <p v-for="(item, index) in person" v-bind:key="index">
        name : {{ item.name }}, age : {{ item.age }}
      </p>
      <!-- person daki elemanların name lerini yazdırır  -->
    </div>
    <div>
      <h4 style="color:red">v-model</h4>
      <p>
        v-model : çift yönlü data iletişimi, aynı anda veriyi hem iki taraflı
        yollar hemde görüntüler, v-model normalde hemen tepki verir,
        v-model.lazy="xyz" de lazy yazılanın/girilenin bitmesini bekler sonra
        tepki verir, v-model de yazılan herşey string olarak algılanır,
        v-model.number="xyz" yazılanı number olarak algılar, v-model.lazy.number
        şeklinde de kullanlabilir, v-model.trim ise girilen verideki boşlukları
        siler
      </p>
      <br />
      <label for>
        <input type="text" placeholder="edit me" v-model="message" />
      </label>
      <p>inputtan gelen veri : {{ message }}</p>
      <textarea name id cols="30" rows="10" v-model="area"></textarea>
      <p>textarea ya yazılanlar : {{ area }}</p>
      <input type="checkbox" v-model="checked" />
      <p>checkbox değeri : {{ checked }}</p>
      <label for>
        <select name id v-model="selected">
          <option disabled>select</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
      </label>
      <p>seçilen : {{ selected }}</p>
      <select name id v-model="itemSelected">
        <option
          v-for="(item, index) in items"
          v-bind:key="index"
          v-bind:value="item.value"
          >{{ item.option }}</option
        >
      </select>
      <p>value : {{ itemSelected }}</p>
      <div>
        <input type="radio" value="1" id="1" v-model="radio" />
        <label for="1">1</label>
        <input type="radio" value="2" id="2" v-model="radio" />
        <label for="2">2</label>
        <input type="radio" value="3" id="3" v-model="radio" />
        <label for="3">3</label>
        <p>seçilen radio : {{ radio }}</p>
      </div>
    </div>
    <div>
      <h4 style="color:red">v-once</h4>
      <p>
        templatedeki elemente v-once eklediğimizde o element her tıklama ile
        değişir ancak ekran değişmez
      </p>
      <br />
      <button v-once v-on:click="changeButon">{{ butonData }}</button>
    </div>
    <div>
      <h4 style="color:red">v-html</h4>
      <p>
        directive in içinde html yazmak istersek bunu kullanırız, p içerisinde
        v-html="vue" şeklinde kullanırsak html şeklinde basar
      </p>
      <br />
      <p>{{ vue }} bunu string olarak basar</p>
      <p v-html="vue"></p>
    </div>
    <div>
      <h4 style="color:red">v-pre</h4>
      <p>
        eğer süslü parantezli şekilde görünsün hata gelmesin şeklinde istiyorsak
        directive v-pre ekleriz, çok kullanılmaz
      </p>
      <br />
      <p v-pre>{{ vue_pre }}</p>
    </div>
    <div v-cloak>
      <h4 style="color:red">v-cloak</h4>
      <p>
        diyelim bu div içindeki herşeyiyle beraber derleme bitene kadar görünmez
        hal getirir, mesela bir sayfadaki resim parça parça yükleniyor yada
        yazı, div içine v-cloak yazarsak parçalı yükleme olmaz, hepsi bitince
        son hali olan sayfa gelir
      </p>
    </div>
    <div>
      <h4 style="color:red">mustache ve js ifadeleri</h4>
      <p>
        mustache içinde arimetik işlemler, ternary operator, kullanılabilir, tek
        satırlık ifadeler olmalı, ayrıca burada değişken tanımlanmaz
      </p>
      <p v-pre>{{ number + 1 }}</p>
      {{ number + 1 }}
      <br />
      {{ number === 4 ? "four" : "not four" }}
      <br />
      {{ msg.length }}
      <br />
      {{
        msg
          .split("")
          .reverse()
          .join("")
      }}
      <br />
    </div>
    <div>
      <h4 style="color:red">v-bind / v-on kısa halleri</h4>
      <p>v-bind:placeholder = :placeholder = :[placeholder]</p>
      <p>v-on:click = @click = @[some attributes]</p>
    </div>
    <div>
      <h4 style="color:red">mustaches ve diziler</h4>
      <p>
        A ve B arrayleri oluşturduk, changeArray(){} hazırladık, bunu da bir
        butona bağladık, her tıklamada changeArray() çalışacak,
      </p>
      {{ newArray }}
      <button v-on:click="changeArray">map ile diziyi değiştir</button>
      <br />
      {{ filterArray }}
      <button v-on:click="changeArrayFilter">filter yap</button>
      <br />
      {{ filterB }}
      <button v-on:click="changeFilterB">çift sayıları getir</button>
      <br />
      {{ tersA }}
      <button @click="tersiniVer">ters cevir</button>
      <br />
      {{ siralaBKB }}
      <button @click="siralaBfunc">küçükten büyüğe sırala</button>
      <br />
      {{ siralaBBK }}
      <button @click="siralaBfunc2">büyükten küçüğe sırala</button>
      <br />
      {{ randomSirala }}
      <button @click="randomSiralaFn">random sırala</button>
    </div>
    <div>
      <h4 style="color:red">listeleri görüntülemek ve dizi ifadeleri</h4>
      <p>items2 isimli data da bir array imiz var onu aşağıya v-for ile aldık, şimdi dinamik veri ekleyelim, </p>
      <ul>
        <li v-for="(item, index) in items2" :key="index"> product name : {{ item.type }}    stock quantity : {{ item.number }}</li>
      </ul>
      <button @click="tryArray()">ADD</button>
    </div>
    <div>
      <h4 style="color:red">custom directive oluşturmak</h4>
      <p>vue da kendi directive lerimizide yazabiliriz, aşağıda span kullandık v-colorChanger olarak hazırladığımız directive ile beraber, bu directive ile kullanılan elementin arkaplan rengi yeşil olacak görevi bu, binding ekledik işleme,  border koyalım mesela, attribute yollayalım birde, ayrıca directive ler main.js de de tanımlanabilir, bu şekidle yapıldığında global olur, main.js e bak</p>
      <span v-colorChanger="'yellow'">real madrid</span>
      <br/>
      <span v-colorChanger.border="'yellow'">real madrid</span>
      <br>
      <span v-colorChanger:bold.border="{color:'red', fontsize:''}">ronaldo</span>
      <hr>
      <span v-underline>altı çizili directive kullanımı</span>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputHolder: "şehir seçiniz",
      maxValue: 5,
      see: true,
      // value : true
      value: 2,
      person: [
        { name: "sergio", age: 30 },
        { name: "benzema", age: 25 },
        { name: "varane", age: 20 },
        { name: "isco", age: 35 },
      ],
      message: "",
      area: "",
      checked: "",
      selected: null,
      items: [
        { option: "a", value: "one" },
        { option: "b", value: "two" },
        { option: "c", value: "three" },
      ],
      itemSelected: null,
      radio: null,
      butonData: true,
      vue: '<a href="https://vuejs.org/v2/guide/">vue web</a>',
      vue_pre: "pre directive",
      number: 12,
      msg: "real madrid",
      A: ["a", "b", "c", "d", "e"],
      B: [5, 4, 3, 2, 1, 6],
      newArray: [],
      filterArray: [],
      filterB: [],
      tersA: [],
      siralaBKB: [],
      siralaBBK: [],
      randomSirala: [],
      items2 : [
        {type : 'pen', number : 33},
        {type : 'ball', number : 345},
        {type : 'rocket', number : 89},
        {type : 'guitar', number : 110},
        {type : 'table', number : 350}
      ]
    };
  },
  methods: {
    changeInput($event) {
      console.log($event.target.value);
    },
    buttonClick() {
      console.log("tıklandı");
    },
    changeButon() {
      this.butonData = !this.butonData;
      console.log(this.butonData);
    },
    changeArray() {
      this.newArray = this.A.map((item) => (item === "c" ? "new C" : item));
      //map A içinde dolaşacak c ye geldiğinde değeri değiştirecek ve sonucu newArray olarak verecek
    },
    changeArrayFilter() {
      this.filterArray = this.A.filter((item) => item === "c");
    },
    changeFilterB() {
      this.filterB = this.B.filter((item) => item % 2 === 0);
      //0 a tam bölünenlerden array yap ve bunu filterB ye ata
    },
    tersiniVer() {
      this.tersA = this.A.reverse();
    },
    siralaBfunc() {
      this.siralaBKB = this.B.sort(function(a, b) {
        return a - b;
      });
    },
    siralaBfunc2() {
      this.siralaBBK = this.B.sort(function(a, b) {
        return b - a;
      });
    },
    randomSiralaFn() {
      this.randomSirala = this.B.sort(function() {
        return 0.5 - Math.random();
      });
    },
    tryArray(){
      //sona eleman eklesin
      // this.items2.push({type : 'telefon', number : 55})
      //başa eleman eklesin
      //this.items2.unshift({type : 'telefon', number : 55})
      //eleman silmek, en sondan
      // this.items2.pop()
      //en baştan eleman silmek
      // this.items2.shift()
      //aradaki eleman silmek, indis 1 den itibaren 2 tane sil
      //yani ball ve rocket siler
      // this.items2.splice(1,2)
      //diğer kullanımı 3 parametreli, sondakileri de silinenlerin yerine ekler
      //this.items2.splice(1,2,{type : "soda", number : 250}, {type : "fanta", number : 1250},{type : "bardak", number : 500})
      //concat ana diziyi bozmadan alıp yeni bir dizi yapar ve sona eleman ekler, console da görünür
      //const yeniDizi = this.items2.concat({type : "bardak", number : 500})
      // console.log(yeniDizi);
      //concat a benzer spread operator var, 
      // const yeniDizi = [...this.items2, {type : "bardak", number : 500}]
      // console.log(yeniDizi);
      //önemli bir konu olarak Vue aşağıdaki kullanımı fark etmez
      // this.items2[2] = {type : "bardak", number : 500}
      //eğer bir arraydaki belli bir index tek veriyi değiştirmek istiyorsak aşağıdaki yöntemi kullanmalıyız
      this.$set(this.items2,2,{type : "bardak", number : 500})
    }
  },
  computed: {
    tryOne() {
      const a = Math.random() > 0.5;
      return a;
    },
  },
  directives : {
    colorChanger : {
      bind : (el, binding) => {
        // el.style.background="green"
        el.style.background=binding.value
        el.style.paddingBottom = "40px"
        console.log("directive çalıştı")
        //binding ile neleri kullanabiliriz console a gelir
        console.log(binding)
        //modifier olarak border geldiyse
        if(binding.modifiers.border){
          el.style.border = 'thick solid crimson'
          console.log("directive work with modifiers")
        }
        if(binding.arg.bold){
          el.style.fontWeight = '800'
        }
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>
