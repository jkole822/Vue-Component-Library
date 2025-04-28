<script setup lang="ts">
// Packages
import { Progress as ArkProgress } from "@ark-ui/vue/progress";

// Styles
import { LabelStyles, RangeStyles, TrackStyles } from "./styles";

// Types
import type { Props } from "./types";

// Props
const { className = "", label, value, ...rest } = defineProps<Props>();
</script>

<template>
  <ArkProgress.Root v-bind="rest" :class="className" :modelValue="value">
    <ArkProgress.Label :class="LabelStyles">{{ label }}</ArkProgress.Label>
    <ArkProgress.Track :class="TrackStyles">
      <ArkProgress.Range :class="RangeStyles" />
    </ArkProgress.Track>
  </ArkProgress.Root>
</template>
