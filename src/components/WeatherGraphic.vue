<template>
  <div>
    <apexchart
      width="100%"
      type="line"
      ref="weatherChart"
      :options="options"
      :series="series"
      @markerClick="click"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WheatherGraphic',
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  watch: {
    chartData() {
      const chart: any = this.$refs.weatherChart;
      chart.updateSeries([
        {
          name: 'temperature',
          data: this.chartData.nextTemps,
        },
      ]);
    },
  },
  data() {
    return {
      options: {
        theme: {
          mode: 'light',
        },
        chart: {
          id: 'vuechart-example',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        noData: {
          text: 'Loading weather info...',
        },
        xaxis: {
          categories: this.chartData.nextHours,
          tickAmount: 10,
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          show: false,
          labels: {
            formatter: (e: number) => `${e} ºC`,
          },
        },
        stroke: {
          curve: 'smooth',
        },
        marks: {
          size: 0,
        },
        tooltip: {
          enabled: true,
          followCursor: true,
          x: {
            show: true,
          },
          y: {
            title: {
              formatter: () => '',
            },
          },
          marker: {
            show: false,
          },
        },
        colors: ['#42b983'],
        grid: {
          show: false,
        },
      },
      series: [
        {
          name: 'temperature',
          data: this.chartData.nextTemps,
        },
      ],
    };
  },
  methods: {
    // Commented for deploy
    /* click: (event, chartContext, { seriesIndex, dataPointIndex, config }) => {
      console.log({ seriesIndex, dataPointIndex, config });
    }, */
  },
});
</script>
