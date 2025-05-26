<script setup lang="ts">
// Packages
import { AngleSlider, useAngleSlider } from "@ark-ui/vue/angle-slider";
import { Field } from "@ark-ui/vue/field";
import { computed } from "vue";

// Styles
import {
  LabelStyles,
  MarkerStyles,
  ProgressCircleStyles,
  RootStyles,
  ThumbContainerStyles,
  ThumbStyles,
  ValueTextStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles.ts";

// Types
import { AngleSliderDirEnum } from "./types";
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

// Props
const {
  className = "",
  dir = AngleSliderDirEnum.LTR,
  disabled,
  label,
  markers,
  modelValue,
  size,
  strokeWidth,
  thumbSize,
  unit,
  validationState,
  withField,
  ...rest
} = defineProps<Props>();

// Emits
const emit = defineEmits<{
  (
    e: "update:modelValue",
    value: { value: number; valueAsDegree: string },
  ): void;
}>();

// Hooks
const angleSlider = useAngleSlider({
  ...rest,
  dir,
  onValueChange: (details) => emit("update:modelValue", details),
});

// Computed
const element = computed(() => {
  return withField ? Field.Root : "div";
});

const center = computed(() => size / 2);
const radius = computed(() => (size - strokeWidth) / 2);

const circumference = computed(() => 2 * Math.PI * radius.value);

const strokeDashoffset = computed(() => {
  const percent = angleSlider.value.value / 360;
  return circumference.value * (1 - percent);
});
</script>

<template>
  <component
    :class="className"
    :disabled="disabled"
    :invalid="validationState === ValidationStateEnum.Invalid"
    :is="element"
  >
    <AngleSlider.RootProvider :value="angleSlider">
      <div :class="RootStyles">
        <AngleSlider.Control class="angle-slider-control relative">
          <svg
            :height="size"
            :style="{ transform: 'rotate(-90deg)' }"
            :width="size"
            class="angle-slider-circle block"
          >
            <!-- Background circle -->
            <circle
              :cx="center"
              :cy="center"
              :r="radius"
              :stroke-width="strokeWidth"
              class="angle-slide-background-circle text-neutral-secondary-700"
              fill="none"
              stroke="currentColor"
            />
            <!-- Progress circle -->
            <circle
              :class="ProgressCircleStyles"
              :cx="center"
              :cy="center"
              :r="radius"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="strokeDashoffset"
              :stroke-width="strokeWidth"
              fill="none"
              stroke-linecap="round"
              stroke="currentColor"
            />
          </svg>
          <AngleSlider.Thumb
            :class="ThumbContainerStyles"
            :style="{ width: `${thumbSize}px` }"
          >
            <span
              :class="ThumbStyles"
              :style="{ height: `${thumbSize}px`, width: `${thumbSize}px` }"
            ></span>
          </AngleSlider.Thumb>
          <AngleSlider.MarkerGroup v-if="markers">
            <AngleSlider.Marker
              v-for="value in markers"
              :class="[ThumbContainerStyles, 'angle-slider-marker-container']"
              :key="value"
              :style="{ width: `${thumbSize}px` }"
              :value="value"
            >
              <span
                :class="MarkerStyles"
                :style="{ height: `${thumbSize}px`, width: `${thumbSize}px` }"
              ></span>
            </AngleSlider.Marker>
          </AngleSlider.MarkerGroup>
        </AngleSlider.Control>
        <AngleSlider.ValueText :class="ValueTextStyles">
          <span>{{ modelValue }}</span>
          <span v-if="unit" class="ml-1">{{ unit }}</span>
        </AngleSlider.ValueText>
        <AngleSlider.Label :class="LabelStyles">
          {{ label }}
        </AngleSlider.Label>
        <AngleSlider.HiddenInput />
      </div>
    </AngleSlider.RootProvider>
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
