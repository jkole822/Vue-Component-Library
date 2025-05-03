<script setup lang="ts">
// Packages
import { Pagination as ArkPagination } from "@ark-ui/vue/pagination";

// Styles
import { ButtonStyles, ContainerStyles } from "./styles";

// Types
import type { Props } from "./types";

// Props
const {
  className = "",
  hideNextButton,
  hidePreviousButton,
  ...rest
} = defineProps<Props>();
</script>

<template>
  <ArkPagination.Root
    v-bind="rest"
    @update:page="$emit('update:page', $event)"
    @update:pageSize="$emit('update:pageSize', $event)"
    :class="[className, ContainerStyles]"
  >
    <ArkPagination.PrevTrigger v-if="!hidePreviousButton" :class="ButtonStyles">
      Previous
    </ArkPagination.PrevTrigger>
    <ArkPagination.Context v-slot="pagination">
      <template v-for="(page, index) in pagination.pages">
        <ArkPagination.Item
          v-if="page.type === 'page'"
          :class="ButtonStyles"
          :key="index"
          :value="page.value"
          :type="page.type"
        >
          {{ page.value }}
        </ArkPagination.Item>
        <ArkPagination.Ellipsis
          v-else
          :class="['pagination-ellipsis', ButtonStyles]"
          :key="'e' + index"
          :index="index"
          >&#8230;</ArkPagination.Ellipsis
        >
      </template>
    </ArkPagination.Context>
    <ArkPagination.NextTrigger v-if="!hideNextButton" :class="ButtonStyles">
      Next
    </ArkPagination.NextTrigger>
  </ArkPagination.Root>
</template>
