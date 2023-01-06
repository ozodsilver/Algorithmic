<template >
    <div>
   <div class="row">
    <div class="col-8  m-auto">
    
    <n-input-group>
    
      <n-input :style="{ width: '60%' }"  placeholder="Qidiruv" />
      <n-button type="primary" round ghost>
     
      </n-button>
    </n-input-group>
    </div>

   
   </div>

   <div class="row mt-4">
    <div class="col-4  ">
        <iframe style="width:100%; height:200px" src="https://www.youtube.com/embed/sY3_IY1GZ78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-3"></iframe>
    </div>
    <div class="col-4  ">
        <iframe style="width:100%; height:200px" src="https://www.youtube.com/embed/sY3_IY1GZ78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-3"></iframe>
    </div>
    <div class="col-4  ">
        <iframe style="width:100%; height:200px" src="https://www.youtube.com/embed/sY3_IY1GZ78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-3"></iframe>
    </div>
    <div class="col-4 mt-4 ">
        <iframe style="width:100%; height:200px" src="https://www.youtube.com/embed/sY3_IY1GZ78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-3"></iframe>
    </div>
   </div>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      value: ref(null)
    };
  }
});
</script>
<style lang="scss" scoped>
    
</style>