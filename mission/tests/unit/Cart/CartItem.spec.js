import { flushPromises, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

import ItemInfo from '@/views/ItemInfo.vue';
import CartPage from '@/views/Cart.vue';

const routes = [
  {
    path: '/item',
    component: ItemInfo,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
const store = createStore({
  state: {
    cart_item: [
      {
        product_no: 'asdf1234',
        name: '핏이 좋은 수트',
        image: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png',
        price: 198000,
        original_price: 298000,
        description: '아주 잘 맞는 수트',
      },
    ],
  },
  getters: {
    storedCart(state) {
      return state.cart_item;
    },
  },
});
const wrapper = mount(CartPage, {
  global: {
    plugins: [router, store],
  },
});

describe('CartItem', () => {
  it('renders CartItem', () => {
    expect(wrapper.get('[data-test="cart-item"]').exists()).toBe(true);
  });

  it('상품을 누르면 ItemInfo으로 라우팅 되는가', async () => {
    router.push('/item');

    await router.isReady();

    expect(wrapper.find('[data-test="cart-item"]').exists()).toBe(true);
  });

  it('renders item information', async () => {
    router.push('/item');

    await router.isReady();

    expect(wrapper.find('[data-test="price"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="name"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="description"]').exists()).toBe(true);

    await wrapper.find('[data-test="cart-item"]').trigger('click');

    await flushPromises();

    expect(wrapper.findComponent(ItemInfo).exists()).toBe(true);
  });
});
