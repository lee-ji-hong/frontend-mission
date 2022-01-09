/* eslint-disable vue/no-dupe-keys */
<template>
    <div class="wrap-inuput-bar" >
        <div class="input-bar">
            <input type="text" v-model="inputText" />
            <button class="rotate_btn" @click="rotateButton">회전</button>
            <button class="counter_btn" v-on:click="greet">클릭횟수</button>
            <p>{{inputText}}</p>
            <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    defaultText: {
      type: String,
    },
  },
  data() {
    'Vue.js';

    return {
      inputText: this.defaultText,
      counter: 0,
    };
  },
  methods: {
    rotateButton() {
      this.inputText = this.inputText.slice(1) + this.inputText.slice(0, 1);
    },
    greet(event) {
      this.counter += 1;
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      alert(`위 버튼을 클릭한 횟수는 ${this.counter}번 입니다.`);
      // `event` 는 네이티브 DOM 이벤트입니다
      if (event) {
        alert('계속하시겠습니까?');
      }
    },
  },
};
</script>
