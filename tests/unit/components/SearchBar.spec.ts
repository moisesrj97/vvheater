import { shallowMount } from '@vue/test-utils';
import SearchBar from '@/components/SearchBar.vue';

describe('Given SearchBar.vue', () => {
  describe('When emitLocation is called', () => {
    test('It should emit event', async () => {
      const wrapper = shallowMount(SearchBar);

      wrapper.setData({ inputValue: 'Test' });
      wrapper.vm.emitLocation();
      expect(wrapper.emitted('emitInput')).toBeTruthy();
    });
  });
});
