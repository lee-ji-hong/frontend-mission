import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';

const routes = [
  {
    path: '/',
    name: 'ItemList',
    component: ItemListPage,
  },
  {
    path: '/item/:id',
    name: 'ItemInfo',
    component: () => import('../views/ItemInfo.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
