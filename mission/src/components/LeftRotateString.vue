<template>
    <div class="wrap-inuput-bar" >
        <div class="input-bar">
            <input type="text" v-model="customInputText" @input="changeInput"/>
            <button class="rotate_btn" @click="rotateButton">회전</button>
            <button 
            class="counter_btn" 
            v-on:click="showClickedInfo" 
            data-test="clickCounter">
            클릭횟수
            </button>
            <p data-test="customInputText">{{customInputText}}</p>
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
    return {
      customInputText: this.defaultText,
      counter: 0,
    };
  },
  methods: {
    rotateButton() {
      this.customInputText = this.customInputText.slice(1) + this.customInputText.slice(0, 1);
    },
    showClickedInfo() {
      this.counter += 1;
      // eslint-disable-next-line no-alert
      alert(`위 버튼을 클릭한 횟수는 ${this.counter}번 입니다.`);
    },
  },
};
</script>
