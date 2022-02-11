<template>
  <header class="item-list-header">
    <div class="headbar" :class="{ 'hidden-headbar': !showHeadbar }">
      <router-link to="/"><h1>SEMININ</h1></router-link>
    </div>
  </header>
</template>
<script>
const OFFSET = 60;
export default {
  name: 'TheHeader',
  data() {
    return {
      showHeadbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
    const viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    viewportMeta.content = 'width=device-width, initial-scale=1';
    document.head.appendChild(viewportMeta);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showHeadbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
<style>
header{
  display: flex;
  align-items: center;
  justify-content:center;
  background-color:white;
  box-shadow:0px 4px 9px rgb(239 239 242);
  height: 60px;
  border-bottom: 1px solid #ddd;
}
h1{
  color: black;
  font-size:28px;
  margin-top: 25px;
}
.headbar {
  width: 100%;
  background: white;
  position: fixed;
  box-shadow:0px 4px 9px rgb(239 239 242);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.headbar.hidden-headbar {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
