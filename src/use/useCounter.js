import { reactive, watch, computed, onMounted, nextTick } from "vue";

export function useCounter() {
  const counterData = reactive({
    count: 0,
    title: "MY Counter",
  });

  watch(
    () => counterData.count,
    (newCount, oldCount) => {
      console.log("newCount: ", newCount);
      console.log("oldCount: ", oldCount);
    }
  );

  const oddOrEven = computed(() => {
    return counterData.count % 2 === 0 ? "even" : "odd";
  });

  const increaseCounter = (amount, event) => {
    counterData.count += amount;
    nextTick(() => {
      console.log("do something when counter has updated in the dom");
    });
  };

  const decreaseCounter = () => {
    counterData.count--;
  };

  onMounted(() => {
    console.log("Do stuff related to Counter");
  });

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
