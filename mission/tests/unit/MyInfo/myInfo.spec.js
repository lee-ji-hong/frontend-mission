import { mount } from '@vue/test-utils';
import MyInfoPage from '@/views/MyInfo.vue';

describe('MyInfoPage', () => {
  it('renders InfoPage', () => {
    const wrapper = mount(MyInfoPage);

    expect(wrapper.find('[data-test="info-page"]').exists()).toBe(true);
  });
});
