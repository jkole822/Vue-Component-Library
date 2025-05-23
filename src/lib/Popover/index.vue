<script setup lang="ts">
// Packages
import { Popover as ArkPopover } from "@ark-ui/vue/popover";

// Styles
import {
  CloseButtonStyles,
  ContentStyles,
  DescriptionStyles,
  TitleStyles,
} from "./styles";

// Types
import type { Props } from "./types";

// Props
const {
  contentClass = "",
  contentStyles,
  description,
  title,
  ...rest
} = defineProps<Props>();
</script>

<template>
  <ArkPopover.Root
    v-bind="rest"
    @escapeKeyDown="$emit('escapeKeyDown', $event)"
    @focusOutside="$emit('focusOutside', $event)"
    @interactOutside="$emit('interactOutside', $event)"
    @openChange="$emit('openChange', $event)"
    @pointerDownOutside="$emit('pointerDownOutside', $event)"
    @update:open="$emit('update:open', $event)"
  >
    <ArkPopover.Trigger asChild>
      <slot name="trigger"></slot>
    </ArkPopover.Trigger>
    <ArkPopover.Positioner>
      <ArkPopover.Content
        :class="[contentClass, ContentStyles]"
        :style="contentStyles"
      >
        <ArkPopover.Arrow class="popover-arrow">
          <ArkPopover.ArrowTip class="popover-arrow-tip" />
        </ArkPopover.Arrow>
        <ArkPopover.Title v-if="title" :class="TitleStyles">
          {{ title }}
        </ArkPopover.Title>
        <ArkPopover.Description v-if="description" :class="DescriptionStyles">
          {{ description }}
        </ArkPopover.Description>
        <slot></slot>
        <ArkPopover.CloseTrigger :class="CloseButtonStyles">
          <i aria-hidden="true" class="fa-solid fa-xmark"></i>
        </ArkPopover.CloseTrigger>
      </ArkPopover.Content>
    </ArkPopover.Positioner>
  </ArkPopover.Root>
</template>
