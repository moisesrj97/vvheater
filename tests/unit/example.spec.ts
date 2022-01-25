import { shallowMount } from '@vue/test-utils';
import HomeDisplay from '@/components/HomeDisplay.vue';

jest.mock('@/services/weatherAPIService.ts', () => {
  return () => {
    return Promise.resolve({ location: 'Barcelona' });
  };
});

describe('Given HomeDisplay.vue', () => {
  describe('When some location is passed as prop', () => {
    it('Should fetch data of that location', async () => {
      const locationName = 'Barcelona';

      const wrapper = shallowMount(HomeDisplay, {
        props: { locationName },
      });

      wrapper.vm.$nextTick(() => {
        expect(wrapper.text()).toMatch(locationName);
      });
    });
  });
});
