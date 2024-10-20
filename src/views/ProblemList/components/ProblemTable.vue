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
            <span v-for="tag in problem.tags" :key="tag" class="tag">{{ tag }}</span>
          </td>
          <td>{{ problem.solved }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProblemTable',
  data() {
    return {
      problems: [
        { id: 1, title: '[在线测评解答教程] A+B Problem', tags: ['系统测试'], solved: 201 },
        { id: 11, title: '11', tags: [], solved: 0 },
        { id: 1001, title: '[在线测评解答教程] 求和', tags: [], solved: 41 },
        { id: 1002, title: '[在线测评解答教程] 闰年', tags: [], solved: 14 },
        { id: 1003, title: '灯的排列问题', tags: [], solved: 0 },
        { id: 1006, title: '手机号码', tags: ['字符串'], solved: 3 },
        { id: 1018, title: '奖金', tags: [], solved: 0 },
        { id: 1019, title: '烦人的幻灯片(slides)', tags: [], solved: 0 },
        { id: 1020, title: '病毒(virus)', tags: [], solved: 0 },
        { id: 1021, title: '家谱树', tags: [], solved: 1 },
      ]
    }
  }
}
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
