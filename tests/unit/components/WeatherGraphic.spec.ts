import { shallowMount } from '@vue/test-utils';
import VueApexCharts from 'vue3-apexcharts';

import WeatherGraphic from '@/components/WeatherGraphic.vue';

const chartData = {
  nextHours: [
    '13h ',
    '14h ',
    '15h ',
    '16h ',
    '17h ',
    '18h ',
    '19h ',
    '20h ',
    '21h ',
    '22h ',
    '23h ',
    '24h ',
    '1h +1',
    '2h +1',
    '3h +1',
    '4h +1',
    '5h +1',
    '6h +1',
    '7h +1',
    '8h +1',
    '9h +1',
    '10h +1',
    '11h +1',
    '12h +1',
    '13h +1',
    '14h +1',
    '15h +1',
    '16h +1',
    '17h +1',
    '18h +1',
    '19h +1',
    '20h +1',
    '21h +1',
    '22h +1',
    '23h +1',
    '24h +1',
    '1h +2',
    '2h +2',
    '3h +2',
    '4h +2',
    '5h +2',
    '6h +2',
    '7h +2',
    '8h +2',
    '9h +2',
    '10h +2',
    '11h +2',
    '12h +2',
  ],
  nextTemps: [
    14.46, 14.46, 14.65, 14.81, 13.88, 11.88, 11.18, 10.49, 9.74, 8.93, 8.15,
    7.72, 7.35, 6.84, 6.34, 5.94, 5.61, 5.45, 5.26, 5.65, 7.31, 9.19, 11.04,
    12.68, 13.98, 14.98, 15.57, 15.7, 14.48, 12.55, 11.74, 11.11, 10.59, 10.03,
    9.51, 8.98, 8.51, 8.09, 7.71, 7.32, 6.96, 6.6, 6.27, 6.58, 8.12, 9.58,
    10.94, 12.17,
  ],
};

describe('Given WeatherGraphic.vue', () => {
  describe('When given prediction data', () => {
    test('It paint that info in the screen', async () => {
      const wrapper = shallowMount(WeatherGraphic, {
        props: {
          chartData,
        },
        components: {
          apexchart: VueApexCharts,
        },
      });

      expect(wrapper.text()).toMatch('');
    });
  });
  describe('When prediction data changes', () => {
    test('It re-paint that info in the screen', async () => {
      const wrapper = shallowMount(WeatherGraphic, {
        props: {
          chartData,
        },
        components: {
          apexchart: VueApexCharts,
        },
      });

      const newData = { nextHours: [], nextTemps: [] };

      wrapper.setProps({ chartData: newData });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.text()).toMatch('');
      });
    });
  });
  describe('When clicking', () => {
    test('It emits', async () => {
      const wrapper = shallowMount(WeatherGraphic, {
        props: {
          chartData,
        },
        components: {
          apexchart: VueApexCharts,
        },
      });

      wrapper.vm.click(undefined, undefined, { dataPointIndex: 1 }, wrapper.vm);
      expect(wrapper.emitted('emitTimeMarker')).toBeTruthy();
    });
  });
  describe('When render', () => {
    test('Formatter methods work as expected', async () => {
      const wrapper = shallowMount(WeatherGraphic, {
        props: {
          chartData,
        },
        components: {
          apexchart: VueApexCharts,
        },
      });

      expect(wrapper.vm.options.yaxis.labels.formatter(1)).toBe('1 ºC');
      expect(
        wrapper.vm.options.tooltip.y.title.formatter('Some title to be erased')
      ).toBe('');
    });
  });
});
