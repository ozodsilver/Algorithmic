<template >
    <div class=" row col-3 col-md-12 gap-3 m-auto ">
     
          <div class="card " :data-name=new2.id style="width: 18rem;" v-for="new2 in news1" :key="new2.id" id="heading">
           <router-link :to="{name:'profile', params:{id:new2.id}}">
          
            <img :src="new2.img" class="card-img-top" alt="Sunset Over the Sea" />
            <div class="card-body">
                <p class="card-text">{{ new2.title }}</p>

            </div>
             </router-link>
        </div>

    
     
    </div>
</template>
<script>
import { useStore } from '../../store/store.js'
import { onMounted } from 'vue';
import gsap from "gsap";
export default {
    setup() {
        const store = useStore()
        let news1 = [
            {
                id: 1,
                img: new URL('https://avatars.mds.yandex.net/i?id=adcbc13f37565161d7205b354cef19f49ebad402-4012262-images-thumbs&n=13').href,
                title: 'AKAlaR yourib yuboribsilare qoil'

            },
            {
                id: 2,
                img: new URL('https://avatars.mds.yandex.net/i?id=adcbc13f37565161d7205b354cef19f49ebad402-4012262-images-thumbs&n=13').href,
                title: 'Nima degan gap ee',

            },
            {
                id: 3,
                img: new URL('https://avatars.mds.yandex.net/i?id=adcbc13f37565161d7205b354cef19f49ebad402-4012262-images-thumbs&n=13').href,
                title: 'Nima degan gap ee',

            },
            {
                id: 4,
                img: new URL('https://avatars.mds.yandex.net/i?id=adcbc13f37565161d7205b354cef19f49ebad402-4012262-images-thumbs&n=13').href,
                title: 'Nima degan gap ee',

            },
            {
                id: 5,
                img: new URL('https://avatars.mds.yandex.net/i?id=adcbc13f37565161d7205b354cef19f49ebad402-4012262-images-thumbs&n=13').href,
                title: 'E qoil',

            }
        ]
        onMounted(() => {

            gsap.from("[data-name = '2']", { opacity: 0, y: 500, duration: 0.6 });
        })




        return { news1, store }
    }

}
</script>
<style lang="scss" scoped>
.card {
    transition: .3s;
}

.card:hover {
    box-shadow: 0px 0px 25px rgba(84, 82, 82, 0.332);
    cursor: pointer;
}
</style>