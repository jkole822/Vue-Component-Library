<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import AngleSlider from "./index.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const value = ref(props.modelValue);
</script>

<template>
  <AngleSlider v-bind="props" @update:modelValue="value = $event.value" :modelValue="value" />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">{{ value }}</p>
</template>
