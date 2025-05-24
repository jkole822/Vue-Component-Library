<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Slider from "./index.vue";

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
  <Slider v-bind="props" v-model="value" />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">{{ value }}</p>
</template>
