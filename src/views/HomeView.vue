<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>Hard-coded counter title</h3>

    <div class="btns">
      <button class="btn" @click="counter.decreaseCounter">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button class="btn" @click="counter.increaseCounter(2)">++</button>
    </div>

    <p>{{ counter.title }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counter.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref, onMounted } from "vue";

import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from "../stores/counter";

/* app title */

const appTitle = "My Amazing Counter App";

const appTitleRef = ref(null);

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth}`);
});

/*
  counter
*/
const counter = useCounterStore();

/*
  directives
*/
// v-autofocus
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
