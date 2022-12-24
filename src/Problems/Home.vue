<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <n-card
          content-style="padding: 0; background:#E2E8F0; color:white; border-radius:5px"
          hoverable="true"
          bordered="true"
        >
          <n-tabs
            type="line"
            size="large"
            :tabs-padding="20"
            pane-style="padding: 20px;"
          >
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
                kengaytirish va texnik suhbatlarga tayyorgarlik ko'rish uchun
                yordam beradigan eng ilg'or platformalardan biri. Ushbu
                platforma dunyoning eng kuchli algo platformalari tajribasini
                o'rganish asosida yaratilgan bo'lib o'quv va do'stona raqobatni
                kuchaytirish imkonini yaratadi
              </div>
              </div>

            
            </n-tab-pane>
            <n-tab-pane name="ROCKLIFE"> ROCKLIFE </n-tab-pane>
          </n-tabs>
        </n-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  setup() {
    let loading = ref(true);

    setTimeout(() => {
      loading.value = false;
    }, 2000);

    return { loading };
  },
};
</script>
<style lang="scss">
.n-gradient-text {
  white-space: normal;
}
</style>