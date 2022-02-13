<template>
<router-link :to="`/item/${id}`">
<div class="cart-item-wrap-pro" data-test="cart-item">
  <div class="cart-item-wrap">
    <div class="cart-shop-name">에이블리 배송상품</div>
    <li class="cart-item" data-test="item">
      <div class="cart-item_image">
        <img :src="img" alt="상품 이미지" style="border: 1px solid #ddd;"/>
      </div>
      <div class="cart-item-description">
        <div class="cart-product_description">
          <div class="info-name" data-test="name">{{ name }}</div>
          <div data-test="description" class="cart-product_description_listname">
            {{ description }}
          </div>
        </div>

        <div class="product_price_wrap">
          <div
            v-if="isDiscounted"
            class="cart-item-original"
            data-test="discount-rate"
          >
            {{ priceWithCommaOriginal }}
          </div>
          <div class="product_price" data-test="price">
            {{ priceWithComma }}
          </div>
        </div>
      </div>
    </li>
  </div>
  <div class="cart-price-wrap-pro">
    <div class="cart-price-wrap">
      <div class="cart-price-left">
        <div> 상품 금액 {{ priceWithCommaOriginal }} </div>
        <div> 할인 금액 {{ displayDiscountRate }} </div>
      </div>
      <div class="cart-price-right">
        <div style="color: #999; font-weight: 500;"> 결제 예상 </div>
        <div style="font-weight: 600;">{{ priceWithComma }} </div>
      </div>
    </div>
  </div>
</div>
</router-link>
<router-view :id="id"></router-view>
</template>

<script>
export default {
  name: 'CartItem',
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
    priceWithCommaOriginal() {
      return `${this.original_price.toLocaleString()}원`;
    },
    isDiscounted() {
      return this.original_price !== -1;
    },
    displayDiscountRate() {
      const rate = this.original_price - this.price;
      return `${rate.toLocaleString()}원`;
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
.cart-item-wrap-pro{
  border-top: 6px solid #f4f4f4;
  border-bottom: 6px solid #f4f4f4;
}
.cart-item-wrap{
  margin: 20px;
}
.cart-shop-name{
  font-weight: 999;
  text-align: left;
  font-size: 18px;
}
.cart-item{
  display: flex;
  justify-content: flex-start;
  border: 1px solid #ddd;
  margin: 10px 30px;
}
.cart-item_image{
  height: 100px;
  margin-right: 10px;
}
.cart-item_image img{
  height:100%;
  width:100%;
  border-radius: 14px;
}
.product_price_wrap{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cart-item-original{
  text-decoration : line-through;
  color: #999;
  font-size: 15px;
  padding-left: 5px;
}
.product_price{
  font-weight: 600;
  font-size: 15px;
  padding-left: 5px;
}
.cart-product_description{
  padding-left: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  color: #7f7b7b;
}
.cart-product_description_listname{
  font-weight: 400;
}
.cart-price-wrap-pro{
  border-top: 1px solid #ddd;
}
.cart-price-wrap{
  margin:20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart-price-left{
  color: #999;
  font-weight: 500;
}
.cart-price-right{
  display: flex;
}
</style>
