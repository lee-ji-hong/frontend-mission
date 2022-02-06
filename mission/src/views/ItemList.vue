<template>
  <div id="item-list-page">
    <Header class="item-list-header" />

    <main>
      <div class="item-detail" data-test="item-list-page">
        <Item
         v-for="item in items"
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

    <NavBar></NavBar>
  </div>
</template>

<script>
// repository pattern으로 api 연동
import RepositoryFactory from '@/repositories/RepositoryFactory';
import Header from '../components/ItemList/Header.vue';
import NavBar from '../components/ItemList/NavBar.vue';
import Item from '../components/ItemList/Item.vue';

const ItemRepository = RepositoryFactory.get('items');

export default {
  name: 'ItemListPage',
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
      const { data } = await ItemRepository.get();
      this.items = data.items;
    },
  },
};
</script>

<style>

</style>
