<template>
    <div class="container">
        <form @submit.prevent="calculate">
            <div class="tile is-ancestor  is-vertical">
                <div class="tile is-parent">
                    <div class="tile is-parent">
                        <finance-field
                            fieldid="initialSave"
                            label="Initial fortune (Save)"
                            @value-changed="onValueChange">
                        </finance-field>
                    </div>
                    <div class="tile is-parent">
                        <finance-field
                            fieldid="initialRisk"
                            label="Initial fortune (Risk)"
                            @value-changed="onValueChange">
                        </finance-field>
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-parent">
                        <finance-field-with-interests
                            fieldid="saveSavement"
                            label="Yearly savement (save)"
                            defaultinterests="0.2"
                            @value-changed="onValueChange"
                            @interests-changed="onInterestsChange">
                        </finance-field-with-interests>
                    </div>
                    <div class="tile is-parent">
                        <finance-field-with-interests
                            fieldid="riskSavement"
                            label="Yearly savement (Risk)"
                            defaultinterests="5"
                            @value-changed="onValueChange"
                            @interests-changed="onInterestsChange">
                        </finance-field-with-interests>
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-parent">
                        <finance-field
                            fieldid="years"
                            label="Years"
                            @value-changed="onValueChange">
                        </finance-field>
                    </div>
                    <div class="tile is-parent">
                        <finance-field
                            fieldid="yearsToCome"
                            label="Years to come"
                            @value-changed="onValueChange">
                        </finance-field>
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-parent">
                        <div class="tile is-child">
                            <div class="field is-grouped">
                                <div class="control">
                                    <input type="submit" class="button is-link" value="Calculate" />
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
                            <table class="table is-striped">
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Save part of the fortune without interests</th>
                                        <th>Risky part of the fortune without interests</th>
                                        <th>Total fortune without interests</th>
                                        <th>Interests</th>
                                        <th>save part of the fortune with interests</th>
                                        <th>Risky part of the fortune with interests</th>
                                        <th>Total fortune</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="resultYear in resultYears">
                                        <td>{{ resultYear.number }}</td>
                                        <td>{{ resultYear.sumSave }}</td>
                                        <td>{{ resultYear.sumRisk }}</td>
                                        <td>{{ resultYear.sum }}</td>
                                        <td>{{ resultYear.interest }}</td>
                                        <td>{{ resultYear.sumSaveWithInterest }}</td>
                                        <td>{{ resultYear.sumRiskWithInterest }}</td>
                                        <td>{{ resultYear.result }}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><b>{{ totalInterests }}</b></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="tile is-parent" v-if="showResult && yearsToCome > 0">
                    <div class="tile is-parent">
                        <div class="tile is-child box table-container">
                            <p>Per year: {{ perYear }}</p>
                            <p>Per month: {{ perMonth }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import FinanceField from "./components/FinanceField.vue";
import FinanceFieldWithInterests from "./components/FinanceFieldWithInterests.vue";

export default {
    name: "app",
    components: {
        FinanceField,
        FinanceFieldWithInterests
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
            showResult: false
        };
    },
    computed: {
        resultYears: function() {
            const resultYears = [];

            const factorSave = this.interestSave / 100;
            const factorRisk = this.interestRisk / 100;

            let sumSaveWithInterest = this.initialSave;
            let sumRiskWithInterest = this.initialRisk;

            let sumSave = this.initialSave;
            let sumRisk = this.initialRisk;

            for (let i=1; i<=this.years; i++) {
                const interestSave = this.saveSavement * factorSave + sumSaveWithInterest * factorSave;
                const interestRisk = this.riskSavement * factorRisk + sumRiskWithInterest * factorRisk;

                const interest = interestSave + interestRisk;

                sumSaveWithInterest += this.saveSavement + interestSave;
                sumRiskWithInterest += this.riskSavement + interestRisk;

                sumSave += this.saveSavement;
                sumRisk += this.riskSavement;

                const result = sumSaveWithInterest + sumRiskWithInterest;

                resultYears.push({
                    number: i,
                    sumSave: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(sumSave * 100) / 100),
                    sumRisk: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(sumRisk * 100) / 100),
                    sum: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt((sumSave + sumRisk) * 100) / 100),
                    interestRaw: interest,
                    interest: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(interest * 100) / 100),
                    sumSaveWithInterest: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(sumSaveWithInterest * 100) / 100),
                    sumRiskWithInterest: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(sumRiskWithInterest * 100) / 100),
                    resultRaw: result,
                    result: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(result * 100) / 100)
                });
            }
            return resultYears;
        },
        totalInterests: function() {
            const sum = this.resultYears
                .map(year => year.interestRaw)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(sum * 100) / 100);
        },
        perYear: function() {
            const value = this.resultYears[this.resultYears.length-1].resultRaw / this.yearsToCome;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(value * 100) / 100);
        },
        perMonth: function() {
            const value = (this.resultYears[this.resultYears.length-1].resultRaw / this.yearsToCome) / 12;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(value * 100) / 100);
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
