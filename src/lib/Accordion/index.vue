<script setup lang="ts">
// Packages
import { Accordion as ArkAccordion } from "@ark-ui/vue/accordion";
import { computed, onMounted } from "vue";

// Styles
import {
  ButtonStyles,
  ContainerStyles,
  ContentStyles,
  DescriptionStyles,
  HeadingStyles,
  ItemContentStyles,
  SectionStyles,
} from "./styles";

// Types
import type { JSX } from "react";
import type { Props } from "./types";

// Props
const { className = "", headingLevel, items, ...rest } = defineProps<Props>();

// Computed
const headingLevelElement = computed(
  () => headingLevel as keyof JSX.IntrinsicElements
);

// Life Cycle
onMounted(() => {
  const ids = items.map((item) => item.id);
  const hasDuplicates = ids.length !== new Set(ids).size;
  if (hasDuplicates) {
    console.warn("Duplicate item IDs detected in accordion items.");
  }
});
</script>

<template>
  <ArkAccordion.Root :class="[className, ContainerStyles]" v-bind="rest">
    <ArkAccordion.Item
      :class="SectionStyles"
      :disabled="item.disabled"
      :key="item.id"
      :value="item.id"
      v-for="item in items"
    >
      <ArkAccordion.ItemTrigger :class="ButtonStyles">
        <component :is="headingLevelElement" :class="HeadingStyles">
          {{ item.title }}
        </component>
        <ArkAccordion.ItemIndicator>
          <i
            aria-hidden="true"
            className="accordion-trigger-icon fa-solid fa-chevron-down"
          ></i>
        </ArkAccordion.ItemIndicator>
      </ArkAccordion.ItemTrigger>
      <ArkAccordion.ItemContent :class="ContentStyles">
        <p :class="DescriptionStyles" v-if="item.description">
          {{ item.description }}
        </p>
        <div :class="ItemContentStyles" v-if="item.content">
          <component :is="item.content" />
        </div>
      </ArkAccordion.ItemContent>
    </ArkAccordion.Item>
  </ArkAccordion.Root>
</template>
