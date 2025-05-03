<script setup lang="ts">
// Packages
import { faker } from "@faker-js/faker";
import { ref } from "vue";

// Components
import Collapsible from "./index.vue";

// Styles
import { IconStyles } from "../../styles";
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const open = ref(false);

// Constants
const text = [
  faker.lorem.sentence(),
  faker.lorem.sentence(),
  faker.lorem.sentence(),
];
</script>

<template>
  <Collapsible v-bind="props" v-model:open="open">
    <template v-slot:trigger>
      <div>
        <span class="mr-2">Button</span>
        <i aria-hidden="true" :class="IconStyles"></i>
      </div>
    </template>
    <span>{{ text[0] }}</span>
    <hr class="border-b-px border-neutral-secondary-700" />
    <span>{{ text[1] }}</span>
    <hr class="border-b-px border-neutral-secondary-700" />
    <span>{{ text[2] }}</span>
  </Collapsible>
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">{{ open ? "Open" : "Closed" }}</p>
</template>
