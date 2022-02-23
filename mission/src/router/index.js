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
  {
    path: '/wish',
    name: 'WishList',
    component: () => import('../views/WishList.vue'),
    props: true,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue'),
    props: true,
  },
  {
    path: '/info',
    name: 'MyInfo',
    component: () => import('../views/MyInfo.vue'),
    props: true,
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    props: true,
  },
  {
    path: '/complete',
    name: 'Complete',
    component: () => import('../views/Complete.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
