<script setup lang="ts">
// Packages
import { Field } from "@ark-ui/vue/field";

// Styles
import { ContainerStyles, InputStyles, LabelStyles } from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { InputTypeEnum } from "./types";
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

// Props
const {
  autoComplete,
  className = "",
  description,
  errorMessage,
  modelValue,
  name,
  raiseLabel,
  type = InputTypeEnum.text,
  validationState = ValidationStateEnum.Valid,
  ...rest
} = defineProps<Props>();
</script>

<template>
  <Field.Root
    v-bind="rest"
    :class="[className, ContainerStyles]"
    :invalid="validationState === ValidationStateEnum.Invalid"
  >
    <Field.Input
      @input="$emit('update:modelValue', $event.target?.value)"
      :auto-complete="autoComplete"
      :class="InputStyles"
      :data-has-value="!!modelValue || raiseLabel"
      :modelValue="modelValue"
      :type="type"
    />
    <Field.Label :class="LabelStyles">{{ name }}</Field.Label>
    <div className="mt-2">
      <Field.HelperText v-if="description" :class="DescriptionStyles">
        {{ description }}
      </Field.HelperText>
      <Field.ErrorText v-if="errorMessage" :class="ErrorMessageStyles">
        {{ description }}
      </Field.ErrorText>
    </div>
  </Field.Root>
</template>
