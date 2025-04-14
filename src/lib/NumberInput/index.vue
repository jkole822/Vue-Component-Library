<script setup lang="ts">
// Packages
import { computed } from "vue";
import { Field } from "@ark-ui/vue/field";
import { NumberInput as ArkNumberInput } from "@ark-ui/vue/number-input";

// Styles
import {
  ControlStyles,
  DecrementTriggerStyles,
  DescriptionStyles,
  ErrorMessageStyles,
  IncrementTriggerStyles,
  InputContainerStyles,
  InputStyles,
  LabelStyles,
} from "./styles";

// Types
import { NumberInputValidationStateEnum } from "./types";
import type { Props } from "./types";

// Props
const {
  className = "",
  disabled,
  name,
  readOnly,
  required,
  withField,
  ...rest
} = defineProps<Props>();

// Computed
const element = computed(() => {
  return withField ? Field.Root : "div";
});
</script>

<template>
  <component
    :class="className"
    :disabled="disabled"
    :invalid="validationState === NumberInputValidationStateEnum.Invalid"
    :is="element"
    :readOnly="readOnly"
    :required="required"
  >
    <ArkNumberInput.Root
      v-bind="rest"
      @update:modelValue="$emit('update:value', $event)"
      :disabled="disabled"
    >
      <ArkNumberInput.Label :class="LabelStyles">{{
        name
      }}</ArkNumberInput.Label>
      <div :class="InputContainerStyles">
        <ArkNumberInput.Input :class="InputStyles" />
        <ArkNumberInput.Control :class="ControlStyles">
          <ArkNumberInput.IncrementTrigger :class="IncrementTriggerStyles">
            <i aria-hidden="true" class="fa-solid fa-chevron-up"></i>
          </ArkNumberInput.IncrementTrigger>
          <ArkNumberInput.DecrementTrigger :class="DecrementTriggerStyles">
            <i aria-hidden="true" class="fa-solid fa-chevron-down"></i>
          </ArkNumberInput.DecrementTrigger>
        </ArkNumberInput.Control>
      </div>
    </ArkNumberInput.Root>
    <Field.HelperText
      v-if="withField && description"
      :class="DescriptionStyles"
    >
      {{ description }}
    </Field.HelperText>
    <Field.ErrorText
      v-if="withField && errorMessage"
      :class="ErrorMessageStyles"
    >
      {{ errorMessage }}
    </Field.ErrorText>
  </component>
</template>
