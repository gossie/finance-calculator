<template>
    <form @submit.prevent="calculate">
        <div class="tile is-ancestor  is-vertical">
            <div class="tile is-parent">
                <div class="tile is-parent">
                    <finance-field
                        fieldid="initialSave"
                        label="Initial fortune (Save)"
                        @value-changed="onValueChange"
                    >
                    </finance-field>
                </div>
                <div class="tile is-parent">
                    <finance-field
                        fieldid="initialRisk"
                        label="Initial fortune (Risk)"
                        @value-changed="onValueChange"
                    >
                    </finance-field>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-parent">
                    <finance-field-with-interests
                        fieldid="saveSavement"
                        label="Yearly savement (save)"
                        :defaultinterests="0.2"
                        @value-changed="onValueChange"
                        @interests-changed="onInterestsChange"
                    >
                    </finance-field-with-interests>
                </div>
                <div class="tile is-parent">
                    <finance-field-with-interests
                        fieldid="riskSavement"
                        label="Yearly savement (Risk)"
                        :defaultinterests="5"
                        @value-changed="onValueChange"
                        @interests-changed="onInterestsChange"
                    >
                    </finance-field-with-interests>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-parent">
                    <finance-field
                        fieldid="years"
                        label="Years"
                        @value-changed="onValueChange"
                    >
                    </finance-field>
                </div>
                <div class="tile is-parent" />
            </div>
            <div class="tile is-parent">
                <div class="tile is-parent">
                    <finance-field
                        fieldid="yearlyExpenses"
                        label="Yearly expenses"
                        @value-changed="onValueChange"
                    >
                    </finance-field>
                </div>
                <div class="tile is-parent">
                    <finance-field
                        fieldid="yearsToCome"
                        label="Years to come"
                        @value-changed="onValueChange"
                    >
                    </finance-field>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile is-parent">
                    <div class="tile is-child">
                        <div class="field is-grouped">
                            <div class="control">
                                <input
                                    type="submit"
                                    class="button
                                    is-link"
                                    value="Calculate"
                                />
                            </div>
                            <!-- <div class="control">
                                <button @click="clear" class="button is-text">Clear</button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="tile is-parent" v-if="showResult">
                <div class="tile is-parent">
                    <div class="tile is-child box table-container">
                        <savement-table :years="savementYears">
                        </savement-table>
                    </div>
                </div>
            </div>

            <div class="tile is-parent" v-if="showResult && yearsToCome > 0">
                <div class="tile is-parent">
                    <div class="tile is-child box table-container">
                        <p>Per year: {{ perYear }}</p>
                        <p>Per year: {{ perMonth }}</p>
                        <retirement-table :years="retirementYears">
                        </retirement-table>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import FinanceField from "./components/FinanceField.vue";
import FinanceFieldWithInterests from "./components/FinanceFieldWithInterests.vue";
import SavementTable from "./components/SavementTable.vue";
import RetirementTable from "./components/RetirementTable.vue";

export default {
    name: "app",
    components: {
        FinanceField,
        FinanceFieldWithInterests,
        SavementTable,
        RetirementTable
    },
    data: function() {
        return {
            initialSave: 0,
            initialRisk: 0,
            years: 0,
            yearsToCome: 0,
            interestSave: 0,
            interestRisk: 0,
            saveSavement: 0,
            riskSavement: 0,
            yearlyExpenses: 0,
            showResult: false
        };
    },
    computed: {
        savementYears: function() {
            const resultYears = [];

            const factorSave = this.interestSave / 100;
            const factorRisk = this.interestRisk / 100;

            let sumSaveWithInterest = this.initialSave;
            let sumRiskWithInterest = this.initialRisk;

            let sumSave = this.initialSave;
            let sumRisk = this.initialRisk;

            for (let i = 1; i <= this.years; i++) {
                const interestSave = this.saveSavement * factorSave + sumSaveWithInterest * factorSave;
                const interestRisk = this.riskSavement * factorRisk + sumRiskWithInterest * factorRisk;

                const interest = interestSave + interestRisk;

                sumSaveWithInterest += this.saveSavement + interestSave;
                sumRiskWithInterest += this.riskSavement + interestRisk;

                sumSave += this.saveSavement;
                sumRisk += this.riskSavement;

                const result = sumSaveWithInterest + sumRiskWithInterest;

                const currency = { style: "currency", currency: "EUR" };
                const locale = "de-DE";

                resultYears.push({
                    number: i,
                    sumSave,
                    sumRisk,
                    sum: sumSave + sumRisk,
                    interest,
                    sumSaveWithInterest,
                    sumRiskWithInterest,
                    result
                });
            }
            return resultYears;
        },
        perYear: function() {
            const value = this.savementYears[this.savementYears.length-1].result / this.yearsToCome;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(value * 100) / 100);
        },
        perMonth: function() {
            const value = (this.savementYears[this.savementYears.length-1].result / this.yearsToCome) / 12;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(value * 100) / 100);
        },
        retirementYears: function() {
            const retirementYears = [];

            const factorSave = this.interestSave / 100;
            const factorRisk = this.interestRisk / 100;

            let saveFortune = this.savementYears[this.savementYears.length-1].sumSaveWithInterest;
            let riskFortune = this.savementYears[this.savementYears.length-1].sumRiskWithInterest;

            for(let i = 1; i <= this.yearsToCome; i++) {
                saveFortune -= (this.yearlyExpenses / 2);
                riskFortune -= (this.yearlyExpenses / 2);

                const interestSave = saveFortune * factorSave;
                const interestRisk = riskFortune * factorRisk;

                saveFortune += interestSave;
                riskFortune += interestRisk;

                retirementYears.push({
                    number: i,
                    interests: interestSave + interestRisk,
                    fortune: saveFortune + riskFortune + interestSave + interestRisk
                });
            }

            return retirementYears;
        }
    },
    methods: {
        onValueChange: function(event) {
            this[event.fieldId] = event.value;
        },
        onInterestsChange: function(event) {
            if (event.fieldId.startsWith('save')) {
                this.interestSave = event.value;
            } else {
                this.interestRisk = event.value;
            }
        },
        calculate: function() {
            this.showResult = true;
        },
        clear: function() {
            this.showResult = false;
        }
    }
};
</script>
