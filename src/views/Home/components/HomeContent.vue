<template>
  <div class="home-content">
    <h1>Hello, world!</h1>
    <p>欢迎来到Jiangnan在线判题系统——JNOJ Online Judge</p>
    <div class="content-wrapper">
      <main>
        <article>
          <h2>欢迎来到 JNOJ</h2>
          <time>2022年11月21日</time>
          <p>欢迎使用JNOJ在线判题系统...</p>
        </article>
        <!-- 可以添加更多文章 -->
      </main>
      <aside>
        <section>
          <h3>关于</h3>
          <p>Online Judge系统（简称OJ）是一个在线的判题系统。用户可以在线提交程序多种程序（如C、C++、Java）源代码，系统对源代码进行编译和执行，并通过预先设计的测试数据来检验程序源代码的正确性。</p>
        </section>
      </aside>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.home-content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.content-wrapper {
  display: flex;
  gap: 20px;
}
main {
  flex: 3;
}
aside {
  flex: 1;
}
h1 {
  font-size: 48px;
  margin-bottom: 10px;
}
h2 {
  color: #006d8f;
}
time {
  color: #666;
  font-size: 0.9em;
}
</style>
