<template>
  <div class="contest">
    <h1>比赛</h1>
    <ContestTable />
  </div>
</template>

<script>
import ContestTable from './components/ContestTable.vue'

export default {
  name: 'Contest',
  components: {
    ContestTable
  }
}
</script>

<style scoped>
.contest {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
