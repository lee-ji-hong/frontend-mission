<template>
  <div id="cart-list" data-test="cart-list">
    <Header>장바구니</Header>
    <main>
      <div>
        <Item
        v-for="item in storedCart"
        :id="item.product_no"
        :name="item.name"
        :img="item.image"
        :price="item.price"
        :original_price="item.original_price"
        :description="item.description"
        :key="item.product_no"
        ></Item>
      </div>
    </main>
    <NavBar/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../components/ItemList/Header.vue';
import NavBar from '../components/ItemList/NavBar.vue';
import Item from '../components/ItemList/Item.vue';

export default {
  name: 'OrderPage',
  components: {
    Header, Item, NavBar,
  },
  computed: {
    ...mapGetters(['storedCart']),
  },
};
</script>

<style>
</style>
