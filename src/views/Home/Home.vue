<template>
  <div class="home">
    <HomeContent />
  </div>
</template>

<script>
import HomeContent from './components/HomeContent.vue'

export default {
  name: 'Home',
  components: {
    HomeContent
  }
}
</script>

<style scoped>
.home {
  flex: 1;
}
</style>
