<template>
  <div class="custom-search d-flex align-items-center">
    <!-- 图片 -->
    <img
        src=../../img/OIP.jpg
        class="image"
        :class="{ 'image-moved': imageMoved }"
        @click="handleClick"
        alt="clickable image"
    />
    <!-- 搜索框 -->
    <input
        v-if="imageMoved"
        class="search-box"
        type="text"
        placeholder="Search..."
        :class="{ 'search-box-active': searchBoxActive }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const imageMoved = ref(false);
const searchBoxActive = ref(false);
const firstClickDone = ref(false);

// 点击事件
const handleClick = () => {
  if (!firstClickDone.value) {
    // 第一次点击：触发动画
    imageMoved.value = true;
    setTimeout(() => {
      searchBoxActive.value = true; // 显示搜索框
    }, 500);
    firstClickDone.value = true; // 标记第一次点击已完成
  } else {
    // 第二次点击：执行其他逻辑
    alert('第二次点击事件触发！');
  }
};

</script>

<style scoped>
.custom-search {
  display: flex;
  align-items: center;
  gap: 10px; /* 控制图片、搜索框和按钮之间的间距 */
}

.image {
  width: 15px;
  height: 15px;
  transition: all 0.5s ease;
  cursor: pointer;
}



.search-box {
  width: 0;
  height: 30px;
  opacity: 0;
  transition: all 0.5s ease;
}

.search-box-active {
  width: 200px;
  opacity: 1;
}



</style>

