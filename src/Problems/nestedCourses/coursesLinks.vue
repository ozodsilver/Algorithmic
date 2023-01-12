<template>
  <div>
  
    <h1>cousesLink id{{ route.params.id }}</h1>
    <router-link :to="{name:'nestedLink'}">but</router-link>
  
  


    <!-- <div v-show="store.show">
      <n-space>
        <n-spin size="medium" />
      </n-space>
    </div> -->



     <router-view></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../../../store/store";
let route = useRoute();
let store = useStore();
let users = [
    {
        id:1,
        title:'nestedLinkl'
    },

     {
        id:2,
        title:'nestedLinkl2'
    }
]

onMounted(() => {
  store.infoUsers();
});
</script>

<style lang="scss" scoped></style>
