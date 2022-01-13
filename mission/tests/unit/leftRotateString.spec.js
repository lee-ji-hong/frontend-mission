// eslint-disable-next-line no-unused-vars
import { shallowMount } from '@vue/test-utils';
import LeftRotateString from '@/components/LeftRotateString.vue';

describe('LeftRotateString.vue', () => {
  const defaultText = 'new message';
  /**
   * @type {VueWrapper}
   */
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LeftRotateString, {
      props: { defaultText },
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('renders props.defaultText when passed', () => {
    expect(wrapper.text()).toMatch(defaultText);
  });

  it('renders 회전버튼', () => {
    expect(wrapper.find('.rotate_btn').exists()).toBe(true);
  });

  it('renders text input', () => {
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
  });

  it('has paragraph element', () => {
    expect(wrapper.find('p[data-test="customInputText"]').exists()).toBe(true);
  });

  it('displays text from text input', async () => {
    const testText = 'hello from test code';
    await wrapper.get('input[type="text"]').setValue(testText);

    expect(wrapper.get('p[data-test="customInputText"]').text()).toEqual(testText);
  });

  it('rotates text to left one at a time per buttom click', async () => {
    const testText = 'I am rotating!';
    const resultText = ' am rotating!I'.trim();

    await wrapper.get('input[type="text"]').setValue(testText);
    await wrapper.get('.rotate_btn').trigger('click');

    expect(wrapper.get('p[data-test="customInputText"]').text()).toMatch(resultText);
  });

  it('shows alert with text and click counter', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    const testText = '위 버튼을 클릭한 횟수는';
    const testTextEnd = '번 입니다.';
    await wrapper.get('input[type="text"]').setValue(testText);
    // 'button[data-test="clickCounter"]'의 존재 여부 테스트를 추가할 수도 있습니다.
    await wrapper.get('button[data-test="clickCounter"]').trigger('click');
    await wrapper.get('button[data-test="clickCounter"]').trigger('click');

    expect(window.alert).toBeCalledWith(`${testText} 2${testTextEnd}`);
  });

  it('버튼 클릭 시 클릭횟수 증가', () => {
    expect(wrapper.vm.counter).toBe(0);
    const counterButton = wrapper.find('.counter_btn');
    counterButton.trigger('click');
    expect(wrapper.vm.counter).toBe(1);
  });
});
