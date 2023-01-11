<template>
    <div>
<h1>lorem haha {{route.params.id}}</h1>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
let route = useRoute()


</script>

<style lang="scss" scoped>

</style>