<template>
  <div class="signup">
    <h1>注册</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="email">邮箱</label>
        <input type="email" id="email" v-model="email" required>
      </div>
<!--      <div class="form-group">-->
<!--        <label for="studentId">学号</label>-->
<!--        <input type="text" id="studentId" v-model="studentId" required>-->
<!--      </div>-->
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="verificationCode">验证码</label>
        <div class="verification-code">
          <input type="text" id="verificationCode" v-model="verificationCode" required>
          <button type="button" @click="refreshVerificationCode">刷新验证码</button>
        </div>
      </div>
      <button type="submit">注册</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from "axios";

const username = ref('');
const email = ref('');
const studentId = ref('');
const password = ref('');
const verificationCode = ref('');

const handleSubmit = async () => {
  try {
    // 处理表单提交
    console.log('Form submitted', username.value, email.value, studentId.value, password.value, verificationCode.value);

    // 调用API进行实际的注册操作
    const person = await Signup(username.value, email.value, password.value);

    // 注册成功的处理
    console.log('Signup successful:', person);
    console.log('注册成功');

  } catch (error) {
    // 注册失败的处理
    console.error('Signup failed:', error);
    console.log('邮箱重复或账号重复');
  }
};

// 注册功能封装
const Signup = async (username, email, password) => {
  try {
    const response = await axios.post('/user/register', {
      username: username,  // 直接传递值
      email: email,        // 直接传递值
      password: password   // 直接传递值
    });

    // 返回响应数据
    return response.data;

  } catch (error) {
    console.error('API error:', error);
    throw error;  // 抛出错误，以便在 handleSubmit 中捕获
  }
};

const refreshVerificationCode = () => {
  // 刷新验证码
  console.log('Refreshing verification code');
  // 调用API获取新的验证码
};
</script>
<style scoped>
.signup {
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
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.verification-code {
  display: flex;
  align-items: center;
}
.verification-code input {
  flex: 1;
  margin-right: 10px;
}
button {
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
</style>
