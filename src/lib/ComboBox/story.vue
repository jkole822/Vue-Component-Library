<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Button from "../Button/index.vue";
import ComboBox from "./index.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

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
  <ComboBox
    v-bind="rest"
    v-model="value"
    :validationState="validationState"
    :withField="withField"
  />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">Selected Item IDs:</p>
  <div class="flex flex-col gap-0.5 mt-1 text-sm">
    <span v-for="val in value" :key="val">{{
      items.find((item) => item.value === val)?.label ?? ""
    }}</span>
  </div>
  <Button v-if="withField" @click="toggleValidationState" className="mt-10"
    >Toggle Validation State</Button
  >
</template>
