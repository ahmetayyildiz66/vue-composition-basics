import { defineStore } from "pinia";

// export const useCounterStore = defineStore("counter", () => {
//   const count = ref(0);
//   const doubleCount = computed(() => count.value * 2);
//   function increment() {
//     count.value++;
//   }

//   return { count, doubleCount, increment };
// });

// It also has options API version
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
    title: "My Counter Title",
  }),
  getters: {
    oddOrEven: (state) => {
      return state.count % 2 === 0 ? "even" : "odd";
    },
  },
  actions: {
    increaseCounter(amount) {
      this.count += amount;
    },
    decreaseCounter() {
      this.count--;
    },
  },
});
