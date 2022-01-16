<template>
  <li class="detail">
    <div class="detail__data">
      <div class="detail__image">
        <img alt="product_main" src="../assets/list_prev_btn.png"  class="detail_prev_btn" />
        <img class="detail_main_image"  :src="image" :alt="title">
      </div>

      <div class="detail__shop">
        <div class="detail__shop_image">
          <img src="https://shop-phinf.pstatic.net/20191107_60/1573103966356fPckB_PNG/10465508965383887_507755343.png?type=m120">
        </div>
        <div class="detail__shop_name">
          <h3>세미닌</h3>
          <p>#페미닌 #러블리 #마켓 만족도 89%</p>
        </div>
        <div class="detail__shop_btn">
          <h3>하트</h3>
          <!--<button @click="addToCart">Add to Cart</button>-->
        </div>
      </div>

    </div>
    <div class="detail__actions">
      <div>
        <h3>{{ name }}</h3>
      </div>
      <div class="detail__actions_cost">
        <h4 class="detail__actions_cost_percent">{{ percent }}</h4>
        <h4 class="detail__actions_cost_price">{{ price }}</h4>
        <h4 class="detail__actions_cost_sale">{{ sale }}</h4>
      </div>

    </div>

    <div class="description">
      <div class="description_p">
        <h3>주문 전, 꼭 필독해주세요!</h3><br>
        이 공지를 읽지 않아 발생하는 모든 일들은<br>
        세니룸에서책임지지 않습니다.<br>
        (주문과 동시에 공지사항을 숙지한 것으로 간주합니다)
      </div>
      <div class="description_p">
        ※세니룸 고객센터의 유선연결은 어려울때가 많으며,<br>
        에이블리 문의하기로 문의글을 남겨주시면<br>
        정확하고 빠른 답변 드리겠습니다 :) ※ <br>
        세니룸 상담시간 낮 12:00~17:00 (주말 및 공휴일 제외)
      </div>
      <div class="description_p">
        <h3>-주문취소-</h3><br>
        세니룸은 오전 11시부터 송장출력을 시작하므로,<br>
        주문취소의 경우 오전 11시 이전에 가능합니다.<br>
        송장 출력이 시작되면 주문취소가 어려울 수 있습니다.
      </div>
      <div><img  :src="image2" :alt="title"></div>
      <div><img  :src="image3" :alt="title"></div>
      <div><img  :src="image4" :alt="title"></div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id', 'image', 'name', 'price', 'sale', 'percent'],
  components: {
  },
  data() {
    return {

    };
  },
  computed: {

  },
};
</script>

<style scope>
body{
  margin:0;
}
ul{
  margin:0;
}
li{
  box-shadow: none;
  margin:0;
  padding:0;
}
.detail{
  position:relative;
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
</style>
