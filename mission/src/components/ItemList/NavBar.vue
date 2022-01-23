<template>
  <footer class="item-list-nav">
    <li class="nav_category"
    v-for="category in categorys"
    :key="category.category_id">
      <html v-html="category.image"></html>
      <span class="material-icons">{{category.name}}</span>
    </li>
  </footer>
</template>
<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      categorys: [
        {
          category_id: 'c1',
          name: '홈',
          image: '<i class="fas fa-home"></i>',
        },
        {
          category_id: 'c2',
          name: '찜목록',
          image: '<i class="far fa-heart"></i>',
        },
        {
          category_id: 'c3',
          name: '장바구니',
          image: '<i class="fas fa-shopping-cart"></i>',
        },
        {
          category_id: 'c4',
          name: '마이페이지',
          image: '<i class="far fa-user-circle"></i>',
        },
      ],
    };
  },
};
</script>
<style>
footer{
  list-style: none;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color:white;
  height: 60px;
}
.nav_category{
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
</style>
