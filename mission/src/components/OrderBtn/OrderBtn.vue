<template>
  <router-link to="/order">
    <footer>
    <input class="order-btn" type="button" value="결제하기" onclick="idPwCheck()"/>
    </footer>
  </router-link>
</template>

<style scoped>
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
