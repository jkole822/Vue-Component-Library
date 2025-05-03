<script setup lang="ts">
// Components
import Button from "../Button/index.vue";
import Input from "../Input/index.vue";

// Types
import { ButtonVariantsEnum } from "../Button/types";

// Props
const { buttonText, description, label, value } = defineProps<{
  buttonText: string;
  description: string;
  label: string;
  onValueChange: (value: string) => void;
  value: string;
}>();
</script>

<template>
  <p class="mb-5 text-neutral-primary-300">{{ description }}</p>
  <Input
    class="[&_.input-input_~_label]:bg-neutral-secondary-950!"
    @update:value="onValueChange($event.target.value)"
    :modelValue="value"
    :name="label"
  />
  <div class="mt-5 flex justify-end">
    <Button :variant="ButtonVariantsEnum.outline">{{ buttonText }}</Button>
  </div>
</template>
