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
      <div class="form-group">
        <label for="studentId">学号</label>
        <input type="text" id="studentId" v-model="studentId" required>
      </div>
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

<script>
export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      email: '',
      studentId: '',
      password: '',
      verificationCode: ''
    }
  },
  methods: {
    handleSubmit() {
      // 处理表单提交
      console.log('Form submitted', this.username, this.email, this.studentId, this.password, this.verificationCode)
      // 这里应该调用API进行实际的注册操作
    },
    refreshVerificationCode() {
      // 刷新验证码
      console.log('Refreshing verification code')
      // 这里应该调用API获取新的验证码
    }
  }
}
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
