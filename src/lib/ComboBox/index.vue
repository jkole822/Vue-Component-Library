<script setup lang="ts">
// Packages
import {
  Combobox as ArkComboBox,
  createListCollection,
  useCombobox,
} from "@ark-ui/vue/combobox";
import { Field } from "@ark-ui/vue/field";
import { computed, ref } from "vue";

// Styles
import {
  ClearTriggerIconStyles,
  ClearTriggerStyles,
  ContentStyles,
  ControlStyles,
  InputStyles,
  ItemDescriptionStyles,
  ItemIndicatorStyles,
  ItemLabelStyles,
  ItemStyles,
  ItemTextStyles,
  LabelStyles,
  PillCloseButtonStyles,
  PillContainerStyles,
  PillStyles,
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
  items: initialItems,
  multiple,
  name,
  withField,
  ...rest
} = defineProps<Props>();

// Emits
const $emit = defineEmits<{
  (e: "change", value: ArkComboBox.ValueChangeDetails): void;
}>();

// State
const items = ref(initialItems);

// Computed
const collection = computed(() =>
  createListCollection({
    items: items.value.map((item) => ({ ...item, value: item.id })),
  }),
);

const element = computed(() => (withField ? Field.Root : "div"));

// Helpers
const handleInputChange = (details: ArkComboBox.InputValueChangeDetails) => {
  items.value = initialItems.filter((item) =>
    item.label.toLowerCase().includes(details.inputValue.toLowerCase()),
  );
};

const combobox = useCombobox({
  ...rest,
  collection: collection.value,
  disabled,
  multiple,
  name,
  onInputValueChange: handleInputChange,
  onValueChange: (value) => $emit("change", value),
});

const handleRemoveItem = (value: string) => {
  combobox.value.setValue(
    combobox.value.selectedItems
      .filter((selectedItem) => selectedItem.value !== value)
      .map((item) => item.id),
  );
};
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
    <ArkComboBox.RootProvider :value="combobox">
      <ArkComboBox.Label v-if="withField" :class="LabelStyles">
        {{ name }}
      </ArkComboBox.Label>
      <ArkComboBox.Control :class="ControlStyles">
        <div
          v-if="multiple && combobox.selectedItems.length > 0"
          :class="PillContainerStyles"
        >
          <span
            v-for="item in combobox.selectedItems"
            :class="PillStyles"
            :key="item.value"
          >
            <span>{{ item.label }}</span>
            <button
              @click="() => handleRemoveItem(item.value)"
              aria-label="Remove item"
              :class="PillCloseButtonStyles"
            >
              <i aria-hidden="true" className="fa-solid fa-xmark"></i>
            </button>
          </span>
        </div>
        <ArkComboBox.Input :class="InputStyles" :disabled="disabled" />
        <ArkComboBox.Trigger :class="TriggerStyles" :disabled="disabled">
          <i aria-hidden="true" class="fa-solid fa-sort"></i>
        </ArkComboBox.Trigger>
        <ArkComboBox.ClearTrigger :class="ClearTriggerStyles" :disabled="disabled">
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
    </ArkComboBox.RootProvider>
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
