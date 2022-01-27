<template>
  <div>
    <apexchart
      width="1000"
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
      this.$refs.weatherChart.updateSeries([
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
          text: 'Loading...',
        },
        xaxis: {
          categories: this.chartData.nextHours,
        },
        stroke: {
          curve: 'smooth',
        },
        marks: {
          size: 0,
        },
        tooltip: {
          enabled: true,
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
    click: (event, chartContext, { seriesIndex, dataPointIndex, config }) => {
      console.log({ seriesIndex, dataPointIndex, config });
    },
  },
});
</script>
