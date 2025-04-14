<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Input from "./index.vue";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const value = ref("");
</script>

<template>
  <Input v-bind="props" :value="value" />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="PararaphStyles">{{ value }}</p>
</template>
