<template>
    <div>
<h1>salom nested {{  id.params.id}}</h1>
 
    </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import {useRouter, useRoute} from 'vue-router'
export default {
    setup () {
        let router = useRoute()
        let id = router
        return { 
            id   
        }
    }
}
</script>

<style lang="scss" scoped>

</style>