<template>
    <table class="table is-striped">
        <thead>
            <tr>
                <th>Year</th>
                <th>Interests</th>
                <th>Fortune</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="resultYear in years">
                <td>{{ resultYear.number }}</td>
                <td>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(resultYear.interests * 100) / 100) }}</td>
                <td>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(parseInt(resultYear.fortune * 100) / 100) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "retirement-table",
    props: {
        years: Array
    }
};
</script>
