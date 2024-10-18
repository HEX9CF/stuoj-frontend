<script setup lang="ts" name="jindu">
  import {ref} from 'vue';
  let pre = ref(0);
  // import axios from "axios";
  //  pre = await axios.get("url")//返回一个零到一百的数作为百分比

</script>

<template>
  <input type="number" v-model="pre">

  <div class="g-progress" :style="{'--progress': pre+'%'}"></div>
</template>

<style scoped>
@property --progress {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

.g-progress {

  width: 240px;
  height: 25px;
  border-radius: 25px;
  background: linear-gradient(90deg, #0f0, #0ff var(--progress), transparent 0);
  border: 1px solid #eee;
  transition: .3s --progress;
}
</style>