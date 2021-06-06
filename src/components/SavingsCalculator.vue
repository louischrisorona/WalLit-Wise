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
                            :value="goals.value"
                            v-model="selectedGoal"
                            dense
                            solo
                            label="Select One"
                            class="px-4"
                            ></v-select>

                            <v-list-item>Contribution Amount:</v-list-item>
                            <v-text-field
                                value="0"
                                prepend-inner="$"
                                v-model="contributionAmount"
                                type="number" 
                                min="1" 
                                max="500"
                                class="px-4"
                            ></v-text-field>
                            
                            Max $500
                        </v-row>
                        <v-list-item>Contribution Frequency:</v-list-item>
                        <v-radio-group class="" v-model='picked'>
                            <v-row two-line class="mx-auto radio-selection">
                                <v-col>
                                    <v-radio label="Daily" id="daily" value='365'></v-radio>
                                    <!-- v-bind:value="365" -->
                                    <v-radio label="Weekly" id="weekly" value='52'></v-radio>
                                </v-col>
                                
                                <v-col>
                                    <v-radio label="Bi-Weekly" id="biweekly" value='104'></v-radio>
                                    <v-radio label="Monthly" id="monthly" value='12'></v-radio>
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
                
                <v-row justify="space-around" class="ma-2">
                    <v-avatar ma-auto size=125>
                        <img src="../assets/retirement.jpg" alt="couple hiking through retirement">
                    </v-avatar>
                    <v-list-item-subtitle class="mt-3"><a href="#">EDIT</a></v-list-item-subtitle>
                </v-row>
                <v-row class="mx-auto" justify="center">
                    <h2 class="headline"><strong>Goal: {{ selectedGoal }} </strong></h2>
                        
                    <h4 class="ma-2 pa-2">
                        Breakdown
                    </h4>
                    
                    <v-list-item-group class="">
                        <v-list-item>Contribution Amount: <span class="text-decoration-underline">{{ contributionAmount }}</span></v-list-item>
                        <v-list-item>Contribution Frequency: <span class="text-decoration-underline">x {{ picked }} ({{ frequency }})</span></v-list-item>
                        <v-list-item>Years of Contribution: <span class="text-decoration-underline">x {{ contributionYears }}</span></v-list-item>
                    </v-list-item-group>

                </v-row>
                
                <v-list-item>
                    <h2 class="headline">${{ this.result }}</h2>
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
        goals: [
            {text: 'Retirement', value: 'Retirement'}, 
            {text: 'Investment', value: 'Investment'}, 
            {text: 'Buy a Home', value: 'Investment'}, 
            {text: 'Buy a Car', value: 'Buy a Car'}, 
            {text: 'Emergency Savings', value: 'Emergency Savings'}, 
            {text: 'Big Purchase', value: 'Big Purchase'}
            ],
        visible: false,
        contributionAmount: '',
        contributionYears: '',
        picked: '',
        selectedGoal: '',
        result: 0
    }),
    computed: {
        frequency() {
            if(this.picked == 12) return 'Monthly'
            if(this.picked == 52) return 'Weekly'
            if(this.picked == 104) return 'Bi-Weekly'
            if(this.picked == 365) return 'Daily'
            else return ''
        }
    },
    methods: {
        calculateResults() {
            const calcResult = this.contributionAmount * this.contributionYears * this.picked
            this.result = calcResult
        },
        toggleView() {
            this.visible = !this.visible
            this.calculateResults()
        },
        loadResources() {

        },
        
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
