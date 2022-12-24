<template >
  <div id="colorPicker">
    <div class="picker">
      <h6 class="m-0">Color scheme</h6>
      <button id="but" class="btn w-0 m-0 p-0" @click="theme1"></button>

      <n-button quaternary circle type="error"  id="but2"  @click="theme2"  class="btn w-0 m-0 p-0 text-white">
      
      <template #icon>
      
      </template>
    </n-button>
  
  <n-switch v-model:value="active" @update:value="handleChange">
    <template #checked>
     Dark mode
    </template>
    <template #unchecked>
    Light mode
    </template>
  </n-switch>
    </div>
  </div>
</template>


<script setup >
import { useStore } from "../../../store/store.js";
import { ref, watch, computed, onMounted } from "vue";
import { useMessage } from "naive-ui";
let active = ref(false)
const message = useMessage();

let store = useStore();


let handleChange = (value)=>{
  message.info(`Dark mode: ${value}`);
  localStorage.setItem('color', active.value)
  // document.body.classList.toggle(`${localStorage.getItem('color')}`)
  if(localStorage.getItem('color') == 'true'){
    document.body.classList.add(`dark`)
    console.log('ss');
  }else if(localStorage.getItem('color') == 'false'){
    document.body.classList.remove(`dark`)
    console.log('kk');
  }
}



  onMounted(()=>{
    if(localStorage.getItem('color') == 'true'){
    document.body.classList.add(`dark`)
    console.log('ss');
  }else if(localStorage.getItem('color') == 'false'){
    document.body.classList.remove(`dark`)
    console.log('kk');
  }
  })



let theme1 = () => {
  store.color = true;
  store.color2 = false;
};

let theme2 = () => {
  store.color = false;
  store.color2 = true;
};

</script>


<style lang="scss" scoped>
#colorPicker {
  .picker {
    width: 25%;
    height: 40px;
    border-radius: 20px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgb(207, 217, 219);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #but {
    width: 25px !important;
    height: 25px !important;
    border-radius: 50% !important;
    background: rgb(194, 93, 237);
    background: linear-gradient(
      276deg,
      rgba(194, 93, 237, 1) 0%,
      rgba(123, 135, 252, 1) 100%
    );
  }

  #but2{
    width: 25px !important;
    height: 25px !important;
    border-radius: 50% !important;
    background: rgba(30, 77, 104, 0.742) !important;
  }
}
</style>