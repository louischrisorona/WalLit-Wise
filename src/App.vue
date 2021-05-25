<template>
  <div id="app">
    <img height="50" alt="WalLit Wise logo" class="logo" src="./assets/logo.svg">
    <img height="250" alt="WalLit Wise logo" src="./assets/logo.svg">
    <MainView msg="Welcome to WalLit Wise"/>
    <SavingsCalculator props='' style="visibility: hidden;" />
    <FinancialTips props='' style="visibility: hidden;" />
    <Assessment props='' style="visibility: hidden;" />
  </div>
</template>

<script>
import MainView from './components/MainView.vue'
import SavingsCalculator from './components/SavingsCalculator.vue'
import FinancialTips from './components/FinancialTips.vue'
import Assessment from './components/Assessment.vue'

export default {
  name: 'App',
  components: {
    MainView,
    SavingsCalculator,
    FinancialTips,
    Assessment
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  position: absolute;
  top: 0.5%;
  left: 0.5%;
  margin: 0;
  padding: 0;
}
</style>
