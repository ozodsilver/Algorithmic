<template>
  <div>
    <h1>salom nested {{ id.params.id }}  </h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";


let router = useRoute();
let id = router;




</script>

<style lang="scss" scoped></style>
