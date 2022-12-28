<template >
  <div id="colorPicker">
    <div class="picker">
    
  
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

</script>


<style lang="scss" scoped>
#colorPicker {
  .picker {
  
   
    transform: rotate(90deg);
    border-radius: 20px;
    position: fixed;
    z-index: 11111;
    bottom: 250px;
    right: -43px;
    background: rgb(232, 237, 238);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }


}
</style>