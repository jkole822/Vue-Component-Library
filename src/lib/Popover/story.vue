<script setup lang="ts">
// Packages
import { ref } from "vue";
import { v4 as uuid } from "uuid";

// Components
import Button from "../Button/index.vue";
import Input from "../Input/index.vue";
import Popover from "./index.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import { ButtonVariantsEnum } from "../Button/types.ts";
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const open = ref(false);
const value = ref("");

// Constants
const id = uuid();
</script>

<template>
  <Popover v-bind="props" v-model:open="open">
    <template v-slot:trigger>
      <Button
        className="rounded-full! p-0! size-15!"
        :variant="ButtonVariantsEnum.Outline"
      >
        <i aria-hidden="true" class="fa-solid fa-ghost text-2xl"></i>
      </Button>
    </template>
    <Input
      v-model="value"
      :autoComplete="AutoCompleteEnum.name"
      :id="id"
      className="[&_.input-input_~_label]:bg-neutral-secondary-900! mt-8"
      name="Lorem"
      required
    />
  </Popover>
  <div class="mt-75">
    <p :class="SubHeadingStyles">Binding Check</p>
    <p :class="ParagraphStyles">{{ value }}</p>
    <p :class="SubHeadingStyles">Open Check</p>
    <p :class="ParagraphStyles">{{ open ? "Open" : "Closed" }}</p>
  </div>
</template>
