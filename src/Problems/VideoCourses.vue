<template>
  <div>
    <div class="row">
      <div class="col-7 offset-1">
        <n-input-group>
          <n-input :style="{ width: '100%' }" placeholder="Qidiruv" />
          <n-button type="primary" round style="width: 8%">
            <i class="fas fa-search"></i>
          </n-button>
        </n-input-group>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-4" v-for="course in courses" :key="course.id">
        <router-link
          :to="{ name: 'link', params: { id: course.id } }"
          class="d-block text-center bg-success mt-2 rounded-3 bg-gradient hover-overlay"
        >
          <div class="card rounded">
            <div class="card-header text-start text-light position-relative" style="z-index:33">
              {{ course.fan }}
            </div>
            <div class="card-body">
              <h5 class="card-title text-start text-white">
                {{ course.title }}
              </h5>
              <p class="card-text text-start text-white">
                {{ course.kurs }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let courses = [
      {
        id: 1,
        title: "course1",
        kurs: "Front end practicum kursi",
        fan: "Frontend",
        
      },
      {
        id: 2,
        title: "course2",
        kurs: "Back end practicum kursi",
        fan: "Backend",
      },

      {
        id: 3,
        title: "course2",
        kurs: "Flutter end practicum kursi",
        fan: "Flutter",
      },
    ];

    return {
      value: ref(null),
      courses,
    };
  },
});
</script>
<style lang="scss" scoped>
.card {
  background-image: url("https://i.pinimg.com/originals/b1/11/ea/b111eae16286c101b2675d53a062ce9e.jpg");
  background-size: cover;
  background-position: center;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(22, 78, 99);
    background: linear-gradient(
      146deg,
      rgba(22, 78, 99, 0.95) 42%,
      rgba(213, 255, 253, 0.5046393557422969) 96%
    );
  }

  h5,
  p {
    position: relative;
    z-index: 1111;
  }
}
</style>
