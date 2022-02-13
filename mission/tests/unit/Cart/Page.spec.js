import { flushPromises, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

import OrderPage from '@/views/Order.vue';
import OrderBtn from '@/components/OrderBtn/OrderBtn.vue';
import CartPage from '@/views/Cart.vue';
import Header from '@/components/ItemList/Header.vue';
import CartItem from '@/components/Cart/CartItem.vue';

const routes = [
  {
    path: '/order',
    component: OrderPage,
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

describe('CartPage', () => {
  test('renders CartPage', () => {
    expect(wrapper.get('[data-test="cart-list"]').exists()).toBe(true);
  });

  test('CartPage에서 Order페이지로 routing되는지 ', async () => {
    router.push('/order');

    await router.isReady();

    await wrapper.find('[data-test="cart-list"]').trigger('click');
    await flushPromises();
    expect(wrapper.findComponent(OrderPage).exists()).toBe(true);
  });

  test('Header component 보여지는가', () => {
    expect(wrapper.findComponent(Header).exists()).toBe(true);
  });

  test('CartItem component 보여지는가', () => {
    expect(wrapper.findComponent(CartItem).exists()).toBe(true);
  });

  test('OrderBtn component 보여지는가', () => {
    expect(wrapper.findComponent(OrderBtn).exists()).toBe(true);
  });
});
