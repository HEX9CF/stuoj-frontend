<template>
  <div class="group">
    <h1>小组</h1>
    <div class="group-controls">
      <input type="text" v-model="searchQuery" placeholder="探索" @input="filterGroups" />
      <select v-model="sortBy" @change="sortGroups">
        <option value="name">按名称排序</option>
        <option value="memberCount">按成员数排序</option>
      </select>
    </div>
    <div class="group-list">
      <GroupCard v-for="group in filteredGroups" :key="group.id" :group="group" />
    </div>
  </div>
</template>

<script>
import GroupCard from './components/GroupCard.vue'

export default {
  name: 'Group',
  components: {
    GroupCard
  },
  data() {
    return {
      searchQuery: '',
      sortBy: 'name',
      groups: [
        { id: 1, name: 'test', description: 'testtest', memberCount: 1 },
        { id: 2, name: 'js1901', description: 'HU209', memberCount: 1 },
        { id: 3, name: '电子科大', description: 'Unknown Group', memberCount: 1 },
        { id: 4, name: 'dong', description: 'XDFZOIers', memberCount: 2 },
        { id: 5, name: '5687', description: '信息学练习', memberCount: 3 },
        { id: 6, name: 'CODETIGER', description: '初级学习组', memberCount: 4 },
        { id: 7, name: '小组1', description: '练习小组', memberCount: 2 },
        { id: 8, name: '12345', description: '12334', memberCount: 1 },
        { id: 9, name: '11', description: '1', memberCount: 1 },
        { id: 10, name: 'CDUEST - 嵌入式C', description: '2021级新手上路', memberCount: 3 },
      ]
    }
  },
  computed: {
    filteredGroups() {
      return this.groups.filter(group =>
        group.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        group.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  methods: {
    filterGroups() {
      // 过滤功能已经通过计算属性 filteredGroups 实现
    },
    sortGroups() {
      this.groups.sort((a, b) => {
        if (this.sortBy === 'name') {
          return a.name.localeCompare(b.name)
        } else if (this.sortBy === 'memberCount') {
          return b.memberCount - a.memberCount
        }
      })
    }
  }
}
</script>

<style scoped>
.group {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.group-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.group-controls input, .group-controls select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.group-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
