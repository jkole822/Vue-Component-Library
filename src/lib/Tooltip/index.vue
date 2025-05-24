<script setup lang="ts">
// Packages
import { Tooltip } from "@ark-ui/vue/tooltip";

// Styles
import { ContentStyles } from "./styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();
</script>

<template>
  <Tooltip.Root
    v-bind="props"
    @openChange="$emit('openChange', $event)"
    @update:open="$emit('update:open', $event)"
  >
    <Tooltip.Trigger asChild>
      <slot name="trigger"></slot>
    </Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Content :class="ContentStyles">
        <Tooltip.Arrow class="relative -z-10 tooltip-arrow">
          <Tooltip.ArrowTip class="bg-primary-300! tooltip-arrow-tip" />
        </Tooltip.Arrow>
        <slot></slot>
      </Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
</template>
