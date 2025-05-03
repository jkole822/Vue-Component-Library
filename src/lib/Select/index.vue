<script setup lang="ts">
// Packages
import {
  createListCollection,
  Select as ArkSelect,
  useSelect,
} from "@ark-ui/vue/select";
import { Field } from "@ark-ui/vue/field";
import { computed, ref } from "vue";

// Styles
import {
  ContentStyles,
  ItemDescriptionStyles,
  ItemIndicatorStyles,
  ItemLabelStyles,
  ItemStyles,
  LabelStyles,
  TriggerStyles,
} from "./styles";
import { DescriptionStyles, ErrorMessageStyles } from "../../styles";

// Types
import { ValidationStateEnum } from "../../types";
import type { Props } from "./types";

// Props
const {
  className = "",
  description,
  disabled,
  errorMessage,
  name,
  options,
  placeholder,
  readOnly,
  required,
  validationState,
  withField,
  ...rest
} = defineProps<Props>();

// Emits
const $emit = defineEmits<{
  (e: "update:modelValue", value: string[]): void;
}>();

// State
const items = ref(options);

// Computed
const collection = computed(() =>
  createListCollection({
    items: items.value.map((item) => ({ ...item, value: item.id })),
  }),
);

const element = computed(() => (withField ? Field.Root : "div"));

// Helpers
const select = useSelect({
  ...rest,
  collection: collection.value,
  disabled,
  name,
  onValueChange: (details) => $emit("update:modelValue", details.value),
});
</script>

<template>
  <component
    :class="className"
    :disabled="disabled"
    :is="element"
    :invalid="validationState === ValidationStateEnum.Invalid"
    :readOnly="readOnly"
    :required="required"
  >
    <ArkSelect.RootProvider :value="select">
      <ArkSelect.Label :class="LabelStyles">
        {{ name }}
      </ArkSelect.Label>
      <ArkSelect.Trigger :class="TriggerStyles" :disabled="disabled">
        <ArkSelect.ValueText :placeholder="placeholder" />
        <ArkSelect.Indicator>
          <i aria-hidden="true" class="fa-solid fa-sort"></i>
        </ArkSelect.Indicator>
      </ArkSelect.Trigger>
      <Teleport to="body">
        <ArkSelect.Positioner>
          <ArkSelect.Content :class="ContentStyles">
            <ArkSelect.Item
              v-for="item in collection.items"
              :class="ItemStyles"
              :item="item"
              :key="item.id"
            >
              <ArkSelect.ItemText>
                <span :class="ItemLabelStyles">{{ item.label }}</span>
                <span :class="ItemDescriptionStyles">
                  {{ item.description }}
                </span>
              </ArkSelect.ItemText>
              <ArkSelect.ItemIndicator :class="ItemIndicatorStyles">
                ✓
              </ArkSelect.ItemIndicator>
            </ArkSelect.Item>
          </ArkSelect.Content>
        </ArkSelect.Positioner>
      </Teleport>
    </ArkSelect.RootProvider>
    <div v-if="withField" class="mt-2">
      <Field.HelperText v-if="description" :class="DescriptionStyles">
        {{ description }}
      </Field.HelperText>
      <Field.ErrorText v-if="errorMessage" :class="ErrorMessageStyles">
        {{ errorMessage }}
      </Field.ErrorText>
    </div>
  </component>
</template>
