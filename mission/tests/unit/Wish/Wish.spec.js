import { flushPromises, mount } from '@vue/test-utils';
import WishListPage from '@/views/WishList.vue';
import Header from '@/components/ItemList/Header.vue';
import NavBar from '@/components/ItemList/NavBar.vue';
import Item from '@/components/ItemList/Item.vue';
import wishAPi from '@/repositories/WishRepository';

describe('WishListPage', () => {
  test('renders WishListPage', () => {
    const wrapper = mount(WishListPage);

    expect(wrapper.find('[data-test="wish-list-page"]').exists()).toBe(true);
  });

  test('Header component 보여지는가', () => {
    const wrapper = mount(WishListPage);

    expect(wrapper.findComponent(Header).exists()).toBe(true);
  });

  test('Item component 보여지는가', () => {
    const wrapper = mount(WishListPage);

    expect(wrapper.findComponent(Item).exists()).toBe(false);
  });

  test('NavBar component 보여지는가', () => {
    const wrapper = mount(WishListPage);

    expect(wrapper.findComponent(NavBar).exists()).toBe(true);
  });
});

describe('WishAPI', () => {
  const items = [{ name: '핏이 좋은 수트' }];
  wishAPi.get = jest.fn().mockResolvedValue({
    data: {
      items,
    },
  });

  it('wishAPi 호출 여부', async () => {
    await flushPromises();

    expect(wishAPi.get).toHaveBeenCalled();
  });
});
