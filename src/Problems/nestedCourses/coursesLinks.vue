<template>
    <div>
<iframe class="w-100 " style="height:550px" src="https://www.youtube.com/embed/Ynbfi70vwGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<h1>{{route.params.id}}</h1>
<h1>Title</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, excepturi numquam quisquam facere amet eaque atque ad debitis exercitationem laboriosam natus perferendis cupiditate nostrum optio nobis, odio sapiente vitae praesentium?</p>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
let route = useRoute()

</script>

<style lang="scss" scoped>

</style>