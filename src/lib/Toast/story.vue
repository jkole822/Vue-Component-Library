<script setup lang="ts">
// Packages
import { faker } from "@faker-js/faker";
import { ref } from "vue";

// Components
import Button from "../Button/index.vue";
import Toast from "./index.vue";

// Types
import { ButtonVariantsEnum } from "../Button/types";
import { ToastTypeEnum } from "./types";
import type { IToast } from "./types";

const toast = ref<IToast | undefined>();

const createToast = () => {
  toast.value = {
    title: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    type: ToastTypeEnum.Create,
  };
};

const updateToast = () => {
  toast.value = {
    title: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    type: ToastTypeEnum.Update,
  };
};
</script>

<template>
  <div>
    <div class="flex gap-4">
      <Button @click="createToast">Create Toast</Button>
      <Button @click="updateToast" :variant="ButtonVariantsEnum.Outline">
        Update Toast
      </Button>
    </div>
    <Toast :toast="toast"></Toast>
  </div>
</template>
