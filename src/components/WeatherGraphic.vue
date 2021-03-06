<template>
  <apexchart
    width="100%"
    type="line"
    ref="weatherChart"
    :options="options"
    :series="series"
    @markerClick="(a, b, c) => click(a, b, c, this)"
  ></apexchart>
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
      this.series = [
        {
          name: 'temperature',
          data: this.chartData.nextTemps,
        },
      ];
    },
  },
  data() {
    return {
      options: {
        theme: {
          mode: 'dark',
        },
        chart: {
          id: 'vuechart-example',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
          background: {
            show: false,
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
          width: 2,
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
        colors: ['#FFF'],
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
    click: (
      event: any,
      chartContext: any,
      { dataPointIndex }: { dataPointIndex: number },
      that: any
    ) => {
      that.$emit('emitTimeMarker', dataPointIndex);
    },
  },
});
</script>
