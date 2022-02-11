import { flushPromises, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import Header from '@/components/ItemList/Header.vue';
import ItemListPage from '@/views/ItemList.vue';

const routes = [
  {
    path: '/',
    component: ItemListPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

describe('ItemListItem', () => {
  it('header 렌더링 테스트', async () => {
    router.push('/');

    await router.isReady();

    const wrapper = mount(Header, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.find('.headbar').exists()).toBe(true);
    expect(wrapper.find('.item-list-header').exists()).toBe(true);
    expect(wrapper.find('.headbar').exists()).toBe(true);
    expect(wrapper.find('.headbar h1').exists()).toBe(true);

    await wrapper.find('.headbar h1').trigger('click');
    await flushPromises();
    expect(wrapper.html()).toContain('SEMININ');
  });
});
