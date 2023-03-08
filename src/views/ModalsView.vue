<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label>
        Show dark modals?
        <input type="checkbox" v-model="showDarkModals" />
      </label>
    </div>
    <button @click="showModal = true">Show modal</button>
    <component
      :is="showDarkModals ? ModalDark : Modal"
      v-model="showModal"
      title="My modal title (via prop)"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        nulla, voluptatem maxime placeat omnis! Quis, quisquam aut tempora
        dignissimos ex in, nobis a consequatur necessitatibus, beatae dicta
        vitae nihil?
      </p>
    </component>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";

/*
  props
*/

/*
  modals
*/
const showDarkModals = ref(false);
const showModal = ref(false);
</script>
