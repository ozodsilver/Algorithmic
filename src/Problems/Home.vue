<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12" id="heading">
        <n-card
          content-style="padding: 0; color:#fff; border-radius:5px;"
          :hoverable="true"
          header-style="color:#fff"
          class="h-100 dark border-0"
          :class="{ darkMode: store.color }"
        >
          <n-tabs type="line" size="large" :tabs-padding="20">
            <n-tab-pane name="Bu qanday platforma?  ">
              <div class="d-flex justify-content-around">
                <div class="p-3">
                  <img
                    src="../assets/logo-v-2.png"
                    alt=""
                    class="rounded-5 img-fluid w-75"
                  />
                </div>

                <div
                  class="p-5 pt-0 fw-bolder opacity-70 w-100"
                  :class="{ textColor: store.showColor }"
                >
                  <n-gradient-text :size="24" type="success" class="fw-bold">
                    Algorithmic.uz {{ store.showColor }}
                  </n-gradient-text>
                  - bu sizning dasturlash mahoratingizni oshirish, bilimingizni
                  kengaytirish va texnik suhbatlarga tayyorgarlik ko'rish uchun
                  yordam beradigan eng ilg'or platformalardan biri. Ushbu
                  platforma dunyoning eng kuchli algo platformalari tajribasini
                  o'rganish asosida yaratilgan bo'lib o'quv va do'stona
                  raqobatni kuchaytirish imkonini yaratadi
                </div>
              </div>
            </n-tab-pane>
            <n-tab-pane
              name="Tizimda ishlash bo'yicha yo'riqnoma"
              content-style="color:#fff"
            >
              Tizimda ishlash bo'yicha yo'riqnoma
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12 col-lg-6">
        <n-card
          :hoverable="true"
          :bordered="false"
          id="heading2"
          class="h-100 dark"
          :class="{ darkMode: store.color }"
          content-style="padding: 0; color:white; border-radius:5px; height:100%"
        >
          <n-gradient-text
            :size="20"
            :gradient="{
              deg: 180,
              from: 'rgb(88, 85, 85)',
              to: 'rgb(170, 170, 170)',
            }"
            class="text-center d-block fw-bold p-3"
            id="reja"
            :class="{ textColor: store.showColor }"
          >
            Rejalashtirilgan Musobaqalar
          </n-gradient-text>

          <img
            src="../assets/contest.png"
            alt=""
            class="w-50 d-block m-auto"
            id="box"
          />

          <n-gradient-text
            :size="20"
            :gradient="{
              deg: 180,
              from: 'rgb(85, 85, 85)',
              to: 'rgb(170, 170, 170)',
            }"
            class="text-center w-75 m-auto d-block p-3"
            :class="{ textColor: store.showColor }"
          >
            Yaqinlashib kelayotgan musobaqalar yo'q
          </n-gradient-text>
        </n-card>
      </div>

      <div class="col-12 col-lg-6">
        <n-card
          :hoverable="true"
          id="heading3"
          :bordered="false"
          class="dark"
          :class="{ darkMode: store.color }"
          content-style="padding: 0; color:white; border-radius:5px"
        >
          <n-gradient-text
            :size="24"
            :gradient="{
              deg: 180,
              from: 'rgb(88, 85, 85)',
              to: 'rgb(170, 170, 170)',
            }"
            class="text-center fw-bold d-block p-3"
            :class="{ textColor: store.showColor }"
          >
            TOP-3
          </n-gradient-text>
          <!-- person1 -->
          <div class="d-flex align-items-center gap-4 w-75 m-auto">
            <div class="d-flex flex-column">
              <n-gradient-text
                :size="17"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
                :class="{ textColor: store.showColor }"
              >
                TATU sam
              </n-gradient-text>
              <div class="d-flex gap-3 align-item-center">
                <i class="fas fa-trophy mt-1" style="color: orange"></i>
                <span class="text-secondary">1234</span>
              </div>
              <n-gradient-text
                :size="16"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
              >
                <span class="breakWord" :class="{ textColor: store.showColor }">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fuga, earum.
                </span>
              </n-gradient-text>
            </div>
            <img
              src="../assets/men.jpg"
              alt=""
              class="rounded-circle p-2"
              style="width: 50px; border: 1px double"
              id="person1"
            />

            <i class="fas fa-caret-right fs-4 text-dark"></i>
            <img
              src="../assets/icons/1.png"
              alt=""
              style="width: 30px"
              id="medal1"
            />
          </div>
          <!-- person1 -->

          <!-- person2 -->
          <div
            class="d-flex align-items-center mt-3 border-top pt-3 gap-4 w-75 m-auto"
          >
            <div class="d-flex flex-column">
              <n-gradient-text
                :size="17"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
                :class="{ textColor: store.showColor }"
              >
                Samarqand vetirinariya Instituti
              </n-gradient-text>
              <div class="d-flex gap-3 align-item-center">
                <i class="fas fa-trophy mt-1" style="color: orange"></i>
                <span class="text-secondary">1234</span>
              </div>
              <n-gradient-text
                :size="16"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
                :class="{ textColor: store.showColor }"
              >
                <span class="breakWord"
                  >Nuxot yetishtirish bo'yicha mutaxasis
                </span>
              </n-gradient-text>
            </div>
            <img
              src="../assets/shaxzod.jpg"
              alt=""
              class="rounded-circle p-2"
              style="width: 50px; border: 1px double"
              id="person2"
            />

            <i
              class="fas fa-caret-right fs-4 text-dark"
              :class="{ textColor: store.showColor }"
            ></i>
            <img
              src="../assets/icons/2.png"
              alt=""
              style="width: 30px"
              id="medal2"
            />
          </div>
          <!-- person2 -->

          <!-- person3 -->
          <div
            class="d-flex align-items-center mt-3 border-top pt-3 gap-4 w-75 m-auto"
          >
            <div class="d-flex flex-column">
              <n-gradient-text
                :size="17"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
                :class="{ textColor: store.showColor }"
              >
                Prezident Maktabi
              </n-gradient-text>
              <div class="d-flex gap-3 align-item-center">
                <i class="fas fa-trophy mt-1" style="color: orange"></i>
                <span class="text-secondary">1234</span>
              </div>
              <n-gradient-text
                :size="16"
                :gradient="{
                  deg: 180,
                  from: 'rgb(85, 85, 85)',
                  to: 'rgb(170, 170, 170)',
                }"
              >
                <span class="breakWord" :class="{ textColor: store.showColor }">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fuga, earum.
                </span>
              </n-gradient-text>
            </div>
            <img
              src="../assets/sardor.jpg"
              alt=""
              class="rounded-circle p-2"
              style="width: 50px; border: 1px double"
              id="person3"
            />

            <i
              class="fas fa-caret-right fs-4 text-dark"
              :class="{ textColor: store.showColor }"
            ></i>
            <img
              src="../assets/icons/3.png"
              alt=""
              style="width: 30px"
              id="medal3"
            />
          </div>
          <!-- person3 -->
        </n-card>
      </div>

      <div class="col-12 col-lg-6 mt-md-4">
        <n-card
          :hoverable="true"
          id="heading4"
          :bordered="false"
          class="h-100 dark"
          :class="{ darkMode: store.color }"
          content-style="padding: 0; color:white; border-radius:5px; height:100%"
        >
          <div class="d-flex w-50 m-auto">
            <n-gradient-text
              :size="24"
              :gradient="{
                deg: 180,
                from: 'rgb(88, 85, 85)',
                to: 'rgb(170, 170, 170)',
              }"
              class="text-center fw-bold d-block p-3"
              :class="{ textColor: store.showColor }"
            >
              Statistika
            </n-gradient-text>

            <lord-icon
              src="https://cdn.lordicon.com/tbfrtmlu.json"
              trigger="loop"
              style="width: 50px; height: 50px"
              class="m-auto border-danger d-block"
              id="box"
            >
            </lord-icon>
          </div>

          <div class="row">
            <div class="col-12 gap-3 justify-content-end px-5 mt-5 d-flex">
              <span class="text-secondary">Foydalanuvchilar soni</span>
              <p
                class="text-success text-center bg-secondary badge bg-gradient text-white"
              >
                3123
              </p>
            </div>

            <div class="col-12 gap-3 justify-content-end px-5 d-flex">
              <span class="text-secondary">Urinishlar soni</span>
              <p class="text-center badge bg-secondary bg-gradient text-white">
                312123
              </p>
            </div>

            <div
              class="col-12 gap-3 justify-content-end flex-row-reverse px-5 d-flex"
              style="margin-top: 100px"
            >
              <span class="text-secondary">Masalalar soni</span>
              <p
                class="text-success text-center badge bg-secondary bg-gradient text-white"
              >
                1234
              </p>
            </div>

            <div
              class="col-12 gap-3 justify-content-end flex-row-reverse px-5 d-flex"
            >
              <span class="text-secondary">O'tkazilgan olimpiadalar</span>
              <p
                class="text-success text-center badge bg-success bg-gradient text-white"
              >
                1234
              </p>
            </div>
          </div>
        </n-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { animate, spring } from "motion";
