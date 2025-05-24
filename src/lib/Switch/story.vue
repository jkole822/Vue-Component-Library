<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Switch from "./index.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const checked = ref(props.checked);
</script>

<template>
  <Switch v-bind="props" v-model:checked="checked" />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">{{ checked ? "Checked" : "Not Checked" }}</p>
</template>
