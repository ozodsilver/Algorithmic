<script setup>
import { ref, onErrorCaptured } from "vue";
import Navigation from "./Navigation/Navigation.vue";
import colorPickerVue from "./Navigation/colorPicker/colorPicker.vue";
import Saidbar from "./saidbar/Saidbar.vue";

let show = ref(true);
let errMsg = ref(null);
</script>

<template>
  <n-message-provider>
    <n-notification-provider>
      <n-dialog-provider>
        <colorPickerVue></colorPickerVue>
      </n-dialog-provider>
    </n-notification-provider>
  </n-message-provider>
  <Navigation></Navigation>
  <div class="row g-0">
    <div class="col-2 position-fixed">
      <Saidbar></Saidbar>
    </div>

    <div class="col-10 offset-2">
      <div class="mt-5 pt-5 px-4">
        <!-- <router-view> </router-view> -->

      <router-view></router-view>

      
      </div>
    </div>
  </div>
</template>

<style>
html {
  height: 100%;
}
* {
  box-sizing: border-box;
}
body {
  height: 100%;
  background: #f1f5f9;
}

.darkModee {
  background: #1a2b3e !important;
  box-shadow: 0 0 1px rgb(135, 134, 134);
}



.textColor{
  color: #fff !important;
}


.dark {
  background: #1a2b3e;
}

.n-message-container {
  position: absolute;
  z-index: 9999999;
}

/* width */
::-webkit-scrollbar {
display: none;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fdffff;
 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(50, 51, 131);
    border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
