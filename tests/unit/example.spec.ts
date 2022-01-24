import { shallowMount } from '@vue/test-utils';
import BasicWeatherDisplay from '@/components/BasicWeatherDisplay.vue';
import { IWeatherAPI } from '@/interfaces/weatherAPI.interfaces';

jest.mock('@/services/weatherAPIService', () => {
  const mockedResponse: IWeatherAPI = {
    location: 'Barcelona',
    country: 'ES',
    timezone: 3600,
    petitionTimestamp: 1643016110,
    currentWeather: {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
    currentTempAndHumidity: {
      temp: 280.32,
      feelsLike: 280.32,
      tempMin: 276.78,
      tempMax: 283.33,
      humidity: 80,
    },
    currentSunrise: 1643008195,
    currentSunset: 1643043396,
    nextHoursPrediction: [
      {
        dt: 1643014800,
        temp: 280.32,
        feelsLike: 279.34,
        humidity: 80,
        weather: {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      },
    ],
    nextWeekPrediction: [
      {
        dt: 1643025600,
        sunrise: 1643008195,
        sunset: 1643043396,
        temp: {
          day: 282.53,
          min: 280.32,
          max: 285.02,
          night: 283.03,
          eve: 283.8,
          morn: 280.56,
        },
        feelsLike: { day: 282.53, night: 283.03, eve: 282.62, morn: 279.49 },
        humidity: 68,
        weather: {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      },
    ],
  };
  return jest.fn().mockResolvedValue(mockedResponse);
});

describe('Given BasicWeatherDisplay.vue', () => {
  describe('When some location is passed as prop', () => {
    it('Should fetch data of that location', async () => {
      const locationName = 'Barcelona';

      const wrapper = shallowMount(BasicWeatherDisplay, {
        props: { locationName },
      });

      expect(wrapper.text()).toBe(locationName);
    });
  });
});
