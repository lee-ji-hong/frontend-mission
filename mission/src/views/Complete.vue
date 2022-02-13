<template>
  <div id='complete-page' data-test='info-page'>
    <div>
      <img class="complete-image" alt="완료이미지" src="../assets/warning.png"/>
    </div>
    <div class="complete-description">
      <p> 결제가 완료되었습니다 </p>
    </div>
    <router-link to="/">
      <div>
      <input class="complete-btn" type="button" value="홈으로 돌아가기" onclick="idPwCheck()"/>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CompletePage',
};
</script>

<style>
#complete-page{
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.complete-image{
  height: 100px;
}
.complete-description{
  margin: 20px;
  font-weight: 900;
}
.complete-btn{
  width: 200px;
  height: 50px;
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
