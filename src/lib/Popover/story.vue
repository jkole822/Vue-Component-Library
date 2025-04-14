<script setup lang="ts">
// Packages
import { ref } from "vue";
import { v4 as uuid } from "uuid";

// Components
import Button from "../Button/index.vue";
import Input from "../Input/index.vue";
import Popover from "./index.vue";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const isOpen = ref(false);
const value = ref("");

const id = uuid();
</script>

<template>
  <Popover v-bind="props" @update:open="(open) => (isOpen = open)">
    <template v-slot:trigger>
      <Button class="rounded-full! p-0! size-15!">
        <i aria-hidden="true" class="fa-solid fa-ghost text-2xl"></i>
      </Button>
    </template>
    <Input
      @update:value="(event) => (value = event.target.value)"
      :autoComplete="AutoCompleteEnum.name"
      className="mt-8"
      :id="id"
      inputClass="[&_~_label]:bg-neutral-secondary-900!"
      name="Lorem"
      required
      :value="value"
    />
  </Popover>
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="PararaphStyles">{{ value }}</p>
  <p :class="SubHeadingStyles">Open Check</p>
  <p :class="PararaphStyles">{{ isOpen ? "Open" : "Closed" }}</p>
</template>
