<template>
  <div class="ranking-table">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Who</th>
          <th>Solved</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.rank }}</td>
          <td>
            <a :href="user.url" :class="{ 'name-green': user.rank <= 3 }">{{ user.name }}</a>
          </td>
          <td>{{ user.solved }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RankingTable',
  data() {
    return {
      users: [
        { id: 393, rank: 1, name: 'Sample_Test', url: '/user/view?id=393', solved: 10 },
        { id: 560, rank: 2, name: 'i_am_aking_ioi', url: '/user/view?id=560', solved: 4 },
        { id: 1, rank: 3, name: 'admin', url: '/user/view?id=1', solved: 3 },
        { id: 154, rank: 4, name: 'WindCry1_SWUST', url: '/user/view?id=154', solved: 3 },
        { id: 601, rank: 5, name: 'lxy07027', url: '/user/view?id=601', solved: 3 },
      ]
    }
  }
}
</script>

<style scoped>
.ranking-table {
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
.name-green {
  color: #008000;
}
</style>
