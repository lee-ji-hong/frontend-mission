<template>
  <div id="cart-list" data-test="cart-list">
    <Header>장바구니</Header>
    <main>
      <div>
        <CartItem
        v-for="item in storedCart"
        :id="item.product_no"
        :name="item.name"
        :img="item.image"
        :price="item.price"
        :original_price="item.original_price"
        :description="item.description"
        :key="item.product_no"
        ></CartItem>
      </div>
    </main>
    <OrderBtn/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../components/ItemList/Header.vue';
import CartItem from '../components/Cart/CartItem.vue';
import OrderBtn from '../components/OrderBtn/OrderBtn.vue';

export default {
  name: 'OrderPage',
  components: {
    Header, CartItem, OrderBtn,
  },
  computed: {
    ...mapGetters(['storedCart']),
  },
};
</script>

<style>
</style>
