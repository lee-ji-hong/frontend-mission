<template>
    <div class="wrap-inuput-bar" >
        <div class="input-bar">
            <input type="text" v-model="inputText" />
            <button class="rotate_btn" @click="rotateButton">회전</button>
            <button>클릭횟수</button>
            <p>{{inputText}}</p>
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
      inputText: this.defaultText,
    };
  },
  methods: {
    rotateButton() {
      this.inputText = this.inputText.slice(1) + this.inputText.slice(0, 1);
    },
  },
};
</script>