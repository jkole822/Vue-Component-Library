<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Pagination from "./index.vue";

// Styles
import { PararaphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const { page: _, ...rest } = defineProps<Props>();

// State
const page = ref(1);
</script>

<template>
  <Pagination
    v-bind="rest"
    @update:page="(update: number) => (page = update)"
    :page="page"
  />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="PararaphStyles">{{ page }}</p>
</template>
