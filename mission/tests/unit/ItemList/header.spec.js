import { mount } from '@vue/test-utils';
import Header from '@/components/ItemList/Header.vue';

describe('ItemListItem', () => {
  it('redners ItemListItem', () => {
    const wrapper = mount(Header);

    expect(wrapper.find('.item-list-header').exists()).toBe(true);
  });

});
