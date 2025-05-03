<script setup lang="ts">
// Packages
import { faker } from "@faker-js/faker";
import { h, ref } from "vue";
import { v4 as uuid } from "uuid";

// Components
import Tabs from "./index.vue";
import TabContent from "./tabContentStory.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const valueOne = ref("");
const valueTwo = ref("");
const valueThree = ref("");

// Constants
const tabOne = {
  buttonText: faker.lorem.word(),
  description: faker.lorem.sentence(),
  id: uuid(),
  label: faker.lorem.word(),
  onValueChange: (value: string) => (valueOne.value = value),
};

const tabTwo = {
  buttonText: faker.lorem.word(),
  description: faker.lorem.sentence(),
  id: uuid(),
  label: faker.lorem.word(),
  onValueChange: (value: string) => (valueTwo.value = value),
};

const tabThree = {
  buttonText: faker.lorem.word(),
  description: faker.lorem.sentence(),
  id: uuid(),
  label: faker.lorem.word(),
  onValueChange: (value: string) => (valueThree.value = value),
};

const items = [
  {
    content: h(TabContent, { ...tabOne, value: valueOne.value }),
    id: tabOne.id,
    label: tabOne.label,
  },
  {
    content: h(TabContent, { ...tabTwo, value: valueTwo.value }),
    id: tabTwo.id,
    label: tabTwo.label,
  },
  {
    content: h(TabContent, { ...tabThree, value: valueThree.value }),
    id: tabThree.id,
    label: tabThree.label,
  },
];

// State
const activeTab = ref(tabOne.id);
</script>

<template>
  <Tabs
    v-bind="props"
    @update:modelValue="activeTab = $event"
    :items="items"
    :modelValue="activeTab"
  />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">Value One: {{ valueOne }}</p>
  <p :class="ParagraphStyles">Value Two: {{ valueTwo }}</p>
  <p :class="ParagraphStyles">Value Three: {{ valueThree }}</p>
</template>
