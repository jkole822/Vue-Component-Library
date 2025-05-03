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
    content: h(TabContent, {
      buttonText: tabOne.buttonText,
      description: tabOne.description,
      label: tabOne.label,
      onValueChange: tabOne.onValueChange,
    }),
    disabled: false,
    id: tabOne.id,
    label: tabOne.label,
  },
  {
    content: h(TabContent, {
      buttonText: tabTwo.buttonText,
      description: tabTwo.description,
      label: tabTwo.label,
      onValueChange: tabTwo.onValueChange,
    }),
    disabled: false,
    id: tabTwo.id,
    label: tabTwo.label,
  },
  {
    content: h(TabContent, {
      buttonText: tabThree.buttonText,
      description: tabThree.description,
      label: tabThree.label,
      onValueChange: tabThree.onValueChange,
    }),
    disabled: false,
    id: tabThree.id,
    label: tabThree.label,
  },
];

// State
const activeTab = ref(tabOne.id);
</script>

<template>
  <Tabs v-bind="props" v-model="activeTab" :items="items" />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">Value One: {{ valueOne }}</p>
  <p :class="ParagraphStyles">Value Two: {{ valueTwo }}</p>
  <p :class="ParagraphStyles">Value Three: {{ valueThree }}</p>
</template>
