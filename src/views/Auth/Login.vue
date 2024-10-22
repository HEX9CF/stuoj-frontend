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
import {onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useUserStore} from "../../store/user.js";

const UserStore = useUserStore();
const username = ref('');
const password = ref('');
const rememberMe = ref(false);
const errorMessage = ref('');
const router = useRouter();
const email = ref('');

const handleSubmit = () => {
  // 模拟登录逻辑
  login(email.value, password.value)
      .then(data => {
        console.log('Login successful:', data);
        console.log('登录成功');
        errorMessage.value = '';
        // 假设返回的 data 中包含 token
        const token = data.data;
        UserStore.token = token;// 从返回的数据中提取 token
        console.log('Token:', token);
        localStorage.setItem('token',token);
        localStorage.setItem('isLoggedIn', 'true');
        // 保存 token 到 localStorage
        // 触发 storage 事件, 以便其他组件能够检测到登录状态的变化
        window.dispatchEvent(new Event('storage'));
        UserStore.id = userId;
        console.log(UserStore.id)
        // 登录成功后跳转到个人页面
        router.push('/profile');
      })
      .catch(error => {
        console.error('Login failed:', error);
        console.log('登录失败');
        errorMessage.value = '用户名或密码错误';
      });
};
const login = async (email, password) => {
  try {
    const response = await axios.post('/user/login', {
      email: email,
      password: password
    },{
      headers: {
      'Content-Type': 'application/json'
      }
    });

    // 处理返回值
    console.log('Response data:', response.data);
    return response.data;  // 返回服务端的响应数据
  } catch (error) {
    // 错误处理
    console.error('Error during login:', error);
    throw error;  // 抛出错误以便 handleSubmit 进行处理
  }
};
const userId = ref(null); // 响应式变量用于保存用户 ID

const getId = async (token) => {
  try {
    const response = await axios.get('/user/current', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data; // 返回用户数据
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // 抛出错误
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
    userId.value = userData.id; // 直接将用户 ID 赋值给 userId
    console.log('Current User ID:', userId.value); // 打印用户 ID
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
