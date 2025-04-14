<script setup lang="ts">
// Packages
import { computed, ref, watch } from "vue";

// Components
import StarVector from "./starVector.vue";

// Styles
import {
  FillButtonStyles,
  LineOneButtonStyles,
  LineTwoButtonStyles,
  OutlineButtonStyles,
} from "./styles";

// Types
import type { Props } from "./types";
import { ButtonVariantsEnum } from "./types";

// Props
const {
  ariaControls,
  ariaExpanded,
  ariaHaspopup,
  ariaHidden,
  ariaLabel,
  className = "",
  href,
  showBottomGlow = false,
  target = "_self",
  type = "button",
  variant = ButtonVariantsEnum.fill,
  ...rest
} = defineProps<Props>();

// Emits
const emit = defineEmits(["click"]);

// State
const active = ref(false);

// Computed
const element = computed(() => (!!href ? "a" : "button"));
const isFillButton = computed(() => variant === ButtonVariantsEnum.fill);
const variantStyles = computed(() =>
  isFillButton.value
    ? FillButtonStyles({ active: active.value })
    : variant === ButtonVariantsEnum.outline
      ? OutlineButtonStyles({ showBottomGlow })
      : variant === ButtonVariantsEnum.lineOne
        ? LineOneButtonStyles
        : variant === ButtonVariantsEnum.lineTwo
          ? LineTwoButtonStyles
          : ""
);

// Helpers
const handleClick = (event: Event) => {
  active.value = true;
  emit("click", event);
};

// Watchers
watch(active, () => {
  if (active.value) {
    setTimeout(() => {
      active.value = false;
    }, 1000);
  }
});
</script>

<template>
  <component
    v-bind="rest"
    @click="handleClick"
    :aria-controls="ariaControls"
    :aria-expanded="ariaExpanded"
    :aria-haspopup="ariaHaspopup"
    :aria-hidden="ariaHidden"
    :aria-label="ariaLabel"
    :class="[className, variantStyles]"
    :href="href"
    :is="element"
    :rel="!!href && target === '_blank' ? 'noreferrer' : undefined"
    :target="target"
    :type="type"
  >
    <slot></slot>
    <div v-if="isFillButton">
      <div v-for="index in 6" :class="`star star-${index}`" :key="index">
        <StarVector />
      </div>
    </div>
  </component>
</template>
