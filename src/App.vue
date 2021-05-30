<template>
  <div id="app">
    <!-- <img alt="WalLit Wise logo" src="./assets/WalLitWise.png"> -->
    <MainView msg="Welcome to WalLitWise" />
    <!-- <SavingsCalculator style="visibility: visible" /> -->
    <!-- <FinancialTips props='' style="visibility: hidden;" /> -->
    <!-- <Assessment props='' style="visibility: hidden;" /> -->
  </div>
</template>

<script>
import MainView from './components/MainView.vue'
// import SavingsCalculator from './components/SavingsCalculator.vue'
// import FinancialTips from './components/FinancialTips.vue'
// import Assessment from './components/Assessment.vue'

export default {
  name: 'App',
  components: {
    MainView,
    // SavingsCalculator,
    // FinancialTips,
    // Assessment
  },
  data: () => ({
    years: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  })
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
