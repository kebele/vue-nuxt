<template>
  <div id="app">
    <h4 style="color:red">v-bind / v-on</h4>
    <p>v-bind : datadaki bir değere bağlamak için</p>

    <p>
      v-on : bir function çalıştırmak için
      mesela aşağıda inputta bir değişiklik olup bittiğinde changeInput func. çalıştırır, maxLength olarak MaxValue değerini bağladık, 5 taneden fazla karakter girilmesine izin vermez
      $event ile değeride alırız, koda bak
    </p>
    <br />
    <input v-bind:placeholder="inputHolder" v-on:change="changeInput($event)" />
    <br />
    <input placeholder="max length" v-bind:maxLength="maxValue" />
    <br />
    <h4 style="color:red">v-if / v-else / v-show</h4>
    <p>v-if : data da see tanımladık, true değerini verdik, değeri false a çevirirsek buton görünmez</p>
    <p>v-else : bir yere v-if koyduysak v-if false old. v-else koyduğumuz çalışır, terside aynı şekilde, v-else-if de kullanılabilir</p>
    <p>
      v-show : v-if ile aynı şekilde çalışır, tryOne computed de, kodları inceleme
      computed e bak
    </p>
    <p>
      v-show da elementler her zaman dom un üzerindedir, display : none gibi calışır, v-if de ise her seferinde dom a eklenir ve kaldırılır,
      bir bilgi olaral v-for ve v-if beraber kullanılmaz, beraber kullanılacaksa v-for v-if in dışına yazılır
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
    <div>
      <h4 style="color:red">v-for</h4>
      <p>v-for : döngü açıklama kodun içinde</p>
      <br />
      <p v-for="i in 4" v-bind:key="i.id">{{ i }}</p>
      <!--1,2,3,4 içeren p yazdırır -->
      <p
        v-for="(item, index) in person"
        v-bind:key="index"
      >name : {{ item.name }}, age : {{ item.age }}</p>
      <!-- person daki elemanların name lerini yazdırır  -->
    </div>
    <div>
      <h4 style="color:red">v-model</h4>
      <p>v-model : çift yönlü data iletişimi, aynı anda veriyi hem iki taraflı yollar hemde görüntüler, v-model normalde hemen tepki verir, v-model.lazy="xyz" de lazy yazılanın/girilenin bitmesini bekler sonra tepki verir, v-model de yazılan herşey string olarak algılanır, v-model.number="xyz" yazılanı number olarak algılar, v-model.lazy.number şeklinde de kullanlabilir, v-model.trim ise girilen verideki boşlukları siler</p>
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
          v-for="(item,index) in items"
          v-bind:key="index"
          v-bind:value="item.value"
        >{{item.option}}</option>
      </select>
      <p>value : {{ itemSelected }}</p>
      <div>
        <input type="radio" value="1" id="1" v-model="radio" />
        <label for="1">1</label>
        <input type="radio" value="2" id="2" v-model="radio" />
        <label for="2">2</label>
        <input type="radio" value="3" id="3" v-model="radio" />
        <label for="3">3</label>
        <p>seçilen radio : {{radio}}</p>
      </div>
      <div>
        <h4 style="color:red">v-once</h4>
        <p></p>
        <br />
      </div>
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
        { name: "isco", age: 35 }
      ],
      message: "",
      area: "",
      checked: "",
      selected: null,
      items: [
        { option: "a", value: "one" },
        { option: "b", value: "two" },
        { option: "c", value: "three" }
      ],
      itemSelected: null,
      radio: null
    };
  },
  methods: {
    changeInput($event) {
      console.log($event.target.value);
    },
    buttonClick() {
      console.log("tıklandı");
    }
  },
  computed: {
    tryOne() {
      const a = Math.random() > 0.5;
      return a;
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
