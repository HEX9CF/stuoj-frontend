<template>
  <div class="help">
    <h1>帮助</h1>
    <div class="help-content">
      <aside class="sidebar">
        <h2>目录</h2>
        <ul>
          <li><a href="#oj-info">OJ 信息</a></li>
          <li><a href="#contest">比赛</a></li>
          <li><a href="#problem-requirements">出题要求</a></li>
          <li><a href="#special-judge">Special Judge</a></li>
          <li><a href="#oi-mode">OI 模式</a></li>
          <li><a href="#about">关于</a></li>
        </ul>
      </aside>
      <main>
        <OJInfo id="oj-info" />
        <Contest id="contest" />
        <ProblemRequirements id="problem-requirements" />
        <SpecialJudge id="special-judge" />
        <OIMode id="oi-mode" />
        <About id="about" />
      </main>
    </div>
  </div>
</template>

<script>
import OJInfo from './components/OJInfo.vue'
import Contest from './components/Contest.vue'
import ProblemRequirements from './components/ProblemRequirements.vue'
import SpecialJudge from './components/SpecialJudge.vue'
import OIMode from './components/OIMode.vue'
import About from './components/About.vue'

export default {
  name: 'Help',
  components: {
    OJInfo,
    Contest,
    ProblemRequirements,
    SpecialJudge,
    OIMode,
    About
  }
}
</script>

<style scoped>
.help {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.help-content {
  display: flex;
  gap: 20px;
}
.sidebar {
  width: 200px;
  position: sticky;
  top: 20px;
  align-self: flex-start;
}
main {
  flex: 1;
}
h1 {
  margin-bottom: 20px;
}
h2 {
  margin-top: 20px;
  color: #337ab7;
}
h3 {
  margin-top: 15px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
a {
  text-decoration: none;
  color: #337ab7;
}
a:hover {
  text-decoration: underline;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
</style>
