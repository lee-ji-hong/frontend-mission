import { mount } from '@vue/test-utils';
import NavBar from '@/components/ItemList/NavBar.vue';

describe('NavBar', () => {
  it('redners NavBar', () => {
    const wrapper = mount(NavBar);

    expect(wrapper.find('.item-list-nav').exists()).toBe(true);
  });

  it('nav에서 name 렌더링 확인', () => {
    const testName = 'test name';
    const wrapper = mount(NavBar, {
      data() {
        return {
          name: testName,
        };
      },
    });

    expect(wrapper.get('[data-test="test-name"]').text()).toBe(testName);
  });

});
