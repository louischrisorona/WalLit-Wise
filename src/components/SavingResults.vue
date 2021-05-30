<template>
    <v-card class="calculator justify-center">
        <v-form>
            <v-input>
                <v-list-item>
                    <v-list-item-content fluid>
                        <v-list-item-title class="headline text-center">
                            Results
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-bold text-center my-6">Estimate your savings</v-list-item-subtitle>
                        <v-row>
                            <!-- ***********SAVING GOAL NEEDS  PROPER STYLING UNFINISHED********** -->
                            <v-list-item>Edit</v-list-item>
                            <v-select
                            :items="goals"
                            dense
                            solo
                            label="Select One"
                            style="max-width=80%;"
                            ></v-select>

                            <v-list-item>Contribution amount:</v-list-item>
                            <v-text-field
                                :id="contributionAmount"
                                value="0"
                                prepend-inner="$"
                                hint="Max $500"
                            ></v-text-field>
                        </v-row>
                        <v-list-item>Contribution Frequency:</v-list-item>
                        <v-radio-group v-model="radios">
                            <v-row two-line class="mx-auto">
                                <v-radio label="Daily" value="365">
                                    <template v-slot:label></template>
                                </v-radio>
                                <v-radio label="Weekly" value="52">
                                    <template v-slot:label></template>
                                </v-radio>
                                <v-radio label="Bi-Weekly" value="104">
                                    <template v-slot:label></template>
                                </v-radio>
                                <v-radio label="Monthly" value="12">
                                    <template v-slot:label></template>
                                </v-radio>
                            </v-row>
                        </v-radio-group>
                        
                        <!-- Cannot figure out why spacing is messed up here -->
                        <v-list-item>Years of contribution</v-list-item>
                        <!-- need to finish validation rule -->
                        <v-row>
                            <v-text-field :id="contributionYears"></v-text-field>                        
                            <v-list-item-subtitle>Max: 10 years</v-list-item-subtitle>
                            <v-btn v-if="!isVisible" @click="showResults" id="calculateBtn">Calculate</v-btn>
                        </v-row>
                        <!-- button needs resizing -->
                    </v-list-item-content>
                </v-list-item>
            </v-input>
        </v-form>
    </v-card>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>