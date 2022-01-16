<template>
  <router-link to="/ItemInfo">
    <li class="product">
      <div class="product__data">
        <div class="product__image">
          <img :src="image" :alt="title" />
        </div>
        <div class="product__text">
          <p>{{ percent }}</p>
          <h4>{{ price }}</h4>
          <h3>{{ name }}</h3>
        </div>
      </div>
    </li>
  </router-link>
</template>

<script>
// @ is an alias to /src
import index from '@/store/modules/products/index';

export default {
  name: 'ProductItem',
  props: ['id', 'image', 'name', 'price', 'sale', 'percent'],
  components: {
  },
  data() {
    return {
      products: index.products,
    };
  },
};
</script>

<style scope>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}
</style>
