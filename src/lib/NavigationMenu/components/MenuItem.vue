<script setup lang="ts">
// Styles
import {
  ItemCalloutStyles,
  ItemDescriptionStyles,
  ItemLabelStyles,
  ItemStyles,
} from "../styles";

// Types
import type { NavigationMenuItem } from "../types";

// Props
const { item, isFirstItem, isLastItem } = defineProps<{
  item: NavigationMenuItem;
  isFirstItem: boolean;
  isLastItem: boolean;
}>();
</script>

<template>
  <a
    @keydown="(event) => $emit('keydown', { event, isFirstItem, isLastItem })"
    :disabled="item.disabled"
    :href="item.href"
    :class="!!item.image ? ItemCalloutStyles : ItemStyles"
    role="menuitem"
  >
    <img v-bind="item.image" v-if="item.image" />
    <h3 :class="ItemLabelStyles">{{ item.title }}</h3>
    <p v-if="item.description" :class="ItemDescriptionStyles">
      {{ item.description }}
    </p>
  </a>
</template>
