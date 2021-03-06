import { shallowMount } from '@vue/test-utils';
import HomeDisplay from '@/components/HomeDisplay.vue';

jest.mock('@/services/weatherAPIService.ts', () => {
  return () => {
    const finalResponse = {
      country: 'ES',
      currentSunrise: 1644218517,
      currentSunset: 1644256450,
      currentTempAndHumidity: {
        feelsLike: 11.15,
        humidity: 77,
        temp: 11.89,
        tempMax: 12.73,
        tempMin: 11.6,
      },
      currentWeather: {
        description: 'clear sky',
        icon: '01d',
        id: 800,
        main: 'Clear',
      },
      location: 'Seville',
      nextHoursPrediction: [
        {
          dt: 1644224400,
          feelsLike: 10.94,
          humidity: 73,
          temp: 11.8,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644228000,
          feelsLike: 11.2,
          humidity: 77,
          temp: 11.94,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644231600,
          feelsLike: 12.01,
          humidity: 70,
          temp: 12.84,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644235200,
          feelsLike: 13.55,
          humidity: 63,
          temp: 14.41,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644238800,
          feelsLike: 15.45,
          humidity: 53,
          temp: 16.37,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644242400,
          feelsLike: 17.51,
          humidity: 43,
          temp: 18.48,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644246000,
          feelsLike: 19.31,
          humidity: 33,
          temp: 20.36,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644249600,
          feelsLike: 19.03,
          humidity: 34,
          temp: 20.08,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644253200,
          feelsLike: 17.1,
          humidity: 40,
          temp: 18.18,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644256800,
          feelsLike: 13.61,
          humidity: 42,
          temp: 14.96,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644260400,
          feelsLike: 12.24,
          humidity: 40,
          temp: 13.76,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644264000,
          feelsLike: 11.32,
          humidity: 41,
          temp: 12.9,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644267600,
          feelsLike: 10.59,
          humidity: 44,
          temp: 12.17,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644271200,
          feelsLike: 10,
          humidity: 48,
          temp: 11.54,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644274800,
          feelsLike: 9.52,
          humidity: 49,
          temp: 11.08,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644278400,
          feelsLike: 8.96,
          humidity: 48,
          temp: 10.59,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644282000,
          feelsLike: 8.43,
          humidity: 49,
          temp: 10.09,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644285600,
          feelsLike: 8.11,
          humidity: 51,
          temp: 9.62,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644289200,
          feelsLike: 7.57,
          humidity: 54,
          temp: 9.14,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644292800,
          feelsLike: 7.08,
          humidity: 59,
          temp: 8.67,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644296400,
          feelsLike: 6.44,
          humidity: 63,
          temp: 8.21,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644300000,
          feelsLike: 5.85,
          humidity: 65,
          temp: 7.87,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644303600,
          feelsLike: 5.48,
          humidity: 68,
          temp: 7.61,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644307200,
          feelsLike: 6.12,
          humidity: 69,
          temp: 8.1,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644310800,
          feelsLike: 9.8,
          humidity: 61,
          temp: 11.05,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644314400,
          feelsLike: 12.71,
          humidity: 53,
          temp: 13.88,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644318000,
          feelsLike: 15.43,
          humidity: 46,
          temp: 16.52,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644321600,
          feelsLike: 17.8,
          humidity: 38,
          temp: 18.87,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644325200,
          feelsLike: 19.33,
          humidity: 34,
          temp: 20.35,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644328800,
          feelsLike: 20.13,
          humidity: 32,
          temp: 21.13,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644332400,
          feelsLike: 20.41,
          humidity: 32,
          temp: 21.38,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644336000,
          feelsLike: 20.19,
          humidity: 33,
          temp: 21.16,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644339600,
          feelsLike: 18.26,
          humidity: 42,
          temp: 19.19,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644343200,
          feelsLike: 14.37,
          humidity: 48,
          temp: 15.51,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644346800,
          feelsLike: 12.46,
          humidity: 54,
          temp: 13.63,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644350400,
          feelsLike: 11.1,
          humidity: 59,
          temp: 12.28,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644354000,
          feelsLike: 10.12,
          humidity: 62,
          temp: 11.31,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644357600,
          feelsLike: 9.36,
          humidity: 63,
          temp: 10.6,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644361200,
          feelsLike: 8.72,
          humidity: 64,
          temp: 9.91,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644364800,
          feelsLike: 8.01,
          humidity: 66,
          temp: 9.37,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644368400,
          feelsLike: 7.43,
          humidity: 70,
          temp: 8.9,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644372000,
          feelsLike: 6.79,
          humidity: 74,
          temp: 8.51,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644375600,
          feelsLike: 6.2,
          humidity: 79,
          temp: 8.13,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644379200,
          feelsLike: 5.85,
          humidity: 84,
          temp: 7.85,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644382800,
          feelsLike: 5.71,
          humidity: 87,
          temp: 7.69,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644386400,
          feelsLike: 5.58,
          humidity: 88,
          temp: 7.56,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644390000,
          feelsLike: 5.46,
          humidity: 89,
          temp: 7.4,
          weather: {
            description: 'clear sky',
            icon: '01n',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644393600,
          feelsLike: 6.27,
          humidity: 86,
          temp: 8,
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
      ],
      nextWeekPrediction: [
        {
          dt: 1644235200,
          feelsLike: {
            day: 13.55,
            eve: 13.61,
            morn: 6.98,
            night: 10,
          },
          humidity: 63,
          sunrise: 1644218517,
          sunset: 1644256450,
          temp: {
            day: 14.41,
            eve: 14.96,
            max: 20.36,
            min: 8.61,
            morn: 9.06,
            night: 11.54,
          },
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644321600,
          feelsLike: {
            day: 17.8,
            eve: 14.37,
            morn: 5.85,
            night: 9.36,
          },
          humidity: 38,
          sunrise: 1644304858,
          sunset: 1644342917,
          temp: {
            day: 18.87,
            eve: 15.51,
            max: 21.38,
            min: 7.61,
            morn: 7.87,
            night: 10.6,
          },
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644408000,
          feelsLike: {
            day: 16.61,
            eve: 14.62,
            morn: 5.58,
            night: 10.24,
          },
          humidity: 47,
          sunrise: 1644391198,
          sunset: 1644429383,
          temp: {
            day: 17.57,
            eve: 15.69,
            max: 20.55,
            min: 7.4,
            morn: 7.56,
            night: 11.38,
          },
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644494400,
          feelsLike: {
            day: 17.83,
            eve: 14.94,
            morn: 6.19,
            night: 12.49,
          },
          humidity: 41,
          sunrise: 1644477536,
          sunset: 1644515848,
          temp: {
            day: 18.82,
            eve: 15.96,
            max: 21.36,
            min: 7.86,
            morn: 7.86,
            night: 13.61,
          },
          weather: {
            description: 'broken clouds',
            icon: '04d',
            id: 803,
            main: 'Clouds',
          },
        },
        {
          dt: 1644580800,
          feelsLike: {
            day: 16.05,
            eve: 13.55,
            morn: 9.15,
            night: 11.5,
          },
          humidity: 44,
          sunrise: 1644563873,
          sunset: 1644602314,
          temp: {
            day: 17.13,
            eve: 14.6,
            max: 18.24,
            min: 10.41,
            morn: 10.41,
            night: 12.57,
          },
          weather: {
            description: 'overcast clouds',
            icon: '04d',
            id: 804,
            main: 'Clouds',
          },
        },
        {
          dt: 1644667200,
          feelsLike: {
            day: 17.61,
            eve: 13.94,
            morn: 6.61,
            night: 10.46,
          },
          humidity: 48,
          sunrise: 1644650208,
          sunset: 1644688779,
          temp: {
            day: 18.46,
            eve: 15,
            max: 20.07,
            min: 8.51,
            morn: 8.51,
            night: 11.58,
          },
          weather: {
            description: 'broken clouds',
            icon: '04d',
            id: 803,
            main: 'Clouds',
          },
        },
        {
          dt: 1644753600,
          feelsLike: {
            day: 16.5,
            eve: 13.98,
            morn: 5.9,
            night: 11.46,
          },
          humidity: 45,
          sunrise: 1644736542,
          sunset: 1644775244,
          temp: {
            day: 17.52,
            eve: 15.06,
            max: 19.74,
            min: 7.56,
            morn: 7.56,
            night: 12.58,
          },
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
        {
          dt: 1644840000,
          feelsLike: {
            day: 15.87,
            eve: 14.53,
            morn: 8.15,
            night: 12.21,
          },
          humidity: 58,
          sunrise: 1644822875,
          sunset: 1644861709,
          temp: {
            day: 16.64,
            eve: 15.39,
            max: 19.22,
            min: 8.15,
            morn: 8.15,
            night: 12.81,
          },
          weather: {
            description: 'clear sky',
            icon: '01d',
            id: 800,
            main: 'Clear',
          },
        },
      ],
      petitionTimestamp: 1644227192,
      timezone: 3600,
    };
    return Promise.resolve(finalResponse);
  };
});

describe('Given HomeDisplay.vue', () => {
  describe('When some location is passed as prop', () => {
    test('Should fetch data of that location', async () => {
      const locationName = 'Seville (ES)';

      const wrapper = shallowMount(HomeDisplay, {
        props: { locationName },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.text()).toMatch(locationName);
      });
    });
  });
  describe('When empty location is passed as prop', () => {
    test('Screen should show loading', async () => {
      const locationName = '';

      const wrapper = shallowMount(HomeDisplay, {
        props: { locationName },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.text()).toMatch('Loading');
      });
    });
  });
  describe('When locationName changes', () => {
    test('this.weatherData should change', async () => {
      const locationName = 'Seville (ES)';

      const wrapper = shallowMount(HomeDisplay, {
        props: { locationName },
      });

      const previousWeatherData = wrapper.vm.weatherData;
      wrapper.setProps({ locationName: 'Madrid (ES)' });
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.weatherData).not.toEqual(previousWeatherData);
      });
    });
  });
  describe('When timeMarker changes to 0', () => {
    test('this.tempData should change', async () => {
      const locationName = 'Seville (ES)';

      const wrapper = shallowMount(HomeDisplay, {
        props: { locationName },
      });
      wrapper.vm.setTimeMarker(1);
      wrapper.vm.$nextTick(() => {
        const previousTempData = wrapper.vm.tempData;
        wrapper.vm.setTimeMarker(0);
        wrapper.vm.$nextTick(() => {
          expect(wrapper.vm.tempData).not.toEqual(previousTempData);
        });
      });
    });
  });
});
