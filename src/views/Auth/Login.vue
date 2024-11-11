<template>
  <div class="login">
    <h1>登录</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">用户名或邮箱</label>
        <input type="text" id="username" v-model="email" required />
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
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from "../../store/user.js";
import http from "../../http/http.js";

const UserStore = useUserStore();
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const rememberMe = ref(false);
const handleSubmit = async () => {
  try {
    const data = await login(email.value, password.value);
    console.log('Login successful:', data);
    errorMessage.value = '';

    const token = data.data; // 从返回的数据中提取 token
    UserStore.setToken(token);
    console.log('Token:', token);
    localStorage.setItem('token', token);
    localStorage.setItem('isLoggedIn', 'true');
    window.dispatchEvent(new Event('storage'));
    // 获取用户 ID
    const userId = await getId(token); // 获取用户 ID
    localStorage.setItem('id',userId);
    UserStore.setId(userId); // 设置用户 ID 到 Store
    console.log(UserStore.id);
    await fetchUserProfile(userId);
    await router.push('/profile');
  } catch (error) {
    console.error('Login failed:', error);
    errorMessage.value = '用户名或密码错误';
  }
};

const login = async (email, password) => {
  try {
    const response = await axios.post('/user/login', {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Response data:', response.data);
    return response.data; // 返回服务端的响应数据
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // 抛出错误以便 handleSubmit 进行处理
  }
};

const getId = async (token) => {
  try {
    const response = await axios.get('/user/current', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data.data; // 返回用户数据
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // 抛出错误
  }
};
const fetchUserProfile = async () => {
  try {
    const response = await http.get(`/user/${UserStore.id}`);
    localStorage.setItem("role",response.data.data.role);
    console.log(response.data.data.role);
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

// 在组件挂载时获取当前用户信息
onMounted(async () => {
  const token = localStorage.getItem('token'); // 从存储中获取 token
  if (!token) {
    console.error('No token found');
    return; // 如果没有 token，提前返回
  }
  try {
    const userData = await getId(token); // 调用 getId 获取用户数据
    UserStore.setId(userData.id); // 将用户 ID 设置到 Store
    console.log('Current User ID:', userData.id); // 打印用户 ID
  } catch (error) {
    console.error('Failed to fetch current user:', error);
  }
});
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
