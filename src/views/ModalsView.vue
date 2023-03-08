<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal" title="My modal title (via prop)">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        nulla, voluptatem maxime placeat omnis! Quis, quisquam aut tempora
        dignissimos ex in, nobis a consequatur necessitatibus, beatae dicta
        vitae nihil?
      </p>
    </Modal>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

/*
  modals
*/
const showModal = ref(false);
</script>
