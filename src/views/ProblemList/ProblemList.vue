<template>
  <div class="problem-list">
    <h1>问题列表</h1>
    <div class="problem-list-container">
      <ProblemTable />
      <div class="sidebar">
        <div class="search-box">
          <input type="text" placeholder="输入 ID 或标题或来源" />
          <button>搜索</button>
        </div>
        <div class="tags">
          <h3>标签</h3>
          <div class="tag-list">
            <span class="tag">LOJ</span>
            <span class="tag">数学</span>
            <span class="tag">数论</span>
            <span class="tag">0</span>
            <!-- 添加更多标签 -->
            <span class="tag" v-for="tag in tags" :key="tag.id">{{tag.id}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProblemTable from './components/ProblemTable.vue'
import axios from "axios";
import {onMounted, ref} from "vue";
import http from "../../http/http.js";
 const tags = ref([]);
 const getTags = async ()=>{
  const response = await http.get("/problem/tag");
  tags.value = response.data;
 }
 onMounted(()=>{
   getTags();
 })
</script>

<style scoped>
.problem-list-container {
  display: flex;
  gap: 20px;
}
.sidebar {
  width: 250px;
}
.search-box {
  margin-bottom: 20px;
}
.search-box input {
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
}
.search-box button {
  width: 100%;
  padding: 5px;
}
.tags h3 {
  margin-bottom: 10px;
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.tag {
  background-color: #f0f0f0;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 0.9em;
}
</style>
