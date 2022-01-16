import { mount } from '@vue/test-utils';
import Detail from '@/components/Detail.vue';

describe('Detail', () => {
  const wrapper = mount(Detail);

  it('Detail', () => {
    expect(wrapper.find('.detail').exists()).toBe(true);
  });
  it('renders img', () => {
    expect(wrapper.find('.detail_main_image').exists()).toBe(true);
  });
  it('renders market name', () => {
    expect(wrapper.find('.detail__shop_name').exists()).toBe(true);
  });
  it('renders product name', () => {
    expect(wrapper.find('.detail__actions').exists()).toBe(true);
  });
  it('renders productprice', () => {
    expect(wrapper.find('.detail__actions_cost_price').exists()).toBe(true);
  });
});
