<template>
  <div id="app">
    <MainView />
  </div>
</template>

<script>
import MainView from './components/MainView.vue'

export default {
  name: 'App',
  components: {
    MainView,
  },
}
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 720px;
}

.logo {
  position: absolute;
  top: 0.5%;
  left: 0.5%;
  margin: 0;
  padding: 0;
}
</style>
