<template>
  <div class="group-card">
    <h3>{{ group.name }}</h3>
    <p>{{ group.description }}</p>
    <p>成员数: {{ group.memberCount }}</p>
    <button>加入小组</button>
  </div>
</template>

<script>
export default {
  name: 'GroupCard',
  props: {
    group: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.group-card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  background-color: #f9f9f9;
}
h3 {
  margin-top: 0;
}
button {
  background-color: #337ab7;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #286090;
}
</style>
