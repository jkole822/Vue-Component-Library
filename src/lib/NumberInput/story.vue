<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import NumberInput from "./index.vue";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const value = ref<string>("");
</script>

<template>
  <NumberInput
    v-bind="props"
    @update:value="(newValue) => (value = newValue)"
    :modelValue="value"
  />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="PararaphStyles">{{ value }}</p>
</template>
