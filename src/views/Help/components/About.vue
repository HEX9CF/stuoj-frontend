<template>
  <section>
    <h2>关于</h2>
    <p>JNOJ (Jiangnan Online Judge) 是一个在线判题系统，旨在为编程爱好者和竞赛选手提供一个练习和提高编程技能的平台。</p>
    <h3>系统特点</h3>
    <ul>
      <li>支持多种编程语言，包括 C、C++、Java、Python 等</li>
      <li>提供丰富的题目库，涵盖各种难度和类型的编程问题</li>
      <li>实时评测系统，快速反馈代码运行结果</li>
      <li>支持个人和团队比赛，促进学习和交流</li>
      <li>详细的解题报告和数据分析，帮助用户改进代码</li>
    </ul>
    <h3>联系我们</h3>
    <p>如果您有任何问题或建议，请通过以下方式联系我们：</p>
    <p>邮箱：support@jnoj.com</p>
    <p>GitHub：<a href="https://github.com/jnoj/jnoj" target="_blank">https://github.com/jnoj/jnoj</a></p>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
section {
  margin-bottom: 20px;
}
h2 {
  color: #337ab7;
}
h3 {
  margin-top: 15px;
}
ul {
  padding-left: 20px;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
