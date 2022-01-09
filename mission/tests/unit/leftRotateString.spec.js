import { shallowMount } from '@vue/test-utils';
import LeftRotateString from '@/components/LeftRotateString.vue';

describe('LeftRotateString.vue', () => {
  const defaultText = 'Projectlion';
  const wrapper = shallowMount(LeftRotateString, {
    props: { defaultText },
  });
  it('input에서 입력한 값이 실시간으로 p에 update된다.', () => {
    const p = wrapper.find('p');
    expect(p.text()).toMatch(defaultText);
  });

  it('버튼 클릭 시 문자열 왼쪽으로 슬라이드', () => {
    const rotateButton = wrapper.find('.rotate_btn');
    rotateButton.trigger('click');
    expect(wrapper.vm.inputText).toContain('rojectlionP');
  });
});