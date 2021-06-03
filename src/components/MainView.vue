<template>
  <v-app>
    <v-main>
      <v-container fixed class='justify-center'>
        <img alt="WalLit Wise logo" src="../assets/WalLitWise.png">
        <h1 v-if="!visible" class="mb-8">{{msg}}</h1>
        <h2 v-if="visible">Let us help you save</h2>
        <v-btn primary @click="clickForVisible" v-if="!visible" class="mt-4">Proceed</v-btn>
        <SavingsCalculator :parentData="parentData" v-on:childToParent="onChildClick" v-model="results" v-if="isVisible" />
        <SavingResults :parentData="parentData" v-if="resultFromChild"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SavingsCalculator from './SavingsCalculator.vue'
import SavingResults from './SavingResults.vue'

export default {
  name: 'main',
  props: {
    msg: String,
  },
  components: {
    SavingsCalculator,
    SavingResults
  },
  data () {
    return {
      visible: false,
      isVisible: false,
    }
  },
  methods: {
    onChildClick (value) {
      this.isVisible = !this.isVisible
      this.resultFromChild = value
    },
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
</style>
