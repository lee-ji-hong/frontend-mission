<template>
  <div id="item-list-page">
    <Header/>
    <Item/>
    <NavBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/ItemList/Header.vue';
import Item from '@/components/ItemList/Item.vue';
import NavBar from '@/components/ItemList/NavBar.vue';

export default {
  name: 'ItemListPage',
  components: {
    Header,
    Item,
    NavBar,

  },
};
</script>

<style>
</style>
