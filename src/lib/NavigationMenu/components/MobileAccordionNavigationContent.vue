<script setup lang="ts">
// Components
import MenuItem from "./MenuItem.vue";

// Styles
import { ContentWithCallout, ContentWithoutCallout } from "../styles";

// Types
import type { NavigationMenuItem } from "../types";

// Props
const { items, ...rest } = defineProps<{
  items: NavigationMenuItem[];
  hasImage: (menuItems: NavigationMenuItem[]) => boolean;
  isFirstItem: boolean;
  isLastItem: boolean;
}>();
</script>

<template>
  <div :class="hasImage(items) ? ContentWithCallout : ContentWithoutCallout">
    <MenuItem v-bind="rest" v-for="item in items" :item="item"></MenuItem>
  </div>
</template>
