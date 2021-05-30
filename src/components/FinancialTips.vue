<template>
    <v-card class="tips">
        <v-card-title>Financial Tips</v-card-title>
        <v-list>
          <v-list-item v-for="number in numbers">{{ number.value }}</v-list-item>
        </v-list>
        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae a vel impedit facere voluptate repellendus nam dolore error illum enim harum vero quidem aperiam, cumque quis obcaecati repellat. Cum?</v-card-text>
    </v-card>
    
</template>


<script>
export default {
  data: () => {
      numbers: [
        {value: 1},
        {value: 2},
        {value: 3},
        {value: 4},
        {value: 5}
      ]
  }
}
</script>