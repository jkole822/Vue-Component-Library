<script setup lang="ts">
// Packages
import { faker } from "@faker-js/faker";
import { ref } from "vue";

// Components
import Collapsible from "./index.vue";

// Styles
import { IconStyles } from "../../styles";
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const open = ref(false);

// Helpers
const handleOpen = (value: boolean) => {
  open.value = value;
};
</script>

<template>
  <Collapsible v-bind="props" @update:open="handleOpen" :open="open">
    <template v-slot:trigger>
      <div>
        <span class="mr-2">Button</span>
        <i aria-hidden="true" :class="IconStyles"></i>
      </div>
    </template>
    <span>{{ faker.lorem.words(3) }}</span>
    <hr class="border-b-px border-neutral-secondary-700" />
    <span>{{ faker.lorem.words(2) }}</span>
    <hr class="border-b-px border-neutral-secondary-700" />
    <span>{{ faker.lorem.words(4) }}</span>
  </Collapsible>
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="PararaphStyles">{{ open ? "Open" : "Closed" }}</p>
</template>
