<script setup lang="ts">
// Packages
import { computed } from "vue";
import { Field } from "@ark-ui/vue/field";
import { Slider } from "@ark-ui/vue/slider";

// Styles
import {
  LabelStyles,
  MarkerStyles,
  RangeStyles,
  RootStyles,
  ThumbStyles,
  TrackStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles.ts";

import type { Props } from "./types";
// Types
import { SliderDirEnum, SliderOrientationEnum } from "./types";
import { ValidationStateEnum } from "../../types";

// Props
const {
  className = "",
  description,
  dir = SliderDirEnum.LTR,
  disabled,
  errorMessage,
  orientation = SliderOrientationEnum.Horizontal,
  markers,
  modelValue,
  name,
  thumbSize = {
    height: 20,
    width: 20,
  },
  validationState,
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
    :invalid="validationState === ValidationStateEnum.Invalid"
    :is="element"
  >
    <Slider.Root
      v-bind="rest"
      @update:modelValue="$emit('update:modelValue', $event)"
      :disabled="disabled"
      :dir="dir"
      :modelValue="modelValue"
      :orientation="orientation"
      :thumbSize="thumbSize"
    >
      <Slider.Label :class="LabelStyles">{{ name }}</Slider.Label>
      <Slider.Control :class="RootStyles">
        <Slider.Track :class="TrackStyles">
          <Slider.Range :class="RangeStyles" />
        </Slider.Track>
        <Slider.Thumb
          v-for="(_, index) in modelValue"
          :class="ThumbStyles"
          :index="index"
          :key="index"
        >
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
      <Slider.MarkerGroup
        v-if="
          !!markers &&
          Array.isArray(markers) &&
          orientation !== SliderOrientationEnum.Vertical
        "
        class="bottom-2"
      >
        <Slider.Marker
          v-for="marker in markers"
          :class="MarkerStyles"
          :key="marker"
          :value="marker"
          >{{ marker }}</Slider.Marker
        >
      </Slider.MarkerGroup>
    </Slider.Root>
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
