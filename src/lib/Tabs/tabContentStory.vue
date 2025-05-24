<script setup lang="ts">
// Components
import Button from "../Button/index.vue";
import Input from "../Input/index.vue";

// Types
import { ButtonVariantsEnum } from "../Button/types";

// Props
const { buttonText, description, label, onValueChange } = defineProps<{
  buttonText: string;
  description: string;
  label: string;
  onValueChange: (value: string) => void;
}>();
</script>

<template>
  <p class="mb-5 text-neutral-primary-300">{{ description }}</p>
  <Input
    @update:modelValue="onValueChange($event)"
    :name="label"
    className="[&_.input-input_~_label]:bg-neutral-secondary-950!"
    raiseLabel
  />
  <div class="mt-5 flex justify-end">
    <Button :variant="ButtonVariantsEnum.Outline">{{ buttonText }}</Button>
  </div>
</template>
