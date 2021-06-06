<template>
    <v-container fixed>
    <v-card v-if="!visible" class="calculator justify-center">
        <v-form>
            <v-input>
                <v-list-item>
                    <v-list-item-content fluid>
                        <v-list-item-title class="headline text-center">
                            Calculator Savings Tool
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-bold text-center my-6">Estimate your savings</v-list-item-subtitle>
                        <v-row>
                            
                            <v-list-item>Saving goal:</v-list-item>
                            <v-select
                            :items="goals"
                            dense
                            solo
                            label="Select One"
                            ></v-select>

                            <v-list-item>Contribution Amount:</v-list-item>
                            <v-text-field
                                value="0"
                                prepend-inner="$"
                                hint="Max $500"
                                v-model="contributionAmount"
                                type="number" 
                                min="1" 
                                max="500"
                            ></v-text-field>
                        </v-row>
                        <v-list-item>Contribution Frequency:</v-list-item>
                        <v-radio-group justify="space-between" v-model="picked">
                            <v-row two-line class="mx-auto radio-selection">
                                <v-col>
                                <v-radio label="Daily" id="daily" v-bind:value="365">
                                    <!-- <template v-slot:value></template> -->
                                </v-radio>
                                <v-radio label="Weekly" id="weekly" v-bind:value="52">
                                    <!-- <template v-slot:value></template> -->
                                </v-radio>

                                </v-col>
                                <v-col>
                                <v-radio label="Bi-Weekly" id="biweekly" v-bind:value="104">
                                    <!-- <template v-slot:value></template> -->
                                </v-radio>
                                <v-radio label="Monthly" id="monthly" v-bind:value="12">
                                    <!-- <template v-slot:value></template> -->
                                </v-radio>

                                </v-col>
                            </v-row>
                        </v-radio-group>
                        
                        <v-list-item>Years of contribution</v-list-item>
                        <v-row>
                            <v-text-field v-model="contributionYears" type="number" min="1" max="10"></v-text-field>                        
                            <v-list-item-subtitle class="px-4">Max: 10 years</v-list-item-subtitle>
                            <v-btn @click="toggleView">Calculate</v-btn>
                        </v-row>
                    </v-list-item-content>
                </v-list-item>
            </v-input>
        </v-form>
    </v-card>

<!-- Card --- mock component for results -->
    <v-card v-if="visible" class="results justify-center">
        <v-list-item>
            <v-list-item-content fluid>
                <v-list-item-title class="headline text-center">
                    Results
                </v-list-item-title>
                
                <v-row justify="space-around">
                    <v-avatar ma-auto>
                        <img src="../assets/retirement.jpg" alt="couple hiking through retirement">
                    </v-avatar>
                    <v-list-item-subtitle><a href="#">EDIT</a></v-list-item-subtitle>
                    <v-list-item>Goal: {{  }} </v-list-item>
                    <!-- Commenting out the breakdown section 
                        
                        <v-list-item>
                        Breakdown 
                        <v-icon @click="toggleResults" v-if="!expanded">mdi-chevron-down</v-icon>
                        <v-else><v-icon @click="toggleResults">mdi-chevron-up</v-icon></v-else>
                    </v-list-item>
                    <v-list-item-group v-if="expanded">
                        <v-list-item>Contribution Amount: <span class="text-decoration-underline">{{ getContributionAmount }}</span></v-list-item>
                        <v-list-item>Contribution Frequency: <span class="text-decoration-underline">{{ getContributionFrequency }}</span></v-list-item>
                        <v-list-item>Years of Contribution: <span class="text-decoration-underline">{{ getContributionYears }}</span></v-list-item>
                    </v-list-item-group> -->

                </v-row>
                
                <v-list-item>
                    <h2>${{ result }}</h2>
                </v-list-item>

                <v-list-item>Estimate Savings</v-list-item>

                <v-list-item>Financial education resources to help you jump start your savings</v-list-item>

                <v-btn @click="loadResources">LEARN MORE</v-btn>

            </v-list-item-content>
        </v-list-item>
    </v-card>

<!-- Card --- mock component for learning resources/links -->
    <v-card v-if="visible">
        <!-- add links here -->
    </v-card>

    </v-container>
</template>

<script>

export default {
    data: () => ({
        goals: ['Retirement', 
            'Investment', 
            'Buy a Home', 
            'Buy a Car', 
            'Emergency Savings', 
            'Big Purchase'],
        visible: false,
        contributionAmount: '',
        contributionYears: '',
        picked: '',
        result: 0
    }),
    computed: {
        
    },
    methods: {
        calculateResults() {
            const calcResult = this.contributionAmount * this.contributionYears * this.picked
            this.result = calcResult
        },
        toggleView() {
            this.visible = !this.visible
        },
        loadResources() {

        }
    }
}
</script>

<style scoped>
.calculator {
    max-width: 500px;
    margin: 0 auto;
    background-color: #C4C4C4;
}

.radio-selection {
    margin: 0 auto;
    padding: auto;
    justify-content: space-between;
}

#calculateBtn {
    margin: 0 auto;
    max-width: 45%;
}

</style>
