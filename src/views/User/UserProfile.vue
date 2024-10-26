<template>
  <div class="user-profile">
    <h1>个人主页</h1>
    <div v-if="userReady" class="profile-info">
      <img :src="user.avatar || defaultAvatar" alt="用户头像" class="user-avatar"/>
      <div class="user-details">
        <h2>{{ user.username }}</h2>
        <p>邮箱: {{ user.email }}</p>
        <p>注册时间: {{ user.create_time }}</p>
      </div>
    </div>
    <p v-else>加载中...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useUserStore } from "../../store/user.js";
import axios from 'axios';
import Avatar from "./avatar.vue";

const UserStore = useUserStore();
const user = ref(JSON.parse(localStorage.getItem('user')) || {}); // 读取缓存中的用户数据
const userReady = ref(false);
const defaultAvatar = '../../img/default-avatar.png'; // 设置默认头像路径

// const formattedDate = computed(() => {
//   return user.value?.create_time ? new Date(user.value.registerDate).toLocaleDateString() : '';
// });

const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`/user/${UserStore.id}`, {
      headers: { Authorization: `Bearer ${UserStore.token}` }
    });
    user.value = response.data.data;
    userReady.value = true;
    localStorage.setItem('user', JSON.stringify(user.value)); // 存储用户数据到 localStorage
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

onMounted(() => {
  if (Object.keys(user.value).length) {
    userReady.value = true; // 如果 localStorage 中已有用户数据则直接显示
  } else {
    fetchUserProfile(); // 没有缓存则调用接口获取数据
  }
});
</script>

<style scoped>
.user-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.profile-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
img{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}
avatar{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
}
.user-details, .user-stats, .recent-activity {
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
</style>
