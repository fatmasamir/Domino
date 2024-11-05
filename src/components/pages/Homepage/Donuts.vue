<template>
    <div id="chart" class="donuts-chart">
        <h3>الإجمالي <br /> <span>13.7822</span></h3>
        <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            series: [70, 30],
            chartOptions: {

                labels: ['الملك اوليمبوس', 'دومينو'],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                colors: ['#27C1DE', '#35A737'],

                dataLabels: {
                    enabled: false
                },
                options: {
                    chart: {
                        width: 500
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                },

            },


        }
    }
}</script>
<style lang="scss">
.donuts-chart {
    position: relative;

    .vue-apexcharts,
    foreignObject,
    .apexcharts-canvas,
    svg {
        min-height: 100% !important;
        height: 323px !important;
    }

    .apexcharts-legend {
        inset: auto 0px 15px !important;
    }

    h3 {
        position: absolute;
        top: 77px;
        z-index: 999;
        width: 40%;
        left: 31%;
        text-align: center;
        font-size: 22px;

        span {
            margin-top: 10px;
            display: block;
        }

    }
}

@media screen and (max-width: 993px) {

    .donuts-chart .vue-apexcharts,
    .donuts-chart foreignObject,
    .donuts-chart .apexcharts-canvas,
    .donuts-chart svg {
        width: 389px;
        margin: auto;
        text-align: center;
    }

    .donuts-chart h3 {
        position: relative;
        top: inherit;
        z-index: 999;
        width: 100%;
        left: 0px;
    }
}

@media screen and (max-width: 480px) {

    .donuts-chart .vue-apexcharts,
    .donuts-chart foreignObject,
    .donuts-chart .apexcharts-canvas,
    .donuts-chart svg {
        width: 100%;
        margin: auto;height: auto !important;
        text-align: center;
    }
    .donuts-chart {
    .apexcharts-legend {
        inset: auto 0px 1px !important;
    }}

}
</style>