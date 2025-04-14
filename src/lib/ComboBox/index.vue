<script setup lang="ts">
// Packages
import {
  Combobox as ArkComboBox,
  createListCollection,
} from "@ark-ui/vue/combobox";
import { Field } from "@ark-ui/vue/field";
import { computed, ref } from "vue";

// Styles
import {
  ClearTriggerIconStyles,
  ClearTriggerStyles,
  ContentStyles,
  ControlStyles,
  DescriptionStyles,
  ErrorMessageStyles,
  InputStyles,
  ItemDescriptionStyles,
  ItemIndicatorStyles,
  ItemLabelStyles,
  ItemStyles,
  ItemTextStyles,
  LabelStyles,
  TriggerStyles,
} from "./styles";

// Types
import { ComboBoxValidationStateEnum } from "./types";
import type { Props } from "./types";

// Props
const {
  className = "",
  description,
  disabled,
  errorMessage,
  items: initialItems,
  name,
  withField,
  ...rest
} = defineProps<Props>();

// State
const items = ref(initialItems);

// Computed
const collection = computed(() =>
  createListCollection({
    items: items.value.map((item) => ({ ...item, value: item.id })),
  })
);

const element = computed(() => (withField ? Field.Root : "div"));

// Helpers
const handleInputChange = (details: ArkComboBox.InputValueChangeDetails) => {
  items.value = initialItems.filter((item) =>
    item.label.toLowerCase().includes(details.inputValue.toLowerCase())
  );
};
</script>

<template>
  <component
    :disabled="disabled"
    :is="element"
    :invalid="validationState === ComboBoxValidationStateEnum.Invalid"
    :readonly="readOnly"
    :required="required"
  >
    <ArkComboBox.Root
      v-bind="rest"
      @input-value-change="handleInputChange"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
      :collection="collection"
      :disabled="disabled"
      :name="name"
    >
      <ArkComboBox.Label :class="LabelStyles">{{ name }}</ArkComboBox.Label>
      <ArkComboBox.Control :class="ControlStyles">
        <ArkComboBox.Input :class="InputStyles" />
        <ArkComboBox.Trigger :class="TriggerStyles">
          <i aria-hidden="true" class="fa-solid fa-sort"></i>
        </ArkComboBox.Trigger>
        <ArkComboBox.ClearTrigger :class="ClearTriggerStyles">
          <i aria-hidden="true" :class="ClearTriggerIconStyles"></i>
        </ArkComboBox.ClearTrigger>
      </ArkComboBox.Control>
      <Teleport to="body">
        <ArkComboBox.Positioner>
          <ArkComboBox.Content :class="ContentStyles">
            <ArkComboBox.Item
              v-for="item in collection.items"
              :class="ItemStyles"
              :item="item"
              :key="item.id"
            >
              <ArkComboBox.ItemText :class="ItemTextStyles">
                <span :class="ItemLabelStyles">{{ item.label }}</span>
                <span :class="ItemDescriptionStyles">{{
                  item.description
                }}</span>
              </ArkComboBox.ItemText>
              <ArkComboBox.ItemIndicator :class="ItemIndicatorStyles">
                ✓
              </ArkComboBox.ItemIndicator>
            </ArkComboBox.Item>
          </ArkComboBox.Content>
        </ArkComboBox.Positioner>
      </Teleport>
    </ArkComboBox.Root>
    <Field.HelperText
      v-if="description && withField"
      :class="DescriptionStyles"
    >
      {{ description }}
    </Field.HelperText>
    <Field.ErrorText
      v-if="errorMessage && withField"
      :class="ErrorMessageStyles"
    >
      {{ errorMessage }}
    </Field.ErrorText>
  </component>
</template>
