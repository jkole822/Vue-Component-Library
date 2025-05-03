<script setup lang="ts">
// Packages
import { Progress as ArkProgress } from "@ark-ui/vue/progress";

// Styles
import {
  CircularRangeStyles,
  CircularTrackStyles,
  CircularValueTextStyles,
  LabelStyles,
  RangeStyles,
  TrackStyles,
} from "./styles";

// Types
import { ProgressVariantEnum } from "./types";
import type { Props } from "./types";

// Props
const {
  className = "",
  label,
  size = 100,
  thickness = 10,
  variant = ProgressVariantEnum.Linear,
  ...rest
} = defineProps<Props>();
</script>

<template>
  <ArkProgress.Root
    v-bind="rest"
    @update:value="$emit('update:value', $event)"
    :class="className"
  >
    <ArkProgress.Label :class="LabelStyles">{{ label }}</ArkProgress.Label>
    <div v-if="variant === ProgressVariantEnum.Circular" class="relative w-fit">
      <ArkProgress.ValueText :class="CircularValueTextStyles" />
      <ArkProgress.Circle :style="{ '--size': size, '--thickness': thickness }">
        <ArkProgress.CircleTrack :class="CircularTrackStyles" />
        <ArkProgress.CircleRange :class="CircularRangeStyles" />
      </ArkProgress.Circle>
    </div>
    <ArkProgress.Track v-else :class="TrackStyles">
      <ArkProgress.Range :class="RangeStyles" />
    </ArkProgress.Track>
  </ArkProgress.Root>
</template>
