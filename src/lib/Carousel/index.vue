<script setup lang="ts">
// Packages
import { computed, ref } from "vue";

// Components
import Button from "../Button/index.vue";

// Styles
import {
  ButtonContainerStyles,
  ButtonIconStyles,
  ButtonStyles,
  CardContentStyles,
  CardStyles,
  CarouselStyles,
  ContainerStyles,
  DescriptionStyles,
  HeadingStyles,
} from "./styles";

// Utils
import { useMediaQuery } from "../../utils";

// Types
import { ButtonVariantsEnum } from "../Button/types";
import type { Props } from "./types";

// Props
const props = defineProps<Props>();
const { className = "", items } = props;

// Hooks
const isTwoExtraSmall = useMediaQuery("(min-width: 384px)");
const isSmall = useMediaQuery("(min-width: 640px)");
const isLarge = useMediaQuery("(min-width: 1024px)");

// State
const cards = ref([...items]); // use spread to avoid shared reference

// Computed
const displacement = computed(() =>
  isLarge.value ? 220 : isSmall.value ? 170 : 140
);

// Helpers
const handleNext = () => {
  cards.value = [...cards.value.slice(1), cards.value[0]];
};

const handlePrevious = () => {
  cards.value = [cards.value[items.length - 1], ...cards.value.slice(0, -1)];
};
</script>

<template>
  <div :class="[className, ContainerStyles]">
    <div :class="CarouselStyles">
      <div
        v-for="({ cta, description, image, title }, index) in cards"
        :class="CardStyles"
        :key="title"
        :style="{
          backgroundImage: `url('${image.src}')`,
          left:
            index >= 2
              ? `calc(${isTwoExtraSmall ? '50%' : '20px'} + ${(index - 2) * displacement}px)`
              : '0px',
        }"
      >
        <div :class="CardContentStyles">
          <h2 :class="HeadingStyles">{{ title }}</h2>
          <p :class="DescriptionStyles">{{ description }}</p>
          <Button v-bind="cta" v-if="cta" :variant="ButtonVariantsEnum.outline">
            {{ cta.title }}
          </Button>
        </div>
      </div>
    </div>
    <div :class="ButtonContainerStyles">
      <Button
        @click="handlePrevious"
        :class="ButtonStyles"
        :variant="ButtonVariantsEnum.fill"
      >
        <i aria-hidden="true" :class="ButtonIconStyles"></i>
      </Button>
      <Button
        @click="handleNext"
        :class="ButtonStyles"
        :variant="ButtonVariantsEnum.fill"
      >
        <i aria-hidden="true" :class="[ButtonIconStyles, 'rotate-180']"></i>
      </Button>
    </div>
  </div>
</template>
