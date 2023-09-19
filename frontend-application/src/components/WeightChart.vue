<template>
    <canvas id="weight-chart"  width="560" height="150"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

export default{
    name: "WeightChart", 
    props: {
        weightHistory: {
            type: Array, 
            required: true 
        }
    }, 
    data(){
        return{

        }
    }, 
    mounted(){
        new Chart(
            document.querySelector('#weight-chart'),
            {
                type: 'line',
                options: {
                    animation: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    }
            },
            data: {
                labels: this.weightHistory.map(row => row.date),
                datasets: [
                    {
                        label: 'Weight',
                        data: this.weightHistory.map(row => row.weight)
                    }
                ]
            }
            }
        );


    }
}
</script>

<style scoped></style>