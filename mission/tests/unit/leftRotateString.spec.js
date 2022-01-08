import { shallowMount } from '@vue/test-utils';
import LeftRotateString from '@/components/LeftRotateString.vue';

describe('LeftRotateString.vue', () => {
  it('input에서 입력한 값이 실시간으로 p에 update된다.', () => {
    const defaultText = 'Projectlion';
    const wrapper = shallowMount(LeftRotateString, {
      props: { defaultText },
    });
    const p = wrapper.find('p');
    expect(p.text()).toMatch(defaultText);
  });
});
