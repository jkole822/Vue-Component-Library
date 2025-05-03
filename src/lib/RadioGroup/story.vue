<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import RadioGroup from "./index.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const value = ref<string | null>(null);
</script>

<template>
  <RadioGroup
    v-bind="props"
    :onValueChange="(details) => (value = details.value)"
    :value="value ?? ''"
  />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">{{ value }}</p>
</template>
