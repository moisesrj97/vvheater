import { shallowMount } from '@vue/test-utils';
import NextWeekDisplay from '@/components/NextWeekDisplay.vue';

const nextWeekPrediction = [
  {
    dt: 1644235200,
    sunrise: 1644218297,
    sunset: 1644255579,
    temp: {
      day: 14.03,
      min: 4.96,
      max: 14.93,
      night: 8.94,
      eve: 11.99,
      morn: 5.01,
    },
    feelsLike: { day: 12.25, night: 7.55, eve: 10.16, morn: 4.16 },
    humidity: 29,
    weather: {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  },
  {
    dt: 1644321600,
    sunrise: 1644304630,
    sunset: 1644342053,
    temp: {
      day: 12.85,
      min: 5.35,
      max: 15.74,
      night: 10.02,
      eve: 12.41,
      morn: 5.48,
    },
    feelsLike: { day: 11.21, night: 8.36, eve: 10.75, morn: 3.29 },
    humidity: 39,
    weather: {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  },
  {
    dt: 1644408000,
    sunrise: 1644390962,
    sunset: 1644428527,
    temp: {
      day: 12.48,
      min: 6.43,
      max: 14.87,
      night: 10.1,
      eve: 12.18,
      morn: 6.76,
    },
    feelsLike: { day: 10.88, night: 8.39, eve: 10.55, morn: 5.23 },
    humidity: 42,
    weather: {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  },
  {
    dt: 1644494400,
    sunrise: 1644477293,
    sunset: 1644515000,
    temp: {
      day: 13.05,
      min: 6.94,
      max: 15.09,
      night: 10.89,
      eve: 12.27,
      morn: 6.94,
    },
    feelsLike: { day: 11.43, night: 9.21, eve: 10.57, morn: 5.96 },
    humidity: 39,
    weather: {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  },
  {
    dt: 1644580800,
    sunrise: 1644563622,
    sunset: 1644601474,
    temp: {
      day: 14.09,
      min: 7.8,
      max: 15.99,
      night: 10.93,
      eve: 13.74,
      morn: 7.8,
    },
    feelsLike: { day: 12.65, night: 9.44, eve: 12.32, morn: 6.28 },
    humidity: 42,
    weather: {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    },
  },
  {
    dt: 1644667200,
    sunrise: 1644649950,
    sunset: 1644687947,
    temp: {
      day: 11.06,
      min: 6.51,
      max: 12.93,
      night: 9.8,
      eve: 11.2,
      morn: 6.51,
    },
    feelsLike: { day: 9.58, night: 9.8, eve: 9.79, morn: 5.46 },
    humidity: 52,
    weather: {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  },
  {
    dt: 1644753600,
    sunrise: 1644736276,
    sunset: 1644774419,
    temp: {
      day: 11.52,
      min: 7.01,
      max: 13.57,
      night: 10.72,
      eve: 12.42,
      morn: 7.01,
    },
    feelsLike: { day: 10.11, night: 9.31, eve: 11, morn: 7.01 },
    humidity: 53,
    weather: {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    },
  },
  {
    dt: 1644840000,
    sunrise: 1644822601,
    sunset: 1644860892,
    temp: {
      day: 12.48,
      min: 7.2,
      max: 14.92,
      night: 11.15,
      eve: 12.96,
      morn: 7.2,
    },
    feelsLike: { day: 11.06, night: 9.89, eve: 11.64, morn: 7.2 },
    humidity: 49,
    weather: {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  },
];

describe('Given NextWeekDisplay.vue', () => {
  describe('When given prediction data', () => {
    test('It paint that info in the screen', async () => {
      const wrapper = shallowMount(NextWeekDisplay, {
        props: {
          nextWeekPrediction,
        },
      });

      expect(wrapper.text()).toMatch('Clear');
    });
  });
});
