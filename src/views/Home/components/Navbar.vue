<template>
  <header>
    <div class="top-bar">
      <div class="logo">
        <span>JNOJ</span>
      </div>
      <div class="title">Online Judge</div>
    </div>
    <nav>
      <div class="brand">JNOJ</div>
      <ul>
        <li><router-link to="/"><i class="icon-home"></i> 首页</router-link></li>
        <li><router-link to="/problem"><i class="icon-list"></i> 问题列表</router-link></li>
        <li><router-link to="/status"><i class="icon-status"></i> 状态</router-link></li>
        <li><router-link to="/ranking"><i class="icon-ranking"></i> 排行榜</router-link></li>
        <li><router-link to="/group"><i class="icon-group"></i> 小组</router-link></li>
        <li><router-link to="/contest"><i class="icon-contest"></i> 比赛</router-link></li>
        <li><router-link to="/help"><i class="icon-help"></i> 帮助</router-link></li>
        <template v-if="isLoggedIn">
          <li><router-link to="/profile"><i class="icon-user"></i> 个人</router-link></li>
          <li><a @click="logout" href="#"><i class="icon-logout"></i> 登出</a></li>
        </template>
        <template v-else>
          <li><router-link to="/signup"><i class="icon-register"></i> 注册</router-link></li>
          <li><router-link to="/login"><i class="icon-login"></i> 登录</router-link></li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('isLoggedIn')
      this.isLoggedIn = false
      this.$router.push('/login')
    },
    checkLoginStatus() {
      this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    }
  },
  mounted() {
    this.checkLoginStatus()
    window.addEventListener('storage', this.checkLoginStatus)
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.checkLoginStatus)
  }
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #006d8f;
  color: white;
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
</style>
