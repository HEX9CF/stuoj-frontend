<template>
  <div class="status">
    <h1>测评结果</h1>
    <div class="filters">
      <input type="text" placeholder="题号" />
      <input type="text" placeholder="作者" />
      <select v-model="selectedResult">
        <option value="">测评结果</option>
        <option value="All">All</option>
        <option value="等待测评">等待测评</option>
        <option value="等待重测">等待重测</option>
        <option value="正在编译">正在编译</option>
        <option value="正在测评">正在测评</option>
        <option value="通过">通过</option>
        <option value="输出格式错误">输出格式错误</option>
        <option value="解答错误">解答错误</option>
        <option value="运行超时">运行超时</option>
        <option value="内存超限">内存超限</option>
        <option value="输出超限">输出超限</option>
        <option value="运行出错">运行出错</option>
        <option value="编译错误">编译错误</option>
        <option value="系统错误">系统错误</option>
        <option value="无测评数据">无测评数据</option>
      </select>
      <select v-model="selectedLanguage">
        <option value="">语言</option>
        <option value="All">All</option>
        <option value="C">C</option>
        <option value="C++">C++</option>
        <option value="Java">Java</option>
        <option value="Python3">Python3</option>
        <option value="Pascal">Pascal</option>
      </select>
      <button class="search">搜索</button>
      <button class="reset">重置</button>
    </div>
    <StatusTable />
  </div>
</template>

<script>
import StatusTable from './components/StatusTable.vue'

export default {
  name: 'Status',
  components: {
    StatusTable
  },
  data() {
    return {
      selectedResult: '',
      selectedLanguage: ''
    }
  }
}
</script>

<style scoped>
.status {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.filters input, .filters select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.filters button {
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.search {
  background-color: #337ab7;
  color: white;
  border: none;
}
.reset {
  background-color: #fff;
  border: 1px solid #ccc;
}
</style>
