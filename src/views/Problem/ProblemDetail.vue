<template>
  <div class="problem-detail">
    <h1>{{ problem.title }}</h1>
    <div class="problem-info">
      <span>时间限制: {{ problem.timeLimit }}s</span>
      <span>内存限制: {{ problem.memoryLimit }}MB</span>
    </div>
    <div class="problem-description">
      <h2>题目描述</h2>
      <p>{{ problem.description }}</p>
    </div>
    <div class="problem-input">
      <h2>输入</h2>
      <p>{{ problem.input }}</p>
    </div>
    <div class="problem-output">
      <h2>输出</h2>
      <p>{{ problem.output }}</p>
    </div>
    <div class="problem-samples">
      <h2>样例</h2>
      <div v-for="(sample, index) in problem.samples" :key="index" class="sample">
        <h3>样例输入 {{ index + 1 }}</h3>
        <pre>{{ sample.input }}</pre>
        <h3>样例输出 {{ index + 1 }}</h3>
        <pre>{{ sample.output }}</pre>
      </div>
    </div>
    <div class="problem-hint" v-if="problem.hint">
      <h2>提示</h2>
      <p>{{ problem.hint }}</p>
    </div>
    
    <!-- 添加提交代码表单 -->
    <div class="submit-form">
      <h2>提交代码</h2>
      <form @submit.prevent="submitCode">
        <div class="form-group">
          <label for="language">语言：</label>
          <select id="language" v-model="submission.language">
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>
        </div>
        <div class="form-group">
          <label for="code">代码：</label>
          <textarea id="code" v-model="submission.code" rows="10" required></textarea>
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProblemDetail',
  data() {
    return {
      problem: {
        id: 1,
        title: '[在线测评解答教程] A+B Problem',
        timeLimit: 1,
        memoryLimit: 128,
        description: '输入两个数字，输出它们的和。',
        input: '两个整数: a, b(0 ≤ a, b ≤ 100)。',
        output: '输出一个整数，该整数为 a, b 两数字之和。',
        samples: [
          {
            input: '1 2',
            output: '3'
          }
        ],
        hint: '使用基本的加法运算即可解决此问题。'
      },
      submission: {
        language: 'cpp',
        code: ''
      }
    }
  },
  mounted() {
    // 这里应该根据路由参数获取题目详情
    const problemId = this.$route.params.id
    // 调用API获取题目详情
    // this.fetchProblemDetail(problemId)
  },
  methods: {
    fetchProblemDetail(id) {
      // 调用API获取题目详情的方法
    },
    submitCode() {
      // 处理代码提交
      console.log('Submitting code:', this.submission)
      // 这里应该调用API提交代码
      // 提交成功后可以跳转到状态页面或显示结果
    }
  }
}
</script>

<style scoped>
.problem-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.problem-info {
  margin-bottom: 20px;
}
.problem-info span {
  margin-right: 20px;
}
h2 {
  margin-top: 20px;
}
pre {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}
.submit-form {
  margin-top: 30px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
select, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  background-color: #337ab7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #286090;
}
</style>
