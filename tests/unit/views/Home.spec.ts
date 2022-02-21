import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

jest.mock('@/services/weatherAPIService.ts', () => {
  return () => {
    return Promise.resolve({ location: 'Barcelona', nextHoursPrediction: [] });
  };
});

const mockGeolocationWithoutError = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success, error) =>
    Promise.resolve(
      success({
        coords: {
          latitude: 41.3851,
          longitude: 2.1734,
        },
      })
    )
  ),
  watchPosition: jest.fn(),
};

const mockGeolocationWithError = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success, error) =>
    Promise.resolve(
      error({
        code: 1,
        message: 'Geolocation error',
      })
    )
  ),
  watchPosition: jest.fn(),
};

describe('Given Home.vue', () => {
  describe('When it is rendered with location', () => {
    it('It should be rendered', async () => {
      Object.defineProperty(navigator, 'geolocation', {
        value: mockGeolocationWithoutError,
        configurable: true,
      });
      expect(() => shallowMount(Home)).not.toThrow();
    });
  });
  describe('When it is rendered', () => {
    it('It should be rendered without location', async () => {
      Object.defineProperty(navigator, 'geolocation', {
        value: mockGeolocationWithError,
        configurable: true,
      });
      expect(() => shallowMount(Home)).toThrow('Geolocation');
    });
  });
});
