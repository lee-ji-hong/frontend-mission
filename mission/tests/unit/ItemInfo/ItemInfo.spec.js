import { mount } from '@vue/test-utils';
import ProductItem from '@/components/ProductItem.vue';

describe('ProductItem', () => {
  const wrapper = mount(ProductItem);

  it('redners ProductItem', () => {
    expect(wrapper.find('.product').exists()).toBe(true);
  });
  it('renders img', () => {
    expect(wrapper.find('.product__image').exists()).toBe(true);
  });
  it('renders market information', () => {
    expect(wrapper.find('.product__text').exists()).toBe(true);
  });
});
