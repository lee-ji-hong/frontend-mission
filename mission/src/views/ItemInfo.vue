<template>
<section id='item-info-page'>
  <ul>
    <detail
      v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :name="prod.name"
        :image="prod.image"
        :percent="prod.percent"
        :price="prod.price"
        :sale="prod.sale"
        :image2="prod.image2"
        :image3="prod.image3"
        :image4="prod.image4"
    ></detail>
  </ul>
</section>
</template>

<script>
// @ is an alias to /src
import Detail from '@/components/Detail.vue';

export default {
  name: 'ItemInfoPage',
  components: {
    Detail,
  },
  data() {
    return {

    };
  },
  methods: {

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
