<template>
  <header>
    <div class="top-bar">
      <div class="logo"><span>JNOJ</span></div>
      <div class="title">Online Judge</div>
    </div>
    <nav>
      <div class="brand">JNOJ</div>
      <ul>
        <li v-for="link in links" :key="link.path">
          <router-link :to="link.path" active-class="active-link" :aria-label="link.label">
            <i :class="link.icon"></i> {{ link.label }}
          </router-link>
        </li>
        <template v-if="isLoggedIn">
          <li><router-link to="/profile" active-class="active-link" aria-label="个人"><i class="icon-user"></i> 个人</router-link></li>
          <li><a @click="logout" href="#" aria-label="登出"><i class="icon-logout"></i> 登出</a></li>
        </template>
        <template v-else>
          <li><router-link to="/signup" aria-label="注册"><i class="icon-register"></i> 注册</router-link></li>
          <li><router-link to="/login" aria-label="登录"><i class="icon-login"></i> 登录</router-link></li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = computed(() => localStorage.getItem('isLoggedIn') === 'true');

const links = [
  { path: '/', label: '首页', icon: 'icon-home' },
  { path: '/problem', label: '问题列表', icon: 'icon-list' },
  { path: '/status', label: '状态', icon: 'icon-status' },
  { path: '/ranking', label: '排行榜', icon: 'icon-ranking' },
  { path: '/group', label: '小组', icon: 'icon-group' },
  { path: '/contest', label: '比赛', icon: 'icon-contest' },
  { path: '/help', label: '帮助', icon: 'icon-help' }
];

const logout = () => {
  localStorage.removeItem('isLoggedIn');
  router.push('/login');
};
</script>


<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #006d8f;
  color: white;
  width: 1200px;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.logo {
  display: flex;
  align-items: center;
}
.logo img {
  height: 40px;
  margin-right: 10px;
}
.title {
  font-size: 24px;
}
nav {
  background-color: #f8f9fa;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brand {
  font-weight: bold;
  color: #333;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}
li {
  margin-left: 20px;
}
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  color: #006d8f;
}
 .active-link{
   color: #006d8f;
 }
</style>
