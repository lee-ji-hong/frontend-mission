import { flushPromises, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';
import WishList from '@/views/WishList.vue';
import Cart from '@/views/Cart.vue';
import MyInfo from '@/views/MyInfo.vue';
import NavBar from '@/components/ItemList/NavBar.vue';

describe('NavBar', () => {
  const routes = [
    {
      path: '/',
      component: ItemListPage,
    },
    {
      path: '/wish',
      component: WishList,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/info',
      component: MyInfo,
    },
  ];
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  const wrapper = mount(NavBar, {
    global: {
      plugins: [router],
    },
  });

  it('redners NavBar', () => {
    expect(wrapper.find('[data-test="test-name"]').exists()).toBe(true);
  });

  it('routing test ItemListPage', async () => {
    router.push('/');

    await router.isReady();
    await wrapper.find('[data-test="router-link-test"]').trigger('click');
    await flushPromises();

    expect(wrapper.get('[data-test="test-name"]').text()).toContain('홈');
  });

  it('routing test WishList', async () => {
    router.push('/wish');

    await router.isReady();
    await wrapper.find('[data-test="router-link-test"]').trigger('click');
    await flushPromises();

    expect(wrapper.get('[data-test="test-name"]').text()).toContain('찜목록');
  });

  it('routing test Cart', async () => {
    router.push('/cart');

    await router.isReady();
    await wrapper.find('[data-test="router-link-test"]').trigger('click');
    await flushPromises();

    expect(wrapper.get('[data-test="test-name"]').text()).toContain('장바구니');
  });

  it('routing test MyInfo', async () => {
    router.push('/info');

    await router.isReady();
    await wrapper.find('[data-test="router-link-test"]').trigger('click');
    await flushPromises();

    expect(wrapper.get('[data-test="test-name"]').text()).toContain('마이페이지');
  });
});
