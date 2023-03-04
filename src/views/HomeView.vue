<template>
  <div class="home">
    <div class="btns">
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

const increaseCounter = () => {
  counter.value++;
};

const decreaseCounter = () => {
  counter.value--;
};
</script>

<!-- <script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
};
</script> -->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.btns {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
