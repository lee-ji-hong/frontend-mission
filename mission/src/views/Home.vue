<template>
  <section>
    <ul data-test="existshome">
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :name="prod.name"
        :image="prod.image"
        :percent="prod.percent"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
// @ is an alias to /src
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'Home',
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.getters['prods/products'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
