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
</script>

<template>
  <Checkbox v-bind="props" v-model:checked="checked" />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">{{ checked ? "Checked" : "Not Checked" }}</p>
</template>
