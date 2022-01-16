import productsGetters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://shop-phinf.pstatic.net/20210906_19/1630913405061mrqAV_JPEG/32049247723857243_192935124.JPG?type=m510',
          name:
            '[블랙컬러추가][엘레강스/고퀄set] 마벨 트위드 자켓 스커트 투피스 세트',
          price: ' 42,000원',
          sale: '52,000원',
          percent: '20%',
          image2: 'https://imgb.a-bly.com/data/editor/20210906_1630909585997907l.JPG',
          image3: 'https://imgb.a-bly.com/data/editor/20210906_1630909643610521l.JPG',
          image4: 'https://shop-phinf.pstatic.net/20210906_288/1630913435347F1sza_JPEG/32049277932462662_2034029400.JPG?type=f40',
        },
        {
          id: 'p2',
          image:
            'https://shop-phinf.pstatic.net/20210920_23/1632125831485lpnHr_JPEG/33261659299763224_1317939179.JPG?type=m510',
          name:
            '[백화점퀄SET] 에메랄드 쥬얼리 투피스 세트',
          price: ' 59,000원',
          sale: '72,000원',
          percent: '18%',
          image2: 'https://shop-phinf.pstatic.net/20210920_194/1632125880493sna2s_JPEG/33261708016722548_625643483.JPG?type=m510',
          image3: 'https://shop-phinf.pstatic.net/20210920_86/1632125868552sRsrs_JPEG/33261696369328993_575445067.JPG?type=f40',
          image4: 'https://shop-phinf.pstatic.net/20210920_44/1632125855316mSSlB_JPEG/33261683132631502_590632551.JPG?type=f40',
        },
        {
          id: 'p3',
          image:
            'https://shop-phinf.pstatic.net/20210906_56/1630913830178OIiOV_JPEG/32049672821869873_1432798474.JPG?type=m510',
          name:
            '[3컬러/청순/러블리] 엔젤 리본 타이bl',
          price: ' 19,500원',
          sale: '26,000원',
          percent: '25%',
          image2: 'https://shop-phinf.pstatic.net/20210906_82/1630913423886zSJW2_JPEG/32049266529526300_1765002502.JPG?type=f40',
          image3: 'https://shop-phinf.pstatic.net/20210906_280/1630913845619p6sjW_JPEG/32049688074282392_1030250337.JPG?type=f40',
          image4: 'https://shop-phinf.pstatic.net/20210906_185/1630913905781cTcdx_JPEG/32049747783809697_841877947.JPG?type=f40',
        },
        {
          id: 'p4',
          image:
            'https://shop-phinf.pstatic.net/20210901_21/1630474070340jcEaU_JPEG/31609912957691625_1453441604.JPG?type=m510',
          name:
            '[set가격/가성비갑] 진주 패턴 트위드 자켓 스커트 투피스 세트',
          price: ' 41,000원',
          sale: '50,000원',
          percent: '18%',
          image2: 'https://shop-phinf.pstatic.net/20200603_271/1591191232859lutnx_JPEG/28554621270595644_434793565.JPG?type=m510',
          image3: 'https://shop-phinf.pstatic.net/20210901_139/1630474077457iC3pH_JPEG/31609920062744416_233762961.JPG?type=f40',
          image4: 'https://shop-phinf.pstatic.net/20210901_143/1630474055283pstbQ_JPEG/31609897939605659_1581728040.JPG?type=f40',
        },
        {
          id: 'p5',
          image:
            'https://shop-phinf.pstatic.net/20200603_271/1591191232859lutnx_JPEG/28554621270595644_434793565.JPG?type=m510',
          name:
            '[무배] 시스루 브이넥 리본끈 랩 블라우스',
          price: ' 34,500원',
          sale: '40,000원',
          percent: '13%',
          image2: 'https://shop-phinf.pstatic.net/20200603_182/1591191254169YoLbG_JPEG/28554642673086662_526916933.JPG?type=f40',
          image3: 'https://shop-phinf.pstatic.net/20200603_271/1591191232859lutnx_JPEG/28554621270595644_434793565.JPG?type=f40',
          image4: 'https://shop-phinf.pstatic.net/20200603_271/1591191232859lutnx_JPEG/28554621270595644_434793565.JPG?type=m510',
        },
        {
          id: 'p6',
          image:
            'https://shop-phinf.pstatic.net/20201229_201/1609227461030eEiT4_JPEG/10363356537654613_519280438.JPG?type=m510',
          name:
            '하운드 체크 진주단추 니트가디건 스커트 투피스 세트',
          price: ' 25,500원',
          sale: '36,000원',
          percent: '29%',
          image2: 'https://shop-phinf.pstatic.net/20201229_30/16092274728443GjxP_JPEG/10363368070848097_1234861574.JPG?type=f40',
          image3: 'https://shop-phinf.pstatic.net/20201229_154/1609227482979AbzS0_JPEG/10363378698382768_1273986180.JPG?type=m510',
          image4: 'https://shop-phinf.pstatic.net/20201229_154/1609227482979AbzS0_JPEG/10363378698382768_1273986180.JPG?type=f40',
        },
        {
          id: 'p7',
          image:
            'https://shop-phinf.pstatic.net/20200713_155/1594649590461Lutdu_JPEG/32010328833749444_849451809.JPG?type=m510',
          name:
            '[무배] 7센치 발등스트랩 샌들 슬리퍼',
          price: ' 39,000원',
          sale: '45,000원',
          percent: '13%',
          image2: 'https://shop-phinf.pstatic.net/20200708_3/15941928447612nTcb_JPEG/31552679279800900_1341692221.JPG?type=f40',
          image3: 'https://shop-phinf.pstatic.net/20200708_257/1594192863316VVmes_JPEG/31552697806265224_213691342.JPG?type=f40',
          image4: 'https://shop-phinf.pstatic.net/20200713_231/1594649597266Aqw2b_JPEG/32010335792457116_498293309.JPG?type=f40',
        },
      ],
    };
  },
  getters: productsGetters,
};
