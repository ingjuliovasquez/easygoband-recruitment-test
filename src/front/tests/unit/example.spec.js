import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue';

describe('Test to get json data, from amazonaws API', () => {
  it('Set data from api, when execute the getData() method', async () => {
    const wrapper = shallowMount(App);

    // * Validate of list is empty array
    expect(wrapper.vm.list).toEqual([]);

    // * Execute method to get api data
    await wrapper.vm.getData();

    // * Validate if list, is not empty
    expect(wrapper.vm.list).toHaveLength;
  })
})
