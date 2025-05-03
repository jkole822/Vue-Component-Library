<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Button from "../Button/index.vue";
import Dialog from "./index.vue";
import Input from "../Input/index.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import { AutoCompleteEnum } from "../Input/types";
import { ButtonVariantsEnum } from "../Button/types";
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const name = ref("");
const open = ref(false);
const username = ref("");

// Helpers
const handleOpen = () => {
  open.value = !open.value;
};
</script>

<template>
  <Dialog v-bind="props" @close="() => (open = false)" :open="open">
    <template v-slot:trigger>
      <Button @click="handleOpen" :variant="ButtonVariantsEnum.fill"
        >Open Dialog
      </Button>
    </template>
    <div className="border-t-2 border-neutral-secondary-700">
      <Input
        v-model="name"
        :autoComplete="AutoCompleteEnum.name"
        className="[&_.input-input_~_label]:bg-neutral-secondary-900! mb-7 mt-5"
        name="Name"
        required
      />
      <Input
        v-model="username"
        :autoComplete="AutoCompleteEnum.username"
        className="[&_.input-input_~_label]:bg-neutral-secondary-900!"
        name="Username"
        required
      />
    </div>
  </Dialog>
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">Name: {{ name }}</p>
  <p :class="ParagraphStyles">Username: {{ username }}</p>
</template>
