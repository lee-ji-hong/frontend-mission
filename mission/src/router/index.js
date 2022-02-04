import { createRouter, createWebHistory } from 'vue-router';
import ItemListPage from '@/views/ItemList.vue';

const routes = [
  {
    path: '/',
    redirect: '/list',
    name: 'ItemList',
    component: ItemListPage,
  },
  {
    path: '/list',
    name: 'ItemList',
    component: ItemListPage,
  },
  {
    path: '/Item',
    component: () => import('../views/ItemInfo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
