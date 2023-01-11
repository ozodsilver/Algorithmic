<template>
  <div>
  
    <h1>cousesLink id{{ route.params.id }}</h1>
  
  <div v-for="user in users " :key="user.id">
      <router-link  :to="{name:'nestedLink', params:{id:user.id}}">nestedLink</router-link>
  </div>

    <div v-show="store.show">
      <n-space>
        <n-spin size="medium" />
      </n-space>
    </div>

   <h1>salom</h1>

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
        id:11,
        title:'nestedLinkl'
    },

     {
        id:12,
        title:'nestedLinkl2'
    }
]

onMounted(() => {
  store.infoUsers();
});
</script>

<style lang="scss" scoped></style>
