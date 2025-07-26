<script setup lang="ts">
// Packages
import { faker } from "@faker-js/faker";
import { ref } from "vue";

// Components
import Button from "../Button/index.vue";
import Toast from "./index.vue";

// Utils
import { toast, dismissToast, updateToast } from "./toaster";

// Types
import { ButtonVariantsEnum } from "../Button/types";

// State
const toastId = ref("");

const create = () => {
  toastId.value = toast({
    title: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    type: "info",
  });
};

const dismiss = () => {
  dismissToast(toastId.value);
};

const update = () => {
  updateToast(toastId.value, {
    title: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    type: "success",
  });
};
</script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <Button @click="create" :variant="ButtonVariantsEnum.Outline"
      >Create Toast</Button
    >
    <Button @click="update"> Update Toast </Button>
    <Button @click="dismiss"> Dismiss Toast </Button>
  </div>
  <Toast></Toast>
</template>
