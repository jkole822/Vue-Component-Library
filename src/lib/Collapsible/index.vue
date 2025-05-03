<script setup lang="ts">
// Packages
import { Collapsible as ArkCollapsible } from "@ark-ui/vue/collapsible";

// Styles
import { ContentContainerStyles, ContentStyles, TriggerStyles } from "./styles";

// Types
import type { Props } from "./types";

// Props
const { className = "", ...rest } = defineProps<Props>();
</script>

<template>
  <ArkCollapsible.Root
    v-bind="rest"
    @update:open="$emit('update:open', $event)"
    :class="className"
  >
    <ArkCollapsible.Trigger :class="TriggerStyles">
      <slot name="trigger"></slot>
      <i
        aria-hidden="true"
        class="fa-solid fa-sort in-data-[state=open]:hidden!"
      ></i>
      <i
        aria-hidden="true"
        class="fa-solid fa-close hidden! in-data-[state=open]:block!"
      ></i>
    </ArkCollapsible.Trigger>
    <ArkCollapsible.Content :class="ContentContainerStyles">
      <div :class="ContentStyles">
        <slot></slot>
      </div>
    </ArkCollapsible.Content>
  </ArkCollapsible.Root>
</template>
