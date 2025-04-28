<script setup lang="ts">
// Packages
import { onMounted, onBeforeUnmount, ref } from "vue";

// Components
import Progress from "./index.vue";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const value = ref(0);
let frame: number | null = null;

// Lifecycle
onMounted(() => {
  const updatePercentage = () => {
    if (value.value === 100) return;
    value.value += 1;
    frame = requestAnimationFrame(updatePercentage);
  };

  frame = requestAnimationFrame(updatePercentage);
});

onBeforeUnmount(() => {
  if (frame !== null) {
    cancelAnimationFrame(frame);
  }
});
</script>

<template>
  <Progress v-bind="props" :value="value"></Progress>
</template>
