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
      <p>解决的题目: {{ user.solvedProblems }}</p>
      <p>提交次数: {{ user.submissions }}</p>
      <p>通过率: {{ user.acceptanceRate }}%</p>
    </div>
    <div class="recent-activity">
      <h3>最近活动</h3>
      <ul>
        <li v-for="activity in user.recentActivities" :key="activity.id">
          {{ activity.date }} - {{ activity.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        username: '测试用户',
        email: 'test@example.com',
        studentId: '20240001',
        avatar: 'https://via.placeholder.com/150',
        registerDate: '2024-01-01',
        lastLogin: '2024-03-15',
        solvedProblems: 50,
        submissions: 100,
        acceptanceRate: 50,
        recentActivities: [
          { id: 1, date: '2024-03-14', description: '解决了问题 #1001' },
          { id: 2, date: '2024-03-13', description: '参加了比赛 "春季编程大赛"' },
          { id: 3, date: '2024-03-12', description: '加入了小组 "算法学习"' }
        ]
      }
    }
  }
}
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
