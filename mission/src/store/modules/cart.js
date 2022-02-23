const state = {
  cart_item: [
    {
      product_no: 'asdf1234',
      name: '핏이 좋은 수트',
      image: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png',
      price: 198000,
      original_price: 298000,
      description: '아주 잘 맞는 수트',
    },
  ],
};

const getters = {
  storedCart() {
    return state.cart_item;
  },
};

const mutations = {

};

const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions,
};
