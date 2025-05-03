<script setup lang="ts">
// Packages
import { computed } from "vue";
import { Checkbox as ArkCheckbox } from "@ark-ui/vue";
import { Field } from "@ark-ui/vue/field";

// Styles
import {
  ContainerStyles,
  InputStyles,
  LabelStyles,
  PathStyles,
  VectorStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

// Props
const {
  className = "",
  description,
  disabled,
  errorMessage,
  name,
  readOnly,
  required,
  validationState,
  value,
  withField,
  ...rest
} = defineProps<Props>();

// Computed
const element = computed(() => (withField ? Field.Root : "div"));
</script>

<template>
  <component
    :class="[className, ContainerStyles]"
    :disabled="disabled"
    :is="element"
    :invalid="validationState === ValidationStateEnum.Invalid"
    :readOnly="readOnly"
    :required="required"
  >
    <ArkCheckbox.Root
      v-bind="rest"
      @update:checked="$emit('update:checked', $event)"
      :class="InputStyles"
      :data-invalid="validationState === ValidationStateEnum.Invalid"
      :disabled="disabled"
      :value="value ? 'on' : 'off'"
    >
      <svg :class="VectorStyles" viewBox="0 0 64 64" height="2em" width="2em">
        <path
          :class="PathStyles"
          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
          pathLength="575.0541381835938"
        ></path>
      </svg>
      <ArkCheckbox.HiddenInput />
      <ArkCheckbox.Label :class="LabelStyles">{{ name }}</ArkCheckbox.Label>
    </ArkCheckbox.Root>
    <div v-if="withField" class="ml-2 mt-1">
      <Field.HelperText v-if="description" :class="DescriptionStyles">
        {{ description }}
      </Field.HelperText>
      <Field.ErrorText v-if="errorMessage" :class="ErrorMessageStyles">
        {{ errorMessage }}
      </Field.ErrorText>
    </div>
  </component>
</template>
