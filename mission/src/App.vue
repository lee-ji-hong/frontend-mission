<template>
<ItemInfo/>
  <router-view />
</template>

<script>
// @ is an alias to /src
import ItemInfo from '@/views/ItemInfo.vue';

export default {
  name: 'App',
  components: {
    ItemInfo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
