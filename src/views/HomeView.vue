<template>
    <div class="relative bg-[#D1DDE5] flex min-h-screen flex-col sm:justify-center">
      <div class="w-full px-4 py-6 mx-auto max-w-sm bg-[#F1F3F6] dark:bg-dark-gradient">
        <!-- theme toggle container -->
        <div class="flex items-center justify-end">
          <label class="sr-only">Theme</label>
            <!-- theme toggle button -->
            <button @click="toggleTheme" type="button" class="rounded-full shadow-3xl bg-[#F1F3F6] dark:shadow-4xl dark:bg-[#141518]">
              <span class="dark:hidden">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="stroke-[#1565C0]"></path>
                  <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-[#1565C0]"></path>
                </svg>
              </span>
              <!-- dark -->
              <span class="hidden dark:inline">
                <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class=" stroke-white"></path>
                  <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-white"></path>
                </svg>
              </span>
            </button>
        </div>

        <!-- screen -->
        <div class="mt-3 shadow-5xl rounded-2xl w-full p-2 bg-[#F1F3F6] dark:shadow-6xl dark:bg-[#141518]">
          <label for="screen" class="sr-only">calculation</label>
          <input type="text" name="screen" id="screen" v-model="enteredVal" readonly placeholder="88888888" class="p-6 font-digital tracking-wider w-full text-6xl text-right text-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-300/20 border-2 border-[#1565C0] rounded-md outline-none dark:text-gray-300 dark:bg-[#202226]" />
        </div>

        <!-- keypad -->
        <main class="mt-10">
          <div class="grid grid-cols-4 gap-x-3">
            <button value="AC" @click="clearAll" class="button-value">AC</button>
            <button value="C"  @click="clear" class="button-value">C</button>
            <button value="%"  @click="percent" class="button-value">%</button>
            <button value="/"  @click="divide" class="button-ops">/</button>
          </div>
         <div class="mt-4 grid grid-cols-4 gap-x-3">
            <button value="7"  @click="keyVal('7')" class="button-value">7</button>
            <button value="8"  @click="keyVal('8')" class="button-value">8</button>
            <button value="9"  @click="keyVal('9')" class="button-value">9</button>
            <button value="*"  @click="multiply" class="button-ops">*</button>
          </div>
          <div class="mt-4 grid grid-cols-4 gap-x-3">
            <button value="4"  @click="keyVal('4')" class="button-value">4</button>
            <button value="5"  @click="keyVal('5')" class="button-value">5</button>
            <button value="6"  @click="keyVal('6')" class="button-value">6</button>
            <button value="-"  @click="substract" class="button-ops">-</button>
          </div>
          <div class="mt-4 grid grid-cols-4 gap-x-3">
            <button value="3"  @click="keyVal('3')" class="button-value">3</button>
            <button value="2"  @click="keyVal('2')" class="button-value">2</button>
            <button value="1"  @click="keyVal('1')" class="button-value">1</button>
            <button value="+"  @click="add" class="button-ops">+</button>
          </div>
         <div class="mt-4 grid grid-cols-4 gap-x-3">
            <button value="0"  @click="keyVal('0')" class="col-span-2 button-value">0</button>
            <button value="."  @click="dot" class="button-value">.</button>
            <button value="="  @click="compute" class=" button-ops bg-[#1565C0] shadow-7xl text-gray-200 dark:bg-[#1565C0]">=</button>
          </div>
        </main>

      </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'HomeView',

  setup(){
    const enteredVal = ref('')
    const previous = ref(null)
    const operator = ref(null)
    const operatorClicked = ref(false)

    return {
      enteredVal,
      previous,
      operator,
      operatorClicked,
      
    }
  },
    methods: {
      clear() {
        this.enteredVal = this.enteredVal.slice(0, -1);
      },
      clearAll() {
        this.enteredVal = '';
      },
      percent(){
        this.enteredVal = `${parseFloat(this.enteredVal)/100}`
      },
      keyVal(number){
        if (this.operatorClicked) {
          this.enteredVal = '';
          this.operatorClicked = false;
        }
        this.enteredVal = `${this.enteredVal}${number}`
      },
      dot(){
        if (this.enteredVal.indexOf('.') === -1) {
          this.keyVal('.');
        }
      },
      setPrevious() {
        this.previous = this.enteredVal;
        this.operatorClicked = true;
      },

      divide() {
        this.operator = (a, b) => b / a;
        this.setPrevious();
      },

      multiply() {
        this.operator = (a, b) => a * b;
        this.setPrevious();
      },

      substract() {
        this.operator = (a, b) => b - a;
        this.setPrevious();
      },

      add() {
        this.operator = (a, b) => a + b;
        this.setPrevious();
      },
      compute() {
        this.enteredVal = `${this.operator(
          parseFloat(this.enteredVal), 
          parseFloat(this.previous)
        )}`;
        this.previous = null;
    }, 

    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
    }
}
</script>
