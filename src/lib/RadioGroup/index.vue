<script setup lang="ts">
// Packages
import { computed } from "vue";
import { Field } from "@ark-ui/vue/field";
import { RadioGroup as ArkRadioGroup } from "@ark-ui/vue/radio-group";

// Styles
import {
  ContainerStyles,
  GliderContainerStyles,
  GliderStyles,
  InputStyles,
  ItemLabelStyles,
  ItemStyles,
  LabelStyles,
  OptionContainerStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { RadioGroupOrientationEnum } from "./types";
import { ValidationStateEnum } from "../../types";
import type { Props, RadioGroupOrientation } from "./types";

// Props
const {
  className = "",
  description,
  disabled,
  errorMessage,
  items,
  modelValue,
  name,
  orientation = RadioGroupOrientationEnum.Vertical,
  readOnly,
  required,
  validationState,
  withField,
  ...rest
} = defineProps<Props>();

const distance = (orientation: RadioGroupOrientation) =>
  orientation === orientation ? `${100 / items.length}%` : "100%";

// Computed
const element = computed(() => {
  return withField ? Field.Root : "div";
});

const valueIndex = computed(() => items.findIndex((item) => item === modelValue));
</script>

<template>
  <component
    :class="className"
    :disabled="disabled"
    :invalid="validationState === ValidationStateEnum.Invalid"
    :is="element"
    :readOnly="readOnly"
    :required="required"
  >
    <ArkRadioGroup.Root
      v-bind="rest"
      @update:modelValue="$emit('update:modelValue', $event)"
      :class="ContainerStyles"
      :disabled="disabled"
      :modelValue="modelValue"
      :name="name"
      :orientation="orientation"
      :readOnly="readOnly"
    >
      <ArkRadioGroup.Label v-if="withField" :class="LabelStyles">
        {{ name }}
      </ArkRadioGroup.Label>
      <ArkRadioGroup.Indicator :class="InputStyles" />
      <div :class="OptionContainerStyles">
        <div
          role="presentation"
          :style="{
            height: '100%',
            gridTemplateColumns: items.map(() => '1fr').join(' '),
          }"
        >
          <ArkRadioGroup.Item
            v-for="item in items"
            :class="ItemStyles"
            :key="item"
            :value="item"
          >
            <ArkRadioGroup.ItemText :class="ItemLabelStyles">
              {{ item }}
            </ArkRadioGroup.ItemText>
            <ArkRadioGroup.ItemControl />
            <ArkRadioGroup.ItemHiddenInput />
          </ArkRadioGroup.Item>
        </div>
        <div :class="GliderContainerStyles">
          <div
            v-if="modelValue"
            :class="GliderStyles"
            :style="{
              height: distance(RadioGroupOrientationEnum.Vertical),
              transform:
                valueIndex || valueIndex === 0
                  ? `translate${orientation === RadioGroupOrientationEnum.Horizontal ? 'X' : 'Y'}(${valueIndex! * 100}%)`
                  : '',
              width: distance(RadioGroupOrientationEnum.Horizontal),
            }"
          ></div>
        </div>
      </div>
    </ArkRadioGroup.Root>
    <div v-if="withField" class="mt-2">
      <Field.HelperText v-if="description" :class="DescriptionStyles">
        {{ description }}
      </Field.HelperText>
      <Field.ErrorText v-if="errorMessage" :class="ErrorMessageStyles">
        {{ errorMessage }}
      </Field.ErrorText>
    </div>
  </component>
</template>
