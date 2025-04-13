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
import type { Props } from "./types";

// Props
const { className = "", headingLevel, items, ...rest } = defineProps<Props>();

// Computed
const headingLevelElement = computed(() => headingLevel);

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
  <ArkAccordion.Root v-bind="rest" :class="[className, ContainerStyles]">
    <ArkAccordion.Item
      v-for="item in items"
      :class="SectionStyles"
      :disabled="item.disabled"
      :key="item.id"
      :value="item.id"
    >
      <ArkAccordion.ItemTrigger :class="ButtonStyles">
        <component :class="HeadingStyles" :is="headingLevelElement">
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
        <p v-if="item.description" :class="DescriptionStyles">
          {{ item.description }}
        </p>
        <div v-if="item.content" :class="ItemContentStyles">
          <component :is="item.content" />
        </div>
      </ArkAccordion.ItemContent>
    </ArkAccordion.Item>
  </ArkAccordion.Root>
</template>
