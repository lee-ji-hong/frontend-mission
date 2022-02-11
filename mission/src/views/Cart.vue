<template>
  <div id="cart-list" data-test="cart-list">
    <Header>장바구니</Header>
    <main>
      <div>
        <Item
      v-for="item in items"
      :key="item.productCode"
      :name="item.name"
      :price="item.price"
      :img="item.image"
      :original_price="item.original_price"
      :description="item.description"
    >
    </Item>
      </div>
    </main>

    <NavBar/>
  </div>
</template>

<script>
// repository pattern으로 api 연동
import RepositoryFactory from '@/repositories/RepositoryFactory';
import Header from '../components/ItemList/Header.vue';
import NavBar from '../components/ItemList/NavBar.vue';
import Item from '../components/ItemList/Item.vue';

const CartRepository = RepositoryFactory.get('carts');

export default {
  name: 'CartPage',
  components: { Header, Item, NavBar },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      const { data } = await CartRepository.get();
      this.items = data.cart_item;
    },
  },
};
</script>

<style>
</style>
