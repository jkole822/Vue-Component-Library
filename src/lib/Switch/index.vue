<script setup lang="ts">
// Packages
import { computed } from "vue";
import { Switch } from "@ark-ui/vue/switch";
import { Field } from "@ark-ui/vue/field";

// Styles
import {
  ContainerStyles,
  ControlStyles,
  FlexContainerStyles,
  LabelStyles,
  SwitchContainerStyles,
  ThumbStyles,
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
  withField,
  ...rest
} = defineProps<Props>();

// Computed
const element = computed(() => (withField ? Field.Root : "div"));
</script>

<template>
  <component
    :class="className"
    :disabled="disabled"
    :is="element"
    :invalid="validationState === ValidationStateEnum.Invalid"
    :readOnly="readOnly"
    :required="required"
  >
    <Switch.Root
      v-bind="rest"
      @update:checked="$emit('update:checked', $event)"
      :class="ContainerStyles"
      :disabled="disabled"
    >
      <div :class="FlexContainerStyles">
        <div :class="SwitchContainerStyles">
          <Switch.Control :class="ControlStyles">
            <Switch.Thumb :class="ThumbStyles" />
          </Switch.Control>
        </div>
        <Switch.Label :class="LabelStyles">{{ name }}</Switch.Label>
      </div>
      <Switch.HiddenInput />
    </Switch.Root>
    <div v-if="withField" class="mt-4">
      <Field.HelperText v-if="description" :class="DescriptionStyles">
        {{ description }}
      </Field.HelperText>
      <Field.ErrorText v-if="errorMessage" :class="ErrorMessageStyles">
        {{ errorMessage }}
      </Field.ErrorText>
    </div>
  </component>
</template>
