<script setup lang="ts">


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Search from "@/component/search.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">个人主页</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
           <router-link class="nav-link" active-class="active-link" aria-current="page" to="/linker1">链接1</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active-link" to="/linker2">链接2</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active-link" to="/linker3">链接3</router-link>
          </li>
        </ul>
       <search/>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* 定义 active-link 类，当链接1被激活时，加粗字体 */
.active-link {
  font-weight: bold;
}
</style>
