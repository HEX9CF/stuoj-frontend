<template>
  <div class="ranking">
    <h1>
      <span class="active">★题数排行</span> • 
      <span class="inactive">段位排行</span>
    </h1>
    <div class="top-users">
      <div v-for="user in topUsers" :key="user.id" class="top-user">
        <div class="rank" :class="`rank-${user.rank}`">{{ user.rank }}</div>
        <div class="user-info">
          <a :href="user.url" :class="`name-${user.rank}`">{{ user.name }}</a>
          <div class="solved">{{ user.solved }}</div>
        </div>
      </div>
    </div>
    <RankingTable />
  </div>
</template>

<script>
import RankingTable from './components/RankingTable.vue'

export default {
  name: 'Ranking',
  components: {
    RankingTable
  },
  data() {
    return {
      topUsers: [
        { id: 560, rank: 2, name: 'i_am_aking_ioi', url: '/user/view?id=560', solved: 4 },
        { id: 393, rank: 1, name: 'Sample_Test', url: '/user/view?id=393', solved: 10 },
        { id: 1, rank: 3, name: 'admin', url: '/user/view?id=1', solved: 3 }
      ]
    }
  }
}
</script>

<style scoped>
.ranking {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
}
.active {
  font-weight: bold;
}
.inactive {
  color: #337ab7;
  cursor: pointer;
}
.top-users {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.top-user {
  text-align: center;
  margin: 0 20px;
}
.rank {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
}
.rank-1 { color: #ffd700; }
.rank-2 { color: #c0c0c0; }
.rank-3 { color: #cd7f32; }
.user-info {
  margin-top: 10px;
}
.name-1 { color: #008000; }
.name-2 { color: #000000; }
.name-3 { color: #008000; }
a {
  text-decoration: none;
  font-weight: bold;
}
.solved {
  font-size: 18px;
  color: #666;
}
</style>
