<template>
      <div id="chart">
        <apexchart type="radialBar" height="140"  :options="chartOptions" :series="series"></apexchart>
      </div>
</template>

<script >
export default {
    data: function () {
        return { 
          series: [80.8],
          chartOptions: {
            chart: {
              height: 350,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                background: "#aaa",
                hollow: {
                  size: '70%',
                }
              },
            },
            labels: [''],
          },
          
          }}}
        </script>
        <style>
     .Agencies .apexcharts-series.apexcharts-radial-series path{
        stroke: #62EDF2 !important;
      }
      .apexcharts-series.apexcharts-radial-series path{
        stroke: #62ED88 !important;
      }
      .apexcharts-datalabels-group{
        transform: translate(4px, -27px);
    stroke: #ffffff !important;
    font-weight: 100 !important;
    opacity: .9;
      }
      </style>