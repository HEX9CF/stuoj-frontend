<template>
  <div class="contest-table">
    <table>
      <thead>
        <tr>
          <th>标题</th>
          <th>状态</th>
          <th>开始时间</th>
          <th>结束时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contest in contests" :key="contest.id">
          <td><a :href="contest.url">{{ contest.title }}</a></td>
          <td>{{ contest.status }}</td>
          <td>{{ contest.startTime }}</td>
          <td>{{ contest.endTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ContestTable',
  data() {
    return {
      contests: [
        { 
          id: 77, 
          title: 'JNOJ·基础题测试1 (公开)', 
          url: '/contest/view?id=77',
          status: '已结束',
          startTime: '2023-12-16 00:00:00',
          endTime: '2023-12-17 23:59:59'
        },
        { 
          id: 76, 
          title: '测试', 
          url: '/contest/view?id=76',
          status: '已结束',
          startTime: '2023-12-14 00:00:00',
          endTime: '2023-12-16 00:00:00'
        },
        { 
          id: 67, 
          title: 'test', 
          url: '/contest/view?id=67',
          status: '已结束',
          startTime: '2023-11-15 12:40:05',
          endTime: '2023-11-16 00:00:00'
        }
      ]
    }
  }
}
</script>

<style scoped>
.contest-table {
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
a {
  color: #337ab7;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
