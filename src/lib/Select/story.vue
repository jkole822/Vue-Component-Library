<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Button from "../Button/index.vue";
import Select from "./index.vue";

// Styles
import { SubHeadingStyles } from "../../styles";

// Types
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";
import type { ValidationState } from "../../types";

// Props
const { withField, ...rest } = defineProps<Props>();

// State
const value = ref<string[]>([]);
const validationState = ref<ValidationState>(ValidationStateEnum.Valid);

// Helpers
const toggleValidationState = () => {
  validationState.value =
    validationState.value === ValidationStateEnum.Valid
      ? ValidationStateEnum.Invalid
      : ValidationStateEnum.Valid;
};
</script>

<template>
  <Select
    v-bind="rest"
    v-model="value"
    :validationState="validationState"
    :withField="withField"
  ></Select>
  <p :class="SubHeadingStyles">Binding Check</p>
  <div class="flex flex-col gap-0.5 mt-1 text-sm">
    <span v-for="id in value" :key="id">{{
      options.find((option) => option.id === id)?.label ?? ""
    }}</span>
  </div>
  <Button v-if="withField" @click="toggleValidationState" className="mt-10"
    >Toggle Validation State</Button
  >
</template>
