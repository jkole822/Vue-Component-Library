<script setup lang="ts">
// Packages
import { createToaster, Toast as ArkToast, Toaster } from "@ark-ui/vue/toast";
import { ref, watch } from "vue";

// Styles
import {
  CloseButtonStyles,
  DescriptionStyles,
  RootStyles,
  TitleStyles,
} from "./styles";

// Types
import { ToastTypeEnum } from "./types";
import type { IToast, Props } from "./types";

// Props
let { toast } = defineProps<Props>();

// State
const id = ref<string | undefined>();

// Hooks
const toaster = createToaster({
  placement: "bottom-end",
  overlap: false,
  gap: 16,
});

// Helpers
const createToast = () => {
  if (!toast) return;

  id.value = toaster.create(toast);
};

const updateToast = () => {
  if (!id.value || !toast) return;

  toaster.update(id.value, toast);
};

// Watchers
watch(
  () => toast,
  (newToast?: IToast) => {
    if (newToast?.type === ToastTypeEnum.Create) {
      createToast();
    } else {
      updateToast();
    }
  }
);
</script>

<template>
  <Toaster v-slot="toast" :toaster="toaster">
    <ArkToast.Root :class="RootStyles">
      <ArkToast.Title :class="TitleStyles">{{ toast.title }}</ArkToast.Title>
      <ArkToast.Description v-if="toast.description" :class="DescriptionStyles">
        {{ toast.description }}
      </ArkToast.Description>
      <ArkToast.CloseTrigger :class="CloseButtonStyles">
        <i aria-hidden="true" class="fa-solid fa-xmark"></i>
      </ArkToast.CloseTrigger>
    </ArkToast.Root>
  </Toaster>
</template>
