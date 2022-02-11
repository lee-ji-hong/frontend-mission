import { flushPromises, mount } from '@vue/test-utils';
import CartPage from '@/views/Cart.vue';
import Header from '@/components/ItemList/Header.vue';
import NavBar from '@/components/ItemList/NavBar.vue';
import Item from '@/components/ItemList/Item.vue';
import CartAPI from '@/repositories/CartRepository';

describe('CartPage', () => {
  test('renders CartPage', () => {
    const wrapper = mount(CartPage);

    expect(wrapper.find('[data-test="cart-list"]').exists()).toBe(true);
  });

  test('Header component 보여지는가', () => {
    const wrapper = mount(CartPage);

    expect(wrapper.findComponent(Header).exists()).toBe(true);
  });

  test('Item component 보여지는가', () => {
    const wrapper = mount(CartPage);

    expect(wrapper.findComponent(Item).exists()).toBe(false);
  });

  test('NavBar component 보여지는가', () => {
    const wrapper = mount(CartPage);

    expect(wrapper.findComponent(NavBar).exists()).toBe(true);
  });
});

describe('CartAPI', () => {
  const items = [{ name: '핏이 좋은 수트' }];
  CartAPI.get = jest.fn().mockResolvedValue({
    data: {
      items,
    },
  });

  it('wishAPi 호출 여부', async () => {
    await flushPromises();

    expect(CartAPI.get).toHaveBeenCalled();
  });
});
