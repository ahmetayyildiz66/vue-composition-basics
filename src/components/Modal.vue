<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button @click="handleButtonClick">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
/*
  props
*/
const props = defineProps({
  title: {
    type: String,
    default: "hey",
  },
});

/*
  emits
*/
const emit = defineEmits(["hideModal"]);

const handleButtonClick = () => {
  emit("hideModal");
};
</script>

<style scoped>
.modal {
  background: beige;
  color: darkgray;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