import gsap from "gsap";
import { useStore } from "../../store/store.js";

export default {
  setup() {
    let loading = ref(true);
    let store = useStore();

    onMounted(() => {
      gsap.from("#heading", { opacity: 0, y: 100, duration: 0.2 });
        gsap.from("#heading1", { opacity: 0, y: 100, duration: 0.3 });
          gsap.from("#heading2", { opacity: 0, y: 100, duration: 0.4 });
           gsap.from("#heading3", { opacity: 0, y: 100, duration: 0.5 });
    });

    return { loading, store };
  },
};
</script>
<style lang="scss" scoped>
.n-gradient-text {
  font-family: "Quicksand", sans-serif;
  white-space: normal;
}

.dark {
  background: rgb(226, 232, 240);
  background: linear-gradient(
    270deg,
    rgba(226, 232, 240, 1) 0%,
    rgba(219, 231, 247, 1) 100%
  );
}

.darkMode {
  background: #1a2b3e !important;
}

.breakWord {
  max-width: 15rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
#heading {
  font-family: Quicksand, sans-serif;
}
#heading3 {
  min-height: 430px;
}

#heading2 {
  min-height: 430px;
}
#heading4 {
  min-height: 430px;
  &:before {
    content: "";
    position: absolute;
    width: 40%;
    height: 35%;
    top: 15%;
    left: 3%;
    background-image: url("../assets/forBg/bg1.png");
    background-size: cover;
  }

  &:after {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    bottom: 0;
    right: 0;
    background-image: url("../assets/forBg/bg2.png");
    background-size: cover;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
</style>
