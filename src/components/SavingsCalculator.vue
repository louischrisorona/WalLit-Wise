<template>
    <v-card class="calculator justify-center">
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
                            v-model="goals"
                            dense
                            solo
                            label="Select One"
                            ></v-select>

                            <v-list-item>Contribution amount:</v-list-item>
                            <v-text-field
                                :id="contributionAmount"
                                value="0"
                                prepend-inner="$"
                                hint="Max $500"
                                v-model="contributionAmount"
                                type="number"
                            ></v-text-field>
                        </v-row>
                        <v-list-item>Contribution Frequency:</v-list-item>
                        <v-radio-group v-model="picked">
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
                            <v-text-field :id="contributionYears" v-model="contributionYears" type="number"></v-text-field>                        
                            <v-list-item-subtitle>Max: 10 years</v-list-item-subtitle>
                            <v-btn>Calculate</v-btn>
                        </v-row>
                    </v-list-item-content>
                </v-list-item>
            </v-input>
        </v-form>
    </v-card>
</template>

<script>

export default {
    data: () => ({
        goals: [{text: 'Retirement', selected: false},
            {text: 'Investment', selected: false},
            {text: 'Buy a Home', selected: false},
            {text: 'Buy a Car', selected: false},
            {text: 'Emergency Savings', selected: false},
            {text: 'Big Purchase', selected: false}]
    }),
    computed: {
           
    }
    ,
    methods: {
        
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
