<template>
  <v-app>
    <v-main>
      <v-container fixed class='main-card justify-center' secondary>
        <img alt="WalLit Wise logo" src="../assets/WalLitWise.png">
        <h1 class="mb-8">Let us help you save</h1>
        <v-card v-if="!visible">
          <v-list-item class="mx-auto">Savings Calculator</v-list-item>
          <v-btn primary @click="clickForVisible" class="ma-4">Proceed</v-btn>
        </v-card>
        <SavingsCalculator v-if="isVisible" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SavingsCalculator from './SavingsCalculator.vue'

export default {
  name: 'main',
  components: {
    SavingsCalculator
  },
  data () {
    return {
      visible: false,
      isVisible: false
    }
  },
  
  methods: {
    clickForVisible () {
      this.visible = !this.visible
      this.isVisible = !this.isVisible
    }
  },
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

.main-card {
  max-width: 500px;
  margin: 0 auto;
  background-color: #C4C4C4;
}

</style>
