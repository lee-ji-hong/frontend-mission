<template>
  <header>
    <h1>
      <router-link to="/">ABLYSHOP</router-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style>

header{
  display: flex;
  align-items: center;
  justify-content:center;
  background-color:white;
/**box-shadow:0px 0px 6px rgba(0,0,0.1); */
}

h1{
  color: #fff;
  font-size:28px;
}

</style>
