<template>
  <div class="login">
    <h1>登录</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">用户名或邮箱</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="rememberMe" /> 保持登录状态
        </label>
      </div>
      <button type="submit">登录</button>
    </form>
    <div class="links">
      <router-link to="/forgot-password">忘记密码</router-link>
    </div>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const rememberMe = ref(false);
const errorMessage = ref('');
const router = useRouter();

const handleSubmit = () => {
  // 模拟登录逻辑
  if (username.value === '123' && password.value === '123456') {
    console.log('登录成功');
    errorMessage.value = '';
    // 设置登录状态
    localStorage.setItem('isLoggedIn', 'true');
    // 触发storage事件,以便Navbar组件能够检测到登录状态的变化
    window.dispatchEvent(new Event('storage'));
    // 登录成功后跳转到个人页面
    router.push('/profile');
  } else {
    console.log('登录失败');
    errorMessage.value = '用户名或密码错误';
  }
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #337ab7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #286090;
}
.links {
  margin-top: 15px;
  text-align: right;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
