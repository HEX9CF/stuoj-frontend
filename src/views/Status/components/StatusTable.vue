<template>
  <div class="status-table">
    <table>
      <thead>
        <tr>
          <th>运行ID</th>
          <th>作者</th>
          <th>题号</th>
          <th>测评结果</th>
          <th>分数</th>
          <th>时间</th>
          <th>内存</th>
          <th>语言</th>
          <th>代码长度</th>
          <th>提交时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="status in statusList" :key="status.id">
          <td><a :href="status.url">{{ status.id }}</a></td>
          <td><a :href="status.authorUrl">{{ status.author }}</a></td>
          <td><a :href="status.problemUrl">{{ status.problemId }} - {{ status.problemTitle }}</a></td>
          <td :class="status.result.class">
            {{ status.result.text }}
            <span v-if="status.result.class === 'waiting'" class="loading-icon">⟳</span>
          </td>
          <td>{{ status.score }}</td>
          <td>{{ status.time }}</td>
          <td>{{ status.memory }}</td>
          <td>{{ status.language }}</td>
          <td>{{ status.codeLength }}</td>
          <td>{{ status.submissionTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'StatusTable',
  data() {
    return {
      statusList: [
        {
          id: 1296,
          url: '/solution/detail?id=1296',
          author: 'linbody',
          authorUrl: '/user/view?id=1059',
          problemId: 1,
          problemTitle: '[在线测评解答教程] A+B Problem',
          problemUrl: '/p/1',
          result: { text: '等待测评', class: 'waiting' },
          score: 0,
          time: '0 MS',
          memory: '0 KB',
          language: 'Python3',
          codeLength: 40,
          submissionTime: '21天前'
        },
        {
          id: 1295,
          url: '/solution/detail?id=1295',
          author: 'viro',
          authorUrl: '/user/view?id=1060',
          problemId: 1039,
          problemTitle: '统计单词数',
          problemUrl: '/p/1039',
          result: { text: '等待测评', class: 'waiting' },
          score: 0,
          time: '0 MS',
          memory: '0 KB',
          language: 'C++',
          codeLength: 1012,
          submissionTime: '1个月前'
        },
        // 添加更多状态数据...
      ]
    }
  }
}
</script>

<style scoped>
.status-table {
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
.waiting {
  color: #f39c12;
}
.loading-icon {
  display: inline-block;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
a {
  color: #337ab7;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
