<template>
    <v-card class="calculator justify-center">
        <v-list-item>
            <v-list-item-content fluid>
                <v-list-item-title class="headline text-center">
                    Results
                </v-list-item-title>
                
                <v-row justify="space-around">
                    <v-avatar>
                        <img src="../assets/retirement.jpg" alt="couple hiking through retirement">
                    </v-avatar>
                    <v-list-item-subtitle><a href="#">EDIT</a></v-list-item-subtitle>
                    <v-list-item>Goal: {{ selectedGoal }} </v-list-item>
                    <v-list-item>
                        Breakdown 
                        <v-icon @click="toggleResults" v-if="!expanded">mdi-chevron-down</v-icon>
                        <v-else><v-icon @click="toggleResults">mdi-chevron-up</v-icon></v-else>
                    </v-list-item>
                    <v-list-item-group v-if="expanded">
                        <v-list-item>Contribution Amount: <span class="text-decoration-underline">{{ getContributionAmount }}</span></v-list-item>
                        <v-list-item>Contribution Frequency: <span class="text-decoration-underline">{{ getContributionFrequency }}</span></v-list-item>
                        <v-list-item>Years of Contribution: <span class="text-decoration-underline">{{ getContributionYears }}</span></v-list-item>
                    </v-list-item-group>
                </v-row>
                
                <v-list-item>
                    <h2>${{ getResult }}</h2>
                </v-list-item>

                <v-list-item>Estimate Savings</v-list-item>

                <v-list-item>Financial education resources to help you jump start your savings</v-list-item>

                <v-btn @click="loadResources">LEARN MORE</v-btn>

            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        expanded: false
    }),
    computed: {
        selectedGoal () {
            return this.$store.getGoal
        },
        getContributionAmount () {
            return this.$store.getContributionAmount
        },

    },

    methods: {
        toggleResults () {
            this.expanded = !this.expanded
        },
        loadResources () {
            this.$store.actions.loadResources
        }
    }
}
</script>

<style scoped>

</style>