<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Checkbox from "./index.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const checked = ref(false);

// Helpers
const handleChange = (value: boolean) => {
  checked.value = value;
};
</script>

<template>
  <Checkbox v-bind="props" @update:checked="handleChange" :value="checked" />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">{{ checked ? "Checked" : "Not Checked" }}</p>
</template>
