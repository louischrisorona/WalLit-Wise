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
  margin-top: 60px;
  color: #1A2C5B;
}

.container {
  max-width: 375px;
}

.logo {
  position: absolute;
  top: 0.5%;
  left: 0.5%;
  margin: 0;
  padding: 0;
}

button > span {
  color: #1a2c5b;
}
</style>
