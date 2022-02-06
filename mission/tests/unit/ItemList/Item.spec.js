import { flushPromises, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import ItemListItem from '@/components/ItemList/Item.vue';
import ItemInfo from '@/views/ItemInfo.vue';

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
const wrapper = mount(ItemListItem, {
  global: {
    plugins: [router],
  },
});

describe('ItemListItem', () => {
  it('redners ItemListItem', async () => {
    router.push('/item');

    await router.isReady();

    expect(wrapper.find('[data-test="item"]').exists()).toBe(true);
  });

  it('renders item information', async () => {
    router.push('/item');

    await router.isReady();

    expect(wrapper.find('[data-test="price"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="name"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="description"]').exists()).toBe(true);

    await wrapper.find('.item-list-item').trigger('click');

    await flushPromises();

    expect(wrapper.findComponent(ItemInfo).exists()).toBe(true);
  });
});
