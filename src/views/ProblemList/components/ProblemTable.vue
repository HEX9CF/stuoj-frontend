<template>
  <div class="problem-table">
    <table>
      <thead>
      <tr>
        <th>题号</th>
        <th>标题</th>
        <th>Solved</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="problem in problems" :key="problem.id">
        <td>{{ problem.id }}</td>
        <td>

          <router-link :to="{ name: 'ProblemDetail', params: { id: problem.id } }">
            {{ problem.title }}
          </router-link>
          <span v-for="tag in tags" :key="tag.id" class="tag">{{ tag }}</span>
        </td>
        <td>{{ problem.solved ? 'Yes' : 'No' }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import {ref, onMounted} from "vue";
import http from "../../../http/http.js";
const tags = ref('');
const problems = ref([]); // 响应式的题目列表
const fetchProblemDetail = async (id) => {
  const response = await axios.get(`/problem/${id}`);
  tags.value = response.data.data.tags;
};

// 从服务器获取题目列表的函数
const getProblemList = async () => {
  try {
    const response = await http.get("/problem/"); // 替换为你的服务器地址
    problems.value = response.data.data; // 假设服务器返回的数据格式为 [{ id: 1, title: '题目1', solved: true, tags: ['easy'] }, ...]
    console.log(response.data);
  } catch (error) {
    console.error("获取题目列表失败:", error);
  }
};

// 在组件挂载时调用 getProblemList
onMounted(() => {
  getProblemList();
});
</script>

<style scoped>
.problem-table {
  width: 100%;
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
.tag {
  background-color: #e0e0e0;
  padding: 2px 4px;
  margin-left: 4px;
  border-radius: 4px;
  font-size: 0.8em;
}
</style>
