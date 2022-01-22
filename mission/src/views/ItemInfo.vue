<template>
<div id="item-info-page">
  <div class="detail__data" data-test="product-name">
    {{ name }}
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      product_id: 'p1',
      image: 'https://shop-phinf.pstatic.net/20210906_19/1630913405061mrqAV_JPEG/32049247723857243_192935124.JPG?type=m510',
      name: '[블랙컬러추가][엘레강스/고퀄set] 마벨 트위드 자켓 스커트 투피스 세트',
      price: ' 42,000원',
      original_price: '52,000원',
      percent: '20%',
      description: `<div class="description">
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
      <div><img src="https://imgb.a-bly.com/data/editor/20210906_1630909585997907l.JPG" alt="title"></div>
      <div><img src="https://imgb.a-bly.com/data/editor/20210906_1630909643610521l.JPG" alt="title"></div>
      <div><img src="https://shop-phinf.pstatic.net/20210906_288/1630913435347F1sza_JPEG/32049277932462662_2034029400.JPG?type=f40" alt="title"></div>
      </div>`,
      seller: {
        seller_id: 's1',
        name: '세미닌',
        hash_tags: ['페미닌', '러블리', '마켓 만족도 89%', '20대'],
        shop_profie: 'https://shop-phinf.pstatic.net/20191107_60/1573103966356fPckB_PNG/10465508965383887_507755343.png?type=m120',
      },
      reviews: [
        {
          review_id: 'r1',
          writer: 'ho***',
          title: '만족해요',
          content: '핏이 아주 잘 맞습니다. 대만족!',
          like_count: 7,
          created: '2021.12.04',

        },
      ],
    };
  },
  methods: {

  },
  computed: {
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
