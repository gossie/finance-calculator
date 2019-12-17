<template>
    <table class="table is-striped">
        <thead>
            <tr>
                <th>Year</th>
                <th>Save part of the fortune without interests</th>
                <th>Risky part of the fortune without interests</th>
                <th>Total fortune without interests</th>
                <th>Interests</th>
                <th>Save part of the fortune with interests</th>
                <th>Risky part of the fortune with interests</th>
                <th>Total fortune</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="resultYear in years" :key="resultYear.number">
                <td>{{ resultYear.number }}</td>
                <td>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(resultYear.sumSave * 100) / 100) }}</td>
                <td>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(resultYear.sumRisk * 100) / 100) }}</td>
                <td>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(resultYear.sum * 100) / 100) }}</td>
                <td>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(resultYear.interest * 100) / 100) }}</td>
                <td>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(resultYear.sumSaveWithInterest * 100) / 100) }}</td>
                <td>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(resultYear.sumRiskWithInterest * 100) / 100) }}</td>
                <td>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(resultYear.result * 100) / 100) }}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><b>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(totalInterests * 100) / 100) }}</b></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
</template>

<script>
export default {
    name: "savement-table",
    props: {
        years: Array
    },
    computed: {
        totalInterests: function() {
            return this.years
                .map(year => year.interest)
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        }
    }
};
</script>
