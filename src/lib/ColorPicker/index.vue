<script setup lang="ts">
// Packages
import { ColorPicker } from "@ark-ui/vue/color-picker";
import { Field } from "@ark-ui/vue/field";
import { computed } from "vue";

// Styles
import {
  AreaBackgroundStyles,
  CenterStyles,
  ChannelInputStyles,
  ChannelSliderTrackStyles,
  ContentStyles,
  ControlStyles,
  ControlViewStyles,
  EyeDropperIconStyles,
  EyeDropperTriggerStyles,
  LabelStyles,
  SwatchStyles,
  SwatchTriggerStyles,
  ThumbStyles,
  TriggerStyles,
  ViewStyles,
} from "./styles.ts";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles.ts";

// Types
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

// Props
const {
  description,
  disabled,
  errorMessage,
  hexInput,
  label,
  readOnly,
  required,
  savedColors,
  validationState,
  withField,
  ...rest
} = defineProps<Props>();

// Constants
const views = [
  {
    format: "rgba" as const,
    channels: hexInput
      ? (["hex", "alpha"] as const)
      : (["red", "green", "blue", "alpha"] as const),
  },
  {
    format: "hsla" as const,
    channels: hexInput
      ? (["hex", "alpha"] as const)
      : (["hue", "saturation", "lightness", "alpha"] as const),
  },
];

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
    <ColorPicker.Root
      v-bind="rest"
      @focusOutside="$emit('focusOutside', $event)"
      @formatChange="$emit('formatChange', $event)"
      @interactOutside="$emit('interactOutside', $event)"
      @openChange="$emit('openChange', $event)"
      @pointerDownOutside="$emit('pointerDownOutside', $event)"
      @valueChange="$emit('valueChange', $event)"
      @valueChangeEnd="$emit('valueChangeEnd', $event)"
    >
      <ColorPicker.Label v-if="label" :class="LabelStyles">
        {{ label }}
      </ColorPicker.Label>
      <ColorPicker.Control class="flex gap-3">
        <ColorPicker.View
          v-for="{ channels, format } in views"
          :class="ControlViewStyles"
          :data-use-hex="hexInput"
          :format="format"
          :key="format"
        >
          <ColorPicker.ChannelInput
            v-for="channel in channels"
            :channel="channel"
            :class="ControlStyles"
            :key="channel"
          />
        </ColorPicker.View>
        <ColorPicker.Trigger :class="[TriggerStyles, 'rounded size-12']">
          <ColorPicker.TransparencyGrid class="rounded" />
          <ColorPicker.ValueSwatch class="size-8 rounded" />
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Positioner>
        <ColorPicker.Content :class="ContentStyles">
          <ColorPicker.Area class="cursor-pointer">
            <ColorPicker.AreaBackground :class="AreaBackgroundStyles" />
            <ColorPicker.AreaThumb :class="ThumbStyles" />
          </ColorPicker.Area>
          <div class="flex gap-4 mb-3">
            <ColorPicker.EyeDropperTrigger :class="EyeDropperTriggerStyles">
              <i
                aria-hidden="true"
                :class="[CenterStyles, EyeDropperIconStyles]"
              ></i>
            </ColorPicker.EyeDropperTrigger>
            <div class="flex flex-col grow">
              <ColorPicker.ChannelSlider
                v-for="channel in ['hue', 'alpha'] as const"
                :channel="channel"
                :key="channel"
                class="cursor-pointer mb-2"
              >
                <ColorPicker.TransparencyGrid
                  v-if="channel === 'alpha'"
                  class="rounded"
                />
                <ColorPicker.ChannelSliderTrack
                  :class="ChannelSliderTrackStyles"
                />
                <ColorPicker.ChannelSliderThumb
                  :class="[CenterStyles, ThumbStyles]"
                />
              </ColorPicker.ChannelSlider>
            </div>
          </div>
          <ColorPicker.SwatchGroup class="mb-3">
            <ColorPicker.SwatchTrigger
              v-for="color in savedColors"
              :class="[SwatchTriggerStyles, TriggerStyles]"
              :key="color"
              :value="color"
            >
              <ColorPicker.Swatch :class="SwatchStyles" :value="color">
                <ColorPicker.SwatchIndicator>
                  <i
                    aria-hidden="true"
                    :class="[CenterStyles, 'fa-solid fa-check']"
                  ></i>
                </ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>
          <ColorPicker.View
            v-for="{ channels, format } in views"
            :class="ViewStyles"
            :data-use-hex="hexInput"
            :format="format"
            :key="format"
          >
            <ColorPicker.ChannelInput
              v-for="channel in channels"
              :channel="channel"
              :class="ChannelInputStyles"
              :key="channel"
            />
          </ColorPicker.View>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
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
