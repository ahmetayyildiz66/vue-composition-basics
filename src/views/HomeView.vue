<template>
  <div class="home">
    <h3>{{ counterData.title }}</h3>

    <div class="btns">
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// const counter = ref(0);
// const counterTitle = ref("My counter");

const counterData = reactive({
  count: 0,
  title: "MY Counter",
});

const increaseCounter = () => {
  counterData.count++;
};

const decreaseCounter = () => {
  counterData.count--;
};
</script>

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

.edit {
  margin-top: 60px;
}
</style>
