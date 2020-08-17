<template>
  <div id="app">
    <div class="container">
      <div class="header">faiz hesabı</div>
      <div>
        <div class="content">
          <div class="leftText">parametreler</div>
          <div class="rightField">gelecek değer ve faiz oranı</div>
        </div>
        <div class="content">
          <div class="leftText">Present Value(capital)</div>
          <div class="rightField">
            <label for>
              <input type="text" v-model="capital" class="capitalInput" />
            </label>
          </div>
        </div>
        <div class="content">
          <span class="leftText">interest rate</span>
          <label for>
            <input type="text" v-model="rate" class="inputs" />
          </label>
          <label for>
            <select name id class="selectOption" v-model="rateType">
              <option value="Yearly" class="options">% yearly</option>
              <option value="Monthly" class="options">% monthly</option>
              <option value="Daily" class="options">% daily</option>
            </select>
          </label>
        </div>
        <div class="content">
          <span class="leftText">term</span>
          <label for>
            <input type="text" v-model="termValue" class="inputs" />
          </label>
          <label for>
            <select name id v-model="term" class="selectOption">
              <option v-for="item in termArray" :key="item" :value="item">{{ item }}</option>
            </select>
          </label>
        </div>
        <div class="calculateArea">
          <button
            class="calculateButton"
            @click="interestCalculation()"
            :disabled="buttonDisable"
            :style="[buttonDisable ? disabledStyle : '']"
          >hesapla</button>
        </div>
      </div>
    </div>
    <div class="calculateResult" v-if="result !== 0">
      <span class="title">calculation result</span>
      <label for class="outText">
        if you invested ${{capital}} now, {{ termValue }} later, you get
        <span
          class="resultText"
        >${{ result }}</span>
      </label>
    </div>
  </div>
  <!-- 
    stil ve hesaplamalar vs tamamladıktan sonra yapacağımız şey, eğer gerekli alnalr boş ise butona tıklanmasın doğal olarak hesaplamada yapılmasın, 
    bunu computed içinde butonu disable yapalım, buttonDisable hazırladık buna göre vrdiğimiz alnalrdan herhangibiri boş ise o zaman bu computed true dönecek, template de de buton içine disabled parametresini dinamik veriyoruz ve bunuda computed daki buttonDisable a eşitliyoruz, yani eğer computed dan true dönerse o zaman button disabled olacak, aynı zamanda bu durumun stiline değiştirelim, data içine disabledStyle : { background : #cccccc}, template deki butonun içine ise koşullu bir style ekleyeceğiz, :style="[buttonDisable ? disabledStyle : '']"
    şimdi calculationResult kısmını sonuca göre açılır kapanır hale getirelim, 
    bunun için v-show veya v-if kullanıyoruz, v-if="result !== 0" ise göster, değilse gösterme, aynısını v-show ile de yapabilirdik, 


  -->
</template>




<script>
export default {
  data() {
    return {
      capital: null,
      rate: 0,
      rateType: "Yearly",
      termArray: ["Year", "Month", "day"],
      term: "Year",
      termValue: 0,
      result: 0,
      disabledStyle: { background: "#cccccc" }
    };
  },
  computed: {
    computedTermValue() {
      if (this.rateType === "Yearly") {
        if (this.term === "Year") {
          return this.termValue;
        } else if (this.term === "Month") {
          return this.termValue / 12;
        } else {
          return this.termValue / 360;
        }
      } else if (this.rateType === "Monthly") {
        if (this.term === "Year") {
          return this.termValue * 12;
        } else if (this.term === "Month") {
          return this.termValue;
        } else {
          return this.termValue / 30;
        }
      } else {
        if (this.term === "Year") {
          return this.termValue * 360;
        } else if (this.term === "Month") {
          return this.termValue * 30;
        } else {
          return this.termValue;
        }
      }
    },
    buttonDisable() {
      return this.termValue == 0 || this.rate == 0 || this.result === null;
    }
  },
  methods: {
    interestCalculation() {
      const result =
        this.capital * Math.pow(1 + this.rate * 0.01, this.computedTermValue);
      // console.log(result);
      this.result = parseInt(result);
      //burada tanımladığımız result != data daki result
      console.log(this.result);
      return result;
    }
  }
};
</script>

<style>
.container {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  max-width: 600px;
  background-color: bisque;
  border-radius: 7px;
  box-shadow: 0 0 12px #888;
  margin-top: 20px;
  padding: 20px 10px 10px;
  margin-right: auto;
  margin-left: auto;
}

.header {
  font-weight: normal;
  padding-bottom: 5px;
  font-size: 17px;
  padding-top: 5px;
  width: 100%;
  text-shadow: 1px 1px 1px whitesmoke;
  letter-spacing: 1px;
  text-align: center;
}

.content {
  margin-top: 20px;
  display: flex;
}

.leftText {
  width: 40%;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15px;
  color: black;
}

.rightField {
  font-size: 14px;
  width: 60%;
  display: flex;
  flex-direction: column;
}

.capitalInput {
  width: 95%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 7px;
  border: solid 1px #e8e8e8;
  border-radius: 3px;
  box-shadow: 0 0 2px silver;
  font-size: 14px;
  resize: vertical;
}

.inputs {
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 7px;
  border-radius: 3px;
  border: solid 1px #e8e8e8;
  box-shadow: 0 0 1px silver;
  font-size: 14px;
}

.selectOption {
  padding: 7px;
  border-radius: 3px;
  border: solid 1px #e8e8e8;
  box-shadow: 0 0 1px silver;
  font-size: 12px;
  margin: 5px 4px 5px 56px;
  width: 115px;
}

.options {
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0 2px 1px;
}

.calculateArea {
  border-top: 1px solid silver;
  display: flex;
  justify-content: flex-end; /* sağa yaslasın */
  margin-top: 15px;
}

.calculateButton {
  box-sizing: content-box;
  padding: 10px;
  min-width: 100px;
  background-color: #0094ff;
  color: whitesmoke;
  border-radius: 3px;
  cursor: pointer;
  border: solid 1 px transparent;
  font-weight: 600;
  text-shadow: 1px 1px 1px #555555;
  position: relative;
  margin-top: 30px;
}

.calculateResult {
  max-width: 600px;
  background-color: #d8dbd3;
  box-shadow: 0 0 12px #888;
  border-radius: 7px;
  margin-top: 20px;
  padding: 20px 10px 10px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  border-bottom: 1px solid silver;
  padding-bottom: 10px;
  font-size: 20px;
  color: #23233b;
}

.outText {
  color: #313629;
  margin-top: 20px;
}

.resultText {
  font-weight: 600;
  font-size: 18px;
}
</style>
