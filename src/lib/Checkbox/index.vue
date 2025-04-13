<script setup lang="ts">
// Packages
import { Checkbox as ArkCheckbox } from "@ark-ui/vue";

// Styles
import {
  ContainerStyles,
  DescriptionStyles,
  ErrorMessageStyles,
  InputStyles,
  LabelStyles,
  PathStyles,
  VectorStyles,
} from "./styles";

// Types
import { CheckboxValidationStateEnum } from "./types";
import type { Props } from "./types";

// Props
const {
  className = "",
  description,
  errorMessage,
  name,
  validationState,
  value,
  ...rest
} = defineProps<Props>();
</script>

<template>
  <div :class="[className, ContainerStyles]">
    <ArkCheckbox.Root
      v-bind="rest"
      @update:checked="($event) => $emit('update:checked', $event)"
      :class="InputStyles"
      :data-invalid="validationState === CheckboxValidationStateEnum.Invalid"
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
    <div v-if="description" :class="DescriptionStyles">{{ description }}</div>
    <div
      v-if="
        errorMessage && validationState === CheckboxValidationStateEnum.Invalid
      "
      :class="ErrorMessageStyles"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>
