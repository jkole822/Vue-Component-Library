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
  className = "",
  description,
  disabled,
  errorMessage,
  inputClass = "",
  name,
  readOnly,
  required,
  type = InputTypeEnum.text,
  validationState = ValidationStateEnum.Valid,
  value,
  ...rest
} = defineProps<Props>();
</script>

<template>
  <Field.Root
    :class="[className, ContainerStyles]"
    :disabled="disabled"
    :invalid="validationState === ValidationStateEnum.Invalid"
    :readOnly="readOnly"
    :required="required"
  >
    <Field.Input
      v-bind="rest"
      @input="$emit('update:value', $event)"
      :class="[inputClass, InputStyles({ hasValue: !!value })]"
      :type="type"
      :value="value"
    />
    <Field.Label :class="LabelStyles">{{ name }}</Field.Label>
    <Field.HelperText v-if="description" :class="DescriptionStyles">
      {{ description }}
    </Field.HelperText>
    <Field.ErrorText v-if="errorMessage" :class="ErrorMessageStyles">
      {{ description }}
    </Field.ErrorText>
  </Field.Root>
</template>
