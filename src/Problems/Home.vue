<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <n-card
          content-style="padding: 0; background: rgb(226,232,240);
background: linear-gradient(270deg, rgba(226,232,240,1) 0%, rgba(219,231,247,1) 100%); color:white; border-radius:5px"
          hoverable="true"
          bordered="true"
        >
          <n-tabs type="line" size="large" :tabs-padding="20" pane-style="padding: 20px;">
            <n-tab-pane name="Bu qanday platforma?" content-style="color:white">
              <div class="d-flex justify-content-around">
                <div class="p-3">
                  <img
                    src="../assets/logo-v-2.png"
                    alt=""
                  
                    class="rounded-5 img-fluid w-100"
                  />  
                </div>

                <div class="p-5 fw-bolder opacity-70 w-75">
                  <n-gradient-text :size="24" type="success" class="fw-bold">
                    Algorithmic.uz
                  </n-gradient-text>
                  - bu sizning dasturlash mahoratingizni oshirish, bilimingizni
                  kengaytirish va texnik suhbatlarga tayyorgarlik ko'rish uchun yordam
                  beradigan eng ilg'or platformalardan biri. Ushbu platforma dunyoning eng
                  kuchli algo platformalari tajribasini o'rganish asosida yaratilgan
                  bo'lib o'quv va do'stona raqobatni kuchaytirish imkonini yaratadi
                </div>
              </div>
            </n-tab-pane>
            <n-tab-pane name=" Tizimda ishlash bo'yicha yo'riqnoma">
              Tizimda ishlash bo'yicha yo'riqnoma
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-4">
        <n-card
        hoverable = 'true'
          content-style="padding: 0;background: rgb(226,232,240);
background: linear-gradient(270deg, rgba(226,232,240,1) 0%, rgba(219,231,247,1) 100%); color:white; border-radius:5px"
        >
          <n-gradient-text :size="24" type="success" class="text-center d-block p-3" v-motion-roll-visible-top>
            Back in the USSR
          </n-gradient-text>
          <lord-icon
            src="https://cdn.lordicon.com/xhsumrcb.json"
            trigger="hover"
            style="width: 150px; height: 150px"
            class="m-auto d-block"
            id="box"
          >
          </lord-icon>

          <n-gradient-text :size="20" type="success" class="text-center d-block p-3 ">
            Yaqinlashib kelayotgan musobaqalar yo'q
          </n-gradient-text>
        </n-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { animate, spring } from "motion";

export default {
  setup() {
    let loading = ref(true);

    setTimeout(() => {
      loading.value = false;
    }, 2000);

    onMounted(() => {
    
      animate("#box", { rotate: 360 }, { easing: spring() }, spring({ stiffness: 500 }), {
  opacity: [
    null, // 0.5
    0.8,
    1,
  ],
} );
   

    });



    return { loading };
  },
};
</script>
<style lang="scss">
.n-gradient-text {
  white-space: normal;
}
</style>
