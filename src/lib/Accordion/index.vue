<script setup lang="ts">
// Packages
import { Accordion } from "@ark-ui/vue/accordion";
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
const {
  className = "",
  headingLevel,
  items,
  modelValue,
  ...rest
} = defineProps<Props>();

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
  <Accordion.Root
    v-bind="rest"
    @update:modelValue="$emit('update:modelValue', $event)"
    :class="[className, ContainerStyles]"
    :modelValue="modelValue"
  >
    <Accordion.Item
      v-for="item in items"
      :class="SectionStyles"
      :disabled="item.disabled"
      :key="item.id"
      :value="item.id"
    >
      <Accordion.ItemTrigger :class="ButtonStyles">
        <component :class="HeadingStyles" :is="headingLevelElement">
          {{ item.title }}
        </component>
        <Accordion.ItemIndicator>
          <i
            aria-hidden="true"
            className="accordion-trigger-icon fa-solid fa-chevron-down"
          ></i>
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent :class="ContentStyles">
        <p v-if="item.description" :class="DescriptionStyles">
          {{ item.description }}
        </p>
        <div v-if="item.content" :class="ItemContentStyles">
          <component :is="item.content" />
        </div>
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>
