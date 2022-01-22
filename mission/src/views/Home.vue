<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <LeftRotateString/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import LeftRotateString from '@/components/LeftRotateString.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    LeftRotateString,
  },
};
</script>
