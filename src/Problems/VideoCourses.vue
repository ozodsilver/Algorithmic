<template>
  <div>
    <div class="row">
      <div class="col-8 m-auto">
        <n-input-group>
          <n-input :style="{ width: '100%' }" placeholder="Qidiruv" />
          <n-button type="primary" round style="width: 8%">
            <i class="fas fa-search"></i>
          </n-button>
        </n-input-group>
      </div>
    </div>

    <div class="row mt-4 ">
      <div class="col-10 ">
        <router-view></router-view>
      </div>
      <div class="col-2" style="height: 100vh;" >
        <router-link
          v-for="course in courses"
          :key="course.id"
          :to="{ name: 'coursLink', params: { id: course.id } }
          "
         
          class="d-block text-center bg-success mt-2 rounded-3 text-white bg-gradient p-2 hover-overlay "
          >{{ course.title }}</router-link
        >
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
        id: 0,
        title: "course1",
      },
      {
        id: 1,
        title: "course2",
      },
    ];

    return {
      value: ref(null),
      courses,
    };
  },
});
</script>
<style lang="scss" scoped></style>
