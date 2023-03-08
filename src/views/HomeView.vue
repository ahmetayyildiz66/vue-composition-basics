<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counterData.title }}</h3>

    <div class="btns">
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button class="btn" @click="increaseCounter(2, $event)">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title" v-autofocus />
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref, onMounted } from "vue";

import { vAutofocus } from "@/directives/vAutofocus";
import { useCounter } from "@/use/useCounter";

/* app title */

const appTitle = "My Amazing Counter App";

const appTitleRef = ref(null);

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth}`);
});

/* counter */

const { counterData, oddOrEven, increaseCounter, decreaseCounter } =
  useCounter();

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
