<template>
    <v-container fixed>
    <v-card v-if="!visible" class="calculator justify-center" style="background-color: #EFEFEF;">
        <v-form>
            <v-input>
                <v-list-item>
                    <v-list-item-content fluid>
                        <v-list-item-title class="headline text-center pt-4">
                            Calculator Savings Tool
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-bold text-center my-6">Estimate your savings</v-list-item-subtitle>
                        <v-row>
                            
                            <v-list-item>Saving goal:</v-list-item>
                            <v-select
                            :items="goals"
                            :value="goals.value"
                            v-model="selectedGoal"
                            solo
                            label="Select One"
                            class="px-4"
                            ></v-select>


                            <v-list-item>Contribution Amount:</v-list-item>
                            <v-text-field
                                value="$0"
                                prepend-inner-icon="mdi-currency-usd" color="#1A2C5B"
                                v-model="contributionAmount"
                                type="text" 
                                class="px-4"
                                hint="Max $500"
                                solo
                            ></v-text-field>
                        </v-row>
                        <v-list-item>Contribution Frequency:</v-list-item>
                        
                        <v-radio-group class="radio-container" v-model='picked'>
                            <v-row class="radio-selection">
                                <v-col>
                                    <v-radio color="#1A2C5B" label="Daily" id="daily" value='365'></v-radio>
                                    <v-radio color="#1A2C5B" label="Weekly" id="weekly" value='52'></v-radio>
                                
                                    <v-radio color="#1A2C5B" label="Bi-Weekly" id="biweekly" value='104'></v-radio>
                                    <v-radio color="#1A2C5B" label="Monthly" id="monthly" value='12'></v-radio>
                                </v-col>
                            </v-row>
                        </v-radio-group>
                        
                        <v-list-item>Years of contribution:</v-list-item>
                        <v-row>
                            <v-text-field 
                                v-model="contributionYears"
                                type="text"
                                hint="Max 10 years"
                                class="px-4"
                                solo
                                ></v-text-field>                        
                        </v-row>
                        <v-btn
                             large
                             class="mx-auto secondary--text"
                             color="primary"
                             max-width="227px"
                             @click="toggleView"
                        >
                        Calculate
                        </v-btn>
                    </v-list-item-content>
                </v-list-item>
            </v-input>
        </v-form>
    </v-card>






<!-- Card --- mock component for results -->




    <v-card v-if="isVisible" class="results justify-center" style="background-color: #EFEFEF;">
        <v-list-item>
            <v-list-item-content fluid>
                <h1 class=" text-center mb-2 mt-6">
                    Results
                </h1>
                
                <v-row justify="space-around" class="ma-2 my-4">
                    <v-avatar ma-auto size=125>
                        <img src="../assets/retirement.jpg" alt="couple hiking through retirement">
                    </v-avatar>
                </v-row>
                    <h2 class="headline my-2"><strong>Goal: {{ selectedGoal }} </strong></h2>
                    <v-list-item-subtitle class="my-2 py-2"><a class="secondary--text text-decoration-underline" @click=toggleView>EDIT: CONTRIBUTION GOAL</a></v-list-item-subtitle>
                
                
                        
                    <h2 style="font-size: 24px;" class="ma-2">
                        Breakdown
                    </h2>
                    <!-- ************************************************************************************** -->
                    <!-- FIGURE OUT THE SPACING OF THE ELEMENTS TO RIGHT ALIGN P TAG -->
                    <!-- TRY USING ROW WITH 'D-FLEX & JUSTIFY HELPERS' -->


                    <v-list-item-group style="width: 100%;" class="my-2 mx-7">                        
                        <v-list-item class="d-flex justify-space-between py-0 my-0" style="min-height: 16px; font-size: 0.875rem;">Contribution Amount: <p style="width: 109px; border-bottom: 1px solid black; font-size: 16px; min-height: 16px;" class="my-4 ml-12">{{ contributionAmount }}</p></v-list-item>
                        <v-list-item class="d-flex justify-space-between py-0 my-0" style="min-height: 16px; font-size: 0.875rem;">Contribution Frequency: <p style="width: 109px; border-bottom: 1px solid black; font-size: 16px; min-height: 16px;" class="my-4 ml-12">x {{ frequency }}</p></v-list-item>
                        <v-list-item class="d-flex justify-space-between py-0 my-0" style="min-height: 16px; font-size: 0.875rem;">Years of Contribution: <p style="width: 109px; border-bottom: 1px solid black; font-size: 16px; min-height: 16px;" class="my-4 ml-12">x {{ contributionYears }}</p></v-list-item>
                    </v-list-item-group>

                
                    <h2 style="font-weight: 700; font-size: 32px;" >${{ Number(this.result).toLocaleString() }}</h2>

                <v-list-item class="d-flex justify-center" style="font-size: 24px;">Estimate Savings</v-list-item>

                <v-list-item class="d-flex text-justify mx-auto mt-10" style="max-width: 285px; font-size: 16px; font-weight: 600; line-height: 21px;">Financial education resources to help you jump start your savings</v-list-item>

                <v-btn
                    large
                    class="mx-auto secondary--text my-10"
                    color="primary"
                    max-width="227px"
                    @click="loadResources"
                >
                        LEARN MORE
                        </v-btn>

            </v-list-item-content>
        </v-list-item>
    </v-card>

<!-- Card --- mock component for learning resources/links -->
    <v-card v-if="learnMore" style="background-color: #EFEFEF;">
        <v-list-item-content>


            <h2 class="text-center mb-2 mt-6">
                    Financial Resources
            </h2>
            <v-list-item></v-list-item>
            <v-row class="mx-auto pa-auto">
                <v-list-item>
                    <a class="secondary--text text-decoration-underline" href="https://www.irs.gov/retirement-plans/individual-retirement-arrangements-iras">Individual Retirement Account</a>
                </v-list-item>
                <v-list-item>
                    <a class="secondary--text text-decoration-underline" href="https://www.investopedia.com/terms/1/401kplan.asp">401K Plan</a>
                </v-list-item>
                <v-list-item>
                    <a class="secondary--text text-decoration-underline" href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account.html">Tax-Free Savings Account</a>
                </v-list-item>
                <v-list-item>
                    <a class="secondary--text text-decoration-underline" href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/registered-retirement-savings-plan-rrsp.html">Registered Retirement Savings Plan</a>
                </v-list-item>
            </v-row>
        </v-list-item-content>
    </v-card>
    <About />
    </v-container>
</template>

<script>
import About from './About'

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
        isVisible: false,
        learnMore: false,
        about: false,
        contributionAmount: '',
        contributionYears: '',
        picked: '',
        selectedGoal: '',
        result: 0
    }),
    components: {
        About,
    },
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
            this.isVisible = !this.isVisible
            this.calculateResults()
        },
        loadResources() {
            this.isVisible = !this.isVisible
            this.learnMore = !this.learnMore
        },
        toggleAbout() {
            //need to toggle our info
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

.radio-container {
    width: 285px;
    justify-content: space-between;
}

.radio-selection {
    margin: 0 auto;
    padding-right: 67px;
}

.v-btn__content {
    color: #1A2C5B;
}


#calculateBtn {
    margin: 0 auto;
    max-width: 45%;
}

</style>
