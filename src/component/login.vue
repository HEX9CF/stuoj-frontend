<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-center">登录</h5>

            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="email" class="form-label">邮箱</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    placeholder="请输入邮箱"
                    required
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">密码</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    placeholder="请输入密码"
                    required
                />
              </div>

              <div class="d-grid">
                <button class="btn btn-primary" type="submit">登录</button>
              </div>
            </form>

            <p class="text-center mt-3">
              <a href="#">忘记密码?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 创建响应式变量来存储用户输入的电子邮件和密码
const email = ref("");
const password = ref("");

// 登录表单提交处理
const handleSubmit = () => {
  if (email.value && password.value) {
    alert(`登录成功！\n邮箱: ${email.value}\n密码: ${password.value}`);
    // 此处可以调用登录API或者其他处理逻辑
  } else {
    alert("请填写所有字段");
  }
};
</script>

<style scoped>
.container {
  margin-top: 100px;
}

.card {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
