<template>
  <div class="item-list-item">
    <li class="item"
    v-for="itemList in itemLists"
    :key="itemList.list_id">
    <div class="item_image">
      <img
      :src="itemList.image"
      />
    </div>
    <div>
      <h1 class="porduct_price" data-test="test-price">{{itemList.price}}</h1>
    </div>
    <div class="porduct_description">
      <h6 data-test="seller-name">{{seller.name}}</h6>
      <h6 class="porduct_description_listname" data-test="product-name">{{itemList.name}}</h6>
    </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  data() {
    return {
      seller: {
        seller_id: 's1',
        name: '세미닌',
        shop_profie: 'https://shop-phinf.pstatic.net/20191107_60/1573103966356fPckB_PNG/10465508965383887_507755343.png?type=m120',
      },

      itemLists: [
        {
          list_id: 'l1',
          image: 'https://shop-phinf.pstatic.net/20210906_19/1630913405061mrqAV_JPEG/32049247723857243_192935124.JPG?type=m510',
          name: '[블랙컬러추가][엘레강스/고퀄set] 마벨 트위드 자켓 스커트 투피스 세트',
          price: ' 42,000원',
          original_price: '52,000원',
        },
        {
          list_id: 'l2',
          image: 'https://shop-phinf.pstatic.net/20210920_23/1632125831485lpnHr_JPEG/33261659299763224_1317939179.JPG?type=m510',
          name: '[백화점퀄SET] 에메랄드 쥬얼리 투피스 세트',
          price: ' 59,000원',
          original_price: '72,000원',
        },
        {
          list_id: 'l3',
          image: 'https://shop-phinf.pstatic.net/20210906_56/1630913830178OIiOV_JPEG/32049672821869873_1432798474.JPG?type=m510',
          name: '[3컬러/청순/러블리] 엔젤 리본 타이bl',
          price: ' 19,500원',
          original_price: '26,000원',
        },
        {
          list_id: 'l4',
          image: 'https://shop-phinf.pstatic.net/20210901_21/1630474070340jcEaU_JPEG/31609912957691625_1453441604.JPG?type=m510',
          name: '[set가격/가성비갑] 진주 패턴 트위드 자켓 스커트 투피스 세트',
          price: ' 41,000원',
          original_price: '50,000원',
        },
        {
          list_id: 'l5',
          image: 'https://shop-phinf.pstatic.net/20200603_271/1591191232859lutnx_JPEG/28554621270595644_434793565.JPG?type=m510',
          name: '[무배] 시스루 브이넥 리본끈 랩 블라우스',
          price: ' 34,500원',
          original_price: '40,000원',
        },
        {
          list_id: 'l6',
          image: 'https://shop-phinf.pstatic.net/20201229_201/1609227461030eEiT4_JPEG/10363356537654613_519280438.JPG?type=m510',
          name: '하운드 체크 진주단추 니트가디건 스커트 투피스 세트',
          price: ' 25,500원',
          original_price: '36,000원',
        },
        {
          list_id: 'l7',
          image: 'https://shop-phinf.pstatic.net/20200713_155/1594649590461Lutdu_JPEG/32010328833749444_849451809.JPG?type=m510',
          name: '[무배] 7센치 발등스트랩 샌들 슬리퍼',
          price: ' 39,000원',
          original_price: '45,000원',
        },
      ],
    };
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
.porduct_price{
  font-size: 15px;
  padding-left: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}
.porduct_description{
  padding-left: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  color: #7f7b7b;
}
.porduct_description_listname{
  font-weight: 400;
}
</style>
