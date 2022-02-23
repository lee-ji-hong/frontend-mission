<template>
  <div id='wish-list-page' data-test='wish-list-page'>
    <Header>찜목록</Header>

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

    <NavBar/>
  </div>
</template>

<script>
// repository pattern으로 api 연동
import RepositoryFactory from '@/repositories/RepositoryFactory';
import Header from '../components/ItemList/Header.vue';
import NavBar from '../components/ItemList/NavBar.vue';
import Item from '../components/ItemList/Item.vue';

const WishRepository = RepositoryFactory.get('wishes');

export default {
  name: 'WishListPage',
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
      const { data } = await WishRepository.get();
      this.items = data.items;
    },
  },
};
</script>

<style>

</style>
