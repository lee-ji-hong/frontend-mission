<template>
  <div id='wish-list-page' data-test="order-page">
    <Header/>
    <main>
      <div class="item-detail" data-test="item-list-page">
        <CartItem
        v-for="item in storedCart"
        :id="item.product_no"
        :name="item.name"
        :img="item.image"
        :price="item.price"
        :original_price="item.original_price"
        :description="item.description"
        :key="item.product_no"
        ></CartItem>
      </div>
      <div class="order-cutomer"
        v-for="order in orders"
        :key="order.order_id">
        <div class="order-name">
          <span data-test="test-name">{{order.name}}</span>
        </div>
        <div>
          <input class="order-input" v-model="order.value"/>
        </div>
      </div>
    </main>

    <router-link to="/complete">
      <footer>
      <input class="order-btn" type="button" value="주문하기" onclick="idPwCheck()"/>
      </footer>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../components/ItemList/Header.vue';
import CartItem from '../components/Cart/CartItem.vue';

export default {
  name: 'OrderPage',
  components: { Header, CartItem },
  computed: {
    ...mapGetters(['storedCart']),
  },
  data() {
    return {
      orders: [
        {
          order_id: 'o1',
          name: '주문자명',
          value: '이름을 입력해주세요',
        },
        {
          order_id: 'o2',
          name: '전화번호',
          value: '전화번호를 입력해주세요',
        },
        {
          order_id: 'o3',
          name: '수령 주소',
          value: '주소를 입력해주세요',
        },
        {
          order_id: 'o4',
          name: '요청 사항',
          value: '배송 요청 사항을 입력하세요',
        },
      ],
    };
  },
};
</script>

<style scpoe>
.order-cutomer{
  display:flex;
  flex-direction: column;
  margin: 20px;
}
.order-name{
  text-align: left;
  font-weight: 600;
  font-size: 18px;
}
.order-input{
  width: 360px;
  height: 50px;
  border-color: #ddd;
  color: #ffffff;
  border-style: solid;
  font-weight: bold;
  box-sizing: border-box;
  font-size: 20px;
}
footer{
  padding: 20px;
  border-top: 1px solid #ddd;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color:white;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.order-btn{
  width: 400px;
  height: 60px;
  background-color: rgb(86, 196, 196);
  border-color: rgb(86, 196, 196);
  color: #ffffff;
  border-radius: 10px;
  border-style: solid;
  font-weight: bold;
  box-sizing: border-box;
  font-size: 20px;
}
</style>
