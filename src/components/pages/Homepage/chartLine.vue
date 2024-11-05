<template>
    <div id="chart">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            series: [{
                name: "كوينت ",
                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
            },
            {
                name: "الماس ",
                data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
            },
            {
                name: 'قسائم الشراء ',
                data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
            }
            ],
            chartOptions: {
                colors: ['#F8CE05', '#0078EF','#35A737'],
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    fontSize: '14px',
                },
                // stroke: {
                //     width: [5, 7, 5],
                //     curve: 'straight',
                //     dashArray: [0, 8, 5]
                // },
                // title: {
                //     text: 'Page Statistics',
                //     align: 'left'
                // },
                // legend: {
                //     tooltipHoverFormatter: function (val, opts) {
                //         return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
                //     }
                // },
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر',
                        'أكتوبر', 'نوفمبر', 'ديسمبر'
                    ],
                },
                yaxis: {
                    logBase: 10,
                },

                tooltip: {
                    y: [
                        {
                            title: {
                                formatter: function (val) {
                                    return val + " (mins)"
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val) {
                                    return val + " per session"
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val) {
                                    return val;
                                }
                            }
                        }
                    ]
                },
                grid: {
                    borderColor: '#f1f1f1',
                }
            },
        }
    }
}
</script>
<style lang="scss">
#SvgjsText1451 {
    display: none;
}
#chart{
    direction: rtl !important;
}
.apexcharts-menu-icon {
    display: none;
}
.apexcharts-legend{
    margin: 0px;
    padding:0px !important;

}.apexcharts-legend-text{
    padding-right: 5px;
    margin-left: 0px;
}
</style>