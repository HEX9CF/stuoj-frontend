<template>
  <div class="user-profile">
    <h1>个人主页</h1>
    <div class="profile-info">
      <img :src="user.avatar" alt="用户头像" class="avatar">
      <div class="user-details">
        <h2>{{ user.username }}</h2>
        <p>邮箱: {{ user.email }}</p>
        <p>学号: {{ user.studentId }}</p>
        <p>注册时间: {{ user.registerDate }}</p>
        <p>上次登录: {{ user.lastLogin }}</p>
      </div>
    </div>
    <div class="user-stats">
      <h3>统计信息</h3>
<!--      <p>解决的题目: {{ user.solvedProblems }}</p>-->
<!--      <p>提交次数: {{ user.submissions }}</p>-->
<!--      <p>通过率: {{ user.acceptanceRate }}%</p>-->
    </div>
    <div class="recent-activity">
      <h3>最近活动</h3>
<!--      <ul>-->
<!--        <li v-for="activity in user.recentActivities" :key="activity.id">-->
<!--          {{ activity.date }} - {{ activity.description }}-->
<!--        </li>-->
<!--      </ul>-->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../store/user.js';
import axios from 'axios';

// 使用 ref 来创建一个响应式的 user 对象
const user = ref({
  username: '',
  email: '',
  studentId: '',
  avatar: '',
  registerDate: '',
  lastLogin: '',
  // solvedProblems: 0,
  // submissions: 0,
  // acceptanceRate: 0,
  // recentActivities: []
});

// 获取用户ID
let id = useUserStore().id;

// 使用 axios 发起请求，获取用户数据
axios.get(`/user/${id}`)
    .then(response => {
      const data = response.data;
      user.value = {
        username: data.username,
        email: data.email,
        studentId: data.studentId,  // 假设API中有这个字段
        // avatar: data.avatar,
        registerDate: data.create_time,
        lastLogin: data.lastLogin,  // 假设API中有这个字段
        // solvedProblems: data.solvedProblems,  // 假设API中有这个字段
        // submissions: data.submissions,  // 假设API中有这个字段
        // acceptanceRate: data.acceptanceRate,  // 假设API中有这个字段
        // recentActivities: data.recentActivities || []
      };
    })
    .catch(error => {
      console.error('请求用户数据失败:', error);
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
.avatar {
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
