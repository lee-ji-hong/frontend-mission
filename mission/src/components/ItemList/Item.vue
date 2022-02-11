<template>
<router-link :to="`/item/${id}`">
  <div class="item-list-item">
  <li class="item" data-test="item">
    <div class="item_image">
      <img :src="img" alt="상품 이미지"/>
    </div>
    <div class="product_price_wrap">
      <div
        v-if="isDiscounted"
        class="product_percent"
        data-test="discount-rate"
      >
        {{ displayDiscountRate }}
      </div>
      <div class="product_price" data-test="price">
        {{ priceWithComma }}
      </div>
    </div>

    <div class="product_description">
      <div class="info-name" data-test="name">{{ name }}</div>
      <div data-test="description" class="product_description_listname">{{ description }}</div>
    </div>
  </li>
  </div>
</router-link>
<router-view :id="id"></router-view>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    id: { type: String, default: '' },
    name: { type: String, default: '' },
    price: { type: Number, default: 0 },
    img: { type: String, default: '' },
    original_price: { type: Number, default: -1 },
    description: { type: String, default: '' },
    discount_rate: { type: Number, default: null },
  },
  computed: {
    priceWithComma() {
      return `${this.price.toLocaleString()}원`;
    },
    isDiscounted() {
      return this.original_price !== -1;
    },
    displayDiscountRate() {
      const rate = ((this.original_price - this.price) / this.original_price) * 100;
      return `${rate.toFixed(0)}%`;
    },
  },
};
</script>

<style scope>
ul{
  margin: 0 auto;
  list-style: none;
  padding: 10px;
}
li{
  margin: 1.5rem auto;
/** box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
  padding: 5px;
}
.item-list-item{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.item_image img{
  height:100%;
  width:100%;
  border-radius: 14px;
}
.product_price_wrap{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.product_percent{
  color: #f34f4f;
  font-size: 15px;
  padding-left: 5px;
}
.product_price{
  font-size: 15px;
  padding-left: 5px;
}
.product_description{
  padding-left: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  color: #7f7b7b;
}
.product_description_listname{
  font-weight: 400;
}
</style>
