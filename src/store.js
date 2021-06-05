import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.store({
    state: {
        isVisible: false,
        contributionYears: 0,
        contributionAmount: 0,
        selectedGoal: '',
        picked: 0,
        result: 0,
        goals: [
            {text: 'Retirement', selected: false},
            {text: 'Investment', selected: false},
            {text: 'Buy a Home', selected: false},
            {text: 'Buy a Car', selected: false},
            {text: 'Emergency Savings', selected: false},
            {text: 'Big Purchase', selected: false}
        ]
    },
    
    mutations: {
        setResult (state, { payload }) {
            state.result = { payload }
        }
    },

    actions: {
        calculateResult (state) {
            // this.state.contributionYears * this.state.contributionAmount * this.picked
            const result = state.contributionYears * state.contributionAmount * state.picked
            store.commit('setResult', result)
        }
    },

    getters: {
        getGoals: () => this.state.goals,
        getContributionAmount: () => this.state.contributionAmount,
        getContributionYears: () => this.state.contributionYears,
        getContributionFrequency: () => this.state.picked,
        getResult: () => this.state.result
    },

    methods: {
        
    }
})

