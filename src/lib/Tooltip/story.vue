<script setup lang="ts">
// Packages
import { faker } from "@faker-js/faker";
import { ref } from "vue";

// Components
import Button from "../Button/index.vue";
import Tooltip from "./index.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import { ButtonVariantsEnum } from "../Button/types.ts";
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const open = ref(props.open);

// Constants
const text = faker.lorem.sentence();
</script>

<template>
  <Tooltip v-bind="props" v-model:open="open">
    <template v-slot:trigger>
      <Button
        className="rounded-full! p-0! size-15!"
        :variant="ButtonVariantsEnum.Outline"
      >
        <i aria-hidden="true" class="fa-solid fa-ghost text-2xl"></i>
      </Button>
    </template>
    {{ text }}
  </Tooltip>
  <div class="mt-36">
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">{{ open ? "Open" : "Closed" }}</p>
  </div>
</template>
