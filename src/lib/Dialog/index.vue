<script setup lang="ts">
// Packages
import { Dialog as ArkDialog } from "@ark-ui/vue/dialog";

// Styles
import {
  CloseButtonStyles,
  ContentStyles,
  DescriptionStyles,
  HeadingStyles,
  OverlayStyles,
} from "./styles";

// Types
import type { Props } from "./types";

// Props
const { description, title, ...rest } = defineProps<Props>();
</script>

<template>
  <ArkDialog.Root v-bind="rest" @interact-outside="$emit('close')">
    <ArkDialog.Trigger asChild><slot name="trigger"></slot></ArkDialog.Trigger>
    <Teleport to="body">
      <ArkDialog.Backdrop :class="OverlayStyles" />
      <ArkDialog.Positioner>
        <ArkDialog.Content :class="ContentStyles">
          <ArkDialog.Title v-if="title" :class="HeadingStyles">
            {{ title }}
          </ArkDialog.Title>
          <ArkDialog.Description v-if="description" :class="DescriptionStyles">
            {{ description }}
          </ArkDialog.Description>
          <slot></slot>
          <ArkDialog.CloseTrigger
            @click="$emit('close')"
            :class="CloseButtonStyles"
          >
            <i aria-hidden="true" class="fa-solid fa-xmark"></i>
          </ArkDialog.CloseTrigger>
        </ArkDialog.Content>
      </ArkDialog.Positioner>
    </Teleport>
  </ArkDialog.Root>
</template>
