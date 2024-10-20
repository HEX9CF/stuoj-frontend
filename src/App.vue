<script setup>
import Navbar from './views/Home/components/Navbar.vue'
import Footer from './views/Home/components/Footer.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <div class="content-container">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

/* 全局样式 */
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 20px;
  margin-bottom: 15px;
}

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
