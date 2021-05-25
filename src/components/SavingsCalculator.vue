<template>
    <v-card class="calculator">
        <v-card-title align="center" justify="center">
            WalLitWise
        </v-card-title>
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-title class="headline">
                    Calculator Savings Tool
                </v-list-item-title>
                <v-list-item-subtitle class="text-bold">Estimate your savings</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
  name: 'calculator',
  props: {
    msg: String
  }
}
</script>