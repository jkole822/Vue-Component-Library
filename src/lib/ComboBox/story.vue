<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Button from "../Button/index.vue";
import ComboBox from "./index.vue";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import { ComboBoxValidationStateEnum } from "./types";
import type { ComboBoxValidationState, Props } from "./types";

// Props
const { withField, ...rest } = defineProps<Props>();

// State
const value = ref<string[]>([]);
const validationState = ref<ComboBoxValidationState>(
  ComboBoxValidationStateEnum.Valid
);

// Helpers
const toggleValidationState = () => {
  validationState.value =
    validationState.value === ComboBoxValidationStateEnum.Valid
      ? ComboBoxValidationStateEnum.Invalid
      : ComboBoxValidationStateEnum.Valid;
};
</script>

<template>
  <ComboBox
    v-bind="rest"
    @change="(update) => (value = update.value)"
    :validationState="validationState"
    :withField="withField"
  />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="PararaphStyles">Selected Item IDs:</p>
  <div class="flex flex-col gap-0.5 mt-1 text-sm">
    <span v-for="id in value" :key="id">{{ id }}</span>
  </div>
  <Button v-if="withField" @click="toggleValidationState" className="mt-10"
    >Toggle Validation State</Button
  >
</template>
