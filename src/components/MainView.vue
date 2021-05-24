<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    
    <h3>Financial Assessment</h3>
    <ul>
      <li>Question 1</li>
      <li>Question 2</li>
    </ul>

    <h3>Calculator</h3>

    <h3>Financial Resources</h3>


    <h3>Team Members</h3>
    <ul>
      <li><a href="#" target="_blank" rel="noopener"><span>Product Management </span>Femi </a></li>
      <li><a href="#" target="_blank" rel="noopener"><span>Design </span>Jose</a></li>
      <li><a href="#" target="_blank" rel="noopener"><span>Development </span>Chris</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
