<script setup lang="ts">
// Packages
import { parseColor } from "@ark-ui/vue/color-picker";
import { ref } from "vue";

// Components
import ColorPicker from "./index.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const value = ref("rgba(0, 0, 0, 1)");
</script>

<template>
  <ColorPicker v-bind="props" @valueChange="value = $event.valueAsString" />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">{{ value }}</p>
</template>
