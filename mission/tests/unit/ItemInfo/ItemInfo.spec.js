import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('redners ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('item에서 product name 렌더링 확인', () => {
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

  it('item에서 description 렌더링 확인', () => {
    const testDescription = 'test Description';
    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          name: testDescription,
        };
      },
    });

    expect(wrapper.get('[data-test="test-description"]').text()).toBe(testDescription);
  });
});
