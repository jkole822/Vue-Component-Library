<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Checkbox from "./index.vue";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const { value, ...rest } = defineProps<Props>();

// State
const checked = ref(false);

// Helpers
const handleChange = (value: boolean) => {
  checked.value = value;
};
</script>

<template>
  <Checkbox v-bind="rest" @update:checked="handleChange" :value="checked" />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="PararaphStyles">{{ checked ? "Checked" : "Not Checked" }}</p>
</template>
