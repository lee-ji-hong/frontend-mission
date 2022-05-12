# 🆎frontend-mission

## 프로젝트 소개 
에이블리와 멋쟁이 사자들처럼에서 진행하는 CleanCode TDD,Vue.js 기반으로 교육형 익스턴십 프로그래밍 프로젝트 입니다. FE Externship 1기로 참가하여 주차별 미션을 진행하여 에이블리 모바일 웹 사이트를 구현했습니다.  

## 이 프로젝트를 통해 배운점 & 문제 해결  
- 처음으로 vue 라이브러리와 jest 사용을 해봤습니다.
- 기본적인 vue 라이프사이클 훅을 사용하여 구현했습니다. 

## 주차별 구현 내용
### 1주차 - Boilerplate코드에서 일부를 수정하여 개발 페이지에 띄우기 & Vue.js 개발 환경 세팅하기
![Hnet-image](https://user-images.githubusercontent.com/88364280/156966836-a682f96c-18e5-4846-856c-ee17c3235d32.gif)


### 접근 방법
 - 미션 코드를 구현하기 위해서 어떤 생각들을 했는지 정리해보세요.
- 코드에 가독성과 이해도를 높이기 위해 commit메세지 기본 규칙에 따라 적용하려고 했습니다.
- TDD 작성 원칙에 의해 최소한의 기능들을 구현한 후 테스트 하려고 했습니다.

### 느낀점 
- vue를 이용해서 개발하는 것이 처음이라 과제진행을 하면서 생기는 오류들을 처음 접하는 것들이었습니다. 구글링하면서 오류 코드 수정하고 전체 기능들 또한 공부하면서 동시에 과제 수행을 해나가야 했습니다. 이 과정에서 시간 분배를 잘 못한 점이 아쉬웠지만 1주차 과제를 통해 vue에대해 어느정도 숙지를 한것 같아 재미있었습니다
- 또한 TDD를 통해 코딩하는 것도 처음 시도해보게 되었는데,그 과정에서 여러가지 vue 공식문서나 유튜브를 참고해서 실행했는데, 조금더 클린한 코드를 짜지 못한거 같아 아쉬웠습니다.
- 회전문자열과 alert창 구현을 같은 component에서 진행하고 테스트 했던 점이 좀 아쉽게 느껴집니다. 

### code presentation 

 https://drive.google.com/file/d/1fCSrUfxCfLk_kyU5xTElBlnDmdUIrPZK/view
## 

### 2주차 - Component 설계(에이블리 상품 상페 페이지 1차)

![Hnet-image (1)](https://user-images.githubusercontent.com/88364280/156967875-3ff0b306-b39b-4179-add2-8460a7487a98.gif)


### 접근 방법
- 하나의 팀이 만들어 졌다고 생각했을때 소통의 오류가 생기지 않도록 요구사항을 세부적으로 나누어 기능을 구현하려 하였습니다.
- 코드의 불필요한 반복을 줄여 유지보수할 시 코드를 읽는데 어려움이 없도록 하였습니다.
- 페이지 이동할 시 동적 라우팅 매칭을 이용하여 동적인 시각적 요구사항을 도출하는 것에 신경썼습니다.
- 상품리스트업 기능을 구현 한 후 상세페이지로 로딩이 된다고 생각이 되어서 상세페이지 구현하기 전 상품 리스트페이지를 먼저 만든 후 데이터를 전달하는 방식으로 구현하였습니다.

![엑셀](https://user-images.githubusercontent.com/88364280/149670659-d47cfe74-2951-4ea2-9d4f-2d4958833bb3.png)

### 느낀점 
- vue 프레임 워크 내에서 동적 라우팅 매칭을 하는 방법이 어떤식으로 이루어지는지 잘 이해가 가지 않았습니다. 유튜브나 공식문서를 보며 따라하며 주먹구구식으로 구현해보았는데 올바른 방법인지는 확신이 들지 않아 조금 더 알아볼 필요가 있을것 같습니다. 
### code presentation 

https://drive.google.com/file/d/1cpzVyuyIAHUU_4rpSpKvoNfXvcFiS7ZU/view
##
### 3주차 - Component 설계 심화(에이블리 상품 목록 페이지)

![Hnet com-image (1)](https://user-images.githubusercontent.com/88364280/156965257-26c6ff80-a25e-429a-8fc5-86a89c35d978.gif)

### 접근 방법
- 원래는 기획자가 해야하는 일이라고 알고 있지만 초기 프로젝트라는 가정하에 직접 프론트엔드에서 프로토타입을 제작한다고 가정하였습니다.  
- 요구사항 명세를 이용해 간단하게 상세정보 페이지에 대한 기획서를 작성했습니다.
![20220124_134852](https://user-images.githubusercontent.com/88364280/150723742-f19dd3c2-edd7-48b0-a9c6-fe4f558af8bc.png)


- 페이지 제작 전 요구사항 명세를 목록별로 세분화해 기능별 구현이 제대로 되도록 작성하였습니다.

![image](https://user-images.githubusercontent.com/88364280/150719049-df3cb4bd-49ff-4171-8274-8a0d63684b3f.png)

- 코드의 재사용성을 높이고 유지보수성과 유연성을 고려하여 부모컴포넌트인 ItemLIst 아래에 자식 컴포넌트를 기능별로 각각 나누는 방식으로 구현하도록 하였습니다. 
- 재사용성을 위해 구현한 컴포넌트들을 부모컴포넌트와 라우팅하는 방식으로 구현하였습니다.
- 헤더 컴포넌트를 구현할때 헤더가 보이고 사라지는 동작들을 Lifrcycle Hook을 이용해 헤더 컴포넌트가 가 동작할 때 mounted를 주어 부모 컴포넌트에 전달되게 하고, 해당 component가 동작이 해체되기 직전에 beforeunmounted훅이 호출되게 하여 method 속성에 접근하는 방식으로  구현하였습니다. 
- 컴포넌트들을 세분화해 작업한 만큼 테스트파일을 각각 생성해 테스트 해주는 방식으로 구현해주었습니다.

### 느낀점 
-vue.js의 특성상 개발 규모가 커질수록 코드가 방대하고 복잡해지는 단점이 있는데 이것을 해결하기 위한 composition API컴포넌트를 사용하여 유지보수성과 유연성을 조금 더 해결하지 못한 부분이 아쉽습니다.  
### code presentation 

https://drive.google.com/file/d/1jNcyPSXgkje_8Y6iCNw8GxebxpGEoSgb/view
##

### 4주차 - 페이지 라우팅 및 API 연동
![Hnet-image](https://user-images.githubusercontent.com/88364280/156968689-ca8e3334-9020-4d60-a914-a5dfe8125da7.gif)


### 접근 방법
-  vue-router를 동적 라우팅 매칭을 통하여 Single Page Application (이하 SPA)에서 서로 다른 화면을 상호작용에 따라 전환할 수 있도록 구현하였습니다.

- API호출을 할 때 미션 요구사항인 Repository pattern 통한 연동은 처음이라 해당 부분에 대해 알아보고 정리 후 개발을시작했습니다.

1. [Repository Pattern이란?](https://coding-ocean.tistory.com/27?category=908415)
2.  [Vue.js에서 Repository pattern적용방법](https://coding-ocean.tistory.com/28?category=908415)

- Repository pattern을 통하여 API 연동을 사용했고 Axios HTTP client를 사용했습니다. 
- 라우팅을 실행할 때 "Using a Real Router " 방법을 적용하여 테스트 하도록 노력했습니다. 

### 느낀점 
 - Using a Real Router " 방법을 적용하여 테스트를 진행해보긴 했지만 확실히 체득은 안된 것 같습니다. 연습이 많이 필요함을 느꼈습니다.
- 추가 미션인 구현되지 않은 다른 페이지들을 개발하고 API연동까지 하지 못해 아쉽습니다. 
### code presentation 

https://drive.google.com/file/d/1FQJmWz26WrCZ0Sw6up6JF_9fMApTJulY/view
##

### 5주차 - 상태관리, 상품 주문 프로세스 구현
![Hnet-image (1)](https://user-images.githubusercontent.com/88364280/156969604-9e87b4d4-1115-4315-b56b-a2e63ef5614e.gif)


### 접근 방법
- 유지보수성을 높이기 위해 테스트코드를 작성 후 페이지들을 구현했습니다. 

- 일부 페이지는 api에서 데이터를 받아오고 장바구니에서는 로컬로 데이터를 받아오게 되는데 여기에서 필요한 부분에 store를 이용해 데이터를 받아오도록 했습니다. 

> 장바구니 페이지 ( Cart.vue)
```
    <Header>장바구니</Header>
    <main>
      <div>
        <CartItem
        v-for="item in storedCart"
        :id="item.product_no"
        :name="item.name"
        :original_price="item.original_price"
        :description="item.description"
        :key="item.product_no"
        ></CartItem>
      </div>
    </main>
    <OrderBtn/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Header from '../components/ItemList/Header.vue';
import CartItem from '../components/Cart/CartItem.vue';
import OrderBtn from '../components/OrderBtn/OrderBtn.vue';
export default {
  name: 'OrderPage',
  components: {
    Header, CartItem, OrderBtn,
  },
  computed: {
    ...mapGetters(['storedCart']),
````
> 결제 페이지 ( Order.vue)
```
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
```
- store파일 생성 후 장바구니, 결제페이지, 결제완료 페이지 순서대로 구현했습니다. 
- 장바구니 목록 정보가 결제 화면에서 활용이 되도록 하였습니다.
- 결제 화면에서 현재 사용자가 주문하는 상품들의 목록을 다시 보여주고, 그로 인해 총 예상 금액이 나오도록 구현했습니다. 
- 결제 화면에서 구매 버튼을 누르면 결제 완료 페이지로 넘어가도록 구현했습니다. 
### 느낀점 
-장바구니 담기 버튼을 누르면 장바구니에 추가되는 기능에 대해 많이 고민해봤지만, 구현하지 못해 아쉽습니다. 장바구니 버튼을 클릭하면 action을 이용해서 데이터가 장바구니 페이지에 전달되도록 코드를 짰는데 버튼을 클릭하면 계속해서 id값을 읽어오지 못했다는 에러가 떴습니다. 이번 과제를 하면서 store에 대해 이해가 부족하다고 생각이 들었고,  또한 javascript도 많이 부족하다는 것이 느껴졌습니다.

### code presentation 

https://drive.google.com/file/d/11BVIEpn8Z9o1UPhTvPRNPFIcUyqWxOI-/view
##
