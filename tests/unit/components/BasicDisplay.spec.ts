import { shallowMount } from '@vue/test-utils';
import BasicDisplay from '@/components/BasicDisplay.vue';

describe('Given BasicDisplay.vue', () => {
  describe('When data is passed as tempData', () => {
    test('Should print that data', async () => {
      const tempData = {
        time: 1644238620,
        weather: {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
        tempAndHumidity: {
          temp: 1,
          feelsLike: 1,
          tempMin: 1,
          tempMax: 1,
          humidity: 1,
        },
        sunrise: 1644238620,
        sunset: 1644238620,
      };

      const wrapper = shallowMount(BasicDisplay, {
        props: { tempData },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.text()).toMatch(
          tempData.tempAndHumidity.temp.toString()
        );
      });
    });
  });
});
