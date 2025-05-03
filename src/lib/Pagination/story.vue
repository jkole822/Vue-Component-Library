<script setup lang="ts">
// Packages
import { ref } from "vue";

// Components
import Pagination from "./index.vue";

// Styles
import { ParagraphStyles, SubHeadingStyles } from "../../styles";

// Types
import type { Props } from "./types";

// Props
const props = defineProps<Props>();

// State
const page = ref(1);
</script>

<template>
  <Pagination
    v-bind="props"
    @update:page="(update: number) => (page = update)"
    :page="page"
  />
  <p :class="SubHeadingStyles">Binding Check</p>
  <p :class="ParagraphStyles">{{ page }}</p>
</template>
