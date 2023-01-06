<template>
  <div id="colorPicker">
    <div class="picker">
      <n-switch v-model:value="active" @update:value="handleChange">
        <template #checked> Dark mode </template>
        <template #unchecked> Light mode </template>
      </n-switch> 
      <a href="https://t.me/dasturchilarklubi" class="fab fa-telegram-plane fs-5 "></a>
      <a href=" https://instagram.com/dasturchilarklubi" class="fab fa-instagram text-danger fs-5"></a>
      <a href="" class="fab fa-facebook fs-5"></a>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../../../store/store.js";
import { ref, watch, computed, onMounted } from "vue";
import { useMessage } from "naive-ui";
let active = ref(false);
const message = useMessage();

let store = useStore();

let handleChange = (value) => {
  message.info(`Dark mode: ${value}`);
  localStorage.setItem("color", active.value);
  // document.body.classList.toggle(`${localStorage.getItem('color')}`)
  if (localStorage.getItem("color") == "true") {
    document.body.classList.add(`dark`);
    console.log("ss");
  } else if (localStorage.getItem("color") == "false") {
    document.body.classList.remove(`dark`);
    console.log("kk");
  }
};

onMounted(() => {
  if (localStorage.getItem("color") == "true") {
    document.body.classList.add(`dark`);
    console.log("ss");
  } else if (localStorage.getItem("color") == "false") {
    document.body.classList.remove(`dark`);
    console.log("kk");
  }
});
</script>

<style lang="scss" scoped>
#colorPicker {
  .picker {
    transform: rotate(90deg);
    border-radius: 20px;
    position: fixed;
    z-index: 11111;
    bottom: 250px;
    right: -85px;
    background:transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
  gap: 10px;
  a{
    transform: rotate(270deg);
  }
  }
}
</style>
