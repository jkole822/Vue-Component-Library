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
const checkedState = ref(false);

// Helpers
const handleChange = () => {
  checkedState.value = !checkedState.value;
};
</script>

<template>
  <Checkbox @checked="handleChange" :value="checkedState" v-bind="rest" />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="PararaphStyles">{{ checkedState ? "Checked" : "Not Checked" }}</p>
</template>
