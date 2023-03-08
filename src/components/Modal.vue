<template>
  <teleport to=".modals-container">
    <div class="modal">
      <h1>{{ title }}</h1>
      <slot />
      <button>Hide modal</button>
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
