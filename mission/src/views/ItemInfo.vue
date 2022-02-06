<template>
  <div class="detail-wrap">
    <div class="detail__data">
      <div class="detail__image">
        <img class="detail_main_image" :src="item.image" >
      </div>

      <div class="detail__shop">
        <div class="detail__shop_image">
          <img :src="item.seller.profile_image" alt="">
        </div>
        <div class="detail__shop_name">
          <h3>
            <strong>{{ item.seller.name }}</strong>
          </h3>
          <p v-for="tag in item.seller.hash_tags" :key="tag">
              #{{ tag }}
          </p>
        </div>
        <div data-test="company-star" class="detail__shop_btn">
          <span >
          <i class="far fa-star w3-right"></i>
        </span>
        </div>
      </div>
    </div>

      <div class="detail__actions">
          <div>
            <h3 data-test="name">{{ item.name }}</h3>
          </div>
          <div class="detail__actions_cost">
            <div
            class="detail__actions_cost_percent"
            id="discount"
            data-test="discount-rate"
            v-if="this.item.original_price">
              {{ display_discount_rate }}%
            </div>
            <div data-test="price" class="detail__actions_cost_price">
              {{ priceWidthComma(item.price) }}원
            </div>
            <div class="detail__actions_cost_sale" v-if="this.item.original_price">
              {{ priceWidthComma(item.original_price) }}원
            </div>
        </div>

        <div data-test="product-detail" class="product-detail">
          <p class="detail-title">상품 설명</p>
          <div class="description_p" v-html="item.description"></div>
        </div>
      </div>

      <div id="reviews">
        <div
          class="review w3-row"
          v-for="review in reviews"
          :key="review.review_no"
        >
          <div class="review-text">
            <div class="review-row-1">
              <div class="review-writer" data-test="review-writer">
                {{ review.writer }}
              </div>
              <div class="review-created" data-test="review-created">
                {{ review.created }}
              </div>
            </div>
            <div class="review-title" data-test="review-title">
              {{ review.title }}
            </div>
            <div class="review-content" data-test="review-content">
              {{ review.content }}
            </div>
          </div>
          <div
            v-if="doesReviewImgExists(review)"
            class="review-img"
            data-test="review-img"
          >
            <img class="w3-right" :src="review.img" />
          </div>
        </div>
      </div>
      <div id="footer">
        <button
          id="btn-pruchase"
          class="w3-round-large"
          data-test="footer-price"
        >
          {{ `${priceStringWithComma(price)} 구매` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryFactory from '@/repositories/RepositoryFactory';

const ItemRepository = RepositoryFactory.get('items');

export default {
  name: 'ItemInfoPage',
  props: {
    id: { type: String, default: '' },
  },
  data() {
    return {
      item: {
        seller: {},
        reviews: [{}],
      },
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    async getItem() {
      const { data } = await ItemRepository.getItem(this.id);
      this.item = data.item;
    },
    priceWidthComma(value) {
      return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    doesReviewImgExists(review) {
      return Object.prototype.hasOwnProperty.call(review, 'img');
    },
  },
  computed: {
    display_discount_rate() {
      const rate = ((this.item.original_price - this.item.price) / this.item.original_price) * 100;

      return Number.prototype.toFixed.call(rate, 0);
    },
  },
};
</script>

<style scoped>
.detail-wrap{
  position:relative;
  box-shadow: none;
  margin:0;
  padding:0;
}

.detail__data {
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.detail__image {
  height: 400px;
}
.detail_main_image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 5px 5px;
  /* box-shadow: 8px 8px 8px 0.1px rgba(0, 0, 0, 0.2); */
}
.detail_prev_btn{
  border: none;
  left: 14px;
  height: 25px;
  cursor: hand;
  filter: alpha(opacity=1);
  position: absolute;
  top: 20px;
  border-radius: none;
  z-index: 100;
}
.detail__shop{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid #ddd;
}
.detail__shop_image{
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.detail__shop_image img {
  height: 42px;
  border-radius: 50%;
}
.detail__shop_name{
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
}
.detail__shop_name h3{
  font-size: 15px;
}
.detail__shop_name p{
  font-size: 13px;
  color: #9f9d9d;
}
.detail__shop_btn{
  width: 15%;
  padding: 5px;
}
.detail-title{
  padding: 20px;
  font-size: 25px;
  color: #737171;
}
.detail__actions {
  text-align: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
.detail__actions h3{
  font-size: 15px;
  padding: 10px 15px;
  text-align: left;
}
.detail__actions_cost{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
}
.detail__actions_cost_percent{
  color: #f34f4f;
  font-size: 19px;
  margin-right: 5px;
}
.detail__actions_cost_price{
  font-size: 19px;
  margin-right: 5px;
}
.detail__actions_cost_sale{
  color: #9f9d9d;
  font-weight: 500;
  text-decoration: line-through;
}
.description{
  font-size: 10px;
  line-height: 2;
}
.description_p{
  margin: 30px 0px;
}
button {
  outline: none;
  font: inherit;
  cursor: pointer;
  background-color: #0278ff;
  color: white;
  border: 1px solid #0278ff;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}
button:hover,
button:active {
  background-color: #0a46b4;
  border-color: #0a46b4;
}
.detail-review-wrap{
  margin-top: 20px;
  margin-bottom: 100px;
  background: #ddd;
}
.review-title{
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>
