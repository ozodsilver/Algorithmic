<template >
    <div class=" d-flex justify-content-around">
        <div class="card " style="width: 18rem;" v-for="new2 in news1" :key="new2.id">
            <img :src="new2.img" class="card-img-top" alt="Sunset Over the Sea" />
            <div class="card-body">
                <p class="card-text">{{ new2.title }}</p>
               
            </div>
        </div>
    </div>
</template>
<script>
import { useStore } from '../../store/store.js'
export default {
    setup() {
        const store = useStore()
        let news1 = [
            {
            id: 1,
            img: new URL('https://avatars.mds.yandex.net/i?id=adcbc13f37565161d7205b354cef19f49ebad402-4012262-images-thumbs&n=13').href ,

            title: 'AKAlaR yourib yuboribsilare qoil'

        }
        ]

    


return{news1, store}
    }

}
</script>
<style lang="scss" scoped>

</style>