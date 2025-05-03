<script setup lang="ts">
// Packages
import { Tabs as ArkTabs } from "@ark-ui/vue";

// Styles
import {
  ContainerStyles,
  ContentStyles,
  IndicatorStyles,
  ListStyles,
  TriggerStyles,
} from "./styles";

// Types
import { TabsOrientationEnum } from "./types";
import type { Props } from "./types";

// Props
const {
  className = "",
  orientation = TabsOrientationEnum.Horizontal,
  items,
  ...rest
} = defineProps<Props>();
</script>

<template>
  <ArkTabs.Root
    v-bind="rest"
    @update:modelValue="$emit('update:modelValue', $event)"
    :class="[className, ContainerStyles]"
    :orientation="orientation"
  >
    <ArkTabs.List :class="ListStyles">
      <ArkTabs.Trigger
        v-for="{ id, label } in items"
        :class="TriggerStyles"
        :key="id"
        :value="id"
      >
        {{ label }}
      </ArkTabs.Trigger>
      <ArkTabs.Indicator :class="IndicatorStyles"></ArkTabs.Indicator>
    </ArkTabs.List>
    <ArkTabs.Content
      v-for="{ content, id } in items"
      :class="ContentStyles"
      :key="id"
      :value="id"
    >
      <component :is="content" />
    </ArkTabs.Content>
  </ArkTabs.Root>
</template>
