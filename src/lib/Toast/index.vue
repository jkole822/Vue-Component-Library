<script setup lang="ts">
// Packages
import { Toast as ArkToast, Toaster } from "@ark-ui/vue/toast";

// Styles
import {
  CloseButtonStyles,
  DescriptionStyles,
  RootStyles,
  TitleStyles,
} from "./styles";

// Utils
import { toaster } from "./toaster";
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
