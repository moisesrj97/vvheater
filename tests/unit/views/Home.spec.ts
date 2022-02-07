import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

jest.mock('@/services/weatherAPIService.ts', () => {
  return () => {
    return Promise.resolve({ location: 'Barcelona', nextHoursPrediction: [] });
  };
});

const geolocation = {
  getCurrentPosition: jest.fn(() => {
    return Promise.resolve({
      coords: {
        latitude: 41.38,
        longitude: 2.17,
      },
    });
  }),
};

Object.defineProperty(global.navigator, 'geolocation', {
  value: geolocation,
});

describe('Given Home.vue', () => {
  describe('When it is rendered', () => {
    it('It should be rendered', async () => {
      const wrapper = shallowMount(Home);

      expect(wrapper).toBeTruthy();
    });
  });
});
