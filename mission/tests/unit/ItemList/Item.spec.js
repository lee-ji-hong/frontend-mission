import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  it('redners ItemListItem', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });

  it('item에서 price 렌더링 확인', () => {
    const testPrice = 'test price';
    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          name: testPrice,
        };
      },
    });

    expect(wrapper.get('[data-test="test-price"]').text()).toBe(testPrice);
  });

  it('item에서 sellername 렌더링 확인', () => {
    const testSellertName = 'test seller name';
    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          name: testSellertName,
        };
      },
    });

    expect(wrapper.get('[data-test="seller-name"]').text()).toBe(testSellertName);
  });

  it('item에서 name 렌더링 확인', () => {
    const testProductName = 'test product name';
    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          name: testProductName,
        };
      },
    });

    expect(wrapper.get('[data-test="product-name"]').text()).toBe(testProductName);
  });
});
