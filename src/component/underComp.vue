<script setup lang="ts" name="underComp">

</script>

<template>
  <div class="under">
  <a href="#">相关地址</a>
    <a href="#">互助网站</a>
  </div>
</template>

<style scoped>
    .under{
      display: flex;
      justify-content: center;
      text-align: center;
      //font-family: "Bodoni MT",serif;
      font-size: 15px;
      background-color: #e5dfdf;

    }
    .under a{
      text-decoration: none;
      color: #aaaaaa;
      padding-right: 10px;
    }
    .under a:hover{
      text-decoration: underline;
    }
    .under a:active{
      text-decoration: underline;
      color: #5e5c5c;
    }

</style>