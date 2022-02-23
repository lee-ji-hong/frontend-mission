<template>
    <button class="footer-cart-btn" @click="addToCart">
      장바구니
    </button>
</template>

<script>
export default {
  name: 'CartBtn',
  computed: {
    products() {
      return this.$store.getters['prods/products'];
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.footer-cart-btn{
  font: inherit;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 1px solid black;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  width: 200px;
  height: 50px;
}
</style>
